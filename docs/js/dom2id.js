var vDOM2ID = {
  "tTitle":"title",
  "tCourse":"course",
  "tAuthor":"author",
  "tFirst":"first",
  "tLast":"last",
  "tAudioType":"audiotype",
  "tAudioExt":"audioext",
  "tImageExt":"imageext",
  "tAudioBaseName":"audiobasename",
  "tImageBaseName":"imagebasename",
  "tDate":"date"
};

function readDOM2JSON(pJSON){
  for (var id in vDOM2ID) {
    if (vDOM2ID.hasOwnProperty(id)) {
      var vID = getJSONID(vDOM2ID[id]);
      //vID = vID.replace(/audio/,"audio.");
      //vID = vID.replace(/image/,"image.");
      switch (vID) {
        case "first":
          vJSON[vID] = getInteger(el(id).value);
        break;
        case "last":
        vJSON[vID] = getInteger(el(id).value);
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
           vJSON[vID] = el(id).value;
      }; // /switch
    }; // /if
  }; //  /for
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

  return id4JSON
}
