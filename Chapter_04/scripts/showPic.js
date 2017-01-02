function showPic(whichpic) {
    // 1. 获取当前<a>元素的 href 属性的值,并保存在 source 变量中
    let source = whichpic.getAttribute("href");
    // 2. 获取 id 为 placeholder 的元素并保存在 placeholder 之中
    let placeholder = document.getElementById("placeholder");
    // 3. 将 source 赋值给 placeholder 从而改变 img 的 src 值
    placeholder.setAttribute("src",source);
    // 4. 获取当前<a>元素的 title 属性的值,并保存在 text 变量中
    let text = whichpic.getAttribute("title");
    // 5. 获取id名为 description 的元素并保存在 description 变量中
    let description = document.getElementById("description");
    // 6. 将 text 赋值给 description.firstChild.nodeValue;
    description.firstChild.nodeValue = text;
}

// function countBodyChildren(){
//   let body_element = document.getElementsByTagName("body")[0];
//   alert(body_element.childNodes.length);
//   alert(body_element.nodeType);
// }
// window.onload=countBodyChildren;
