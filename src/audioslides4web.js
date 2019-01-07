

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


function populateSlides4JSON(pDOM2ID,pJSON) {
  pJSON = readDOM2JSON(pDOM2ID,pJSON);
  pJSON.data.slides = [];
  for (var i = pJSON.first; i < (pJSON.last+1); i++) {
    //alert("Create Slide "+i);
    pJSON.data.slides.push({
      "number": i
    });
  }
  return pJSON;
}
