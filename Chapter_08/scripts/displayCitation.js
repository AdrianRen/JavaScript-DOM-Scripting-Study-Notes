function displayCitation () {
  if (!document.getElementsByTagName || !document.createElement || !document.createTextNode) return false;
  let quotes = document.querySelectorAll("blockquote");
  for (var i = 0; i < quotes.length; i++) {
      if (!quotes[i].getAttribute("cite")) continue;
      let url = quotes[i].getAttribute("cite");
      // 获取 block 元素中所有的元素节点找出来.
      let quoteElements = quotes[i].getElementsByTagName("*");
      if (quoteElements.length<1) continue;
      // blockquote 元素所包含的最后一个元素节点讲对应着 quoteElements 数组中最后一个元素.数组中的最后一个元素的下标等于数组的长度减去1
      let elem = quoteElements[quoteElements.length-1];
      let link = document.createElement("a");
      let link_text = document.createTextNode("source");
      link.appendChild(link_text);
      link.setAttribute("href",url);
      let supercript = document.createElement("sup");
      supercript.appendChild(link);
      elem.appendChild(supercript);
  }
}

addLoadEvent(displayCitation);
