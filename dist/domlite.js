'use strict';

var _createClass = function () {
    function defineProperties(target, props) {
        for (var i = 0; i < props.length; i++) {
            var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ("value" in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);
        }
    }return function (Constructor, protoProps, staticProps) {
        if (protoProps) defineProperties(Constructor.prototype, protoProps);if (staticProps) defineProperties(Constructor, staticProps);return Constructor;
    };
}();

function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
        throw new TypeError("Cannot call a class as a function");
    }
}

/**
 * Created by gongchao on 16/9/21.
 */
;(function (window, document, undefined) {
    var Domlite = function () {
        function Domlite(selector) {
            _classCallCheck(this, Domlite);

            this.selector = document.querySelectorAll(selector);
            return this;
        }

        _createClass(Domlite, [{
            key: 'find',
            value: function find(selector) {
                this.selector = this.selector[0].querySelectorAll(selector);
                return this;
            }
        }, {
            key: 'eq',
            value: function eq(id) {
                this.selector = [this.selector[id]];
                return this;
            }
        }, {
            key: '_each',
            value: function _each() {
                var selector = this.selector;
                for (var i = 0; i < selector.length; i += 1) {
                    this.selector = [selector[i]];
                    var parameters = [];
                    for (var _i = 1; _i < arguments.length; _i += 1) {
                        parameters.push(arguments[_i]);
                    }
                    arguments[0].apply(this, parameters);
                }
            }

            /**
             * 返回当前元素的坐标
             * @returns {{top, right, bottom, left, width, height}}
             */

        }, {
            key: 'offset',
            value: function offset() {
                var _selector$0$getBoundi = this.selector[0].getBoundingClientRect();

                var top = _selector$0$getBoundi.top;
                var right = _selector$0$getBoundi.right;
                var bottom = _selector$0$getBoundi.bottom;
                var left = _selector$0$getBoundi.left;
                var width = _selector$0$getBoundi.width;
                var height = _selector$0$getBoundi.height;

                return { top: top, right: right, bottom: bottom, left: left, width: width, height: height };
            }

            /**
             * 获取设置属性值
             * @param attribute
             * @param setting
             * @returns {*}
             */

        }, {
            key: 'attr',
            value: function attr(attribute) {
                var setting = arguments.length <= 1 || arguments[1] === undefined ? null : arguments[1];

                if (this.selector.length > 1) {
                    this._each(this.attr, attribute, setting);
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

        }, {
            key: 'parent',
            value: function parent() {
                this.selector = [this.selector[0].parentNode];
                return this;
            }

            /**
             * 返回子节点
             * @returns {Domlite}
             */

        }, {
            key: 'children',
            value: function children() {
                var result = [],
                    child = this.selector[0].childNodes;
                for (var i in child) {
                    child[i].nodeType === 1 && result.push(child[i]);
                }
                this.selector = result;
                return this;
            }

            /**
             * 当前节点的下一个兄弟节点
             * @returns {Domlite}
             */

        }, {
            key: 'next',
            value: function next() {
                this.selector = [this.selector[0].nextSibling];
                return this;
            }

            /**
             * 当前节点的上一个兄弟节点
             */

        }, {
            key: 'previous',
            value: function previous() {
                this.selector = [this.selector[0].previousSibling];
            }

            /**
             * 获取设置css
             * @param attribute
             * @returns {*}
             */

        }, {
            key: 'css',
            value: function css(attribute) {
                if (typeof attribute === 'string') {
                    if (arguments[1]) {
                        this.selector[0].style[attribute] = arguments[1];
                    } else {
                        return window.getComputedStyle(this.selector[0])[attribute];
                    }
                } else {
                    for (var i in attribute) {
                        this.selector[0].style[i] = attribute[i];
                    }
                }
                return this;
            }

            /**
             * 添加class
             * @param className
             * @returns {Domlite}
             */

        }, {
            key: 'addClass',
            value: function addClass(className) {
                if (this.attr('class').indexOf(className) < 0) {
                    var classes = this.attr('class').split(' ');
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

        }, {
            key: 'removeClass',
            value: function removeClass(className) {
                var index = this.attr('class').indexOf(className);
                if (index > 0) {
                    var classes = this.attr('class').split(' ');
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

        }, {
            key: 'hasClass',
            value: function hasClass(className) {
                if (this.attr('class').split(' ').indexOf(className) < 0) {
                    return false;
                }
                return this;
            }

            /**
             * 拷贝节点
             * @returns {*[]}
             */

        }, {
            key: 'copy',
            value: function copy() {
                return [this.selector[0].cloneNode(true)];
            }

            /**
             * 创建节点
             */

        }, {
            key: 'create',
            value: function create(html) {
                var div = document.createElement('div');
                div.insertAdjacentHTML('beforeend', html);
                return this.children.call({ selector: [div] });
            }

            /**
             * 当前元素内尾部插入
             * @param html
             * @returns {Domlite}
             */

        }, {
            key: 'append',
            value: function append(html) {
                this.selector[0].insertAdjacentHTML('beforeend', html);
                return this;
            }

            /**
             * 当前元素内前置插入
             * @param html
             * @returns {Domlite}
             */

        }, {
            key: 'prepend',
            value: function prepend(html) {
                this.selector[0].insertAdjacentHTML('afterbegin', html);
                return this;
            }

            /**
             * 后置插入
             * @returns {Domlite}
             */

        }, {
            key: 'after',
            value: function after(html) {
                this.selector[0].insertAdjacentHTML('afterend', html);
                return this;
            }

            /**
             * 前置插入
             * @param html
             */

        }, {
            key: 'before',
            value: function before(html) {
                this.selector[0].insertAdjacentHTML('beforebegin', html);
                return this;
            }

            /**
             * 替换节点
             * @param node
             * @returns {Domlite}
             */

        }, {
            key: 'replace',
            value: function replace(node) {
                this.selector[0].parentNode.replaceChild(node.selector[0], this.selector[0]);
                this.selector[0] = node;
                return this;
            }

            /**
             * 删除节点
             */

        }, {
            key: 'remove',
            value: function remove() {
                this.selector[0].parentNode.removeChild(this.selector[0]);
            }
        }]);

        return Domlite;
    }();

    window.$ = function (selector) {
        return new Domlite(selector);
    };
})(window, document);
