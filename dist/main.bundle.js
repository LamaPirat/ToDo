/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

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
    date: date
  };
}
function createList(name) {
  return {
    id: Date.now().toString(),
    name: name,
    tasks: []
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
const number = window.document.getElementById("number");
const skillContainer = window.document.querySelector(".skill");
const circle = window.document.getElementById("circle");
var lastCount = 0;
function setCircle(prec) {
  let precent = (1 - prec).toFixed(1);
  let counter = lastCount;
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
    }, 10);
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
    }, 10);
  } else {
    return;
  }
}

/***/ }),

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

var ___HTML_LOADER_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ./index.js */ "./src/index.js?4e1f"), __webpack_require__.b);
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

/***/ "./src/index.js?4e1f":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "688982e7e3fa763a1b6f.js";

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
const listDisplayContainer = document.querySelector("[data-list-display-container]");
const listTitleElement = document.querySelector("[data-list-title]");
const listCountElement = document.querySelector("[data-list-count]");
const tasksContainer = document.querySelector("[data-tasks]");
const taskTemplate = document.getElementById("task-template");
const newTaskForm = document.querySelector("[data-new-task-form]");
const newTaskInput = document.querySelector("[data-new-task-input]");
const newTaskDateInput = document.querySelector("[data-new-task-date-input]");
const clearCompleteTasksButton = document.querySelector("[data-clear-complete-tasks-button]");
const LOCAL_STORAGE_LIST_KEY = "task.lists";
const LOCAL_STORAGE_SELECTED_LIST_ID_KEY = "task.selectedListId";
let lists = JSON.parse(localStorage.getItem(LOCAL_STORAGE_LIST_KEY)) || [];
let selectedListId = localStorage.getItem(LOCAL_STORAGE_SELECTED_LIST_ID_KEY);
listContainer.addEventListener("click", e => {
  if (e.target.tagName.toLowerCase() === "li") {
    selectedListId = e.target.dataset.listId;
    saveAndRender();
  }
});
tasksContainer.addEventListener("click", e => {
  if (e.target.tagName.toLowerCase() === "input") {
    const selectedList = lists.find(list => list.id === selectedListId);
    const selectedTask = selectedList.tasks.find(task => task.id === e.target.id);
    selectedTask.complete = e.target.checked;
    save();
    renderTaskCount(selectedList);
  }
});
clearCompleteTasksButton.addEventListener("click", e => {
  const selectedList = lists.find(list => list.id === selectedListId);
  selectedList.tasks = selectedList.tasks.filter(task => !task.complete);
  saveAndRender();
});
deleteListButton.addEventListener("click", e => {
  lists = lists.filter(list => list.id !== selectedListId);
  selectedListId = lists[lists.length - 1].id;
  saveAndRender();
});
newListForm.addEventListener("submit", e => {
  e.preventDefault();
  const listName = newListInput.value;
  if (listName == null || listName === "") return;
  const list = (0,_createTask_List__WEBPACK_IMPORTED_MODULE_0__.createList)(listName);
  newListInput.value = null;
  lists.push(list);
  selectedListId = list.id;
  saveAndRender();
});
newTaskForm.addEventListener("submit", e => {
  e.preventDefault();
  const taskName = newTaskInput.value;
  const taskDate = newTaskDateInput.value;
  if (taskName == null || taskName === "") return;
  if (taskDate == null || taskDate === "") return;
  const task = (0,_createTask_List__WEBPACK_IMPORTED_MODULE_0__.createTask)(taskName, taskDate);
  newTaskInput.value = null;
  newTaskDateInput.value = null;
  const selectedList = lists.find(list => list.id === selectedListId);
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
  const selectedList = lists.find(list => list.id === selectedListId);
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
  selectedList.tasks.forEach(task => {
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
  const incompleteTaskCount = selectedList.tasks.filter(task => !task.complete).length;
  const tasksCount = selectedList.tasks.length;
  const precent = incompleteTaskCount / tasksCount;
  (0,_taskPrecent_render__WEBPACK_IMPORTED_MODULE_2__.setCircle)(precent);
  // const taskString = incompleteTaskCount === 1 ? "task" : "tasks";
  // listCountElement.innerText = `${incompleteTaskCount} ${taskString} remaining`;
}

function renderList() {
  lists.forEach(list => {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QVksVUFBVSxNQUFNLEtBQUssVUFBVSxVQUFVLEtBQUssS0FBSyxZQUFZLE1BQU0sS0FBSyxVQUFVLE1BQU0sS0FBSyxZQUFZLE1BQU0sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxhQUFhLGFBQWEsYUFBYSxPQUFPLEtBQUssWUFBWSxhQUFhLFdBQVcsWUFBWSxhQUFhLFdBQVcsWUFBWSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssVUFBVSxVQUFVLE9BQU8sS0FBSyxZQUFZLFdBQVcsVUFBVSxZQUFZLGFBQWEsYUFBYSxPQUFPLEtBQUssWUFBWSxhQUFhLGFBQWEsT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFVBQVUsWUFBWSxPQUFPLEtBQUssWUFBWSxhQUFhLGFBQWEsT0FBTyxLQUFLLFlBQVksYUFBYSxNQUFNLEtBQUssVUFBVSxZQUFZLFdBQVcsVUFBVSxVQUFVLFVBQVUsWUFBWSxXQUFXLE1BQU0sS0FBSyxVQUFVLFlBQVksYUFBYSxhQUFhLGFBQWEsV0FBVyxZQUFZLGFBQWEsYUFBYSxhQUFhLE9BQU8sS0FBSyxZQUFZLFdBQVcsWUFBWSxhQUFhLGFBQWEsYUFBYSxXQUFXLFlBQVksY0FBYyxXQUFXLFVBQVUsT0FBTyxLQUFLLFNBQVMsS0FBSyxZQUFZLGFBQWEsTUFBTSxNQUFNLFVBQVUsVUFBVSxVQUFVLFVBQVUsU0FBUyxLQUFLLFlBQVksV0FBVyxVQUFVLFVBQVUsWUFBWSxNQUFNLEtBQUssWUFBWSxPQUFPLE1BQU0sWUFBWSxhQUFhLE9BQU8sS0FBSyxZQUFZLGFBQWEsYUFBYSxPQUFPLEtBQUssVUFBVSxNQUFNLEtBQUssVUFBVSxZQUFZLFdBQVcsVUFBVSxZQUFZLFdBQVcsWUFBWSxhQUFhLGFBQWEsYUFBYSxPQUFPLEtBQUssWUFBWSxhQUFhLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxXQUFXLFVBQVUsVUFBVSxZQUFZLE9BQU8sS0FBSyxZQUFZLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxXQUFXLE1BQU0sS0FBSyxZQUFZLGFB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QyxVQUFVO0VBQ2hEM0UsOERBQVMsQ0FBQ0UsT0FBTyxDQUFDO0VBQ2xCO0VBQ0E7QUFDRjs7QUFFQSxTQUFTeUQsVUFBVUEsQ0FBQSxFQUFHO0VBQ3BCakMsS0FBSyxDQUFDc0MsT0FBTyxDQUFFdEIsSUFBSSxJQUFLO0lBQ3RCLE1BQU1rQyxXQUFXLEdBQUdsRixRQUFRLENBQUNtRixhQUFhLENBQUMsSUFBSSxDQUFDO0lBQ2hERCxXQUFXLENBQUN2QyxPQUFPLENBQUNDLE1BQU0sR0FBR0ksSUFBSSxDQUFDM0UsRUFBRTtJQUNwQzZHLFdBQVcsQ0FBQ0UsU0FBUyxDQUFDQyxHQUFHLENBQUMsV0FBVyxDQUFDO0lBQ3RDSCxXQUFXLENBQUNkLFNBQVMsR0FBR3BCLElBQUksQ0FBQzdFLElBQUk7SUFDakMsSUFBSTZFLElBQUksQ0FBQzNFLEVBQUUsS0FBS2dFLGNBQWMsRUFBRTtNQUM5QjZDLFdBQVcsQ0FBQ0UsU0FBUyxDQUFDQyxHQUFHLENBQUMsYUFBYSxDQUFDO0lBQzFDO0lBQ0FwRSxhQUFhLENBQUM4RCxXQUFXLENBQUNHLFdBQVcsQ0FBQztFQUN4QyxDQUFDLENBQUM7QUFDSjtBQUVBLFNBQVNsQixZQUFZQSxDQUFDc0IsT0FBTyxFQUFFO0VBQzdCLE9BQU9BLE9BQU8sQ0FBQ0MsVUFBVSxFQUFFO0lBQ3pCRCxPQUFPLENBQUNFLFdBQVcsQ0FBQ0YsT0FBTyxDQUFDQyxVQUFVLENBQUM7RUFDekM7QUFDRjtBQUVBMUIsTUFBTSxFQUFFLEMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90b2RvLy4vc3JjL2NyZWF0ZVRhc2stTGlzdC5qcyIsIndlYnBhY2s6Ly90b2RvLy4vc3JjL2RheXMtbGVmdC1jYWxjdWxhdG9yLmpzIiwid2VicGFjazovL3RvZG8vLi9zcmMvdGFza1ByZWNlbnQtcmVuZGVyLmpzIiwid2VicGFjazovL3RvZG8vLi9zcmMvc3R5bGUuY3NzIiwid2VicGFjazovL3RvZG8vLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL3RvZG8vLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qcyIsIndlYnBhY2s6Ly90b2RvLy4vc3JjL3RlbXBsYXRlLmh0bWwiLCJ3ZWJwYWNrOi8vdG9kby8uL25vZGVfbW9kdWxlcy9odG1sLWxvYWRlci9kaXN0L3J1bnRpbWUvZ2V0VXJsLmpzIiwid2VicGFjazovL3RvZG8vLi9zcmMvc3R5bGUuY3NzPzcxNjMiLCJ3ZWJwYWNrOi8vdG9kby8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly90b2RvLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qcyIsIndlYnBhY2s6Ly90b2RvLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzIiwid2VicGFjazovL3RvZG8vLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanMiLCJ3ZWJwYWNrOi8vdG9kby8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzIiwid2VicGFjazovL3RvZG8vLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qcyIsIndlYnBhY2s6Ly90b2RvL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3RvZG8vd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vdG9kby93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vdG9kby93ZWJwYWNrL3J1bnRpbWUvZ2xvYmFsIiwid2VicGFjazovL3RvZG8vd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly90b2RvL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vdG9kby93ZWJwYWNrL3J1bnRpbWUvcHVibGljUGF0aCIsIndlYnBhY2s6Ly90b2RvL3dlYnBhY2svcnVudGltZS9qc29ucCBjaHVuayBsb2FkaW5nIiwid2VicGFjazovL3RvZG8vd2VicGFjay9ydW50aW1lL25vbmNlIiwid2VicGFjazovL3RvZG8vLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGZ1bmN0aW9uIGNyZWF0ZVRhc2sobmFtZSwgZGF0ZSkge1xuICByZXR1cm4ge1xuICAgIGlkOiBEYXRlLm5vdygpLnRvU3RyaW5nKCksXG4gICAgbmFtZTogbmFtZSxcbiAgICBjb21wbGV0ZTogZmFsc2UsXG4gICAgZGF0ZTogZGF0ZSxcbiAgfTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGNyZWF0ZUxpc3QobmFtZSkge1xuICByZXR1cm4ge1xuICAgIGlkOiBEYXRlLm5vdygpLnRvU3RyaW5nKCksXG4gICAgbmFtZTogbmFtZSxcbiAgICB0YXNrczogW10sXG4gIH07XG59XG4iLCJleHBvcnQgZnVuY3Rpb24gZGF5c0xlZnRDYWxjdWxhdG9yKHRhc2spIHtcbiAgbGV0IGR1ZURheSA9IG5ldyBEYXRlKHRhc2suZGF0ZSk7XG4gIGxldCB0b2RheSA9IG5ldyBEYXRlKGdldEN1cnJlbnREYXRlKCkpO1xuICBsZXQgZGlmZmVyZW5jZSA9IGR1ZURheS5nZXRUaW1lKCkgLSB0b2RheS5nZXRUaW1lKCk7XG4gIGxldCBkYXlzTGVmdCA9IE1hdGguY2VpbChkaWZmZXJlbmNlIC8gKDEwMDAgKiAzNjAwICogMjQpKTtcblxuICByZXR1cm4gZGF5c0xlZnQ7XG59XG5cbmZ1bmN0aW9uIGdldEN1cnJlbnREYXRlKCkge1xuICBsZXQgdG9kYXkgPSBuZXcgRGF0ZSgpO1xuICBsZXQgZGQgPSBTdHJpbmcodG9kYXkuZ2V0RGF0ZSgpKS5wYWRTdGFydCgyLCBcIjBcIik7XG4gIGxldCBtbSA9IFN0cmluZyh0b2RheS5nZXRNb250aCgpICsgMSkucGFkU3RhcnQoMiwgXCIwXCIpOyAvL0phbnVhcnkgaXMgMCFcbiAgbGV0IHl5eXkgPSB0b2RheS5nZXRGdWxsWWVhcigpO1xuXG4gIHRvZGF5ID0gbW0gKyBcIi9cIiArIGRkICsgXCIvXCIgKyB5eXl5O1xuICByZXR1cm4gdG9kYXk7XG59XG4iLCJjb25zdCBudW1iZXIgPSB3aW5kb3cuZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJudW1iZXJcIik7XG5jb25zdCBza2lsbENvbnRhaW5lciA9IHdpbmRvdy5kb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnNraWxsXCIpO1xuY29uc3QgY2lyY2xlID0gd2luZG93LmRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiY2lyY2xlXCIpO1xudmFyIGxhc3RDb3VudCA9IDA7XG5cbmV4cG9ydCBmdW5jdGlvbiBzZXRDaXJjbGUocHJlYykge1xuICBsZXQgcHJlY2VudCA9ICgxIC0gcHJlYykudG9GaXhlZCgxKTtcbiAgbGV0IGNvdW50ZXIgPSBsYXN0Q291bnQ7XG5cbiAgY2lyY2xlLnNldEF0dHJpYnV0ZShcInN0cm9rZS1kYXNob2Zmc2V0XCIsIDQ1MCAtIDQ1MCAqIHByZWNlbnQpO1xuXG4gIGlmIChwcmVjZW50ID4gY291bnRlciAvIDEwMCkge1xuICAgIHNldEludGVydmFsKCgpID0+IHtcbiAgICAgIGlmIChjb3VudGVyID09IHByZWNlbnQgKiAxMDApIHtcbiAgICAgICAgY2xlYXJJbnRlcnZhbDtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgY291bnRlciArPSAxO1xuICAgICAgICBudW1iZXIuaW5uZXJIVE1MID0gYCR7Y291bnRlcn0lYDtcbiAgICAgICAgbGFzdENvdW50ID0gY291bnRlcjtcbiAgICAgIH1cbiAgICB9LCAxMCk7XG4gIH0gZWxzZSBpZiAocHJlY2VudCA8IGNvdW50ZXIgLyAxMDApIHtcbiAgICBzZXRJbnRlcnZhbCgoKSA9PiB7XG4gICAgICBpZiAoY291bnRlciA9PSBwcmVjZW50ICogMTAwKSB7XG4gICAgICAgIGNsZWFySW50ZXJ2YWw7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGNvdW50ZXIgLT0gMTtcbiAgICAgICAgbnVtYmVyLmlubmVySFRNTCA9IGAke2NvdW50ZXJ9JWA7XG4gICAgICAgIGxhc3RDb3VudCA9IGNvdW50ZXI7XG4gICAgICB9XG4gICAgfSwgMTApO1xuICB9IGVsc2Uge1xuICAgIHJldHVybjtcbiAgfVxufVxuIiwiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCI6cm9vdCB7XFxuICAtLWNsci1wcmltYXJ5OiByZ2IoNTQsIDExMiwgMTk5KTtcXG4gIC0tY2xyLWxpZ2h0OiAjZjRmNGY0O1xcbiAgLS1jbHItZGFyazogIzMzMztcXG4gIC0tY2xyLXdhcm5pbmc6IHJnYig5OSwgMzYsIDM2KTtcXG59XFxuXFxuKixcXG4qOjpiZWZvcmUsXFxuKjo6YWZ0ZXIge1xcbiAgZm9udC1mYW1pbHk6IGluaGVyaXQ7XFxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbn1cXG5cXG5ib2R5IHtcXG4gIG1hcmdpbjogMDtcXG4gIGZvbnQtZmFtaWx5OiBcXFwiV29yayBTYW5zXFxcIiwgc2Fucy1zZXJpZjtcXG4gIGZvbnQtd2VpZ2h0OiAzMDA7XFxuICBmb250LXNpemU6IDEuNXJlbTtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWNsci1wcmltYXJ5KTtcXG4gIGNvbG9yOiB2YXIoLS1jbHItbGlnaHQpO1xcblxcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGdyaWQ6XFxuICAgIFxcXCJoZWFkZXIgaGVhZGVyIGhlYWRlciBoZWFkZXJcXFwiIGF1dG9cXG4gICAgXFxcIi4uLi4uLiBsaXN0cyBhY3RpdmUgLi4uLi4uXFxcIiBhdXRvIC9cXG4gICAgMWZyIG1pbm1heCgxMDBweCwgMzAwcHgpIG1pbm1heCgyNTBweCwgNjAwcHgpIDFmcjtcXG59XFxuXFxuLnRpdGxlIHtcXG4gIGdyaWQtYXJlYTogaGVhZGVyO1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgZm9udC1zaXplOiBjYWxjKDd2aCArIDJyZW0pO1xcbiAgZm9udC13ZWlnaHQ6IDkwMDtcXG4gIGNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuMSk7XFxuICBsZXR0ZXItc3BhY2luZzogMnB4O1xcbiAgbWFyZ2luOiAtMC4zZW0gMCAwLjVlbTtcXG59XFxuXFxuLmFsbC10YXNrcyB7XFxuICBncmlkLWFyZWE6IGxpc3RzO1xcbn1cXG5cXG4udGFzay1saXN0IHtcXG4gIGZvbnQtc2l6ZTogMS4ycmVtO1xcbiAgbGluZS1oZWlnaHQ6IDEuNztcXG4gIGxpc3Qtc3R5bGU6IGNpcmNsZTtcXG4gIHBhZGRpbmctbGVmdDogMS4xZW07XFxufVxcblxcbi5saXN0LW5hbWUge1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG4ubGlzdC1uYW1lOmhvdmVyIHtcXG4gIG9wYWNpdHk6IDAuNztcXG59XFxuXFxuZm9ybSB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbn1cXG5cXG4uYnRuIHtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG4gIGJhY2tncm91bmQ6IDA7XFxuICBib3JkZXI6IDA7XFxuICBwYWRkaW5nOiAwO1xcbiAgY29sb3I6IGluaGVyaXQ7XFxufVxcblxcbi5idG4uY3JlYXRlIHtcXG4gIGZvbnQtc2l6ZTogMS41cmVtO1xcbiAgZm9udC13ZWlnaHQ6IDkwMDtcXG4gIG1hcmdpbi1yaWdodDogMC4yNWVtO1xcbiAgdHJhbnNpdGlvbjogb3BhY2l0eSAyNTBtcyBlYXNlLWluO1xcbn1cXG5cXG4uYnRuLmxpc3Q6aG92ZXIge1xcbiAgb3BhY2l0eTogMC43O1xcbn1cXG5cXG4uYnRuLmRlbGV0ZSB7XFxuICBvcGFjaXR5OiAwLjc7XFxuICBmb250LXNpemU6IDFyZW07XFxuICB0cmFuc2l0aW9uOiBjb2xvciAyMDBtcztcXG59XFxuXFxuLmJ0bi5kZWxldGU6aG92ZXIge1xcbiAgY29sb3I6IHZhcigtLWNsci13YXJuaW5nKTtcXG59XFxuXFxuLm5ldyB7XFxuICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcXG4gIGJvcmRlcjogMDtcXG4gIGNvbG9yOiBpbmhlcml0O1xcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIGN1cnJlbnRDb2xvcjtcXG4gIGZvbnQtc2l6ZTogaW5oZXJpdDtcXG4gIG91dGxpbmU6IG5vbmU7XFxuXFxuICB0cmFuc2l0aW9uOiBib3JkZXItYm90dG9tIDI1MG1zIGVhc2UtaW47XFxuICBvcmRlcjogMjtcXG5cXG4gIHBhZGRpbmc6IDAuMjVlbTtcXG59XFxuLm5ldzo6cGxhY2Vob2xkZXIge1xcbiAgY29sb3I6IGluaGVyaXQ7XFxuICBvcGFjaXR5OiAwLjQ7XFxufVxcbi5uZXc6Zm9jdXMge1xcbiAgYm9yZGVyLWJvdHRvbS13aWR0aDogMnB4O1xcbn1cXG4ubmV3OmZvY3VzOjpwbGFjZWhvbGRlciB7XFxuICBvcGFjaXR5OiAwLjE1O1xcbn1cXG5cXG4ubmV3Lmxpc3Qge1xcbiAgZm9udC1zaXplOiAxLjFyZW07XFxufVxcbi5uZXcudGFzayB7XFxuICBtYXJnaW4tYm90dG9tOiAwO1xcbn1cXG5cXG4uYWN0aXZlLWxpc3Qge1xcbiAgZm9udC13ZWlnaHQ6IDkwMDtcXG59XFxuXFxuLnRvZG8tbGlzdCB7XFxuICAtLXNwYWNlcjogMnJlbTtcXG4gIGFsaWduLXNlbGY6IHN0YXJ0O1xcbiAgbWFyZ2luLXRvcDogMnJlbTtcXG4gIGdyaWQtYXJlYTogYWN0aXZlO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tY2xyLWxpZ2h0KTtcXG4gIGNvbG9yOiB2YXIoLS1jbHItZGFyayk7XFxufVxcblxcbi50b2RvLWhlYWRlciB7XFxuICBiYWNrZ3JvdW5kOiAjZmJjODBhO1xcbiAgcGFkZGluZzogdmFyKC0tc3BhY2VyKTtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgaGVpZ2h0OiBhdXRvO1xcbiAgYm94LXNoYWRvdzogMCA0cHggMnB4IC0ycHggZ3JheTtcXG59XFxuXFxuLmxpc3QtdGl0bGUge1xcbiAgbWFyZ2luOiAwIDFlbSAwIDA7XFxufVxcblxcbi50YXNrLWNvdW50IHtcXG4gIG1hcmdpbjogMDtcXG4gIGZvbnQtc2l6ZTogMXJlbTtcXG59XFxuXFxuLmNpcmNsZS13cmFwIHtcXG4gIG1hcmdpbjogMTUwcHggYXV0bztcXG4gIHdpZHRoOiAxNTBweDtcXG4gIGhlaWdodDogMTUwcHg7XFxuICBiYWNrZ3JvdW5kOiAjZmVmY2ZmO1xcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xcbiAgYm9yZGVyOiAxcHggc29saWQgI2NkY2JkMDtcXG59XFxuXFxuLnRvZG8tYm9keSB7XFxuICBwYWRkaW5nOiB2YXIoLS1zcGFjZXIpO1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2Y2ZjdiZTtcXG59XFxuXFxuLm5ldy10YXNrLWNyZWF0b3IgLmNyZWF0ZSB7XFxuICBjb2xvcjogdmFyKC0tY2xyLXByaW1hcnkpO1xcbn1cXG5cXG5bdHlwZT1cXFwiY2hlY2tib3hcXFwiXSB7XFxuICBvcGFjaXR5OiAwO1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbn1cXG5cXG4udGFzayBsYWJlbCB7XFxuICBkaXNwbGF5OiBmbGV4LWlubGluZTtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxufVxcblxcbi50YXNrIHtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gIG1hcmdpbi1ib3R0b206IDEuMjVlbTtcXG59XFxuLnRhc2s6OmFmdGVyIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFwiO1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgcmlnaHQ6IDA7XFxuICBsZWZ0OiAwO1xcbiAgYm90dG9tOiAtMC41ZW07XFxuICBoZWlnaHQ6IDFweDtcXG4gIGJhY2tncm91bmQ6IGN1cnJlbnRDb2xvcjtcXG4gIG9wYWNpdHk6IDAuMTtcXG59XFxuXFxuLmN1c3RvbS1jaGVja2JveCB7XFxuICAtLXNpemU6IDAuNzVlbTtcXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcXG4gIHdpZHRoOiB2YXIoLS1zaXplKTtcXG4gIGhlaWdodDogdmFyKC0tc2l6ZSk7XFxuICBtYXJnaW4tcmlnaHQ6IHZhcigtLXNpemUpO1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbiAgYm9yZGVyOiAycHggc29saWQgY3VycmVudENvbG9yO1xcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xcbiAgdHJhbnNmb3JtOiBzY2FsZSgxKTtcXG4gIHRyYW5zaXRpb246IHRyYW5zZm9ybSAyMDBtcyBlYXNlLWluLW91dDtcXG59XFxuXFxuLmN1c3RvbS1kdWUtZGF0ZSB7XFxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxuICBwYWRkaW5nOiAwLjI1ZW07XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjYsIDI1LCAyNSk7XFxuICBib3JkZXItcmFkaXVzOiA1cHg7XFxuICBmb250LWZhbWlseTogQXJpYWwsIEhlbHZldGljYSwgc2Fucy1zZXJpZjtcXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xcbiAgZm9udC1zaXplOiAxZW07XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICBjb2xvcjogdHJhbnNwYXJlbnQ7XFxuXFxuICByaWdodDogMDtcXG4gIGJvdHRvbTogLTAuMjVlbTtcXG59XFxuXFxuLmN1c3RvbS1kdWUtZGF0ZSBzcGFuIHtcXG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudChcXG4gICAgMTM1ZGVnLFxcbiAgICB2YXIoLS1jbHItcHJpbWFyeSksXFxuICAgIHZhcigtLWNsci1saWdodCksXFxuICAgIGJsdWVcXG4gICk7XFxuICBiYWNrZ3JvdW5kLWNsaXA6IHRleHQ7XFxuICAtd2Via2l0LWJhY2tncm91bmQtY2xpcDogdGV4dDtcXG59XFxuLmN1c3RvbS1kdWUtZGF0ZTo6YmVmb3JlLFxcbi5jdXN0b20tZHVlLWRhdGU6OmFmdGVyIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFwiO1xcbiAgZGlzcGxheTogYmxvY2s7XFxuICB3aWR0aDogNSU7XFxuICBoZWlnaHQ6IDUlO1xcbiAgYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KFxcbiAgICAxMzVkZWcsXFxuICAgIHJnYigyNTUsIDE0NSwgMCksXFxuICAgIHJnYigyNTUsIDAsIDIyMSksXFxuICAgIGJsdWVcXG4gICk7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICB0b3A6IC0xMCU7XFxuICBsZWZ0OiAtNCU7XFxuICB6LWluZGV4OiAtMTtcXG4gIGJvcmRlci1yYWRpdXM6IDVweDtcXG59XFxuLmN1c3RvbS1kdWUtZGF0ZTo6YWZ0ZXIge1xcbiAgZmlsdGVyOiBibHVyKDVweCk7XFxufVxcblxcbi50YXNrOmhvdmVyIC5jdXN0b20tY2hlY2tib3gsXFxuW3R5cGU9XFxcImNoZWNrYm94XFxcIl06Zm9jdXMgKyBsYWJlbCAuY3VzdG9tLWNoZWNrYm94IHtcXG4gIHRyYW5zZm9ybTogc2NhbGUoMS4yKTtcXG4gIGNvbG9yOiB2YXIoLS1jbHItcHJpbWFyeSk7XFxufVxcblxcblt0eXBlPVxcXCJjaGVja2JveFxcXCJdOmNoZWNrZWQgKyBsYWJlbCAuY3VzdG9tLWNoZWNrYm94IHtcXG4gIGJhY2tncm91bmQ6IHZhcigtLWNsci1wcmltYXJ5KTtcXG4gIGJvcmRlci1jb2xvcjogdmFyKC0tY2xyLXByaW1hcnkpO1xcbiAgYm94LXNoYWRvdzogaW5zZXQgMCAwIDBweCAycHggd2hpdGU7XFxufVxcblxcblt0eXBlPVxcXCJjaGVja2JveFxcXCJdOmNoZWNrZWQgKyBsYWJlbCB7XFxuICBvcGFjaXR5OiAwLjU7XFxufVxcblxcbi50YXNrIGxhYmVsOjphZnRlciB7XFxuICBjb250ZW50OiBcXFwiXFxcIjtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIGxlZnQ6IDEuNWVtO1xcbiAgcmlnaHQ6IDA7XFxuICB0b3A6IGNhbGMoNTAlIC0gMS41cHgpO1xcbiAgaGVpZ2h0OiAzcHg7XFxuICBiYWNrZ3JvdW5kOiBjdXJyZW50Q29sb3I7XFxuICB0cmFuc2Zvcm06IHNjYWxlWCgwKTtcXG4gIHRyYW5zaXRpb246IHRyYW5zZm9ybSAxNTBtcyBlYXNlLWluLW91dDtcXG4gIHRyYW5zZm9ybS1vcmlnaW46IHJpZ2h0O1xcbn1cXG5cXG5bdHlwZT1cXFwiY2hlY2tib3hcXFwiXTpjaGVja2VkICsgbGFiZWw6OmFmdGVyIHtcXG4gIHRyYW5zZm9ybTogc2NhbGVYKDEpO1xcbiAgdHJhbnNmb3JtLW9yaWdpbjogbGVmdDtcXG59XFxuXFxuLmRlbGV0ZS1zdHVmZiB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1ldmVubHk7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICB3aWR0aDogMTAwJTtcXG4gIGxlZnQ6IDA7XFxuICBib3R0b206IC0zNXB4O1xcbiAgY29sb3I6IHZhcigtLWNsci1saWdodCk7XFxufVxcblxcbi5za2lsbCB7XFxuICAtLWNpcmxjZS1zaXplOiAxNjBweDtcXG4gIC0tY2lybGNlLXdpZHRoOiB2YXIoLS1jaXJsY2Utc2l6ZSk7XFxuICAtLWNpcmxjZS1oZWlnaHQ6IHZhcigtLWNpcmxjZS1zaXplKTtcXG4gIHdpZHRoOiB2YXIoLS1jaXJsY2Utd2lkdGgpO1xcbiAgaGVpZ2h0OiB2YXIoLS1jaXJsY2UtaGVpZ2h0KTtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gIG1hcmdpbjogMTBweDtcXG59XFxuXFxuLm91dGVyIHtcXG4gIHdpZHRoOiB2YXIoLS1jaXJsY2Utd2lkdGgpO1xcbiAgaGVpZ2h0OiB2YXIoLS1jaXJsY2UtaGVpZ2h0KTtcXG4gIHBhZGRpbmc6IGNhbGMoKHZhcigtLWNpcmxjZS13aWR0aCkgKiAwLjI1KSAvIDIpO1xcbiAgYm94LXNoYWRvdzogNnB4IDZweCAxMHB4IC0xcHggcmdiYSgwLCAwLCAwLCAwLjE1KSxcXG4gICAgLTZweCAtNnB4IDEwcHggLTFweCByZ2JhKDIyNSwgMjI1LCAyMjUsIDAuNyk7XFxuICBib3JkZXItcmFkaXVzOiA1MCU7XFxufVxcblxcbi5pbm5lciB7XFxuICB3aWR0aDogY2FsYyh2YXIoLS1jaXJsY2Utd2lkdGgpICogMC43NSk7XFxuICBoZWlnaHQ6IGNhbGModmFyKC0tY2lybGNlLWhlaWdodCkgKiAwLjc1KTtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBib3gtc2hhZG93OiBpbnNldCA0cHggNHB4IDZweCAtMXB4IHJnYmEoMjI1LCAyMjUsIDIyNSwgMC43KSxcXG4gICAgLTAuNXB4IC0wLjVweCAwcHggcmdiYSgyMjUsIDIyNSwgMjI1LCAxKSxcXG4gICAgMC41cHggMC41cHggMHB4IHJnYmEoMCwgMCwgMCwgMC4xNSksIDBweCAxMnB4IDEwcHggLTEwcHggcmdiYSgwLCAwLCAwLCAwLjA1KTtcXG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcXG59XFxuXFxuI251bWJlciB7XFxuICBmb250LXdlaWdodDogNjAwO1xcbiAgY29sb3I6ICM1NTU7XFxuICBmb250LXNpemU6IDMwcHg7XFxufVxcblxcbmNpcmNsZSB7XFxuICBmaWxsOiBub25lO1xcbiAgc3Ryb2tlOiB1cmwoI0dyYWRpZW50Q29sb3IpO1xcbiAgc3Ryb2tlLXdpZHRoOiAyMHB4O1xcbiAgc3Ryb2tlLWRhc2hhcnJheTogNDUwO1xcbiAgdHJhbnNpdGlvbjogYWxsIDAuOHMgZWFzZS1pbi1vdXQ7XFxufVxcblxcbnN2ZyB7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICB0b3A6IDA7XFxuICBsZWZ0OiAwO1xcbiAgd2lkdGg6IHZhcigtLWNpcmxjZS13aWR0aCk7XFxuICBoZWlnaHQ6IHZhcigtLWNpcmxjZS1oZWlnaHQpO1xcbn1cXG5cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGUuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBO0VBQ0UsZ0NBQWdDO0VBQ2hDLG9CQUFvQjtFQUNwQixnQkFBZ0I7RUFDaEIsOEJBQThCO0FBQ2hDOztBQUVBOzs7RUFHRSxvQkFBb0I7RUFDcEIsc0JBQXNCO0FBQ3hCOztBQUVBO0VBQ0UsU0FBUztFQUNULG9DQUFvQztFQUNwQyxnQkFBZ0I7RUFDaEIsaUJBQWlCO0VBQ2pCLG9DQUFvQztFQUNwQyx1QkFBdUI7O0VBRXZCLGFBQWE7RUFDYjs7O3FEQUdtRDtBQUNyRDs7QUFFQTtFQUNFLGlCQUFpQjtFQUNqQixrQkFBa0I7RUFDbEIsMkJBQTJCO0VBQzNCLGdCQUFnQjtFQUNoQix5QkFBeUI7RUFDekIsbUJBQW1CO0VBQ25CLHNCQUFzQjtBQUN4Qjs7QUFFQTtFQUNFLGdCQUFnQjtBQUNsQjs7QUFFQTtFQUNFLGlCQUFpQjtFQUNqQixnQkFBZ0I7RUFDaEIsa0JBQWtCO0VBQ2xCLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLGVBQWU7QUFDakI7QUFDQTtFQUNFLFlBQVk7QUFDZDs7QUFFQTtFQUNFLGFBQWE7QUFDZjs7QUFFQTtFQUNFLGVBQWU7RUFDZixhQUFhO0VBQ2IsU0FBUztFQUNULFVBQVU7RUFDVixjQUFjO0FBQ2hC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QjtFQUM3QixrQkFBa0I7RUFDbEIsV0FBVztFQUNYLE9BQU87RUFDUCxhQUFhO0VBQ2IsdUJBQXVCO0FBQ3pCOztBQUVBO0VBQ0Usb0JBQW9CO0VBQ3BCLGtDQUFrQztFQUNsQyxtQ0FBbUM7RUFDbkMsMEJBQTBCO0VBQzFCLDRCQUE0QjtFQUM1QixrQkFBa0I7RUFDbEIsWUFBWTtBQUNkOztBQUVBO0VBQ0UsMEJBQTBCO0VBQzFCLDRCQUE0QjtFQUM1QiwrQ0FBK0M7RUFDL0M7Z0RBQzhDO0VBQzlDLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLHVDQUF1QztFQUN2Qyx5Q0FBeUM7RUFDekMsYUFBYTtFQUNiLHVCQUF1QjtFQUN2QixtQkFBbUI7RUFDbkI7O2dGQUU4RTtFQUM5RSxrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRSxnQkFBZ0I7RUFDaEIsV0FBVztFQUNYLGVBQWU7QUFDakI7O0FBRUE7RUFDRSxVQUFVO0VBQ1YsMkJBQTJCO0VBQzNCLGtCQUFrQjtFQUNsQixxQkFBcUI7RUFDckIsZ0NBQWdDO0FBQ2xDOztBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLE1BQU07RUFDTixPQUFPO0VBQ1AsMEJBQTBCO0VBQzFCLDRCQUE0QjtBQUM5QlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCI6cm9vdCB7XFxuICAtLWNsci1wcmltYXJ5OiByZ2IoNTQsIDExMiwgMTk5KTtcXG4gIC0tY2xyLWxpZ2h0OiAjZjRmNGY0O1xcbiAgLS1jbHItZGFyazogIzMzMztcXG4gIC0tY2xyLXdhcm5pbmc6IHJnYig5OSwgMzYsIDM2KTtcXG59XFxuXFxuKixcXG4qOjpiZWZvcmUsXFxuKjo6YWZ0ZXIge1xcbiAgZm9udC1mYW1pbHk6IGluaGVyaXQ7XFxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbn1cXG5cXG5ib2R5IHtcXG4gIG1hcmdpbjogMDtcXG4gIGZvbnQtZmFtaWx5OiBcXFwiV29yayBTYW5zXFxcIiwgc2Fucy1zZXJpZjtcXG4gIGZvbnQtd2VpZ2h0OiAzMDA7XFxuICBmb250LXNpemU6IDEuNXJlbTtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWNsci1wcmltYXJ5KTtcXG4gIGNvbG9yOiB2YXIoLS1jbHItbGlnaHQpO1xcblxcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGdyaWQ6XFxuICAgIFxcXCJoZWFkZXIgaGVhZGVyIGhlYWRlciBoZWFkZXJcXFwiIGF1dG9cXG4gICAgXFxcIi4uLi4uLiBsaXN0cyBhY3RpdmUgLi4uLi4uXFxcIiBhdXRvIC9cXG4gICAgMWZyIG1pbm1heCgxMDBweCwgMzAwcHgpIG1pbm1heCgyNTBweCwgNjAwcHgpIDFmcjtcXG59XFxuXFxuLnRpdGxlIHtcXG4gIGdyaWQtYXJlYTogaGVhZGVyO1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgZm9udC1zaXplOiBjYWxjKDd2aCArIDJyZW0pO1xcbiAgZm9udC13ZWlnaHQ6IDkwMDtcXG4gIGNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuMSk7XFxuICBsZXR0ZXItc3BhY2luZzogMnB4O1xcbiAgbWFyZ2luOiAtMC4zZW0gMCAwLjVlbTtcXG59XFxuXFxuLmFsbC10YXNrcyB7XFxuICBncmlkLWFyZWE6IGxpc3RzO1xcbn1cXG5cXG4udGFzay1saXN0IHtcXG4gIGZvbnQtc2l6ZTogMS4ycmVtO1xcbiAgbGluZS1oZWlnaHQ6IDEuNztcXG4gIGxpc3Qtc3R5bGU6IGNpcmNsZTtcXG4gIHBhZGRpbmctbGVmdDogMS4xZW07XFxufVxcblxcbi5saXN0LW5hbWUge1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG4ubGlzdC1uYW1lOmhvdmVyIHtcXG4gIG9wYWNpdHk6IDAuNztcXG59XFxuXFxuZm9ybSB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbn1cXG5cXG4uYnRuIHtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG4gIGJhY2tncm91bmQ6IDA7XFxuICBib3JkZXI6IDA7XFxuICBwYWRkaW5nOiAwO1xcbiAgY29sb3I6IGluaGVyaXQ7XFxufVxcblxcbi5idG4uY3JlYXRlIHtcXG4gIGZvbnQtc2l6ZTogMS41cmVtO1xcbiAgZm9udC13ZWlnaHQ6IDkwMDtcXG4gIG1hcmdpbi1yaWdodDogMC4yNWVtO1xcbiAgdHJhbnNpdGlvbjogb3BhY2l0eSAyNTBtcyBlYXNlLWluO1xcbn1cXG5cXG4uYnRuLmxpc3Q6aG92ZXIge1xcbiAgb3BhY2l0eTogMC43O1xcbn1cXG5cXG4uYnRuLmRlbGV0ZSB7XFxuICBvcGFjaXR5OiAwLjc7XFxuICBmb250LXNpemU6IDFyZW07XFxuICB0cmFuc2l0aW9uOiBjb2xvciAyMDBtcztcXG59XFxuXFxuLmJ0bi5kZWxldGU6aG92ZXIge1xcbiAgY29sb3I6IHZhcigtLWNsci13YXJuaW5nKTtcXG59XFxuXFxuLm5ldyB7XFxuICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcXG4gIGJvcmRlcjogMDtcXG4gIGNvbG9yOiBpbmhlcml0O1xcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIGN1cnJlbnRDb2xvcjtcXG4gIGZvbnQtc2l6ZTogaW5oZXJpdDtcXG4gIG91dGxpbmU6IG5vbmU7XFxuXFxuICB0cmFuc2l0aW9uOiBib3JkZXItYm90dG9tIDI1MG1zIGVhc2UtaW47XFxuICBvcmRlcjogMjtcXG5cXG4gIHBhZGRpbmc6IDAuMjVlbTtcXG59XFxuLm5ldzo6cGxhY2Vob2xkZXIge1xcbiAgY29sb3I6IGluaGVyaXQ7XFxuICBvcGFjaXR5OiAwLjQ7XFxufVxcbi5uZXc6Zm9jdXMge1xcbiAgYm9yZGVyLWJvdHRvbS13aWR0aDogMnB4O1xcbn1cXG4ubmV3OmZvY3VzOjpwbGFjZWhvbGRlciB7XFxuICBvcGFjaXR5OiAwLjE1O1xcbn1cXG5cXG4ubmV3Lmxpc3Qge1xcbiAgZm9udC1zaXplOiAxLjFyZW07XFxufVxcbi5uZXcudGFzayB7XFxuICBtYXJnaW4tYm90dG9tOiAwO1xcbn1cXG5cXG4uYWN0aXZlLWxpc3Qge1xcbiAgZm9udC13ZWlnaHQ6IDkwMDtcXG59XFxuXFxuLnRvZG8tbGlzdCB7XFxuICAtLXNwYWNlcjogMnJlbTtcXG4gIGFsaWduLXNlbGY6IHN0YXJ0O1xcbiAgbWFyZ2luLXRvcDogMnJlbTtcXG4gIGdyaWQtYXJlYTogYWN0aXZlO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tY2xyLWxpZ2h0KTtcXG4gIGNvbG9yOiB2YXIoLS1jbHItZGFyayk7XFxufVxcblxcbi50b2RvLWhlYWRlciB7XFxuICBiYWNrZ3JvdW5kOiAjZmJjODBhO1xcbiAgcGFkZGluZzogdmFyKC0tc3BhY2VyKTtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgaGVpZ2h0OiBhdXRvO1xcbiAgYm94LXNoYWRvdzogMCA0cHggMnB4IC0ycHggZ3JheTtcXG59XFxuXFxuLmxpc3QtdGl0bGUge1xcbiAgbWFyZ2luOiAwIDFlbSAwIDA7XFxufVxcblxcbi50YXNrLWNvdW50IHtcXG4gIG1hcmdpbjogMDtcXG4gIGZvbnQtc2l6ZTogMXJlbTtcXG59XFxuXFxuLmNpcmNsZS13cmFwIHtcXG4gIG1hcmdpbjogMTUwcHggYXV0bztcXG4gIHdpZHRoOiAxNTBweDtcXG4gIGhlaWdodDogMTUwcHg7XFxuICBiYWNrZ3JvdW5kOiAjZmVmY2ZmO1xcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xcbiAgYm9yZGVyOiAxcHggc29saWQgI2NkY2JkMDtcXG59XFxuXFxuLnRvZG8tYm9keSB7XFxuICBwYWRkaW5nOiB2YXIoLS1zcGFjZXIpO1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2Y2ZjdiZTtcXG59XFxuXFxuLm5ldy10YXNrLWNyZWF0b3IgLmNyZWF0ZSB7XFxuICBjb2xvcjogdmFyKC0tY2xyLXByaW1hcnkpO1xcbn1cXG5cXG5bdHlwZT1cXFwiY2hlY2tib3hcXFwiXSB7XFxuICBvcGFjaXR5OiAwO1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbn1cXG5cXG4udGFzayBsYWJlbCB7XFxuICBkaXNwbGF5OiBmbGV4LWlubGluZTtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxufVxcblxcbi50YXNrIHtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gIG1hcmdpbi1ib3R0b206IDEuMjVlbTtcXG59XFxuLnRhc2s6OmFmdGVyIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFwiO1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgcmlnaHQ6IDA7XFxuICBsZWZ0OiAwO1xcbiAgYm90dG9tOiAtMC41ZW07XFxuICBoZWlnaHQ6IDFweDtcXG4gIGJhY2tncm91bmQ6IGN1cnJlbnRDb2xvcjtcXG4gIG9wYWNpdHk6IDAuMTtcXG59XFxuXFxuLmN1c3RvbS1jaGVja2JveCB7XFxuICAtLXNpemU6IDAuNzVlbTtcXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcXG4gIHdpZHRoOiB2YXIoLS1zaXplKTtcXG4gIGhlaWdodDogdmFyKC0tc2l6ZSk7XFxuICBtYXJnaW4tcmlnaHQ6IHZhcigtLXNpemUpO1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbiAgYm9yZGVyOiAycHggc29saWQgY3VycmVudENvbG9yO1xcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xcbiAgdHJhbnNmb3JtOiBzY2FsZSgxKTtcXG4gIHRyYW5zaXRpb246IHRyYW5zZm9ybSAyMDBtcyBlYXNlLWluLW91dDtcXG59XFxuXFxuLmN1c3RvbS1kdWUtZGF0ZSB7XFxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxuICBwYWRkaW5nOiAwLjI1ZW07XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjYsIDI1LCAyNSk7XFxuICBib3JkZXItcmFkaXVzOiA1cHg7XFxuICBmb250LWZhbWlseTogQXJpYWwsIEhlbHZldGljYSwgc2Fucy1zZXJpZjtcXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xcbiAgZm9udC1zaXplOiAxZW07XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICBjb2xvcjogdHJhbnNwYXJlbnQ7XFxuXFxuICByaWdodDogMDtcXG4gIGJvdHRvbTogLTAuMjVlbTtcXG59XFxuXFxuLmN1c3RvbS1kdWUtZGF0ZSBzcGFuIHtcXG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudChcXG4gICAgMTM1ZGVnLFxcbiAgICB2YXIoLS1jbHItcHJpbWFyeSksXFxuICAgIHZhcigtLWNsci1saWdodCksXFxuICAgIGJsdWVcXG4gICk7XFxuICBiYWNrZ3JvdW5kLWNsaXA6IHRleHQ7XFxuICAtd2Via2l0LWJhY2tncm91bmQtY2xpcDogdGV4dDtcXG59XFxuLmN1c3RvbS1kdWUtZGF0ZTo6YmVmb3JlLFxcbi5jdXN0b20tZHVlLWRhdGU6OmFmdGVyIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFwiO1xcbiAgZGlzcGxheTogYmxvY2s7XFxuICB3aWR0aDogNSU7XFxuICBoZWlnaHQ6IDUlO1xcbiAgYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KFxcbiAgICAxMzVkZWcsXFxuICAgIHJnYigyNTUsIDE0NSwgMCksXFxuICAgIHJnYigyNTUsIDAsIDIyMSksXFxuICAgIGJsdWVcXG4gICk7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICB0b3A6IC0xMCU7XFxuICBsZWZ0OiAtNCU7XFxuICB6LWluZGV4OiAtMTtcXG4gIGJvcmRlci1yYWRpdXM6IDVweDtcXG59XFxuLmN1c3RvbS1kdWUtZGF0ZTo6YWZ0ZXIge1xcbiAgZmlsdGVyOiBibHVyKDVweCk7XFxufVxcblxcbi50YXNrOmhvdmVyIC5jdXN0b20tY2hlY2tib3gsXFxuW3R5cGU9XFxcImNoZWNrYm94XFxcIl06Zm9jdXMgKyBsYWJlbCAuY3VzdG9tLWNoZWNrYm94IHtcXG4gIHRyYW5zZm9ybTogc2NhbGUoMS4yKTtcXG4gIGNvbG9yOiB2YXIoLS1jbHItcHJpbWFyeSk7XFxufVxcblxcblt0eXBlPVxcXCJjaGVja2JveFxcXCJdOmNoZWNrZWQgKyBsYWJlbCAuY3VzdG9tLWNoZWNrYm94IHtcXG4gIGJhY2tncm91bmQ6IHZhcigtLWNsci1wcmltYXJ5KTtcXG4gIGJvcmRlci1jb2xvcjogdmFyKC0tY2xyLXByaW1hcnkpO1xcbiAgYm94LXNoYWRvdzogaW5zZXQgMCAwIDBweCAycHggd2hpdGU7XFxufVxcblxcblt0eXBlPVxcXCJjaGVja2JveFxcXCJdOmNoZWNrZWQgKyBsYWJlbCB7XFxuICBvcGFjaXR5OiAwLjU7XFxufVxcblxcbi50YXNrIGxhYmVsOjphZnRlciB7XFxuICBjb250ZW50OiBcXFwiXFxcIjtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIGxlZnQ6IDEuNWVtO1xcbiAgcmlnaHQ6IDA7XFxuICB0b3A6IGNhbGMoNTAlIC0gMS41cHgpO1xcbiAgaGVpZ2h0OiAzcHg7XFxuICBiYWNrZ3JvdW5kOiBjdXJyZW50Q29sb3I7XFxuICB0cmFuc2Zvcm06IHNjYWxlWCgwKTtcXG4gIHRyYW5zaXRpb246IHRyYW5zZm9ybSAxNTBtcyBlYXNlLWluLW91dDtcXG4gIHRyYW5zZm9ybS1vcmlnaW46IHJpZ2h0O1xcbn1cXG5cXG5bdHlwZT1cXFwiY2hlY2tib3hcXFwiXTpjaGVja2VkICsgbGFiZWw6OmFmdGVyIHtcXG4gIHRyYW5zZm9ybTogc2NhbGVYKDEpO1xcbiAgdHJhbnNmb3JtLW9yaWdpbjogbGVmdDtcXG59XFxuXFxuLmRlbGV0ZS1zdHVmZiB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1ldmVubHk7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICB3aWR0aDogMTAwJTtcXG4gIGxlZnQ6IDA7XFxuICBib3R0b206IC0zNXB4O1xcbiAgY29sb3I6IHZhcigtLWNsci1saWdodCk7XFxufVxcblxcbi5za2lsbCB7XFxuICAtLWNpcmxjZS1zaXplOiAxNjBweDtcXG4gIC0tY2lybGNlLXdpZHRoOiB2YXIoLS1jaXJsY2Utc2l6ZSk7XFxuICAtLWNpcmxjZS1oZWlnaHQ6IHZhcigtLWNpcmxjZS1zaXplKTtcXG4gIHdpZHRoOiB2YXIoLS1jaXJsY2Utd2lkdGgpO1xcbiAgaGVpZ2h0OiB2YXIoLS1jaXJsY2UtaGVpZ2h0KTtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gIG1hcmdpbjogMTBweDtcXG59XFxuXFxuLm91dGVyIHtcXG4gIHdpZHRoOiB2YXIoLS1jaXJsY2Utd2lkdGgpO1xcbiAgaGVpZ2h0OiB2YXIoLS1jaXJsY2UtaGVpZ2h0KTtcXG4gIHBhZGRpbmc6IGNhbGMoKHZhcigtLWNpcmxjZS13aWR0aCkgKiAwLjI1KSAvIDIpO1xcbiAgYm94LXNoYWRvdzogNnB4IDZweCAxMHB4IC0xcHggcmdiYSgwLCAwLCAwLCAwLjE1KSxcXG4gICAgLTZweCAtNnB4IDEwcHggLTFweCByZ2JhKDIyNSwgMjI1LCAyMjUsIDAuNyk7XFxuICBib3JkZXItcmFkaXVzOiA1MCU7XFxufVxcblxcbi5pbm5lciB7XFxuICB3aWR0aDogY2FsYyh2YXIoLS1jaXJsY2Utd2lkdGgpICogMC43NSk7XFxuICBoZWlnaHQ6IGNhbGModmFyKC0tY2lybGNlLWhlaWdodCkgKiAwLjc1KTtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBib3gtc2hhZG93OiBpbnNldCA0cHggNHB4IDZweCAtMXB4IHJnYmEoMjI1LCAyMjUsIDIyNSwgMC43KSxcXG4gICAgLTAuNXB4IC0wLjVweCAwcHggcmdiYSgyMjUsIDIyNSwgMjI1LCAxKSxcXG4gICAgMC41cHggMC41cHggMHB4IHJnYmEoMCwgMCwgMCwgMC4xNSksIDBweCAxMnB4IDEwcHggLTEwcHggcmdiYSgwLCAwLCAwLCAwLjA1KTtcXG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcXG59XFxuXFxuI251bWJlciB7XFxuICBmb250LXdlaWdodDogNjAwO1xcbiAgY29sb3I6ICM1NTU7XFxuICBmb250LXNpemU6IDMwcHg7XFxufVxcblxcbmNpcmNsZSB7XFxuICBmaWxsOiBub25lO1xcbiAgc3Ryb2tlOiB1cmwoI0dyYWRpZW50Q29sb3IpO1xcbiAgc3Ryb2tlLXdpZHRoOiAyMHB4O1xcbiAgc3Ryb2tlLWRhc2hhcnJheTogNDUwO1xcbiAgdHJhbnNpdGlvbjogYWxsIDAuOHMgZWFzZS1pbi1vdXQ7XFxufVxcblxcbnN2ZyB7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICB0b3A6IDA7XFxuICBsZWZ0OiAwO1xcbiAgd2lkdGg6IHZhcigtLWNpcmxjZS13aWR0aCk7XFxuICBoZWlnaHQ6IHZhcigtLWNpcmxjZS1oZWlnaHQpO1xcbn1cXG5cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107XG5cbiAgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IFwiXCI7XG4gICAgICB2YXIgbmVlZExheWVyID0gdHlwZW9mIGl0ZW1bNV0gIT09IFwidW5kZWZpbmVkXCI7XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBjb250ZW50ICs9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07XG5cbiAgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcbiAgbGlzdC5pID0gZnVuY3Rpb24gaShtb2R1bGVzLCBtZWRpYSwgZGVkdXBlLCBzdXBwb3J0cywgbGF5ZXIpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIHVuZGVmaW5lZF1dO1xuICAgIH1cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGsgPSAwOyBrIDwgdGhpcy5sZW5ndGg7IGsrKykge1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2tdWzBdO1xuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICBmb3IgKHZhciBfayA9IDA7IF9rIDwgbW9kdWxlcy5sZW5ndGg7IF9rKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2tdKTtcbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cbiAgICAgIGlmICh0eXBlb2YgbGF5ZXIgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBpdGVtWzVdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAobWVkaWEpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKHN1cHBvcnRzKSB7XG4gICAgICAgIGlmICghaXRlbVs0XSkge1xuICAgICAgICAgIGl0ZW1bNF0gPSBcIlwiLmNvbmNhdChzdXBwb3J0cyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzRdID0gc3VwcG9ydHM7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXRlbSkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV07XG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsIi8vIEltcG9ydHNcbmltcG9ydCBfX19IVE1MX0xPQURFUl9HRVRfU09VUkNFX0ZST01fSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvaHRtbC1sb2FkZXIvZGlzdC9ydW50aW1lL2dldFVybC5qc1wiO1xudmFyIF9fX0hUTUxfTE9BREVSX0lNUE9SVF8wX19fID0gbmV3IFVSTChcIi4vaW5kZXguanNcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbi8vIE1vZHVsZVxudmFyIF9fX0hUTUxfTE9BREVSX1JFUExBQ0VNRU5UXzBfX18gPSBfX19IVE1MX0xPQURFUl9HRVRfU09VUkNFX0ZST01fSU1QT1JUX19fKF9fX0hUTUxfTE9BREVSX0lNUE9SVF8wX19fKTtcbnZhciBjb2RlID0gXCI8IURPQ1RZUEUgaHRtbD5cXG48aHRtbCBsYW5nPVxcXCJlblxcXCI+XFxuICA8aGVhZD5cXG4gICAgPG1ldGEgY2hhcnNldD1cXFwiVVRGLThcXFwiIC8+XFxuICAgIDxtZXRhIGh0dHAtZXF1aXY9XFxcIlgtVUEtQ29tcGF0aWJsZVxcXCIgY29udGVudD1cXFwiSUU9ZWRnZVxcXCIgLz5cXG4gICAgPG1ldGEgbmFtZT1cXFwidmlld3BvcnRcXFwiIGNvbnRlbnQ9XFxcIndpZHRoPWRldmljZS13aWR0aCwgaW5pdGlhbC1zY2FsZT0xLjBcXFwiIC8+XFxuICAgIDxsaW5rIHJlbD1cXFwicHJlY29ubmVjdFxcXCIgaHJlZj1cXFwiaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbVxcXCIgLz5cXG4gICAgPGxpbmsgcmVsPVxcXCJwcmVjb25uZWN0XFxcIiBocmVmPVxcXCJodHRwczovL2ZvbnRzLmdzdGF0aWMuY29tXFxcIiBjcm9zc29yaWdpbiAvPlxcbiAgICA8bGluayByZWw9XFxcInByZWNvbm5lY3RcXFwiIGhyZWY9XFxcImh0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb21cXFwiIC8+XFxuICAgIDxsaW5rIHJlbD1cXFwicHJlY29ubmVjdFxcXCIgaHJlZj1cXFwiaHR0cHM6Ly9mb250cy5nc3RhdGljLmNvbVxcXCIgY3Jvc3NvcmlnaW4gLz5cXG4gICAgPGxpbmtcXG4gICAgICBocmVmPVxcXCJodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2NzczI/ZmFtaWx5PVdvcmsrU2Fuczp3Z2h0QDIwMDszMDAmZGlzcGxheT1zd2FwXFxcIlxcbiAgICAgIHJlbD1cXFwic3R5bGVzaGVldFxcXCJcXG4gICAgLz5cXG4gICAgPFwiICsgXCJzY3JpcHQgc3JjPVxcXCJcIiArIF9fX0hUTUxfTE9BREVSX1JFUExBQ0VNRU5UXzBfX18gKyBcIlxcXCI+PFwiICsgXCIvc2NyaXB0PlxcbiAgICA8dGl0bGU+VG9EbzwvdGl0bGU+XFxuICA8L2hlYWQ+XFxuICA8Ym9keT5cXG4gICAgPGgxIGNsYXNzPVxcXCJ0aXRsZVxcXCI+U3R1ZmYgSSBuZWVkIHRvIGRvPC9oMT5cXG5cXG4gICAgPGRpdiBjbGFzcz1cXFwiYWxsLXRhc2tzXFxcIj5cXG4gICAgICA8aDIgY2xhc3M9XFxcInRhc2stbGlzdC10aXRsZVxcXCI+TXkgbGlzdHM8L2gyPlxcbiAgICAgIDx1bCBjbGFzcz1cXFwidGFzay1saXN0XFxcIiBkYXRhLWxpc3RzPjwvdWw+XFxuXFxuICAgICAgPGZvcm0gYWN0aW9uPVxcXCJcXFwiIGRhdGEtbmV3LWxpc3QtZm9ybT5cXG4gICAgICAgIDxpbnB1dCBcXG4gICAgICAgICAgdHlwZT1cXFwidGV4dFxcXCJcXG4gICAgICAgICAgY2xhc3M9XFxcIm5ldyBsaXN0XFxcIlxcbiAgICAgICAgICBkYXRhLW5ldy1saXN0LWlucHV0XFxuICAgICAgICAgIHBsYWNlaG9sZGVyPVxcXCJuZXcgbGlzdCBuYW1lXFxcIlxcbiAgICAgICAgICBhcmlhLWxhYmVsPVxcXCJuZXcgbGlzdCBuYW1lXFxcIlxcbiAgICAgICAgLz5cXG4gICAgICAgIDxidXR0b24gY2xhc3M9XFxcImJ0biBjcmVhdGVcXFwiIGFyaWEtbGFiZWw9XFxcImNyZWF0ZSBuZXcgbGlzdFxcXCI+KzwvYnV0dG9uPlxcbiAgICAgIDwvZm9ybT5cXG4gICAgPC9kaXY+XFxuXFxuICAgIDxkaXYgY2xhc3M9XFxcInRvZG8tbGlzdFxcXCIgZGF0YS1saXN0LWRpc3BsYXktY29udGFpbmVyPlxcbiAgICAgIDxkaXYgY2xhc3M9XFxcInRvZG8taGVhZGVyXFxcIj5cXG4gICAgICAgIDxoMiBjbGFzcz1cXFwibGlzdC10aXRsZVxcXCIgZGF0YS1saXN0LXRpdGxlPllvdVR1YmU8L2gyPlxcbiAgICAgICAgPCEtLSA8cCBjbGFzcz1cXFwidGFzay1jb3VudFxcXCIgZGF0YS1saXN0LWNvdW50PjMgdGFza3MgcmVtYWluaW5nPC9wPiAtLT5cXG4gICAgICAgIDwhLS0gQ291bnRlciBjaXJsY2UgLS0+XFxuICAgICAgICA8ZGl2IGNsYXNzPVxcXCJza2lsbFxcXCI+XFxuICAgICAgICAgIDxkaXYgY2xhc3M9XFxcIm91dGVyXFxcIj5cXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJpbm5lclxcXCI+XFxuICAgICAgICAgICAgICA8ZGl2IGlkPVxcXCJudW1iZXJcXFwiPjwvZGl2PlxcbiAgICAgICAgICAgIDwvZGl2PlxcbiAgICAgICAgICA8L2Rpdj5cXG4gICAgXFxuICAgICAgICAgIDxzdmcgeG1sbnM9XFxcImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXFxcIiB2ZXJzaW9uPVxcXCIxLjFcXFwiPlxcbiAgICAgICAgICAgIDxkZWZzPlxcbiAgICAgICAgICAgICAgPGxpbmVhckdyYWRpZW50IGlkPVxcXCJHcmFkaWVudENvbG9yXFxcIj5cXG4gICAgICAgICAgICAgICAgPHN0b3Agb2Zmc2V0PVxcXCIwJVxcXCIgc3RvcC1jb2xvcj1cXFwiI0RBMjJGRlxcXCI+PC9zdG9wPlxcbiAgICAgICAgICAgICAgICA8c3RvcCBvZmZzZXQ9XFxcIjEwJVxcXCIgc3RvcC1jb2xvcj1cXFwiIzk3MzNFRVxcXCI+PC9zdG9wPlxcbiAgICAgICAgICAgICAgPC9saW5lYXJHcmFkaWVudD5cXG4gICAgICAgICAgICA8L2RlZnM+XFxuICAgICAgICAgICAgPGNpcmNsZVxcbiAgICAgICAgICAgICAgaWQ9XFxcImNpcmNsZVxcXCJcXG4gICAgICAgICAgICAgIGN4PVxcXCI1MCVcXFwiXFxuICAgICAgICAgICAgICBjeT1cXFwiNTAlXFxcIlxcbiAgICAgICAgICAgICAgcj1cXFwiNDMuNzUlXFxcIlxcbiAgICAgICAgICAgICAgc3Ryb2tlLWxpbmVjYXA9XFxcInJvdW5kXFxcIlxcbiAgICAgICAgICAgID48L2NpcmNsZT5cXG4gICAgICAgICAgPC9zdmc+XFxuICAgICAgICA8L2Rpdj5cXG4gICAgICA8L2Rpdj5cXG5cXG4gICAgICA8ZGl2IGNsYXNzPVxcXCJ0b2RvLWJvZHlcXFwiPlxcbiAgICAgICAgPGRpdiBjbGFzcz1cXFwidGFza3NcXFwiIGRhdGEtdGFza3M+PC9kaXY+XFxuXFxuICAgICAgICA8ZGl2IGNsYXNzPVxcXCJuZXctdGFzay1jcmVhdG9yXFxcIj5cXG4gICAgICAgICAgICA8Zm9ybSBhY3Rpb249XFxcIlxcXCIgZGF0YS1uZXctdGFzay1mb3JtPlxcbiAgICAgICAgICAgICAgICA8aW5wdXQgXFxuICAgICAgICAgICAgICAgICAgdHlwZT1cXFwidGV4dFxcXCJcXG4gICAgICAgICAgICAgICAgICBkYXRhLW5ldy10YXNrLWlucHV0XFxuICAgICAgICAgICAgICAgICAgY2xhc3M9XFxcIm5ldyB0YXNrXFxcIlxcbiAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVxcXCJuZXcgdGFzayBuYW1lXFxcIlxcbiAgICAgICAgICAgICAgICAgIGFyaWEtbGFiZWw9XFxcIm5ldyB0YXNrIG5hbWVcXFwiXFxuICAgICAgICAgICAgICAgIC8+XFxuICAgICAgICAgICAgICAgIDxpbnB1dCBcXG4gICAgICAgICAgICAgICAgdHlwZT1cXFwiZGF0ZVxcXCJcXG4gICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XFxcImRkLW1tLXl5eXlcXFwiXFxuICAgICAgICAgICAgICAgIG5hbWU9XFxcImJlZ2luXFxcIlxcbiAgICAgICAgICAgICAgICB2YWx1ZT1cXFwiXFxcIlxcbiAgICAgICAgICAgICAgICBkYXRhLW5ldy10YXNrLWRhdGUtaW5wdXRcXG4gICAgICAgICAgICAgICAgY2xhc3M9XFxcIm5ldyB0YXNrXFxcIj5cXG4gICAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzcz1cXFwiYnRuIGNyZWF0ZVxcXCIgYXJpYS1sYWJlbD1cXFwiY3JlYXRlIG5ldyB0YXNrXFxcIj4rPC9idXR0b24+XFxuICAgICAgICAgICAgICA8L2Zvcm0+XFxuICAgICAgICA8L2Rpdj5cXG5cXG4gICAgICAgIDxkaXYgY2xhc3M9XFxcImRlbGV0ZS1zdHVmZlxcXCI+XFxuICAgICAgICAgIDxidXR0b24gY2xhc3M9XFxcImJ0biBkZWxldGVcXFwiIGRhdGEtY2xlYXItY29tcGxldGUtdGFza3MtYnV0dG9uPkNsZWFyIGNvbXBsZXRlZCB0YXNrczwvYnV0dG9uPlxcbiAgICAgICAgICA8YnV0dG9uIGNsYXNzPVxcXCJidG4gZGVsZXRlXFxcIiBkYXRhLWRlbGV0ZS1saXN0LWJ1dHRvbj5EZWxldGUgbGlzdDwvYnV0dG9uPlxcbiAgICAgICAgPC9kaXY+XFxuICAgICAgPC9kaXY+XFxuICAgIDwvZGl2PlxcblxcblxcblxcblxcbiAgIFxcbiAgICA8L2Rpdj5cXG4gICAgPHRlbXBsYXRlIGlkPVxcXCJ0YXNrLXRlbXBsYXRlXFxcIj5cXG4gICAgICA8ZGl2IGNsYXNzPVxcXCJ0YXNrXFxcIj5cXG4gICAgICAgIDxkaXYgY2xhc3M9XFxcImN1c3RvbS1kdWUtZGF0ZVxcXCI+XFxuICAgICAgICAgIDxzcGFuIGNsYXNzPVxcXCJkdWUtZGF5cy1kaXNwbGF5XFxcIj48L3NwYW4+XFxuICAgICAgICA8L2Rpdj4gIFxcbiAgICAgICAgPGlucHV0IHR5cGU9XFxcImNoZWNrYm94XFxcIiAvPlxcbiAgICAgICAgPGxhYmVsPlxcbiAgICAgICAgICA8c3BhbiBjbGFzcz1cXFwiY3VzdG9tLWNoZWNrYm94XFxcIj48L3NwYW4+ICAgICAgIFxcbiAgICAgICAgPC9sYWJlbD5cXG4gICAgICA8L2Rpdj5cXG4gICAgPC90ZW1wbGF0ZT5cXG4gIDwvYm9keT5cXG48L2h0bWw+XFxuXCI7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBjb2RlOyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uICh1cmwsIG9wdGlvbnMpIHtcbiAgaWYgKCFvcHRpb25zKSB7XG4gICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXBhcmFtLXJlYXNzaWduXG4gICAgb3B0aW9ucyA9IHt9O1xuICB9XG5cbiAgaWYgKCF1cmwpIHtcbiAgICByZXR1cm4gdXJsO1xuICB9IC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby11bmRlcnNjb3JlLWRhbmdsZSwgbm8tcGFyYW0tcmVhc3NpZ25cblxuXG4gIHVybCA9IFN0cmluZyh1cmwuX19lc01vZHVsZSA/IHVybC5kZWZhdWx0IDogdXJsKTtcblxuICBpZiAob3B0aW9ucy5oYXNoKSB7XG4gICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXBhcmFtLXJlYXNzaWduXG4gICAgdXJsICs9IG9wdGlvbnMuaGFzaDtcbiAgfVxuXG4gIGlmIChvcHRpb25zLm1heWJlTmVlZFF1b3RlcyAmJiAvW1xcdFxcblxcZlxcciBcIic9PD5gXS8udGVzdCh1cmwpKSB7XG4gICAgcmV0dXJuIFwiXFxcIlwiLmNvbmNhdCh1cmwsIFwiXFxcIlwiKTtcbiAgfVxuXG4gIHJldHVybiB1cmw7XG59OyIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgc3R5bGVzSW5ET00gPSBbXTtcblxuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRPTS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRPTVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4QnlJZGVudGlmaWVyID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdLFxuICAgICAgc3VwcG9ydHM6IGl0ZW1bNF0sXG4gICAgICBsYXllcjogaXRlbVs1XVxuICAgIH07XG5cbiAgICBpZiAoaW5kZXhCeUlkZW50aWZpZXIgIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHVwZGF0ZXIgPSBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKTtcbiAgICAgIG9wdGlvbnMuYnlJbmRleCA9IGk7XG4gICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoaSwgMCwge1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiB1cGRhdGVyLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG5cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG5cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuXG5mdW5jdGlvbiBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBhcGkgPSBvcHRpb25zLmRvbUFQSShvcHRpb25zKTtcbiAgYXBpLnVwZGF0ZShvYmopO1xuXG4gIHZhciB1cGRhdGVyID0gZnVuY3Rpb24gdXBkYXRlcihuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwICYmIG5ld09iai5zdXBwb3J0cyA9PT0gb2JqLnN1cHBvcnRzICYmIG5ld09iai5sYXllciA9PT0gb2JqLmxheWVyKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiB1cGRhdGVyO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG5cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuXG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcblxuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuXG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuXG4gICAgICBpZiAoc3R5bGVzSW5ET01bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRE9NW19pbmRleF0udXBkYXRlcigpO1xuXG4gICAgICAgIHN0eWxlc0luRE9NLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cblxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTsgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcblxuICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuXG4gIHJldHVybiBtZW1vW3RhcmdldF07XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG5mdW5jdGlvbiBpbnNlcnRCeVNlbGVjdG9yKGluc2VydCwgc3R5bGUpIHtcbiAgdmFyIHRhcmdldCA9IGdldFRhcmdldChpbnNlcnQpO1xuXG4gIGlmICghdGFyZ2V0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgfVxuXG4gIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0QnlTZWxlY3RvcjsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgb3B0aW9ucy5zZXRBdHRyaWJ1dGVzKGVsZW1lbnQsIG9wdGlvbnMuYXR0cmlidXRlcyk7XG4gIG9wdGlvbnMuaW5zZXJ0KGVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG4gIHJldHVybiBlbGVtZW50O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGVFbGVtZW50KSB7XG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcblxuICBpZiAobm9uY2UpIHtcbiAgICBzdHlsZUVsZW1lbnQuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgbm9uY2UpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBcIlwiO1xuXG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChvYmouc3VwcG9ydHMsIFwiKSB7XCIpO1xuICB9XG5cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpO1xuICB9XG5cbiAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBvYmoubGF5ZXIgIT09IFwidW5kZWZpbmVkXCI7XG5cbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIkBsYXllclwiLmNvbmNhdChvYmoubGF5ZXIubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChvYmoubGF5ZXIpIDogXCJcIiwgXCIge1wiKTtcbiAgfVxuXG4gIGNzcyArPSBvYmouY3NzO1xuXG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuXG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfSAvLyBGb3Igb2xkIElFXG5cbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuXG5cbiAgb3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbn1cblxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlRWxlbWVudC5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgc3R5bGVFbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50KTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbmZ1bmN0aW9uIGRvbUFQSShvcHRpb25zKSB7XG4gIHZhciBzdHlsZUVsZW1lbnQgPSBvcHRpb25zLmluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgcmV0dXJuIHtcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZShvYmopIHtcbiAgICAgIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKTtcbiAgICB9LFxuICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCk7XG4gICAgfVxuICB9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCkge1xuICBpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKTtcbiAgICB9XG5cbiAgICBzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzdHlsZVRhZ1RyYW5zZm9ybTsiLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdGlkOiBtb2R1bGVJZCxcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuLy8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbl9fd2VicGFja19yZXF1aXJlX18ubSA9IF9fd2VicGFja19tb2R1bGVzX187XG5cbiIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IChtb2R1bGVbJ2RlZmF1bHQnXSkgOlxuXHRcdCgpID0+IChtb2R1bGUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5nID0gKGZ1bmN0aW9uKCkge1xuXHRpZiAodHlwZW9mIGdsb2JhbFRoaXMgPT09ICdvYmplY3QnKSByZXR1cm4gZ2xvYmFsVGhpcztcblx0dHJ5IHtcblx0XHRyZXR1cm4gdGhpcyB8fCBuZXcgRnVuY3Rpb24oJ3JldHVybiB0aGlzJykoKTtcblx0fSBjYXRjaCAoZSkge1xuXHRcdGlmICh0eXBlb2Ygd2luZG93ID09PSAnb2JqZWN0JykgcmV0dXJuIHdpbmRvdztcblx0fVxufSkoKTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwidmFyIHNjcmlwdFVybDtcbmlmIChfX3dlYnBhY2tfcmVxdWlyZV9fLmcuaW1wb3J0U2NyaXB0cykgc2NyaXB0VXJsID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmxvY2F0aW9uICsgXCJcIjtcbnZhciBkb2N1bWVudCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5kb2N1bWVudDtcbmlmICghc2NyaXB0VXJsICYmIGRvY3VtZW50KSB7XG5cdGlmIChkb2N1bWVudC5jdXJyZW50U2NyaXB0KVxuXHRcdHNjcmlwdFVybCA9IGRvY3VtZW50LmN1cnJlbnRTY3JpcHQuc3JjXG5cdGlmICghc2NyaXB0VXJsKSB7XG5cdFx0dmFyIHNjcmlwdHMgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZShcInNjcmlwdFwiKTtcblx0XHRpZihzY3JpcHRzLmxlbmd0aCkgc2NyaXB0VXJsID0gc2NyaXB0c1tzY3JpcHRzLmxlbmd0aCAtIDFdLnNyY1xuXHR9XG59XG4vLyBXaGVuIHN1cHBvcnRpbmcgYnJvd3NlcnMgd2hlcmUgYW4gYXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCB5b3UgbXVzdCBzcGVjaWZ5IGFuIG91dHB1dC5wdWJsaWNQYXRoIG1hbnVhbGx5IHZpYSBjb25maWd1cmF0aW9uXG4vLyBvciBwYXNzIGFuIGVtcHR5IHN0cmluZyAoXCJcIikgYW5kIHNldCB0aGUgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gdmFyaWFibGUgZnJvbSB5b3VyIGNvZGUgdG8gdXNlIHlvdXIgb3duIGxvZ2ljLlxuaWYgKCFzY3JpcHRVcmwpIHRocm93IG5ldyBFcnJvcihcIkF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgaW4gdGhpcyBicm93c2VyXCIpO1xuc2NyaXB0VXJsID0gc2NyaXB0VXJsLnJlcGxhY2UoLyMuKiQvLCBcIlwiKS5yZXBsYWNlKC9cXD8uKiQvLCBcIlwiKS5yZXBsYWNlKC9cXC9bXlxcL10rJC8sIFwiL1wiKTtcbl9fd2VicGFja19yZXF1aXJlX18ucCA9IHNjcmlwdFVybDsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmIgPSBkb2N1bWVudC5iYXNlVVJJIHx8IHNlbGYubG9jYXRpb24uaHJlZjtcblxuLy8gb2JqZWN0IHRvIHN0b3JlIGxvYWRlZCBhbmQgbG9hZGluZyBjaHVua3Ncbi8vIHVuZGVmaW5lZCA9IGNodW5rIG5vdCBsb2FkZWQsIG51bGwgPSBjaHVuayBwcmVsb2FkZWQvcHJlZmV0Y2hlZFxuLy8gW3Jlc29sdmUsIHJlamVjdCwgUHJvbWlzZV0gPSBjaHVuayBsb2FkaW5nLCAwID0gY2h1bmsgbG9hZGVkXG52YXIgaW5zdGFsbGVkQ2h1bmtzID0ge1xuXHRcIm1haW5cIjogMFxufTtcblxuLy8gbm8gY2h1bmsgb24gZGVtYW5kIGxvYWRpbmdcblxuLy8gbm8gcHJlZmV0Y2hpbmdcblxuLy8gbm8gcHJlbG9hZGVkXG5cbi8vIG5vIEhNUlxuXG4vLyBubyBITVIgbWFuaWZlc3RcblxuLy8gbm8gb24gY2h1bmtzIGxvYWRlZFxuXG4vLyBubyBqc29ucCBmdW5jdGlvbiIsIl9fd2VicGFja19yZXF1aXJlX18ubmMgPSB1bmRlZmluZWQ7IiwiaW1wb3J0IHsgY3JlYXRlVGFzaywgY3JlYXRlTGlzdCB9IGZyb20gXCIuL2NyZWF0ZVRhc2stTGlzdFwiO1xuaW1wb3J0IHsgZGF5c0xlZnRDYWxjdWxhdG9yIH0gZnJvbSBcIi4vZGF5cy1sZWZ0LWNhbGN1bGF0b3JcIjtcbmltcG9ydCB7IHNldENpcmNsZSB9IGZyb20gXCIuL3Rhc2tQcmVjZW50LXJlbmRlclwiO1xuaW1wb3J0IGNzcyBmcm9tIFwiLi9zdHlsZS5jc3NcIjtcbmltcG9ydCBcIi4vc3R5bGUuY3NzXCI7XG5pbXBvcnQgaHRtbCBmcm9tIFwiLi90ZW1wbGF0ZS5odG1sXCI7XG5cbmNvbnN0IGxpc3RDb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiW2RhdGEtbGlzdHNdXCIpO1xuY29uc3QgbmV3TGlzdEZvcm0gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiW2RhdGEtbmV3LWxpc3QtZm9ybV1cIik7XG5jb25zdCBuZXdMaXN0SW5wdXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiW2RhdGEtbmV3LWxpc3QtaW5wdXRdXCIpO1xuY29uc3QgZGVsZXRlTGlzdEJ1dHRvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJbZGF0YS1kZWxldGUtbGlzdC1idXR0b25dXCIpO1xuY29uc3QgbGlzdERpc3BsYXlDb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFxuICBcIltkYXRhLWxpc3QtZGlzcGxheS1jb250YWluZXJdXCJcbik7XG5jb25zdCBsaXN0VGl0bGVFbGVtZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIltkYXRhLWxpc3QtdGl0bGVdXCIpO1xuY29uc3QgbGlzdENvdW50RWxlbWVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJbZGF0YS1saXN0LWNvdW50XVwiKTtcbmNvbnN0IHRhc2tzQ29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIltkYXRhLXRhc2tzXVwiKTtcbmNvbnN0IHRhc2tUZW1wbGF0ZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwidGFzay10ZW1wbGF0ZVwiKTtcbmNvbnN0IG5ld1Rhc2tGb3JtID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIltkYXRhLW5ldy10YXNrLWZvcm1dXCIpO1xuY29uc3QgbmV3VGFza0lucHV0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIltkYXRhLW5ldy10YXNrLWlucHV0XVwiKTtcbmNvbnN0IG5ld1Rhc2tEYXRlSW5wdXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiW2RhdGEtbmV3LXRhc2stZGF0ZS1pbnB1dF1cIik7XG5jb25zdCBjbGVhckNvbXBsZXRlVGFza3NCdXR0b24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFxuICBcIltkYXRhLWNsZWFyLWNvbXBsZXRlLXRhc2tzLWJ1dHRvbl1cIlxuKTtcblxuY29uc3QgTE9DQUxfU1RPUkFHRV9MSVNUX0tFWSA9IFwidGFzay5saXN0c1wiO1xuY29uc3QgTE9DQUxfU1RPUkFHRV9TRUxFQ1RFRF9MSVNUX0lEX0tFWSA9IFwidGFzay5zZWxlY3RlZExpc3RJZFwiO1xubGV0IGxpc3RzID0gSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbShMT0NBTF9TVE9SQUdFX0xJU1RfS0VZKSkgfHwgW107XG5sZXQgc2VsZWN0ZWRMaXN0SWQgPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbShMT0NBTF9TVE9SQUdFX1NFTEVDVEVEX0xJU1RfSURfS0VZKTtcblxubGlzdENvbnRhaW5lci5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKGUpID0+IHtcbiAgaWYgKGUudGFyZ2V0LnRhZ05hbWUudG9Mb3dlckNhc2UoKSA9PT0gXCJsaVwiKSB7XG4gICAgc2VsZWN0ZWRMaXN0SWQgPSBlLnRhcmdldC5kYXRhc2V0Lmxpc3RJZDtcbiAgICBzYXZlQW5kUmVuZGVyKCk7XG4gIH1cbn0pO1xuXG50YXNrc0NvbnRhaW5lci5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKGUpID0+IHtcbiAgaWYgKGUudGFyZ2V0LnRhZ05hbWUudG9Mb3dlckNhc2UoKSA9PT0gXCJpbnB1dFwiKSB7XG4gICAgY29uc3Qgc2VsZWN0ZWRMaXN0ID0gbGlzdHMuZmluZCgobGlzdCkgPT4gbGlzdC5pZCA9PT0gc2VsZWN0ZWRMaXN0SWQpO1xuICAgIGNvbnN0IHNlbGVjdGVkVGFzayA9IHNlbGVjdGVkTGlzdC50YXNrcy5maW5kKFxuICAgICAgKHRhc2spID0+IHRhc2suaWQgPT09IGUudGFyZ2V0LmlkXG4gICAgKTtcbiAgICBzZWxlY3RlZFRhc2suY29tcGxldGUgPSBlLnRhcmdldC5jaGVja2VkO1xuICAgIHNhdmUoKTtcbiAgICByZW5kZXJUYXNrQ291bnQoc2VsZWN0ZWRMaXN0KTtcbiAgfVxufSk7XG5cbmNsZWFyQ29tcGxldGVUYXNrc0J1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKGUpID0+IHtcbiAgY29uc3Qgc2VsZWN0ZWRMaXN0ID0gbGlzdHMuZmluZCgobGlzdCkgPT4gbGlzdC5pZCA9PT0gc2VsZWN0ZWRMaXN0SWQpO1xuICBzZWxlY3RlZExpc3QudGFza3MgPSBzZWxlY3RlZExpc3QudGFza3MuZmlsdGVyKCh0YXNrKSA9PiAhdGFzay5jb21wbGV0ZSk7XG4gIHNhdmVBbmRSZW5kZXIoKTtcbn0pO1xuXG5kZWxldGVMaXN0QnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoZSkgPT4ge1xuICBsaXN0cyA9IGxpc3RzLmZpbHRlcigobGlzdCkgPT4gbGlzdC5pZCAhPT0gc2VsZWN0ZWRMaXN0SWQpO1xuICBzZWxlY3RlZExpc3RJZCA9IGxpc3RzW2xpc3RzLmxlbmd0aCAtIDFdLmlkO1xuICBzYXZlQW5kUmVuZGVyKCk7XG59KTtcblxubmV3TGlzdEZvcm0uYWRkRXZlbnRMaXN0ZW5lcihcInN1Ym1pdFwiLCAoZSkgPT4ge1xuICBlLnByZXZlbnREZWZhdWx0KCk7XG4gIGNvbnN0IGxpc3ROYW1lID0gbmV3TGlzdElucHV0LnZhbHVlO1xuICBpZiAobGlzdE5hbWUgPT0gbnVsbCB8fCBsaXN0TmFtZSA9PT0gXCJcIikgcmV0dXJuO1xuICBjb25zdCBsaXN0ID0gY3JlYXRlTGlzdChsaXN0TmFtZSk7XG4gIG5ld0xpc3RJbnB1dC52YWx1ZSA9IG51bGw7XG4gIGxpc3RzLnB1c2gobGlzdCk7XG4gIHNlbGVjdGVkTGlzdElkID0gbGlzdC5pZDtcbiAgc2F2ZUFuZFJlbmRlcigpO1xufSk7XG5cbm5ld1Rhc2tGb3JtLmFkZEV2ZW50TGlzdGVuZXIoXCJzdWJtaXRcIiwgKGUpID0+IHtcbiAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICBjb25zdCB0YXNrTmFtZSA9IG5ld1Rhc2tJbnB1dC52YWx1ZTtcbiAgY29uc3QgdGFza0RhdGUgPSBuZXdUYXNrRGF0ZUlucHV0LnZhbHVlO1xuICBpZiAodGFza05hbWUgPT0gbnVsbCB8fCB0YXNrTmFtZSA9PT0gXCJcIikgcmV0dXJuO1xuICBpZiAodGFza0RhdGUgPT0gbnVsbCB8fCB0YXNrRGF0ZSA9PT0gXCJcIikgcmV0dXJuO1xuXG4gIGNvbnN0IHRhc2sgPSBjcmVhdGVUYXNrKHRhc2tOYW1lLCB0YXNrRGF0ZSk7XG4gIG5ld1Rhc2tJbnB1dC52YWx1ZSA9IG51bGw7XG4gIG5ld1Rhc2tEYXRlSW5wdXQudmFsdWUgPSBudWxsO1xuXG4gIGNvbnN0IHNlbGVjdGVkTGlzdCA9IGxpc3RzLmZpbmQoKGxpc3QpID0+IGxpc3QuaWQgPT09IHNlbGVjdGVkTGlzdElkKTtcbiAgc2VsZWN0ZWRMaXN0LnRhc2tzLnB1c2godGFzayk7XG4gIHNhdmVBbmRSZW5kZXIoKTtcbn0pO1xuXG5mdW5jdGlvbiBzYXZlQW5kUmVuZGVyKCkge1xuICBzYXZlKCk7XG4gIHJlbmRlcigpO1xufVxuXG5mdW5jdGlvbiBzYXZlKCkge1xuICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShMT0NBTF9TVE9SQUdFX0xJU1RfS0VZLCBKU09OLnN0cmluZ2lmeShsaXN0cykpO1xuICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShMT0NBTF9TVE9SQUdFX1NFTEVDVEVEX0xJU1RfSURfS0VZLCBzZWxlY3RlZExpc3RJZCk7XG59XG5cbmZ1bmN0aW9uIHJlbmRlcigpIHtcbiAgY2xlYXJFbGVtZW50KGxpc3RDb250YWluZXIpO1xuICByZW5kZXJMaXN0KCk7XG4gIGNvbnN0IHNlbGVjdGVkTGlzdCA9IGxpc3RzLmZpbmQoKGxpc3QpID0+IGxpc3QuaWQgPT09IHNlbGVjdGVkTGlzdElkKTtcbiAgaWYgKHNlbGVjdGVkTGlzdElkID09IG51bGwpIHtcbiAgICBsaXN0RGlzcGxheUNvbnRhaW5lci5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7XG4gIH0gZWxzZSB7XG4gICAgbGlzdERpc3BsYXlDb250YWluZXIuc3R5bGUuZGlzcGxheSA9IFwiXCI7XG4gICAgbGlzdFRpdGxlRWxlbWVudC5pbm5lclRleHQgPSBzZWxlY3RlZExpc3QubmFtZTtcbiAgICByZW5kZXJUYXNrQ291bnQoc2VsZWN0ZWRMaXN0KTtcbiAgICBjbGVhckVsZW1lbnQodGFza3NDb250YWluZXIpO1xuICAgIHJlbmRlclRhc2tzKHNlbGVjdGVkTGlzdCk7XG4gIH1cbn1cblxuZnVuY3Rpb24gcmVuZGVyVGFza3Moc2VsZWN0ZWRMaXN0KSB7XG4gIHNlbGVjdGVkTGlzdC50YXNrcy5mb3JFYWNoKCh0YXNrKSA9PiB7XG4gICAgY29uc3QgdGFza0VsZW1lbnQgPSBkb2N1bWVudC5pbXBvcnROb2RlKHRhc2tUZW1wbGF0ZS5jb250ZW50LCB0cnVlKTtcbiAgICBjb25zdCBjaGVja2JveCA9IHRhc2tFbGVtZW50LnF1ZXJ5U2VsZWN0b3IoXCJpbnB1dFwiKTtcbiAgICBjaGVja2JveC5pZCA9IHRhc2suaWQ7XG4gICAgY2hlY2tib3guY2hlY2tlZCA9IHRhc2suY29tcGxldGU7XG4gICAgY29uc3QgbGFiZWwgPSB0YXNrRWxlbWVudC5xdWVyeVNlbGVjdG9yKFwibGFiZWxcIik7XG4gICAgbGFiZWwuaHRtbEZvciA9IHRhc2suaWQ7XG4gICAgbGFiZWwuYXBwZW5kKHRhc2submFtZSk7XG4gICAgY29uc3QgZHVlRGF5cyA9IHRhc2tFbGVtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuZHVlLWRheXMtZGlzcGxheVwiKTtcbiAgICBjb25zdCBkYXlzTGVmdCA9IGRheXNMZWZ0Q2FsY3VsYXRvcih0YXNrKTtcbiAgICBkdWVEYXlzLmFwcGVuZChgJHtkYXlzTGVmdH1gKTtcbiAgICB0YXNrc0NvbnRhaW5lci5hcHBlbmRDaGlsZCh0YXNrRWxlbWVudCk7XG4gIH0pO1xufVxuXG5mdW5jdGlvbiByZW5kZXJUYXNrQ291bnQoc2VsZWN0ZWRMaXN0KSB7XG4gIGNvbnN0IGluY29tcGxldGVUYXNrQ291bnQgPSBzZWxlY3RlZExpc3QudGFza3MuZmlsdGVyKFxuICAgICh0YXNrKSA9PiAhdGFzay5jb21wbGV0ZVxuICApLmxlbmd0aDtcbiAgY29uc3QgdGFza3NDb3VudCA9IHNlbGVjdGVkTGlzdC50YXNrcy5sZW5ndGg7XG4gIGNvbnN0IHByZWNlbnQgPSBpbmNvbXBsZXRlVGFza0NvdW50IC8gdGFza3NDb3VudDtcbiAgc2V0Q2lyY2xlKHByZWNlbnQpO1xuICAvLyBjb25zdCB0YXNrU3RyaW5nID0gaW5jb21wbGV0ZVRhc2tDb3VudCA9PT0gMSA/IFwidGFza1wiIDogXCJ0YXNrc1wiO1xuICAvLyBsaXN0Q291bnRFbGVtZW50LmlubmVyVGV4dCA9IGAke2luY29tcGxldGVUYXNrQ291bnR9ICR7dGFza1N0cmluZ30gcmVtYWluaW5nYDtcbn1cblxuZnVuY3Rpb24gcmVuZGVyTGlzdCgpIHtcbiAgbGlzdHMuZm9yRWFjaCgobGlzdCkgPT4ge1xuICAgIGNvbnN0IGxpc3RFbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImxpXCIpO1xuICAgIGxpc3RFbGVtZW50LmRhdGFzZXQubGlzdElkID0gbGlzdC5pZDtcbiAgICBsaXN0RWxlbWVudC5jbGFzc0xpc3QuYWRkKFwibGlzdC1uYW1lXCIpO1xuICAgIGxpc3RFbGVtZW50LmlubmVyVGV4dCA9IGxpc3QubmFtZTtcbiAgICBpZiAobGlzdC5pZCA9PT0gc2VsZWN0ZWRMaXN0SWQpIHtcbiAgICAgIGxpc3RFbGVtZW50LmNsYXNzTGlzdC5hZGQoXCJhY3RpdmUtbGlzdFwiKTtcbiAgICB9XG4gICAgbGlzdENvbnRhaW5lci5hcHBlbmRDaGlsZChsaXN0RWxlbWVudCk7XG4gIH0pO1xufVxuXG5mdW5jdGlvbiBjbGVhckVsZW1lbnQoZWxlbWVudCkge1xuICB3aGlsZSAoZWxlbWVudC5maXJzdENoaWxkKSB7XG4gICAgZWxlbWVudC5yZW1vdmVDaGlsZChlbGVtZW50LmZpcnN0Q2hpbGQpO1xuICB9XG59XG5cbnJlbmRlcigpO1xuIl0sIm5hbWVzIjpbImNyZWF0ZVRhc2siLCJuYW1lIiwiZGF0ZSIsImlkIiwiRGF0ZSIsIm5vdyIsInRvU3RyaW5nIiwiY29tcGxldGUiLCJjcmVhdGVMaXN0IiwidGFza3MiLCJkYXlzTGVmdENhbGN1bGF0b3IiLCJ0YXNrIiwiZHVlRGF5IiwidG9kYXkiLCJnZXRDdXJyZW50RGF0ZSIsImRpZmZlcmVuY2UiLCJnZXRUaW1lIiwiZGF5c0xlZnQiLCJNYXRoIiwiY2VpbCIsImRkIiwiU3RyaW5nIiwiZ2V0RGF0ZSIsInBhZFN0YXJ0IiwibW0iLCJnZXRNb250aCIsInl5eXkiLCJnZXRGdWxsWWVhciIsIm51bWJlciIsIndpbmRvdyIsImRvY3VtZW50IiwiZ2V0RWxlbWVudEJ5SWQiLCJza2lsbENvbnRhaW5lciIsInF1ZXJ5U2VsZWN0b3IiLCJjaXJjbGUiLCJsYXN0Q291bnQiLCJzZXRDaXJjbGUiLCJwcmVjIiwicHJlY2VudCIsInRvRml4ZWQiLCJjb3VudGVyIiwic2V0QXR0cmlidXRlIiwic2V0SW50ZXJ2YWwiLCJjbGVhckludGVydmFsIiwiaW5uZXJIVE1MIiwiY3NzIiwiaHRtbCIsImxpc3RDb250YWluZXIiLCJuZXdMaXN0Rm9ybSIsIm5ld0xpc3RJbnB1dCIsImRlbGV0ZUxpc3RCdXR0b24iLCJsaXN0RGlzcGxheUNvbnRhaW5lciIsImxpc3RUaXRsZUVsZW1lbnQiLCJsaXN0Q291bnRFbGVtZW50IiwidGFza3NDb250YWluZXIiLCJ0YXNrVGVtcGxhdGUiLCJuZXdUYXNrRm9ybSIsIm5ld1Rhc2tJbnB1dCIsIm5ld1Rhc2tEYXRlSW5wdXQiLCJjbGVhckNvbXBsZXRlVGFza3NCdXR0b24iLCJMT0NBTF9TVE9SQUdFX0xJU1RfS0VZIiwiTE9DQUxfU1RPUkFHRV9TRUxFQ1RFRF9MSVNUX0lEX0tFWSIsImxpc3RzIiwiSlNPTiIsInBhcnNlIiwibG9jYWxTdG9yYWdlIiwiZ2V0SXRlbSIsInNlbGVjdGVkTGlzdElkIiwiYWRkRXZlbnRMaXN0ZW5lciIsImUiLCJ0YXJnZXQiLCJ0YWdOYW1lIiwidG9Mb3dlckNhc2UiLCJkYXRhc2V0IiwibGlzdElkIiwic2F2ZUFuZFJlbmRlciIsInNlbGVjdGVkTGlzdCIsImZpbmQiLCJsaXN0Iiwic2VsZWN0ZWRUYXNrIiwiY2hlY2tlZCIsInNhdmUiLCJyZW5kZXJUYXNrQ291bnQiLCJmaWx0ZXIiLCJsZW5ndGgiLCJwcmV2ZW50RGVmYXVsdCIsImxpc3ROYW1lIiwidmFsdWUiLCJwdXNoIiwidGFza05hbWUiLCJ0YXNrRGF0ZSIsInJlbmRlciIsInNldEl0ZW0iLCJzdHJpbmdpZnkiLCJjbGVhckVsZW1lbnQiLCJyZW5kZXJMaXN0Iiwic3R5bGUiLCJkaXNwbGF5IiwiaW5uZXJUZXh0IiwicmVuZGVyVGFza3MiLCJmb3JFYWNoIiwidGFza0VsZW1lbnQiLCJpbXBvcnROb2RlIiwiY29udGVudCIsImNoZWNrYm94IiwibGFiZWwiLCJodG1sRm9yIiwiYXBwZW5kIiwiZHVlRGF5cyIsImFwcGVuZENoaWxkIiwiaW5jb21wbGV0ZVRhc2tDb3VudCIsInRhc2tzQ291bnQiLCJsaXN0RWxlbWVudCIsImNyZWF0ZUVsZW1lbnQiLCJjbGFzc0xpc3QiLCJhZGQiLCJlbGVtZW50IiwiZmlyc3RDaGlsZCIsInJlbW92ZUNoaWxkIl0sInNvdXJjZVJvb3QiOiIifQ==