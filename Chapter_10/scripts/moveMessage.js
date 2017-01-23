function moveMessage() {
  let elem = document.getElementById('msg');
  elem.style.left = "200px";
}

addLoadEvent(moveMessage);
