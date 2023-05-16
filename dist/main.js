/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/styles/style.css":
/*!********************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/styles/style.css ***!
  \********************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n// Imports\n\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\n___CSS_LOADER_EXPORT___.push([module.id, \"@import url(https://fonts.googleapis.com/css2?family=Alata&family=Love+Ya+Like+A+Sister&display=swap);\"]);\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, \"*,\\n*::after,\\n*::before {\\n    box-sizing: border-box;\\n    padding: 0;\\n    margin: 0;\\n}\\n\\n:root {\\n    --primary-dark: #64868E;\\n    --secondary-dark: #98B4A6;\\n    --primary-light: #F3FBF1;\\n    --secondary-light: #D1E4D1;\\n}\\n\\nhtml {\\n    /* position: relative; */\\n    min-height: 100%;\\n    min-width: 400px;\\n}\\n\\nbody {\\n    display: flex;\\n    flex-direction: column;\\n    justify-content: space-between;\\n    min-height: 100vh;\\n    gap: 0px 0px;\\n}\\n\\n\\n/* HEADER */\\n\\nheader {\\n    display: flex;\\n    justify-content: flex-start;\\n    align-items: center;\\n    background-color: var(--primary-dark);\\n    height: 15vh;\\n    border-bottom: 4px solid var(--secondary-dark);\\n    user-select: none;\\n    padding: 8px;\\n}\\n\\n.logo {\\n    font-family: 'Love Ya Like A Sister', cursive;\\n    color: var(--primary-light);\\n    font-size: 3.5em;\\n}\\n\\n\\n/* MAIN */\\n\\nmain {\\n    display: flex;\\n    min-height: 100%;\\n    flex: 1 1 auto;\\n}\\n\\n\\n/* NAVIGATION */\\n\\nh2 {\\n    font-family: 'Alata', sans-serif;\\n    color: var(--primary-dark);\\n    font-size: 1.5em;\\n    border-bottom: 3px double var(--primary-dark);\\n    user-select: none;\\n    padding-bottom: 5px;\\n}\\n\\n.nav {\\n    background-color: var(--secondary-light);\\n    width: 300px;\\n    padding: 1em;\\n}\\n\\n.home {\\n    margin-bottom: 15px;\\n}\\n\\n.inbox {\\n    padding: 1em 0;\\n}\\n\\n\\ndiv>p,\\n.add-project,\\n.add-task {\\n    font-family: 'Alata', sans-serif;\\n    font-size: 1em;\\n    padding: 6px;\\n    color: #333333;\\n    display: flex;\\n    align-items: center;\\n    cursor: grab;\\n    user-select: none;\\n    /* margin-bottom: 10px; */\\n}\\n\\n/* div>p:hover,\\n.add-project:hover,\\n.project-name.active-project {\\n    background-color: var(--primary-light);\\n    border-radius: 6px;\\n} */\\n\\nimg {\\n    margin-right: 15px;\\n    height: 30px;\\n}\\n\\n.add-project,\\n.add-task {\\n    border: none;\\n    background-color: var(--secondary-light);\\n    width: 100%;\\n    margin-top: 1em;\\n}\\n\\n.add-project-popup,\\n.add-task-popup {\\n    display: none;\\n}\\n\\n.input-add-project,\\n.input-add-task {\\n    width: 100%;\\n    height: 2em;\\n    margin-top: 1em;\\n    border: 1px solid var(--primary-dark);\\n    border-radius: 5px;\\n    padding: 0.5em;\\n    font-size: 1em;\\n    outline: none;\\n}\\n\\n.add-project-popup.active,\\n.add-task-popup.active {\\n    display: block;\\n    user-select: none;\\n}\\n\\n.popup-project-buttons {\\n    display: flex;\\n    justify-content: space-between;\\n    align-items: center;\\n    width: 100%;\\n}\\n\\n.popup-button {\\n    width: 45%;\\n    height: 2.5em;\\n    margin-top: 0.75em;\\n    cursor: grab;\\n    border-radius: 5px;\\n    font-family: 'Alata', sans-serif;\\n    color: var(--primary-light);\\n    font-weight: bold;\\n    font-size: 0.8em;\\n    letter-spacing: 2px;\\n    user-select: none;\\n}\\n\\n.popup-button:hover {\\n    opacity: 0.85;\\n}\\n\\n#popup-add-button,\\n#popup-add-task-button {\\n    background-color: #92ba69;\\n    border: 1px solid #82a65e;\\n}\\n\\n#popup-cancel-button,\\n#popup-cancel-task-button {\\n    background-color: #e65f5f;\\n    border: 1px solid #cf5656;\\n}\\n\\n.project-name-div {\\n    display: flex;\\n    align-items: center;\\n    justify-content: space-between;\\n    margin-top: 10px;\\n    user-select: none;\\n    cursor: grab;\\n}\\n\\n.project-name {\\n    width: 100%;\\n}\\n\\n.project-name-div:hover .delete-button {\\n    display: block;\\n}\\n\\n.project-name-div:hover,\\n.add-project:hover,\\n.project-name.active-project {\\n    background-color: var(--primary-light);\\n    border-radius: 6px;\\n}\\n\\n.delete-button {\\n    display: none;\\n    margin-right: 10px;\\n    height: 15px;\\n}\\n\\n/* MAIN CONTENT */\\n\\nh3 {\\n    font-family: 'Alata', sans-serif;\\n    color: var(--primary-dark);\\n    font-size: 1.75em;\\n    user-select: none;\\n    padding-bottom: 5px;\\n}\\n\\n.main {\\n    background-color: var(--primary-light);\\n    width: 100%;\\n    padding: 2em;\\n}\\n\\n.add-task {\\n    border: none;\\n    background-color: var(--primary-light);\\n    width: 180px;\\n    margin-top: 1em;\\n}\\n\\n.add-task:hover {\\n    background-color: #e6ebe4;\\n    border-radius: 6px;\\n}\\n\\n#add-task-popup {\\n    width: 400px;\\n}\\n\\n/* FOOTER */\\n\\nfooter {\\n    display: flex;\\n    justify-content: center;\\n    align-items: center;\\n    background-color: var(--primary-dark);\\n    height: 5vh;\\n    color: var(--primary-light);\\n    font-family: 'Alata', sans-serif;\\n    font-size: 1.3em;\\n    gap: 0.4em;\\n    padding: 1em;\\n    user-select: none;\\n}\\n\\n.fa-github {\\n    color: var(--primary-light);\\n    transition: transform 0.3s ease-in-out;\\n}\\n\\n.fa-github:hover {\\n    transform: rotate(360deg) scale(1.2);\\n}\\n\\n\\n/* MEDIA QUERIES */\\n\\n@media (max-width: 600px) {\\n    main {\\n        flex-direction: column;\\n    }\\n\\n    .nav,\\n    .main {\\n        width: 100%;\\n        flex: 1 1 auto;\\n    }\\n\\n    #add-task-popup {\\n        width: 75%;\\n    }\\n}\", \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://08-todo-list/./src/styles/style.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\nmodule.exports = function (cssWithMappingToString) {\n  var list = [];\n\n  // return the list of modules as css string\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = \"\";\n      var needLayer = typeof item[5] !== \"undefined\";\n      if (item[4]) {\n        content += \"@supports (\".concat(item[4], \") {\");\n      }\n      if (item[2]) {\n        content += \"@media \".concat(item[2], \" {\");\n      }\n      if (needLayer) {\n        content += \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\");\n      }\n      content += cssWithMappingToString(item);\n      if (needLayer) {\n        content += \"}\";\n      }\n      if (item[2]) {\n        content += \"}\";\n      }\n      if (item[4]) {\n        content += \"}\";\n      }\n      return content;\n    }).join(\"\");\n  };\n\n  // import a list of modules into the list\n  list.i = function i(modules, media, dedupe, supports, layer) {\n    if (typeof modules === \"string\") {\n      modules = [[null, modules, undefined]];\n    }\n    var alreadyImportedModules = {};\n    if (dedupe) {\n      for (var k = 0; k < this.length; k++) {\n        var id = this[k][0];\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n    for (var _k = 0; _k < modules.length; _k++) {\n      var item = [].concat(modules[_k]);\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        continue;\n      }\n      if (typeof layer !== \"undefined\") {\n        if (typeof item[5] === \"undefined\") {\n          item[5] = layer;\n        } else {\n          item[1] = \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\").concat(item[1], \"}\");\n          item[5] = layer;\n        }\n      }\n      if (media) {\n        if (!item[2]) {\n          item[2] = media;\n        } else {\n          item[1] = \"@media \".concat(item[2], \" {\").concat(item[1], \"}\");\n          item[2] = media;\n        }\n      }\n      if (supports) {\n        if (!item[4]) {\n          item[4] = \"\".concat(supports);\n        } else {\n          item[1] = \"@supports (\".concat(item[4], \") {\").concat(item[1], \"}\");\n          item[4] = supports;\n        }\n      }\n      list.push(item);\n    }\n  };\n  return list;\n};\n\n//# sourceURL=webpack://08-todo-list/./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/noSourceMaps.js":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/noSourceMaps.js ***!
  \**************************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function (i) {\n  return i[1];\n};\n\n//# sourceURL=webpack://08-todo-list/./node_modules/css-loader/dist/runtime/noSourceMaps.js?");

/***/ }),

/***/ "./src/styles/style.css":
/*!******************************!*\
  !*** ./src/styles/style.css ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!./style.css */ \"./node_modules/css-loader/dist/cjs.js!./src/styles/style.css\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\n\n      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\n    \noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack://08-todo-list/./src/styles/style.css?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

eval("\n\nvar stylesInDOM = [];\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n  for (var i = 0; i < stylesInDOM.length; i++) {\n    if (stylesInDOM[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n  return result;\n}\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var indexByIdentifier = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3],\n      supports: item[4],\n      layer: item[5]\n    };\n    if (indexByIdentifier !== -1) {\n      stylesInDOM[indexByIdentifier].references++;\n      stylesInDOM[indexByIdentifier].updater(obj);\n    } else {\n      var updater = addElementStyle(obj, options);\n      options.byIndex = i;\n      stylesInDOM.splice(i, 0, {\n        identifier: identifier,\n        updater: updater,\n        references: 1\n      });\n    }\n    identifiers.push(identifier);\n  }\n  return identifiers;\n}\nfunction addElementStyle(obj, options) {\n  var api = options.domAPI(options);\n  api.update(obj);\n  var updater = function updater(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {\n        return;\n      }\n      api.update(obj = newObj);\n    } else {\n      api.remove();\n    }\n  };\n  return updater;\n}\nmodule.exports = function (list, options) {\n  options = options || {};\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDOM[index].references--;\n    }\n    var newLastIdentifiers = modulesToDom(newList, options);\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n      var _index = getIndexByIdentifier(_identifier);\n      if (stylesInDOM[_index].references === 0) {\n        stylesInDOM[_index].updater();\n        stylesInDOM.splice(_index, 1);\n      }\n    }\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://08-todo-list/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

eval("\n\nvar memo = {};\n\n/* istanbul ignore next  */\nfunction getTarget(target) {\n  if (typeof memo[target] === \"undefined\") {\n    var styleTarget = document.querySelector(target);\n\n    // Special case to return head of iframe instead of iframe itself\n    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n      try {\n        // This will throw an exception if access to iframe is blocked\n        // due to cross-origin restrictions\n        styleTarget = styleTarget.contentDocument.head;\n      } catch (e) {\n        // istanbul ignore next\n        styleTarget = null;\n      }\n    }\n    memo[target] = styleTarget;\n  }\n  return memo[target];\n}\n\n/* istanbul ignore next  */\nfunction insertBySelector(insert, style) {\n  var target = getTarget(insert);\n  if (!target) {\n    throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n  }\n  target.appendChild(style);\n}\nmodule.exports = insertBySelector;\n\n//# sourceURL=webpack://08-todo-list/./node_modules/style-loader/dist/runtime/insertBySelector.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction insertStyleElement(options) {\n  var element = document.createElement(\"style\");\n  options.setAttributes(element, options.attributes);\n  options.insert(element, options.options);\n  return element;\n}\nmodule.exports = insertStyleElement;\n\n//# sourceURL=webpack://08-todo-list/./node_modules/style-loader/dist/runtime/insertStyleElement.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\n\n/* istanbul ignore next  */\nfunction setAttributesWithoutAttributes(styleElement) {\n  var nonce =  true ? __webpack_require__.nc : 0;\n  if (nonce) {\n    styleElement.setAttribute(\"nonce\", nonce);\n  }\n}\nmodule.exports = setAttributesWithoutAttributes;\n\n//# sourceURL=webpack://08-todo-list/./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction apply(styleElement, options, obj) {\n  var css = \"\";\n  if (obj.supports) {\n    css += \"@supports (\".concat(obj.supports, \") {\");\n  }\n  if (obj.media) {\n    css += \"@media \".concat(obj.media, \" {\");\n  }\n  var needLayer = typeof obj.layer !== \"undefined\";\n  if (needLayer) {\n    css += \"@layer\".concat(obj.layer.length > 0 ? \" \".concat(obj.layer) : \"\", \" {\");\n  }\n  css += obj.css;\n  if (needLayer) {\n    css += \"}\";\n  }\n  if (obj.media) {\n    css += \"}\";\n  }\n  if (obj.supports) {\n    css += \"}\";\n  }\n  var sourceMap = obj.sourceMap;\n  if (sourceMap && typeof btoa !== \"undefined\") {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  }\n\n  // For old IE\n  /* istanbul ignore if  */\n  options.styleTagTransform(css, styleElement, options.options);\n}\nfunction removeStyleElement(styleElement) {\n  // istanbul ignore if\n  if (styleElement.parentNode === null) {\n    return false;\n  }\n  styleElement.parentNode.removeChild(styleElement);\n}\n\n/* istanbul ignore next  */\nfunction domAPI(options) {\n  if (typeof document === \"undefined\") {\n    return {\n      update: function update() {},\n      remove: function remove() {}\n    };\n  }\n  var styleElement = options.insertStyleElement(options);\n  return {\n    update: function update(obj) {\n      apply(styleElement, options, obj);\n    },\n    remove: function remove() {\n      removeStyleElement(styleElement);\n    }\n  };\n}\nmodule.exports = domAPI;\n\n//# sourceURL=webpack://08-todo-list/./node_modules/style-loader/dist/runtime/styleDomAPI.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction styleTagTransform(css, styleElement) {\n  if (styleElement.styleSheet) {\n    styleElement.styleSheet.cssText = css;\n  } else {\n    while (styleElement.firstChild) {\n      styleElement.removeChild(styleElement.firstChild);\n    }\n    styleElement.appendChild(document.createTextNode(css));\n  }\n}\nmodule.exports = styleTagTransform;\n\n//# sourceURL=webpack://08-todo-list/./node_modules/style-loader/dist/runtime/styleTagTransform.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _styles_style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./styles/style.css */ \"./src/styles/style.css\");\n/* harmony import */ var _modules_DisplayController__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/DisplayController */ \"./src/modules/DisplayController.js\");\n\n\n\ndocument.addEventListener('DOMContentLoaded', _modules_DisplayController__WEBPACK_IMPORTED_MODULE_1__[\"default\"].loadHomepage);\n\n\n//# sourceURL=webpack://08-todo-list/./src/index.js?");

/***/ }),

/***/ "./src/modules/DisplayController.js":
/*!******************************************!*\
  !*** ./src/modules/DisplayController.js ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ UI)\n/* harmony export */ });\n/* harmony import */ var _Task__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Task */ \"./src/modules/Task.js\");\n/* harmony import */ var _Project__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Project */ \"./src/modules/Project.js\");\n/* harmony import */ var _ToDoList__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ToDoList */ \"./src/modules/ToDoList.js\");\n/* harmony import */ var _Storage__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Storage */ \"./src/modules/Storage.js\");\n/* eslint-disable no-alert */\n\n\n\n\n\nclass UI {\n  static loadHomepage() {\n    UI.initButtons();\n    UI.displayProjects();\n    UI.displayTasks();\n  }\n\n  static initButtons() {\n    UI.handleAddProjectPopup();\n  }\n\n  static handleAddProjectPopup() {\n    const addProjectButton = document.getElementById('add-project-button');\n    const addButton = document.getElementById('popup-add-button');\n    const cancelProjectButton = document.getElementById('popup-cancel-button');\n    const addProjectPopup = document.getElementById('add-project-popup');\n    const projectName = document.getElementById('project-name');\n\n    addProjectButton.addEventListener('click', () => {\n      projectName.value = '';\n      addProjectPopup.classList.add('active');\n    });\n\n    addButton.addEventListener('click', () => {\n      const project = new _Project__WEBPACK_IMPORTED_MODULE_1__[\"default\"](projectName.value);\n\n      if (project.name === '') {\n        alert('Project name can\\'t be empty');\n        return;\n      }\n\n      if (_Storage__WEBPACK_IMPORTED_MODULE_3__[\"default\"].getToDoList().contains(project.name)) {\n        projectName.value = '';\n        alert('Project names must be different');\n        return;\n      }\n\n      _Storage__WEBPACK_IMPORTED_MODULE_3__[\"default\"].addProject(project);\n      UI.displayProjects();\n      addProjectPopup.classList.remove('active');\n    });\n\n    cancelProjectButton.addEventListener('click', () => {\n      addProjectPopup.classList.remove('active');\n      projectName.value = '';\n    });\n  }\n\n  static handleAddTaskPopup() {\n    const addTaskButton = document.getElementById('add-task-button');\n    const addButton = document.getElementById('popup-add-task-button');\n    const cancelTaskButton = document.getElementById('popup-cancel-task-button');\n    const addTaskPopup = document.getElementById('add-task-popup');\n    const taskName = document.getElementById('task-name');\n\n    addTaskButton.addEventListener('click', () => {\n      taskName.value = '';\n      addTaskPopup.classList.add('active');\n    });\n\n    addButton.addEventListener('click', () => {\n      const project = document.querySelector('#project-preview h3').textContent;\n      const task = new _Task__WEBPACK_IMPORTED_MODULE_0__[\"default\"](taskName.value);\n\n      if (task.name === '') {\n        alert('Task name can\\'t be empty');\n        return;\n      }\n\n      if (_Storage__WEBPACK_IMPORTED_MODULE_3__[\"default\"].getToDoList().getProject(project).contains(task.name)) {\n        taskName.value = '';\n        alert('Task names must be different');\n        return;\n      }\n\n      console.log(_Storage__WEBPACK_IMPORTED_MODULE_3__[\"default\"].getToDoList());\n      _Storage__WEBPACK_IMPORTED_MODULE_3__[\"default\"].addTask(project, task);\n      console.log(_Storage__WEBPACK_IMPORTED_MODULE_3__[\"default\"].getToDoList());\n      UI.displayTasks(project);\n      addTaskPopup.classList.remove('active');\n    });\n\n    cancelTaskButton.addEventListener('click', () => {\n      addTaskPopup.classList.remove('active');\n      taskName.value = '';\n    });\n  }\n\n  static displayProjects() {\n    const projectsList = document.getElementById('projects-list');\n    projectsList.textContent = '';\n    const toDoList = _Storage__WEBPACK_IMPORTED_MODULE_3__[\"default\"].getToDoList().getProjects();\n    for (let i = 4; i < toDoList.length; i++) {\n      const displayedProject = document.createElement('div');\n      displayedProject.classList.add('project-name-div');\n      displayedProject.innerHTML = `<p class=\"project-name\">\n      <img src=\"../src/assets/project.png\" alt=\"project icon\">\n      ${toDoList[i].name}</p>\n      <img src=\"../src/assets/delete.png\" class=\"delete-button\" alt=\"delete icon\">`;\n      projectsList.append(displayedProject);\n    }\n\n    UI.handleProjectClick();\n    UI.displayProjectPreview();\n  }\n\n  static handleProjectClick() {\n    const deleteProjectButtons = document.querySelectorAll('.delete-button');\n\n    deleteProjectButtons.forEach((button) => {\n      button.addEventListener('click', () => {\n        const projectName = button.previousElementSibling.textContent.trim();\n        if (button.previousElementSibling.classList.contains('active-project')) {\n          UI.clearProjectPreview();\n        }\n        _Storage__WEBPACK_IMPORTED_MODULE_3__[\"default\"].deleteProject(projectName);\n        UI.displayProjects();\n      });\n    });\n  }\n\n  static displayProjectPreview() {\n    const projectButtons = document.querySelectorAll('.project-name');\n    const projectPreview = document.getElementById('project-preview');\n\n    projectButtons.forEach((projectButton) => {\n      projectButton.addEventListener('click', () => {\n        projectButtons.forEach((projectButton) => projectButton.classList.remove('active-project'));\n        const projectName = projectButton.textContent.trim();\n\n        if (projectName === 'All Tasks' || projectName === 'Today'\n        || projectName === 'This Week' || projectName === 'Important') {\n          projectPreview.innerHTML = `<h3>${projectName}</h3>`;\n        } else {\n          projectPreview.innerHTML = `\n          <h3>${projectName}</h3>\n          <div class=\"tasks-list\" id=\"tasks-list\"></div>\n          <div class=\"add-task-popup\" id=\"add-task-popup\">\n                    <input id=\"task-name\" type=\"text\" class=\"input-add-task\" placeholder=\"Cool task name\"\n                    maxlength=\"25\">\n                    <div class=\"popup-project-buttons\">\n                        <button class=\"popup-button\" id=\"popup-add-task-button\">Add</button>\n                        <button class=\"popup-button\" id=\"popup-cancel-task-button\">Cancel</button>\n                    </div>\n                </div>\n          <button class=\"add-task\" id=\"add-task-button\">\n              <img src=\"../src/assets/add-task.png\" alt=\"plus icon\">\n                  Add Task\n          </button>`;\n        }\n\n        projectButton.classList.add('active-project');\n        UI.handleAddTaskPopup();\n        UI.displayTasks(projectName);\n      });\n    });\n  }\n\n  static displayTasks(projectName) {\n    const tasksPreview = document.getElementById('tasks-list');\n    tasksPreview.textContent = '';\n    const currentProject = _Storage__WEBPACK_IMPORTED_MODULE_3__[\"default\"].getToDoList().getProject(projectName);\n\n    console.log(projectName);\n    console.log(currentProject.getTasks()[0].name);\n\n    for (let i = 0; i < currentProject.getTasks().length; i++) {\n      const task = document.createElement('p');\n      task.innerHTML = `${currentProject.getTasks()[i].name}`;\n      tasksPreview.append(task);\n    }\n  }\n\n  static clearProjectPreview() {\n    const projectPreview = document.getElementById('project-preview');\n    projectPreview.textContent = '';\n  }\n}\n\n\n//# sourceURL=webpack://08-todo-list/./src/modules/DisplayController.js?");

/***/ }),

/***/ "./src/modules/Project.js":
/*!********************************!*\
  !*** ./src/modules/Project.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Project)\n/* harmony export */ });\nclass Project {\n  constructor(name) {\n    this.name = name;\n    this.tasks = [];\n  }\n\n  setName(name) {\n    this.name = name;\n  }\n\n  getName() {\n    return this.name;\n  }\n\n  setTasks(tasks) {\n    this.tasks = tasks;\n  }\n\n  getTasks() {\n    return this.tasks;\n  }\n\n  addTask(newTask) {\n    if (this.tasks.find((task) => task.getName() === newTask.name)) return;\n    this.tasks.push(newTask);\n  }\n\n  getTask(taskName) {\n    return this.tasks.find((task) => task.getName() === taskName);\n  }\n\n  contains(taskName) {\n    return this.tasks.some((task) => task.getName() === taskName);\n  }\n\n  deleteTask(taskName) {\n    this.tasks = this.tasks.filter((task) => task.getName() !== taskName);\n  }\n}\n\n\n//# sourceURL=webpack://08-todo-list/./src/modules/Project.js?");

/***/ }),

/***/ "./src/modules/Storage.js":
/*!********************************!*\
  !*** ./src/modules/Storage.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Storage)\n/* harmony export */ });\n/* harmony import */ var _Task__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Task */ \"./src/modules/Task.js\");\n/* harmony import */ var _Project__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Project */ \"./src/modules/Project.js\");\n/* harmony import */ var _ToDoList__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ToDoList */ \"./src/modules/ToDoList.js\");\n\n\n\n\nclass Storage {\n  static saveToDoList(data) {\n    localStorage.setItem('toDoList', JSON.stringify(data));\n  }\n\n  // Retrieving a serialized ToDoList object from the browser's localStorage and converting\n  // it back into a fully functional ToDoList object with all its associated projects and tasks\n\n  static getToDoList() {\n    const toDoList = Object.assign(\n      new _ToDoList__WEBPACK_IMPORTED_MODULE_2__[\"default\"](),\n      JSON.parse(localStorage.getItem('toDoList')),\n    );\n\n    toDoList.setProjects(\n      toDoList\n        .getProjects()\n        .map((project) => Object.assign(new _Project__WEBPACK_IMPORTED_MODULE_1__[\"default\"](), project)),\n    );\n\n    toDoList\n      .getProjects()\n      .forEach((project) => project.setTasks(\n        project.getTasks().map((task) => Object.assign(new _Task__WEBPACK_IMPORTED_MODULE_0__[\"default\"](), task)),\n      ));\n\n    return toDoList;\n  }\n\n  static addProject(project) {\n    const toDoList = Storage.getToDoList();\n    toDoList.addProject(project);\n    Storage.saveToDoList(toDoList);\n  }\n\n  static deleteProject(project) {\n    const toDoList = Storage.getToDoList();\n    toDoList.deleteProject(project);\n    Storage.saveToDoList(toDoList);\n  }\n\n  static addTask(project, task) {\n    const toDoList = Storage.getToDoList();\n    toDoList.getProject(project).addTask(task);\n    Storage.saveToDoList(toDoList);\n  }\n}\n\n\n//# sourceURL=webpack://08-todo-list/./src/modules/Storage.js?");

/***/ }),

/***/ "./src/modules/Task.js":
/*!*****************************!*\
  !*** ./src/modules/Task.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Task)\n/* harmony export */ });\nclass Task {\n  constructor(name, importance, dueDate = 'No Date') {\n    this.name = name;\n    this.dueDate = dueDate;\n    this.importance = importance;\n  }\n\n  setName(name) {\n    this.name = name;\n  }\n\n  getName() {\n    return this.name;\n  }\n\n  setImportance(importance) {\n    this.importance = importance;\n  }\n\n  getImportance() {\n    return this.importance;\n  }\n\n  setDate(dueDate) {\n    this.dueDate = dueDate;\n  }\n\n  getDate() {\n    return this.dueDate;\n  }\n}\n\n\n//# sourceURL=webpack://08-todo-list/./src/modules/Task.js?");

/***/ }),

/***/ "./src/modules/ToDoList.js":
/*!*********************************!*\
  !*** ./src/modules/ToDoList.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ ToDoList)\n/* harmony export */ });\n/* harmony import */ var _Project__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Project */ \"./src/modules/Project.js\");\n// import Task from './Task';\n\n\nclass ToDoList {\n  constructor() {\n    this.projects = [];\n    this.projects.push(new _Project__WEBPACK_IMPORTED_MODULE_0__[\"default\"]('All'));\n    this.projects.push(new _Project__WEBPACK_IMPORTED_MODULE_0__[\"default\"]('Today'));\n    this.projects.push(new _Project__WEBPACK_IMPORTED_MODULE_0__[\"default\"]('This week'));\n    this.projects.push(new _Project__WEBPACK_IMPORTED_MODULE_0__[\"default\"]('Important'));\n  }\n\n  setProjects(projects) {\n    this.projects = projects;\n  }\n\n  getProjects() {\n    return this.projects;\n  }\n\n  addProject(newProject) {\n    if (this.projects.find((project) => project.getName() === newProject.name)) return;\n    this.projects.push(newProject);\n  }\n\n  getProject(projectName) {\n    return this.projects.find((project) => project.getName() === projectName);\n  }\n\n  contains(projectName) {\n    return this.projects.some((project) => project.getName() === projectName);\n  }\n\n  deleteProject(projectName) {\n    const projectToDelete = this.projects.find((project) => project.name === projectName);\n    this.projects.splice(this.projects.indexOf(projectToDelete), 1);\n  }\n}\n\n\n//# sourceURL=webpack://08-todo-list/./src/modules/ToDoList.js?");

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
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;