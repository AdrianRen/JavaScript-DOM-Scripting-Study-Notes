function displayAbbreviations() {
    if (!document.createElement || !document.querySelectorAll || !document.createTextNode) return false;
    // 取得所有缩略语
    let abbreviation = document.querySelectorAll("abbr");
    // console.log(abbreviation);
    // 创建一个空数组,保存遍历 abbr 后保存 title 和文本
    let defs = new Array();
    if (abbreviation.length < 1) return false;
    for (var i = 0; i < abbreviation.length; i++) {
        let current_abbr = abbreviation[i];
        // console.log(current_abbr);
        let definition = current_abbr.getAttribute("title");
        // console.log(definition);
        let key = current_abbr.innerHTML; // current_abbr.lastChild.nodeValue;
        // console.log(key);
        defs[key] = definition;
    }
    // console.dir(defs);
    let dlist = document.createElement("dl");
    for (let key in defs) {
        let definition = defs[key];
        let dtitle = document.createElement("dt");
        let dtitle_text = document.createTextNode(key);
        dtitle.appendChild(dtitle_text);
        let ddesc = document.createElement("dd");
        let ddesc_text = document.createTextNode(definition);
        ddesc.appendChild(ddesc_text);
        dlist.appendChild(dtitle);
        dlist.appendChild(ddesc);
    }
    let header = document.createElement("h2")
    let header_text = document.createTextNode("Abbreviation");
    header.appendChild(header_text);
    document.body.appendChild(header);
    document.body.appendChild(dlist);
}

addLoadEvent(displayAbbreviations);
