/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports) {

	'use strict';

	(function (window, document, undefined) {

	    var 对象 = {};

	    对象.获取单个节点 = function (id) {
	        return document.getElementById(id);
	    };

	    对象.获取多个选项节点 = function (name) {
	        return document.getElementsByTagName(name);
	    };

	    对象.获取多个样式节点 = function (name) {
	        return document.getElementsByClassName(name);
	    };

	    对象.获取节点宽度 = function (node) {
	        return node.getBoundingClientRect().width;
	    };

	    对象.获取节点高度 = function (node) {
	        return node.getBoundingClientRect().height;
	    };

	    对象.获取父节点 = function (node) {
	        return node.parentNode;
	    };

	    对象.获取子节点 = function (node) {
	        var result = [];
	        for (var i in node.childNodes) {
	            node.childNodes[i].nodeType === 1 && result.push(node.childNodes[i]);
	        }
	        return result;
	    };

	    对象.获取下一个节点 = function (node) {
	        var result = node.nextSibling;
	        if (!result) return '已经是第最后一个节点';
	        if (result.nodeType === 3) return 对象.获取下一个节点(result);
	        return result;
	    };

	    对象.获取上一个节点 = function (node) {
	        var result = node.previous;
	        if (!result) return '已经是第一个节点';
	        if (result.nodeType === 3) return 对象.获取上一个节点(result);
	        return result;
	    };

	    对象.获取节点属性 = function (node, attribute) {
	        switch (attribute) {
	            case 'class':
	                var className = [];
	                if (node.className) {
	                    var array = node.className.split(' ');
	                    for (var i in array) {
	                        className.push(array[i]);
	                    }
	                    return className;
	                } else {
	                    return className;
	                }
	            case 'value':
	                return node.value;
	            default:
	                return node.getAttribute(attribute);
	        }
	    };

	    对象.获取节点样式 = function (node, css) {
	        return node.style[css];
	    };

	    对象.设置节点样式 = function (node, object) {
	        for (var i in object) {
	            node.style[i] = object[i];
	        }
	    };

	    对象.添加样式 = function (node, className) {
	        var classes = 对象.获取节点属性(node, 'class');
	        if (classes.indexOf(className) < 0) {
	            classes.push(className);
	        }
	        node.setAttribute('class', classes.join(' '));
	    };

	    window.节点操作 = 对象;
	})(window, document);

/***/ }
/******/ ]);