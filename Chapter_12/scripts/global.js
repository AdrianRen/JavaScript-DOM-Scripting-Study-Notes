function addLoadEvent(func) {
  let oldonload = window.onload;
  if (typeof window.onload != 'function') {
    window.onload = func;
  } else {
    window.onload = function () {
      oldonload();
      func();
    }
  }
}

// insert after function
function insertAfter(newElement,targetElement) {
  let parent = targetElement.parentNode;
  if (parent.lastChild == targetElement) {
    parent.appendChild(newElement);
  } else {
    parent.insertBefore(newElement,targetElement.nextSibling);
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
  if(!document.getElementsByTagName) return false;
  if(!document.getElementById) return false;
  let headers = document.getElementsByTagName("header");
  if(headers.length == 0) return false;
}
