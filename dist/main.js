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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _modules_dom_domControl__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/dom/domControl */ \"./src/modules/dom/domControl.js\");\n/* harmony import */ var _utils_data__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./utils/data */ \"./src/utils/data.js\");\n\n\n\nwindow.onload = () => {\n\t_utils_data__WEBPACK_IMPORTED_MODULE_1__.instantiateLocalStorage();\n\tconst projectData = _utils_data__WEBPACK_IMPORTED_MODULE_1__.getProjectData();\n\t_modules_dom_domControl__WEBPACK_IMPORTED_MODULE_0__.instantiateProjectList(projectData); //TODO uncommment out line to populate list\n\t_modules_dom_domControl__WEBPACK_IMPORTED_MODULE_0__.updateData(projectData);\n};\n\nconst addTaskButton = document.getElementById(\"add-task\");\naddTaskButton.addEventListener(\"click\", (event) => {\n\tevent.preventDefault();\n\tconst formData = _modules_dom_domControl__WEBPACK_IMPORTED_MODULE_0__.getFormData();\n\t_utils_data__WEBPACK_IMPORTED_MODULE_1__.addTask(formData);\n\t// dom.addToMainPanel();\n});\n\nconst addProjectButton = document.getElementById(\"add-project\");\naddProjectButton.addEventListener(\"click\", (event) => {\n\tevent.preventDefault();\n\t_utils_data__WEBPACK_IMPORTED_MODULE_1__.addProject();\n\t_modules_dom_domControl__WEBPACK_IMPORTED_MODULE_0__.addToProjectList();\n});\n\ndocument.addEventListener(\"keydown\", function (event) {\n\tif (event.key == \"Enter\") {\n\t\tevent.preventDefault();\n\t\t_utils_data__WEBPACK_IMPORTED_MODULE_1__.addTask();\n\t}\n});\n\nconst dropDownProject = document.getElementById(\"project-list\");\ndropDownProject.addEventListener(\"change\", (event) => {\n\t_utils_data__WEBPACK_IMPORTED_MODULE_1__.getCurrentProject();\n});\n\n\n//# sourceURL=webpack://odin-project-1.5-todo/./src/index.js?");

/***/ }),

/***/ "./src/modules/dom/domControl.js":
/*!***************************************!*\
  !*** ./src/modules/dom/domControl.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   addToMainPanel: () => (/* binding */ addToMainPanel),\n/* harmony export */   addToProjectList: () => (/* binding */ addToProjectList),\n/* harmony export */   getFormData: () => (/* binding */ getFormData),\n/* harmony export */   instantiateProjectList: () => (/* binding */ instantiateProjectList),\n/* harmony export */   updateData: () => (/* binding */ updateData)\n/* harmony export */ });\nfunction getFormData() {\n\tconst taskTitle = document.getElementById(\"task-title\").value || \"Test Title\";\n\tconst taskDate =\n\t\tdocument.getElementById(\"task-due-date\").value || \"04/20/6969\";\n\tconst taskPriority =\n\t\tdocument.getElementById(\"task-priority\").value || \"Test Priority\";\n\tconst formData = {\n\t\ttitle: taskTitle,\n\t\tdate: taskDate,\n\t\tpriority: taskPriority,\n\t};\n\treturn formData;\n}\n\nfunction addToMainPanel(task) {\n\tconst mainPanel = document.getElementById(\"main-panel-wrapper\");\n\t// Append the items in a card element\n\tconst cardWrap = document.createElement(\"div\");\n\tcardWrap.classList.add(\"card-wrapper\");\n\tcardWrap.append(task.title);\n\tcardWrap.append(task.date);\n\tcardWrap.append(task.priority);\n\t// Append the card element to the main panel\n\tmainPanel.append(cardWrap);\n}\n\nfunction updateData(array) {\n\tarray.forEach((taskList) => {\n\t\ttaskList.array.forEach((element) => {\n\t\t\taddToMainPanel(element);\n\t\t});\n\t});\n}\n\nfunction addToProjectList() {\n\tconst projectDropDown = document.getElementById(\"project-list\");\n\tconst projectTitle = document.getElementById(\"project-title\").value;\n\tconst projectValue = \"project-\" + projectDropDown.options.length;\n\t// console.log(projectValue + \": \" + projectTitle);\n\tconst newOption = document.createElement(\"option\");\n\tnewOption.value = projectValue;\n\tnewOption.textContent = projectTitle;\n\tprojectDropDown.appendChild(newOption);\n}\n\nfunction instantiateProjectList(projectData) {\n\t// Get the projectDropDown values and then add more projects to the list with the above function? Maybe add a parameter that takes in the data from the data class?\n\tprojectData.forEach((element) => {\n\t\t// TODO change the value to a position in the array rather than the title.\n\t\t// TODO or not?\n\t\tconst projectDropDown = document.getElementById(\"project-list\");\n\n\t\tconst newOption = document.createElement(\"option\");\n\t\tnewOption.value = element.title;\n\t\tnewOption.textContent = element.title;\n\t\tprojectDropDown.appendChild(newOption);\n\t});\n}\n\n// CHATGPT solution\n// export function addToProjectList(taskList) {\n//   const projectDropDown = document.getElementById(\"project-list\");\n//   const projectTitle = taskList.title;\n\n//   // Determine the next available project number\n//   const nextProjectNumber = projectDropDown.options.length;\n\n//   // Create a new option element\n//   const newOption = document.createElement(\"option\");\n\n//   // Set the value attribute\n//   newOption.value = \"project-\" + nextProjectNumber;\n\n//   // Set the display text\n//   newOption.textContent = projectTitle;\n\n//   // Append the new option to the select dropdown\n//   projectDropDown.appendChild(newOption);\n// }\n\n\n//# sourceURL=webpack://odin-project-1.5-todo/./src/modules/dom/domControl.js?");

/***/ }),

/***/ "./src/modules/items/task.js":
/*!***********************************!*\
  !*** ./src/modules/items/task.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   Task: () => (/* binding */ Task)\n/* harmony export */ });\nclass Task {\n\tconstructor(title, date, priority) {\n\t\tthis.title = title;\n\t\tthis.date = date;\n\t\tthis.priority = priority;\n\t}\n}\n\n\n//# sourceURL=webpack://odin-project-1.5-todo/./src/modules/items/task.js?");

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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   addProject: () => (/* binding */ addProject),\n/* harmony export */   addTask: () => (/* binding */ addTask),\n/* harmony export */   addToProjectData: () => (/* binding */ addToProjectData),\n/* harmony export */   getCurrentProject: () => (/* binding */ getCurrentProject),\n/* harmony export */   getProjectData: () => (/* binding */ getProjectData),\n/* harmony export */   getProjectFromData: () => (/* binding */ getProjectFromData),\n/* harmony export */   instantiateLocalStorage: () => (/* binding */ instantiateLocalStorage)\n/* harmony export */ });\n/* harmony import */ var _modules_items_task__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../modules/items/task */ \"./src/modules/items/task.js\");\n/* harmony import */ var _dataStorage__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./dataStorage */ \"./src/utils/dataStorage.js\");\n/* harmony import */ var _modules_items_taskList__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../modules/items/taskList */ \"./src/modules/items/taskList.js\");\n/* harmony import */ var _modules_dom_domControl__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../modules/dom/domControl */ \"./src/modules/dom/domControl.js\");\n\n\n\n\n\nlet allTasks = new _modules_items_taskList__WEBPACK_IMPORTED_MODULE_2__.TaskList(\"project-0\", []);\nlet project1 = new _modules_items_taskList__WEBPACK_IMPORTED_MODULE_2__.TaskList(\"project-1\", []);\nlet projectData = [allTasks, project1];\n\nfunction getProjectData() {\n\treturn projectData;\n}\n\nfunction instantiateLocalStorage() {\n\t// Check if local storage is empty\n\tif (localStorage.length === 0) {\n\t\t(0,_dataStorage__WEBPACK_IMPORTED_MODULE_1__.saveData)(\"project-data\", projectData);\n\t} else {\n\t\tprojectData = (0,_dataStorage__WEBPACK_IMPORTED_MODULE_1__.loadData)(\"project-data\");\n\t}\n}\n\nfunction addTask(formData) {\n\tlet newTask = new _modules_items_task__WEBPACK_IMPORTED_MODULE_0__.Task(formData.title, formData.date, formData.priority);\n\tlet currentProject = getCurrentProject();\n\t// TODO delete tempProject and put the current project there.\n\tlet tempProject = currentProject.array;\n\ttempProject.push(newTask);\n\tcurrentProject.array = tempProject;\n\n\t(0,_dataStorage__WEBPACK_IMPORTED_MODULE_1__.saveData)(\"project-data\", projectData);\n\n\t_modules_dom_domControl__WEBPACK_IMPORTED_MODULE_3__.addToMainPanel(newTask);\n}\n\nfunction getCurrentProject() {\n\tconst projectList = document.getElementById(\"project-list\");\n\tconst currentProject = projectList.value;\n\tconst currentProjectArray = getProjectFromData(currentProject);\n\n\treturn currentProjectArray;\n}\n\nfunction getProjectFromData(project) {\n\tlet dataProject;\n\tif (project instanceof _modules_items_taskList__WEBPACK_IMPORTED_MODULE_2__.TaskList) {\n\t\tdataProject = projectData.find(\n\t\t\t(taskList) => taskList.title === project.title\n\t\t);\n\t} else {\n\t\tdataProject = projectData.find((taskList) => taskList.title === project);\n\t}\n\treturn dataProject;\n}\n\nfunction addToProjectData(task, taskList) {\n\tconst dataTaskList = getProjectFromData(taskList);\n\tallTasks.array.push(task);\n}\n\nfunction addProject() {\n\tconst projectTitle = \"project-\" + projectData.length;\n\tconst newTaskList = new _modules_items_taskList__WEBPACK_IMPORTED_MODULE_2__.TaskList(projectTitle, []);\n\n\tprojectData.push(newTaskList);\n\t(0,_dataStorage__WEBPACK_IMPORTED_MODULE_1__.saveData)(\"project-data\", projectData);\n}\n\n// export function addToProjectList(taskList) {\n// \tconst projectDropDown = document.getElementById(\"project-list\");\n// \tconst projectTitle = taskList.title;\n// \tconst projectValue = \"project-\" + projectDropDown.options.length;\n// \t// console.log(projectValue + \": \" + projectTitle);\n// \tconst newOption = document.createElement(\"option\");\n// \tnewOption.value = projectValue;\n// \tnewOption.textContent = projectTitle;\n// \tprojectDropDown.appendChild(newOption);\n// }\n\n\n//# sourceURL=webpack://odin-project-1.5-todo/./src/utils/data.js?");

/***/ }),

/***/ "./src/utils/dataStorage.js":
/*!**********************************!*\
  !*** ./src/utils/dataStorage.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   loadData: () => (/* binding */ loadData),\n/* harmony export */   saveData: () => (/* binding */ saveData)\n/* harmony export */ });\nfunction saveData(key, value) {\n\tlocalStorage.setItem(key, JSON.stringify(value));\n}\n\nfunction loadData(key) {\n\tconst dataArray = JSON.parse(localStorage.getItem(key)) || [];\n\treturn dataArray || [];\n}\n\n\n//# sourceURL=webpack://odin-project-1.5-todo/./src/utils/dataStorage.js?");

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