#第六章 案例研究:图片库改进版
1. 如果想用Javascript给某个网页添加一些行为，就不应该让Javascript代码对这个网页的结构有任何依赖，凸显了采取预防性措施的必要性。

2. 结构化程序设计原则之一：函数应该只有一个入口和一个出口。但集中将出口集中在函数的开头是可以接受的。

3. 共享onload事件
    网页加载完毕时会触发一个```onload```事件，这个事件与```window```对象相关联。即```window.onload = function(){...}```。
    若需要绑定的函数较多时，一个弹性的解决方案是```addLoadEvent```，其实现如下：

    ####下面是```addLoadEvent```函数的代码清单:

    ```javascript
    function addLoadEvent(func) {  
        var oldonload = window.onload;
        if(typeof window.onload != 'function') {  
            window.onload = func;  
        } else{
            window.onload = function() {
                oldonload();
                func();
            }
        }
    }
    ```
