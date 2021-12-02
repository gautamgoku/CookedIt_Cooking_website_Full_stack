var name = "*hi* devina *h*\n, _Hello_ *i am bold*"; 
function makeBold(name) {
  var i1 = name.indexOf("*");
  var i2 = name.indexOf("*", i1 + 1);
  if (i1 > -1 && i2 > i1) {
    name = name.replace("*", "<b>").replace("*", "</b>");
    return makeBold(name);
  } else return name;
}

function makeItalic(name) {
  var i1 = name.indexOf("_");
  var i2 = name.indexOf("_", i1 + 1);
  if (i1 > -1 && i2 > i1) {
    name = name.replace("_", "<i>").replace("_", "</i>");
    return makeItalic(name);
  } else return name;
}
function newLineParser(str) {
  str = str.replace(/[\n]/g, "<br>");
  return str;
}

function emailParser(str) {
  const regex = /(?:"?([^"]*)"?\s)?(?:<?(.+@[^>]+)>?)/;
  str = regex.exec(str);
  return { inputString: str[0], name: str[1], emailId: str[2] };
}


module.exports = function(str) {
  str = makeBold(str);
  str = makeItalic(str);
  str = newLineParser(str);
  return str;
};
