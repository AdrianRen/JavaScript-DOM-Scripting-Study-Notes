#Chapter 7 动态创建标记

##1. `document.write`
- `document.write` 最大的缺点就是违背了"行为应该和表现分离"
- 从某种意义上讲,使用 `document.write` 方法有点像使用`<font>`标签去设定字体和颜色.虽然这两种技术在 HTML 文档里都工作的不错,但他们都不够优雅
##2. `innerHTML`
- 利用这个技术无法区分"插入一段 HTML 内容" 和 "替换一段 HTML 内容". `testdiv` 元素里有没有 HTML 内容无关紧要.一旦你使用了 `innerHTML` 属性, 他的全部内容将被替换.
##3. `createElement`
- 语法: `document.createElement(nodeName);`
- 无论何时,都建议将创造出来的元素复制个一个变量
    ```javascript
      let para = document.createElement('p');
    ```
  此时创造出来的`p`元素,成为文档碎片(document fragment),还无法显示在浏览器的窗口里,不过它已经像任何其他的节点那样有了自己的 DOM 属性;
##4. `appendChild`
- 语法: `parent.appendChild(child);`
- 例子:
    ```javascript
      let testdiv = document.getElementById('testdiv');
      let para = document.creatElement('p');
      testdiv.appendChild('para');
      // 上面的代码可以写为:
      document.getElementById('testdiv').appendChild(document.createElement('p'));
      //正如所看到的,这样的代码不便于阅读,还是推荐按上面的方式书写
    ```
##5. `createTextNode`
- 语法: `document.createTextNode(text);`
- 下面这个代码,将创造出一个内容为"Hello World"的文本节点:
  ```javascript
  document.createTextNode('Hello World');
  ```
##小结:
  不建议使用`document.write`方法或`innerHTML`属性,在使用 DOM 方法去创建和插入新节点时可灵活选择
  ####创建步骤
  1. 创建一个父级元素
  ```html
  <div id="testdiv">
      <!-- 创建一个父级元素 -->
  </div>
  ```
  2. 创建一个元素
  ```javascript
  let para = document.createElement('p');
  ```
  3. 创建文本节点
  ```javascript
  let txt = document.createTextNode('Hello World');
  ```
  4. 将文本节点拼接到元素节点之上
  ```javascript
  para.appendChild(txt);
  ```
  5. 将整个`p`元素拼接到父级元素`textdiv`之上
  ```javascript
  let testdiv = document.getElementById('testdiv');
  testdiv.appendChild(para);
  ```
