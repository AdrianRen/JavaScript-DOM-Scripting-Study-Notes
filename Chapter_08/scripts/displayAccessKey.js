// 明日作业
function displayAccessKey() {
  // 找到所有的 a 标记保存在 links 中
  let links = document.getElementsByTagName("a");
  // 创建一个新关联数组 将其保存在 defs 中
  let defs = new Array();
  for (var i = 0; i < links.length; i++) {
      // 将当前的 a 标记保存在 curr_anchor 中便于阅读
      let curr_anchor =links[i];
      // 获取每个 a 标记的 accesskey 数值保存在 key
      let key = curr_anchor.getAttribute("accesskey");
      if(key == null) continue;
      // 获取 a 标记的 textNode 保存在 desTxt 中
      let desTxt = curr_anchor.lastChild.nodeValue;
      // 返回到 defs 数组中
      defs[key] = desTxt;
  }
  // 将生成的列表追加到 body
  let header = document.createElement("h3");
  let header_txt = document.createTextNode("Accesskey");
  header.appendChild(header_txt);
  let body = document.body;
  body.appendChild(header);

  var list = document.createElement("ul");
  for (var key in defs) {
    var text = defs[key];
    let str = `${key} : ${text} `;
    let item = document.createElement("li");
    let item_text = document.createTextNode(str);
    item.appendChild(item_text);
    list.appendChild(item);
  }
  body.appendChild(list);
}

addLoadEvent(displayAccessKey);
