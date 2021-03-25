module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../ssr-module-cache.js');
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
/******/ 	return __webpack_require__(__webpack_require__.s = "./pages/index.tsx");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./api/api.ts":
/*!********************!*\
  !*** ./api/api.ts ***!
  \********************/
/*! exports provided: fetchRecipe, fetchRecipes */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"fetchRecipe\", function() { return fetchRecipe; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"fetchRecipes\", function() { return fetchRecipes; });\n// 一個だけ取得\n\n/*\ntype FetchRecipe = Recipe;\n\ntypeof で対応できている？\n*/\nasync function fetchRecipe(id) {\n  const res = await fetch(`https://internship-recipe-api.ckpd.co/recipes/${id}`, {\n    headers: {\n      'X-Api-Key': process.env.APIKEY\n    }\n  });\n  const recipe = await res.json();\n  return recipe;\n} // 全部取得\n\n/*\ntype FetchRecipes = {\n    recipes: Recipe[];\n  };\n\ntypeof で対応できている？\n */\n\nasync function fetchRecipes(page, id) {\n  const qs = new URLSearchParams(removeUndefineds({\n    page,\n    id\n  })).toString();\n  const res = await fetch(`https://internship-recipe-api.ckpd.co/recipes?${qs}`, {\n    headers: {\n      \"X-Api-Key\": process.env.APIKEY\n    }\n  });\n  const recipes = await res.json(); // unknown とか挿入必要？\n\n  return recipes;\n}\n\nfunction removeUndefineds(obj) {\n  const newObj = {};\n  Object.keys(obj).forEach(key => {\n    if (obj[key] !== undefined) {\n      newObj[key] = obj[key].toString(); // TODO: KUSO CASTING HERE\n    }\n  });\n  return newObj;\n} // API取得\n\n/*\n(async() => {\n    const res = await fetch('https://internship-recipe-api.ckpd.co/recipes', {\n      headers: { 'X-Api-Key':process.env.APIKEY }\n    });\n    const recipes = await res.json();\n    console.log(recipes);\n  })();\n*///# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9hcGkvYXBpLnRzP2U0YWEiXSwibmFtZXMiOlsiZmV0Y2hSZWNpcGUiLCJpZCIsInJlcyIsImZldGNoIiwiaGVhZGVycyIsInByb2Nlc3MiLCJlbnYiLCJBUElLRVkiLCJyZWNpcGUiLCJqc29uIiwiZmV0Y2hSZWNpcGVzIiwicGFnZSIsInFzIiwiVVJMU2VhcmNoUGFyYW1zIiwicmVtb3ZlVW5kZWZpbmVkcyIsInRvU3RyaW5nIiwicmVjaXBlcyIsIm9iaiIsIm5ld09iaiIsIk9iamVjdCIsImtleXMiLCJmb3JFYWNoIiwia2V5IiwidW5kZWZpbmVkIl0sIm1hcHBpbmdzIjoiQUFFQTtBQUFBO0FBQUE7QUFBQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRU8sZUFBZUEsV0FBZixDQUEyQkMsRUFBM0IsRUFBa0U7QUFDckUsUUFBTUMsR0FBRyxHQUFHLE1BQU1DLEtBQUssQ0FBRSxpREFBZ0RGLEVBQUcsRUFBckQsRUFDdkI7QUFDSUcsV0FBTyxFQUFFO0FBQUUsbUJBQVlDLE9BQU8sQ0FBQ0MsR0FBUixDQUFZQztBQUExQjtBQURiLEdBRHVCLENBQXZCO0FBSUEsUUFBTUMsTUFBTSxHQUFLLE1BQU1OLEdBQUcsQ0FBQ08sSUFBSixFQUF2QjtBQUNBLFNBQU9ELE1BQVA7QUFDSCxDLENBRUQ7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRVMsZUFBZUUsWUFBZixDQUNMQyxJQURLLEVBRUxWLEVBRkssRUFHdUI7QUFDNUIsUUFBTVcsRUFBRSxHQUFHLElBQUlDLGVBQUosQ0FDVEMsZ0JBQWdCLENBQUM7QUFDZkgsUUFEZTtBQUVmVjtBQUZlLEdBQUQsQ0FEUCxFQUtUYyxRQUxTLEVBQVg7QUFNQSxRQUFNYixHQUFHLEdBQUcsTUFBTUMsS0FBSyxDQUNwQixpREFBZ0RTLEVBQUcsRUFEL0IsRUFFckI7QUFDRVIsV0FBTyxFQUFFO0FBQUUsbUJBQVlDLE9BQU8sQ0FBQ0MsR0FBUixDQUFZQztBQUExQjtBQURYLEdBRnFCLENBQXZCO0FBTUEsUUFBTVMsT0FBTyxHQUFLLE1BQU1kLEdBQUcsQ0FBQ08sSUFBSixFQUF4QixDQWI0QixDQWEyQzs7QUFDdkUsU0FBT08sT0FBUDtBQUNEOztBQUVELFNBQVNGLGdCQUFULENBQ0VHLEdBREYsRUFFMEI7QUFDeEIsUUFBTUMsTUFBTSxHQUFHLEVBQWY7QUFDQUMsUUFBTSxDQUFDQyxJQUFQLENBQVlILEdBQVosRUFBaUJJLE9BQWpCLENBQTBCQyxHQUFELElBQVM7QUFDaEMsUUFBSUwsR0FBRyxDQUFDSyxHQUFELENBQUgsS0FBYUMsU0FBakIsRUFBNEI7QUFDMUJMLFlBQU0sQ0FBQ0ksR0FBRCxDQUFOLEdBQWNMLEdBQUcsQ0FBQ0ssR0FBRCxDQUFILENBQVNQLFFBQVQsRUFBZCxDQUQwQixDQUNTO0FBQ3BDO0FBQ0YsR0FKRDtBQUtBLFNBQU9HLE1BQVA7QUFDRCxDLENBRUg7O0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwiZmlsZSI6Ii4vYXBpL2FwaS50cy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGdldFJlY2lwZXMsIGdldFJlY2lwZSB9IGZyb20gXCIuLi9saWIvcmVjaXBlXCI7XG5cbi8vIOS4gOWAi+OBoOOBkeWPluW+l1xuXG4vKlxudHlwZSBGZXRjaFJlY2lwZSA9IFJlY2lwZTtcblxudHlwZW9mIOOBp+WvvuW/nOOBp+OBjeOBpuOBhOOCi++8n1xuKi9cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGZldGNoUmVjaXBlKGlkOiBudW1iZXIpOiBQcm9taXNlPHR5cGVvZiBnZXRSZWNpcGU+IHtcbiAgICBjb25zdCByZXMgPSBhd2FpdCBmZXRjaChgaHR0cHM6Ly9pbnRlcm5zaGlwLXJlY2lwZS1hcGkuY2twZC5jby9yZWNpcGVzLyR7aWR9YCxcbiAgICB7XG4gICAgICAgIGhlYWRlcnM6IHsgJ1gtQXBpLUtleSc6cHJvY2Vzcy5lbnYuQVBJS0VZIH0sXG4gICAgfSk7XG4gICAgY29uc3QgcmVjaXBlID0gKChhd2FpdCByZXMuanNvbigpKSBhcyB1bmtub3duKSBhcyB0eXBlb2YgZ2V0UmVjaXBlO1xuICAgIHJldHVybiByZWNpcGU7XG59XG5cbi8vIOWFqOmDqOWPluW+l1xuXG4vKlxudHlwZSBGZXRjaFJlY2lwZXMgPSB7XG4gICAgcmVjaXBlczogUmVjaXBlW107XG4gIH07XG5cbnR5cGVvZiDjgaflr77lv5zjgafjgY3jgabjgYTjgovvvJ9cbiAqL1xuICBcbiAgZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGZldGNoUmVjaXBlcyhcbiAgICBwYWdlPzogbnVtYmVyLFxuICAgIGlkPzogbnVtYmVyW11cbiAgKTogUHJvbWlzZTx0eXBlb2YgZ2V0UmVjaXBlcz4ge1xuICAgIGNvbnN0IHFzID0gbmV3IFVSTFNlYXJjaFBhcmFtcyhcbiAgICAgIHJlbW92ZVVuZGVmaW5lZHMoe1xuICAgICAgICBwYWdlLFxuICAgICAgICBpZCxcbiAgICAgIH0pXG4gICAgKS50b1N0cmluZygpO1xuICAgIGNvbnN0IHJlcyA9IGF3YWl0IGZldGNoKFxuICAgICAgYGh0dHBzOi8vaW50ZXJuc2hpcC1yZWNpcGUtYXBpLmNrcGQuY28vcmVjaXBlcz8ke3FzfWAsXG4gICAgICB7XG4gICAgICAgIGhlYWRlcnM6IHsgXCJYLUFwaS1LZXlcIjpwcm9jZXNzLmVudi5BUElLRVkgfSxcbiAgICAgIH1cbiAgICApO1xuICAgIGNvbnN0IHJlY2lwZXMgPSAoKGF3YWl0IHJlcy5qc29uKCkpIGFzIHVua25vd24pIGFzIHR5cGVvZiBnZXRSZWNpcGVzIDsgLy8gdW5rbm93biDjgajjgYvmjL/lhaXlv4XopoHvvJ9cbiAgICByZXR1cm4gcmVjaXBlcztcbiAgfVxuICBcbiAgZnVuY3Rpb24gcmVtb3ZlVW5kZWZpbmVkcyhcbiAgICBvYmo6IFJlY29yZDxzdHJpbmcsIHVua25vd24+XG4gICk6IFJlY29yZDxzdHJpbmcsIHN0cmluZz4ge1xuICAgIGNvbnN0IG5ld09iaiA9IHt9O1xuICAgIE9iamVjdC5rZXlzKG9iaikuZm9yRWFjaCgoa2V5KSA9PiB7XG4gICAgICBpZiAob2JqW2tleV0gIT09IHVuZGVmaW5lZCkge1xuICAgICAgICBuZXdPYmpba2V5XSA9IG9ialtrZXldLnRvU3RyaW5nKCk7IC8vIFRPRE86IEtVU08gQ0FTVElORyBIRVJFXG4gICAgICB9XG4gICAgfSk7XG4gICAgcmV0dXJuIG5ld09iajtcbiAgfVxuXG4vLyBBUEnlj5blvpdcbi8qXG4oYXN5bmMoKSA9PiB7XG4gICAgY29uc3QgcmVzID0gYXdhaXQgZmV0Y2goJ2h0dHBzOi8vaW50ZXJuc2hpcC1yZWNpcGUtYXBpLmNrcGQuY28vcmVjaXBlcycsIHtcbiAgICAgIGhlYWRlcnM6IHsgJ1gtQXBpLUtleSc6cHJvY2Vzcy5lbnYuQVBJS0VZIH1cbiAgICB9KTtcbiAgICBjb25zdCByZWNpcGVzID0gYXdhaXQgcmVzLmpzb24oKTtcbiAgICBjb25zb2xlLmxvZyhyZWNpcGVzKTtcbiAgfSkoKTtcbiovIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./api/api.ts\n");

/***/ }),

/***/ "./components/Header.tsx":
/*!*******************************!*\
  !*** ./components/Header.tsx ***!
  \*******************************/
/*! exports provided: Header */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Header\", function() { return Header; });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n\nvar _jsxFileName = \"/Users/chihiro-t/cookpad/project/spring-internship-2021-recipe-site/components/Header.tsx\";\n\nconst Header = () => {\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"h1\", {\n    children: \"\\u30EC\\u30B7\\u30D4\\u30B5\\u30A4\\u30C8\"\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 5,\n    columnNumber: 9\n  }, undefined);\n};//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL0hlYWRlci50c3g/ZGRiOCJdLCJuYW1lcyI6WyJIZWFkZXIiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQUE7QUFFTyxNQUFNQSxNQUFVLEdBQUcsTUFBTTtBQUM1QixzQkFDSTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQURKO0FBR0gsQ0FKTSIsImZpbGUiOiIuL2NvbXBvbmVudHMvSGVhZGVyLnRzeC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyBGQyB9IGZyb20gXCJyZWFjdFwiO1xuXG5leHBvcnQgY29uc3QgSGVhZGVyOiBGQyA9ICgpID0+IHtcbiAgICByZXR1cm4gKFxuICAgICAgICA8aDE+44Os44K344OU44K144Kk44OIPC9oMT5cbiAgICApO1xufTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/Header.tsx\n");

/***/ }),

/***/ "./components/Layout.tsx":
/*!*******************************!*\
  !*** ./components/Layout.tsx ***!
  \*******************************/
/*! exports provided: Layout */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Layout\", function() { return Layout; });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _Header__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Header */ \"./components/Header.tsx\");\n\nvar _jsxFileName = \"/Users/chihiro-t/cookpad/project/spring-internship-2021-recipe-site/components/Layout.tsx\";\n\n\nconst Layout = ({\n  children\n}) => {\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_Header__WEBPACK_IMPORTED_MODULE_2__[\"Header\"], {}, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 8,\n      columnNumber: 13\n    }, undefined), children]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 7,\n    columnNumber: 9\n  }, undefined);\n};//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL0xheW91dC50c3g/NmE5MyJdLCJuYW1lcyI6WyJMYXlvdXQiLCJjaGlsZHJlbiJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQUE7QUFFQTtBQUVPLE1BQU1BLE1BQVUsR0FBRyxDQUFDO0FBQUVDO0FBQUYsQ0FBRCxLQUFrQjtBQUN4QyxzQkFDSTtBQUFBLDRCQUNJLHFFQUFDLDhDQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBREosRUFFS0EsUUFGTDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFESjtBQU1ILENBUE0iLCJmaWxlIjoiLi9jb21wb25lbnRzL0xheW91dC50c3guanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgRkMgfSBmcm9tIFwicmVhY3RcIjtcblxuaW1wb3J0IHsgSGVhZGVyIH0gZnJvbSBcIi4vSGVhZGVyXCI7XG5cbmV4cG9ydCBjb25zdCBMYXlvdXQ6IEZDID0gKHsgY2hpbGRyZW4gfSkgPT4ge1xuICAgIHJldHVybiAoXG4gICAgICAgIDxkaXY+XG4gICAgICAgICAgICA8SGVhZGVyIC8+XG4gICAgICAgICAgICB7Y2hpbGRyZW59XG4gICAgICAgIDwvZGl2PlxuICAgIClcbn0iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/Layout.tsx\n");

/***/ }),

/***/ "./components/RecipeList.tsx":
/*!***********************************!*\
  !*** ./components/RecipeList.tsx ***!
  \***********************************/
/*! exports provided: RecipeList */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"RecipeList\", function() { return RecipeList; });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n\nvar _jsxFileName = \"/Users/chihiro-t/cookpad/project/spring-internship-2021-recipe-site/components/RecipeList.tsx\";\n\nconst RecipeList = ({\n  recipes\n}) => {\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"ul\", {\n      children: recipes.map(recipe => /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"li\", {\n        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"img\", {\n          src: recipe.image_url,\n          width: \"300\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 14,\n          columnNumber: 25\n        }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"a\", {\n          href: `/recipes/${recipe.id}`,\n          children: recipe.title\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 15,\n          columnNumber: 25\n        }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"hr\", {}, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 16,\n          columnNumber: 25\n        }, undefined)]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 14,\n        columnNumber: 21\n      }, undefined))\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 12,\n      columnNumber: 13\n    }, undefined)\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 11,\n    columnNumber: 9\n  }, undefined);\n};//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL1JlY2lwZUxpc3QudHN4PzNhODAiXSwibmFtZXMiOlsiUmVjaXBlTGlzdCIsInJlY2lwZXMiLCJtYXAiLCJyZWNpcGUiLCJpbWFnZV91cmwiLCJpZCIsInRpdGxlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUFBO0FBUU8sTUFBTUEsVUFBcUIsR0FBRyxDQUFDO0FBQUVDO0FBQUYsQ0FBRCxLQUFpQjtBQUNsRCxzQkFDSTtBQUFBLDJCQUNJO0FBQUEsZ0JBQ0tBLE9BQU8sQ0FBQ0MsR0FBUixDQUFZQyxNQUFNLGlCQUNmO0FBQUEsZ0NBQUk7QUFBSyxhQUFHLEVBQUVBLE1BQU0sQ0FBQ0MsU0FBakI7QUFBNEIsZUFBSyxFQUFDO0FBQWxDO0FBQUE7QUFBQTtBQUFBO0FBQUEscUJBQUosZUFDSTtBQUFHLGNBQUksRUFBRyxZQUFXRCxNQUFNLENBQUNFLEVBQUcsRUFBL0I7QUFBQSxvQkFBbUNGLE1BQU0sQ0FBQ0c7QUFBMUM7QUFBQTtBQUFBO0FBQUE7QUFBQSxxQkFESixlQUVJO0FBQUE7QUFBQTtBQUFBO0FBQUEscUJBRko7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQURIO0FBREw7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURKO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFESjtBQVlILENBYk0iLCJmaWxlIjoiLi9jb21wb25lbnRzL1JlY2lwZUxpc3QudHN4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IEZDIH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyBSZWNpcGUgfSBmcm9tIFwiLi4vbGliL3JlY2lwZVwiXG4vLyBpbXBvcnQgeyBIZWFkZXIgfSBmcm9tIFwiLi9IZWFkZXJcIlxuXG50eXBlIFByb3BzID0ge1xuICAgIHJlY2lwZXM6IFJlY2lwZVtdO1xufVxuXG5leHBvcnQgY29uc3QgUmVjaXBlTGlzdDogRkM8UHJvcHM+ID0gKHsgcmVjaXBlcyB9KSA9PiB7XG4gICAgcmV0dXJuIChcbiAgICAgICAgPGRpdj5cbiAgICAgICAgICAgIDx1bD5cbiAgICAgICAgICAgICAgICB7cmVjaXBlcy5tYXAocmVjaXBlID0+IChcbiAgICAgICAgICAgICAgICAgICAgPGxpPjxpbWcgc3JjPXtyZWNpcGUuaW1hZ2VfdXJsfSB3aWR0aD1cIjMwMFwiIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICA8YSBocmVmPXtgL3JlY2lwZXMvJHtyZWNpcGUuaWR9YH0+e3JlY2lwZS50aXRsZX08L2E+XG4gICAgICAgICAgICAgICAgICAgICAgICA8aHIgLz5cbiAgICAgICAgICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgICAgICApKX1cbiAgICAgICAgICAgIDwvdWw+XG4gICAgICAgIDwvZGl2PlxuICAgICk7XG59OyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/RecipeList.tsx\n");

/***/ }),

/***/ "./pages/index.tsx":
/*!*************************!*\
  !*** ./pages/index.tsx ***!
  \*************************/
/*! exports provided: getServerSideProps, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"getServerSideProps\", function() { return getServerSideProps; });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _api_api__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../api/api */ \"./api/api.ts\");\n/* harmony import */ var _components_RecipeList__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/RecipeList */ \"./components/RecipeList.tsx\");\n/* harmony import */ var _components_Layout__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/Layout */ \"./components/Layout.tsx\");\n\nvar _jsxFileName = \"/Users/chihiro-t/cookpad/project/spring-internship-2021-recipe-site/pages/index.tsx\";\n\n\n\nconst getServerSideProps = async context => {\n  const recipes = await (await Object(_api_api__WEBPACK_IMPORTED_MODULE_1__[\"fetchRecipes\"])()).recipes;\n  return {\n    props: {\n      recipes\n    }\n  };\n};\n\nconst TopPage = ({\n  recipes\n}) => {\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_components_Layout__WEBPACK_IMPORTED_MODULE_3__[\"Layout\"], {\n    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_components_RecipeList__WEBPACK_IMPORTED_MODULE_2__[\"RecipeList\"], {\n      recipes: recipes\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 26,\n      columnNumber: 19\n    }, undefined)\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 25,\n    columnNumber: 13\n  }, undefined);\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (TopPage);\n/*\ntype Props = {\n  recipes: Recipe[];\n};\n\nconst Home: NextPage<Props> = (props) => {\n  const { recipes } = props;\n\n  return (\n    <div>\n      <h1>My Recipe Site</h1>\n\n      <ul>\n\nexport const getStaticProps = async () => {\n  const recipes = await getRecipes();\n  return {\n    props: {\n      recipes: recipes,\n    },\n  };\n};\n\nexport default Home;\n\n*///# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9pbmRleC50c3g/ZGI3NiJdLCJuYW1lcyI6WyJnZXRTZXJ2ZXJTaWRlUHJvcHMiLCJjb250ZXh0IiwicmVjaXBlcyIsImZldGNoUmVjaXBlcyIsInByb3BzIiwiVG9wUGFnZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBS0E7QUFDQTtBQUNBO0FBTU8sTUFBTUEsa0JBQTZDLEdBQUcsTUFBT0MsT0FBUCxJQUFtQjtBQUMxRSxRQUFNQyxPQUFPLEdBQUcsTUFBTSxDQUFDLE1BQU1DLDZEQUFZLEVBQW5CLEVBQXVCRCxPQUE3QztBQUNBLFNBQU87QUFDREUsU0FBSyxFQUFFO0FBQ0RGO0FBREM7QUFETixHQUFQO0FBS0wsQ0FQTTs7QUFTUCxNQUFNRyxPQUF3QixHQUFHLENBQUM7QUFBRUg7QUFBRixDQUFELEtBQWlCO0FBQzVDLHNCQUNNLHFFQUFDLHlEQUFEO0FBQUEsMkJBQ00scUVBQUMsaUVBQUQ7QUFBWSxhQUFPLEVBQUVBO0FBQXJCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFETjtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBRE47QUFLTCxDQU5EOztBQVFlRyxzRUFBZjtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJmaWxlIjoiLi9wYWdlcy9pbmRleC50c3guanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBGQywgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBMaW5rIGZyb20gXCJuZXh0L2xpbmtcIlxuXG5pbXBvcnQgeyBHZXRTZXJ2ZXJTaWRlUHJvcHMsIE5leHRQYWdlIH0gZnJvbSBcIm5leHRcIjtcbmltcG9ydCB7IFJlY2lwZSB9IGZyb20gXCIuLi9saWIvcmVjaXBlXCI7XG5pbXBvcnQgeyBmZXRjaFJlY2lwZXMgfSBmcm9tIFwiLi4vYXBpL2FwaVwiO1xuaW1wb3J0IHsgUmVjaXBlTGlzdCB9IGZyb20gXCIuLi9jb21wb25lbnRzL1JlY2lwZUxpc3RcIlxuaW1wb3J0IHsgTGF5b3V0IH0gZnJvbSBcIi4uL2NvbXBvbmVudHMvTGF5b3V0XCJcblxudHlwZSBQcm9wcyA9IHtcbiAgICAgIHJlY2lwZXM6IFJlY2lwZVtdO1xufTtcblxuZXhwb3J0IGNvbnN0IGdldFNlcnZlclNpZGVQcm9wczogR2V0U2VydmVyU2lkZVByb3BzPFByb3BzPiA9IGFzeW5jIChjb250ZXh0KSA9PiB7XG4gICAgICBjb25zdCByZWNpcGVzID0gYXdhaXQgKGF3YWl0IGZldGNoUmVjaXBlcygpKS5yZWNpcGVzO1xuICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIHByb3BzOiB7XG4gICAgICAgICAgICAgICAgICByZWNpcGVzLFxuICAgICAgICAgICAgfVxuICAgICAgfVxufVxuXG5jb25zdCBUb3BQYWdlOiBOZXh0UGFnZTxQcm9wcz4gPSAoeyByZWNpcGVzIH0pID0+IHtcbiAgICAgIHJldHVybiAoXG4gICAgICAgICAgICA8TGF5b3V0PlxuICAgICAgICAgICAgICAgICAgPFJlY2lwZUxpc3QgcmVjaXBlcz17cmVjaXBlc30gLz5cbiAgICAgICAgICAgIDwvTGF5b3V0PlxuICAgICAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IFRvcFBhZ2U7XG5cbi8qXG50eXBlIFByb3BzID0ge1xuICByZWNpcGVzOiBSZWNpcGVbXTtcbn07XG5cbmNvbnN0IEhvbWU6IE5leHRQYWdlPFByb3BzPiA9IChwcm9wcykgPT4ge1xuICBjb25zdCB7IHJlY2lwZXMgfSA9IHByb3BzO1xuXG4gIHJldHVybiAoXG4gICAgPGRpdj5cbiAgICAgIDxoMT5NeSBSZWNpcGUgU2l0ZTwvaDE+XG5cbiAgICAgIDx1bD5cblxuZXhwb3J0IGNvbnN0IGdldFN0YXRpY1Byb3BzID0gYXN5bmMgKCkgPT4ge1xuICBjb25zdCByZWNpcGVzID0gYXdhaXQgZ2V0UmVjaXBlcygpO1xuICByZXR1cm4ge1xuICAgIHByb3BzOiB7XG4gICAgICByZWNpcGVzOiByZWNpcGVzLFxuICAgIH0sXG4gIH07XG59O1xuXG5leHBvcnQgZGVmYXVsdCBIb21lO1xuXG4qLyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/index.tsx\n");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdFwiPzU4OGUiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEiLCJmaWxlIjoicmVhY3QuanMiLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdFwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///react\n");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react/jsx-dev-runtime\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdC9qc3gtZGV2LXJ1bnRpbWVcIj9jZDkwIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBIiwiZmlsZSI6InJlYWN0L2pzeC1kZXYtcnVudGltZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0L2pzeC1kZXYtcnVudGltZVwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///react/jsx-dev-runtime\n");

/***/ })

/******/ });