// Call at the end of file
  Handlebars4Code.create_compiler(vDataJSON.tpl);
  vDataJSON.out = Handlebars4Code.get_compiler();

/*
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
*/

  //---------------------------------------
  //------READ LINKPARAMETER---------------
  //---------------------------------------
  var vLinkParam = new LinkParam();
  vLinkParam.init(document);
  //------ POPULATE JSON ------------------
  var vJSON = vDataJSON.initdata;
  for (var id in vDOM2ID) {
    if (vDOM2ID.hasOwnProperty(id)) {
      if (vLinkParam.exists(vDOM2ID[id])) {
        var id4JSON = getJSONID(id);
        //vJSON["title"] = vLinkParam.getValue(vDOM2ID["tTitle"]);
        switch (id) {
          case "tFirst":
            vJSON[id4JSON] = getInteger(vLinkParam.getValue(vDOM2ID[id]));
          break;
          case "tLast":
            vJSON[id4JSON] = getInteger(vLinkParam.getValue(vDOM2ID[id]));
          break;
          default:
            vJSON[id4JSON] = vLinkParam.getValue(vDOM2ID[id]);
        }
      };
    };
  }
