/******/ (function(modules) { // webpackBootstrap
/******/ 	// install a JSONP callback for chunk loading
/******/ 	function webpackJsonpCallback(data) {
/******/ 		var chunkIds = data[0];
/******/ 		var moreModules = data[1];
/******/ 		var executeModules = data[2];
/******/
/******/ 		// add "moreModules" to the modules object,
/******/ 		// then flag all "chunkIds" as loaded and fire callback
/******/ 		var moduleId, chunkId, i = 0, resolves = [];
/******/ 		for(;i < chunkIds.length; i++) {
/******/ 			chunkId = chunkIds[i];
/******/ 			if(installedChunks[chunkId]) {
/******/ 				resolves.push(installedChunks[chunkId][0]);
/******/ 			}
/******/ 			installedChunks[chunkId] = 0;
/******/ 		}
/******/ 		for(moduleId in moreModules) {
/******/ 			if(Object.prototype.hasOwnProperty.call(moreModules, moduleId)) {
/******/ 				modules[moduleId] = moreModules[moduleId];
/******/ 			}
/******/ 		}
/******/ 		if(parentJsonpFunction) parentJsonpFunction(data);
/******/
/******/ 		while(resolves.length) {
/******/ 			resolves.shift()();
/******/ 		}
/******/
/******/ 		// add entry modules from loaded chunk to deferred list
/******/ 		deferredModules.push.apply(deferredModules, executeModules || []);
/******/
/******/ 		// run deferred modules when all chunks ready
/******/ 		return checkDeferredModules();
/******/ 	};
/******/ 	function checkDeferredModules() {
/******/ 		var result;
/******/ 		for(var i = 0; i < deferredModules.length; i++) {
/******/ 			var deferredModule = deferredModules[i];
/******/ 			var fulfilled = true;
/******/ 			for(var j = 1; j < deferredModule.length; j++) {
/******/ 				var depId = deferredModule[j];
/******/ 				if(installedChunks[depId] !== 0) fulfilled = false;
/******/ 			}
/******/ 			if(fulfilled) {
/******/ 				deferredModules.splice(i--, 1);
/******/ 				result = __webpack_require__(__webpack_require__.s = deferredModule[0]);
/******/ 			}
/******/ 		}
/******/ 		return result;
/******/ 	}
/******/
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// object to store loaded and loading chunks
/******/ 	// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 	// Promise = chunk loading, 0 = chunk loaded
/******/ 	var installedChunks = {
/******/ 		"app": 0
/******/ 	};
/******/
/******/ 	var deferredModules = [];
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
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
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
/******/ 	var jsonpArray = window["webpackJsonp"] = window["webpackJsonp"] || [];
/******/ 	var oldJsonpFunction = jsonpArray.push.bind(jsonpArray);
/******/ 	jsonpArray.push = webpackJsonpCallback;
/******/ 	jsonpArray = jsonpArray.slice();
/******/ 	for(var i = 0; i < jsonpArray.length; i++) webpackJsonpCallback(jsonpArray[i]);
/******/ 	var parentJsonpFunction = oldJsonpFunction;
/******/
/******/
/******/ 	// add entry module to deferred list
/******/ 	deferredModules.push([0,"vendor"]);
/******/ 	// run deferred modules when ready
/******/ 	return checkDeferredModules();
/******/ })
/************************************************************************/
/******/ ({

/***/ "../../../../frameworks/webapps/startup/node_modules/css-loader/dist/cjs.js!../../../../frameworks/webapps/startup/node_modules/sass-loader/lib/loader.js!./src/jmarroyave/components/uxi/blog/list.scss":
/*!*********************************************************************************************************************************************************************************************************************!*\
  !*** /media/jm/labs/frameworks/webapps/startup/node_modules/css-loader/dist/cjs.js!/media/jm/labs/frameworks/webapps/startup/node_modules/sass-loader/lib/loader.js!./src/jmarroyave/components/uxi/blog/list.scss ***!
  \*********************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../../../../../../frameworks/webapps/startup/node_modules/css-loader/dist/runtime/api.js */ "../../../../frameworks/webapps/startup/node_modules/css-loader/dist/runtime/api.js")(false);
// Module
exports.push([module.i, ".mod-blog-list .post {\n  padding-bottom: 20px; }\n\n.mod-blog-list .post .category {\n  font-size: 0.8em;\n  line-height: 0.9em;\n  font-weight: bold; }\n\n.mod-blog-list .post .title {\n  font-size: 2em;\n  line-height: 1.25em; }\n\n.mod-blog-list .post .date {\n  font-size: 0.75em;\n  line-height: 1.1em; }\n\n.mod-blog-list .post .tags {\n  font-size: 0.8em;\n  line-height: 1.1em; }\n\n.mod-blog-list .post .excerpt {\n  font-size: 1em;\n  line-height: 1.5em; }\n", ""]);



/***/ }),

/***/ "../../../../frameworks/webapps/startup/node_modules/css-loader/dist/cjs.js!../../../../frameworks/webapps/startup/node_modules/sass-loader/lib/loader.js!./src/jmarroyave/components/uxi/blog_post/content.scss":
/*!*****************************************************************************************************************************************************************************************************************************!*\
  !*** /media/jm/labs/frameworks/webapps/startup/node_modules/css-loader/dist/cjs.js!/media/jm/labs/frameworks/webapps/startup/node_modules/sass-loader/lib/loader.js!./src/jmarroyave/components/uxi/blog_post/content.scss ***!
  \*****************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../../../../../../frameworks/webapps/startup/node_modules/css-loader/dist/runtime/api.js */ "../../../../frameworks/webapps/startup/node_modules/css-loader/dist/runtime/api.js")(false);
// Module
exports.push([module.i, ".mod-post-content {\n  font-size: 1.3em;\n  line-height: 1.8em; }\n\n.mod-post-content .date {\n  font-size: 0.8em;\n  line-height: 0.9em;\n  margin-top: -10px;\n  font-weight: bold; }\n\n.mod-post-content .excerpt {\n  font-size: 1em;\n  line-height: 1.1em;\n  font-style: italic; }\n\n.mod-post-content .alert {\n  border: 1px solid black;\n  background-color: RGBA(0, 0, 0, 0.3);\n  padding: 5px;\n  border-radius: 5px;\n  color: white;\n  margin-top: 10px;\n  margin-bottom: 10px; }\n", ""]);



/***/ }),

/***/ "../../../../frameworks/webapps/startup/node_modules/css-loader/dist/cjs.js!../../../../frameworks/webapps/startup/node_modules/sass-loader/lib/loader.js!./src/jmarroyave/components/uxi/core/com_version.scss":
/*!****************************************************************************************************************************************************************************************************************************!*\
  !*** /media/jm/labs/frameworks/webapps/startup/node_modules/css-loader/dist/cjs.js!/media/jm/labs/frameworks/webapps/startup/node_modules/sass-loader/lib/loader.js!./src/jmarroyave/components/uxi/core/com_version.scss ***!
  \****************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../../../../../../frameworks/webapps/startup/node_modules/css-loader/dist/runtime/api.js */ "../../../../frameworks/webapps/startup/node_modules/css-loader/dist/runtime/api.js")(false);
// Module
exports.push([module.i, ".mod-version {\n  width: 100%;\n  background-color: white;\n  padding: 10px; }\n", ""]);



/***/ }),

/***/ "../../../../frameworks/webapps/startup/node_modules/css-loader/dist/cjs.js!../../../../frameworks/webapps/startup/node_modules/sass-loader/lib/loader.js!./src/jmarroyave/components/uxi/core/page/footer.scss":
/*!****************************************************************************************************************************************************************************************************************************!*\
  !*** /media/jm/labs/frameworks/webapps/startup/node_modules/css-loader/dist/cjs.js!/media/jm/labs/frameworks/webapps/startup/node_modules/sass-loader/lib/loader.js!./src/jmarroyave/components/uxi/core/page/footer.scss ***!
  \****************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../../../../../../../frameworks/webapps/startup/node_modules/css-loader/dist/runtime/api.js */ "../../../../frameworks/webapps/startup/node_modules/css-loader/dist/runtime/api.js")(false);
// Module
exports.push([module.i, ".mod-footer {\n  background-color: #555;\n  color: white;\n  padding: 20px 20px 20px 30px; }\n\n.mod-footer a:visited,\n.mod-footer a:link {\n  color: white;\n  text-decoration: none; }\n", ""]);



/***/ }),

/***/ "../../../../frameworks/webapps/startup/node_modules/css-loader/dist/cjs.js!../../../../frameworks/webapps/startup/node_modules/sass-loader/lib/loader.js!./src/jmarroyave/components/uxi/core/whats_hot.scss":
/*!**************************************************************************************************************************************************************************************************************************!*\
  !*** /media/jm/labs/frameworks/webapps/startup/node_modules/css-loader/dist/cjs.js!/media/jm/labs/frameworks/webapps/startup/node_modules/sass-loader/lib/loader.js!./src/jmarroyave/components/uxi/core/whats_hot.scss ***!
  \**************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../../../../../../frameworks/webapps/startup/node_modules/css-loader/dist/runtime/api.js */ "../../../../frameworks/webapps/startup/node_modules/css-loader/dist/runtime/api.js")(false);
// Module
exports.push([module.i, ".mod-whats-hot {\n  text-align: center;\n  font-size: 0.8em; }\n", ""]);



/***/ }),

/***/ "../../../../frameworks/webapps/startup/node_modules/css-loader/dist/cjs.js!../../../../frameworks/webapps/startup/node_modules/sass-loader/lib/loader.js!./src/jmarroyave/components/uxi/cv/content.scss":
/*!**********************************************************************************************************************************************************************************************************************!*\
  !*** /media/jm/labs/frameworks/webapps/startup/node_modules/css-loader/dist/cjs.js!/media/jm/labs/frameworks/webapps/startup/node_modules/sass-loader/lib/loader.js!./src/jmarroyave/components/uxi/cv/content.scss ***!
  \**********************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../../../../../../frameworks/webapps/startup/node_modules/css-loader/dist/runtime/api.js */ "../../../../frameworks/webapps/startup/node_modules/css-loader/dist/runtime/api.js")(false);
// Module
exports.push([module.i, "", ""]);



/***/ }),

/***/ "../../../../frameworks/webapps/startup/node_modules/css-loader/dist/cjs.js!../../../../frameworks/webapps/startup/node_modules/sass-loader/lib/loader.js!./src/jmarroyave/components/uxi/cv/latest_courses.scss":
/*!*****************************************************************************************************************************************************************************************************************************!*\
  !*** /media/jm/labs/frameworks/webapps/startup/node_modules/css-loader/dist/cjs.js!/media/jm/labs/frameworks/webapps/startup/node_modules/sass-loader/lib/loader.js!./src/jmarroyave/components/uxi/cv/latest_courses.scss ***!
  \*****************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../../../../../../frameworks/webapps/startup/node_modules/css-loader/dist/runtime/api.js */ "../../../../frameworks/webapps/startup/node_modules/css-loader/dist/runtime/api.js")(false);
// Module
exports.push([module.i, ".mod-latest-courses {\n  padding-bottom: 30px; }\n\n.mod-latest-courses .course {\n  padding-bottom: 2em; }\n\n.mod-latest-courses .course .header .from {\n  font-size: 1.25em; }\n\n.mod-latest-courses .course .name {\n  font-size: 2.0em;\n  line-height: 1.25em; }\n\n.mod-latest-courses .course .platform {\n  font-size: 0.75em; }\n", ""]);



/***/ }),

/***/ "../../../../frameworks/webapps/startup/node_modules/css-loader/dist/cjs.js!../../../../frameworks/webapps/startup/node_modules/sass-loader/lib/loader.js!./src/jmarroyave/components/uxi/home/hero.scss":
/*!*********************************************************************************************************************************************************************************************************************!*\
  !*** /media/jm/labs/frameworks/webapps/startup/node_modules/css-loader/dist/cjs.js!/media/jm/labs/frameworks/webapps/startup/node_modules/sass-loader/lib/loader.js!./src/jmarroyave/components/uxi/home/hero.scss ***!
  \*********************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../../../../../../frameworks/webapps/startup/node_modules/css-loader/dist/runtime/api.js */ "../../../../frameworks/webapps/startup/node_modules/css-loader/dist/runtime/api.js")(false);
// Module
exports.push([module.i, ".mod-hero {\n  text-align: center;\n  padding-top: 4em;\n  padding-bottom: 4em; }\n\n.mod-hero h1 {\n  font-size: 3em;\n  line-height: 1.25em; }\n\n.mod-hero h2 {\n  font-size: 1.25em;\n  line-height: 1.25em; }\n", ""]);



/***/ }),

/***/ "../../../../frameworks/webapps/startup/node_modules/css-loader/dist/cjs.js!../../../../frameworks/webapps/startup/node_modules/sass-loader/lib/loader.js!./src/jmarroyave/components/uxi/home/recent.scss":
/*!***********************************************************************************************************************************************************************************************************************!*\
  !*** /media/jm/labs/frameworks/webapps/startup/node_modules/css-loader/dist/cjs.js!/media/jm/labs/frameworks/webapps/startup/node_modules/sass-loader/lib/loader.js!./src/jmarroyave/components/uxi/home/recent.scss ***!
  \***********************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../../../../../../frameworks/webapps/startup/node_modules/css-loader/dist/runtime/api.js */ "../../../../frameworks/webapps/startup/node_modules/css-loader/dist/runtime/api.js")(false);
// Module
exports.push([module.i, ".mod-recent {\n  text-align: center; }\n\n.mod-recent h1 {\n  font-size: 1.1em; }\n\n.mod-recent h2 {\n  font-size: 1em; }\n", ""]);



/***/ }),

/***/ "../../../../frameworks/webapps/startup/node_modules/css-loader/dist/cjs.js!../../../../frameworks/webapps/startup/node_modules/sass-loader/lib/loader.js!./src/jmarroyave/components/uxi/kb/android/content.scss":
/*!******************************************************************************************************************************************************************************************************************************!*\
  !*** /media/jm/labs/frameworks/webapps/startup/node_modules/css-loader/dist/cjs.js!/media/jm/labs/frameworks/webapps/startup/node_modules/sass-loader/lib/loader.js!./src/jmarroyave/components/uxi/kb/android/content.scss ***!
  \******************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../../../../../../../frameworks/webapps/startup/node_modules/css-loader/dist/runtime/api.js */ "../../../../frameworks/webapps/startup/node_modules/css-loader/dist/runtime/api.js")(false);
// Module
exports.push([module.i, ".mod-kb-android {\n  font-size: 1.3em;\n  line-height: 1.8em; }\n\n.mod-kb-android .date {\n  font-size: 0.8em;\n  line-height: 0.9em;\n  margin-top: -10px;\n  font-weight: bold; }\n\n.mod-kb-android .excerpt {\n  font-size: 1em;\n  line-height: 1.1em;\n  font-style: italic; }\n\n.mod-kb-android .categories {\n  padding-bottom: 20px; }\n\n.mod-kb-android h1 {\n  font-size: 1.2em;\n  line-height: 1.0em; }\n\n.mod-kb-android .category {\n  font-size: 0.75em;\n  line-height: 1.0em;\n  padding-right: 20px;\n  color: #555;\n  cursor: pointer; }\n\n.mod-kb-android .category.active {\n  font-weight: bold;\n  color: black; }\n\n.mod-kb-android .item {\n  padding-bottom: 1em; }\n\n.mod-kb-android .item .subcat {\n  font-size: 0.6em; }\n\n.mod-kb-android .item .title {\n  font-size: 1em;\n  line-height: 1em; }\n\n.mod-kb-android .item .title .refs {\n  font-size: 0.6em; }\n\n.mod-kb-android .item .description {\n  font-size: 0.75em;\n  line-height: 1.25em; }\n\n.mod-kb-android .item .links {\n  padding: 0px;\n  line-height: 0.8em; }\n\n.mod-kb-android .item span.link {\n  padding: 0px;\n  font-size: 0.75em; }\n\n.mod-kb-android .item .images {\n  padding-top: 10px;\n  padding-left: 20px; }\n\n.mod-kb-android .page_index .page {\n  color: #444;\n  cursor: pointer;\n  padding-right: 10px;\n  font-size: 1em; }\n\n.mod-kb-android .page_index .page.active {\n  color: black;\n  font-weight: bold; }\n\n.mod-kb-android .footer {\n  font-size: 0.75em; }\n", ""]);



/***/ }),

/***/ "../../../../frameworks/webapps/startup/node_modules/css-loader/dist/cjs.js!../../../../frameworks/webapps/startup/node_modules/sass-loader/lib/loader.js!./src/jmarroyave/index.scss":
/*!**************************************************************************************************************************************************************************************************!*\
  !*** /media/jm/labs/frameworks/webapps/startup/node_modules/css-loader/dist/cjs.js!/media/jm/labs/frameworks/webapps/startup/node_modules/sass-loader/lib/loader.js!./src/jmarroyave/index.scss ***!
  \**************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../../../frameworks/webapps/startup/node_modules/css-loader/dist/runtime/api.js */ "../../../../frameworks/webapps/startup/node_modules/css-loader/dist/runtime/api.js")(false);
// Module
exports.push([module.i, "", ""]);



/***/ }),

/***/ "../../../../frameworks/webapps/startup/node_modules/css-loader/dist/cjs.js!../../../../frameworks/webapps/startup/node_modules/sass-loader/lib/loader.js!./src/jmarroyave/themes/grey/0.0.0/uxi/cv/courses.scss":
/*!*****************************************************************************************************************************************************************************************************************************!*\
  !*** /media/jm/labs/frameworks/webapps/startup/node_modules/css-loader/dist/cjs.js!/media/jm/labs/frameworks/webapps/startup/node_modules/sass-loader/lib/loader.js!./src/jmarroyave/themes/grey/0.0.0/uxi/cv/courses.scss ***!
  \*****************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../../../../../../../../frameworks/webapps/startup/node_modules/css-loader/dist/runtime/api.js */ "../../../../frameworks/webapps/startup/node_modules/css-loader/dist/runtime/api.js")(false);
// Module
exports.push([module.i, ".mod-courses-list .course {\n  padding-bottom: 20px; }\n\n.mod-courses-list .course .header .platform {\n  font-size: 0.7em; }\n\n.mod-courses-list .course .name {\n  font-size: 1.1em; }\n\n.mod-courses-list .course .comments {\n  font-size: 0.9em;\n  text-alignment: justify; }\n\n.mod-courses-list .course .from {\n  font-size: 0.8em; }\n", ""]);



/***/ }),

/***/ "../../../../frameworks/webapps/startup/node_modules/css-loader/dist/cjs.js!../../../../frameworks/webapps/startup/node_modules/sass-loader/lib/loader.js!./src/jmarroyave/themes/grey/19.2.1/uxi/cv/courses.scss":
/*!******************************************************************************************************************************************************************************************************************************!*\
  !*** /media/jm/labs/frameworks/webapps/startup/node_modules/css-loader/dist/cjs.js!/media/jm/labs/frameworks/webapps/startup/node_modules/sass-loader/lib/loader.js!./src/jmarroyave/themes/grey/19.2.1/uxi/cv/courses.scss ***!
  \******************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../../../../../../../../frameworks/webapps/startup/node_modules/css-loader/dist/runtime/api.js */ "../../../../frameworks/webapps/startup/node_modules/css-loader/dist/runtime/api.js")(false);
// Module
exports.push([module.i, ".mod-courses-list .course {\n  padding-bottom: 20px; }\n\n.mod-courses-list .course .header .platform {\n  font-size: 0.7em; }\n\n.mod-courses-list .course .name {\n  font-size: 1.1em; }\n\n.mod-courses-list .course .comments {\n  font-size: 0.9em;\n  text-alignment: justify; }\n\n.mod-courses-list .course .from {\n  font-size: 0.8em; }\n", ""]);



/***/ }),

/***/ "../../../../frameworks/webapps/startup/node_modules/css-loader/dist/cjs.js!../../../../frameworks/webapps/startup/node_modules/sass-loader/lib/loader.js!./src/shared/jmarroyave/social_networks.scss":
/*!*******************************************************************************************************************************************************************************************************************!*\
  !*** /media/jm/labs/frameworks/webapps/startup/node_modules/css-loader/dist/cjs.js!/media/jm/labs/frameworks/webapps/startup/node_modules/sass-loader/lib/loader.js!./src/shared/jmarroyave/social_networks.scss ***!
  \*******************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../../../../frameworks/webapps/startup/node_modules/css-loader/dist/runtime/api.js */ "../../../../frameworks/webapps/startup/node_modules/css-loader/dist/runtime/api.js")(false);
// Module
exports.push([module.i, ".mod-social-icons {\n  display: inline-block;\n  text-align: center;\n  margin: 10px 0; }\n\n.mod-social-icons a {\n  font-size: 14px !important;\n  margin-right: 5px; }\n\n.mod-social-icons a:hover {\n  text-decoration: none; }\n\n.mod-social-icons a i {\n  background-color: white;\n  background-position: center center;\n  line-height: 32px;\n  border-radius: 8px;\n  border: 1px solid #a0a0a0;\n  height: 38px;\n  width: 38px;\n  padding-top: 2px; }\n", ""]);



/***/ }),

/***/ "./src/app.js":
/*!********************!*\
  !*** ./src/app.js ***!
  \********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "./node_modules/react/index.js"));

var _root = __webpack_require__(/*! react-hot-loader/root */ "./node_modules/react-hot-loader/root.js");

var _index = _interopRequireDefault(__webpack_require__(/*! jmarroyave/index */ "./src/jmarroyave/index.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

var App =
/*#__PURE__*/
function (_React$Component) {
  _inherits(App, _React$Component);

  function App() {
    _classCallCheck(this, App);

    return _possibleConstructorReturn(this, _getPrototypeOf(App).apply(this, arguments));
  }

  _createClass(App, [{
    key: "render",
    value: function render() {
      return _react.default.createElement(_index.default, null);
    }
  }]);

  return App;
}(_react.default.Component);

var _default = (0, _root.hot)(App);

exports.default = _default;

/***/ }),

/***/ "./src/core/app/api.js":
/*!*****************************!*\
  !*** ./src/core/app/api.js ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _server = _interopRequireDefault(__webpack_require__(/*! core/app/server */ "./src/core/app/server.js"));

var _components = _interopRequireDefault(__webpack_require__(/*! core/app/components */ "./src/core/app/components.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var API =
/*#__PURE__*/
function () {
  function API(props) {
    _classCallCheck(this, API);

    this.error = "";
    this.current_component = props.current_component;
    this.components = props.components;
    this.local = props.local;
    this.title = props.title;
    this.debug = props.debug;
    this.server = new _server.default({
      debug: this.debug,
      local: this.local
    });
  }

  _createClass(API, [{
    key: "getError",
    value: function getError() {
      return this.error;
    }
  }, {
    key: "setError",
    value: function setError(err) {
      this.error += "\n" + err;
    }
  }, {
    key: "getComponentsVersion",
    value: function getComponentsVersion() {
      return this.current_component;
    }
  }, {
    key: "setComponentsVersion",
    value: function setComponentsVersion(id) {
      var family, version;
      var data = this.components;
      var item = data.find(function (item) {
        return item.id == id ? item : null;
      });
      this.current_component = {
        id: item.id,
        family: item.family,
        version: item.version
      };
    }
  }]);

  return API;
}();

var _default = API;
exports.default = _default;

/***/ }),

/***/ "./src/core/app/components.js":
/*!************************************!*\
  !*** ./src/core/app/components.js ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var Components =
/*#__PURE__*/
function () {
  function Components() {
    _classCallCheck(this, Components);
  }

  _createClass(Components, [{
    key: "getCurrentVersion",
    value: function getCurrentVersion() {
      return window.__api.getComponentsVersion();
    }
  }, {
    key: "getResolvedVersion",
    value: function getResolvedVersion(index, title) {
      var conf = window.__api.getComponentsVersion();

      var family = conf.family;
      var version = conf.version;
      var Control; //console.debug('Components: resolving', title, family, version.toString());

      var controls = index.filter(function (item) {
        return item.family == family ? item : null;
      }).sort(function (a, b) {
        if (a.version[0] == b.version[0]) {
          return a.version[0] > b.version[0] ? -1 : 1;
        }

        if (a.version[1] == b.version[1]) {
          return a.version[1] > b.version[1] ? -1 : 1;
        }

        if (a.version[2] == b.version[2]) {
          return a.version[2] > b.version[2] ? -1 : 1;
        }
      });

      if (controls.length > 0) {
        Control = controls.find(function (item) {
          return JSON.stringify(version) == JSON.stringify(item.version) ? item : null;
        });

        if (Control != null) {//console.debug('Components: resolve', 'exact version');
        } else {
          // Major, Minor, Revision
          var ver = version.slice(0);
          var controlsMajor;

          for (var major = ver[0]; major >= 0; major--) {
            controlsMajor = controls.filter(function (item) {
              return item.version[0] == major ? item : null;
            });

            if (controlsMajor.length > 0) {
              if (major != version[0]) {
                ver[0] = major;
                ver[1] = controlsMajor[0].version[1];
                ver[2] = controlsMajor[0].version[2];
              }

              break;
            }
          } //console.log(controlsMajor, version, ver);


          var controlsMinor;

          for (var minor = ver[1]; minor >= 0; minor--) {
            controlsMinor = controlsMajor.filter(function (item) {
              return item.version[1] == minor ? item : null;
            });

            if (controlsMinor.length > 0) {
              if (minor != version[1]) {
                ver[1] = minor;
                ver[2] = controlsMinor[0].version[2];
              }

              break;
            }
          } //console.log(controlsMinor, version, ver);


          for (var rev = ver[2]; rev >= 0; rev--) {
            var controlsRev = controlsMinor.filter(function (item) {
              return item.version[2] == rev ? item : null;
            });

            if (controlsRev.length > 0) {
              Control = controlsRev[0];
              break;
            }
          }
        }
      }

      if (Control == null) {
        Control = index[0];
        console.debug('Components: resolve', '[0]', title, index, family, version.toString(), controls);
      }

      if (Control == null || Control.control == null) {
        console.error("Component Configuration", title, family, version.toString(), index);
      }

      return Control;
    }
  }, {
    key: "resolve",
    value: function resolve(index, title) {
      var Control = this.getResolvedVersion(index, title);
      return Control.control;
    }
  }]);

  return Components;
}();

window.__components = new Components();
var _default = Components;
exports.default = _default;

/***/ }),

/***/ "./src/core/app/server.js":
/*!********************************!*\
  !*** ./src/core/app/server.js ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _axios = _interopRequireDefault(__webpack_require__(/*! axios */ "./node_modules/axios/index.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var Server =
/*#__PURE__*/
function () {
  function Server(props) {
    _classCallCheck(this, Server);

    this.onStartLoading = null;
    this.onStopLoading = null;
    this.onError = null;
    var connections = [{
      protocol: 'http',
      server: 'data-server',
      path: '/data'
    }, {
      protocol: 'https',
      server: 'jmarroyave-search-backend.herokuapp.com',
      path: ''
    }, {
      protocol: 'https',
      server: 'jmarroyave-data-server.herokuapp.com',
      path: ''
    }, {
      protocol: document.location.protocol.replace(":", ""),
      server: document.location.hostname,
      path: '/data'
    }];
    var current = props && props.local == false ? connections[2] : connections[3];
    this.serverURI = current.server == '' ? current.path : "".concat(current.protocol, "://").concat(current.server).concat(current.path);
    this.debug = !props || props.debug ? true : false; //console.info("data-server", this.serverURI);
  }

  _createClass(Server, [{
    key: "triggerOnStartLoading",
    value: function triggerOnStartLoading() {
      if (this.onStartLoading) {
        this.onStartLoading();
      }
    }
  }, {
    key: "triggerOnStopLoading",
    value: function triggerOnStopLoading() {
      if (this.onStopLoading) this.onStopLoading();
    }
  }, {
    key: "triggerOnError",
    value: function triggerOnError(err) {
      if (this.onError) this.onError(err);
    }
  }, {
    key: "exec",
    value: function exec(method, uri, params, config, callback, callback_err) {
      var _this = this;

      var $this = this;
      var url = uri.indexOf("http") == 0 || uri.indexOf(".") == 0 ? uri : this.serverURI + uri;
      var p;
      this.triggerOnStartLoading();
      var timeout = 60 * 1000;

      if (method === 'get') {
        p = _axios.default.get(url, {
          params: params,
          timeout: config && config.timeout ? config.timeout : timeout
        });
      } else {
        p = _axios.default.post(url, params, {
          timeout: config && config.timeout ? config.timeout : timeout
        });
      }

      if ($this.debug) {
        console.debug("SRV", method.toUpperCase(), uri, params);
      }

      p.then(function (response) {
        if ($this.debug) {
          console.debug("SRV", method.toUpperCase(), uri, params, 'Response', response);
        }

        if (callback) callback(response.data);
        $this.triggerOnStopLoading();
      }).catch(function (err) {
        if ($this.debug) {
          console.debug("SRV", method.toUpperCase(), uri, params, "ERROR", err);
        }

        _this.triggerOnError(err);

        if (callback_err) {
          callback_err(err);
        }

        $this.triggerOnStopLoading();
      });
    }
  }, {
    key: "getp",
    value: function getp(uri, params) {
      var $this = this;
      return new Promise(function (resolve, reject) {
        $this.get(uri, params, function (data) {
          resolve(data);
        });
      });
    }
  }, {
    key: "get",
    value: function get(uri, params, callback) {
      if (params.params) params = params.params;
      this.exec('get', uri, params, {}, callback);
    }
  }, {
    key: "getLong",
    value: function getLong(uri, params, timeout, callback, callback_err) {
      if (params.params) params = params.params;
      this.exec('get', uri, params, {
        timeout: timeout
      }, callback, callback_err);
    }
  }, {
    key: "post",
    value: function post(uri, params, callback, callback_err) {
      if (params.params) params = params.params;
      this.exec('post', uri, params, {}, callback, callback_err);
    }
  }, {
    key: "fetch",
    value: function fetch(url, params, callback, callback_err) {
      var _this2 = this;

      if (params.params) params = params.params;
      var $this = this;
      this.triggerOnStartLoading();

      _axios.default.get(url, {
        params: params
      }).then(function (response) {
        if ($this.debug) {
          console.debug("SRV", 'FETCH:', url, params, 'Server Response:', response);
        }

        if (callback) {
          callback(response.data);
        }

        $this.triggerOnStopLoading();
      }).catch(function (err) {
        if ($this.debug) {
          console.debug("SRV", 'FETCH:', url, params, 'Server Error:', err);
        }

        $this.triggerOnStopLoading();

        _this2.triggerOnError(err);
      });
    }
  }]);

  return Server;
}();

var _default = Server;
exports.default = _default;

/***/ }),

/***/ "./src/core/components/component.js":
/*!******************************************!*\
  !*** ./src/core/components/component.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "./node_modules/react/index.js"));

var _error = _interopRequireDefault(__webpack_require__(/*! core/components/error */ "./src/core/components/error.js"));

var _loading = _interopRequireDefault(__webpack_require__(/*! core/ui/loading */ "./src/core/ui/loading.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

var component = function component(ModuleComponent) {
  return (
    /*#__PURE__*/
    function (_React$Component) {
      _inherits(_class, _React$Component);

      function _class() {
        _classCallCheck(this, _class);

        return _possibleConstructorReturn(this, _getPrototypeOf(_class).apply(this, arguments));
      }

      _createClass(_class, [{
        key: "render",
        value: function render() {
          var title = "title" in this.props ? this.props.title : null;
          var ph = "placeholder" in this.props ? this.props.placeholder : {};
          var phW = ph.width ? ph.width : '100%';
          var phH = ph.height ? ph.height : '250';
          var loading = false;

          if (this.props.check_data !== false && "data" in this.props) {
            if (!this.props.data || this.props.data == null) {
              loading = true;
            }
          }

          return _react.default.createElement(_error.default, {
            from: title,
            style: {
              width: '100%'
            }
          }, loading && _react.default.createElement(_loading.default, null), !loading && _react.default.createElement(ModuleComponent, this.props));
        }
      }]);

      return _class;
    }(_react.default.Component)
  );
};

var _default = component;
exports.default = _default;

/***/ }),

/***/ "./src/core/components/date.js":
/*!*************************************!*\
  !*** ./src/core/components/date.js ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "./node_modules/react/index.js"));

var _ui_component = _interopRequireDefault(__webpack_require__(/*! core/components/ui_component */ "./src/core/components/ui_component.js"));

var _javascriptTimeAgo = _interopRequireDefault(__webpack_require__(/*! javascript-time-ago */ "./node_modules/javascript-time-ago/index.js"));

var _en = _interopRequireDefault(__webpack_require__(/*! javascript-time-ago/locale/en */ "./node_modules/javascript-time-ago/locale/en/index.js"));

var _es = _interopRequireDefault(__webpack_require__(/*! javascript-time-ago/locale/es */ "./node_modules/javascript-time-ago/locale/es/index.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

var UIDate =
/*#__PURE__*/
function (_UIComponent) {
  _inherits(UIDate, _UIComponent);

  function UIDate() {
    var _this;

    _classCallCheck(this, UIDate);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(UIDate).call(this));
    _this.state = {};
    return _this;
  }

  _createClass(UIDate, [{
    key: "getDefaults",
    value: function getDefaults() {
      var defaults = {
        className: ''
      };
      return defaults;
    }
  }, {
    key: "render",
    value: function render() {
      var timeAgo;
      var lang = "lang" in this.props ? this.props.lang : "en";

      switch (lang) {
        case "es":
          _javascriptTimeAgo.default.addLocale(_es.default);

          timeAgo = new _javascriptTimeAgo.default('es-US');
          break;

        default:
          _javascriptTimeAgo.default.addLocale(_en.default);

          timeAgo = new _javascriptTimeAgo.default('en-US');
      }

      var date;
      var str;

      try {
        var value = this.props.value;

        if (!value || value == null || value === '' || value.length == 0) {
          str = '';
        } else {
          if (value instanceof Date) {
            date = new Date(value);
          } else {
            var num = Number(value);

            if (Number.isInteger(num)) {
              date = new Date(num);
            } else {
              date = new Date(value);
            }
          }

          str = timeAgo.format(date, 'twitter');
        }
      } catch (ex) {
        str = this.props.value;
      }

      return _react.default.createElement("span", {
        className: this.state.className
      }, str);
    }
  }]);

  return UIDate;
}(_ui_component.default);

var _default = UIDate;
exports.default = _default;

/***/ }),

/***/ "./src/core/components/error.js":
/*!**************************************!*\
  !*** ./src/core/components/error.js ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "./node_modules/react/index.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

var ErrorBoundary =
/*#__PURE__*/
function (_React$Component) {
  _inherits(ErrorBoundary, _React$Component);

  function ErrorBoundary(props) {
    var _this;

    _classCallCheck(this, ErrorBoundary);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(ErrorBoundary).call(this, props));
    _this.state = {
      hasError: false,
      errors: []
    };
    return _this;
  }

  _createClass(ErrorBoundary, [{
    key: "componentDidCatch",
    value: function componentDidCatch(error, info) {
      var errors = this.state.errors; //console.debug(error);

      errors.push(error);
      this.setState({
        hasError: true,
        errors: errors
      });
      if (window.__api) window.__api.setError(errors.toString());
    }
  }, {
    key: "render",
    value: function render() {
      var ref = this.props.from ? this.props.from : "-";
      var errors = this.state.errors;
      var key = 0;

      if (this.state.hasError) {
        return _react.default.createElement("div", {
          style: {
            color: 'red',
            margin: '0px',
            padding: '0px',
            border: '1px solid red'
          }
        }, _react.default.createElement("div", {
          style: {
            fontSize: '1.2em'
          }
        }, _react.default.createElement("b", null, "Error in components")), _react.default.createElement("div", {
          style: {
            fontSize: '0.9em'
          }
        }, "Reference: ", ref), _react.default.createElement("hr", null), errors.map(function (e) {
          return _react.default.createElement("div", {
            key: key++,
            style: {
              fontSize: '0.8em'
            }
          }, e.toString());
        }));
      }

      return this.props.children;
    }
  }]);

  return ErrorBoundary;
}(_react.default.Component);

var _default = ErrorBoundary;
exports.default = _default;

/***/ }),

/***/ "./src/core/components/layout/section.js":
/*!***********************************************!*\
  !*** ./src/core/components/layout/section.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "./node_modules/react/index.js"));

var _styles = __webpack_require__(/*! @material-ui/core/styles */ "./node_modules/@material-ui/core/styles/index.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

var styles = function styles(theme) {
  return {
    root: {
      width: '100%',
      boxSizing: 'border-box',
      padding: '16px'
    }
  };
};

var LayoutSection =
/*#__PURE__*/
function (_React$Component) {
  _inherits(LayoutSection, _React$Component);

  function LayoutSection() {
    _classCallCheck(this, LayoutSection);

    return _possibleConstructorReturn(this, _getPrototypeOf(LayoutSection).apply(this, arguments));
  }

  _createClass(LayoutSection, [{
    key: "render",
    value: function render() {
      var classes = this.props.classes; //const height = ("height" in this.props) ? this.props.height : '30px';

      var color = "color" in this.props ? this.props.color : 'white';
      return _react.default.createElement("div", {
        className: classes.root,
        style: {
          backgroundColor: color
        }
      }, this.props.children);
    }
  }]);

  return LayoutSection;
}(_react.default.Component);

var _default = (0, _styles.withStyles)(styles)(LayoutSection);

exports.default = _default;

/***/ }),

/***/ "./src/core/components/loading.js":
/*!****************************************!*\
  !*** ./src/core/components/loading.js ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "./node_modules/react/index.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

var Component =
/*#__PURE__*/
function (_React$Component) {
  _inherits(Component, _React$Component);

  function Component() {
    _classCallCheck(this, Component);

    return _possibleConstructorReturn(this, _getPrototypeOf(Component).apply(this, arguments));
  }

  _createClass(Component, [{
    key: "render",
    value: function render() {
      return _react.default.createElement("div", {
        style: {
          zIndex: 9999,
          position: 'absolute',
          top: '0px',
          right: '0px',
          left: '0px',
          bottom: '0px',
          backgroundColor: '#00000060'
        }
      });
    }
  }]);

  return Component;
}(_react.default.Component);

var _default = Component;
exports.default = _default;

/***/ }),

/***/ "./src/core/components/mockup/block.js":
/*!*********************************************!*\
  !*** ./src/core/components/mockup/block.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "./node_modules/react/index.js"));

var _styles = __webpack_require__(/*! @material-ui/core/styles */ "./node_modules/@material-ui/core/styles/index.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

var styles = function styles(theme) {
  return {
    root: {
      width: '100%',
      border: '1px dashed gray',
      backgroundColor: '#e0e0e066',
      textAlign: 'center',
      color: 'black',
      fontSize: '1.1rem',
      fontWeight: 'bold',
      paddingTop: '10px',
      boxSizing: 'border-box'
    }
  };
};

var MockupBlock =
/*#__PURE__*/
function (_React$Component) {
  _inherits(MockupBlock, _React$Component);

  function MockupBlock() {
    _classCallCheck(this, MockupBlock);

    return _possibleConstructorReturn(this, _getPrototypeOf(MockupBlock).apply(this, arguments));
  }

  _createClass(MockupBlock, [{
    key: "render",
    value: function render() {
      var title = this.props.title ? this.props.title : 'MOCK BLOCK';
      var classes = this.props.classes;
      var height = this.props.height ? this.props.height : '30px';
      return _react.default.createElement("div", {
        className: classes.root,
        style: {
          height: height,
          width: '100%'
        }
      }, title);
    }
  }]);

  return MockupBlock;
}(_react.default.Component);

var _default = (0, _styles.withStyles)(styles)(MockupBlock);

exports.default = _default;

/***/ }),

/***/ "./src/core/components/ui_component.js":
/*!*********************************************!*\
  !*** ./src/core/components/ui_component.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "./node_modules/react/index.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

var UIComponent =
/*#__PURE__*/
function (_React$Component) {
  _inherits(UIComponent, _React$Component);

  function UIComponent() {
    _classCallCheck(this, UIComponent);

    return _possibleConstructorReturn(this, _getPrototypeOf(UIComponent).apply(this, arguments));
  }

  _createClass(UIComponent, [{
    key: "getDefaults",
    value: function getDefaults() {}
  }, {
    key: "initUI",
    value: function initUI() {
      var defaults = this.getDefaults();

      for (var def in defaults) {
        this.state[def] = this.props[def] ? this.props[def] : defaults[def];
      }
    }
  }, {
    key: "componentWillMount",
    value: function componentWillMount() {
      this.initUI();
    }
  }, {
    key: "render",
    value: function render() {
      return "";
    }
  }]);

  return UIComponent;
}(_react.default.Component);

var _default = UIComponent;
exports.default = _default;

/***/ }),

/***/ "./src/core/ui/app.js":
/*!****************************!*\
  !*** ./src/core/ui/app.js ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "./node_modules/react/index.js"));

var _error = _interopRequireDefault(__webpack_require__(/*! core/components/error */ "./src/core/components/error.js"));

var _drawer = _interopRequireDefault(__webpack_require__(/*! core/ui/drawer */ "./src/core/ui/drawer.js"));

var _toolbar = _interopRequireDefault(__webpack_require__(/*! core/ui/toolbar */ "./src/core/ui/toolbar.js"));

var _styles = __webpack_require__(/*! @material-ui/core/styles */ "./node_modules/@material-ui/core/styles/index.js");

var _CssBaseline = _interopRequireDefault(__webpack_require__(/*! @material-ui/core/CssBaseline */ "./node_modules/@material-ui/core/CssBaseline/index.js"));

var _AppBar = _interopRequireDefault(__webpack_require__(/*! @material-ui/core/AppBar */ "./node_modules/@material-ui/core/AppBar/index.js"));

var _reactHelmet = _interopRequireDefault(__webpack_require__(/*! react-helmet */ "./node_modules/react-helmet/lib/Helmet.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var styles = function styles(theme) {
  return {
    appBarSpacer: _objectSpread({}, theme.mixins.toolbar),
    content: {
      boxSizing: 'border-box',
      margin: 0,
      flexGrow: 1,
      padding: 0,
      paddingTop: theme.spacing.unit * 2,
      height: '100vh',
      overflow: 'auto',
      width: '100%'
    }
  };
};

var App =
/*#__PURE__*/
function (_React$Component) {
  _inherits(App, _React$Component);

  function App() {
    var _this;

    _classCallCheck(this, App);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(App).call(this));
    _this.state = {
      drawerOpen: false
    };
    _this.onDrawerOpenClick = _this.onDrawerOpenClick.bind(_assertThisInitialized(_this));
    _this.onDrawerCloseClick = _this.onDrawerCloseClick.bind(_assertThisInitialized(_this));
    return _this;
  }

  _createClass(App, [{
    key: "onDrawerOpenClick",
    value: function onDrawerOpenClick() {
      this.setState({
        drawerOpen: true
      });
    }
  }, {
    key: "onDrawerCloseClick",
    value: function onDrawerCloseClick() {
      this.setState({
        drawerOpen: false
      });
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props = this.props,
          theme = _this$props.theme,
          classes = _this$props.classes,
          nav = _this$props.nav,
          children = _this$props.children,
          title = _this$props.title,
          page_title = _this$props.page_title,
          drawer = _this$props.drawer,
          notifications = _this$props.notifications;
      drawer = drawer === false ? false : true;
      notifications = notifications === false ? false : notifications ? notifications : [];
      return _react.default.createElement(_styles.MuiThemeProvider, {
        theme: theme
      }, _react.default.createElement("div", {
        style: {
          width: '100%'
        }
      }, _react.default.createElement(_error.default, {
        from: "/core/ui/app"
      }, _react.default.createElement(_reactHelmet.default, null, _react.default.createElement("title", null, page_title)), _react.default.createElement(_CssBaseline.default, null), _react.default.createElement(_AppBar.default, {
        position: "fixed"
      }, _react.default.createElement(_toolbar.default, {
        title: title,
        nav: nav,
        drawerOpen: this.state.drawerOpen,
        onDrawerOpenClick: this.onDrawerOpenClick,
        notifications: notifications,
        drawer: drawer
      })), drawer && _react.default.createElement(_drawer.default, {
        nav: nav,
        open: this.state.drawerOpen,
        onDrawerCloseClick: this.onDrawerCloseClick
      }), _react.default.createElement("div", {
        className: classes.content
      }, _react.default.createElement("div", {
        className: classes.appBarSpacer,
        style: {
          width: '100%'
        }
      }), _react.default.createElement(_error.default, {
        from: "/core/ui/app/children"
      }, children)))));
    }
  }]);

  return App;
}(_react.default.Component);

var _default = (0, _styles.withStyles)(styles)(App);

exports.default = _default;

/***/ }),

/***/ "./src/core/ui/data.js":
/*!*****************************!*\
  !*** ./src/core/ui/data.js ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "./node_modules/react/index.js"));

var _styles = __webpack_require__(/*! @material-ui/core/styles */ "./node_modules/@material-ui/core/styles/index.js");

var _Table = _interopRequireDefault(__webpack_require__(/*! @material-ui/core/Table */ "./node_modules/@material-ui/core/Table/index.js"));

var _TableBody = _interopRequireDefault(__webpack_require__(/*! @material-ui/core/TableBody */ "./node_modules/@material-ui/core/TableBody/index.js"));

var _TableCell = _interopRequireDefault(__webpack_require__(/*! @material-ui/core/TableCell */ "./node_modules/@material-ui/core/TableCell/index.js"));

var _TableHead = _interopRequireDefault(__webpack_require__(/*! @material-ui/core/TableHead */ "./node_modules/@material-ui/core/TableHead/index.js"));

var _TableRow = _interopRequireDefault(__webpack_require__(/*! @material-ui/core/TableRow */ "./node_modules/@material-ui/core/TableRow/index.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

var styles = function styles(theme) {
  return {
    row: {
      '&:nth-of-type(odd)': {
        backgroundColor: theme.palette.background.default
      }
    }
  };
};

var Data =
/*#__PURE__*/
function (_React$Component) {
  _inherits(Data, _React$Component);

  function Data() {
    _classCallCheck(this, Data);

    return _possibleConstructorReturn(this, _getPrototypeOf(Data).call(this));
  }

  _createClass(Data, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          hidden = _this$props.hidden,
          headers = _this$props.headers,
          classes = _this$props.classes,
          data = _this$props.data,
          style = _this$props.style;
      var key = 0;
      headers = headers === false ? headers : true;
      hidden = hidden ? hidden : [];
      if (!data || data.length === 0) return _react.default.createElement("div", null, "No data");
      var headersCols = Object.keys(data[0]); //console.log(hidden, headersCols);

      return _react.default.createElement(_Table.default, {
        style: style
      }, headers && _react.default.createElement(_TableHead.default, null, _react.default.createElement(_TableRow.default, null, headersCols.map(function (item) {
        return _react.default.createElement(_TableCell.default, {
          key: key++,
          style: {
            padding: '4px'
          }
        }, item);
      }))), _react.default.createElement(_TableBody.default, null, data.map(function (row) {
        return _react.default.createElement(_TableRow.default, {
          key: key++,
          className: classes.row
        }, headersCols.map(function (cell) {
          return hidden.indexOf(cell) === -1 ? _react.default.createElement(_TableCell.default, {
            style: {
              padding: '4px'
            },
            key: key++
          }, row[cell]) : "";
        }));
      })));
    }
  }]);

  return Data;
}(_react.default.Component);

var _default = (0, _styles.withStyles)(styles)(Data);

exports.default = _default;

/***/ }),

/***/ "./src/core/ui/drawer.js":
/*!*******************************!*\
  !*** ./src/core/ui/drawer.js ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "./node_modules/react/index.js"));

var _classnames = _interopRequireDefault(__webpack_require__(/*! classnames */ "./node_modules/classnames/index.js"));

var _reactRouterDom = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/es/index.js");

var _icon = _interopRequireDefault(__webpack_require__(/*! core/ui/icon */ "./src/core/ui/icon.js"));

var _styles = __webpack_require__(/*! @material-ui/core/styles */ "./node_modules/@material-ui/core/styles/index.js");

var _Drawer = _interopRequireDefault(__webpack_require__(/*! @material-ui/core/Drawer */ "./node_modules/@material-ui/core/Drawer/index.js"));

var _IconButton = _interopRequireDefault(__webpack_require__(/*! @material-ui/core/IconButton */ "./node_modules/@material-ui/core/IconButton/index.js"));

var _ChevronLeft = _interopRequireDefault(__webpack_require__(/*! @material-ui/icons/ChevronLeft */ "./node_modules/@material-ui/icons/ChevronLeft.js"));

var _List = _interopRequireDefault(__webpack_require__(/*! @material-ui/core/List */ "./node_modules/@material-ui/core/List/index.js"));

var _Divider = _interopRequireDefault(__webpack_require__(/*! @material-ui/core/Divider */ "./node_modules/@material-ui/core/Divider/index.js"));

var _ListItem = _interopRequireDefault(__webpack_require__(/*! @material-ui/core/ListItem */ "./node_modules/@material-ui/core/ListItem/index.js"));

var _ListItemIcon = _interopRequireDefault(__webpack_require__(/*! @material-ui/core/ListItemIcon */ "./node_modules/@material-ui/core/ListItemIcon/index.js"));

var _ListItemText = _interopRequireDefault(__webpack_require__(/*! @material-ui/core/ListItemText */ "./node_modules/@material-ui/core/ListItemText/index.js"));

var _ListSubheader = _interopRequireDefault(__webpack_require__(/*! @material-ui/core/ListSubheader */ "./node_modules/@material-ui/core/ListSubheader/index.js"));

var _Dashboard = _interopRequireDefault(__webpack_require__(/*! @material-ui/icons/Dashboard */ "./node_modules/@material-ui/icons/Dashboard.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var drawerWidth = 240;

var styles = function styles(theme) {
  return {
    paper: {
      position: 'relative',
      whiteSpace: 'nowrap',
      width: drawerWidth,
      transition: theme.transitions.create('width', {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.enteringScreen
      })
    },
    paperClose: _defineProperty({
      overflowX: 'hidden',
      transition: theme.transitions.create('width', {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen
      }),
      width: theme.spacing.unit * 7
    }, theme.breakpoints.up('sm'), {
      width: theme.spacing.unit * 9
    }),
    toolbarIcon: _objectSpread({
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'flex-end',
      padding: '0 8px'
    }, theme.mixins.toolbar)
  };
};

var Drawer =
/*#__PURE__*/
function (_React$Component) {
  _inherits(Drawer, _React$Component);

  function Drawer() {
    var _this;

    _classCallCheck(this, Drawer);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(Drawer).call(this));
    _this.handleDrawerClose = _this.handleDrawerClose.bind(_assertThisInitialized(_this));
    return _this;
  }

  _createClass(Drawer, [{
    key: "handleDrawerClose",
    value: function handleDrawerClose() {
      if (this.props.onDrawerCloseClick) {
        this.props.onDrawerCloseClick();
      }
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props = this.props,
          classes = _this$props.classes,
          nav = _this$props.nav,
          open = _this$props.open;
      var navDrawer = nav && nav.options ? nav.options.filter(function (item) {
        return item.showInDrawer ? item : null;
      }) : [];
      var options = this.getOptions(navDrawer);
      return _react.default.createElement("div", {
        style: {
          width: '100%'
        }
      }, _react.default.createElement(_Drawer.default, {
        classes: {
          paper: (0, _classnames.default)(classes.paper, !open && classes.paperClose)
        },
        open: open,
        onClose: this.handleDrawerClose
      }, _react.default.createElement("div", {
        className: classes.toolbarIcon
      }, _react.default.createElement(_IconButton.default, {
        onClick: this.handleDrawerClose
      }, _react.default.createElement(_ChevronLeft.default, null))), _react.default.createElement(_Divider.default, null), _react.default.createElement(_List.default, null, options.map(function (item) {
        return item;
      }))));
    }
  }, {
    key: "getOptions",
    value: function getOptions(nav) {
      var key = 0;
      var options = [];

      for (var i = 0; i < nav.length; i++) {
        var item = nav[i];

        var opt = _react.default.createElement(_reactRouterDom.Link, {
          key: key++,
          to: item.route,
          onClick: this.handleDrawerClose
        }, _react.default.createElement(_ListItem.default, {
          button: true
        }, _react.default.createElement(_ListItemIcon.default, null, _react.default.createElement(_icon.default, {
          id: item.icon
        })), _react.default.createElement(_ListItemText.default, {
          primary: item.name
        })));

        options.push(opt);
      }

      return options;
    }
  }]);

  return Drawer;
}(_react.default.Component);

var _default = (0, _styles.withStyles)(styles)(Drawer);

exports.default = _default;

/***/ }),

/***/ "./src/core/ui/icon.js":
/*!*****************************!*\
  !*** ./src/core/ui/icon.js ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "./node_modules/react/index.js"));

var _Send = _interopRequireDefault(__webpack_require__(/*! @material-ui/icons/Send */ "./node_modules/@material-ui/icons/Send.js"));

var _Reply = _interopRequireDefault(__webpack_require__(/*! @material-ui/icons/Reply */ "./node_modules/@material-ui/icons/Reply.js"));

var _ReplyAll = _interopRequireDefault(__webpack_require__(/*! @material-ui/icons/ReplyAll */ "./node_modules/@material-ui/icons/ReplyAll.js"));

var _Forward = _interopRequireDefault(__webpack_require__(/*! @material-ui/icons/Forward */ "./node_modules/@material-ui/icons/Forward.js"));

var _Drafts = _interopRequireDefault(__webpack_require__(/*! @material-ui/icons/Drafts */ "./node_modules/@material-ui/icons/Drafts.js"));

var _Cancel = _interopRequireDefault(__webpack_require__(/*! @material-ui/icons/Cancel */ "./node_modules/@material-ui/icons/Cancel.js"));

var _AttachFile = _interopRequireDefault(__webpack_require__(/*! @material-ui/icons/AttachFile */ "./node_modules/@material-ui/icons/AttachFile.js"));

var _Archive = _interopRequireDefault(__webpack_require__(/*! @material-ui/icons/Archive */ "./node_modules/@material-ui/icons/Archive.js"));

var _Delete = _interopRequireDefault(__webpack_require__(/*! @material-ui/icons/Delete */ "./node_modules/@material-ui/icons/Delete.js"));

var _BugReport = _interopRequireDefault(__webpack_require__(/*! @material-ui/icons/BugReport */ "./node_modules/@material-ui/icons/BugReport.js"));

var _Contacts = _interopRequireDefault(__webpack_require__(/*! @material-ui/icons/Contacts */ "./node_modules/@material-ui/icons/Contacts.js"));

var _Done = _interopRequireDefault(__webpack_require__(/*! @material-ui/icons/Done */ "./node_modules/@material-ui/icons/Done.js"));

var _Home = _interopRequireDefault(__webpack_require__(/*! @material-ui/icons/Home */ "./node_modules/@material-ui/icons/Home.js"));

var _Search = _interopRequireDefault(__webpack_require__(/*! @material-ui/icons/Search */ "./node_modules/@material-ui/icons/Search.js"));

var _Notifications = _interopRequireDefault(__webpack_require__(/*! @material-ui/icons/Notifications */ "./node_modules/@material-ui/icons/Notifications.js"));

var _Email = _interopRequireDefault(__webpack_require__(/*! @material-ui/icons/Email */ "./node_modules/@material-ui/icons/Email.js"));

var _Favorite = _interopRequireDefault(__webpack_require__(/*! @material-ui/icons/Favorite */ "./node_modules/@material-ui/icons/Favorite.js"));

var _ChatBubble = _interopRequireDefault(__webpack_require__(/*! @material-ui/icons/ChatBubble */ "./node_modules/@material-ui/icons/ChatBubble.js"));

var _Cached = _interopRequireDefault(__webpack_require__(/*! @material-ui/icons/Cached */ "./node_modules/@material-ui/icons/Cached.js"));

var _Edit = _interopRequireDefault(__webpack_require__(/*! @material-ui/icons/Edit */ "./node_modules/@material-ui/icons/Edit.js"));

var _Close = _interopRequireDefault(__webpack_require__(/*! @material-ui/icons/Close */ "./node_modules/@material-ui/icons/Close.js"));

var _Block = _interopRequireDefault(__webpack_require__(/*! @material-ui/icons/Block */ "./node_modules/@material-ui/icons/Block.js"));

var _Menu = _interopRequireDefault(__webpack_require__(/*! @material-ui/icons/Menu */ "./node_modules/@material-ui/icons/Menu.js"));

var _InsertComment = _interopRequireDefault(__webpack_require__(/*! @material-ui/icons/InsertComment */ "./node_modules/@material-ui/icons/InsertComment.js"));

var _History = _interopRequireDefault(__webpack_require__(/*! @material-ui/icons/History */ "./node_modules/@material-ui/icons/History.js"));

var _SettingsApplications = _interopRequireDefault(__webpack_require__(/*! @material-ui/icons/SettingsApplications */ "./node_modules/@material-ui/icons/SettingsApplications.js"));

var _Save = _interopRequireDefault(__webpack_require__(/*! @material-ui/icons/Save */ "./node_modules/@material-ui/icons/Save.js"));

var _MoreVert = _interopRequireDefault(__webpack_require__(/*! @material-ui/icons/MoreVert */ "./node_modules/@material-ui/icons/MoreVert.js"));

var _Help = _interopRequireDefault(__webpack_require__(/*! @material-ui/icons/Help */ "./node_modules/@material-ui/icons/Help.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

var styles = [];

var Icon =
/*#__PURE__*/
function (_React$Component) {
  _inherits(Icon, _React$Component);

  function Icon() {
    _classCallCheck(this, Icon);

    return _possibleConstructorReturn(this, _getPrototypeOf(Icon).apply(this, arguments));
  }

  _createClass(Icon, [{
    key: "getIcon",
    value: function getIcon(icon) {
      if (!icon) return _react.default.createElement(_Block.default, null);

      switch (icon) {
        case "send":
          return _react.default.createElement(_Send.default, null);

        case "reply":
          return _react.default.createElement(_Reply.default, null);

        case "reply_all":
          return _react.default.createElement(_ReplyAll.default, null);

        case "forward":
          return _react.default.createElement(_Forward.default, null);

        case "draft":
          return _react.default.createElement(_Drafts.default, null);

        case "cancel":
          return _react.default.createElement(_Cancel.default, null);

        case "attach":
          return _react.default.createElement(_AttachFile.default, null);

        case "delete":
          return _react.default.createElement(_Delete.default, null);

        case "archive":
          return _react.default.createElement(_Archive.default, null);

        case "spam":
          return _react.default.createElement(_BugReport.default, null);

        case "contacts":
          return _react.default.createElement(_Contacts.default, null);

        case "done":
          return _react.default.createElement(_Done.default, null);

        case "home":
          return _react.default.createElement(_Home.default, null);

        case "search":
          return _react.default.createElement(_Search.default, null);

        case "notification":
          return _react.default.createElement(_Notifications.default, null);

        case "message":
          return _react.default.createElement(_Email.default, null);

        case "favorite":
          return _react.default.createElement(_Favorite.default, null);

        case "reply-tweet":
          return _react.default.createElement(_ChatBubble.default, null);

        case "retweet":
          return _react.default.createElement(_Cached.default, null);

        case "compose":
          return _react.default.createElement(_Edit.default, null);

        case "close":
          return _react.default.createElement(_Close.default, null);

        case "drawer":
          return _react.default.createElement(_Menu.default, null);

        case "blog":
          return _react.default.createElement(_InsertComment.default, null);

        case "history":
          return _react.default.createElement(_History.default, null);

        case "settings":
          return _react.default.createElement(_SettingsApplications.default, null);

        case "debug":
          return _react.default.createElement(_BugReport.default, null);

        case "save":
          return _react.default.createElement(_Save.default, null);

        case "menu":
          return _react.default.createElement(_MoreVert.default, null);

        case "question":
          return _react.default.createElement(_Help.default, null);

        case "ok":
          return _react.default.createElement(_Done.default, null);

        default:
          return _react.default.createElement(_Block.default, null);
      }
    }
  }, {
    key: "render",
    value: function render() {
      var ico = this.getIcon(this.props.id);
      return ico;
    }
  }]);

  return Icon;
}(_react.default.Component);

var _default = Icon;
exports.default = _default;

/***/ }),

/***/ "./src/core/ui/link.js":
/*!*****************************!*\
  !*** ./src/core/ui/link.js ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "./node_modules/react/index.js"));

var _reactRouterDom = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/es/index.js");

var _Button = _interopRequireDefault(__webpack_require__(/*! @material-ui/core/Button */ "./node_modules/@material-ui/core/Button/index.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

var _Link =
/*#__PURE__*/
function (_React$Component) {
  _inherits(_Link, _React$Component);

  function _Link() {
    _classCallCheck(this, _Link);

    return _possibleConstructorReturn(this, _getPrototypeOf(_Link).apply(this, arguments));
  }

  _createClass(_Link, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          children = _this$props.children,
          classes = _this$props.classes,
          size = _this$props.size,
          to = _this$props.to,
          color = _this$props.color;
      return _react.default.createElement(_Button.default, {
        color: color,
        size: size,
        component: _reactRouterDom.Link,
        to: to
      }, children);
    }
  }]);

  return _Link;
}(_react.default.Component);

var _default = _Link;
exports.default = _default;

/***/ }),

/***/ "./src/core/ui/loading.js":
/*!********************************!*\
  !*** ./src/core/ui/loading.js ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "./node_modules/react/index.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

var Loading =
/*#__PURE__*/
function (_React$Component) {
  _inherits(Loading, _React$Component);

  function Loading() {
    _classCallCheck(this, Loading);

    return _possibleConstructorReturn(this, _getPrototypeOf(Loading).apply(this, arguments));
  }

  _createClass(Loading, [{
    key: "render",
    value: function render() {
      return _react.default.createElement("div", null, "loading....");
    }
  }]);

  return Loading;
}(_react.default.Component);

var _default = Loading;
exports.default = _default;

/***/ }),

/***/ "./src/core/ui/toolbar.js":
/*!********************************!*\
  !*** ./src/core/ui/toolbar.js ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "./node_modules/react/index.js"));

var _classnames = _interopRequireDefault(__webpack_require__(/*! classnames */ "./node_modules/classnames/index.js"));

var _link = _interopRequireDefault(__webpack_require__(/*! core/ui/link */ "./src/core/ui/link.js"));

var _styles = __webpack_require__(/*! @material-ui/core/styles */ "./node_modules/@material-ui/core/styles/index.js");

var _Button = _interopRequireDefault(__webpack_require__(/*! @material-ui/core/Button */ "./node_modules/@material-ui/core/Button/index.js"));

var _Toolbar = _interopRequireDefault(__webpack_require__(/*! @material-ui/core/Toolbar */ "./node_modules/@material-ui/core/Toolbar/index.js"));

var _IconButton = _interopRequireDefault(__webpack_require__(/*! @material-ui/core/IconButton */ "./node_modules/@material-ui/core/IconButton/index.js"));

var _Badge = _interopRequireDefault(__webpack_require__(/*! @material-ui/core/Badge */ "./node_modules/@material-ui/core/Badge/index.js"));

var _Menu = _interopRequireDefault(__webpack_require__(/*! @material-ui/icons/Menu */ "./node_modules/@material-ui/icons/Menu.js"));

var _Notifications = _interopRequireDefault(__webpack_require__(/*! @material-ui/icons/Notifications */ "./node_modules/@material-ui/icons/Notifications.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

var styles = function styles(theme) {
  return {
    toolbar: {},
    button: {
      marginLeft: 12,
      marginRight: 24
    },
    buttonHidden: {
      display: 'none'
    },
    title: {},
    fill: {
      flexGrow: 1
    }
  };
};

var Toolbar =
/*#__PURE__*/
function (_React$Component) {
  _inherits(Toolbar, _React$Component);

  function Toolbar() {
    var _this;

    _classCallCheck(this, Toolbar);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(Toolbar).call(this));
    _this.handleDrawerOpen = _this.handleDrawerOpen.bind(_assertThisInitialized(_this));
    return _this;
  }

  _createClass(Toolbar, [{
    key: "handleDrawerOpen",
    value: function handleDrawerOpen() {
      if (this.props.onDrawerOpenClick) {
        this.props.onDrawerOpenClick();
      }
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props = this.props,
          classes = _this$props.classes,
          nav = _this$props.nav,
          title = _this$props.title,
          drawerOpen = _this$props.drawerOpen,
          notifications = _this$props.notifications,
          drawer = _this$props.drawer;
      var navToolbar = nav && nav.options ? nav.options.filter(function (item) {
        return item.showInMenu ? item : null;
      }) : [];
      var navMenu = nav && nav.options ? nav.options.filter(function (item) {
        return item.showInMenu ? item : null;
      }) : [];
      var opts = this.getOptions(navMenu);
      return _react.default.createElement("div", {
        style: {
          width: '100%'
        }
      }, _react.default.createElement(_Toolbar.default, {
        disableGutters: !drawerOpen,
        className: classes.toolbar
      }, drawer && _react.default.createElement(_IconButton.default, {
        color: "inherit",
        "aria-label": "Open drawer",
        onClick: this.handleDrawerOpen,
        className: (0, _classnames.default)(classes.button, drawerOpen && classes.buttonHidden)
      }, _react.default.createElement(_Menu.default, null)), title !== false && _react.default.createElement(_link.default, {
        color: "inherit",
        size: "large",
        to: '/'
      }, title), opts.map(function (item) {
        return item;
      }), _react.default.createElement("div", {
        className: classes.fill
      }, "\xA0"), notifications !== false && _react.default.createElement(_IconButton.default, {
        color: "inherit",
        className: classes.button
      }, _react.default.createElement(_Badge.default, {
        badgeContent: notifications.length,
        color: "secondary"
      }, _react.default.createElement(_Notifications.default, null)))));
    }
  }, {
    key: "getOptions",
    value: function getOptions(nav) {
      var key = 0;
      var options = [];

      for (var i = 0; i < nav.length; i++) {
        var item = nav[i];

        var opt = _react.default.createElement(_link.default, {
          key: key++,
          color: "inherit",
          size: "small",
          to: item.route
        }, item.name);

        options.push(opt);
      }

      return options;
    }
  }]);

  return Toolbar;
}(_react.default.Component);

var _default = (0, _styles.withStyles)(styles)(Toolbar);

exports.default = _default;

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _react = _interopRequireDefault(__webpack_require__(/*! react */ "./node_modules/react/index.js"));

var _reactDom = _interopRequireDefault(__webpack_require__(/*! react-dom */ "./node_modules/react-dom/index.js"));

var _app = _interopRequireDefault(__webpack_require__(/*! app */ "./src/app.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var render = function render(Component) {
  _reactDom.default.render(_react.default.createElement(Component, null), document.getElementById('root'));
};

render(_app.default);

/***/ }),

/***/ "./src/jmarroyave/app/api.js":
/*!***********************************!*\
  !*** ./src/jmarroyave/app/api.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _api = _interopRequireDefault(__webpack_require__(/*! core/app/api */ "./src/core/app/api.js"));

var _state = _interopRequireDefault(__webpack_require__(/*! jmarroyave/app/state */ "./src/jmarroyave/app/state.js"));

var _constants = _interopRequireDefault(__webpack_require__(/*! jmarroyave/conf/constants */ "./src/jmarroyave/conf/constants.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

var API =
/*#__PURE__*/
function (_BaseAPI) {
  _inherits(API, _BaseAPI);

  function API(parent) {
    var _this;

    _classCallCheck(this, API);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(API).call(this, {
      debug: _constants.default.DEBUG,
      local: _constants.default.LOCAL,
      title: _constants.default.VERSION,
      current_component: {
        id: _constants.default.COMID,
        family: _constants.default.COMF,
        version: _constants.default.COMV
      },
      components: _constants.default.UXI_VERSIONS
    }));
    _this.state = _state.default;
    _this.data_kb_android = _this.server.serverURI + '/apps/jmarroyave-cs/data/android_index';
    return _this;
  }

  _createClass(API, [{
    key: "getData",
    value: function getData(path) {
      return this.state.get(path);
    }
  }, {
    key: "getAPI",
    value: function getAPI(apiURI, dataPath, params) {
      var $this = this;
      this.state.set(dataPath, {});
      this.server.get(apiURI, params, function (data) {
        $this.state.set(dataPath, data);
      });
    }
  }, {
    key: "getAppInfo",
    value: function getAppInfo() {
      var data = this.state.get(['info', 'jm']);
      if (data != null) return;
      var uri = '/apps/jmarroyave-cs/app/info';
      var params = {};
      this.getAPI(uri, ['info', 'jm'], params);
    }
  }, {
    key: "getTrendsInfo",
    value: function getTrendsInfo() {
      var data = this.state.get(['info', 'trends']);
      if (data != null) return;
      var uri = '/apps/trends/app/info';
      var params = {};
      this.getAPI(uri, ['info', 'trends'], params);
    }
  }, {
    key: "getApp",
    value: function getApp() {
      var app = this.state.get(['app']);
      if (app != null) return;
      var uri = '/apps/jmarroyave-cs/app';
      var params = {};
      this.getAPI(uri, ['app'], params);
      this.getAppInfo();
      this.getTrendsInfo();
    }
  }, {
    key: "getHome",
    value: function getHome() {
      this.getApp();
      var uri = '/apps/jmarroyave-cs/pages/home';
      var params = {};
      this.getAPI(uri, ['pages', 'home', 'data'], params);
    }
  }, {
    key: "getTrends",
    value: function getTrends() {
      this.getApp();
      var uri = '/apps/trends/stackoverflow/history';
      var params = {};
      this.getAPI(uri, ['pages', 'home', 'trends'], params);
    }
  }, {
    key: "getBlog",
    value: function getBlog(blog) {
      this.getApp();
      this.state.set(['pages', 'blog', 'area'], blog);
      var uri = '/apps/jmarroyave-cs/pages/blog';
      var params = {
        area: blog
      };
      this.getAPI(uri, ['pages', 'blog', 'data'], params);
    }
  }, {
    key: "getPost",
    value: function getPost(blog, post) {
      this.getApp();
      this.state.set(['pages', 'post', 'area'], blog);
      var uri = '/apps/jmarroyave-cs/pages/post';
      var params = {
        id: post
      };
      this.getAPI(uri, ['pages', 'post', 'data'], params);
    }
  }, {
    key: "getCV",
    value: function getCV() {
      this.getApp();
      var uri = '/apps/jmarroyave-cs/pages/cv';
      var params = {};
      this.getAPI(uri, ['pages', 'cv', 'data'], params);
    }
  }, {
    key: "getKBAndroid",
    value: function getKBAndroid(category) {
      this.getApp();
      var uri = '/apps/jmarroyave-cs/app/data/android_index';
      var params = {
        f1: 'cat',
        v1: category
      };
      this.getAPI(uri, ['pages', 'kb_android', 'data', 'records'], params);
    }
  }, {
    key: "getKBAndroidCategories",
    value: function getKBAndroidCategories() {
      this.getApp();
      var uri = '/apps/jmarroyave-cs/app/data/android_categories';
      var params = {};
      this.getAPI(uri, ['pages', 'kb_android', 'data', 'categories'], params);
    }
  }]);

  return API;
}(_api.default);

window.__api = new API();
var _default = API;
exports.default = _default;

/***/ }),

/***/ "./src/jmarroyave/app/redux/actions/types.js":
/*!***************************************************!*\
  !*** ./src/jmarroyave/app/redux/actions/types.js ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.LABELS_FETCHED = exports.LABELS_FAILED = exports.LABELS_LOADING = exports.MESSAGE_FETCHED = exports.MESSAGE_FAILED = exports.MESSAGE_LOADING = exports.MESSAGES_FETCHED = exports.MESSAGES_FAILED = exports.MESSAGES_LOADING = void 0;
var MESSAGES_LOADING = 'MESSAGES_LOADING';
exports.MESSAGES_LOADING = MESSAGES_LOADING;
var MESSAGES_FAILED = 'MESSAGES_FAILED';
exports.MESSAGES_FAILED = MESSAGES_FAILED;
var MESSAGES_FETCHED = 'MESSAGES_FETCHED';
exports.MESSAGES_FETCHED = MESSAGES_FETCHED;
var MESSAGE_LOADING = 'MESSAGE_LOADING';
exports.MESSAGE_LOADING = MESSAGE_LOADING;
var MESSAGE_FAILED = 'MESSAGE_FAILED';
exports.MESSAGE_FAILED = MESSAGE_FAILED;
var MESSAGE_FETCHED = 'MESSAGE_FETCHED';
exports.MESSAGE_FETCHED = MESSAGE_FETCHED;
var LABELS_LOADING = 'LABELS_LOADING';
exports.LABELS_LOADING = LABELS_LOADING;
var LABELS_FAILED = 'LABELS_FAILED';
exports.LABELS_FAILED = LABELS_FAILED;
var LABELS_FETCHED = 'LABELS_FETCHED';
exports.LABELS_FETCHED = LABELS_FETCHED;

/***/ }),

/***/ "./src/jmarroyave/app/redux/configureStore.js":
/*!****************************************************!*\
  !*** ./src/jmarroyave/app/redux/configureStore.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ConfigureStore = void 0;

var _redux = __webpack_require__(/*! redux */ "./node_modules/redux/es/redux.js");

var _messages = __webpack_require__(/*! jmarroyave/app/redux/reducers/messages */ "./src/jmarroyave/app/redux/reducers/messages.js");

var _labels = __webpack_require__(/*! jmarroyave/app/redux/reducers/labels */ "./src/jmarroyave/app/redux/reducers/labels.js");

var _reduxThunk = _interopRequireDefault(__webpack_require__(/*! redux-thunk */ "./node_modules/redux-thunk/es/index.js"));

var _reduxLogger = _interopRequireDefault(__webpack_require__(/*! redux-logger */ "./node_modules/redux-logger/dist/redux-logger.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var ConfigureStore = function ConfigureStore() {
  var store = (0, _redux.createStore)((0, _redux.combineReducers)({
    messages: _messages.Messages,
    labels: _labels.Labels
  }), (0, _redux.applyMiddleware)(_reduxThunk.default, _reduxLogger.default) && (0, _redux.applyMiddleware)(_reduxThunk.default));
  return store;
};

exports.ConfigureStore = ConfigureStore;

/***/ }),

/***/ "./src/jmarroyave/app/redux/reducers/labels.js":
/*!*****************************************************!*\
  !*** ./src/jmarroyave/app/redux/reducers/labels.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Labels = void 0;

var ActionTypes = _interopRequireWildcard(__webpack_require__(/*! jmarroyave/app/redux/actions/types */ "./src/jmarroyave/app/redux/actions/types.js"));

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var Labels = function Labels() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {
    loading: true,
    err: null,
    data: []
  };
  var action = arguments.length > 1 ? arguments[1] : undefined;

  switch (action.type) {
    case ActionTypes.LABELS_FETCHED:
      return _objectSpread({}, state, {
        loading: false,
        err: null,
        data: action.payload
      });

    case ActionTypes.LABELS_LOADING:
      return _objectSpread({}, state, {
        loading: true,
        err: null,
        data: []
      });

    case ActionTypes.LABELS_FAILED:
      return _objectSpread({}, state, {
        loading: false,
        err: action.payload
      });

    default:
      return state;
  }
};

exports.Labels = Labels;

/***/ }),

/***/ "./src/jmarroyave/app/redux/reducers/messages.js":
/*!*******************************************************!*\
  !*** ./src/jmarroyave/app/redux/reducers/messages.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Messages = void 0;

var ActionTypes = _interopRequireWildcard(__webpack_require__(/*! jmarroyave/app/redux/actions/types */ "./src/jmarroyave/app/redux/actions/types.js"));

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var Messages = function Messages() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {
    loading: true,
    err: null,
    data: []
  };
  var action = arguments.length > 1 ? arguments[1] : undefined;

  switch (action.type) {
    case ActionTypes.MESSAGES_FETCHED:
      return _objectSpread({}, state, {
        loading: false,
        err: null,
        data: action.payload.data
      });

    case ActionTypes.MESSAGES_LOADING:
      return _objectSpread({}, state, {
        loading: true,
        err: null,
        data: []
      });

    case ActionTypes.MESSAGES_FAILED:
      return _objectSpread({}, state, {
        loading: false,
        err: action.payload
      });

    case ActionTypes.MESSAGE_FETCHED:
      action.payload.message.messages[action.payload.idx].text = action.payload.text;
      return _objectSpread({}, state, {
        loading: false,
        err: null
      });

    case ActionTypes.MESSAGE_LOADING:
      return _objectSpread({}, state, {
        loading: true,
        err: null
      });

    case ActionTypes.MESSAGE_FAILED:
      return _objectSpread({}, state, {
        loading: false,
        err: action.payload
      });

    default:
      return state;
  }
};

exports.Messages = Messages;

/***/ }),

/***/ "./src/jmarroyave/app/state.js":
/*!*************************************!*\
  !*** ./src/jmarroyave/app/state.js ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _baobab = _interopRequireDefault(__webpack_require__(/*! baobab */ "./node_modules/baobab/dist/baobab.js"));

var _constants = _interopRequireDefault(__webpack_require__(/*! jmarroyave/conf/constants */ "./src/jmarroyave/conf/constants.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var tree = new _baobab.default({
  info: {
    jm: null,
    trends: null
  },
  app: null,
  pages: {
    global: {},
    home: {
      data: {},
      trends: null
    },
    blog: {
      data: {},
      area: ""
    },
    post: {
      data: {},
      area: ""
    },
    courses: {
      data: {}
    },
    cv: {
      data: {}
    },
    kb_android: {
      data: {
        records: null,
        categories: null
      }
    }
  }
}, {
  autoCommit: true,
  asynchronous: false,
  immutable: false,
  persistent: false
});
window.__state = tree;
var _default = tree;
exports.default = _default;

/***/ }),

/***/ "./src/jmarroyave/components/data/blog_link.js":
/*!*****************************************************!*\
  !*** ./src/jmarroyave/components/data/blog_link.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "./node_modules/react/index.js"));

var _reactRouterDom = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/es/index.js");

var _withModule = _interopRequireDefault(__webpack_require__(/*! jmarroyave/components/uxi/core/with-module */ "./src/jmarroyave/components/uxi/core/with-module.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

var BlogLinkComponent =
/*#__PURE__*/
function (_React$Component) {
  _inherits(BlogLinkComponent, _React$Component);

  function BlogLinkComponent() {
    _classCallCheck(this, BlogLinkComponent);

    return _possibleConstructorReturn(this, _getPrototypeOf(BlogLinkComponent).apply(this, arguments));
  }

  _createClass(BlogLinkComponent, [{
    key: "render",
    value: function render() {
      var slug = this.props.slug;
      return _react.default.createElement(_reactRouterDom.Link, {
        to: "/".concat(slug)
      }, this.props.children);
    }
  }]);

  return BlogLinkComponent;
}(_react.default.Component);

var _default = (0, _withModule.default)(BlogLinkComponent);

exports.default = _default;

/***/ }),

/***/ "./src/jmarroyave/components/data/post_link.js":
/*!*****************************************************!*\
  !*** ./src/jmarroyave/components/data/post_link.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "./node_modules/react/index.js"));

var _reactRouterDom = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/es/index.js");

var _withModule = _interopRequireDefault(__webpack_require__(/*! jmarroyave/components/uxi/core/with-module */ "./src/jmarroyave/components/uxi/core/with-module.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

var PostLinkComponent =
/*#__PURE__*/
function (_React$Component) {
  _inherits(PostLinkComponent, _React$Component);

  function PostLinkComponent() {
    _classCallCheck(this, PostLinkComponent);

    return _possibleConstructorReturn(this, _getPrototypeOf(PostLinkComponent).apply(this, arguments));
  }

  _createClass(PostLinkComponent, [{
    key: "render",
    value: function render() {
      var slug = "slug" in this.props ? this.props.slug : null;
      var category = this.props.category;
      if (!slug) return this.props.children;
      return _react.default.createElement(_reactRouterDom.Link, {
        to: "".concat(slug)
      }, this.props.children);
    }
  }]);

  return PostLinkComponent;
}(_react.default.Component);

var _default = (0, _withModule.default)(PostLinkComponent);

exports.default = _default;

/***/ }),

/***/ "./src/jmarroyave/components/uxi/blank/page.js":
/*!*****************************************************!*\
  !*** ./src/jmarroyave/components/uxi/blank/page.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "./node_modules/react/index.js"));

var _styles = __webpack_require__(/*! @material-ui/core/styles */ "./node_modules/@material-ui/core/styles/index.js");

var _Grid = _interopRequireDefault(__webpack_require__(/*! @material-ui/core/Grid */ "./node_modules/@material-ui/core/Grid/index.js"));

var _app = _interopRequireDefault(__webpack_require__(/*! jmarroyave/components/uxi/core/page/app */ "./src/jmarroyave/components/uxi/core/page/app.js"));

var _body = _interopRequireDefault(__webpack_require__(/*! jmarroyave/components/uxi/core/page/body */ "./src/jmarroyave/components/uxi/core/page/body.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

var styles = function styles(theme) {
  return {};
};

var Page =
/*#__PURE__*/
function (_React$Component) {
  _inherits(Page, _React$Component);

  function Page(props, context) {
    var _this;

    _classCallCheck(this, Page);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(Page).call(this, props, context));
    _this.api = window.__api;
    return _this;
  }

  _createClass(Page, [{
    key: "componentDidMount",
    value: function componentDidMount() {}
  }, {
    key: "render",
    value: function render() {
      var title = "title" in this.props ? _react.default.createElement("h1", null, this.props.title) : "";
      return _react.default.createElement(_app.default, {
        router: this.props.router,
        app: this.props.app
      }, _react.default.createElement(_body.default, {
        path: [{
          text: 'home',
          route: '/'
        }, {
          text: 'labs'
        }],
        app: this.props.app,
        data: {}
      }, _react.default.createElement(_Grid.default, {
        container: true,
        spacing: 8,
        className: 'mod-labs',
        style: {
          paddingTop: '5%',
          width: '100%'
        }
      }, _react.default.createElement(_Grid.default, {
        item: true,
        xs: 12,
        align: "center"
      }, title), _react.default.createElement(_Grid.default, {
        item: true,
        xs: 1,
        md: 4
      }), _react.default.createElement(_Grid.default, {
        item: true,
        align: "center",
        xs: 10,
        md: 4,
        className: 'frame'
      }, _react.default.createElement("img", {
        src: "./res/img/labs002.jpg",
        width: "100%"
      }), _react.default.createElement("h1", null, "Sorry, it's just a labs demo")))));
    }
  }]);

  return Page;
}(_react.default.Component);

var _default = (0, _styles.withStyles)(styles)(Page);

exports.default = _default;

/***/ }),

/***/ "./src/jmarroyave/components/uxi/blog/layout/layout-proxy.js":
/*!*******************************************************************!*\
  !*** ./src/jmarroyave/components/uxi/blog/layout/layout-proxy.js ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "./node_modules/react/index.js"));

var _Hidden = _interopRequireDefault(__webpack_require__(/*! @material-ui/core/Hidden */ "./node_modules/@material-ui/core/Hidden/index.js"));

var _reactDeviceDetect = __webpack_require__(/*! react-device-detect */ "./node_modules/react-device-detect/dist/index.js");

var _withModule = _interopRequireDefault(__webpack_require__(/*! jmarroyave/components/uxi/core/with-module */ "./src/jmarroyave/components/uxi/core/with-module.js"));

var _page = _interopRequireDefault(__webpack_require__(/*! jmarroyave/components/uxi/blog/layout/lg/page */ "./src/jmarroyave/components/uxi/blog/layout/lg/page.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

var PageComponent =
/*#__PURE__*/
function (_React$Component) {
  _inherits(PageComponent, _React$Component);

  function PageComponent() {
    _classCallCheck(this, PageComponent);

    return _possibleConstructorReturn(this, _getPrototypeOf(PageComponent).apply(this, arguments));
  }

  _createClass(PageComponent, [{
    key: "render",
    value: function render() {
      return this.renderDefault();
    }
  }, {
    key: "renderDefault",
    value: function renderDefault() {
      var data = this.props.data;
      var title = this.props.title;
      return _react.default.createElement("div", {
        style: {
          width: '100%'
        }
      }, _react.default.createElement(_page.default, {
        data: data,
        title: title
      }));
    }
  }, {
    key: "renderMultiple",
    value: function renderMultiple() {
      var data = this.props.data;
      return _react.default.createElement("div", {
        style: {
          width: '100%'
        }
      }, _react.default.createElement(_Hidden.default, {
        only: ['sm', 'md', 'lg', 'xl']
      }), _react.default.createElement(_Hidden.default, {
        only: ['xs', 'md', 'lg', 'xl']
      }), _react.default.createElement(_Hidden.default, {
        only: ['xs', 'sm']
      }, _react.default.createElement(_page.default, {
        data: data
      })));
    }
  }]);

  return PageComponent;
}(_react.default.Component);

var _default = (0, _withModule.default)(PageComponent);

exports.default = _default;

/***/ }),

/***/ "./src/jmarroyave/components/uxi/blog/layout/lg/page.js":
/*!**************************************************************!*\
  !*** ./src/jmarroyave/components/uxi/blog/layout/lg/page.js ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "./node_modules/react/index.js"));

var _reactRouter = __webpack_require__(/*! react-router */ "./node_modules/react-router/es/index.js");

var _grid_container = _interopRequireDefault(__webpack_require__(/*! jmarroyave/components/uxi/core/grid_container */ "./src/jmarroyave/components/uxi/core/grid_container.js"));

var _grid_item = _interopRequireDefault(__webpack_require__(/*! jmarroyave/components/uxi/core/grid_item */ "./src/jmarroyave/components/uxi/core/grid_item.js"));

var _Hidden = _interopRequireDefault(__webpack_require__(/*! @material-ui/core/Hidden */ "./node_modules/@material-ui/core/Hidden/index.js"));

var _modules = _interopRequireDefault(__webpack_require__(/*! jmarroyave/conf/layout/modules */ "./src/jmarroyave/conf/layout/modules.js"));

var _withModule = _interopRequireDefault(__webpack_require__(/*! jmarroyave/components/uxi/core/with-module */ "./src/jmarroyave/components/uxi/core/with-module.js"));

var _block = _interopRequireDefault(__webpack_require__(/*! jmarroyave/components/uxi/home/block */ "./src/jmarroyave/components/uxi/home/block.js"));

var _block2 = _interopRequireDefault(__webpack_require__(/*! core/components/mockup/block */ "./src/core/components/mockup/block.js"));

var _section = _interopRequireDefault(__webpack_require__(/*! core/components/layout/section */ "./src/core/components/layout/section.js"));

var _list = _interopRequireDefault(__webpack_require__(/*! jmarroyave/components/uxi/blog/list */ "./src/jmarroyave/components/uxi/blog/list.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

var PageComponent =
/*#__PURE__*/
function (_React$Component) {
  _inherits(PageComponent, _React$Component);

  function PageComponent() {
    _classCallCheck(this, PageComponent);

    return _possibleConstructorReturn(this, _getPrototypeOf(PageComponent).apply(this, arguments));
  }

  _createClass(PageComponent, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          data = _this$props.data,
          title = _this$props.title;
      var posts = data && data.posts ? data.posts : null;
      return _react.default.createElement(_grid_container.default, null, _react.default.createElement(_grid_item.default, null, _react.default.createElement(_grid_container.default, null, _react.default.createElement(_grid_item.default, {
        xs: 1,
        md: 2
      }), _react.default.createElement(_grid_item.default, {
        xs: 10,
        md: 8
      }, _react.default.createElement(_grid_container.default, null, _react.default.createElement(_grid_item.default, null, _react.default.createElement("h1", null, title)), _react.default.createElement(_grid_item.default, null, _react.default.createElement(_list.default, {
        area: title,
        data: posts
      })))), _react.default.createElement(_grid_item.default, {
        xs: 1,
        md: 2
      }))));
    }
  }]);

  return PageComponent;
}(_react.default.Component);

var _default = (0, _withModule.default)(PageComponent);

exports.default = _default;

/***/ }),

/***/ "./src/jmarroyave/components/uxi/blog/list.js":
/*!****************************************************!*\
  !*** ./src/jmarroyave/components/uxi/blog/list.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "./node_modules/react/index.js"));

var _component = _interopRequireDefault(__webpack_require__(/*! core/components/component */ "./src/core/components/component.js"));

var _post_link = _interopRequireDefault(__webpack_require__(/*! jmarroyave/components/data/post_link */ "./src/jmarroyave/components/data/post_link.js"));

var _grid_container = _interopRequireDefault(__webpack_require__(/*! jmarroyave/components/uxi/core/grid_container */ "./src/jmarroyave/components/uxi/core/grid_container.js"));

var _grid_item = _interopRequireDefault(__webpack_require__(/*! jmarroyave/components/uxi/core/grid_item */ "./src/jmarroyave/components/uxi/core/grid_item.js"));

var _date = _interopRequireDefault(__webpack_require__(/*! core/components/date */ "./src/core/components/date.js"));

__webpack_require__(/*! ./list.scss */ "./src/jmarroyave/components/uxi/blog/list.scss");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function Post(_ref) {
  var data = _ref.data;
  return _react.default.createElement(_grid_item.default, {
    xs: 12,
    className: "post"
  }, _react.default.createElement("div", {
    className: "date"
  }, _react.default.createElement(_date.default, {
    value: data.date
  })), _react.default.createElement("div", {
    className: "title"
  }, _react.default.createElement(_post_link.default, {
    slug: data.slug
  }, data.title)), _react.default.createElement("div", null, _react.default.createElement("span", {
    className: "category"
  }, data.category), " ", _react.default.createElement("span", {
    className: "tags"
  }, "tags: ", data.tags)), _react.default.createElement("div", {
    className: "excerpt"
  }, data.excerpt));
}

var List =
/*#__PURE__*/
function (_React$Component) {
  _inherits(List, _React$Component);

  function List(props, context) {
    var _this;

    _classCallCheck(this, List);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(List).call(this, props, context));
    _this.api = window.__api;
    return _this;
  }

  _createClass(List, [{
    key: "componentDidMount",
    value: function componentDidMount() {}
  }, {
    key: "render",
    value: function render() {
      var data = this.props.data;
      var area = this.props.area;
      var key = 0;
      return _react.default.createElement(_grid_container.default, {
        className: "mod-blog-list"
      }, data.map(function (item) {
        return _react.default.createElement(Post, {
          data: item,
          key: key++
        });
      }));
    }
  }]);

  return List;
}(_react.default.Component);

var _default = (0, _component.default)(List);

exports.default = _default;

/***/ }),

/***/ "./src/jmarroyave/components/uxi/blog/list.scss":
/*!******************************************************!*\
  !*** ./src/jmarroyave/components/uxi/blog/list.scss ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../../../../../../frameworks/webapps/startup/node_modules/css-loader/dist/cjs.js!../../../../../../../../../frameworks/webapps/startup/node_modules/sass-loader/lib/loader.js!./list.scss */ "../../../../frameworks/webapps/startup/node_modules/css-loader/dist/cjs.js!../../../../frameworks/webapps/startup/node_modules/sass-loader/lib/loader.js!./src/jmarroyave/components/uxi/blog/list.scss");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../../../../../../../../frameworks/webapps/startup/node_modules/style-loader/lib/addStyles.js */ "../../../../frameworks/webapps/startup/node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ "./src/jmarroyave/components/uxi/blog/page.js":
/*!****************************************************!*\
  !*** ./src/jmarroyave/components/uxi/blog/page.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "./node_modules/react/index.js"));

var _reactLoadable = _interopRequireDefault(__webpack_require__(/*! react-loadable */ "./node_modules/react-loadable/lib/index.js"));

var _loading = _interopRequireDefault(__webpack_require__(/*! core/components/loading */ "./src/core/components/loading.js"));

var _app = _interopRequireDefault(__webpack_require__(/*! jmarroyave/components/uxi/core/page/app */ "./src/jmarroyave/components/uxi/core/page/app.js"));

var _body = _interopRequireDefault(__webpack_require__(/*! jmarroyave/components/uxi/core/page/body */ "./src/jmarroyave/components/uxi/core/page/body.js"));

var _layoutProxy = _interopRequireDefault(__webpack_require__(/*! jmarroyave/components/uxi/blog/layout/layout-proxy */ "./src/jmarroyave/components/uxi/blog/layout/layout-proxy.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

/*
const HomeProxy = Loadable({
  loader: () => import('jmarroyave/components/uxi/blog/layout/layout-proxy'),
  loading: Loading,
});
*/
var Page =
/*#__PURE__*/
function (_React$Component) {
  _inherits(Page, _React$Component);

  function Page(props, context) {
    var _this;

    _classCallCheck(this, Page);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(Page).call(this, props, context));
    _this.api = window.__api;
    return _this;
  }

  _createClass(Page, [{
    key: "componentDidMount",
    value: function componentDidMount() {}
  }, {
    key: "render",
    value: function render() {
      var app = this.props.app;
      var key = 0;
      return _react.default.createElement(_app.default, {
        router: this.props.router,
        app: this.props.app
      }, _react.default.createElement(_body.default, {
        path: [{
          text: 'home',
          route: '/'
        }],
        app: this.props.app,
        data: {
          home: this.props.page
        }
      }, _react.default.createElement(_layoutProxy.default, {
        data: this.props.page.data,
        title: this.props.page.area
      })));
    }
  }]);

  return Page;
}(_react.default.Component);

var _default = Page;
exports.default = _default;

/***/ }),

/***/ "./src/jmarroyave/components/uxi/blog_post/content.js":
/*!************************************************************!*\
  !*** ./src/jmarroyave/components/uxi/blog_post/content.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "./node_modules/react/index.js"));

var _component = _interopRequireDefault(__webpack_require__(/*! core/components/component */ "./src/core/components/component.js"));

var _post_link = _interopRequireDefault(__webpack_require__(/*! jmarroyave/components/data/post_link */ "./src/jmarroyave/components/data/post_link.js"));

var _grid_container = _interopRequireDefault(__webpack_require__(/*! jmarroyave/components/uxi/core/grid_container */ "./src/jmarroyave/components/uxi/core/grid_container.js"));

var _grid_item = _interopRequireDefault(__webpack_require__(/*! jmarroyave/components/uxi/core/grid_item */ "./src/jmarroyave/components/uxi/core/grid_item.js"));

var _date = _interopRequireDefault(__webpack_require__(/*! core/components/date */ "./src/core/components/date.js"));

__webpack_require__(/*! ./content.scss */ "./src/jmarroyave/components/uxi/blog_post/content.scss");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

var Content =
/*#__PURE__*/
function (_React$Component) {
  _inherits(Content, _React$Component);

  function Content(props, context) {
    var _this;

    _classCallCheck(this, Content);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(Content).call(this, props, context));
    _this.api = window.__api;
    return _this;
  }

  _createClass(Content, [{
    key: "componentDidMount",
    value: function componentDidMount() {}
  }, {
    key: "render",
    value: function render() {
      var data = this.props.data;
      var key = 0;
      return _react.default.createElement(_grid_container.default, {
        className: "mod-post-content"
      }, _react.default.createElement(_grid_item.default, null, _react.default.createElement("div", null, _react.default.createElement(_date.default, {
        value: data.date,
        className: "date"
      }))), _react.default.createElement(_grid_item.default, null, _react.default.createElement("div", {
        dangerouslySetInnerHTML: {
          __html: data.html
        }
      })));
    }
  }]);

  return Content;
}(_react.default.Component);

var _default = (0, _component.default)(Content);

exports.default = _default;

/***/ }),

/***/ "./src/jmarroyave/components/uxi/blog_post/content.scss":
/*!**************************************************************!*\
  !*** ./src/jmarroyave/components/uxi/blog_post/content.scss ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../../../../../../frameworks/webapps/startup/node_modules/css-loader/dist/cjs.js!../../../../../../../../../frameworks/webapps/startup/node_modules/sass-loader/lib/loader.js!./content.scss */ "../../../../frameworks/webapps/startup/node_modules/css-loader/dist/cjs.js!../../../../frameworks/webapps/startup/node_modules/sass-loader/lib/loader.js!./src/jmarroyave/components/uxi/blog_post/content.scss");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../../../../../../../../frameworks/webapps/startup/node_modules/style-loader/lib/addStyles.js */ "../../../../frameworks/webapps/startup/node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ "./src/jmarroyave/components/uxi/blog_post/layout/layout-proxy.js":
/*!************************************************************************!*\
  !*** ./src/jmarroyave/components/uxi/blog_post/layout/layout-proxy.js ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "./node_modules/react/index.js"));

var _Hidden = _interopRequireDefault(__webpack_require__(/*! @material-ui/core/Hidden */ "./node_modules/@material-ui/core/Hidden/index.js"));

var _reactDeviceDetect = __webpack_require__(/*! react-device-detect */ "./node_modules/react-device-detect/dist/index.js");

var _withModule = _interopRequireDefault(__webpack_require__(/*! jmarroyave/components/uxi/core/with-module */ "./src/jmarroyave/components/uxi/core/with-module.js"));

var _page = _interopRequireDefault(__webpack_require__(/*! jmarroyave/components/uxi/blog_post/layout/lg/page */ "./src/jmarroyave/components/uxi/blog_post/layout/lg/page.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

var PageComponent =
/*#__PURE__*/
function (_React$Component) {
  _inherits(PageComponent, _React$Component);

  function PageComponent() {
    _classCallCheck(this, PageComponent);

    return _possibleConstructorReturn(this, _getPrototypeOf(PageComponent).apply(this, arguments));
  }

  _createClass(PageComponent, [{
    key: "render",
    value: function render() {
      return this.renderDefault();
    }
  }, {
    key: "renderDefault",
    value: function renderDefault() {
      var data = this.props.data;
      var title = this.props.title;
      return _react.default.createElement("div", {
        style: {
          width: '100%'
        }
      }, _react.default.createElement(_page.default, {
        data: data,
        title: title
      }));
    }
  }, {
    key: "renderMultiple",
    value: function renderMultiple() {
      var data = this.props.data;
      return _react.default.createElement("div", {
        style: {
          width: '100%'
        }
      }, _react.default.createElement(_Hidden.default, {
        only: ['sm', 'md', 'lg', 'xl']
      }), _react.default.createElement(_Hidden.default, {
        only: ['xs', 'md', 'lg', 'xl']
      }), _react.default.createElement(_Hidden.default, {
        only: ['xs', 'sm']
      }, _react.default.createElement(_page.default, {
        data: data
      })));
    }
  }]);

  return PageComponent;
}(_react.default.Component);

var _default = (0, _withModule.default)(PageComponent);

exports.default = _default;

/***/ }),

/***/ "./src/jmarroyave/components/uxi/blog_post/layout/lg/page.js":
/*!*******************************************************************!*\
  !*** ./src/jmarroyave/components/uxi/blog_post/layout/lg/page.js ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "./node_modules/react/index.js"));

var _reactRouter = __webpack_require__(/*! react-router */ "./node_modules/react-router/es/index.js");

var _grid_container = _interopRequireDefault(__webpack_require__(/*! jmarroyave/components/uxi/core/grid_container */ "./src/jmarroyave/components/uxi/core/grid_container.js"));

var _grid_item = _interopRequireDefault(__webpack_require__(/*! jmarroyave/components/uxi/core/grid_item */ "./src/jmarroyave/components/uxi/core/grid_item.js"));

var _Hidden = _interopRequireDefault(__webpack_require__(/*! @material-ui/core/Hidden */ "./node_modules/@material-ui/core/Hidden/index.js"));

var _modules = _interopRequireDefault(__webpack_require__(/*! jmarroyave/conf/layout/modules */ "./src/jmarroyave/conf/layout/modules.js"));

var _withModule = _interopRequireDefault(__webpack_require__(/*! jmarroyave/components/uxi/core/with-module */ "./src/jmarroyave/components/uxi/core/with-module.js"));

var _block = _interopRequireDefault(__webpack_require__(/*! jmarroyave/components/uxi/home/block */ "./src/jmarroyave/components/uxi/home/block.js"));

var _block2 = _interopRequireDefault(__webpack_require__(/*! core/components/mockup/block */ "./src/core/components/mockup/block.js"));

var _section = _interopRequireDefault(__webpack_require__(/*! core/components/layout/section */ "./src/core/components/layout/section.js"));

var _content = _interopRequireDefault(__webpack_require__(/*! jmarroyave/components/uxi/blog_post/content */ "./src/jmarroyave/components/uxi/blog_post/content.js"));

var _blog_link = _interopRequireDefault(__webpack_require__(/*! jmarroyave/components/data/blog_link */ "./src/jmarroyave/components/data/blog_link.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

var PageComponent =
/*#__PURE__*/
function (_React$Component) {
  _inherits(PageComponent, _React$Component);

  function PageComponent() {
    _classCallCheck(this, PageComponent);

    return _possibleConstructorReturn(this, _getPrototypeOf(PageComponent).apply(this, arguments));
  }

  _createClass(PageComponent, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          data = _this$props.data,
          title = _this$props.title;
      var post = data && data.post ? data.post : null;
      return _react.default.createElement(_grid_container.default, null, _react.default.createElement(_grid_item.default, null, _react.default.createElement(_grid_container.default, null, _react.default.createElement(_grid_item.default, {
        xs: 1
      }), _react.default.createElement(_grid_item.default, {
        xs: 10
      }, _react.default.createElement(_grid_container.default, null, _react.default.createElement(_grid_item.default, null, _react.default.createElement("h1", null, _react.default.createElement(_blog_link.default, {
        slug: title
      }, title), " > ", post ? post.title : '')), _react.default.createElement(_grid_item.default, null, _react.default.createElement(_content.default, {
        data: post
      })))), _react.default.createElement(_grid_item.default, {
        xs: 1
      }))));
    }
  }]);

  return PageComponent;
}(_react.default.Component);

var _default = (0, _withModule.default)(PageComponent);

exports.default = _default;

/***/ }),

/***/ "./src/jmarroyave/components/uxi/blog_post/page.js":
/*!*********************************************************!*\
  !*** ./src/jmarroyave/components/uxi/blog_post/page.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "./node_modules/react/index.js"));

var _reactLoadable = _interopRequireDefault(__webpack_require__(/*! react-loadable */ "./node_modules/react-loadable/lib/index.js"));

var _loading = _interopRequireDefault(__webpack_require__(/*! core/components/loading */ "./src/core/components/loading.js"));

var _app = _interopRequireDefault(__webpack_require__(/*! jmarroyave/components/uxi/core/page/app */ "./src/jmarroyave/components/uxi/core/page/app.js"));

var _body = _interopRequireDefault(__webpack_require__(/*! jmarroyave/components/uxi/core/page/body */ "./src/jmarroyave/components/uxi/core/page/body.js"));

var _layoutProxy = _interopRequireDefault(__webpack_require__(/*! jmarroyave/components/uxi/blog_post/layout/layout-proxy */ "./src/jmarroyave/components/uxi/blog_post/layout/layout-proxy.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

/*
const HomeProxy = Loadable({
  loader: () => import('jmarroyave/components/uxi/blog_post/layout/layout-proxy'),
  loading: Loading,
});
*/
var Page =
/*#__PURE__*/
function (_React$Component) {
  _inherits(Page, _React$Component);

  function Page(props, context) {
    var _this;

    _classCallCheck(this, Page);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(Page).call(this, props, context));
    _this.api = window.__api;
    return _this;
  }

  _createClass(Page, [{
    key: "componentDidMount",
    value: function componentDidMount() {}
  }, {
    key: "render",
    value: function render() {
      var app = this.props.app;
      var key = 0;
      return _react.default.createElement(_app.default, {
        router: this.props.router,
        app: this.props.app
      }, _react.default.createElement(_body.default, {
        path: [{
          text: 'home',
          route: '/'
        }],
        app: this.props.app,
        data: {
          home: this.props.page
        }
      }, _react.default.createElement(_layoutProxy.default, {
        data: this.props.page.data,
        title: this.props.page.area
      })));
    }
  }]);

  return Page;
}(_react.default.Component);

var _default = Page;
exports.default = _default;

/***/ }),

/***/ "./src/jmarroyave/components/uxi/core/com_version.js":
/*!***********************************************************!*\
  !*** ./src/jmarroyave/components/uxi/core/com_version.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "./node_modules/react/index.js"));

var _withModule = _interopRequireDefault(__webpack_require__(/*! jmarroyave/components/uxi/core/with-module */ "./src/jmarroyave/components/uxi/core/with-module.js"));

var _Button = _interopRequireDefault(__webpack_require__(/*! @material-ui/core/Button */ "./node_modules/@material-ui/core/Button/index.js"));

var _Dialog = _interopRequireDefault(__webpack_require__(/*! @material-ui/core/Dialog */ "./node_modules/@material-ui/core/Dialog/index.js"));

var _DialogActions = _interopRequireDefault(__webpack_require__(/*! @material-ui/core/DialogActions */ "./node_modules/@material-ui/core/DialogActions/index.js"));

var _DialogContent = _interopRequireDefault(__webpack_require__(/*! @material-ui/core/DialogContent */ "./node_modules/@material-ui/core/DialogContent/index.js"));

var _DialogTitle = _interopRequireDefault(__webpack_require__(/*! @material-ui/core/DialogTitle */ "./node_modules/@material-ui/core/DialogTitle/index.js"));

var _InputLabel = _interopRequireDefault(__webpack_require__(/*! @material-ui/core/InputLabel */ "./node_modules/@material-ui/core/InputLabel/index.js"));

var _Input = _interopRequireDefault(__webpack_require__(/*! @material-ui/core/Input */ "./node_modules/@material-ui/core/Input/index.js"));

var _FormControl = _interopRequireDefault(__webpack_require__(/*! @material-ui/core/FormControl */ "./node_modules/@material-ui/core/FormControl/index.js"));

var _Select = _interopRequireDefault(__webpack_require__(/*! @material-ui/core/Select */ "./node_modules/@material-ui/core/Select/index.js"));

var _constants = _interopRequireDefault(__webpack_require__(/*! jmarroyave/conf/constants */ "./src/jmarroyave/conf/constants.js"));

__webpack_require__(/*! ./com_version.scss */ "./src/jmarroyave/components/uxi/core/com_version.scss");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

var Component =
/*#__PURE__*/
function (_React$Component) {
  _inherits(Component, _React$Component);

  function Component(props) {
    var _this;

    _classCallCheck(this, Component);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(Component).call(this, props));

    var com = window.__api.getComponentsVersion();

    _this.state = {
      option: com.id
    };
    _this.handleChange = _this.handleChange.bind(_assertThisInitialized(_this));
    _this.onClose = _this.onClose.bind(_assertThisInitialized(_this));
    return _this;
  }

  _createClass(Component, [{
    key: "handleChange",
    value: function handleChange(event) {
      var value = event.target.value;
      this.setState({
        option: value
      });

      window.__api.setComponentsVersion(value);
    }
  }, {
    key: "onClose",
    value: function onClose() {
      if (this.props.onClose != null) {
        this.props.onClose();
      }
    }
  }, {
    key: "render",
    value: function render() {
      if (!_constants.default.COM_SWITCH) {
        return null;
      }

      var data = _constants.default.UXI_VERSIONS;
      return _react.default.createElement("div", {
        className: "mod-version"
      }, _react.default.createElement(_FormControl.default, null, _react.default.createElement(_InputLabel.default, {
        htmlFor: "native-simple"
      }, "UXUI Version"), _react.default.createElement(_Select.default, {
        native: true,
        value: this.state.option,
        onChange: this.handleChange,
        input: _react.default.createElement(_Input.default, {
          id: "native-simple"
        })
      }, data.map(function (item) {
        return item.visible && _react.default.createElement("option", {
          key: item.id,
          value: item.id
        }, item.family, " ", "".concat(item.version[0], ".").concat(item.version[1], ".").concat(item.version[2]));
      }))));
    }
  }]);

  return Component;
}(_react.default.Component);

var _default = (0, _withModule.default)(Component);

exports.default = _default;

/***/ }),

/***/ "./src/jmarroyave/components/uxi/core/com_version.scss":
/*!*************************************************************!*\
  !*** ./src/jmarroyave/components/uxi/core/com_version.scss ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../../../../../../frameworks/webapps/startup/node_modules/css-loader/dist/cjs.js!../../../../../../../../../frameworks/webapps/startup/node_modules/sass-loader/lib/loader.js!./com_version.scss */ "../../../../frameworks/webapps/startup/node_modules/css-loader/dist/cjs.js!../../../../frameworks/webapps/startup/node_modules/sass-loader/lib/loader.js!./src/jmarroyave/components/uxi/core/com_version.scss");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../../../../../../../../frameworks/webapps/startup/node_modules/style-loader/lib/addStyles.js */ "../../../../frameworks/webapps/startup/node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ "./src/jmarroyave/components/uxi/core/debug.js":
/*!*****************************************************!*\
  !*** ./src/jmarroyave/components/uxi/core/debug.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "./node_modules/react/index.js"));

var _withModule = _interopRequireDefault(__webpack_require__(/*! jmarroyave/components/uxi/core/with-module */ "./src/jmarroyave/components/uxi/core/with-module.js"));

var _reactDeviceDetect = __webpack_require__(/*! react-device-detect */ "./node_modules/react-device-detect/dist/index.js");

var _constants = _interopRequireDefault(__webpack_require__(/*! jmarroyave/conf/constants */ "./src/jmarroyave/conf/constants.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

var Debug =
/*#__PURE__*/
function (_React$Component) {
  _inherits(Debug, _React$Component);

  function Debug() {
    _classCallCheck(this, Debug);

    return _possibleConstructorReturn(this, _getPrototypeOf(Debug).apply(this, arguments));
  }

  _createClass(Debug, [{
    key: "render",
    value: function render() {
      var app = this.props.app;
      var data = "data" in this.props ? this.props.data : {};
      if (!app) return _react.default.createElement("div", null);
      return _react.default.createElement("div", null, _constants.default.DEBUG && _react.default.createElement("div", {
        className: "mod-debug"
      }, _react.default.createElement("span", null, _react.default.createElement("b", null, "Version: ", _constants.default.VERSION)), _react.default.createElement("br", null), _react.default.createElement("span", null, _react.default.createElement("b", null, "Size:"), " ", window.innerWidth || document.body.clientWidth, " x ", window.innerHeight || document.body.clientHeight), _react.default.createElement("br", null), _react.default.createElement("span", null, _react.default.createElement("b", null, "Browser:"), " ", _reactDeviceDetect.browserName, " v.[", _reactDeviceDetect.browserVersion, "]"), _react.default.createElement("br", null), _react.default.createElement(_reactDeviceDetect.MobileView, null, _react.default.createElement("span", null, _react.default.createElement("b", null, "Mobile:"), " ", _reactDeviceDetect.mobileVendor, " ", _reactDeviceDetect.mobileModel), _react.default.createElement("br", null)), _react.default.createElement("span", null, _react.default.createElement("b", null, "OS:"), " ", _reactDeviceDetect.osName, " v.[", _reactDeviceDetect.osVersion, "]"), _react.default.createElement("br", null), app.error && _react.default.createElement("div", null, _react.default.createElement("hr", null), _react.default.createElement("span", null, _react.default.createElement("b", null, "Error:"), " ", app.error))));
    }
  }]);

  return Debug;
}(_react.default.Component);

var _default = (0, _withModule.default)(Debug);

exports.default = _default;

/***/ }),

/***/ "./src/jmarroyave/components/uxi/core/footer_links.js":
/*!************************************************************!*\
  !*** ./src/jmarroyave/components/uxi/core/footer_links.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "./node_modules/react/index.js"));

var _grid_container = _interopRequireDefault(__webpack_require__(/*! jmarroyave/components/uxi/core/grid_container */ "./src/jmarroyave/components/uxi/core/grid_container.js"));

var _grid_item = _interopRequireDefault(__webpack_require__(/*! jmarroyave/components/uxi/core/grid_item */ "./src/jmarroyave/components/uxi/core/grid_item.js"));

var _link = _interopRequireDefault(__webpack_require__(/*! core/ui/link */ "./src/core/ui/link.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

var Component =
/*#__PURE__*/
function (_React$Component) {
  _inherits(Component, _React$Component);

  function Component() {
    _classCallCheck(this, Component);

    return _possibleConstructorReturn(this, _getPrototypeOf(Component).apply(this, arguments));
  }

  _createClass(Component, [{
    key: "render",
    value: function render() {
      return _react.default.createElement(_grid_container.default, {
        spacing: 8
      }, _react.default.createElement(_grid_item.default, {
        xs: 12,
        sm: 6,
        md: 4
      }, _react.default.createElement("h1", null, "jmarroyave"), _react.default.createElement("div", null, _react.default.createElement(_link.default, {
        to: '/acerca'
      }, "acerca"))), _react.default.createElement(_grid_item.default, {
        xs: 12,
        sm: 6,
        md: 4
      }, _react.default.createElement("h1", null, "labs"), _react.default.createElement("div", null, _react.default.createElement(_link.default, {
        to: 'labs/mlb'
      }, "mlb")), _react.default.createElement("div", null, _react.default.createElement(_link.default, {
        to: 'labs/trends'
      }, "trends")), _react.default.createElement("div", null, _react.default.createElement(_link.default, {
        to: 'labs/search'
      }, "search"))), _react.default.createElement(_grid_item.default, {
        xs: 12,
        sm: 6,
        md: 4
      }, _react.default.createElement("h1", null, "knowledge base"), _react.default.createElement("div", null, _react.default.createElement(_link.default, {
        to: 'kb/android'
      }, "android libs"))));
    }
  }]);

  return Component;
}(_react.default.Component);

var _default = Component;
exports.default = _default;

/***/ }),

/***/ "./src/jmarroyave/components/uxi/core/grid_container.js":
/*!**************************************************************!*\
  !*** ./src/jmarroyave/components/uxi/core/grid_container.js ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "./node_modules/react/index.js"));

var _withModule = _interopRequireDefault(__webpack_require__(/*! jmarroyave/components/uxi/core/with-module */ "./src/jmarroyave/components/uxi/core/with-module.js"));

var _Grid = _interopRequireDefault(__webpack_require__(/*! @material-ui/core/Grid */ "./node_modules/@material-ui/core/Grid/index.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

var GridContainer =
/*#__PURE__*/
function (_React$Component) {
  _inherits(GridContainer, _React$Component);

  function GridContainer() {
    _classCallCheck(this, GridContainer);

    return _possibleConstructorReturn(this, _getPrototypeOf(GridContainer).apply(this, arguments));
  }

  _createClass(GridContainer, [{
    key: "render",
    value: function render() {
      var spacing = "spacing" in this.props ? this.props.spacing : 0;
      var align = "align" in this.props ? this.props.align : "justify" in this.props ? this.props.justify : 'flex-start';
      var valign = "valign" in this.props ? this.props.align : "alignItems" in this.props ? this.props.alignItems : 'flex-start';
      var direction = "direction" in this.props ? this.props.direction : 'row';
      var className = "className" in this.props ? this.props.className : '';
      return _react.default.createElement(_Grid.default, {
        className: className,
        container: true,
        spacing: spacing,
        style: {
          width: '100%'
        },
        direction: direction,
        alignItems: valign,
        justify: align
      }, this.props.children);
    }
  }]);

  return GridContainer;
}(_react.default.Component);

var _default = (0, _withModule.default)(GridContainer);

exports.default = _default;

/***/ }),

/***/ "./src/jmarroyave/components/uxi/core/grid_item.js":
/*!*********************************************************!*\
  !*** ./src/jmarroyave/components/uxi/core/grid_item.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "./node_modules/react/index.js"));

var _withModule = _interopRequireDefault(__webpack_require__(/*! jmarroyave/components/uxi/core/with-module */ "./src/jmarroyave/components/uxi/core/with-module.js"));

var _Grid = _interopRequireDefault(__webpack_require__(/*! @material-ui/core/Grid */ "./node_modules/@material-ui/core/Grid/index.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

var GridItem =
/*#__PURE__*/
function (_React$Component) {
  _inherits(GridItem, _React$Component);

  function GridItem() {
    _classCallCheck(this, GridItem);

    return _possibleConstructorReturn(this, _getPrototypeOf(GridItem).apply(this, arguments));
  }

  _createClass(GridItem, [{
    key: "render",
    value: function render() {
      var visible = "visible" in this.props ? this.props.visible : true;
      var xs = "xs" in this.props ? this.props.xs : 12;
      var className = "className" in this.props ? this.props.className : '';
      return visible && _react.default.createElement(_Grid.default, {
        className: className,
        item: true,
        xs: xs,
        sm: this.props.sm,
        md: this.props.md,
        style: this.props.style
      }, this.props.children);
    }
  }]);

  return GridItem;
}(_react.default.Component);

var _default = (0, _withModule.default)(GridItem);

exports.default = _default;

/***/ }),

/***/ "./src/jmarroyave/components/uxi/core/page/app.js":
/*!********************************************************!*\
  !*** ./src/jmarroyave/components/uxi/core/page/app.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "./node_modules/react/index.js"));

var _app = _interopRequireDefault(__webpack_require__(/*! core/ui/app */ "./src/core/ui/app.js"));

var _constants = _interopRequireDefault(__webpack_require__(/*! jmarroyave/conf/constants */ "./src/jmarroyave/conf/constants.js"));

var _theme = _interopRequireDefault(__webpack_require__(/*! jmarroyave/conf/theme */ "./src/jmarroyave/conf/theme.js"));

var _styles = __webpack_require__(/*! @material-ui/core/styles */ "./node_modules/@material-ui/core/styles/index.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

var theme = (0, _styles.createMuiTheme)({
  palette: {
    primary: _theme.default.primary,
    secondary: _theme.default.secondary
  }
});

var App =
/*#__PURE__*/
function (_React$Component) {
  _inherits(App, _React$Component);

  function App() {
    _classCallCheck(this, App);

    return _possibleConstructorReturn(this, _getPrototypeOf(App).apply(this, arguments));
  }

  _createClass(App, [{
    key: "render",
    value: function render() {
      var page_title = "JMArroyave";

      var appBody = _react.default.Children.toArray(this.props.children).find(function (item) {
        return item.props.type === 'Body' ? item : null;
      });

      return _react.default.createElement(_app.default, {
        drawer: false,
        notifications: false,
        theme: theme,
        server: this.props.server,
        title: false,
        page_title: page_title,
        nav: window.__nav,
        barStyle: {
          backgroundColor: '#0c3c56',
          color: 'white'
        }
      }, appBody);
    }
  }]);

  return App;
}(_react.default.Component);

var _default = App;
exports.default = _default;

/***/ }),

/***/ "./src/jmarroyave/components/uxi/core/page/body.js":
/*!*********************************************************!*\
  !*** ./src/jmarroyave/components/uxi/core/page/body.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "./node_modules/react/index.js"));

var _footer = _interopRequireDefault(__webpack_require__(/*! jmarroyave/components/uxi/core/page/footer */ "./src/jmarroyave/components/uxi/core/page/footer.js"));

var _header = _interopRequireDefault(__webpack_require__(/*! jmarroyave/components/uxi/core/page/header */ "./src/jmarroyave/components/uxi/core/page/header.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

var AppBody =
/*#__PURE__*/
function (_React$Component) {
  _inherits(AppBody, _React$Component);

  function AppBody() {
    _classCallCheck(this, AppBody);

    return _possibleConstructorReturn(this, _getPrototypeOf(AppBody).apply(this, arguments));
  }

  _createClass(AppBody, [{
    key: "render",
    value: function render() {
      var app = this.props.app;
      var data = this.props.data;
      var children = this.props.children;
      return _react.default.createElement("div", {
        style: {
          position: 'relative'
        }
      }, _react.default.createElement(_header.default, {
        app: app,
        data: data
      }), _react.default.createElement("div", {
        style: {
          minHeight: '90vh'
        }
      }, children), _react.default.createElement(_footer.default, null));
    }
  }]);

  return AppBody;
}(_react.default.Component);

AppBody.defaultProps = {
  type: 'Body'
};
var _default = AppBody;
exports.default = _default;

/***/ }),

/***/ "./src/jmarroyave/components/uxi/core/page/footer.js":
/*!***********************************************************!*\
  !*** ./src/jmarroyave/components/uxi/core/page/footer.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "./node_modules/react/index.js"));

var _withModule = _interopRequireDefault(__webpack_require__(/*! jmarroyave/components/uxi/core/with-module */ "./src/jmarroyave/components/uxi/core/with-module.js"));

var _grid_container = _interopRequireDefault(__webpack_require__(/*! jmarroyave/components/uxi/core/grid_container */ "./src/jmarroyave/components/uxi/core/grid_container.js"));

var _grid_item = _interopRequireDefault(__webpack_require__(/*! jmarroyave/components/uxi/core/grid_item */ "./src/jmarroyave/components/uxi/core/grid_item.js"));

var _footer_links = _interopRequireDefault(__webpack_require__(/*! jmarroyave/components/uxi/core/footer_links */ "./src/jmarroyave/components/uxi/core/footer_links.js"));

var _social_networks = _interopRequireDefault(__webpack_require__(/*! shared/jmarroyave/social_networks */ "./src/shared/jmarroyave/social_networks.js"));

var _block = _interopRequireDefault(__webpack_require__(/*! core/components/mockup/block */ "./src/core/components/mockup/block.js"));

__webpack_require__(/*! ./footer.scss */ "./src/jmarroyave/components/uxi/core/page/footer.scss");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

var FooterComponent =
/*#__PURE__*/
function (_React$Component) {
  _inherits(FooterComponent, _React$Component);

  function FooterComponent() {
    _classCallCheck(this, FooterComponent);

    return _possibleConstructorReturn(this, _getPrototypeOf(FooterComponent).apply(this, arguments));
  }

  _createClass(FooterComponent, [{
    key: "render",
    value: function render() {
      var data = this.props.data;
      return _react.default.createElement("div", {
        className: "mod-footer"
      }, _react.default.createElement(_grid_container.default, {
        spacing: 8
      }, _react.default.createElement(_grid_item.default, {
        xs: 12
      }, _react.default.createElement(_footer_links.default, {
        data: data
      })), _react.default.createElement(_grid_item.default, {
        xs: 12,
        style: {
          textAlign: 'center'
        }
      }, _react.default.createElement(_social_networks.default, null))));
    }
  }]);

  return FooterComponent;
}(_react.default.Component);

var _default = (0, _withModule.default)(FooterComponent);

exports.default = _default;

/***/ }),

/***/ "./src/jmarroyave/components/uxi/core/page/footer.scss":
/*!*************************************************************!*\
  !*** ./src/jmarroyave/components/uxi/core/page/footer.scss ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../../../../../../../frameworks/webapps/startup/node_modules/css-loader/dist/cjs.js!../../../../../../../../../../frameworks/webapps/startup/node_modules/sass-loader/lib/loader.js!./footer.scss */ "../../../../frameworks/webapps/startup/node_modules/css-loader/dist/cjs.js!../../../../frameworks/webapps/startup/node_modules/sass-loader/lib/loader.js!./src/jmarroyave/components/uxi/core/page/footer.scss");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../../../../../../../../../frameworks/webapps/startup/node_modules/style-loader/lib/addStyles.js */ "../../../../frameworks/webapps/startup/node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ "./src/jmarroyave/components/uxi/core/page/header.js":
/*!***********************************************************!*\
  !*** ./src/jmarroyave/components/uxi/core/page/header.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "./node_modules/react/index.js"));

var _component = _interopRequireDefault(__webpack_require__(/*! core/components/component */ "./src/core/components/component.js"));

var _debug = _interopRequireDefault(__webpack_require__(/*! jmarroyave/components/uxi/core/debug */ "./src/jmarroyave/components/uxi/core/debug.js"));

var _com_version = _interopRequireDefault(__webpack_require__(/*! jmarroyave/components/uxi/core/com_version */ "./src/jmarroyave/components/uxi/core/com_version.js"));

var _top_bar = _interopRequireDefault(__webpack_require__(/*! jmarroyave/components/uxi/core/top_bar */ "./src/jmarroyave/components/uxi/core/top_bar.js"));

var _grid_container = _interopRequireDefault(__webpack_require__(/*! jmarroyave/components/uxi/core/grid_container */ "./src/jmarroyave/components/uxi/core/grid_container.js"));

var _grid_item = _interopRequireDefault(__webpack_require__(/*! jmarroyave/components/uxi/core/grid_item */ "./src/jmarroyave/components/uxi/core/grid_item.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

var HeaderComponent =
/*#__PURE__*/
function (_React$Component) {
  _inherits(HeaderComponent, _React$Component);

  function HeaderComponent(props) {
    _classCallCheck(this, HeaderComponent);

    return _possibleConstructorReturn(this, _getPrototypeOf(HeaderComponent).call(this, props));
  }

  _createClass(HeaderComponent, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          app = _this$props.app,
          data = _this$props.data;
      return _react.default.createElement(_grid_container.default, null, _react.default.createElement(_grid_item.default, null, _react.default.createElement(_com_version.default, null), _react.default.createElement(_debug.default, {
        app: app,
        data: data
      })), _react.default.createElement(_grid_item.default, null, _react.default.createElement(_top_bar.default, {
        data: app
      })));
    }
  }]);

  return HeaderComponent;
}(_react.default.Component);

var _default = (0, _component.default)(HeaderComponent);

exports.default = _default;

/***/ }),

/***/ "./src/jmarroyave/components/uxi/core/top_bar.js":
/*!*******************************************************!*\
  !*** ./src/jmarroyave/components/uxi/core/top_bar.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "./node_modules/react/index.js"));

var _component = _interopRequireDefault(__webpack_require__(/*! core/components/component */ "./src/core/components/component.js"));

var _grid_container = _interopRequireDefault(__webpack_require__(/*! jmarroyave/components/uxi/core/grid_container */ "./src/jmarroyave/components/uxi/core/grid_container.js"));

var _grid_item = _interopRequireDefault(__webpack_require__(/*! jmarroyave/components/uxi/core/grid_item */ "./src/jmarroyave/components/uxi/core/grid_item.js"));

var _block = _interopRequireDefault(__webpack_require__(/*! jmarroyave/components/uxi/home/block */ "./src/jmarroyave/components/uxi/home/block.js"));

var _whats_hot = _interopRequireDefault(__webpack_require__(/*! jmarroyave/components/uxi/core/whats_hot */ "./src/jmarroyave/components/uxi/core/whats_hot.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

var TopBar =
/*#__PURE__*/
function (_React$Component) {
  _inherits(TopBar, _React$Component);

  function TopBar() {
    _classCallCheck(this, TopBar);

    return _possibleConstructorReturn(this, _getPrototypeOf(TopBar).apply(this, arguments));
  }

  _createClass(TopBar, [{
    key: "render",
    value: function render() {
      var data = this.props.data;
      var hot = data && data.hot ? data.hot : null;
      return _react.default.createElement(_block.default, null, _react.default.createElement(_grid_container.default, null, _react.default.createElement(_grid_item.default, {
        xs: 12
      }, _react.default.createElement(_whats_hot.default, {
        check_data: false,
        data: hot
      }))));
    }
  }]);

  return TopBar;
}(_react.default.Component);

var _default = (0, _component.default)(TopBar);

exports.default = _default;

/***/ }),

/***/ "./src/jmarroyave/components/uxi/core/version_label.js":
/*!*************************************************************!*\
  !*** ./src/jmarroyave/components/uxi/core/version_label.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "./node_modules/react/index.js"));

var _constants = _interopRequireDefault(__webpack_require__(/*! jmarroyave/conf/constants */ "./src/jmarroyave/conf/constants.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

var Component =
/*#__PURE__*/
function (_React$Component) {
  _inherits(Component, _React$Component);

  function Component() {
    _classCallCheck(this, Component);

    return _possibleConstructorReturn(this, _getPrototypeOf(Component).apply(this, arguments));
  }

  _createClass(Component, [{
    key: "render",
    value: function render() {
      if (!_constants.default.DEBUG) return null;
      var index = "index" in this.props ? this.props.index : null;

      var version = window.__components.getCurrentVersion();

      var versionRes = window.__components.getResolvedVersion(index);

      return _react.default.createElement("div", {
        className: "mod-version-label"
      }, "title" in this.props && _react.default.createElement("div", null, this.props.title), _react.default.createElement("div", null, "resolved:", versionRes.family, ":", versionRes.version[0], ".", versionRes.version[1], ".", versionRes.version[2]), _react.default.createElement("div", null, "required:", version.family, ":", version.version[0], ".", version.version[1], ".", version.version[2]));
    }
  }]);

  return Component;
}(_react.default.Component);

var _default = Component;
exports.default = _default;

/***/ }),

/***/ "./src/jmarroyave/components/uxi/core/whats_hot.js":
/*!*********************************************************!*\
  !*** ./src/jmarroyave/components/uxi/core/whats_hot.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "./node_modules/react/index.js"));

var _post_link = _interopRequireDefault(__webpack_require__(/*! jmarroyave/components/data/post_link */ "./src/jmarroyave/components/data/post_link.js"));

var _component = _interopRequireDefault(__webpack_require__(/*! core/components/component */ "./src/core/components/component.js"));

var _loading = _interopRequireDefault(__webpack_require__(/*! core/ui/loading */ "./src/core/ui/loading.js"));

__webpack_require__(/*! ./whats_hot.scss */ "./src/jmarroyave/components/uxi/core/whats_hot.scss");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

var HotBarComponent =
/*#__PURE__*/
function (_React$Component) {
  _inherits(HotBarComponent, _React$Component);

  function HotBarComponent() {
    _classCallCheck(this, HotBarComponent);

    return _possibleConstructorReturn(this, _getPrototypeOf(HotBarComponent).apply(this, arguments));
  }

  _createClass(HotBarComponent, [{
    key: "render",
    value: function render() {
      var data = this.props.data;
      return _react.default.createElement("div", {
        className: "mod-whats-hot"
      }, data != null ? _react.default.createElement(_post_link.default, {
        slug: data.slug,
        category: data.area
      }, data.area, " > ", data.title) : _react.default.createElement(_loading.default, null));
    }
  }]);

  return HotBarComponent;
}(_react.default.Component);

var _default = (0, _component.default)(HotBarComponent);

exports.default = _default;

/***/ }),

/***/ "./src/jmarroyave/components/uxi/core/whats_hot.scss":
/*!***********************************************************!*\
  !*** ./src/jmarroyave/components/uxi/core/whats_hot.scss ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../../../../../../frameworks/webapps/startup/node_modules/css-loader/dist/cjs.js!../../../../../../../../../frameworks/webapps/startup/node_modules/sass-loader/lib/loader.js!./whats_hot.scss */ "../../../../frameworks/webapps/startup/node_modules/css-loader/dist/cjs.js!../../../../frameworks/webapps/startup/node_modules/sass-loader/lib/loader.js!./src/jmarroyave/components/uxi/core/whats_hot.scss");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../../../../../../../../frameworks/webapps/startup/node_modules/style-loader/lib/addStyles.js */ "../../../../frameworks/webapps/startup/node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ "./src/jmarroyave/components/uxi/core/with-module.js":
/*!***********************************************************!*\
  !*** ./src/jmarroyave/components/uxi/core/with-module.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "./node_modules/react/index.js"));

var _error = _interopRequireDefault(__webpack_require__(/*! core/components/error */ "./src/core/components/error.js"));

var _loading = _interopRequireDefault(__webpack_require__(/*! core/components/loading.js */ "./src/core/components/loading.js"));

var _constants = _interopRequireDefault(__webpack_require__(/*! jmarroyave/conf/constants */ "./src/jmarroyave/conf/constants.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

var withModule = function withModule(ModuleComponent) {
  return (
    /*#__PURE__*/
    function (_React$Component) {
      _inherits(_class, _React$Component);

      function _class() {
        _classCallCheck(this, _class);

        return _possibleConstructorReturn(this, _getPrototypeOf(_class).apply(this, arguments));
      }

      _createClass(_class, [{
        key: "render",
        value: function render() {
          var title = "title" in this.props ? this.props.title : null;
          var ph = "placeholder" in this.props ? this.props.placeholder : {};
          var phW = ph.width ? ph.width : '100%';
          var phH = ph.height ? ph.height : '250';
          return _react.default.createElement(_error.default, {
            from: title,
            style: {
              width: '100%'
            }
          }, _react.default.createElement(ModuleComponent, this.props));
        }
      }]);

      return _class;
    }(_react.default.Component)
  );
};

var _default = withModule;
exports.default = _default;

/***/ }),

/***/ "./src/jmarroyave/components/uxi/cv/content.js":
/*!*****************************************************!*\
  !*** ./src/jmarroyave/components/uxi/cv/content.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "./node_modules/react/index.js"));

var _component = _interopRequireDefault(__webpack_require__(/*! core/components/component */ "./src/core/components/component.js"));

__webpack_require__(/*! ./content.scss */ "./src/jmarroyave/components/uxi/cv/content.scss");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

var Content =
/*#__PURE__*/
function (_React$Component) {
  _inherits(Content, _React$Component);

  function Content(props, context) {
    var _this;

    _classCallCheck(this, Content);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(Content).call(this, props, context));
    _this.api = window.__api;
    return _this;
  }

  _createClass(Content, [{
    key: "componentDidMount",
    value: function componentDidMount() {}
  }, {
    key: "render",
    value: function render() {
      var data = this.props.data;
      var key = 0;
      return _react.default.createElement("div", {
        className: "mod-content"
      }, _react.default.createElement("div", {
        className: "row"
      }, _react.default.createElement("div", {
        className: "col"
      }, _react.default.createElement("div", null, _react.default.createElement("h3", null, "Resumen"), _react.default.createElement("div", null, "Estudi\xE9 ciencias de la computaci\xF3n y he trabajado en desarrollo de software por varios a\xF1os formando mi experiencia en todo el ciclo de desarrollo del l mismo, desde el an\xE1lisis de requerimientos hasta la implementaci\xF3n del sistema y capacitaci\xF3n de usuarios. Tengo experiencia en diferentes plataformas de desarrollo y en la pr\xE1ctica de varias metodolog\xEDas, adem\xE1s he trabajado gestionando equipos de desarrollo o y administrando el desarrollo tanto de proyectos como productos de software."), _react.default.createElement("h3", null, "Experiencia Profesional"), _react.default.createElement("div", null, _react.default.createElement("ul", null, _react.default.createElement("li", null, "Desarrollo web, desktop y m\xF3vil."), _react.default.createElement("li", null, "Desarrollo e integraci\xF3n de sistemas"), _react.default.createElement("li", null, "Sistemas de informaci\xF3n y gesti\xF3n empresarial."), _react.default.createElement("li", null, "Dise\xF1o de sistemas inform\xE1ticos."), _react.default.createElement("li", null, "Administraci\xF3n de equipos de desarrollo de software."), _react.default.createElement("li", null, "Implementaci\xF3n y capacitaci\xF3n de usuarios tanto operativos como expertos."))), _react.default.createElement("h3", null, "Formaci\xF3n Acad\xE9mica"), _react.default.createElement("div", null, "Lic. en Ingenier\xEDa en Ciencias de la Computaci\xF3n - Cum Laude 2,005, Universidad del Valle de Guatemala")), _react.default.createElement("br", null), _react.default.createElement("br", null))));
    }
  }]);

  return Content;
}(_react.default.Component);

var _default = (0, _component.default)(Content);

exports.default = _default;

/***/ }),

/***/ "./src/jmarroyave/components/uxi/cv/content.scss":
/*!*******************************************************!*\
  !*** ./src/jmarroyave/components/uxi/cv/content.scss ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../../../../../../frameworks/webapps/startup/node_modules/css-loader/dist/cjs.js!../../../../../../../../../frameworks/webapps/startup/node_modules/sass-loader/lib/loader.js!./content.scss */ "../../../../frameworks/webapps/startup/node_modules/css-loader/dist/cjs.js!../../../../frameworks/webapps/startup/node_modules/sass-loader/lib/loader.js!./src/jmarroyave/components/uxi/cv/content.scss");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../../../../../../../../frameworks/webapps/startup/node_modules/style-loader/lib/addStyles.js */ "../../../../frameworks/webapps/startup/node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ "./src/jmarroyave/components/uxi/cv/courses.js":
/*!*****************************************************!*\
  !*** ./src/jmarroyave/components/uxi/cv/courses.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "./node_modules/react/index.js"));

var _version_label = _interopRequireDefault(__webpack_require__(/*! jmarroyave/components/uxi/core/version_label */ "./src/jmarroyave/components/uxi/core/version_label.js"));

var _withModule = _interopRequireDefault(__webpack_require__(/*! jmarroyave/components/uxi/core/with-module */ "./src/jmarroyave/components/uxi/core/with-module.js"));

var _courses = _interopRequireDefault(__webpack_require__(/*! jmarroyave/themes/grey/0.0.0/uxi/cv/courses */ "./src/jmarroyave/themes/grey/0.0.0/uxi/cv/courses.js"));

var _courses2 = _interopRequireDefault(__webpack_require__(/*! jmarroyave/themes/grey/19.2.1/uxi/cv/courses */ "./src/jmarroyave/themes/grey/19.2.1/uxi/cv/courses.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

var Component =
/*#__PURE__*/
function (_React$Component) {
  _inherits(Component, _React$Component);

  function Component(props) {
    var _this;

    _classCallCheck(this, Component);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(Component).call(this, props));
    _this.index = [{
      family: "grey",
      version: [0, 0, 0],
      control: _courses.default
    }, {
      family: "grey",
      version: [19, 2, 1],
      control: _courses2.default
    }];
    return _this;
  }

  _createClass(Component, [{
    key: "render",
    value: function render() {
      var title = "uxi/cv/courses";

      var Control = window.__components.resolve(this.index, title);

      return _react.default.createElement("div", {
        style: {
          position: 'relative'
        }
      }, _react.default.createElement(_version_label.default, {
        index: this.index
      }), _react.default.createElement(Control, this.props));
    }
  }]);

  return Component;
}(_react.default.Component);

var _default = (0, _withModule.default)(Component);

exports.default = _default;

/***/ }),

/***/ "./src/jmarroyave/components/uxi/cv/latest_courses.js":
/*!************************************************************!*\
  !*** ./src/jmarroyave/components/uxi/cv/latest_courses.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "./node_modules/react/index.js"));

var _component = _interopRequireDefault(__webpack_require__(/*! core/components/component */ "./src/core/components/component.js"));

var _grid_container = _interopRequireDefault(__webpack_require__(/*! jmarroyave/components/uxi/core/grid_container */ "./src/jmarroyave/components/uxi/core/grid_container.js"));

var _grid_item = _interopRequireDefault(__webpack_require__(/*! jmarroyave/components/uxi/core/grid_item */ "./src/jmarroyave/components/uxi/core/grid_item.js"));

var _reactStarRatings = _interopRequireDefault(__webpack_require__(/*! react-star-ratings */ "./node_modules/react-star-ratings/build/index.js"));

__webpack_require__(/*! ./latest_courses.scss */ "./src/jmarroyave/components/uxi/cv/latest_courses.scss");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function Course(_ref) {
  var data = _ref.data;
  return _react.default.createElement(_grid_item.default, {
    xs: 12,
    sm: 6,
    md: 4,
    className: "course"
  }, _react.default.createElement("div", {
    className: "header"
  }, _react.default.createElement("div", {
    className: "platform"
  }, data.platform), _react.default.createElement("div", {
    className: "rating"
  }, _react.default.createElement(_reactStarRatings.default, {
    rating: data.rating,
    starRatedColor: "#222",
    numberOfStars: 5,
    starDimension: "8px",
    starSpacing: "2px"
  }))), _react.default.createElement("div", {
    className: "name"
  }, data.name), _react.default.createElement("div", {
    className: "from"
  }, data.from));
}

var LatestCourses =
/*#__PURE__*/
function (_React$Component) {
  _inherits(LatestCourses, _React$Component);

  function LatestCourses() {
    _classCallCheck(this, LatestCourses);

    return _possibleConstructorReturn(this, _getPrototypeOf(LatestCourses).apply(this, arguments));
  }

  _createClass(LatestCourses, [{
    key: "render",
    value: function render() {
      var key = 0;
      var data = this.props.data;
      return _react.default.createElement(_grid_container.default, {
        spacing: 8,
        className: "mod-latest-courses"
      }, data.slice(0, 3).map(function (item) {
        return _react.default.createElement(Course, {
          data: item,
          key: key++
        });
      }));
    }
  }]);

  return LatestCourses;
}(_react.default.Component);

var _default = (0, _component.default)(LatestCourses);

exports.default = _default;

/***/ }),

/***/ "./src/jmarroyave/components/uxi/cv/latest_courses.scss":
/*!**************************************************************!*\
  !*** ./src/jmarroyave/components/uxi/cv/latest_courses.scss ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../../../../../../frameworks/webapps/startup/node_modules/css-loader/dist/cjs.js!../../../../../../../../../frameworks/webapps/startup/node_modules/sass-loader/lib/loader.js!./latest_courses.scss */ "../../../../frameworks/webapps/startup/node_modules/css-loader/dist/cjs.js!../../../../frameworks/webapps/startup/node_modules/sass-loader/lib/loader.js!./src/jmarroyave/components/uxi/cv/latest_courses.scss");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../../../../../../../../frameworks/webapps/startup/node_modules/style-loader/lib/addStyles.js */ "../../../../frameworks/webapps/startup/node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ "./src/jmarroyave/components/uxi/cv/layout/layout-proxy.js":
/*!*****************************************************************!*\
  !*** ./src/jmarroyave/components/uxi/cv/layout/layout-proxy.js ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "./node_modules/react/index.js"));

var _Hidden = _interopRequireDefault(__webpack_require__(/*! @material-ui/core/Hidden */ "./node_modules/@material-ui/core/Hidden/index.js"));

var _reactDeviceDetect = __webpack_require__(/*! react-device-detect */ "./node_modules/react-device-detect/dist/index.js");

var _withModule = _interopRequireDefault(__webpack_require__(/*! jmarroyave/components/uxi/core/with-module */ "./src/jmarroyave/components/uxi/core/with-module.js"));

var _page = _interopRequireDefault(__webpack_require__(/*! jmarroyave/components/uxi/cv/layout/lg/page */ "./src/jmarroyave/components/uxi/cv/layout/lg/page.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

var PageComponent =
/*#__PURE__*/
function (_React$Component) {
  _inherits(PageComponent, _React$Component);

  function PageComponent() {
    _classCallCheck(this, PageComponent);

    return _possibleConstructorReturn(this, _getPrototypeOf(PageComponent).apply(this, arguments));
  }

  _createClass(PageComponent, [{
    key: "render",
    value: function render() {
      return this.renderDefault();
    }
  }, {
    key: "renderDefault",
    value: function renderDefault() {
      var data = this.props.data;
      return _react.default.createElement("div", {
        style: {
          width: '100%'
        }
      }, _react.default.createElement(_page.default, {
        data: data
      }));
    }
  }, {
    key: "renderMultiple",
    value: function renderMultiple() {
      var data = this.props.data;
      return _react.default.createElement("div", {
        style: {
          width: '100%'
        }
      }, _react.default.createElement(_Hidden.default, {
        only: ['sm', 'md', 'lg', 'xl']
      }, _react.default.createElement(_page.default, {
        data: data
      })), _react.default.createElement(_Hidden.default, {
        only: ['xs', 'md', 'lg', 'xl']
      }, _react.default.createElement(_page.default, {
        data: data
      })), _react.default.createElement(_Hidden.default, {
        only: ['xs', 'sm']
      }, _react.default.createElement(_page.default, {
        data: data
      })));
    }
  }]);

  return PageComponent;
}(_react.default.Component);

var _default = (0, _withModule.default)(PageComponent);

exports.default = _default;

/***/ }),

/***/ "./src/jmarroyave/components/uxi/cv/layout/lg/page.js":
/*!************************************************************!*\
  !*** ./src/jmarroyave/components/uxi/cv/layout/lg/page.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "./node_modules/react/index.js"));

var _reactRouter = __webpack_require__(/*! react-router */ "./node_modules/react-router/es/index.js");

var _grid_container = _interopRequireDefault(__webpack_require__(/*! jmarroyave/components/uxi/core/grid_container */ "./src/jmarroyave/components/uxi/core/grid_container.js"));

var _grid_item = _interopRequireDefault(__webpack_require__(/*! jmarroyave/components/uxi/core/grid_item */ "./src/jmarroyave/components/uxi/core/grid_item.js"));

var _Hidden = _interopRequireDefault(__webpack_require__(/*! @material-ui/core/Hidden */ "./node_modules/@material-ui/core/Hidden/index.js"));

var _modules = _interopRequireDefault(__webpack_require__(/*! jmarroyave/conf/layout/modules */ "./src/jmarroyave/conf/layout/modules.js"));

var _withModule = _interopRequireDefault(__webpack_require__(/*! jmarroyave/components/uxi/core/with-module */ "./src/jmarroyave/components/uxi/core/with-module.js"));

var _block = _interopRequireDefault(__webpack_require__(/*! jmarroyave/components/uxi/home/block */ "./src/jmarroyave/components/uxi/home/block.js"));

var _block2 = _interopRequireDefault(__webpack_require__(/*! core/components/mockup/block */ "./src/core/components/mockup/block.js"));

var _section = _interopRequireDefault(__webpack_require__(/*! core/components/layout/section */ "./src/core/components/layout/section.js"));

var _content = _interopRequireDefault(__webpack_require__(/*! jmarroyave/components/uxi/cv/content */ "./src/jmarroyave/components/uxi/cv/content.js"));

var _courses = _interopRequireDefault(__webpack_require__(/*! jmarroyave/components/uxi/cv/courses */ "./src/jmarroyave/components/uxi/cv/courses.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

var PageComponent =
/*#__PURE__*/
function (_React$Component) {
  _inherits(PageComponent, _React$Component);

  function PageComponent() {
    _classCallCheck(this, PageComponent);

    return _possibleConstructorReturn(this, _getPrototypeOf(PageComponent).apply(this, arguments));
  }

  _createClass(PageComponent, [{
    key: "render",
    value: function render() {
      var data = this.props.data;
      var courses = data && data.courses ? data.courses : [];
      return _react.default.createElement(_grid_container.default, null, _react.default.createElement(_grid_item.default, null, _react.default.createElement(_grid_container.default, null, _react.default.createElement(_grid_item.default, {
        style: {
          padding: '20px 20px 30px 20px'
        }
      }, _react.default.createElement(_grid_container.default, null, _react.default.createElement(_grid_item.default, null, _react.default.createElement("h1", null, "acerca")), _react.default.createElement(_grid_item.default, null, _react.default.createElement(_content.default, null)), _react.default.createElement(_grid_item.default, null, _react.default.createElement(_courses.default, {
        data: data.courses,
        check_data: false
      })))))));
    }
  }]);

  return PageComponent;
}(_react.default.Component);

var _default = (0, _withModule.default)(PageComponent);

exports.default = _default;

/***/ }),

/***/ "./src/jmarroyave/components/uxi/cv/page.js":
/*!**************************************************!*\
  !*** ./src/jmarroyave/components/uxi/cv/page.js ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "./node_modules/react/index.js"));

var _reactLoadable = _interopRequireDefault(__webpack_require__(/*! react-loadable */ "./node_modules/react-loadable/lib/index.js"));

var _loading = _interopRequireDefault(__webpack_require__(/*! core/components/loading */ "./src/core/components/loading.js"));

var _app = _interopRequireDefault(__webpack_require__(/*! jmarroyave/components/uxi/core/page/app */ "./src/jmarroyave/components/uxi/core/page/app.js"));

var _body = _interopRequireDefault(__webpack_require__(/*! jmarroyave/components/uxi/core/page/body */ "./src/jmarroyave/components/uxi/core/page/body.js"));

var _layoutProxy = _interopRequireDefault(__webpack_require__(/*! jmarroyave/components/uxi/cv/layout/layout-proxy */ "./src/jmarroyave/components/uxi/cv/layout/layout-proxy.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

/*
const HomeProxy = Loadable({
  loader: () => import('jmarroyave/components/uxi/cv/layout/layout-proxy'),
  loading: Loading,
});
*/
var Page =
/*#__PURE__*/
function (_React$Component) {
  _inherits(Page, _React$Component);

  function Page(props, context) {
    var _this;

    _classCallCheck(this, Page);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(Page).call(this, props, context));
    _this.api = window.__api;
    return _this;
  }

  _createClass(Page, [{
    key: "componentDidMount",
    value: function componentDidMount() {}
  }, {
    key: "render",
    value: function render() {
      var _this$props = this.props,
          app = _this$props.app,
          page = _this$props.page,
          router = _this$props.router;
      return _react.default.createElement(_app.default, {
        router: router,
        app: app
      }, _react.default.createElement(_body.default, {
        path: [{
          text: 'home',
          route: '/'
        }],
        app: app,
        data: {
          home: page
        }
      }, _react.default.createElement(_layoutProxy.default, {
        data: page.data
      })));
    }
  }]);

  return Page;
}(_react.default.Component);

var _default = Page;
exports.default = _default;

/***/ }),

/***/ "./src/jmarroyave/components/uxi/home/block.js":
/*!*****************************************************!*\
  !*** ./src/jmarroyave/components/uxi/home/block.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "./node_modules/react/index.js"));

var _error = _interopRequireDefault(__webpack_require__(/*! core/components/error */ "./src/core/components/error.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

var Component =
/*#__PURE__*/
function (_React$Component) {
  _inherits(Component, _React$Component);

  function Component() {
    _classCallCheck(this, Component);

    return _possibleConstructorReturn(this, _getPrototypeOf(Component).apply(this, arguments));
  }

  _createClass(Component, [{
    key: "render",
    value: function render() {
      var title = this.props.title && this.props.title !== "" ? this.props.title : null;
      var children = "control" in this.props ? this.props.control : this.props.children;
      var visible = "control" in this.props && this.props.control == null ? false : true;
      var paddingTop = "paddingTop" in this.props ? this.props.paddingTop : '7px';
      var clean = "clean" in this.props ? true : false;
      var borderBottom = '1px solid #eee';
      if (!visible) return null;
      if (clean) return children;
      var key = 0;
      return _react.default.createElement("div", {
        className: "mod-block",
        style: {
          borderBottom: borderBottom,
          backgroundColor: 'white',
          padding: '7px',
          paddingTop: paddingTop
        }
      }, title && _react.default.createElement("h1", null, title), _react.default.createElement("div", {
        className: "body"
      }, _react.default.createElement(_error.default, {
        from: title
      }, children)));
    }
  }]);

  return Component;
}(_react.default.Component);

var _default = Component;
exports.default = _default;

/***/ }),

/***/ "./src/jmarroyave/components/uxi/home/hero.js":
/*!****************************************************!*\
  !*** ./src/jmarroyave/components/uxi/home/hero.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "./node_modules/react/index.js"));

__webpack_require__(/*! ./hero.scss */ "./src/jmarroyave/components/uxi/home/hero.scss");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

var Component =
/*#__PURE__*/
function (_React$Component) {
  _inherits(Component, _React$Component);

  function Component() {
    _classCallCheck(this, Component);

    return _possibleConstructorReturn(this, _getPrototypeOf(Component).apply(this, arguments));
  }

  _createClass(Component, [{
    key: "render",
    value: function render() {
      return _react.default.createElement("div", {
        className: "mod-hero"
      }, _react.default.createElement("h1", null, "Jos\xE9 Miguel Arroyave Ochoa"), _react.default.createElement("h2", null, "Ciencias de la computaci\xF3n"));
    }
  }]);

  return Component;
}(_react.default.Component);

var _default = Component;
exports.default = _default;

/***/ }),

/***/ "./src/jmarroyave/components/uxi/home/hero.scss":
/*!******************************************************!*\
  !*** ./src/jmarroyave/components/uxi/home/hero.scss ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../../../../../../frameworks/webapps/startup/node_modules/css-loader/dist/cjs.js!../../../../../../../../../frameworks/webapps/startup/node_modules/sass-loader/lib/loader.js!./hero.scss */ "../../../../frameworks/webapps/startup/node_modules/css-loader/dist/cjs.js!../../../../frameworks/webapps/startup/node_modules/sass-loader/lib/loader.js!./src/jmarroyave/components/uxi/home/hero.scss");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../../../../../../../../frameworks/webapps/startup/node_modules/style-loader/lib/addStyles.js */ "../../../../frameworks/webapps/startup/node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ "./src/jmarroyave/components/uxi/home/layout/home-layout-proxy.js":
/*!************************************************************************!*\
  !*** ./src/jmarroyave/components/uxi/home/layout/home-layout-proxy.js ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "./node_modules/react/index.js"));

var _Hidden = _interopRequireDefault(__webpack_require__(/*! @material-ui/core/Hidden */ "./node_modules/@material-ui/core/Hidden/index.js"));

var _reactDeviceDetect = __webpack_require__(/*! react-device-detect */ "./node_modules/react-device-detect/dist/index.js");

var _withModule = _interopRequireDefault(__webpack_require__(/*! jmarroyave/components/uxi/core/with-module */ "./src/jmarroyave/components/uxi/core/with-module.js"));

var _home = _interopRequireDefault(__webpack_require__(/*! jmarroyave/components/uxi/home/layout/lg/home */ "./src/jmarroyave/components/uxi/home/layout/lg/home.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

var PageComponent =
/*#__PURE__*/
function (_React$Component) {
  _inherits(PageComponent, _React$Component);

  function PageComponent() {
    _classCallCheck(this, PageComponent);

    return _possibleConstructorReturn(this, _getPrototypeOf(PageComponent).apply(this, arguments));
  }

  _createClass(PageComponent, [{
    key: "render",
    value: function render() {
      return this.renderDefault();
    }
  }, {
    key: "renderDefault",
    value: function renderDefault() {
      var _this$props = this.props,
          data = _this$props.data,
          trends = _this$props.trends;
      return _react.default.createElement("div", {
        style: {
          width: '100%'
        }
      }, _react.default.createElement(_home.default, {
        data: data,
        trends: trends
      }));
    }
  }, {
    key: "renderMultiple",
    value: function renderMultiple() {
      var data = this.props.data;
      return _react.default.createElement("div", {
        style: {
          width: '100%'
        }
      }, _react.default.createElement(_Hidden.default, {
        only: ['sm', 'md', 'lg', 'xl']
      }), _react.default.createElement(_Hidden.default, {
        only: ['xs', 'md', 'lg', 'xl']
      }), _react.default.createElement(_Hidden.default, {
        only: ['xs', 'sm']
      }, _react.default.createElement(_home.default, {
        data: data
      })));
    }
  }]);

  return PageComponent;
}(_react.default.Component);

var _default = (0, _withModule.default)(PageComponent);

exports.default = _default;

/***/ }),

/***/ "./src/jmarroyave/components/uxi/home/layout/lg/home.js":
/*!**************************************************************!*\
  !*** ./src/jmarroyave/components/uxi/home/layout/lg/home.js ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "./node_modules/react/index.js"));

var _reactRouter = __webpack_require__(/*! react-router */ "./node_modules/react-router/es/index.js");

var _grid_container = _interopRequireDefault(__webpack_require__(/*! jmarroyave/components/uxi/core/grid_container */ "./src/jmarroyave/components/uxi/core/grid_container.js"));

var _grid_item = _interopRequireDefault(__webpack_require__(/*! jmarroyave/components/uxi/core/grid_item */ "./src/jmarroyave/components/uxi/core/grid_item.js"));

var _Hidden = _interopRequireDefault(__webpack_require__(/*! @material-ui/core/Hidden */ "./node_modules/@material-ui/core/Hidden/index.js"));

var _modules = _interopRequireDefault(__webpack_require__(/*! jmarroyave/conf/layout/modules */ "./src/jmarroyave/conf/layout/modules.js"));

var _withModule = _interopRequireDefault(__webpack_require__(/*! jmarroyave/components/uxi/core/with-module */ "./src/jmarroyave/components/uxi/core/with-module.js"));

var _block = _interopRequireDefault(__webpack_require__(/*! jmarroyave/components/uxi/home/block */ "./src/jmarroyave/components/uxi/home/block.js"));

var _block2 = _interopRequireDefault(__webpack_require__(/*! core/components/mockup/block */ "./src/core/components/mockup/block.js"));

var _section = _interopRequireDefault(__webpack_require__(/*! core/components/layout/section */ "./src/core/components/layout/section.js"));

var _hero = _interopRequireDefault(__webpack_require__(/*! jmarroyave/components/uxi/home/hero */ "./src/jmarroyave/components/uxi/home/hero.js"));

var _recent = _interopRequireDefault(__webpack_require__(/*! jmarroyave/components/uxi/home/recent */ "./src/jmarroyave/components/uxi/home/recent.js"));

var _software_trends = _interopRequireDefault(__webpack_require__(/*! jmarroyave/components/uxi/home/software_trends */ "./src/jmarroyave/components/uxi/home/software_trends.js"));

var _latest_courses = _interopRequireDefault(__webpack_require__(/*! jmarroyave/components/uxi/cv/latest_courses */ "./src/jmarroyave/components/uxi/cv/latest_courses.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

var PageComponent =
/*#__PURE__*/
function (_React$Component) {
  _inherits(PageComponent, _React$Component);

  function PageComponent() {
    _classCallCheck(this, PageComponent);

    return _possibleConstructorReturn(this, _getPrototypeOf(PageComponent).apply(this, arguments));
  }

  _createClass(PageComponent, [{
    key: "getModules",
    value: function getModules() {
      var data = this.props.data;
      return [{
        title: "Test",
        control: _modules.default.Transfers ? _react.default.createElement("div", null, "test") : null
      }];
    }
  }, {
    key: "render",
    value: function render() {
      var data = this.props.data;
      var trends = this.props.trends;
      var mods = this.getModules();
      var modTest = mods[0];
      var recent = data != null ? data.recent : null;
      var courses = data != null ? data.courses : null;
      return _react.default.createElement(_grid_container.default, {
        className: "mod-page"
      }, _react.default.createElement(_grid_item.default, null, _react.default.createElement(_grid_container.default, null, _react.default.createElement(_grid_item.default, null, _react.default.createElement(_section.default, {
        color: 'white'
      }, _react.default.createElement(_grid_container.default, {
        spacing: 16
      }, _react.default.createElement(_grid_item.default, null, _react.default.createElement(_hero.default, null), _react.default.createElement(_recent.default, {
        data: recent
      }))))), _react.default.createElement(_grid_item.default, null, _react.default.createElement(_section.default, {
        color: '#c0c0c0'
      }, _react.default.createElement("h1", null, "Labs"), _react.default.createElement(_software_trends.default, {
        data: trends
      }))), _react.default.createElement(_grid_item.default, null, _react.default.createElement(_section.default, {
        color: 'white'
      }, _react.default.createElement("h1", null, "eLearning"), _react.default.createElement(_latest_courses.default, {
        data: courses
      }))))));
    }
  }]);

  return PageComponent;
}(_react.default.Component);

var _default = (0, _withModule.default)(PageComponent);

exports.default = _default;

/***/ }),

/***/ "./src/jmarroyave/components/uxi/home/page.js":
/*!****************************************************!*\
  !*** ./src/jmarroyave/components/uxi/home/page.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "./node_modules/react/index.js"));

var _reactLoadable = _interopRequireDefault(__webpack_require__(/*! react-loadable */ "./node_modules/react-loadable/lib/index.js"));

var _loading = _interopRequireDefault(__webpack_require__(/*! core/components/loading */ "./src/core/components/loading.js"));

var _app = _interopRequireDefault(__webpack_require__(/*! jmarroyave/components/uxi/core/page/app */ "./src/jmarroyave/components/uxi/core/page/app.js"));

var _body = _interopRequireDefault(__webpack_require__(/*! jmarroyave/components/uxi/core/page/body */ "./src/jmarroyave/components/uxi/core/page/body.js"));

var _homeLayoutProxy = _interopRequireDefault(__webpack_require__(/*! jmarroyave/components/uxi/home/layout/home-layout-proxy */ "./src/jmarroyave/components/uxi/home/layout/home-layout-proxy.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

/*
const HomeProxy = Loadable({
  loader: () => import('jmarroyave/components/uxi/home/layout/home-layout-proxy'),
  loading: Loading,
});
*/
var Page =
/*#__PURE__*/
function (_React$Component) {
  _inherits(Page, _React$Component);

  function Page(props, context) {
    var _this;

    _classCallCheck(this, Page);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(Page).call(this, props, context));
    _this.api = window.__api;
    return _this;
  }

  _createClass(Page, [{
    key: "componentDidMount",
    value: function componentDidMount() {}
  }, {
    key: "render",
    value: function render() {
      var app = this.props.app;
      var key = 0;
      return _react.default.createElement(_app.default, {
        router: this.props.router,
        app: app
      }, _react.default.createElement(_body.default, {
        path: [{
          text: 'home',
          route: '/'
        }],
        app: app,
        data: this.props.page
      }, _react.default.createElement(_homeLayoutProxy.default, {
        data: this.props.page.data,
        trends: this.props.page.trends
      })));
    }
  }]);

  return Page;
}(_react.default.Component);

var _default = Page;
exports.default = _default;

/***/ }),

/***/ "./src/jmarroyave/components/uxi/home/recent.js":
/*!******************************************************!*\
  !*** ./src/jmarroyave/components/uxi/home/recent.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "./node_modules/react/index.js"));

var _component = _interopRequireDefault(__webpack_require__(/*! core/components/component */ "./src/core/components/component.js"));

var _post_link = _interopRequireDefault(__webpack_require__(/*! jmarroyave/components/data/post_link */ "./src/jmarroyave/components/data/post_link.js"));

__webpack_require__(/*! ./recent.scss */ "./src/jmarroyave/components/uxi/home/recent.scss");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function RecentItem(_ref) {
  var data = _ref.data;
  return _react.default.createElement("h2", null, _react.default.createElement(_post_link.default, {
    category: data.area,
    slug: data.slug
  }, data.title));
}

var RecentItems =
/*#__PURE__*/
function (_React$Component) {
  _inherits(RecentItems, _React$Component);

  function RecentItems() {
    _classCallCheck(this, RecentItems);

    return _possibleConstructorReturn(this, _getPrototypeOf(RecentItems).apply(this, arguments));
  }

  _createClass(RecentItems, [{
    key: "render",
    value: function render() {
      var key = 0;
      var data = this.props.data;
      return _react.default.createElement("div", {
        className: "mod-recent"
      }, _react.default.createElement("h1", null, "Recent"), data.map(function (item) {
        return _react.default.createElement(RecentItem, {
          data: item,
          key: key++
        });
      }));
    }
  }]);

  return RecentItems;
}(_react.default.Component);

var _default = (0, _component.default)(RecentItems);

exports.default = _default;

/***/ }),

/***/ "./src/jmarroyave/components/uxi/home/recent.scss":
/*!********************************************************!*\
  !*** ./src/jmarroyave/components/uxi/home/recent.scss ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../../../../../../frameworks/webapps/startup/node_modules/css-loader/dist/cjs.js!../../../../../../../../../frameworks/webapps/startup/node_modules/sass-loader/lib/loader.js!./recent.scss */ "../../../../frameworks/webapps/startup/node_modules/css-loader/dist/cjs.js!../../../../frameworks/webapps/startup/node_modules/sass-loader/lib/loader.js!./src/jmarroyave/components/uxi/home/recent.scss");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../../../../../../../../frameworks/webapps/startup/node_modules/style-loader/lib/addStyles.js */ "../../../../frameworks/webapps/startup/node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ "./src/jmarroyave/components/uxi/home/software_trends.js":
/*!***************************************************************!*\
  !*** ./src/jmarroyave/components/uxi/home/software_trends.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "./node_modules/react/index.js"));

var _grid_container = _interopRequireDefault(__webpack_require__(/*! jmarroyave/components/uxi/core/grid_container */ "./src/jmarroyave/components/uxi/core/grid_container.js"));

var _grid_item = _interopRequireDefault(__webpack_require__(/*! jmarroyave/components/uxi/core/grid_item */ "./src/jmarroyave/components/uxi/core/grid_item.js"));

var _link = _interopRequireDefault(__webpack_require__(/*! core/ui/link */ "./src/core/ui/link.js"));

var _component = _interopRequireDefault(__webpack_require__(/*! core/components/component */ "./src/core/components/component.js"));

var _date = _interopRequireDefault(__webpack_require__(/*! core/components/date */ "./src/core/components/date.js"));

var _data = _interopRequireDefault(__webpack_require__(/*! core/ui/data */ "./src/core/ui/data.js"));

var _loading = _interopRequireDefault(__webpack_require__(/*! core/ui/loading */ "./src/core/ui/loading.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function SoftwareTrend(_ref) {
  var data = _ref.data;
  if (!data) return _react.default.createElement(_loading.default, null);
  data = data.slice(0, 10);
  return _react.default.createElement(_data.default, {
    headers: false,
    hidden: ["id", "total", "type", "icon"],
    data: data
  });
}

var SoftwareTrendComponent =
/*#__PURE__*/
function (_React$Component) {
  _inherits(SoftwareTrendComponent, _React$Component);

  function SoftwareTrendComponent() {
    _classCallCheck(this, SoftwareTrendComponent);

    return _possibleConstructorReturn(this, _getPrototypeOf(SoftwareTrendComponent).apply(this, arguments));
  }

  _createClass(SoftwareTrendComponent, [{
    key: "render",
    value: function render() {
      var data = this.props.data;
      var key = 0;

      var trends = window.__api.getData(['info', 'trends']);

      console.log(trends);
      var items = [{
        title: 'OS',
        key: 'os'
      }, {
        title: 'Lenguajes',
        key: 'lang'
      }, {
        title: 'Librerias',
        key: 'fw'
      }, {
        title: 'Servicios',
        key: 'services'
      }];
      var lastUpdate = "";
      return _react.default.createElement(_grid_container.default, {
        spacing: 8
      }, _react.default.createElement(_grid_item.default, {
        xs: 12
      }, _react.default.createElement("h2", null, "Software en Stackoverflow"), _react.default.createElement("div", null, "tendencias en uso de software para desarrollo obtenido de las preguntas de la comunidad de Stackoverflow. ", _react.default.createElement(_link.default, {
        to: 'labs/stackoverflow'
      }, "ver m\xE1s"))), items.map(function (list) {
        return _react.default.createElement(_grid_item.default, {
          xs: 12,
          sm: 6,
          md: 3,
          key: key++
        }, _react.default.createElement("h1", null, list.title), _react.default.createElement(SoftwareTrend, {
          data: data[list.key]
        }));
      }), _react.default.createElement(_grid_item.default, {
        xs: 12
      }, _react.default.createElement("div", null, "Actualizado: ", _react.default.createElement(_date.default, {
        value: lastUpdate,
        lang: 'es'
      }))));
    }
  }]);

  return SoftwareTrendComponent;
}(_react.default.Component);

var _default = (0, _component.default)(SoftwareTrendComponent);

exports.default = _default;

/***/ }),

/***/ "./src/jmarroyave/components/uxi/kb/android/content.js":
/*!*************************************************************!*\
  !*** ./src/jmarroyave/components/uxi/kb/android/content.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "./node_modules/react/index.js"));

var _component = _interopRequireDefault(__webpack_require__(/*! core/components/component */ "./src/core/components/component.js"));

var _post_link = _interopRequireDefault(__webpack_require__(/*! jmarroyave/components/data/post_link */ "./src/jmarroyave/components/data/post_link.js"));

var _grid_container = _interopRequireDefault(__webpack_require__(/*! jmarroyave/components/uxi/core/grid_container */ "./src/jmarroyave/components/uxi/core/grid_container.js"));

var _grid_item = _interopRequireDefault(__webpack_require__(/*! jmarroyave/components/uxi/core/grid_item */ "./src/jmarroyave/components/uxi/core/grid_item.js"));

var _date = _interopRequireDefault(__webpack_require__(/*! core/components/date */ "./src/core/components/date.js"));

__webpack_require__(/*! ./content.scss */ "./src/jmarroyave/components/uxi/kb/android/content.scss");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

var Content =
/*#__PURE__*/
function (_React$Component) {
  _inherits(Content, _React$Component);

  function Content(props, context) {
    var _this;

    _classCallCheck(this, Content);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(Content).call(this, props, context));
    _this.api = window.__api;
    _this.state = {
      category: 'Dev & Build',
      page: 1
    };
    _this.itemsPerPage = 25;
    return _this;
  }

  _createClass(Content, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      this.fetchData(this.state.category);
    }
  }, {
    key: "fetchData",
    value: function fetchData(cat) {
      this.api.getKBAndroid(cat);
    }
  }, {
    key: "setCategory",
    value: function setCategory(cat) {
      this.setState({
        category: cat,
        page: 1
      });
      this.fetchData(cat);
    }
  }, {
    key: "setPage",
    value: function setPage(i) {
      this.setState({
        page: i
      });
      window.scrollTo(0, 0);
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      var data = this.props.data.records ? this.props.data.records.records : [];
      var categories = this.props.data.categories ? this.props.data.categories.records : [];
      var key = 0;
      var totPages = Math.ceil(data.length / this.itemsPerPage);
      var pages = [];

      for (var i = 1; i <= totPages; i++) {
        pages.push(i);
      }

      var pageData = data.slice(this.itemsPerPage * (this.state.page - 1), this.itemsPerPage * this.state.page);
      return _react.default.createElement(_grid_container.default, {
        className: "mod-kb-android",
        ref: function ref(el) {
          return _this2.container = el;
        }
      }, _react.default.createElement(_grid_item.default, null, _react.default.createElement("div", null, _react.default.createElement(_date.default, {
        value: '01/05/2018',
        className: "date"
      })), _react.default.createElement("div", {
        className: "excerpt"
      }, "Recopilaci\xF3n de librer\xEDas para utilizar en Android ", _react.default.createElement("a", {
        href: this.api.data_kb_android
      }, "descargar"))), _react.default.createElement(_grid_item.default, null, _react.default.createElement("br", null), _react.default.createElement("h1", null, "Categor\xEDas"), _react.default.createElement(_grid_container.default, {
        className: "categories",
        direction: "row"
      }, categories.map(function (item) {
        return _react.default.createElement(_grid_item.default, {
          key: key++,
          xs: 4,
          md: 2,
          lg: 1
        }, _react.default.createElement("span", {
          className: "category ".concat(item == _this2.state.category ? "active" : ""),
          onClick: _this2.setCategory.bind(_this2, item)
        }, item));
      })), _react.default.createElement("hr", null)), _react.default.createElement(_grid_item.default, null, pageData.length == 0 && _react.default.createElement("div", null, "Loading"), pageData.length > 0 && pageData.map(function (item) {
        return _react.default.createElement("div", {
          key: key++,
          className: "item"
        }, _react.default.createElement("div", {
          className: "subcat"
        }, item.cat2), _react.default.createElement("div", {
          className: "title"
        }, item.title, " ", _react.default.createElement("span", {
          className: "refs"
        }, "[refs:", item.count, "]")), item.desc && item.desc != "" && _react.default.createElement("div", {
          className: "description"
        }, item.desc), _react.default.createElement("div", {
          className: "links"
        }, _react.default.createElement("span", {
          className: "link"
        }, _react.default.createElement("a", {
          href: item.repo
        }, "github"), " "), item.homepage && item.homepage != "" && _react.default.createElement("span", {
          className: "link"
        }, _react.default.createElement("a", {
          href: item.homepage
        }, "homepage"), " "), item.docs && item.docs != "" && _react.default.createElement("span", {
          className: "link"
        }, _react.default.createElement("a", {
          href: item.docs
        }, "docs"), " "), item.demo && item.demo != "" && _react.default.createElement("span", {
          className: "link"
        }, _react.default.createElement("a", {
          href: item.demo
        }, "demo"), " "), item.masterpiece && item.masterpiece != "" && _react.default.createElement("span", {
          className: "link"
        }, _react.default.createElement("a", {
          href: item.masterpiece
        }, "master piece"), " ")), _react.default.createElement("div", {
          className: "links"
        }, item.license && item.license != "" && _react.default.createElement("span", {
          className: "subcat"
        }, "license: ", item.license)), _react.default.createElement("div", {
          className: "images"
        }, item.imgs.map(function (itemImg) {
          return _react.default.createElement("img", {
            key: key++,
            height: "200px",
            src: itemImg
          });
        })));
      }), _react.default.createElement("div", {
        className: "page_index"
      }, pages.map(function (item) {
        return _react.default.createElement("span", {
          key: key++,
          onClick: _this2.setPage.bind(_this2, item),
          className: "page ".concat(_this2.state.page == item ? 'active' : '')
        }, item, " ");
      }))), _react.default.createElement(_grid_item.default, {
        className: "footer"
      }, _react.default.createElement("hr", null), "importados desde:", _react.default.createElement("ul", null, _react.default.createElement("li", null, _react.default.createElement("a", {
        href: "https://github.com/wasabeef/awesome-android-ui"
      }, "wasabeef/awesome-android-ui")), _react.default.createElement("li", null, _react.default.createElement("a", {
        href: "https://github.com/wasabeef/awesome-android-libraries"
      }, "wasabeef/awesome-android-libraries")), _react.default.createElement("li", null, _react.default.createElement("a", {
        href: "https://github.com/Trinea/android-open-project"
      }, "Trinea/android-open-project")), _react.default.createElement("li", null, _react.default.createElement("a", {
        href: "https://github.com/PhilJay/AndroidElementals"
      }, "PhilJay/AndroidElementals")), _react.default.createElement("li", null, _react.default.createElement("a", {
        href: "https://github.com/thanhtoan1196/awesome-android-ui"
      }, "thanhtoan1196/awesome-android-ui")), _react.default.createElement("li", null, _react.default.createElement("a", {
        href: "https://github.com/thanhtoan1196/awesome-android"
      }, "thanhtoan1196/awesome-android"), "*"), _react.default.createElement("li", null, _react.default.createElement("a", {
        href: "https://github.com/snowdream/awesome-android"
      }, "snowdream/awesome-android"), "*"), _react.default.createElement("li", null, _react.default.createElement("a", {
        href: "https://github.com/thanhtoan1196/awesome-android-libraries"
      }, "thanhtoan1196/awesome-android-libraries"), "*"), _react.default.createElement("li", null, _react.default.createElement("a", {
        href: "https://github.com/lightSky/Awesome-MaterialDesign"
      }, "lightSky/Awesome-MaterialDesign"), "*"), _react.default.createElement("li", null, _react.default.createElement("a", {
        href: "https://github.com/codepath/android_guides/wiki/Must-Have-Libraries"
      }, "codepath/android_guides"), "*"), _react.default.createElement("li", null, _react.default.createElement("a", {
        href: "https://github.com/lightSky/Awesome-MaterialDesign"
      }, "lightSky/Awesome-MaterialDesign"), "*"))));
    }
  }]);

  return Content;
}(_react.default.Component);

var _default = (0, _component.default)(Content);

exports.default = _default;

/***/ }),

/***/ "./src/jmarroyave/components/uxi/kb/android/content.scss":
/*!***************************************************************!*\
  !*** ./src/jmarroyave/components/uxi/kb/android/content.scss ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../../../../../../../frameworks/webapps/startup/node_modules/css-loader/dist/cjs.js!../../../../../../../../../../frameworks/webapps/startup/node_modules/sass-loader/lib/loader.js!./content.scss */ "../../../../frameworks/webapps/startup/node_modules/css-loader/dist/cjs.js!../../../../frameworks/webapps/startup/node_modules/sass-loader/lib/loader.js!./src/jmarroyave/components/uxi/kb/android/content.scss");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../../../../../../../../../frameworks/webapps/startup/node_modules/style-loader/lib/addStyles.js */ "../../../../frameworks/webapps/startup/node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ "./src/jmarroyave/components/uxi/kb/android/layout/layout-proxy.js":
/*!*************************************************************************!*\
  !*** ./src/jmarroyave/components/uxi/kb/android/layout/layout-proxy.js ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "./node_modules/react/index.js"));

var _Hidden = _interopRequireDefault(__webpack_require__(/*! @material-ui/core/Hidden */ "./node_modules/@material-ui/core/Hidden/index.js"));

var _reactDeviceDetect = __webpack_require__(/*! react-device-detect */ "./node_modules/react-device-detect/dist/index.js");

var _withModule = _interopRequireDefault(__webpack_require__(/*! jmarroyave/components/uxi/core/with-module */ "./src/jmarroyave/components/uxi/core/with-module.js"));

var _page = _interopRequireDefault(__webpack_require__(/*! jmarroyave/components/uxi/kb/android/layout/lg/page */ "./src/jmarroyave/components/uxi/kb/android/layout/lg/page.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

var PageComponent =
/*#__PURE__*/
function (_React$Component) {
  _inherits(PageComponent, _React$Component);

  function PageComponent() {
    _classCallCheck(this, PageComponent);

    return _possibleConstructorReturn(this, _getPrototypeOf(PageComponent).apply(this, arguments));
  }

  _createClass(PageComponent, [{
    key: "render",
    value: function render() {
      return this.renderDefault();
    }
  }, {
    key: "renderDefault",
    value: function renderDefault() {
      var data = this.props.data;
      return _react.default.createElement("div", {
        style: {
          width: '100%'
        }
      }, _react.default.createElement(_page.default, {
        data: data
      }));
    }
  }]);

  return PageComponent;
}(_react.default.Component);

var _default = (0, _withModule.default)(PageComponent);

exports.default = _default;

/***/ }),

/***/ "./src/jmarroyave/components/uxi/kb/android/layout/lg/page.js":
/*!********************************************************************!*\
  !*** ./src/jmarroyave/components/uxi/kb/android/layout/lg/page.js ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "./node_modules/react/index.js"));

var _reactRouter = __webpack_require__(/*! react-router */ "./node_modules/react-router/es/index.js");

var _grid_container = _interopRequireDefault(__webpack_require__(/*! jmarroyave/components/uxi/core/grid_container */ "./src/jmarroyave/components/uxi/core/grid_container.js"));

var _grid_item = _interopRequireDefault(__webpack_require__(/*! jmarroyave/components/uxi/core/grid_item */ "./src/jmarroyave/components/uxi/core/grid_item.js"));

var _Hidden = _interopRequireDefault(__webpack_require__(/*! @material-ui/core/Hidden */ "./node_modules/@material-ui/core/Hidden/index.js"));

var _modules = _interopRequireDefault(__webpack_require__(/*! jmarroyave/conf/layout/modules */ "./src/jmarroyave/conf/layout/modules.js"));

var _withModule = _interopRequireDefault(__webpack_require__(/*! jmarroyave/components/uxi/core/with-module */ "./src/jmarroyave/components/uxi/core/with-module.js"));

var _block = _interopRequireDefault(__webpack_require__(/*! jmarroyave/components/uxi/home/block */ "./src/jmarroyave/components/uxi/home/block.js"));

var _block2 = _interopRequireDefault(__webpack_require__(/*! core/components/mockup/block */ "./src/core/components/mockup/block.js"));

var _section = _interopRequireDefault(__webpack_require__(/*! core/components/layout/section */ "./src/core/components/layout/section.js"));

var _blog_link = _interopRequireDefault(__webpack_require__(/*! jmarroyave/components/data/blog_link */ "./src/jmarroyave/components/data/blog_link.js"));

var _content = _interopRequireDefault(__webpack_require__(/*! jmarroyave/components/uxi/kb/android/content */ "./src/jmarroyave/components/uxi/kb/android/content.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

var PageComponent =
/*#__PURE__*/
function (_React$Component) {
  _inherits(PageComponent, _React$Component);

  function PageComponent() {
    _classCallCheck(this, PageComponent);

    return _possibleConstructorReturn(this, _getPrototypeOf(PageComponent).apply(this, arguments));
  }

  _createClass(PageComponent, [{
    key: "render",
    value: function render() {
      var data = this.props.data;
      return _react.default.createElement(_grid_container.default, null, _react.default.createElement(_grid_item.default, null, _react.default.createElement(_grid_container.default, null, _react.default.createElement(_grid_item.default, {
        xs: 1,
        md: 2
      }), _react.default.createElement(_grid_item.default, {
        xs: 10,
        md: 8
      }, _react.default.createElement(_grid_container.default, null, _react.default.createElement(_grid_item.default, null, _react.default.createElement("h1", null, _react.default.createElement(_blog_link.default, {
        slug: 'kb'
      }, "kb"), " > android")), _react.default.createElement(_grid_item.default, null, _react.default.createElement(_content.default, {
        data: data
      })))), _react.default.createElement(_grid_item.default, {
        xs: 1,
        md: 2
      }))));
    }
  }]);

  return PageComponent;
}(_react.default.Component);

var _default = (0, _withModule.default)(PageComponent);

exports.default = _default;

/***/ }),

/***/ "./src/jmarroyave/components/uxi/kb/page.js":
/*!**************************************************!*\
  !*** ./src/jmarroyave/components/uxi/kb/page.js ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "./node_modules/react/index.js"));

var _reactLoadable = _interopRequireDefault(__webpack_require__(/*! react-loadable */ "./node_modules/react-loadable/lib/index.js"));

var _loading = _interopRequireDefault(__webpack_require__(/*! core/components/loading */ "./src/core/components/loading.js"));

var _app = _interopRequireDefault(__webpack_require__(/*! jmarroyave/components/uxi/core/page/app */ "./src/jmarroyave/components/uxi/core/page/app.js"));

var _body = _interopRequireDefault(__webpack_require__(/*! jmarroyave/components/uxi/core/page/body */ "./src/jmarroyave/components/uxi/core/page/body.js"));

var _layoutProxy = _interopRequireDefault(__webpack_require__(/*! jmarroyave/components/uxi/kb/android/layout/layout-proxy */ "./src/jmarroyave/components/uxi/kb/android/layout/layout-proxy.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

/*
const AndroidProxy = Loadable({
  loader: () => import('jmarroyave/components/uxi/kb/android/layout/layout-proxy'),
  loading: Loading,
});
*/
var Page =
/*#__PURE__*/
function (_React$Component) {
  _inherits(Page, _React$Component);

  function Page(props, context) {
    var _this;

    _classCallCheck(this, Page);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(Page).call(this, props, context));
    _this.api = window.__api;
    return _this;
  }

  _createClass(Page, [{
    key: "componentDidMount",
    value: function componentDidMount() {}
  }, {
    key: "render",
    value: function render() {
      var app = this.props.app;
      var key = 0;
      return _react.default.createElement(_app.default, {
        router: this.props.router,
        app: this.props.app
      }, _react.default.createElement(_body.default, {
        path: [{
          text: 'home',
          route: '/'
        }],
        app: this.props.app,
        data: {
          home: this.props.page
        }
      }, this.props.component == 'android' ? _react.default.createElement(AndroidProxy, {
        data: this.props.page.data
      }) : ""));
    }
  }]);

  return Page;
}(_react.default.Component);

var _default = Page;
exports.default = _default;

/***/ }),

/***/ "./src/jmarroyave/conf/constants.js":
/*!******************************************!*\
  !*** ./src/jmarroyave/conf/constants.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _default2 = _interopRequireDefault(__webpack_require__(/*! jmarroyave/conf/values/default */ "./src/jmarroyave/conf/values/default.js"));

var _versions = _interopRequireDefault(__webpack_require__(/*! jmarroyave/conf/versions */ "./src/jmarroyave/conf/versions.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Constants = function Constants() {
  _classCallCheck(this, Constants);
};

Constants.DEBUG = _default2.default.DEBUG;
Constants.LOCAL = _default2.default.LOCAL;
Constants.TITLE = "JMArroyave - Ciencias de la Computación";
Constants.VERSION = _default2.default.VERSION;
Constants.MENU_BAR_FG_COLOR = "#FFF";
Constants.MENU_BAR_BG_COLOR = "#333";
Constants.UXI_VERSIONS = _versions.default.LOG;
Constants.COM_CURRENT = Constants.UXI_VERSIONS.find(function (item) {
  return item.id == _default2.default.DEFAULT_UXI ? item : null;
});
Constants.COMID = Constants.COM_CURRENT.id;
Constants.COMF = Constants.COM_CURRENT.family;
Constants.COMV = Constants.COM_CURRENT.version;
Constants.COM_SWITCH = _default2.default.COM_SWITCH;
var _default = Constants;
exports.default = _default;

/***/ }),

/***/ "./src/jmarroyave/conf/layout/modules.js":
/*!***********************************************!*\
  !*** ./src/jmarroyave/conf/layout/modules.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Modules = function Modules() {
  _classCallCheck(this, Modules);
};

Modules.Games = false;
Modules.Standings = false;
Modules.PostSeason = false;
Modules.Transfers = true;
var _default = Modules;
exports.default = _default;

/***/ }),

/***/ "./src/jmarroyave/conf/navigation.js":
/*!*******************************************!*\
  !*** ./src/jmarroyave/conf/navigation.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _blank = _interopRequireDefault(__webpack_require__(/*! jmarroyave/pages/blank */ "./src/jmarroyave/pages/blank.js"));

var _home = _interopRequireDefault(__webpack_require__(/*! jmarroyave/pages/home */ "./src/jmarroyave/pages/home.js"));

var _blog = _interopRequireDefault(__webpack_require__(/*! jmarroyave/pages/blog */ "./src/jmarroyave/pages/blog.js"));

var _labs = _interopRequireDefault(__webpack_require__(/*! jmarroyave/pages/labs */ "./src/jmarroyave/pages/labs.js"));

var _blog_post = _interopRequireDefault(__webpack_require__(/*! jmarroyave/pages/blog_post */ "./src/jmarroyave/pages/blog_post.js"));

var _labs_project = _interopRequireDefault(__webpack_require__(/*! jmarroyave/pages/labs_project */ "./src/jmarroyave/pages/labs_project.js"));

var _cv = _interopRequireDefault(__webpack_require__(/*! jmarroyave/pages/cv */ "./src/jmarroyave/pages/cv.js"));

var _kb = _interopRequireDefault(__webpack_require__(/*! jmarroyave/pages/kb */ "./src/jmarroyave/pages/kb.js"));

var _kb_post = _interopRequireDefault(__webpack_require__(/*! jmarroyave/pages/kb_post */ "./src/jmarroyave/pages/kb_post.js"));

var _kb_post_android = _interopRequireDefault(__webpack_require__(/*! jmarroyave/pages/kb_post_android */ "./src/jmarroyave/pages/kb_post_android.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Navigation = function Navigation() {
  _classCallCheck(this, Navigation);

  this.options = [{
    showInMenu: true,
    name: 'Home',
    icon: null,
    route: '/',
    component: _home.default
  }, {
    showInMenu: true,
    name: 'Blog',
    icon: null,
    route: '/blog',
    component: _blog.default
  }, {
    showInMenu: false,
    name: 'Blog Post',
    icon: 'blog',
    route: '/blog/:year/:month/:day/:post',
    component: _blog_post.default
  }, {
    showInMenu: true,
    name: 'KB',
    icon: null,
    route: '/kb',
    component: _kb.default
  }, {
    showInMenu: false,
    name: 'KB Post - Android',
    icon: 'blog',
    route: '/kb/android',
    component: _kb_post_android.default
  }, {
    showInMenu: false,
    name: 'KB Post',
    icon: 'blog',
    route: '/kb/:post',
    component: _kb_post.default
  }, {
    showInMenu: true,
    name: 'Labs',
    icon: null,
    route: '/labs',
    component: _labs.default
  }, {
    showInMenu: false,
    name: 'Project',
    icon: 'blog',
    route: '/labs/:project',
    component: _labs_project.default
  }, {
    showInMenu: true,
    name: 'Acerca',
    icon: null,
    route: '/acerca',
    component: _cv.default
  }];
};

window.__nav = new Navigation();
var _default = Navigation;
exports.default = _default;

/***/ }),

/***/ "./src/jmarroyave/conf/theme.js":
/*!**************************************!*\
  !*** ./src/jmarroyave/conf/theme.js ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
//import black from '@material-ui/core/color/black';
//import white from '@material-ui/core/color/white';
var Theme = {
  primary: {
    main: '#000000'
  },
  secondary: {
    main: '#ffffff'
  }
};
var _default = Theme;
exports.default = _default;

/***/ }),

/***/ "./src/jmarroyave/conf/values/default.js":
/*!***********************************************!*\
  !*** ./src/jmarroyave/conf/values/default.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Conf = function Conf() {
  _classCallCheck(this, Conf);
};

Conf.VERSION = "0.1.0";
Conf.DEBUG = false;
Conf.LOCAL = true;
Conf.COM_SWITCH = true;
Conf.DEFAULT_UXI = 2;
var _default = Conf;
exports.default = _default;

/***/ }),

/***/ "./src/jmarroyave/conf/versions.js":
/*!*****************************************!*\
  !*** ./src/jmarroyave/conf/versions.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _default2 = _interopRequireDefault(__webpack_require__(/*! jmarroyave/conf/values/default */ "./src/jmarroyave/conf/values/default.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Versions = function Versions() {
  _classCallCheck(this, Versions);
};

Versions.LOG = [{
  id: 1,
  family: 'grey',
  version: [0, 0, 0],
  visible: true
}, {
  id: 2,
  family: 'grey',
  version: [19, 2, 1],
  visible: true
}];
var _default = Versions;
exports.default = _default;

/***/ }),

/***/ "./src/jmarroyave/index.js":
/*!*********************************!*\
  !*** ./src/jmarroyave/index.js ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireWildcard(__webpack_require__(/*! react */ "./node_modules/react/index.js"));

var _reactRouterDom = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/es/index.js");

var _higherOrder = __webpack_require__(/*! baobab-react/higher-order */ "./node_modules/baobab-react/higher-order.js");

var _api = _interopRequireDefault(__webpack_require__(/*! jmarroyave/app/api */ "./src/jmarroyave/app/api.js"));

var _navigation = _interopRequireDefault(__webpack_require__(/*! jmarroyave/conf/navigation */ "./src/jmarroyave/conf/navigation.js"));

var _error = _interopRequireDefault(__webpack_require__(/*! core/components/error */ "./src/core/components/error.js"));

var _reactRedux = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");

var _configureStore = __webpack_require__(/*! jmarroyave/app/redux/configureStore */ "./src/jmarroyave/app/redux/configureStore.js");

__webpack_require__(/*! ./index.scss */ "./src/jmarroyave/index.scss");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function App(_ref) {
  var routes = _ref.routes;
  return _react.default.createElement("div", null, _react.default.createElement(Header, null), _react.default.createElement(Main, {
    routes: routes
  }));
}

function Header() {
  return _react.default.createElement("header", null);
}

function Main(_ref2) {
  var routes = _ref2.routes;
  var key = 0;
  return _react.default.createElement("div", null, _react.default.createElement(_reactRouterDom.Switch, null, routes.map(function (r) {
    return _react.default.createElement(_reactRouterDom.Route, {
      key: key++,
      exact: true,
      path: r.route,
      component: r.component
    });
  })));
}

var Index =
/*#__PURE__*/
function (_Component) {
  _inherits(Index, _Component);

  function Index(props) {
    var _this;

    _classCallCheck(this, Index);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(Index).call(this, props));
    _this.navigation = new _navigation.default();
    return _this;
  }

  _createClass(Index, [{
    key: "render",
    value: function render() {
      return _react.default.createElement(_error.default, {
        from: "/jmarroyave/root"
      }, _react.default.createElement(_reactRedux.Provider, {
        store: (0, _configureStore.ConfigureStore)()
      }, _react.default.createElement(_reactRouterDom.HashRouter, null, _react.default.createElement(App, {
        routes: this.navigation.options
      }))));
    }
  }]);

  return Index;
}(_react.Component);

var RootedIndex = (0, _higherOrder.root)(window.__state, Index);
var _default = RootedIndex;
exports.default = _default;

/***/ }),

/***/ "./src/jmarroyave/index.scss":
/*!***********************************!*\
  !*** ./src/jmarroyave/index.scss ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../../../frameworks/webapps/startup/node_modules/css-loader/dist/cjs.js!../../../../../../frameworks/webapps/startup/node_modules/sass-loader/lib/loader.js!./index.scss */ "../../../../frameworks/webapps/startup/node_modules/css-loader/dist/cjs.js!../../../../frameworks/webapps/startup/node_modules/sass-loader/lib/loader.js!./src/jmarroyave/index.scss");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../../../../../frameworks/webapps/startup/node_modules/style-loader/lib/addStyles.js */ "../../../../frameworks/webapps/startup/node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ "./src/jmarroyave/pages/blank.js":
/*!***************************************!*\
  !*** ./src/jmarroyave/pages/blank.js ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "./node_modules/react/index.js"));

var _higherOrder = __webpack_require__(/*! baobab-react/higher-order */ "./node_modules/baobab-react/higher-order.js");

var _reactRouterDom = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/es/index.js");

var _page = _interopRequireDefault(__webpack_require__(/*! jmarroyave/components/uxi/blank/page */ "./src/jmarroyave/components/uxi/blank/page.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

var Page =
/*#__PURE__*/
function (_React$Component) {
  _inherits(Page, _React$Component);

  function Page(props, context) {
    var _this;

    _classCallCheck(this, Page);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(Page).call(this, props, context));
    _this.api = window.__api;
    return _this;
  }

  _createClass(Page, [{
    key: "componentDidMount",
    value: function componentDidMount() {}
  }, {
    key: "render",
    value: function render() {
      return _react.default.createElement(_page.default, this.props);
    }
  }]);

  return Page;
}(_react.default.Component);

Page = (0, _higherOrder.branch)({
  app: ['app']
}, Page);
(0, _reactRouterDom.withRouter)(Page);
var _default = Page;
exports.default = _default;

/***/ }),

/***/ "./src/jmarroyave/pages/blog.js":
/*!**************************************!*\
  !*** ./src/jmarroyave/pages/blog.js ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "./node_modules/react/index.js"));

var _reactRedux = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");

var _higherOrder = __webpack_require__(/*! baobab-react/higher-order */ "./node_modules/baobab-react/higher-order.js");

var _reactRouterDom = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/es/index.js");

var _page = _interopRequireDefault(__webpack_require__(/*! jmarroyave/components/uxi/blog/page */ "./src/jmarroyave/components/uxi/blog/page.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

var mapStateToProps = function mapStateToProps(state) {
  return {//media: state.media,
  };
};

var mapDispatchToProps = function mapDispatchToProps(dispatch) {
  return {};
};

var Page =
/*#__PURE__*/
function (_React$Component) {
  _inherits(Page, _React$Component);

  function Page(props, context) {
    var _this;

    _classCallCheck(this, Page);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(Page).call(this, props, context));
    _this.api = window.__api;
    _this.area = "blog";
    return _this;
  }

  _createClass(Page, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      this.api.getBlog(this.area);
    }
  }, {
    key: "render",
    value: function render() {
      var params = {
        app: this.props.app,
        page: this.props.page,
        router: this.props.router,
        location: this.props.location
      };
      return _react.default.createElement(_page.default, params);
    }
  }]);

  return Page;
}(_react.default.Component);

Page = (0, _higherOrder.branch)({
  app: ['app'],
  page: ['pages', 'blog']
}, Page);
Page = (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps)(Page);
(0, _reactRouterDom.withRouter)(Page);
var _default = Page;
exports.default = _default;

/***/ }),

/***/ "./src/jmarroyave/pages/blog_post.js":
/*!*******************************************!*\
  !*** ./src/jmarroyave/pages/blog_post.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "./node_modules/react/index.js"));

var _reactRedux = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");

var _higherOrder = __webpack_require__(/*! baobab-react/higher-order */ "./node_modules/baobab-react/higher-order.js");

var _reactRouterDom = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/es/index.js");

var _page = _interopRequireDefault(__webpack_require__(/*! jmarroyave/components/uxi/blog_post/page */ "./src/jmarroyave/components/uxi/blog_post/page.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

var mapStateToProps = function mapStateToProps(state) {
  return {//media: state.media,
  };
};

var mapDispatchToProps = function mapDispatchToProps(dispatch) {
  return {};
};

var Page =
/*#__PURE__*/
function (_React$Component) {
  _inherits(Page, _React$Component);

  function Page(props, context) {
    var _this;

    _classCallCheck(this, Page);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(Page).call(this, props, context));
    _this.api = window.__api;
    return _this;
  }

  _createClass(Page, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var params = this.props.router.params;
      this.api.getPost("blog", "".concat(params.year, "-").concat(params.month, "-").concat(params.day, "-").concat(params.post));
    }
  }, {
    key: "render",
    value: function render() {
      var params = {
        app: this.props.app,
        page: this.props.page,
        router: this.props.router,
        location: this.props.location
      };
      return _react.default.createElement(_page.default, params);
    }
  }]);

  return Page;
}(_react.default.Component);

Page = (0, _higherOrder.branch)({
  app: ['app'],
  page: ['pages', 'post']
}, Page);
Page = (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps)(Page);
(0, _reactRouterDom.withRouter)(Page);
var _default = Page;
exports.default = _default;

/***/ }),

/***/ "./src/jmarroyave/pages/cv.js":
/*!************************************!*\
  !*** ./src/jmarroyave/pages/cv.js ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "./node_modules/react/index.js"));

var _higherOrder = __webpack_require__(/*! baobab-react/higher-order */ "./node_modules/baobab-react/higher-order.js");

var _reactRouterDom = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/es/index.js");

var _page = _interopRequireDefault(__webpack_require__(/*! jmarroyave/components/uxi/cv/page */ "./src/jmarroyave/components/uxi/cv/page.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

var mapStateToProps = function mapStateToProps(state) {
  return {//media: state.media,
  };
};

var mapDispatchToProps = function mapDispatchToProps(dispatch) {
  return {};
};

var Page =
/*#__PURE__*/
function (_React$Component) {
  _inherits(Page, _React$Component);

  function Page(props, context) {
    var _this;

    _classCallCheck(this, Page);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(Page).call(this, props, context));
    _this.api = window.__api;
    return _this;
  }

  _createClass(Page, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      this.api.getCV();
    }
  }, {
    key: "render",
    value: function render() {
      var params = {
        app: this.props.app,
        page: this.props.page,
        router: this.props.router,
        location: this.props.location
      };
      return _react.default.createElement(_page.default, params);
    }
  }]);

  return Page;
}(_react.default.Component);

Page = (0, _higherOrder.branch)({
  app: ['app'],
  page: ['pages', 'cv']
}, Page);
(0, _reactRouterDom.withRouter)(Page);
var _default = Page;
exports.default = _default;

/***/ }),

/***/ "./src/jmarroyave/pages/home.js":
/*!**************************************!*\
  !*** ./src/jmarroyave/pages/home.js ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "./node_modules/react/index.js"));

var _reactRedux = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");

var _higherOrder = __webpack_require__(/*! baobab-react/higher-order */ "./node_modules/baobab-react/higher-order.js");

var _reactRouterDom = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/es/index.js");

var _page = _interopRequireDefault(__webpack_require__(/*! jmarroyave/components/uxi/home/page */ "./src/jmarroyave/components/uxi/home/page.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

var mapStateToProps = function mapStateToProps(state) {
  return {//media: state.media,
  };
};

var mapDispatchToProps = function mapDispatchToProps(dispatch) {
  return {};
};

var Page =
/*#__PURE__*/
function (_React$Component) {
  _inherits(Page, _React$Component);

  function Page(props, context) {
    var _this;

    _classCallCheck(this, Page);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(Page).call(this, props, context));
    _this.api = window.__api;
    return _this;
  }

  _createClass(Page, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      this.api.getHome();
      this.api.getTrends();
    }
  }, {
    key: "render",
    value: function render() {
      var params = {
        app: this.props.app,
        page: this.props.page,
        router: this.props.router,
        location: this.props.location
      };
      return _react.default.createElement(_page.default, params);
    }
  }]);

  return Page;
}(_react.default.Component);

Page = (0, _higherOrder.branch)({
  app: ['app'],
  page: ['pages', 'home']
}, Page);
Page = (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps)(Page);
(0, _reactRouterDom.withRouter)(Page);
var _default = Page;
exports.default = _default;

/***/ }),

/***/ "./src/jmarroyave/pages/kb.js":
/*!************************************!*\
  !*** ./src/jmarroyave/pages/kb.js ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "./node_modules/react/index.js"));

var _reactRedux = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");

var _higherOrder = __webpack_require__(/*! baobab-react/higher-order */ "./node_modules/baobab-react/higher-order.js");

var _reactRouterDom = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/es/index.js");

var _page = _interopRequireDefault(__webpack_require__(/*! jmarroyave/components/uxi/blog/page */ "./src/jmarroyave/components/uxi/blog/page.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

var mapStateToProps = function mapStateToProps(state) {
  return {//media: state.media,
  };
};

var mapDispatchToProps = function mapDispatchToProps(dispatch) {
  return {};
};

var Page =
/*#__PURE__*/
function (_React$Component) {
  _inherits(Page, _React$Component);

  function Page(props, context) {
    var _this;

    _classCallCheck(this, Page);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(Page).call(this, props, context));
    _this.api = window.__api;
    _this.area = "kb";
    return _this;
  }

  _createClass(Page, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      this.api.getBlog(this.area);
    }
  }, {
    key: "render",
    value: function render() {
      var params = {
        app: this.props.app,
        page: this.props.page,
        router: this.props.router,
        location: this.props.location
      };
      return _react.default.createElement(_page.default, params);
    }
  }]);

  return Page;
}(_react.default.Component);

Page = (0, _higherOrder.branch)({
  app: ['app'],
  page: ['pages', 'blog']
}, Page);
Page = (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps)(Page);
(0, _reactRouterDom.withRouter)(Page);
var _default = Page;
exports.default = _default;

/***/ }),

/***/ "./src/jmarroyave/pages/kb_post.js":
/*!*****************************************!*\
  !*** ./src/jmarroyave/pages/kb_post.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "./node_modules/react/index.js"));

var _reactRedux = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");

var _higherOrder = __webpack_require__(/*! baobab-react/higher-order */ "./node_modules/baobab-react/higher-order.js");

var _reactRouterDom = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/es/index.js");

var _page = _interopRequireDefault(__webpack_require__(/*! jmarroyave/components/uxi/blog_post/page */ "./src/jmarroyave/components/uxi/blog_post/page.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

var mapStateToProps = function mapStateToProps(state) {
  return {//media: state.media,
  };
};

var mapDispatchToProps = function mapDispatchToProps(dispatch) {
  return {};
};

var Page =
/*#__PURE__*/
function (_React$Component) {
  _inherits(Page, _React$Component);

  function Page(props, context) {
    var _this;

    _classCallCheck(this, Page);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(Page).call(this, props, context));
    _this.api = window.__api;
    return _this;
  }

  _createClass(Page, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var params = this.props.router.params;
      this.api.getPost("kb", "kb-".concat(params.post));
    }
  }, {
    key: "render",
    value: function render() {
      var params = {
        app: this.props.app,
        page: this.props.page,
        router: this.props.router,
        location: this.props.location
      };
      return _react.default.createElement(_page.default, params);
    }
  }]);

  return Page;
}(_react.default.Component);

Page = (0, _higherOrder.branch)({
  app: ['app'],
  page: ['pages', 'post']
}, Page);
Page = (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps)(Page);
(0, _reactRouterDom.withRouter)(Page);
var _default = Page;
exports.default = _default;

/***/ }),

/***/ "./src/jmarroyave/pages/kb_post_android.js":
/*!*************************************************!*\
  !*** ./src/jmarroyave/pages/kb_post_android.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "./node_modules/react/index.js"));

var _reactRedux = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");

var _higherOrder = __webpack_require__(/*! baobab-react/higher-order */ "./node_modules/baobab-react/higher-order.js");

var _reactRouterDom = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/es/index.js");

var _page = _interopRequireDefault(__webpack_require__(/*! jmarroyave/components/uxi/kb/page */ "./src/jmarroyave/components/uxi/kb/page.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

var mapStateToProps = function mapStateToProps(state) {
  return {//media: state.media,
  };
};

var mapDispatchToProps = function mapDispatchToProps(dispatch) {
  return {};
};

var Page =
/*#__PURE__*/
function (_React$Component) {
  _inherits(Page, _React$Component);

  function Page(props, context) {
    var _this;

    _classCallCheck(this, Page);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(Page).call(this, props, context));
    _this.api = window.__api;
    return _this;
  }

  _createClass(Page, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      this.api.getKBAndroidCategories();
    }
  }, {
    key: "render",
    value: function render() {
      var params = {
        component: 'android',
        app: this.props.app,
        page: this.props.page,
        router: this.props.router,
        location: this.props.location
      };
      return _react.default.createElement(_page.default, params);
    }
  }]);

  return Page;
}(_react.default.Component);

Page = (0, _higherOrder.branch)({
  app: ['app'],
  page: ['pages', 'kb_android']
}, Page);
Page = (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps)(Page);
(0, _reactRouterDom.withRouter)(Page);
var _default = Page;
exports.default = _default;

/***/ }),

/***/ "./src/jmarroyave/pages/labs.js":
/*!**************************************!*\
  !*** ./src/jmarroyave/pages/labs.js ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "./node_modules/react/index.js"));

var _reactRedux = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");

var _higherOrder = __webpack_require__(/*! baobab-react/higher-order */ "./node_modules/baobab-react/higher-order.js");

var _reactRouterDom = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/es/index.js");

var _page = _interopRequireDefault(__webpack_require__(/*! jmarroyave/components/uxi/blog/page */ "./src/jmarroyave/components/uxi/blog/page.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

var mapStateToProps = function mapStateToProps(state) {
  return {//media: state.media,
  };
};

var mapDispatchToProps = function mapDispatchToProps(dispatch) {
  return {};
};

var Page =
/*#__PURE__*/
function (_React$Component) {
  _inherits(Page, _React$Component);

  function Page(props, context) {
    var _this;

    _classCallCheck(this, Page);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(Page).call(this, props, context));
    _this.api = window.__api;
    _this.area = "labs";
    return _this;
  }

  _createClass(Page, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      this.api.getBlog(this.area);
    }
  }, {
    key: "render",
    value: function render() {
      var params = {
        app: this.props.app,
        page: this.props.page,
        router: this.props.router,
        location: this.props.location
      };
      return _react.default.createElement(_page.default, params);
    }
  }]);

  return Page;
}(_react.default.Component);

Page = (0, _higherOrder.branch)({
  app: ['app'],
  page: ['pages', 'blog']
}, Page);
Page = (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps)(Page);
(0, _reactRouterDom.withRouter)(Page);
var _default = Page;
exports.default = _default;

/***/ }),

/***/ "./src/jmarroyave/pages/labs_project.js":
/*!**********************************************!*\
  !*** ./src/jmarroyave/pages/labs_project.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "./node_modules/react/index.js"));

var _reactRedux = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");

var _higherOrder = __webpack_require__(/*! baobab-react/higher-order */ "./node_modules/baobab-react/higher-order.js");

var _reactRouterDom = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/es/index.js");

var _page = _interopRequireDefault(__webpack_require__(/*! jmarroyave/components/uxi/blog_post/page */ "./src/jmarroyave/components/uxi/blog_post/page.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

var mapStateToProps = function mapStateToProps(state) {
  return {//media: state.media,
  };
};

var mapDispatchToProps = function mapDispatchToProps(dispatch) {
  return {};
};

var Page =
/*#__PURE__*/
function (_React$Component) {
  _inherits(Page, _React$Component);

  function Page(props, context) {
    var _this;

    _classCallCheck(this, Page);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(Page).call(this, props, context));
    _this.api = window.__api;
    return _this;
  }

  _createClass(Page, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var params = this.props.router.params;
      this.api.getPost("labs", "labs-".concat(params.project));
    }
  }, {
    key: "render",
    value: function render() {
      var params = {
        app: this.props.app,
        page: this.props.page,
        router: this.props.router,
        location: this.props.location
      };
      return _react.default.createElement(_page.default, params);
    }
  }]);

  return Page;
}(_react.default.Component);

Page = (0, _higherOrder.branch)({
  app: ['app'],
  page: ['pages', 'post']
}, Page);
Page = (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps)(Page);
(0, _reactRouterDom.withRouter)(Page);
var _default = Page;
exports.default = _default;

/***/ }),

/***/ "./src/jmarroyave/themes/grey/0.0.0/uxi/cv/courses.js":
/*!************************************************************!*\
  !*** ./src/jmarroyave/themes/grey/0.0.0/uxi/cv/courses.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "./node_modules/react/index.js"));

var _component = _interopRequireDefault(__webpack_require__(/*! core/components/component */ "./src/core/components/component.js"));

var _grid_container = _interopRequireDefault(__webpack_require__(/*! jmarroyave/components/uxi/core/grid_container */ "./src/jmarroyave/components/uxi/core/grid_container.js"));

var _grid_item = _interopRequireDefault(__webpack_require__(/*! jmarroyave/components/uxi/core/grid_item */ "./src/jmarroyave/components/uxi/core/grid_item.js"));

var _reactStarRatings = _interopRequireDefault(__webpack_require__(/*! react-star-ratings */ "./node_modules/react-star-ratings/build/index.js"));

var _loading = _interopRequireDefault(__webpack_require__(/*! core/ui/loading */ "./src/core/ui/loading.js"));

__webpack_require__(/*! ./courses.scss */ "./src/jmarroyave/themes/grey/0.0.0/uxi/cv/courses.scss");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function Courses(_ref) {
  var data = _ref.data;
  var key = 0;
  if (!data) return _react.default.createElement(_loading.default, null);
  return _react.default.createElement("div", null, data.map(function (item) {
    return _react.default.createElement(Course, {
      data: item,
      key: key++
    });
  }));
}

function Course(_ref2) {
  var data = _ref2.data;
  return _react.default.createElement(_grid_item.default, {
    className: "course"
  }, _react.default.createElement("div", {
    className: "header"
  }, _react.default.createElement("div", {
    className: "platform"
  }, data.platform), _react.default.createElement("div", {
    className: "rating"
  }, _react.default.createElement(_reactStarRatings.default, {
    rating: data.rating,
    starRatedColor: "#222",
    numberOfStars: 5,
    starDimension: "8px",
    starSpacing: "2px"
  }))), _react.default.createElement("div", {
    className: "name"
  }, data.name), _react.default.createElement("div", {
    className: "from"
  }, data.from), data.comments != "" ? _react.default.createElement("div", {
    className: "comments"
  }, "Comentarios: ", data.comments) : "");
}

var List =
/*#__PURE__*/
function (_React$Component) {
  _inherits(List, _React$Component);

  function List(props, context) {
    var _this;

    _classCallCheck(this, List);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(List).call(this, props, context));
    _this.api = window.__api;
    return _this;
  }

  _createClass(List, [{
    key: "render",
    value: function render() {
      var data = this.props.data;
      return _react.default.createElement(_grid_container.default, {
        className: "mod-courses-list"
      }, _react.default.createElement(_grid_item.default, null, _react.default.createElement("h3", null, "Cursos")), _react.default.createElement(Courses, {
        data: data
      }));
    }
  }]);

  return List;
}(_react.default.Component);

var _default = (0, _component.default)(List);

exports.default = _default;

/***/ }),

/***/ "./src/jmarroyave/themes/grey/0.0.0/uxi/cv/courses.scss":
/*!**************************************************************!*\
  !*** ./src/jmarroyave/themes/grey/0.0.0/uxi/cv/courses.scss ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../../../../../../../../frameworks/webapps/startup/node_modules/css-loader/dist/cjs.js!../../../../../../../../../../../frameworks/webapps/startup/node_modules/sass-loader/lib/loader.js!./courses.scss */ "../../../../frameworks/webapps/startup/node_modules/css-loader/dist/cjs.js!../../../../frameworks/webapps/startup/node_modules/sass-loader/lib/loader.js!./src/jmarroyave/themes/grey/0.0.0/uxi/cv/courses.scss");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../../../../../../../../../../frameworks/webapps/startup/node_modules/style-loader/lib/addStyles.js */ "../../../../frameworks/webapps/startup/node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ "./src/jmarroyave/themes/grey/19.2.1/uxi/cv/courses.js":
/*!*************************************************************!*\
  !*** ./src/jmarroyave/themes/grey/19.2.1/uxi/cv/courses.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "./node_modules/react/index.js"));

var _component = _interopRequireDefault(__webpack_require__(/*! core/components/component */ "./src/core/components/component.js"));

var _grid_container = _interopRequireDefault(__webpack_require__(/*! jmarroyave/components/uxi/core/grid_container */ "./src/jmarroyave/components/uxi/core/grid_container.js"));

var _grid_item = _interopRequireDefault(__webpack_require__(/*! jmarroyave/components/uxi/core/grid_item */ "./src/jmarroyave/components/uxi/core/grid_item.js"));

var _reactStarRatings = _interopRequireDefault(__webpack_require__(/*! react-star-ratings */ "./node_modules/react-star-ratings/build/index.js"));

var _loading = _interopRequireDefault(__webpack_require__(/*! core/ui/loading */ "./src/core/ui/loading.js"));

__webpack_require__(/*! ./courses.scss */ "./src/jmarroyave/themes/grey/19.2.1/uxi/cv/courses.scss");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function Courses(_ref) {
  var data = _ref.data;
  var key = 0;
  if (!data) return _react.default.createElement(_loading.default, null);
  return _react.default.createElement("div", null, data.map(function (item) {
    return _react.default.createElement(Course, {
      data: item,
      key: key++
    });
  }));
}

function Course(_ref2) {
  var data = _ref2.data;
  return _react.default.createElement(_grid_item.default, {
    className: "course"
  }, _react.default.createElement("div", {
    className: "header"
  }, _react.default.createElement("div", {
    className: "platform"
  }, data.platform), _react.default.createElement("div", {
    className: "rating"
  }, _react.default.createElement(_reactStarRatings.default, {
    rating: data.rating,
    starRatedColor: "#222",
    numberOfStars: 5,
    starDimension: "8px",
    starSpacing: "2px"
  }))), _react.default.createElement("div", {
    className: "name"
  }, data.name), _react.default.createElement("div", {
    className: "from"
  }, data.from), data.comments != "" ? _react.default.createElement("div", {
    className: "comments"
  }, "Comentarios: ", data.comments) : "");
}

var List =
/*#__PURE__*/
function (_React$Component) {
  _inherits(List, _React$Component);

  function List(props, context) {
    var _this;

    _classCallCheck(this, List);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(List).call(this, props, context));
    _this.api = window.__api;
    return _this;
  }

  _createClass(List, [{
    key: "render",
    value: function render() {
      var data = this.props.data;
      return _react.default.createElement(_grid_container.default, {
        className: "mod-courses-list"
      }, _react.default.createElement(_grid_item.default, null, _react.default.createElement("h3", null, "Cursos")), _react.default.createElement(Courses, {
        data: data
      }));
    }
  }]);

  return List;
}(_react.default.Component);

var _default = (0, _component.default)(List);

exports.default = _default;

/***/ }),

/***/ "./src/jmarroyave/themes/grey/19.2.1/uxi/cv/courses.scss":
/*!***************************************************************!*\
  !*** ./src/jmarroyave/themes/grey/19.2.1/uxi/cv/courses.scss ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../../../../../../../../frameworks/webapps/startup/node_modules/css-loader/dist/cjs.js!../../../../../../../../../../../frameworks/webapps/startup/node_modules/sass-loader/lib/loader.js!./courses.scss */ "../../../../frameworks/webapps/startup/node_modules/css-loader/dist/cjs.js!../../../../frameworks/webapps/startup/node_modules/sass-loader/lib/loader.js!./src/jmarroyave/themes/grey/19.2.1/uxi/cv/courses.scss");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../../../../../../../../../../frameworks/webapps/startup/node_modules/style-loader/lib/addStyles.js */ "../../../../frameworks/webapps/startup/node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ "./src/shared/jmarroyave/social_networks.js":
/*!**************************************************!*\
  !*** ./src/shared/jmarroyave/social_networks.js ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "./node_modules/react/index.js"));

__webpack_require__(/*! ./social_networks.scss */ "./src/shared/jmarroyave/social_networks.scss");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

var Component =
/*#__PURE__*/
function (_React$Component) {
  _inherits(Component, _React$Component);

  function Component() {
    _classCallCheck(this, Component);

    return _possibleConstructorReturn(this, _getPrototypeOf(Component).apply(this, arguments));
  }

  _createClass(Component, [{
    key: "render",
    value: function render() {
      return _react.default.createElement("div", {
        className: "mod-social-icons layout-align-center-center layout-column flex"
      }, _react.default.createElement("a", {
        href: "http://twitter.com/jmarroyave"
      }, _react.default.createElement("span", {
        className: "fa-stack fa-lg"
      }, _react.default.createElement("i", {
        className: "fa fa-square-o fa-stack-2x"
      }), _react.default.createElement("i", {
        className: "fa fa-twitter fa-stack-1x",
        style: {
          color: '#00aced'
        }
      }))), _react.default.createElement("a", {
        href: "http://facebook.com/jmarroyave"
      }, _react.default.createElement("span", {
        className: "fa-stack fa-lg"
      }, _react.default.createElement("i", {
        className: "fa fa-square-o fa-stack-2x"
      }), _react.default.createElement("i", {
        className: "fa fa-facebook fa-stack-1x",
        style: {
          color: '#3b5998'
        }
      }))), _react.default.createElement("a", {
        href: "http://gt.linkedin.com/jmarroyave"
      }, _react.default.createElement("span", {
        className: "fa-stack fa-lg"
      }, _react.default.createElement("i", {
        className: "fa fa-square-o fa-stack-2x"
      }), _react.default.createElement("i", {
        className: "fa fa-linkedin fa-stack-1x",
        style: {
          color: '#0077B5'
        }
      }))), _react.default.createElement("a", {
        href: "http://plus.google.com/112618720945759819017"
      }, _react.default.createElement("span", {
        className: "fa-stack fa-lg"
      }, _react.default.createElement("i", {
        className: "fa fa-square-o fa-stack-2x"
      }), _react.default.createElement("i", {
        className: "fa fa-google-plus fa-stack-1x",
        style: {
          color: '#d34836'
        }
      }))), _react.default.createElement("a", {
        href: "http://github.com/jmarroyave"
      }, _react.default.createElement("span", {
        className: "fa-stack fa-lg"
      }, _react.default.createElement("i", {
        className: "fa fa-square-o fa-stack-2x"
      }), _react.default.createElement("i", {
        className: "fa fa-github fa-stack-1x",
        style: {
          color: '#000'
        }
      }))), _react.default.createElement("a", {
        href: "mailto:jmarroyave.compsci@gmail.com",
        className: "not-released"
      }, _react.default.createElement("span", {
        className: "fa-stack fa-lg"
      }, _react.default.createElement("i", {
        className: "fa fa-square-o fa-stack-2x"
      }), _react.default.createElement("i", {
        className: "fa fa-envelope-o fa-stack-1x",
        style: {
          color: '#000'
        }
      }))));
    }
  }]);

  return Component;
}(_react.default.Component);

var _default = Component;
exports.default = _default;

/***/ }),

/***/ "./src/shared/jmarroyave/social_networks.scss":
/*!****************************************************!*\
  !*** ./src/shared/jmarroyave/social_networks.scss ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../../../../frameworks/webapps/startup/node_modules/css-loader/dist/cjs.js!../../../../../../../frameworks/webapps/startup/node_modules/sass-loader/lib/loader.js!./social_networks.scss */ "../../../../frameworks/webapps/startup/node_modules/css-loader/dist/cjs.js!../../../../frameworks/webapps/startup/node_modules/sass-loader/lib/loader.js!./src/shared/jmarroyave/social_networks.scss");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../../../../../../frameworks/webapps/startup/node_modules/style-loader/lib/addStyles.js */ "../../../../frameworks/webapps/startup/node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ 0:
/*!***************************************************************!*\
  !*** multi babel-polyfill react-hot-loader/patch ./src/index ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! babel-polyfill */"./node_modules/babel-polyfill/lib/index.js");
__webpack_require__(/*! react-hot-loader/patch */"./node_modules/react-hot-loader/patch.js");
module.exports = __webpack_require__(/*! ./src/index */"./src/index.js");


/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2ptYXJyb3lhdmUvY29tcG9uZW50cy91eGkvYmxvZy9saXN0LnNjc3MiLCJ3ZWJwYWNrOi8vLy4vc3JjL2ptYXJyb3lhdmUvY29tcG9uZW50cy91eGkvYmxvZ19wb3N0L2NvbnRlbnQuc2NzcyIsIndlYnBhY2s6Ly8vLi9zcmMvam1hcnJveWF2ZS9jb21wb25lbnRzL3V4aS9jb3JlL2NvbV92ZXJzaW9uLnNjc3MiLCJ3ZWJwYWNrOi8vLy4vc3JjL2ptYXJyb3lhdmUvY29tcG9uZW50cy91eGkvY29yZS9wYWdlL2Zvb3Rlci5zY3NzIiwid2VicGFjazovLy8uL3NyYy9qbWFycm95YXZlL2NvbXBvbmVudHMvdXhpL2NvcmUvd2hhdHNfaG90LnNjc3MiLCJ3ZWJwYWNrOi8vLy4vc3JjL2ptYXJyb3lhdmUvY29tcG9uZW50cy91eGkvY3YvY29udGVudC5zY3NzIiwid2VicGFjazovLy8uL3NyYy9qbWFycm95YXZlL2NvbXBvbmVudHMvdXhpL2N2L2xhdGVzdF9jb3Vyc2VzLnNjc3MiLCJ3ZWJwYWNrOi8vLy4vc3JjL2ptYXJyb3lhdmUvY29tcG9uZW50cy91eGkvaG9tZS9oZXJvLnNjc3MiLCJ3ZWJwYWNrOi8vLy4vc3JjL2ptYXJyb3lhdmUvY29tcG9uZW50cy91eGkvaG9tZS9yZWNlbnQuc2NzcyIsIndlYnBhY2s6Ly8vLi9zcmMvam1hcnJveWF2ZS9jb21wb25lbnRzL3V4aS9rYi9hbmRyb2lkL2NvbnRlbnQuc2NzcyIsIndlYnBhY2s6Ly8vLi9zcmMvam1hcnJveWF2ZS9pbmRleC5zY3NzIiwid2VicGFjazovLy8uL3NyYy9qbWFycm95YXZlL3RoZW1lcy9ncmV5LzAuMC4wL3V4aS9jdi9jb3Vyc2VzLnNjc3MiLCJ3ZWJwYWNrOi8vLy4vc3JjL2ptYXJyb3lhdmUvdGhlbWVzL2dyZXkvMTkuMi4xL3V4aS9jdi9jb3Vyc2VzLnNjc3MiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NoYXJlZC9qbWFycm95YXZlL3NvY2lhbF9uZXR3b3Jrcy5zY3NzIiwid2VicGFjazovLy8uL3NyYy9hcHAuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvcmUvYXBwL2FwaS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29yZS9hcHAvY29tcG9uZW50cy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29yZS9hcHAvc2VydmVyLmpzIiwid2VicGFjazovLy8uL3NyYy9jb3JlL2NvbXBvbmVudHMvY29tcG9uZW50LmpzIiwid2VicGFjazovLy8uL3NyYy9jb3JlL2NvbXBvbmVudHMvZGF0ZS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29yZS9jb21wb25lbnRzL2Vycm9yLmpzIiwid2VicGFjazovLy8uL3NyYy9jb3JlL2NvbXBvbmVudHMvbGF5b3V0L3NlY3Rpb24uanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvcmUvY29tcG9uZW50cy9sb2FkaW5nLmpzIiwid2VicGFjazovLy8uL3NyYy9jb3JlL2NvbXBvbmVudHMvbW9ja3VwL2Jsb2NrLmpzIiwid2VicGFjazovLy8uL3NyYy9jb3JlL2NvbXBvbmVudHMvdWlfY29tcG9uZW50LmpzIiwid2VicGFjazovLy8uL3NyYy9jb3JlL3VpL2FwcC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29yZS91aS9kYXRhLmpzIiwid2VicGFjazovLy8uL3NyYy9jb3JlL3VpL2RyYXdlci5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29yZS91aS9pY29uLmpzIiwid2VicGFjazovLy8uL3NyYy9jb3JlL3VpL2xpbmsuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvcmUvdWkvbG9hZGluZy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29yZS91aS90b29sYmFyLmpzIiwid2VicGFjazovLy8uL3NyYy9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvam1hcnJveWF2ZS9hcHAvYXBpLmpzIiwid2VicGFjazovLy8uL3NyYy9qbWFycm95YXZlL2FwcC9yZWR1eC9hY3Rpb25zL3R5cGVzLmpzIiwid2VicGFjazovLy8uL3NyYy9qbWFycm95YXZlL2FwcC9yZWR1eC9jb25maWd1cmVTdG9yZS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvam1hcnJveWF2ZS9hcHAvcmVkdXgvcmVkdWNlcnMvbGFiZWxzLmpzIiwid2VicGFjazovLy8uL3NyYy9qbWFycm95YXZlL2FwcC9yZWR1eC9yZWR1Y2Vycy9tZXNzYWdlcy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvam1hcnJveWF2ZS9hcHAvc3RhdGUuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2ptYXJyb3lhdmUvY29tcG9uZW50cy9kYXRhL2Jsb2dfbGluay5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvam1hcnJveWF2ZS9jb21wb25lbnRzL2RhdGEvcG9zdF9saW5rLmpzIiwid2VicGFjazovLy8uL3NyYy9qbWFycm95YXZlL2NvbXBvbmVudHMvdXhpL2JsYW5rL3BhZ2UuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2ptYXJyb3lhdmUvY29tcG9uZW50cy91eGkvYmxvZy9sYXlvdXQvbGF5b3V0LXByb3h5LmpzIiwid2VicGFjazovLy8uL3NyYy9qbWFycm95YXZlL2NvbXBvbmVudHMvdXhpL2Jsb2cvbGF5b3V0L2xnL3BhZ2UuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2ptYXJyb3lhdmUvY29tcG9uZW50cy91eGkvYmxvZy9saXN0LmpzIiwid2VicGFjazovLy8uL3NyYy9qbWFycm95YXZlL2NvbXBvbmVudHMvdXhpL2Jsb2cvbGlzdC5zY3NzPzA4YTAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2ptYXJyb3lhdmUvY29tcG9uZW50cy91eGkvYmxvZy9wYWdlLmpzIiwid2VicGFjazovLy8uL3NyYy9qbWFycm95YXZlL2NvbXBvbmVudHMvdXhpL2Jsb2dfcG9zdC9jb250ZW50LmpzIiwid2VicGFjazovLy8uL3NyYy9qbWFycm95YXZlL2NvbXBvbmVudHMvdXhpL2Jsb2dfcG9zdC9jb250ZW50LnNjc3M/ZDJhZiIsIndlYnBhY2s6Ly8vLi9zcmMvam1hcnJveWF2ZS9jb21wb25lbnRzL3V4aS9ibG9nX3Bvc3QvbGF5b3V0L2xheW91dC1wcm94eS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvam1hcnJveWF2ZS9jb21wb25lbnRzL3V4aS9ibG9nX3Bvc3QvbGF5b3V0L2xnL3BhZ2UuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2ptYXJyb3lhdmUvY29tcG9uZW50cy91eGkvYmxvZ19wb3N0L3BhZ2UuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2ptYXJyb3lhdmUvY29tcG9uZW50cy91eGkvY29yZS9jb21fdmVyc2lvbi5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvam1hcnJveWF2ZS9jb21wb25lbnRzL3V4aS9jb3JlL2NvbV92ZXJzaW9uLnNjc3M/NmQyZCIsIndlYnBhY2s6Ly8vLi9zcmMvam1hcnJveWF2ZS9jb21wb25lbnRzL3V4aS9jb3JlL2RlYnVnLmpzIiwid2VicGFjazovLy8uL3NyYy9qbWFycm95YXZlL2NvbXBvbmVudHMvdXhpL2NvcmUvZm9vdGVyX2xpbmtzLmpzIiwid2VicGFjazovLy8uL3NyYy9qbWFycm95YXZlL2NvbXBvbmVudHMvdXhpL2NvcmUvZ3JpZF9jb250YWluZXIuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2ptYXJyb3lhdmUvY29tcG9uZW50cy91eGkvY29yZS9ncmlkX2l0ZW0uanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2ptYXJyb3lhdmUvY29tcG9uZW50cy91eGkvY29yZS9wYWdlL2FwcC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvam1hcnJveWF2ZS9jb21wb25lbnRzL3V4aS9jb3JlL3BhZ2UvYm9keS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvam1hcnJveWF2ZS9jb21wb25lbnRzL3V4aS9jb3JlL3BhZ2UvZm9vdGVyLmpzIiwid2VicGFjazovLy8uL3NyYy9qbWFycm95YXZlL2NvbXBvbmVudHMvdXhpL2NvcmUvcGFnZS9mb290ZXIuc2Nzcz9hOWE0Iiwid2VicGFjazovLy8uL3NyYy9qbWFycm95YXZlL2NvbXBvbmVudHMvdXhpL2NvcmUvcGFnZS9oZWFkZXIuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2ptYXJyb3lhdmUvY29tcG9uZW50cy91eGkvY29yZS90b3BfYmFyLmpzIiwid2VicGFjazovLy8uL3NyYy9qbWFycm95YXZlL2NvbXBvbmVudHMvdXhpL2NvcmUvdmVyc2lvbl9sYWJlbC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvam1hcnJveWF2ZS9jb21wb25lbnRzL3V4aS9jb3JlL3doYXRzX2hvdC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvam1hcnJveWF2ZS9jb21wb25lbnRzL3V4aS9jb3JlL3doYXRzX2hvdC5zY3NzP2E5NjciLCJ3ZWJwYWNrOi8vLy4vc3JjL2ptYXJyb3lhdmUvY29tcG9uZW50cy91eGkvY29yZS93aXRoLW1vZHVsZS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvam1hcnJveWF2ZS9jb21wb25lbnRzL3V4aS9jdi9jb250ZW50LmpzIiwid2VicGFjazovLy8uL3NyYy9qbWFycm95YXZlL2NvbXBvbmVudHMvdXhpL2N2L2NvbnRlbnQuc2Nzcz8yNWFiIiwid2VicGFjazovLy8uL3NyYy9qbWFycm95YXZlL2NvbXBvbmVudHMvdXhpL2N2L2NvdXJzZXMuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2ptYXJyb3lhdmUvY29tcG9uZW50cy91eGkvY3YvbGF0ZXN0X2NvdXJzZXMuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2ptYXJyb3lhdmUvY29tcG9uZW50cy91eGkvY3YvbGF0ZXN0X2NvdXJzZXMuc2Nzcz9iYjI5Iiwid2VicGFjazovLy8uL3NyYy9qbWFycm95YXZlL2NvbXBvbmVudHMvdXhpL2N2L2xheW91dC9sYXlvdXQtcHJveHkuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2ptYXJyb3lhdmUvY29tcG9uZW50cy91eGkvY3YvbGF5b3V0L2xnL3BhZ2UuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2ptYXJyb3lhdmUvY29tcG9uZW50cy91eGkvY3YvcGFnZS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvam1hcnJveWF2ZS9jb21wb25lbnRzL3V4aS9ob21lL2Jsb2NrLmpzIiwid2VicGFjazovLy8uL3NyYy9qbWFycm95YXZlL2NvbXBvbmVudHMvdXhpL2hvbWUvaGVyby5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvam1hcnJveWF2ZS9jb21wb25lbnRzL3V4aS9ob21lL2hlcm8uc2Nzcz82ZGRjIiwid2VicGFjazovLy8uL3NyYy9qbWFycm95YXZlL2NvbXBvbmVudHMvdXhpL2hvbWUvbGF5b3V0L2hvbWUtbGF5b3V0LXByb3h5LmpzIiwid2VicGFjazovLy8uL3NyYy9qbWFycm95YXZlL2NvbXBvbmVudHMvdXhpL2hvbWUvbGF5b3V0L2xnL2hvbWUuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2ptYXJyb3lhdmUvY29tcG9uZW50cy91eGkvaG9tZS9wYWdlLmpzIiwid2VicGFjazovLy8uL3NyYy9qbWFycm95YXZlL2NvbXBvbmVudHMvdXhpL2hvbWUvcmVjZW50LmpzIiwid2VicGFjazovLy8uL3NyYy9qbWFycm95YXZlL2NvbXBvbmVudHMvdXhpL2hvbWUvcmVjZW50LnNjc3M/OTQ0YyIsIndlYnBhY2s6Ly8vLi9zcmMvam1hcnJveWF2ZS9jb21wb25lbnRzL3V4aS9ob21lL3NvZnR3YXJlX3RyZW5kcy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvam1hcnJveWF2ZS9jb21wb25lbnRzL3V4aS9rYi9hbmRyb2lkL2NvbnRlbnQuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2ptYXJyb3lhdmUvY29tcG9uZW50cy91eGkva2IvYW5kcm9pZC9jb250ZW50LnNjc3M/OTBmZCIsIndlYnBhY2s6Ly8vLi9zcmMvam1hcnJveWF2ZS9jb21wb25lbnRzL3V4aS9rYi9hbmRyb2lkL2xheW91dC9sYXlvdXQtcHJveHkuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2ptYXJyb3lhdmUvY29tcG9uZW50cy91eGkva2IvYW5kcm9pZC9sYXlvdXQvbGcvcGFnZS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvam1hcnJveWF2ZS9jb21wb25lbnRzL3V4aS9rYi9wYWdlLmpzIiwid2VicGFjazovLy8uL3NyYy9qbWFycm95YXZlL2NvbmYvY29uc3RhbnRzLmpzIiwid2VicGFjazovLy8uL3NyYy9qbWFycm95YXZlL2NvbmYvbGF5b3V0L21vZHVsZXMuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2ptYXJyb3lhdmUvY29uZi9uYXZpZ2F0aW9uLmpzIiwid2VicGFjazovLy8uL3NyYy9qbWFycm95YXZlL2NvbmYvdGhlbWUuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2ptYXJyb3lhdmUvY29uZi92YWx1ZXMvZGVmYXVsdC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvam1hcnJveWF2ZS9jb25mL3ZlcnNpb25zLmpzIiwid2VicGFjazovLy8uL3NyYy9qbWFycm95YXZlL2luZGV4LmpzIiwid2VicGFjazovLy8uL3NyYy9qbWFycm95YXZlL2luZGV4LnNjc3M/MTA1ZiIsIndlYnBhY2s6Ly8vLi9zcmMvam1hcnJveWF2ZS9wYWdlcy9ibGFuay5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvam1hcnJveWF2ZS9wYWdlcy9ibG9nLmpzIiwid2VicGFjazovLy8uL3NyYy9qbWFycm95YXZlL3BhZ2VzL2Jsb2dfcG9zdC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvam1hcnJveWF2ZS9wYWdlcy9jdi5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvam1hcnJveWF2ZS9wYWdlcy9ob21lLmpzIiwid2VicGFjazovLy8uL3NyYy9qbWFycm95YXZlL3BhZ2VzL2tiLmpzIiwid2VicGFjazovLy8uL3NyYy9qbWFycm95YXZlL3BhZ2VzL2tiX3Bvc3QuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2ptYXJyb3lhdmUvcGFnZXMva2JfcG9zdF9hbmRyb2lkLmpzIiwid2VicGFjazovLy8uL3NyYy9qbWFycm95YXZlL3BhZ2VzL2xhYnMuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2ptYXJyb3lhdmUvcGFnZXMvbGFic19wcm9qZWN0LmpzIiwid2VicGFjazovLy8uL3NyYy9qbWFycm95YXZlL3RoZW1lcy9ncmV5LzAuMC4wL3V4aS9jdi9jb3Vyc2VzLmpzIiwid2VicGFjazovLy8uL3NyYy9qbWFycm95YXZlL3RoZW1lcy9ncmV5LzAuMC4wL3V4aS9jdi9jb3Vyc2VzLnNjc3M/Y2VjZSIsIndlYnBhY2s6Ly8vLi9zcmMvam1hcnJveWF2ZS90aGVtZXMvZ3JleS8xOS4yLjEvdXhpL2N2L2NvdXJzZXMuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2ptYXJyb3lhdmUvdGhlbWVzL2dyZXkvMTkuMi4xL3V4aS9jdi9jb3Vyc2VzLnNjc3M/ODhkMyIsIndlYnBhY2s6Ly8vLi9zcmMvc2hhcmVkL2ptYXJyb3lhdmUvc29jaWFsX25ldHdvcmtzLmpzIiwid2VicGFjazovLy8uL3NyYy9zaGFyZWQvam1hcnJveWF2ZS9zb2NpYWxfbmV0d29ya3Muc2Nzcz82NDMyIl0sIm5hbWVzIjpbIkFwcCIsIlJlYWN0IiwiQ29tcG9uZW50IiwiQVBJIiwicHJvcHMiLCJlcnJvciIsImN1cnJlbnRfY29tcG9uZW50IiwiY29tcG9uZW50cyIsImxvY2FsIiwidGl0bGUiLCJkZWJ1ZyIsInNlcnZlciIsIlNlcnZlciIsImVyciIsImlkIiwiZmFtaWx5IiwidmVyc2lvbiIsImRhdGEiLCJpdGVtIiwiZmluZCIsIkNvbXBvbmVudHMiLCJ3aW5kb3ciLCJfX2FwaSIsImdldENvbXBvbmVudHNWZXJzaW9uIiwiaW5kZXgiLCJjb25mIiwiQ29udHJvbCIsImNvbnRyb2xzIiwiZmlsdGVyIiwic29ydCIsImEiLCJiIiwibGVuZ3RoIiwiSlNPTiIsInN0cmluZ2lmeSIsInZlciIsInNsaWNlIiwiY29udHJvbHNNYWpvciIsIm1ham9yIiwiY29udHJvbHNNaW5vciIsIm1pbm9yIiwicmV2IiwiY29udHJvbHNSZXYiLCJjb25zb2xlIiwidG9TdHJpbmciLCJjb250cm9sIiwiZ2V0UmVzb2x2ZWRWZXJzaW9uIiwiX19jb21wb25lbnRzIiwib25TdGFydExvYWRpbmciLCJvblN0b3BMb2FkaW5nIiwib25FcnJvciIsImNvbm5lY3Rpb25zIiwicHJvdG9jb2wiLCJwYXRoIiwiZG9jdW1lbnQiLCJsb2NhdGlvbiIsInJlcGxhY2UiLCJob3N0bmFtZSIsImN1cnJlbnQiLCJzZXJ2ZXJVUkkiLCJtZXRob2QiLCJ1cmkiLCJwYXJhbXMiLCJjb25maWciLCJjYWxsYmFjayIsImNhbGxiYWNrX2VyciIsIiR0aGlzIiwidXJsIiwiaW5kZXhPZiIsInAiLCJ0cmlnZ2VyT25TdGFydExvYWRpbmciLCJ0aW1lb3V0IiwiYXhpb3MiLCJnZXQiLCJwb3N0IiwidG9VcHBlckNhc2UiLCJ0aGVuIiwicmVzcG9uc2UiLCJ0cmlnZ2VyT25TdG9wTG9hZGluZyIsImNhdGNoIiwidHJpZ2dlck9uRXJyb3IiLCJQcm9taXNlIiwicmVzb2x2ZSIsInJlamVjdCIsImV4ZWMiLCJjb21wb25lbnQiLCJNb2R1bGVDb21wb25lbnQiLCJwaCIsInBsYWNlaG9sZGVyIiwicGhXIiwid2lkdGgiLCJwaEgiLCJoZWlnaHQiLCJsb2FkaW5nIiwiY2hlY2tfZGF0YSIsIlVJRGF0ZSIsInN0YXRlIiwiZGVmYXVsdHMiLCJjbGFzc05hbWUiLCJ0aW1lQWdvIiwibGFuZyIsIlRpbWVBZ28iLCJhZGRMb2NhbGUiLCJlcyIsImVuIiwiZGF0ZSIsInN0ciIsInZhbHVlIiwiRGF0ZSIsIm51bSIsIk51bWJlciIsImlzSW50ZWdlciIsImZvcm1hdCIsImV4IiwiVUlDb21wb25lbnQiLCJFcnJvckJvdW5kYXJ5IiwiaGFzRXJyb3IiLCJlcnJvcnMiLCJpbmZvIiwicHVzaCIsInNldFN0YXRlIiwic2V0RXJyb3IiLCJyZWYiLCJmcm9tIiwia2V5IiwiY29sb3IiLCJtYXJnaW4iLCJwYWRkaW5nIiwiYm9yZGVyIiwiZm9udFNpemUiLCJtYXAiLCJlIiwiY2hpbGRyZW4iLCJzdHlsZXMiLCJ0aGVtZSIsInJvb3QiLCJib3hTaXppbmciLCJMYXlvdXRTZWN0aW9uIiwiY2xhc3NlcyIsImJhY2tncm91bmRDb2xvciIsInpJbmRleCIsInBvc2l0aW9uIiwidG9wIiwicmlnaHQiLCJsZWZ0IiwiYm90dG9tIiwidGV4dEFsaWduIiwiZm9udFdlaWdodCIsInBhZGRpbmdUb3AiLCJNb2NrdXBCbG9jayIsImdldERlZmF1bHRzIiwiZGVmIiwiaW5pdFVJIiwiYXBwQmFyU3BhY2VyIiwibWl4aW5zIiwidG9vbGJhciIsImNvbnRlbnQiLCJmbGV4R3JvdyIsInNwYWNpbmciLCJ1bml0Iiwib3ZlcmZsb3ciLCJkcmF3ZXJPcGVuIiwib25EcmF3ZXJPcGVuQ2xpY2siLCJiaW5kIiwib25EcmF3ZXJDbG9zZUNsaWNrIiwibmF2IiwicGFnZV90aXRsZSIsImRyYXdlciIsIm5vdGlmaWNhdGlvbnMiLCJyb3ciLCJwYWxldHRlIiwiYmFja2dyb3VuZCIsImRlZmF1bHQiLCJEYXRhIiwiaGlkZGVuIiwiaGVhZGVycyIsInN0eWxlIiwiaGVhZGVyc0NvbHMiLCJPYmplY3QiLCJrZXlzIiwiY2VsbCIsImRyYXdlcldpZHRoIiwicGFwZXIiLCJ3aGl0ZVNwYWNlIiwidHJhbnNpdGlvbiIsInRyYW5zaXRpb25zIiwiY3JlYXRlIiwiZWFzaW5nIiwic2hhcnAiLCJkdXJhdGlvbiIsImVudGVyaW5nU2NyZWVuIiwicGFwZXJDbG9zZSIsIm92ZXJmbG93WCIsImxlYXZpbmdTY3JlZW4iLCJicmVha3BvaW50cyIsInVwIiwidG9vbGJhckljb24iLCJkaXNwbGF5IiwiYWxpZ25JdGVtcyIsImp1c3RpZnlDb250ZW50IiwiRHJhd2VyIiwiaGFuZGxlRHJhd2VyQ2xvc2UiLCJvcGVuIiwibmF2RHJhd2VyIiwib3B0aW9ucyIsInNob3dJbkRyYXdlciIsImdldE9wdGlvbnMiLCJpIiwib3B0Iiwicm91dGUiLCJpY29uIiwibmFtZSIsIkljb24iLCJpY28iLCJnZXRJY29uIiwiX0xpbmsiLCJzaXplIiwidG8iLCJMaW5rIiwiTG9hZGluZyIsImJ1dHRvbiIsIm1hcmdpbkxlZnQiLCJtYXJnaW5SaWdodCIsImJ1dHRvbkhpZGRlbiIsImZpbGwiLCJUb29sYmFyIiwiaGFuZGxlRHJhd2VyT3BlbiIsIm5hdlRvb2xiYXIiLCJzaG93SW5NZW51IiwibmF2TWVudSIsIm9wdHMiLCJyZW5kZXIiLCJSZWFjdERPTSIsImdldEVsZW1lbnRCeUlkIiwicGFyZW50IiwiQ29uc3RhbnRzIiwiREVCVUciLCJMT0NBTCIsIlZFUlNJT04iLCJDT01JRCIsIkNPTUYiLCJDT01WIiwiVVhJX1ZFUlNJT05TIiwiU3RhdGUiLCJkYXRhX2tiX2FuZHJvaWQiLCJhcGlVUkkiLCJkYXRhUGF0aCIsInNldCIsImdldEFQSSIsImFwcCIsImdldEFwcEluZm8iLCJnZXRUcmVuZHNJbmZvIiwiZ2V0QXBwIiwiYmxvZyIsImFyZWEiLCJjYXRlZ29yeSIsImYxIiwidjEiLCJCYXNlQVBJIiwiTUVTU0FHRVNfTE9BRElORyIsIk1FU1NBR0VTX0ZBSUxFRCIsIk1FU1NBR0VTX0ZFVENIRUQiLCJNRVNTQUdFX0xPQURJTkciLCJNRVNTQUdFX0ZBSUxFRCIsIk1FU1NBR0VfRkVUQ0hFRCIsIkxBQkVMU19MT0FESU5HIiwiTEFCRUxTX0ZBSUxFRCIsIkxBQkVMU19GRVRDSEVEIiwiQ29uZmlndXJlU3RvcmUiLCJzdG9yZSIsIm1lc3NhZ2VzIiwiTWVzc2FnZXMiLCJsYWJlbHMiLCJMYWJlbHMiLCJ0aHVuayIsImxvZ2dlciIsImFjdGlvbiIsInR5cGUiLCJBY3Rpb25UeXBlcyIsInBheWxvYWQiLCJtZXNzYWdlIiwiaWR4IiwidGV4dCIsInRyZWUiLCJCYW9iYWIiLCJqbSIsInRyZW5kcyIsInBhZ2VzIiwiZ2xvYmFsIiwiaG9tZSIsImNvdXJzZXMiLCJjdiIsImtiX2FuZHJvaWQiLCJyZWNvcmRzIiwiY2F0ZWdvcmllcyIsImF1dG9Db21taXQiLCJhc3luY2hyb25vdXMiLCJpbW11dGFibGUiLCJwZXJzaXN0ZW50IiwiX19zdGF0ZSIsIkJsb2dMaW5rQ29tcG9uZW50Iiwic2x1ZyIsIlBvc3RMaW5rQ29tcG9uZW50IiwiUGFnZSIsImNvbnRleHQiLCJhcGkiLCJyb3V0ZXIiLCJQYWdlQ29tcG9uZW50IiwicmVuZGVyRGVmYXVsdCIsInBvc3RzIiwiUG9zdCIsInRhZ3MiLCJleGNlcnB0IiwiTGlzdCIsInBhZ2UiLCJDb250ZW50IiwiX19odG1sIiwiaHRtbCIsImNvbSIsIm9wdGlvbiIsImhhbmRsZUNoYW5nZSIsIm9uQ2xvc2UiLCJldmVudCIsInRhcmdldCIsInNldENvbXBvbmVudHNWZXJzaW9uIiwiQ09NX1NXSVRDSCIsInZpc2libGUiLCJEZWJ1ZyIsImlubmVyV2lkdGgiLCJib2R5IiwiY2xpZW50V2lkdGgiLCJpbm5lckhlaWdodCIsImNsaWVudEhlaWdodCIsImJyb3dzZXJOYW1lIiwiYnJvd3NlclZlcnNpb24iLCJtb2JpbGVWZW5kb3IiLCJtb2JpbGVNb2RlbCIsIm9zTmFtZSIsIm9zVmVyc2lvbiIsIkdyaWRDb250YWluZXIiLCJhbGlnbiIsImp1c3RpZnkiLCJ2YWxpZ24iLCJkaXJlY3Rpb24iLCJHcmlkSXRlbSIsInhzIiwic20iLCJtZCIsInByaW1hcnkiLCJUaGVtZSIsInNlY29uZGFyeSIsImFwcEJvZHkiLCJDaGlsZHJlbiIsInRvQXJyYXkiLCJfX25hdiIsIkFwcEJvZHkiLCJtaW5IZWlnaHQiLCJkZWZhdWx0UHJvcHMiLCJGb290ZXJDb21wb25lbnQiLCJIZWFkZXJDb21wb25lbnQiLCJUb3BCYXIiLCJob3QiLCJnZXRDdXJyZW50VmVyc2lvbiIsInZlcnNpb25SZXMiLCJIb3RCYXJDb21wb25lbnQiLCJ3aXRoTW9kdWxlIiwiZ3JleV8wXzBfMCIsImdyZXlfMTlfMl8xIiwiQ291cnNlIiwicGxhdGZvcm0iLCJyYXRpbmciLCJMYXRlc3RDb3Vyc2VzIiwiY2xlYW4iLCJib3JkZXJCb3R0b20iLCJNb2R1bGVzIiwiVHJhbnNmZXJzIiwibW9kcyIsImdldE1vZHVsZXMiLCJtb2RUZXN0IiwicmVjZW50IiwiUmVjZW50SXRlbSIsIlJlY2VudEl0ZW1zIiwiU29mdHdhcmVUcmVuZCIsIlNvZnR3YXJlVHJlbmRDb21wb25lbnQiLCJnZXREYXRhIiwibG9nIiwiaXRlbXMiLCJsYXN0VXBkYXRlIiwibGlzdCIsIml0ZW1zUGVyUGFnZSIsImZldGNoRGF0YSIsImNhdCIsImdldEtCQW5kcm9pZCIsInNjcm9sbFRvIiwidG90UGFnZXMiLCJNYXRoIiwiY2VpbCIsInBhZ2VEYXRhIiwiZWwiLCJjb250YWluZXIiLCJzZXRDYXRlZ29yeSIsImNhdDIiLCJjb3VudCIsImRlc2MiLCJyZXBvIiwiaG9tZXBhZ2UiLCJkb2NzIiwiZGVtbyIsIm1hc3RlcnBpZWNlIiwibGljZW5zZSIsImltZ3MiLCJpdGVtSW1nIiwic2V0UGFnZSIsIkNvbmYiLCJUSVRMRSIsIk1FTlVfQkFSX0ZHX0NPTE9SIiwiTUVOVV9CQVJfQkdfQ09MT1IiLCJWZXJzaW9ucyIsIkxPRyIsIkNPTV9DVVJSRU5UIiwiREVGQVVMVF9VWEkiLCJHYW1lcyIsIlN0YW5kaW5ncyIsIlBvc3RTZWFzb24iLCJOYXZpZ2F0aW9uIiwiSG9tZUNvbXBvbmVudCIsIkJsb2dDb21wb25lbnQiLCJCbG9nUG9zdENvbXBvbmVudCIsIktCQ29tcG9uZW50IiwiS0JQb3N0QW5kcm9pZENvbXBvbmVudCIsIktCUG9zdENvbXBvbmVudCIsIkxhYnNDb21wb25lbnQiLCJQcm9qZWN0Q29tcG9uZW50IiwiQ1ZDb21wb25lbnQiLCJtYWluIiwicm91dGVzIiwiSGVhZGVyIiwiTWFpbiIsInIiLCJJbmRleCIsIm5hdmlnYXRpb24iLCJOQVYiLCJSb290ZWRJbmRleCIsIm1hcFN0YXRlVG9Qcm9wcyIsIm1hcERpc3BhdGNoVG9Qcm9wcyIsImRpc3BhdGNoIiwiZ2V0QmxvZyIsImdldFBvc3QiLCJ5ZWFyIiwibW9udGgiLCJkYXkiLCJnZXRDViIsImdldEhvbWUiLCJnZXRUcmVuZHMiLCJnZXRLQkFuZHJvaWRDYXRlZ29yaWVzIiwicHJvamVjdCIsIkNvdXJzZXMiLCJjb21tZW50cyJdLCJtYXBwaW5ncyI6IjtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsZ0JBQVEsb0JBQW9CO0FBQzVCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EseUJBQWlCLDRCQUE0QjtB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Q0FBQyxxTEFBNkY7O0FBRWxIOztBQUVBLEdBQUcsS0FBVSxFQUFFLEUiLCJmaWxlIjoiYXBwLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gaW5zdGFsbCBhIEpTT05QIGNhbGxiYWNrIGZvciBjaHVuayBsb2FkaW5nXG4gXHRmdW5jdGlvbiB3ZWJwYWNrSnNvbnBDYWxsYmFjayhkYXRhKSB7XG4gXHRcdHZhciBjaHVua0lkcyA9IGRhdGFbMF07XG4gXHRcdHZhciBtb3JlTW9kdWxlcyA9IGRhdGFbMV07XG4gXHRcdHZhciBleGVjdXRlTW9kdWxlcyA9IGRhdGFbMl07XG5cbiBcdFx0Ly8gYWRkIFwibW9yZU1vZHVsZXNcIiB0byB0aGUgbW9kdWxlcyBvYmplY3QsXG4gXHRcdC8vIHRoZW4gZmxhZyBhbGwgXCJjaHVua0lkc1wiIGFzIGxvYWRlZCBhbmQgZmlyZSBjYWxsYmFja1xuIFx0XHR2YXIgbW9kdWxlSWQsIGNodW5rSWQsIGkgPSAwLCByZXNvbHZlcyA9IFtdO1xuIFx0XHRmb3IoO2kgPCBjaHVua0lkcy5sZW5ndGg7IGkrKykge1xuIFx0XHRcdGNodW5rSWQgPSBjaHVua0lkc1tpXTtcbiBcdFx0XHRpZihpbnN0YWxsZWRDaHVua3NbY2h1bmtJZF0pIHtcbiBcdFx0XHRcdHJlc29sdmVzLnB1c2goaW5zdGFsbGVkQ2h1bmtzW2NodW5rSWRdWzBdKTtcbiBcdFx0XHR9XG4gXHRcdFx0aW5zdGFsbGVkQ2h1bmtzW2NodW5rSWRdID0gMDtcbiBcdFx0fVxuIFx0XHRmb3IobW9kdWxlSWQgaW4gbW9yZU1vZHVsZXMpIHtcbiBcdFx0XHRpZihPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwobW9yZU1vZHVsZXMsIG1vZHVsZUlkKSkge1xuIFx0XHRcdFx0bW9kdWxlc1ttb2R1bGVJZF0gPSBtb3JlTW9kdWxlc1ttb2R1bGVJZF07XG4gXHRcdFx0fVxuIFx0XHR9XG4gXHRcdGlmKHBhcmVudEpzb25wRnVuY3Rpb24pIHBhcmVudEpzb25wRnVuY3Rpb24oZGF0YSk7XG5cbiBcdFx0d2hpbGUocmVzb2x2ZXMubGVuZ3RoKSB7XG4gXHRcdFx0cmVzb2x2ZXMuc2hpZnQoKSgpO1xuIFx0XHR9XG5cbiBcdFx0Ly8gYWRkIGVudHJ5IG1vZHVsZXMgZnJvbSBsb2FkZWQgY2h1bmsgdG8gZGVmZXJyZWQgbGlzdFxuIFx0XHRkZWZlcnJlZE1vZHVsZXMucHVzaC5hcHBseShkZWZlcnJlZE1vZHVsZXMsIGV4ZWN1dGVNb2R1bGVzIHx8IFtdKTtcblxuIFx0XHQvLyBydW4gZGVmZXJyZWQgbW9kdWxlcyB3aGVuIGFsbCBjaHVua3MgcmVhZHlcbiBcdFx0cmV0dXJuIGNoZWNrRGVmZXJyZWRNb2R1bGVzKCk7XG4gXHR9O1xuIFx0ZnVuY3Rpb24gY2hlY2tEZWZlcnJlZE1vZHVsZXMoKSB7XG4gXHRcdHZhciByZXN1bHQ7XG4gXHRcdGZvcih2YXIgaSA9IDA7IGkgPCBkZWZlcnJlZE1vZHVsZXMubGVuZ3RoOyBpKyspIHtcbiBcdFx0XHR2YXIgZGVmZXJyZWRNb2R1bGUgPSBkZWZlcnJlZE1vZHVsZXNbaV07XG4gXHRcdFx0dmFyIGZ1bGZpbGxlZCA9IHRydWU7XG4gXHRcdFx0Zm9yKHZhciBqID0gMTsgaiA8IGRlZmVycmVkTW9kdWxlLmxlbmd0aDsgaisrKSB7XG4gXHRcdFx0XHR2YXIgZGVwSWQgPSBkZWZlcnJlZE1vZHVsZVtqXTtcbiBcdFx0XHRcdGlmKGluc3RhbGxlZENodW5rc1tkZXBJZF0gIT09IDApIGZ1bGZpbGxlZCA9IGZhbHNlO1xuIFx0XHRcdH1cbiBcdFx0XHRpZihmdWxmaWxsZWQpIHtcbiBcdFx0XHRcdGRlZmVycmVkTW9kdWxlcy5zcGxpY2UoaS0tLCAxKTtcbiBcdFx0XHRcdHJlc3VsdCA9IF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gZGVmZXJyZWRNb2R1bGVbMF0pO1xuIFx0XHRcdH1cbiBcdFx0fVxuIFx0XHRyZXR1cm4gcmVzdWx0O1xuIFx0fVxuXG4gXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBvYmplY3QgdG8gc3RvcmUgbG9hZGVkIGFuZCBsb2FkaW5nIGNodW5rc1xuIFx0Ly8gdW5kZWZpbmVkID0gY2h1bmsgbm90IGxvYWRlZCwgbnVsbCA9IGNodW5rIHByZWxvYWRlZC9wcmVmZXRjaGVkXG4gXHQvLyBQcm9taXNlID0gY2h1bmsgbG9hZGluZywgMCA9IGNodW5rIGxvYWRlZFxuIFx0dmFyIGluc3RhbGxlZENodW5rcyA9IHtcbiBcdFx0XCJhcHBcIjogMFxuIFx0fTtcblxuIFx0dmFyIGRlZmVycmVkTW9kdWxlcyA9IFtdO1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG4gXHR2YXIganNvbnBBcnJheSA9IHdpbmRvd1tcIndlYnBhY2tKc29ucFwiXSA9IHdpbmRvd1tcIndlYnBhY2tKc29ucFwiXSB8fCBbXTtcbiBcdHZhciBvbGRKc29ucEZ1bmN0aW9uID0ganNvbnBBcnJheS5wdXNoLmJpbmQoanNvbnBBcnJheSk7XG4gXHRqc29ucEFycmF5LnB1c2ggPSB3ZWJwYWNrSnNvbnBDYWxsYmFjaztcbiBcdGpzb25wQXJyYXkgPSBqc29ucEFycmF5LnNsaWNlKCk7XG4gXHRmb3IodmFyIGkgPSAwOyBpIDwganNvbnBBcnJheS5sZW5ndGg7IGkrKykgd2VicGFja0pzb25wQ2FsbGJhY2soanNvbnBBcnJheVtpXSk7XG4gXHR2YXIgcGFyZW50SnNvbnBGdW5jdGlvbiA9IG9sZEpzb25wRnVuY3Rpb247XG5cblxuIFx0Ly8gYWRkIGVudHJ5IG1vZHVsZSB0byBkZWZlcnJlZCBsaXN0XG4gXHRkZWZlcnJlZE1vZHVsZXMucHVzaChbMCxcInZlbmRvclwiXSk7XG4gXHQvLyBydW4gZGVmZXJyZWQgbW9kdWxlcyB3aGVuIHJlYWR5XG4gXHRyZXR1cm4gY2hlY2tEZWZlcnJlZE1vZHVsZXMoKTtcbiIsImV4cG9ydHMgPSBtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCIuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9mcmFtZXdvcmtzL3dlYmFwcHMvc3RhcnR1cC9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCIpKGZhbHNlKTtcbi8vIE1vZHVsZVxuZXhwb3J0cy5wdXNoKFttb2R1bGUuaWQsIFwiLm1vZC1ibG9nLWxpc3QgLnBvc3Qge1xcbiAgcGFkZGluZy1ib3R0b206IDIwcHg7IH1cXG5cXG4ubW9kLWJsb2ctbGlzdCAucG9zdCAuY2F0ZWdvcnkge1xcbiAgZm9udC1zaXplOiAwLjhlbTtcXG4gIGxpbmUtaGVpZ2h0OiAwLjllbTtcXG4gIGZvbnQtd2VpZ2h0OiBib2xkOyB9XFxuXFxuLm1vZC1ibG9nLWxpc3QgLnBvc3QgLnRpdGxlIHtcXG4gIGZvbnQtc2l6ZTogMmVtO1xcbiAgbGluZS1oZWlnaHQ6IDEuMjVlbTsgfVxcblxcbi5tb2QtYmxvZy1saXN0IC5wb3N0IC5kYXRlIHtcXG4gIGZvbnQtc2l6ZTogMC43NWVtO1xcbiAgbGluZS1oZWlnaHQ6IDEuMWVtOyB9XFxuXFxuLm1vZC1ibG9nLWxpc3QgLnBvc3QgLnRhZ3Mge1xcbiAgZm9udC1zaXplOiAwLjhlbTtcXG4gIGxpbmUtaGVpZ2h0OiAxLjFlbTsgfVxcblxcbi5tb2QtYmxvZy1saXN0IC5wb3N0IC5leGNlcnB0IHtcXG4gIGZvbnQtc2l6ZTogMWVtO1xcbiAgbGluZS1oZWlnaHQ6IDEuNWVtOyB9XFxuXCIsIFwiXCJdKTtcblxuIiwiZXhwb3J0cyA9IG1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL2ZyYW1ld29ya3Mvd2ViYXBwcy9zdGFydHVwL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIikoZmFsc2UpO1xuLy8gTW9kdWxlXG5leHBvcnRzLnB1c2goW21vZHVsZS5pZCwgXCIubW9kLXBvc3QtY29udGVudCB7XFxuICBmb250LXNpemU6IDEuM2VtO1xcbiAgbGluZS1oZWlnaHQ6IDEuOGVtOyB9XFxuXFxuLm1vZC1wb3N0LWNvbnRlbnQgLmRhdGUge1xcbiAgZm9udC1zaXplOiAwLjhlbTtcXG4gIGxpbmUtaGVpZ2h0OiAwLjllbTtcXG4gIG1hcmdpbi10b3A6IC0xMHB4O1xcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7IH1cXG5cXG4ubW9kLXBvc3QtY29udGVudCAuZXhjZXJwdCB7XFxuICBmb250LXNpemU6IDFlbTtcXG4gIGxpbmUtaGVpZ2h0OiAxLjFlbTtcXG4gIGZvbnQtc3R5bGU6IGl0YWxpYzsgfVxcblxcbi5tb2QtcG9zdC1jb250ZW50IC5hbGVydCB7XFxuICBib3JkZXI6IDFweCBzb2xpZCBibGFjaztcXG4gIGJhY2tncm91bmQtY29sb3I6IFJHQkEoMCwgMCwgMCwgMC4zKTtcXG4gIHBhZGRpbmc6IDVweDtcXG4gIGJvcmRlci1yYWRpdXM6IDVweDtcXG4gIGNvbG9yOiB3aGl0ZTtcXG4gIG1hcmdpbi10b3A6IDEwcHg7XFxuICBtYXJnaW4tYm90dG9tOiAxMHB4OyB9XFxuXCIsIFwiXCJdKTtcblxuIiwiZXhwb3J0cyA9IG1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL2ZyYW1ld29ya3Mvd2ViYXBwcy9zdGFydHVwL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIikoZmFsc2UpO1xuLy8gTW9kdWxlXG5leHBvcnRzLnB1c2goW21vZHVsZS5pZCwgXCIubW9kLXZlcnNpb24ge1xcbiAgd2lkdGg6IDEwMCU7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcXG4gIHBhZGRpbmc6IDEwcHg7IH1cXG5cIiwgXCJcIl0pO1xuXG4iLCJleHBvcnRzID0gbW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vZnJhbWV3b3Jrcy93ZWJhcHBzL3N0YXJ0dXAvbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiKShmYWxzZSk7XG4vLyBNb2R1bGVcbmV4cG9ydHMucHVzaChbbW9kdWxlLmlkLCBcIi5tb2QtZm9vdGVyIHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICM1NTU7XFxuICBjb2xvcjogd2hpdGU7XFxuICBwYWRkaW5nOiAyMHB4IDIwcHggMjBweCAzMHB4OyB9XFxuXFxuLm1vZC1mb290ZXIgYTp2aXNpdGVkLFxcbi5tb2QtZm9vdGVyIGE6bGluayB7XFxuICBjb2xvcjogd2hpdGU7XFxuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7IH1cXG5cIiwgXCJcIl0pO1xuXG4iLCJleHBvcnRzID0gbW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vZnJhbWV3b3Jrcy93ZWJhcHBzL3N0YXJ0dXAvbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiKShmYWxzZSk7XG4vLyBNb2R1bGVcbmV4cG9ydHMucHVzaChbbW9kdWxlLmlkLCBcIi5tb2Qtd2hhdHMtaG90IHtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gIGZvbnQtc2l6ZTogMC44ZW07IH1cXG5cIiwgXCJcIl0pO1xuXG4iLCJleHBvcnRzID0gbW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vZnJhbWV3b3Jrcy93ZWJhcHBzL3N0YXJ0dXAvbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiKShmYWxzZSk7XG4vLyBNb2R1bGVcbmV4cG9ydHMucHVzaChbbW9kdWxlLmlkLCBcIlwiLCBcIlwiXSk7XG5cbiIsImV4cG9ydHMgPSBtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCIuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9mcmFtZXdvcmtzL3dlYmFwcHMvc3RhcnR1cC9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCIpKGZhbHNlKTtcbi8vIE1vZHVsZVxuZXhwb3J0cy5wdXNoKFttb2R1bGUuaWQsIFwiLm1vZC1sYXRlc3QtY291cnNlcyB7XFxuICBwYWRkaW5nLWJvdHRvbTogMzBweDsgfVxcblxcbi5tb2QtbGF0ZXN0LWNvdXJzZXMgLmNvdXJzZSB7XFxuICBwYWRkaW5nLWJvdHRvbTogMmVtOyB9XFxuXFxuLm1vZC1sYXRlc3QtY291cnNlcyAuY291cnNlIC5oZWFkZXIgLmZyb20ge1xcbiAgZm9udC1zaXplOiAxLjI1ZW07IH1cXG5cXG4ubW9kLWxhdGVzdC1jb3Vyc2VzIC5jb3Vyc2UgLm5hbWUge1xcbiAgZm9udC1zaXplOiAyLjBlbTtcXG4gIGxpbmUtaGVpZ2h0OiAxLjI1ZW07IH1cXG5cXG4ubW9kLWxhdGVzdC1jb3Vyc2VzIC5jb3Vyc2UgLnBsYXRmb3JtIHtcXG4gIGZvbnQtc2l6ZTogMC43NWVtOyB9XFxuXCIsIFwiXCJdKTtcblxuIiwiZXhwb3J0cyA9IG1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL2ZyYW1ld29ya3Mvd2ViYXBwcy9zdGFydHVwL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIikoZmFsc2UpO1xuLy8gTW9kdWxlXG5leHBvcnRzLnB1c2goW21vZHVsZS5pZCwgXCIubW9kLWhlcm8ge1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgcGFkZGluZy10b3A6IDRlbTtcXG4gIHBhZGRpbmctYm90dG9tOiA0ZW07IH1cXG5cXG4ubW9kLWhlcm8gaDEge1xcbiAgZm9udC1zaXplOiAzZW07XFxuICBsaW5lLWhlaWdodDogMS4yNWVtOyB9XFxuXFxuLm1vZC1oZXJvIGgyIHtcXG4gIGZvbnQtc2l6ZTogMS4yNWVtO1xcbiAgbGluZS1oZWlnaHQ6IDEuMjVlbTsgfVxcblwiLCBcIlwiXSk7XG5cbiIsImV4cG9ydHMgPSBtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCIuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9mcmFtZXdvcmtzL3dlYmFwcHMvc3RhcnR1cC9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCIpKGZhbHNlKTtcbi8vIE1vZHVsZVxuZXhwb3J0cy5wdXNoKFttb2R1bGUuaWQsIFwiLm1vZC1yZWNlbnQge1xcbiAgdGV4dC1hbGlnbjogY2VudGVyOyB9XFxuXFxuLm1vZC1yZWNlbnQgaDEge1xcbiAgZm9udC1zaXplOiAxLjFlbTsgfVxcblxcbi5tb2QtcmVjZW50IGgyIHtcXG4gIGZvbnQtc2l6ZTogMWVtOyB9XFxuXCIsIFwiXCJdKTtcblxuIiwiZXhwb3J0cyA9IG1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL2ZyYW1ld29ya3Mvd2ViYXBwcy9zdGFydHVwL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIikoZmFsc2UpO1xuLy8gTW9kdWxlXG5leHBvcnRzLnB1c2goW21vZHVsZS5pZCwgXCIubW9kLWtiLWFuZHJvaWQge1xcbiAgZm9udC1zaXplOiAxLjNlbTtcXG4gIGxpbmUtaGVpZ2h0OiAxLjhlbTsgfVxcblxcbi5tb2Qta2ItYW5kcm9pZCAuZGF0ZSB7XFxuICBmb250LXNpemU6IDAuOGVtO1xcbiAgbGluZS1oZWlnaHQ6IDAuOWVtO1xcbiAgbWFyZ2luLXRvcDogLTEwcHg7XFxuICBmb250LXdlaWdodDogYm9sZDsgfVxcblxcbi5tb2Qta2ItYW5kcm9pZCAuZXhjZXJwdCB7XFxuICBmb250LXNpemU6IDFlbTtcXG4gIGxpbmUtaGVpZ2h0OiAxLjFlbTtcXG4gIGZvbnQtc3R5bGU6IGl0YWxpYzsgfVxcblxcbi5tb2Qta2ItYW5kcm9pZCAuY2F0ZWdvcmllcyB7XFxuICBwYWRkaW5nLWJvdHRvbTogMjBweDsgfVxcblxcbi5tb2Qta2ItYW5kcm9pZCBoMSB7XFxuICBmb250LXNpemU6IDEuMmVtO1xcbiAgbGluZS1oZWlnaHQ6IDEuMGVtOyB9XFxuXFxuLm1vZC1rYi1hbmRyb2lkIC5jYXRlZ29yeSB7XFxuICBmb250LXNpemU6IDAuNzVlbTtcXG4gIGxpbmUtaGVpZ2h0OiAxLjBlbTtcXG4gIHBhZGRpbmctcmlnaHQ6IDIwcHg7XFxuICBjb2xvcjogIzU1NTtcXG4gIGN1cnNvcjogcG9pbnRlcjsgfVxcblxcbi5tb2Qta2ItYW5kcm9pZCAuY2F0ZWdvcnkuYWN0aXZlIHtcXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xcbiAgY29sb3I6IGJsYWNrOyB9XFxuXFxuLm1vZC1rYi1hbmRyb2lkIC5pdGVtIHtcXG4gIHBhZGRpbmctYm90dG9tOiAxZW07IH1cXG5cXG4ubW9kLWtiLWFuZHJvaWQgLml0ZW0gLnN1YmNhdCB7XFxuICBmb250LXNpemU6IDAuNmVtOyB9XFxuXFxuLm1vZC1rYi1hbmRyb2lkIC5pdGVtIC50aXRsZSB7XFxuICBmb250LXNpemU6IDFlbTtcXG4gIGxpbmUtaGVpZ2h0OiAxZW07IH1cXG5cXG4ubW9kLWtiLWFuZHJvaWQgLml0ZW0gLnRpdGxlIC5yZWZzIHtcXG4gIGZvbnQtc2l6ZTogMC42ZW07IH1cXG5cXG4ubW9kLWtiLWFuZHJvaWQgLml0ZW0gLmRlc2NyaXB0aW9uIHtcXG4gIGZvbnQtc2l6ZTogMC43NWVtO1xcbiAgbGluZS1oZWlnaHQ6IDEuMjVlbTsgfVxcblxcbi5tb2Qta2ItYW5kcm9pZCAuaXRlbSAubGlua3Mge1xcbiAgcGFkZGluZzogMHB4O1xcbiAgbGluZS1oZWlnaHQ6IDAuOGVtOyB9XFxuXFxuLm1vZC1rYi1hbmRyb2lkIC5pdGVtIHNwYW4ubGluayB7XFxuICBwYWRkaW5nOiAwcHg7XFxuICBmb250LXNpemU6IDAuNzVlbTsgfVxcblxcbi5tb2Qta2ItYW5kcm9pZCAuaXRlbSAuaW1hZ2VzIHtcXG4gIHBhZGRpbmctdG9wOiAxMHB4O1xcbiAgcGFkZGluZy1sZWZ0OiAyMHB4OyB9XFxuXFxuLm1vZC1rYi1hbmRyb2lkIC5wYWdlX2luZGV4IC5wYWdlIHtcXG4gIGNvbG9yOiAjNDQ0O1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbiAgcGFkZGluZy1yaWdodDogMTBweDtcXG4gIGZvbnQtc2l6ZTogMWVtOyB9XFxuXFxuLm1vZC1rYi1hbmRyb2lkIC5wYWdlX2luZGV4IC5wYWdlLmFjdGl2ZSB7XFxuICBjb2xvcjogYmxhY2s7XFxuICBmb250LXdlaWdodDogYm9sZDsgfVxcblxcbi5tb2Qta2ItYW5kcm9pZCAuZm9vdGVyIHtcXG4gIGZvbnQtc2l6ZTogMC43NWVtOyB9XFxuXCIsIFwiXCJdKTtcblxuIiwiZXhwb3J0cyA9IG1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIi4uLy4uLy4uLy4uLy4uLy4uL2ZyYW1ld29ya3Mvd2ViYXBwcy9zdGFydHVwL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIikoZmFsc2UpO1xuLy8gTW9kdWxlXG5leHBvcnRzLnB1c2goW21vZHVsZS5pZCwgXCJcIiwgXCJcIl0pO1xuXG4iLCJleHBvcnRzID0gbW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vZnJhbWV3b3Jrcy93ZWJhcHBzL3N0YXJ0dXAvbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiKShmYWxzZSk7XG4vLyBNb2R1bGVcbmV4cG9ydHMucHVzaChbbW9kdWxlLmlkLCBcIi5tb2QtY291cnNlcy1saXN0IC5jb3Vyc2Uge1xcbiAgcGFkZGluZy1ib3R0b206IDIwcHg7IH1cXG5cXG4ubW9kLWNvdXJzZXMtbGlzdCAuY291cnNlIC5oZWFkZXIgLnBsYXRmb3JtIHtcXG4gIGZvbnQtc2l6ZTogMC43ZW07IH1cXG5cXG4ubW9kLWNvdXJzZXMtbGlzdCAuY291cnNlIC5uYW1lIHtcXG4gIGZvbnQtc2l6ZTogMS4xZW07IH1cXG5cXG4ubW9kLWNvdXJzZXMtbGlzdCAuY291cnNlIC5jb21tZW50cyB7XFxuICBmb250LXNpemU6IDAuOWVtO1xcbiAgdGV4dC1hbGlnbm1lbnQ6IGp1c3RpZnk7IH1cXG5cXG4ubW9kLWNvdXJzZXMtbGlzdCAuY291cnNlIC5mcm9tIHtcXG4gIGZvbnQtc2l6ZTogMC44ZW07IH1cXG5cIiwgXCJcIl0pO1xuXG4iLCJleHBvcnRzID0gbW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vZnJhbWV3b3Jrcy93ZWJhcHBzL3N0YXJ0dXAvbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiKShmYWxzZSk7XG4vLyBNb2R1bGVcbmV4cG9ydHMucHVzaChbbW9kdWxlLmlkLCBcIi5tb2QtY291cnNlcy1saXN0IC5jb3Vyc2Uge1xcbiAgcGFkZGluZy1ib3R0b206IDIwcHg7IH1cXG5cXG4ubW9kLWNvdXJzZXMtbGlzdCAuY291cnNlIC5oZWFkZXIgLnBsYXRmb3JtIHtcXG4gIGZvbnQtc2l6ZTogMC43ZW07IH1cXG5cXG4ubW9kLWNvdXJzZXMtbGlzdCAuY291cnNlIC5uYW1lIHtcXG4gIGZvbnQtc2l6ZTogMS4xZW07IH1cXG5cXG4ubW9kLWNvdXJzZXMtbGlzdCAuY291cnNlIC5jb21tZW50cyB7XFxuICBmb250LXNpemU6IDAuOWVtO1xcbiAgdGV4dC1hbGlnbm1lbnQ6IGp1c3RpZnk7IH1cXG5cXG4ubW9kLWNvdXJzZXMtbGlzdCAuY291cnNlIC5mcm9tIHtcXG4gIGZvbnQtc2l6ZTogMC44ZW07IH1cXG5cIiwgXCJcIl0pO1xuXG4iLCJleHBvcnRzID0gbW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiLi4vLi4vLi4vLi4vLi4vLi4vLi4vZnJhbWV3b3Jrcy93ZWJhcHBzL3N0YXJ0dXAvbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiKShmYWxzZSk7XG4vLyBNb2R1bGVcbmV4cG9ydHMucHVzaChbbW9kdWxlLmlkLCBcIi5tb2Qtc29jaWFsLWljb25zIHtcXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gIG1hcmdpbjogMTBweCAwOyB9XFxuXFxuLm1vZC1zb2NpYWwtaWNvbnMgYSB7XFxuICBmb250LXNpemU6IDE0cHggIWltcG9ydGFudDtcXG4gIG1hcmdpbi1yaWdodDogNXB4OyB9XFxuXFxuLm1vZC1zb2NpYWwtaWNvbnMgYTpob3ZlciB7XFxuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7IH1cXG5cXG4ubW9kLXNvY2lhbC1pY29ucyBhIGkge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XFxuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXIgY2VudGVyO1xcbiAgbGluZS1oZWlnaHQ6IDMycHg7XFxuICBib3JkZXItcmFkaXVzOiA4cHg7XFxuICBib3JkZXI6IDFweCBzb2xpZCAjYTBhMGEwO1xcbiAgaGVpZ2h0OiAzOHB4O1xcbiAgd2lkdGg6IDM4cHg7XFxuICBwYWRkaW5nLXRvcDogMnB4OyB9XFxuXCIsIFwiXCJdKTtcblxuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHsgaG90IH0gZnJvbSAncmVhY3QtaG90LWxvYWRlci9yb290J1xuaW1wb3J0IFJvb3QgZnJvbSAnam1hcnJveWF2ZS9pbmRleCdcblxuY2xhc3MgQXBwIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50e1xuXHRyZW5kZXIoKXtcblx0XHRyZXR1cm4gPFJvb3QvPlxuXHR9XHRcbn1cblxuZXhwb3J0IGRlZmF1bHQgaG90KEFwcCkiLCJpbXBvcnQgU2VydmVyIGZyb20gJ2NvcmUvYXBwL3NlcnZlcic7XG5pbXBvcnQgQ29tcG9uZW50cyBmcm9tICdjb3JlL2FwcC9jb21wb25lbnRzJztcblxuY2xhc3MgQVBJIHtcblx0Y29uc3RydWN0b3IocHJvcHMpIHtcblx0XHR0aGlzLmVycm9yID0gXCJcIjtcblx0XHR0aGlzLmN1cnJlbnRfY29tcG9uZW50ID0gcHJvcHMuY3VycmVudF9jb21wb25lbnQ7XG5cdFx0dGhpcy5jb21wb25lbnRzID0gcHJvcHMuY29tcG9uZW50cztcblx0XHR0aGlzLmxvY2FsID0gcHJvcHMubG9jYWw7XG5cdFx0dGhpcy50aXRsZSA9IHByb3BzLnRpdGxlO1xuXHRcdHRoaXMuZGVidWcgPSBwcm9wcy5kZWJ1ZztcblxuXHRcdHRoaXMuc2VydmVyID0gbmV3IFNlcnZlcih7ZGVidWc6IHRoaXMuZGVidWcsIGxvY2FsOiB0aGlzLmxvY2FsfSk7XG5cdH1cblxuXHRnZXRFcnJvcigpe1xuXHRcdHJldHVybiB0aGlzLmVycm9yO1xuXHR9XG5cblx0c2V0RXJyb3IoZXJyKXtcblx0XHR0aGlzLmVycm9yICs9IFwiXFxuXCIgKyBlcnI7XG5cdH1cblxuXHRnZXRDb21wb25lbnRzVmVyc2lvbigpe1xuXHRcdHJldHVybiB0aGlzLmN1cnJlbnRfY29tcG9uZW50O1xuXHR9XG5cblx0c2V0Q29tcG9uZW50c1ZlcnNpb24oaWQpe1xuXHRcdHZhciBmYW1pbHksIHZlcnNpb247XG5cdFx0Y29uc3QgZGF0YSA9IHRoaXMuY29tcG9uZW50cztcblx0XHRjb25zdCBpdGVtID0gZGF0YS5maW5kKChpdGVtKSA9PiAoaXRlbS5pZCA9PSBpZCkgPyBpdGVtIDogbnVsbCk7XG5cblx0XHR0aGlzLmN1cnJlbnRfY29tcG9uZW50ID0ge2lkIDogaXRlbS5pZCwgZmFtaWx5IDogaXRlbS5mYW1pbHksIHZlcnNpb24gOiBpdGVtLnZlcnNpb259O1xuXHR9XG4gIFxufVxuXG5leHBvcnQgZGVmYXVsdCBBUEk7XG4iLCJjbGFzcyBDb21wb25lbnRze1xuXG5cdGdldEN1cnJlbnRWZXJzaW9uKCl7XG5cdFx0cmV0dXJuIHdpbmRvdy5fX2FwaS5nZXRDb21wb25lbnRzVmVyc2lvbigpOyBcblx0fVxuXG5cdGdldFJlc29sdmVkVmVyc2lvbihpbmRleCwgdGl0bGUpe1xuXHRcdGNvbnN0IGNvbmYgPSB3aW5kb3cuX19hcGkuZ2V0Q29tcG9uZW50c1ZlcnNpb24oKTsgXG5cdFx0Y29uc3QgZmFtaWx5ID0gY29uZi5mYW1pbHk7XG5cdFx0Y29uc3QgdmVyc2lvbiA9IGNvbmYudmVyc2lvbjtcblx0XHR2YXIgQ29udHJvbDtcblxuXHRcdC8vY29uc29sZS5kZWJ1ZygnQ29tcG9uZW50czogcmVzb2x2aW5nJywgdGl0bGUsIGZhbWlseSwgdmVyc2lvbi50b1N0cmluZygpKTtcblxuXHRcdGNvbnN0IGNvbnRyb2xzID0gaW5kZXhcblx0XHRcdC5maWx0ZXIoKGl0ZW0pID0+IChpdGVtLmZhbWlseSA9PSBmYW1pbHkpID8gaXRlbSA6IG51bGwpXG5cdFx0XHQuc29ydCgoYSxiKT0+e1xuXHRcdFx0XHRpZihhLnZlcnNpb25bMF0gPT0gYi52ZXJzaW9uWzBdKXtcblx0XHRcdFx0XHRyZXR1cm4gKGEudmVyc2lvblswXSA+IGIudmVyc2lvblswXSkgPyAtMSA6IDE7XG5cdFx0XHRcdH1cblx0XHRcdFx0aWYoYS52ZXJzaW9uWzFdID09IGIudmVyc2lvblsxXSl7XG5cdFx0XHRcdFx0cmV0dXJuIChhLnZlcnNpb25bMV0gPiBiLnZlcnNpb25bMV0pID8gLTEgOiAxO1xuXHRcdFx0XHR9XG5cdFx0XHRcdGlmKGEudmVyc2lvblsyXSA9PSBiLnZlcnNpb25bMl0pe1xuXHRcdFx0XHRcdHJldHVybiAoYS52ZXJzaW9uWzJdID4gYi52ZXJzaW9uWzJdKSA/IC0xIDogMTtcblx0XHRcdFx0fVxuXHRcdFx0fSk7XG5cblx0XHRcblxuXHRcdGlmKGNvbnRyb2xzLmxlbmd0aCA+IDApe1xuXG5cdFx0XHRDb250cm9sID0gY29udHJvbHMuZmluZCgoaXRlbSkgPT4gKEpTT04uc3RyaW5naWZ5KHZlcnNpb24pID09IEpTT04uc3RyaW5naWZ5KGl0ZW0udmVyc2lvbikpID8gaXRlbSA6IG51bGwpO1xuXG5cdFx0XHRpZihDb250cm9sICE9IG51bGwpe1xuXHRcdFx0XHQvL2NvbnNvbGUuZGVidWcoJ0NvbXBvbmVudHM6IHJlc29sdmUnLCAnZXhhY3QgdmVyc2lvbicpO1xuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0Ly8gTWFqb3IsIE1pbm9yLCBSZXZpc2lvblxuXHRcdFx0XHR2YXIgdmVyID0gdmVyc2lvbi5zbGljZSgwKTtcblx0XHRcdFx0dmFyIGNvbnRyb2xzTWFqb3I7XG5cdFx0XHRcdGZvcih2YXIgbWFqb3IgPSB2ZXJbMF07IG1ham9yID49IDA7IG1ham9yLS0pe1xuXHRcdFx0XHRcdGNvbnRyb2xzTWFqb3IgPSBjb250cm9scy5maWx0ZXIoKGl0ZW0pID0+IChpdGVtLnZlcnNpb25bMF0gPT0gbWFqb3IpID8gaXRlbSA6IG51bGwpO1xuXHRcdFx0XHRcdGlmKGNvbnRyb2xzTWFqb3IubGVuZ3RoID4gMCkge1xuXHRcdFx0XHRcdFx0aWYobWFqb3IgIT0gdmVyc2lvblswXSl7XG5cdFx0XHRcdFx0XHRcdHZlclswXSA9IG1ham9yO1xuXHRcdFx0XHRcdFx0XHR2ZXJbMV0gPSBjb250cm9sc01ham9yWzBdLnZlcnNpb25bMV07XG5cdFx0XHRcdFx0XHRcdHZlclsyXSA9IGNvbnRyb2xzTWFqb3JbMF0udmVyc2lvblsyXTtcblx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdGJyZWFrO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0fVxuXG5cdFx0XHRcdC8vY29uc29sZS5sb2coY29udHJvbHNNYWpvciwgdmVyc2lvbiwgdmVyKTtcblxuXHRcdFx0XHR2YXIgY29udHJvbHNNaW5vcjtcblx0XHRcdFx0Zm9yKHZhciBtaW5vciA9IHZlclsxXTsgbWlub3IgPj0gMDsgbWlub3ItLSl7XG5cdFx0XHRcdFx0Y29udHJvbHNNaW5vciA9IGNvbnRyb2xzTWFqb3IuZmlsdGVyKChpdGVtKSA9PiAoaXRlbS52ZXJzaW9uWzFdID09IG1pbm9yKSA/IGl0ZW0gOiBudWxsKTtcblx0XHRcdFx0XHRpZihjb250cm9sc01pbm9yLmxlbmd0aCA+IDApIHtcblx0XHRcdFx0XHRcdGlmKG1pbm9yICE9IHZlcnNpb25bMV0pe1xuXHRcdFx0XHRcdFx0XHR2ZXJbMV0gPSBtaW5vcjtcblx0XHRcdFx0XHRcdFx0dmVyWzJdID0gY29udHJvbHNNaW5vclswXS52ZXJzaW9uWzJdO1xuXHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0YnJlYWs7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9XG5cdFx0XHRcdFx0XHRcdFx0XG5cdFx0XHRcdC8vY29uc29sZS5sb2coY29udHJvbHNNaW5vciwgdmVyc2lvbiwgdmVyKTtcblxuXHRcdFx0XHRmb3IodmFyIHJldiA9IHZlclsyXTsgcmV2ID49IDA7IHJldi0tKXtcblx0XHRcdFx0XHR2YXIgY29udHJvbHNSZXYgPSBjb250cm9sc01pbm9yLmZpbHRlcigoaXRlbSkgPT4gKGl0ZW0udmVyc2lvblsyXSA9PSByZXYpID8gaXRlbSA6IG51bGwpO1xuXG5cdFx0XHRcdFx0aWYoY29udHJvbHNSZXYubGVuZ3RoID4gMCkge1xuXHRcdFx0XHRcdFx0Q29udHJvbCA9IGNvbnRyb2xzUmV2WzBdO1xuXHRcdFx0XHRcdFx0YnJlYWs7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0fVxuXG5cdFx0aWYoQ29udHJvbCA9PSBudWxsKXtcdFx0XG5cdFx0XHRDb250cm9sID0gaW5kZXhbMF07XG5cdFx0XHRjb25zb2xlLmRlYnVnKCdDb21wb25lbnRzOiByZXNvbHZlJywgJ1swXScsIHRpdGxlLCBpbmRleCwgZmFtaWx5LCB2ZXJzaW9uLnRvU3RyaW5nKCksIGNvbnRyb2xzKTtcblx0XHR9XG5cblxuXHRcdGlmKENvbnRyb2wgPT0gbnVsbCB8fCBDb250cm9sLmNvbnRyb2wgPT0gbnVsbCl7XG5cdFx0XHRjb25zb2xlLmVycm9yKFwiQ29tcG9uZW50IENvbmZpZ3VyYXRpb25cIiwgdGl0bGUsIGZhbWlseSwgdmVyc2lvbi50b1N0cmluZygpLCBpbmRleCk7XG5cdFx0fVxuXG5cdFx0cmV0dXJuIENvbnRyb2w7XG5cdH1cblxuXG5cdHJlc29sdmUoaW5kZXgsIHRpdGxlKXtcblx0XHRjb25zdCBDb250cm9sID0gdGhpcy5nZXRSZXNvbHZlZFZlcnNpb24oaW5kZXgsIHRpdGxlKTtcblx0XHRyZXR1cm4gQ29udHJvbC5jb250cm9sO1xuXHR9XG59IFxuXG53aW5kb3cuX19jb21wb25lbnRzID0gbmV3IENvbXBvbmVudHMoKTtcblxuZXhwb3J0IGRlZmF1bHQgQ29tcG9uZW50czsiLCJpbXBvcnQgYXhpb3MgZnJvbSAnYXhpb3MnO1xuXG5jbGFzcyBTZXJ2ZXIge1xuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgIHRoaXMub25TdGFydExvYWRpbmcgPSBudWxsO1xuICAgIHRoaXMub25TdG9wTG9hZGluZyA9IG51bGw7XG4gICAgdGhpcy5vbkVycm9yID0gbnVsbDtcbiAgICBcblxuICAgIHZhciBjb25uZWN0aW9ucyA9IFtcbiAgICAgIHtwcm90b2NvbDogJ2h0dHAnLCBzZXJ2ZXI6ICdkYXRhLXNlcnZlcicsIHBhdGg6Jy9kYXRhJ30sXG4gICAgICB7cHJvdG9jb2w6ICdodHRwcycsIHNlcnZlcjogJ2ptYXJyb3lhdmUtc2VhcmNoLWJhY2tlbmQuaGVyb2t1YXBwLmNvbScsIHBhdGg6Jyd9LFxuICAgICAge3Byb3RvY29sOiAnaHR0cHMnLCBzZXJ2ZXI6ICdqbWFycm95YXZlLWRhdGEtc2VydmVyLmhlcm9rdWFwcC5jb20nLCBwYXRoOicnfSxcbiAgICAgIHtwcm90b2NvbDogZG9jdW1lbnQubG9jYXRpb24ucHJvdG9jb2wucmVwbGFjZShcIjpcIixcIlwiKSwgc2VydmVyOiBkb2N1bWVudC5sb2NhdGlvbi5ob3N0bmFtZSwgcGF0aDonL2RhdGEnfSxcbiAgICBdXG5cbiAgICB2YXIgY3VycmVudCA9ICAocHJvcHMgJiYgcHJvcHMubG9jYWwgPT0gZmFsc2UpID8gY29ubmVjdGlvbnNbMl0gOiBjb25uZWN0aW9uc1szXTsgXG4gICAgdGhpcy5zZXJ2ZXJVUkkgPSAoY3VycmVudC5zZXJ2ZXIgPT0gJycpID8gY3VycmVudC5wYXRoIDogYCR7Y3VycmVudC5wcm90b2NvbH06Ly8ke2N1cnJlbnQuc2VydmVyfSR7Y3VycmVudC5wYXRofWA7XG4gICAgdGhpcy5kZWJ1ZyA9ICghcHJvcHMgfHwgcHJvcHMuZGVidWcpID8gdHJ1ZSA6IGZhbHNlO1xuXG4gICAgLy9jb25zb2xlLmluZm8oXCJkYXRhLXNlcnZlclwiLCB0aGlzLnNlcnZlclVSSSk7XG4gIH1cblxuICB0cmlnZ2VyT25TdGFydExvYWRpbmcoKXsgICBcbiAgICBpZih0aGlzLm9uU3RhcnRMb2FkaW5nKXtcbiAgICAgIHRoaXMub25TdGFydExvYWRpbmcoKTtcbiAgICB9XG4gIH1cblxuICB0cmlnZ2VyT25TdG9wTG9hZGluZygpe1xuICAgIGlmKHRoaXMub25TdG9wTG9hZGluZylcbiAgICAgIHRoaXMub25TdG9wTG9hZGluZygpO1xuICB9XG5cbiAgdHJpZ2dlck9uRXJyb3IoZXJyKXtcbiAgICBpZih0aGlzLm9uRXJyb3IpXG4gICAgICB0aGlzLm9uRXJyb3IoZXJyKTsgICBcbiAgfVxuXG4gIGV4ZWMobWV0aG9kLCB1cmksIHBhcmFtcywgY29uZmlnLCBjYWxsYmFjaywgY2FsbGJhY2tfZXJyKXtcbiAgICB2YXIgJHRoaXMgPSB0aGlzOyAgIFxuICAgIHZhciB1cmwgPSAodXJpLmluZGV4T2YoXCJodHRwXCIpID09IDAgfHwgdXJpLmluZGV4T2YoXCIuXCIpID09IDApID8gdXJpIDogdGhpcy5zZXJ2ZXJVUkkgKyB1cmk7XG4gICAgdmFyIHA7XG4gICAgdGhpcy50cmlnZ2VyT25TdGFydExvYWRpbmcoKVxuICAgIGNvbnN0IHRpbWVvdXQgPSA2MCAqIDEwMDA7XG5cbiAgICBpZihtZXRob2QgPT09ICdnZXQnKXtcbiAgICAgIHAgPSBheGlvcy5nZXQodXJsLCB7XG4gICAgICAgIHBhcmFtczpwYXJhbXMsXG4gICAgICAgIHRpbWVvdXQ6IChjb25maWcgJiYgY29uZmlnLnRpbWVvdXQpID8gY29uZmlnLnRpbWVvdXQgOiB0aW1lb3V0LFxuICAgICAgfSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHAgPSBheGlvcy5wb3N0KHVybCwgcGFyYW1zLCB7XG4gICAgICAgIHRpbWVvdXQ6IChjb25maWcgJiYgY29uZmlnLnRpbWVvdXQpID8gY29uZmlnLnRpbWVvdXQgOiB0aW1lb3V0LFxuICAgICAgfSk7XG4gICAgfVxuXG4gICAgaWYoJHRoaXMuZGVidWcpe1xuICAgICAgY29uc29sZS5kZWJ1ZyhcIlNSVlwiLCBtZXRob2QudG9VcHBlckNhc2UoKSwgdXJpLCBwYXJhbXMpO1xuICAgIH1cblxuXG4gICAgcC50aGVuKHJlc3BvbnNlID0+IHtcbiAgICAgIGlmKCR0aGlzLmRlYnVnKXtcbiAgICAgICAgY29uc29sZS5kZWJ1ZyhcIlNSVlwiLCBtZXRob2QudG9VcHBlckNhc2UoKSwgdXJpLCBwYXJhbXMsICdSZXNwb25zZScsIHJlc3BvbnNlKTtcbiAgICAgIH1cbiAgICAgIGlmKGNhbGxiYWNrKVxuICAgICAgICBjYWxsYmFjayhyZXNwb25zZS5kYXRhKTtcbiAgICAgICR0aGlzLnRyaWdnZXJPblN0b3BMb2FkaW5nKClcbiAgICB9KVxuICAgIC5jYXRjaChlcnIgPT4ge1xuICAgICAgaWYoJHRoaXMuZGVidWcpe1xuICAgICAgICBjb25zb2xlLmRlYnVnKFwiU1JWXCIsIG1ldGhvZC50b1VwcGVyQ2FzZSgpLCB1cmksIHBhcmFtcywgXCJFUlJPUlwiLCBlcnIpO1xuICAgICAgfVxuICAgICAgdGhpcy50cmlnZ2VyT25FcnJvcihlcnIpO1xuICAgICAgaWYoY2FsbGJhY2tfZXJyKXtcbiAgICAgICAgY2FsbGJhY2tfZXJyKGVycilcbiAgICAgIH1cbiAgICAgICR0aGlzLnRyaWdnZXJPblN0b3BMb2FkaW5nKClcbiAgICB9KTsgICAgICBcbiAgfVxuXG4gIGdldHAodXJpLCBwYXJhbXMpe1xuICAgIGNvbnN0ICR0aGlzID0gdGhpcztcbiAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuICAgICAgJHRoaXMuZ2V0KHVyaSxwYXJhbXMsZnVuY3Rpb24oZGF0YSl7XG4gICAgICAgIHJlc29sdmUoZGF0YSk7XG4gICAgICB9KTtcbiAgICB9KTtcbiAgfVxuXG4gIGdldCh1cmksIHBhcmFtcywgY2FsbGJhY2spe1xuICAgIGlmKHBhcmFtcy5wYXJhbXMpXG4gICAgICBwYXJhbXMgPSBwYXJhbXMucGFyYW1zO1xuICAgIHRoaXMuZXhlYygnZ2V0JywgdXJpLCBwYXJhbXMsIHt9LCBjYWxsYmFjayk7XG4gIH1cblxuICBnZXRMb25nKHVyaSwgcGFyYW1zLCB0aW1lb3V0LCBjYWxsYmFjaywgY2FsbGJhY2tfZXJyKXtcbiAgICBpZihwYXJhbXMucGFyYW1zKVxuICAgICAgcGFyYW1zID0gcGFyYW1zLnBhcmFtcztcbiAgICB0aGlzLmV4ZWMoJ2dldCcsIHVyaSwgcGFyYW1zLCB7dGltZW91dDogdGltZW91dH0sIGNhbGxiYWNrLCBjYWxsYmFja19lcnIpO1xuICB9XG5cbiAgcG9zdCh1cmksIHBhcmFtcywgY2FsbGJhY2ssIGNhbGxiYWNrX2Vycil7XG4gICAgaWYocGFyYW1zLnBhcmFtcylcbiAgICAgIHBhcmFtcyA9IHBhcmFtcy5wYXJhbXM7XG4gICAgdGhpcy5leGVjKCdwb3N0JywgdXJpLCBwYXJhbXMsIHt9LCBjYWxsYmFjaywgY2FsbGJhY2tfZXJyKTtcbiAgfSAgXG5cbiAgZmV0Y2godXJsLCBwYXJhbXMsIGNhbGxiYWNrLCBjYWxsYmFja19lcnIpe1xuICAgIGlmKHBhcmFtcy5wYXJhbXMpXG4gICAgICBwYXJhbXMgPSBwYXJhbXMucGFyYW1zO1xuICAgIHZhciAkdGhpcyA9IHRoaXM7ICAgXG4gICAgdGhpcy50cmlnZ2VyT25TdGFydExvYWRpbmcoKVxuICAgIGF4aW9zLmdldCh1cmwsIHtwYXJhbXM6cGFyYW1zfSlcbiAgICAudGhlbihmdW5jdGlvbihyZXNwb25zZSl7XG4gICAgICBpZigkdGhpcy5kZWJ1Zyl7XG4gICAgICAgIGNvbnNvbGUuZGVidWcoXCJTUlZcIiwgJ0ZFVENIOicsIHVybCwgcGFyYW1zLCAnU2VydmVyIFJlc3BvbnNlOicsIHJlc3BvbnNlKTtcbiAgICAgIH1cbiAgICAgIGlmKGNhbGxiYWNrKXtcbiAgICAgICAgY2FsbGJhY2socmVzcG9uc2UuZGF0YSk7XG4gICAgICB9XG4gICAgICAkdGhpcy50cmlnZ2VyT25TdG9wTG9hZGluZygpXG4gICAgfSlcbiAgICAuY2F0Y2goZXJyID0+IHtcbiAgICAgIGlmKCR0aGlzLmRlYnVnKXtcbiAgICAgICAgY29uc29sZS5kZWJ1ZyhcIlNSVlwiLCAnRkVUQ0g6JywgdXJsLCBwYXJhbXMsICdTZXJ2ZXIgRXJyb3I6JywgZXJyKTtcbiAgICAgIH1cbiAgICAgICR0aGlzLnRyaWdnZXJPblN0b3BMb2FkaW5nKClcbiAgICAgIHRoaXMudHJpZ2dlck9uRXJyb3IoZXJyKTtcbiAgICB9KTsgICAgICBcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBTZXJ2ZXI7XG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IEVycm9yQm91bmRyeSBmcm9tICdjb3JlL2NvbXBvbmVudHMvZXJyb3InO1xuaW1wb3J0IExvYWRpbmcgZnJvbSAnY29yZS91aS9sb2FkaW5nJztcblxuY29uc3QgY29tcG9uZW50ID0gTW9kdWxlQ29tcG9uZW50ID0+XG5cdGNsYXNzIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcblx0XHRyZW5kZXIoKXtcblx0XHRcdGNvbnN0IHRpdGxlID0gKFwidGl0bGVcIiBpbiB0aGlzLnByb3BzKSA/IHRoaXMucHJvcHMudGl0bGUgOiBudWxsO1xuXHRcdFx0Y29uc3QgcGggPSAoXCJwbGFjZWhvbGRlclwiIGluIHRoaXMucHJvcHMpID8gdGhpcy5wcm9wcy5wbGFjZWhvbGRlciA6IHt9O1xuXHRcdFx0Y29uc3QgcGhXID0gKHBoLndpZHRoKSA/IHBoLndpZHRoIDogJzEwMCUnO1xuXHRcdFx0Y29uc3QgcGhIID0gKHBoLmhlaWdodCkgPyBwaC5oZWlnaHQgOiAnMjUwJztcblxuXHRcdFx0dmFyIGxvYWRpbmcgPSBmYWxzZTtcblx0XHRcdGlmKHRoaXMucHJvcHMuY2hlY2tfZGF0YSAhPT0gZmFsc2UgJiYgXCJkYXRhXCIgaW4gdGhpcy5wcm9wcyl7XG5cdFx0XHRcdGlmKCF0aGlzLnByb3BzLmRhdGEgfHwgdGhpcy5wcm9wcy5kYXRhID09IG51bGwpe1xuXHRcdFx0XHRcdGxvYWRpbmcgPSB0cnVlO1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cblx0XHRcdHJldHVybiAoXG5cdFx0XHRcdDxFcnJvckJvdW5kcnkgZnJvbT17dGl0bGV9IHN0eWxlPXt7d2lkdGg6JzEwMCUnfX0+XG5cdFx0XHRcdFx0e2xvYWRpbmcgJiYgPExvYWRpbmcvPn1cblx0XHRcdFx0XHR7IWxvYWRpbmcgJiYgPE1vZHVsZUNvbXBvbmVudCB7Li4udGhpcy5wcm9wc30vPn1cblx0XHRcdFx0PC9FcnJvckJvdW5kcnk+XG5cdFx0XHQpO1xuXHRcdH1cblx0fVxuXG5leHBvcnQgZGVmYXVsdCBjb21wb25lbnQ7IiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBVSUNvbXBvbmVudCBmcm9tICdjb3JlL2NvbXBvbmVudHMvdWlfY29tcG9uZW50JztcbmltcG9ydCBUaW1lQWdvIGZyb20gJ2phdmFzY3JpcHQtdGltZS1hZ28nXG5pbXBvcnQgZW4gZnJvbSAnamF2YXNjcmlwdC10aW1lLWFnby9sb2NhbGUvZW4nXG5pbXBvcnQgZXMgZnJvbSAnamF2YXNjcmlwdC10aW1lLWFnby9sb2NhbGUvZXMnXG5cbmNsYXNzIFVJRGF0ZSBleHRlbmRzIFVJQ29tcG9uZW50IHsgXG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIHN1cGVyKCk7XG4gICAgdGhpcy5zdGF0ZSA9IHtcbiAgICB9XG4gIH1cblxuICBnZXREZWZhdWx0cygpe1xuICAgIGNvbnN0IGRlZmF1bHRzID0ge1xuICAgICAgY2xhc3NOYW1lIDogJycsICAgICAgXG4gICAgfSAgICBcbiAgICByZXR1cm4gZGVmYXVsdHM7XG4gIH0gIFxuICByZW5kZXIoKSB7XG4gICAgdmFyIHRpbWVBZ287XG4gICAgY29uc3QgbGFuZyA9IChcImxhbmdcIiBpbiB0aGlzLnByb3BzKSA/IHRoaXMucHJvcHMubGFuZyA6IFwiZW5cIjtcbiAgICBzd2l0Y2gobGFuZyl7XG4gICAgICBjYXNlIFwiZXNcIiA6XG4gICAgICAgIFRpbWVBZ28uYWRkTG9jYWxlKGVzKTtcbiAgICAgICAgdGltZUFnbyA9IG5ldyBUaW1lQWdvKCdlcy1VUycpO1xuICAgICAgICBicmVhaztcbiAgICAgIGRlZmF1bHQ6XG4gICAgICAgIFRpbWVBZ28uYWRkTG9jYWxlKGVuKTtcbiAgICAgICAgdGltZUFnbyA9IG5ldyBUaW1lQWdvKCdlbi1VUycpO1xuICAgIH1cblxuICAgIFxuICAgIHZhciBkYXRlO1xuICAgIHZhciBzdHI7XG4gICAgdHJ5e1xuICAgICAgdmFyIHZhbHVlID0gdGhpcy5wcm9wcy52YWx1ZTtcblxuICAgICAgaWYoIXZhbHVlIHx8IHZhbHVlID09IG51bGwgfHwgdmFsdWUgPT09ICcnIHx8IHZhbHVlLmxlbmd0aCA9PSAwKXtcbiAgICAgICAgc3RyID0gJyc7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBpZih2YWx1ZSBpbnN0YW5jZW9mIERhdGUpe1xuICAgICAgICAgIGRhdGUgPSBuZXcgRGF0ZSh2YWx1ZSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgY29uc3QgbnVtID0gTnVtYmVyKHZhbHVlKTtcbiAgICAgICAgICBpZihOdW1iZXIuaXNJbnRlZ2VyKG51bSkpe1xuICAgICAgICAgICAgZGF0ZSA9IG5ldyBEYXRlKG51bSk7XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGRhdGUgPSBuZXcgRGF0ZSh2YWx1ZSk7XG4gICAgICAgICAgfVxuICAgICAgICB9ICAgICAgIFxuICAgICAgICBzdHIgPSB0aW1lQWdvLmZvcm1hdChkYXRlLCAndHdpdHRlcicpO1xuICAgICAgfSAgICBcbiAgICB9IGNhdGNoIChleCl7XG4gICAgICBzdHIgPSB0aGlzLnByb3BzLnZhbHVlO1xuICAgIH1cbiAgICByZXR1cm4gKFxuICAgICAgPHNwYW4gY2xhc3NOYW1lPXt0aGlzLnN0YXRlLmNsYXNzTmFtZX0+e3N0cn08L3NwYW4+XG4gICAgKTtcbiAgfVxufVxuXG5cbmV4cG9ydCBkZWZhdWx0IFVJRGF0ZTsiLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuXG5jbGFzcyBFcnJvckJvdW5kYXJ5IGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICBzdXBlcihwcm9wcyk7XG4gICAgdGhpcy5zdGF0ZSA9IHsgXG4gICAgICBoYXNFcnJvcjogZmFsc2UsIFxuICAgICAgZXJyb3JzIDogW10sXG4gICAgfTtcbiAgfVxuXG4gIGNvbXBvbmVudERpZENhdGNoKGVycm9yLCBpbmZvKSB7XG4gICAgdmFyIGVycm9ycyA9IHRoaXMuc3RhdGUuZXJyb3JzO1xuICAgIC8vY29uc29sZS5kZWJ1ZyhlcnJvcik7XG4gICAgZXJyb3JzLnB1c2goZXJyb3IpO1xuICAgIHRoaXMuc2V0U3RhdGUoeyBoYXNFcnJvcjogdHJ1ZSwgZXJyb3JzOiBlcnJvcnN9KTtcblxuICAgIGlmKHdpbmRvdy5fX2FwaSlcbiAgICAgIHdpbmRvdy5fX2FwaS5zZXRFcnJvcihlcnJvcnMudG9TdHJpbmcoKSk7XG4gIH1cblxuICByZW5kZXIoKSB7XG4gICAgY29uc3QgcmVmID0gKHRoaXMucHJvcHMuZnJvbSkgPyB0aGlzLnByb3BzLmZyb20gOiBcIi1cIjtcbiAgICBjb25zdCBlcnJvcnMgPSB0aGlzLnN0YXRlLmVycm9ycztcbiAgICB2YXIga2V5ID0gMDtcbiAgICBpZiAodGhpcy5zdGF0ZS5oYXNFcnJvcikge1xuICAgICAgcmV0dXJuICA8ZGl2IHN0eWxlPXt7Y29sb3I6J3JlZCcsIG1hcmdpbjogJzBweCcsIHBhZGRpbmc6JzBweCcsIGJvcmRlcjogJzFweCBzb2xpZCByZWQnfX0+XG4gICAgICAgICAgICAgICAgICA8ZGl2IHN0eWxlPXt7Zm9udFNpemU6JzEuMmVtJ319PjxiPkVycm9yIGluIGNvbXBvbmVudHM8L2I+PC9kaXY+XG4gICAgICAgICAgICAgICAgICA8ZGl2IHN0eWxlPXt7Zm9udFNpemU6JzAuOWVtJ319PlJlZmVyZW5jZToge3JlZn08L2Rpdj5cbiAgICAgICAgICAgICAgICAgIDxoci8+XG4gICAgICAgICAgICAgICAgICB7ZXJyb3JzLm1hcCgoZSkgPT5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBrZXk9e2tleSsrfSBzdHlsZT17e2ZvbnRTaXplOicwLjhlbSd9fT57ZS50b1N0cmluZygpfTwvZGl2PlxuICAgICAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICA8L2Rpdj47XG4gICAgfVxuICAgIHJldHVybiB0aGlzLnByb3BzLmNoaWxkcmVuO1xuICB9XG59XG5cblxuZXhwb3J0IGRlZmF1bHQgRXJyb3JCb3VuZGFyeTsiLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgd2l0aFN0eWxlcyB9IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL3N0eWxlcyc7XG5cbmNvbnN0IHN0eWxlcyA9IHRoZW1lID0+ICh7XG5cdHJvb3QgOiB7XG5cdFx0d2lkdGg6ICcxMDAlJyxcblx0XHRib3hTaXppbmc6ICdib3JkZXItYm94Jyxcblx0XHRwYWRkaW5nOiAnMTZweCcsXG5cdH0sXG59KTtcbmNsYXNzIExheW91dFNlY3Rpb24gZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQgeyBcbiAgcmVuZGVyKCkge1xuICBcdGNvbnN0IGNsYXNzZXMgPSB0aGlzLnByb3BzLmNsYXNzZXM7XG4gIFx0Ly9jb25zdCBoZWlnaHQgPSAoXCJoZWlnaHRcIiBpbiB0aGlzLnByb3BzKSA/IHRoaXMucHJvcHMuaGVpZ2h0IDogJzMwcHgnO1xuICBcdGNvbnN0IGNvbG9yID0gKFwiY29sb3JcIiBpbiB0aGlzLnByb3BzKSA/IHRoaXMucHJvcHMuY29sb3IgOiAnd2hpdGUnO1xuICAgIHJldHVybiAoXG4gICAgICA8ZGl2IGNsYXNzTmFtZT17Y2xhc3Nlcy5yb290fSBzdHlsZT17e2JhY2tncm91bmRDb2xvcjogY29sb3J9fT5cbiAgICAgIFx0e3RoaXMucHJvcHMuY2hpbGRyZW59XG4gICAgICA8L2Rpdj5cbiAgICApO1xuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IHdpdGhTdHlsZXMoc3R5bGVzKShMYXlvdXRTZWN0aW9uKTsiLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuXG5jbGFzcyBDb21wb25lbnQgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuXG4gIHJlbmRlcigpIHtcbiAgICByZXR1cm4gKFxuICAgICAgPGRpdiBzdHlsZT17e1x0ekluZGV4OiA5OTk5LCBwb3NpdGlvbjonYWJzb2x1dGUnLCB0b3A6JzBweCcsIFxuICAgICAgICAgICAgICByaWdodDonMHB4JywgbGVmdDonMHB4JywgYm90dG9tOicwcHgnLCAgXG4gICAgICBcdFx0XHRcdGJhY2tncm91bmRDb2xvcjonIzAwMDAwMDYwJ319PlxuICAgICAgPC9kaXY+XG4gICAgICApO1xuICB9XG59XG5cblxuZXhwb3J0IGRlZmF1bHQgQ29tcG9uZW50OyIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyB3aXRoU3R5bGVzIH0gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvc3R5bGVzJztcblxuY29uc3Qgc3R5bGVzID0gdGhlbWUgPT4gKHtcblx0cm9vdCA6IHtcblx0XHR3aWR0aDogJzEwMCUnLFxuXHRcdGJvcmRlcjogJzFweCBkYXNoZWQgZ3JheScsXG5cdFx0YmFja2dyb3VuZENvbG9yOiAnI2UwZTBlMDY2Jyxcblx0XHR0ZXh0QWxpZ246ICdjZW50ZXInLFxuXHRcdGNvbG9yOiAnYmxhY2snLFxuXHRcdGZvbnRTaXplOiAnMS4xcmVtJyxcblx0XHRmb250V2VpZ2h0OiAnYm9sZCcsXG5cdFx0cGFkZGluZ1RvcDogJzEwcHgnLFxuXHRcdGJveFNpemluZzogJ2JvcmRlci1ib3gnLFxuXHR9LFxufSk7XG5jbGFzcyBNb2NrdXBCbG9jayBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7IFxuICByZW5kZXIoKSB7XG4gIFx0Y29uc3QgdGl0bGUgPSAodGhpcy5wcm9wcy50aXRsZSkgPyB0aGlzLnByb3BzLnRpdGxlIDogJ01PQ0sgQkxPQ0snO1xuICBcdGNvbnN0IGNsYXNzZXMgPSB0aGlzLnByb3BzLmNsYXNzZXM7XG4gIFx0Y29uc3QgaGVpZ2h0ID0gKHRoaXMucHJvcHMuaGVpZ2h0KSA/IHRoaXMucHJvcHMuaGVpZ2h0IDogJzMwcHgnO1xuICAgIHJldHVybiAoXG4gICAgICA8ZGl2IGNsYXNzTmFtZT17Y2xhc3Nlcy5yb290fSBzdHlsZT17e2hlaWdodDogaGVpZ2h0LCB3aWR0aDonMTAwJSd9fT57dGl0bGV9PC9kaXY+XG4gICAgKTtcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCB3aXRoU3R5bGVzKHN0eWxlcykoTW9ja3VwQmxvY2spOyIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5cbmNsYXNzIFVJQ29tcG9uZW50IGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgZ2V0RGVmYXVsdHMoKXt9XG5cbiAgaW5pdFVJKCkge1xuICAgIGNvbnN0IGRlZmF1bHRzID0gdGhpcy5nZXREZWZhdWx0cygpOyAgICBcbiAgICBmb3IodmFyIGRlZiBpbiBkZWZhdWx0cyl7XG4gICAgICB0aGlzLnN0YXRlW2RlZl0gPSAodGhpcy5wcm9wc1tkZWZdKSA/IHRoaXMucHJvcHNbZGVmXSA6IGRlZmF1bHRzW2RlZl07XG4gICAgfVxuICB9XG5cbiAgY29tcG9uZW50V2lsbE1vdW50KCl7XG4gICAgdGhpcy5pbml0VUkoKTtcbiAgfVxuICBcbiAgcmVuZGVyKCkge1xuICAgIHJldHVybiBcIlwiO1xuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IChVSUNvbXBvbmVudCk7IiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcblxuaW1wb3J0IEVycm9yQm91bmRyeSBmcm9tICdjb3JlL2NvbXBvbmVudHMvZXJyb3InO1xuXG5pbXBvcnQgRHJhd2VyIGZyb20gJ2NvcmUvdWkvZHJhd2VyJztcbmltcG9ydCBUb29sYmFyIGZyb20gJ2NvcmUvdWkvdG9vbGJhcic7XG5cbmltcG9ydCB7IHdpdGhTdHlsZXMgfSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9zdHlsZXMnO1xuaW1wb3J0IENzc0Jhc2VsaW5lIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL0Nzc0Jhc2VsaW5lJztcbmltcG9ydCBBcHBCYXIgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvQXBwQmFyJztcbmltcG9ydCB7IE11aVRoZW1lUHJvdmlkZXIgfSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9zdHlsZXMnO1xuaW1wb3J0IEhlbG1ldCBmcm9tICdyZWFjdC1oZWxtZXQnO1xuXG5jb25zdCBzdHlsZXMgPSB0aGVtZSA9PiAoe1xuICBhcHBCYXJTcGFjZXI6IHtcbiAgICAuLi50aGVtZS5taXhpbnMudG9vbGJhcixcbiAgfSxcbiAgY29udGVudDoge1xuICAgIGJveFNpemluZzogJ2JvcmRlci1ib3gnLFxuICAgIG1hcmdpbjogMCxcbiAgICBmbGV4R3JvdzogMSxcbiAgICBwYWRkaW5nOiAwLFxuICAgIHBhZGRpbmdUb3A6IHRoZW1lLnNwYWNpbmcudW5pdCAqIDIsXG4gICAgaGVpZ2h0OiAnMTAwdmgnLFxuICAgIG92ZXJmbG93OiAnYXV0bycsXG4gICAgd2lkdGg6ICcxMDAlJyxcbiAgfSxcbn0pO1xuXG5jbGFzcyBBcHAgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuXHRjb25zdHJ1Y3Rvcigpe1xuXHRcdHN1cGVyKCk7XG5cdFx0dGhpcy5zdGF0ZSA9IHtcblx0XHRcdGRyYXdlck9wZW4gOiBmYWxzZSxcblx0XHR9XG5cblx0XHR0aGlzLm9uRHJhd2VyT3BlbkNsaWNrID0gdGhpcy5vbkRyYXdlck9wZW5DbGljay5iaW5kKHRoaXMpO1xuXHRcdHRoaXMub25EcmF3ZXJDbG9zZUNsaWNrID0gdGhpcy5vbkRyYXdlckNsb3NlQ2xpY2suYmluZCh0aGlzKTtcblx0fVxuXG5cdG9uRHJhd2VyT3BlbkNsaWNrKCl7XG5cdFx0dGhpcy5zZXRTdGF0ZSh7ZHJhd2VyT3BlbiA6IHRydWV9KVxuXHR9XG5cblx0b25EcmF3ZXJDbG9zZUNsaWNrKCl7XG5cdFx0dGhpcy5zZXRTdGF0ZSh7ZHJhd2VyT3BlbiA6IGZhbHNlfSlcblx0fVxuXG4gIHJlbmRlcigpIHtcbiAgXHR2YXIgeyB0aGVtZSwgY2xhc3NlcywgbmF2LCBjaGlsZHJlbiwgdGl0bGUsIHBhZ2VfdGl0bGUsIGRyYXdlciwgbm90aWZpY2F0aW9ucyB9ID0gdGhpcy5wcm9wcztcblxuICAgIGRyYXdlciA9IChkcmF3ZXIgPT09IGZhbHNlICkgPyBmYWxzZSA6IHRydWU7XG4gICAgbm90aWZpY2F0aW9ucyA9IChub3RpZmljYXRpb25zID09PSBmYWxzZSkgPyBmYWxzZSA6IChub3RpZmljYXRpb25zKSA/IG5vdGlmaWNhdGlvbnMgOiBbXTtcblxuICAgIHJldHVybiAoXG4gICAgICA8TXVpVGhlbWVQcm92aWRlciB0aGVtZT17dGhlbWV9PlxuICAgICAgXHQ8ZGl2IHN0eWxlPXt7d2lkdGg6JzEwMCUnfX0+XG4gICAgICAgICAgPEVycm9yQm91bmRyeSBmcm9tPVwiL2NvcmUvdWkvYXBwXCI+XG4gICAgICAgICAgICA8SGVsbWV0Pjx0aXRsZT57cGFnZV90aXRsZX08L3RpdGxlPjwvSGVsbWV0PlxuICBcdCAgICAgICAgPENzc0Jhc2VsaW5lIC8+XG4gIFx0ICAgICAgICA8QXBwQmFyIHBvc2l0aW9uPVwiZml4ZWRcIj5cbiAgXHQgICAgICAgICAgPFRvb2xiYXIgdGl0bGU9e3RpdGxlfSBuYXY9e25hdn0gZHJhd2VyT3Blbj17dGhpcy5zdGF0ZS5kcmF3ZXJPcGVufSBvbkRyYXdlck9wZW5DbGljaz17dGhpcy5vbkRyYXdlck9wZW5DbGlja30gbm90aWZpY2F0aW9ucz17bm90aWZpY2F0aW9uc30gZHJhd2VyPXtkcmF3ZXJ9Lz5cbiAgXHQgICAgICAgIDwvQXBwQmFyPlxuICAgICAgICAgICAge2RyYXdlciAmJlxuICAgICAgICAgICAgICA8RHJhd2VyIG5hdj17bmF2fSBvcGVuPXt0aGlzLnN0YXRlLmRyYXdlck9wZW59IG9uRHJhd2VyQ2xvc2VDbGljaz17dGhpcy5vbkRyYXdlckNsb3NlQ2xpY2t9Lz5cbiAgICAgICAgICAgIH1cbiAgXHQgICAgICAgIFxuXG4gICAgICBcdFx0XHQ8ZGl2IGNsYXNzTmFtZT17Y2xhc3Nlcy5jb250ZW50fT5cbiAgICAgIFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9e2NsYXNzZXMuYXBwQmFyU3BhY2VyfSBzdHlsZT17e3dpZHRoOicxMDAlJ319Lz5cbiAgICAgICAgICAgICAgPEVycm9yQm91bmRyeSBmcm9tPVwiL2NvcmUvdWkvYXBwL2NoaWxkcmVuXCI+XG4gICAgXHQgIFx0ICAgICAgICB7Y2hpbGRyZW59XG4gICAgICAgICAgICAgIDwvRXJyb3JCb3VuZHJ5PlxuICAgICAgXHRcdFx0PC9kaXY+XG4gICAgICAgICAgPC9FcnJvckJvdW5kcnk+XG4gICAgICBcdDwvZGl2PlxuICAgICAgPC9NdWlUaGVtZVByb3ZpZGVyPlxuICAgICk7XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgd2l0aFN0eWxlcyhzdHlsZXMpKEFwcCk7IiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcblxuaW1wb3J0IHsgd2l0aFN0eWxlcyB9IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL3N0eWxlcyc7XG5pbXBvcnQgVGFibGUgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvVGFibGUnO1xuaW1wb3J0IFRhYmxlQm9keSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9UYWJsZUJvZHknO1xuaW1wb3J0IFRhYmxlQ2VsbCBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9UYWJsZUNlbGwnO1xuaW1wb3J0IFRhYmxlSGVhZCBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9UYWJsZUhlYWQnO1xuaW1wb3J0IFRhYmxlUm93IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL1RhYmxlUm93JztcblxuY29uc3Qgc3R5bGVzID0gdGhlbWUgPT4gKHtcbiAgcm93OiB7XG4gICAgJyY6bnRoLW9mLXR5cGUob2RkKSc6IHtcbiAgICAgIGJhY2tncm91bmRDb2xvcjogdGhlbWUucGFsZXR0ZS5iYWNrZ3JvdW5kLmRlZmF1bHQsXG4gICAgfSxcbiAgfSxcbn0pO1xuXG5jbGFzcyBEYXRhIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcblx0Y29uc3RydWN0b3IoKXtcblx0XHRzdXBlcigpO1xuXHR9XG5cbiAgcmVuZGVyKCkge1xuICBcdHZhciB7IGhpZGRlbiwgaGVhZGVycywgY2xhc3NlcywgZGF0YSwgc3R5bGUgfSA9IHRoaXMucHJvcHM7XG4gICAgdmFyIGtleSA9IDA7XG4gICAgaGVhZGVycyA9IChoZWFkZXJzID09PSBmYWxzZSkgPyBoZWFkZXJzIDogdHJ1ZTtcbiAgICBoaWRkZW4gPSAoaGlkZGVuKSA/IGhpZGRlbiA6IFtdO1xuXG4gICAgaWYoIWRhdGEgfHwgZGF0YS5sZW5ndGggPT09IDApIHJldHVybiA8ZGl2Pk5vIGRhdGE8L2Rpdj5cblxuICAgIGNvbnN0IGhlYWRlcnNDb2xzID0gT2JqZWN0LmtleXMoZGF0YVswXSk7IFxuXG4gICAgLy9jb25zb2xlLmxvZyhoaWRkZW4sIGhlYWRlcnNDb2xzKTtcblxuICAgIHJldHVybiAoXG4gICAgXHQ8VGFibGUgc3R5bGU9e3N0eWxlfT5cbiAgICAgICAge2hlYWRlcnMgJiZcbiAgICAgICAgICA8VGFibGVIZWFkPlxuICAgICAgICAgICAgPFRhYmxlUm93PlxuICAgICAgICAgICAgICB7aGVhZGVyc0NvbHMubWFwKGl0ZW0gPT5cbiAgICAgICAgICAgICAgICA8VGFibGVDZWxsIGtleT17a2V5Kyt9IHN0eWxlPXt7cGFkZGluZyA6ICc0cHgnfX0+e2l0ZW19PC9UYWJsZUNlbGw+XG4gICAgICAgICAgICAgICl9XG4gICAgICAgICAgICA8L1RhYmxlUm93PlxuICAgICAgICAgIDwvVGFibGVIZWFkPlxuICAgICAgICB9XG4gICAgICAgIDxUYWJsZUJvZHk+XG4gICAgICAgICAge2RhdGEubWFwKHJvdz0+XG4gICAgICAgICAgICA8VGFibGVSb3cga2V5PXtrZXkrK30gY2xhc3NOYW1lPXtjbGFzc2VzLnJvd30+XG4gICAgICAgICAgICAgIHtoZWFkZXJzQ29scy5tYXAoY2VsbD0+XG4gICAgICAgICAgICAgICAgKGhpZGRlbi5pbmRleE9mKGNlbGwpID09PSAtMSkgPyA8VGFibGVDZWxsIHN0eWxlPXt7cGFkZGluZyA6ICc0cHgnfX0ga2V5PXtrZXkrK30+e3Jvd1tjZWxsXX08L1RhYmxlQ2VsbD4gOiBcIlwiXG4gICAgICAgICAgICAgICl9XG4gICAgICAgICAgICA8L1RhYmxlUm93PlxuICAgICAgICAgICl9XG4gICAgICAgIDwvVGFibGVCb2R5PlxuICAgIFx0PC9UYWJsZT5cbiAgICApO1xuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IHdpdGhTdHlsZXMoc3R5bGVzKShEYXRhKTsiLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IGNsYXNzTmFtZXMgZnJvbSAnY2xhc3NuYW1lcyc7XG5pbXBvcnQgeyBMaW5rIH0gZnJvbSAncmVhY3Qtcm91dGVyLWRvbSc7XG5cbmltcG9ydCBJY29uIGZyb20gJ2NvcmUvdWkvaWNvbic7XG5cbmltcG9ydCB7IHdpdGhTdHlsZXMgfSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9zdHlsZXMnO1xuaW1wb3J0IE1ERHJhd2VyIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL0RyYXdlcic7XG5pbXBvcnQgSWNvbkJ1dHRvbiBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9JY29uQnV0dG9uJztcbmltcG9ydCBDaGV2cm9uTGVmdEljb24gZnJvbSAnQG1hdGVyaWFsLXVpL2ljb25zL0NoZXZyb25MZWZ0JztcbmltcG9ydCBMaXN0IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL0xpc3QnO1xuaW1wb3J0IERpdmlkZXIgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvRGl2aWRlcic7XG5pbXBvcnQgTGlzdEl0ZW0gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvTGlzdEl0ZW0nO1xuaW1wb3J0IExpc3RJdGVtSWNvbiBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9MaXN0SXRlbUljb24nO1xuaW1wb3J0IExpc3RJdGVtVGV4dCBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9MaXN0SXRlbVRleHQnO1xuaW1wb3J0IExpc3RTdWJoZWFkZXIgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvTGlzdFN1YmhlYWRlcic7XG5pbXBvcnQgRGFzaGJvYXJkSWNvbiBmcm9tICdAbWF0ZXJpYWwtdWkvaWNvbnMvRGFzaGJvYXJkJztcblxuY29uc3QgZHJhd2VyV2lkdGggPSAyNDA7XG5cbmNvbnN0IHN0eWxlcyA9IHRoZW1lID0+ICh7XG4gIHBhcGVyOiB7XG4gICAgcG9zaXRpb246ICdyZWxhdGl2ZScsXG4gICAgd2hpdGVTcGFjZTogJ25vd3JhcCcsXG4gICAgd2lkdGg6IGRyYXdlcldpZHRoLFxuICAgIHRyYW5zaXRpb246IHRoZW1lLnRyYW5zaXRpb25zLmNyZWF0ZSgnd2lkdGgnLCB7XG4gICAgICBlYXNpbmc6IHRoZW1lLnRyYW5zaXRpb25zLmVhc2luZy5zaGFycCxcbiAgICAgIGR1cmF0aW9uOiB0aGVtZS50cmFuc2l0aW9ucy5kdXJhdGlvbi5lbnRlcmluZ1NjcmVlbixcbiAgICB9KSxcbiAgfSxcbiAgcGFwZXJDbG9zZToge1xuICAgIG92ZXJmbG93WDogJ2hpZGRlbicsXG4gICAgdHJhbnNpdGlvbjogdGhlbWUudHJhbnNpdGlvbnMuY3JlYXRlKCd3aWR0aCcsIHtcbiAgICAgIGVhc2luZzogdGhlbWUudHJhbnNpdGlvbnMuZWFzaW5nLnNoYXJwLFxuICAgICAgZHVyYXRpb246IHRoZW1lLnRyYW5zaXRpb25zLmR1cmF0aW9uLmxlYXZpbmdTY3JlZW4sXG4gICAgfSksXG4gICAgd2lkdGg6IHRoZW1lLnNwYWNpbmcudW5pdCAqIDcsXG4gICAgW3RoZW1lLmJyZWFrcG9pbnRzLnVwKCdzbScpXToge1xuICAgICAgd2lkdGg6IHRoZW1lLnNwYWNpbmcudW5pdCAqIDksXG4gICAgfSxcbiAgfSxcbiAgdG9vbGJhckljb246IHtcbiAgICBkaXNwbGF5OiAnZmxleCcsXG4gICAgYWxpZ25JdGVtczogJ2NlbnRlcicsXG4gICAganVzdGlmeUNvbnRlbnQ6ICdmbGV4LWVuZCcsXG4gICAgcGFkZGluZzogJzAgOHB4JyxcbiAgICAuLi50aGVtZS5taXhpbnMudG9vbGJhcixcbiAgfSxcbiAgXG5cbn0pO1xuXG5jbGFzcyBEcmF3ZXIgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuXHRjb25zdHJ1Y3Rvcigpe1xuXHRcdHN1cGVyKCk7XG5cdFx0dGhpcy5oYW5kbGVEcmF3ZXJDbG9zZSA9IHRoaXMuaGFuZGxlRHJhd2VyQ2xvc2UuYmluZCh0aGlzKTtcblx0fVxuXG5cdGhhbmRsZURyYXdlckNsb3NlKCl7XG5cdFx0aWYodGhpcy5wcm9wcy5vbkRyYXdlckNsb3NlQ2xpY2spe1xuXHRcdFx0dGhpcy5wcm9wcy5vbkRyYXdlckNsb3NlQ2xpY2soKTtcblx0XHR9XG5cdH1cblxuICBcdHJlbmRlcigpIHtcblx0ICBcdHZhciB7IGNsYXNzZXMsIG5hdiwgb3BlbiB9ID0gdGhpcy5wcm9wczsgIFx0XG5cdCAgXHRjb25zdCBuYXZEcmF3ZXIgPSAobmF2ICYmIG5hdi5vcHRpb25zKSA/IG5hdi5vcHRpb25zLmZpbHRlcihpdGVtID0+IChpdGVtLnNob3dJbkRyYXdlcikgPyBpdGVtIDogbnVsbCkgOiBbXTsgIFx0XHRcblxuXHQgIFx0Y29uc3Qgb3B0aW9ucyA9IHRoaXMuZ2V0T3B0aW9ucyhuYXZEcmF3ZXIpO1xuXHQgICAgcmV0dXJuIChcblx0ICAgIFx0PGRpdiBzdHlsZT17e3dpZHRoOicxMDAlJ319PlxuXHQgIFx0ICAgICAgICA8TUREcmF3ZXIgY2xhc3Nlcz17e3BhcGVyOiBjbGFzc05hbWVzKGNsYXNzZXMucGFwZXIsICFvcGVuICYmIGNsYXNzZXMucGFwZXJDbG9zZSl9fSBvcGVuPXtvcGVufSBvbkNsb3NlPXt0aGlzLmhhbmRsZURyYXdlckNsb3NlfT5cblx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT17Y2xhc3Nlcy50b29sYmFySWNvbn0+XG5cdFx0XHRcdFx0XHQ8SWNvbkJ1dHRvbiBvbkNsaWNrPXt0aGlzLmhhbmRsZURyYXdlckNsb3NlfT5cblx0XHRcdFx0XHRcdFx0PENoZXZyb25MZWZ0SWNvbiAvPlxuXHRcdFx0XHRcdFx0PC9JY29uQnV0dG9uPlxuXHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHRcdDxEaXZpZGVyIC8+XG5cdFx0XHRcdFx0PExpc3Q+XG5cdFx0XHRcdFx0XHR7b3B0aW9ucy5tYXAoaXRlbSA9PlxuXHRcdFx0XHRcdFx0XHRpdGVtXG5cdFx0XHRcdFx0XHQpfVxuXHRcdFx0XHRcdDwvTGlzdD5cblx0ICBcdCAgICAgICAgPC9NRERyYXdlcj5cblx0ICAgIFx0PC9kaXY+XG5cdCAgICApO1xuXHR9XG5cblx0Z2V0T3B0aW9ucyhuYXYpe1xuXHRcdHZhciBrZXkgPSAwO1xuXHRcdHZhciBvcHRpb25zID0gW107XG5cdFx0Zm9yKHZhciBpID0gMDsgaSA8IG5hdi5sZW5ndGg7IGkrKyl7XG5cdFx0XHR2YXIgaXRlbSA9IG5hdltpXTtcblx0XHRcdHZhciBvcHQgPSBcblx0XHRcdDxMaW5rIGtleT17a2V5Kyt9IHRvPXtpdGVtLnJvdXRlfSBvbkNsaWNrPXt0aGlzLmhhbmRsZURyYXdlckNsb3NlfT5cblx0XHRcdCAgICA8TGlzdEl0ZW0gYnV0dG9uPlxuXHRcdFx0ICAgICAgPExpc3RJdGVtSWNvbj5cblx0XHRcdCAgICAgICAgPEljb24gaWQ9e2l0ZW0uaWNvbn0gLz5cblx0XHRcdCAgICAgIDwvTGlzdEl0ZW1JY29uPlxuXHRcdFx0ICAgICAgPExpc3RJdGVtVGV4dCBwcmltYXJ5PXtpdGVtLm5hbWV9IC8+XG5cdFx0XHQgICAgPC9MaXN0SXRlbT5cblx0XHQgICAgPC9MaW5rPlxuXHRcdCAgICBvcHRpb25zLnB1c2gob3B0KTtcblx0XHR9XG5cblx0XHRyZXR1cm4gb3B0aW9ucztcblx0fVxufVxuXG5leHBvcnQgZGVmYXVsdCB3aXRoU3R5bGVzKHN0eWxlcykoRHJhd2VyKTsiLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IFNlbmRJY29uIGZyb20gJ0BtYXRlcmlhbC11aS9pY29ucy9TZW5kJztcbmltcG9ydCBSZXBseUljb24gZnJvbSAnQG1hdGVyaWFsLXVpL2ljb25zL1JlcGx5JztcbmltcG9ydCBSZXBseUFsbEljb24gZnJvbSAnQG1hdGVyaWFsLXVpL2ljb25zL1JlcGx5QWxsJztcbmltcG9ydCBGb3J3YXJkSWNvbiBmcm9tICdAbWF0ZXJpYWwtdWkvaWNvbnMvRm9yd2FyZCc7XG5pbXBvcnQgRHJhZnRzSWNvbiBmcm9tICdAbWF0ZXJpYWwtdWkvaWNvbnMvRHJhZnRzJztcbmltcG9ydCBDYW5jZWxJY29uIGZyb20gJ0BtYXRlcmlhbC11aS9pY29ucy9DYW5jZWwnO1xuaW1wb3J0IEF0dGFjaEZpbGVJY29uIGZyb20gJ0BtYXRlcmlhbC11aS9pY29ucy9BdHRhY2hGaWxlJztcbmltcG9ydCBBcmNoaXZlSWNvbiBmcm9tICdAbWF0ZXJpYWwtdWkvaWNvbnMvQXJjaGl2ZSc7XG5pbXBvcnQgRGVsZXRlSWNvbiBmcm9tICdAbWF0ZXJpYWwtdWkvaWNvbnMvRGVsZXRlJztcbmltcG9ydCBTcGFtSWNvbiBmcm9tICdAbWF0ZXJpYWwtdWkvaWNvbnMvQnVnUmVwb3J0JztcbmltcG9ydCBEZWJ1Z0ljb24gZnJvbSAnQG1hdGVyaWFsLXVpL2ljb25zL0J1Z1JlcG9ydCc7XG5pbXBvcnQgQ29udGFjdHNJY29uIGZyb20gJ0BtYXRlcmlhbC11aS9pY29ucy9Db250YWN0cyc7XG5pbXBvcnQgRG9uZUljb24gZnJvbSAnQG1hdGVyaWFsLXVpL2ljb25zL0RvbmUnO1xuaW1wb3J0IEhvbWVJY29uIGZyb20gJ0BtYXRlcmlhbC11aS9pY29ucy9Ib21lJztcbmltcG9ydCBTZWFyY2hJY29uIGZyb20gJ0BtYXRlcmlhbC11aS9pY29ucy9TZWFyY2gnO1xuaW1wb3J0IE5vdGlmaWNhdGlvbkljb24gZnJvbSAnQG1hdGVyaWFsLXVpL2ljb25zL05vdGlmaWNhdGlvbnMnO1xuaW1wb3J0IE1lc3NhZ2VJY29uIGZyb20gJ0BtYXRlcmlhbC11aS9pY29ucy9FbWFpbCc7XG5pbXBvcnQgRmF2b3JpdGVJY29uIGZyb20gJ0BtYXRlcmlhbC11aS9pY29ucy9GYXZvcml0ZSc7XG5pbXBvcnQgQ2hhdEljb24gZnJvbSAnQG1hdGVyaWFsLXVpL2ljb25zL0NoYXRCdWJibGUnO1xuaW1wb3J0IFJldHdlZXRJY29uIGZyb20gJ0BtYXRlcmlhbC11aS9pY29ucy9DYWNoZWQnO1xuaW1wb3J0IEVkaXRJY29uIGZyb20gJ0BtYXRlcmlhbC11aS9pY29ucy9FZGl0JztcbmltcG9ydCBDbG9zZUljb24gZnJvbSAnQG1hdGVyaWFsLXVpL2ljb25zL0Nsb3NlJztcbmltcG9ydCBOb3RGb3VuZEljb24gZnJvbSAnQG1hdGVyaWFsLXVpL2ljb25zL0Jsb2NrJztcbmltcG9ydCBEcmF3ZXJJY29uIGZyb20gJ0BtYXRlcmlhbC11aS9pY29ucy9NZW51JztcbmltcG9ydCBCbG9nSWNvbiBmcm9tICdAbWF0ZXJpYWwtdWkvaWNvbnMvSW5zZXJ0Q29tbWVudCc7XG5pbXBvcnQgSGlzdG9yeUljb24gZnJvbSAnQG1hdGVyaWFsLXVpL2ljb25zL0hpc3RvcnknO1xuaW1wb3J0IFNldHRpbmdzSWNvbiBmcm9tICdAbWF0ZXJpYWwtdWkvaWNvbnMvU2V0dGluZ3NBcHBsaWNhdGlvbnMnO1xuaW1wb3J0IFNhdmVJY29uIGZyb20gJ0BtYXRlcmlhbC11aS9pY29ucy9TYXZlJztcbmltcG9ydCBNZW51SWNvbiBmcm9tICdAbWF0ZXJpYWwtdWkvaWNvbnMvTW9yZVZlcnQnO1xuaW1wb3J0IFF1ZXN0aW9uSWNvbiBmcm9tICdAbWF0ZXJpYWwtdWkvaWNvbnMvSGVscCc7XG5pbXBvcnQgT0tJY29uIGZyb20gJ0BtYXRlcmlhbC11aS9pY29ucy9Eb25lJztcblxuY29uc3Qgc3R5bGVzID0gW107XG5cbmNsYXNzIEljb24gZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuIFxuICBnZXRJY29uKGljb24pe1xuICAgIGlmKCFpY29uKSByZXR1cm4gPE5vdEZvdW5kSWNvbi8+O1xuXG4gICAgc3dpdGNoKGljb24pe1xuICAgICAgY2FzZSBcInNlbmRcIjpcbiAgICAgICAgcmV0dXJuIDxTZW5kSWNvbi8+O1xuICAgICAgY2FzZSBcInJlcGx5XCI6XG4gICAgICAgIHJldHVybiA8UmVwbHlJY29uLz47XG4gICAgICBjYXNlIFwicmVwbHlfYWxsXCI6XG4gICAgICAgIHJldHVybiA8UmVwbHlBbGxJY29uLz47XG4gICAgICBjYXNlIFwiZm9yd2FyZFwiOlxuICAgICAgICByZXR1cm4gPEZvcndhcmRJY29uLz47XG4gICAgICBjYXNlIFwiZHJhZnRcIjpcbiAgICAgICAgcmV0dXJuIDxEcmFmdHNJY29uLz47XG4gICAgICBjYXNlIFwiY2FuY2VsXCI6XG4gICAgICAgIHJldHVybiA8Q2FuY2VsSWNvbi8+O1xuICAgICAgY2FzZSBcImF0dGFjaFwiOlxuICAgICAgICByZXR1cm4gPEF0dGFjaEZpbGVJY29uLz47XG4gICAgICBjYXNlIFwiZGVsZXRlXCI6XG4gICAgICAgIHJldHVybiA8RGVsZXRlSWNvbi8+O1xuICAgICAgY2FzZSBcImFyY2hpdmVcIjpcbiAgICAgICAgcmV0dXJuIDxBcmNoaXZlSWNvbi8+O1xuICAgICAgY2FzZSBcInNwYW1cIjpcbiAgICAgICAgcmV0dXJuIDxTcGFtSWNvbi8+OyAgICAgICBcbiAgICAgIGNhc2UgXCJjb250YWN0c1wiOlxuICAgICAgICByZXR1cm4gPENvbnRhY3RzSWNvbi8+OyAgICAgICBcbiAgICAgIGNhc2UgXCJkb25lXCI6XG4gICAgICAgIHJldHVybiA8RG9uZUljb24vPjsgICAgICAgXG4gICAgICBjYXNlIFwiaG9tZVwiOlxuICAgICAgICByZXR1cm4gPEhvbWVJY29uLz47ICAgICAgIFxuICAgICAgY2FzZSBcInNlYXJjaFwiOlxuICAgICAgICByZXR1cm4gPFNlYXJjaEljb24vPjsgICAgICAgXG4gICAgICBjYXNlIFwibm90aWZpY2F0aW9uXCI6XG4gICAgICAgIHJldHVybiA8Tm90aWZpY2F0aW9uSWNvbi8+OyAgICAgICBcbiAgICAgIGNhc2UgXCJtZXNzYWdlXCI6XG4gICAgICAgIHJldHVybiA8TWVzc2FnZUljb24vPjsgICAgICAgXG4gICAgICBjYXNlIFwiZmF2b3JpdGVcIjpcbiAgICAgICAgcmV0dXJuIDxGYXZvcml0ZUljb24vPjsgICAgICAgXG4gICAgICBjYXNlIFwicmVwbHktdHdlZXRcIjpcbiAgICAgICAgcmV0dXJuIDxDaGF0SWNvbi8+OyAgICAgICBcbiAgICAgIGNhc2UgXCJyZXR3ZWV0XCI6XG4gICAgICAgIHJldHVybiA8UmV0d2VldEljb24vPjsgICAgICAgXG4gICAgICBjYXNlIFwiY29tcG9zZVwiOlxuICAgICAgICByZXR1cm4gPEVkaXRJY29uLz47ICAgICAgIFxuICAgICAgY2FzZSBcImNsb3NlXCI6XG4gICAgICAgIHJldHVybiA8Q2xvc2VJY29uLz47ICAgICAgIFxuICAgICAgY2FzZSBcImRyYXdlclwiOlxuICAgICAgICByZXR1cm4gPERyYXdlckljb24vPjsgICAgICAgXG4gICAgICBjYXNlIFwiYmxvZ1wiOlxuICAgICAgICByZXR1cm4gPEJsb2dJY29uLz47ICAgICAgIFxuICAgICAgY2FzZSBcImhpc3RvcnlcIjpcbiAgICAgICAgcmV0dXJuIDxIaXN0b3J5SWNvbi8+OyAgICAgICBcbiAgICAgIGNhc2UgXCJzZXR0aW5nc1wiOlxuICAgICAgICByZXR1cm4gPFNldHRpbmdzSWNvbi8+OyAgICAgICBcbiAgICAgIGNhc2UgXCJkZWJ1Z1wiOlxuICAgICAgICByZXR1cm4gPERlYnVnSWNvbi8+OyAgICAgICBcbiAgICAgIGNhc2UgXCJzYXZlXCI6XG4gICAgICAgIHJldHVybiA8U2F2ZUljb24vPjsgICAgICAgXG4gICAgICBjYXNlIFwibWVudVwiOlxuICAgICAgICByZXR1cm4gPE1lbnVJY29uLz47ICAgICAgIFxuICAgICAgY2FzZSBcInF1ZXN0aW9uXCI6XG4gICAgICAgIHJldHVybiA8UXVlc3Rpb25JY29uLz47ICAgICAgIFxuICAgICAgY2FzZSBcIm9rXCI6XG4gICAgICAgIHJldHVybiA8T0tJY29uLz47ICAgICAgIFxuICAgICAgZGVmYXVsdDpcbiAgICAgICAgcmV0dXJuIDxOb3RGb3VuZEljb24vPjtcbiAgICB9XG4gIH1cblxuICByZW5kZXIoKSB7XG4gICAgY29uc3QgaWNvID0gdGhpcy5nZXRJY29uKHRoaXMucHJvcHMuaWQpO1xuICAgIHJldHVybiAoXG4gICAgICBpY29cbiAgICApXG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgSWNvbjtcbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBMaW5rIH0gZnJvbSAncmVhY3Qtcm91dGVyLWRvbSc7XG5cbmltcG9ydCBNREJ1dHRvbiBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9CdXR0b24nO1xuXG5jbGFzcyBfTGluayBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gIHJlbmRlcigpIHtcbiAgXHRjb25zdCB7IGNoaWxkcmVuLCBjbGFzc2VzLCBzaXplLCB0bywgY29sb3IgfSA9IHRoaXMucHJvcHM7XG5cbiAgICByZXR1cm4gKFxuXHRcdDxNREJ1dHRvbiBjb2xvcj17Y29sb3J9IHNpemU9e3NpemV9IGNvbXBvbmVudD17TGlua30gdG89e3RvfT5cblx0ICAgIFx0e2NoaWxkcmVufVxuXHQgICAgPC9NREJ1dHRvbj5cbiAgICApO1xuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IF9MaW5rOyIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5cblxuY2xhc3MgTG9hZGluZyBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gIHJlbmRlcigpIHtcbiAgXHRyZXR1cm4gPGRpdj5sb2FkaW5nLi4uLjwvZGl2PlxuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IExvYWRpbmc7IiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBjbGFzc05hbWVzIGZyb20gJ2NsYXNzbmFtZXMnO1xuXG5pbXBvcnQgTGluayBmcm9tICdjb3JlL3VpL2xpbmsnO1xuXG5pbXBvcnQgeyB3aXRoU3R5bGVzIH0gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvc3R5bGVzJztcbmltcG9ydCBNREJ1dHRvbiBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9CdXR0b24nO1xuaW1wb3J0IE1EVG9vbGJhciBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9Ub29sYmFyJztcbmltcG9ydCBJY29uQnV0dG9uIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL0ljb25CdXR0b24nO1xuaW1wb3J0IEJhZGdlIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL0JhZGdlJztcbmltcG9ydCBNZW51SWNvbiBmcm9tICdAbWF0ZXJpYWwtdWkvaWNvbnMvTWVudSc7XG5pbXBvcnQgTm90aWZpY2F0aW9uc0ljb24gZnJvbSAnQG1hdGVyaWFsLXVpL2ljb25zL05vdGlmaWNhdGlvbnMnO1xuXG5jb25zdCBzdHlsZXMgPSB0aGVtZSA9PiAoe1xuICB0b29sYmFyOiB7XG4gIH0sXG4gIGJ1dHRvbjoge1xuICAgIG1hcmdpbkxlZnQ6IDEyLFxuICAgIG1hcmdpblJpZ2h0OiAyNCxcbiAgfSxcbiAgYnV0dG9uSGlkZGVuOiB7XG4gICAgZGlzcGxheTogJ25vbmUnLFxuICB9LFxuICB0aXRsZToge1xuICB9LFxuICBmaWxsOiB7XG4gICAgZmxleEdyb3c6IDEsXG4gIH0sXG5cbn0pO1xuXG5jbGFzcyBUb29sYmFyIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcblx0Y29uc3RydWN0b3IoKXtcblx0XHRzdXBlcigpO1xuXHRcdHRoaXMuaGFuZGxlRHJhd2VyT3BlbiA9IHRoaXMuaGFuZGxlRHJhd2VyT3Blbi5iaW5kKHRoaXMpO1xuXHR9XG5cblx0aGFuZGxlRHJhd2VyT3Blbigpe1xuXHRcdGlmKHRoaXMucHJvcHMub25EcmF3ZXJPcGVuQ2xpY2spe1xuXHRcdFx0dGhpcy5wcm9wcy5vbkRyYXdlck9wZW5DbGljaygpO1xuXHRcdH1cblx0fVxuXG5cdHJlbmRlcigpIHtcblx0ICBcdHZhciB7IGNsYXNzZXMsIG5hdiwgdGl0bGUsIGRyYXdlck9wZW4sIG5vdGlmaWNhdGlvbnMsIGRyYXdlciB9ID0gdGhpcy5wcm9wczsgIFx0XG5cdCAgXHRjb25zdCBuYXZUb29sYmFyID0gKG5hdiAmJiBuYXYub3B0aW9ucykgPyBuYXYub3B0aW9ucy5maWx0ZXIoaXRlbSA9PiAoaXRlbS5zaG93SW5NZW51KSA/IGl0ZW0gOiBudWxsKSA6IFtdO1xuXG5cdCAgXHRjb25zdCBuYXZNZW51ID0gKG5hdiAmJiBuYXYub3B0aW9ucykgPyBuYXYub3B0aW9ucy5maWx0ZXIoaXRlbSA9PiAoaXRlbS5zaG93SW5NZW51KSA/IGl0ZW0gOiBudWxsKSA6IFtdO1xuXHQgIFx0Y29uc3Qgb3B0cyA9IHRoaXMuZ2V0T3B0aW9ucyhuYXZNZW51KTtcblxuXHQgICAgcmV0dXJuIChcblx0ICAgIFx0PGRpdiBzdHlsZT17e3dpZHRoOicxMDAlJ319PlxuXHQgIFx0ICAgICAgICA8TURUb29sYmFyIGRpc2FibGVHdXR0ZXJzPXshZHJhd2VyT3Blbn0gY2xhc3NOYW1lPXtjbGFzc2VzLnRvb2xiYXJ9PlxuXHQgIFx0ICAgICAgICBcdHtkcmF3ZXIgJiZcblx0XHRcdCAgICAgICAgICAgIDxJY29uQnV0dG9uIGNvbG9yPVwiaW5oZXJpdFwiIGFyaWEtbGFiZWw9XCJPcGVuIGRyYXdlclwiIG9uQ2xpY2s9e3RoaXMuaGFuZGxlRHJhd2VyT3Blbn0gY2xhc3NOYW1lPXtjbGFzc05hbWVzKGNsYXNzZXMuYnV0dG9uLCBkcmF3ZXJPcGVuICYmIGNsYXNzZXMuYnV0dG9uSGlkZGVuLCl9PlxuXHRcdFx0ICAgICAgICAgICAgICA8TWVudUljb24gLz5cblx0XHRcdCAgICAgICAgICAgIDwvSWNvbkJ1dHRvbj5cdFx0ICAgICAgICAgICAgXG5cdCAgXHQgICAgICAgIFx0fVxuXHQgIFx0ICAgICAgICBcdHt0aXRsZSAhPT0gZmFsc2UgJiZcblx0XHRcdFx0XHRcdDxMaW5rIGNvbG9yPVwiaW5oZXJpdFwiIHNpemU9XCJsYXJnZVwiIHRvPXsnLyd9PlxuXHRcdFx0XHRcdCAgICBcdHt0aXRsZX1cblx0XHRcdFx0XHQgICAgPC9MaW5rPlxuXHQgIFx0ICAgICAgICBcdH1cblx0XHQgICAgICAgICAgICB7b3B0cy5tYXAoaXRlbT0+XG5cdFx0ICAgICAgICAgICAgXHRpdGVtXG5cdCAgICAgICAgICAgIFx0KX1cblx0XHQgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17Y2xhc3Nlcy5maWxsfT5cblx0XHQgICAgICAgICAgICBcdCZuYnNwO1xuXHRcdCAgICAgICAgICAgIDwvZGl2PlxuXHRcdCAgICAgICAgICAgIHsobm90aWZpY2F0aW9ucyAhPT0gZmFsc2UpICYmXG5cdFx0XHQgICAgICAgICAgICA8SWNvbkJ1dHRvbiBjb2xvcj1cImluaGVyaXRcIiBjbGFzc05hbWU9e2NsYXNzZXMuYnV0dG9ufT5cblx0XHRcdCAgICAgICAgICAgICAgPEJhZGdlIGJhZGdlQ29udGVudD17bm90aWZpY2F0aW9ucy5sZW5ndGh9IGNvbG9yPVwic2Vjb25kYXJ5XCI+XG5cdFx0XHQgICAgICAgICAgICAgICAgPE5vdGlmaWNhdGlvbnNJY29uIC8+XG5cdFx0XHQgICAgICAgICAgICAgIDwvQmFkZ2U+XG5cdFx0XHQgICAgICAgICAgICA8L0ljb25CdXR0b24+ICBcdCAgICAgICAgXG5cdFx0ICAgICAgICAgICAgfVxuXHQgIFx0ICAgICAgICA8L01EVG9vbGJhcj5cblx0ICAgIFx0PC9kaXY+XG5cdCAgICApO1xuXHR9XG5cblx0Z2V0T3B0aW9ucyhuYXYpe1xuXHRcdHZhciBrZXkgPSAwO1xuXHRcdHZhciBvcHRpb25zID0gW107XG5cdFx0Zm9yKHZhciBpID0gMDsgaSA8IG5hdi5sZW5ndGg7IGkrKyl7XG5cdFx0XHR2YXIgaXRlbSA9IG5hdltpXTtcblx0XHRcdHZhciBvcHQgPSBcblx0XHRcdDxMaW5rIGtleT17a2V5Kyt9IGNvbG9yPVwiaW5oZXJpdFwiIHNpemU9XCJzbWFsbFwiIHRvPXtpdGVtLnJvdXRlfT5cblx0XHQgICAgXHR7aXRlbS5uYW1lfVxuXHRcdCAgICA8L0xpbms+XG5cdFx0ICAgIG9wdGlvbnMucHVzaChvcHQpO1xuXHRcdH1cblxuXHRcdHJldHVybiBvcHRpb25zO1xuXHR9XG5cbn1cblxuZXhwb3J0IGRlZmF1bHQgd2l0aFN0eWxlcyhzdHlsZXMpKFRvb2xiYXIpOyIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcbmltcG9ydCBSZWFjdERPTSBmcm9tICdyZWFjdC1kb20nXG5pbXBvcnQgQXBwIGZyb20gJ2FwcCdcblxuY29uc3QgcmVuZGVyID0gQ29tcG9uZW50ID0+IHtcbiAgUmVhY3RET00ucmVuZGVyKDxDb21wb25lbnQgLz4sIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdyb290JykpXG59XG5cbnJlbmRlcihBcHApIiwiaW1wb3J0IEJhc2VBUEkgZnJvbSAnY29yZS9hcHAvYXBpJztcbmltcG9ydCBTdGF0ZSBmcm9tICdqbWFycm95YXZlL2FwcC9zdGF0ZSc7XG5pbXBvcnQgQ29uc3RhbnRzIGZyb20gJ2ptYXJyb3lhdmUvY29uZi9jb25zdGFudHMnXG5cbmNsYXNzIEFQSSBleHRlbmRzIEJhc2VBUEl7XG5cdGNvbnN0cnVjdG9yKHBhcmVudCl7XG5cdFx0c3VwZXIoe1xuXHRcdFx0ZGVidWcgOiBDb25zdGFudHMuREVCVUcsXG5cdCAgICBcdGxvY2FsOiBDb25zdGFudHMuTE9DQUwsXG4gICAgXHRcdHRpdGxlIDogQ29uc3RhbnRzLlZFUlNJT04sXG4gICAgXHRcdGN1cnJlbnRfY29tcG9uZW50IDoge2lkIDogQ29uc3RhbnRzLkNPTUlELCBmYW1pbHkgOiBDb25zdGFudHMuQ09NRiwgdmVyc2lvbiA6IENvbnN0YW50cy5DT01WfSxcbiAgICBcdFx0Y29tcG9uZW50czogQ29uc3RhbnRzLlVYSV9WRVJTSU9OUyxcblx0XHR9KTtcblx0XHR0aGlzLnN0YXRlID0gU3RhdGU7XHRcblx0XHR0aGlzLmRhdGFfa2JfYW5kcm9pZCA9IHRoaXMuc2VydmVyLnNlcnZlclVSSSArICcvYXBwcy9qbWFycm95YXZlLWNzL2RhdGEvYW5kcm9pZF9pbmRleCc7XG5cdH1cblxuXHRnZXREYXRhKHBhdGgpe1xuXHRcdHJldHVybiB0aGlzLnN0YXRlLmdldChwYXRoKTtcblx0fVxuXG5cdGdldEFQSShhcGlVUkksIGRhdGFQYXRoLCBwYXJhbXMpe1xuXHRcdGNvbnN0ICR0aGlzID0gdGhpcztcblx0XHR0aGlzLnN0YXRlLnNldChkYXRhUGF0aCwge30pO1xuXHRcdHRoaXMuc2VydmVyLmdldChhcGlVUkksIHBhcmFtcywgZnVuY3Rpb24oZGF0YSl7XG5cdFx0XHQkdGhpcy5zdGF0ZS5zZXQoZGF0YVBhdGgsIGRhdGEpO1xuXHRcdH0pO1x0XHRcdFx0XHRcdFxuXHR9XG5cblx0Z2V0QXBwSW5mbygpe1xuXHRcdGNvbnN0IGRhdGEgPSB0aGlzLnN0YXRlLmdldChbJ2luZm8nLCAnam0nXSk7XG5cdFx0aWYoZGF0YSAhPSBudWxsKSByZXR1cm47XG5cblx0XHRjb25zdCB1cmkgPSAnL2FwcHMvam1hcnJveWF2ZS1jcy9hcHAvaW5mbyc7XG5cdFx0Y29uc3QgcGFyYW1zID0ge307XG5cdFx0dGhpcy5nZXRBUEkodXJpLCBbJ2luZm8nLCAnam0nXSwgcGFyYW1zKTtcblx0fVxuXG5cdGdldFRyZW5kc0luZm8oKXtcblx0XHRjb25zdCBkYXRhID0gdGhpcy5zdGF0ZS5nZXQoWydpbmZvJywgJ3RyZW5kcyddKTtcblx0XHRpZihkYXRhICE9IG51bGwpIHJldHVybjtcblxuXHRcdGNvbnN0IHVyaSA9ICcvYXBwcy90cmVuZHMvYXBwL2luZm8nO1xuXHRcdGNvbnN0IHBhcmFtcyA9IHt9O1xuXHRcdHRoaXMuZ2V0QVBJKHVyaSwgWydpbmZvJywgJ3RyZW5kcyddLCBwYXJhbXMpO1xuXHR9XG5cblx0Z2V0QXBwKCl7XG5cdFx0Y29uc3QgYXBwID0gdGhpcy5zdGF0ZS5nZXQoWydhcHAnXSk7XG5cdFx0aWYoYXBwICE9IG51bGwpIHJldHVybjtcblxuXHRcdGNvbnN0IHVyaSA9ICcvYXBwcy9qbWFycm95YXZlLWNzL2FwcCc7XG5cdFx0Y29uc3QgcGFyYW1zID0ge307XG5cdFx0dGhpcy5nZXRBUEkodXJpLCBbJ2FwcCddLCBwYXJhbXMpO1xuXG5cdFx0dGhpcy5nZXRBcHBJbmZvKCk7XG5cdFx0dGhpcy5nZXRUcmVuZHNJbmZvKCk7XG5cdH1cblxuXHRnZXRIb21lKCl7XG5cdFx0dGhpcy5nZXRBcHAoKTtcblxuXHRcdGNvbnN0IHVyaSA9ICcvYXBwcy9qbWFycm95YXZlLWNzL3BhZ2VzL2hvbWUnO1xuXHRcdGNvbnN0IHBhcmFtcyA9IHt9O1xuXHRcdHRoaXMuZ2V0QVBJKHVyaSwgWydwYWdlcycsJ2hvbWUnLCdkYXRhJ10sIHBhcmFtcyk7XG5cdH1cblxuXHRnZXRUcmVuZHMoKXtcblx0XHR0aGlzLmdldEFwcCgpO1xuXHRcdFxuXHRcdGNvbnN0IHVyaSA9ICcvYXBwcy90cmVuZHMvc3RhY2tvdmVyZmxvdy9oaXN0b3J5Jztcblx0XHRjb25zdCBwYXJhbXMgPSB7fTtcblx0XHR0aGlzLmdldEFQSSh1cmksIFsncGFnZXMnLCdob21lJywndHJlbmRzJ10sIHBhcmFtcyk7XG5cdH1cblxuXHRnZXRCbG9nKGJsb2cpe1xuXHRcdHRoaXMuZ2V0QXBwKCk7XG5cdFx0XG5cdFx0dGhpcy5zdGF0ZS5zZXQoWydwYWdlcycsJ2Jsb2cnLCAnYXJlYSddLCBibG9nKTtcblx0XHRjb25zdCB1cmkgPSAnL2FwcHMvam1hcnJveWF2ZS1jcy9wYWdlcy9ibG9nJztcblx0XHRjb25zdCBwYXJhbXMgPSB7YXJlYTogYmxvZ307XG5cdFx0dGhpcy5nZXRBUEkodXJpLCBbJ3BhZ2VzJywnYmxvZycsJ2RhdGEnXSwgcGFyYW1zKTtcblx0fVxuXG5cdGdldFBvc3QoYmxvZywgcG9zdCl7XG5cdFx0dGhpcy5nZXRBcHAoKTtcblx0XHRcblx0XHR0aGlzLnN0YXRlLnNldChbJ3BhZ2VzJywncG9zdCcsICdhcmVhJ10sIGJsb2cpO1xuXHRcdGNvbnN0IHVyaSA9ICcvYXBwcy9qbWFycm95YXZlLWNzL3BhZ2VzL3Bvc3QnO1xuXHRcdGNvbnN0IHBhcmFtcyA9IHtpZDogcG9zdH07XG5cdFx0dGhpcy5nZXRBUEkodXJpLCBbJ3BhZ2VzJywncG9zdCcsJ2RhdGEnXSwgcGFyYW1zKTtcblx0fVxuXG5cdGdldENWKCl7XG5cdFx0dGhpcy5nZXRBcHAoKTtcblx0XHRcblx0XHRjb25zdCB1cmkgPSAnL2FwcHMvam1hcnJveWF2ZS1jcy9wYWdlcy9jdic7XG5cdFx0Y29uc3QgcGFyYW1zID0ge307XG5cdFx0dGhpcy5nZXRBUEkodXJpLCBbJ3BhZ2VzJywnY3YnLCdkYXRhJ10sIHBhcmFtcyk7XG5cdH1cblxuXHRnZXRLQkFuZHJvaWQoY2F0ZWdvcnkpe1xuXHRcdHRoaXMuZ2V0QXBwKCk7XG5cdFx0XG5cdFx0Y29uc3QgdXJpID0gJy9hcHBzL2ptYXJyb3lhdmUtY3MvYXBwL2RhdGEvYW5kcm9pZF9pbmRleCc7XG5cdFx0Y29uc3QgcGFyYW1zID0ge2YxOiAnY2F0JywgdjE6IGNhdGVnb3J5fTtcblx0XHR0aGlzLmdldEFQSSh1cmksIFsncGFnZXMnLCAna2JfYW5kcm9pZCcsICdkYXRhJywgJ3JlY29yZHMnXSwgcGFyYW1zKTtcblx0fVxuXG5cdGdldEtCQW5kcm9pZENhdGVnb3JpZXMoKXtcblx0XHR0aGlzLmdldEFwcCgpO1xuXHRcdFxuXHRcdGNvbnN0IHVyaSA9ICcvYXBwcy9qbWFycm95YXZlLWNzL2FwcC9kYXRhL2FuZHJvaWRfY2F0ZWdvcmllcyc7XG5cdFx0Y29uc3QgcGFyYW1zID0ge307XG5cdFx0dGhpcy5nZXRBUEkodXJpLCBbJ3BhZ2VzJywgJ2tiX2FuZHJvaWQnLCAnZGF0YScsICdjYXRlZ29yaWVzJ10sIHBhcmFtcyk7XG5cdH1cbn1cblxud2luZG93Ll9fYXBpID0gbmV3IEFQSSgpO1xuZXhwb3J0IGRlZmF1bHQgQVBJOyIsImV4cG9ydCBjb25zdCBNRVNTQUdFU19MT0FESU5HID0gJ01FU1NBR0VTX0xPQURJTkcnO1xuZXhwb3J0IGNvbnN0IE1FU1NBR0VTX0ZBSUxFRCA9ICdNRVNTQUdFU19GQUlMRUQnO1xuZXhwb3J0IGNvbnN0IE1FU1NBR0VTX0ZFVENIRUQgPSAnTUVTU0FHRVNfRkVUQ0hFRCc7XG5cbmV4cG9ydCBjb25zdCBNRVNTQUdFX0xPQURJTkcgPSAnTUVTU0FHRV9MT0FESU5HJztcbmV4cG9ydCBjb25zdCBNRVNTQUdFX0ZBSUxFRCA9ICdNRVNTQUdFX0ZBSUxFRCc7XG5leHBvcnQgY29uc3QgTUVTU0FHRV9GRVRDSEVEID0gJ01FU1NBR0VfRkVUQ0hFRCc7XG5cbmV4cG9ydCBjb25zdCBMQUJFTFNfTE9BRElORyA9ICdMQUJFTFNfTE9BRElORyc7XG5leHBvcnQgY29uc3QgTEFCRUxTX0ZBSUxFRCA9ICdMQUJFTFNfRkFJTEVEJztcbmV4cG9ydCBjb25zdCBMQUJFTFNfRkVUQ0hFRCA9ICdMQUJFTFNfRkVUQ0hFRCc7XG4iLCJpbXBvcnQgeyBjcmVhdGVTdG9yZSwgY29tYmluZVJlZHVjZXJzLCBhcHBseU1pZGRsZXdhcmUgfSBmcm9tICdyZWR1eCc7XG5cbmltcG9ydCB7IE1lc3NhZ2VzIH0gZnJvbSAnam1hcnJveWF2ZS9hcHAvcmVkdXgvcmVkdWNlcnMvbWVzc2FnZXMnO1xuaW1wb3J0IHsgTGFiZWxzIH0gZnJvbSAnam1hcnJveWF2ZS9hcHAvcmVkdXgvcmVkdWNlcnMvbGFiZWxzJztcblxuaW1wb3J0IHRodW5rIGZyb20gJ3JlZHV4LXRodW5rJztcbmltcG9ydCBsb2dnZXIgZnJvbSAncmVkdXgtbG9nZ2VyJztcblxuZXhwb3J0IGNvbnN0IENvbmZpZ3VyZVN0b3JlID0gKCkgPT4ge1xuICAgIGNvbnN0IHN0b3JlID0gY3JlYXRlU3RvcmUoXG4gICAgICAgIGNvbWJpbmVSZWR1Y2Vycyh7XG4gICAgICAgICAgICBtZXNzYWdlcyA6IE1lc3NhZ2VzLFxuICAgICAgICAgICAgbGFiZWxzIDogTGFiZWxzLFxuICAgICAgICB9KSxcblx0XHRhcHBseU1pZGRsZXdhcmUodGh1bmssIGxvZ2dlcikgJiYgYXBwbHlNaWRkbGV3YXJlKHRodW5rKVxuICAgICk7XG5cbiAgICByZXR1cm4gc3RvcmU7XG59IiwiaW1wb3J0ICogYXMgQWN0aW9uVHlwZXMgZnJvbSAnam1hcnJveWF2ZS9hcHAvcmVkdXgvYWN0aW9ucy90eXBlcyc7XG5cbmV4cG9ydCBjb25zdCBMYWJlbHMgPSAoc3RhdGUgPSB7IGxvYWRpbmc6IHRydWUsIGVycjogbnVsbCwgZGF0YTpbXX0sIGFjdGlvbikgPT4ge1xuICAgIHN3aXRjaCAoYWN0aW9uLnR5cGUpIHtcbiAgICAgICAgY2FzZSBBY3Rpb25UeXBlcy5MQUJFTFNfRkVUQ0hFRDpcbiAgICAgICAgICAgIHJldHVybiB7Li4uc3RhdGUsIGxvYWRpbmc6IGZhbHNlLCBlcnI6IG51bGwsIGRhdGE6IGFjdGlvbi5wYXlsb2FkfTtcblxuICAgICAgICBjYXNlIEFjdGlvblR5cGVzLkxBQkVMU19MT0FESU5HOlxuICAgICAgICAgICAgcmV0dXJuIHsuLi5zdGF0ZSwgbG9hZGluZzogdHJ1ZSwgZXJyOiBudWxsLCBkYXRhOiBbXX1cblxuICAgICAgICBjYXNlIEFjdGlvblR5cGVzLkxBQkVMU19GQUlMRUQ6XG4gICAgICAgICAgICByZXR1cm4gey4uLnN0YXRlLCBsb2FkaW5nOiBmYWxzZSwgZXJyOiBhY3Rpb24ucGF5bG9hZH07XG5cbiAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgIHJldHVybiBzdGF0ZTtcbiAgICB9XG59IiwiaW1wb3J0ICogYXMgQWN0aW9uVHlwZXMgZnJvbSAnam1hcnJveWF2ZS9hcHAvcmVkdXgvYWN0aW9ucy90eXBlcyc7XG5cbmV4cG9ydCBjb25zdCBNZXNzYWdlcyA9IChzdGF0ZSA9IHsgbG9hZGluZzogdHJ1ZSwgZXJyOiBudWxsLCBkYXRhOltdfSwgYWN0aW9uKSA9PiB7XG4gICAgc3dpdGNoIChhY3Rpb24udHlwZSkge1xuICAgICAgICBjYXNlIEFjdGlvblR5cGVzLk1FU1NBR0VTX0ZFVENIRUQ6XG4gICAgICAgICAgICByZXR1cm4gey4uLnN0YXRlLCBsb2FkaW5nOiBmYWxzZSwgZXJyOiBudWxsLCBkYXRhOiBhY3Rpb24ucGF5bG9hZC5kYXRhfTtcblxuICAgICAgICBjYXNlIEFjdGlvblR5cGVzLk1FU1NBR0VTX0xPQURJTkc6XG4gICAgICAgICAgICByZXR1cm4gey4uLnN0YXRlLCBsb2FkaW5nOiB0cnVlLCBlcnI6IG51bGwsIGRhdGE6IFtdfVxuXG4gICAgICAgIGNhc2UgQWN0aW9uVHlwZXMuTUVTU0FHRVNfRkFJTEVEOlxuICAgICAgICAgICAgcmV0dXJuIHsuLi5zdGF0ZSwgbG9hZGluZzogZmFsc2UsIGVycjogYWN0aW9uLnBheWxvYWR9O1xuXG4gICAgICAgIGNhc2UgQWN0aW9uVHlwZXMuTUVTU0FHRV9GRVRDSEVEOlxuICAgICAgICAgICAgYWN0aW9uLnBheWxvYWQubWVzc2FnZS5tZXNzYWdlc1thY3Rpb24ucGF5bG9hZC5pZHhdLnRleHQgPSBhY3Rpb24ucGF5bG9hZC50ZXh0OyAgICAgICBcbiAgICAgICAgICAgIHJldHVybiB7Li4uc3RhdGUsIGxvYWRpbmc6IGZhbHNlLCBlcnI6IG51bGx9O1xuXG4gICAgICAgIGNhc2UgQWN0aW9uVHlwZXMuTUVTU0FHRV9MT0FESU5HOlxuICAgICAgICAgICAgcmV0dXJuIHsuLi5zdGF0ZSwgbG9hZGluZzogdHJ1ZSwgZXJyOiBudWxsfVxuXG4gICAgICAgIGNhc2UgQWN0aW9uVHlwZXMuTUVTU0FHRV9GQUlMRUQ6XG4gICAgICAgICAgICByZXR1cm4gey4uLnN0YXRlLCBsb2FkaW5nOiBmYWxzZSwgZXJyOiBhY3Rpb24ucGF5bG9hZH07XG5cbiAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgIHJldHVybiBzdGF0ZTtcbiAgICB9XG59IiwiaW1wb3J0IEJhb2JhYiBmcm9tICdiYW9iYWInO1xuaW1wb3J0IENvbnN0YW50cyBmcm9tICdqbWFycm95YXZlL2NvbmYvY29uc3RhbnRzJ1xuXG52YXIgdHJlZSA9IG5ldyBCYW9iYWIoe1xuICBpbmZvOiB7XG4gICAgam0gOiBudWxsLFxuICAgIHRyZW5kcyA6IG51bGwsXG4gIH0sXG4gIGFwcCA6IG51bGwsXG4gIHBhZ2VzIDoge1xuICAgIGdsb2JhbCA6IHt9LFxuICAgIGhvbWUgOiB7XG4gICAgICBkYXRhOiB7fSxcbiAgICAgIHRyZW5kczogbnVsbCxcbiAgICB9LFxuICAgIGJsb2cgOiB7XG4gICAgICBkYXRhOiB7fSxcbiAgICAgIGFyZWE6IFwiXCIsXG4gICAgfSxcbiAgICBwb3N0IDoge1xuICAgICAgZGF0YToge30sXG4gICAgICBhcmVhOiBcIlwiLFxuICAgIH0sXG4gICAgY291cnNlcyA6IHtcbiAgICAgIGRhdGE6IHt9LFxuICAgIH0sXG4gICAgY3YgOiB7XG4gICAgICBkYXRhOiB7fSxcbiAgICB9LFxuICAgIGtiX2FuZHJvaWQgOiB7XG4gICAgICBkYXRhOiB7XG4gICAgICAgIHJlY29yZHMgOiBudWxsLFxuICAgICAgICBjYXRlZ29yaWVzIDogbnVsbCxcbiAgICAgIH0sXG4gICAgfSxcbiAgfSxcbn0sXG57XG4gIGF1dG9Db21taXQ6IHRydWUsXG4gIGFzeW5jaHJvbm91cyA6IGZhbHNlLFxuICBpbW11dGFibGU6IGZhbHNlLFxuICBwZXJzaXN0ZW50OiBmYWxzZSwgXG59KTtcblxud2luZG93Ll9fc3RhdGUgPSB0cmVlO1xuXG5leHBvcnQgZGVmYXVsdCB0cmVlO1xuXG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgTGluayB9IGZyb20gJ3JlYWN0LXJvdXRlci1kb20nO1xuaW1wb3J0IHdpdGhNb2R1bGUgZnJvbSAnam1hcnJveWF2ZS9jb21wb25lbnRzL3V4aS9jb3JlL3dpdGgtbW9kdWxlJztcblxuY2xhc3MgQmxvZ0xpbmtDb21wb25lbnQgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuXHRyZW5kZXIoKXtcblx0XHRjb25zdCBzbHVnID0gdGhpcy5wcm9wcy5zbHVnO1xuXHRcdHJldHVybiAoXG5cdFx0XHQ8TGluayB0bz17YC8ke3NsdWd9YH0+XG5cdFx0XHRcdHt0aGlzLnByb3BzLmNoaWxkcmVufVxuXHRcdFx0PC9MaW5rPlxuXHRcdCk7XG5cdH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgd2l0aE1vZHVsZShCbG9nTGlua0NvbXBvbmVudCk7XG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgTGluayB9IGZyb20gJ3JlYWN0LXJvdXRlci1kb20nO1xuaW1wb3J0IHdpdGhNb2R1bGUgZnJvbSAnam1hcnJveWF2ZS9jb21wb25lbnRzL3V4aS9jb3JlL3dpdGgtbW9kdWxlJztcblxuY2xhc3MgUG9zdExpbmtDb21wb25lbnQgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuXHRyZW5kZXIoKXtcblx0XHRjb25zdCBzbHVnID0gKFwic2x1Z1wiIGluIHRoaXMucHJvcHMpID8gdGhpcy5wcm9wcy5zbHVnIDogbnVsbDtcblx0XHRjb25zdCBjYXRlZ29yeSA9IHRoaXMucHJvcHMuY2F0ZWdvcnk7XG5cblx0XHRpZighc2x1ZykgcmV0dXJuIHRoaXMucHJvcHMuY2hpbGRyZW47XG5cblx0XHRyZXR1cm4gKFxuXHRcdFx0PExpbmsgdG89e2Ake3NsdWd9YH0+XG5cdFx0XHRcdHt0aGlzLnByb3BzLmNoaWxkcmVufVxuXHRcdFx0PC9MaW5rPlxuXHRcdCk7XG5cdH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgd2l0aE1vZHVsZShQb3N0TGlua0NvbXBvbmVudCk7XG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgd2l0aFN0eWxlcyB9IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL3N0eWxlcyc7XG5pbXBvcnQgR3JpZCBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9HcmlkJztcbmltcG9ydCBBcHAgXHRcdGZyb20gJ2ptYXJyb3lhdmUvY29tcG9uZW50cy91eGkvY29yZS9wYWdlL2FwcCc7XG5pbXBvcnQgQXBwQm9keSBcdGZyb20gJ2ptYXJyb3lhdmUvY29tcG9uZW50cy91eGkvY29yZS9wYWdlL2JvZHknO1xuXG5jb25zdCBzdHlsZXMgPSB0aGVtZSA9PiAoeyBcblxufSk7XG5cbmNsYXNzIFBhZ2UgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICBjb25zdHJ1Y3Rvcihwcm9wcyxjb250ZXh0KSB7XG4gICAgXHRzdXBlcihwcm9wcyxjb250ZXh0KTtcbiAgICBcdHRoaXMuYXBpID0gd2luZG93Ll9fYXBpO1xuXHR9XG5cblx0Y29tcG9uZW50RGlkTW91bnQoKXtcblx0fVxuXG5cdHJlbmRlcigpe1xuXHRcdGNvbnN0IHRpdGxlID0gKFwidGl0bGVcIiBpbiB0aGlzLnByb3BzKSA/IDxoMT57dGhpcy5wcm9wcy50aXRsZX08L2gxPiA6IFwiXCI7XG5cdFx0cmV0dXJuIChcblx0XHRcdDxBcHAgcm91dGVyPXt0aGlzLnByb3BzLnJvdXRlcn0gYXBwPXt0aGlzLnByb3BzLmFwcH0+XG5cdFx0XHRcdDxBcHBCb2R5IHBhdGg9e1t7dGV4dDogJ2hvbWUnLCByb3V0ZTogJy8nfSwge3RleHQ6ICdsYWJzJ31dfSBhcHA9e3RoaXMucHJvcHMuYXBwfSBkYXRhPXt7fX0+XG5cdFx0XHRcdFx0PEdyaWQgY29udGFpbmVyIHNwYWNpbmc9ezh9IGNsYXNzTmFtZT17J21vZC1sYWJzJ30gc3R5bGU9e3twYWRkaW5nVG9wOiAnNSUnLHdpZHRoOicxMDAlJ319PlxuXHRcdFx0XHRcdFx0PEdyaWQgaXRlbSB4cz17MTJ9IGFsaWduPSdjZW50ZXInPlxuXHRcdFx0XHRcdFx0XHR7dGl0bGV9XG5cdFx0XHRcdFx0XHQ8L0dyaWQ+XG5cdFx0XHRcdFx0XHQ8R3JpZCBpdGVtIHhzPXsxfSBtZD17NH0+XG5cdFx0XHRcdFx0XHQ8L0dyaWQ+XG5cdFx0XHRcdFx0XHQ8R3JpZCBpdGVtIGFsaWduPSdjZW50ZXInIHhzPXsxMH0gbWQ9ezR9IGNsYXNzTmFtZT17J2ZyYW1lJ30+XG5cdFx0XHRcdFx0XHRcdDxpbWcgc3JjPScuL3Jlcy9pbWcvbGFiczAwMi5qcGcnIHdpZHRoPScxMDAlJy8+XG5cdFx0XHRcdFx0XHRcdDxoMT5Tb3JyeSwgaXQncyBqdXN0IGEgbGFicyBkZW1vPC9oMT5cblx0XHRcdFx0XHRcdDwvR3JpZD5cblx0XHRcdFx0XHQ8L0dyaWQ+IFxuXHRcdFx0XHQ8L0FwcEJvZHk+XG5cdFx0XHQ8L0FwcD5cblx0XHQpO1xuXHR9XG59XG5cbmV4cG9ydCBkZWZhdWx0IHdpdGhTdHlsZXMoc3R5bGVzKShQYWdlKTsiLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IEhpZGRlbiBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9IaWRkZW4nO1xuaW1wb3J0IHsgIEJyb3dzZXJWaWV3LCAgTW9iaWxlVmlldyB9IGZyb20gXCJyZWFjdC1kZXZpY2UtZGV0ZWN0XCI7XG5pbXBvcnQgd2l0aE1vZHVsZSBmcm9tICdqbWFycm95YXZlL2NvbXBvbmVudHMvdXhpL2NvcmUvd2l0aC1tb2R1bGUnO1xuaW1wb3J0IExHIGZyb20gXCJqbWFycm95YXZlL2NvbXBvbmVudHMvdXhpL2Jsb2cvbGF5b3V0L2xnL3BhZ2VcIjtcblxuY2xhc3MgUGFnZUNvbXBvbmVudCBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG5cdHJlbmRlcigpe1xuXHRcdHJldHVybiB0aGlzLnJlbmRlckRlZmF1bHQoKTtcblx0fVxuXG5cdHJlbmRlckRlZmF1bHQoKXtcblx0XHRjb25zdCBkYXRhID0gdGhpcy5wcm9wcy5kYXRhO1xuXHRcdGNvbnN0IHRpdGxlID0gdGhpcy5wcm9wcy50aXRsZTtcblx0XHRyZXR1cm4gKFxuXHRcdFx0PGRpdiBzdHlsZT17e3dpZHRoOicxMDAlJ319Plx0XHRcdFx0XG4gICAgXHRcdFx0PExHIGRhdGE9e2RhdGF9IHRpdGxlPXt0aXRsZX0vPlxuXHRcdFx0PC9kaXY+XG5cdFx0KVx0XHRcblx0fVxuXG5cdHJlbmRlck11bHRpcGxlKCl7XG5cdFx0dmFyIGRhdGEgPSB0aGlzLnByb3BzLmRhdGE7XG5cdFx0cmV0dXJuIChcblx0XHRcdDxkaXYgc3R5bGU9e3t3aWR0aDonMTAwJSd9fT5cdFx0XHRcdFxuICAgICAgICBcdFx0PEhpZGRlbiBvbmx5PXtbJ3NtJywgJ21kJywgJ2xnJywgJ3hsJ119PlxuICAgICAgICBcdFx0XHRcblx0XHQgICAgICAgIDwvSGlkZGVuPlxuICAgICAgICBcdFx0PEhpZGRlbiBvbmx5PXtbJ3hzJywgJ21kJywgJ2xnJywgJ3hsJ119PlxuICAgICAgICBcdFx0XHRcblx0XHQgICAgICAgIDwvSGlkZGVuPlxuICAgICAgICBcdFx0PEhpZGRlbiBvbmx5PXtbJ3hzJywgJ3NtJ119PlxuICAgICAgICBcdFx0XHQ8TEcgZGF0YT17ZGF0YX0vPlxuXHRcdCAgICAgICAgPC9IaWRkZW4+XG5cdFx0XHQ8L2Rpdj5cblx0XHQpXG5cdH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgd2l0aE1vZHVsZShQYWdlQ29tcG9uZW50KTsiLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgTGluayB9IGZyb20gJ3JlYWN0LXJvdXRlcidcbmltcG9ydCBHcmlkQ29udGFpbmVyIGZyb20gJ2ptYXJyb3lhdmUvY29tcG9uZW50cy91eGkvY29yZS9ncmlkX2NvbnRhaW5lcic7XG5pbXBvcnQgR3JpZEl0ZW0gZnJvbSAnam1hcnJveWF2ZS9jb21wb25lbnRzL3V4aS9jb3JlL2dyaWRfaXRlbSc7XG5pbXBvcnQgSGlkZGVuIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL0hpZGRlbic7XG5pbXBvcnQgTW9kdWxlcyBmcm9tICdqbWFycm95YXZlL2NvbmYvbGF5b3V0L21vZHVsZXMnO1xuaW1wb3J0IHdpdGhNb2R1bGUgZnJvbSAnam1hcnJveWF2ZS9jb21wb25lbnRzL3V4aS9jb3JlL3dpdGgtbW9kdWxlJztcbmltcG9ydCBCbG9jayBmcm9tICdqbWFycm95YXZlL2NvbXBvbmVudHMvdXhpL2hvbWUvYmxvY2snO1xuaW1wb3J0IE1CbG9jayBmcm9tICdjb3JlL2NvbXBvbmVudHMvbW9ja3VwL2Jsb2NrJztcbmltcG9ydCBTZWN0aW9uIGZyb20gJ2NvcmUvY29tcG9uZW50cy9sYXlvdXQvc2VjdGlvbic7XG5pbXBvcnQgTGlzdCBmcm9tICdqbWFycm95YXZlL2NvbXBvbmVudHMvdXhpL2Jsb2cvbGlzdCc7XG5cbmNsYXNzIFBhZ2VDb21wb25lbnQgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuXHRyZW5kZXIoKXtcblx0XHRjb25zdCB7IGRhdGEsIHRpdGxlIH0gPSB0aGlzLnByb3BzO1xuXHRcdGNvbnN0IHBvc3RzID0gKGRhdGEgJiYgZGF0YS5wb3N0cykgPyBkYXRhLnBvc3RzIDogbnVsbDtcblx0XHRyZXR1cm4gKFxuXHRcdFx0PEdyaWRDb250YWluZXI+XG5cdFx0XHRcdDxHcmlkSXRlbT5cblx0XHRcdFx0XHQ8R3JpZENvbnRhaW5lcj5cblx0XHRcdFx0XHRcdDxHcmlkSXRlbSB4cz17MX0gbWQ9ezJ9PlxuXHRcdFx0XHRcdFx0PC9HcmlkSXRlbT5cblx0XHRcdFx0XHRcdDxHcmlkSXRlbSAgeHM9ezEwfSBtZD17OH0+XG5cdFx0XHRcdFx0XHRcdDxHcmlkQ29udGFpbmVyPlxuXHRcdFx0XHRcdFx0XHRcdDxHcmlkSXRlbT5cblx0XHRcdFx0XHRcdFx0XHRcdDxoMT57dGl0bGV9PC9oMT5cblx0XHRcdFx0XHRcdFx0XHQ8L0dyaWRJdGVtPlx0XHRcdFxuXHRcdFx0XHRcdFx0XHRcdDxHcmlkSXRlbT5cblx0XHRcdFx0XHRcdFx0XHRcdDxMaXN0IGFyZWE9e3RpdGxlfSBkYXRhPXtwb3N0c30vPlxuXHRcdFx0XHRcdFx0XHRcdDwvR3JpZEl0ZW0+ICBcblx0XHRcdFx0XHRcdFx0PC9HcmlkQ29udGFpbmVyPlxuXHRcdFx0XHRcdFx0PC9HcmlkSXRlbT5cdFx0XHRcblx0XHRcdFx0XHRcdDxHcmlkSXRlbSB4cz17MX0gbWQ9ezJ9PlxuXHRcdFx0XHRcdFx0PC9HcmlkSXRlbT5cblx0XHRcdFx0XHQ8L0dyaWRDb250YWluZXI+XG5cdFx0XHRcdDwvR3JpZEl0ZW0+XG5cdFx0XHQ8L0dyaWRDb250YWluZXI+XG5cdFx0KVxuXHR9XG59XG5cbmV4cG9ydCBkZWZhdWx0IHdpdGhNb2R1bGUoUGFnZUNvbXBvbmVudCk7XG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IENvbXBvbmVudCBmcm9tICdjb3JlL2NvbXBvbmVudHMvY29tcG9uZW50JztcbmltcG9ydCBQb3N0TGluayBmcm9tIFwiam1hcnJveWF2ZS9jb21wb25lbnRzL2RhdGEvcG9zdF9saW5rXCI7XG5pbXBvcnQgR3JpZENvbnRhaW5lciBmcm9tICdqbWFycm95YXZlL2NvbXBvbmVudHMvdXhpL2NvcmUvZ3JpZF9jb250YWluZXInO1xuaW1wb3J0IEdyaWRJdGVtIGZyb20gJ2ptYXJyb3lhdmUvY29tcG9uZW50cy91eGkvY29yZS9ncmlkX2l0ZW0nO1xuaW1wb3J0IERhdGUgZnJvbSAnY29yZS9jb21wb25lbnRzL2RhdGUnO1xuXG5pbXBvcnQgXCIuL2xpc3Quc2Nzc1wiO1xuXG5mdW5jdGlvbiBQb3N0KHtkYXRhfSl7XG5cdHJldHVybiAoXG5cdFx0PEdyaWRJdGVtIHhzPXsxMn0gIGNsYXNzTmFtZT0ncG9zdCc+XG5cdFx0XHQ8ZGl2IGNsYXNzTmFtZT0nZGF0ZSc+PERhdGUgdmFsdWU9e2RhdGEuZGF0ZX0vPjwvZGl2PlxuXHRcdFx0PGRpdiBjbGFzc05hbWU9J3RpdGxlJz48UG9zdExpbmsgc2x1Zz17ZGF0YS5zbHVnfT57ZGF0YS50aXRsZX08L1Bvc3RMaW5rPjwvZGl2PlxuXHRcdFx0PGRpdj48c3BhbiBjbGFzc05hbWU9J2NhdGVnb3J5Jz57ZGF0YS5jYXRlZ29yeX08L3NwYW4+IDxzcGFuIGNsYXNzTmFtZT0ndGFncyc+dGFnczoge2RhdGEudGFnc308L3NwYW4+PC9kaXY+XG5cdFx0XHQ8ZGl2IGNsYXNzTmFtZT0nZXhjZXJwdCc+e2RhdGEuZXhjZXJwdH08L2Rpdj5cblx0XHQ8L0dyaWRJdGVtPlxuXHQpXG59XG5cbmNsYXNzIExpc3QgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuXHRjb25zdHJ1Y3Rvcihwcm9wcyxjb250ZXh0KSB7XG5cdFx0c3VwZXIocHJvcHMsY29udGV4dCk7XG5cdFx0dGhpcy5hcGkgPSB3aW5kb3cuX19hcGk7XG5cdH1cblxuXHRjb21wb25lbnREaWRNb3VudCgpe1xuXHR9XG5cblx0cmVuZGVyKCl7XG5cdFx0Y29uc3QgZGF0YSA9IHRoaXMucHJvcHMuZGF0YTtcblx0XHRjb25zdCBhcmVhID0gdGhpcy5wcm9wcy5hcmVhO1xuXHRcdHZhciBrZXkgPSAwO1xuXHRcdHJldHVybiAoXG5cdFx0XHQ8R3JpZENvbnRhaW5lciBjbGFzc05hbWU9J21vZC1ibG9nLWxpc3QnPlxuXHRcdFx0XHR7ZGF0YS5tYXAoKGl0ZW0pPT5cblx0XHRcdFx0XHQ8UG9zdCBkYXRhPXtpdGVtfSBrZXk9e2tleSsrfS8+XG5cdFx0XHRcdCl9XG5cdFx0XHQ8L0dyaWRDb250YWluZXI+XG5cdFx0KTtcblx0fVxufVxuXG5leHBvcnQgZGVmYXVsdCBDb21wb25lbnQoTGlzdCk7IiwiXG52YXIgY29udGVudCA9IHJlcXVpcmUoXCIhIS4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL2ZyYW1ld29ya3Mvd2ViYXBwcy9zdGFydHVwL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL2ZyYW1ld29ya3Mvd2ViYXBwcy9zdGFydHVwL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9saWIvbG9hZGVyLmpzIS4vbGlzdC5zY3NzXCIpO1xuXG5pZih0eXBlb2YgY29udGVudCA9PT0gJ3N0cmluZycpIGNvbnRlbnQgPSBbW21vZHVsZS5pZCwgY29udGVudCwgJyddXTtcblxudmFyIHRyYW5zZm9ybTtcbnZhciBpbnNlcnRJbnRvO1xuXG5cblxudmFyIG9wdGlvbnMgPSB7XCJobXJcIjp0cnVlfVxuXG5vcHRpb25zLnRyYW5zZm9ybSA9IHRyYW5zZm9ybVxub3B0aW9ucy5pbnNlcnRJbnRvID0gdW5kZWZpbmVkO1xuXG52YXIgdXBkYXRlID0gcmVxdWlyZShcIiEuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9mcmFtZXdvcmtzL3dlYmFwcHMvc3RhcnR1cC9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2xpYi9hZGRTdHlsZXMuanNcIikoY29udGVudCwgb3B0aW9ucyk7XG5cbmlmKGNvbnRlbnQubG9jYWxzKSBtb2R1bGUuZXhwb3J0cyA9IGNvbnRlbnQubG9jYWxzO1xuXG5pZihtb2R1bGUuaG90KSB7XG5cdG1vZHVsZS5ob3QuYWNjZXB0KFwiISEuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9mcmFtZXdvcmtzL3dlYmFwcHMvc3RhcnR1cC9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9mcmFtZXdvcmtzL3dlYmFwcHMvc3RhcnR1cC9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvbGliL2xvYWRlci5qcyEuL2xpc3Quc2Nzc1wiLCBmdW5jdGlvbigpIHtcblx0XHR2YXIgbmV3Q29udGVudCA9IHJlcXVpcmUoXCIhIS4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL2ZyYW1ld29ya3Mvd2ViYXBwcy9zdGFydHVwL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL2ZyYW1ld29ya3Mvd2ViYXBwcy9zdGFydHVwL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9saWIvbG9hZGVyLmpzIS4vbGlzdC5zY3NzXCIpO1xuXG5cdFx0aWYodHlwZW9mIG5ld0NvbnRlbnQgPT09ICdzdHJpbmcnKSBuZXdDb250ZW50ID0gW1ttb2R1bGUuaWQsIG5ld0NvbnRlbnQsICcnXV07XG5cblx0XHR2YXIgbG9jYWxzID0gKGZ1bmN0aW9uKGEsIGIpIHtcblx0XHRcdHZhciBrZXksIGlkeCA9IDA7XG5cblx0XHRcdGZvcihrZXkgaW4gYSkge1xuXHRcdFx0XHRpZighYiB8fCBhW2tleV0gIT09IGJba2V5XSkgcmV0dXJuIGZhbHNlO1xuXHRcdFx0XHRpZHgrKztcblx0XHRcdH1cblxuXHRcdFx0Zm9yKGtleSBpbiBiKSBpZHgtLTtcblxuXHRcdFx0cmV0dXJuIGlkeCA9PT0gMDtcblx0XHR9KGNvbnRlbnQubG9jYWxzLCBuZXdDb250ZW50LmxvY2FscykpO1xuXG5cdFx0aWYoIWxvY2FscykgdGhyb3cgbmV3IEVycm9yKCdBYm9ydGluZyBDU1MgSE1SIGR1ZSB0byBjaGFuZ2VkIGNzcy1tb2R1bGVzIGxvY2Fscy4nKTtcblxuXHRcdHVwZGF0ZShuZXdDb250ZW50KTtcblx0fSk7XG5cblx0bW9kdWxlLmhvdC5kaXNwb3NlKGZ1bmN0aW9uKCkgeyB1cGRhdGUoKTsgfSk7XG59IiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBMb2FkYWJsZSBmcm9tICdyZWFjdC1sb2FkYWJsZSc7XG5pbXBvcnQgTG9hZGluZyBmcm9tICdjb3JlL2NvbXBvbmVudHMvbG9hZGluZyc7XG5pbXBvcnQgQXBwIFx0XHRmcm9tICdqbWFycm95YXZlL2NvbXBvbmVudHMvdXhpL2NvcmUvcGFnZS9hcHAnO1xuaW1wb3J0IEFwcEJvZHkgXHRmcm9tICdqbWFycm95YXZlL2NvbXBvbmVudHMvdXhpL2NvcmUvcGFnZS9ib2R5JztcblxuXG5pbXBvcnQgSG9tZVByb3h5IGZyb20gJ2ptYXJyb3lhdmUvY29tcG9uZW50cy91eGkvYmxvZy9sYXlvdXQvbGF5b3V0LXByb3h5Jztcbi8qXG5jb25zdCBIb21lUHJveHkgPSBMb2FkYWJsZSh7XG4gIGxvYWRlcjogKCkgPT4gaW1wb3J0KCdqbWFycm95YXZlL2NvbXBvbmVudHMvdXhpL2Jsb2cvbGF5b3V0L2xheW91dC1wcm94eScpLFxuICBsb2FkaW5nOiBMb2FkaW5nLFxufSk7XG4qL1xuXG5jbGFzcyBQYWdlIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcblx0Y29uc3RydWN0b3IocHJvcHMsY29udGV4dCkge1xuXHRcdHN1cGVyKHByb3BzLGNvbnRleHQpO1xuXHRcdHRoaXMuYXBpID0gd2luZG93Ll9fYXBpO1xuXHR9XG5cblx0Y29tcG9uZW50RGlkTW91bnQoKXtcblx0fVxuXG5cdHJlbmRlcigpe1xuXHRcdGNvbnN0IGFwcCA9IHRoaXMucHJvcHMuYXBwO1xuXHRcdHZhciBrZXkgPSAwO1xuXHRcdHJldHVybiAoXG5cdFx0XHQ8QXBwIHJvdXRlcj17dGhpcy5wcm9wcy5yb3V0ZXJ9IGFwcD17dGhpcy5wcm9wcy5hcHB9PlxuXHRcdFx0XHQ8QXBwQm9keSBwYXRoPXtbe3RleHQ6ICdob21lJywgcm91dGU6ICcvJ31dfSBhcHA9e3RoaXMucHJvcHMuYXBwfSBkYXRhPXt7aG9tZTogdGhpcy5wcm9wcy5wYWdlfX0+XG5cdFx0XHRcdFx0PEhvbWVQcm94eSBkYXRhPXt0aGlzLnByb3BzLnBhZ2UuZGF0YX0gdGl0bGU9e3RoaXMucHJvcHMucGFnZS5hcmVhfS8+XG5cdFx0XHRcdDwvQXBwQm9keT5cblx0XHRcdDwvQXBwPlxuXHRcdCk7XG5cdH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgUGFnZTsiLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IENvbXBvbmVudCBmcm9tICdjb3JlL2NvbXBvbmVudHMvY29tcG9uZW50JztcbmltcG9ydCBQb3N0TGluayBmcm9tIFwiam1hcnJveWF2ZS9jb21wb25lbnRzL2RhdGEvcG9zdF9saW5rXCI7XG5pbXBvcnQgR3JpZENvbnRhaW5lciBmcm9tICdqbWFycm95YXZlL2NvbXBvbmVudHMvdXhpL2NvcmUvZ3JpZF9jb250YWluZXInO1xuaW1wb3J0IEdyaWRJdGVtIGZyb20gJ2ptYXJyb3lhdmUvY29tcG9uZW50cy91eGkvY29yZS9ncmlkX2l0ZW0nO1xuaW1wb3J0IERhdGUgZnJvbSAnY29yZS9jb21wb25lbnRzL2RhdGUnO1xuXG5pbXBvcnQgJy4vY29udGVudC5zY3NzJztcblxuY2xhc3MgQ29udGVudCBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG5cdGNvbnN0cnVjdG9yKHByb3BzLGNvbnRleHQpIHtcblx0XHRzdXBlcihwcm9wcyxjb250ZXh0KTtcblx0XHR0aGlzLmFwaSA9IHdpbmRvdy5fX2FwaTtcblx0fVxuXG5cdGNvbXBvbmVudERpZE1vdW50KCl7XG5cdH1cblxuXHRyZW5kZXIoKXtcblx0XHRjb25zdCBkYXRhID0gdGhpcy5wcm9wcy5kYXRhO1xuXHRcdHZhciBrZXkgPSAwO1xuXHRcdHJldHVybiAoXG5cdFx0XHQ8R3JpZENvbnRhaW5lciBjbGFzc05hbWU9J21vZC1wb3N0LWNvbnRlbnQnPlxuXHRcdFx0XHQ8R3JpZEl0ZW0+XG5cdFx0XHRcdFx0PGRpdj48RGF0ZSB2YWx1ZT17ZGF0YS5kYXRlfSBjbGFzc05hbWU9J2RhdGUnLz48L2Rpdj5cblx0XHRcdFx0PC9HcmlkSXRlbT5cblx0XHRcdFx0PEdyaWRJdGVtPlxuXHRcdFx0XHRcdDxkaXYgZGFuZ2Vyb3VzbHlTZXRJbm5lckhUTUw9e3sgX19odG1sOiBkYXRhLmh0bWwgfX0+PC9kaXY+XG5cdFx0XHRcdDwvR3JpZEl0ZW0+XG5cdFx0XHQ8L0dyaWRDb250YWluZXI+XG5cdCk7XG5cdH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgQ29tcG9uZW50KENvbnRlbnQpOyIsIlxudmFyIGNvbnRlbnQgPSByZXF1aXJlKFwiISEuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9mcmFtZXdvcmtzL3dlYmFwcHMvc3RhcnR1cC9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9mcmFtZXdvcmtzL3dlYmFwcHMvc3RhcnR1cC9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvbGliL2xvYWRlci5qcyEuL2NvbnRlbnQuc2Nzc1wiKTtcblxuaWYodHlwZW9mIGNvbnRlbnQgPT09ICdzdHJpbmcnKSBjb250ZW50ID0gW1ttb2R1bGUuaWQsIGNvbnRlbnQsICcnXV07XG5cbnZhciB0cmFuc2Zvcm07XG52YXIgaW5zZXJ0SW50bztcblxuXG5cbnZhciBvcHRpb25zID0ge1wiaG1yXCI6dHJ1ZX1cblxub3B0aW9ucy50cmFuc2Zvcm0gPSB0cmFuc2Zvcm1cbm9wdGlvbnMuaW5zZXJ0SW50byA9IHVuZGVmaW5lZDtcblxudmFyIHVwZGF0ZSA9IHJlcXVpcmUoXCIhLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vZnJhbWV3b3Jrcy93ZWJhcHBzL3N0YXJ0dXAvbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9saWIvYWRkU3R5bGVzLmpzXCIpKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5pZihjb250ZW50LmxvY2FscykgbW9kdWxlLmV4cG9ydHMgPSBjb250ZW50LmxvY2FscztcblxuaWYobW9kdWxlLmhvdCkge1xuXHRtb2R1bGUuaG90LmFjY2VwdChcIiEhLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vZnJhbWV3b3Jrcy93ZWJhcHBzL3N0YXJ0dXAvbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vZnJhbWV3b3Jrcy93ZWJhcHBzL3N0YXJ0dXAvbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2xpYi9sb2FkZXIuanMhLi9jb250ZW50LnNjc3NcIiwgZnVuY3Rpb24oKSB7XG5cdFx0dmFyIG5ld0NvbnRlbnQgPSByZXF1aXJlKFwiISEuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9mcmFtZXdvcmtzL3dlYmFwcHMvc3RhcnR1cC9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9mcmFtZXdvcmtzL3dlYmFwcHMvc3RhcnR1cC9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvbGliL2xvYWRlci5qcyEuL2NvbnRlbnQuc2Nzc1wiKTtcblxuXHRcdGlmKHR5cGVvZiBuZXdDb250ZW50ID09PSAnc3RyaW5nJykgbmV3Q29udGVudCA9IFtbbW9kdWxlLmlkLCBuZXdDb250ZW50LCAnJ11dO1xuXG5cdFx0dmFyIGxvY2FscyA9IChmdW5jdGlvbihhLCBiKSB7XG5cdFx0XHR2YXIga2V5LCBpZHggPSAwO1xuXG5cdFx0XHRmb3Ioa2V5IGluIGEpIHtcblx0XHRcdFx0aWYoIWIgfHwgYVtrZXldICE9PSBiW2tleV0pIHJldHVybiBmYWxzZTtcblx0XHRcdFx0aWR4Kys7XG5cdFx0XHR9XG5cblx0XHRcdGZvcihrZXkgaW4gYikgaWR4LS07XG5cblx0XHRcdHJldHVybiBpZHggPT09IDA7XG5cdFx0fShjb250ZW50LmxvY2FscywgbmV3Q29udGVudC5sb2NhbHMpKTtcblxuXHRcdGlmKCFsb2NhbHMpIHRocm93IG5ldyBFcnJvcignQWJvcnRpbmcgQ1NTIEhNUiBkdWUgdG8gY2hhbmdlZCBjc3MtbW9kdWxlcyBsb2NhbHMuJyk7XG5cblx0XHR1cGRhdGUobmV3Q29udGVudCk7XG5cdH0pO1xuXG5cdG1vZHVsZS5ob3QuZGlzcG9zZShmdW5jdGlvbigpIHsgdXBkYXRlKCk7IH0pO1xufSIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgSGlkZGVuIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL0hpZGRlbic7XG5pbXBvcnQgeyAgQnJvd3NlclZpZXcsICBNb2JpbGVWaWV3IH0gZnJvbSBcInJlYWN0LWRldmljZS1kZXRlY3RcIjtcbmltcG9ydCB3aXRoTW9kdWxlIGZyb20gJ2ptYXJyb3lhdmUvY29tcG9uZW50cy91eGkvY29yZS93aXRoLW1vZHVsZSc7XG5pbXBvcnQgTEcgZnJvbSBcImptYXJyb3lhdmUvY29tcG9uZW50cy91eGkvYmxvZ19wb3N0L2xheW91dC9sZy9wYWdlXCI7XG5cbmNsYXNzIFBhZ2VDb21wb25lbnQgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuXHRyZW5kZXIoKXtcblx0XHRyZXR1cm4gdGhpcy5yZW5kZXJEZWZhdWx0KCk7XG5cdH1cblxuXHRyZW5kZXJEZWZhdWx0KCl7XG5cdFx0dmFyIGRhdGEgPSB0aGlzLnByb3BzLmRhdGE7XG5cdFx0dmFyIHRpdGxlID0gdGhpcy5wcm9wcy50aXRsZTtcblx0XHRyZXR1cm4gKFxuXHRcdFx0PGRpdiBzdHlsZT17e3dpZHRoOicxMDAlJ319Plx0XHRcdFx0XG4gICAgXHRcdFx0PExHIGRhdGE9e2RhdGF9IHRpdGxlPXt0aXRsZX0vPlxuXHRcdFx0PC9kaXY+XG5cdFx0KVx0XHRcblx0fVxuXG5cdHJlbmRlck11bHRpcGxlKCl7XG5cdFx0dmFyIGRhdGEgPSB0aGlzLnByb3BzLmRhdGE7XG5cdFx0cmV0dXJuIChcblx0XHRcdDxkaXYgc3R5bGU9e3t3aWR0aDonMTAwJSd9fT5cdFx0XHRcdFxuICAgICAgICBcdFx0PEhpZGRlbiBvbmx5PXtbJ3NtJywgJ21kJywgJ2xnJywgJ3hsJ119PlxuICAgICAgICBcdFx0XHRcblx0XHQgICAgICAgIDwvSGlkZGVuPlxuICAgICAgICBcdFx0PEhpZGRlbiBvbmx5PXtbJ3hzJywgJ21kJywgJ2xnJywgJ3hsJ119PlxuICAgICAgICBcdFx0XHRcblx0XHQgICAgICAgIDwvSGlkZGVuPlxuICAgICAgICBcdFx0PEhpZGRlbiBvbmx5PXtbJ3hzJywgJ3NtJ119PlxuICAgICAgICBcdFx0XHQ8TEcgZGF0YT17ZGF0YX0vPlxuXHRcdCAgICAgICAgPC9IaWRkZW4+XG5cdFx0XHQ8L2Rpdj5cblx0XHQpXG5cdH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgd2l0aE1vZHVsZShQYWdlQ29tcG9uZW50KTsiLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgTGluayB9IGZyb20gJ3JlYWN0LXJvdXRlcidcbmltcG9ydCBHcmlkQ29udGFpbmVyIGZyb20gJ2ptYXJyb3lhdmUvY29tcG9uZW50cy91eGkvY29yZS9ncmlkX2NvbnRhaW5lcic7XG5pbXBvcnQgR3JpZEl0ZW0gZnJvbSAnam1hcnJveWF2ZS9jb21wb25lbnRzL3V4aS9jb3JlL2dyaWRfaXRlbSc7XG5pbXBvcnQgSGlkZGVuIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL0hpZGRlbic7XG5pbXBvcnQgTW9kdWxlcyBmcm9tICdqbWFycm95YXZlL2NvbmYvbGF5b3V0L21vZHVsZXMnO1xuaW1wb3J0IHdpdGhNb2R1bGUgZnJvbSAnam1hcnJveWF2ZS9jb21wb25lbnRzL3V4aS9jb3JlL3dpdGgtbW9kdWxlJztcbmltcG9ydCBCbG9jayBmcm9tICdqbWFycm95YXZlL2NvbXBvbmVudHMvdXhpL2hvbWUvYmxvY2snO1xuaW1wb3J0IE1CbG9jayBmcm9tICdjb3JlL2NvbXBvbmVudHMvbW9ja3VwL2Jsb2NrJztcbmltcG9ydCBTZWN0aW9uIGZyb20gJ2NvcmUvY29tcG9uZW50cy9sYXlvdXQvc2VjdGlvbic7XG5pbXBvcnQgQ29udGVudCBmcm9tICdqbWFycm95YXZlL2NvbXBvbmVudHMvdXhpL2Jsb2dfcG9zdC9jb250ZW50JztcbmltcG9ydCBCbG9nTGluayBmcm9tIFwiam1hcnJveWF2ZS9jb21wb25lbnRzL2RhdGEvYmxvZ19saW5rXCI7XG5cbmNsYXNzIFBhZ2VDb21wb25lbnQgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuXHRyZW5kZXIoKXtcblx0XHRjb25zdCB7IGRhdGEsIHRpdGxlIH0gPSB0aGlzLnByb3BzO1xuXHRcdGNvbnN0IHBvc3QgPSAoZGF0YSAmJiBkYXRhLnBvc3QpID8gZGF0YS5wb3N0IDogbnVsbDtcblx0XHRyZXR1cm4gKFxuXHRcdFx0PEdyaWRDb250YWluZXI+XG5cdFx0XHRcdDxHcmlkSXRlbT5cblx0XHRcdFx0XHQ8R3JpZENvbnRhaW5lcj5cblx0XHRcdFx0XHRcdDxHcmlkSXRlbSB4cz17MX0+XG5cdFx0XHRcdFx0XHQ8L0dyaWRJdGVtPlxuXHRcdFx0XHRcdFx0PEdyaWRJdGVtICB4cz17MTB9PlxuXHRcdFx0XHRcdFx0XHQ8R3JpZENvbnRhaW5lcj5cblx0XHRcdFx0XHRcdFx0XHQ8R3JpZEl0ZW0+XG5cdFx0XHRcdFx0XHRcdFx0XHQ8aDE+PEJsb2dMaW5rIHNsdWc9e3RpdGxlfT57dGl0bGV9PC9CbG9nTGluaz4gPiB7KHBvc3QpID8gcG9zdC50aXRsZSA6ICcnfTwvaDE+XG5cdFx0XHRcdFx0XHRcdFx0PC9HcmlkSXRlbT5cdFx0XHRcblx0XHRcdFx0XHRcdFx0XHQ8R3JpZEl0ZW0+XHRcdFx0XHRcdFx0XHRcdFx0XG5cdFx0XHRcdFx0XHRcdFx0XHQ8Q29udGVudCBkYXRhPXtwb3N0fS8+XG5cdFx0XHRcdFx0XHRcdFx0PC9HcmlkSXRlbT4gIFxuXHRcdFx0XHRcdFx0XHQ8L0dyaWRDb250YWluZXI+XG5cdFx0XHRcdFx0XHQ8L0dyaWRJdGVtPlx0XHRcdFxuXHRcdFx0XHRcdFx0PEdyaWRJdGVtIHhzPXsxfT5cblx0XHRcdFx0XHRcdDwvR3JpZEl0ZW0+XG5cdFx0XHRcdFx0PC9HcmlkQ29udGFpbmVyPlxuXHRcdFx0XHQ8L0dyaWRJdGVtPlxuXHRcdFx0PC9HcmlkQ29udGFpbmVyPlxuXHRcdClcblx0fVxufVxuXG5leHBvcnQgZGVmYXVsdCB3aXRoTW9kdWxlKFBhZ2VDb21wb25lbnQpO1xuXG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IExvYWRhYmxlIGZyb20gJ3JlYWN0LWxvYWRhYmxlJztcbmltcG9ydCBMb2FkaW5nIGZyb20gJ2NvcmUvY29tcG9uZW50cy9sb2FkaW5nJztcbmltcG9ydCBBcHAgXHRcdGZyb20gJ2ptYXJyb3lhdmUvY29tcG9uZW50cy91eGkvY29yZS9wYWdlL2FwcCc7XG5pbXBvcnQgQXBwQm9keSBcdGZyb20gJ2ptYXJyb3lhdmUvY29tcG9uZW50cy91eGkvY29yZS9wYWdlL2JvZHknO1xuXG5pbXBvcnQgSG9tZVByb3h5IGZyb20gJ2ptYXJyb3lhdmUvY29tcG9uZW50cy91eGkvYmxvZ19wb3N0L2xheW91dC9sYXlvdXQtcHJveHknO1xuLypcbmNvbnN0IEhvbWVQcm94eSA9IExvYWRhYmxlKHtcbiAgbG9hZGVyOiAoKSA9PiBpbXBvcnQoJ2ptYXJyb3lhdmUvY29tcG9uZW50cy91eGkvYmxvZ19wb3N0L2xheW91dC9sYXlvdXQtcHJveHknKSxcbiAgbG9hZGluZzogTG9hZGluZyxcbn0pO1xuKi9cblxuY2xhc3MgUGFnZSBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG5cdGNvbnN0cnVjdG9yKHByb3BzLGNvbnRleHQpIHtcblx0XHRzdXBlcihwcm9wcyxjb250ZXh0KTtcblx0XHR0aGlzLmFwaSA9IHdpbmRvdy5fX2FwaTtcblx0fVxuXG5cdGNvbXBvbmVudERpZE1vdW50KCl7XG5cdH1cblxuXHRyZW5kZXIoKXtcblx0XHRjb25zdCBhcHAgPSB0aGlzLnByb3BzLmFwcDtcblx0XHR2YXIga2V5ID0gMDtcblx0XHRyZXR1cm4gKFxuXHRcdFx0PEFwcCByb3V0ZXI9e3RoaXMucHJvcHMucm91dGVyfSBhcHA9e3RoaXMucHJvcHMuYXBwfT5cblx0XHRcdFx0PEFwcEJvZHkgcGF0aD17W3t0ZXh0OiAnaG9tZScsIHJvdXRlOiAnLyd9XX0gYXBwPXt0aGlzLnByb3BzLmFwcH0gZGF0YT17e2hvbWU6IHRoaXMucHJvcHMucGFnZX19PlxuXHRcdFx0XHRcdDxIb21lUHJveHkgZGF0YT17dGhpcy5wcm9wcy5wYWdlLmRhdGF9IHRpdGxlPXt0aGlzLnByb3BzLnBhZ2UuYXJlYX0vPlxuXHRcdFx0XHQ8L0FwcEJvZHk+XG5cdFx0XHQ8L0FwcD5cblx0XHQpO1xuXHR9XG59XG5cbmV4cG9ydCBkZWZhdWx0IFBhZ2U7IiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCB3aXRoTW9kdWxlIGZyb20gJ2ptYXJyb3lhdmUvY29tcG9uZW50cy91eGkvY29yZS93aXRoLW1vZHVsZSc7XG5pbXBvcnQgQnV0dG9uIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL0J1dHRvbic7XG5pbXBvcnQgRGlhbG9nIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL0RpYWxvZyc7XG5pbXBvcnQgRGlhbG9nQWN0aW9ucyBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9EaWFsb2dBY3Rpb25zJztcbmltcG9ydCBEaWFsb2dDb250ZW50IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL0RpYWxvZ0NvbnRlbnQnO1xuaW1wb3J0IERpYWxvZ1RpdGxlIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL0RpYWxvZ1RpdGxlJztcbmltcG9ydCBJbnB1dExhYmVsIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL0lucHV0TGFiZWwnO1xuaW1wb3J0IElucHV0IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL0lucHV0JztcbmltcG9ydCBGb3JtQ29udHJvbCBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9Gb3JtQ29udHJvbCc7XG5pbXBvcnQgU2VsZWN0IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL1NlbGVjdCc7XG5pbXBvcnQgQ29uc3RhbnRzIGZyb20gJ2ptYXJyb3lhdmUvY29uZi9jb25zdGFudHMnO1xuaW1wb3J0ICcuL2NvbV92ZXJzaW9uLnNjc3MnO1xuXG5jbGFzcyBDb21wb25lbnQgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuXHRjb25zdHJ1Y3Rvcihwcm9wcyl7XG5cdFx0c3VwZXIocHJvcHMpO1xuXG5cdFx0Y29uc3QgY29tID0gd2luZG93Ll9fYXBpLmdldENvbXBvbmVudHNWZXJzaW9uKCk7XG5cblx0XHR0aGlzLnN0YXRlID0ge1xuXHRcdFx0b3B0aW9uOiBjb20uaWQsXG5cdFx0fTtcblxuXHRcdHRoaXMuaGFuZGxlQ2hhbmdlID0gdGhpcy5oYW5kbGVDaGFuZ2UuYmluZCh0aGlzKTtcblx0XHR0aGlzLm9uQ2xvc2UgPSB0aGlzLm9uQ2xvc2UuYmluZCh0aGlzKTtcblx0fVxuXG5cdGhhbmRsZUNoYW5nZShldmVudCl7XG5cdFx0Y29uc3QgdmFsdWUgPSBldmVudC50YXJnZXQudmFsdWU7XG5cdFx0dGhpcy5zZXRTdGF0ZSh7IG9wdGlvbiA6IHZhbHVlIH0pO1xuXHRcdHdpbmRvdy5fX2FwaS5zZXRDb21wb25lbnRzVmVyc2lvbih2YWx1ZSk7XG5cdH1cblxuXHRvbkNsb3NlKCl7XG5cdFx0aWYodGhpcy5wcm9wcy5vbkNsb3NlICE9IG51bGwpe1xuXHRcdFx0dGhpcy5wcm9wcy5vbkNsb3NlKCk7XG5cdFx0fVxuXHR9XG5cblx0cmVuZGVyKCl7XHRcblx0XHRpZighQ29uc3RhbnRzLkNPTV9TV0lUQ0gpe1xuXHRcdFx0cmV0dXJuIG51bGw7XG5cdFx0fVxuXG5cdFx0Y29uc3QgZGF0YSA9IENvbnN0YW50cy5VWElfVkVSU0lPTlM7XG5cdFx0cmV0dXJuIChcblx0XHRcdDxkaXYgY2xhc3NOYW1lPSdtb2QtdmVyc2lvbic+XG5cdCAgXHRcdFx0PEZvcm1Db250cm9sPlxuXHQgICAgXHRcdFx0PElucHV0TGFiZWwgaHRtbEZvcj1cIm5hdGl2ZS1zaW1wbGVcIj5VWFVJIFZlcnNpb248L0lucHV0TGFiZWw+XG5cdFx0XHRcdFx0PFNlbGVjdCBuYXRpdmUgdmFsdWU9e3RoaXMuc3RhdGUub3B0aW9ufSBvbkNoYW5nZT17dGhpcy5oYW5kbGVDaGFuZ2V9IGlucHV0PXs8SW5wdXQgaWQ9XCJuYXRpdmUtc2ltcGxlXCIgLz59PlxuXHRcdFx0XHRcdFx0e2RhdGEubWFwKChpdGVtKSA9PlxuXHRcdFx0XHRcdFx0XHRpdGVtLnZpc2libGUgJiYgPG9wdGlvbiBrZXk9e2l0ZW0uaWR9IHZhbHVlPXtpdGVtLmlkfT57aXRlbS5mYW1pbHl9IHtgJHtpdGVtLnZlcnNpb25bMF19LiR7aXRlbS52ZXJzaW9uWzFdfS4ke2l0ZW0udmVyc2lvblsyXX1gfTwvb3B0aW9uPlxuXHRcdFx0XHRcdFx0KX1cblx0XHRcdFx0XHQ8L1NlbGVjdD5cblx0ICAgICAgICBcdDwvRm9ybUNvbnRyb2w+XG4gICAgICAgIFx0PC9kaXY+XG5cdFx0KVxuXHR9XG5cbn1cblxuZXhwb3J0IGRlZmF1bHQgd2l0aE1vZHVsZShDb21wb25lbnQpOyIsIlxudmFyIGNvbnRlbnQgPSByZXF1aXJlKFwiISEuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9mcmFtZXdvcmtzL3dlYmFwcHMvc3RhcnR1cC9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9mcmFtZXdvcmtzL3dlYmFwcHMvc3RhcnR1cC9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvbGliL2xvYWRlci5qcyEuL2NvbV92ZXJzaW9uLnNjc3NcIik7XG5cbmlmKHR5cGVvZiBjb250ZW50ID09PSAnc3RyaW5nJykgY29udGVudCA9IFtbbW9kdWxlLmlkLCBjb250ZW50LCAnJ11dO1xuXG52YXIgdHJhbnNmb3JtO1xudmFyIGluc2VydEludG87XG5cblxuXG52YXIgb3B0aW9ucyA9IHtcImhtclwiOnRydWV9XG5cbm9wdGlvbnMudHJhbnNmb3JtID0gdHJhbnNmb3JtXG5vcHRpb25zLmluc2VydEludG8gPSB1bmRlZmluZWQ7XG5cbnZhciB1cGRhdGUgPSByZXF1aXJlKFwiIS4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL2ZyYW1ld29ya3Mvd2ViYXBwcy9zdGFydHVwL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvbGliL2FkZFN0eWxlcy5qc1wiKShjb250ZW50LCBvcHRpb25zKTtcblxuaWYoY29udGVudC5sb2NhbHMpIG1vZHVsZS5leHBvcnRzID0gY29udGVudC5sb2NhbHM7XG5cbmlmKG1vZHVsZS5ob3QpIHtcblx0bW9kdWxlLmhvdC5hY2NlcHQoXCIhIS4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL2ZyYW1ld29ya3Mvd2ViYXBwcy9zdGFydHVwL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL2ZyYW1ld29ya3Mvd2ViYXBwcy9zdGFydHVwL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9saWIvbG9hZGVyLmpzIS4vY29tX3ZlcnNpb24uc2Nzc1wiLCBmdW5jdGlvbigpIHtcblx0XHR2YXIgbmV3Q29udGVudCA9IHJlcXVpcmUoXCIhIS4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL2ZyYW1ld29ya3Mvd2ViYXBwcy9zdGFydHVwL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL2ZyYW1ld29ya3Mvd2ViYXBwcy9zdGFydHVwL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9saWIvbG9hZGVyLmpzIS4vY29tX3ZlcnNpb24uc2Nzc1wiKTtcblxuXHRcdGlmKHR5cGVvZiBuZXdDb250ZW50ID09PSAnc3RyaW5nJykgbmV3Q29udGVudCA9IFtbbW9kdWxlLmlkLCBuZXdDb250ZW50LCAnJ11dO1xuXG5cdFx0dmFyIGxvY2FscyA9IChmdW5jdGlvbihhLCBiKSB7XG5cdFx0XHR2YXIga2V5LCBpZHggPSAwO1xuXG5cdFx0XHRmb3Ioa2V5IGluIGEpIHtcblx0XHRcdFx0aWYoIWIgfHwgYVtrZXldICE9PSBiW2tleV0pIHJldHVybiBmYWxzZTtcblx0XHRcdFx0aWR4Kys7XG5cdFx0XHR9XG5cblx0XHRcdGZvcihrZXkgaW4gYikgaWR4LS07XG5cblx0XHRcdHJldHVybiBpZHggPT09IDA7XG5cdFx0fShjb250ZW50LmxvY2FscywgbmV3Q29udGVudC5sb2NhbHMpKTtcblxuXHRcdGlmKCFsb2NhbHMpIHRocm93IG5ldyBFcnJvcignQWJvcnRpbmcgQ1NTIEhNUiBkdWUgdG8gY2hhbmdlZCBjc3MtbW9kdWxlcyBsb2NhbHMuJyk7XG5cblx0XHR1cGRhdGUobmV3Q29udGVudCk7XG5cdH0pO1xuXG5cdG1vZHVsZS5ob3QuZGlzcG9zZShmdW5jdGlvbigpIHsgdXBkYXRlKCk7IH0pO1xufSIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgd2l0aE1vZHVsZSBmcm9tICdqbWFycm95YXZlL2NvbXBvbmVudHMvdXhpL2NvcmUvd2l0aC1tb2R1bGUnO1xuaW1wb3J0IHticm93c2VyTmFtZSwgYnJvd3NlclZlcnNpb24sIE1vYmlsZVZpZXcsIG1vYmlsZVZlbmRvciwgbW9iaWxlTW9kZWwsIGRldmljZURldGVjdCwgb3NOYW1lLCBvc1ZlcnNpb259IGZyb20gXCJyZWFjdC1kZXZpY2UtZGV0ZWN0XCI7XG5pbXBvcnQgQ29uc3RhbnRzIGZyb20gJ2ptYXJyb3lhdmUvY29uZi9jb25zdGFudHMnO1xuXG5jbGFzcyBEZWJ1ZyBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG5cblx0cmVuZGVyKCl7XHRcblx0XHRjb25zdCBhcHAgPSB0aGlzLnByb3BzLmFwcDtcblx0XHRjb25zdCBkYXRhID0gKFwiZGF0YVwiIGluIHRoaXMucHJvcHMpID8gdGhpcy5wcm9wcy5kYXRhIDoge307XG5cblx0XHRpZighYXBwKSByZXR1cm4gPGRpdi8+O1xuXHRcdHJldHVybiAoICBcblx0XHRcdDxkaXY+XG5cdFx0XHR7Q29uc3RhbnRzLkRFQlVHICYmIFxuXHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cIm1vZC1kZWJ1Z1wiPlxuXHRcdFx0XHRcdDxzcGFuPjxiPlZlcnNpb246IHtDb25zdGFudHMuVkVSU0lPTn08L2I+PC9zcGFuPjxici8+XG5cdFx0XHRcdFx0PHNwYW4+PGI+U2l6ZTo8L2I+IHt3aW5kb3cuaW5uZXJXaWR0aCB8fCBkb2N1bWVudC5ib2R5LmNsaWVudFdpZHRofSB4IHt3aW5kb3cuaW5uZXJIZWlnaHQgfHwgZG9jdW1lbnQuYm9keS5jbGllbnRIZWlnaHR9PC9zcGFuPjxici8+XG5cdFx0XHRcdFx0PHNwYW4+PGI+QnJvd3Nlcjo8L2I+IHticm93c2VyTmFtZX0gdi5be2Jyb3dzZXJWZXJzaW9ufV08L3NwYW4+PGJyLz5cblx0XHRcdFx0XHQ8TW9iaWxlVmlldz48c3Bhbj48Yj5Nb2JpbGU6PC9iPiB7bW9iaWxlVmVuZG9yfSB7bW9iaWxlTW9kZWx9PC9zcGFuPjxici8+PC9Nb2JpbGVWaWV3PlxuXHRcdFx0XHRcdDxzcGFuPjxiPk9TOjwvYj4ge29zTmFtZX0gdi5be29zVmVyc2lvbn1dPC9zcGFuPjxici8+XHRcdFx0XHRcdFxuXHRcdFx0XHRcdHsoYXBwLmVycm9yKSAmJiBcblx0XHRcdFx0XHRcdDxkaXY+XG5cdFx0XHRcdFx0XHRcdDxoci8+XG5cdFx0XHRcdFx0XHRcdDxzcGFuPjxiPkVycm9yOjwvYj4ge2FwcC5lcnJvcn08L3NwYW4+XG5cdFx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0XHR9XG5cblx0XHRcdFx0PC9kaXY+XG5cdFx0XHR9XG5cdFx0XHQ8L2Rpdj5cdFx0XHRcblx0XHQpXG5cdH1cblxufVxuXG5leHBvcnQgZGVmYXVsdCB3aXRoTW9kdWxlKERlYnVnKTsiLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5pbXBvcnQgR3JpZENvbnRhaW5lciBmcm9tICdqbWFycm95YXZlL2NvbXBvbmVudHMvdXhpL2NvcmUvZ3JpZF9jb250YWluZXInO1xuaW1wb3J0IEdyaWRJdGVtIGZyb20gJ2ptYXJyb3lhdmUvY29tcG9uZW50cy91eGkvY29yZS9ncmlkX2l0ZW0nO1xuaW1wb3J0IExpbmsgZnJvbSAnY29yZS91aS9saW5rJztcblxuY2xhc3MgQ29tcG9uZW50IGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgcmVuZGVyKCkge1xuICAgIHJldHVybiAoXG5cdFx0PEdyaWRDb250YWluZXIgc3BhY2luZz17OH0+XG5cdFx0XHQ8R3JpZEl0ZW0geHM9ezEyfSBzbT17Nn0gbWQ9ezR9PlxuXHRcdFx0XHQ8aDE+am1hcnJveWF2ZTwvaDE+XG5cdFx0XHRcdFx0PGRpdj48TGluayB0bz17Jy9hY2VyY2EnfT5hY2VyY2E8L0xpbms+PC9kaXY+XG5cdFx0XHQ8L0dyaWRJdGVtPlxuXHRcdFx0PEdyaWRJdGVtIHhzPXsxMn0gc209ezZ9IG1kPXs0fT5cblx0XHRcdFx0PGgxPmxhYnM8L2gxPlxuXHRcdFx0XHRcdDxkaXY+PExpbmsgdG89eydsYWJzL21sYid9Pm1sYjwvTGluaz48L2Rpdj5cblx0XHRcdFx0XHQ8ZGl2PjxMaW5rIHRvPXsnbGFicy90cmVuZHMnfT50cmVuZHM8L0xpbms+PC9kaXY+XG5cdFx0XHRcdFx0PGRpdj48TGluayB0bz17J2xhYnMvc2VhcmNoJ30+c2VhcmNoPC9MaW5rPjwvZGl2PlxuXHRcdFx0PC9HcmlkSXRlbT5cblx0XHRcdDxHcmlkSXRlbSB4cz17MTJ9IHNtPXs2fSBtZD17NH0+XG5cdFx0XHRcdDxoMT5rbm93bGVkZ2UgYmFzZTwvaDE+XG5cdFx0XHRcdFx0PGRpdj48TGluayB0bz17J2tiL2FuZHJvaWQnfT5hbmRyb2lkIGxpYnM8L0xpbms+PC9kaXY+XG5cdFx0XHQ8L0dyaWRJdGVtPlx0XHRcdFx0XHRcblx0XHQ8L0dyaWRDb250YWluZXI+IFxuICAgICk7XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgKENvbXBvbmVudCk7IiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCB3aXRoTW9kdWxlIGZyb20gJ2ptYXJyb3lhdmUvY29tcG9uZW50cy91eGkvY29yZS93aXRoLW1vZHVsZSc7XG5pbXBvcnQgR3JpZCBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9HcmlkJztcblxuY2xhc3MgR3JpZENvbnRhaW5lciBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG5cdHJlbmRlcigpe1xuXHRcdHZhciBzcGFjaW5nID0gKFwic3BhY2luZ1wiIGluIHRoaXMucHJvcHMpID8gdGhpcy5wcm9wcy5zcGFjaW5nIDogMDtcblx0XHR2YXIgYWxpZ24gPSAoXCJhbGlnblwiIGluIHRoaXMucHJvcHMpXHQ/IHRoaXMucHJvcHMuYWxpZ24gOiAoKFwianVzdGlmeVwiIGluIHRoaXMucHJvcHMpID8gdGhpcy5wcm9wcy5qdXN0aWZ5IDogJ2ZsZXgtc3RhcnQnKTsgXG5cdFx0dmFyIHZhbGlnbiA9IChcInZhbGlnblwiIGluIHRoaXMucHJvcHMpXHQ/IHRoaXMucHJvcHMuYWxpZ24gOiAoKFwiYWxpZ25JdGVtc1wiIGluIHRoaXMucHJvcHMpID8gdGhpcy5wcm9wcy5hbGlnbkl0ZW1zIDogJ2ZsZXgtc3RhcnQnKTsgXG5cdFx0dmFyIGRpcmVjdGlvbiA9IChcImRpcmVjdGlvblwiIGluIHRoaXMucHJvcHMpXHQ/IHRoaXMucHJvcHMuZGlyZWN0aW9uIDogJ3Jvdyc7IFxuXHRcdHZhciBjbGFzc05hbWUgPSAoXCJjbGFzc05hbWVcIiBpbiB0aGlzLnByb3BzKVx0PyB0aGlzLnByb3BzLmNsYXNzTmFtZSA6ICcnOyBcblx0XHRcblx0XHRyZXR1cm4gKFxuXHRcdFx0PEdyaWQgY2xhc3NOYW1lPXtjbGFzc05hbWV9IGNvbnRhaW5lciBzcGFjaW5nPXtzcGFjaW5nfSBzdHlsZT17e3dpZHRoOicxMDAlJ319IGRpcmVjdGlvbj17ZGlyZWN0aW9ufSBhbGlnbkl0ZW1zPXt2YWxpZ259IGp1c3RpZnk9e2FsaWdufT5cblx0XHRcdFx0e3RoaXMucHJvcHMuY2hpbGRyZW59IFxuXHRcdFx0PC9HcmlkPlxuXHRcdClcblx0fVxufVxuXG5leHBvcnQgZGVmYXVsdCB3aXRoTW9kdWxlKEdyaWRDb250YWluZXIpOyIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgd2l0aE1vZHVsZSBmcm9tICdqbWFycm95YXZlL2NvbXBvbmVudHMvdXhpL2NvcmUvd2l0aC1tb2R1bGUnO1xuaW1wb3J0IEdyaWQgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvR3JpZCc7XG5cbmNsYXNzIEdyaWRJdGVtIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcblx0cmVuZGVyKCl7XG5cdFx0dmFyIHZpc2libGUgPSAoXCJ2aXNpYmxlXCIgaW4gdGhpcy5wcm9wcylcdD8gdGhpcy5wcm9wcy52aXNpYmxlIDogdHJ1ZTsgXG5cdFx0dmFyIHhzID0gKFwieHNcIiBpbiB0aGlzLnByb3BzKSA/IHRoaXMucHJvcHMueHMgOiAxMjtcblx0XHR2YXIgY2xhc3NOYW1lID0gKFwiY2xhc3NOYW1lXCIgaW4gdGhpcy5wcm9wcylcdD8gdGhpcy5wcm9wcy5jbGFzc05hbWUgOiAnJzsgXG5cdFx0cmV0dXJuIChcblx0XHRcdHZpc2libGUgJiZcblx0XHRcdFx0PEdyaWQgY2xhc3NOYW1lPXtjbGFzc05hbWV9IGl0ZW0geHM9e3hzfSBzbT17dGhpcy5wcm9wcy5zbX0gbWQ9e3RoaXMucHJvcHMubWR9IHN0eWxlPXt0aGlzLnByb3BzLnN0eWxlfT5cblx0XHRcdFx0XHR7dGhpcy5wcm9wcy5jaGlsZHJlbn0gXG5cdFx0XHRcdDwvR3JpZD5cdFx0XHRcblx0XHQpXG5cdH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgd2l0aE1vZHVsZShHcmlkSXRlbSk7IiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBDb3JlQXBwIGZyb20gJ2NvcmUvdWkvYXBwJztcbmltcG9ydCBDb25zdGFudHMgZnJvbSAnam1hcnJveWF2ZS9jb25mL2NvbnN0YW50cydcbmltcG9ydCBUaGVtZSBmcm9tICdqbWFycm95YXZlL2NvbmYvdGhlbWUnXG5pbXBvcnQgeyBjcmVhdGVNdWlUaGVtZSB9IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL3N0eWxlcyc7XG5cbmNvbnN0IHRoZW1lID0gY3JlYXRlTXVpVGhlbWUoe1xuICBwYWxldHRlOiB7XG4gICAgcHJpbWFyeSA6IFRoZW1lLnByaW1hcnksXG4gICAgc2Vjb25kYXJ5OiBUaGVtZS5zZWNvbmRhcnksXG4gIH1cbn0pXG5cbmNsYXNzIEFwcCBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gIHJlbmRlcigpe1xuICAgIGNvbnN0IHBhZ2VfdGl0bGUgPSBgSk1BcnJveWF2ZWA7XG4gICAgY29uc3QgYXBwQm9keSA9IFJlYWN0LkNoaWxkcmVuLnRvQXJyYXkodGhpcy5wcm9wcy5jaGlsZHJlbikuZmluZCgoaXRlbSk9PntcbiAgICAgIHJldHVybiAoaXRlbS5wcm9wcy50eXBlID09PSAnQm9keScpID8gaXRlbSA6IG51bGw7XG4gICAgfSk7XG5cblxuICAgIHJldHVybihcbiAgICAgIDxDb3JlQXBwIFxuICAgICAgICBkcmF3ZXI9e2ZhbHNlfSBcbiAgICAgICAgbm90aWZpY2F0aW9ucz17ZmFsc2V9IFxuICAgICAgICB0aGVtZT17dGhlbWV9IFxuICAgICAgICBzZXJ2ZXI9e3RoaXMucHJvcHMuc2VydmVyfSBcbiAgICAgICAgdGl0bGU9e2ZhbHNlfSBcbiAgICAgICAgcGFnZV90aXRsZT17cGFnZV90aXRsZX0gXG4gICAgICAgIG5hdj17d2luZG93Ll9fbmF2fSBcbiAgICAgICAgYmFyU3R5bGU9e3tiYWNrZ3JvdW5kQ29sb3I6ICcjMGMzYzU2JywgY29sb3I6ICd3aGl0ZSd9fVxuICAgICAgICA+XG4gICAgICAgICAge2FwcEJvZHl9XG4gICAgICA8L0NvcmVBcHA+XG4gICAgKVxuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IEFwcDsiLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IEZvb3RlciBmcm9tICdqbWFycm95YXZlL2NvbXBvbmVudHMvdXhpL2NvcmUvcGFnZS9mb290ZXInXG5pbXBvcnQgSGVhZGVyIGZyb20gJ2ptYXJyb3lhdmUvY29tcG9uZW50cy91eGkvY29yZS9wYWdlL2hlYWRlcidcblxuY2xhc3MgQXBwQm9keSBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gIHJlbmRlcigpe1xuICAgIGNvbnN0IGFwcCA9IHRoaXMucHJvcHMuYXBwO1xuICAgIGNvbnN0IGRhdGEgPSB0aGlzLnByb3BzLmRhdGE7XG4gICAgY29uc3QgY2hpbGRyZW4gPSB0aGlzLnByb3BzLmNoaWxkcmVuO1xuICAgIHJldHVybihcbiAgICAgIDxkaXYgc3R5bGU9e3twb3NpdGlvbjogJ3JlbGF0aXZlJ319PlxuICAgICAgICA8SGVhZGVyIGFwcD17YXBwfSBkYXRhPXtkYXRhfS8+XG4gICAgICAgIDxkaXYgc3R5bGU9e3ttaW5IZWlnaHQ6ICc5MHZoJ319PlxuICAgICAgICAgIHtjaGlsZHJlbn1cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxGb290ZXIvPlxuICAgICAgPC9kaXY+XG4gICAgKVxuICB9XG59XG5cbkFwcEJvZHkuZGVmYXVsdFByb3BzID0ge1xuICB0eXBlOiAnQm9keScsXG59XG5cbmV4cG9ydCBkZWZhdWx0IEFwcEJvZHk7XG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IHdpdGhNb2R1bGUgZnJvbSAnam1hcnJveWF2ZS9jb21wb25lbnRzL3V4aS9jb3JlL3dpdGgtbW9kdWxlJztcbmltcG9ydCBHcmlkQ29udGFpbmVyIGZyb20gJ2ptYXJyb3lhdmUvY29tcG9uZW50cy91eGkvY29yZS9ncmlkX2NvbnRhaW5lcic7XG5pbXBvcnQgR3JpZEl0ZW0gZnJvbSAnam1hcnJveWF2ZS9jb21wb25lbnRzL3V4aS9jb3JlL2dyaWRfaXRlbSc7XG5pbXBvcnQgRm9vdGVyTGlua3MgZnJvbSAnam1hcnJveWF2ZS9jb21wb25lbnRzL3V4aS9jb3JlL2Zvb3Rlcl9saW5rcyc7XG5pbXBvcnQgU29jaWFsTmV0d29ya3MgZnJvbSAnc2hhcmVkL2ptYXJyb3lhdmUvc29jaWFsX25ldHdvcmtzJztcbmltcG9ydCBNQmxvY2sgZnJvbSAnY29yZS9jb21wb25lbnRzL21vY2t1cC9ibG9jayc7XG5cbmltcG9ydCBcIi4vZm9vdGVyLnNjc3NcIjtcblxuY2xhc3MgRm9vdGVyQ29tcG9uZW50IGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcblx0cmVuZGVyKCl7XHRcblx0XHRjb25zdCBkYXRhID0gdGhpcy5wcm9wcy5kYXRhO1xuXHRcdHJldHVybiAoXG5cdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cIm1vZC1mb290ZXJcIj5cblx0XHRcdFx0PEdyaWRDb250YWluZXIgc3BhY2luZz17OH0+XG5cdFx0XHRcdFx0PEdyaWRJdGVtIHhzPXsxMn0+XG5cdFx0XHRcdFx0XHQ8Rm9vdGVyTGlua3MgZGF0YT17ZGF0YX0vPlxuXHRcdFx0XHRcdDwvR3JpZEl0ZW0+XHRcdFx0XHRcdFxuXHRcdFx0XHRcdDxHcmlkSXRlbSB4cz17MTJ9IHN0eWxlPXt7dGV4dEFsaWduOiAnY2VudGVyJ319PlxuXHRcdFx0XHRcdFx0PFNvY2lhbE5ldHdvcmtzLz5cblx0XHRcdFx0XHQ8L0dyaWRJdGVtPlxuXHRcdFx0XHQ8L0dyaWRDb250YWluZXI+IFxuXHRcdFx0PC9kaXY+XHRcdFx0XG5cdFx0KVxuXHR9XG5cbn1cblxuZXhwb3J0IGRlZmF1bHQgd2l0aE1vZHVsZShGb290ZXJDb21wb25lbnQpOyIsIlxudmFyIGNvbnRlbnQgPSByZXF1aXJlKFwiISEuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9mcmFtZXdvcmtzL3dlYmFwcHMvc3RhcnR1cC9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9mcmFtZXdvcmtzL3dlYmFwcHMvc3RhcnR1cC9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvbGliL2xvYWRlci5qcyEuL2Zvb3Rlci5zY3NzXCIpO1xuXG5pZih0eXBlb2YgY29udGVudCA9PT0gJ3N0cmluZycpIGNvbnRlbnQgPSBbW21vZHVsZS5pZCwgY29udGVudCwgJyddXTtcblxudmFyIHRyYW5zZm9ybTtcbnZhciBpbnNlcnRJbnRvO1xuXG5cblxudmFyIG9wdGlvbnMgPSB7XCJobXJcIjp0cnVlfVxuXG5vcHRpb25zLnRyYW5zZm9ybSA9IHRyYW5zZm9ybVxub3B0aW9ucy5pbnNlcnRJbnRvID0gdW5kZWZpbmVkO1xuXG52YXIgdXBkYXRlID0gcmVxdWlyZShcIiEuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9mcmFtZXdvcmtzL3dlYmFwcHMvc3RhcnR1cC9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2xpYi9hZGRTdHlsZXMuanNcIikoY29udGVudCwgb3B0aW9ucyk7XG5cbmlmKGNvbnRlbnQubG9jYWxzKSBtb2R1bGUuZXhwb3J0cyA9IGNvbnRlbnQubG9jYWxzO1xuXG5pZihtb2R1bGUuaG90KSB7XG5cdG1vZHVsZS5ob3QuYWNjZXB0KFwiISEuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9mcmFtZXdvcmtzL3dlYmFwcHMvc3RhcnR1cC9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9mcmFtZXdvcmtzL3dlYmFwcHMvc3RhcnR1cC9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvbGliL2xvYWRlci5qcyEuL2Zvb3Rlci5zY3NzXCIsIGZ1bmN0aW9uKCkge1xuXHRcdHZhciBuZXdDb250ZW50ID0gcmVxdWlyZShcIiEhLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vZnJhbWV3b3Jrcy93ZWJhcHBzL3N0YXJ0dXAvbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vZnJhbWV3b3Jrcy93ZWJhcHBzL3N0YXJ0dXAvbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2xpYi9sb2FkZXIuanMhLi9mb290ZXIuc2Nzc1wiKTtcblxuXHRcdGlmKHR5cGVvZiBuZXdDb250ZW50ID09PSAnc3RyaW5nJykgbmV3Q29udGVudCA9IFtbbW9kdWxlLmlkLCBuZXdDb250ZW50LCAnJ11dO1xuXG5cdFx0dmFyIGxvY2FscyA9IChmdW5jdGlvbihhLCBiKSB7XG5cdFx0XHR2YXIga2V5LCBpZHggPSAwO1xuXG5cdFx0XHRmb3Ioa2V5IGluIGEpIHtcblx0XHRcdFx0aWYoIWIgfHwgYVtrZXldICE9PSBiW2tleV0pIHJldHVybiBmYWxzZTtcblx0XHRcdFx0aWR4Kys7XG5cdFx0XHR9XG5cblx0XHRcdGZvcihrZXkgaW4gYikgaWR4LS07XG5cblx0XHRcdHJldHVybiBpZHggPT09IDA7XG5cdFx0fShjb250ZW50LmxvY2FscywgbmV3Q29udGVudC5sb2NhbHMpKTtcblxuXHRcdGlmKCFsb2NhbHMpIHRocm93IG5ldyBFcnJvcignQWJvcnRpbmcgQ1NTIEhNUiBkdWUgdG8gY2hhbmdlZCBjc3MtbW9kdWxlcyBsb2NhbHMuJyk7XG5cblx0XHR1cGRhdGUobmV3Q29udGVudCk7XG5cdH0pO1xuXG5cdG1vZHVsZS5ob3QuZGlzcG9zZShmdW5jdGlvbigpIHsgdXBkYXRlKCk7IH0pO1xufSIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgQ29tcG9uZW50IGZyb20gJ2NvcmUvY29tcG9uZW50cy9jb21wb25lbnQnO1xuaW1wb3J0IERlYnVnIGZyb20gJ2ptYXJyb3lhdmUvY29tcG9uZW50cy91eGkvY29yZS9kZWJ1Zyc7XG5pbXBvcnQgQ29tVmVyc2lvbiBmcm9tICdqbWFycm95YXZlL2NvbXBvbmVudHMvdXhpL2NvcmUvY29tX3ZlcnNpb24nO1xuaW1wb3J0IFRvcEJhciBmcm9tICdqbWFycm95YXZlL2NvbXBvbmVudHMvdXhpL2NvcmUvdG9wX2Jhcic7XG5pbXBvcnQgR3JpZENvbnRhaW5lciBmcm9tICdqbWFycm95YXZlL2NvbXBvbmVudHMvdXhpL2NvcmUvZ3JpZF9jb250YWluZXInO1xuaW1wb3J0IEdyaWRJdGVtIGZyb20gJ2ptYXJyb3lhdmUvY29tcG9uZW50cy91eGkvY29yZS9ncmlkX2l0ZW0nO1xuXG5jbGFzcyBIZWFkZXJDb21wb25lbnQgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuXHRjb25zdHJ1Y3Rvcihwcm9wcyl7XG5cdFx0c3VwZXIocHJvcHMpO1xuXHR9XG5cblx0cmVuZGVyKCl7XHRcblx0XHRjb25zdCB7IGFwcCwgZGF0YSB9ID0gdGhpcy5wcm9wcztcblxuXHRcdHJldHVybiAoXG5cdFx0XHQ8R3JpZENvbnRhaW5lcj5cblx0XHRcdFx0PEdyaWRJdGVtPlxuXHRcdFx0XHRcdDxDb21WZXJzaW9uLz5cblx0XHRcdCAgICAgIFx0PERlYnVnIGFwcD17YXBwfSBkYXRhPXtkYXRhfS8+XG5cdFx0XHRcdDwvR3JpZEl0ZW0+XG5cdFx0XHRcdDxHcmlkSXRlbT5cblx0XHRcdFx0XHQ8VG9wQmFyIGRhdGE9e2FwcH0vPlxuXHRcdFx0XHQ8L0dyaWRJdGVtPlxuXHRcdFx0PC9HcmlkQ29udGFpbmVyPlxuXHRcdClcblx0fVxuXG59XG5cbmV4cG9ydCBkZWZhdWx0IENvbXBvbmVudChIZWFkZXJDb21wb25lbnQpOyIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcbmltcG9ydCBDb21wb25lbnQgZnJvbSAnY29yZS9jb21wb25lbnRzL2NvbXBvbmVudCc7XG5pbXBvcnQgR3JpZENvbnRhaW5lciBmcm9tICdqbWFycm95YXZlL2NvbXBvbmVudHMvdXhpL2NvcmUvZ3JpZF9jb250YWluZXInO1xuaW1wb3J0IEdyaWRJdGVtIGZyb20gJ2ptYXJyb3lhdmUvY29tcG9uZW50cy91eGkvY29yZS9ncmlkX2l0ZW0nO1xuaW1wb3J0IEJsb2NrIGZyb20gJ2ptYXJyb3lhdmUvY29tcG9uZW50cy91eGkvaG9tZS9ibG9jayc7XG5pbXBvcnQgV2hhdHNIb3QgZnJvbSAnam1hcnJveWF2ZS9jb21wb25lbnRzL3V4aS9jb3JlL3doYXRzX2hvdCc7XG5cbmNsYXNzIFRvcEJhciBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gIHJlbmRlcigpIHtcbiAgXHRjb25zdCB7IGRhdGEgfSA9IHRoaXMucHJvcHM7XG4gIFx0Y29uc3QgaG90ID0gKGRhdGEgJiYgZGF0YS5ob3QpID8gZGF0YS5ob3QgOiBudWxsO1xuICAgIHJldHVybiAoXG4gICAgXHQ8QmxvY2s+XG5cdFx0XHQ8R3JpZENvbnRhaW5lcj5cblx0XHRcdFx0PEdyaWRJdGVtIHhzPXsxMn0+XG5cdFx0XHRcdFx0PFdoYXRzSG90IGNoZWNrX2RhdGE9e2ZhbHNlfSBkYXRhPXtob3R9Lz5cblx0XHRcdFx0PC9HcmlkSXRlbT5cblx0XHRcdDwvR3JpZENvbnRhaW5lcj5cblx0XHQ8L0Jsb2NrPlxuICAgICk7XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgQ29tcG9uZW50KFRvcEJhcik7IiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBDb25zdGFudHMgZnJvbSAnam1hcnJveWF2ZS9jb25mL2NvbnN0YW50cyc7XG5cbmNsYXNzIENvbXBvbmVudCBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG5cdHJlbmRlcigpe1x0XG5cdFx0aWYoIUNvbnN0YW50cy5ERUJVRykgcmV0dXJuIG51bGw7XG5cdFx0Y29uc3QgaW5kZXggPSAoXCJpbmRleFwiIGluIHRoaXMucHJvcHMpID8gdGhpcy5wcm9wcy5pbmRleCA6IG51bGw7XG5cdFx0Y29uc3QgdmVyc2lvbiA9IHdpbmRvdy5fX2NvbXBvbmVudHMuZ2V0Q3VycmVudFZlcnNpb24oKTtcblx0XHRjb25zdCB2ZXJzaW9uUmVzID0gd2luZG93Ll9fY29tcG9uZW50cy5nZXRSZXNvbHZlZFZlcnNpb24oaW5kZXgpO1xuXHRcdHJldHVybiAoXG5cdFx0XHQ8ZGl2IGNsYXNzTmFtZT0nbW9kLXZlcnNpb24tbGFiZWwnPlxuXHRcdFx0XHR7KFwidGl0bGVcIiBpbiB0aGlzLnByb3BzKSAmJiA8ZGl2Pnt0aGlzLnByb3BzLnRpdGxlfTwvZGl2Pn1cblx0XHRcdFx0PGRpdj5yZXNvbHZlZDp7dmVyc2lvblJlcy5mYW1pbHl9Ont2ZXJzaW9uUmVzLnZlcnNpb25bMF19Lnt2ZXJzaW9uUmVzLnZlcnNpb25bMV19Lnt2ZXJzaW9uUmVzLnZlcnNpb25bMl19PC9kaXY+XG5cdFx0XHRcdDxkaXY+cmVxdWlyZWQ6e3ZlcnNpb24uZmFtaWx5fTp7dmVyc2lvbi52ZXJzaW9uWzBdfS57dmVyc2lvbi52ZXJzaW9uWzFdfS57dmVyc2lvbi52ZXJzaW9uWzJdfTwvZGl2PlxuICAgICAgICBcdDwvZGl2PlxuXHRcdClcblx0fVxuXG59XG5cbmV4cG9ydCBkZWZhdWx0IENvbXBvbmVudDsiLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5pbXBvcnQgUG9zdExpbmsgZnJvbSAnam1hcnJveWF2ZS9jb21wb25lbnRzL2RhdGEvcG9zdF9saW5rJztcbmltcG9ydCBDb21wb25lbnQgZnJvbSAnY29yZS9jb21wb25lbnRzL2NvbXBvbmVudCc7XG5pbXBvcnQgTG9hZGluZyBmcm9tICdjb3JlL3VpL2xvYWRpbmcnO1xuaW1wb3J0ICcuL3doYXRzX2hvdC5zY3NzJztcblxuY2xhc3MgSG90QmFyQ29tcG9uZW50IGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgcmVuZGVyKCkge1xuICBcdGNvbnN0IGRhdGEgPSB0aGlzLnByb3BzLmRhdGE7XG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXYgY2xhc3NOYW1lPSdtb2Qtd2hhdHMtaG90Jz5cbiAgICAgICAgeyhkYXRhICE9IG51bGwpID8gXG4gICAgICAgICAgPFBvc3RMaW5rIHNsdWc9e2RhdGEuc2x1Z30gY2F0ZWdvcnk9e2RhdGEuYXJlYX0+XG4gICAgICAgICAgICB7ZGF0YS5hcmVhfSA+IHtkYXRhLnRpdGxlfVxuICAgICAgICAgIDwvUG9zdExpbms+XG4gICAgICAgICAgOlxuICAgICAgICAgIDxMb2FkaW5nLz5cbiAgICAgICAgfVxuICAgICAgPC9kaXY+XG4gICAgKTtcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBDb21wb25lbnQoSG90QmFyQ29tcG9uZW50KTsiLCJcbnZhciBjb250ZW50ID0gcmVxdWlyZShcIiEhLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vZnJhbWV3b3Jrcy93ZWJhcHBzL3N0YXJ0dXAvbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vZnJhbWV3b3Jrcy93ZWJhcHBzL3N0YXJ0dXAvbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2xpYi9sb2FkZXIuanMhLi93aGF0c19ob3Quc2Nzc1wiKTtcblxuaWYodHlwZW9mIGNvbnRlbnQgPT09ICdzdHJpbmcnKSBjb250ZW50ID0gW1ttb2R1bGUuaWQsIGNvbnRlbnQsICcnXV07XG5cbnZhciB0cmFuc2Zvcm07XG52YXIgaW5zZXJ0SW50bztcblxuXG5cbnZhciBvcHRpb25zID0ge1wiaG1yXCI6dHJ1ZX1cblxub3B0aW9ucy50cmFuc2Zvcm0gPSB0cmFuc2Zvcm1cbm9wdGlvbnMuaW5zZXJ0SW50byA9IHVuZGVmaW5lZDtcblxudmFyIHVwZGF0ZSA9IHJlcXVpcmUoXCIhLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vZnJhbWV3b3Jrcy93ZWJhcHBzL3N0YXJ0dXAvbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9saWIvYWRkU3R5bGVzLmpzXCIpKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5pZihjb250ZW50LmxvY2FscykgbW9kdWxlLmV4cG9ydHMgPSBjb250ZW50LmxvY2FscztcblxuaWYobW9kdWxlLmhvdCkge1xuXHRtb2R1bGUuaG90LmFjY2VwdChcIiEhLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vZnJhbWV3b3Jrcy93ZWJhcHBzL3N0YXJ0dXAvbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vZnJhbWV3b3Jrcy93ZWJhcHBzL3N0YXJ0dXAvbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2xpYi9sb2FkZXIuanMhLi93aGF0c19ob3Quc2Nzc1wiLCBmdW5jdGlvbigpIHtcblx0XHR2YXIgbmV3Q29udGVudCA9IHJlcXVpcmUoXCIhIS4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL2ZyYW1ld29ya3Mvd2ViYXBwcy9zdGFydHVwL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL2ZyYW1ld29ya3Mvd2ViYXBwcy9zdGFydHVwL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9saWIvbG9hZGVyLmpzIS4vd2hhdHNfaG90LnNjc3NcIik7XG5cblx0XHRpZih0eXBlb2YgbmV3Q29udGVudCA9PT0gJ3N0cmluZycpIG5ld0NvbnRlbnQgPSBbW21vZHVsZS5pZCwgbmV3Q29udGVudCwgJyddXTtcblxuXHRcdHZhciBsb2NhbHMgPSAoZnVuY3Rpb24oYSwgYikge1xuXHRcdFx0dmFyIGtleSwgaWR4ID0gMDtcblxuXHRcdFx0Zm9yKGtleSBpbiBhKSB7XG5cdFx0XHRcdGlmKCFiIHx8IGFba2V5XSAhPT0gYltrZXldKSByZXR1cm4gZmFsc2U7XG5cdFx0XHRcdGlkeCsrO1xuXHRcdFx0fVxuXG5cdFx0XHRmb3Ioa2V5IGluIGIpIGlkeC0tO1xuXG5cdFx0XHRyZXR1cm4gaWR4ID09PSAwO1xuXHRcdH0oY29udGVudC5sb2NhbHMsIG5ld0NvbnRlbnQubG9jYWxzKSk7XG5cblx0XHRpZighbG9jYWxzKSB0aHJvdyBuZXcgRXJyb3IoJ0Fib3J0aW5nIENTUyBITVIgZHVlIHRvIGNoYW5nZWQgY3NzLW1vZHVsZXMgbG9jYWxzLicpO1xuXG5cdFx0dXBkYXRlKG5ld0NvbnRlbnQpO1xuXHR9KTtcblxuXHRtb2R1bGUuaG90LmRpc3Bvc2UoZnVuY3Rpb24oKSB7IHVwZGF0ZSgpOyB9KTtcbn0iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IEVycm9yQm91bmRyeSBmcm9tICdjb3JlL2NvbXBvbmVudHMvZXJyb3InO1xuaW1wb3J0IExvYWRpbmcgZnJvbSAnY29yZS9jb21wb25lbnRzL2xvYWRpbmcuanMnO1xuaW1wb3J0IENvbnN0YW50cyBmcm9tICdqbWFycm95YXZlL2NvbmYvY29uc3RhbnRzJ1xuXG5jb25zdCB3aXRoTW9kdWxlID0gTW9kdWxlQ29tcG9uZW50ID0+XG5cdGNsYXNzIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcblx0XHRyZW5kZXIoKXtcblx0XHRcdGNvbnN0IHRpdGxlID0gKFwidGl0bGVcIiBpbiB0aGlzLnByb3BzKSA/IHRoaXMucHJvcHMudGl0bGUgOiBudWxsO1xuXHRcdFx0Y29uc3QgcGggPSAoXCJwbGFjZWhvbGRlclwiIGluIHRoaXMucHJvcHMpID8gdGhpcy5wcm9wcy5wbGFjZWhvbGRlciA6IHt9O1xuXHRcdFx0Y29uc3QgcGhXID0gKHBoLndpZHRoKSA/IHBoLndpZHRoIDogJzEwMCUnO1xuXHRcdFx0Y29uc3QgcGhIID0gKHBoLmhlaWdodCkgPyBwaC5oZWlnaHQgOiAnMjUwJztcblxuXHRcdFx0cmV0dXJuIChcblx0XHRcdFx0PEVycm9yQm91bmRyeSBmcm9tPXt0aXRsZX0gc3R5bGU9e3t3aWR0aDonMTAwJSd9fT5cblx0XHRcdFx0XHQ8TW9kdWxlQ29tcG9uZW50IHsuLi50aGlzLnByb3BzfS8+XG5cdFx0XHRcdDwvRXJyb3JCb3VuZHJ5PlxuXHRcdFx0KTtcblx0XHR9XG5cdH1cblxuZXhwb3J0IGRlZmF1bHQgd2l0aE1vZHVsZTsiLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IENvbXBvbmVudCBmcm9tICdjb3JlL2NvbXBvbmVudHMvY29tcG9uZW50JztcbmltcG9ydCBcIi4vY29udGVudC5zY3NzXCI7XG5cbmNsYXNzIENvbnRlbnQgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuXHRjb25zdHJ1Y3Rvcihwcm9wcyxjb250ZXh0KSB7XG5cdFx0c3VwZXIocHJvcHMsY29udGV4dCk7XG5cdFx0dGhpcy5hcGkgPSB3aW5kb3cuX19hcGk7XG5cdH1cblxuXHRjb21wb25lbnREaWRNb3VudCgpe1xuXHR9XG5cblx0cmVuZGVyKCl7XG5cdFx0Y29uc3QgZGF0YSA9IHRoaXMucHJvcHMuZGF0YTtcblx0XHR2YXIga2V5ID0gMDtcblx0XHRyZXR1cm4gKFxuXHRcdFx0PGRpdiBjbGFzc05hbWU9XCJtb2QtY29udGVudFwiPlxuXHRcdFx0ICA8ZGl2IGNsYXNzTmFtZT1cInJvd1wiPlxuXHRcdFx0ICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sXCI+XG5cdFx0XHRcdFx0XHQ8ZGl2PlxuXHRcdFx0XHRcdFx0XHQ8aDM+UmVzdW1lbjwvaDM+XG5cdFx0XHRcdFx0XHRcdDxkaXY+XG5cdFx0XHRcdFx0XHRcdFx0RXN0dWRpw6kgY2llbmNpYXMgZGUgbGEgY29tcHV0YWNpw7NuIHkgaGUgdHJhYmFqYWRvIGVuIGRlc2Fycm9sbG8gZGUgc29mdHdhcmUgcG9yIHZhcmlvcyBhw7FvcyBmb3JtYW5kbyBtaSBleHBlcmllbmNpYSBlblxuXHRcdFx0XHRcdFx0XHRcdHRvZG8gZWwgY2ljbG8gZGUgZGVzYXJyb2xsbyBkZWwgbCBtaXNtbywgZGVzZGUgZWwgYW7DoWxpc2lzIGRlIHJlcXVlcmltaWVudG9zIGhhc3RhIGxhIGltcGxlbWVudGFjacOzbiBkZWwgc2lzdGVtYSB5XG5cdFx0XHRcdFx0XHRcdFx0Y2FwYWNpdGFjacOzbiBkZSB1c3Vhcmlvcy5cblx0XHRcdFx0XHRcdFx0XHRUZW5nbyBleHBlcmllbmNpYSBlbiBkaWZlcmVudGVzIHBsYXRhZm9ybWFzIGRlIGRlc2Fycm9sbG8geSBlbiBsYSBwcsOhY3RpY2EgZGUgdmFyaWFzIG1ldG9kb2xvZ8OtYXMsIGFkZW3DoXMgaGUgdHJhYmFqYWRvXG5cdFx0XHRcdFx0XHRcdFx0Z2VzdGlvbmFuZG8gZXF1aXBvcyBkZSBkZXNhcnJvbGxvXG5cdFx0XHRcdFx0XHRcdFx0byB5IGFkbWluaXN0cmFuZG8gZWwgZGVzYXJyb2xsbyB0YW50byBkZSBwcm95ZWN0b3MgY29tbyBwcm9kdWN0b3MgZGUgc29mdHdhcmUuXG5cdFx0XHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHRcdFx0XHQ8aDM+RXhwZXJpZW5jaWEgUHJvZmVzaW9uYWw8L2gzPlxuXHRcdFx0XHRcdFx0XHQ8ZGl2PlxuXHRcdFx0XHRcdFx0XHRcdDx1bD5cblx0XHRcdFx0XHRcdFx0XHRcdDxsaT5EZXNhcnJvbGxvIHdlYiwgZGVza3RvcCB5IG3Ds3ZpbC48L2xpPlxuXHRcdFx0XHRcdFx0XHRcdFx0PGxpPkRlc2Fycm9sbG8gZSBpbnRlZ3JhY2nDs24gZGUgc2lzdGVtYXM8L2xpPlxuXHRcdFx0XHRcdFx0XHRcdFx0PGxpPlNpc3RlbWFzIGRlIGluZm9ybWFjacOzbiB5IGdlc3Rpw7NuIGVtcHJlc2FyaWFsLjwvbGk+XG5cdFx0XHRcdFx0XHRcdFx0XHQ8bGk+RGlzZcOxbyBkZSBzaXN0ZW1hcyBpbmZvcm3DoXRpY29zLjwvbGk+XG5cdFx0XHRcdFx0XHRcdFx0XHQ8bGk+QWRtaW5pc3RyYWNpw7NuIGRlIGVxdWlwb3MgZGUgZGVzYXJyb2xsbyBkZSBzb2Z0d2FyZS48L2xpPlxuXHRcdFx0XHRcdFx0XHRcdFx0PGxpPkltcGxlbWVudGFjacOzbiB5IGNhcGFjaXRhY2nDs24gZGUgdXN1YXJpb3MgdGFudG8gb3BlcmF0aXZvcyBjb21vIGV4cGVydG9zLjwvbGk+XG5cdFx0XHRcdFx0XHRcdFx0PC91bD5cblx0XHRcdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdFx0XHRcdDxoMz5Gb3JtYWNpw7NuIEFjYWTDqW1pY2E8L2gzPlxuXHRcdFx0XHRcdFx0XHQ8ZGl2PlxuXHRcdFx0XHRcdFx0XHRcdExpYy4gZW4gSW5nZW5pZXLDrWEgZW4gQ2llbmNpYXMgZGUgbGEgQ29tcHV0YWNpw7NuIC0gQ3VtIExhdWRlXG5cdFx0XHRcdFx0XHRcdFx0MiwwMDUsIFVuaXZlcnNpZGFkIGRlbCBWYWxsZSBkZSBHdWF0ZW1hbGFcblx0XHRcdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0XHRcdDxici8+PGJyLz5cblx0XHRcdCAgICA8L2Rpdj5cblx0XHRcdCAgPC9kaXY+XG5cdFx0XHQ8L2Rpdj5cblx0XHQpO1xuXHR9XG59XG5cbmV4cG9ydCBkZWZhdWx0IENvbXBvbmVudChDb250ZW50KTsiLCJcbnZhciBjb250ZW50ID0gcmVxdWlyZShcIiEhLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vZnJhbWV3b3Jrcy93ZWJhcHBzL3N0YXJ0dXAvbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vZnJhbWV3b3Jrcy93ZWJhcHBzL3N0YXJ0dXAvbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2xpYi9sb2FkZXIuanMhLi9jb250ZW50LnNjc3NcIik7XG5cbmlmKHR5cGVvZiBjb250ZW50ID09PSAnc3RyaW5nJykgY29udGVudCA9IFtbbW9kdWxlLmlkLCBjb250ZW50LCAnJ11dO1xuXG52YXIgdHJhbnNmb3JtO1xudmFyIGluc2VydEludG87XG5cblxuXG52YXIgb3B0aW9ucyA9IHtcImhtclwiOnRydWV9XG5cbm9wdGlvbnMudHJhbnNmb3JtID0gdHJhbnNmb3JtXG5vcHRpb25zLmluc2VydEludG8gPSB1bmRlZmluZWQ7XG5cbnZhciB1cGRhdGUgPSByZXF1aXJlKFwiIS4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL2ZyYW1ld29ya3Mvd2ViYXBwcy9zdGFydHVwL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvbGliL2FkZFN0eWxlcy5qc1wiKShjb250ZW50LCBvcHRpb25zKTtcblxuaWYoY29udGVudC5sb2NhbHMpIG1vZHVsZS5leHBvcnRzID0gY29udGVudC5sb2NhbHM7XG5cbmlmKG1vZHVsZS5ob3QpIHtcblx0bW9kdWxlLmhvdC5hY2NlcHQoXCIhIS4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL2ZyYW1ld29ya3Mvd2ViYXBwcy9zdGFydHVwL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL2ZyYW1ld29ya3Mvd2ViYXBwcy9zdGFydHVwL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9saWIvbG9hZGVyLmpzIS4vY29udGVudC5zY3NzXCIsIGZ1bmN0aW9uKCkge1xuXHRcdHZhciBuZXdDb250ZW50ID0gcmVxdWlyZShcIiEhLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vZnJhbWV3b3Jrcy93ZWJhcHBzL3N0YXJ0dXAvbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vZnJhbWV3b3Jrcy93ZWJhcHBzL3N0YXJ0dXAvbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2xpYi9sb2FkZXIuanMhLi9jb250ZW50LnNjc3NcIik7XG5cblx0XHRpZih0eXBlb2YgbmV3Q29udGVudCA9PT0gJ3N0cmluZycpIG5ld0NvbnRlbnQgPSBbW21vZHVsZS5pZCwgbmV3Q29udGVudCwgJyddXTtcblxuXHRcdHZhciBsb2NhbHMgPSAoZnVuY3Rpb24oYSwgYikge1xuXHRcdFx0dmFyIGtleSwgaWR4ID0gMDtcblxuXHRcdFx0Zm9yKGtleSBpbiBhKSB7XG5cdFx0XHRcdGlmKCFiIHx8IGFba2V5XSAhPT0gYltrZXldKSByZXR1cm4gZmFsc2U7XG5cdFx0XHRcdGlkeCsrO1xuXHRcdFx0fVxuXG5cdFx0XHRmb3Ioa2V5IGluIGIpIGlkeC0tO1xuXG5cdFx0XHRyZXR1cm4gaWR4ID09PSAwO1xuXHRcdH0oY29udGVudC5sb2NhbHMsIG5ld0NvbnRlbnQubG9jYWxzKSk7XG5cblx0XHRpZighbG9jYWxzKSB0aHJvdyBuZXcgRXJyb3IoJ0Fib3J0aW5nIENTUyBITVIgZHVlIHRvIGNoYW5nZWQgY3NzLW1vZHVsZXMgbG9jYWxzLicpO1xuXG5cdFx0dXBkYXRlKG5ld0NvbnRlbnQpO1xuXHR9KTtcblxuXHRtb2R1bGUuaG90LmRpc3Bvc2UoZnVuY3Rpb24oKSB7IHVwZGF0ZSgpOyB9KTtcbn0iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IFZlcnNpb25MYWJlbCBmcm9tICdqbWFycm95YXZlL2NvbXBvbmVudHMvdXhpL2NvcmUvdmVyc2lvbl9sYWJlbCc7XG5pbXBvcnQgd2l0aE1vZHVsZSBmcm9tICdqbWFycm95YXZlL2NvbXBvbmVudHMvdXhpL2NvcmUvd2l0aC1tb2R1bGUnO1xuaW1wb3J0IGdyZXlfMF8wXzAgZnJvbSAnam1hcnJveWF2ZS90aGVtZXMvZ3JleS8wLjAuMC91eGkvY3YvY291cnNlcydcbmltcG9ydCBncmV5XzE5XzJfMSBmcm9tICdqbWFycm95YXZlL3RoZW1lcy9ncmV5LzE5LjIuMS91eGkvY3YvY291cnNlcydcblxuXG5jbGFzcyBDb21wb25lbnQgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuXHRjb25zdHJ1Y3Rvcihwcm9wcyl7XG5cdFx0c3VwZXIocHJvcHMpO1xuXG5cdFx0dGhpcy5pbmRleCA9IFtcblx0XHRcdHtmYW1pbHk6IFwiZ3JleVwiLCB2ZXJzaW9uOiBbMCwwLDBdLCBjb250cm9sOiBncmV5XzBfMF8wfSxcblx0XHRcdHtmYW1pbHk6IFwiZ3JleVwiLCB2ZXJzaW9uOiBbMTksMiwxXSwgY29udHJvbDogZ3JleV8xOV8yXzF9LFxuXTtcblx0fVxuICBcblx0cmVuZGVyKCl7XG5cdFx0Y29uc3QgdGl0bGUgPSBcInV4aS9jdi9jb3Vyc2VzXCI7XG5cdFx0Y29uc3QgQ29udHJvbCA9IHdpbmRvdy5fX2NvbXBvbmVudHMucmVzb2x2ZSh0aGlzLmluZGV4LCB0aXRsZSk7XG5cdFx0cmV0dXJuIChcblx0XHRcdDxkaXYgc3R5bGU9e3twb3NpdGlvbjogJ3JlbGF0aXZlJ319PlxuXHRcdFx0XHQ8VmVyc2lvbkxhYmVsIGluZGV4PXt0aGlzLmluZGV4fS8+XG5cdFx0XHRcdDxDb250cm9sIHsuLi50aGlzLnByb3BzfS8+XG5cdFx0XHQ8L2Rpdj5cblx0XHQpXG5cdH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgd2l0aE1vZHVsZShDb21wb25lbnQpOyIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcbmltcG9ydCBDb21wb25lbnQgZnJvbSAnY29yZS9jb21wb25lbnRzL2NvbXBvbmVudCc7XG5pbXBvcnQgR3JpZENvbnRhaW5lciBmcm9tICdqbWFycm95YXZlL2NvbXBvbmVudHMvdXhpL2NvcmUvZ3JpZF9jb250YWluZXInO1xuaW1wb3J0IEdyaWRJdGVtIGZyb20gJ2ptYXJyb3lhdmUvY29tcG9uZW50cy91eGkvY29yZS9ncmlkX2l0ZW0nO1xuaW1wb3J0IFN0YXJSYXRpbmdzIGZyb20gJ3JlYWN0LXN0YXItcmF0aW5ncyc7XG5pbXBvcnQgXCIuL2xhdGVzdF9jb3Vyc2VzLnNjc3NcIjtcblxuZnVuY3Rpb24gQ291cnNlKHtkYXRhfSkge1xuICByZXR1cm4gKFxuICBcdDxHcmlkSXRlbSB4cz17MTJ9IHNtPXs2fSBtZD17NH0gIGNsYXNzTmFtZT0nY291cnNlJz5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPSdoZWFkZXInPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT0ncGxhdGZvcm0nPntkYXRhLnBsYXRmb3JtfTwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT0ncmF0aW5nJz48U3RhclJhdGluZ3MgcmF0aW5nPXtkYXRhLnJhdGluZ30gc3RhclJhdGVkQ29sb3I9XCIjMjIyXCIgbnVtYmVyT2ZTdGFycz17NX0gc3RhckRpbWVuc2lvbj0nOHB4JyBzdGFyU3BhY2luZz1cIjJweFwiLz48L2Rpdj5cbiAgICAgIDwvZGl2PlxuICBcdFx0PGRpdiBjbGFzc05hbWU9J25hbWUnPntkYXRhLm5hbWV9PC9kaXY+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT0nZnJvbSc+e2RhdGEuZnJvbX08L2Rpdj5cblx0ICA8L0dyaWRJdGVtPlxuICApO1xufVxuXG5jbGFzcyBMYXRlc3RDb3Vyc2VzIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgcmVuZGVyKCkge1xuICAgIHZhciBrZXkgPSAwO1xuICBcdGNvbnN0IGRhdGEgPSB0aGlzLnByb3BzLmRhdGE7XG4gICAgcmV0dXJuIChcbiAgICAgIDxHcmlkQ29udGFpbmVyIHNwYWNpbmc9ezh9IGNsYXNzTmFtZT0nbW9kLWxhdGVzdC1jb3Vyc2VzJz5cbiAgXHRcdHtkYXRhLnNsaWNlKDAsMykubWFwKChpdGVtKT0+XG5cdFx0XHRcdDxDb3Vyc2UgZGF0YT17aXRlbX0ga2V5PXtrZXkrK30vPlxuICBcdFx0KX1cbiAgICAgIDwvR3JpZENvbnRhaW5lcj5cbiAgICApO1xuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IENvbXBvbmVudChMYXRlc3RDb3Vyc2VzKTsiLCJcbnZhciBjb250ZW50ID0gcmVxdWlyZShcIiEhLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vZnJhbWV3b3Jrcy93ZWJhcHBzL3N0YXJ0dXAvbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vZnJhbWV3b3Jrcy93ZWJhcHBzL3N0YXJ0dXAvbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2xpYi9sb2FkZXIuanMhLi9sYXRlc3RfY291cnNlcy5zY3NzXCIpO1xuXG5pZih0eXBlb2YgY29udGVudCA9PT0gJ3N0cmluZycpIGNvbnRlbnQgPSBbW21vZHVsZS5pZCwgY29udGVudCwgJyddXTtcblxudmFyIHRyYW5zZm9ybTtcbnZhciBpbnNlcnRJbnRvO1xuXG5cblxudmFyIG9wdGlvbnMgPSB7XCJobXJcIjp0cnVlfVxuXG5vcHRpb25zLnRyYW5zZm9ybSA9IHRyYW5zZm9ybVxub3B0aW9ucy5pbnNlcnRJbnRvID0gdW5kZWZpbmVkO1xuXG52YXIgdXBkYXRlID0gcmVxdWlyZShcIiEuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9mcmFtZXdvcmtzL3dlYmFwcHMvc3RhcnR1cC9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2xpYi9hZGRTdHlsZXMuanNcIikoY29udGVudCwgb3B0aW9ucyk7XG5cbmlmKGNvbnRlbnQubG9jYWxzKSBtb2R1bGUuZXhwb3J0cyA9IGNvbnRlbnQubG9jYWxzO1xuXG5pZihtb2R1bGUuaG90KSB7XG5cdG1vZHVsZS5ob3QuYWNjZXB0KFwiISEuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9mcmFtZXdvcmtzL3dlYmFwcHMvc3RhcnR1cC9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9mcmFtZXdvcmtzL3dlYmFwcHMvc3RhcnR1cC9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvbGliL2xvYWRlci5qcyEuL2xhdGVzdF9jb3Vyc2VzLnNjc3NcIiwgZnVuY3Rpb24oKSB7XG5cdFx0dmFyIG5ld0NvbnRlbnQgPSByZXF1aXJlKFwiISEuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9mcmFtZXdvcmtzL3dlYmFwcHMvc3RhcnR1cC9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9mcmFtZXdvcmtzL3dlYmFwcHMvc3RhcnR1cC9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvbGliL2xvYWRlci5qcyEuL2xhdGVzdF9jb3Vyc2VzLnNjc3NcIik7XG5cblx0XHRpZih0eXBlb2YgbmV3Q29udGVudCA9PT0gJ3N0cmluZycpIG5ld0NvbnRlbnQgPSBbW21vZHVsZS5pZCwgbmV3Q29udGVudCwgJyddXTtcblxuXHRcdHZhciBsb2NhbHMgPSAoZnVuY3Rpb24oYSwgYikge1xuXHRcdFx0dmFyIGtleSwgaWR4ID0gMDtcblxuXHRcdFx0Zm9yKGtleSBpbiBhKSB7XG5cdFx0XHRcdGlmKCFiIHx8IGFba2V5XSAhPT0gYltrZXldKSByZXR1cm4gZmFsc2U7XG5cdFx0XHRcdGlkeCsrO1xuXHRcdFx0fVxuXG5cdFx0XHRmb3Ioa2V5IGluIGIpIGlkeC0tO1xuXG5cdFx0XHRyZXR1cm4gaWR4ID09PSAwO1xuXHRcdH0oY29udGVudC5sb2NhbHMsIG5ld0NvbnRlbnQubG9jYWxzKSk7XG5cblx0XHRpZighbG9jYWxzKSB0aHJvdyBuZXcgRXJyb3IoJ0Fib3J0aW5nIENTUyBITVIgZHVlIHRvIGNoYW5nZWQgY3NzLW1vZHVsZXMgbG9jYWxzLicpO1xuXG5cdFx0dXBkYXRlKG5ld0NvbnRlbnQpO1xuXHR9KTtcblxuXHRtb2R1bGUuaG90LmRpc3Bvc2UoZnVuY3Rpb24oKSB7IHVwZGF0ZSgpOyB9KTtcbn0iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IEhpZGRlbiBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9IaWRkZW4nO1xuaW1wb3J0IHsgIEJyb3dzZXJWaWV3LCAgTW9iaWxlVmlldyB9IGZyb20gXCJyZWFjdC1kZXZpY2UtZGV0ZWN0XCI7XG5pbXBvcnQgd2l0aE1vZHVsZSBmcm9tICdqbWFycm95YXZlL2NvbXBvbmVudHMvdXhpL2NvcmUvd2l0aC1tb2R1bGUnO1xuaW1wb3J0IExHIGZyb20gXCJqbWFycm95YXZlL2NvbXBvbmVudHMvdXhpL2N2L2xheW91dC9sZy9wYWdlXCI7XG5cbmNsYXNzIFBhZ2VDb21wb25lbnQgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuXHRyZW5kZXIoKXtcblx0XHRyZXR1cm4gdGhpcy5yZW5kZXJEZWZhdWx0KCk7XG5cdH1cblxuXHRyZW5kZXJEZWZhdWx0KCl7XG5cdFx0Y29uc3QgeyBkYXRhIH0gPSB0aGlzLnByb3BzO1xuXHRcdHJldHVybiAoXG5cdFx0XHQ8ZGl2IHN0eWxlPXt7d2lkdGg6JzEwMCUnfX0+XHRcdFx0XHRcbiAgICBcdFx0XHQ8TEcgZGF0YT17ZGF0YX0vPlxuXHRcdFx0PC9kaXY+XG5cdFx0KVx0XHRcblx0fVxuXG5cdHJlbmRlck11bHRpcGxlKCl7XG5cdFx0Y29uc3QgeyBkYXRhIH0gPSB0aGlzLnByb3BzO1xuXHRcdHJldHVybiAoXG5cdFx0XHQ8ZGl2IHN0eWxlPXt7d2lkdGg6JzEwMCUnfX0+XHRcdFx0XHRcbiAgICAgICAgXHRcdDxIaWRkZW4gb25seT17WydzbScsICdtZCcsICdsZycsICd4bCddfT5cbiAgICAgICAgXHRcdFx0PExHIGRhdGE9e2RhdGF9Lz4gICAgICAgIFx0XHRcdFxuXHRcdCAgICAgICAgPC9IaWRkZW4+XG4gICAgICAgIFx0XHQ8SGlkZGVuIG9ubHk9e1sneHMnLCAnbWQnLCAnbGcnLCAneGwnXX0+XG4gICAgICAgIFx0XHRcdDxMRyBkYXRhPXtkYXRhfS8+ICAgICAgICBcdFx0XHRcblx0XHQgICAgICAgIDwvSGlkZGVuPlxuICAgICAgICBcdFx0PEhpZGRlbiBvbmx5PXtbJ3hzJywgJ3NtJ119PlxuICAgICAgICBcdFx0XHQ8TEcgZGF0YT17ZGF0YX0vPlxuXHRcdCAgICAgICAgPC9IaWRkZW4+XG5cdFx0XHQ8L2Rpdj5cblx0XHQpXG5cdH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgd2l0aE1vZHVsZShQYWdlQ29tcG9uZW50KTsiLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgTGluayB9IGZyb20gJ3JlYWN0LXJvdXRlcidcbmltcG9ydCBHcmlkQ29udGFpbmVyIGZyb20gJ2ptYXJyb3lhdmUvY29tcG9uZW50cy91eGkvY29yZS9ncmlkX2NvbnRhaW5lcic7XG5pbXBvcnQgR3JpZEl0ZW0gZnJvbSAnam1hcnJveWF2ZS9jb21wb25lbnRzL3V4aS9jb3JlL2dyaWRfaXRlbSc7XG5pbXBvcnQgSGlkZGVuIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL0hpZGRlbic7XG5pbXBvcnQgTW9kdWxlcyBmcm9tICdqbWFycm95YXZlL2NvbmYvbGF5b3V0L21vZHVsZXMnO1xuaW1wb3J0IHdpdGhNb2R1bGUgZnJvbSAnam1hcnJveWF2ZS9jb21wb25lbnRzL3V4aS9jb3JlL3dpdGgtbW9kdWxlJztcbmltcG9ydCBCbG9jayBmcm9tICdqbWFycm95YXZlL2NvbXBvbmVudHMvdXhpL2hvbWUvYmxvY2snO1xuaW1wb3J0IE1CbG9jayBmcm9tICdjb3JlL2NvbXBvbmVudHMvbW9ja3VwL2Jsb2NrJztcbmltcG9ydCBTZWN0aW9uIGZyb20gJ2NvcmUvY29tcG9uZW50cy9sYXlvdXQvc2VjdGlvbic7XG5pbXBvcnQgQ29udGVudCBmcm9tICdqbWFycm95YXZlL2NvbXBvbmVudHMvdXhpL2N2L2NvbnRlbnQnO1xuaW1wb3J0IENvdXJzZXMgZnJvbSAnam1hcnJveWF2ZS9jb21wb25lbnRzL3V4aS9jdi9jb3Vyc2VzJztcblxuY2xhc3MgUGFnZUNvbXBvbmVudCBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG5cdHJlbmRlcigpe1xuXHRcdGNvbnN0IHsgZGF0YSB9ID0gdGhpcy5wcm9wcztcblx0XHR2YXIgY291cnNlcyA9IChkYXRhICYmIGRhdGEuY291cnNlcykgPyBkYXRhLmNvdXJzZXMgOiBbXTtcblxuXHRcdHJldHVybiAoXG5cdFx0XHQ8R3JpZENvbnRhaW5lcj5cblx0XHRcdFx0PEdyaWRJdGVtPlxuXHRcdFx0XHRcdDxHcmlkQ29udGFpbmVyPlxuXHRcdFx0XHRcdFx0PEdyaWRJdGVtIHN0eWxlPXt7cGFkZGluZzogJzIwcHggMjBweCAzMHB4IDIwcHgnfX0+XG5cdFx0XHRcdFx0XHRcdDxHcmlkQ29udGFpbmVyPlxuXHRcdFx0XHRcdFx0XHRcdDxHcmlkSXRlbT5cblx0XHRcdFx0XHRcdFx0XHRcdDxoMT5hY2VyY2E8L2gxPlxuXHRcdFx0XHRcdFx0XHRcdDwvR3JpZEl0ZW0+XHRcdFx0XG5cdFx0XHRcdFx0XHRcdFx0PEdyaWRJdGVtPlxuXHRcdFx0XHRcdFx0XHRcdFx0PENvbnRlbnQvPlxuXHRcdFx0XHRcdFx0XHRcdDwvR3JpZEl0ZW0+ICBcblx0XHRcdFx0XHRcdFx0XHQ8R3JpZEl0ZW0+XHRcdFx0XHRcdFx0XHRcdFx0XG5cdFx0XHRcdFx0XHRcdFx0XHQ8Q291cnNlcyBkYXRhPXtkYXRhLmNvdXJzZXN9IGNoZWNrX2RhdGE9e2ZhbHNlfS8+XG5cdFx0XHRcdFx0XHRcdFx0PC9HcmlkSXRlbT4gIFxuXHRcdFx0XHRcdFx0XHQ8L0dyaWRDb250YWluZXI+XG5cdFx0XHRcdFx0XHQ8L0dyaWRJdGVtPlx0XHRcdFxuXHRcdFx0XHRcdDwvR3JpZENvbnRhaW5lcj5cblx0XHRcdFx0PC9HcmlkSXRlbT5cblx0XHRcdDwvR3JpZENvbnRhaW5lcj5cblx0XHQpXG5cdH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgd2l0aE1vZHVsZShQYWdlQ29tcG9uZW50KTtcblxuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBMb2FkYWJsZSBmcm9tICdyZWFjdC1sb2FkYWJsZSc7XG5pbXBvcnQgTG9hZGluZyBmcm9tICdjb3JlL2NvbXBvbmVudHMvbG9hZGluZyc7XG5pbXBvcnQgQXBwIFx0XHRmcm9tICdqbWFycm95YXZlL2NvbXBvbmVudHMvdXhpL2NvcmUvcGFnZS9hcHAnO1xuaW1wb3J0IEFwcEJvZHkgXHRmcm9tICdqbWFycm95YXZlL2NvbXBvbmVudHMvdXhpL2NvcmUvcGFnZS9ib2R5JztcblxuaW1wb3J0IEhvbWVQcm94eSBmcm9tICdqbWFycm95YXZlL2NvbXBvbmVudHMvdXhpL2N2L2xheW91dC9sYXlvdXQtcHJveHknO1xuLypcbmNvbnN0IEhvbWVQcm94eSA9IExvYWRhYmxlKHtcbiAgbG9hZGVyOiAoKSA9PiBpbXBvcnQoJ2ptYXJyb3lhdmUvY29tcG9uZW50cy91eGkvY3YvbGF5b3V0L2xheW91dC1wcm94eScpLFxuICBsb2FkaW5nOiBMb2FkaW5nLFxufSk7XG4qL1xuXG5jbGFzcyBQYWdlIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcblx0Y29uc3RydWN0b3IocHJvcHMsY29udGV4dCkge1xuXHRcdHN1cGVyKHByb3BzLGNvbnRleHQpO1xuXHRcdHRoaXMuYXBpID0gd2luZG93Ll9fYXBpO1xuXHR9XG5cblx0Y29tcG9uZW50RGlkTW91bnQoKXtcblx0fVxuXG5cdHJlbmRlcigpe1xuXHRcdGNvbnN0IHsgYXBwLCBwYWdlLCByb3V0ZXIgfSA9IHRoaXMucHJvcHM7XG5cdFx0cmV0dXJuIChcblx0XHRcdDxBcHAgcm91dGVyPXtyb3V0ZXJ9IGFwcD17YXBwfT5cblx0XHRcdFx0PEFwcEJvZHkgcGF0aD17W3t0ZXh0OiAnaG9tZScsIHJvdXRlOiAnLyd9XX0gYXBwPXthcHB9IGRhdGE9e3tob21lOiBwYWdlfX0+XG5cdFx0XHRcdFx0PEhvbWVQcm94eSBkYXRhPXtwYWdlLmRhdGF9Lz5cblx0XHRcdFx0PC9BcHBCb2R5PlxuXHRcdFx0PC9BcHA+XG5cdFx0KTtcblx0fVxufVxuXG5leHBvcnQgZGVmYXVsdCBQYWdlOyIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgRXJyb3JCb3VuZHJ5IGZyb20gJ2NvcmUvY29tcG9uZW50cy9lcnJvcic7XG5cbmNsYXNzIENvbXBvbmVudCBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG5cdHJlbmRlcigpe1xuXHRcdGNvbnN0IHRpdGxlID0gKHRoaXMucHJvcHMudGl0bGUgJiYgdGhpcy5wcm9wcy50aXRsZSAhPT0gXCJcIikgPyB0aGlzLnByb3BzLnRpdGxlIDogbnVsbDtcblx0XHRjb25zdCBjaGlsZHJlbiA9IChcImNvbnRyb2xcIiBpbiB0aGlzLnByb3BzKSA/IHRoaXMucHJvcHMuY29udHJvbCA6IHRoaXMucHJvcHMuY2hpbGRyZW47XG5cdFx0Y29uc3QgdmlzaWJsZSA9IChcImNvbnRyb2xcIiBpbiB0aGlzLnByb3BzICYmIHRoaXMucHJvcHMuY29udHJvbCA9PSBudWxsKSA/IGZhbHNlIDogdHJ1ZTtcblx0XHRjb25zdCBwYWRkaW5nVG9wID0gKFwicGFkZGluZ1RvcFwiIGluIHRoaXMucHJvcHMpID8gdGhpcy5wcm9wcy5wYWRkaW5nVG9wIDogJzdweCc7XG5cdFx0Y29uc3QgY2xlYW4gPSAoXCJjbGVhblwiIGluIHRoaXMucHJvcHMpID8gdHJ1ZSA6IGZhbHNlO1xuXHRcdHZhciBib3JkZXJCb3R0b20gPSAnMXB4IHNvbGlkICNlZWUnO1xuXG5cdFx0aWYoIXZpc2libGUpIHJldHVybiBudWxsO1xuXHRcdGlmKGNsZWFuKSByZXR1cm4gY2hpbGRyZW47XG4gXG5cdFx0dmFyIGtleSA9IDA7XHRcdFxuXHRcdHJldHVybiAoXG5cdFx0XHQ8ZGl2IGNsYXNzTmFtZT0nbW9kLWJsb2NrJyBzdHlsZT17e2JvcmRlckJvdHRvbTogYm9yZGVyQm90dG9tLCBiYWNrZ3JvdW5kQ29sb3I6ICd3aGl0ZScsIHBhZGRpbmc6ICc3cHgnLCBwYWRkaW5nVG9wOiBwYWRkaW5nVG9wfX0+XG5cdFx0XHRcdHt0aXRsZSAmJiA8aDE+e3RpdGxlfTwvaDE+fVxuXHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT0nYm9keSc+XG5cdFx0XHRcdFx0PEVycm9yQm91bmRyeSBmcm9tPXt0aXRsZX0+XG5cdFx0XHRcdFx0XHR7Y2hpbGRyZW59XG5cdFx0XHRcdFx0PC9FcnJvckJvdW5kcnk+XG5cdFx0XHRcdDwvZGl2PlxuXHRcdFx0PC9kaXY+XG5cdFx0KTtcblx0fVxufVxuXG5leHBvcnQgZGVmYXVsdCAoQ29tcG9uZW50KTsiLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5pbXBvcnQgJy4vaGVyby5zY3NzJztcblxuY2xhc3MgQ29tcG9uZW50IGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgcmVuZGVyKCkge1xuICAgIHJldHVybiAoXG4gICAgICA8ZGl2IGNsYXNzTmFtZT0nbW9kLWhlcm8nPlxuICAgICAgXHQ8aDE+Sm9zJmVhY3V0ZTsgTWlndWVsIEFycm95YXZlIE9jaG9hPC9oMT5cbiAgICAgIFx0PGgyPkNpZW5jaWFzIGRlIGxhIGNvbXB1dGFjaSZvYWN1dGU7bjwvaDI+XG4gICAgICA8L2Rpdj5cbiAgICApO1xuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IChDb21wb25lbnQpOyIsIlxudmFyIGNvbnRlbnQgPSByZXF1aXJlKFwiISEuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9mcmFtZXdvcmtzL3dlYmFwcHMvc3RhcnR1cC9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9mcmFtZXdvcmtzL3dlYmFwcHMvc3RhcnR1cC9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvbGliL2xvYWRlci5qcyEuL2hlcm8uc2Nzc1wiKTtcblxuaWYodHlwZW9mIGNvbnRlbnQgPT09ICdzdHJpbmcnKSBjb250ZW50ID0gW1ttb2R1bGUuaWQsIGNvbnRlbnQsICcnXV07XG5cbnZhciB0cmFuc2Zvcm07XG52YXIgaW5zZXJ0SW50bztcblxuXG5cbnZhciBvcHRpb25zID0ge1wiaG1yXCI6dHJ1ZX1cblxub3B0aW9ucy50cmFuc2Zvcm0gPSB0cmFuc2Zvcm1cbm9wdGlvbnMuaW5zZXJ0SW50byA9IHVuZGVmaW5lZDtcblxudmFyIHVwZGF0ZSA9IHJlcXVpcmUoXCIhLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vZnJhbWV3b3Jrcy93ZWJhcHBzL3N0YXJ0dXAvbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9saWIvYWRkU3R5bGVzLmpzXCIpKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5pZihjb250ZW50LmxvY2FscykgbW9kdWxlLmV4cG9ydHMgPSBjb250ZW50LmxvY2FscztcblxuaWYobW9kdWxlLmhvdCkge1xuXHRtb2R1bGUuaG90LmFjY2VwdChcIiEhLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vZnJhbWV3b3Jrcy93ZWJhcHBzL3N0YXJ0dXAvbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vZnJhbWV3b3Jrcy93ZWJhcHBzL3N0YXJ0dXAvbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2xpYi9sb2FkZXIuanMhLi9oZXJvLnNjc3NcIiwgZnVuY3Rpb24oKSB7XG5cdFx0dmFyIG5ld0NvbnRlbnQgPSByZXF1aXJlKFwiISEuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9mcmFtZXdvcmtzL3dlYmFwcHMvc3RhcnR1cC9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9mcmFtZXdvcmtzL3dlYmFwcHMvc3RhcnR1cC9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvbGliL2xvYWRlci5qcyEuL2hlcm8uc2Nzc1wiKTtcblxuXHRcdGlmKHR5cGVvZiBuZXdDb250ZW50ID09PSAnc3RyaW5nJykgbmV3Q29udGVudCA9IFtbbW9kdWxlLmlkLCBuZXdDb250ZW50LCAnJ11dO1xuXG5cdFx0dmFyIGxvY2FscyA9IChmdW5jdGlvbihhLCBiKSB7XG5cdFx0XHR2YXIga2V5LCBpZHggPSAwO1xuXG5cdFx0XHRmb3Ioa2V5IGluIGEpIHtcblx0XHRcdFx0aWYoIWIgfHwgYVtrZXldICE9PSBiW2tleV0pIHJldHVybiBmYWxzZTtcblx0XHRcdFx0aWR4Kys7XG5cdFx0XHR9XG5cblx0XHRcdGZvcihrZXkgaW4gYikgaWR4LS07XG5cblx0XHRcdHJldHVybiBpZHggPT09IDA7XG5cdFx0fShjb250ZW50LmxvY2FscywgbmV3Q29udGVudC5sb2NhbHMpKTtcblxuXHRcdGlmKCFsb2NhbHMpIHRocm93IG5ldyBFcnJvcignQWJvcnRpbmcgQ1NTIEhNUiBkdWUgdG8gY2hhbmdlZCBjc3MtbW9kdWxlcyBsb2NhbHMuJyk7XG5cblx0XHR1cGRhdGUobmV3Q29udGVudCk7XG5cdH0pO1xuXG5cdG1vZHVsZS5ob3QuZGlzcG9zZShmdW5jdGlvbigpIHsgdXBkYXRlKCk7IH0pO1xufSIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgSGlkZGVuIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL0hpZGRlbic7XG5pbXBvcnQgeyAgQnJvd3NlclZpZXcsICBNb2JpbGVWaWV3IH0gZnJvbSBcInJlYWN0LWRldmljZS1kZXRlY3RcIjtcbmltcG9ydCB3aXRoTW9kdWxlIGZyb20gJ2ptYXJyb3lhdmUvY29tcG9uZW50cy91eGkvY29yZS93aXRoLW1vZHVsZSc7XG5pbXBvcnQgSG9tZUxHIGZyb20gXCJqbWFycm95YXZlL2NvbXBvbmVudHMvdXhpL2hvbWUvbGF5b3V0L2xnL2hvbWVcIjtcblxuY2xhc3MgUGFnZUNvbXBvbmVudCBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG5cdHJlbmRlcigpe1xuXHRcdHJldHVybiB0aGlzLnJlbmRlckRlZmF1bHQoKTtcblx0fVxuXG5cdHJlbmRlckRlZmF1bHQoKXtcblx0XHRjb25zdCB7IGRhdGEsIHRyZW5kcyB9ID0gdGhpcy5wcm9wcztcblx0XHRyZXR1cm4gKFxuXHRcdFx0PGRpdiBzdHlsZT17e3dpZHRoOicxMDAlJ319Plx0XHRcdFx0XG4gICAgXHRcdFx0PEhvbWVMRyBkYXRhPXtkYXRhfSB0cmVuZHM9e3RyZW5kc30vPlxuXHRcdFx0PC9kaXY+XG5cdFx0KVx0XHRcblx0fVxuXG5cdHJlbmRlck11bHRpcGxlKCl7XG5cdFx0dmFyIGRhdGEgPSB0aGlzLnByb3BzLmRhdGE7XG5cdFx0cmV0dXJuIChcblx0XHRcdDxkaXYgc3R5bGU9e3t3aWR0aDonMTAwJSd9fT5cdFx0XHRcdFxuICAgICAgICBcdFx0PEhpZGRlbiBvbmx5PXtbJ3NtJywgJ21kJywgJ2xnJywgJ3hsJ119PlxuICAgICAgICBcdFx0XHRcblx0XHQgICAgICAgIDwvSGlkZGVuPlxuICAgICAgICBcdFx0PEhpZGRlbiBvbmx5PXtbJ3hzJywgJ21kJywgJ2xnJywgJ3hsJ119PlxuICAgICAgICBcdFx0XHRcblx0XHQgICAgICAgIDwvSGlkZGVuPlxuICAgICAgICBcdFx0PEhpZGRlbiBvbmx5PXtbJ3hzJywgJ3NtJ119PlxuICAgICAgICBcdFx0XHQ8SG9tZUxHIGRhdGE9e2RhdGF9Lz5cblx0XHQgICAgICAgIDwvSGlkZGVuPlxuXHRcdFx0PC9kaXY+XG5cdFx0KVxuXHR9XG59XG5cbmV4cG9ydCBkZWZhdWx0IHdpdGhNb2R1bGUoUGFnZUNvbXBvbmVudCk7IiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IExpbmsgfSBmcm9tICdyZWFjdC1yb3V0ZXInXG5pbXBvcnQgR3JpZENvbnRhaW5lciBmcm9tICdqbWFycm95YXZlL2NvbXBvbmVudHMvdXhpL2NvcmUvZ3JpZF9jb250YWluZXInO1xuaW1wb3J0IEdyaWRJdGVtIGZyb20gJ2ptYXJyb3lhdmUvY29tcG9uZW50cy91eGkvY29yZS9ncmlkX2l0ZW0nO1xuaW1wb3J0IEhpZGRlbiBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9IaWRkZW4nO1xuaW1wb3J0IE1vZHVsZXMgZnJvbSAnam1hcnJveWF2ZS9jb25mL2xheW91dC9tb2R1bGVzJztcbmltcG9ydCB3aXRoTW9kdWxlIGZyb20gJ2ptYXJyb3lhdmUvY29tcG9uZW50cy91eGkvY29yZS93aXRoLW1vZHVsZSc7XG5pbXBvcnQgQmxvY2sgZnJvbSAnam1hcnJveWF2ZS9jb21wb25lbnRzL3V4aS9ob21lL2Jsb2NrJztcbmltcG9ydCBNQmxvY2sgZnJvbSAnY29yZS9jb21wb25lbnRzL21vY2t1cC9ibG9jayc7XG5pbXBvcnQgU2VjdGlvbiBmcm9tICdjb3JlL2NvbXBvbmVudHMvbGF5b3V0L3NlY3Rpb24nO1xuaW1wb3J0IEhlcm8gZnJvbSAnam1hcnJveWF2ZS9jb21wb25lbnRzL3V4aS9ob21lL2hlcm8nO1xuaW1wb3J0IFJlY2VudCBmcm9tICdqbWFycm95YXZlL2NvbXBvbmVudHMvdXhpL2hvbWUvcmVjZW50JztcbmltcG9ydCBTb2Z0d2FyZVRyZW5kcyBmcm9tICdqbWFycm95YXZlL2NvbXBvbmVudHMvdXhpL2hvbWUvc29mdHdhcmVfdHJlbmRzJztcbmltcG9ydCBMYXRlc3RDb3Vyc2VzIGZyb20gJ2ptYXJyb3lhdmUvY29tcG9uZW50cy91eGkvY3YvbGF0ZXN0X2NvdXJzZXMnO1xuXG5jbGFzcyBQYWdlQ29tcG9uZW50IGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcblx0Z2V0TW9kdWxlcygpe1xuXHRcdHZhciBkYXRhID0gdGhpcy5wcm9wcy5kYXRhO1x0XHRcblxuXHRcdHJldHVybiBbXG5cdFx0XHR7dGl0bGU6IFwiVGVzdFwiLCBcdFx0Y29udHJvbDogKE1vZHVsZXMuVHJhbnNmZXJzKSA/IDxkaXY+dGVzdDwvZGl2PiA6IG51bGx9LFxuXHRcdF07XG5cdH1cblxuXHRyZW5kZXIoKXtcblx0XHRjb25zdCBkYXRhID0gdGhpcy5wcm9wcy5kYXRhO1x0XHRcblx0XHRjb25zdCB0cmVuZHMgPSB0aGlzLnByb3BzLnRyZW5kcztcdFx0XG5cdFx0Y29uc3QgbW9kcyA9IHRoaXMuZ2V0TW9kdWxlcygpO1xuXHRcdGNvbnN0IG1vZFRlc3QgPSBtb2RzWzBdO1xuXG5cdFx0Y29uc3QgcmVjZW50ID0gKGRhdGEhPW51bGwpID8gZGF0YS5yZWNlbnQgOiBudWxsXG5cdFx0Y29uc3QgY291cnNlcyA9IChkYXRhIT1udWxsKSA/IGRhdGEuY291cnNlcyA6IG51bGxcblx0XHRyZXR1cm4gKFxuXHRcdFx0PEdyaWRDb250YWluZXIgY2xhc3NOYW1lPSdtb2QtcGFnZSc+XG5cdFx0XHRcdDxHcmlkSXRlbT5cblx0XHRcdFx0XHQ8R3JpZENvbnRhaW5lcj5cblx0XHRcdFx0XHRcdDxHcmlkSXRlbT5cblx0XHRcdFx0XHRcdFx0PFNlY3Rpb24gY29sb3I9eyd3aGl0ZSd9PlxuXHRcdFx0XHRcdFx0XHRcdDxHcmlkQ29udGFpbmVyIHNwYWNpbmc9ezE2fT5cblx0XHRcdFx0XHRcdFx0XHRcdDxHcmlkSXRlbT5cblx0XHRcdFx0XHRcdFx0XHRcdFx0PEhlcm8vPlxuXHRcdFx0XHRcdFx0XHRcdFx0XHQ8UmVjZW50IGRhdGE9e3JlY2VudH0vPlxuXHRcdFx0XHRcdFx0XHRcdFx0PC9HcmlkSXRlbT5cblx0XHRcdFx0XHRcdFx0XHQ8L0dyaWRDb250YWluZXI+IFxuXHRcdFx0XHRcdFx0XHQ8L1NlY3Rpb24+XG5cdFx0XHRcdFx0XHQ8L0dyaWRJdGVtPiBcblx0XHRcdFx0XHRcdDxHcmlkSXRlbT5cblx0XHRcdFx0XHRcdFx0PFNlY3Rpb24gY29sb3I9eycjYzBjMGMwJ30+XG5cdFx0XHRcdFx0XHRcdFx0PGgxPkxhYnM8L2gxPlxuXHRcdFx0XHRcdFx0XHRcdDxTb2Z0d2FyZVRyZW5kcyBkYXRhPXt0cmVuZHN9Lz5cblx0XHRcdFx0XHRcdFx0PC9TZWN0aW9uPlxuXHRcdFx0XHRcdFx0PC9HcmlkSXRlbT4gIFxuXHRcdFx0XHRcdFx0PEdyaWRJdGVtPlxuXHRcdFx0XHRcdFx0XHQ8U2VjdGlvbiBjb2xvcj17J3doaXRlJ30+XG5cdFx0XHRcdFx0XHRcdFx0PGgxPmVMZWFybmluZzwvaDE+XG5cdFx0XHRcdFx0XHRcdFx0PExhdGVzdENvdXJzZXMgZGF0YT17Y291cnNlc30vPlxuXHRcdFx0XHRcdFx0XHQ8L1NlY3Rpb24+XG5cdFx0XHRcdFx0XHQ8L0dyaWRJdGVtPiAgXG5cdFx0XHRcdFx0PC9HcmlkQ29udGFpbmVyPlxuXHRcdFx0XHQ8L0dyaWRJdGVtPlxuXHRcdFx0PC9HcmlkQ29udGFpbmVyPlxuXHRcdClcblx0fVxufVxuXG5leHBvcnQgZGVmYXVsdCB3aXRoTW9kdWxlKFBhZ2VDb21wb25lbnQpO1xuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBMb2FkYWJsZSBmcm9tICdyZWFjdC1sb2FkYWJsZSc7XG5pbXBvcnQgTG9hZGluZyBmcm9tICdjb3JlL2NvbXBvbmVudHMvbG9hZGluZyc7XG5pbXBvcnQgQXBwIFx0XHRmcm9tICdqbWFycm95YXZlL2NvbXBvbmVudHMvdXhpL2NvcmUvcGFnZS9hcHAnO1xuaW1wb3J0IEFwcEJvZHkgXHRmcm9tICdqbWFycm95YXZlL2NvbXBvbmVudHMvdXhpL2NvcmUvcGFnZS9ib2R5JztcblxuXG5pbXBvcnQgSG9tZVByb3h5IGZyb20gJ2ptYXJyb3lhdmUvY29tcG9uZW50cy91eGkvaG9tZS9sYXlvdXQvaG9tZS1sYXlvdXQtcHJveHknO1xuLypcbmNvbnN0IEhvbWVQcm94eSA9IExvYWRhYmxlKHtcbiAgbG9hZGVyOiAoKSA9PiBpbXBvcnQoJ2ptYXJyb3lhdmUvY29tcG9uZW50cy91eGkvaG9tZS9sYXlvdXQvaG9tZS1sYXlvdXQtcHJveHknKSxcbiAgbG9hZGluZzogTG9hZGluZyxcbn0pO1xuKi9cblxuY2xhc3MgUGFnZSBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG5cdGNvbnN0cnVjdG9yKHByb3BzLGNvbnRleHQpIHtcblx0XHRzdXBlcihwcm9wcyxjb250ZXh0KTtcblx0XHR0aGlzLmFwaSA9IHdpbmRvdy5fX2FwaTtcblx0fVxuXG5cdGNvbXBvbmVudERpZE1vdW50KCl7XG5cdH1cblxuXHRyZW5kZXIoKXtcblx0XHRjb25zdCBhcHAgPSB0aGlzLnByb3BzLmFwcDtcblx0XHR2YXIga2V5ID0gMDtcblx0XHRyZXR1cm4gKFxuXHRcdFx0PEFwcCByb3V0ZXI9e3RoaXMucHJvcHMucm91dGVyfSBhcHA9e2FwcH0+XG5cdFx0XHRcdDxBcHBCb2R5IHBhdGg9e1t7dGV4dDogJ2hvbWUnLCByb3V0ZTogJy8nfV19IGFwcD17YXBwfSBkYXRhPXt0aGlzLnByb3BzLnBhZ2V9PlxuXHRcdFx0XHRcdDxIb21lUHJveHkgZGF0YT17dGhpcy5wcm9wcy5wYWdlLmRhdGF9IHRyZW5kcz17dGhpcy5wcm9wcy5wYWdlLnRyZW5kc30vPlxuXHRcdFx0XHQ8L0FwcEJvZHk+XG5cdFx0XHQ8L0FwcD5cblx0XHQpO1xuXHR9XG59XG5cbmV4cG9ydCBkZWZhdWx0IFBhZ2U7IiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuaW1wb3J0IENvbXBvbmVudCBmcm9tICdjb3JlL2NvbXBvbmVudHMvY29tcG9uZW50JztcbmltcG9ydCBQb3N0TGluayBmcm9tICdqbWFycm95YXZlL2NvbXBvbmVudHMvZGF0YS9wb3N0X2xpbmsnO1xuaW1wb3J0IFwiLi9yZWNlbnQuc2Nzc1wiO1xuXG5mdW5jdGlvbiBSZWNlbnRJdGVtKHtkYXRhfSl7XG5cdHJldHVybiAoXG5cdFx0PGgyPjxQb3N0TGluayBjYXRlZ29yeT17ZGF0YS5hcmVhfSBzbHVnPXtkYXRhLnNsdWd9PntkYXRhLnRpdGxlfTwvUG9zdExpbms+PC9oMj5cblx0KVxufVxuXG5jbGFzcyBSZWNlbnRJdGVtcyBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gIHJlbmRlcigpIHtcbiAgICB2YXIga2V5ID0gMDtcbiAgXHRjb25zdCBkYXRhID0gdGhpcy5wcm9wcy5kYXRhO1xuICAgIHJldHVybiAoXG4gICAgICA8ZGl2IGNsYXNzTmFtZT0nbW9kLXJlY2VudCc+XG4gICAgICBcdDxoMT5SZWNlbnQ8L2gxPlxuICAgIFx0XHR7ZGF0YS5tYXAoKGl0ZW0pPT5cbiAgICBcdFx0XHQ8UmVjZW50SXRlbSBkYXRhPXtpdGVtfSBrZXk9e2tleSsrfS8+XG4gICAgXHRcdCl9XG4gICAgICA8L2Rpdj5cbiAgICApO1xuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IENvbXBvbmVudChSZWNlbnRJdGVtcyk7IiwiXG52YXIgY29udGVudCA9IHJlcXVpcmUoXCIhIS4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL2ZyYW1ld29ya3Mvd2ViYXBwcy9zdGFydHVwL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL2ZyYW1ld29ya3Mvd2ViYXBwcy9zdGFydHVwL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9saWIvbG9hZGVyLmpzIS4vcmVjZW50LnNjc3NcIik7XG5cbmlmKHR5cGVvZiBjb250ZW50ID09PSAnc3RyaW5nJykgY29udGVudCA9IFtbbW9kdWxlLmlkLCBjb250ZW50LCAnJ11dO1xuXG52YXIgdHJhbnNmb3JtO1xudmFyIGluc2VydEludG87XG5cblxuXG52YXIgb3B0aW9ucyA9IHtcImhtclwiOnRydWV9XG5cbm9wdGlvbnMudHJhbnNmb3JtID0gdHJhbnNmb3JtXG5vcHRpb25zLmluc2VydEludG8gPSB1bmRlZmluZWQ7XG5cbnZhciB1cGRhdGUgPSByZXF1aXJlKFwiIS4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL2ZyYW1ld29ya3Mvd2ViYXBwcy9zdGFydHVwL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvbGliL2FkZFN0eWxlcy5qc1wiKShjb250ZW50LCBvcHRpb25zKTtcblxuaWYoY29udGVudC5sb2NhbHMpIG1vZHVsZS5leHBvcnRzID0gY29udGVudC5sb2NhbHM7XG5cbmlmKG1vZHVsZS5ob3QpIHtcblx0bW9kdWxlLmhvdC5hY2NlcHQoXCIhIS4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL2ZyYW1ld29ya3Mvd2ViYXBwcy9zdGFydHVwL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL2ZyYW1ld29ya3Mvd2ViYXBwcy9zdGFydHVwL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9saWIvbG9hZGVyLmpzIS4vcmVjZW50LnNjc3NcIiwgZnVuY3Rpb24oKSB7XG5cdFx0dmFyIG5ld0NvbnRlbnQgPSByZXF1aXJlKFwiISEuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9mcmFtZXdvcmtzL3dlYmFwcHMvc3RhcnR1cC9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9mcmFtZXdvcmtzL3dlYmFwcHMvc3RhcnR1cC9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvbGliL2xvYWRlci5qcyEuL3JlY2VudC5zY3NzXCIpO1xuXG5cdFx0aWYodHlwZW9mIG5ld0NvbnRlbnQgPT09ICdzdHJpbmcnKSBuZXdDb250ZW50ID0gW1ttb2R1bGUuaWQsIG5ld0NvbnRlbnQsICcnXV07XG5cblx0XHR2YXIgbG9jYWxzID0gKGZ1bmN0aW9uKGEsIGIpIHtcblx0XHRcdHZhciBrZXksIGlkeCA9IDA7XG5cblx0XHRcdGZvcihrZXkgaW4gYSkge1xuXHRcdFx0XHRpZighYiB8fCBhW2tleV0gIT09IGJba2V5XSkgcmV0dXJuIGZhbHNlO1xuXHRcdFx0XHRpZHgrKztcblx0XHRcdH1cblxuXHRcdFx0Zm9yKGtleSBpbiBiKSBpZHgtLTtcblxuXHRcdFx0cmV0dXJuIGlkeCA9PT0gMDtcblx0XHR9KGNvbnRlbnQubG9jYWxzLCBuZXdDb250ZW50LmxvY2FscykpO1xuXG5cdFx0aWYoIWxvY2FscykgdGhyb3cgbmV3IEVycm9yKCdBYm9ydGluZyBDU1MgSE1SIGR1ZSB0byBjaGFuZ2VkIGNzcy1tb2R1bGVzIGxvY2Fscy4nKTtcblxuXHRcdHVwZGF0ZShuZXdDb250ZW50KTtcblx0fSk7XG5cblx0bW9kdWxlLmhvdC5kaXNwb3NlKGZ1bmN0aW9uKCkgeyB1cGRhdGUoKTsgfSk7XG59IiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuaW1wb3J0IEdyaWRDb250YWluZXIgZnJvbSAnam1hcnJveWF2ZS9jb21wb25lbnRzL3V4aS9jb3JlL2dyaWRfY29udGFpbmVyJztcbmltcG9ydCBHcmlkSXRlbSBmcm9tICdqbWFycm95YXZlL2NvbXBvbmVudHMvdXhpL2NvcmUvZ3JpZF9pdGVtJztcbmltcG9ydCBMaW5rIGZyb20gJ2NvcmUvdWkvbGluaydcbmltcG9ydCBDb21wb25lbnQgZnJvbSAnY29yZS9jb21wb25lbnRzL2NvbXBvbmVudCc7XG5pbXBvcnQgQ29yZURhdGUgZnJvbSAnY29yZS9jb21wb25lbnRzL2RhdGUnO1xuaW1wb3J0IERhdGEgZnJvbSAnY29yZS91aS9kYXRhJztcbmltcG9ydCBMb2FkaW5nIGZyb20gJ2NvcmUvdWkvbG9hZGluZyc7XG5cbmZ1bmN0aW9uIFNvZnR3YXJlVHJlbmQoe2RhdGF9KSB7XG4gIGlmKCFkYXRhKSByZXR1cm4gPExvYWRpbmcvPjtcblxuICBkYXRhID0gZGF0YS5zbGljZSgwLDEwKTtcbiAgICByZXR1cm4gKFxuICAgICAgPERhdGEgaGVhZGVycz17ZmFsc2V9IGhpZGRlbj17W1wiaWRcIixcInRvdGFsXCIsXCJ0eXBlXCIsIFwiaWNvblwiXX0gZGF0YT17ZGF0YX0vPlxuICAgICk7XG59XG5cbmNsYXNzIFNvZnR3YXJlVHJlbmRDb21wb25lbnQgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICByZW5kZXIoKSB7XG4gICAgdmFyIHsgZGF0YSB9ID0gdGhpcy5wcm9wcztcbiAgICB2YXIga2V5ID0gMDtcbiAgICBcbiAgICB2YXIgdHJlbmRzID0gd2luZG93Ll9fYXBpLmdldERhdGEoWydpbmZvJywgJ3RyZW5kcyddKTtcbiAgICBjb25zb2xlLmxvZyh0cmVuZHMpO1xuICAgIFxuICAgIGNvbnN0IGl0ZW1zID0gW3t0aXRsZTogJ09TJywga2V5OiAnb3MnfSx7dGl0bGU6ICdMZW5ndWFqZXMnLCBrZXk6ICdsYW5nJ30se3RpdGxlOiAnTGlicmVyaWFzJywga2V5OiAnZncnfSx7dGl0bGU6ICdTZXJ2aWNpb3MnLCBrZXk6ICdzZXJ2aWNlcyd9XTtcbiAgICBjb25zdCBsYXN0VXBkYXRlID0gXCJcIlxuICAgIHJldHVybiAoXG4gICAgICA8R3JpZENvbnRhaW5lciBzcGFjaW5nPXs4fT4gICAgICAgXG4gICAgICAgIDxHcmlkSXRlbSB4cz17MTJ9PlxuICAgICAgICAgIDxoMj5Tb2Z0d2FyZSBlbiBTdGFja292ZXJmbG93PC9oMj5cbiAgICAgICAgICA8ZGl2PnRlbmRlbmNpYXMgZW4gdXNvIGRlIHNvZnR3YXJlIHBhcmEgZGVzYXJyb2xsbyBvYnRlbmlkbyBkZSBsYXMgcHJlZ3VudGFzIGRlIGxhIGNvbXVuaWRhZCBkZSBTdGFja292ZXJmbG93LiA8TGluayB0bz17J2xhYnMvc3RhY2tvdmVyZmxvdyd9PnZlciBtw6FzPC9MaW5rPjwvZGl2PlxuICAgICAgICA8L0dyaWRJdGVtPlxuICAgICAgICB7aXRlbXMubWFwKGxpc3QgPT5cbiAgICAgICAgICA8R3JpZEl0ZW0geHM9ezEyfSBzbT17Nn0gbWQ9ezN9IGtleT17a2V5Kyt9PlxuICAgICAgICAgICAgPGgxPntsaXN0LnRpdGxlfTwvaDE+XG4gICAgICAgICAgICA8U29mdHdhcmVUcmVuZCBkYXRhPXtkYXRhW2xpc3Qua2V5XX0vPlxuICAgICAgICAgIDwvR3JpZEl0ZW0+XG4gICAgICAgICl9XG4gICAgICAgIDxHcmlkSXRlbSB4cz17MTJ9PlxuICAgICAgICAgIDxkaXY+QWN0dWFsaXphZG86IDxDb3JlRGF0ZSB2YWx1ZT17bGFzdFVwZGF0ZX0gbGFuZz17J2VzJ30vPjwvZGl2PlxuICAgICAgICA8L0dyaWRJdGVtPlxuICAgICAgPC9HcmlkQ29udGFpbmVyPiAgICAgICBcbiAgICApO1xuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IENvbXBvbmVudChTb2Z0d2FyZVRyZW5kQ29tcG9uZW50KTsgIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBDb21wb25lbnQgZnJvbSAnY29yZS9jb21wb25lbnRzL2NvbXBvbmVudCc7XG5pbXBvcnQgUG9zdExpbmsgZnJvbSBcImptYXJyb3lhdmUvY29tcG9uZW50cy9kYXRhL3Bvc3RfbGlua1wiO1xuaW1wb3J0IEdyaWRDb250YWluZXIgZnJvbSAnam1hcnJveWF2ZS9jb21wb25lbnRzL3V4aS9jb3JlL2dyaWRfY29udGFpbmVyJztcbmltcG9ydCBHcmlkSXRlbSBmcm9tICdqbWFycm95YXZlL2NvbXBvbmVudHMvdXhpL2NvcmUvZ3JpZF9pdGVtJztcbmltcG9ydCBEYXRlIGZyb20gJ2NvcmUvY29tcG9uZW50cy9kYXRlJztcblxuaW1wb3J0ICcuL2NvbnRlbnQuc2Nzcyc7XG5cbmNsYXNzIENvbnRlbnQgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuXHRjb25zdHJ1Y3Rvcihwcm9wcyxjb250ZXh0KSB7XG5cdFx0c3VwZXIocHJvcHMsY29udGV4dCk7XG5cdFx0dGhpcy5hcGkgPSB3aW5kb3cuX19hcGk7XG5cdFx0dGhpcy5zdGF0ZSA9IHtcblx0XHRcdGNhdGVnb3J5OiAnRGV2ICYgQnVpbGQnLFxuXHRcdFx0cGFnZTogMSxcblx0XHR9XG5cblx0XHR0aGlzLml0ZW1zUGVyUGFnZSA9IDI1O1xuXHR9XG5cblx0Y29tcG9uZW50RGlkTW91bnQoKXtcblx0XHR0aGlzLmZldGNoRGF0YSh0aGlzLnN0YXRlLmNhdGVnb3J5KTtcblx0fVxuXG5cdGZldGNoRGF0YShjYXQpe1xuXHRcdHRoaXMuYXBpLmdldEtCQW5kcm9pZChjYXQpO1x0XHRcblx0fVxuXG5cdHNldENhdGVnb3J5KGNhdCl7XG5cdFx0dGhpcy5zZXRTdGF0ZSh7Y2F0ZWdvcnk6IGNhdCwgcGFnZTogMX0pO1xuXHRcdHRoaXMuZmV0Y2hEYXRhKGNhdCk7XG5cdH1cblxuXHRzZXRQYWdlKGkpe1xuXHRcdHRoaXMuc2V0U3RhdGUoe3BhZ2U6IGl9KTtcblx0XHR3aW5kb3cuc2Nyb2xsVG8oMCwwKTtcblx0fVxuXG5cdHJlbmRlcigpe1xuXHRcdHZhciBkYXRhID0gKHRoaXMucHJvcHMuZGF0YS5yZWNvcmRzKSA/IHRoaXMucHJvcHMuZGF0YS5yZWNvcmRzLnJlY29yZHMgOiBbXTtcblx0XHRjb25zdCBjYXRlZ29yaWVzID0gKHRoaXMucHJvcHMuZGF0YS5jYXRlZ29yaWVzKSA/IHRoaXMucHJvcHMuZGF0YS5jYXRlZ29yaWVzLnJlY29yZHMgOiBbXTtcblx0XHR2YXIga2V5ID0gMDtcblxuXHRcdGNvbnN0IHRvdFBhZ2VzID0gTWF0aC5jZWlsKGRhdGEubGVuZ3RoIC8gdGhpcy5pdGVtc1BlclBhZ2UpO1xuXHRcdHZhciBwYWdlcyA9IFtdOyBmb3IodmFyIGkgPSAxOyBpPD10b3RQYWdlcztpKyspe3BhZ2VzLnB1c2goaSl9XG5cblx0XHRjb25zdCBwYWdlRGF0YSA9IGRhdGEuc2xpY2UoKHRoaXMuaXRlbXNQZXJQYWdlICogKHRoaXMuc3RhdGUucGFnZSAtIDEpKSwgKHRoaXMuaXRlbXNQZXJQYWdlICogdGhpcy5zdGF0ZS5wYWdlKSk7XG5cblx0XHRyZXR1cm4gKFxuXHRcdFx0PEdyaWRDb250YWluZXIgY2xhc3NOYW1lPSdtb2Qta2ItYW5kcm9pZCcgcmVmPXsgZWwgPT4gdGhpcy5jb250YWluZXIgPSBlbH0+XG5cdFx0XHRcdDxHcmlkSXRlbT5cdFx0XHRcdFxuXHRcdFx0XHRcdDxkaXY+PERhdGUgdmFsdWU9eycwMS8wNS8yMDE4J30gY2xhc3NOYW1lPSdkYXRlJy8+PC9kaXY+XG5cdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9J2V4Y2VycHQnPlxuXHRcdFx0XHRcdFx0UmVjb3BpbGFjacOzbiBkZSBsaWJyZXLDrWFzIHBhcmEgdXRpbGl6YXIgZW4gQW5kcm9pZCA8YSBocmVmPXt0aGlzLmFwaS5kYXRhX2tiX2FuZHJvaWR9PmRlc2NhcmdhcjwvYT5cblx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0PC9HcmlkSXRlbT5cblx0XHRcdFx0PEdyaWRJdGVtPlxuXHRcdFx0XHRcdDxici8+XG5cdFx0XHRcdFx0PGgxPkNhdGVnb3ImaWFjdXRlO2FzPC9oMT5cblx0XHRcdFx0XHQ8R3JpZENvbnRhaW5lciBjbGFzc05hbWU9J2NhdGVnb3JpZXMnIGRpcmVjdGlvbj0ncm93Jz5cblx0XHRcdFx0XHRcdHtjYXRlZ29yaWVzLm1hcCgoaXRlbSk9PlxuXHRcdFx0XHRcdFx0XHQ8R3JpZEl0ZW0ga2V5PXtrZXkrK30geHM9ezR9IG1kPXsyfSBsZz17MX0+XG5cdFx0XHRcdFx0XHRcdCBcdDxzcGFuIGNsYXNzTmFtZT17YGNhdGVnb3J5ICR7KGl0ZW0gPT0gdGhpcy5zdGF0ZS5jYXRlZ29yeSkgPyBcImFjdGl2ZVwiIDogXCJcIn1gfSBvbkNsaWNrPXt0aGlzLnNldENhdGVnb3J5LmJpbmQodGhpcywgaXRlbSl9PntpdGVtfTwvc3Bhbj5cblx0XHRcdFx0XHRcdFx0PC9HcmlkSXRlbT5cblx0XHRcdFx0XHRcdCl9XG5cdFx0XHRcdFx0PC9HcmlkQ29udGFpbmVyPlxuXHRcdFx0XHRcdDxoci8+XG5cdFx0XHRcdDwvR3JpZEl0ZW0+XG5cdFx0XHRcdDxHcmlkSXRlbT5cblx0XHRcdFx0XHR7cGFnZURhdGEubGVuZ3RoID09IDAgJiYgXG5cdFx0XHRcdFx0XHQ8ZGl2PkxvYWRpbmc8L2Rpdj5cblx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0e3BhZ2VEYXRhLmxlbmd0aCA+IDAgJiYgcGFnZURhdGEubWFwKChpdGVtKT0+XG5cdFx0XHRcdFx0XHQ8ZGl2IGtleT17a2V5Kyt9IGNsYXNzTmFtZT0naXRlbSc+XG5cdFx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPSdzdWJjYXQnPntpdGVtLmNhdDJ9PC9kaXY+XG5cdFx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPSd0aXRsZSc+e2l0ZW0udGl0bGV9IDxzcGFuIGNsYXNzTmFtZT0ncmVmcyc+W3JlZnM6e2l0ZW0uY291bnR9XTwvc3Bhbj48L2Rpdj5cblx0XHRcdFx0XHRcdFx0eyhpdGVtLmRlc2MgJiYgaXRlbS5kZXNjICE9IFwiXCIpICYmIDxkaXYgY2xhc3NOYW1lPSdkZXNjcmlwdGlvbic+e2l0ZW0uZGVzY308L2Rpdj59IFxuXHRcdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT0nbGlua3MnPlxuXHRcdFx0XHRcdFx0XHRcdDxzcGFuIGNsYXNzTmFtZT0nbGluayc+PGEgaHJlZj17aXRlbS5yZXBvfT5naXRodWI8L2E+IDwvc3Bhbj5cblx0XHRcdFx0XHRcdFx0XHR7KGl0ZW0uaG9tZXBhZ2UgJiYgaXRlbS5ob21lcGFnZSAhPSBcIlwiKSAmJiA8c3BhbiBjbGFzc05hbWU9J2xpbmsnPjxhIGhyZWY9e2l0ZW0uaG9tZXBhZ2V9PmhvbWVwYWdlPC9hPiA8L3NwYW4+fSBcblx0XHRcdFx0XHRcdFx0XHR7KGl0ZW0uZG9jcyAmJiBpdGVtLmRvY3MgIT0gXCJcIikgJiYgPHNwYW4gY2xhc3NOYW1lPSdsaW5rJz48YSBocmVmPXtpdGVtLmRvY3N9PmRvY3M8L2E+IDwvc3Bhbj59IFxuXHRcdFx0XHRcdFx0XHRcdHsoaXRlbS5kZW1vICYmIGl0ZW0uZGVtbyAhPSBcIlwiKSAmJiA8c3BhbiBjbGFzc05hbWU9J2xpbmsnPjxhIGhyZWY9e2l0ZW0uZGVtb30+ZGVtbzwvYT4gPC9zcGFuPn0gXG5cdFx0XHRcdFx0XHRcdFx0eyhpdGVtLm1hc3RlcnBpZWNlICYmIGl0ZW0ubWFzdGVycGllY2UgIT0gXCJcIikgJiYgPHNwYW4gY2xhc3NOYW1lPSdsaW5rJz48YSBocmVmPXtpdGVtLm1hc3RlcnBpZWNlfT5tYXN0ZXIgcGllY2U8L2E+IDwvc3Bhbj59IFxuXHRcdFx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9J2xpbmtzJz5cblx0XHRcdFx0XHRcdFx0XHR7KGl0ZW0ubGljZW5zZSAmJiBpdGVtLmxpY2Vuc2UgIT0gXCJcIikgJiYgPHNwYW4gY2xhc3NOYW1lPSdzdWJjYXQnPmxpY2Vuc2U6IHtpdGVtLmxpY2Vuc2V9PC9zcGFuPn0gXG5cdFx0XHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT0naW1hZ2VzJz5cblx0XHRcdFx0XHRcdFx0e2l0ZW0uaW1ncy5tYXAoKGl0ZW1JbWcpPT5cblx0XHRcdFx0XHRcdFx0XHQ8aW1nIGtleT17a2V5Kyt9IGhlaWdodD1cIjIwMHB4XCIgc3JjPXtpdGVtSW1nfS8+XG5cdFx0XHRcdFx0XHRcdCl9XG5cdFx0XHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdFx0KX1cblx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT0ncGFnZV9pbmRleCc+XG5cdFx0XHRcdFx0e3BhZ2VzLm1hcCgoaXRlbSk9PlxuXHRcdFx0XHRcdFx0PHNwYW4ga2V5PXtrZXkrK30gb25DbGljaz17dGhpcy5zZXRQYWdlLmJpbmQodGhpcywgaXRlbSl9IGNsYXNzTmFtZT17YHBhZ2UgJHsodGhpcy5zdGF0ZS5wYWdlID09IGl0ZW0pPyAnYWN0aXZlJyA6ICcnfWB9PntpdGVtfSA8L3NwYW4+XG5cdFx0XHRcdFx0KX1cblx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0PC9HcmlkSXRlbT5cblx0XHRcdFx0PEdyaWRJdGVtIGNsYXNzTmFtZT0nZm9vdGVyJz5cblx0XHRcdFx0XHQ8aHIvPlxuXHRcdFx0XHRcdGltcG9ydGFkb3MgZGVzZGU6XG5cdFx0XHRcdFx0PHVsPlxuXHRcdFx0XHRcdCAgPGxpPjxhIGhyZWY9XCJodHRwczovL2dpdGh1Yi5jb20vd2FzYWJlZWYvYXdlc29tZS1hbmRyb2lkLXVpXCI+d2FzYWJlZWYvYXdlc29tZS1hbmRyb2lkLXVpPC9hPjwvbGk+XG5cdFx0XHRcdFx0ICA8bGk+PGEgaHJlZj1cImh0dHBzOi8vZ2l0aHViLmNvbS93YXNhYmVlZi9hd2Vzb21lLWFuZHJvaWQtbGlicmFyaWVzXCI+d2FzYWJlZWYvYXdlc29tZS1hbmRyb2lkLWxpYnJhcmllczwvYT48L2xpPlxuXHRcdFx0XHRcdCAgPGxpPjxhIGhyZWY9XCJodHRwczovL2dpdGh1Yi5jb20vVHJpbmVhL2FuZHJvaWQtb3Blbi1wcm9qZWN0XCI+VHJpbmVhL2FuZHJvaWQtb3Blbi1wcm9qZWN0PC9hPjwvbGk+XG5cdFx0XHRcdFx0ICA8bGk+PGEgaHJlZj1cImh0dHBzOi8vZ2l0aHViLmNvbS9QaGlsSmF5L0FuZHJvaWRFbGVtZW50YWxzXCI+UGhpbEpheS9BbmRyb2lkRWxlbWVudGFsczwvYT48L2xpPlxuXHRcdFx0XHRcdCAgPGxpPjxhIGhyZWY9XCJodHRwczovL2dpdGh1Yi5jb20vdGhhbmh0b2FuMTE5Ni9hd2Vzb21lLWFuZHJvaWQtdWlcIj50aGFuaHRvYW4xMTk2L2F3ZXNvbWUtYW5kcm9pZC11aTwvYT48L2xpPlxuXHRcdFx0XHRcdCAgPGxpPjxhIGhyZWY9XCJodHRwczovL2dpdGh1Yi5jb20vdGhhbmh0b2FuMTE5Ni9hd2Vzb21lLWFuZHJvaWRcIj50aGFuaHRvYW4xMTk2L2F3ZXNvbWUtYW5kcm9pZDwvYT4qPC9saT5cblx0XHRcdFx0XHQgIDxsaT48YSBocmVmPVwiaHR0cHM6Ly9naXRodWIuY29tL3Nub3dkcmVhbS9hd2Vzb21lLWFuZHJvaWRcIj5zbm93ZHJlYW0vYXdlc29tZS1hbmRyb2lkPC9hPio8L2xpPlxuXHRcdFx0XHRcdCAgPGxpPjxhIGhyZWY9XCJodHRwczovL2dpdGh1Yi5jb20vdGhhbmh0b2FuMTE5Ni9hd2Vzb21lLWFuZHJvaWQtbGlicmFyaWVzXCI+dGhhbmh0b2FuMTE5Ni9hd2Vzb21lLWFuZHJvaWQtbGlicmFyaWVzPC9hPio8L2xpPlxuXHRcdFx0XHRcdCAgPGxpPjxhIGhyZWY9XCJodHRwczovL2dpdGh1Yi5jb20vbGlnaHRTa3kvQXdlc29tZS1NYXRlcmlhbERlc2lnblwiPmxpZ2h0U2t5L0F3ZXNvbWUtTWF0ZXJpYWxEZXNpZ248L2E+KjwvbGk+XG5cdFx0XHRcdFx0ICA8bGk+PGEgaHJlZj1cImh0dHBzOi8vZ2l0aHViLmNvbS9jb2RlcGF0aC9hbmRyb2lkX2d1aWRlcy93aWtpL011c3QtSGF2ZS1MaWJyYXJpZXNcIj5jb2RlcGF0aC9hbmRyb2lkX2d1aWRlczwvYT4qPC9saT5cblx0XHRcdFx0XHQgIDxsaT48YSBocmVmPVwiaHR0cHM6Ly9naXRodWIuY29tL2xpZ2h0U2t5L0F3ZXNvbWUtTWF0ZXJpYWxEZXNpZ25cIj5saWdodFNreS9Bd2Vzb21lLU1hdGVyaWFsRGVzaWduPC9hPio8L2xpPlxuXHRcdFx0XHRcdDwvdWw+XG5cdFx0XHRcdFx0PC9HcmlkSXRlbT5cblx0XHRcdDwvR3JpZENvbnRhaW5lcj5cblx0KTtcblx0fVxufVxuXG5leHBvcnQgZGVmYXVsdCBDb21wb25lbnQoQ29udGVudCk7IiwiXG52YXIgY29udGVudCA9IHJlcXVpcmUoXCIhIS4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL2ZyYW1ld29ya3Mvd2ViYXBwcy9zdGFydHVwL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL2ZyYW1ld29ya3Mvd2ViYXBwcy9zdGFydHVwL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9saWIvbG9hZGVyLmpzIS4vY29udGVudC5zY3NzXCIpO1xuXG5pZih0eXBlb2YgY29udGVudCA9PT0gJ3N0cmluZycpIGNvbnRlbnQgPSBbW21vZHVsZS5pZCwgY29udGVudCwgJyddXTtcblxudmFyIHRyYW5zZm9ybTtcbnZhciBpbnNlcnRJbnRvO1xuXG5cblxudmFyIG9wdGlvbnMgPSB7XCJobXJcIjp0cnVlfVxuXG5vcHRpb25zLnRyYW5zZm9ybSA9IHRyYW5zZm9ybVxub3B0aW9ucy5pbnNlcnRJbnRvID0gdW5kZWZpbmVkO1xuXG52YXIgdXBkYXRlID0gcmVxdWlyZShcIiEuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9mcmFtZXdvcmtzL3dlYmFwcHMvc3RhcnR1cC9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2xpYi9hZGRTdHlsZXMuanNcIikoY29udGVudCwgb3B0aW9ucyk7XG5cbmlmKGNvbnRlbnQubG9jYWxzKSBtb2R1bGUuZXhwb3J0cyA9IGNvbnRlbnQubG9jYWxzO1xuXG5pZihtb2R1bGUuaG90KSB7XG5cdG1vZHVsZS5ob3QuYWNjZXB0KFwiISEuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9mcmFtZXdvcmtzL3dlYmFwcHMvc3RhcnR1cC9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9mcmFtZXdvcmtzL3dlYmFwcHMvc3RhcnR1cC9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvbGliL2xvYWRlci5qcyEuL2NvbnRlbnQuc2Nzc1wiLCBmdW5jdGlvbigpIHtcblx0XHR2YXIgbmV3Q29udGVudCA9IHJlcXVpcmUoXCIhIS4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL2ZyYW1ld29ya3Mvd2ViYXBwcy9zdGFydHVwL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL2ZyYW1ld29ya3Mvd2ViYXBwcy9zdGFydHVwL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9saWIvbG9hZGVyLmpzIS4vY29udGVudC5zY3NzXCIpO1xuXG5cdFx0aWYodHlwZW9mIG5ld0NvbnRlbnQgPT09ICdzdHJpbmcnKSBuZXdDb250ZW50ID0gW1ttb2R1bGUuaWQsIG5ld0NvbnRlbnQsICcnXV07XG5cblx0XHR2YXIgbG9jYWxzID0gKGZ1bmN0aW9uKGEsIGIpIHtcblx0XHRcdHZhciBrZXksIGlkeCA9IDA7XG5cblx0XHRcdGZvcihrZXkgaW4gYSkge1xuXHRcdFx0XHRpZighYiB8fCBhW2tleV0gIT09IGJba2V5XSkgcmV0dXJuIGZhbHNlO1xuXHRcdFx0XHRpZHgrKztcblx0XHRcdH1cblxuXHRcdFx0Zm9yKGtleSBpbiBiKSBpZHgtLTtcblxuXHRcdFx0cmV0dXJuIGlkeCA9PT0gMDtcblx0XHR9KGNvbnRlbnQubG9jYWxzLCBuZXdDb250ZW50LmxvY2FscykpO1xuXG5cdFx0aWYoIWxvY2FscykgdGhyb3cgbmV3IEVycm9yKCdBYm9ydGluZyBDU1MgSE1SIGR1ZSB0byBjaGFuZ2VkIGNzcy1tb2R1bGVzIGxvY2Fscy4nKTtcblxuXHRcdHVwZGF0ZShuZXdDb250ZW50KTtcblx0fSk7XG5cblx0bW9kdWxlLmhvdC5kaXNwb3NlKGZ1bmN0aW9uKCkgeyB1cGRhdGUoKTsgfSk7XG59IiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBIaWRkZW4gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvSGlkZGVuJztcbmltcG9ydCB7ICBCcm93c2VyVmlldywgIE1vYmlsZVZpZXcgfSBmcm9tIFwicmVhY3QtZGV2aWNlLWRldGVjdFwiO1xuaW1wb3J0IHdpdGhNb2R1bGUgZnJvbSAnam1hcnJveWF2ZS9jb21wb25lbnRzL3V4aS9jb3JlL3dpdGgtbW9kdWxlJztcbmltcG9ydCBMRyBmcm9tIFwiam1hcnJveWF2ZS9jb21wb25lbnRzL3V4aS9rYi9hbmRyb2lkL2xheW91dC9sZy9wYWdlXCI7XG5cbmNsYXNzIFBhZ2VDb21wb25lbnQgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuXHRyZW5kZXIoKXtcblx0XHRyZXR1cm4gdGhpcy5yZW5kZXJEZWZhdWx0KCk7XG5cdH1cblxuXHRyZW5kZXJEZWZhdWx0KCl7XG5cdFx0dmFyIGRhdGEgPSB0aGlzLnByb3BzLmRhdGE7XG5cdFx0cmV0dXJuIChcblx0XHRcdDxkaXYgc3R5bGU9e3t3aWR0aDonMTAwJSd9fT5cdFx0XHRcdFxuICAgIFx0XHRcdDxMRyBkYXRhPXtkYXRhfS8+XG5cdFx0XHQ8L2Rpdj5cblx0XHQpXHRcdFxuXHR9XG59XG5cbmV4cG9ydCBkZWZhdWx0IHdpdGhNb2R1bGUoUGFnZUNvbXBvbmVudCk7IiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IExpbmsgfSBmcm9tICdyZWFjdC1yb3V0ZXInXG5pbXBvcnQgR3JpZENvbnRhaW5lciBmcm9tICdqbWFycm95YXZlL2NvbXBvbmVudHMvdXhpL2NvcmUvZ3JpZF9jb250YWluZXInO1xuaW1wb3J0IEdyaWRJdGVtIGZyb20gJ2ptYXJyb3lhdmUvY29tcG9uZW50cy91eGkvY29yZS9ncmlkX2l0ZW0nO1xuaW1wb3J0IEhpZGRlbiBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9IaWRkZW4nO1xuaW1wb3J0IE1vZHVsZXMgZnJvbSAnam1hcnJveWF2ZS9jb25mL2xheW91dC9tb2R1bGVzJztcbmltcG9ydCB3aXRoTW9kdWxlIGZyb20gJ2ptYXJyb3lhdmUvY29tcG9uZW50cy91eGkvY29yZS93aXRoLW1vZHVsZSc7XG5pbXBvcnQgQmxvY2sgZnJvbSAnam1hcnJveWF2ZS9jb21wb25lbnRzL3V4aS9ob21lL2Jsb2NrJztcbmltcG9ydCBNQmxvY2sgZnJvbSAnY29yZS9jb21wb25lbnRzL21vY2t1cC9ibG9jayc7XG5pbXBvcnQgU2VjdGlvbiBmcm9tICdjb3JlL2NvbXBvbmVudHMvbGF5b3V0L3NlY3Rpb24nO1xuaW1wb3J0IEJsb2dMaW5rIGZyb20gXCJqbWFycm95YXZlL2NvbXBvbmVudHMvZGF0YS9ibG9nX2xpbmtcIjtcbmltcG9ydCBDb250ZW50IGZyb20gJ2ptYXJyb3lhdmUvY29tcG9uZW50cy91eGkva2IvYW5kcm9pZC9jb250ZW50JztcblxuY2xhc3MgUGFnZUNvbXBvbmVudCBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG5cdHJlbmRlcigpe1xuXHRcdGNvbnN0IHsgZGF0YSB9ID0gdGhpcy5wcm9wcztcblx0XHRyZXR1cm4gKFxuXHRcdFx0PEdyaWRDb250YWluZXI+XG5cdFx0XHRcdDxHcmlkSXRlbT5cblx0XHRcdFx0XHQ8R3JpZENvbnRhaW5lcj5cblx0XHRcdFx0XHRcdDxHcmlkSXRlbSB4cz17MX0gbWQ9ezJ9PlxuXHRcdFx0XHRcdFx0PC9HcmlkSXRlbT5cblx0XHRcdFx0XHRcdDxHcmlkSXRlbSAgeHM9ezEwfSBtZD17OH0+XG5cdFx0XHRcdFx0XHRcdDxHcmlkQ29udGFpbmVyPlxuXHRcdFx0XHRcdFx0XHRcdDxHcmlkSXRlbT5cblx0XHRcdFx0XHRcdFx0XHRcdDxoMT48QmxvZ0xpbmsgc2x1Zz17J2tiJ30+a2I8L0Jsb2dMaW5rPiA+IGFuZHJvaWQ8L2gxPlxuXHRcdFx0XHRcdFx0XHRcdDwvR3JpZEl0ZW0+XHRcdFx0XG5cdFx0XHRcdFx0XHRcdFx0PEdyaWRJdGVtPlxuXHRcdFx0XHRcdFx0XHRcdFx0PENvbnRlbnQgZGF0YT17ZGF0YX0vPlxuXHRcdFx0XHRcdFx0XHRcdDwvR3JpZEl0ZW0+ICBcblx0XHRcdFx0XHRcdFx0PC9HcmlkQ29udGFpbmVyPlxuXHRcdFx0XHRcdFx0PC9HcmlkSXRlbT5cdFx0XHRcblx0XHRcdFx0XHRcdDxHcmlkSXRlbSB4cz17MX0gbWQ9ezJ9PlxuXHRcdFx0XHRcdFx0PC9HcmlkSXRlbT5cblx0XHRcdFx0XHQ8L0dyaWRDb250YWluZXI+XG5cdFx0XHRcdDwvR3JpZEl0ZW0+XG5cdFx0XHQ8L0dyaWRDb250YWluZXI+XG5cdFx0KVxuXHR9XG59XG5cbmV4cG9ydCBkZWZhdWx0IHdpdGhNb2R1bGUoUGFnZUNvbXBvbmVudCk7XG5cbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgTG9hZGFibGUgZnJvbSAncmVhY3QtbG9hZGFibGUnO1xuaW1wb3J0IExvYWRpbmcgZnJvbSAnY29yZS9jb21wb25lbnRzL2xvYWRpbmcnO1xuaW1wb3J0IEFwcCBcdFx0ZnJvbSAnam1hcnJveWF2ZS9jb21wb25lbnRzL3V4aS9jb3JlL3BhZ2UvYXBwJztcbmltcG9ydCBBcHBCb2R5IFx0ZnJvbSAnam1hcnJveWF2ZS9jb21wb25lbnRzL3V4aS9jb3JlL3BhZ2UvYm9keSc7XG5cbmltcG9ydCBIb21lUHJveHkgZnJvbSAnam1hcnJveWF2ZS9jb21wb25lbnRzL3V4aS9rYi9hbmRyb2lkL2xheW91dC9sYXlvdXQtcHJveHknO1xuLypcbmNvbnN0IEFuZHJvaWRQcm94eSA9IExvYWRhYmxlKHtcbiAgbG9hZGVyOiAoKSA9PiBpbXBvcnQoJ2ptYXJyb3lhdmUvY29tcG9uZW50cy91eGkva2IvYW5kcm9pZC9sYXlvdXQvbGF5b3V0LXByb3h5JyksXG4gIGxvYWRpbmc6IExvYWRpbmcsXG59KTtcbiovXG5cbmNsYXNzIFBhZ2UgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuXHRjb25zdHJ1Y3Rvcihwcm9wcyxjb250ZXh0KSB7XG5cdFx0c3VwZXIocHJvcHMsY29udGV4dCk7XG5cdFx0dGhpcy5hcGkgPSB3aW5kb3cuX19hcGk7XG5cdH1cblxuXHRjb21wb25lbnREaWRNb3VudCgpe1xuXHR9XG5cblx0cmVuZGVyKCl7XG5cdFx0Y29uc3QgYXBwID0gdGhpcy5wcm9wcy5hcHA7XG5cdFx0dmFyIGtleSA9IDA7XG5cdFx0cmV0dXJuIChcblx0XHRcdDxBcHAgcm91dGVyPXt0aGlzLnByb3BzLnJvdXRlcn0gYXBwPXt0aGlzLnByb3BzLmFwcH0+XG5cdFx0XHRcdDxBcHBCb2R5IHBhdGg9e1t7dGV4dDogJ2hvbWUnLCByb3V0ZTogJy8nfV19IGFwcD17dGhpcy5wcm9wcy5hcHB9IGRhdGE9e3tob21lOiB0aGlzLnByb3BzLnBhZ2V9fT5cblx0XHRcdFx0XHR7KHRoaXMucHJvcHMuY29tcG9uZW50ID09ICdhbmRyb2lkJykgPyA8QW5kcm9pZFByb3h5IGRhdGE9e3RoaXMucHJvcHMucGFnZS5kYXRhfS8+IDogXCJcIn1cblx0XHRcdFx0PC9BcHBCb2R5PlxuXHRcdFx0PC9BcHA+XG5cdFx0KTtcblx0fVxufVxuXG5leHBvcnQgZGVmYXVsdCBQYWdlOyIsImltcG9ydCBDb25mIGZyb20gJ2ptYXJyb3lhdmUvY29uZi92YWx1ZXMvZGVmYXVsdCc7XG5pbXBvcnQgVmVyc2lvbnMgZnJvbSAnam1hcnJveWF2ZS9jb25mL3ZlcnNpb25zJztcblxuY2xhc3MgQ29uc3RhbnRzIHtcbn1cblxuQ29uc3RhbnRzLkRFQlVHID0gQ29uZi5ERUJVRztcblxuQ29uc3RhbnRzLkxPQ0FMID0gQ29uZi5MT0NBTDtcbkNvbnN0YW50cy5USVRMRSA9IFwiSk1BcnJveWF2ZSAtIENpZW5jaWFzIGRlIGxhIENvbXB1dGFjacOzblwiO1xuQ29uc3RhbnRzLlZFUlNJT04gPSBDb25mLlZFUlNJT047XG5cbkNvbnN0YW50cy5NRU5VX0JBUl9GR19DT0xPUiA9IFwiI0ZGRlwiO1xuQ29uc3RhbnRzLk1FTlVfQkFSX0JHX0NPTE9SID0gXCIjMzMzXCI7XG5cbkNvbnN0YW50cy5VWElfVkVSU0lPTlMgPSBWZXJzaW9ucy5MT0c7XG5cblxuQ29uc3RhbnRzLkNPTV9DVVJSRU5UID0gQ29uc3RhbnRzLlVYSV9WRVJTSU9OUy5maW5kKChpdGVtKSA9PiAoaXRlbS5pZCA9PSBDb25mLkRFRkFVTFRfVVhJKSA/IGl0ZW0gOiBudWxsKTtcblxuXG5Db25zdGFudHMuQ09NSUQgPSBDb25zdGFudHMuQ09NX0NVUlJFTlQuaWQ7XG5Db25zdGFudHMuQ09NRiA9IENvbnN0YW50cy5DT01fQ1VSUkVOVC5mYW1pbHk7XG5Db25zdGFudHMuQ09NViA9IENvbnN0YW50cy5DT01fQ1VSUkVOVC52ZXJzaW9uO1xuXG5Db25zdGFudHMuQ09NX1NXSVRDSCA9IENvbmYuQ09NX1NXSVRDSDtcblxuZXhwb3J0IGRlZmF1bHQgKENvbnN0YW50cyk7IiwiY2xhc3MgTW9kdWxlcyB7XG59XG5cblxuTW9kdWxlcy5HYW1lcyA9IGZhbHNlO1xuTW9kdWxlcy5TdGFuZGluZ3MgPSBmYWxzZTtcbk1vZHVsZXMuUG9zdFNlYXNvbiA9IGZhbHNlO1xuTW9kdWxlcy5UcmFuc2ZlcnMgPSB0cnVlO1xuXG5leHBvcnQgZGVmYXVsdCAoTW9kdWxlcyk7IiwiaW1wb3J0IEJsYW5rQ29tcG9uZW50IGZyb20gJ2ptYXJyb3lhdmUvcGFnZXMvYmxhbmsnO1xuaW1wb3J0IEhvbWVDb21wb25lbnQgZnJvbSAnam1hcnJveWF2ZS9wYWdlcy9ob21lJztcbmltcG9ydCBCbG9nQ29tcG9uZW50IGZyb20gJ2ptYXJyb3lhdmUvcGFnZXMvYmxvZyc7XG5pbXBvcnQgTGFic0NvbXBvbmVudCBmcm9tICdqbWFycm95YXZlL3BhZ2VzL2xhYnMnO1xuaW1wb3J0IEJsb2dQb3N0Q29tcG9uZW50IGZyb20gJ2ptYXJyb3lhdmUvcGFnZXMvYmxvZ19wb3N0JztcbmltcG9ydCBQcm9qZWN0Q29tcG9uZW50IGZyb20gJ2ptYXJyb3lhdmUvcGFnZXMvbGFic19wcm9qZWN0JztcbmltcG9ydCBDVkNvbXBvbmVudCBmcm9tICdqbWFycm95YXZlL3BhZ2VzL2N2JztcbmltcG9ydCBLQkNvbXBvbmVudCBmcm9tICdqbWFycm95YXZlL3BhZ2VzL2tiJztcbmltcG9ydCBLQlBvc3RDb21wb25lbnQgZnJvbSAnam1hcnJveWF2ZS9wYWdlcy9rYl9wb3N0JztcbmltcG9ydCBLQlBvc3RBbmRyb2lkQ29tcG9uZW50IGZyb20gJ2ptYXJyb3lhdmUvcGFnZXMva2JfcG9zdF9hbmRyb2lkJztcblxuY2xhc3MgTmF2aWdhdGlvbiB7XG4gIGNvbnN0cnVjdG9yKCl7XG4gICAgdGhpcy5vcHRpb25zID0gW1xuXHRcdHtcblx0XHRcdHNob3dJbk1lbnU6IHRydWUsIFxuXHRcdFx0bmFtZTogJ0hvbWUnLCBcblx0XHRcdGljb246IG51bGwsIFxuXHRcdFx0cm91dGU6ICcvJywgXG5cdFx0XHRjb21wb25lbnQ6IEhvbWVDb21wb25lbnRcblx0XHR9LFxuXHRcdHtcblx0XHRcdHNob3dJbk1lbnU6IHRydWUsIFxuXHRcdFx0bmFtZTogJ0Jsb2cnLCBcblx0XHRcdGljb246IG51bGwsIFxuXHRcdFx0cm91dGU6ICcvYmxvZycsIFxuXHRcdFx0Y29tcG9uZW50OiBCbG9nQ29tcG9uZW50XG5cdFx0fSxcblx0XHR7XG5cdFx0XHRzaG93SW5NZW51OiBmYWxzZSwgXG5cdFx0XHRuYW1lOiAnQmxvZyBQb3N0JywgXG5cdFx0XHRpY29uOiAnYmxvZycsIFxuXHRcdFx0cm91dGU6ICcvYmxvZy86eWVhci86bW9udGgvOmRheS86cG9zdCcsIFxuXHRcdFx0Y29tcG9uZW50OiBCbG9nUG9zdENvbXBvbmVudFxuXHRcdH0sXG5cdFx0e1xuXHRcdFx0c2hvd0luTWVudTogdHJ1ZSwgXG5cdFx0XHRuYW1lOiAnS0InLCBcblx0XHRcdGljb246IG51bGwsIFxuXHRcdFx0cm91dGU6ICcva2InLCBcblx0XHRcdGNvbXBvbmVudDogS0JDb21wb25lbnRcblx0XHR9LFxuXHRcdHtcblx0XHRcdHNob3dJbk1lbnU6IGZhbHNlLCBcblx0XHRcdG5hbWU6ICdLQiBQb3N0IC0gQW5kcm9pZCcsIFxuXHRcdFx0aWNvbjogJ2Jsb2cnLCBcblx0XHRcdHJvdXRlOiAnL2tiL2FuZHJvaWQnLCBcblx0XHRcdGNvbXBvbmVudDogS0JQb3N0QW5kcm9pZENvbXBvbmVudFxuXHRcdH0sXG5cdFx0e1xuXHRcdFx0c2hvd0luTWVudTogZmFsc2UsIFxuXHRcdFx0bmFtZTogJ0tCIFBvc3QnLCBcblx0XHRcdGljb246ICdibG9nJywgXG5cdFx0XHRyb3V0ZTogJy9rYi86cG9zdCcsIFxuXHRcdFx0Y29tcG9uZW50OiBLQlBvc3RDb21wb25lbnRcblx0XHR9LFxuXHRcdHtcblx0XHRcdHNob3dJbk1lbnU6IHRydWUsIFxuXHRcdFx0bmFtZTogJ0xhYnMnLCBcblx0XHRcdGljb246IG51bGwsIFxuXHRcdFx0cm91dGU6ICcvbGFicycsIFxuXHRcdFx0Y29tcG9uZW50OiBMYWJzQ29tcG9uZW50XG5cdFx0fSxcblx0XHR7XG5cdFx0XHRzaG93SW5NZW51OiBmYWxzZSwgXG5cdFx0XHRuYW1lOiAnUHJvamVjdCcsIFxuXHRcdFx0aWNvbjogJ2Jsb2cnLCBcblx0XHRcdHJvdXRlOiAnL2xhYnMvOnByb2plY3QnLCBcblx0XHRcdGNvbXBvbmVudDogUHJvamVjdENvbXBvbmVudFxuXHRcdH0sXG5cdFx0e1xuXHRcdFx0c2hvd0luTWVudTogdHJ1ZSwgXG5cdFx0XHRuYW1lOiAnQWNlcmNhJywgXG5cdFx0XHRpY29uOiBudWxsLCBcblx0XHRcdHJvdXRlOiAnL2FjZXJjYScsIFxuXHRcdFx0Y29tcG9uZW50OiBDVkNvbXBvbmVudFxuXHRcdH0sXG5cdF07XG4gIH1cbn1cblxud2luZG93Ll9fbmF2ID0gbmV3IE5hdmlnYXRpb24oKTtcblxuZXhwb3J0IGRlZmF1bHQgTmF2aWdhdGlvbjsiLCIvL2ltcG9ydCBibGFjayBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9jb2xvci9ibGFjayc7XG4vL2ltcG9ydCB3aGl0ZSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9jb2xvci93aGl0ZSc7XG5cbmNvbnN0IFRoZW1lID0ge1xuXHRwcmltYXJ5IDogeyBtYWluOiAnIzAwMDAwMCcgfSxcblx0c2Vjb25kYXJ5IDogeyBtYWluOiAnI2ZmZmZmZid9LFxufVxuXG5leHBvcnQgZGVmYXVsdCAoVGhlbWUpOyIsImNsYXNzIENvbmYge1xufVxuXG5Db25mLlZFUlNJT04gPSBcIjAuMS4wXCI7XG5Db25mLkRFQlVHID0gZmFsc2U7XG5Db25mLkxPQ0FMID0gdHJ1ZTtcbkNvbmYuQ09NX1NXSVRDSCA9IHRydWU7XG5Db25mLkRFRkFVTFRfVVhJID0gMjtcblxuZXhwb3J0IGRlZmF1bHQgKENvbmYpOyIsImltcG9ydCBDb25mIGZyb20gJ2ptYXJyb3lhdmUvY29uZi92YWx1ZXMvZGVmYXVsdCc7XG5cbmNsYXNzIFZlcnNpb25zIHtcbn1cblxuXG5WZXJzaW9ucy5MT0cgPSBbXG5cdHtpZCA6IDEsIFx0ZmFtaWx5OiAnZ3JleScsXHRcdFx0dmVyc2lvbjogWzAsMCwwXSwgXHRcdHZpc2libGU6IHRydWV9LFxuXHR7aWQgOiAyLCBcdGZhbWlseTogJ2dyZXknLFx0XHRcdHZlcnNpb246IFsxOSwyLDFdLCBcdFx0dmlzaWJsZTogdHJ1ZX0sXG5dXG5cbmV4cG9ydCBkZWZhdWx0IChWZXJzaW9ucyk7IiwiaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IEhhc2hSb3V0ZXIsIFJvdXRlLCBTd2l0Y2ggfSBmcm9tICdyZWFjdC1yb3V0ZXItZG9tJztcbmltcG9ydCB7cm9vdH0gZnJvbSAnYmFvYmFiLXJlYWN0L2hpZ2hlci1vcmRlcic7XG5pbXBvcnQgQVBJIGZyb20gJ2ptYXJyb3lhdmUvYXBwL2FwaSc7XG5pbXBvcnQgTkFWIGZyb20gJ2ptYXJyb3lhdmUvY29uZi9uYXZpZ2F0aW9uJztcbmltcG9ydCBFcnJvckJvdW5kcnkgZnJvbSAnY29yZS9jb21wb25lbnRzL2Vycm9yJztcblxuaW1wb3J0IHsgUHJvdmlkZXIgfSBmcm9tICdyZWFjdC1yZWR1eCc7XG5pbXBvcnQgeyBDb25maWd1cmVTdG9yZSB9IGZyb20gJ2ptYXJyb3lhdmUvYXBwL3JlZHV4L2NvbmZpZ3VyZVN0b3JlJztcblxuLy9pbXBvcnQgeyBUcmFuc2l0aW9uR3JvdXAsIENTU1RyYW5zaXRpb24gfSBmcm9tICdyZWFjdC10cmFuc2l0aW9uLWdyb3VwJztcbmltcG9ydCBcIi4vaW5kZXguc2Nzc1wiO1xuXG5mdW5jdGlvbiBBcHAoe3JvdXRlc30pIHtcbiAgcmV0dXJuIChcbiAgICA8ZGl2PlxuICAgICAgPEhlYWRlciAvPlxuICAgICAgPE1haW4gcm91dGVzPXtyb3V0ZXN9Lz5cbiAgICA8L2Rpdj5cbiAgKTtcbn1cblxuZnVuY3Rpb24gSGVhZGVyKCkge1xuICByZXR1cm4gKFxuICAgIDxoZWFkZXI+XG4gICAgPC9oZWFkZXI+XG4gICk7XG59XG5cbmZ1bmN0aW9uIE1haW4oe3JvdXRlc30pIHtcblx0dmFyIGtleSA9IDA7XG4gIHJldHVybiAoXG4gICAgPGRpdj5cblx0XHQ8U3dpdGNoPlxuXHRcdFx0e3JvdXRlcy5tYXAociA9PiBcblx0XHRcdFx0PFJvdXRlIGtleT17a2V5Kyt9IGV4YWN0IHBhdGg9e3Iucm91dGV9IGNvbXBvbmVudD17ci5jb21wb25lbnR9Lz5cblx0XHRcdCl9ICAgXG5cdFx0PC9Td2l0Y2g+XHRcdFx0XHRcdFx0XG4gICAgPC9kaXY+XG4gICk7XG59XG5cbmNsYXNzIEluZGV4IGV4dGVuZHMgQ29tcG9uZW50IHtcblx0Y29uc3RydWN0b3IocHJvcHMpe1xuXHRcdHN1cGVyKHByb3BzKTtcblx0XHR0aGlzLm5hdmlnYXRpb24gPSBuZXcgTkFWKCk7XG5cdH1cblxuXHRyZW5kZXIoKSB7XG5cdFx0cmV0dXJuIChcblx0XHRcdDxFcnJvckJvdW5kcnkgZnJvbT1cIi9qbWFycm95YXZlL3Jvb3RcIj5cblx0XHRcdFx0PFByb3ZpZGVyIHN0b3JlPXtDb25maWd1cmVTdG9yZSgpfT5cblx0XHRcdFx0XHQ8SGFzaFJvdXRlcj5cblx0XHRcdFx0XHRcdDxBcHAgcm91dGVzPXt0aGlzLm5hdmlnYXRpb24ub3B0aW9uc30vPlxuXHRcdFx0XHRcdDwvSGFzaFJvdXRlcj5cblx0XHRcdFx0PC9Qcm92aWRlcj5cblx0XHRcdDwvRXJyb3JCb3VuZHJ5PlxuXHRcdCk7XG5cdH1cbn1cblxuY29uc3QgUm9vdGVkSW5kZXggPSByb290KHdpbmRvdy5fX3N0YXRlLCBJbmRleCk7XG5leHBvcnQgZGVmYXVsdCBSb290ZWRJbmRleDsiLCJcbnZhciBjb250ZW50ID0gcmVxdWlyZShcIiEhLi4vLi4vLi4vLi4vLi4vLi4vZnJhbWV3b3Jrcy93ZWJhcHBzL3N0YXJ0dXAvbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi4vLi4vLi4vLi4vLi4vLi4vZnJhbWV3b3Jrcy93ZWJhcHBzL3N0YXJ0dXAvbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2xpYi9sb2FkZXIuanMhLi9pbmRleC5zY3NzXCIpO1xuXG5pZih0eXBlb2YgY29udGVudCA9PT0gJ3N0cmluZycpIGNvbnRlbnQgPSBbW21vZHVsZS5pZCwgY29udGVudCwgJyddXTtcblxudmFyIHRyYW5zZm9ybTtcbnZhciBpbnNlcnRJbnRvO1xuXG5cblxudmFyIG9wdGlvbnMgPSB7XCJobXJcIjp0cnVlfVxuXG5vcHRpb25zLnRyYW5zZm9ybSA9IHRyYW5zZm9ybVxub3B0aW9ucy5pbnNlcnRJbnRvID0gdW5kZWZpbmVkO1xuXG52YXIgdXBkYXRlID0gcmVxdWlyZShcIiEuLi8uLi8uLi8uLi8uLi8uLi9mcmFtZXdvcmtzL3dlYmFwcHMvc3RhcnR1cC9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2xpYi9hZGRTdHlsZXMuanNcIikoY29udGVudCwgb3B0aW9ucyk7XG5cbmlmKGNvbnRlbnQubG9jYWxzKSBtb2R1bGUuZXhwb3J0cyA9IGNvbnRlbnQubG9jYWxzO1xuXG5pZihtb2R1bGUuaG90KSB7XG5cdG1vZHVsZS5ob3QuYWNjZXB0KFwiISEuLi8uLi8uLi8uLi8uLi8uLi9mcmFtZXdvcmtzL3dlYmFwcHMvc3RhcnR1cC9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuLi8uLi8uLi8uLi8uLi8uLi9mcmFtZXdvcmtzL3dlYmFwcHMvc3RhcnR1cC9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvbGliL2xvYWRlci5qcyEuL2luZGV4LnNjc3NcIiwgZnVuY3Rpb24oKSB7XG5cdFx0dmFyIG5ld0NvbnRlbnQgPSByZXF1aXJlKFwiISEuLi8uLi8uLi8uLi8uLi8uLi9mcmFtZXdvcmtzL3dlYmFwcHMvc3RhcnR1cC9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuLi8uLi8uLi8uLi8uLi8uLi9mcmFtZXdvcmtzL3dlYmFwcHMvc3RhcnR1cC9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvbGliL2xvYWRlci5qcyEuL2luZGV4LnNjc3NcIik7XG5cblx0XHRpZih0eXBlb2YgbmV3Q29udGVudCA9PT0gJ3N0cmluZycpIG5ld0NvbnRlbnQgPSBbW21vZHVsZS5pZCwgbmV3Q29udGVudCwgJyddXTtcblxuXHRcdHZhciBsb2NhbHMgPSAoZnVuY3Rpb24oYSwgYikge1xuXHRcdFx0dmFyIGtleSwgaWR4ID0gMDtcblxuXHRcdFx0Zm9yKGtleSBpbiBhKSB7XG5cdFx0XHRcdGlmKCFiIHx8IGFba2V5XSAhPT0gYltrZXldKSByZXR1cm4gZmFsc2U7XG5cdFx0XHRcdGlkeCsrO1xuXHRcdFx0fVxuXG5cdFx0XHRmb3Ioa2V5IGluIGIpIGlkeC0tO1xuXG5cdFx0XHRyZXR1cm4gaWR4ID09PSAwO1xuXHRcdH0oY29udGVudC5sb2NhbHMsIG5ld0NvbnRlbnQubG9jYWxzKSk7XG5cblx0XHRpZighbG9jYWxzKSB0aHJvdyBuZXcgRXJyb3IoJ0Fib3J0aW5nIENTUyBITVIgZHVlIHRvIGNoYW5nZWQgY3NzLW1vZHVsZXMgbG9jYWxzLicpO1xuXG5cdFx0dXBkYXRlKG5ld0NvbnRlbnQpO1xuXHR9KTtcblxuXHRtb2R1bGUuaG90LmRpc3Bvc2UoZnVuY3Rpb24oKSB7IHVwZGF0ZSgpOyB9KTtcbn0iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgYnJhbmNoIH0gZnJvbSAnYmFvYmFiLXJlYWN0L2hpZ2hlci1vcmRlcic7XG5pbXBvcnQgeyB3aXRoUm91dGVyIH0gZnJvbSAncmVhY3Qtcm91dGVyLWRvbSdcbmltcG9ydCBCbGFuayBmcm9tICdqbWFycm95YXZlL2NvbXBvbmVudHMvdXhpL2JsYW5rL3BhZ2UnO1xuXG5jbGFzcyBQYWdlIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcblx0Y29uc3RydWN0b3IocHJvcHMsY29udGV4dCkge1xuXHRcdHN1cGVyKHByb3BzLGNvbnRleHQpO1xuXHRcdHRoaXMuYXBpID0gd2luZG93Ll9fYXBpO1xuXHR9XG5cblx0Y29tcG9uZW50RGlkTW91bnQoKXtcblx0fVxuXG5cdHJlbmRlcigpe1xuXHRcdHJldHVybiA8Qmxhbmsgey4uLnRoaXMucHJvcHN9Lz5cblx0fVxufVxuXG5QYWdlID0gYnJhbmNoKHtcblx0YXBwOiBbJ2FwcCddXG59LCBQYWdlKTtcblxud2l0aFJvdXRlcihQYWdlKTtcbmV4cG9ydCBkZWZhdWx0IFBhZ2U7IiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IGNvbm5lY3QgfSBmcm9tICdyZWFjdC1yZWR1eCc7XG5pbXBvcnQge2JyYW5jaH0gZnJvbSAnYmFvYmFiLXJlYWN0L2hpZ2hlci1vcmRlcic7XG5pbXBvcnQgeyB3aXRoUm91dGVyIH0gZnJvbSAncmVhY3Qtcm91dGVyLWRvbSdcbmltcG9ydCBQYWdlQ29tcG9uZW50IGZyb20gJ2ptYXJyb3lhdmUvY29tcG9uZW50cy91eGkvYmxvZy9wYWdlJztcblxuY29uc3QgbWFwU3RhdGVUb1Byb3BzID0gc3RhdGUgPT4ge1xuICByZXR1cm4ge1xuICAgIC8vbWVkaWE6IHN0YXRlLm1lZGlhLFxuICB9XG59XG5cbmNvbnN0IG1hcERpc3BhdGNoVG9Qcm9wcyA9IGRpc3BhdGNoID0+ICh7XG59KTtcblxuY2xhc3MgUGFnZSBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG5cdGNvbnN0cnVjdG9yKHByb3BzLGNvbnRleHQpIHtcblx0XHRzdXBlcihwcm9wcyxjb250ZXh0KTtcblx0XHR0aGlzLmFwaSA9IHdpbmRvdy5fX2FwaTtcblx0XHR0aGlzLmFyZWEgPSBcImJsb2dcIjtcblx0fVxuXG5cdGNvbXBvbmVudERpZE1vdW50KCl7XG5cdFx0dGhpcy5hcGkuZ2V0QmxvZyh0aGlzLmFyZWEpO1xuXHR9XG5cblx0cmVuZGVyKCl7XG5cdFx0Y29uc3QgcGFyYW1zID0ge2FwcDogdGhpcy5wcm9wcy5hcHAsIHBhZ2U6IHRoaXMucHJvcHMucGFnZSwgcm91dGVyOiB0aGlzLnByb3BzLnJvdXRlciwgbG9jYXRpb246IHRoaXMucHJvcHMubG9jYXRpb259O1xuXHRcdHJldHVybiA8UGFnZUNvbXBvbmVudCB7Li4ucGFyYW1zfS8+XG5cdH1cbn1cblxuUGFnZSA9IGJyYW5jaCh7XG5cdGFwcDogWydhcHAnXSxcblx0cGFnZTogWydwYWdlcycsJ2Jsb2cnXSxcbn0sIFBhZ2UpO1xuXG5QYWdlID0gY29ubmVjdChtYXBTdGF0ZVRvUHJvcHMsIG1hcERpc3BhdGNoVG9Qcm9wcykoUGFnZSk7XG5cbndpdGhSb3V0ZXIoUGFnZSk7XG5leHBvcnQgZGVmYXVsdCBQYWdlOyIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBjb25uZWN0IH0gZnJvbSAncmVhY3QtcmVkdXgnO1xuaW1wb3J0IHticmFuY2h9IGZyb20gJ2Jhb2JhYi1yZWFjdC9oaWdoZXItb3JkZXInO1xuaW1wb3J0IHsgd2l0aFJvdXRlciB9IGZyb20gJ3JlYWN0LXJvdXRlci1kb20nXG5pbXBvcnQgUGFnZUNvbXBvbmVudCBmcm9tICdqbWFycm95YXZlL2NvbXBvbmVudHMvdXhpL2Jsb2dfcG9zdC9wYWdlJztcblxuY29uc3QgbWFwU3RhdGVUb1Byb3BzID0gc3RhdGUgPT4ge1xuICByZXR1cm4ge1xuICAgIC8vbWVkaWE6IHN0YXRlLm1lZGlhLFxuICB9XG59XG5cbmNvbnN0IG1hcERpc3BhdGNoVG9Qcm9wcyA9IGRpc3BhdGNoID0+ICh7XG59KTtcblxuY2xhc3MgUGFnZSBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG5cdGNvbnN0cnVjdG9yKHByb3BzLGNvbnRleHQpIHtcblx0XHRzdXBlcihwcm9wcyxjb250ZXh0KTtcblx0XHR0aGlzLmFwaSA9IHdpbmRvdy5fX2FwaTtcblx0fVxuXG5cdGNvbXBvbmVudERpZE1vdW50KCl7XG5cdFx0Y29uc3QgcGFyYW1zID0gdGhpcy5wcm9wcy5yb3V0ZXIucGFyYW1zO1xuXHRcdHRoaXMuYXBpLmdldFBvc3QoXCJibG9nXCIsIGAke3BhcmFtcy55ZWFyfS0ke3BhcmFtcy5tb250aH0tJHtwYXJhbXMuZGF5fS0ke3BhcmFtcy5wb3N0fWApO1xuXHR9XG5cblx0cmVuZGVyKCl7XG5cdFx0Y29uc3QgcGFyYW1zID0ge2FwcDogdGhpcy5wcm9wcy5hcHAsIHBhZ2U6IHRoaXMucHJvcHMucGFnZSwgcm91dGVyOiB0aGlzLnByb3BzLnJvdXRlciwgbG9jYXRpb246IHRoaXMucHJvcHMubG9jYXRpb259O1xuXHRcdHJldHVybiA8UGFnZUNvbXBvbmVudCB7Li4ucGFyYW1zfS8+XG5cdH1cbn1cblxuUGFnZSA9IGJyYW5jaCh7XG5cdGFwcDogWydhcHAnXSxcblx0cGFnZTogWydwYWdlcycsJ3Bvc3QnXSxcbn0sIFBhZ2UpO1xuXG5QYWdlID0gY29ubmVjdChtYXBTdGF0ZVRvUHJvcHMsIG1hcERpc3BhdGNoVG9Qcm9wcykoUGFnZSk7XG5cbndpdGhSb3V0ZXIoUGFnZSk7XG5leHBvcnQgZGVmYXVsdCBQYWdlOyIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQge2JyYW5jaH0gZnJvbSAnYmFvYmFiLXJlYWN0L2hpZ2hlci1vcmRlcic7XG5pbXBvcnQgeyB3aXRoUm91dGVyIH0gZnJvbSAncmVhY3Qtcm91dGVyLWRvbSdcbmltcG9ydCBQYWdlQ29tcG9uZW50IGZyb20gJ2ptYXJyb3lhdmUvY29tcG9uZW50cy91eGkvY3YvcGFnZSc7XG5cbmNvbnN0IG1hcFN0YXRlVG9Qcm9wcyA9IHN0YXRlID0+IHtcbiAgcmV0dXJuIHtcbiAgICAvL21lZGlhOiBzdGF0ZS5tZWRpYSxcbiAgfVxufVxuXG5jb25zdCBtYXBEaXNwYXRjaFRvUHJvcHMgPSBkaXNwYXRjaCA9PiAoe1xufSk7XG5cbmNsYXNzIFBhZ2UgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuXHRjb25zdHJ1Y3Rvcihwcm9wcyxjb250ZXh0KSB7XG5cdFx0c3VwZXIocHJvcHMsY29udGV4dCk7XG5cdFx0dGhpcy5hcGkgPSB3aW5kb3cuX19hcGk7XG5cdH1cblxuXHRjb21wb25lbnREaWRNb3VudCgpe1xuXHRcdHRoaXMuYXBpLmdldENWKCk7XG5cdH1cblxuXHRyZW5kZXIoKXtcblx0XHRjb25zdCBwYXJhbXMgPSB7YXBwOiB0aGlzLnByb3BzLmFwcCwgcGFnZTogdGhpcy5wcm9wcy5wYWdlLCByb3V0ZXI6IHRoaXMucHJvcHMucm91dGVyLCBsb2NhdGlvbjogdGhpcy5wcm9wcy5sb2NhdGlvbn07XG5cdFx0cmV0dXJuIDxQYWdlQ29tcG9uZW50IHsuLi5wYXJhbXN9Lz5cblx0fVxufVxuXG5QYWdlID0gYnJhbmNoKHtcblx0YXBwOiBbJ2FwcCddLFxuXHRwYWdlOiBbJ3BhZ2VzJywnY3YnXSxcbn0sIFBhZ2UpO1xuXG5cbndpdGhSb3V0ZXIoUGFnZSk7XG5leHBvcnQgZGVmYXVsdCBQYWdlOyIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBjb25uZWN0IH0gZnJvbSAncmVhY3QtcmVkdXgnO1xuaW1wb3J0IHticmFuY2h9IGZyb20gJ2Jhb2JhYi1yZWFjdC9oaWdoZXItb3JkZXInO1xuaW1wb3J0IHsgd2l0aFJvdXRlciB9IGZyb20gJ3JlYWN0LXJvdXRlci1kb20nXG5pbXBvcnQgSG9tZSBmcm9tICdqbWFycm95YXZlL2NvbXBvbmVudHMvdXhpL2hvbWUvcGFnZSc7XG5cbmNvbnN0IG1hcFN0YXRlVG9Qcm9wcyA9IHN0YXRlID0+IHtcbiAgcmV0dXJuIHtcbiAgICAvL21lZGlhOiBzdGF0ZS5tZWRpYSxcbiAgfVxufVxuXG5jb25zdCBtYXBEaXNwYXRjaFRvUHJvcHMgPSBkaXNwYXRjaCA9PiAoe1xufSk7XG5cbmNsYXNzIFBhZ2UgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuXHRjb25zdHJ1Y3Rvcihwcm9wcyxjb250ZXh0KSB7XG5cdFx0c3VwZXIocHJvcHMsY29udGV4dCk7XG5cdFx0dGhpcy5hcGkgPSB3aW5kb3cuX19hcGk7XG5cdH1cblxuXHRjb21wb25lbnREaWRNb3VudCgpe1xuXHRcdHRoaXMuYXBpLmdldEhvbWUoKTtcblx0XHR0aGlzLmFwaS5nZXRUcmVuZHMoKTtcblx0fVxuXG5cdHJlbmRlcigpe1xuXHRcdGNvbnN0IHBhcmFtcyA9IHthcHA6IHRoaXMucHJvcHMuYXBwLCBwYWdlOiB0aGlzLnByb3BzLnBhZ2UsIHJvdXRlcjogdGhpcy5wcm9wcy5yb3V0ZXIsIGxvY2F0aW9uOiB0aGlzLnByb3BzLmxvY2F0aW9ufTtcblx0XHRyZXR1cm4gPEhvbWUgey4uLnBhcmFtc30vPlxuXHR9XG59XG5cblBhZ2UgPSBicmFuY2goe1xuXHRhcHA6IFsnYXBwJ10sXG5cdHBhZ2U6IFsncGFnZXMnLCdob21lJ10sXG59LCBQYWdlKTtcblxuUGFnZSA9IGNvbm5lY3QobWFwU3RhdGVUb1Byb3BzLCBtYXBEaXNwYXRjaFRvUHJvcHMpKFBhZ2UpO1xuXG53aXRoUm91dGVyKFBhZ2UpO1xuZXhwb3J0IGRlZmF1bHQgUGFnZTsiLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgY29ubmVjdCB9IGZyb20gJ3JlYWN0LXJlZHV4JztcbmltcG9ydCB7YnJhbmNofSBmcm9tICdiYW9iYWItcmVhY3QvaGlnaGVyLW9yZGVyJztcbmltcG9ydCB7IHdpdGhSb3V0ZXIgfSBmcm9tICdyZWFjdC1yb3V0ZXItZG9tJ1xuaW1wb3J0IFBhZ2VDb21wb25lbnQgZnJvbSAnam1hcnJveWF2ZS9jb21wb25lbnRzL3V4aS9ibG9nL3BhZ2UnO1xuXG5jb25zdCBtYXBTdGF0ZVRvUHJvcHMgPSBzdGF0ZSA9PiB7XG4gIHJldHVybiB7XG4gICAgLy9tZWRpYTogc3RhdGUubWVkaWEsXG4gIH1cbn1cblxuY29uc3QgbWFwRGlzcGF0Y2hUb1Byb3BzID0gZGlzcGF0Y2ggPT4gKHtcbn0pO1xuXG5jbGFzcyBQYWdlIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcblx0Y29uc3RydWN0b3IocHJvcHMsY29udGV4dCkge1xuXHRcdHN1cGVyKHByb3BzLGNvbnRleHQpO1xuXHRcdHRoaXMuYXBpID0gd2luZG93Ll9fYXBpO1xuXHRcdHRoaXMuYXJlYSA9IFwia2JcIjtcblx0fVxuXG5cdGNvbXBvbmVudERpZE1vdW50KCl7XG5cdFx0dGhpcy5hcGkuZ2V0QmxvZyh0aGlzLmFyZWEpO1xuXHR9XG5cblx0cmVuZGVyKCl7XG5cdFx0Y29uc3QgcGFyYW1zID0ge2FwcDogdGhpcy5wcm9wcy5hcHAsIHBhZ2U6IHRoaXMucHJvcHMucGFnZSwgcm91dGVyOiB0aGlzLnByb3BzLnJvdXRlciwgbG9jYXRpb246IHRoaXMucHJvcHMubG9jYXRpb259O1xuXHRcdHJldHVybiA8UGFnZUNvbXBvbmVudCB7Li4ucGFyYW1zfS8+XG5cdH1cbn1cblxuUGFnZSA9IGJyYW5jaCh7XG5cdGFwcDogWydhcHAnXSxcblx0cGFnZTogWydwYWdlcycsJ2Jsb2cnXSxcbn0sIFBhZ2UpO1xuXG5QYWdlID0gY29ubmVjdChtYXBTdGF0ZVRvUHJvcHMsIG1hcERpc3BhdGNoVG9Qcm9wcykoUGFnZSk7XG5cbndpdGhSb3V0ZXIoUGFnZSk7XG5leHBvcnQgZGVmYXVsdCBQYWdlOyIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBjb25uZWN0IH0gZnJvbSAncmVhY3QtcmVkdXgnO1xuaW1wb3J0IHticmFuY2h9IGZyb20gJ2Jhb2JhYi1yZWFjdC9oaWdoZXItb3JkZXInO1xuaW1wb3J0IHsgd2l0aFJvdXRlciB9IGZyb20gJ3JlYWN0LXJvdXRlci1kb20nXG5pbXBvcnQgUGFnZUNvbXBvbmVudCBmcm9tICdqbWFycm95YXZlL2NvbXBvbmVudHMvdXhpL2Jsb2dfcG9zdC9wYWdlJztcblxuY29uc3QgbWFwU3RhdGVUb1Byb3BzID0gc3RhdGUgPT4ge1xuICByZXR1cm4ge1xuICAgIC8vbWVkaWE6IHN0YXRlLm1lZGlhLFxuICB9XG59XG5cbmNvbnN0IG1hcERpc3BhdGNoVG9Qcm9wcyA9IGRpc3BhdGNoID0+ICh7XG59KTtcblxuY2xhc3MgUGFnZSBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG5cdGNvbnN0cnVjdG9yKHByb3BzLGNvbnRleHQpIHtcblx0XHRzdXBlcihwcm9wcyxjb250ZXh0KTtcblx0XHR0aGlzLmFwaSA9IHdpbmRvdy5fX2FwaTtcblx0fVxuXG5cdGNvbXBvbmVudERpZE1vdW50KCl7XG5cdFx0Y29uc3QgcGFyYW1zID0gdGhpcy5wcm9wcy5yb3V0ZXIucGFyYW1zO1xuXHRcdHRoaXMuYXBpLmdldFBvc3QoXCJrYlwiLCBga2ItJHtwYXJhbXMucG9zdH1gKTtcblx0fVxuXG5cdHJlbmRlcigpe1xuXHRcdGNvbnN0IHBhcmFtcyA9IHthcHA6IHRoaXMucHJvcHMuYXBwLCBwYWdlOiB0aGlzLnByb3BzLnBhZ2UsIHJvdXRlcjogdGhpcy5wcm9wcy5yb3V0ZXIsIGxvY2F0aW9uOiB0aGlzLnByb3BzLmxvY2F0aW9ufTtcblx0XHRyZXR1cm4gPFBhZ2VDb21wb25lbnQgey4uLnBhcmFtc30vPlxuXHR9XG59XG5cblBhZ2UgPSBicmFuY2goe1xuXHRhcHA6IFsnYXBwJ10sXG5cdHBhZ2U6IFsncGFnZXMnLCdwb3N0J10sXG59LCBQYWdlKTtcblxuUGFnZSA9IGNvbm5lY3QobWFwU3RhdGVUb1Byb3BzLCBtYXBEaXNwYXRjaFRvUHJvcHMpKFBhZ2UpO1xuXG53aXRoUm91dGVyKFBhZ2UpO1xuZXhwb3J0IGRlZmF1bHQgUGFnZTsiLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgY29ubmVjdCB9IGZyb20gJ3JlYWN0LXJlZHV4JztcbmltcG9ydCB7YnJhbmNofSBmcm9tICdiYW9iYWItcmVhY3QvaGlnaGVyLW9yZGVyJztcbmltcG9ydCB7IHdpdGhSb3V0ZXIgfSBmcm9tICdyZWFjdC1yb3V0ZXItZG9tJ1xuaW1wb3J0IFBhZ2VDb21wb25lbnQgZnJvbSAnam1hcnJveWF2ZS9jb21wb25lbnRzL3V4aS9rYi9wYWdlJztcblxuY29uc3QgbWFwU3RhdGVUb1Byb3BzID0gc3RhdGUgPT4ge1xuICByZXR1cm4ge1xuICAgIC8vbWVkaWE6IHN0YXRlLm1lZGlhLFxuICB9XG59XG5cbmNvbnN0IG1hcERpc3BhdGNoVG9Qcm9wcyA9IGRpc3BhdGNoID0+ICh7XG59KTtcblxuY2xhc3MgUGFnZSBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG5cdGNvbnN0cnVjdG9yKHByb3BzLGNvbnRleHQpIHtcblx0XHRzdXBlcihwcm9wcyxjb250ZXh0KTtcblx0XHR0aGlzLmFwaSA9IHdpbmRvdy5fX2FwaTtcblx0fVxuXG5cdGNvbXBvbmVudERpZE1vdW50KCl7XG5cdFx0dGhpcy5hcGkuZ2V0S0JBbmRyb2lkQ2F0ZWdvcmllcygpO1xuXHR9XG5cblx0cmVuZGVyKCl7XG5cdFx0Y29uc3QgcGFyYW1zID0ge2NvbXBvbmVudDogJ2FuZHJvaWQnLCBhcHA6IHRoaXMucHJvcHMuYXBwLCBwYWdlOiB0aGlzLnByb3BzLnBhZ2UsIHJvdXRlcjogdGhpcy5wcm9wcy5yb3V0ZXIsIGxvY2F0aW9uOiB0aGlzLnByb3BzLmxvY2F0aW9ufTtcblx0XHRyZXR1cm4gPFBhZ2VDb21wb25lbnQgey4uLnBhcmFtc30vPlxuXHR9XG59XG5cblBhZ2UgPSBicmFuY2goe1xuXHRhcHA6IFsnYXBwJ10sXG5cdHBhZ2U6IFsncGFnZXMnLCdrYl9hbmRyb2lkJ10sXG59LCBQYWdlKTtcblxuUGFnZSA9IGNvbm5lY3QobWFwU3RhdGVUb1Byb3BzLCBtYXBEaXNwYXRjaFRvUHJvcHMpKFBhZ2UpO1xuXG53aXRoUm91dGVyKFBhZ2UpO1xuZXhwb3J0IGRlZmF1bHQgUGFnZTsiLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgY29ubmVjdCB9IGZyb20gJ3JlYWN0LXJlZHV4JztcbmltcG9ydCB7YnJhbmNofSBmcm9tICdiYW9iYWItcmVhY3QvaGlnaGVyLW9yZGVyJztcbmltcG9ydCB7IHdpdGhSb3V0ZXIgfSBmcm9tICdyZWFjdC1yb3V0ZXItZG9tJ1xuaW1wb3J0IFBhZ2VDb21wb25lbnQgZnJvbSAnam1hcnJveWF2ZS9jb21wb25lbnRzL3V4aS9ibG9nL3BhZ2UnO1xuXG5jb25zdCBtYXBTdGF0ZVRvUHJvcHMgPSBzdGF0ZSA9PiB7XG4gIHJldHVybiB7XG4gICAgLy9tZWRpYTogc3RhdGUubWVkaWEsXG4gIH1cbn1cblxuY29uc3QgbWFwRGlzcGF0Y2hUb1Byb3BzID0gZGlzcGF0Y2ggPT4gKHtcbn0pO1xuXG5jbGFzcyBQYWdlIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcblx0Y29uc3RydWN0b3IocHJvcHMsY29udGV4dCkge1xuXHRcdHN1cGVyKHByb3BzLGNvbnRleHQpO1xuXHRcdHRoaXMuYXBpID0gd2luZG93Ll9fYXBpO1xuXHRcdHRoaXMuYXJlYSA9IFwibGFic1wiO1xuXHR9XG5cblx0Y29tcG9uZW50RGlkTW91bnQoKXtcblx0XHR0aGlzLmFwaS5nZXRCbG9nKHRoaXMuYXJlYSk7XG5cdH1cblxuXHRyZW5kZXIoKXtcblx0XHRjb25zdCBwYXJhbXMgPSB7YXBwOiB0aGlzLnByb3BzLmFwcCwgcGFnZTogdGhpcy5wcm9wcy5wYWdlLCByb3V0ZXI6IHRoaXMucHJvcHMucm91dGVyLCBsb2NhdGlvbjogdGhpcy5wcm9wcy5sb2NhdGlvbn07XG5cdFx0cmV0dXJuIDxQYWdlQ29tcG9uZW50IHsuLi5wYXJhbXN9Lz5cblx0fVxufVxuXG5QYWdlID0gYnJhbmNoKHtcblx0YXBwOiBbJ2FwcCddLFxuXHRwYWdlOiBbJ3BhZ2VzJywnYmxvZyddLFxufSwgUGFnZSk7XG5cblBhZ2UgPSBjb25uZWN0KG1hcFN0YXRlVG9Qcm9wcywgbWFwRGlzcGF0Y2hUb1Byb3BzKShQYWdlKTtcblxud2l0aFJvdXRlcihQYWdlKTtcbmV4cG9ydCBkZWZhdWx0IFBhZ2U7IiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IGNvbm5lY3QgfSBmcm9tICdyZWFjdC1yZWR1eCc7XG5pbXBvcnQge2JyYW5jaH0gZnJvbSAnYmFvYmFiLXJlYWN0L2hpZ2hlci1vcmRlcic7XG5pbXBvcnQgeyB3aXRoUm91dGVyIH0gZnJvbSAncmVhY3Qtcm91dGVyLWRvbSdcbmltcG9ydCBQYWdlQ29tcG9uZW50IGZyb20gJ2ptYXJyb3lhdmUvY29tcG9uZW50cy91eGkvYmxvZ19wb3N0L3BhZ2UnO1xuXG5jb25zdCBtYXBTdGF0ZVRvUHJvcHMgPSBzdGF0ZSA9PiB7XG4gIHJldHVybiB7XG4gICAgLy9tZWRpYTogc3RhdGUubWVkaWEsXG4gIH1cbn1cblxuY29uc3QgbWFwRGlzcGF0Y2hUb1Byb3BzID0gZGlzcGF0Y2ggPT4gKHtcbn0pO1xuXG5jbGFzcyBQYWdlIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcblx0Y29uc3RydWN0b3IocHJvcHMsY29udGV4dCkge1xuXHRcdHN1cGVyKHByb3BzLGNvbnRleHQpO1xuXHRcdHRoaXMuYXBpID0gd2luZG93Ll9fYXBpO1xuXHR9XG5cblx0Y29tcG9uZW50RGlkTW91bnQoKXtcblx0XHRjb25zdCBwYXJhbXMgPSB0aGlzLnByb3BzLnJvdXRlci5wYXJhbXM7XG5cdFx0dGhpcy5hcGkuZ2V0UG9zdChcImxhYnNcIiwgYGxhYnMtJHtwYXJhbXMucHJvamVjdH1gKTtcblx0fVxuXG5cdHJlbmRlcigpe1xuXHRcdGNvbnN0IHBhcmFtcyA9IHthcHA6IHRoaXMucHJvcHMuYXBwLCBwYWdlOiB0aGlzLnByb3BzLnBhZ2UsIHJvdXRlcjogdGhpcy5wcm9wcy5yb3V0ZXIsIGxvY2F0aW9uOiB0aGlzLnByb3BzLmxvY2F0aW9ufTtcblx0XHRyZXR1cm4gPFBhZ2VDb21wb25lbnQgey4uLnBhcmFtc30vPlxuXHR9XG59XG5cblBhZ2UgPSBicmFuY2goe1xuXHRhcHA6IFsnYXBwJ10sXG5cdHBhZ2U6IFsncGFnZXMnLCdwb3N0J10sXG59LCBQYWdlKTtcblxuUGFnZSA9IGNvbm5lY3QobWFwU3RhdGVUb1Byb3BzLCBtYXBEaXNwYXRjaFRvUHJvcHMpKFBhZ2UpO1xuXG53aXRoUm91dGVyKFBhZ2UpO1xuZXhwb3J0IGRlZmF1bHQgUGFnZTsiLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IENvbXBvbmVudCBmcm9tICdjb3JlL2NvbXBvbmVudHMvY29tcG9uZW50JztcbmltcG9ydCBHcmlkQ29udGFpbmVyIGZyb20gJ2ptYXJyb3lhdmUvY29tcG9uZW50cy91eGkvY29yZS9ncmlkX2NvbnRhaW5lcic7XG5pbXBvcnQgR3JpZEl0ZW0gZnJvbSAnam1hcnJveWF2ZS9jb21wb25lbnRzL3V4aS9jb3JlL2dyaWRfaXRlbSc7XG5pbXBvcnQgU3RhclJhdGluZ3MgZnJvbSAncmVhY3Qtc3Rhci1yYXRpbmdzJztcbmltcG9ydCBMb2FkaW5nIGZyb20gJ2NvcmUvdWkvbG9hZGluZyc7XG5pbXBvcnQgXCIuL2NvdXJzZXMuc2Nzc1wiO1xuXG5mdW5jdGlvbiBDb3Vyc2VzKHtkYXRhfSl7XG5cdHZhciBrZXkgPSAwO1xuXG5cdGlmKCFkYXRhKSByZXR1cm4gPExvYWRpbmcvPjtcblxuXHRyZXR1cm4gKFxuXHRcdDxkaXY+XG5cdFx0XHR7ZGF0YS5tYXAoKGl0ZW0pPT5cblx0XHRcdFx0PENvdXJzZSBkYXRhPXtpdGVtfSBrZXk9e2tleSsrfS8+XG5cdFx0XHQpfVx0XG5cdFx0PC9kaXY+XHRcblx0KVxufVxuXG5cbmZ1bmN0aW9uIENvdXJzZSh7ZGF0YX0pe1xuXHRyZXR1cm4gKFxuXHRcdDxHcmlkSXRlbSBjbGFzc05hbWU9J2NvdXJzZSc+XG5cdCAgICAgIDxkaXYgY2xhc3NOYW1lPSdoZWFkZXInPlxuICAgIFx0ICAgIDxkaXYgY2xhc3NOYW1lPSdwbGF0Zm9ybSc+e2RhdGEucGxhdGZvcm19PC9kaXY+XG5cdCAgICAgICAgPGRpdiBjbGFzc05hbWU9J3JhdGluZyc+PFN0YXJSYXRpbmdzIHJhdGluZz17ZGF0YS5yYXRpbmd9IHN0YXJSYXRlZENvbG9yPVwiIzIyMlwiIG51bWJlck9mU3RhcnM9ezV9IHN0YXJEaW1lbnNpb249JzhweCcgc3RhclNwYWNpbmc9XCIycHhcIi8+PC9kaXY+XG5cdCAgICAgIDwvZGl2PlxuXHQgIFx0XHQ8ZGl2IGNsYXNzTmFtZT0nbmFtZSc+e2RhdGEubmFtZX08L2Rpdj5cblx0XHQgICAgPGRpdiBjbGFzc05hbWU9J2Zyb20nPntkYXRhLmZyb219PC9kaXY+XG5cdCAgXHRcdHsoZGF0YS5jb21tZW50cyAhPSBcIlwiKSA/IDxkaXYgY2xhc3NOYW1lPSdjb21tZW50cyc+Q29tZW50YXJpb3M6IHtkYXRhLmNvbW1lbnRzfTwvZGl2PiA6IFwiXCJ9XG5cdFx0PC9HcmlkSXRlbT5cblx0KVxufVxuXG5jbGFzcyBMaXN0IGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcblx0Y29uc3RydWN0b3IocHJvcHMsY29udGV4dCkge1xuXHRcdHN1cGVyKHByb3BzLGNvbnRleHQpO1xuXHRcdHRoaXMuYXBpID0gd2luZG93Ll9fYXBpO1xuXHR9XG5cblx0cmVuZGVyKCl7XG5cdFx0Y29uc3QgZGF0YSA9IHRoaXMucHJvcHMuZGF0YTtcblx0XHRyZXR1cm4gKFxuXHRcdFx0PEdyaWRDb250YWluZXIgY2xhc3NOYW1lPSdtb2QtY291cnNlcy1saXN0Jz5cblx0XHRcdFx0PEdyaWRJdGVtPlxuXHRcdFx0XHQ8aDM+Q3Vyc29zPC9oMz5cblx0XHRcdFx0PC9HcmlkSXRlbT5cblx0XHRcdFx0PENvdXJzZXMgZGF0YT17ZGF0YX0vPlxuXHRcdFx0PC9HcmlkQ29udGFpbmVyPlxuXHRcdCk7XG5cdH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgQ29tcG9uZW50KExpc3QpOyIsIlxudmFyIGNvbnRlbnQgPSByZXF1aXJlKFwiISEuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9mcmFtZXdvcmtzL3dlYmFwcHMvc3RhcnR1cC9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9mcmFtZXdvcmtzL3dlYmFwcHMvc3RhcnR1cC9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvbGliL2xvYWRlci5qcyEuL2NvdXJzZXMuc2Nzc1wiKTtcblxuaWYodHlwZW9mIGNvbnRlbnQgPT09ICdzdHJpbmcnKSBjb250ZW50ID0gW1ttb2R1bGUuaWQsIGNvbnRlbnQsICcnXV07XG5cbnZhciB0cmFuc2Zvcm07XG52YXIgaW5zZXJ0SW50bztcblxuXG5cbnZhciBvcHRpb25zID0ge1wiaG1yXCI6dHJ1ZX1cblxub3B0aW9ucy50cmFuc2Zvcm0gPSB0cmFuc2Zvcm1cbm9wdGlvbnMuaW5zZXJ0SW50byA9IHVuZGVmaW5lZDtcblxudmFyIHVwZGF0ZSA9IHJlcXVpcmUoXCIhLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vZnJhbWV3b3Jrcy93ZWJhcHBzL3N0YXJ0dXAvbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9saWIvYWRkU3R5bGVzLmpzXCIpKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5pZihjb250ZW50LmxvY2FscykgbW9kdWxlLmV4cG9ydHMgPSBjb250ZW50LmxvY2FscztcblxuaWYobW9kdWxlLmhvdCkge1xuXHRtb2R1bGUuaG90LmFjY2VwdChcIiEhLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vZnJhbWV3b3Jrcy93ZWJhcHBzL3N0YXJ0dXAvbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vZnJhbWV3b3Jrcy93ZWJhcHBzL3N0YXJ0dXAvbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2xpYi9sb2FkZXIuanMhLi9jb3Vyc2VzLnNjc3NcIiwgZnVuY3Rpb24oKSB7XG5cdFx0dmFyIG5ld0NvbnRlbnQgPSByZXF1aXJlKFwiISEuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9mcmFtZXdvcmtzL3dlYmFwcHMvc3RhcnR1cC9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9mcmFtZXdvcmtzL3dlYmFwcHMvc3RhcnR1cC9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvbGliL2xvYWRlci5qcyEuL2NvdXJzZXMuc2Nzc1wiKTtcblxuXHRcdGlmKHR5cGVvZiBuZXdDb250ZW50ID09PSAnc3RyaW5nJykgbmV3Q29udGVudCA9IFtbbW9kdWxlLmlkLCBuZXdDb250ZW50LCAnJ11dO1xuXG5cdFx0dmFyIGxvY2FscyA9IChmdW5jdGlvbihhLCBiKSB7XG5cdFx0XHR2YXIga2V5LCBpZHggPSAwO1xuXG5cdFx0XHRmb3Ioa2V5IGluIGEpIHtcblx0XHRcdFx0aWYoIWIgfHwgYVtrZXldICE9PSBiW2tleV0pIHJldHVybiBmYWxzZTtcblx0XHRcdFx0aWR4Kys7XG5cdFx0XHR9XG5cblx0XHRcdGZvcihrZXkgaW4gYikgaWR4LS07XG5cblx0XHRcdHJldHVybiBpZHggPT09IDA7XG5cdFx0fShjb250ZW50LmxvY2FscywgbmV3Q29udGVudC5sb2NhbHMpKTtcblxuXHRcdGlmKCFsb2NhbHMpIHRocm93IG5ldyBFcnJvcignQWJvcnRpbmcgQ1NTIEhNUiBkdWUgdG8gY2hhbmdlZCBjc3MtbW9kdWxlcyBsb2NhbHMuJyk7XG5cblx0XHR1cGRhdGUobmV3Q29udGVudCk7XG5cdH0pO1xuXG5cdG1vZHVsZS5ob3QuZGlzcG9zZShmdW5jdGlvbigpIHsgdXBkYXRlKCk7IH0pO1xufSIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgQ29tcG9uZW50IGZyb20gJ2NvcmUvY29tcG9uZW50cy9jb21wb25lbnQnO1xuaW1wb3J0IEdyaWRDb250YWluZXIgZnJvbSAnam1hcnJveWF2ZS9jb21wb25lbnRzL3V4aS9jb3JlL2dyaWRfY29udGFpbmVyJztcbmltcG9ydCBHcmlkSXRlbSBmcm9tICdqbWFycm95YXZlL2NvbXBvbmVudHMvdXhpL2NvcmUvZ3JpZF9pdGVtJztcbmltcG9ydCBTdGFyUmF0aW5ncyBmcm9tICdyZWFjdC1zdGFyLXJhdGluZ3MnO1xuaW1wb3J0IExvYWRpbmcgZnJvbSAnY29yZS91aS9sb2FkaW5nJztcbmltcG9ydCBcIi4vY291cnNlcy5zY3NzXCI7XG5cbmZ1bmN0aW9uIENvdXJzZXMoe2RhdGF9KXtcblx0dmFyIGtleSA9IDA7XG5cblx0aWYoIWRhdGEpIHJldHVybiA8TG9hZGluZy8+O1xuXG5cdHJldHVybiAoXG5cdFx0PGRpdj5cblx0XHRcdHtkYXRhLm1hcCgoaXRlbSk9PlxuXHRcdFx0XHQ8Q291cnNlIGRhdGE9e2l0ZW19IGtleT17a2V5Kyt9Lz5cblx0XHRcdCl9XHRcblx0XHQ8L2Rpdj5cdFxuXHQpXG59XG5cblxuZnVuY3Rpb24gQ291cnNlKHtkYXRhfSl7XG5cdHJldHVybiAoXG5cdFx0PEdyaWRJdGVtIGNsYXNzTmFtZT0nY291cnNlJz5cblx0ICAgICAgPGRpdiBjbGFzc05hbWU9J2hlYWRlcic+XG4gICAgXHQgICAgPGRpdiBjbGFzc05hbWU9J3BsYXRmb3JtJz57ZGF0YS5wbGF0Zm9ybX08L2Rpdj5cblx0ICAgICAgICA8ZGl2IGNsYXNzTmFtZT0ncmF0aW5nJz48U3RhclJhdGluZ3MgcmF0aW5nPXtkYXRhLnJhdGluZ30gc3RhclJhdGVkQ29sb3I9XCIjMjIyXCIgbnVtYmVyT2ZTdGFycz17NX0gc3RhckRpbWVuc2lvbj0nOHB4JyBzdGFyU3BhY2luZz1cIjJweFwiLz48L2Rpdj5cblx0ICAgICAgPC9kaXY+XG5cdCAgXHRcdDxkaXYgY2xhc3NOYW1lPSduYW1lJz57ZGF0YS5uYW1lfTwvZGl2PlxuXHRcdCAgICA8ZGl2IGNsYXNzTmFtZT0nZnJvbSc+e2RhdGEuZnJvbX08L2Rpdj5cblx0ICBcdFx0eyhkYXRhLmNvbW1lbnRzICE9IFwiXCIpID8gPGRpdiBjbGFzc05hbWU9J2NvbW1lbnRzJz5Db21lbnRhcmlvczoge2RhdGEuY29tbWVudHN9PC9kaXY+IDogXCJcIn1cblx0XHQ8L0dyaWRJdGVtPlxuXHQpXG59XG5cbmNsYXNzIExpc3QgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuXHRjb25zdHJ1Y3Rvcihwcm9wcyxjb250ZXh0KSB7XG5cdFx0c3VwZXIocHJvcHMsY29udGV4dCk7XG5cdFx0dGhpcy5hcGkgPSB3aW5kb3cuX19hcGk7XG5cdH1cblxuXHRyZW5kZXIoKXtcblx0XHRjb25zdCBkYXRhID0gdGhpcy5wcm9wcy5kYXRhO1xuXHRcdHJldHVybiAoXG5cdFx0XHQ8R3JpZENvbnRhaW5lciBjbGFzc05hbWU9J21vZC1jb3Vyc2VzLWxpc3QnPlxuXHRcdFx0XHQ8R3JpZEl0ZW0+XG5cdFx0XHRcdDxoMz5DdXJzb3M8L2gzPlxuXHRcdFx0XHQ8L0dyaWRJdGVtPlxuXHRcdFx0XHQ8Q291cnNlcyBkYXRhPXtkYXRhfS8+XG5cdFx0XHQ8L0dyaWRDb250YWluZXI+XG5cdFx0KTtcblx0fVxufVxuXG5leHBvcnQgZGVmYXVsdCBDb21wb25lbnQoTGlzdCk7IiwiXG52YXIgY29udGVudCA9IHJlcXVpcmUoXCIhIS4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL2ZyYW1ld29ya3Mvd2ViYXBwcy9zdGFydHVwL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL2ZyYW1ld29ya3Mvd2ViYXBwcy9zdGFydHVwL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9saWIvbG9hZGVyLmpzIS4vY291cnNlcy5zY3NzXCIpO1xuXG5pZih0eXBlb2YgY29udGVudCA9PT0gJ3N0cmluZycpIGNvbnRlbnQgPSBbW21vZHVsZS5pZCwgY29udGVudCwgJyddXTtcblxudmFyIHRyYW5zZm9ybTtcbnZhciBpbnNlcnRJbnRvO1xuXG5cblxudmFyIG9wdGlvbnMgPSB7XCJobXJcIjp0cnVlfVxuXG5vcHRpb25zLnRyYW5zZm9ybSA9IHRyYW5zZm9ybVxub3B0aW9ucy5pbnNlcnRJbnRvID0gdW5kZWZpbmVkO1xuXG52YXIgdXBkYXRlID0gcmVxdWlyZShcIiEuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9mcmFtZXdvcmtzL3dlYmFwcHMvc3RhcnR1cC9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2xpYi9hZGRTdHlsZXMuanNcIikoY29udGVudCwgb3B0aW9ucyk7XG5cbmlmKGNvbnRlbnQubG9jYWxzKSBtb2R1bGUuZXhwb3J0cyA9IGNvbnRlbnQubG9jYWxzO1xuXG5pZihtb2R1bGUuaG90KSB7XG5cdG1vZHVsZS5ob3QuYWNjZXB0KFwiISEuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9mcmFtZXdvcmtzL3dlYmFwcHMvc3RhcnR1cC9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9mcmFtZXdvcmtzL3dlYmFwcHMvc3RhcnR1cC9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvbGliL2xvYWRlci5qcyEuL2NvdXJzZXMuc2Nzc1wiLCBmdW5jdGlvbigpIHtcblx0XHR2YXIgbmV3Q29udGVudCA9IHJlcXVpcmUoXCIhIS4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL2ZyYW1ld29ya3Mvd2ViYXBwcy9zdGFydHVwL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL2ZyYW1ld29ya3Mvd2ViYXBwcy9zdGFydHVwL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9saWIvbG9hZGVyLmpzIS4vY291cnNlcy5zY3NzXCIpO1xuXG5cdFx0aWYodHlwZW9mIG5ld0NvbnRlbnQgPT09ICdzdHJpbmcnKSBuZXdDb250ZW50ID0gW1ttb2R1bGUuaWQsIG5ld0NvbnRlbnQsICcnXV07XG5cblx0XHR2YXIgbG9jYWxzID0gKGZ1bmN0aW9uKGEsIGIpIHtcblx0XHRcdHZhciBrZXksIGlkeCA9IDA7XG5cblx0XHRcdGZvcihrZXkgaW4gYSkge1xuXHRcdFx0XHRpZighYiB8fCBhW2tleV0gIT09IGJba2V5XSkgcmV0dXJuIGZhbHNlO1xuXHRcdFx0XHRpZHgrKztcblx0XHRcdH1cblxuXHRcdFx0Zm9yKGtleSBpbiBiKSBpZHgtLTtcblxuXHRcdFx0cmV0dXJuIGlkeCA9PT0gMDtcblx0XHR9KGNvbnRlbnQubG9jYWxzLCBuZXdDb250ZW50LmxvY2FscykpO1xuXG5cdFx0aWYoIWxvY2FscykgdGhyb3cgbmV3IEVycm9yKCdBYm9ydGluZyBDU1MgSE1SIGR1ZSB0byBjaGFuZ2VkIGNzcy1tb2R1bGVzIGxvY2Fscy4nKTtcblxuXHRcdHVwZGF0ZShuZXdDb250ZW50KTtcblx0fSk7XG5cblx0bW9kdWxlLmhvdC5kaXNwb3NlKGZ1bmN0aW9uKCkgeyB1cGRhdGUoKTsgfSk7XG59IiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuaW1wb3J0ICcuL3NvY2lhbF9uZXR3b3Jrcy5zY3NzJztcblxuY2xhc3MgQ29tcG9uZW50IGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgcmVuZGVyKCkge1xuICAgIHJldHVybiAoXG5cdCAgPGRpdiBjbGFzc05hbWU9XCJtb2Qtc29jaWFsLWljb25zIGxheW91dC1hbGlnbi1jZW50ZXItY2VudGVyIGxheW91dC1jb2x1bW4gZmxleFwiPlxuXHQgICAgPGEgaHJlZj1cImh0dHA6Ly90d2l0dGVyLmNvbS9qbWFycm95YXZlXCI+XG5cdFx0XHRcdDxzcGFuIGNsYXNzTmFtZT1cImZhLXN0YWNrIGZhLWxnXCI+XG5cdFx0XHRcdCAgPGkgY2xhc3NOYW1lPVwiZmEgZmEtc3F1YXJlLW8gZmEtc3RhY2stMnhcIj48L2k+XG5cdFx0XHRcdCAgPGkgY2xhc3NOYW1lPVwiZmEgZmEtdHdpdHRlciBmYS1zdGFjay0xeFwiIHN0eWxlPXt7Y29sb3I6ICcjMDBhY2VkJ319PjwvaT5cblx0XHRcdFx0PC9zcGFuPlxuXHRcdFx0PC9hPlxuXHQgICAgPGEgaHJlZj1cImh0dHA6Ly9mYWNlYm9vay5jb20vam1hcnJveWF2ZVwiPlxuXHRcdFx0XHQ8c3BhbiBjbGFzc05hbWU9XCJmYS1zdGFjayBmYS1sZ1wiPlxuXHRcdFx0XHQgIDxpIGNsYXNzTmFtZT1cImZhIGZhLXNxdWFyZS1vIGZhLXN0YWNrLTJ4XCI+PC9pPlxuXHRcdFx0XHQgIDxpIGNsYXNzTmFtZT1cImZhIGZhLWZhY2Vib29rIGZhLXN0YWNrLTF4XCIgc3R5bGU9e3tjb2xvcjogJyMzYjU5OTgnfX0+PC9pPlxuXHRcdFx0XHQ8L3NwYW4+XHQgICAgXG5cdFx0XHQ8L2E+XG5cdCAgICA8YSBocmVmPVwiaHR0cDovL2d0LmxpbmtlZGluLmNvbS9qbWFycm95YXZlXCI+XG5cdFx0XHRcdDxzcGFuIGNsYXNzTmFtZT1cImZhLXN0YWNrIGZhLWxnXCI+XG5cdFx0XHRcdCAgPGkgY2xhc3NOYW1lPVwiZmEgZmEtc3F1YXJlLW8gZmEtc3RhY2stMnhcIj48L2k+XG5cdFx0XHRcdCAgPGkgY2xhc3NOYW1lPVwiZmEgZmEtbGlua2VkaW4gZmEtc3RhY2stMXhcIiBzdHlsZT17e2NvbG9yOiAnIzAwNzdCNSd9fT48L2k+XG5cdFx0XHRcdDwvc3Bhbj5cdCAgICBcblx0XHRcdDwvYT5cblx0ICAgIDxhIGhyZWY9XCJodHRwOi8vcGx1cy5nb29nbGUuY29tLzExMjYxODcyMDk0NTc1OTgxOTAxN1wiPlxuXHRcdFx0XHQ8c3BhbiBjbGFzc05hbWU9XCJmYS1zdGFjayBmYS1sZ1wiPlxuXHRcdFx0XHQgIDxpIGNsYXNzTmFtZT1cImZhIGZhLXNxdWFyZS1vIGZhLXN0YWNrLTJ4XCI+PC9pPlxuXHRcdFx0XHQgIDxpIGNsYXNzTmFtZT1cImZhIGZhLWdvb2dsZS1wbHVzIGZhLXN0YWNrLTF4XCIgc3R5bGU9e3tjb2xvcjogJyNkMzQ4MzYnfX0+PC9pPlxuXHRcdFx0XHQ8L3NwYW4+XHQgICAgXG5cdFx0XHQ8L2E+XG5cdCAgICA8YSBocmVmPVwiaHR0cDovL2dpdGh1Yi5jb20vam1hcnJveWF2ZVwiPlxuXHRcdFx0XHQ8c3BhbiBjbGFzc05hbWU9XCJmYS1zdGFjayBmYS1sZ1wiPlxuXHRcdFx0XHQgIDxpIGNsYXNzTmFtZT1cImZhIGZhLXNxdWFyZS1vIGZhLXN0YWNrLTJ4XCI+PC9pPlxuXHRcdFx0XHQgIDxpIGNsYXNzTmFtZT1cImZhIGZhLWdpdGh1YiBmYS1zdGFjay0xeFwiIHN0eWxlPXt7Y29sb3I6ICcjMDAwJ319PjwvaT5cblx0XHRcdFx0PC9zcGFuPlx0ICAgIFxuXHRcdFx0PC9hPlxuXHQgICAgPGEgaHJlZj1cIm1haWx0bzpqbWFycm95YXZlLmNvbXBzY2lAZ21haWwuY29tXCIgY2xhc3NOYW1lPSdub3QtcmVsZWFzZWQnPlxuXHRcdFx0XHQ8c3BhbiBjbGFzc05hbWU9XCJmYS1zdGFjayBmYS1sZ1wiPlxuXHRcdFx0XHQgIDxpIGNsYXNzTmFtZT1cImZhIGZhLXNxdWFyZS1vIGZhLXN0YWNrLTJ4XCI+PC9pPlxuXHRcdFx0XHQgIDxpIGNsYXNzTmFtZT1cImZhIGZhLWVudmVsb3BlLW8gZmEtc3RhY2stMXhcIiBzdHlsZT17e2NvbG9yOiAnIzAwMCd9fT48L2k+XG5cdFx0XHRcdDwvc3Bhbj5cblx0ICAgIDwvYT4gICAgXG5cdCAgPC9kaXY+XG4gICAgKTtcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCAoQ29tcG9uZW50KTsiLCJcbnZhciBjb250ZW50ID0gcmVxdWlyZShcIiEhLi4vLi4vLi4vLi4vLi4vLi4vLi4vZnJhbWV3b3Jrcy93ZWJhcHBzL3N0YXJ0dXAvbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi4vLi4vLi4vLi4vLi4vLi4vLi4vZnJhbWV3b3Jrcy93ZWJhcHBzL3N0YXJ0dXAvbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2xpYi9sb2FkZXIuanMhLi9zb2NpYWxfbmV0d29ya3Muc2Nzc1wiKTtcblxuaWYodHlwZW9mIGNvbnRlbnQgPT09ICdzdHJpbmcnKSBjb250ZW50ID0gW1ttb2R1bGUuaWQsIGNvbnRlbnQsICcnXV07XG5cbnZhciB0cmFuc2Zvcm07XG52YXIgaW5zZXJ0SW50bztcblxuXG5cbnZhciBvcHRpb25zID0ge1wiaG1yXCI6dHJ1ZX1cblxub3B0aW9ucy50cmFuc2Zvcm0gPSB0cmFuc2Zvcm1cbm9wdGlvbnMuaW5zZXJ0SW50byA9IHVuZGVmaW5lZDtcblxudmFyIHVwZGF0ZSA9IHJlcXVpcmUoXCIhLi4vLi4vLi4vLi4vLi4vLi4vLi4vZnJhbWV3b3Jrcy93ZWJhcHBzL3N0YXJ0dXAvbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9saWIvYWRkU3R5bGVzLmpzXCIpKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5pZihjb250ZW50LmxvY2FscykgbW9kdWxlLmV4cG9ydHMgPSBjb250ZW50LmxvY2FscztcblxuaWYobW9kdWxlLmhvdCkge1xuXHRtb2R1bGUuaG90LmFjY2VwdChcIiEhLi4vLi4vLi4vLi4vLi4vLi4vLi4vZnJhbWV3b3Jrcy93ZWJhcHBzL3N0YXJ0dXAvbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi4vLi4vLi4vLi4vLi4vLi4vLi4vZnJhbWV3b3Jrcy93ZWJhcHBzL3N0YXJ0dXAvbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2xpYi9sb2FkZXIuanMhLi9zb2NpYWxfbmV0d29ya3Muc2Nzc1wiLCBmdW5jdGlvbigpIHtcblx0XHR2YXIgbmV3Q29udGVudCA9IHJlcXVpcmUoXCIhIS4uLy4uLy4uLy4uLy4uLy4uLy4uL2ZyYW1ld29ya3Mvd2ViYXBwcy9zdGFydHVwL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4uLy4uLy4uLy4uLy4uLy4uLy4uL2ZyYW1ld29ya3Mvd2ViYXBwcy9zdGFydHVwL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9saWIvbG9hZGVyLmpzIS4vc29jaWFsX25ldHdvcmtzLnNjc3NcIik7XG5cblx0XHRpZih0eXBlb2YgbmV3Q29udGVudCA9PT0gJ3N0cmluZycpIG5ld0NvbnRlbnQgPSBbW21vZHVsZS5pZCwgbmV3Q29udGVudCwgJyddXTtcblxuXHRcdHZhciBsb2NhbHMgPSAoZnVuY3Rpb24oYSwgYikge1xuXHRcdFx0dmFyIGtleSwgaWR4ID0gMDtcblxuXHRcdFx0Zm9yKGtleSBpbiBhKSB7XG5cdFx0XHRcdGlmKCFiIHx8IGFba2V5XSAhPT0gYltrZXldKSByZXR1cm4gZmFsc2U7XG5cdFx0XHRcdGlkeCsrO1xuXHRcdFx0fVxuXG5cdFx0XHRmb3Ioa2V5IGluIGIpIGlkeC0tO1xuXG5cdFx0XHRyZXR1cm4gaWR4ID09PSAwO1xuXHRcdH0oY29udGVudC5sb2NhbHMsIG5ld0NvbnRlbnQubG9jYWxzKSk7XG5cblx0XHRpZighbG9jYWxzKSB0aHJvdyBuZXcgRXJyb3IoJ0Fib3J0aW5nIENTUyBITVIgZHVlIHRvIGNoYW5nZWQgY3NzLW1vZHVsZXMgbG9jYWxzLicpO1xuXG5cdFx0dXBkYXRlKG5ld0NvbnRlbnQpO1xuXHR9KTtcblxuXHRtb2R1bGUuaG90LmRpc3Bvc2UoZnVuY3Rpb24oKSB7IHVwZGF0ZSgpOyB9KTtcbn0iXSwic291cmNlUm9vdCI6IiJ9