module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../../ssr-module-cache.js');
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 3);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),
/* 1 */
/***/ (function(module, exports) {

module.exports = require("styled-jsx/style");

/***/ }),
/* 2 */
/***/ (function(module, exports) {

module.exports = require("next/head");

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(13);


/***/ }),
/* 4 */,
/* 5 */,
/* 6 */,
/* 7 */,
/* 8 */,
/* 9 */,
/* 10 */,
/* 11 */,
/* 12 */,
/* 13 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: external "styled-jsx/style"
var style_ = __webpack_require__(1);
var style_default = /*#__PURE__*/__webpack_require__.n(style_);

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(0);
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);

// EXTERNAL MODULE: external "next/head"
var head_ = __webpack_require__(2);
var head_default = /*#__PURE__*/__webpack_require__.n(head_);

// CONCATENATED MODULE: ./components/Info.js



var Info_Info = function Info() {
  return external_react_default.a.createElement("div", {
    className: "jsx-1905227827" + " " + "hero hero-lg info container"
  }, external_react_default.a.createElement("div", {
    className: "jsx-1905227827" + " " + "hero-body"
  }, external_react_default.a.createElement("p", {
    className: "jsx-1905227827" + " " + "hi"
  }, "Hi, my name is"), external_react_default.a.createElement("h1", {
    className: "jsx-1905227827" + " " + "name"
  }, "Brett Cline."), external_react_default.a.createElement("h1", {
    className: "jsx-1905227827" + " " + "build"
  }, "I build things for the web."), external_react_default.a.createElement("p", {
    className: "jsx-1905227827" + " " + "about"
  }, "I'm a software engineer based in ", external_react_default.a.createElement("span", {
    className: "jsx-1905227827" + " " + "city"
  }, "Pittsburgh, PA"), " specializing ", external_react_default.a.createElement("br", {
    className: "jsx-1905227827"
  }), "in developing exceptional, high-quality applications for the web.")), external_react_default.a.createElement(style_default.a, {
    styleId: "1905227827",
    css: [".info.jsx-1905227827{color:#64ffda;padding-left:175px;}", ".hi.jsx-1905227827{margin-bottom:5px;}", ".name.jsx-1905227827{color:white;font-size:60px;margin-bottom:5px;margin-top:0px;font-weight:bold;}", ".build.jsx-1905227827{color:#8892b0;font-size:60px;font-weight:bold;}", ".about.jsx-1905227827{color:#8892b0;}", ".city.jsx-1905227827{color:#64ffda;}"]
  }));
};

/* harmony default export */ var components_Info = (Info_Info);
// CONCATENATED MODULE: ./components/Navbar.js


var Navbar_Navbar = function Navbar() {
  return external_react_default.a.createElement("div", null, external_react_default.a.createElement("header", {
    className: "navbar"
  }), external_react_default.a.createElement("section", {
    className: "navbar-section"
  }, external_react_default.a.createElement("a", {
    href: ""
  })));
};

/* harmony default export */ var components_Navbar = (Navbar_Navbar);
// CONCATENATED MODULE: ./pages/index.js






var pages_index = function index() {
  return external_react_default.a.createElement("div", {
    className: "jsx-3572662378"
  }, external_react_default.a.createElement(head_default.a, null, external_react_default.a.createElement("link", {
    rel: "shortcut icon",
    href: "static/favicon.ico",
    className: "jsx-3572662378"
  }), external_react_default.a.createElement("title", {
    className: "jsx-3572662378"
  }, "Brett Cline | Software Developer"), external_react_default.a.createElement("meta", {
    charset: "utf-8",
    className: "jsx-3572662378"
  }), external_react_default.a.createElement("meta", {
    name: "viewport",
    content: "width=device-width, initial-scale=1.0",
    className: "jsx-3572662378"
  }), external_react_default.a.createElement("meta", {
    name: "keywords",
    content: "Brett Cline",
    className: "jsx-3572662378"
  }), external_react_default.a.createElement("link", {
    rel: "stylesheet",
    href: "https://unpkg.com/spectre.css/dist/spectre.min.css",
    className: "jsx-3572662378"
  }), external_react_default.a.createElement("link", {
    rel: "stylesheet",
    href: "https://unpkg.com/spectre.css/dist/spectre-exp.min.css",
    className: "jsx-3572662378"
  }), external_react_default.a.createElement("link", {
    rel: "stylesheet",
    href: "https://unpkg.com/spectre.css/dist/spectre-icons.min.css",
    className: "jsx-3572662378"
  }), external_react_default.a.createElement("link", {
    href: "https://fonts.googleapis.com/css?family=Work+Sans",
    rel: "stylesheet",
    className: "jsx-3572662378"
  }), external_react_default.a.createElement("link", {
    href: "https://fonts.googleapis.com/css?family=Roboto",
    rel: "stylesheet",
    className: "jsx-3572662378"
  })), external_react_default.a.createElement(components_Navbar, null), external_react_default.a.createElement(components_Info, null), external_react_default.a.createElement(style_default.a, {
    styleId: "3572662378",
    css: ["html{min-height:100%;}", "body{background:#0a192f;font-family:'Roboto',-apple-system,system-ui,BlinkMacSystemFont,\"Segoe UI\",Roboto,\"Helvetica Neue\",Arial,sans-serif;}"]
  }));
};

/* harmony default export */ var pages = __webpack_exports__["default"] = (pages_index);

/***/ })
/******/ ]);