// /*
//   1. 检查当前浏览器是否兼容 getElementsByTagName
//   2. 检查当前浏览器是否兼容 getElementById
//   3. 检查当前网页是否存在一个 id 为 imagegallery 的元素
//   4. 遍历 imagegallery 元素中所有的链接
//   5. 设置 onclick 事件, 让它在有关链接被点击时完成以下操作:
//       1. 把这个链接作为参数传递给 showPic 函数
//       2. 取消链接被点击时的默认行文, 不让浏览器打开这个链接
// */
// function addLoadEvent(func) {
//     let oldonload = window.load;
//     if (typeof window.onload != 'function') {
//         window.onload = func;
//     } else {
//         window.load = function() {
//             oldonload();
//             func();
//         }
//     }
// }
//
// //insertAfter 函数
// function insertAfter(newElement, targetElement) {
//     let parent = targetElement.parentNode;
//     if (parent.lastChild == targetElement) {
//         parent.appendChild(newElement);
//     } else {
//         parent.insertBefore(newElement, targetElement.nextSibling);
//     }
// }
//
// function preparePlaceholder() {
//     if (!document.createElement) return false;
//     if (!document.createTextNode) return false;
//     if (!document.getElementById) return false;
//     if (!document.getElementById('imagegallery')) return false;
//     let placeholder = document.createElement('img');
//     placeholder.setAttribute('id', 'placeholder');
//     placeholder.setAttribute('src', 'images/placeholder.gif');
//     placeholder.setAttribute('alt', 'my image gallery!');
//     let description = document.createElement('p');
//     description.setAttribute('id', 'description');
//     let destext = document.createTextNode('Choose an image.');
//     description.appendChild(destext);
//     let gallery = document.getElementById('imagegallery');
//     insertAfter(placeholder, gallery);
//     insertAfter(description, placeholder);
// }
//
// function prepareGallery() {
//     if (!document.getElementsByTagName) return false;
//     if (!document.getElementById) return false;
//     if (!document.getElementById("imagegallery")) return false;
//     let gallery = document.getElementById("imagegallery");
//     let links = gallery.getElementsByTagName("a");
//     for (var i = 0; i < links.length; i++) {
//         links[i].onclick = function() {
//             return showPic(this) ? false : true;
//         }
//         links[i].onkeypress = links[i].onclick;
//     }
// }
//
// function showPic(whichpic) {
//     if (!document.getElementById("placeholder")) return false;
//     // 1. 获取当前<a>元素的 href 属性的值,并保存在 source 变量中
//     let source = whichpic.getAttribute("href");
//     // 2. 获取 id 为 placeholder 的元素并保存在 placeholder 之中
//     let placeholder = document.getElementById("placeholder");
//     if (placeholder.nodeName != "IMG") return false;
//     // 3. 将 source 赋值给 placeholder 从而改变 img 的 src 值
//     placeholder.setAttribute("src", source);
//     if (document.getElementById("description") {
//             // 4. 获取当前<a>元素的 title 属性的值,并保存在 text 变量中
//             let text = whichpic.getAttribute("title") ? whichpic.getAttribute("title") : "";
//             // 5. 获取id名为 description 的元素并保存在 description 变量中
//             let description = document.getElementById("description");
//             // 6. 将 text 赋值给 description.firstChild.nodeValue;
//             if (description.firstChild.nodeType == 3) {
//                 description.firstChild.nodeValue = text;
//             }
//         }
//         return true;
//     }
//     addLoadEvent(preparePlaceholder);
//     addLoadEvent(prepareGallery);

function addLoadEvent(func) {
    let oldonload = window.onload;
    if (typeof window.onload != "function") {
        window.onload = func;
    } else {
        window.onload = function() {
            oldonload();
            func();
        }
    }
}

function insertAfter(newElement,targetElement) {
    let parent = targetElement.parentNode;
    if (parent.lastChild == targetElement) {
        parent.appendChild(newElement);
    } else {
      parent.insertBefore(newElement,targetElement.nextSibling)
    };
}

function preparePlaceholder() {
    // 创建一个 img 元素 存在变量: placeholder
    let placeholder = document.createElement("img");
    // 添加 id placeholder
    placeholder.setAttribute("id","placeholder");
    // 添加 src  images/placeholder.gif
    placeholder.setAttribute("src","images/placeholder.gif");
    // 添加 alt my image gallery
    placeholder.setAttribute("alt","my image gallery");
    // 创建一个 p 元素 存在 description
    let description = document.createElement("p");
    // 添加 id description
    description.setAttribute("id","description");
    // 创建TextNode Choose an image保存在 destext
    let destext = document.createTextNode("Choose an image");
    description.appendChild(destext);
    let gallery = document.getElementById("imagegallery");
    insertAfter(placeholder,gallery);
    insertAfter(description,placeholder);
}

function prepareGallery() {
    let gallery = document.getElementById("imagegallery");
    let links = gallery.getElementsByTagName("a");
    for (var i = 0; i < links.length; i++) {
      links[i].onclick = function () {
          links[i].onclick = function () {
              return !showPic(this);
          }
          links[i].onkeypress = links[i].onclick;
      }
    }
}

function showPic(whichpic) {
    if (!document.getElementById("placeholder")) return false;
    let source = whichpic.getAttribute("href");
    let placeholder = document.getElementById("placeholder");
    placeholder.setAttribute("src",source);
    if (!document.getElementById("description")) return false;
    if (whichpic.getAttribute("title")) {
      let text = whichpic.getAttribute("title");
    }else {
      let text = "";
    }
    let description = document.getElementById("description");
    if (description.firstChild.nodeType == 3) {
        description.firstChild.nodeValue = text;
    }
    return false;
}
addLoadEvent(preparePlaceholder);
addLoadEvent(prepareGallery);
