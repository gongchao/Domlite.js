<p>
    <a href="https://github.com/JSsparrow/Domlite.js">
        <img src="./assets/logo.png" alt="Domlite.js" width="400">
    </a>
</p>

# domlite.js
没错! ``domlite.js`` 与 Jquery 相似的使用方法, 让你 2 分钟上手!

domlite.js 仅仅是对现代浏览器的 dom 封装, 最佳的使用平台 APP、WAP和WeChat端。

这个项目刚刚建立, 还不成熟, 你可以在此基础进行修改。

若有疑问可以在 [issues](https://github.com/gongchao/Domlite.js/issues) 进行提问。


## 使用方法

引入 domlite
```html
<script src="./dist/domlite.min.js" charset="utf-8"></script>
```

开始吧
```javascript
$('#id')
```

## Api Reference

#### $(``selector``)
选择 html 节点, 和 Jquery 使用方法一样

### .find(``selector``)
查询正在处理的后代元素

### .eq(``num``)
选择第 ``num`` 个元素

### .parent()
查询正在处理元素的父级元素

### .children()
查询正在处理元素的子元素

### .next()
查询正在处理元素的下一个兄弟元素

### .previous()
查询正在处理元素的前一个兄弟元素

### .offset()
返回当前元素的坐标

- top
- right
- bottom
- left
- width
- height


### .attr()
查询或设置元素的属性值

### .css()
查询或设置元素的样式

### .addClass(``className``)
添加样式类

### .removeClass(``className``)
删除样式类

### .hasClass(``className``)
查询是否包含样式类

### .copy()
拷贝一份正在处理的元素

### $.create(``html``)
创建 html 节点

### .append(``html``)
将 html 插入正在处理元素的内部结尾插入

### .preend(``html``)
将 html 插入正在处理元素的内部开头插入

### .after(``html``)
将 html 插入正在处理元素的后边插入

### .before(``html``)
将 html 插入正在处理元素的前边插入

### replace(``html``)
将 html 与正在处理元素进行替换

### .remove()
删除正在处理的元素


