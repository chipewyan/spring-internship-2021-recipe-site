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
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Header\", function() { return Header; });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\nvar _jsxFileName = \"/Users/chihiro-t/cookpad/project/spring-internship-2021-recipe-site/components/Header.tsx\";\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\n\nconst Header = () => {\n  return __jsx(\"h1\", {\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 5,\n      columnNumber: 9\n    }\n  }, \"\\u30EC\\u30B7\\u30D4\\u30B5\\u30A4\\u30C8\");\n};//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL0hlYWRlci50c3g/ZGRiOCJdLCJuYW1lcyI6WyJIZWFkZXIiXSwibWFwcGluZ3MiOiI7Ozs7OztBQUFBO0FBRU8sTUFBTUEsTUFBVSxHQUFHLE1BQU07QUFDNUIsU0FDSTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLDRDQURKO0FBR0gsQ0FKTSIsImZpbGUiOiIuL2NvbXBvbmVudHMvSGVhZGVyLnRzeC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyBGQyB9IGZyb20gXCJyZWFjdFwiO1xuXG5leHBvcnQgY29uc3QgSGVhZGVyOiBGQyA9ICgpID0+IHtcbiAgICByZXR1cm4gKFxuICAgICAgICA8aDE+44Os44K344OU44K144Kk44OIPC9oMT5cbiAgICApO1xufTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/Header.tsx\n");

/***/ }),

/***/ "./components/Layout.tsx":
/*!*******************************!*\
  !*** ./components/Layout.tsx ***!
  \*******************************/
/*! exports provided: Layout */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Layout\", function() { return Layout; });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _Header__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Header */ \"./components/Header.tsx\");\nvar _jsxFileName = \"/Users/chihiro-t/cookpad/project/spring-internship-2021-recipe-site/components/Layout.tsx\";\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\n\n\nconst Layout = ({\n  children\n}) => {\n  return __jsx(\"div\", {\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 7,\n      columnNumber: 9\n    }\n  }, __jsx(_Header__WEBPACK_IMPORTED_MODULE_1__[\"Header\"], {\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 8,\n      columnNumber: 13\n    }\n  }), children);\n};//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL0xheW91dC50c3g/NmE5MyJdLCJuYW1lcyI6WyJMYXlvdXQiLCJjaGlsZHJlbiJdLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUFBO0FBRUE7QUFFTyxNQUFNQSxNQUFVLEdBQUcsQ0FBQztBQUFFQztBQUFGLENBQUQsS0FBa0I7QUFDeEMsU0FDSTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0ksTUFBQyw4Q0FBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBREosRUFFS0EsUUFGTCxDQURKO0FBTUgsQ0FQTSIsImZpbGUiOiIuL2NvbXBvbmVudHMvTGF5b3V0LnRzeC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyBGQyB9IGZyb20gXCJyZWFjdFwiO1xuXG5pbXBvcnQgeyBIZWFkZXIgfSBmcm9tIFwiLi9IZWFkZXJcIjtcblxuZXhwb3J0IGNvbnN0IExheW91dDogRkMgPSAoeyBjaGlsZHJlbiB9KSA9PiB7XG4gICAgcmV0dXJuIChcbiAgICAgICAgPGRpdj5cbiAgICAgICAgICAgIDxIZWFkZXIgLz5cbiAgICAgICAgICAgIHtjaGlsZHJlbn1cbiAgICAgICAgPC9kaXY+XG4gICAgKVxufSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/Layout.tsx\n");

/***/ }),

/***/ "./components/RecipeList.tsx":
/*!***********************************!*\
  !*** ./components/RecipeList.tsx ***!
  \***********************************/
/*! exports provided: RecipeList */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"RecipeList\", function() { return RecipeList; });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\nvar _jsxFileName = \"/Users/chihiro-t/cookpad/project/spring-internship-2021-recipe-site/components/RecipeList.tsx\";\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\n\nconst RecipeList = ({\n  recipes\n}) => {\n  return __jsx(\"div\", {\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 11,\n      columnNumber: 9\n    }\n  }, __jsx(\"ul\", {\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 12,\n      columnNumber: 13\n    }\n  }, recipes.map(recipe => __jsx(\"li\", {\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 14,\n      columnNumber: 21\n    }\n  }, __jsx(\"img\", {\n    src: recipe.image_url,\n    width: \"200\",\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 14,\n      columnNumber: 25\n    }\n  }), __jsx(\"a\", {\n    href: `/recipes/${recipe.id}`,\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 15,\n      columnNumber: 25\n    }\n  }, recipe.title)))));\n};//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL1JlY2lwZUxpc3QudHN4PzNhODAiXSwibmFtZXMiOlsiUmVjaXBlTGlzdCIsInJlY2lwZXMiLCJtYXAiLCJyZWNpcGUiLCJpbWFnZV91cmwiLCJpZCIsInRpdGxlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7QUFBQTtBQVFPLE1BQU1BLFVBQXFCLEdBQUcsQ0FBQztBQUFFQztBQUFGLENBQUQsS0FBaUI7QUFDbEQsU0FDSTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0k7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNLQSxPQUFPLENBQUNDLEdBQVIsQ0FBWUMsTUFBTSxJQUNmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FBSTtBQUFLLE9BQUcsRUFBRUEsTUFBTSxDQUFDQyxTQUFqQjtBQUE0QixTQUFLLEVBQUMsS0FBbEM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQUFKLEVBQ0k7QUFBRyxRQUFJLEVBQUcsWUFBV0QsTUFBTSxDQUFDRSxFQUFHLEVBQS9CO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FBbUNGLE1BQU0sQ0FBQ0csS0FBMUMsQ0FESixDQURILENBREwsQ0FESixDQURKO0FBVUgsQ0FYTSIsImZpbGUiOiIuL2NvbXBvbmVudHMvUmVjaXBlTGlzdC50c3guanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgRkMgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IFJlY2lwZSB9IGZyb20gXCIuLi9saWIvcmVjaXBlXCJcbmltcG9ydCB7IEhlYWRlciB9IGZyb20gXCIuL0hlYWRlclwiXG5cbnR5cGUgUHJvcHMgPSB7XG4gICAgcmVjaXBlczogUmVjaXBlW107XG59XG5cbmV4cG9ydCBjb25zdCBSZWNpcGVMaXN0OiBGQzxQcm9wcz4gPSAoeyByZWNpcGVzIH0pID0+IHtcbiAgICByZXR1cm4gKFxuICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgPHVsPlxuICAgICAgICAgICAgICAgIHtyZWNpcGVzLm1hcChyZWNpcGUgPT4gKFxuICAgICAgICAgICAgICAgICAgICA8bGk+PGltZyBzcmM9e3JlY2lwZS5pbWFnZV91cmx9IHdpZHRoPVwiMjAwXCIgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxhIGhyZWY9e2AvcmVjaXBlcy8ke3JlY2lwZS5pZH1gfT57cmVjaXBlLnRpdGxlfTwvYT48L2xpPlxuICAgICAgICAgICAgICAgICkpfVxuICAgICAgICAgICAgPC91bD5cbiAgICAgICAgPC9kaXY+XG4gICAgKTtcbn07Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/RecipeList.tsx\n");

/***/ }),

/***/ "./pages/index.tsx":
/*!*************************!*\
  !*** ./pages/index.tsx ***!
  \*************************/
/*! exports provided: getServerSideProps, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"getServerSideProps\", function() { return getServerSideProps; });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _api_api__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../api/api */ \"./api/api.ts\");\n/* harmony import */ var _components_RecipeList__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/RecipeList */ \"./components/RecipeList.tsx\");\n/* harmony import */ var _components_Layout__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/Layout */ \"./components/Layout.tsx\");\nvar _jsxFileName = \"/Users/chihiro-t/cookpad/project/spring-internship-2021-recipe-site/pages/index.tsx\";\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\n\n\n\nconst getServerSideProps = async context => {\n  const recipes = await (await Object(_api_api__WEBPACK_IMPORTED_MODULE_1__[\"fetchRecipes\"])()).recipes;\n  return {\n    props: {\n      recipes\n    }\n  };\n};\n\nconst TopPage = ({\n  recipes\n}) => {\n  return __jsx(_components_Layout__WEBPACK_IMPORTED_MODULE_3__[\"Layout\"], {\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 25,\n      columnNumber: 13\n    }\n  }, __jsx(_components_RecipeList__WEBPACK_IMPORTED_MODULE_2__[\"RecipeList\"], {\n    recipes: recipes,\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 26,\n      columnNumber: 19\n    }\n  }));\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (TopPage);\n/*\ntype Props = {\n  recipes: Recipe[];\n};\n\nconst Home: NextPage<Props> = (props) => {\n  const { recipes } = props;\n\n  return (\n    <div>\n      <h1>My Recipe Site</h1>\n\n      <ul>\n\nexport const getStaticProps = async () => {\n  const recipes = await getRecipes();\n  return {\n    props: {\n      recipes: recipes,\n    },\n  };\n};\n\nexport default Home;\n\n*///# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9pbmRleC50c3g/ZGI3NiJdLCJuYW1lcyI6WyJnZXRTZXJ2ZXJTaWRlUHJvcHMiLCJjb250ZXh0IiwicmVjaXBlcyIsImZldGNoUmVjaXBlcyIsInByb3BzIiwiVG9wUGFnZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUtBO0FBQ0E7QUFDQTtBQU1PLE1BQU1BLGtCQUE2QyxHQUFHLE1BQU9DLE9BQVAsSUFBbUI7QUFDMUUsUUFBTUMsT0FBTyxHQUFHLE1BQU0sQ0FBQyxNQUFNQyw2REFBWSxFQUFuQixFQUF1QkQsT0FBN0M7QUFDQSxTQUFPO0FBQ0RFLFNBQUssRUFBRTtBQUNERjtBQURDO0FBRE4sR0FBUDtBQUtMLENBUE07O0FBU1AsTUFBTUcsT0FBd0IsR0FBRyxDQUFDO0FBQUVIO0FBQUYsQ0FBRCxLQUFpQjtBQUM1QyxTQUNNLE1BQUMseURBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNNLE1BQUMsaUVBQUQ7QUFBWSxXQUFPLEVBQUVBLE9BQXJCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFETixDQUROO0FBTUwsQ0FQRDs7QUFTZUcsc0VBQWY7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwiZmlsZSI6Ii4vcGFnZXMvaW5kZXgudHN4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRkMsIHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgTGluayBmcm9tIFwibmV4dC9saW5rXCJcblxuaW1wb3J0IHsgR2V0U2VydmVyU2lkZVByb3BzLCBOZXh0UGFnZSB9IGZyb20gXCJuZXh0XCI7XG5pbXBvcnQgeyBSZWNpcGUgfSBmcm9tIFwiLi4vbGliL3JlY2lwZVwiO1xuaW1wb3J0IHsgZmV0Y2hSZWNpcGVzIH0gZnJvbSBcIi4uL2FwaS9hcGlcIjtcbmltcG9ydCB7IFJlY2lwZUxpc3QgfSBmcm9tIFwiLi4vY29tcG9uZW50cy9SZWNpcGVMaXN0XCJcbmltcG9ydCB7IExheW91dCB9IGZyb20gXCIuLi9jb21wb25lbnRzL0xheW91dFwiXG5cbnR5cGUgUHJvcHMgPSB7XG4gICAgICByZWNpcGVzOiBSZWNpcGVbXTtcbn07XG5cbmV4cG9ydCBjb25zdCBnZXRTZXJ2ZXJTaWRlUHJvcHM6IEdldFNlcnZlclNpZGVQcm9wczxQcm9wcz4gPSBhc3luYyAoY29udGV4dCkgPT4ge1xuICAgICAgY29uc3QgcmVjaXBlcyA9IGF3YWl0IChhd2FpdCBmZXRjaFJlY2lwZXMoKSkucmVjaXBlcztcbiAgICAgIHJldHVybiB7XG4gICAgICAgICAgICBwcm9wczoge1xuICAgICAgICAgICAgICAgICAgcmVjaXBlcyxcbiAgICAgICAgICAgIH1cbiAgICAgIH1cbn1cblxuY29uc3QgVG9wUGFnZTogTmV4dFBhZ2U8UHJvcHM+ID0gKHsgcmVjaXBlcyB9KSA9PiB7XG4gICAgICByZXR1cm4gKFxuICAgICAgICAgICAgPExheW91dD5cbiAgICAgICAgICAgICAgICAgIDxSZWNpcGVMaXN0IHJlY2lwZXM9e3JlY2lwZXN9IC8+XG4gICAgICAgICAgICA8L0xheW91dD5cblxuICAgICAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IFRvcFBhZ2U7XG5cbi8qXG50eXBlIFByb3BzID0ge1xuICByZWNpcGVzOiBSZWNpcGVbXTtcbn07XG5cbmNvbnN0IEhvbWU6IE5leHRQYWdlPFByb3BzPiA9IChwcm9wcykgPT4ge1xuICBjb25zdCB7IHJlY2lwZXMgfSA9IHByb3BzO1xuXG4gIHJldHVybiAoXG4gICAgPGRpdj5cbiAgICAgIDxoMT5NeSBSZWNpcGUgU2l0ZTwvaDE+XG5cbiAgICAgIDx1bD5cblxuZXhwb3J0IGNvbnN0IGdldFN0YXRpY1Byb3BzID0gYXN5bmMgKCkgPT4ge1xuICBjb25zdCByZWNpcGVzID0gYXdhaXQgZ2V0UmVjaXBlcygpO1xuICByZXR1cm4ge1xuICAgIHByb3BzOiB7XG4gICAgICByZWNpcGVzOiByZWNpcGVzLFxuICAgIH0sXG4gIH07XG59O1xuXG5leHBvcnQgZGVmYXVsdCBIb21lO1xuXG4qLyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/index.tsx\n");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdFwiPzU4OGUiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEiLCJmaWxlIjoicmVhY3QuanMiLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdFwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///react\n");

/***/ })

/******/ });