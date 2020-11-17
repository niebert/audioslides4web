//---- BEGIN: src/audioslides4web.js -----
var zip = new JSZip();

//-----------------------------------------------
//--- DOWNLOAD ZIP ------------------------------
//---Use FileSaver.js by Eli Grey to save ZIP----
//-----------------------------------------------
function download_zip(pFilename,pZIP) {
  var vFilename = pFilename || "my_loaded_files.zip";
  pZIP.generateAsync({type:"blob"}).then(function (blob) { // 1) generate the zip file
    saveAs(blob, vFilename);                          // 2) trigger the download
  }, function (err) {
    console.error("ERROR: generation of zip-file '" + vFilename + "' - "+err);
  });
}

function el(pID) {
  var vNode = document.getElementById(pID);
  if (vNode) {
    return vNode;
  } else {
    console.log("Error Node ['"+pID+"']");
    return document.getElementById("tUndefined");
  }
}

function getInteger(x) {
  var parsed = parseInt(x, 10);
  if (isNaN(parsed)) {
    return 0;
  }
  return parsed;
}

function getInteger4DOM(pDOMID) {
  var parsed = 0;
  var vNode = el(pDOMID);
  if (vNode) {
    var x = vNode.value;
    parsed = getInteger(x);
  }
  return parsed;
}



function get_root_dir() {
  var vTitle = el("tTitle").value;
  var vPath = "audio_slides";
  if (vTitle) {
    vPath = string2filename(vTitle);
  };
  console.log("Root Directory: '" + vPath + "'");
  return vPath;
}

function populateSlides4JSON(pDOM2ID,pJSON) {
  var arr_audio = vDataJSON.files.audio;
  pJSON = readDOM2JSON(pDOM2ID,pJSON);
  pJSON.data.slides = [];
  pJSON.first = getInteger4DOM("tFirst");
  pJSON.last = getInteger4DOM("tLast");
  var vAudioType = "mpeg";
  var vFound = -1;
  var vExt = "-";
  for (var i = pJSON.first; i < (pJSON.last+1); i++) {
    //alert("Create Slide "+i);
    vAudioType = "-";
    vExt = "-";
    vFound = -1;
    for (var k = 0; k < arr_audio.length; k++) {
      // extract the audio number in filename
      if (arr_audio[k]) {
        nr = extract_number(arr_audio[k].name,-1);
        if (nr == i) {
          // if the number matches with the filename set the vAudioType
          vFound = k;
        }
      }
    }
    // Set the audio type if audio comment exist
    if (vFound >=  0) {
      vAudioType = getType4AudioExt(arr_audio[vFound].name);
      vExt = getExtension(arr_audio[vFound].name);
      console.log("Slide " + i + " with Audio of Type '" + vAudioType + "'");
    } else {
      console.log("Slide " + i + " no Audio ");
    }
    pJSON.data.slides.push({
      "number": i,
      "audiotype": vAudioType,
      "ext": vExt
    });
  }
  return pJSON;
}

function setSlideCount() {
  // get number of loaded slides
  var arr_img = vDataJSON.files.image;
  var vCount_Image = arr_img.length;
  var vFirst = 30000;
  var vLast = -1;
  // get number of loaded audio files
  var arr_audio = vDataJSON.files.audio;
  var vCount_Audio = arr_audio.length;
  // determine maximum and calc slide count
  var vSlideCount = vCount_Image;
  if (vCount_Audio > vCount_Image) {
    vSlideCount = vCount_Audio;
  }
  // check all slide numbers encoded in the filename
  var nr = 0;
  for (i = 0; i < arr_img.length; i++) {
    nr = extract_number(arr_img[i].name,vLast);
    if (nr > vLast) {
      vLast = nr;
    };
    nr = extract_number(arr_img[i].name,vFirst);
    if (nr < vFirst) {
      vFirst = nr;
    };

  }
  for (i = 0; i < arr_audio.length; i++) {
    nr = extract_number(arr_audio[i].name,vLast);
    if (nr > vLast) {
      vLast = nr;
    };
    nr = extract_number(arr_audio[i].name,vFirst);
    if (nr < vFirst) {
      vFirst = nr;
    };
  }

  // the setting of tFirst as integer
  //var vFirst = getInteger4DOM("tFirst");
  // set tLast = vFirst + vSlideCount - 1
  el("tFirst").value = vFirst;
  el("tLast").value = vLast;
}

function convert(pTplID) {
    var vTplID = pTplID || "audioslides";
    var vJSON = getDataJSON();
    var vFileName = el("tFileName").value+".html";
    if (vJSON)  {
        var vOutput = Handlebars4Code.compile_code(vTplID,vJSON);
        // File is a Javascript Class defined in FileSaver.js
        var file = new File([vOutput], {type: "text/plain;charset=utf-8"});
        // method saveAs() is defined in FileSaver.js so import filesaver.js and blob.js to your Javascript project
        //saveAs(file,vFileName);
    } else {
        alert("ERROR: Could not parse JSON");
    }
}

function setTemplate(pTplID) {
  //convert(pTpl);
  el("tTemplate").value = vDataJSON.tpl[pTplID];
}


function callSource() {
  //var vURL = "https://"+el("sWikiLanguage").value + "." + el("sWikiDomain").value+".org/wiki/";
  //vURL += encodeURI(el("tTitle").value);
  //document.location.href=vURL;
  var vBaseName = el("tFileName").value;
  var vFileName = vBaseName+".html";
  vJSON = getDataJSON();
  alert("Save '"+vBaseName+".html' and create subfolder '"+el("tImageBaseName").value+"' and '"+el("tAudioBaseName").value+"'\nand store the images and audio files in the folder.\nDisplay '"+vBaseName+".html' in your browser");
  var vOutput = Handlebars4Code.compile_code("audioslides",vJSON);
  var file = new File([vOutput], {type: "text/plain;charset=utf-8"});
  saveAs(file,vFileName);
}

function callSourceZIP() {
  //var vURL = "output_zip.html?"+get_link_parameter();
  //document.location.href=vURL;
  zip = new JSZip();
  var vJSON = getDataJSON();
  if (vJSON) {
    //var vOutput = Handlebars4Code.compile_code("audioslides",vJSON);
    var index_out = get_index_html(vJSON);
    el("outtext").value = index_out;
    var vRootDir = get_root_dir();
    var vFileName = el("tFileName").value;
    save_html2zip(vRootDir+"/"+vFileName,index_out);
    save_audio2zip(vRootDir+"/audio/");
    save_images2zip(vRootDir+"/images/");
    download_zip(vRootDir+".zip",zip);
  } else {
    console.error("ERROR: data in vJSON with slides info is not defined!");
  }
  //window.open(vURL);
}

function save_html2zip(pFileName,pOut) {
  console.log("Save main HTML '"+pFileName+"'");
  zip.file(pFileName, pOut);
}

function save_audio2zip(pPath) {
  var arr_audio = vDataJSON.files.audio;
  var vBaseName = el("tAudioBaseName").value;
  for (i = 0; i < arr_audio.length; i++) {
    if (arr_audio[i]) {
      nr = extract_number(arr_audio[i].name,-1);
      vFileName = pPath + vBaseName + nr + "." + getExtension(arr_audio[i].name);
      zip.file(vFileName, arr_audio[i].file, {base64: true});
    }
  }
}

function save_images2zip(pPath) {
  var arr_img = vDataJSON.files.image;
  var vBaseName = el("tImageBaseName").value;
  var vFileName = "";
  for (i = 0; i < arr_img.length; i++) {
    if (arr_img[i]) {
      nr = extract_number(arr_img[i].name,-1);
      vFileName = pPath + vBaseName + nr + "." + getExtension(arr_img[i].name);
      zip.file(vFileName, arr_img[i].file, {base64: true});
    }
  }


}

function displaySource() {
  //var vURL = "https://"+el("sWikiLanguage").value + "." + el("sWikiDomain").value+".org/wiki/";
  //vURL += encodeURI(el("tTitle").value);
  var vURL = "output_textarea.html?"+ get_link_parameter();
  //document.location.href=vURL;
  window.open(vURL);
}

function get_index_html(pJSON) {
  var out = "undefined index.html in get_index_html()";
  if (pJSON) {
    out = Handlebars4Code.compile_code("audioslides",pJSON);
  } else {
    console.error("ERROR - get_index_html(): data in vJSON with slides info is not defined!");
  }
  //var out = get_header_html();
  //out += get_slides_html();
  //out += get_tail_html();
  return out;
}

function get_header_html() {
  var out = "";
  //out += ;
  return out;
}

function get_slides_html() {
  var out = "";
  //out += ;
  return out;
}

function get_tail_html() {
  var out = "";
  //out += ;
  return out;
}

function parseJSON(pString) {
    var vString = pString || "{}";
    var vJSON;
    if(vString) {
      try {
          vJSON = JSON.parse(vString);
      } catch(e) {
          alert("JSON Parsing Error: "+e); // error in the above string (in this case, yes)!
      }
      if (vJSON)  {
        return vJSON;
      } else {
        alert("ERROR: Could not parse JSON");
        return null;
      }
    }
}

function getDataJSON() {
  var vJSON = vDataJSON.initdata;
  for (var id in vDOM2ID) {
    if (vDOM2ID.hasOwnProperty(id)) {
        var id4JSON = vDOM2ID[id];
        //vJSON["title"] = vLinkParam.getValue(vDOM2ID["tTitle"]);
        /*
        "tAudioType":"audiotype",
        "tAudioExt":"audioext",
        "tImageExt":"imageext",
        "tAudioBaseName":"audiobasename",
        "tImageBaseName":"imagebasename",
        */
        switch (id4JSON) {
          case "first":
            vJSON[id4JSON] = getInteger4DOM(id);
          break;
          case "last":
            vJSON[id4JSON] =  getInteger4DOM(id);
          break;
          case "audiobasename":
            vJSON.data.audio.basename = el(id).value;
          break;
          case "audiotype":
            vJSON.data.audio.type = el(id).value;
          break;
          case "audioext":
            vJSON.data.audio.ext = el(id).value;
          break;
          case "imagebasename":
            vJSON.data.image.basename = el(id).value;
          break;
          case "imageext":
            vJSON.data.image.ext = el(id).value;
          break;
          default:
            //console.log("vJSON."+id4JSON+"='"+el(id).value+"'");
            //eval("vJSON."+id4JSON+"='"+el(id).value+"'");
            vJSON[id4JSON] = el(id).value;
        }
      }
      console.log("getDataJSON:\n"+JSON.stringify(vJSON,null,4));
  }
  vJSON = populateSlides4JSON(vDOM2ID,vJSON);
  console.log(JSON.stringify(vJSON,null,4));
  return vJSON;
}

function getREADME(pFolder,pFileType,pTypeID) {
  var vOut = "README "+pTypeID+"-Folder \""+pFolder+"/\"\n";
  vOut +="\nCopy all of your "+pFileType+" in this folder \""+pFolder+"/\"\n";
  vOut +="\n - /" + pFolder + "/" +
        el("t"+pTypeID+"BaseName").value +
        el("tFirst").value + "." +
        el("t"+pTypeID+"Ext").value;
  vOut += "\n - ...";
  vOut +="\n - /" + pFolder + "/" +
        el("t"+pTypeID+"BaseName").value +
        el("tLast").value + "." +
        el("t"+pTypeID+"Ext").value+"\n\n";
  return vOut;
}

function extract_number(name,nr) {
       // name = "my_audio_01.mp3"
       var name_split = name.split(".");
       // name_split[0] = "my_audio_01"
       var digits = name_split[0].replace(/[^0-9]/g,"");
       // digits = "01"
       if (digits.length > 0) {
         nr = parseInt(digits);
       }
       return nr;
}

function extract_extension(name,ext) {
       // name = "my_audio_01.mp3"
       var name_split = name.split(".");
       // name_split[1] = "mp3"
       if (name_split.length > 0) {
         ext = name_split[name_split.length - 1];
       }
       return ext;
}
//---- END: src/audioslides4web.js -----
