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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _modules_dom_domControl__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/dom/domControl */ \"./src/modules/dom/domControl.js\");\n/* harmony import */ var _utils_data__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./utils/data */ \"./src/utils/data.js\");\n\n\n\n\n// const mainPanel = document.getElementById(\"main-panel-wrapper\");\n\n// TODO loadData now returns a value instead of adding the values directly to the DOM. So the following commented out line has to be refactored into two steps.\nwindow.onload = _utils_data__WEBPACK_IMPORTED_MODULE_1__.instantiateLocalStorage();\n\nconst addTaskButton = document.getElementById(\"add-task\");\naddTaskButton.addEventListener(\"click\", (event) => {\n\tevent.preventDefault();\n\tconst formData = (0,_modules_dom_domControl__WEBPACK_IMPORTED_MODULE_0__.getFormData)();\n\t_utils_data__WEBPACK_IMPORTED_MODULE_1__.addTask(formData);\n\t(0,_modules_dom_domControl__WEBPACK_IMPORTED_MODULE_0__.addToMainPanel)();\n});\n\nconst addProjectButton = document.getElementById(\"add-project\");\naddProjectButton.addEventListener(\"click\", (event) => {\n\tevent.preventDefault();\n\t_utils_data__WEBPACK_IMPORTED_MODULE_1__.addProject();\n});\n\ndocument.addEventListener(\"keydown\", function (event) {\n\tif (event.key == \"Enter\") {\n\t\tevent.preventDefault();\n\t\t_utils_data__WEBPACK_IMPORTED_MODULE_1__.addTask();\n\t}\n});\n\nconst dropDownProject = document.getElementById(\"project-list\");\ndropDownProject.addEventListener(\"change\", (event) => {\n\t_utils_data__WEBPACK_IMPORTED_MODULE_1__.getCurrentProject();\n});\n\nfunction handleFormSubmit() {\n\tconst formData = (0,_modules_dom_domControl__WEBPACK_IMPORTED_MODULE_0__.getFormData)();\n}\n\n\n//# sourceURL=webpack://odin-project-1.5-todo/./src/index.js?");

/***/ }),

/***/ "./src/modules/dom/domControl.js":
/*!***************************************!*\
  !*** ./src/modules/dom/domControl.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   addToMainPanel: () => (/* binding */ addToMainPanel),\n/* harmony export */   addToProjectList: () => (/* binding */ addToProjectList),\n/* harmony export */   getFormData: () => (/* binding */ getFormData),\n/* harmony export */   updateData: () => (/* binding */ updateData)\n/* harmony export */ });\nfunction getFormData() {\n\tconst taskTitle = document.getElementById(\"task-title\").value || \"Test Title\";\n\tconst taskDate =\n\t\tdocument.getElementById(\"task-due-date\").value || \"04/20/6969\";\n\tconst taskPriority =\n\t\tdocument.getElementById(\"task-priority\").value || \"Test Priority\";\n\tconst formData = {\n\t\ttitle: taskTitle,\n\t\tdate: taskDate,\n\t\tpriority: taskPriority,\n\t};\n\treturn formData;\n}\n\nfunction addToMainPanel(task) {\n\tconst mainPanel = document.getElementById(\"main-panel-wrapper\");\n\t// Append the items in a card element\n\tconst cardWrap = document.createElement(\"div\");\n\tcardWrap.classList.add(\"card-wrapper\");\n\tcardWrap.append(task.title);\n\tcardWrap.append(task.date);\n\tcardWrap.append(task.priority);\n\t// Append the card element to the main panel\n\tmainPanel.append(cardWrap);\n}\n\nfunction updateData(array) {\n\tarray.forEach((taskList) => {\n\t\ttaskList.forEach((element) => {\n\t\t\taddToMainPanel(element);\n\t\t});\n\t});\n\n\t// array.forEach((element) => {\n\t// \taddToMainPanel(element);\n\t// });\n}\n\nfunction addToProjectList(taskList) {\n\tconst projectDropDown = document.getElementById(\"project-list\");\n\tconst projectTitle = taskList.title;\n\tconst projectValue = \"project-\" + projectDropDown.options.length;\n\t// console.log(projectValue + \": \" + projectTitle);\n\tconst newOption = document.createElement(\"option\");\n\tnewOption.value = projectValue;\n\tnewOption.textContent = projectTitle;\n\tprojectDropDown.appendChild(newOption);\n}\n\n// CHATGPT solution\n// export function addToProjectList(taskList) {\n//   const projectDropDown = document.getElementById(\"project-list\");\n//   const projectTitle = taskList.title;\n\n//   // Determine the next available project number\n//   const nextProjectNumber = projectDropDown.options.length;\n\n//   // Create a new option element\n//   const newOption = document.createElement(\"option\");\n\n//   // Set the value attribute\n//   newOption.value = \"project-\" + nextProjectNumber;\n\n//   // Set the display text\n//   newOption.textContent = projectTitle;\n\n//   // Append the new option to the select dropdown\n//   projectDropDown.appendChild(newOption);\n// }\n\n\n//# sourceURL=webpack://odin-project-1.5-todo/./src/modules/dom/domControl.js?");

/***/ }),

/***/ "./src/modules/items/taskList.js":
/*!***************************************!*\
  !*** ./src/modules/items/taskList.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   TaskList: () => (/* binding */ TaskList)\n/* harmony export */ });\nclass TaskList {\n\tconstructor(title, array) {\n\t\tthis.title = title;\n\t\tthis.array = array || [];\n\t}\n}\n\n\n//# sourceURL=webpack://odin-project-1.5-todo/./src/modules/items/taskList.js?");

/***/ }),

/***/ "./src/utils/data.js":
/*!***************************!*\
  !*** ./src/utils/data.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   addProject: () => (/* binding */ addProject),\n/* harmony export */   addTask: () => (/* binding */ addTask),\n/* harmony export */   addToProjectData: () => (/* binding */ addToProjectData),\n/* harmony export */   getAllProjects: () => (/* binding */ getAllProjects),\n/* harmony export */   getCurrentProject: () => (/* binding */ getCurrentProject),\n/* harmony export */   getProjectFromData: () => (/* binding */ getProjectFromData),\n/* harmony export */   instantiateLocalStorage: () => (/* binding */ instantiateLocalStorage)\n/* harmony export */ });\nObject(function webpackMissingModule() { var e = new Error(\"Cannot find module './modules/items/task'\"); e.code = 'MODULE_NOT_FOUND'; throw e; }());\n/* harmony import */ var _dataStorage__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./dataStorage */ \"./src/utils/dataStorage.js\");\n/* harmony import */ var _modules_items_taskList__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../modules/items/taskList */ \"./src/modules/items/taskList.js\");\n\n// import { saveData, loadData } from \"../items\";\n\n\n// import { getFormData } from \"../dom/domControl\";\n// import { getFormData } from \"../modules/dom/domControl\";\n\nconst allTasks = new _modules_items_taskList__WEBPACK_IMPORTED_MODULE_2__.TaskList(\"project-0\", []);\nconst project1 = new _modules_items_taskList__WEBPACK_IMPORTED_MODULE_2__.TaskList(\"project-1\", []);\nlet projectData = [allTasks, project1];\n\nfunction getAllProjects() {\n\treturn projectData;\n}\n\nfunction instantiateLocalStorage() {\n\t// Check if local storage is empty\n\tif (localStorage.length === 0) {\n\t\t// Local storage is empty, handle the situation as needed\n\t\tprojectData = [allTasks, project1];\n\t\t(0,_dataStorage__WEBPACK_IMPORTED_MODULE_1__.saveData)(\"project-data\", projectData);\n\t\tconsole.log(\"Local storage is empty.\");\n\t} else {\n\t\t// Local storage has data, you can proceed with loading and working with the data\n\t\tdata.projectData = (0,_dataStorage__WEBPACK_IMPORTED_MODULE_1__.loadData)(\"project-data\");\n\t\tconsole.log(\"Local storage contains data.\");\n\t}\n}\n\nfunction addTask(formData) {\n\tlet newTask = new Object(function webpackMissingModule() { var e = new Error(\"Cannot find module './modules/items/task'\"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(formData.title, formData.date, formData.priority);\n\tlet currentProject = getCurrentProject();\n\t// TODO change this to save the updated projectData object\n\t// TODO push the new task to a project list\n\tconsole.log(currentProject + \" contains \" + newTask);\n\n\taddToProjectData(newTask, currentProject);\n\t(0,_dataStorage__WEBPACK_IMPORTED_MODULE_1__.saveData)(\"project-data\", projectData);\n\tcurrentProject.array.push(newTask);\n\n\taddToMainPanel(newTask);\n}\n\nfunction addToProjectData(task, taskList) {\n\tconst dataTaskList = getProjectFromData(taskList);\n\tconsole.log(dataTaskList);\n\tdataTaskList.array.push(task);\n\t// const currentProject = getCurrentProject();\n\t// const currentProjectArray = projectData.find(\n\t// () => (taskList.title = currentProject)\n\t// );\n}\n\nfunction addProject() {\n\tconst projectTitle = document.getElementById(\"project-title\").value;\n\t// Add project logic here\n\tconst newTaskList = new _modules_items_taskList__WEBPACK_IMPORTED_MODULE_2__.TaskList(projectTitle, []);\n\n\t// Add to project list wrapper\n\taddToProjectList(newTaskList);\n}\n\nfunction getProjectFromData(project) {\n\tlet dataProject;\n\tif (project instanceof _modules_items_taskList__WEBPACK_IMPORTED_MODULE_2__.TaskList) {\n\t\tconsole.log(\"instance of tasklist\");\n\t\tdataProject = projectData.find(\n\t\t\t(taskList) => taskList.title === project.title\n\t\t);\n\t} else {\n\t\tconsole.log(\"not instance of tasklist\");\n\t\tdataProject = projectData.find((taskList) => taskList.title === project);\n\t\tconsole.log(project + \" =? \" + dataProject);\n\t}\n\treturn dataProject;\n}\n\nfunction getCurrentProject() {\n\tconst projectList = document.getElementById(\"project-list\");\n\n\tconst currentProject = projectList.value;\n\tconst currentProjectArray = getProjectFromData(currentProject);\n\n\treturn currentProjectArray;\n}\n\n\n//# sourceURL=webpack://odin-project-1.5-todo/./src/utils/data.js?");

/***/ }),

/***/ "./src/utils/dataStorage.js":
/*!**********************************!*\
  !*** ./src/utils/dataStorage.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   loadData: () => (/* binding */ loadData),\n/* harmony export */   saveData: () => (/* binding */ saveData)\n/* harmony export */ });\n/* harmony import */ var _modules_dom_domControl__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../modules/dom/domControl */ \"./src/modules/dom/domControl.js\");\n\n\nfunction saveData(key, value) {\n\tlet dataArray = JSON.parse(localStorage.getItem(key)) || [];\n\n\tdataArray.push(value);\n\tlocalStorage.setItem(key, JSON.stringify(dataArray));\n}\n\nfunction loadData(key) {\n\tconst dataArray = JSON.parse(localStorage.getItem(key)) || [];\n\treturn dataArray || [];\n\t// updateData(dataArray);\n}\n\n\n//# sourceURL=webpack://odin-project-1.5-todo/./src/utils/dataStorage.js?");

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