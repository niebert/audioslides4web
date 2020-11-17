var vDOM2ID = {
  "tTitle":"title",
  "tTopic":"topic",
  "tCourse":"course",
  "tAuthor":"author",
  "tFirst":"first",
  "tLast":"last",
  "tAudioType":"audiotype",
  "tAudioExt":"audioext",
  "tImageExt":"imageext",
  "tFileName":"filename",
  "tZIPFileName":"zipfilename", 
  "tAudioBaseName":"audiobasename",
  "tImageBaseName":"imagebasename",
  "tDate":"date"
};

var vID2DOM = {};

// create a revers map
for (var variable in vDOM2ID) {
  if (vDOM2ID.hasOwnProperty(variable)) {
    vID2DOM[vDOM2ID[variable]] = variable;
  }
}

function el4ijsond (id) {
  return el(vID2DOM[id]);
}

function readDOM2JSON(pDOM2ID,pJSON){
  for (var id in pDOM2ID) {
    console.log("readDOM2JSON id='" + id + "'");
    if (pDOM2ID.hasOwnProperty(id)) {
      var vID = getJSONID(pDOM2ID[id]);
      //vID = vID.replace(/audio/,"audio.");
      //vID = vID.replace(/image/,"image.");
      switch (vID) {
        case "first":
          pJSON[vID] = getInteger(el(id).value);
        break;
        case "last":
          pJSON[vID] = getInteger(el(id).value);
        break;
        case "audiobasename":
          pJSON.data.audio.basename = el(id).value;
        break;
        case "audiotype":
          pJSON.data.audio.type = el(id).value;
        break;
        case "audioext":
          pJSON.data.audio.ext = el(id).value;
        break;
        case "imagebasename":
          pJSON.data.image.basename = el(id).value;
        break;
        case "imageext":
          pJSON.data.image.ext = el(id).value;
        break;
        default:
           if  (pJSON.hasOwnProperty(vID)) {
             pJSON[vID] = el(id).value;
           } else {
             console.log("WARNING: pJSON has no property '"+vID+"'");
           }
      } // /switch
    } // /if
  } //  /for
  return pJSON;
}

function getJSONID(pid) {
  var id4JSON = pid;
  if (id4JSON) {
    id4JSON = id4JSON.replace(/^audio/,"data.audio.");
    id4JSON = id4JSON.replace(/^image/,"data.audio.");
  } else {
    id4JSON = 'ID_undef';
    console.log("ERROR: getJSONID(pid) pid undefined - return pid='ID_undef'");
  }

  return id4JSON;
}
