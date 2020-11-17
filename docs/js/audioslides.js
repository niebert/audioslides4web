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
    console.log("Save ZIP is called for Download");
  }, function (err) {
    console.error("ERROR: generation of zip-file '" + vFilename + "' - "+err);
  });
}

function cloneJSON(pJSON) {
  var vJSON = {};
  if (pJSON) {
    vJSON = JSON.parse(JSON.stringify(pJSON));
  } else {
    console.log("ERROR: cloneJSON(pJSON) - pJSON undefined!");
  };
  return vJSON;
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
  var vMaxLength = 45;
  var vPath = "audioslides4web";
  var vName = "";
  var vZIPFileName = el("tZIPFileName").value;
  if (vZIPFileName) {
    vPath = string2filename(vZIPFileName);
  } else {
    var vTitle = el("tTitle").value;
    if (vTitle) {
      vPath = string2filename(vTitle);
    }
  }
  if (vPath) {
    if (vPath.length > vMaxLength) {
      console.warn("vPath exceeds the max length=" + vMaxLength + " with vPath='" + vPath + "' in get_root_dir()");
      vPath = vPath.substr(0,vMaxLength);
    }
  } else {
    vPath = "audioslides4web";
    console.error("ERROR: get_root_dir() vPath not defined - use default name");
  }
  console.log("Root Directory: '" + vPath + "'");
  return vPath;
}

function populateSlides4JSON(pDOM2ID,pJSON) {
  var arr_audio = vDataJSON.files.audio;
  var arr_img   = vDataJSON.files.image;
  pJSON = readDOM2JSON(pDOM2ID,pJSON);
  pJSON.data.slides = [];
  pJSON.first = getInteger4DOM("tFirst");
  pJSON.last = getInteger4DOM("tLast");
  var vAudioType = "mpeg";
  var vAudioFound = -1;
  var vAudioExt = "-";
  var vImgType = "png-File";
  var vImgFound = -1;
  var vImgExt = "-";
  for (var i = pJSON.first; i < (pJSON.last+1); i++) {
    //alert("Create Slide "+i);
    vAudioType = "-";
    vAudioExt = "-";
    vAudioFound = -1;
    for (var k = 0; k < arr_audio.length; k++) {
      // extract the audio number in filename
      if (arr_audio[k]) {
        // -1 is the default number if the name contains no number.
        nr = extract_number(arr_audio[k].name,-1);
        if (nr == i) {
          // if the number matches with the filename set the vAudioType
          vAudioFound = k;
        }
      }
    }
    for (k = 0; k < arr_img.length; k++) {
      // extract the audio number in filename
      if (arr_img[k]) {
        // -1 is the default number if the name contains no number.
        nr = extract_number(arr_img[k].name,-1);
        if (nr == i) {
          // if the number matches with the filename set the vAudioType
          vImgFound = k;
        }
      }
    }
    // Set the audio type if audio comment exist
    if (vAudioFound >=  0) {
      vAudioType = getType4AudioExt(arr_audio[vAudioFound].name);
      vAudioExt  = getExtension(arr_audio[vAudioFound].name);
      console.log("Slide " + i + " with Audio of Type '" + vAudioType + "'");
    } else {
      console.log("Slide " + i + " no Audio ");
    }
    if (vImgFound >=  0) {
      vImgType = getExtension(arr_img[vImgFound].name) + "-File";
      vImgExt  = getExtension(arr_img[vImgFound].name);
      vImage   = get_image_name4file(arr_img[vImgFound].name);
      console.log("Slide " + i + " with source image '" + arr_img[vImgFound].name + "' and ZIP-file '" + vImage + "'");
    } else {
      vImgType = "gif-File";
      vImgExt  = "gif";
      vImage   = "data:image/gif;base64,R0lGODlhAQABAAD/ACwAAAAAAQABAAACADs%3D";
      console.log("Slide " + i + " no Image for Slide ");
    }
    pJSON.data.slides.push({
      "image": vImage,
      "imagetype": vImgType,
      "imageext": vImgExt,
      "number": i,
      "audiotype": vAudioType,
      "ext": vAudioExt
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
    // vLast is the default number if the name contains no number.
    nr = extract_number(arr_img[i].name,vLast);
    if (nr > vLast) {
      vLast = nr;
    };
    // vFirst is the default number if the name contains no number.
    nr = extract_number(arr_img[i].name,vFirst);
    if (nr < vFirst) {
      vFirst = nr;
    };
  }
  for (i = 0; i < arr_audio.length; i++) {
    // vLast is the default number if the name contains no number.
    nr = extract_number(arr_audio[i].name,vLast);
    if (nr > vLast) {
      vLast = nr;
    };
    // vFirst is the default number if the name contains no number.
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
        //var file = new Blob([vOutput], {type: "text/plain;charset=utf-8"});
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


function get_file4offline(pFileName) {
  var vFileName = "index.html" || pFileName;
  var position = vFileName.indexOf(".");
  var vFileName_offline = "slides_offline.html";
  if (position > 0) {
    vFileName_offline = vFileName.substring(0, position) + "_offline" + vFileName.substring(position);
  }
  return vFileName_offline;
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
    var vRootDir = get_root_dir();
    //var vOutput = Handlebars4Code.compile_code("audioslides",vJSON);
    var out = getREADME();
    save_html2zip(vRootDir+"/README.txt",out);
    var index_out = get_html4template("indexhtml",vJSON);
    el("outtext").value = index_out;
    var vFileName = el("tFileName").value;
    save_html2zip(vRootDir+"/"+vFileName,index_out);

    var vFileName_offline = get_file4offline(vFileName);
    console.log("vFileName_offline='" + vFileName_offline + "'");
    var dzslides_out = get_html4template("audioslides",vJSON);
    save_html2zip(vRootDir+"/"+vFileName_offline,dzslides_out);

    save_slides2zip(vRootDir,vJSON);
    save_audio2zip(vRootDir+"/audio/");
    save_images2zip(vRootDir+"/images/");
    download_zip(vRootDir+".zip",zip);
  } else {
    console.error("ERROR: data in vJSON with slides info is not defined!");
  }
  //window.open(vURL);
  return false;
}

function save_html2zip(pFileName,pOut) {
  console.log("Save HTML '"+pFileName+"' to ZIP");
  zip.file(pFileName, pOut);
}

function find_index4array(pnr,pArray) {
  var found = -1;
  if (pArray) {
    for (j = 0; j < pArray.length; j++) {
      if (pArray[j]) {
        // -1 is the default number if the name contains no number.
        checknr = extract_number(pArray[j].name,-1);
        if (checknr == nr) {
          found = j;
          console.log("Index "+j+" found!");
        }
      }
    }
  } else {
    console.error("ERROR: find_index4array() pArray not defined!");
  }
  return found;
}

function save_slides2zip(pPath,pJSON) {
  var vJSON = cloneJSON(pJSON);
  var arr_img = vDataJSON.files.image;
  var arr_audio = vDataJSON.files.audio;
  //var vBaseName = el("tImageBaseName").value;
  var vBaseName = "slide";
  var vFileName = "";
  var vSlideIndex = 0;
  var vMaxSlides = -1;
  var index_arr = [];
  for (i = 0; i < arr_img.length; i++) {
    if (arr_img[i]) {
      // -1 is the default number if the name contains no number.
      nr = extract_number(arr_img[i].name,-1);
      index_arr.push(nr);
      console.log("Push nr="+nr);
      vMaxSlides++;
    }
  }
  index_arr.sort(function(a, b){
    return a - b;
  });
  console.log("vMaxSlides="+vMaxSlides + " index_arr=[" + index_arr.join(",")+ "]");
  for (var k = 0; k < index_arr.length; k++) {
    found = -1;
    nr = index_arr[k];
    var found_img = find_index4array(nr,arr_img);
    //console.log("Found Image "+nr+" in index "+found_img);
    if (found_img >= 0) {
      if (vSlideIndex == 0) {
        vJSON.displayback="display:none";
      } else {
        vJSON.displayback=" ";
      }
      if (vSlideIndex == vMaxSlides) {
        vJSON.displayforward=" ";
      } else {
        vJSON.displayforward=" ";
      }
      //nr = extract_number(arr_img[found_img].name,-1);

      vJSON.current = {
        "number":nr,
        "image": {
          "name": get_image_name4file(arr_img[found_img].name),
          "imgtype": getExtension(arr_img[found_img].name) + "-File",
          "ext": getExtension(arr_img[found_img].name)
        },
        "audio":{
          "name":"undefined0.mp3",
          "audiotype":"undeftype",
          "ext":"-"
        }
      }; //image and audio number
      var found_audio = find_index4array(nr,arr_audio);
      if (found_audio >= 0) {
        vJSON.current.audio = cloneJSON(arr_audio[found_audio]);
        vJSON.current.audio.audiotype = getType4AudioExt(arr_audio[found_audio].name);
        vJSON.current.audio.ext = getExtension(arr_audio[found_audio].name);

        console.log("Audio Found "+vJSON.current.audio.name + " Type: " + vJSON.current.audio.audiotype + " Ext: " + vJSON.current.audio.ext);
      }
      vJSON.slideindex = vSlideIndex;
      vJSON.maxslides  = vMaxSlides + 1; // +1 because last info slide - final page
      var vAudioIndex = get_audioindex4slide(nr);
      if (vAudioIndex >= 0) {
        console.log("Slide" + vSlideIndex + ": Audio" + vAudioIndex + " for Image" + nr + " exists.");
      } else {
        vJSON.current.audio.ext = "-";
      }
      vFileName = pPath + "/" + vBaseName + vSlideIndex + ".html";
      vOut = get_html4template("singleslide",vJSON);
      save_html2zip(vFileName,vOut);
      // append final slide - last info slide
      if (vSlideIndex == vMaxSlides) {
        vJSON.displayback=" ";
        vJSON.displayforward="display:none";
        vJSON.slideindex++;
        vSlideIndex++;
        vFileName = pPath + "/" + vBaseName + vSlideIndex + ".html";
        vOut = get_html4template("lastslide",vJSON);
        save_html2zip(vFileName,vOut);
      }

      vSlideIndex++;
    }
  }
}

function get_audioindex4slide(pImageIndex) {
  var vAudioIndex = -1;
  var arr_audio = vDataJSON.files.audio;
  for (i = 0; i < arr_audio.length; i++) {
    if (arr_audio[i]) {
      // -1 is the default number if the name contains no number.
      nr = extract_number(arr_audio[i].name,-1);
      if (pImageIndex === nr) {
        vAudioIndex = i;
      }
    }
  }
  return vAudioIndex;
}

function save_audio2zip(pPath) {
  var arr_audio = vDataJSON.files.audio;
  var vBaseName = el("tAudioBaseName").value;
  for (i = 0; i < arr_audio.length; i++) {
    if (arr_audio[i]) {
      // -1 is the default number if the name contains no number.
      nr = extract_number(arr_audio[i].name,-1);
      vFileName = pPath + vBaseName + nr + "." + getExtension(arr_audio[i].name);
      zip.file(vFileName, arr_audio[i].file, {base64: true});
    }
  }
}

function get_image_name4file(pFilename) {
  var img_name = "img_undef.png";
  var vBaseName = el("tImageBaseName").value;
  if (pFilename) {
    var nr = extract_number(pFilename,-1);
    img_name = vBaseName + nr + "." + getExtension(pFilename);
  } else {
    console.error("ERROR: get_image_name4file() - pFilename undefined!");
  }
  return img_name;
}

function save_images2zip(pPath) {
  var arr_img = vDataJSON.files.image;
  var vFileName = "";
  for (i = 0; i < arr_img.length; i++) {
    if (arr_img[i]) {
      // -1 is the default number if the name contains no number.
      vFileName = pPath + get_image_name4file(arr_img[i].name);
      console.log("save_images2zip() - File: " + vFileName);
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

function get_html4template(pTplID,pJSON) {
  var out = "undefined HTML for Template '" + pTplID + "' in get_html4template() call";
  if (pJSON) {
    if (vDataJSON.tpl.hasOwnProperty(pTplID)) {
      out = Handlebars4Code.compile_code(pTplID,pJSON);
    } else {
      out += " Template '" + pTplID + "' does not exist!";
    }
  } else {
    console.error("ERROR - get_html4template(): data in vJSON with slides info is not defined!");
  }
  //var out = get_header_html();
  //out += get_slides_html();
  //out += get_tail_html();
  return out;
}

function get_slide_html(pJSON) {
  var out = "undefined slide" + pJSON.current + ".html in get_slide_html()";
  if (pJSON) {
    out = Handlebars4Code.compile_code("singleslide",pJSON);
  } else {
    console.error("ERROR - get_slide_html(): data in pJSON with slides info is not defined!");
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
          case "first": // first slide index - default 0 - title slide
            vJSON[id4JSON] = getInteger4DOM(id);
          break;
          case "last": // last slide index
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

function getREADME4Type(pFolder,pFileType,pTypeID) {
  var vOut = "\nREADME "+pTypeID+"-Folder \""+pFolder+"/\"\n";
  vOut +="\nCopy or replace all of your "+pFileType+" in this folder \""+pFolder+"/\"\n";
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

function getREADME() {
  var out = "";
  out +="README AudioSlides4Web\n";
  out +="----------------------\n\n";
  out += "You can create your own AudioSlides4Web presentation with: \n";
  out += "  URL: https://niebert.github.io/audioslides4web\n";
  out += "You can run AudioSlides4Web creator offline as AppLSAC. \n\n";
  out += getREADME4Type("Image","image","Image");
  out +="\n\n";
  out += getREADME4Type("Audio","audio","Audio");
  return out;
}

function extract_number(name,nr) {
  // 'nr' is the default number if the name contains no number.
  // name = "my_audio_01.mp3"
  if (typeof name === "string") {
         var name_split = name.split(".");
         // name_split[0] = "my_audio_01"
         var digits = name_split[0].replace(/[^0-9]/g,"");
         // digits = "01"
         if (digits.length > 0) {
           nr = parseInt(digits);
         } else {
           console.error("ERROR: extract_number() name='" + name + "' contains no digits!");
         }
  } else {
         console.error("ERROR: extract_number() name='" + name + "' is not a string!");
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
