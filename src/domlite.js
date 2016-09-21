
(function (window, document, undefined) {

    const 对象 = {}

    对象.获取单个节点 = id => {
        return document.getElementById(id)
    }

    对象.获取多个选项节点 = name => {
        return document.getElementsByTagName(name)
    }

    对象.获取多个样式节点 = name => {
        return document.getElementsByClassName(name)
    }

    对象.获取节点宽度 = node => {
        return node.getBoundingClientRect().width
    }

    对象.获取节点高度 = node => {
        return node.getBoundingClientRect().height
    }

    对象.获取父节点 = node => {
        return node.parentNode
    }

    对象.获取子节点 = node => {
        let result = [];
        for (var i in node.childNodes) {
            node.childNodes[i].nodeType === 1 && result.push(node.childNodes[i])
        }
        return result
    }

    对象.获取下一个节点 = node => {
        let result = node.nextSibling
        if (!result) return '已经是第最后一个节点';
        if (result.nodeType === 3) return 对象.获取下一个节点(result)
        return result
    }

    对象.获取上一个节点 = node => {
        let result = node.previous
        if (!result) return '已经是第一个节点';
        if (result.nodeType === 3) return 对象.获取上一个节点(result)
        return result
    }

    对象.获取节点属性 = (node, attribute) => {
        switch (attribute) {
            case 'class':
                let className = []
                if (node.className) {
                    let array = node.className.split(' ')
                    for (let i in array) {
                        className.push(array[i])
                    }
                    return className
                } else {
                    return className
                }
            case 'value':
                return node.value
            default:
                return node.getAttribute(attribute)
        }
    }

    对象.获取节点样式 = (node, css) => {
        return node.style[css]
    }

    对象.设置节点样式 = (node, object) => {
        for (var i in object) {
            node.style[i] = object[i]
        }
    }

    对象.添加样式 = (node, className) => {
        let classes = 对象.获取节点属性(node, 'class')
        if (classes.indexOf(className) < 0) {
            classes.push(className)
        }
        node.setAttribute('class', classes.join(' '))
    }

    window.节点操作 = 对象


})(window, document)
