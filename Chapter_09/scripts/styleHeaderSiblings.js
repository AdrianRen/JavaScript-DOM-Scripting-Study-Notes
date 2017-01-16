function styleHeaderSiblings() {
  if (!document.getElementByTagName) return false;
  let headers = document.getElementByTagName("h1");
  let elem;
  for (var i = 0; i < headers.length; i++) {
    elem = getNextElement(headers[i].nextSibling);
    elem.style.fontWeight = "bold";
    elem.style.fontSize = "1.2em";
  }
}
function getNextElement() {
  if (node.nodeType == 1) {
    return node;
  }
  if (node.nextSibling) {
    return getNextElement(node.nextSibling);
  }
  return null;
}
