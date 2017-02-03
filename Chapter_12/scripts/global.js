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
    let linkurl;
    for (var i = 0; i < links.length; i++) {
        linkurl = links[i].getAttribute("href");
        if (window.location.href.indexOf(linkurl) != -1) {
            links[i].className = "here";
        }
    }
}
addLoadEvent(highlightPage);
