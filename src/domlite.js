/**
 * Created by gongchao on 16/9/21.
 */
;(function (window, document, undefined) {

    class Domlite {

        constructor(selector) {
            this.selector = document.querySelectorAll(selector);
            return this;
        }

        find(selector) {
            this.selector = this.selector[0].querySelectorAll(selector);
            return this;
        }

        eq(id) {
            this.selector = [this.selector[id]];
            return this;
        }

        _each() {
            var selector = this.selector;
            for (let i = 0; i < selector.length; i += 1) {
                this.selector = [selector[i]];
                let parameters = [];
                for (let i = 1; i < arguments.length; i += 1) {
                    parameters.push(arguments[i])
                }
                arguments[0].apply(this, parameters);
            }
        }

        /**
         * 设置html
         * @param html
         * @returns {*}
         */
        html(html) {
            this.selector[0].innerHTML = html;
            return this;
        }

        /**
         * 设置text
         * @param text
         * @returns {Domlite}
         */
        text(text) {
            this.selector[0].innerText = text;
            return this;
        }

        /**
         * 返回当前元素的坐标
         * @returns {{top, right, bottom, left, width, height}}
         */
        offset() {
            var {top, right, bottom, left, width, height} = this.selector[0].getBoundingClientRect();
            return {top, right, bottom, left, width, height}
        }

        /**
         * 获取设置属性值
         * @param attribute
         * @param setting
         * @returns {*}
         */
        attr(attribute, setting = null) {
            if (this.selector.length > 1) {
                this._each(this.attr, attribute, setting)
            } else {
                if (setting) {
                    this.selector[0].setAttribute(attribute, setting);
                } else {
                    var result;
                    switch (attribute) {
                        case 'class':
                            result = this.selector[0].className;
                            break;
                        case 'for':
                            result = this.selector[0].htmlFor;
                            break;
                        case 'value':
                            result = this.selector[0].value;
                            break;
                    }
                    return result;
                }
            }
        }

        /**
         * 返回父节点
         * @returns {*|Node}
         */
        parent() {
            this.selector = [this.selector[0].parentNode]
            return this;
        }

        /**
         * 返回子节点
         * @returns {Domlite}
         */
        children() {
            let result = [],
                child = this.selector[0].childNodes;
            for (let i in child) {
                child[i].nodeType === 1 && result.push(child[i]);
            }
            this.selector = result;
            return this;
        }

        /**
         * 当前节点的下一个兄弟节点
         * @returns {Domlite}
         */
        next() {
            this.selector = [this.selector[0].nextSibling];
            return this;
        }

        /**
         * 当前节点的上一个兄弟节点
         */
        previous() {
            this.selector = [this.selector[0].previousSibling]
        }


        /**
         * 获取设置css
         * @param attribute
         * @returns {*}
         */
        css(attribute) {
            if (typeof attribute === 'string') {
                if (arguments[1]) {
                    this.selector[0].style[attribute] = arguments[1]
                } else {
                    return window.getComputedStyle(this.selector[0])[attribute]
                }
            } else {
                for (let i in attribute) {
                    this.selector[0].style[i] = attribute[i]
                }
            }
            return this;
        }

        /**
         * 添加class
         * @param className
         * @returns {Domlite}
         */
        addClass(className) {
            if (this.attr('class').indexOf(className) < 0) {
                let classes = this.attr('class').split(' ');
                classes.push(className);
                this.attr('class', classes.join(' '));
            }
            return this;
        }

        /**
         * 删除class
         * @param className
         * @returns {Domlite}
         */
        removeClass(className) {
            let index = this.attr('class').indexOf(className);
            if (index > 0) {
                let classes = this.attr('class').split(' ');
                classes.splice(classes.indexOf(className), 1);
                this.attr('class', classes.join(' '));
            }
            return this;
        }

        /**
         * 是否包含class
         * @param className
         * @returns {*}
         */
        hasClass(className) {
            if (this.attr('class').split(' ').indexOf(className) < 0) {
                return false;
            }
            return this;
        }

        /**
         * 拷贝节点
         * @returns {*[]}
         */
        copy() {
            return [this.selector[0].cloneNode(true)];
        }

        /**
         * 创建节点
         */
        create(html) {
            let div = document.createElement('div');
            div.insertAdjacentHTML('beforeend', html);
            return this.children.call({selector: [div]});
        }

        /**
         * 当前元素内尾部插入
         * @param html
         * @returns {Domlite}
         */
        append(html) {
            this.selector[0].insertAdjacentHTML('beforeend', html);
            return this;
        }

        /**
         * 当前元素内前置插入
         * @param html
         * @returns {Domlite}
         */
        prepend(html) {
            this.selector[0].insertAdjacentHTML('afterbegin', html);
            return this;
        }

        /**
         * 后置插入
         * @returns {Domlite}
         */
        after(html) {
            this.selector[0].insertAdjacentHTML('afterend', html);
            return this;
        }

        /**
         * 前置插入
         * @param html
         */
        before(html) {
            this.selector[0].insertAdjacentHTML('beforebegin', html);
            return this;
        }

        /**
         * 替换节点
         * @param node
         * @returns {Domlite}
         */
        replace(node) {
            this.selector[0].parentNode.replaceChild(node.selector[0], this.selector[0]);
            this.selector[0] = node;
            return this;
        }

        /**
         * 删除节点
         */
        remove() {
            this.selector[0].parentNode.removeChild(this.selector[0]);
        }
    }

    window.$ = function (selector) {
        return new Domlite(selector);
    }


})(window, document);