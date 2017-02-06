function addLoadEvent(func) {
    let oldonload = window.onload;
    if (typeof window.onload != 'function') {
        window.onload = func;
    } else {
        window.onload = function() {
            oldonload();
            func();
        }
    }
}

// insert after function
function insertAfter(newElement, targetElement) {
    let parent = targetElement.parentNode;
    if (parent.lastChild == targetElement) {
        parent.appendChild(newElement);
    } else {
        parent.insertBefore(newElement, targetElement.nextSibling);
    }
}

// addclass function
function addClass(element, value) {
    if (!element.calssName) {
        element.className = value;
    } else {
        newClassName = element.className;
        newClassName += " ";
        newClassName += value;
        element.calssName = newClassName;
    }
}

// Highlight function
function highlightPage() {
    if (!document.getElementsByTagName) return false;
    if (!document.getElementById) return false;
    let headers = document.getElementsByTagName("header");
    if (headers.length == 0) return false;
    let navs = headers[0].getElementsByTagName("nav");
    if (navs.length == 0) return false;
    let links = navs[0].getElementsByTagName("a");
    for (var i = 0; i < links.length; i++) {
      let linkurl;
      for (var i = 0; i < links.length; i++) {
          linkurl = links[i].getAttribute("href");
          if (window.location.href.indexOf(linkurl) != -1) {
              links[i].className = "here";
              let linktext = links[i].lastChild.nodeValue.toLowerCase();
              document.body.setAttribute("id",linktext);
          }
      }
    }
}
addLoadEvent(highlightPage);

function moveElement(elementID,final_x,final_y,interval) {
  if (!document.getElementById) return false;
  if (!document.getElementById(elementID)) return false;
  var elem = document.getElementById(elementID);
  let xpos = parseInt(elem.style.left);
  let ypos = parseInt(elem.style.top);
  if (xpos == final_x && ypos == final_y) {
    return true;
  }
  if (xpos < final_x) {
    xpos++;
  }
  if (xpos > final_x) {
    xpos--;
  }
  if (ypos < final_y) {
    ypos++;
  }
  if (ypos > final_y) {
    ypos--;
  }
  elem.style.left = xpos + "px";
  elem.style.top = ypos + "px";
  let repeat = "moveElement('"+elementID+"',"+final_x+","+final_y+","+interval+")"
  movement = setTimeout(repeat,interval);
}
