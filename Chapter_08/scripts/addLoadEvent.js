function addLoadEvent(func) {
    // 将 window.onload 赋值给变量 oldonload
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
