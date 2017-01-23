function positionMessage() {
  let elem = document.getElementById('msg');
  elem.style.position = "absolute";
  elem.style.left = "50px";
  elem.style.top = "100px";
  setTimeout("moveMessage()",1000);
}
addLoadEvent(positionMessage);
