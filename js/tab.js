window.onload =function () {
    tab();
}
function tab() {
    // 获取DOM元素
    var menusEle = document.querySelectorAll(' .tab > .tab_menu > li ');
    var contentEle = document.querySelectorAll(' .tab > .tab_content > div ');

    // 注册事件
    menusEle.forEach((ele, index) => {
        ele.addEventListener('click', (event) => {
            // 调用工具函数删除指定的类
            clearEleClass(menusEle, 'select_menu');
            clearEleClass(contentEle, 'select_content');
            // 添加指定的类
            event.target.classList.add('select_menu');
            contentEle[index].classList.add('select_content');
            // false 事件冒泡
            // true  事件捕获
        },false);
    });

    // 工具函数
    function clearEleClass(eles , className) {
        eles.forEach(ele => {
            // 删除指定的类
            ele.classList.remove(className);
        })
    }
}
