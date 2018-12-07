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


function getJSONID(pid) {
  var id4JSON = vDOM2ID[pid];
  id4JSON = id4JSON.replace(/^audio/,"data.audio.");
  id4JSON = id4JSON.replace(/^image/,"data.audio.");
  return id4JSON
}

function getInteger4DOM(pDOMID) {
  var x = el(pDOMID).value;
  var parsed = parseInt(x, 10);
  if (isNaN(parsed)) { return 0 }
  return parsed
}

function getInteger(x) {
  var parsed = parseInt(x, 10);
  if (isNaN(parsed)) { return 0 }
  return parsed
}

function populateSlides4JSON() {
  vJSON.data.slides = [];
  for (var i = vJSON.first; i < (vJSON.last+1); i++) {
    vJSON.data.slides.push({
      "number": i
    })
  }
};
