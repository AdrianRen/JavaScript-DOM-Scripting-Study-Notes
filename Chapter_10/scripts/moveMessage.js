function moveMessage() {
  let elem = document.getElementById('msg');
  //Use parseInt method to trans string to integer
  let xpos = parseInt(elem.style.left);
  let ypos = parseInt(elem.style.top);
  if (xpos === 200 && ypos === 100) {
    return true;
  }
  if (xpos>200) {
    xpos--;
  }
  if (ypos<100) {
    ypos++;
  }
  if (ypos>100) {
    ypos--;
  }
  // elem.style.left = "400px";
  elem.style.left = `${xpos}px`;
  elem.style.top = `${ypos}px`;
  movement = setTimeout("moveMessage()",10);
}
// addLoadEvent(moveMessage);
