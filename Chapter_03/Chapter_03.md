##3.4.5 获取元素
	1. getElementById
			语法: document.getElementById("idName");  这个调用将返回一个对象
	2. getElementsByTagName
			语法: document.getElementsByTagName("li"); 这个调用返回的是一个对象数组
	3. getElementsByClassName
			语法: document.getElementsByClassName("sale"); 这个调用返回的是一个对象数组
			注: 这个方法可以查找带有多个类型名的元素.要制定多个类型名,只需将类名用空格隔开,例:
				document.getElementsByClassName("important sale");
				类名的顺序不重要,如果一个元素内有其他多个元素,也没有关系
##3.5 获取和设置属性
	1. getAttribute
			getAttribute 是一个函数. 他只有一个参数 ---- 你打算查询的属性的名字
			语法:  object.getAttribute("attribute");
			getAttribut 不属于 document 对象,所以无法使用 document 对象调用; 只能通过元素节点对象调用.
	2. setAttribute
			setAttribute 同 getAttribute, 因不属于 document 对象,所以无法使用 document 对象调用,只能通过元素节点对象调用
			语法:  object.setAttribute(attribute,value);
