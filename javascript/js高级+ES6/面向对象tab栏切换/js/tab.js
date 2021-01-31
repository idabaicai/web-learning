let show_style = 'li-current';

// 保存Tab 的this
let newTab = null;
class Tab {
    constructor(id) {
            newTab = this;
            // 获取元素
            this.main = document.querySelector(id);
            // 获取li
            this.lis = this.main.querySelectorAll('li');
            // 获取删除按钮
            this.del = this.main.querySelectorAll('.icomoon.del');
            // 获取内容
            this.sections = this.main.querySelectorAll('section');
            // 获取添加
            this.add = this.main.querySelector('#add');
            // 获取tab
            this.ul = document.querySelector('#tab');
            // 获取内容区
            this.tabcon = this.main.querySelector('.tabscon');
            // 获取编辑
            this.edit = this.main.querySelectorAll('.item');
            // 获取编辑内容去
            this.conedit = this.main.querySelectorAll('.tabscon section');
            this.init();
        }
        // 初始化操作 让相关的元素绑定事件
    init() {
            // 更新节点
            this.updateNode();
            // 点击添加 新增li 
            this.add.addEventListener('click', this.addTab)

            // 给tab绑定切换事件
            for (let i = 0; i < this.lis.length; i++) {
                // 给lis一个索引
                this.lis[i].index = i;
                // 点击li 切换tab
                this.lis[i].addEventListener('click', this.toggleTab);

                // 点击删除 删除li
                this.del[i].addEventListener('click', this.removeTab);
                // 双击item 编辑tab内容
                this.edit[i].addEventListener('dblclick', this.editTab);
                // 双击内容去 编辑内容
                this.conedit[i].addEventListener('dblclick', this.editTab)
            }
        }
        // 切换功能
    toggleTab() {
            // 清除li 和section样式
            newTab.clearClass();

            // 隐藏当前li的下划线
            this.className = 'li-current';
            // 显示对应的section
            newTab.sections[this.index].className = 'sec-current';
        }
        // 添加功能
    addTab() {
            newTab.clearClass();
            let item_index = newTab.lis.length + 1
            let li = '<li class="li-current"><span class="item">选项卡' + item_index + '</span><span class="icomoon del"></span></li>';
            newTab.ul.insertAdjacentHTML('beforeend', li);
            let section = ' <section class="sec-current">测试' + item_index + '</section>';
            newTab.tabcon.insertAdjacentHTML('beforeend', section);
            // 刚添加的tab没有注册事件 因此新定义一个方法 重新初始化
            newTab.init();
        }
        // 更新节点
    updateNode() {
            this.lis = this.main.querySelectorAll('li');
            this.sections = this.main.querySelectorAll('section');
            this.del = this.main.querySelectorAll('.icomoon.del');
            this.edit = this.main.querySelectorAll('.item');
            this.tabcon = this.main.querySelector('.tabscon');
            this.conedit = this.main.querySelectorAll('.tabscon section');

        }
        // 删除功能  
    removeTab(e) {
            let index = this.parentNode.index;

            e.stopPropagation(); //要阻止冒泡 防止触发li的切换
            // 根据index删除li 和 section
            newTab.lis[index].remove();
            newTab.sections[index].remove();
            // 获取最新节点 注册事件
            newTab.init();
            // 如果删除了 有li在显示 则不执行点击其他li的代码
            console.log(document.querySelector('.li-current'));
            if (document.querySelector('.li-current')) return;
            // 删除选中li时，让前一个li处于选定状态
            if (index != 0) { //让前一个li点一下 
                newTab.lis[index - 1].click();
            } else { //如果删除第一个
                if (newTab.lis.length === 0) { //如果没有li了
                    return false;
                }
                newTab.lis[0].click();
            }
        }
        // 修改功能
    editTab() {
            let text = this.innerText;
            let input_box = '<input type="text" value="' + text + '">';
            // 生成文本框
            this.innerHTML = input_box;
            let input = this.children[0];
            // 是文本框中的文字处于选定状态
            input.select();
            // 离开文本框 就把文本框里面的值给span
            input.addEventListener('blur', function() {
                    this.parentNode.innerHTML = this.value;

                })
                // 按下enter 把span的html设置为input中的值
            input.onkeyup = function(e) {
                if (e.keyCode == 13) {

                    // this.parentNode.innerHTML = this.value;
                    this.blur();
                }
            }
        }
        // 清除样式
    clearClass() {
        for (let i = 0; i < newTab.lis.length; i++) {
            this.lis[i].className = '';
            this.sections[i].className = '';
        }
    }
}


new Tab('#main')