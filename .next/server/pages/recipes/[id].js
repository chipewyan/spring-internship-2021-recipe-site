module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../ssr-module-cache.js');
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
/******/ 	return __webpack_require__(__webpack_require__.s = "./pages/recipes/[id].tsx");
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

/***/ "./pages/recipes/[id].tsx":
/*!********************************!*\
  !*** ./pages/recipes/[id].tsx ***!
  \********************************/
/*! exports provided: getServerSideProps, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"getServerSideProps\", function() { return getServerSideProps; });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _components_Layout__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../components/Layout */ \"./components/Layout.tsx\");\n/* harmony import */ var _api_api__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../api/api */ \"./api/api.ts\");\nvar _jsxFileName = \"/Users/chihiro-t/cookpad/project/spring-internship-2021-recipe-site/pages/recipes/[id].tsx\";\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\n\n\nconst getServerSideProps = async context => {\n  const recipeId = Number(context.query.id);\n  const recipe = await Object(_api_api__WEBPACK_IMPORTED_MODULE_2__[\"fetchRecipe\"])(recipeId);\n  return {\n    props: {\n      recipe\n    }\n  };\n};\n\nconst RecipePage = ({\n  recipe\n}) => {\n  return __jsx(_components_Layout__WEBPACK_IMPORTED_MODULE_1__[\"Layout\"], {\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 24,\n      columnNumber: 9\n    }\n  }, __jsx(\"h1\", {\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 25,\n      columnNumber: 13\n    }\n  }, recipe.title), __jsx(\"img\", {\n    src: recipe.image_url,\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 26,\n      columnNumber: 13\n    }\n  }), __jsx(\"hr\", {\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 27,\n      columnNumber: 13\n    }\n  }), __jsx(\"ul\", {\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 28,\n      columnNumber: 13\n    }\n  }, __jsx(\"li\", {\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 29,\n      columnNumber: 17\n    }\n  }, \"\\u4F5C\\u8005: \", recipe.author.user_name), __jsx(\"li\", {\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 30,\n      columnNumber: 17\n    }\n  }, \"\\u6295\\u7A3F\\u65E5\\u6642: \", recipe.published_at), __jsx(\"li\", {\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 31,\n      columnNumber: 17\n    }\n  }, \"\\u8AAC\\u660E: \", recipe.description)), __jsx(\"hr\", {\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 33,\n      columnNumber: 13\n    }\n  }), __jsx(\"h2\", {\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 34,\n      columnNumber: 13\n    }\n  }, \"\\u6750\\u6599\"), __jsx(\"ul\", {\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 35,\n      columnNumber: 13\n    }\n  }, recipe.ingredients.map(ingredient => __jsx(\"li\", {\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 36,\n      columnNumber: 55\n    }\n  }, ingredient.name, \" (\", ingredient.quantity, \")\"))), __jsx(\"hr\", {\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 38,\n      columnNumber: 13\n    }\n  }), __jsx(\"h2\", {\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 39,\n      columnNumber: 13\n    }\n  }, \"\\u624B\\u9806\"), __jsx(\"ol\", {\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 40,\n      columnNumber: 13\n    }\n  }, recipe.steps.map(step => __jsx(\"li\", {\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 41,\n      columnNumber: 43\n    }\n  }, step))));\n};\n/*\nreturn (\n    <div>\n      <h1>My Recipe Site</h1>\n\n      {recipe && (\n        <main>\n          <h2>{recipe.title}</h2>\n\n          {recipe.image_url && (\n            <img src={recipe.image_url} alt=\"レシピ画像\" width=\"300\" />\n          )}\n\n          <p>{recipe.description}</p>\n\n          <h3>材料</h3>\n          <ol>\n            {recipe.ingredients.map((ing, i) => (\n              <li key={i}>\n                {ing.name} : {ing.quantity}\n              </li>\n            ))}\n          </ol>\n\n          <h3>手順</h3>\n          <ol>\n            {recipe.steps.map((step, i) => (\n              <li key={i}>{step}</li>\n            ))}\n          </ol>\n        </main>\n      )}\n    </div>\n  );\n};\n*/\n\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (RecipePage);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9yZWNpcGVzLy50c3g/YzJlNSJdLCJuYW1lcyI6WyJnZXRTZXJ2ZXJTaWRlUHJvcHMiLCJjb250ZXh0IiwicmVjaXBlSWQiLCJOdW1iZXIiLCJxdWVyeSIsImlkIiwicmVjaXBlIiwiZmV0Y2hSZWNpcGUiLCJwcm9wcyIsIlJlY2lwZVBhZ2UiLCJ0aXRsZSIsImltYWdlX3VybCIsImF1dGhvciIsInVzZXJfbmFtZSIsInB1Ymxpc2hlZF9hdCIsImRlc2NyaXB0aW9uIiwiaW5ncmVkaWVudHMiLCJtYXAiLCJpbmdyZWRpZW50IiwibmFtZSIsInF1YW50aXR5Iiwic3RlcHMiLCJzdGVwIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFFQTtBQUdBO0FBTU8sTUFBTUEsa0JBQTZDLEdBQUcsTUFBT0MsT0FBUCxJQUFtQjtBQUM1RSxRQUFNQyxRQUFRLEdBQUdDLE1BQU0sQ0FBQ0YsT0FBTyxDQUFDRyxLQUFSLENBQWNDLEVBQWYsQ0FBdkI7QUFDQSxRQUFNQyxNQUFNLEdBQUcsTUFBTUMsNERBQVcsQ0FBQ0wsUUFBRCxDQUFoQztBQUNBLFNBQU87QUFDSE0sU0FBSyxFQUFFO0FBQ0hGO0FBREc7QUFESixHQUFQO0FBS0gsQ0FSTTs7QUFVUCxNQUFNRyxVQUEyQixHQUFHLENBQUM7QUFBRUg7QUFBRixDQUFELEtBQWdCO0FBQ2hELFNBQ0ksTUFBQyx5REFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0k7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUFLQSxNQUFNLENBQUNJLEtBQVosQ0FESixFQUVJO0FBQUssT0FBRyxFQUFFSixNQUFNLENBQUNLLFNBQWpCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFGSixFQUdJO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFISixFQUlJO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDSTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHVCQUFTTCxNQUFNLENBQUNNLE1BQVAsQ0FBY0MsU0FBdkIsQ0FESixFQUVJO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUNBQVdQLE1BQU0sQ0FBQ1EsWUFBbEIsQ0FGSixFQUdJO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsdUJBQVNSLE1BQU0sQ0FBQ1MsV0FBaEIsQ0FISixDQUpKLEVBU0k7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQVRKLEVBVUk7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxvQkFWSixFQVdJO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDS1QsTUFBTSxDQUFDVSxXQUFQLENBQW1CQyxHQUFuQixDQUF1QkMsVUFBVSxJQUFJO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FBS0EsVUFBVSxDQUFDQyxJQUFoQixRQUF3QkQsVUFBVSxDQUFDRSxRQUFuQyxNQUFyQyxDQURMLENBWEosRUFjSTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBZEosRUFlSTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLG9CQWZKLEVBZ0JJO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDS2QsTUFBTSxDQUFDZSxLQUFQLENBQWFKLEdBQWIsQ0FBaUJLLElBQUksSUFBSTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQUtBLElBQUwsQ0FBekIsQ0FETCxDQWhCSixDQURKO0FBc0JILENBdkJEO0FBeUJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBRWViLHlFQUFmIiwiZmlsZSI6Ii4vcGFnZXMvcmVjaXBlcy9baWRdLnRzeC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEdldFNlcnZlclNpZGVQcm9wcywgTmV4dFBhZ2UgfSBmcm9tIFwibmV4dFwiO1xuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSBcIm5leHQvcm91dGVyXCI7XG5pbXBvcnQgeyBMYXlvdXQgfSBmcm9tIFwiLi4vLi4vY29tcG9uZW50cy9MYXlvdXRcIlxuXG5pbXBvcnQgeyBSZWNpcGUgfSBmcm9tIFwiLi4vLi4vbGliL3JlY2lwZVwiO1xuaW1wb3J0IHsgZmV0Y2hSZWNpcGUgfSBmcm9tIFwiLi4vLi4vYXBpL2FwaVwiXG5cbnR5cGUgUHJvcHMgPSB7XG4gIHJlY2lwZTogUmVjaXBlO1xufTtcblxuZXhwb3J0IGNvbnN0IGdldFNlcnZlclNpZGVQcm9wczogR2V0U2VydmVyU2lkZVByb3BzPFByb3BzPiA9IGFzeW5jIChjb250ZXh0KSA9PiB7XG4gICAgY29uc3QgcmVjaXBlSWQgPSBOdW1iZXIoY29udGV4dC5xdWVyeS5pZCk7XG4gICAgY29uc3QgcmVjaXBlID0gYXdhaXQgZmV0Y2hSZWNpcGUocmVjaXBlSWQpO1xuICAgIHJldHVybiB7XG4gICAgICAgIHByb3BzOiB7XG4gICAgICAgICAgICByZWNpcGUsXG4gICAgICAgIH1cbiAgICB9XG59XG5cbmNvbnN0IFJlY2lwZVBhZ2U6IE5leHRQYWdlPFByb3BzPiA9ICh7IHJlY2lwZSB9KSA9PiB7XG4gICAgcmV0dXJuIChcbiAgICAgICAgPExheW91dD5cbiAgICAgICAgICAgIDxoMT57cmVjaXBlLnRpdGxlfTwvaDE+XG4gICAgICAgICAgICA8aW1nIHNyYz17cmVjaXBlLmltYWdlX3VybH0gLz5cbiAgICAgICAgICAgIDxociAvPlxuICAgICAgICAgICAgPHVsPlxuICAgICAgICAgICAgICAgIDxsaT7kvZzogIU6IHtyZWNpcGUuYXV0aG9yLnVzZXJfbmFtZX08L2xpPlxuICAgICAgICAgICAgICAgIDxsaT7mipXnqL/ml6XmmYI6IHtyZWNpcGUucHVibGlzaGVkX2F0fTwvbGk+XG4gICAgICAgICAgICAgICAgPGxpPuiqrOaYjjoge3JlY2lwZS5kZXNjcmlwdGlvbn08L2xpPlxuICAgICAgICAgICAgPC91bD5cbiAgICAgICAgICAgIDxociAvPlxuICAgICAgICAgICAgPGgyPuadkOaWmTwvaDI+XG4gICAgICAgICAgICA8dWw+XG4gICAgICAgICAgICAgICAge3JlY2lwZS5pbmdyZWRpZW50cy5tYXAoaW5ncmVkaWVudCA9PiA8bGk+e2luZ3JlZGllbnQubmFtZX0gKHtpbmdyZWRpZW50LnF1YW50aXR5fSk8L2xpPil9XG4gICAgICAgICAgICA8L3VsPlxuICAgICAgICAgICAgPGhyIC8+XG4gICAgICAgICAgICA8aDI+5omL6aCGPC9oMj5cbiAgICAgICAgICAgIDxvbD5cbiAgICAgICAgICAgICAgICB7cmVjaXBlLnN0ZXBzLm1hcChzdGVwID0+IDxsaT57c3RlcH08L2xpPil9XG4gICAgICAgICAgICA8L29sPlxuICAgICAgICA8L0xheW91dD5cbiAgICApXG59XG5cbi8qXG5yZXR1cm4gKFxuICAgIDxkaXY+XG4gICAgICA8aDE+TXkgUmVjaXBlIFNpdGU8L2gxPlxuXG4gICAgICB7cmVjaXBlICYmIChcbiAgICAgICAgPG1haW4+XG4gICAgICAgICAgPGgyPntyZWNpcGUudGl0bGV9PC9oMj5cblxuICAgICAgICAgIHtyZWNpcGUuaW1hZ2VfdXJsICYmIChcbiAgICAgICAgICAgIDxpbWcgc3JjPXtyZWNpcGUuaW1hZ2VfdXJsfSBhbHQ9XCLjg6zjgrfjg5TnlLvlg49cIiB3aWR0aD1cIjMwMFwiIC8+XG4gICAgICAgICAgKX1cblxuICAgICAgICAgIDxwPntyZWNpcGUuZGVzY3JpcHRpb259PC9wPlxuXG4gICAgICAgICAgPGgzPuadkOaWmTwvaDM+XG4gICAgICAgICAgPG9sPlxuICAgICAgICAgICAge3JlY2lwZS5pbmdyZWRpZW50cy5tYXAoKGluZywgaSkgPT4gKFxuICAgICAgICAgICAgICA8bGkga2V5PXtpfT5cbiAgICAgICAgICAgICAgICB7aW5nLm5hbWV9IDoge2luZy5xdWFudGl0eX1cbiAgICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgICkpfVxuICAgICAgICAgIDwvb2w+XG5cbiAgICAgICAgICA8aDM+5omL6aCGPC9oMz5cbiAgICAgICAgICA8b2w+XG4gICAgICAgICAgICB7cmVjaXBlLnN0ZXBzLm1hcCgoc3RlcCwgaSkgPT4gKFxuICAgICAgICAgICAgICA8bGkga2V5PXtpfT57c3RlcH08L2xpPlxuICAgICAgICAgICAgKSl9XG4gICAgICAgICAgPC9vbD5cbiAgICAgICAgPC9tYWluPlxuICAgICAgKX1cbiAgICA8L2Rpdj5cbiAgKTtcbn07XG4qL1xuXG5leHBvcnQgZGVmYXVsdCBSZWNpcGVQYWdlOyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/recipes/[id].tsx\n");

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