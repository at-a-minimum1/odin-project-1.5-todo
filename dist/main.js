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

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _modules_dom_domControl__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/dom/domControl */ \"./src/modules/dom/domControl.js\");\n/* harmony import */ var _modules_items_task__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/items/task */ \"./src/modules/items/task.js\");\n/* harmony import */ var _utils_dataStorage__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./utils/dataStorage */ \"./src/utils/dataStorage.js\");\n\n\n\n\nconst mainPanel = document.getElementById(\"main-panel-wrapper\");\n\nwindow.onload = (0,_utils_dataStorage__WEBPACK_IMPORTED_MODULE_2__.loadData)(\"test\");\n\nconst addTaskButton = document.getElementById(\"add-task\");\naddTaskButton.addEventListener(\"click\", (event) => {\n\tevent.preventDefault();\n\n\tlet formData = (0,_modules_dom_domControl__WEBPACK_IMPORTED_MODULE_0__.getFormData)();\n\tlet newTask = new _modules_items_task__WEBPACK_IMPORTED_MODULE_1__.Task(formData.title, formData.date, formData.priority);\n\t(0,_utils_dataStorage__WEBPACK_IMPORTED_MODULE_2__.saveData)(\"test\", newTask);\n\t(0,_modules_dom_domControl__WEBPACK_IMPORTED_MODULE_0__.addToMainPanel)(newTask);\n\t// mainPanel.append(newTask);\n});\n\n// function component() {\n// \tconst helloWorld = document.createElement(\"div\");\n// \thelloWorld.innerText = \"Hello World Again\";\n// \treturn helloWorld;\n// }\n\n// document.body.appendChild(component());\n\n\n//# sourceURL=webpack://odin-project-1.5-todo/./src/index.js?");

/***/ }),

/***/ "./src/modules/dom/domControl.js":
/*!***************************************!*\
  !*** ./src/modules/dom/domControl.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   addToMainPanel: () => (/* binding */ addToMainPanel),\n/* harmony export */   getFormData: () => (/* binding */ getFormData),\n/* harmony export */   updateData: () => (/* binding */ updateData)\n/* harmony export */ });\nfunction getFormData() {\n\tconst taskTitle = document.getElementById(\"task-title\").value || \"Test Title\";\n\tconst taskDate =\n\t\tdocument.getElementById(\"task-due-date\").value || \"04/20/6969\";\n\tconst taskPriority =\n\t\tdocument.getElementById(\"task-priority\").value || \"Test Priority\";\n\tconst formData = {\n\t\ttitle: taskTitle,\n\t\tdate: taskDate,\n\t\tpriority: taskPriority,\n\t};\n\treturn formData;\n}\n\nfunction addToMainPanel(task) {\n\tconst mainPanel = document.getElementById(\"main-panel-wrapper\");\n\t// Append the items in a card element\n\tconst cardWrap = document.createElement(\"div\");\n\tcardWrap.classList.add(\"card-wrapper\");\n\tcardWrap.append(task.title);\n\tcardWrap.append(task.date);\n\tcardWrap.append(task.priority);\n\t// Append the card element to the main panel\n\tmainPanel.append(cardWrap);\n}\n\nfunction updateData(array) {\n\tarray.forEach((element) => {\n\t\taddToMainPanel(element);\n\t});\n}\n\n\n//# sourceURL=webpack://odin-project-1.5-todo/./src/modules/dom/domControl.js?");

/***/ }),

/***/ "./src/modules/items/task.js":
/*!***********************************!*\
  !*** ./src/modules/items/task.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   Task: () => (/* binding */ Task)\n/* harmony export */ });\nclass Task {\n\tconstructor(title, date, priority) {\n\t\tthis.title = title;\n\t\tthis.date = date;\n\t\tthis.priority = priority;\n\t}\n}\n\n\n//# sourceURL=webpack://odin-project-1.5-todo/./src/modules/items/task.js?");

/***/ }),

/***/ "./src/utils/dataStorage.js":
/*!**********************************!*\
  !*** ./src/utils/dataStorage.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   loadData: () => (/* binding */ loadData),\n/* harmony export */   saveData: () => (/* binding */ saveData)\n/* harmony export */ });\n/* harmony import */ var _modules_dom_domControl__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../modules/dom/domControl */ \"./src/modules/dom/domControl.js\");\n\n\nfunction saveData(key, value) {\n\tlet dataArray = JSON.parse(localStorage.getItem(key)) || [];\n\n\tdataArray.push(value);\n\tlocalStorage.setItem(key, JSON.stringify(dataArray));\n}\n\nfunction loadData(key) {\n\tconst dataArray = JSON.parse(localStorage.getItem(key)) || [];\n\t(0,_modules_dom_domControl__WEBPACK_IMPORTED_MODULE_0__.updateData)(dataArray);\n}\n\n\n//# sourceURL=webpack://odin-project-1.5-todo/./src/utils/dataStorage.js?");

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
/******/ 			// no module.id needed
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
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;