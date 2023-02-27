/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, ":root {\n  --clr-primary: rgb(54, 112, 199);\n  --clr-light: #f4f4f4;\n  --clr-dark: #333;\n  --clr-warning: rgb(99, 36, 36);\n}\n\n*,\n*::before,\n*::after {\n  font-family: inherit;\n  box-sizing: border-box;\n}\n\nbody {\n  margin: 0;\n  font-family: \"Work Sans\", sans-serif;\n  font-weight: 300;\n  font-size: 1.5rem;\n  background-color: var(--clr-primary);\n  color: var(--clr-light);\n\n  display: grid;\n  grid:\n    \"header header header header\" auto\n    \"...... lists active ......\" auto /\n    1fr minmax(100px, 300px) minmax(250px, 600px) 1fr;\n}\n\n.title {\n  grid-area: header;\n  text-align: center;\n  font-size: calc(7vh + 2rem);\n  font-weight: 900;\n  color: rgba(0, 0, 0, 0.1);\n  letter-spacing: 2px;\n  margin: -0.3em 0 0.5em;\n}\n\n.all-tasks {\n  grid-area: lists;\n}\n\n.task-list {\n  font-size: 1.2rem;\n  line-height: 1.7;\n  list-style: circle;\n  padding-left: 1.1em;\n}\n\n.list-name {\n  cursor: pointer;\n}\n.list-name:hover {\n  opacity: 0.7;\n}\n\nform {\n  display: flex;\n}\n\n.btn {\n  cursor: pointer;\n  background: 0;\n  border: 0;\n  padding: 0;\n  color: inherit;\n}\n\n.btn.create {\n  font-size: 1.5rem;\n  font-weight: 900;\n  margin-right: 0.25em;\n  transition: opacity 250ms ease-in;\n}\n\n.btn.list:hover {\n  opacity: 0.7;\n}\n\n.btn.delete {\n  opacity: 0.7;\n  font-size: 1rem;\n  transition: color 200ms;\n}\n\n.btn.delete:hover {\n  color: var(--clr-warning);\n}\n\n.new {\n  background: transparent;\n  border: 0;\n  color: inherit;\n  border-bottom: 1px solid currentColor;\n  font-size: inherit;\n  outline: none;\n\n  transition: border-bottom 250ms ease-in;\n  order: 2;\n\n  padding: 0.25em;\n}\n.new::placeholder {\n  color: inherit;\n  opacity: 0.4;\n}\n.new:focus {\n  border-bottom-width: 2px;\n}\n.new:focus::placeholder {\n  opacity: 0.15;\n}\n\n.new.list {\n  font-size: 1.1rem;\n}\n.new.task {\n  margin-bottom: 0;\n}\n\n.active-list {\n  font-weight: 900;\n}\n\n.todo-list {\n  --spacer: 2rem;\n  align-self: start;\n  margin-top: 2rem;\n  grid-area: active;\n  background-color: var(--clr-light);\n  color: var(--clr-dark);\n}\n\n.todo-header {\n  background: #fbc80a;\n  padding: var(--spacer);\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  height: auto;\n  box-shadow: 0 4px 2px -2px gray;\n}\n\n.list-title {\n  margin: 0 1em 0 0;\n}\n\n.task-count {\n  margin: 0;\n  font-size: 1rem;\n}\n\n.circle-wrap {\n  margin: 150px auto;\n  width: 150px;\n  height: 150px;\n  background: #fefcff;\n  border-radius: 50%;\n  border: 1px solid #cdcbd0;\n}\n\n.todo-body {\n  padding: var(--spacer);\n  position: relative;\n  background-color: #f6f7be;\n}\n\n.new-task-creator .create {\n  color: var(--clr-primary);\n}\n\n[type=\"checkbox\"] {\n  opacity: 0;\n  position: absolute;\n}\n\n.task label {\n  display: flex-inline;\n  align-items: center;\n  position: relative;\n}\n\n.task {\n  position: relative;\n  margin-bottom: 1.25em;\n}\n.task::after {\n  content: \"\";\n  position: absolute;\n  right: 0;\n  left: 0;\n  bottom: -0.5em;\n  height: 1px;\n  background: currentColor;\n  opacity: 0.1;\n}\n\n.custom-checkbox {\n  --size: 0.75em;\n  display: inline-block;\n  width: var(--size);\n  height: var(--size);\n  margin-right: var(--size);\n  cursor: pointer;\n  border: 2px solid currentColor;\n  border-radius: 50%;\n  transform: scale(1);\n  transition: transform 200ms ease-in-out;\n}\n\n.custom-due-date {\n  display: inline-block;\n  padding: 0.25em;\n  background-color: rgb(26, 25, 25);\n  border-radius: 5px;\n  font-family: Arial, Helvetica, sans-serif;\n  font-weight: bold;\n  font-size: 1em;\n  position: absolute;\n  color: transparent;\n\n  right: 0;\n  bottom: -0.25em;\n}\n\n.custom-due-date span {\n  background: linear-gradient(\n    135deg,\n    var(--clr-primary),\n    var(--clr-light),\n    blue\n  );\n  background-clip: text;\n  -webkit-background-clip: text;\n}\n.custom-due-date::before,\n.custom-due-date::after {\n  content: \"\";\n  display: block;\n  width: 5%;\n  height: 5%;\n  background-image: linear-gradient(\n    135deg,\n    rgb(255, 145, 0),\n    rgb(255, 0, 221),\n    blue\n  );\n  position: absolute;\n  top: -10%;\n  left: -4%;\n  z-index: -1;\n  border-radius: 5px;\n}\n.custom-due-date::after {\n  filter: blur(5px);\n}\n\n.task:hover .custom-checkbox,\n[type=\"checkbox\"]:focus + label .custom-checkbox {\n  transform: scale(1.2);\n  color: var(--clr-primary);\n}\n\n[type=\"checkbox\"]:checked + label .custom-checkbox {\n  background: var(--clr-primary);\n  border-color: var(--clr-primary);\n  box-shadow: inset 0 0 0px 2px white;\n}\n\n[type=\"checkbox\"]:checked + label {\n  opacity: 0.5;\n}\n\n.task label::after {\n  content: \"\";\n  position: absolute;\n  left: 1.5em;\n  right: 0;\n  top: calc(50% - 1.5px);\n  height: 3px;\n  background: currentColor;\n  transform: scaleX(0);\n  transition: transform 150ms ease-in-out;\n  transform-origin: right;\n}\n\n[type=\"checkbox\"]:checked + label::after {\n  transform: scaleX(1);\n  transform-origin: left;\n}\n\n.delete-stuff {\n  display: flex;\n  justify-content: space-evenly;\n  position: absolute;\n  width: 100%;\n  left: 0;\n  bottom: -35px;\n  color: var(--clr-light);\n}\n\n.skill {\n  --cirlce-size: 160px;\n  --cirlce-width: var(--cirlce-size);\n  --cirlce-height: var(--cirlce-size);\n  width: var(--cirlce-width);\n  height: var(--cirlce-height);\n  position: relative;\n  margin: 10px;\n}\n\n.outer {\n  width: var(--cirlce-width);\n  height: var(--cirlce-height);\n  padding: calc((var(--cirlce-width) * 0.25) / 2);\n  box-shadow: 6px 6px 10px -1px rgba(0, 0, 0, 0.15),\n    -6px -6px 10px -1px rgba(225, 225, 225, 0.7);\n  border-radius: 50%;\n}\n\n.inner {\n  width: calc(var(--cirlce-width) * 0.75);\n  height: calc(var(--cirlce-height) * 0.75);\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  box-shadow: inset 4px 4px 6px -1px rgba(225, 225, 225, 0.7),\n    -0.5px -0.5px 0px rgba(225, 225, 225, 1),\n    0.5px 0.5px 0px rgba(0, 0, 0, 0.15), 0px 12px 10px -10px rgba(0, 0, 0, 0.05);\n  border-radius: 50%;\n}\n\n#number {\n  font-weight: 600;\n  color: #555;\n  font-size: 30px;\n}\n\ncircle {\n  fill: none;\n  stroke: url(#GradientColor);\n  stroke-width: 20px;\n  stroke-dasharray: 450;\n  transition: all 0.8s ease-in-out;\n}\n\nsvg {\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: var(--cirlce-width);\n  height: var(--cirlce-height);\n}\n", "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"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","sourcesContent":[":root {\n  --clr-primary: rgb(54, 112, 199);\n  --clr-light: #f4f4f4;\n  --clr-dark: #333;\n  --clr-warning: rgb(99, 36, 36);\n}\n\n*,\n*::before,\n*::after {\n  font-family: inherit;\n  box-sizing: border-box;\n}\n\nbody {\n  margin: 0;\n  font-family: \"Work Sans\", sans-serif;\n  font-weight: 300;\n  font-size: 1.5rem;\n  background-color: var(--clr-primary);\n  color: var(--clr-light);\n\n  display: grid;\n  grid:\n    \"header header header header\" auto\n    \"...... lists active ......\" auto /\n    1fr minmax(100px, 300px) minmax(250px, 600px) 1fr;\n}\n\n.title {\n  grid-area: header;\n  text-align: center;\n  font-size: calc(7vh + 2rem);\n  font-weight: 900;\n  color: rgba(0, 0, 0, 0.1);\n  letter-spacing: 2px;\n  margin: -0.3em 0 0.5em;\n}\n\n.all-tasks {\n  grid-area: lists;\n}\n\n.task-list {\n  font-size: 1.2rem;\n  line-height: 1.7;\n  list-style: circle;\n  padding-left: 1.1em;\n}\n\n.list-name {\n  cursor: pointer;\n}\n.list-name:hover {\n  opacity: 0.7;\n}\n\nform {\n  display: flex;\n}\n\n.btn {\n  cursor: pointer;\n  background: 0;\n  border: 0;\n  padding: 0;\n  color: inherit;\n}\n\n.btn.create {\n  font-size: 1.5rem;\n  font-weight: 900;\n  margin-right: 0.25em;\n  transition: opacity 250ms ease-in;\n}\n\n.btn.list:hover {\n  opacity: 0.7;\n}\n\n.btn.delete {\n  opacity: 0.7;\n  font-size: 1rem;\n  transition: color 200ms;\n}\n\n.btn.delete:hover {\n  color: var(--clr-warning);\n}\n\n.new {\n  background: transparent;\n  border: 0;\n  color: inherit;\n  border-bottom: 1px solid currentColor;\n  font-size: inherit;\n  outline: none;\n\n  transition: border-bottom 250ms ease-in;\n  order: 2;\n\n  padding: 0.25em;\n}\n.new::placeholder {\n  color: inherit;\n  opacity: 0.4;\n}\n.new:focus {\n  border-bottom-width: 2px;\n}\n.new:focus::placeholder {\n  opacity: 0.15;\n}\n\n.new.list {\n  font-size: 1.1rem;\n}\n.new.task {\n  margin-bottom: 0;\n}\n\n.active-list {\n  font-weight: 900;\n}\n\n.todo-list {\n  --spacer: 2rem;\n  align-self: start;\n  margin-top: 2rem;\n  grid-area: active;\n  background-color: var(--clr-light);\n  color: var(--clr-dark);\n}\n\n.todo-header {\n  background: #fbc80a;\n  padding: var(--spacer);\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  height: auto;\n  box-shadow: 0 4px 2px -2px gray;\n}\n\n.list-title {\n  margin: 0 1em 0 0;\n}\n\n.task-count {\n  margin: 0;\n  font-size: 1rem;\n}\n\n.circle-wrap {\n  margin: 150px auto;\n  width: 150px;\n  height: 150px;\n  background: #fefcff;\n  border-radius: 50%;\n  border: 1px solid #cdcbd0;\n}\n\n.todo-body {\n  padding: var(--spacer);\n  position: relative;\n  background-color: #f6f7be;\n}\n\n.new-task-creator .create {\n  color: var(--clr-primary);\n}\n\n[type=\"checkbox\"] {\n  opacity: 0;\n  position: absolute;\n}\n\n.task label {\n  display: flex-inline;\n  align-items: center;\n  position: relative;\n}\n\n.task {\n  position: relative;\n  margin-bottom: 1.25em;\n}\n.task::after {\n  content: \"\";\n  position: absolute;\n  right: 0;\n  left: 0;\n  bottom: -0.5em;\n  height: 1px;\n  background: currentColor;\n  opacity: 0.1;\n}\n\n.custom-checkbox {\n  --size: 0.75em;\n  display: inline-block;\n  width: var(--size);\n  height: var(--size);\n  margin-right: var(--size);\n  cursor: pointer;\n  border: 2px solid currentColor;\n  border-radius: 50%;\n  transform: scale(1);\n  transition: transform 200ms ease-in-out;\n}\n\n.custom-due-date {\n  display: inline-block;\n  padding: 0.25em;\n  background-color: rgb(26, 25, 25);\n  border-radius: 5px;\n  font-family: Arial, Helvetica, sans-serif;\n  font-weight: bold;\n  font-size: 1em;\n  position: absolute;\n  color: transparent;\n\n  right: 0;\n  bottom: -0.25em;\n}\n\n.custom-due-date span {\n  background: linear-gradient(\n    135deg,\n    var(--clr-primary),\n    var(--clr-light),\n    blue\n  );\n  background-clip: text;\n  -webkit-background-clip: text;\n}\n.custom-due-date::before,\n.custom-due-date::after {\n  content: \"\";\n  display: block;\n  width: 5%;\n  height: 5%;\n  background-image: linear-gradient(\n    135deg,\n    rgb(255, 145, 0),\n    rgb(255, 0, 221),\n    blue\n  );\n  position: absolute;\n  top: -10%;\n  left: -4%;\n  z-index: -1;\n  border-radius: 5px;\n}\n.custom-due-date::after {\n  filter: blur(5px);\n}\n\n.task:hover .custom-checkbox,\n[type=\"checkbox\"]:focus + label .custom-checkbox {\n  transform: scale(1.2);\n  color: var(--clr-primary);\n}\n\n[type=\"checkbox\"]:checked + label .custom-checkbox {\n  background: var(--clr-primary);\n  border-color: var(--clr-primary);\n  box-shadow: inset 0 0 0px 2px white;\n}\n\n[type=\"checkbox\"]:checked + label {\n  opacity: 0.5;\n}\n\n.task label::after {\n  content: \"\";\n  position: absolute;\n  left: 1.5em;\n  right: 0;\n  top: calc(50% - 1.5px);\n  height: 3px;\n  background: currentColor;\n  transform: scaleX(0);\n  transition: transform 150ms ease-in-out;\n  transform-origin: right;\n}\n\n[type=\"checkbox\"]:checked + label::after {\n  transform: scaleX(1);\n  transform-origin: left;\n}\n\n.delete-stuff {\n  display: flex;\n  justify-content: space-evenly;\n  position: absolute;\n  width: 100%;\n  left: 0;\n  bottom: -35px;\n  color: var(--clr-light);\n}\n\n.skill {\n  --cirlce-size: 160px;\n  --cirlce-width: var(--cirlce-size);\n  --cirlce-height: var(--cirlce-size);\n  width: var(--cirlce-width);\n  height: var(--cirlce-height);\n  position: relative;\n  margin: 10px;\n}\n\n.outer {\n  width: var(--cirlce-width);\n  height: var(--cirlce-height);\n  padding: calc((var(--cirlce-width) * 0.25) / 2);\n  box-shadow: 6px 6px 10px -1px rgba(0, 0, 0, 0.15),\n    -6px -6px 10px -1px rgba(225, 225, 225, 0.7);\n  border-radius: 50%;\n}\n\n.inner {\n  width: calc(var(--cirlce-width) * 0.75);\n  height: calc(var(--cirlce-height) * 0.75);\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  box-shadow: inset 4px 4px 6px -1px rgba(225, 225, 225, 0.7),\n    -0.5px -0.5px 0px rgba(225, 225, 225, 1),\n    0.5px 0.5px 0px rgba(0, 0, 0, 0.15), 0px 12px 10px -10px rgba(0, 0, 0, 0.05);\n  border-radius: 50%;\n}\n\n#number {\n  font-weight: 600;\n  color: #555;\n  font-size: 30px;\n}\n\ncircle {\n  fill: none;\n  stroke: url(#GradientColor);\n  stroke-width: 20px;\n  stroke-dasharray: 450;\n  transition: all 0.8s ease-in-out;\n}\n\nsvg {\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: var(--cirlce-width);\n  height: var(--cirlce-height);\n}\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = [];

  // return the list of modules as css string
  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";
      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }
      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }
      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }
      content += cssWithMappingToString(item);
      if (needLayer) {
        content += "}";
      }
      if (item[2]) {
        content += "}";
      }
      if (item[4]) {
        content += "}";
      }
      return content;
    }).join("");
  };

  // import a list of modules into the list
  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }
    var alreadyImportedModules = {};
    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];
        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }
    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);
      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }
      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }
      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }
      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }
      list.push(item);
    }
  };
  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {



module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];
  if (!cssMapping) {
    return content;
  }
  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    return [content].concat([sourceMapping]).join("\n");
  }
  return [content].join("\n");
};

/***/ }),

/***/ "./src/template.html":
/*!***************************!*\
  !*** ./src/template.html ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/html-loader/dist/runtime/getUrl.js */ "./node_modules/html-loader/dist/runtime/getUrl.js");
/* harmony import */ var _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0__);
// Imports

var ___HTML_LOADER_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ./index.js */ "./src/index.js?dfde"), __webpack_require__.b);
// Module
var ___HTML_LOADER_REPLACEMENT_0___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_0___);
var code = "<!DOCTYPE html>\n<html lang=\"en\">\n  <head>\n    <meta charset=\"UTF-8\" />\n    <meta http-equiv=\"X-UA-Compatible\" content=\"IE=edge\" />\n    <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\" />\n    <link rel=\"preconnect\" href=\"https://fonts.googleapis.com\" />\n    <link rel=\"preconnect\" href=\"https://fonts.gstatic.com\" crossorigin />\n    <link rel=\"preconnect\" href=\"https://fonts.googleapis.com\" />\n    <link rel=\"preconnect\" href=\"https://fonts.gstatic.com\" crossorigin />\n    <link\n      href=\"https://fonts.googleapis.com/css2?family=Work+Sans:wght@200;300&display=swap\"\n      rel=\"stylesheet\"\n    />\n    <" + "script src=\"" + ___HTML_LOADER_REPLACEMENT_0___ + "\"><" + "/script>\n    <title>ToDo</title>\n  </head>\n  <body>\n    <h1 class=\"title\">Stuff I need to do</h1>\n\n    <div class=\"all-tasks\">\n      <h2 class=\"task-list-title\">My lists</h2>\n      <ul class=\"task-list\" data-lists></ul>\n\n      <form action=\"\" data-new-list-form>\n        <input \n          type=\"text\"\n          class=\"new list\"\n          data-new-list-input\n          placeholder=\"new list name\"\n          aria-label=\"new list name\"\n        />\n        <button class=\"btn create\" aria-label=\"create new list\">+</button>\n      </form>\n    </div>\n\n    <div class=\"todo-list\" data-list-display-container>\n      <div class=\"todo-header\">\n        <h2 class=\"list-title\" data-list-title>YouTube</h2>\n        <!-- <p class=\"task-count\" data-list-count>3 tasks remaining</p> -->\n        <!-- Counter cirlce -->\n        <div class=\"skill\">\n          <div class=\"outer\">\n            <div class=\"inner\">\n              <div id=\"number\"></div>\n            </div>\n          </div>\n    \n          <svg xmlns=\"http://www.w3.org/2000/svg\" version=\"1.1\">\n            <defs>\n              <linearGradient id=\"GradientColor\">\n                <stop offset=\"0%\" stop-color=\"#DA22FF\"></stop>\n                <stop offset=\"10%\" stop-color=\"#9733EE\"></stop>\n              </linearGradient>\n            </defs>\n            <circle\n              id=\"circle\"\n              cx=\"50%\"\n              cy=\"50%\"\n              r=\"43.75%\"\n              stroke-linecap=\"round\"\n            ></circle>\n          </svg>\n        </div>\n      </div>\n\n      <div class=\"todo-body\">\n        <div class=\"tasks\" data-tasks></div>\n\n        <div class=\"new-task-creator\">\n            <form action=\"\" data-new-task-form>\n                <input \n                  type=\"text\"\n                  data-new-task-input\n                  class=\"new task\"\n                  placeholder=\"new task name\"\n                  aria-label=\"new task name\"\n                />\n                <input \n                type=\"date\"\n                placeholder=\"dd-mm-yyyy\"\n                name=\"begin\"\n                value=\"\"\n                data-new-task-date-input\n                class=\"new task\">\n                <button class=\"btn create\" aria-label=\"create new task\">+</button>\n              </form>\n        </div>\n\n        <div class=\"delete-stuff\">\n          <button class=\"btn delete\" data-clear-complete-tasks-button>Clear completed tasks</button>\n          <button class=\"btn delete\" data-delete-list-button>Delete list</button>\n        </div>\n      </div>\n    </div>\n\n\n\n\n   \n    </div>\n    <template id=\"task-template\">\n      <div class=\"task\">\n        <div class=\"custom-due-date\">\n          <span class=\"due-days-display\"></span>\n        </div>  \n        <input type=\"checkbox\" />\n        <label>\n          <span class=\"custom-checkbox\"></span>       \n        </label>\n      </div>\n    </template>\n  </body>\n</html>\n";
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (code);

/***/ }),

/***/ "./node_modules/html-loader/dist/runtime/getUrl.js":
/*!*********************************************************!*\
  !*** ./node_modules/html-loader/dist/runtime/getUrl.js ***!
  \*********************************************************/
/***/ ((module) => {



module.exports = function (url, options) {
  if (!options) {
    // eslint-disable-next-line no-param-reassign
    options = {};
  }

  if (!url) {
    return url;
  } // eslint-disable-next-line no-underscore-dangle, no-param-reassign


  url = String(url.__esModule ? url.default : url);

  if (options.hash) {
    // eslint-disable-next-line no-param-reassign
    url += options.hash;
  }

  if (options.maybeNeedQuotes && /[\t\n\f\r "'=<>`]/.test(url)) {
    return "\"".concat(url, "\"");
  }

  return url;
};

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ "./node_modules/css-loader/dist/cjs.js!./src/style.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



var stylesInDOM = [];

function getIndexByIdentifier(identifier) {
  var result = -1;

  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }

  return result;
}

function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];

  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };

    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }

    identifiers.push(identifier);
  }

  return identifiers;
}

function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);

  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }

      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };

  return updater;
}

module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];

    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }

    var newLastIdentifiers = modulesToDom(newList, options);

    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];

      var _index = getIndexByIdentifier(_identifier);

      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();

        stylesInDOM.splice(_index, 1);
      }
    }

    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {



var memo = {};
/* istanbul ignore next  */

function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }

    memo[target] = styleTarget;
  }

  return memo[target];
}
/* istanbul ignore next  */


function insertBySelector(insert, style) {
  var target = getTarget(insert);

  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }

  target.appendChild(style);
}

module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}

module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;

  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}

module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";

  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }

  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }

  var needLayer = typeof obj.layer !== "undefined";

  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }

  css += obj.css;

  if (needLayer) {
    css += "}";
  }

  if (obj.media) {
    css += "}";
  }

  if (obj.supports) {
    css += "}";
  }

  var sourceMap = obj.sourceMap;

  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  options.styleTagTransform(css, styleElement, options.options);
}

function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }

  styleElement.parentNode.removeChild(styleElement);
}
/* istanbul ignore next  */


function domAPI(options) {
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}

module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }

    styleElement.appendChild(document.createTextNode(css));
  }
}

module.exports = styleTagTransform;

/***/ }),

/***/ "./src/createTask-List.js":
/*!********************************!*\
  !*** ./src/createTask-List.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "createList": () => (/* binding */ createList),
/* harmony export */   "createTask": () => (/* binding */ createTask)
/* harmony export */ });
function createTask(name, date) {
  return {
    id: Date.now().toString(),
    name: name,
    complete: false,
    date: date,
  };
}

function createList(name) {
  return {
    id: Date.now().toString(),
    name: name,
    tasks: [],
  };
}


/***/ }),

/***/ "./src/days-left-calculator.js":
/*!*************************************!*\
  !*** ./src/days-left-calculator.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "daysLeftCalculator": () => (/* binding */ daysLeftCalculator)
/* harmony export */ });
function daysLeftCalculator(task) {
  let dueDay = new Date(task.date);
  let today = new Date(getCurrentDate());
  let difference = dueDay.getTime() - today.getTime();
  let daysLeft = Math.ceil(difference / (1000 * 3600 * 24));

  return daysLeft;
}

function getCurrentDate() {
  let today = new Date();
  let dd = String(today.getDate()).padStart(2, "0");
  let mm = String(today.getMonth() + 1).padStart(2, "0"); //January is 0!
  let yyyy = today.getFullYear();

  today = mm + "/" + dd + "/" + yyyy;
  return today;
}


/***/ }),

/***/ "./src/taskPrecent-render.js":
/*!***********************************!*\
  !*** ./src/taskPrecent-render.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "setCircle": () => (/* binding */ setCircle)
/* harmony export */ });
const number = document.getElementById("number");
const skillContainer = document.querySelector(".skill");
const circle = document.getElementById("circle");
var lastCount = 0;

function setCircle(prec) {
  let precent = (1 - prec).toFixed(1);
  let counter = lastCount;
  //   skillContainer.style.setProperty(
  //     "--task-precentage-from",
  //     `${counter / 100}`
  //   );
  //   skillContainer.style.setProperty("--task-precentage-to", `${precent}`);

  circle.setAttribute("stroke-dashoffset", 450 - 450 * precent);

  if (precent > counter / 100) {
    setInterval(() => {
      if (counter == precent * 100) {
        clearInterval;
        return;
      } else {
        counter += 1;
        number.innerHTML = `${counter}%`;
        lastCount = counter;
      }
    }, 8);
  } else if (precent < counter / 100) {
    setInterval(() => {
      if (counter == precent * 100) {
        clearInterval;
        return;
      } else {
        counter -= 1;
        number.innerHTML = `${counter}%`;
        lastCount = counter;
      }
    }, 8);
  } else {
    return;
  }
}


/***/ }),

/***/ "./src/index.js?dfde":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "53fc1768a1f063a731d7.js";

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) scriptUrl = scripts[scripts.length - 1].src
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		__webpack_require__.b = document.baseURI || self.location.href;
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"main": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		// no on chunks loaded
/******/ 		
/******/ 		// no jsonp function
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _createTask_List__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./createTask-List */ "./src/createTask-List.js");
/* harmony import */ var _days_left_calculator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./days-left-calculator */ "./src/days-left-calculator.js");
/* harmony import */ var _taskPrecent_render__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./taskPrecent-render */ "./src/taskPrecent-render.js");
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./style.css */ "./src/style.css");
/* harmony import */ var _template_html__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./template.html */ "./src/template.html");







const listContainer = document.querySelector("[data-lists]");
const newListForm = document.querySelector("[data-new-list-form]");
const newListInput = document.querySelector("[data-new-list-input]");
const deleteListButton = document.querySelector("[data-delete-list-button]");
const listDisplayContainer = document.querySelector(
  "[data-list-display-container]"
);
const listTitleElement = document.querySelector("[data-list-title]");
const listCountElement = document.querySelector("[data-list-count]");
const tasksContainer = document.querySelector("[data-tasks]");
const taskTemplate = document.getElementById("task-template");
const newTaskForm = document.querySelector("[data-new-task-form]");
const newTaskInput = document.querySelector("[data-new-task-input]");
const newTaskDateInput = document.querySelector("[data-new-task-date-input]");
const clearCompleteTasksButton = document.querySelector(
  "[data-clear-complete-tasks-button]"
);

const LOCAL_STORAGE_LIST_KEY = "task.lists";
const LOCAL_STORAGE_SELECTED_LIST_ID_KEY = "task.selectedListId";
let lists = JSON.parse(localStorage.getItem(LOCAL_STORAGE_LIST_KEY)) || [];
let selectedListId = localStorage.getItem(LOCAL_STORAGE_SELECTED_LIST_ID_KEY);

listContainer.addEventListener("click", (e) => {
  if (e.target.tagName.toLowerCase() === "li") {
    selectedListId = e.target.dataset.listId;
    saveAndRender();
  }
});

tasksContainer.addEventListener("click", (e) => {
  if (e.target.tagName.toLowerCase() === "input") {
    const selectedList = lists.find((list) => list.id === selectedListId);
    const selectedTask = selectedList.tasks.find(
      (task) => task.id === e.target.id
    );
    selectedTask.complete = e.target.checked;
    save();
    renderTaskCount(selectedList);
  }
});

clearCompleteTasksButton.addEventListener("click", (e) => {
  const selectedList = lists.find((list) => list.id === selectedListId);
  selectedList.tasks = selectedList.tasks.filter((task) => !task.complete);
  saveAndRender();
});

deleteListButton.addEventListener("click", (e) => {
  lists = lists.filter((list) => list.id !== selectedListId);
  selectedListId = lists[lists.length - 1].id;
  saveAndRender();
});

newListForm.addEventListener("submit", (e) => {
  e.preventDefault();
  const listName = newListInput.value;
  if (listName == null || listName === "") return;
  const list = (0,_createTask_List__WEBPACK_IMPORTED_MODULE_0__.createList)(listName);
  newListInput.value = null;
  lists.push(list);
  selectedListId = list.id;
  saveAndRender();
});

newTaskForm.addEventListener("submit", (e) => {
  e.preventDefault();
  const taskName = newTaskInput.value;
  const taskDate = newTaskDateInput.value;
  if (taskName == null || taskName === "") return;
  if (taskDate == null || taskDate === "") return;

  const task = (0,_createTask_List__WEBPACK_IMPORTED_MODULE_0__.createTask)(taskName, taskDate);
  newTaskInput.value = null;
  newTaskDateInput.value = null;

  const selectedList = lists.find((list) => list.id === selectedListId);
  selectedList.tasks.push(task);
  saveAndRender();
});

function saveAndRender() {
  save();
  render();
}

function save() {
  localStorage.setItem(LOCAL_STORAGE_LIST_KEY, JSON.stringify(lists));
  localStorage.setItem(LOCAL_STORAGE_SELECTED_LIST_ID_KEY, selectedListId);
}

function render() {
  clearElement(listContainer);
  renderList();
  const selectedList = lists.find((list) => list.id === selectedListId);
  if (selectedListId == null) {
    listDisplayContainer.style.display = "none";
  } else {
    listDisplayContainer.style.display = "";
    listTitleElement.innerText = selectedList.name;
    renderTaskCount(selectedList);
    clearElement(tasksContainer);
    renderTasks(selectedList);
  }
}

function renderTasks(selectedList) {
  selectedList.tasks.forEach((task) => {
    const taskElement = document.importNode(taskTemplate.content, true);
    const checkbox = taskElement.querySelector("input");
    checkbox.id = task.id;
    checkbox.checked = task.complete;
    const label = taskElement.querySelector("label");
    label.htmlFor = task.id;
    label.append(task.name);
    const dueDays = taskElement.querySelector(".due-days-display");
    const daysLeft = (0,_days_left_calculator__WEBPACK_IMPORTED_MODULE_1__.daysLeftCalculator)(task);
    dueDays.append(`${daysLeft}`);
    tasksContainer.appendChild(taskElement);
  });
}

function renderTaskCount(selectedList) {
  const incompleteTaskCount = selectedList.tasks.filter(
    (task) => !task.complete
  ).length;
  const tasksCount = selectedList.tasks.length;
  const precent = incompleteTaskCount / tasksCount;
  (0,_taskPrecent_render__WEBPACK_IMPORTED_MODULE_2__.setCircle)(precent);
  // const taskString = incompleteTaskCount === 1 ? "task" : "tasks";
  // listCountElement.innerText = `${incompleteTaskCount} ${taskString} remaining`;
}

function renderList() {
  lists.forEach((list) => {
    const listElement = document.createElement("li");
    listElement.dataset.listId = list.id;
    listElement.classList.add("list-name");
    listElement.innerText = list.name;
    if (list.id === selectedListId) {
      listElement.classList.add("active-list");
    }
    listContainer.appendChild(listElement);
  });
}

function clearElement(element) {
  while (element.firstChild) {
    element.removeChild(element.firstChild);
  }
}

render();

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7O0FBRUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDOztBQUVEO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQzs7QUFFRDtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7O0FBRUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQSxlQUFlLDREQUFVO0FBQ3pCO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQzs7QUFFRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsZUFBZSw0REFBVTtBQUN6QjtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLENBQUM7O0FBRUQ7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EscUJBQXFCLHlFQUFrQjtBQUN2QyxzQkFBc0IsU0FBUztBQUMvQjtBQUNBLEdBQUc7QUFDSDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxFQUFFLDhEQUFTO0FBQ1g7QUFDQSxxQ0FBcUMscUJBQXFCLEVBQUUsWUFBWTtBQUN4RTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vdG9kby8uL3NyYy9zdHlsZS5jc3MiLCJ3ZWJwYWNrOi8vdG9kby8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vdG9kby8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzIiwid2VicGFjazovL3RvZG8vLi9zcmMvdGVtcGxhdGUuaHRtbCIsIndlYnBhY2s6Ly90b2RvLy4vbm9kZV9tb2R1bGVzL2h0bWwtbG9hZGVyL2Rpc3QvcnVudGltZS9nZXRVcmwuanMiLCJ3ZWJwYWNrOi8vdG9kby8uL3NyYy9zdHlsZS5jc3M/NzE2MyIsIndlYnBhY2s6Ly90b2RvLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL3RvZG8vLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzIiwid2VicGFjazovL3RvZG8vLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vdG9kby8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly90b2RvLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanMiLCJ3ZWJwYWNrOi8vdG9kby8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzIiwid2VicGFjazovL3RvZG8vLi9zcmMvY3JlYXRlVGFzay1MaXN0LmpzIiwid2VicGFjazovL3RvZG8vLi9zcmMvZGF5cy1sZWZ0LWNhbGN1bGF0b3IuanMiLCJ3ZWJwYWNrOi8vdG9kby8uL3NyYy90YXNrUHJlY2VudC1yZW5kZXIuanMiLCJ3ZWJwYWNrOi8vdG9kby93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly90b2RvL3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovL3RvZG8vd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3RvZG8vd2VicGFjay9ydW50aW1lL2dsb2JhbCIsIndlYnBhY2s6Ly90b2RvL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vdG9kby93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3RvZG8vd2VicGFjay9ydW50aW1lL3B1YmxpY1BhdGgiLCJ3ZWJwYWNrOi8vdG9kby93ZWJwYWNrL3J1bnRpbWUvanNvbnAgY2h1bmsgbG9hZGluZyIsIndlYnBhY2s6Ly90b2RvL3dlYnBhY2svcnVudGltZS9ub25jZSIsIndlYnBhY2s6Ly90b2RvLy4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiOnJvb3Qge1xcbiAgLS1jbHItcHJpbWFyeTogcmdiKDU0LCAxMTIsIDE5OSk7XFxuICAtLWNsci1saWdodDogI2Y0ZjRmNDtcXG4gIC0tY2xyLWRhcms6ICMzMzM7XFxuICAtLWNsci13YXJuaW5nOiByZ2IoOTksIDM2LCAzNik7XFxufVxcblxcbiosXFxuKjo6YmVmb3JlLFxcbio6OmFmdGVyIHtcXG4gIGZvbnQtZmFtaWx5OiBpbmhlcml0O1xcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG59XFxuXFxuYm9keSB7XFxuICBtYXJnaW46IDA7XFxuICBmb250LWZhbWlseTogXFxcIldvcmsgU2Fuc1xcXCIsIHNhbnMtc2VyaWY7XFxuICBmb250LXdlaWdodDogMzAwO1xcbiAgZm9udC1zaXplOiAxLjVyZW07XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1jbHItcHJpbWFyeSk7XFxuICBjb2xvcjogdmFyKC0tY2xyLWxpZ2h0KTtcXG5cXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBncmlkOlxcbiAgICBcXFwiaGVhZGVyIGhlYWRlciBoZWFkZXIgaGVhZGVyXFxcIiBhdXRvXFxuICAgIFxcXCIuLi4uLi4gbGlzdHMgYWN0aXZlIC4uLi4uLlxcXCIgYXV0byAvXFxuICAgIDFmciBtaW5tYXgoMTAwcHgsIDMwMHB4KSBtaW5tYXgoMjUwcHgsIDYwMHB4KSAxZnI7XFxufVxcblxcbi50aXRsZSB7XFxuICBncmlkLWFyZWE6IGhlYWRlcjtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gIGZvbnQtc2l6ZTogY2FsYyg3dmggKyAycmVtKTtcXG4gIGZvbnQtd2VpZ2h0OiA5MDA7XFxuICBjb2xvcjogcmdiYSgwLCAwLCAwLCAwLjEpO1xcbiAgbGV0dGVyLXNwYWNpbmc6IDJweDtcXG4gIG1hcmdpbjogLTAuM2VtIDAgMC41ZW07XFxufVxcblxcbi5hbGwtdGFza3Mge1xcbiAgZ3JpZC1hcmVhOiBsaXN0cztcXG59XFxuXFxuLnRhc2stbGlzdCB7XFxuICBmb250LXNpemU6IDEuMnJlbTtcXG4gIGxpbmUtaGVpZ2h0OiAxLjc7XFxuICBsaXN0LXN0eWxlOiBjaXJjbGU7XFxuICBwYWRkaW5nLWxlZnQ6IDEuMWVtO1xcbn1cXG5cXG4ubGlzdC1uYW1lIHtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuLmxpc3QtbmFtZTpob3ZlciB7XFxuICBvcGFjaXR5OiAwLjc7XFxufVxcblxcbmZvcm0ge1xcbiAgZGlzcGxheTogZmxleDtcXG59XFxuXFxuLmJ0biB7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxuICBiYWNrZ3JvdW5kOiAwO1xcbiAgYm9yZGVyOiAwO1xcbiAgcGFkZGluZzogMDtcXG4gIGNvbG9yOiBpbmhlcml0O1xcbn1cXG5cXG4uYnRuLmNyZWF0ZSB7XFxuICBmb250LXNpemU6IDEuNXJlbTtcXG4gIGZvbnQtd2VpZ2h0OiA5MDA7XFxuICBtYXJnaW4tcmlnaHQ6IDAuMjVlbTtcXG4gIHRyYW5zaXRpb246IG9wYWNpdHkgMjUwbXMgZWFzZS1pbjtcXG59XFxuXFxuLmJ0bi5saXN0OmhvdmVyIHtcXG4gIG9wYWNpdHk6IDAuNztcXG59XFxuXFxuLmJ0bi5kZWxldGUge1xcbiAgb3BhY2l0eTogMC43O1xcbiAgZm9udC1zaXplOiAxcmVtO1xcbiAgdHJhbnNpdGlvbjogY29sb3IgMjAwbXM7XFxufVxcblxcbi5idG4uZGVsZXRlOmhvdmVyIHtcXG4gIGNvbG9yOiB2YXIoLS1jbHItd2FybmluZyk7XFxufVxcblxcbi5uZXcge1xcbiAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XFxuICBib3JkZXI6IDA7XFxuICBjb2xvcjogaW5oZXJpdDtcXG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCBjdXJyZW50Q29sb3I7XFxuICBmb250LXNpemU6IGluaGVyaXQ7XFxuICBvdXRsaW5lOiBub25lO1xcblxcbiAgdHJhbnNpdGlvbjogYm9yZGVyLWJvdHRvbSAyNTBtcyBlYXNlLWluO1xcbiAgb3JkZXI6IDI7XFxuXFxuICBwYWRkaW5nOiAwLjI1ZW07XFxufVxcbi5uZXc6OnBsYWNlaG9sZGVyIHtcXG4gIGNvbG9yOiBpbmhlcml0O1xcbiAgb3BhY2l0eTogMC40O1xcbn1cXG4ubmV3OmZvY3VzIHtcXG4gIGJvcmRlci1ib3R0b20td2lkdGg6IDJweDtcXG59XFxuLm5ldzpmb2N1czo6cGxhY2Vob2xkZXIge1xcbiAgb3BhY2l0eTogMC4xNTtcXG59XFxuXFxuLm5ldy5saXN0IHtcXG4gIGZvbnQtc2l6ZTogMS4xcmVtO1xcbn1cXG4ubmV3LnRhc2sge1xcbiAgbWFyZ2luLWJvdHRvbTogMDtcXG59XFxuXFxuLmFjdGl2ZS1saXN0IHtcXG4gIGZvbnQtd2VpZ2h0OiA5MDA7XFxufVxcblxcbi50b2RvLWxpc3Qge1xcbiAgLS1zcGFjZXI6IDJyZW07XFxuICBhbGlnbi1zZWxmOiBzdGFydDtcXG4gIG1hcmdpbi10b3A6IDJyZW07XFxuICBncmlkLWFyZWE6IGFjdGl2ZTtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWNsci1saWdodCk7XFxuICBjb2xvcjogdmFyKC0tY2xyLWRhcmspO1xcbn1cXG5cXG4udG9kby1oZWFkZXIge1xcbiAgYmFja2dyb3VuZDogI2ZiYzgwYTtcXG4gIHBhZGRpbmc6IHZhcigtLXNwYWNlcik7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gIGhlaWdodDogYXV0bztcXG4gIGJveC1zaGFkb3c6IDAgNHB4IDJweCAtMnB4IGdyYXk7XFxufVxcblxcbi5saXN0LXRpdGxlIHtcXG4gIG1hcmdpbjogMCAxZW0gMCAwO1xcbn1cXG5cXG4udGFzay1jb3VudCB7XFxuICBtYXJnaW46IDA7XFxuICBmb250LXNpemU6IDFyZW07XFxufVxcblxcbi5jaXJjbGUtd3JhcCB7XFxuICBtYXJnaW46IDE1MHB4IGF1dG87XFxuICB3aWR0aDogMTUwcHg7XFxuICBoZWlnaHQ6IDE1MHB4O1xcbiAgYmFja2dyb3VuZDogI2ZlZmNmZjtcXG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcXG4gIGJvcmRlcjogMXB4IHNvbGlkICNjZGNiZDA7XFxufVxcblxcbi50b2RvLWJvZHkge1xcbiAgcGFkZGluZzogdmFyKC0tc3BhY2VyKTtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNmNmY3YmU7XFxufVxcblxcbi5uZXctdGFzay1jcmVhdG9yIC5jcmVhdGUge1xcbiAgY29sb3I6IHZhcigtLWNsci1wcmltYXJ5KTtcXG59XFxuXFxuW3R5cGU9XFxcImNoZWNrYm94XFxcIl0ge1xcbiAgb3BhY2l0eTogMDtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG59XFxuXFxuLnRhc2sgbGFiZWwge1xcbiAgZGlzcGxheTogZmxleC1pbmxpbmU7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbn1cXG5cXG4udGFzayB7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICBtYXJnaW4tYm90dG9tOiAxLjI1ZW07XFxufVxcbi50YXNrOjphZnRlciB7XFxuICBjb250ZW50OiBcXFwiXFxcIjtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIHJpZ2h0OiAwO1xcbiAgbGVmdDogMDtcXG4gIGJvdHRvbTogLTAuNWVtO1xcbiAgaGVpZ2h0OiAxcHg7XFxuICBiYWNrZ3JvdW5kOiBjdXJyZW50Q29sb3I7XFxuICBvcGFjaXR5OiAwLjE7XFxufVxcblxcbi5jdXN0b20tY2hlY2tib3gge1xcbiAgLS1zaXplOiAwLjc1ZW07XFxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxuICB3aWR0aDogdmFyKC0tc2l6ZSk7XFxuICBoZWlnaHQ6IHZhcigtLXNpemUpO1xcbiAgbWFyZ2luLXJpZ2h0OiB2YXIoLS1zaXplKTtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG4gIGJvcmRlcjogMnB4IHNvbGlkIGN1cnJlbnRDb2xvcjtcXG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcXG4gIHRyYW5zZm9ybTogc2NhbGUoMSk7XFxuICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMjAwbXMgZWFzZS1pbi1vdXQ7XFxufVxcblxcbi5jdXN0b20tZHVlLWRhdGUge1xcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xcbiAgcGFkZGluZzogMC4yNWVtO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDI2LCAyNSwgMjUpO1xcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xcbiAgZm9udC1mYW1pbHk6IEFyaWFsLCBIZWx2ZXRpY2EsIHNhbnMtc2VyaWY7XFxuICBmb250LXdlaWdodDogYm9sZDtcXG4gIGZvbnQtc2l6ZTogMWVtO1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgY29sb3I6IHRyYW5zcGFyZW50O1xcblxcbiAgcmlnaHQ6IDA7XFxuICBib3R0b206IC0wLjI1ZW07XFxufVxcblxcbi5jdXN0b20tZHVlLWRhdGUgc3BhbiB7XFxuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoXFxuICAgIDEzNWRlZyxcXG4gICAgdmFyKC0tY2xyLXByaW1hcnkpLFxcbiAgICB2YXIoLS1jbHItbGlnaHQpLFxcbiAgICBibHVlXFxuICApO1xcbiAgYmFja2dyb3VuZC1jbGlwOiB0ZXh0O1xcbiAgLXdlYmtpdC1iYWNrZ3JvdW5kLWNsaXA6IHRleHQ7XFxufVxcbi5jdXN0b20tZHVlLWRhdGU6OmJlZm9yZSxcXG4uY3VzdG9tLWR1ZS1kYXRlOjphZnRlciB7XFxuICBjb250ZW50OiBcXFwiXFxcIjtcXG4gIGRpc3BsYXk6IGJsb2NrO1xcbiAgd2lkdGg6IDUlO1xcbiAgaGVpZ2h0OiA1JTtcXG4gIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudChcXG4gICAgMTM1ZGVnLFxcbiAgICByZ2IoMjU1LCAxNDUsIDApLFxcbiAgICByZ2IoMjU1LCAwLCAyMjEpLFxcbiAgICBibHVlXFxuICApO1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgdG9wOiAtMTAlO1xcbiAgbGVmdDogLTQlO1xcbiAgei1pbmRleDogLTE7XFxuICBib3JkZXItcmFkaXVzOiA1cHg7XFxufVxcbi5jdXN0b20tZHVlLWRhdGU6OmFmdGVyIHtcXG4gIGZpbHRlcjogYmx1cig1cHgpO1xcbn1cXG5cXG4udGFzazpob3ZlciAuY3VzdG9tLWNoZWNrYm94LFxcblt0eXBlPVxcXCJjaGVja2JveFxcXCJdOmZvY3VzICsgbGFiZWwgLmN1c3RvbS1jaGVja2JveCB7XFxuICB0cmFuc2Zvcm06IHNjYWxlKDEuMik7XFxuICBjb2xvcjogdmFyKC0tY2xyLXByaW1hcnkpO1xcbn1cXG5cXG5bdHlwZT1cXFwiY2hlY2tib3hcXFwiXTpjaGVja2VkICsgbGFiZWwgLmN1c3RvbS1jaGVja2JveCB7XFxuICBiYWNrZ3JvdW5kOiB2YXIoLS1jbHItcHJpbWFyeSk7XFxuICBib3JkZXItY29sb3I6IHZhcigtLWNsci1wcmltYXJ5KTtcXG4gIGJveC1zaGFkb3c6IGluc2V0IDAgMCAwcHggMnB4IHdoaXRlO1xcbn1cXG5cXG5bdHlwZT1cXFwiY2hlY2tib3hcXFwiXTpjaGVja2VkICsgbGFiZWwge1xcbiAgb3BhY2l0eTogMC41O1xcbn1cXG5cXG4udGFzayBsYWJlbDo6YWZ0ZXIge1xcbiAgY29udGVudDogXFxcIlxcXCI7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICBsZWZ0OiAxLjVlbTtcXG4gIHJpZ2h0OiAwO1xcbiAgdG9wOiBjYWxjKDUwJSAtIDEuNXB4KTtcXG4gIGhlaWdodDogM3B4O1xcbiAgYmFja2dyb3VuZDogY3VycmVudENvbG9yO1xcbiAgdHJhbnNmb3JtOiBzY2FsZVgoMCk7XFxuICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMTUwbXMgZWFzZS1pbi1vdXQ7XFxuICB0cmFuc2Zvcm0tb3JpZ2luOiByaWdodDtcXG59XFxuXFxuW3R5cGU9XFxcImNoZWNrYm94XFxcIl06Y2hlY2tlZCArIGxhYmVsOjphZnRlciB7XFxuICB0cmFuc2Zvcm06IHNjYWxlWCgxKTtcXG4gIHRyYW5zZm9ybS1vcmlnaW46IGxlZnQ7XFxufVxcblxcbi5kZWxldGUtc3R1ZmYge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtZXZlbmx5O1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgd2lkdGg6IDEwMCU7XFxuICBsZWZ0OiAwO1xcbiAgYm90dG9tOiAtMzVweDtcXG4gIGNvbG9yOiB2YXIoLS1jbHItbGlnaHQpO1xcbn1cXG5cXG4uc2tpbGwge1xcbiAgLS1jaXJsY2Utc2l6ZTogMTYwcHg7XFxuICAtLWNpcmxjZS13aWR0aDogdmFyKC0tY2lybGNlLXNpemUpO1xcbiAgLS1jaXJsY2UtaGVpZ2h0OiB2YXIoLS1jaXJsY2Utc2l6ZSk7XFxuICB3aWR0aDogdmFyKC0tY2lybGNlLXdpZHRoKTtcXG4gIGhlaWdodDogdmFyKC0tY2lybGNlLWhlaWdodCk7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICBtYXJnaW46IDEwcHg7XFxufVxcblxcbi5vdXRlciB7XFxuICB3aWR0aDogdmFyKC0tY2lybGNlLXdpZHRoKTtcXG4gIGhlaWdodDogdmFyKC0tY2lybGNlLWhlaWdodCk7XFxuICBwYWRkaW5nOiBjYWxjKCh2YXIoLS1jaXJsY2Utd2lkdGgpICogMC4yNSkgLyAyKTtcXG4gIGJveC1zaGFkb3c6IDZweCA2cHggMTBweCAtMXB4IHJnYmEoMCwgMCwgMCwgMC4xNSksXFxuICAgIC02cHggLTZweCAxMHB4IC0xcHggcmdiYSgyMjUsIDIyNSwgMjI1LCAwLjcpO1xcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xcbn1cXG5cXG4uaW5uZXIge1xcbiAgd2lkdGg6IGNhbGModmFyKC0tY2lybGNlLXdpZHRoKSAqIDAuNzUpO1xcbiAgaGVpZ2h0OiBjYWxjKHZhcigtLWNpcmxjZS1oZWlnaHQpICogMC43NSk7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgYm94LXNoYWRvdzogaW5zZXQgNHB4IDRweCA2cHggLTFweCByZ2JhKDIyNSwgMjI1LCAyMjUsIDAuNyksXFxuICAgIC0wLjVweCAtMC41cHggMHB4IHJnYmEoMjI1LCAyMjUsIDIyNSwgMSksXFxuICAgIDAuNXB4IDAuNXB4IDBweCByZ2JhKDAsIDAsIDAsIDAuMTUpLCAwcHggMTJweCAxMHB4IC0xMHB4IHJnYmEoMCwgMCwgMCwgMC4wNSk7XFxuICBib3JkZXItcmFkaXVzOiA1MCU7XFxufVxcblxcbiNudW1iZXIge1xcbiAgZm9udC13ZWlnaHQ6IDYwMDtcXG4gIGNvbG9yOiAjNTU1O1xcbiAgZm9udC1zaXplOiAzMHB4O1xcbn1cXG5cXG5jaXJjbGUge1xcbiAgZmlsbDogbm9uZTtcXG4gIHN0cm9rZTogdXJsKCNHcmFkaWVudENvbG9yKTtcXG4gIHN0cm9rZS13aWR0aDogMjBweDtcXG4gIHN0cm9rZS1kYXNoYXJyYXk6IDQ1MDtcXG4gIHRyYW5zaXRpb246IGFsbCAwLjhzIGVhc2UtaW4tb3V0O1xcbn1cXG5cXG5zdmcge1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgdG9wOiAwO1xcbiAgbGVmdDogMDtcXG4gIHdpZHRoOiB2YXIoLS1jaXJsY2Utd2lkdGgpO1xcbiAgaGVpZ2h0OiB2YXIoLS1jaXJsY2UtaGVpZ2h0KTtcXG59XFxuXCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL3N0eWxlLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTtFQUNFLGdDQUFnQztFQUNoQyxvQkFBb0I7RUFDcEIsZ0JBQWdCO0VBQ2hCLDhCQUE4QjtBQUNoQzs7QUFFQTs7O0VBR0Usb0JBQW9CO0VBQ3BCLHNCQUFzQjtBQUN4Qjs7QUFFQTtFQUNFLFNBQVM7RUFDVCxvQ0FBb0M7RUFDcEMsZ0JBQWdCO0VBQ2hCLGlCQUFpQjtFQUNqQixvQ0FBb0M7RUFDcEMsdUJBQXVCOztFQUV2QixhQUFhO0VBQ2I7OztxREFHbUQ7QUFDckQ7O0FBRUE7RUFDRSxpQkFBaUI7RUFDakIsa0JBQWtCO0VBQ2xCLDJCQUEyQjtFQUMzQixnQkFBZ0I7RUFDaEIseUJBQXlCO0VBQ3pCLG1CQUFtQjtFQUNuQixzQkFBc0I7QUFDeEI7O0FBRUE7RUFDRSxnQkFBZ0I7QUFDbEI7O0FBRUE7RUFDRSxpQkFBaUI7RUFDakIsZ0JBQWdCO0VBQ2hCLGtCQUFrQjtFQUNsQixtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSxl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QXdCO0VBQ3hCLG9CQUFvQjtFQUNwQix1Q0FBdUM7RUFDdkMsdUJBQXVCO0FBQ3pCOztBQUVBO0VBQ0Usb0JBQW9CO0VBQ3BCLHNCQUFzQjtBQUN4Qjs7QUFFQTtFQUNFLGFBQWE7RUFDYiw2QkFBNkI7RUFDN0Isa0JBQWtCO0VBQ2xCLFdBQVc7RUFDWCxPQUFPO0VBQ1AsYUFBYTtFQUNiLHVCQUF1QjtBQUN6Qjs7QUFFQTtFQUNFLG9CQUFvQjtFQUNwQixrQ0FBa0M7RUFDbEMsbUNBQW1DO0VBQ25DLDBCQUEwQjtFQUMxQiw0QkFBNEI7RUFDNUIsa0JBQWtCO0VBQ2xCLFlBQVk7QUFDZDs7QUFFQTtFQUNFLDBCQUEwQjtFQUMxQiw0QkFBNEI7RUFDNUIsK0NBQStDO0VBQy9DO2dEQUM4QztFQUM5QyxrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRSx1Q0FBdUM7RUFDdkMseUNBQXlDO0VBQ3pDLGFBQWE7RUFDYix1QkFBdUI7RUFDdkIsbUJBQW1CO0VBQ25COztnRkFFOEU7RUFDOUUsa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0UsZ0JBQWdCO0VBQ2hCLFdBQVc7RUFDWCxlQUFlO0FBQ2pCOztBQUVBO0VBQ0UsVUFBVTtFQUNWLDJCQUEyQjtFQUMzQixrQkFBa0I7RUFDbEIscUJBQXFCO0VBQ3JCLGdDQUFnQztBQUNsQzs7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQixNQUFNO0VBQ04sT0FBTztFQUNQLDBCQUEwQjtFQUMxQiw0QkFBNEI7QUFDOUJcIixcInNvdXJjZXNDb250ZW50XCI6W1wiOnJvb3Qge1xcbiAgLS1jbHItcHJpbWFyeTogcmdiKDU0LCAxMTIsIDE5OSk7XFxuICAtLWNsci1saWdodDogI2Y0ZjRmNDtcXG4gIC0tY2xyLWRhcms6ICMzMzM7XFxuICAtLWNsci13YXJuaW5nOiByZ2IoOTksIDM2LCAzNik7XFxufVxcblxcbiosXFxuKjo6YmVmb3JlLFxcbio6OmFmdGVyIHtcXG4gIGZvbnQtZmFtaWx5OiBpbmhlcml0O1xcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG59XFxuXFxuYm9keSB7XFxuICBtYXJnaW46IDA7XFxuICBmb250LWZhbWlseTogXFxcIldvcmsgU2Fuc1xcXCIsIHNhbnMtc2VyaWY7XFxuICBmb250LXdlaWdodDogMzAwO1xcbiAgZm9udC1zaXplOiAxLjVyZW07XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1jbHItcHJpbWFyeSk7XFxuICBjb2xvcjogdmFyKC0tY2xyLWxpZ2h0KTtcXG5cXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBncmlkOlxcbiAgICBcXFwiaGVhZGVyIGhlYWRlciBoZWFkZXIgaGVhZGVyXFxcIiBhdXRvXFxuICAgIFxcXCIuLi4uLi4gbGlzdHMgYWN0aXZlIC4uLi4uLlxcXCIgYXV0byAvXFxuICAgIDFmciBtaW5tYXgoMTAwcHgsIDMwMHB4KSBtaW5tYXgoMjUwcHgsIDYwMHB4KSAxZnI7XFxufVxcblxcbi50aXRsZSB7XFxuICBncmlkLWFyZWE6IGhlYWRlcjtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gIGZvbnQtc2l6ZTogY2FsYyg3dmggKyAycmVtKTtcXG4gIGZvbnQtd2VpZ2h0OiA5MDA7XFxuICBjb2xvcjogcmdiYSgwLCAwLCAwLCAwLjEpO1xcbiAgbGV0dGVyLXNwYWNpbmc6IDJweDtcXG4gIG1hcmdpbjogLTAuM2VtIDAgMC41ZW07XFxufVxcblxcbi5hbGwtdGFza3Mge1xcbiAgZ3JpZC1hcmVhOiBsaXN0cztcXG59XFxuXFxuLnRhc2stbGlzdCB7XFxuICBmb250LXNpemU6IDEuMnJlbTtcXG4gIGxpbmUtaGVpZ2h0OiAxLjc7XFxuICBsaXN0LXN0eWxlOiBjaXJjbGU7XFxuICBwYWRkaW5nLWxlZnQ6IDEuMWVtO1xcbn1cXG5cXG4ubGlzdC1uYW1lIHtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuLmxpc3QtbmFtZTpob3ZlciB7XFxuICBvcGFjaXR5OiAwLjc7XFxufVxcblxcbmZvcm0ge1xcbiAgZGlzcGxheTogZmxleDtcXG59XFxuXFxuLmJ0biB7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxuICBiYWNrZ3JvdW5kOiAwO1xcbiAgYm9yZGVyOiAwO1xcbiAgcGFkZGluZzogMDtcXG4gIGNvbG9yOiBpbmhlcml0O1xcbn1cXG5cXG4uYnRuLmNyZWF0ZSB7XFxuICBmb250LXNpemU6IDEuNXJlbTtcXG4gIGZvbnQtd2VpZ2h0OiA5MDA7XFxuICBtYXJnaW4tcmlnaHQ6IDAuMjVlbTtcXG4gIHRyYW5zaXRpb246IG9wYWNpdHkgMjUwbXMgZWFzZS1pbjtcXG59XFxuXFxuLmJ0bi5saXN0OmhvdmVyIHtcXG4gIG9wYWNpdHk6IDAuNztcXG59XFxuXFxuLmJ0bi5kZWxldGUge1xcbiAgb3BhY2l0eTogMC43O1xcbiAgZm9udC1zaXplOiAxcmVtO1xcbiAgdHJhbnNpdGlvbjogY29sb3IgMjAwbXM7XFxufVxcblxcbi5idG4uZGVsZXRlOmhvdmVyIHtcXG4gIGNvbG9yOiB2YXIoLS1jbHItd2FybmluZyk7XFxufVxcblxcbi5uZXcge1xcbiAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XFxuICBib3JkZXI6IDA7XFxuICBjb2xvcjogaW5oZXJpdDtcXG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCBjdXJyZW50Q29sb3I7XFxuICBmb250LXNpemU6IGluaGVyaXQ7XFxuICBvdXRsaW5lOiBub25lO1xcblxcbiAgdHJhbnNpdGlvbjogYm9yZGVyLWJvdHRvbSAyNTBtcyBlYXNlLWluO1xcbiAgb3JkZXI6IDI7XFxuXFxuICBwYWRkaW5nOiAwLjI1ZW07XFxufVxcbi5uZXc6OnBsYWNlaG9sZGVyIHtcXG4gIGNvbG9yOiBpbmhlcml0O1xcbiAgb3BhY2l0eTogMC40O1xcbn1cXG4ubmV3OmZvY3VzIHtcXG4gIGJvcmRlci1ib3R0b20td2lkdGg6IDJweDtcXG59XFxuLm5ldzpmb2N1czo6cGxhY2Vob2xkZXIge1xcbiAgb3BhY2l0eTogMC4xNTtcXG59XFxuXFxuLm5ldy5saXN0IHtcXG4gIGZvbnQtc2l6ZTogMS4xcmVtO1xcbn1cXG4ubmV3LnRhc2sge1xcbiAgbWFyZ2luLWJvdHRvbTogMDtcXG59XFxuXFxuLmFjdGl2ZS1saXN0IHtcXG4gIGZvbnQtd2VpZ2h0OiA5MDA7XFxufVxcblxcbi50b2RvLWxpc3Qge1xcbiAgLS1zcGFjZXI6IDJyZW07XFxuICBhbGlnbi1zZWxmOiBzdGFydDtcXG4gIG1hcmdpbi10b3A6IDJyZW07XFxuICBncmlkLWFyZWE6IGFjdGl2ZTtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWNsci1saWdodCk7XFxuICBjb2xvcjogdmFyKC0tY2xyLWRhcmspO1xcbn1cXG5cXG4udG9kby1oZWFkZXIge1xcbiAgYmFja2dyb3VuZDogI2ZiYzgwYTtcXG4gIHBhZGRpbmc6IHZhcigtLXNwYWNlcik7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gIGhlaWdodDogYXV0bztcXG4gIGJveC1zaGFkb3c6IDAgNHB4IDJweCAtMnB4IGdyYXk7XFxufVxcblxcbi5saXN0LXRpdGxlIHtcXG4gIG1hcmdpbjogMCAxZW0gMCAwO1xcbn1cXG5cXG4udGFzay1jb3VudCB7XFxuICBtYXJnaW46IDA7XFxuICBmb250LXNpemU6IDFyZW07XFxufVxcblxcbi5jaXJjbGUtd3JhcCB7XFxuICBtYXJnaW46IDE1MHB4IGF1dG87XFxuICB3aWR0aDogMTUwcHg7XFxuICBoZWlnaHQ6IDE1MHB4O1xcbiAgYmFja2dyb3VuZDogI2ZlZmNmZjtcXG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcXG4gIGJvcmRlcjogMXB4IHNvbGlkICNjZGNiZDA7XFxufVxcblxcbi50b2RvLWJvZHkge1xcbiAgcGFkZGluZzogdmFyKC0tc3BhY2VyKTtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNmNmY3YmU7XFxufVxcblxcbi5uZXctdGFzay1jcmVhdG9yIC5jcmVhdGUge1xcbiAgY29sb3I6IHZhcigtLWNsci1wcmltYXJ5KTtcXG59XFxuXFxuW3R5cGU9XFxcImNoZWNrYm94XFxcIl0ge1xcbiAgb3BhY2l0eTogMDtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG59XFxuXFxuLnRhc2sgbGFiZWwge1xcbiAgZGlzcGxheTogZmxleC1pbmxpbmU7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbn1cXG5cXG4udGFzayB7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICBtYXJnaW4tYm90dG9tOiAxLjI1ZW07XFxufVxcbi50YXNrOjphZnRlciB7XFxuICBjb250ZW50OiBcXFwiXFxcIjtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIHJpZ2h0OiAwO1xcbiAgbGVmdDogMDtcXG4gIGJvdHRvbTogLTAuNWVtO1xcbiAgaGVpZ2h0OiAxcHg7XFxuICBiYWNrZ3JvdW5kOiBjdXJyZW50Q29sb3I7XFxuICBvcGFjaXR5OiAwLjE7XFxufVxcblxcbi5jdXN0b20tY2hlY2tib3gge1xcbiAgLS1zaXplOiAwLjc1ZW07XFxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxuICB3aWR0aDogdmFyKC0tc2l6ZSk7XFxuICBoZWlnaHQ6IHZhcigtLXNpemUpO1xcbiAgbWFyZ2luLXJpZ2h0OiB2YXIoLS1zaXplKTtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG4gIGJvcmRlcjogMnB4IHNvbGlkIGN1cnJlbnRDb2xvcjtcXG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcXG4gIHRyYW5zZm9ybTogc2NhbGUoMSk7XFxuICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMjAwbXMgZWFzZS1pbi1vdXQ7XFxufVxcblxcbi5jdXN0b20tZHVlLWRhdGUge1xcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xcbiAgcGFkZGluZzogMC4yNWVtO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDI2LCAyNSwgMjUpO1xcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xcbiAgZm9udC1mYW1pbHk6IEFyaWFsLCBIZWx2ZXRpY2EsIHNhbnMtc2VyaWY7XFxuICBmb250LXdlaWdodDogYm9sZDtcXG4gIGZvbnQtc2l6ZTogMWVtO1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgY29sb3I6IHRyYW5zcGFyZW50O1xcblxcbiAgcmlnaHQ6IDA7XFxuICBib3R0b206IC0wLjI1ZW07XFxufVxcblxcbi5jdXN0b20tZHVlLWRhdGUgc3BhbiB7XFxuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoXFxuICAgIDEzNWRlZyxcXG4gICAgdmFyKC0tY2xyLXByaW1hcnkpLFxcbiAgICB2YXIoLS1jbHItbGlnaHQpLFxcbiAgICBibHVlXFxuICApO1xcbiAgYmFja2dyb3VuZC1jbGlwOiB0ZXh0O1xcbiAgLXdlYmtpdC1iYWNrZ3JvdW5kLWNsaXA6IHRleHQ7XFxufVxcbi5jdXN0b20tZHVlLWRhdGU6OmJlZm9yZSxcXG4uY3VzdG9tLWR1ZS1kYXRlOjphZnRlciB7XFxuICBjb250ZW50OiBcXFwiXFxcIjtcXG4gIGRpc3BsYXk6IGJsb2NrO1xcbiAgd2lkdGg6IDUlO1xcbiAgaGVpZ2h0OiA1JTtcXG4gIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudChcXG4gICAgMTM1ZGVnLFxcbiAgICByZ2IoMjU1LCAxNDUsIDApLFxcbiAgICByZ2IoMjU1LCAwLCAyMjEpLFxcbiAgICBibHVlXFxuICApO1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgdG9wOiAtMTAlO1xcbiAgbGVmdDogLTQlO1xcbiAgei1pbmRleDogLTE7XFxuICBib3JkZXItcmFkaXVzOiA1cHg7XFxufVxcbi5jdXN0b20tZHVlLWRhdGU6OmFmdGVyIHtcXG4gIGZpbHRlcjogYmx1cig1cHgpO1xcbn1cXG5cXG4udGFzazpob3ZlciAuY3VzdG9tLWNoZWNrYm94LFxcblt0eXBlPVxcXCJjaGVja2JveFxcXCJdOmZvY3VzICsgbGFiZWwgLmN1c3RvbS1jaGVja2JveCB7XFxuICB0cmFuc2Zvcm06IHNjYWxlKDEuMik7XFxuICBjb2xvcjogdmFyKC0tY2xyLXByaW1hcnkpO1xcbn1cXG5cXG5bdHlwZT1cXFwiY2hlY2tib3hcXFwiXTpjaGVja2VkICsgbGFiZWwgLmN1c3RvbS1jaGVja2JveCB7XFxuICBiYWNrZ3JvdW5kOiB2YXIoLS1jbHItcHJpbWFyeSk7XFxuICBib3JkZXItY29sb3I6IHZhcigtLWNsci1wcmltYXJ5KTtcXG4gIGJveC1zaGFkb3c6IGluc2V0IDAgMCAwcHggMnB4IHdoaXRlO1xcbn1cXG5cXG5bdHlwZT1cXFwiY2hlY2tib3hcXFwiXTpjaGVja2VkICsgbGFiZWwge1xcbiAgb3BhY2l0eTogMC41O1xcbn1cXG5cXG4udGFzayBsYWJlbDo6YWZ0ZXIge1xcbiAgY29udGVudDogXFxcIlxcXCI7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICBsZWZ0OiAxLjVlbTtcXG4gIHJpZ2h0OiAwO1xcbiAgdG9wOiBjYWxjKDUwJSAtIDEuNXB4KTtcXG4gIGhlaWdodDogM3B4O1xcbiAgYmFja2dyb3VuZDogY3VycmVudENvbG9yO1xcbiAgdHJhbnNmb3JtOiBzY2FsZVgoMCk7XFxuICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMTUwbXMgZWFzZS1pbi1vdXQ7XFxuICB0cmFuc2Zvcm0tb3JpZ2luOiByaWdodDtcXG59XFxuXFxuW3R5cGU9XFxcImNoZWNrYm94XFxcIl06Y2hlY2tlZCArIGxhYmVsOjphZnRlciB7XFxuICB0cmFuc2Zvcm06IHNjYWxlWCgxKTtcXG4gIHRyYW5zZm9ybS1vcmlnaW46IGxlZnQ7XFxufVxcblxcbi5kZWxldGUtc3R1ZmYge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtZXZlbmx5O1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgd2lkdGg6IDEwMCU7XFxuICBsZWZ0OiAwO1xcbiAgYm90dG9tOiAtMzVweDtcXG4gIGNvbG9yOiB2YXIoLS1jbHItbGlnaHQpO1xcbn1cXG5cXG4uc2tpbGwge1xcbiAgLS1jaXJsY2Utc2l6ZTogMTYwcHg7XFxuICAtLWNpcmxjZS13aWR0aDogdmFyKC0tY2lybGNlLXNpemUpO1xcbiAgLS1jaXJsY2UtaGVpZ2h0OiB2YXIoLS1jaXJsY2Utc2l6ZSk7XFxuICB3aWR0aDogdmFyKC0tY2lybGNlLXdpZHRoKTtcXG4gIGhlaWdodDogdmFyKC0tY2lybGNlLWhlaWdodCk7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICBtYXJnaW46IDEwcHg7XFxufVxcblxcbi5vdXRlciB7XFxuICB3aWR0aDogdmFyKC0tY2lybGNlLXdpZHRoKTtcXG4gIGhlaWdodDogdmFyKC0tY2lybGNlLWhlaWdodCk7XFxuICBwYWRkaW5nOiBjYWxjKCh2YXIoLS1jaXJsY2Utd2lkdGgpICogMC4yNSkgLyAyKTtcXG4gIGJveC1zaGFkb3c6IDZweCA2cHggMTBweCAtMXB4IHJnYmEoMCwgMCwgMCwgMC4xNSksXFxuICAgIC02cHggLTZweCAxMHB4IC0xcHggcmdiYSgyMjUsIDIyNSwgMjI1LCAwLjcpO1xcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xcbn1cXG5cXG4uaW5uZXIge1xcbiAgd2lkdGg6IGNhbGModmFyKC0tY2lybGNlLXdpZHRoKSAqIDAuNzUpO1xcbiAgaGVpZ2h0OiBjYWxjKHZhcigtLWNpcmxjZS1oZWlnaHQpICogMC43NSk7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgYm94LXNoYWRvdzogaW5zZXQgNHB4IDRweCA2cHggLTFweCByZ2JhKDIyNSwgMjI1LCAyMjUsIDAuNyksXFxuICAgIC0wLjVweCAtMC41cHggMHB4IHJnYmEoMjI1LCAyMjUsIDIyNSwgMSksXFxuICAgIDAuNXB4IDAuNXB4IDBweCByZ2JhKDAsIDAsIDAsIDAuMTUpLCAwcHggMTJweCAxMHB4IC0xMHB4IHJnYmEoMCwgMCwgMCwgMC4wNSk7XFxuICBib3JkZXItcmFkaXVzOiA1MCU7XFxufVxcblxcbiNudW1iZXIge1xcbiAgZm9udC13ZWlnaHQ6IDYwMDtcXG4gIGNvbG9yOiAjNTU1O1xcbiAgZm9udC1zaXplOiAzMHB4O1xcbn1cXG5cXG5jaXJjbGUge1xcbiAgZmlsbDogbm9uZTtcXG4gIHN0cm9rZTogdXJsKCNHcmFkaWVudENvbG9yKTtcXG4gIHN0cm9rZS13aWR0aDogMjBweDtcXG4gIHN0cm9rZS1kYXNoYXJyYXk6IDQ1MDtcXG4gIHRyYW5zaXRpb246IGFsbCAwLjhzIGVhc2UtaW4tb3V0O1xcbn1cXG5cXG5zdmcge1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgdG9wOiAwO1xcbiAgbGVmdDogMDtcXG4gIHdpZHRoOiB2YXIoLS1jaXJsY2Utd2lkdGgpO1xcbiAgaGVpZ2h0OiB2YXIoLS1jaXJsY2UtaGVpZ2h0KTtcXG59XFxuXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdO1xuXG4gIC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBcIlwiO1xuICAgICAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBpdGVtWzVdICE9PSBcInVuZGVmaW5lZFwiO1xuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgY29udGVudCArPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9O1xuXG4gIC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG4gIGxpc3QuaSA9IGZ1bmN0aW9uIGkobW9kdWxlcywgbWVkaWEsIGRlZHVwZSwgc3VwcG9ydHMsIGxheWVyKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCB1bmRlZmluZWRdXTtcbiAgICB9XG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBrID0gMDsgayA8IHRoaXMubGVuZ3RoOyBrKyspIHtcbiAgICAgICAgdmFyIGlkID0gdGhpc1trXVswXTtcbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgZm9yICh2YXIgX2sgPSAwOyBfayA8IG1vZHVsZXMubGVuZ3RoOyBfaysrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19rXSk7XG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG4gICAgICBpZiAodHlwZW9mIGxheWVyICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIGlmICh0eXBlb2YgaXRlbVs1XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKG1lZGlhKSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChzdXBwb3J0cykge1xuICAgICAgICBpZiAoIWl0ZW1bNF0pIHtcbiAgICAgICAgICBpdGVtWzRdID0gXCJcIi5jb25jYXQoc3VwcG9ydHMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs0XSA9IHN1cHBvcnRzO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0ZW0pIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdO1xuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCIvLyBJbXBvcnRzXG5pbXBvcnQgX19fSFRNTF9MT0FERVJfR0VUX1NPVVJDRV9GUk9NX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2h0bWwtbG9hZGVyL2Rpc3QvcnVudGltZS9nZXRVcmwuanNcIjtcbnZhciBfX19IVE1MX0xPQURFUl9JTVBPUlRfMF9fXyA9IG5ldyBVUkwoXCIuL2luZGV4LmpzXCIsIGltcG9ydC5tZXRhLnVybCk7XG4vLyBNb2R1bGVcbnZhciBfX19IVE1MX0xPQURFUl9SRVBMQUNFTUVOVF8wX19fID0gX19fSFRNTF9MT0FERVJfR0VUX1NPVVJDRV9GUk9NX0lNUE9SVF9fXyhfX19IVE1MX0xPQURFUl9JTVBPUlRfMF9fXyk7XG52YXIgY29kZSA9IFwiPCFET0NUWVBFIGh0bWw+XFxuPGh0bWwgbGFuZz1cXFwiZW5cXFwiPlxcbiAgPGhlYWQ+XFxuICAgIDxtZXRhIGNoYXJzZXQ9XFxcIlVURi04XFxcIiAvPlxcbiAgICA8bWV0YSBodHRwLWVxdWl2PVxcXCJYLVVBLUNvbXBhdGlibGVcXFwiIGNvbnRlbnQ9XFxcIklFPWVkZ2VcXFwiIC8+XFxuICAgIDxtZXRhIG5hbWU9XFxcInZpZXdwb3J0XFxcIiBjb250ZW50PVxcXCJ3aWR0aD1kZXZpY2Utd2lkdGgsIGluaXRpYWwtc2NhbGU9MS4wXFxcIiAvPlxcbiAgICA8bGluayByZWw9XFxcInByZWNvbm5lY3RcXFwiIGhyZWY9XFxcImh0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb21cXFwiIC8+XFxuICAgIDxsaW5rIHJlbD1cXFwicHJlY29ubmVjdFxcXCIgaHJlZj1cXFwiaHR0cHM6Ly9mb250cy5nc3RhdGljLmNvbVxcXCIgY3Jvc3NvcmlnaW4gLz5cXG4gICAgPGxpbmsgcmVsPVxcXCJwcmVjb25uZWN0XFxcIiBocmVmPVxcXCJodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tXFxcIiAvPlxcbiAgICA8bGluayByZWw9XFxcInByZWNvbm5lY3RcXFwiIGhyZWY9XFxcImh0dHBzOi8vZm9udHMuZ3N0YXRpYy5jb21cXFwiIGNyb3Nzb3JpZ2luIC8+XFxuICAgIDxsaW5rXFxuICAgICAgaHJlZj1cXFwiaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3MyP2ZhbWlseT1Xb3JrK1NhbnM6d2dodEAyMDA7MzAwJmRpc3BsYXk9c3dhcFxcXCJcXG4gICAgICByZWw9XFxcInN0eWxlc2hlZXRcXFwiXFxuICAgIC8+XFxuICAgIDxcIiArIFwic2NyaXB0IHNyYz1cXFwiXCIgKyBfX19IVE1MX0xPQURFUl9SRVBMQUNFTUVOVF8wX19fICsgXCJcXFwiPjxcIiArIFwiL3NjcmlwdD5cXG4gICAgPHRpdGxlPlRvRG88L3RpdGxlPlxcbiAgPC9oZWFkPlxcbiAgPGJvZHk+XFxuICAgIDxoMSBjbGFzcz1cXFwidGl0bGVcXFwiPlN0dWZmIEkgbmVlZCB0byBkbzwvaDE+XFxuXFxuICAgIDxkaXYgY2xhc3M9XFxcImFsbC10YXNrc1xcXCI+XFxuICAgICAgPGgyIGNsYXNzPVxcXCJ0YXNrLWxpc3QtdGl0bGVcXFwiPk15IGxpc3RzPC9oMj5cXG4gICAgICA8dWwgY2xhc3M9XFxcInRhc2stbGlzdFxcXCIgZGF0YS1saXN0cz48L3VsPlxcblxcbiAgICAgIDxmb3JtIGFjdGlvbj1cXFwiXFxcIiBkYXRhLW5ldy1saXN0LWZvcm0+XFxuICAgICAgICA8aW5wdXQgXFxuICAgICAgICAgIHR5cGU9XFxcInRleHRcXFwiXFxuICAgICAgICAgIGNsYXNzPVxcXCJuZXcgbGlzdFxcXCJcXG4gICAgICAgICAgZGF0YS1uZXctbGlzdC1pbnB1dFxcbiAgICAgICAgICBwbGFjZWhvbGRlcj1cXFwibmV3IGxpc3QgbmFtZVxcXCJcXG4gICAgICAgICAgYXJpYS1sYWJlbD1cXFwibmV3IGxpc3QgbmFtZVxcXCJcXG4gICAgICAgIC8+XFxuICAgICAgICA8YnV0dG9uIGNsYXNzPVxcXCJidG4gY3JlYXRlXFxcIiBhcmlhLWxhYmVsPVxcXCJjcmVhdGUgbmV3IGxpc3RcXFwiPis8L2J1dHRvbj5cXG4gICAgICA8L2Zvcm0+XFxuICAgIDwvZGl2PlxcblxcbiAgICA8ZGl2IGNsYXNzPVxcXCJ0b2RvLWxpc3RcXFwiIGRhdGEtbGlzdC1kaXNwbGF5LWNvbnRhaW5lcj5cXG4gICAgICA8ZGl2IGNsYXNzPVxcXCJ0b2RvLWhlYWRlclxcXCI+XFxuICAgICAgICA8aDIgY2xhc3M9XFxcImxpc3QtdGl0bGVcXFwiIGRhdGEtbGlzdC10aXRsZT5Zb3VUdWJlPC9oMj5cXG4gICAgICAgIDwhLS0gPHAgY2xhc3M9XFxcInRhc2stY291bnRcXFwiIGRhdGEtbGlzdC1jb3VudD4zIHRhc2tzIHJlbWFpbmluZzwvcD4gLS0+XFxuICAgICAgICA8IS0tIENvdW50ZXIgY2lybGNlIC0tPlxcbiAgICAgICAgPGRpdiBjbGFzcz1cXFwic2tpbGxcXFwiPlxcbiAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJvdXRlclxcXCI+XFxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwiaW5uZXJcXFwiPlxcbiAgICAgICAgICAgICAgPGRpdiBpZD1cXFwibnVtYmVyXFxcIj48L2Rpdj5cXG4gICAgICAgICAgICA8L2Rpdj5cXG4gICAgICAgICAgPC9kaXY+XFxuICAgIFxcbiAgICAgICAgICA8c3ZnIHhtbG5zPVxcXCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1xcXCIgdmVyc2lvbj1cXFwiMS4xXFxcIj5cXG4gICAgICAgICAgICA8ZGVmcz5cXG4gICAgICAgICAgICAgIDxsaW5lYXJHcmFkaWVudCBpZD1cXFwiR3JhZGllbnRDb2xvclxcXCI+XFxuICAgICAgICAgICAgICAgIDxzdG9wIG9mZnNldD1cXFwiMCVcXFwiIHN0b3AtY29sb3I9XFxcIiNEQTIyRkZcXFwiPjwvc3RvcD5cXG4gICAgICAgICAgICAgICAgPHN0b3Agb2Zmc2V0PVxcXCIxMCVcXFwiIHN0b3AtY29sb3I9XFxcIiM5NzMzRUVcXFwiPjwvc3RvcD5cXG4gICAgICAgICAgICAgIDwvbGluZWFyR3JhZGllbnQ+XFxuICAgICAgICAgICAgPC9kZWZzPlxcbiAgICAgICAgICAgIDxjaXJjbGVcXG4gICAgICAgICAgICAgIGlkPVxcXCJjaXJjbGVcXFwiXFxuICAgICAgICAgICAgICBjeD1cXFwiNTAlXFxcIlxcbiAgICAgICAgICAgICAgY3k9XFxcIjUwJVxcXCJcXG4gICAgICAgICAgICAgIHI9XFxcIjQzLjc1JVxcXCJcXG4gICAgICAgICAgICAgIHN0cm9rZS1saW5lY2FwPVxcXCJyb3VuZFxcXCJcXG4gICAgICAgICAgICA+PC9jaXJjbGU+XFxuICAgICAgICAgIDwvc3ZnPlxcbiAgICAgICAgPC9kaXY+XFxuICAgICAgPC9kaXY+XFxuXFxuICAgICAgPGRpdiBjbGFzcz1cXFwidG9kby1ib2R5XFxcIj5cXG4gICAgICAgIDxkaXYgY2xhc3M9XFxcInRhc2tzXFxcIiBkYXRhLXRhc2tzPjwvZGl2PlxcblxcbiAgICAgICAgPGRpdiBjbGFzcz1cXFwibmV3LXRhc2stY3JlYXRvclxcXCI+XFxuICAgICAgICAgICAgPGZvcm0gYWN0aW9uPVxcXCJcXFwiIGRhdGEtbmV3LXRhc2stZm9ybT5cXG4gICAgICAgICAgICAgICAgPGlucHV0IFxcbiAgICAgICAgICAgICAgICAgIHR5cGU9XFxcInRleHRcXFwiXFxuICAgICAgICAgICAgICAgICAgZGF0YS1uZXctdGFzay1pbnB1dFxcbiAgICAgICAgICAgICAgICAgIGNsYXNzPVxcXCJuZXcgdGFza1xcXCJcXG4gICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cXFwibmV3IHRhc2sgbmFtZVxcXCJcXG4gICAgICAgICAgICAgICAgICBhcmlhLWxhYmVsPVxcXCJuZXcgdGFzayBuYW1lXFxcIlxcbiAgICAgICAgICAgICAgICAvPlxcbiAgICAgICAgICAgICAgICA8aW5wdXQgXFxuICAgICAgICAgICAgICAgIHR5cGU9XFxcImRhdGVcXFwiXFxuICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVxcXCJkZC1tbS15eXl5XFxcIlxcbiAgICAgICAgICAgICAgICBuYW1lPVxcXCJiZWdpblxcXCJcXG4gICAgICAgICAgICAgICAgdmFsdWU9XFxcIlxcXCJcXG4gICAgICAgICAgICAgICAgZGF0YS1uZXctdGFzay1kYXRlLWlucHV0XFxuICAgICAgICAgICAgICAgIGNsYXNzPVxcXCJuZXcgdGFza1xcXCI+XFxuICAgICAgICAgICAgICAgIDxidXR0b24gY2xhc3M9XFxcImJ0biBjcmVhdGVcXFwiIGFyaWEtbGFiZWw9XFxcImNyZWF0ZSBuZXcgdGFza1xcXCI+KzwvYnV0dG9uPlxcbiAgICAgICAgICAgICAgPC9mb3JtPlxcbiAgICAgICAgPC9kaXY+XFxuXFxuICAgICAgICA8ZGl2IGNsYXNzPVxcXCJkZWxldGUtc3R1ZmZcXFwiPlxcbiAgICAgICAgICA8YnV0dG9uIGNsYXNzPVxcXCJidG4gZGVsZXRlXFxcIiBkYXRhLWNsZWFyLWNvbXBsZXRlLXRhc2tzLWJ1dHRvbj5DbGVhciBjb21wbGV0ZWQgdGFza3M8L2J1dHRvbj5cXG4gICAgICAgICAgPGJ1dHRvbiBjbGFzcz1cXFwiYnRuIGRlbGV0ZVxcXCIgZGF0YS1kZWxldGUtbGlzdC1idXR0b24+RGVsZXRlIGxpc3Q8L2J1dHRvbj5cXG4gICAgICAgIDwvZGl2PlxcbiAgICAgIDwvZGl2PlxcbiAgICA8L2Rpdj5cXG5cXG5cXG5cXG5cXG4gICBcXG4gICAgPC9kaXY+XFxuICAgIDx0ZW1wbGF0ZSBpZD1cXFwidGFzay10ZW1wbGF0ZVxcXCI+XFxuICAgICAgPGRpdiBjbGFzcz1cXFwidGFza1xcXCI+XFxuICAgICAgICA8ZGl2IGNsYXNzPVxcXCJjdXN0b20tZHVlLWRhdGVcXFwiPlxcbiAgICAgICAgICA8c3BhbiBjbGFzcz1cXFwiZHVlLWRheXMtZGlzcGxheVxcXCI+PC9zcGFuPlxcbiAgICAgICAgPC9kaXY+ICBcXG4gICAgICAgIDxpbnB1dCB0eXBlPVxcXCJjaGVja2JveFxcXCIgLz5cXG4gICAgICAgIDxsYWJlbD5cXG4gICAgICAgICAgPHNwYW4gY2xhc3M9XFxcImN1c3RvbS1jaGVja2JveFxcXCI+PC9zcGFuPiAgICAgICBcXG4gICAgICAgIDwvbGFiZWw+XFxuICAgICAgPC9kaXY+XFxuICAgIDwvdGVtcGxhdGU+XFxuICA8L2JvZHk+XFxuPC9odG1sPlxcblwiO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgY29kZTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAodXJsLCBvcHRpb25zKSB7XG4gIGlmICghb3B0aW9ucykge1xuICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1wYXJhbS1yZWFzc2lnblxuICAgIG9wdGlvbnMgPSB7fTtcbiAgfVxuXG4gIGlmICghdXJsKSB7XG4gICAgcmV0dXJuIHVybDtcbiAgfSAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tdW5kZXJzY29yZS1kYW5nbGUsIG5vLXBhcmFtLXJlYXNzaWduXG5cblxuICB1cmwgPSBTdHJpbmcodXJsLl9fZXNNb2R1bGUgPyB1cmwuZGVmYXVsdCA6IHVybCk7XG5cbiAgaWYgKG9wdGlvbnMuaGFzaCkge1xuICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1wYXJhbS1yZWFzc2lnblxuICAgIHVybCArPSBvcHRpb25zLmhhc2g7XG4gIH1cblxuICBpZiAob3B0aW9ucy5tYXliZU5lZWRRdW90ZXMgJiYgL1tcXHRcXG5cXGZcXHIgXCInPTw+YF0vLnRlc3QodXJsKSkge1xuICAgIHJldHVybiBcIlxcXCJcIi5jb25jYXQodXJsLCBcIlxcXCJcIik7XG4gIH1cblxuICByZXR1cm4gdXJsO1xufTsiLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHN0eWxlc0luRE9NID0gW107XG5cbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5ET00ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5ET01baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiByZXN1bHQ7XG59XG5cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleEJ5SWRlbnRpZmllciA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXSxcbiAgICAgIHN1cHBvcnRzOiBpdGVtWzRdLFxuICAgICAgbGF5ZXI6IGl0ZW1bNV1cbiAgICB9O1xuXG4gICAgaWYgKGluZGV4QnlJZGVudGlmaWVyICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciB1cGRhdGVyID0gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucyk7XG4gICAgICBvcHRpb25zLmJ5SW5kZXggPSBpO1xuICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKGksIDAsIHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogdXBkYXRlcixcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuXG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuXG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cblxuZnVuY3Rpb24gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgYXBpID0gb3B0aW9ucy5kb21BUEkob3B0aW9ucyk7XG4gIGFwaS51cGRhdGUob2JqKTtcblxuICB2YXIgdXBkYXRlciA9IGZ1bmN0aW9uIHVwZGF0ZXIobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCAmJiBuZXdPYmouc3VwcG9ydHMgPT09IG9iai5zdXBwb3J0cyAmJiBuZXdPYmoubGF5ZXIgPT09IG9iai5sYXllcikge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIGFwaS51cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbW92ZSgpO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gdXBkYXRlcjtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cblxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG5cbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcblxuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcblxuICAgICAgaWYgKHN0eWxlc0luRE9NW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRPTVtfaW5kZXhdLnVwZGF0ZXIoKTtcblxuICAgICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgbWVtbyA9IHt9O1xuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cbmZ1bmN0aW9uIGdldFRhcmdldCh0YXJnZXQpIHtcbiAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7IC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG5cbiAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICB0cnkge1xuICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gIH1cblxuICByZXR1cm4gbWVtb1t0YXJnZXRdO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxuZnVuY3Rpb24gaW5zZXJ0QnlTZWxlY3RvcihpbnNlcnQsIHN0eWxlKSB7XG4gIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQoaW5zZXJ0KTtcblxuICBpZiAoIXRhcmdldCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gIH1cblxuICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydEJ5U2VsZWN0b3I7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG4gIG9wdGlvbnMuc2V0QXR0cmlidXRlcyhlbGVtZW50LCBvcHRpb25zLmF0dHJpYnV0ZXMpO1xuICBvcHRpb25zLmluc2VydChlbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xuICByZXR1cm4gZWxlbWVudDtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzKHN0eWxlRWxlbWVudCkge1xuICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09IFwidW5kZWZpbmVkXCIgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG5cbiAgaWYgKG5vbmNlKSB7XG4gICAgc3R5bGVFbGVtZW50LnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIG5vbmNlKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlczsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gXCJcIjtcblxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQob2JqLnN1cHBvcnRzLCBcIikge1wiKTtcbiAgfVxuXG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKTtcbiAgfVxuXG4gIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2Ygb2JqLmxheWVyICE9PSBcInVuZGVmaW5lZFwiO1xuXG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJAbGF5ZXJcIi5jb25jYXQob2JqLmxheWVyLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQob2JqLmxheWVyKSA6IFwiXCIsIFwiIHtcIik7XG4gIH1cblxuICBjc3MgKz0gb2JqLmNzcztcblxuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcblxuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH0gLy8gRm9yIG9sZCBJRVxuXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cblxuXG4gIG9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG59XG5cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZUVsZW1lbnQucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIHN0eWxlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudCk7XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG5mdW5jdGlvbiBkb21BUEkob3B0aW9ucykge1xuICB2YXIgc3R5bGVFbGVtZW50ID0gb3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gIHJldHVybiB7XG4gICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUob2JqKSB7XG4gICAgICBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaik7XG4gICAgfSxcbiAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpO1xuICAgIH1cbiAgfTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBkb21BUEk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQpIHtcbiAgaWYgKHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlRWxlbWVudC5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCk7XG4gICAgfVxuXG4gICAgc3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc3R5bGVUYWdUcmFuc2Zvcm07IiwiZXhwb3J0IGZ1bmN0aW9uIGNyZWF0ZVRhc2sobmFtZSwgZGF0ZSkge1xuICByZXR1cm4ge1xuICAgIGlkOiBEYXRlLm5vdygpLnRvU3RyaW5nKCksXG4gICAgbmFtZTogbmFtZSxcbiAgICBjb21wbGV0ZTogZmFsc2UsXG4gICAgZGF0ZTogZGF0ZSxcbiAgfTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGNyZWF0ZUxpc3QobmFtZSkge1xuICByZXR1cm4ge1xuICAgIGlkOiBEYXRlLm5vdygpLnRvU3RyaW5nKCksXG4gICAgbmFtZTogbmFtZSxcbiAgICB0YXNrczogW10sXG4gIH07XG59XG4iLCJleHBvcnQgZnVuY3Rpb24gZGF5c0xlZnRDYWxjdWxhdG9yKHRhc2spIHtcbiAgbGV0IGR1ZURheSA9IG5ldyBEYXRlKHRhc2suZGF0ZSk7XG4gIGxldCB0b2RheSA9IG5ldyBEYXRlKGdldEN1cnJlbnREYXRlKCkpO1xuICBsZXQgZGlmZmVyZW5jZSA9IGR1ZURheS5nZXRUaW1lKCkgLSB0b2RheS5nZXRUaW1lKCk7XG4gIGxldCBkYXlzTGVmdCA9IE1hdGguY2VpbChkaWZmZXJlbmNlIC8gKDEwMDAgKiAzNjAwICogMjQpKTtcblxuICByZXR1cm4gZGF5c0xlZnQ7XG59XG5cbmZ1bmN0aW9uIGdldEN1cnJlbnREYXRlKCkge1xuICBsZXQgdG9kYXkgPSBuZXcgRGF0ZSgpO1xuICBsZXQgZGQgPSBTdHJpbmcodG9kYXkuZ2V0RGF0ZSgpKS5wYWRTdGFydCgyLCBcIjBcIik7XG4gIGxldCBtbSA9IFN0cmluZyh0b2RheS5nZXRNb250aCgpICsgMSkucGFkU3RhcnQoMiwgXCIwXCIpOyAvL0phbnVhcnkgaXMgMCFcbiAgbGV0IHl5eXkgPSB0b2RheS5nZXRGdWxsWWVhcigpO1xuXG4gIHRvZGF5ID0gbW0gKyBcIi9cIiArIGRkICsgXCIvXCIgKyB5eXl5O1xuICByZXR1cm4gdG9kYXk7XG59XG4iLCJjb25zdCBudW1iZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIm51bWJlclwiKTtcbmNvbnN0IHNraWxsQ29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5za2lsbFwiKTtcbmNvbnN0IGNpcmNsZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiY2lyY2xlXCIpO1xudmFyIGxhc3RDb3VudCA9IDA7XG5cbmV4cG9ydCBmdW5jdGlvbiBzZXRDaXJjbGUocHJlYykge1xuICBsZXQgcHJlY2VudCA9ICgxIC0gcHJlYykudG9GaXhlZCgxKTtcbiAgbGV0IGNvdW50ZXIgPSBsYXN0Q291bnQ7XG4gIC8vICAgc2tpbGxDb250YWluZXIuc3R5bGUuc2V0UHJvcGVydHkoXG4gIC8vICAgICBcIi0tdGFzay1wcmVjZW50YWdlLWZyb21cIixcbiAgLy8gICAgIGAke2NvdW50ZXIgLyAxMDB9YFxuICAvLyAgICk7XG4gIC8vICAgc2tpbGxDb250YWluZXIuc3R5bGUuc2V0UHJvcGVydHkoXCItLXRhc2stcHJlY2VudGFnZS10b1wiLCBgJHtwcmVjZW50fWApO1xuXG4gIGNpcmNsZS5zZXRBdHRyaWJ1dGUoXCJzdHJva2UtZGFzaG9mZnNldFwiLCA0NTAgLSA0NTAgKiBwcmVjZW50KTtcblxuICBpZiAocHJlY2VudCA+IGNvdW50ZXIgLyAxMDApIHtcbiAgICBzZXRJbnRlcnZhbCgoKSA9PiB7XG4gICAgICBpZiAoY291bnRlciA9PSBwcmVjZW50ICogMTAwKSB7XG4gICAgICAgIGNsZWFySW50ZXJ2YWw7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGNvdW50ZXIgKz0gMTtcbiAgICAgICAgbnVtYmVyLmlubmVySFRNTCA9IGAke2NvdW50ZXJ9JWA7XG4gICAgICAgIGxhc3RDb3VudCA9IGNvdW50ZXI7XG4gICAgICB9XG4gICAgfSwgOCk7XG4gIH0gZWxzZSBpZiAocHJlY2VudCA8IGNvdW50ZXIgLyAxMDApIHtcbiAgICBzZXRJbnRlcnZhbCgoKSA9PiB7XG4gICAgICBpZiAoY291bnRlciA9PSBwcmVjZW50ICogMTAwKSB7XG4gICAgICAgIGNsZWFySW50ZXJ2YWw7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGNvdW50ZXIgLT0gMTtcbiAgICAgICAgbnVtYmVyLmlubmVySFRNTCA9IGAke2NvdW50ZXJ9JWA7XG4gICAgICAgIGxhc3RDb3VudCA9IGNvdW50ZXI7XG4gICAgICB9XG4gICAgfSwgOCk7XG4gIH0gZWxzZSB7XG4gICAgcmV0dXJuO1xuICB9XG59XG4iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdGlkOiBtb2R1bGVJZCxcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuLy8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbl9fd2VicGFja19yZXF1aXJlX18ubSA9IF9fd2VicGFja19tb2R1bGVzX187XG5cbiIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IChtb2R1bGVbJ2RlZmF1bHQnXSkgOlxuXHRcdCgpID0+IChtb2R1bGUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5nID0gKGZ1bmN0aW9uKCkge1xuXHRpZiAodHlwZW9mIGdsb2JhbFRoaXMgPT09ICdvYmplY3QnKSByZXR1cm4gZ2xvYmFsVGhpcztcblx0dHJ5IHtcblx0XHRyZXR1cm4gdGhpcyB8fCBuZXcgRnVuY3Rpb24oJ3JldHVybiB0aGlzJykoKTtcblx0fSBjYXRjaCAoZSkge1xuXHRcdGlmICh0eXBlb2Ygd2luZG93ID09PSAnb2JqZWN0JykgcmV0dXJuIHdpbmRvdztcblx0fVxufSkoKTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwidmFyIHNjcmlwdFVybDtcbmlmIChfX3dlYnBhY2tfcmVxdWlyZV9fLmcuaW1wb3J0U2NyaXB0cykgc2NyaXB0VXJsID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmxvY2F0aW9uICsgXCJcIjtcbnZhciBkb2N1bWVudCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5kb2N1bWVudDtcbmlmICghc2NyaXB0VXJsICYmIGRvY3VtZW50KSB7XG5cdGlmIChkb2N1bWVudC5jdXJyZW50U2NyaXB0KVxuXHRcdHNjcmlwdFVybCA9IGRvY3VtZW50LmN1cnJlbnRTY3JpcHQuc3JjXG5cdGlmICghc2NyaXB0VXJsKSB7XG5cdFx0dmFyIHNjcmlwdHMgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZShcInNjcmlwdFwiKTtcblx0XHRpZihzY3JpcHRzLmxlbmd0aCkgc2NyaXB0VXJsID0gc2NyaXB0c1tzY3JpcHRzLmxlbmd0aCAtIDFdLnNyY1xuXHR9XG59XG4vLyBXaGVuIHN1cHBvcnRpbmcgYnJvd3NlcnMgd2hlcmUgYW4gYXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCB5b3UgbXVzdCBzcGVjaWZ5IGFuIG91dHB1dC5wdWJsaWNQYXRoIG1hbnVhbGx5IHZpYSBjb25maWd1cmF0aW9uXG4vLyBvciBwYXNzIGFuIGVtcHR5IHN0cmluZyAoXCJcIikgYW5kIHNldCB0aGUgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gdmFyaWFibGUgZnJvbSB5b3VyIGNvZGUgdG8gdXNlIHlvdXIgb3duIGxvZ2ljLlxuaWYgKCFzY3JpcHRVcmwpIHRocm93IG5ldyBFcnJvcihcIkF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgaW4gdGhpcyBicm93c2VyXCIpO1xuc2NyaXB0VXJsID0gc2NyaXB0VXJsLnJlcGxhY2UoLyMuKiQvLCBcIlwiKS5yZXBsYWNlKC9cXD8uKiQvLCBcIlwiKS5yZXBsYWNlKC9cXC9bXlxcL10rJC8sIFwiL1wiKTtcbl9fd2VicGFja19yZXF1aXJlX18ucCA9IHNjcmlwdFVybDsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmIgPSBkb2N1bWVudC5iYXNlVVJJIHx8IHNlbGYubG9jYXRpb24uaHJlZjtcblxuLy8gb2JqZWN0IHRvIHN0b3JlIGxvYWRlZCBhbmQgbG9hZGluZyBjaHVua3Ncbi8vIHVuZGVmaW5lZCA9IGNodW5rIG5vdCBsb2FkZWQsIG51bGwgPSBjaHVuayBwcmVsb2FkZWQvcHJlZmV0Y2hlZFxuLy8gW3Jlc29sdmUsIHJlamVjdCwgUHJvbWlzZV0gPSBjaHVuayBsb2FkaW5nLCAwID0gY2h1bmsgbG9hZGVkXG52YXIgaW5zdGFsbGVkQ2h1bmtzID0ge1xuXHRcIm1haW5cIjogMFxufTtcblxuLy8gbm8gY2h1bmsgb24gZGVtYW5kIGxvYWRpbmdcblxuLy8gbm8gcHJlZmV0Y2hpbmdcblxuLy8gbm8gcHJlbG9hZGVkXG5cbi8vIG5vIEhNUlxuXG4vLyBubyBITVIgbWFuaWZlc3RcblxuLy8gbm8gb24gY2h1bmtzIGxvYWRlZFxuXG4vLyBubyBqc29ucCBmdW5jdGlvbiIsIl9fd2VicGFja19yZXF1aXJlX18ubmMgPSB1bmRlZmluZWQ7IiwiaW1wb3J0IHsgY3JlYXRlVGFzaywgY3JlYXRlTGlzdCB9IGZyb20gXCIuL2NyZWF0ZVRhc2stTGlzdFwiO1xuaW1wb3J0IHsgZGF5c0xlZnRDYWxjdWxhdG9yIH0gZnJvbSBcIi4vZGF5cy1sZWZ0LWNhbGN1bGF0b3JcIjtcbmltcG9ydCB7IHNldENpcmNsZSB9IGZyb20gXCIuL3Rhc2tQcmVjZW50LXJlbmRlclwiO1xuaW1wb3J0IGNzcyBmcm9tIFwiLi9zdHlsZS5jc3NcIjtcbmltcG9ydCBcIi4vc3R5bGUuY3NzXCI7XG5pbXBvcnQgaHRtbCBmcm9tIFwiLi90ZW1wbGF0ZS5odG1sXCI7XG5cbmNvbnN0IGxpc3RDb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiW2RhdGEtbGlzdHNdXCIpO1xuY29uc3QgbmV3TGlzdEZvcm0gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiW2RhdGEtbmV3LWxpc3QtZm9ybV1cIik7XG5jb25zdCBuZXdMaXN0SW5wdXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiW2RhdGEtbmV3LWxpc3QtaW5wdXRdXCIpO1xuY29uc3QgZGVsZXRlTGlzdEJ1dHRvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJbZGF0YS1kZWxldGUtbGlzdC1idXR0b25dXCIpO1xuY29uc3QgbGlzdERpc3BsYXlDb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFxuICBcIltkYXRhLWxpc3QtZGlzcGxheS1jb250YWluZXJdXCJcbik7XG5jb25zdCBsaXN0VGl0bGVFbGVtZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIltkYXRhLWxpc3QtdGl0bGVdXCIpO1xuY29uc3QgbGlzdENvdW50RWxlbWVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJbZGF0YS1saXN0LWNvdW50XVwiKTtcbmNvbnN0IHRhc2tzQ29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIltkYXRhLXRhc2tzXVwiKTtcbmNvbnN0IHRhc2tUZW1wbGF0ZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwidGFzay10ZW1wbGF0ZVwiKTtcbmNvbnN0IG5ld1Rhc2tGb3JtID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIltkYXRhLW5ldy10YXNrLWZvcm1dXCIpO1xuY29uc3QgbmV3VGFza0lucHV0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIltkYXRhLW5ldy10YXNrLWlucHV0XVwiKTtcbmNvbnN0IG5ld1Rhc2tEYXRlSW5wdXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiW2RhdGEtbmV3LXRhc2stZGF0ZS1pbnB1dF1cIik7XG5jb25zdCBjbGVhckNvbXBsZXRlVGFza3NCdXR0b24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFxuICBcIltkYXRhLWNsZWFyLWNvbXBsZXRlLXRhc2tzLWJ1dHRvbl1cIlxuKTtcblxuY29uc3QgTE9DQUxfU1RPUkFHRV9MSVNUX0tFWSA9IFwidGFzay5saXN0c1wiO1xuY29uc3QgTE9DQUxfU1RPUkFHRV9TRUxFQ1RFRF9MSVNUX0lEX0tFWSA9IFwidGFzay5zZWxlY3RlZExpc3RJZFwiO1xubGV0IGxpc3RzID0gSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbShMT0NBTF9TVE9SQUdFX0xJU1RfS0VZKSkgfHwgW107XG5sZXQgc2VsZWN0ZWRMaXN0SWQgPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbShMT0NBTF9TVE9SQUdFX1NFTEVDVEVEX0xJU1RfSURfS0VZKTtcblxubGlzdENvbnRhaW5lci5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKGUpID0+IHtcbiAgaWYgKGUudGFyZ2V0LnRhZ05hbWUudG9Mb3dlckNhc2UoKSA9PT0gXCJsaVwiKSB7XG4gICAgc2VsZWN0ZWRMaXN0SWQgPSBlLnRhcmdldC5kYXRhc2V0Lmxpc3RJZDtcbiAgICBzYXZlQW5kUmVuZGVyKCk7XG4gIH1cbn0pO1xuXG50YXNrc0NvbnRhaW5lci5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKGUpID0+IHtcbiAgaWYgKGUudGFyZ2V0LnRhZ05hbWUudG9Mb3dlckNhc2UoKSA9PT0gXCJpbnB1dFwiKSB7XG4gICAgY29uc3Qgc2VsZWN0ZWRMaXN0ID0gbGlzdHMuZmluZCgobGlzdCkgPT4gbGlzdC5pZCA9PT0gc2VsZWN0ZWRMaXN0SWQpO1xuICAgIGNvbnN0IHNlbGVjdGVkVGFzayA9IHNlbGVjdGVkTGlzdC50YXNrcy5maW5kKFxuICAgICAgKHRhc2spID0+IHRhc2suaWQgPT09IGUudGFyZ2V0LmlkXG4gICAgKTtcbiAgICBzZWxlY3RlZFRhc2suY29tcGxldGUgPSBlLnRhcmdldC5jaGVja2VkO1xuICAgIHNhdmUoKTtcbiAgICByZW5kZXJUYXNrQ291bnQoc2VsZWN0ZWRMaXN0KTtcbiAgfVxufSk7XG5cbmNsZWFyQ29tcGxldGVUYXNrc0J1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKGUpID0+IHtcbiAgY29uc3Qgc2VsZWN0ZWRMaXN0ID0gbGlzdHMuZmluZCgobGlzdCkgPT4gbGlzdC5pZCA9PT0gc2VsZWN0ZWRMaXN0SWQpO1xuICBzZWxlY3RlZExpc3QudGFza3MgPSBzZWxlY3RlZExpc3QudGFza3MuZmlsdGVyKCh0YXNrKSA9PiAhdGFzay5jb21wbGV0ZSk7XG4gIHNhdmVBbmRSZW5kZXIoKTtcbn0pO1xuXG5kZWxldGVMaXN0QnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoZSkgPT4ge1xuICBsaXN0cyA9IGxpc3RzLmZpbHRlcigobGlzdCkgPT4gbGlzdC5pZCAhPT0gc2VsZWN0ZWRMaXN0SWQpO1xuICBzZWxlY3RlZExpc3RJZCA9IGxpc3RzW2xpc3RzLmxlbmd0aCAtIDFdLmlkO1xuICBzYXZlQW5kUmVuZGVyKCk7XG59KTtcblxubmV3TGlzdEZvcm0uYWRkRXZlbnRMaXN0ZW5lcihcInN1Ym1pdFwiLCAoZSkgPT4ge1xuICBlLnByZXZlbnREZWZhdWx0KCk7XG4gIGNvbnN0IGxpc3ROYW1lID0gbmV3TGlzdElucHV0LnZhbHVlO1xuICBpZiAobGlzdE5hbWUgPT0gbnVsbCB8fCBsaXN0TmFtZSA9PT0gXCJcIikgcmV0dXJuO1xuICBjb25zdCBsaXN0ID0gY3JlYXRlTGlzdChsaXN0TmFtZSk7XG4gIG5ld0xpc3RJbnB1dC52YWx1ZSA9IG51bGw7XG4gIGxpc3RzLnB1c2gobGlzdCk7XG4gIHNlbGVjdGVkTGlzdElkID0gbGlzdC5pZDtcbiAgc2F2ZUFuZFJlbmRlcigpO1xufSk7XG5cbm5ld1Rhc2tGb3JtLmFkZEV2ZW50TGlzdGVuZXIoXCJzdWJtaXRcIiwgKGUpID0+IHtcbiAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICBjb25zdCB0YXNrTmFtZSA9IG5ld1Rhc2tJbnB1dC52YWx1ZTtcbiAgY29uc3QgdGFza0RhdGUgPSBuZXdUYXNrRGF0ZUlucHV0LnZhbHVlO1xuICBpZiAodGFza05hbWUgPT0gbnVsbCB8fCB0YXNrTmFtZSA9PT0gXCJcIikgcmV0dXJuO1xuICBpZiAodGFza0RhdGUgPT0gbnVsbCB8fCB0YXNrRGF0ZSA9PT0gXCJcIikgcmV0dXJuO1xuXG4gIGNvbnN0IHRhc2sgPSBjcmVhdGVUYXNrKHRhc2tOYW1lLCB0YXNrRGF0ZSk7XG4gIG5ld1Rhc2tJbnB1dC52YWx1ZSA9IG51bGw7XG4gIG5ld1Rhc2tEYXRlSW5wdXQudmFsdWUgPSBudWxsO1xuXG4gIGNvbnN0IHNlbGVjdGVkTGlzdCA9IGxpc3RzLmZpbmQoKGxpc3QpID0+IGxpc3QuaWQgPT09IHNlbGVjdGVkTGlzdElkKTtcbiAgc2VsZWN0ZWRMaXN0LnRhc2tzLnB1c2godGFzayk7XG4gIHNhdmVBbmRSZW5kZXIoKTtcbn0pO1xuXG5mdW5jdGlvbiBzYXZlQW5kUmVuZGVyKCkge1xuICBzYXZlKCk7XG4gIHJlbmRlcigpO1xufVxuXG5mdW5jdGlvbiBzYXZlKCkge1xuICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShMT0NBTF9TVE9SQUdFX0xJU1RfS0VZLCBKU09OLnN0cmluZ2lmeShsaXN0cykpO1xuICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShMT0NBTF9TVE9SQUdFX1NFTEVDVEVEX0xJU1RfSURfS0VZLCBzZWxlY3RlZExpc3RJZCk7XG59XG5cbmZ1bmN0aW9uIHJlbmRlcigpIHtcbiAgY2xlYXJFbGVtZW50KGxpc3RDb250YWluZXIpO1xuICByZW5kZXJMaXN0KCk7XG4gIGNvbnN0IHNlbGVjdGVkTGlzdCA9IGxpc3RzLmZpbmQoKGxpc3QpID0+IGxpc3QuaWQgPT09IHNlbGVjdGVkTGlzdElkKTtcbiAgaWYgKHNlbGVjdGVkTGlzdElkID09IG51bGwpIHtcbiAgICBsaXN0RGlzcGxheUNvbnRhaW5lci5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7XG4gIH0gZWxzZSB7XG4gICAgbGlzdERpc3BsYXlDb250YWluZXIuc3R5bGUuZGlzcGxheSA9IFwiXCI7XG4gICAgbGlzdFRpdGxlRWxlbWVudC5pbm5lclRleHQgPSBzZWxlY3RlZExpc3QubmFtZTtcbiAgICByZW5kZXJUYXNrQ291bnQoc2VsZWN0ZWRMaXN0KTtcbiAgICBjbGVhckVsZW1lbnQodGFza3NDb250YWluZXIpO1xuICAgIHJlbmRlclRhc2tzKHNlbGVjdGVkTGlzdCk7XG4gIH1cbn1cblxuZnVuY3Rpb24gcmVuZGVyVGFza3Moc2VsZWN0ZWRMaXN0KSB7XG4gIHNlbGVjdGVkTGlzdC50YXNrcy5mb3JFYWNoKCh0YXNrKSA9PiB7XG4gICAgY29uc3QgdGFza0VsZW1lbnQgPSBkb2N1bWVudC5pbXBvcnROb2RlKHRhc2tUZW1wbGF0ZS5jb250ZW50LCB0cnVlKTtcbiAgICBjb25zdCBjaGVja2JveCA9IHRhc2tFbGVtZW50LnF1ZXJ5U2VsZWN0b3IoXCJpbnB1dFwiKTtcbiAgICBjaGVja2JveC5pZCA9IHRhc2suaWQ7XG4gICAgY2hlY2tib3guY2hlY2tlZCA9IHRhc2suY29tcGxldGU7XG4gICAgY29uc3QgbGFiZWwgPSB0YXNrRWxlbWVudC5xdWVyeVNlbGVjdG9yKFwibGFiZWxcIik7XG4gICAgbGFiZWwuaHRtbEZvciA9IHRhc2suaWQ7XG4gICAgbGFiZWwuYXBwZW5kKHRhc2submFtZSk7XG4gICAgY29uc3QgZHVlRGF5cyA9IHRhc2tFbGVtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuZHVlLWRheXMtZGlzcGxheVwiKTtcbiAgICBjb25zdCBkYXlzTGVmdCA9IGRheXNMZWZ0Q2FsY3VsYXRvcih0YXNrKTtcbiAgICBkdWVEYXlzLmFwcGVuZChgJHtkYXlzTGVmdH1gKTtcbiAgICB0YXNrc0NvbnRhaW5lci5hcHBlbmRDaGlsZCh0YXNrRWxlbWVudCk7XG4gIH0pO1xufVxuXG5mdW5jdGlvbiByZW5kZXJUYXNrQ291bnQoc2VsZWN0ZWRMaXN0KSB7XG4gIGNvbnN0IGluY29tcGxldGVUYXNrQ291bnQgPSBzZWxlY3RlZExpc3QudGFza3MuZmlsdGVyKFxuICAgICh0YXNrKSA9PiAhdGFzay5jb21wbGV0ZVxuICApLmxlbmd0aDtcbiAgY29uc3QgdGFza3NDb3VudCA9IHNlbGVjdGVkTGlzdC50YXNrcy5sZW5ndGg7XG4gIGNvbnN0IHByZWNlbnQgPSBpbmNvbXBsZXRlVGFza0NvdW50IC8gdGFza3NDb3VudDtcbiAgc2V0Q2lyY2xlKHByZWNlbnQpO1xuICAvLyBjb25zdCB0YXNrU3RyaW5nID0gaW5jb21wbGV0ZVRhc2tDb3VudCA9PT0gMSA/IFwidGFza1wiIDogXCJ0YXNrc1wiO1xuICAvLyBsaXN0Q291bnRFbGVtZW50LmlubmVyVGV4dCA9IGAke2luY29tcGxldGVUYXNrQ291bnR9ICR7dGFza1N0cmluZ30gcmVtYWluaW5nYDtcbn1cblxuZnVuY3Rpb24gcmVuZGVyTGlzdCgpIHtcbiAgbGlzdHMuZm9yRWFjaCgobGlzdCkgPT4ge1xuICAgIGNvbnN0IGxpc3RFbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImxpXCIpO1xuICAgIGxpc3RFbGVtZW50LmRhdGFzZXQubGlzdElkID0gbGlzdC5pZDtcbiAgICBsaXN0RWxlbWVudC5jbGFzc0xpc3QuYWRkKFwibGlzdC1uYW1lXCIpO1xuICAgIGxpc3RFbGVtZW50LmlubmVyVGV4dCA9IGxpc3QubmFtZTtcbiAgICBpZiAobGlzdC5pZCA9PT0gc2VsZWN0ZWRMaXN0SWQpIHtcbiAgICAgIGxpc3RFbGVtZW50LmNsYXNzTGlzdC5hZGQoXCJhY3RpdmUtbGlzdFwiKTtcbiAgICB9XG4gICAgbGlzdENvbnRhaW5lci5hcHBlbmRDaGlsZChsaXN0RWxlbWVudCk7XG4gIH0pO1xufVxuXG5mdW5jdGlvbiBjbGVhckVsZW1lbnQoZWxlbWVudCkge1xuICB3aGlsZSAoZWxlbWVudC5maXJzdENoaWxkKSB7XG4gICAgZWxlbWVudC5yZW1vdmVDaGlsZChlbGVtZW50LmZpcnN0Q2hpbGQpO1xuICB9XG59XG5cbnJlbmRlcigpO1xuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9