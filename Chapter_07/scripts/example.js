function insertParagraph(text) {
    var str = "<p>";
    str += text;
    str += "</p>";
    document.write(str);
}

// window.onload = function(){
//   let testdiv = document.getElementById('testdiv');
//   alert(testdiv.innerHTML);
// };

window.onload =function () {
    let testdiv = document.getElementById('testdiv');
    testdiv.innerHTML = '<p>This is <em>my</em> content.</p>';
}

window.onload = function () {
    let para = document.createElement('p');
    let info = 'nodeName ';
    info += para.nodeName;
    info += ' nodeType: ';
    info += para.nodeType;
    alert(info);
}

window.onload = function(){
    let para = document.createElement('p');
    let text = document.createTextNode('Hello World');
    para.appendChild(text);
    let testdiv = document.getElementById('testdiv');
    testdiv.appendChild(para);
}

window.onload = function(){
    let para = document.createElement('p');
    let txt1 = document.createTextNode('This is ');
    para.appendChild(txt1);
    let emphasis = document.createElement('em');
    let txt2 =document.createTextNode('my ');
    emphasis.appendChild(txt2)
    para.appendChild(emphasis);
    let txt3 = document.createTextNode(' content');
    para.appendChild(txt3);
    let testdiv = document.getElementById('testdiv');
    testdiv.appendChild(para);
}
