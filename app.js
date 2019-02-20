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
/******/ 	// script path function
/******/ 	function jsonpScriptSrc(chunkId) {
/******/ 		return __webpack_require__.p + "" + ({}[chunkId]||chunkId) + ".js"
/******/ 	}
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
/******/ 	// This file contains only the entry chunk.
/******/ 	// The chunk loading function for additional chunks
/******/ 	__webpack_require__.e = function requireEnsure(chunkId) {
/******/ 		var promises = [];
/******/
/******/
/******/ 		// JSONP chunk loading for javascript
/******/
/******/ 		var installedChunkData = installedChunks[chunkId];
/******/ 		if(installedChunkData !== 0) { // 0 means "already installed".
/******/
/******/ 			// a Promise means "currently loading".
/******/ 			if(installedChunkData) {
/******/ 				promises.push(installedChunkData[2]);
/******/ 			} else {
/******/ 				// setup Promise in chunk cache
/******/ 				var promise = new Promise(function(resolve, reject) {
/******/ 					installedChunkData = installedChunks[chunkId] = [resolve, reject];
/******/ 				});
/******/ 				promises.push(installedChunkData[2] = promise);
/******/
/******/ 				// start chunk loading
/******/ 				var script = document.createElement('script');
/******/ 				var onScriptComplete;
/******/
/******/ 				script.charset = 'utf-8';
/******/ 				script.timeout = 120;
/******/ 				if (__webpack_require__.nc) {
/******/ 					script.setAttribute("nonce", __webpack_require__.nc);
/******/ 				}
/******/ 				script.src = jsonpScriptSrc(chunkId);
/******/
/******/ 				onScriptComplete = function (event) {
/******/ 					// avoid mem leaks in IE.
/******/ 					script.onerror = script.onload = null;
/******/ 					clearTimeout(timeout);
/******/ 					var chunk = installedChunks[chunkId];
/******/ 					if(chunk !== 0) {
/******/ 						if(chunk) {
/******/ 							var errorType = event && (event.type === 'load' ? 'missing' : event.type);
/******/ 							var realSrc = event && event.target && event.target.src;
/******/ 							var error = new Error('Loading chunk ' + chunkId + ' failed.\n(' + errorType + ': ' + realSrc + ')');
/******/ 							error.type = errorType;
/******/ 							error.request = realSrc;
/******/ 							chunk[1](error);
/******/ 						}
/******/ 						installedChunks[chunkId] = undefined;
/******/ 					}
/******/ 				};
/******/ 				var timeout = setTimeout(function(){
/******/ 					onScriptComplete({ type: 'timeout', target: script });
/******/ 				}, 120000);
/******/ 				script.onerror = script.onload = onScriptComplete;
/******/ 				document.head.appendChild(script);
/******/ 			}
/******/ 		}
/******/ 		return Promise.all(promises);
/******/ 	};
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
/******/ 	// on error function for async loading
/******/ 	__webpack_require__.oe = function(err) { console.error(err); throw err; };
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

/***/ "../../../../frameworks/webapps/startup/node_modules/css-loader/index.js!../../../../frameworks/webapps/startup/node_modules/sass-loader/lib/loader.js!./src/jmarroyave/components/uxi/core/com_version.scss":
/*!****************************************************************************************************************************************************************************************************************!*\
  !*** /media/jm/labs/frameworks/webapps/startup/node_modules/css-loader!/media/jm/labs/frameworks/webapps/startup/node_modules/sass-loader/lib/loader.js!./src/jmarroyave/components/uxi/core/com_version.scss ***!
  \****************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../../../../../../frameworks/webapps/startup/node_modules/css-loader/lib/css-base.js */ "../../../../frameworks/webapps/startup/node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".mod-version {\n  width: 100%;\n  background-color: white;\n  padding: 10px; }\n", ""]);

// exports


/***/ }),

/***/ "../../../../frameworks/webapps/startup/node_modules/css-loader/index.js!../../../../frameworks/webapps/startup/node_modules/sass-loader/lib/loader.js!./src/jmarroyave/components/uxi/core/page/footer.scss":
/*!****************************************************************************************************************************************************************************************************************!*\
  !*** /media/jm/labs/frameworks/webapps/startup/node_modules/css-loader!/media/jm/labs/frameworks/webapps/startup/node_modules/sass-loader/lib/loader.js!./src/jmarroyave/components/uxi/core/page/footer.scss ***!
  \****************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../../../../../../../frameworks/webapps/startup/node_modules/css-loader/lib/css-base.js */ "../../../../frameworks/webapps/startup/node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".mod-footer {\n  background-color: #555;\n  color: white;\n  padding: 20px 20px 20px 30px; }\n\n.mod-footer a:visited,\n.mod-footer a:link {\n  color: white;\n  text-decoration: none; }\n", ""]);

// exports


/***/ }),

/***/ "../../../../frameworks/webapps/startup/node_modules/css-loader/index.js!../../../../frameworks/webapps/startup/node_modules/sass-loader/lib/loader.js!./src/jmarroyave/components/uxi/core/whats_hot.scss":
/*!**************************************************************************************************************************************************************************************************************!*\
  !*** /media/jm/labs/frameworks/webapps/startup/node_modules/css-loader!/media/jm/labs/frameworks/webapps/startup/node_modules/sass-loader/lib/loader.js!./src/jmarroyave/components/uxi/core/whats_hot.scss ***!
  \**************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../../../../../../frameworks/webapps/startup/node_modules/css-loader/lib/css-base.js */ "../../../../frameworks/webapps/startup/node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".mod-whats-hot {\n  text-align: center;\n  font-size: 0.8em; }\n", ""]);

// exports


/***/ }),

/***/ "../../../../frameworks/webapps/startup/node_modules/css-loader/index.js!../../../../frameworks/webapps/startup/node_modules/sass-loader/lib/loader.js!./src/jmarroyave/index.scss":
/*!**************************************************************************************************************************************************************************************!*\
  !*** /media/jm/labs/frameworks/webapps/startup/node_modules/css-loader!/media/jm/labs/frameworks/webapps/startup/node_modules/sass-loader/lib/loader.js!./src/jmarroyave/index.scss ***!
  \**************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../../../frameworks/webapps/startup/node_modules/css-loader/lib/css-base.js */ "../../../../frameworks/webapps/startup/node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/***/ }),

/***/ "../../../../frameworks/webapps/startup/node_modules/css-loader/index.js!../../../../frameworks/webapps/startup/node_modules/sass-loader/lib/loader.js!./src/shared/jmarroyave/social_networks.scss":
/*!*******************************************************************************************************************************************************************************************************!*\
  !*** /media/jm/labs/frameworks/webapps/startup/node_modules/css-loader!/media/jm/labs/frameworks/webapps/startup/node_modules/sass-loader/lib/loader.js!./src/shared/jmarroyave/social_networks.scss ***!
  \*******************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../../../../frameworks/webapps/startup/node_modules/css-loader/lib/css-base.js */ "../../../../frameworks/webapps/startup/node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".mod-social-icons {\n  display: inline-block;\n  text-align: center;\n  margin: 10px 0; }\n\n.mod-social-icons a {\n  font-size: 14px !important;\n  margin-right: 5px; }\n\n.mod-social-icons a:hover {\n  text-decoration: none; }\n\n.mod-social-icons a i {\n  background-color: white;\n  background-position: center center;\n  line-height: 32px;\n  border-radius: 8px;\n  border: 1px solid #a0a0a0;\n  height: 38px;\n  width: 38px;\n  padding-top: 2px; }\n", ""]);

// exports


/***/ }),

/***/ "./src/core/app/api.js":
/*!*****************************!*\
  !*** ./src/core/app/api.js ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var core_app_server__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core/app/server */ "./src/core/app/server.js");
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }



var API = function () {
	function API(props) {
		_classCallCheck(this, API);

		this.error = "";
		this.current_component = props.current_component;
		this.components = props.components;
		this.local = props.local;
		this.title = props.title;
		this.debug = props.debug;

		this.server = new core_app_server__WEBPACK_IMPORTED_MODULE_0__["default"]({ debug: this.debug, local: this.local });
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

			this.current_component = { id: item.id, family: item.family, version: item.version };
		}
	}]);

	return API;
}();

/* harmony default export */ __webpack_exports__["default"] = (API);

/***/ }),

/***/ "./src/core/app/server.js":
/*!********************************!*\
  !*** ./src/core/app/server.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }



var Server = function () {
  function Server(props) {
    _classCallCheck(this, Server);

    this.onStartLoading = null;
    this.onStopLoading = null;
    this.onError = null;

    var connections = [{ protocol: 'http', server: '192.168.1.150', path: '/data' }, { protocol: 'https', server: 'jmarroyave-search-backend.herokuapp.com', path: '' }, { protocol: 'https', server: 'jmarroyave-data-server.herokuapp.com', path: '' }];

    var current = props && props.local == false ? connections[2] : connections[0];
    this.serverURI = current.protocol + '://' + current.server + current.path;
    this.debug = !props || props.debug ? true : false;
  }

  _createClass(Server, [{
    key: 'triggerOnStartLoading',
    value: function triggerOnStartLoading() {
      if (this.onStartLoading) {
        this.onStartLoading();
      }
    }
  }, {
    key: 'triggerOnStopLoading',
    value: function triggerOnStopLoading() {
      if (this.onStopLoading) this.onStopLoading();
    }
  }, {
    key: 'triggerOnError',
    value: function triggerOnError(err) {
      if (this.onError) this.onError(err);
    }
  }, {
    key: 'exec',
    value: function exec(method, uri, params, config, callback, callback_err) {
      var _this = this;

      var $this = this;
      var url = uri.indexOf("http") == 0 || uri.indexOf(".") == 0 ? uri : this.serverURI + uri;
      var p;
      this.triggerOnStartLoading();
      var timeout = 60 * 1000;

      if (method === 'get') {
        p = axios__WEBPACK_IMPORTED_MODULE_0___default.a.get(url, {
          params: params,
          timeout: config && config.timeout ? config.timeout : timeout
        });
      } else {
        p = axios__WEBPACK_IMPORTED_MODULE_0___default.a.post(url, params, {
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
    key: 'getp',
    value: function getp(uri, params) {
      var $this = this;
      return new Promise(function (resolve, reject) {
        $this.get(uri, params, function (data) {
          resolve(data);
        });
      });
    }
  }, {
    key: 'get',
    value: function get(uri, params, callback) {
      if (params.params) params = params.params;
      this.exec('get', uri, params, {}, callback);
    }
  }, {
    key: 'getLong',
    value: function getLong(uri, params, timeout, callback, callback_err) {
      if (params.params) params = params.params;
      this.exec('get', uri, params, { timeout: timeout }, callback, callback_err);
    }
  }, {
    key: 'post',
    value: function post(uri, params, callback, callback_err) {
      if (params.params) params = params.params;
      this.exec('post', uri, params, {}, callback, callback_err);
    }
  }, {
    key: 'fetch',
    value: function fetch(url, params, callback, callback_err) {
      var _this2 = this;

      if (params.params) params = params.params;
      var $this = this;
      this.triggerOnStartLoading();
      axios__WEBPACK_IMPORTED_MODULE_0___default.a.get(url, { params: params }).then(function (response) {
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

/* harmony default export */ __webpack_exports__["default"] = (Server);

/***/ }),

/***/ "./src/core/components/app.js":
/*!************************************!*\
  !*** ./src/core/components/app.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @material-ui/core/styles */ "./node_modules/@material-ui/core/styles/index.js");
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_components_appbar__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core/components/appbar */ "./src/core/components/appbar.js");
/* harmony import */ var core_components_toolbar__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core/components/toolbar */ "./src/core/components/toolbar.js");
/* harmony import */ var core_components_button__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! core/components/button */ "./src/core/components/button.js");
/* harmony import */ var core_components_loading_bar__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! core/components/loading_bar */ "./src/core/components/loading_bar.js");
/* harmony import */ var core_components_snackbar__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! core/components/snackbar */ "./src/core/components/snackbar.js");
/* harmony import */ var _material_ui_core_Hidden__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @material-ui/core/Hidden */ "./node_modules/@material-ui/core/Hidden/index.js");
/* harmony import */ var _material_ui_core_Hidden__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Hidden__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _material_ui_core_Drawer__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @material-ui/core/Drawer */ "./node_modules/@material-ui/core/Drawer/index.js");
/* harmony import */ var _material_ui_core_Drawer__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Drawer__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _material_ui_core_IconButton__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @material-ui/core/IconButton */ "./node_modules/@material-ui/core/IconButton/index.js");
/* harmony import */ var _material_ui_core_IconButton__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_IconButton__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var core_components_icon__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! core/components/icon */ "./src/core/components/icon.js");
/* harmony import */ var _material_ui_core_colors_blue__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @material-ui/core/colors/blue */ "./node_modules/@material-ui/core/colors/blue.js");
/* harmony import */ var _material_ui_core_colors_blue__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_colors_blue__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var _material_ui_core_colors_red__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @material-ui/core/colors/red */ "./node_modules/@material-ui/core/colors/red.js");
/* harmony import */ var _material_ui_core_colors_red__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_colors_red__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var react_helmet__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! react-helmet */ "./node_modules/react-helmet/lib/Helmet.js");
/* harmony import */ var react_helmet__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(react_helmet__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var core_components_error__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! core/components/error */ "./src/core/components/error.js");
/* harmony import */ var _material_ui_core_CssBaseline__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @material-ui/core/CssBaseline */ "./node_modules/@material-ui/core/CssBaseline/index.js");
/* harmony import */ var _material_ui_core_CssBaseline__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_CssBaseline__WEBPACK_IMPORTED_MODULE_16__);
/* harmony import */ var react_router__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! react-router */ "./node_modules/react-router/es/index.js");
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }





















var drawerWidth = 240;

var themeBW = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_1__["createMuiTheme"])({
	palette: {
		primary: {
			light: '#ffffff',
			main: '#fafafa',
			dark: '#c7c7c7',
			contrastText: '#000'
		},
		secondary: {
			light: '#484848',
			main: '#212121',
			dark: '#000',
			contrastText: '#fff'
		}
	},
	typography: {
		// Use the system font instead of the default Roboto font.
		fontFamily: ["Arial"].join(','),
		fontSize: '10px'
	}
});

var styles = function styles(theme) {
	return {
		root: {},
		rootFixed: {
			marginTop: 66
		},
		body: {
			boxSizing: 'border-box',
			margin: 0
		},
		loading: {
			height: 2
		},
		menuButton: {
			marginLeft: 8,
			marginRight: 8
		},
		drawerPaper: {
			position: 'relative',
			height: '100%',
			width: drawerWidth
		},
		title: {
			marginRight: 10,
			fontSize: 14
		}
	};
};

var UIApp = function (_React$Component) {
	_inherits(UIApp, _React$Component);

	function UIApp() {
		_classCallCheck(this, UIApp);

		var _this = _possibleConstructorReturn(this, (UIApp.__proto__ || Object.getPrototypeOf(UIApp)).call(this));

		_this.state = {
			drawerOpen: false
		};
		_this.toggleDrawer = _this.toggleDrawer.bind(_this);
		return _this;
	}

	_createClass(UIApp, [{
		key: 'toggleDrawer',
		value: function toggleDrawer() {
			this.setState({ drawerOpen: !this.state.drawerOpen });
		}
	}, {
		key: 'render',
		value: function render() {
			var key = 0;
			var classes = this.props.classes;
			var title = this.props.title ? this.props.title : '[Set title]';
			var theme = this.props.theme ? this.props.theme : themeBW;
			var page_title = this.props.page_title ? this.props.page_title : title;

			return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
				_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_1__["MuiThemeProvider"],
				{ theme: theme },
				react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_CssBaseline__WEBPACK_IMPORTED_MODULE_16___default.a, null),
				react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
					core_components_error__WEBPACK_IMPORTED_MODULE_15__["default"],
					{ from: '/core/app/root' },
					react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
						'div',
						{ className: this.props.barPosition && this.props.barPosition === 'fixed' ? classes.rootFixed : classes.root },
						react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
							react_helmet__WEBPACK_IMPORTED_MODULE_14___default.a,
							null,
							react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
								'title',
								null,
								page_title
							)
						),
						react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
							core_components_appbar__WEBPACK_IMPORTED_MODULE_2__["default"],
							{ position: this.props.barPosition, className: classes.appbar },
							react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
								core_components_error__WEBPACK_IMPORTED_MODULE_15__["default"],
								{ from: '/core/app/toolbar' },
								react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
									core_components_toolbar__WEBPACK_IMPORTED_MODULE_3__["default"],
									{ style: this.props.barStyle },
									this.props.drawer && react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
										_material_ui_core_IconButton__WEBPACK_IMPORTED_MODULE_9___default.a,
										{ color: 'secondary', 'aria-label': 'open drawer', onClick: this.toggleDrawer, className: classnames__WEBPACK_IMPORTED_MODULE_13___default()(classes.menuButton) },
										react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(core_components_icon__WEBPACK_IMPORTED_MODULE_10__["default"], { icon: 'drawer' })
									),
									this.props.title && this.props.logo === null && react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
										'div',
										{ className: classes.title },
										this.props.title
									),
									this.props.logo && react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
										react_router__WEBPACK_IMPORTED_MODULE_17__["Link"],
										{ to: '/' },
										react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement('img', { alt: 'logo', src: this.props.logo.src, className: this.props.logo.className })
									),
									this.props.toolbar && this.props.toolbar.map(function (item) {
										return item;
									}),
									this.props.menu && this.props.menu.map(function (item) {
										return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
											core_components_button__WEBPACK_IMPORTED_MODULE_4__["default"],
											{ key: key++, href: item.href, color: 'secondary' },
											item.name
										);
									})
								)
							),
							react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(core_components_loading_bar__WEBPACK_IMPORTED_MODULE_5__["default"], { className: classes.loading, server: this.props.server })
						),
						react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(core_components_snackbar__WEBPACK_IMPORTED_MODULE_6__["default"], { server: this.props.server }),
						react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
							core_components_error__WEBPACK_IMPORTED_MODULE_15__["default"],
							{ from: '/core/app/drawer' },
							react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
								_material_ui_core_Drawer__WEBPACK_IMPORTED_MODULE_8___default.a,
								null,
								react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
									'div',
									{ className: classes.drawerPaper, tabIndex: 0, role: 'button' },
									this.props.drawer
								)
							)
						),
						react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
							'div',
							{ className: classes.body },
							react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
								core_components_error__WEBPACK_IMPORTED_MODULE_15__["default"],
								{ from: '/core/app/children' },
								this.props.children
							)
						)
					)
				)
			);
		}
	}]);

	return UIApp;
}(react__WEBPACK_IMPORTED_MODULE_0___default.a.Component);

/* harmony default export */ __webpack_exports__["default"] = (Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_1__["withStyles"])(styles, { withTheme: true })(UIApp));

/***/ }),

/***/ "./src/core/components/app_list.js":
/*!*****************************************!*\
  !*** ./src/core/components/app_list.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }



var AppList = function (_React$Component) {
  _inherits(AppList, _React$Component);

  function AppList() {
    _classCallCheck(this, AppList);

    return _possibleConstructorReturn(this, (AppList.__proto__ || Object.getPrototypeOf(AppList)).apply(this, arguments));
  }

  _createClass(AppList, [{
    key: 'render',
    value: function render() {
      return this.props.children;
    }
  }]);

  return AppList;
}(react__WEBPACK_IMPORTED_MODULE_0___default.a.Component);

AppList.defaultProps = {
  type: 'AppList'
};

/* harmony default export */ __webpack_exports__["default"] = (AppList);

/***/ }),

/***/ "./src/core/components/appbar.js":
/*!***************************************!*\
  !*** ./src/core/components/appbar.js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_components_ui_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core/components/ui_component */ "./src/core/components/ui_component.js");
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/core/styles */ "./node_modules/@material-ui/core/styles/index.js");
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _material_ui_core_AppBar__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/core/AppBar */ "./node_modules/@material-ui/core/AppBar/index.js");
/* harmony import */ var _material_ui_core_AppBar__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_AppBar__WEBPACK_IMPORTED_MODULE_3__);
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }






var styles = function styles(theme) {
  return {
    root: {}
  };
};

var UIAppBar = function (_UIComponent) {
  _inherits(UIAppBar, _UIComponent);

  function UIAppBar() {
    _classCallCheck(this, UIAppBar);

    var _this = _possibleConstructorReturn(this, (UIAppBar.__proto__ || Object.getPrototypeOf(UIAppBar)).call(this));

    _this.state = {};
    return _this;
  }

  _createClass(UIAppBar, [{
    key: 'getDefaults',
    value: function getDefaults() {
      var defaults = {
        position: 'static',
        className: '',
        color: 'primary'
      };
      return defaults;
    }
  }, {
    key: 'componentDidMount',
    value: function componentDidMount() {}
  }, {
    key: 'render',
    value: function render() {
      var _React$createElement;

      var classes = this.props.classes;
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
        _material_ui_core_AppBar__WEBPACK_IMPORTED_MODULE_3___default.a,
        (_React$createElement = { className: classes.root, position: this.state.position }, _defineProperty(_React$createElement, 'className', this.state.className), _defineProperty(_React$createElement, 'color', this.state.color), _React$createElement),
        this.props.children
      );
    }
  }]);

  return UIAppBar;
}(core_components_ui_component__WEBPACK_IMPORTED_MODULE_1__["default"]);

/* harmony default export */ __webpack_exports__["default"] = (Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_2__["withStyles"])(styles)(UIAppBar));

/***/ }),

/***/ "./src/core/components/button.js":
/*!***************************************!*\
  !*** ./src/core/components/button.js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_components_ui_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core/components/ui_component */ "./src/core/components/ui_component.js");
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/core/styles */ "./node_modules/@material-ui/core/styles/index.js");
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _material_ui_core_Button__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/core/Button */ "./node_modules/@material-ui/core/Button/index.js");
/* harmony import */ var _material_ui_core_Button__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _material_ui_core_IconButton__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/core/IconButton */ "./node_modules/@material-ui/core/IconButton/index.js");
/* harmony import */ var _material_ui_core_IconButton__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_IconButton__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var core_components_icon__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! core/components/icon */ "./src/core/components/icon.js");
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }








var styles = [];

var UIButton = function (_UIComponent) {
  _inherits(UIButton, _UIComponent);

  function UIButton() {
    _classCallCheck(this, UIButton);

    var _this = _possibleConstructorReturn(this, (UIButton.__proto__ || Object.getPrototypeOf(UIButton)).call(this));

    _this.state = {};
    return _this;
  }

  _createClass(UIButton, [{
    key: 'getDefaults',
    value: function getDefaults() {
      var defaults = {
        className: '',
        href: '',
        disabled: false,
        onClick: null,
        fab: false,
        style: {}
      };
      return defaults;
    }
  }, {
    key: 'componentDidMount',
    value: function componentDidMount() {}
  }, {
    key: 'render',
    value: function render() {
      var ico = "icon" in this.props && this.props.icon != null ? react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(core_components_icon__WEBPACK_IMPORTED_MODULE_5__["default"], { icon: this.props.icon }) : "";
      var color = this.state.color == "contrast" ? "secondary" : this.state.color;
      return this.state.fab ? react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
        _material_ui_core_Button__WEBPACK_IMPORTED_MODULE_3___default.a,
        { raised: this.state.fab ? "raised" : "flat", color: this.state.color, href: this.state.href, className: this.state.className, onClick: this.state.onClick, disabled: this.props.disabled ? this.props.disabled : this.state.disabled, fab: true, style: this.state.style },
        ico
      ) : ico && this.props.render === 'icon' ? react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
        _material_ui_core_IconButton__WEBPACK_IMPORTED_MODULE_4___default.a,
        { className: this.state.className, disabled: this.props.disabled, color: this.state.color, onClick: this.state.onClick, style: this.state.style },
        ico
      ) : react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
        _material_ui_core_Button__WEBPACK_IMPORTED_MODULE_3___default.a,
        { raised: this.state.fab ? "raised" : "flat", color: this.state.color, href: this.state.href, className: this.state.className, onClick: this.state.onClick, disabled: this.props.disabled ? this.props.disabled : this.state.disabled, style: this.state.style },
        ico && ico,
        this.props.children
      );
    }
  }]);

  return UIButton;
}(core_components_ui_component__WEBPACK_IMPORTED_MODULE_1__["default"]);

/* harmony default export */ __webpack_exports__["default"] = (Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_2__["withStyles"])(styles)(UIButton));

/***/ }),

/***/ "./src/core/components/component.js":
/*!******************************************!*\
  !*** ./src/core/components/component.js ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_components_error__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core/components/error */ "./src/core/components/error.js");
/* harmony import */ var core_components_loading_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core/components/loading.js */ "./src/core/components/loading.js");
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }





var component = function component(ModuleComponent) {
	return function (_React$Component) {
		_inherits(_class, _React$Component);

		function _class() {
			_classCallCheck(this, _class);

			return _possibleConstructorReturn(this, (_class.__proto__ || Object.getPrototypeOf(_class)).apply(this, arguments));
		}

		_createClass(_class, [{
			key: 'render',
			value: function render() {
				var title = "title" in this.props ? this.props.title : null;
				var ph = "placeholder" in this.props ? this.props.placeholder : {};
				var phW = ph.width ? ph.width : '100%';
				var phH = ph.height ? ph.height : '250';

				var loading = false;
				if ("data" in this.props) {
					if (!this.props.data || this.props.data == null) {
						loading = true;
					}
				}

				return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
					core_components_error__WEBPACK_IMPORTED_MODULE_1__["default"],
					{ from: title, style: { width: '100%' } },
					loading && react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
						'div',
						null,
						'loading'
					),
					!loading && react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(ModuleComponent, this.props)
				);
			}
		}]);

		return _class;
	}(react__WEBPACK_IMPORTED_MODULE_0___default.a.Component);
};

/* harmony default export */ __webpack_exports__["default"] = (component);

/***/ }),

/***/ "./src/core/components/error.js":
/*!**************************************!*\
  !*** ./src/core/components/error.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }



var ErrorBoundary = function (_React$Component) {
  _inherits(ErrorBoundary, _React$Component);

  function ErrorBoundary(props) {
    _classCallCheck(this, ErrorBoundary);

    var _this = _possibleConstructorReturn(this, (ErrorBoundary.__proto__ || Object.getPrototypeOf(ErrorBoundary)).call(this, props));

    _this.state = {
      hasError: false,
      errors: []
    };
    return _this;
  }

  _createClass(ErrorBoundary, [{
    key: 'componentDidCatch',
    value: function componentDidCatch(error, info) {
      var errors = this.state.errors;
      //console.debug(error);
      errors.push(error);
      this.setState({ hasError: true, errors: errors });

      if (window.__api) window.__api.setError(errors.toString());
    }
  }, {
    key: 'render',
    value: function render() {
      var ref = this.props.from ? this.props.from : "-";
      var errors = this.state.errors;
      var key = 0;
      if (this.state.hasError) {
        return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
          'div',
          { style: { color: 'red', margin: '0px', padding: '0px', border: '1px solid red' } },
          react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
            'div',
            { style: { fontSize: '1.2em' } },
            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
              'b',
              null,
              'Error in components'
            )
          ),
          react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
            'div',
            { style: { fontSize: '0.9em' } },
            'Reference: ',
            ref
          ),
          react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement('hr', null),
          errors.map(function (e) {
            return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
              'div',
              { key: key++, style: { fontSize: '0.8em' } },
              e.toString()
            );
          })
        );
      }
      return this.props.children;
    }
  }]);

  return ErrorBoundary;
}(react__WEBPACK_IMPORTED_MODULE_0___default.a.Component);

/* harmony default export */ __webpack_exports__["default"] = (ErrorBoundary);

/***/ }),

/***/ "./src/core/components/icon.js":
/*!*************************************!*\
  !*** ./src/core/components/icon.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_components_ui_component_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core/components/ui_component.js */ "./src/core/components/ui_component.js");
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/core/styles */ "./node_modules/@material-ui/core/styles/index.js");
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _material_ui_icons_Send__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/icons/Send */ "./node_modules/@material-ui/icons/Send.js");
/* harmony import */ var _material_ui_icons_Send__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_Send__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _material_ui_icons_Reply__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/icons/Reply */ "./node_modules/@material-ui/icons/Reply.js");
/* harmony import */ var _material_ui_icons_Reply__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_Reply__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _material_ui_icons_ReplyAll__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @material-ui/icons/ReplyAll */ "./node_modules/@material-ui/icons/ReplyAll.js");
/* harmony import */ var _material_ui_icons_ReplyAll__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_ReplyAll__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _material_ui_icons_Forward__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @material-ui/icons/Forward */ "./node_modules/@material-ui/icons/Forward.js");
/* harmony import */ var _material_ui_icons_Forward__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_Forward__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _material_ui_icons_Drafts__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @material-ui/icons/Drafts */ "./node_modules/@material-ui/icons/Drafts.js");
/* harmony import */ var _material_ui_icons_Drafts__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_Drafts__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _material_ui_icons_Cancel__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @material-ui/icons/Cancel */ "./node_modules/@material-ui/icons/Cancel.js");
/* harmony import */ var _material_ui_icons_Cancel__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_Cancel__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _material_ui_icons_AttachFile__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @material-ui/icons/AttachFile */ "./node_modules/@material-ui/icons/AttachFile.js");
/* harmony import */ var _material_ui_icons_AttachFile__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_AttachFile__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _material_ui_icons_Archive__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @material-ui/icons/Archive */ "./node_modules/@material-ui/icons/Archive.js");
/* harmony import */ var _material_ui_icons_Archive__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_Archive__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _material_ui_icons_Delete__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @material-ui/icons/Delete */ "./node_modules/@material-ui/icons/Delete.js");
/* harmony import */ var _material_ui_icons_Delete__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_Delete__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var _material_ui_icons_BugReport__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @material-ui/icons/BugReport */ "./node_modules/@material-ui/icons/BugReport.js");
/* harmony import */ var _material_ui_icons_BugReport__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_BugReport__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var _material_ui_icons_Contacts__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @material-ui/icons/Contacts */ "./node_modules/@material-ui/icons/Contacts.js");
/* harmony import */ var _material_ui_icons_Contacts__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_Contacts__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var _material_ui_icons_Done__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @material-ui/icons/Done */ "./node_modules/@material-ui/icons/Done.js");
/* harmony import */ var _material_ui_icons_Done__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_Done__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var _material_ui_icons_Home__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @material-ui/icons/Home */ "./node_modules/@material-ui/icons/Home.js");
/* harmony import */ var _material_ui_icons_Home__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_Home__WEBPACK_IMPORTED_MODULE_15__);
/* harmony import */ var _material_ui_icons_Search__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @material-ui/icons/Search */ "./node_modules/@material-ui/icons/Search.js");
/* harmony import */ var _material_ui_icons_Search__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_Search__WEBPACK_IMPORTED_MODULE_16__);
/* harmony import */ var _material_ui_icons_Notifications__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @material-ui/icons/Notifications */ "./node_modules/@material-ui/icons/Notifications.js");
/* harmony import */ var _material_ui_icons_Notifications__WEBPACK_IMPORTED_MODULE_17___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_Notifications__WEBPACK_IMPORTED_MODULE_17__);
/* harmony import */ var _material_ui_icons_Email__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @material-ui/icons/Email */ "./node_modules/@material-ui/icons/Email.js");
/* harmony import */ var _material_ui_icons_Email__WEBPACK_IMPORTED_MODULE_18___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_Email__WEBPACK_IMPORTED_MODULE_18__);
/* harmony import */ var _material_ui_icons_Favorite__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @material-ui/icons/Favorite */ "./node_modules/@material-ui/icons/Favorite.js");
/* harmony import */ var _material_ui_icons_Favorite__WEBPACK_IMPORTED_MODULE_19___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_Favorite__WEBPACK_IMPORTED_MODULE_19__);
/* harmony import */ var _material_ui_icons_ChatBubble__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @material-ui/icons/ChatBubble */ "./node_modules/@material-ui/icons/ChatBubble.js");
/* harmony import */ var _material_ui_icons_ChatBubble__WEBPACK_IMPORTED_MODULE_20___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_ChatBubble__WEBPACK_IMPORTED_MODULE_20__);
/* harmony import */ var _material_ui_icons_Cached__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @material-ui/icons/Cached */ "./node_modules/@material-ui/icons/Cached.js");
/* harmony import */ var _material_ui_icons_Cached__WEBPACK_IMPORTED_MODULE_21___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_Cached__WEBPACK_IMPORTED_MODULE_21__);
/* harmony import */ var _material_ui_icons_Edit__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @material-ui/icons/Edit */ "./node_modules/@material-ui/icons/Edit.js");
/* harmony import */ var _material_ui_icons_Edit__WEBPACK_IMPORTED_MODULE_22___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_Edit__WEBPACK_IMPORTED_MODULE_22__);
/* harmony import */ var _material_ui_icons_Close__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! @material-ui/icons/Close */ "./node_modules/@material-ui/icons/Close.js");
/* harmony import */ var _material_ui_icons_Close__WEBPACK_IMPORTED_MODULE_23___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_Close__WEBPACK_IMPORTED_MODULE_23__);
/* harmony import */ var _material_ui_icons_Block__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! @material-ui/icons/Block */ "./node_modules/@material-ui/icons/Block.js");
/* harmony import */ var _material_ui_icons_Block__WEBPACK_IMPORTED_MODULE_24___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_Block__WEBPACK_IMPORTED_MODULE_24__);
/* harmony import */ var _material_ui_icons_Menu__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! @material-ui/icons/Menu */ "./node_modules/@material-ui/icons/Menu.js");
/* harmony import */ var _material_ui_icons_Menu__WEBPACK_IMPORTED_MODULE_25___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_Menu__WEBPACK_IMPORTED_MODULE_25__);
/* harmony import */ var _material_ui_icons_InsertComment__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! @material-ui/icons/InsertComment */ "./node_modules/@material-ui/icons/InsertComment.js");
/* harmony import */ var _material_ui_icons_InsertComment__WEBPACK_IMPORTED_MODULE_26___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_InsertComment__WEBPACK_IMPORTED_MODULE_26__);
/* harmony import */ var _material_ui_icons_History__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! @material-ui/icons/History */ "./node_modules/@material-ui/icons/History.js");
/* harmony import */ var _material_ui_icons_History__WEBPACK_IMPORTED_MODULE_27___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_History__WEBPACK_IMPORTED_MODULE_27__);
/* harmony import */ var _material_ui_icons_SettingsApplications__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! @material-ui/icons/SettingsApplications */ "./node_modules/@material-ui/icons/SettingsApplications.js");
/* harmony import */ var _material_ui_icons_SettingsApplications__WEBPACK_IMPORTED_MODULE_28___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_SettingsApplications__WEBPACK_IMPORTED_MODULE_28__);
/* harmony import */ var _material_ui_icons_Save__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! @material-ui/icons/Save */ "./node_modules/@material-ui/icons/Save.js");
/* harmony import */ var _material_ui_icons_Save__WEBPACK_IMPORTED_MODULE_29___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_Save__WEBPACK_IMPORTED_MODULE_29__);
/* harmony import */ var _material_ui_icons_MoreVert__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! @material-ui/icons/MoreVert */ "./node_modules/@material-ui/icons/MoreVert.js");
/* harmony import */ var _material_ui_icons_MoreVert__WEBPACK_IMPORTED_MODULE_30___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_MoreVert__WEBPACK_IMPORTED_MODULE_30__);
/* harmony import */ var _material_ui_icons_Help__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! @material-ui/icons/Help */ "./node_modules/@material-ui/icons/Help.js");
/* harmony import */ var _material_ui_icons_Help__WEBPACK_IMPORTED_MODULE_31___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_Help__WEBPACK_IMPORTED_MODULE_31__);
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }




































var styles = [];

var UIIcon = function (_UIComponent) {
  _inherits(UIIcon, _UIComponent);

  function UIIcon() {
    _classCallCheck(this, UIIcon);

    var _this = _possibleConstructorReturn(this, (UIIcon.__proto__ || Object.getPrototypeOf(UIIcon)).call(this));

    _this.state = {
      className: ''
    };
    return _this;
  }

  _createClass(UIIcon, [{
    key: 'getDefaults',
    value: function getDefaults() {
      var defaults = {
        className: ''
      };
      return defaults;
    }
  }, {
    key: 'getIcon',
    value: function getIcon(icon) {
      if (!icon) return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_icons_Block__WEBPACK_IMPORTED_MODULE_24___default.a, { className: this.state.className });

      switch (icon) {
        case "send":
          return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_icons_Send__WEBPACK_IMPORTED_MODULE_3___default.a, { className: this.state.className });
        case "reply":
          return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_icons_Reply__WEBPACK_IMPORTED_MODULE_4___default.a, { className: this.state.className });
        case "reply_all":
          return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_icons_ReplyAll__WEBPACK_IMPORTED_MODULE_5___default.a, { className: this.state.className });
        case "forward":
          return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_icons_Forward__WEBPACK_IMPORTED_MODULE_6___default.a, { className: this.state.className });
        case "draft":
          return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_icons_Drafts__WEBPACK_IMPORTED_MODULE_7___default.a, { className: this.state.className });
        case "cancel":
          return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_icons_Cancel__WEBPACK_IMPORTED_MODULE_8___default.a, { className: this.state.className });
        case "attach":
          return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_icons_AttachFile__WEBPACK_IMPORTED_MODULE_9___default.a, { className: this.state.className });
        case "delete":
          return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_icons_Delete__WEBPACK_IMPORTED_MODULE_11___default.a, { className: this.state.className });
        case "archive":
          return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_icons_Archive__WEBPACK_IMPORTED_MODULE_10___default.a, { className: this.state.className });
        case "spam":
          return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_icons_BugReport__WEBPACK_IMPORTED_MODULE_12___default.a, { className: this.state.className });
        case "contacts":
          return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_icons_Contacts__WEBPACK_IMPORTED_MODULE_13___default.a, { className: this.state.className });
        case "done":
          return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_icons_Done__WEBPACK_IMPORTED_MODULE_14___default.a, { className: this.state.className });
        case "home":
          return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_icons_Home__WEBPACK_IMPORTED_MODULE_15___default.a, { className: this.state.className });
        case "search":
          return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_icons_Search__WEBPACK_IMPORTED_MODULE_16___default.a, { className: this.state.className });
        case "notification":
          return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_icons_Notifications__WEBPACK_IMPORTED_MODULE_17___default.a, { className: this.state.className });
        case "message":
          return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_icons_Email__WEBPACK_IMPORTED_MODULE_18___default.a, { className: this.state.className });
        case "favorite":
          return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_icons_Favorite__WEBPACK_IMPORTED_MODULE_19___default.a, { className: this.state.className });
        case "reply-tweet":
          return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_icons_ChatBubble__WEBPACK_IMPORTED_MODULE_20___default.a, { className: this.state.className });
        case "retweet":
          return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_icons_Cached__WEBPACK_IMPORTED_MODULE_21___default.a, { className: this.state.className });
        case "compose":
          return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_icons_Edit__WEBPACK_IMPORTED_MODULE_22___default.a, { className: this.state.className });
        case "close":
          return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_icons_Close__WEBPACK_IMPORTED_MODULE_23___default.a, { className: this.state.className });
        case "drawer":
          return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_icons_Menu__WEBPACK_IMPORTED_MODULE_25___default.a, { className: this.state.className });
        case "blog":
          return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_icons_InsertComment__WEBPACK_IMPORTED_MODULE_26___default.a, { className: this.state.className });
        case "history":
          return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_icons_History__WEBPACK_IMPORTED_MODULE_27___default.a, { className: this.state.className });
        case "settings":
          return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_icons_SettingsApplications__WEBPACK_IMPORTED_MODULE_28___default.a, { className: this.state.className });
        case "debug":
          return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_icons_BugReport__WEBPACK_IMPORTED_MODULE_12___default.a, { className: this.state.className });
        case "save":
          return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_icons_Save__WEBPACK_IMPORTED_MODULE_29___default.a, { className: this.state.className });
        case "menu":
          return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_icons_MoreVert__WEBPACK_IMPORTED_MODULE_30___default.a, { className: this.state.className });
        case "question":
          return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_icons_Help__WEBPACK_IMPORTED_MODULE_31___default.a, { className: this.state.className });
        case "ok":
          return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_icons_Done__WEBPACK_IMPORTED_MODULE_14___default.a, { className: this.state.className });
        default:
          return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_icons_Block__WEBPACK_IMPORTED_MODULE_24___default.a, { className: this.state.className });
      }
    }
  }, {
    key: 'render',
    value: function render() {
      var ico = this.getIcon(this.props.icon);
      return ico;
    }
  }]);

  return UIIcon;
}(core_components_ui_component_js__WEBPACK_IMPORTED_MODULE_1__["default"]);

/* harmony default export */ __webpack_exports__["default"] = (Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_2__["withStyles"])(styles)(UIIcon));

/***/ }),

/***/ "./src/core/components/loading.js":
/*!****************************************!*\
  !*** ./src/core/components/loading.js ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }



var Component = function (_React$Component) {
  _inherits(Component, _React$Component);

  function Component() {
    _classCallCheck(this, Component);

    return _possibleConstructorReturn(this, (Component.__proto__ || Object.getPrototypeOf(Component)).apply(this, arguments));
  }

  _createClass(Component, [{
    key: 'render',
    value: function render() {
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement('div', { style: { zIndex: 9999, position: 'absolute', top: '0px',
          right: '0px', left: '0px', bottom: '0px',
          backgroundColor: '#00000060' } });
    }
  }]);

  return Component;
}(react__WEBPACK_IMPORTED_MODULE_0___default.a.Component);

/* harmony default export */ __webpack_exports__["default"] = (Component);

/***/ }),

/***/ "./src/core/components/loading_bar.js":
/*!********************************************!*\
  !*** ./src/core/components/loading_bar.js ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_components_ui_component_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core/components/ui_component.js */ "./src/core/components/ui_component.js");
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/core/styles */ "./node_modules/@material-ui/core/styles/index.js");
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _material_ui_core_LinearProgress__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/core/LinearProgress */ "./node_modules/@material-ui/core/LinearProgress/index.js");
/* harmony import */ var _material_ui_core_LinearProgress__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_LinearProgress__WEBPACK_IMPORTED_MODULE_3__);
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }






var styles = [{}];

var UILoadingBar = function (_UIComponent) {
  _inherits(UILoadingBar, _UIComponent);

  function UILoadingBar() {
    _classCallCheck(this, UILoadingBar);

    var _this = _possibleConstructorReturn(this, (UILoadingBar.__proto__ || Object.getPrototypeOf(UILoadingBar)).call(this));

    _this.state = {
      loading: false
    };
    return _this;
  }

  _createClass(UILoadingBar, [{
    key: 'getDefaults',
    value: function getDefaults() {
      var defaults = {
        className: ''
      };
      return defaults;
    }
  }, {
    key: 'componentDidMount',
    value: function componentDidMount() {
      var $this = this;

      if (this.props.server) {
        this.props.server.onStartLoading = function () {
          $this.setState({ loading: true });
        };
        this.props.server.onStopLoading = function () {
          $this.setState({ loading: false });
        };
        this.props.server.onError = function (err) {
          $this.setState({ loading: false });
        };
      }
    }
  }, {
    key: 'render',
    value: function render() {
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
        'div',
        { className: this.props.className },
        this.state.loading && react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_LinearProgress__WEBPACK_IMPORTED_MODULE_3__["LinearProgress"], { className: this.props.className, color: 'accent' })
      );
    }
  }]);

  return UILoadingBar;
}(core_components_ui_component_js__WEBPACK_IMPORTED_MODULE_1__["default"]);

/* harmony default export */ __webpack_exports__["default"] = (Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_2__["withStyles"])(styles)(UILoadingBar));

/***/ }),

/***/ "./src/core/components/mockup/block.js":
/*!*********************************************!*\
  !*** ./src/core/components/mockup/block.js ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @material-ui/core/styles */ "./node_modules/@material-ui/core/styles/index.js");
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_1__);
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }




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

var MockupBlock = function (_React$Component) {
		_inherits(MockupBlock, _React$Component);

		function MockupBlock() {
				_classCallCheck(this, MockupBlock);

				return _possibleConstructorReturn(this, (MockupBlock.__proto__ || Object.getPrototypeOf(MockupBlock)).apply(this, arguments));
		}

		_createClass(MockupBlock, [{
				key: 'render',
				value: function render() {
						var title = this.props.title ? this.props.title : 'MOCK BLOCK';
						var classes = this.props.classes;
						var height = this.props.height ? this.props.height : '30px';
						return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
								'div',
								{ className: classes.root, style: { height: height, width: '100%' } },
								title
						);
				}
		}]);

		return MockupBlock;
}(react__WEBPACK_IMPORTED_MODULE_0___default.a.Component);

/* harmony default export */ __webpack_exports__["default"] = (Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_1__["withStyles"])(styles)(MockupBlock));

/***/ }),

/***/ "./src/core/components/snackbar.js":
/*!*****************************************!*\
  !*** ./src/core/components/snackbar.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_components_ui_component_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core/components/ui_component.js */ "./src/core/components/ui_component.js");
/* harmony import */ var _material_ui_core_Snackbar__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/core/Snackbar */ "./node_modules/@material-ui/core/Snackbar/index.js");
/* harmony import */ var _material_ui_core_Snackbar__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Snackbar__WEBPACK_IMPORTED_MODULE_2__);
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }





var UISnackbar = function (_UIComponent) {
  _inherits(UISnackbar, _UIComponent);

  function UISnackbar() {
    _classCallCheck(this, UISnackbar);

    var _this = _possibleConstructorReturn(this, (UISnackbar.__proto__ || Object.getPrototypeOf(UISnackbar)).call(this));

    _this.state = {
      open: false,
      message: ''
    };

    _this.handleRequestClose = _this.handleRequestClose.bind(_this);
    return _this;
  }

  _createClass(UISnackbar, [{
    key: 'getDefaults',
    value: function getDefaults() {
      var defaults = {};
      return defaults;
    }
  }, {
    key: 'handleRequestClose',
    value: function handleRequestClose(event, reason) {
      this.setState({ open: false, message: '' });
    }
  }, {
    key: 'componentDidMount',
    value: function componentDidMount() {
      var $this = this;

      if (this.props.server) {
        this.props.server.onError = function (err) {
          $this.setState({ open: true, message: err.toString() });
        };
      }
    }
  }, {
    key: 'render',
    value: function render() {
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Snackbar__WEBPACK_IMPORTED_MODULE_2___default.a, {
        anchorOrigin: {
          vertical: 'bottom',
          horizontal: 'left'
        },
        open: this.state.open,
        autoHideDuration: 6000,
        onRequestClose: this.handleRequestClose,
        SnackbarContentProps: {
          'aria-describedby': 'message-id'
        },
        message: String(this.state.message)
      });
    }
  }]);

  return UISnackbar;
}(core_components_ui_component_js__WEBPACK_IMPORTED_MODULE_1__["default"]);

/* harmony default export */ __webpack_exports__["default"] = (UISnackbar);

/***/ }),

/***/ "./src/core/components/toolbar.js":
/*!****************************************!*\
  !*** ./src/core/components/toolbar.js ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_components_ui_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core/components/ui_component */ "./src/core/components/ui_component.js");
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/core/styles */ "./node_modules/@material-ui/core/styles/index.js");
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _material_ui_core_Toolbar__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/core/Toolbar */ "./node_modules/@material-ui/core/Toolbar/index.js");
/* harmony import */ var _material_ui_core_Toolbar__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Toolbar__WEBPACK_IMPORTED_MODULE_3__);
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }






var styles = function styles(theme) {
  return {
    root: {}
  };
};

var UIToolbar = function (_UIComponent) {
  _inherits(UIToolbar, _UIComponent);

  function UIToolbar() {
    _classCallCheck(this, UIToolbar);

    var _this = _possibleConstructorReturn(this, (UIToolbar.__proto__ || Object.getPrototypeOf(UIToolbar)).call(this));

    _this.state = {};
    return _this;
  }

  _createClass(UIToolbar, [{
    key: 'getDefaults',
    value: function getDefaults() {
      var defaults = {
        className: ''
      };
      return defaults;
    }
  }, {
    key: 'componentDidMount',
    value: function componentDidMount() {}
  }, {
    key: 'render',
    value: function render() {
      var classes = this.props.classes;
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
        _material_ui_core_Toolbar__WEBPACK_IMPORTED_MODULE_3___default.a,
        { className: classes.root, style: this.props.style },
        this.props.children
      );
    }
  }]);

  return UIToolbar;
}(core_components_ui_component__WEBPACK_IMPORTED_MODULE_1__["default"]);

/* harmony default export */ __webpack_exports__["default"] = (Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_2__["withStyles"])(styles)(UIToolbar));

/***/ }),

/***/ "./src/core/components/ui_component.js":
/*!*********************************************!*\
  !*** ./src/core/components/ui_component.js ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }



var UIComponent = function (_React$Component) {
  _inherits(UIComponent, _React$Component);

  function UIComponent() {
    _classCallCheck(this, UIComponent);

    return _possibleConstructorReturn(this, (UIComponent.__proto__ || Object.getPrototypeOf(UIComponent)).apply(this, arguments));
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
}(react__WEBPACK_IMPORTED_MODULE_0___default.a.Component);

/* harmony default export */ __webpack_exports__["default"] = (UIComponent);

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-dom */ "./node_modules/react-dom/index.js");
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_dom__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_hot_loader__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-hot-loader */ "./node_modules/react-hot-loader/index.js");
/* harmony import */ var react_hot_loader__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_hot_loader__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var jmarroyave_index__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! jmarroyave/index */ "./src/jmarroyave/index.js");





var render = function render(Component) {
  react_dom__WEBPACK_IMPORTED_MODULE_1___default.a.render(react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
    react_hot_loader__WEBPACK_IMPORTED_MODULE_2__["AppContainer"],
    null,
    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Component, null)
  ), document.getElementById('root'));
};

render(jmarroyave_index__WEBPACK_IMPORTED_MODULE_3__["default"]);

if (false) {}

/***/ }),

/***/ "./src/jmarroyave/app/api.js":
/*!***********************************!*\
  !*** ./src/jmarroyave/app/api.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var core_app_api__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core/app/api */ "./src/core/app/api.js");
/* harmony import */ var jmarroyave_app_state__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! jmarroyave/app/state */ "./src/jmarroyave/app/state.js");
/* harmony import */ var jmarroyave_conf_constants__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! jmarroyave/conf/constants */ "./src/jmarroyave/conf/constants.js");
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }





var API = function (_BaseAPI) {
	_inherits(API, _BaseAPI);

	function API(parent) {
		_classCallCheck(this, API);

		var _this = _possibleConstructorReturn(this, (API.__proto__ || Object.getPrototypeOf(API)).call(this, {
			debug: jmarroyave_conf_constants__WEBPACK_IMPORTED_MODULE_2__["default"].DEBUG,
			local: jmarroyave_conf_constants__WEBPACK_IMPORTED_MODULE_2__["default"].LOCAL,
			title: jmarroyave_conf_constants__WEBPACK_IMPORTED_MODULE_2__["default"].VERSION,
			current_component: { id: jmarroyave_conf_constants__WEBPACK_IMPORTED_MODULE_2__["default"].COMID, family: jmarroyave_conf_constants__WEBPACK_IMPORTED_MODULE_2__["default"].COMF, version: jmarroyave_conf_constants__WEBPACK_IMPORTED_MODULE_2__["default"].COMV },
			components: jmarroyave_conf_constants__WEBPACK_IMPORTED_MODULE_2__["default"].UXI_VERSIONS
		}));

		_this.state = jmarroyave_app_state__WEBPACK_IMPORTED_MODULE_1__["default"];
		_this.data_kb_android = _this.server.serverURI + '/apps/jmarroyave-cs/data/android_index';
		return _this;
	}

	_createClass(API, [{
		key: 'getAPI',
		value: function getAPI(apiURI, dataPath, params) {
			var $this = this;
			$this.state.set(dataPath, null);
			this.server.get(apiURI, params, function (data) {
				$this.state.set(dataPath, data);
			});
		}
	}, {
		key: 'getApp',
		value: function getApp() {
			var app = this.state.get(['app']);
			if (app != null) return;

			var uri = '/apps/jmarroyave-cs/app';
			var params = {};
			this.getAPI(uri, ['app'], params);
		}
	}, {
		key: 'getHome',
		value: function getHome() {
			this.getApp();

			var uri = '/apps/jmarroyave-cs/pages/home';
			var params = {};
			this.getAPI(uri, ['pages', 'home', 'data'], params);
		}
	}, {
		key: 'getTrends',
		value: function getTrends() {
			this.getApp();

			var uri = '/apps/trends/stackoverflow/history';
			var params = {};
			this.getAPI(uri, ['pages', 'home', 'trends'], params);
		}
	}, {
		key: 'getBlog',
		value: function getBlog(blog) {
			this.getApp();

			this.state.set(['pages', 'blog', 'area'], blog);
			var uri = '/apps/jmarroyave-cs/pages/blog';
			var params = { area: blog };
			this.getAPI(uri, ['pages', 'blog', 'data'], params);
		}
	}, {
		key: 'getPost',
		value: function getPost(blog, post) {
			this.getApp();

			this.state.set(['pages', 'post', 'area'], blog);
			var uri = '/apps/jmarroyave-cs/pages/post';
			var params = { id: post };
			this.getAPI(uri, ['pages', 'post', 'data'], params);
		}
	}, {
		key: 'getCV',
		value: function getCV() {
			this.getApp();

			var uri = '/apps/jmarroyave-cs/pages/cv';
			var params = {};
			this.getAPI(uri, ['pages', 'cv', 'data'], params);
		}
	}, {
		key: 'getKBAndroid',
		value: function getKBAndroid(category) {
			this.getApp();

			var uri = '/apps/jmarroyave-cs/data/android_index';
			var params = { f1: 'cat', v1: category };
			this.getAPI(uri, ['pages', 'kb_android', 'data', 'records'], params);
		}
	}, {
		key: 'getKBAndroidCategories',
		value: function getKBAndroidCategories() {
			this.getApp();

			var uri = '/apps/jmarroyave-cs/data/android_categories';
			var params = {};
			this.getAPI(uri, ['pages', 'kb_android', 'data', 'categories'], params);
		}
	}]);

	return API;
}(core_app_api__WEBPACK_IMPORTED_MODULE_0__["default"]);

window.__api = new API();
/* harmony default export */ __webpack_exports__["default"] = (API);

/***/ }),

/***/ "./src/jmarroyave/app/redux/actions/types.js":
/*!***************************************************!*\
  !*** ./src/jmarroyave/app/redux/actions/types.js ***!
  \***************************************************/
/*! exports provided: MESSAGES_LOADING, MESSAGES_FAILED, MESSAGES_FETCHED, MESSAGE_LOADING, MESSAGE_FAILED, MESSAGE_FETCHED, LABELS_LOADING, LABELS_FAILED, LABELS_FETCHED */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MESSAGES_LOADING", function() { return MESSAGES_LOADING; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MESSAGES_FAILED", function() { return MESSAGES_FAILED; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MESSAGES_FETCHED", function() { return MESSAGES_FETCHED; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MESSAGE_LOADING", function() { return MESSAGE_LOADING; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MESSAGE_FAILED", function() { return MESSAGE_FAILED; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MESSAGE_FETCHED", function() { return MESSAGE_FETCHED; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LABELS_LOADING", function() { return LABELS_LOADING; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LABELS_FAILED", function() { return LABELS_FAILED; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LABELS_FETCHED", function() { return LABELS_FETCHED; });
var MESSAGES_LOADING = 'MESSAGES_LOADING';
var MESSAGES_FAILED = 'MESSAGES_FAILED';
var MESSAGES_FETCHED = 'MESSAGES_FETCHED';

var MESSAGE_LOADING = 'MESSAGE_LOADING';
var MESSAGE_FAILED = 'MESSAGE_FAILED';
var MESSAGE_FETCHED = 'MESSAGE_FETCHED';

var LABELS_LOADING = 'LABELS_LOADING';
var LABELS_FAILED = 'LABELS_FAILED';
var LABELS_FETCHED = 'LABELS_FETCHED';

/***/ }),

/***/ "./src/jmarroyave/app/redux/configureStore.js":
/*!****************************************************!*\
  !*** ./src/jmarroyave/app/redux/configureStore.js ***!
  \****************************************************/
/*! exports provided: ConfigureStore */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ConfigureStore", function() { return ConfigureStore; });
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! redux */ "./node_modules/redux/es/redux.js");
/* harmony import */ var jmarroyave_app_redux_reducers_messages__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! jmarroyave/app/redux/reducers/messages */ "./src/jmarroyave/app/redux/reducers/messages.js");
/* harmony import */ var jmarroyave_app_redux_reducers_labels__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! jmarroyave/app/redux/reducers/labels */ "./src/jmarroyave/app/redux/reducers/labels.js");
/* harmony import */ var redux_thunk__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! redux-thunk */ "./node_modules/redux-thunk/es/index.js");
/* harmony import */ var redux_logger__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! redux-logger */ "./node_modules/redux-logger/dist/redux-logger.js");
/* harmony import */ var redux_logger__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(redux_logger__WEBPACK_IMPORTED_MODULE_4__);








var ConfigureStore = function ConfigureStore() {
    var store = Object(redux__WEBPACK_IMPORTED_MODULE_0__["createStore"])(Object(redux__WEBPACK_IMPORTED_MODULE_0__["combineReducers"])({
        messages: jmarroyave_app_redux_reducers_messages__WEBPACK_IMPORTED_MODULE_1__["Messages"],
        labels: jmarroyave_app_redux_reducers_labels__WEBPACK_IMPORTED_MODULE_2__["Labels"]
    }), Object(redux__WEBPACK_IMPORTED_MODULE_0__["applyMiddleware"])(redux_thunk__WEBPACK_IMPORTED_MODULE_3__["default"], redux_logger__WEBPACK_IMPORTED_MODULE_4___default.a) && Object(redux__WEBPACK_IMPORTED_MODULE_0__["applyMiddleware"])(redux_thunk__WEBPACK_IMPORTED_MODULE_3__["default"]));

    return store;
};

/***/ }),

/***/ "./src/jmarroyave/app/redux/reducers/labels.js":
/*!*****************************************************!*\
  !*** ./src/jmarroyave/app/redux/reducers/labels.js ***!
  \*****************************************************/
/*! exports provided: Labels */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Labels", function() { return Labels; });
/* harmony import */ var jmarroyave_app_redux_actions_types__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jmarroyave/app/redux/actions/types */ "./src/jmarroyave/app/redux/actions/types.js");
var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };



var Labels = function Labels() {
    var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : { loading: true, err: null, data: [] };
    var action = arguments[1];

    switch (action.type) {
        case jmarroyave_app_redux_actions_types__WEBPACK_IMPORTED_MODULE_0__["LABELS_FETCHED"]:
            return _extends({}, state, { loading: false, err: null, data: action.payload });

        case jmarroyave_app_redux_actions_types__WEBPACK_IMPORTED_MODULE_0__["LABELS_LOADING"]:
            return _extends({}, state, { loading: true, err: null, data: [] });

        case jmarroyave_app_redux_actions_types__WEBPACK_IMPORTED_MODULE_0__["LABELS_FAILED"]:
            return _extends({}, state, { loading: false, err: action.payload });

        default:
            return state;
    }
};

/***/ }),

/***/ "./src/jmarroyave/app/redux/reducers/messages.js":
/*!*******************************************************!*\
  !*** ./src/jmarroyave/app/redux/reducers/messages.js ***!
  \*******************************************************/
/*! exports provided: Messages */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Messages", function() { return Messages; });
/* harmony import */ var jmarroyave_app_redux_actions_types__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jmarroyave/app/redux/actions/types */ "./src/jmarroyave/app/redux/actions/types.js");
var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };



var Messages = function Messages() {
    var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : { loading: true, err: null, data: [] };
    var action = arguments[1];

    switch (action.type) {
        case jmarroyave_app_redux_actions_types__WEBPACK_IMPORTED_MODULE_0__["MESSAGES_FETCHED"]:
            return _extends({}, state, { loading: false, err: null, data: action.payload.data });

        case jmarroyave_app_redux_actions_types__WEBPACK_IMPORTED_MODULE_0__["MESSAGES_LOADING"]:
            return _extends({}, state, { loading: true, err: null, data: [] });

        case jmarroyave_app_redux_actions_types__WEBPACK_IMPORTED_MODULE_0__["MESSAGES_FAILED"]:
            return _extends({}, state, { loading: false, err: action.payload });

        case jmarroyave_app_redux_actions_types__WEBPACK_IMPORTED_MODULE_0__["MESSAGE_FETCHED"]:
            action.payload.message.messages[action.payload.idx].text = action.payload.text;
            return _extends({}, state, { loading: false, err: null });

        case jmarroyave_app_redux_actions_types__WEBPACK_IMPORTED_MODULE_0__["MESSAGE_LOADING"]:
            return _extends({}, state, { loading: true, err: null });

        case jmarroyave_app_redux_actions_types__WEBPACK_IMPORTED_MODULE_0__["MESSAGE_FAILED"]:
            return _extends({}, state, { loading: false, err: action.payload });

        default:
            return state;
    }
};

/***/ }),

/***/ "./src/jmarroyave/app/state.js":
/*!*************************************!*\
  !*** ./src/jmarroyave/app/state.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var baobab__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! baobab */ "./node_modules/baobab/dist/baobab.js");
/* harmony import */ var baobab__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(baobab__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var jmarroyave_conf_constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! jmarroyave/conf/constants */ "./src/jmarroyave/conf/constants.js");



var tree = new baobab__WEBPACK_IMPORTED_MODULE_0___default.a({
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

/* harmony default export */ __webpack_exports__["default"] = (tree);

/***/ }),

/***/ "./src/jmarroyave/components/data/post_link.js":
/*!*****************************************************!*\
  !*** ./src/jmarroyave/components/data/post_link.js ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-router */ "./node_modules/react-router/es/index.js");
/* harmony import */ var jmarroyave_components_uxi_core_with_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! jmarroyave/components/uxi/core/with-module */ "./src/jmarroyave/components/uxi/core/with-module.js");
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }





var PostLinkComponent = function (_React$Component) {
	_inherits(PostLinkComponent, _React$Component);

	function PostLinkComponent() {
		_classCallCheck(this, PostLinkComponent);

		return _possibleConstructorReturn(this, (PostLinkComponent.__proto__ || Object.getPrototypeOf(PostLinkComponent)).apply(this, arguments));
	}

	_createClass(PostLinkComponent, [{
		key: 'render',
		value: function render() {
			var slug = "slug" in this.props ? this.props.slug : null;
			var category = this.props.category;

			if (!slug) return this.props.children;

			return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
				react_router__WEBPACK_IMPORTED_MODULE_1__["Link"],
				{ to: '' + slug },
				this.props.children
			);
		}
	}]);

	return PostLinkComponent;
}(react__WEBPACK_IMPORTED_MODULE_0___default.a.Component);

/* harmony default export */ __webpack_exports__["default"] = (Object(jmarroyave_components_uxi_core_with_module__WEBPACK_IMPORTED_MODULE_2__["default"])(PostLinkComponent));

/***/ }),

/***/ "./src/jmarroyave/components/uxi/blank/page.js":
/*!*****************************************************!*\
  !*** ./src/jmarroyave/components/uxi/blank/page.js ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @material-ui/core/styles */ "./node_modules/@material-ui/core/styles/index.js");
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/core/Grid */ "./node_modules/@material-ui/core/Grid/index.js");
/* harmony import */ var _material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var jmarroyave_components_uxi_core_page_app__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! jmarroyave/components/uxi/core/page/app */ "./src/jmarroyave/components/uxi/core/page/app.js");
/* harmony import */ var jmarroyave_components_uxi_core_page_body__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! jmarroyave/components/uxi/core/page/body */ "./src/jmarroyave/components/uxi/core/page/body.js");
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }







var styles = function styles(theme) {
	return {};
};

var Page = function (_React$Component) {
	_inherits(Page, _React$Component);

	function Page(props, context) {
		_classCallCheck(this, Page);

		var _this = _possibleConstructorReturn(this, (Page.__proto__ || Object.getPrototypeOf(Page)).call(this, props, context));

		_this.api = window.__api;
		return _this;
	}

	_createClass(Page, [{
		key: 'componentDidMount',
		value: function componentDidMount() {}
	}, {
		key: 'render',
		value: function render() {
			var title = "title" in this.props ? react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
				'h1',
				null,
				this.props.title
			) : "";
			return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
				jmarroyave_components_uxi_core_page_app__WEBPACK_IMPORTED_MODULE_3__["default"],
				{ router: this.props.router, app: this.props.app },
				react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
					jmarroyave_components_uxi_core_page_body__WEBPACK_IMPORTED_MODULE_4__["default"],
					{ path: [{ text: 'home', route: '/' }, { text: 'labs' }], app: this.props.app, data: {} },
					react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
						_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_2___default.a,
						{ container: true, spacing: 8, className: 'mod-labs', style: { paddingTop: '5%', width: '100%' } },
						react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
							_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_2___default.a,
							{ item: true, xs: 12, align: 'center' },
							title
						),
						react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_2___default.a, { item: true, xs: 1, md: 4 }),
						react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
							_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_2___default.a,
							{ item: true, align: 'center', xs: 10, md: 4, className: 'frame' },
							react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement('img', { src: './res/img/labs002.jpg', width: '100%' }),
							react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
								'h1',
								null,
								'Sorry, it\'s just a labs demo'
							)
						)
					)
				)
			);
		}
	}]);

	return Page;
}(react__WEBPACK_IMPORTED_MODULE_0___default.a.Component);

/* harmony default export */ __webpack_exports__["default"] = (Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_1__["withStyles"])(styles)(Page));

/***/ }),

/***/ "./src/jmarroyave/components/uxi/blog/page.js":
/*!****************************************************!*\
  !*** ./src/jmarroyave/components/uxi/blog/page.js ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_loadable__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-loadable */ "./node_modules/react-loadable/lib/index.js");
/* harmony import */ var react_loadable__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_loadable__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_components_loading__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core/components/loading */ "./src/core/components/loading.js");
/* harmony import */ var jmarroyave_components_uxi_core_page_app__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! jmarroyave/components/uxi/core/page/app */ "./src/jmarroyave/components/uxi/core/page/app.js");
/* harmony import */ var jmarroyave_components_uxi_core_page_body__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! jmarroyave/components/uxi/core/page/body */ "./src/jmarroyave/components/uxi/core/page/body.js");
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }







var HomeProxy = react_loadable__WEBPACK_IMPORTED_MODULE_1___default()({
	loader: function loader() {
		return Promise.all(/*! import() */[__webpack_require__.e("vendor"), __webpack_require__.e(4)]).then(__webpack_require__.bind(null, /*! jmarroyave/components/uxi/blog/layout/layout-proxy */ "./src/jmarroyave/components/uxi/blog/layout/layout-proxy.js"));
	},
	loading: core_components_loading__WEBPACK_IMPORTED_MODULE_2__["default"]
});

var Page = function (_React$Component) {
	_inherits(Page, _React$Component);

	function Page(props, context) {
		_classCallCheck(this, Page);

		var _this = _possibleConstructorReturn(this, (Page.__proto__ || Object.getPrototypeOf(Page)).call(this, props, context));

		_this.api = window.__api;
		return _this;
	}

	_createClass(Page, [{
		key: 'componentDidMount',
		value: function componentDidMount() {}
	}, {
		key: 'render',
		value: function render() {
			var app = this.props.app;
			var key = 0;
			return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
				jmarroyave_components_uxi_core_page_app__WEBPACK_IMPORTED_MODULE_3__["default"],
				{ router: this.props.router, app: this.props.app },
				react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
					jmarroyave_components_uxi_core_page_body__WEBPACK_IMPORTED_MODULE_4__["default"],
					{ path: [{ text: 'home', route: '/' }], app: this.props.app, data: { home: this.props.page } },
					react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(HomeProxy, { data: this.props.page.data, title: this.props.page.area })
				)
			);
		}
	}]);

	return Page;
}(react__WEBPACK_IMPORTED_MODULE_0___default.a.Component);

/* harmony default export */ __webpack_exports__["default"] = (Page);

/***/ }),

/***/ "./src/jmarroyave/components/uxi/blog_post/page.js":
/*!*********************************************************!*\
  !*** ./src/jmarroyave/components/uxi/blog_post/page.js ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_loadable__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-loadable */ "./node_modules/react-loadable/lib/index.js");
/* harmony import */ var react_loadable__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_loadable__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_components_loading__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core/components/loading */ "./src/core/components/loading.js");
/* harmony import */ var jmarroyave_components_uxi_core_page_app__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! jmarroyave/components/uxi/core/page/app */ "./src/jmarroyave/components/uxi/core/page/app.js");
/* harmony import */ var jmarroyave_components_uxi_core_page_body__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! jmarroyave/components/uxi/core/page/body */ "./src/jmarroyave/components/uxi/core/page/body.js");
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }







var HomeProxy = react_loadable__WEBPACK_IMPORTED_MODULE_1___default()({
	loader: function loader() {
		return Promise.all(/*! import() */[__webpack_require__.e("vendor"), __webpack_require__.e(2)]).then(__webpack_require__.bind(null, /*! jmarroyave/components/uxi/blog_post/layout/layout-proxy */ "./src/jmarroyave/components/uxi/blog_post/layout/layout-proxy.js"));
	},
	loading: core_components_loading__WEBPACK_IMPORTED_MODULE_2__["default"]
});

var Page = function (_React$Component) {
	_inherits(Page, _React$Component);

	function Page(props, context) {
		_classCallCheck(this, Page);

		var _this = _possibleConstructorReturn(this, (Page.__proto__ || Object.getPrototypeOf(Page)).call(this, props, context));

		_this.api = window.__api;
		return _this;
	}

	_createClass(Page, [{
		key: 'componentDidMount',
		value: function componentDidMount() {}
	}, {
		key: 'render',
		value: function render() {
			var app = this.props.app;
			var key = 0;
			return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
				jmarroyave_components_uxi_core_page_app__WEBPACK_IMPORTED_MODULE_3__["default"],
				{ router: this.props.router, app: this.props.app },
				react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
					jmarroyave_components_uxi_core_page_body__WEBPACK_IMPORTED_MODULE_4__["default"],
					{ path: [{ text: 'home', route: '/' }], app: this.props.app, data: { home: this.props.page } },
					react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(HomeProxy, { data: this.props.page.data, title: this.props.page.area })
				)
			);
		}
	}]);

	return Page;
}(react__WEBPACK_IMPORTED_MODULE_0___default.a.Component);

/* harmony default export */ __webpack_exports__["default"] = (Page);

/***/ }),

/***/ "./src/jmarroyave/components/uxi/core/com_version.js":
/*!***********************************************************!*\
  !*** ./src/jmarroyave/components/uxi/core/com_version.js ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var jmarroyave_components_uxi_core_with_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! jmarroyave/components/uxi/core/with-module */ "./src/jmarroyave/components/uxi/core/with-module.js");
/* harmony import */ var _material_ui_core_Button__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/core/Button */ "./node_modules/@material-ui/core/Button/index.js");
/* harmony import */ var _material_ui_core_Button__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _material_ui_core_Dialog__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/core/Dialog */ "./node_modules/@material-ui/core/Dialog/index.js");
/* harmony import */ var _material_ui_core_Dialog__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Dialog__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _material_ui_core_DialogActions__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/core/DialogActions */ "./node_modules/@material-ui/core/DialogActions/index.js");
/* harmony import */ var _material_ui_core_DialogActions__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_DialogActions__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _material_ui_core_DialogContent__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @material-ui/core/DialogContent */ "./node_modules/@material-ui/core/DialogContent/index.js");
/* harmony import */ var _material_ui_core_DialogContent__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_DialogContent__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _material_ui_core_DialogTitle__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @material-ui/core/DialogTitle */ "./node_modules/@material-ui/core/DialogTitle/index.js");
/* harmony import */ var _material_ui_core_DialogTitle__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_DialogTitle__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _material_ui_core_InputLabel__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @material-ui/core/InputLabel */ "./node_modules/@material-ui/core/InputLabel/index.js");
/* harmony import */ var _material_ui_core_InputLabel__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_InputLabel__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _material_ui_core_Input__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @material-ui/core/Input */ "./node_modules/@material-ui/core/Input/index.js");
/* harmony import */ var _material_ui_core_Input__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Input__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _material_ui_core_FormControl__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @material-ui/core/FormControl */ "./node_modules/@material-ui/core/FormControl/index.js");
/* harmony import */ var _material_ui_core_FormControl__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_FormControl__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _material_ui_core_Select__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @material-ui/core/Select */ "./node_modules/@material-ui/core/Select/index.js");
/* harmony import */ var _material_ui_core_Select__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Select__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var jmarroyave_conf_constants__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! jmarroyave/conf/constants */ "./src/jmarroyave/conf/constants.js");
/* harmony import */ var _com_version_scss__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./com_version.scss */ "./src/jmarroyave/components/uxi/core/com_version.scss");
/* harmony import */ var _com_version_scss__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(_com_version_scss__WEBPACK_IMPORTED_MODULE_12__);
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }















var Component = function (_React$Component) {
	_inherits(Component, _React$Component);

	function Component(props) {
		_classCallCheck(this, Component);

		var _this = _possibleConstructorReturn(this, (Component.__proto__ || Object.getPrototypeOf(Component)).call(this, props));

		var com = window.__api.getComponentsVersion();

		_this.state = {
			option: com.id
		};

		_this.handleChange = _this.handleChange.bind(_this);
		_this.onClose = _this.onClose.bind(_this);
		return _this;
	}

	_createClass(Component, [{
		key: 'handleChange',
		value: function handleChange(event) {
			var value = event.target.value;
			this.setState({ option: value });
			window.__api.setComponentsVersion(value);
		}
	}, {
		key: 'onClose',
		value: function onClose() {
			if (this.props.onClose != null) {
				this.props.onClose();
			}
		}
	}, {
		key: 'render',
		value: function render() {
			if (!jmarroyave_conf_constants__WEBPACK_IMPORTED_MODULE_11__["default"].COM_SWITCH) {
				return null;
			}

			var data = jmarroyave_conf_constants__WEBPACK_IMPORTED_MODULE_11__["default"].UXI_VERSIONS;
			return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
				'div',
				{ className: 'mod-version' },
				react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
					_material_ui_core_FormControl__WEBPACK_IMPORTED_MODULE_9___default.a,
					null,
					react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
						_material_ui_core_InputLabel__WEBPACK_IMPORTED_MODULE_7___default.a,
						{ htmlFor: 'native-simple' },
						'UXUI Version'
					),
					react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
						_material_ui_core_Select__WEBPACK_IMPORTED_MODULE_10___default.a,
						{ native: true, value: this.state.option, onChange: this.handleChange, input: react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Input__WEBPACK_IMPORTED_MODULE_8___default.a, { id: 'native-simple' }) },
						data.map(function (item) {
							return item.visible && react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
								'option',
								{ key: item.id, value: item.id },
								item.family,
								' ',
								item.version[0] + '.' + item.version[1] + '.' + item.version[2]
							);
						})
					)
				)
			);
		}
	}]);

	return Component;
}(react__WEBPACK_IMPORTED_MODULE_0___default.a.Component);

/* harmony default export */ __webpack_exports__["default"] = (Object(jmarroyave_components_uxi_core_with_module__WEBPACK_IMPORTED_MODULE_1__["default"])(Component));

/***/ }),

/***/ "./src/jmarroyave/components/uxi/core/com_version.scss":
/*!*************************************************************!*\
  !*** ./src/jmarroyave/components/uxi/core/com_version.scss ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../../../../../../frameworks/webapps/startup/node_modules/css-loader!../../../../../../../../../frameworks/webapps/startup/node_modules/sass-loader/lib/loader.js!./com_version.scss */ "../../../../frameworks/webapps/startup/node_modules/css-loader/index.js!../../../../frameworks/webapps/startup/node_modules/sass-loader/lib/loader.js!./src/jmarroyave/components/uxi/core/com_version.scss");

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
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var jmarroyave_components_uxi_core_with_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! jmarroyave/components/uxi/core/with-module */ "./src/jmarroyave/components/uxi/core/with-module.js");
/* harmony import */ var react_device_detect__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-device-detect */ "./node_modules/react-device-detect/dist/index.js");
/* harmony import */ var react_device_detect__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_device_detect__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var jmarroyave_conf_constants__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! jmarroyave/conf/constants */ "./src/jmarroyave/conf/constants.js");
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }






var Debug = function (_React$Component) {
	_inherits(Debug, _React$Component);

	function Debug() {
		_classCallCheck(this, Debug);

		return _possibleConstructorReturn(this, (Debug.__proto__ || Object.getPrototypeOf(Debug)).apply(this, arguments));
	}

	_createClass(Debug, [{
		key: 'render',
		value: function render() {
			var app = this.props.app;
			var data = "data" in this.props ? this.props.data : {};

			if (!app) return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement('div', null);
			return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
				'div',
				null,
				app.local && react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
					'div',
					{ style: { backgroundColor: 'rgb(204, 0, 0)', color: 'white', fontSize: '1.5rem', textAlignment: 'justify', padding: '2%', width: '100%' } },
					react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
						'b',
						null,
						'Notice:'
					),
					' Test dataset enabled'
				),
				jmarroyave_conf_constants__WEBPACK_IMPORTED_MODULE_3__["default"].DEBUG && react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
					'div',
					{ className: 'mod-debug' },
					react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
						'span',
						null,
						react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
							'b',
							null,
							'Version: ',
							jmarroyave_conf_constants__WEBPACK_IMPORTED_MODULE_3__["default"].VERSION
						)
					),
					react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement('br', null),
					react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
						'span',
						null,
						react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
							'b',
							null,
							'Size:'
						),
						' ',
						window.innerWidth || document.body.clientWidth,
						' x ',
						window.innerHeight || document.body.clientHeight
					),
					react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement('br', null),
					react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
						'span',
						null,
						react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
							'b',
							null,
							'Browser:'
						),
						' ',
						react_device_detect__WEBPACK_IMPORTED_MODULE_2__["browserName"],
						' v.[',
						react_device_detect__WEBPACK_IMPORTED_MODULE_2__["browserVersion"],
						']'
					),
					react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement('br', null),
					react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
						react_device_detect__WEBPACK_IMPORTED_MODULE_2__["MobileView"],
						null,
						react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
							'span',
							null,
							react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
								'b',
								null,
								'Mobile:'
							),
							' ',
							react_device_detect__WEBPACK_IMPORTED_MODULE_2__["mobileVendor"],
							' ',
							react_device_detect__WEBPACK_IMPORTED_MODULE_2__["mobileModel"]
						),
						react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement('br', null)
					),
					react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
						'span',
						null,
						react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
							'b',
							null,
							'OS:'
						),
						' ',
						react_device_detect__WEBPACK_IMPORTED_MODULE_2__["osName"],
						' v.[',
						react_device_detect__WEBPACK_IMPORTED_MODULE_2__["osVersion"],
						']'
					),
					react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement('br', null),
					app.error && react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
						'div',
						null,
						react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement('hr', null),
						react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
							'span',
							null,
							react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
								'b',
								null,
								'Error:'
							),
							' ',
							app.error
						)
					)
				)
			);
		}
	}]);

	return Debug;
}(react__WEBPACK_IMPORTED_MODULE_0___default.a.Component);

/* harmony default export */ __webpack_exports__["default"] = (Object(jmarroyave_components_uxi_core_with_module__WEBPACK_IMPORTED_MODULE_1__["default"])(Debug));

/***/ }),

/***/ "./src/jmarroyave/components/uxi/core/footer_links.js":
/*!************************************************************!*\
  !*** ./src/jmarroyave/components/uxi/core/footer_links.js ***!
  \************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var jmarroyave_components_uxi_core_grid_container__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! jmarroyave/components/uxi/core/grid_container */ "./src/jmarroyave/components/uxi/core/grid_container.js");
/* harmony import */ var jmarroyave_components_uxi_core_grid_item__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! jmarroyave/components/uxi/core/grid_item */ "./src/jmarroyave/components/uxi/core/grid_item.js");
/* harmony import */ var react_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-router */ "./node_modules/react-router/es/index.js");
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }






var Component = function (_React$Component) {
		_inherits(Component, _React$Component);

		function Component() {
				_classCallCheck(this, Component);

				return _possibleConstructorReturn(this, (Component.__proto__ || Object.getPrototypeOf(Component)).apply(this, arguments));
		}

		_createClass(Component, [{
				key: 'render',
				value: function render() {
						return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
								jmarroyave_components_uxi_core_grid_container__WEBPACK_IMPORTED_MODULE_1__["default"],
								{ spacing: 8 },
								react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
										jmarroyave_components_uxi_core_grid_item__WEBPACK_IMPORTED_MODULE_2__["default"],
										{ xs: 12, sm: 6, md: 4 },
										react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
												'h1',
												null,
												'jmarroyave'
										),
										react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
												'div',
												null,
												react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
														react_router__WEBPACK_IMPORTED_MODULE_3__["Link"],
														{ to: '/acerca' },
														'acerca'
												)
										)
								),
								react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
										jmarroyave_components_uxi_core_grid_item__WEBPACK_IMPORTED_MODULE_2__["default"],
										{ xs: 12, sm: 6, md: 4 },
										react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
												'h1',
												null,
												'labs'
										),
										react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
												'div',
												null,
												react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
														react_router__WEBPACK_IMPORTED_MODULE_3__["Link"],
														{ to: 'labs/mlb' },
														'mlb'
												)
										),
										react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
												'div',
												null,
												react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
														react_router__WEBPACK_IMPORTED_MODULE_3__["Link"],
														{ to: 'labs/trends' },
														'trends'
												)
										),
										react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
												'div',
												null,
												react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
														react_router__WEBPACK_IMPORTED_MODULE_3__["Link"],
														{ to: 'labs/search' },
														'search'
												)
										)
								),
								react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
										jmarroyave_components_uxi_core_grid_item__WEBPACK_IMPORTED_MODULE_2__["default"],
										{ xs: 12, sm: 6, md: 4 },
										react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
												'h1',
												null,
												'knowledge base'
										),
										react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
												'div',
												null,
												react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
														react_router__WEBPACK_IMPORTED_MODULE_3__["Link"],
														{ to: 'kb/android' },
														'android libs'
												)
										)
								)
						);
				}
		}]);

		return Component;
}(react__WEBPACK_IMPORTED_MODULE_0___default.a.Component);

/* harmony default export */ __webpack_exports__["default"] = (Component);

/***/ }),

/***/ "./src/jmarroyave/components/uxi/core/grid_container.js":
/*!**************************************************************!*\
  !*** ./src/jmarroyave/components/uxi/core/grid_container.js ***!
  \**************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var jmarroyave_components_uxi_core_with_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! jmarroyave/components/uxi/core/with-module */ "./src/jmarroyave/components/uxi/core/with-module.js");
/* harmony import */ var _material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/core/Grid */ "./node_modules/@material-ui/core/Grid/index.js");
/* harmony import */ var _material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_2__);
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }





var GridContainer = function (_React$Component) {
	_inherits(GridContainer, _React$Component);

	function GridContainer() {
		_classCallCheck(this, GridContainer);

		return _possibleConstructorReturn(this, (GridContainer.__proto__ || Object.getPrototypeOf(GridContainer)).apply(this, arguments));
	}

	_createClass(GridContainer, [{
		key: 'render',
		value: function render() {
			var spacing = "spacing" in this.props ? this.props.spacing : 0;
			var align = "align" in this.props ? this.props.align : "justify" in this.props ? this.props.justify : 'flex-start';
			var valign = "valign" in this.props ? this.props.align : "alignItems" in this.props ? this.props.alignItems : 'flex-start';
			var direction = "direction" in this.props ? this.props.direction : 'row';
			var className = "className" in this.props ? this.props.className : '';

			return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
				_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_2___default.a,
				{ className: className, container: true, spacing: spacing, style: { width: '100%' }, direction: direction, alignItems: valign, justify: align },
				this.props.children
			);
		}
	}]);

	return GridContainer;
}(react__WEBPACK_IMPORTED_MODULE_0___default.a.Component);

/* harmony default export */ __webpack_exports__["default"] = (Object(jmarroyave_components_uxi_core_with_module__WEBPACK_IMPORTED_MODULE_1__["default"])(GridContainer));

/***/ }),

/***/ "./src/jmarroyave/components/uxi/core/grid_item.js":
/*!*********************************************************!*\
  !*** ./src/jmarroyave/components/uxi/core/grid_item.js ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var jmarroyave_components_uxi_core_with_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! jmarroyave/components/uxi/core/with-module */ "./src/jmarroyave/components/uxi/core/with-module.js");
/* harmony import */ var _material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/core/Grid */ "./node_modules/@material-ui/core/Grid/index.js");
/* harmony import */ var _material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_2__);
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }





var GridItem = function (_React$Component) {
	_inherits(GridItem, _React$Component);

	function GridItem() {
		_classCallCheck(this, GridItem);

		return _possibleConstructorReturn(this, (GridItem.__proto__ || Object.getPrototypeOf(GridItem)).apply(this, arguments));
	}

	_createClass(GridItem, [{
		key: 'render',
		value: function render() {
			var visible = "visible" in this.props ? this.props.visible : true;
			var xs = "xs" in this.props ? this.props.xs : 12;
			var className = "className" in this.props ? this.props.className : '';
			return visible && react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
				_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_2___default.a,
				{ className: className, item: true, xs: xs, sm: this.props.sm, md: this.props.md, style: this.props.style },
				this.props.children
			);
		}
	}]);

	return GridItem;
}(react__WEBPACK_IMPORTED_MODULE_0___default.a.Component);

/* harmony default export */ __webpack_exports__["default"] = (Object(jmarroyave_components_uxi_core_with_module__WEBPACK_IMPORTED_MODULE_1__["default"])(GridItem));

/***/ }),

/***/ "./src/jmarroyave/components/uxi/core/page/app.js":
/*!********************************************************!*\
  !*** ./src/jmarroyave/components/uxi/core/page/app.js ***!
  \********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @material-ui/core/styles */ "./node_modules/@material-ui/core/styles/index.js");
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _material_ui_core_Hidden__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/core/Hidden */ "./node_modules/@material-ui/core/Hidden/index.js");
/* harmony import */ var _material_ui_core_Hidden__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Hidden__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/core/Grid */ "./node_modules/@material-ui/core/Grid/index.js");
/* harmony import */ var _material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var core_components_app__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! core/components/app */ "./src/core/components/app.js");
/* harmony import */ var core_components_button_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! core/components/button.js */ "./src/core/components/button.js");
/* harmony import */ var jmarroyave_components_uxi_core_page_drawer__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! jmarroyave/components/uxi/core/page/drawer */ "./src/jmarroyave/components/uxi/core/page/drawer.js");
/* harmony import */ var jmarroyave_conf_navigation__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! jmarroyave/conf/navigation */ "./src/jmarroyave/conf/navigation.js");
/* harmony import */ var jmarroyave_conf_constants__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! jmarroyave/conf/constants */ "./src/jmarroyave/conf/constants.js");
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }












var theme = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_1__["createMuiTheme"])({
  palette: {
    primary: {
      light: '#41569c',
      main: '#002e6d',
      dark: '#000441',
      contrastText: '#fff'
    },
    secondary: {
      light: '#ff5047',
      main: '#d1001e',
      dark: '#970000',
      contrastText: '#fff'
    }
  },
  typography: {
    // Use the system font instead of the default Roboto font.
    fontFamily: ["Helvetica Neue", "Helvetica", "Arial", '-apple-system', 'BlinkMacSystemFont', '"Segoe UI"', 'Roboto', 'sans-serif', '"Apple Color Emoji"', '"Segoe UI Emoji"', '"Segoe UI Symbol"'].join(','),
    fontSize: '12px'
  }
});

var styles = function styles(theme) {
  return {
    bar: {
      padding: 0,
      width: '100%',
      height: '100%',
      boxSizing: 'border-box'
    },
    body: {
      padding: 0,
      flexGrow: 1,
      marginTop: -5,
      width: '100%',
      minHeight: '90vh',
      boxSizing: 'border-box',
      zIndex: 3,
      borderRadius: 5
    }
  };
};

var MLBApp = function (_React$Component) {
  _inherits(MLBApp, _React$Component);

  function MLBApp(props) {
    _classCallCheck(this, MLBApp);

    var _this = _possibleConstructorReturn(this, (MLBApp.__proto__ || Object.getPrototypeOf(MLBApp)).call(this, props));

    _this.navigation = new jmarroyave_conf_navigation__WEBPACK_IMPORTED_MODULE_7__["default"]();
    return _this;
  }

  _createClass(MLBApp, [{
    key: 'menuClick',
    value: function menuClick(path) {
      this.props.router.push(path);
    }
  }, {
    key: 'render',
    value: function render() {
      var _this2 = this;

      var key = 0;
      var classes = this.props.classes;
      var toolbar = [];
      this.navigation.options.map(function (item) {
        if (item.showInMenu) toolbar.push(react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
          core_components_button_js__WEBPACK_IMPORTED_MODULE_5__["default"],
          { key: key++, style: { color: jmarroyave_conf_constants__WEBPACK_IMPORTED_MODULE_8__["default"].MENU_BAR_FG_COLOR, fontSize: '1.10em', padding: '0.5em', minWidth: '1.25em' }, onClick: _this2.menuClick.bind(_this2, item.route) },
          item.name
        ));
      });

      var menu = [];
      var title = jmarroyave_conf_constants__WEBPACK_IMPORTED_MODULE_8__["default"].TITLE + ' | ' + jmarroyave_conf_constants__WEBPACK_IMPORTED_MODULE_8__["default"].VERSION;
      var appbar = { title: title, logo: null, menu: menu, toolbar: toolbar };
      var appBody = react__WEBPACK_IMPORTED_MODULE_0___default.a.Children.toArray(this.props.children).find(function (item) {
        return item.props.type === 'Body' ? item : null;
      });

      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
        core_components_app__WEBPACK_IMPORTED_MODULE_4__["default"],
        { barStyle: { backgroundColor: jmarroyave_conf_constants__WEBPACK_IMPORTED_MODULE_8__["default"].MENU_BAR_BG_COLOR, color: jmarroyave_conf_constants__WEBPACK_IMPORTED_MODULE_8__["default"].MENU_BAR_FG_COLOR }, barPosition: this.props.barPosition, page_title: appbar.title, logo: appbar.logo, toolbar: appbar.toolbar, server: this.props.server, theme: null },
        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
          _material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_3___default.a,
          { container: true, spacing: 0, className: classes.page },
          react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
            _material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_3___default.a,
            { item: true, xs: 12, sm: 12, md: 12 },
            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
              _material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_3___default.a,
              { container: true, justify: 'flex-start', direction: 'column', spacing: 0 },
              react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                'div',
                { className: classes.body, style: { width: '100%' } },
                appBody
              )
            )
          )
        )
      );
    }
  }]);

  return MLBApp;
}(react__WEBPACK_IMPORTED_MODULE_0___default.a.Component);

/* harmony default export */ __webpack_exports__["default"] = (Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_1__["withStyles"])(styles)(MLBApp));

/***/ }),

/***/ "./src/jmarroyave/components/uxi/core/page/body.js":
/*!*********************************************************!*\
  !*** ./src/jmarroyave/components/uxi/core/page/body.js ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var jmarroyave_components_uxi_core_page_footer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! jmarroyave/components/uxi/core/page/footer */ "./src/jmarroyave/components/uxi/core/page/footer.js");
/* harmony import */ var jmarroyave_components_uxi_core_page_header__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! jmarroyave/components/uxi/core/page/header */ "./src/jmarroyave/components/uxi/core/page/header.js");
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }





var AppBody = function (_React$Component) {
  _inherits(AppBody, _React$Component);

  function AppBody() {
    _classCallCheck(this, AppBody);

    return _possibleConstructorReturn(this, (AppBody.__proto__ || Object.getPrototypeOf(AppBody)).apply(this, arguments));
  }

  _createClass(AppBody, [{
    key: 'render',
    value: function render() {
      var app = this.props.app;
      var data = this.props.data;
      var children = this.props.children;
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
        'div',
        { style: { position: 'relative' } },
        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(jmarroyave_components_uxi_core_page_header__WEBPACK_IMPORTED_MODULE_2__["default"], { app: app, data: data }),
        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
          'div',
          { style: { minHeight: '90vh' } },
          children
        ),
        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(jmarroyave_components_uxi_core_page_footer__WEBPACK_IMPORTED_MODULE_1__["default"], null)
      );
    }
  }]);

  return AppBody;
}(react__WEBPACK_IMPORTED_MODULE_0___default.a.Component);

AppBody.defaultProps = {
  type: 'Body'
};

/* harmony default export */ __webpack_exports__["default"] = (AppBody);

/***/ }),

/***/ "./src/jmarroyave/components/uxi/core/page/drawer.js":
/*!***********************************************************!*\
  !*** ./src/jmarroyave/components/uxi/core/page/drawer.js ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-router */ "./node_modules/react-router/es/index.js");
/* harmony import */ var _material_ui_core_List__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/core/List */ "./node_modules/@material-ui/core/List/index.js");
/* harmony import */ var _material_ui_core_List__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_List__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_components_app_list__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core/components/app_list */ "./src/core/components/app_list.js");
/* harmony import */ var core_components_icon__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! core/components/icon */ "./src/core/components/icon.js");
/* harmony import */ var jmarroyave_conf_navigation__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! jmarroyave/conf/navigation */ "./src/jmarroyave/conf/navigation.js");
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }








var AppDrawer = function (_React$Component) {
	_inherits(AppDrawer, _React$Component);

	function AppDrawer(props) {
		_classCallCheck(this, AppDrawer);

		var _this = _possibleConstructorReturn(this, (AppDrawer.__proto__ || Object.getPrototypeOf(AppDrawer)).call(this, props));

		_this.navigation = new jmarroyave_conf_navigation__WEBPACK_IMPORTED_MODULE_5__["default"]();
		return _this;
	}

	_createClass(AppDrawer, [{
		key: 'render',
		value: function render() {
			var key = 0;
			return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
				core_components_app_list__WEBPACK_IMPORTED_MODULE_3__["default"],
				null,
				react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
					_material_ui_core_List__WEBPACK_IMPORTED_MODULE_2___default.a,
					{ dense: true },
					this.navigation.options.map(function (item) {
						return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
							react_router__WEBPACK_IMPORTED_MODULE_1__["Link"],
							{ key: key++, to: { pathname: item.route }, className: 'link' },
							react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
								_material_ui_core_List__WEBPACK_IMPORTED_MODULE_2__["ListItem"],
								{ button: true },
								react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
									_material_ui_core_List__WEBPACK_IMPORTED_MODULE_2__["ListItemIcon"],
									null,
									react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(core_components_icon__WEBPACK_IMPORTED_MODULE_4__["default"], { icon: item.icon })
								),
								react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_List__WEBPACK_IMPORTED_MODULE_2__["ListItemText"], { inset: true, primary: item.name })
							)
						);
					})
				)
			);
		}
	}]);

	return AppDrawer;
}(react__WEBPACK_IMPORTED_MODULE_0___default.a.Component);

/* harmony default export */ __webpack_exports__["default"] = (AppDrawer);

/***/ }),

/***/ "./src/jmarroyave/components/uxi/core/page/footer.js":
/*!***********************************************************!*\
  !*** ./src/jmarroyave/components/uxi/core/page/footer.js ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var jmarroyave_components_uxi_core_with_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! jmarroyave/components/uxi/core/with-module */ "./src/jmarroyave/components/uxi/core/with-module.js");
/* harmony import */ var jmarroyave_components_uxi_core_grid_container__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! jmarroyave/components/uxi/core/grid_container */ "./src/jmarroyave/components/uxi/core/grid_container.js");
/* harmony import */ var jmarroyave_components_uxi_core_grid_item__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! jmarroyave/components/uxi/core/grid_item */ "./src/jmarroyave/components/uxi/core/grid_item.js");
/* harmony import */ var jmarroyave_components_uxi_core_footer_links__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! jmarroyave/components/uxi/core/footer_links */ "./src/jmarroyave/components/uxi/core/footer_links.js");
/* harmony import */ var shared_jmarroyave_social_networks__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! shared/jmarroyave/social_networks */ "./src/shared/jmarroyave/social_networks.js");
/* harmony import */ var core_components_mockup_block__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! core/components/mockup/block */ "./src/core/components/mockup/block.js");
/* harmony import */ var _footer_scss__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./footer.scss */ "./src/jmarroyave/components/uxi/core/page/footer.scss");
/* harmony import */ var _footer_scss__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_footer_scss__WEBPACK_IMPORTED_MODULE_7__);
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }











var FooterComponent = function (_React$Component) {
	_inherits(FooterComponent, _React$Component);

	function FooterComponent() {
		_classCallCheck(this, FooterComponent);

		return _possibleConstructorReturn(this, (FooterComponent.__proto__ || Object.getPrototypeOf(FooterComponent)).apply(this, arguments));
	}

	_createClass(FooterComponent, [{
		key: 'render',
		value: function render() {
			var data = this.props.data;
			return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
				'div',
				{ className: 'mod-footer' },
				react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
					jmarroyave_components_uxi_core_grid_container__WEBPACK_IMPORTED_MODULE_2__["default"],
					{ spacing: 8 },
					react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
						jmarroyave_components_uxi_core_grid_item__WEBPACK_IMPORTED_MODULE_3__["default"],
						{ xs: 12 },
						react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(jmarroyave_components_uxi_core_footer_links__WEBPACK_IMPORTED_MODULE_4__["default"], { data: data })
					),
					react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
						jmarroyave_components_uxi_core_grid_item__WEBPACK_IMPORTED_MODULE_3__["default"],
						{ xs: 12, style: { textAlign: 'center' } },
						react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(shared_jmarroyave_social_networks__WEBPACK_IMPORTED_MODULE_5__["default"], null)
					)
				)
			);
		}
	}]);

	return FooterComponent;
}(react__WEBPACK_IMPORTED_MODULE_0___default.a.Component);

/* harmony default export */ __webpack_exports__["default"] = (Object(jmarroyave_components_uxi_core_with_module__WEBPACK_IMPORTED_MODULE_1__["default"])(FooterComponent));

/***/ }),

/***/ "./src/jmarroyave/components/uxi/core/page/footer.scss":
/*!*************************************************************!*\
  !*** ./src/jmarroyave/components/uxi/core/page/footer.scss ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../../../../../../../frameworks/webapps/startup/node_modules/css-loader!../../../../../../../../../../frameworks/webapps/startup/node_modules/sass-loader/lib/loader.js!./footer.scss */ "../../../../frameworks/webapps/startup/node_modules/css-loader/index.js!../../../../frameworks/webapps/startup/node_modules/sass-loader/lib/loader.js!./src/jmarroyave/components/uxi/core/page/footer.scss");

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
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_components_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core/components/component */ "./src/core/components/component.js");
/* harmony import */ var jmarroyave_components_uxi_core_debug__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! jmarroyave/components/uxi/core/debug */ "./src/jmarroyave/components/uxi/core/debug.js");
/* harmony import */ var jmarroyave_components_uxi_core_com_version__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! jmarroyave/components/uxi/core/com_version */ "./src/jmarroyave/components/uxi/core/com_version.js");
/* harmony import */ var jmarroyave_components_uxi_core_top_bar__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! jmarroyave/components/uxi/core/top_bar */ "./src/jmarroyave/components/uxi/core/top_bar.js");
/* harmony import */ var jmarroyave_components_uxi_core_grid_container__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! jmarroyave/components/uxi/core/grid_container */ "./src/jmarroyave/components/uxi/core/grid_container.js");
/* harmony import */ var jmarroyave_components_uxi_core_grid_item__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! jmarroyave/components/uxi/core/grid_item */ "./src/jmarroyave/components/uxi/core/grid_item.js");
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }









var HeaderComponent = function (_React$Component) {
	_inherits(HeaderComponent, _React$Component);

	function HeaderComponent(props) {
		_classCallCheck(this, HeaderComponent);

		return _possibleConstructorReturn(this, (HeaderComponent.__proto__ || Object.getPrototypeOf(HeaderComponent)).call(this, props));
	}

	_createClass(HeaderComponent, [{
		key: 'render',
		value: function render() {
			var data = this.props.data;
			var app = this.props.app;
			return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
				jmarroyave_components_uxi_core_grid_container__WEBPACK_IMPORTED_MODULE_5__["default"],
				null,
				react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
					jmarroyave_components_uxi_core_grid_item__WEBPACK_IMPORTED_MODULE_6__["default"],
					null,
					react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(jmarroyave_components_uxi_core_com_version__WEBPACK_IMPORTED_MODULE_3__["default"], null),
					react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(jmarroyave_components_uxi_core_debug__WEBPACK_IMPORTED_MODULE_2__["default"], { app: app, data: data })
				),
				react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
					jmarroyave_components_uxi_core_grid_item__WEBPACK_IMPORTED_MODULE_6__["default"],
					null,
					react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(jmarroyave_components_uxi_core_top_bar__WEBPACK_IMPORTED_MODULE_4__["default"], { data: app })
				)
			);
		}
	}]);

	return HeaderComponent;
}(react__WEBPACK_IMPORTED_MODULE_0___default.a.Component);

/* harmony default export */ __webpack_exports__["default"] = (Object(core_components_component__WEBPACK_IMPORTED_MODULE_1__["default"])(HeaderComponent));

/***/ }),

/***/ "./src/jmarroyave/components/uxi/core/top_bar.js":
/*!*******************************************************!*\
  !*** ./src/jmarroyave/components/uxi/core/top_bar.js ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_components_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core/components/component */ "./src/core/components/component.js");
/* harmony import */ var jmarroyave_components_uxi_core_grid_container__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! jmarroyave/components/uxi/core/grid_container */ "./src/jmarroyave/components/uxi/core/grid_container.js");
/* harmony import */ var jmarroyave_components_uxi_core_grid_item__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! jmarroyave/components/uxi/core/grid_item */ "./src/jmarroyave/components/uxi/core/grid_item.js");
/* harmony import */ var jmarroyave_components_uxi_home_block__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! jmarroyave/components/uxi/home/block */ "./src/jmarroyave/components/uxi/home/block.js");
/* harmony import */ var jmarroyave_components_uxi_core_whats_hot__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! jmarroyave/components/uxi/core/whats_hot */ "./src/jmarroyave/components/uxi/core/whats_hot.js");
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }








var TopBar = function (_React$Component) {
  _inherits(TopBar, _React$Component);

  function TopBar() {
    _classCallCheck(this, TopBar);

    return _possibleConstructorReturn(this, (TopBar.__proto__ || Object.getPrototypeOf(TopBar)).apply(this, arguments));
  }

  _createClass(TopBar, [{
    key: 'render',
    value: function render() {
      var data = this.props.data;
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
        jmarroyave_components_uxi_home_block__WEBPACK_IMPORTED_MODULE_4__["default"],
        null,
        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
          jmarroyave_components_uxi_core_grid_container__WEBPACK_IMPORTED_MODULE_2__["default"],
          null,
          react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
            jmarroyave_components_uxi_core_grid_item__WEBPACK_IMPORTED_MODULE_3__["default"],
            { xs: 12 },
            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(jmarroyave_components_uxi_core_whats_hot__WEBPACK_IMPORTED_MODULE_5__["default"], { data: data.hot })
          )
        )
      );
    }
  }]);

  return TopBar;
}(react__WEBPACK_IMPORTED_MODULE_0___default.a.Component);

/* harmony default export */ __webpack_exports__["default"] = (Object(core_components_component__WEBPACK_IMPORTED_MODULE_1__["default"])(TopBar));

/***/ }),

/***/ "./src/jmarroyave/components/uxi/core/whats_hot.js":
/*!*********************************************************!*\
  !*** ./src/jmarroyave/components/uxi/core/whats_hot.js ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var jmarroyave_components_data_post_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! jmarroyave/components/data/post_link */ "./src/jmarroyave/components/data/post_link.js");
/* harmony import */ var core_components_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core/components/component */ "./src/core/components/component.js");
/* harmony import */ var _whats_hot_scss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./whats_hot.scss */ "./src/jmarroyave/components/uxi/core/whats_hot.scss");
/* harmony import */ var _whats_hot_scss__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_whats_hot_scss__WEBPACK_IMPORTED_MODULE_3__);
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }






var HotBarComponent = function (_React$Component) {
  _inherits(HotBarComponent, _React$Component);

  function HotBarComponent() {
    _classCallCheck(this, HotBarComponent);

    return _possibleConstructorReturn(this, (HotBarComponent.__proto__ || Object.getPrototypeOf(HotBarComponent)).apply(this, arguments));
  }

  _createClass(HotBarComponent, [{
    key: 'render',
    value: function render() {
      var data = this.props.data;
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
        'div',
        { className: 'mod-whats-hot' },
        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
          jmarroyave_components_data_post_link__WEBPACK_IMPORTED_MODULE_1__["default"],
          { slug: data.slug, category: data.area },
          data.area,
          ' > ',
          data.title
        )
      );
    }
  }]);

  return HotBarComponent;
}(react__WEBPACK_IMPORTED_MODULE_0___default.a.Component);

/* harmony default export */ __webpack_exports__["default"] = (Object(core_components_component__WEBPACK_IMPORTED_MODULE_2__["default"])(HotBarComponent));

/***/ }),

/***/ "./src/jmarroyave/components/uxi/core/whats_hot.scss":
/*!***********************************************************!*\
  !*** ./src/jmarroyave/components/uxi/core/whats_hot.scss ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../../../../../../frameworks/webapps/startup/node_modules/css-loader!../../../../../../../../../frameworks/webapps/startup/node_modules/sass-loader/lib/loader.js!./whats_hot.scss */ "../../../../frameworks/webapps/startup/node_modules/css-loader/index.js!../../../../frameworks/webapps/startup/node_modules/sass-loader/lib/loader.js!./src/jmarroyave/components/uxi/core/whats_hot.scss");

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
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_components_error__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core/components/error */ "./src/core/components/error.js");
/* harmony import */ var core_components_loading_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core/components/loading.js */ "./src/core/components/loading.js");
/* harmony import */ var jmarroyave_conf_constants__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! jmarroyave/conf/constants */ "./src/jmarroyave/conf/constants.js");
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }






var withModule = function withModule(ModuleComponent) {
	return function (_React$Component) {
		_inherits(_class, _React$Component);

		function _class() {
			_classCallCheck(this, _class);

			return _possibleConstructorReturn(this, (_class.__proto__ || Object.getPrototypeOf(_class)).apply(this, arguments));
		}

		_createClass(_class, [{
			key: 'render',
			value: function render() {
				var title = "title" in this.props ? this.props.title : null;
				var ph = "placeholder" in this.props ? this.props.placeholder : {};
				var phW = ph.width ? ph.width : '100%';
				var phH = ph.height ? ph.height : '250';

				return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
					core_components_error__WEBPACK_IMPORTED_MODULE_1__["default"],
					{ from: title, style: { width: '100%' } },
					react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(ModuleComponent, this.props)
				);
			}
		}]);

		return _class;
	}(react__WEBPACK_IMPORTED_MODULE_0___default.a.Component);
};

/* harmony default export */ __webpack_exports__["default"] = (withModule);

/***/ }),

/***/ "./src/jmarroyave/components/uxi/cv/page.js":
/*!**************************************************!*\
  !*** ./src/jmarroyave/components/uxi/cv/page.js ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_loadable__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-loadable */ "./node_modules/react-loadable/lib/index.js");
/* harmony import */ var react_loadable__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_loadable__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_components_loading__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core/components/loading */ "./src/core/components/loading.js");
/* harmony import */ var jmarroyave_components_uxi_core_page_app__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! jmarroyave/components/uxi/core/page/app */ "./src/jmarroyave/components/uxi/core/page/app.js");
/* harmony import */ var jmarroyave_components_uxi_core_page_body__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! jmarroyave/components/uxi/core/page/body */ "./src/jmarroyave/components/uxi/core/page/body.js");
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }







var HomeProxy = react_loadable__WEBPACK_IMPORTED_MODULE_1___default()({
	loader: function loader() {
		return Promise.all(/*! import() */[__webpack_require__.e("vendor"), __webpack_require__.e(1)]).then(__webpack_require__.bind(null, /*! jmarroyave/components/uxi/cv/layout/layout-proxy */ "./src/jmarroyave/components/uxi/cv/layout/layout-proxy.js"));
	},
	loading: core_components_loading__WEBPACK_IMPORTED_MODULE_2__["default"]
});

var Page = function (_React$Component) {
	_inherits(Page, _React$Component);

	function Page(props, context) {
		_classCallCheck(this, Page);

		var _this = _possibleConstructorReturn(this, (Page.__proto__ || Object.getPrototypeOf(Page)).call(this, props, context));

		_this.api = window.__api;
		return _this;
	}

	_createClass(Page, [{
		key: 'componentDidMount',
		value: function componentDidMount() {}
	}, {
		key: 'render',
		value: function render() {
			var app = this.props.app;
			var key = 0;
			return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
				jmarroyave_components_uxi_core_page_app__WEBPACK_IMPORTED_MODULE_3__["default"],
				{ router: this.props.router, app: this.props.app },
				react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
					jmarroyave_components_uxi_core_page_body__WEBPACK_IMPORTED_MODULE_4__["default"],
					{ path: [{ text: 'home', route: '/' }], app: this.props.app, data: { home: this.props.page } },
					react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(HomeProxy, { data: this.props.page.data })
				)
			);
		}
	}]);

	return Page;
}(react__WEBPACK_IMPORTED_MODULE_0___default.a.Component);

/* harmony default export */ __webpack_exports__["default"] = (Page);

/***/ }),

/***/ "./src/jmarroyave/components/uxi/home/block.js":
/*!*****************************************************!*\
  !*** ./src/jmarroyave/components/uxi/home/block.js ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_components_error__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core/components/error */ "./src/core/components/error.js");
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }




var Component = function (_React$Component) {
	_inherits(Component, _React$Component);

	function Component() {
		_classCallCheck(this, Component);

		return _possibleConstructorReturn(this, (Component.__proto__ || Object.getPrototypeOf(Component)).apply(this, arguments));
	}

	_createClass(Component, [{
		key: 'render',
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
			return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
				'div',
				{ className: 'mod-block', style: { borderBottom: borderBottom, backgroundColor: 'white', padding: '7px', paddingTop: paddingTop } },
				title && react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
					'h1',
					null,
					title
				),
				react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
					'div',
					{ className: 'body' },
					react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
						core_components_error__WEBPACK_IMPORTED_MODULE_1__["default"],
						{ from: title },
						children
					)
				)
			);
		}
	}]);

	return Component;
}(react__WEBPACK_IMPORTED_MODULE_0___default.a.Component);

/* harmony default export */ __webpack_exports__["default"] = (Component);

/***/ }),

/***/ "./src/jmarroyave/components/uxi/home/page.js":
/*!****************************************************!*\
  !*** ./src/jmarroyave/components/uxi/home/page.js ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_loadable__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-loadable */ "./node_modules/react-loadable/lib/index.js");
/* harmony import */ var react_loadable__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_loadable__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_components_loading__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core/components/loading */ "./src/core/components/loading.js");
/* harmony import */ var jmarroyave_components_uxi_core_page_app__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! jmarroyave/components/uxi/core/page/app */ "./src/jmarroyave/components/uxi/core/page/app.js");
/* harmony import */ var jmarroyave_components_uxi_core_page_body__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! jmarroyave/components/uxi/core/page/body */ "./src/jmarroyave/components/uxi/core/page/body.js");
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }







var HomeProxy = react_loadable__WEBPACK_IMPORTED_MODULE_1___default()({
	loader: function loader() {
		return Promise.all(/*! import() */[__webpack_require__.e("vendor"), __webpack_require__.e(0)]).then(__webpack_require__.bind(null, /*! jmarroyave/components/uxi/home/layout/home-layout-proxy */ "./src/jmarroyave/components/uxi/home/layout/home-layout-proxy.js"));
	},
	loading: core_components_loading__WEBPACK_IMPORTED_MODULE_2__["default"]
});

var Page = function (_React$Component) {
	_inherits(Page, _React$Component);

	function Page(props, context) {
		_classCallCheck(this, Page);

		var _this = _possibleConstructorReturn(this, (Page.__proto__ || Object.getPrototypeOf(Page)).call(this, props, context));

		_this.api = window.__api;
		return _this;
	}

	_createClass(Page, [{
		key: 'componentDidMount',
		value: function componentDidMount() {}
	}, {
		key: 'render',
		value: function render() {
			var app = this.props.app;
			var key = 0;
			return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
				jmarroyave_components_uxi_core_page_app__WEBPACK_IMPORTED_MODULE_3__["default"],
				{ router: this.props.router, app: app },
				react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
					jmarroyave_components_uxi_core_page_body__WEBPACK_IMPORTED_MODULE_4__["default"],
					{ path: [{ text: 'home', route: '/' }], app: app, data: this.props.page },
					react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(HomeProxy, { data: this.props.page.data, trends: this.props.page.trends })
				)
			);
		}
	}]);

	return Page;
}(react__WEBPACK_IMPORTED_MODULE_0___default.a.Component);

/* harmony default export */ __webpack_exports__["default"] = (Page);

/***/ }),

/***/ "./src/jmarroyave/components/uxi/kb/page.js":
/*!**************************************************!*\
  !*** ./src/jmarroyave/components/uxi/kb/page.js ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_loadable__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-loadable */ "./node_modules/react-loadable/lib/index.js");
/* harmony import */ var react_loadable__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_loadable__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_components_loading__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core/components/loading */ "./src/core/components/loading.js");
/* harmony import */ var jmarroyave_components_uxi_core_page_app__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! jmarroyave/components/uxi/core/page/app */ "./src/jmarroyave/components/uxi/core/page/app.js");
/* harmony import */ var jmarroyave_components_uxi_core_page_body__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! jmarroyave/components/uxi/core/page/body */ "./src/jmarroyave/components/uxi/core/page/body.js");
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }







var AndroidProxy = react_loadable__WEBPACK_IMPORTED_MODULE_1___default()({
	loader: function loader() {
		return Promise.all(/*! import() */[__webpack_require__.e("vendor"), __webpack_require__.e(3)]).then(__webpack_require__.bind(null, /*! jmarroyave/components/uxi/kb/android/layout/layout-proxy */ "./src/jmarroyave/components/uxi/kb/android/layout/layout-proxy.js"));
	},
	loading: core_components_loading__WEBPACK_IMPORTED_MODULE_2__["default"]
});

var Page = function (_React$Component) {
	_inherits(Page, _React$Component);

	function Page(props, context) {
		_classCallCheck(this, Page);

		var _this = _possibleConstructorReturn(this, (Page.__proto__ || Object.getPrototypeOf(Page)).call(this, props, context));

		_this.api = window.__api;
		return _this;
	}

	_createClass(Page, [{
		key: 'componentDidMount',
		value: function componentDidMount() {}
	}, {
		key: 'render',
		value: function render() {
			var app = this.props.app;
			var key = 0;
			return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
				jmarroyave_components_uxi_core_page_app__WEBPACK_IMPORTED_MODULE_3__["default"],
				{ router: this.props.router, app: this.props.app },
				react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
					jmarroyave_components_uxi_core_page_body__WEBPACK_IMPORTED_MODULE_4__["default"],
					{ path: [{ text: 'home', route: '/' }], app: this.props.app, data: { home: this.props.page } },
					this.props.component == 'android' ? react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(AndroidProxy, { data: this.props.page.data }) : ""
				)
			);
		}
	}]);

	return Page;
}(react__WEBPACK_IMPORTED_MODULE_0___default.a.Component);

/* harmony default export */ __webpack_exports__["default"] = (Page);

/***/ }),

/***/ "./src/jmarroyave/conf/constants.js":
/*!******************************************!*\
  !*** ./src/jmarroyave/conf/constants.js ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var jmarroyave_conf_values_default__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jmarroyave/conf/values/default */ "./src/jmarroyave/conf/values/default.js");
/* harmony import */ var jmarroyave_conf_versions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! jmarroyave/conf/versions */ "./src/jmarroyave/conf/versions.js");
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }




var Constants = function Constants() {
  _classCallCheck(this, Constants);
};

Constants.DEBUG = jmarroyave_conf_values_default__WEBPACK_IMPORTED_MODULE_0__["default"].DEBUG;

Constants.LOCAL = jmarroyave_conf_values_default__WEBPACK_IMPORTED_MODULE_0__["default"].LOCAL;
Constants.TITLE = "JMArroyave - Ciencias de la Computación";
Constants.VERSION = jmarroyave_conf_values_default__WEBPACK_IMPORTED_MODULE_0__["default"].VERSION;

Constants.MENU_BAR_FG_COLOR = "#FFF";
Constants.MENU_BAR_BG_COLOR = "#333";

Constants.UXI_VERSIONS = jmarroyave_conf_versions__WEBPACK_IMPORTED_MODULE_1__["default"].LOG;

Constants.COM_CURRENT = Constants.UXI_VERSIONS.find(function (item) {
  return item.id == jmarroyave_conf_values_default__WEBPACK_IMPORTED_MODULE_0__["default"].DEFAULT_UXI ? item : null;
});

Constants.COMID = Constants.COM_CURRENT.id;
Constants.COMF = Constants.COM_CURRENT.family;
Constants.COMV = Constants.COM_CURRENT.version;

Constants.COM_SWITCH = jmarroyave_conf_values_default__WEBPACK_IMPORTED_MODULE_0__["default"].COM_SWITCH;

/* harmony default export */ __webpack_exports__["default"] = (Constants);

/***/ }),

/***/ "./src/jmarroyave/conf/navigation.js":
/*!*******************************************!*\
  !*** ./src/jmarroyave/conf/navigation.js ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var jmarroyave_pages_blank__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jmarroyave/pages/blank */ "./src/jmarroyave/pages/blank.js");
/* harmony import */ var jmarroyave_pages_home__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! jmarroyave/pages/home */ "./src/jmarroyave/pages/home.js");
/* harmony import */ var jmarroyave_pages_blog__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! jmarroyave/pages/blog */ "./src/jmarroyave/pages/blog.js");
/* harmony import */ var jmarroyave_pages_labs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! jmarroyave/pages/labs */ "./src/jmarroyave/pages/labs.js");
/* harmony import */ var jmarroyave_pages_blog_post__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! jmarroyave/pages/blog_post */ "./src/jmarroyave/pages/blog_post.js");
/* harmony import */ var jmarroyave_pages_labs_project__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! jmarroyave/pages/labs_project */ "./src/jmarroyave/pages/labs_project.js");
/* harmony import */ var jmarroyave_pages_cv__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! jmarroyave/pages/cv */ "./src/jmarroyave/pages/cv.js");
/* harmony import */ var jmarroyave_pages_kb__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! jmarroyave/pages/kb */ "./src/jmarroyave/pages/kb.js");
/* harmony import */ var jmarroyave_pages_kb_post__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! jmarroyave/pages/kb_post */ "./src/jmarroyave/pages/kb_post.js");
/* harmony import */ var jmarroyave_pages_kb_post_android__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! jmarroyave/pages/kb_post_android */ "./src/jmarroyave/pages/kb_post_android.js");
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }












var Navigation = function Navigation() {
	_classCallCheck(this, Navigation);

	this.options = [{
		showInMenu: true,
		name: 'Home',
		icon: null,
		route: '/',
		component: jmarroyave_pages_home__WEBPACK_IMPORTED_MODULE_1__["default"]
	}, {
		showInMenu: true,
		name: 'Blog',
		icon: null,
		route: '/blog',
		component: jmarroyave_pages_blog__WEBPACK_IMPORTED_MODULE_2__["default"]
	}, {
		showInMenu: false,
		name: 'Blog Post',
		icon: 'blog',
		route: '/blog/:year/:month/:day/:post',
		component: jmarroyave_pages_blog_post__WEBPACK_IMPORTED_MODULE_4__["default"]
	}, {
		showInMenu: true,
		name: 'KB',
		icon: null,
		route: '/kb',
		component: jmarroyave_pages_kb__WEBPACK_IMPORTED_MODULE_7__["default"]
	}, {
		showInMenu: false,
		name: 'KB Post - Android',
		icon: 'blog',
		route: '/kb/android',
		component: jmarroyave_pages_kb_post_android__WEBPACK_IMPORTED_MODULE_9__["default"]
	}, {
		showInMenu: false,
		name: 'KB Post',
		icon: 'blog',
		route: '/kb/:post',
		component: jmarroyave_pages_kb_post__WEBPACK_IMPORTED_MODULE_8__["default"]
	}, {
		showInMenu: true,
		name: 'Labs',
		icon: null,
		route: '/labs',
		component: jmarroyave_pages_labs__WEBPACK_IMPORTED_MODULE_3__["default"]
	}, {
		showInMenu: false,
		name: 'Project',
		icon: 'blog',
		route: '/labs/:project',
		component: jmarroyave_pages_labs_project__WEBPACK_IMPORTED_MODULE_5__["default"]
	}, {
		showInMenu: true,
		name: 'Acerca',
		icon: null,
		route: '/acerca',
		component: jmarroyave_pages_cv__WEBPACK_IMPORTED_MODULE_6__["default"]
	}];
};

/* harmony default export */ __webpack_exports__["default"] = (Navigation);

/***/ }),

/***/ "./src/jmarroyave/conf/values/default.js":
/*!***********************************************!*\
  !*** ./src/jmarroyave/conf/values/default.js ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Conf = function Conf() {
  _classCallCheck(this, Conf);
};

Conf.VERSION = "0.1.0";
Conf.DEBUG = false;
Conf.LOCAL = true;
Conf.COM_SWITCH = false;
Conf.DEFAULT_UXI = 1;

/* harmony default export */ __webpack_exports__["default"] = (Conf);

/***/ }),

/***/ "./src/jmarroyave/conf/versions.js":
/*!*****************************************!*\
  !*** ./src/jmarroyave/conf/versions.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var jmarroyave_conf_values_default__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jmarroyave/conf/values/default */ "./src/jmarroyave/conf/values/default.js");
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }



var Versions = function Versions() {
	_classCallCheck(this, Versions);
};

/*
- 0.1.0
	- 
*/

Versions.LOG = [{ id: 1, family: 'material', version: [0, 1, 0], visible: true }];

/* harmony default export */ __webpack_exports__["default"] = (Versions);

/***/ }),

/***/ "./src/jmarroyave/index.js":
/*!*********************************!*\
  !*** ./src/jmarroyave/index.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-router */ "./node_modules/react-router/es/index.js");
/* harmony import */ var baobab_react_higher_order__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! baobab-react/higher-order */ "./node_modules/baobab-react/higher-order.js");
/* harmony import */ var baobab_react_higher_order__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(baobab_react_higher_order__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var jmarroyave_app_api__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! jmarroyave/app/api */ "./src/jmarroyave/app/api.js");
/* harmony import */ var jmarroyave_conf_navigation__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! jmarroyave/conf/navigation */ "./src/jmarroyave/conf/navigation.js");
/* harmony import */ var core_components_error__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! core/components/error */ "./src/core/components/error.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var jmarroyave_app_redux_configureStore__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! jmarroyave/app/redux/configureStore */ "./src/jmarroyave/app/redux/configureStore.js");
/* harmony import */ var _index_scss__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./index.scss */ "./src/jmarroyave/index.scss");
/* harmony import */ var _index_scss__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_index_scss__WEBPACK_IMPORTED_MODULE_8__);
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }











//import { TransitionGroup, CSSTransition } from 'react-transition-group';


var Index = function (_Component) {
	_inherits(Index, _Component);

	function Index(props) {
		_classCallCheck(this, Index);

		var _this = _possibleConstructorReturn(this, (Index.__proto__ || Object.getPrototypeOf(Index)).call(this, props));

		_this.navigation = new jmarroyave_conf_navigation__WEBPACK_IMPORTED_MODULE_4__["default"]();
		return _this;
	}

	_createClass(Index, [{
		key: 'render',
		value: function render() {
			var key = 0;
			return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
				core_components_error__WEBPACK_IMPORTED_MODULE_5__["default"],
				{ from: '/jmarroyave/root' },
				react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
					react_redux__WEBPACK_IMPORTED_MODULE_6__["Provider"],
					{ store: Object(jmarroyave_app_redux_configureStore__WEBPACK_IMPORTED_MODULE_7__["ConfigureStore"])() },
					react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
						react_router__WEBPACK_IMPORTED_MODULE_1__["Router"],
						{ history: react_router__WEBPACK_IMPORTED_MODULE_1__["hashHistory"] },
						this.navigation.options.map(function (r) {
							return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router__WEBPACK_IMPORTED_MODULE_1__["Route"], { key: key++, path: r.route, component: r.component });
						})
					)
				)
			);
		}
	}]);

	return Index;
}(react__WEBPACK_IMPORTED_MODULE_0__["Component"]);

var RootedIndex = Object(baobab_react_higher_order__WEBPACK_IMPORTED_MODULE_2__["root"])(window.__state, Index);
/* harmony default export */ __webpack_exports__["default"] = (RootedIndex);

/***/ }),

/***/ "./src/jmarroyave/index.scss":
/*!***********************************!*\
  !*** ./src/jmarroyave/index.scss ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../../../frameworks/webapps/startup/node_modules/css-loader!../../../../../../frameworks/webapps/startup/node_modules/sass-loader/lib/loader.js!./index.scss */ "../../../../frameworks/webapps/startup/node_modules/css-loader/index.js!../../../../frameworks/webapps/startup/node_modules/sass-loader/lib/loader.js!./src/jmarroyave/index.scss");

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
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var baobab_react_higher_order__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! baobab-react/higher-order */ "./node_modules/baobab-react/higher-order.js");
/* harmony import */ var baobab_react_higher_order__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(baobab_react_higher_order__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/es/index.js");
/* harmony import */ var jmarroyave_components_uxi_blank_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! jmarroyave/components/uxi/blank/page */ "./src/jmarroyave/components/uxi/blank/page.js");
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }






var Page = function (_React$Component) {
	_inherits(Page, _React$Component);

	function Page(props, context) {
		_classCallCheck(this, Page);

		var _this = _possibleConstructorReturn(this, (Page.__proto__ || Object.getPrototypeOf(Page)).call(this, props, context));

		_this.api = window.__api;
		return _this;
	}

	_createClass(Page, [{
		key: 'componentDidMount',
		value: function componentDidMount() {}
	}, {
		key: 'render',
		value: function render() {
			return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(jmarroyave_components_uxi_blank_page__WEBPACK_IMPORTED_MODULE_3__["default"], this.props);
		}
	}]);

	return Page;
}(react__WEBPACK_IMPORTED_MODULE_0___default.a.Component);

Page = Object(baobab_react_higher_order__WEBPACK_IMPORTED_MODULE_1__["branch"])({
	app: ['app']
}, Page);

Object(react_router_dom__WEBPACK_IMPORTED_MODULE_2__["withRouter"])(Page);
/* harmony default export */ __webpack_exports__["default"] = (Page);

/***/ }),

/***/ "./src/jmarroyave/pages/blog.js":
/*!**************************************!*\
  !*** ./src/jmarroyave/pages/blog.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var baobab_react_higher_order__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! baobab-react/higher-order */ "./node_modules/baobab-react/higher-order.js");
/* harmony import */ var baobab_react_higher_order__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(baobab_react_higher_order__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/es/index.js");
/* harmony import */ var jmarroyave_components_uxi_blog_page__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! jmarroyave/components/uxi/blog/page */ "./src/jmarroyave/components/uxi/blog/page.js");
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }







var mapStateToProps = function mapStateToProps(state) {
	return {
		//media: state.media,
	};
};

var mapDispatchToProps = function mapDispatchToProps(dispatch) {
	return {};
};

var Page = function (_React$Component) {
	_inherits(Page, _React$Component);

	function Page(props, context) {
		_classCallCheck(this, Page);

		var _this = _possibleConstructorReturn(this, (Page.__proto__ || Object.getPrototypeOf(Page)).call(this, props, context));

		_this.api = window.__api;
		_this.area = "blog";
		return _this;
	}

	_createClass(Page, [{
		key: 'componentDidMount',
		value: function componentDidMount() {
			this.api.getBlog(this.area);
		}
	}, {
		key: 'render',
		value: function render() {
			var params = { app: this.props.app, page: this.props.page, router: this.props.router, location: this.props.location };
			return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(jmarroyave_components_uxi_blog_page__WEBPACK_IMPORTED_MODULE_4__["default"], params);
		}
	}]);

	return Page;
}(react__WEBPACK_IMPORTED_MODULE_0___default.a.Component);

Page = Object(baobab_react_higher_order__WEBPACK_IMPORTED_MODULE_2__["branch"])({
	app: ['app'],
	page: ['pages', 'blog']
}, Page);

Page = Object(react_redux__WEBPACK_IMPORTED_MODULE_1__["connect"])(mapStateToProps, mapDispatchToProps)(Page);

Object(react_router_dom__WEBPACK_IMPORTED_MODULE_3__["withRouter"])(Page);
/* harmony default export */ __webpack_exports__["default"] = (Page);

/***/ }),

/***/ "./src/jmarroyave/pages/blog_post.js":
/*!*******************************************!*\
  !*** ./src/jmarroyave/pages/blog_post.js ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var baobab_react_higher_order__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! baobab-react/higher-order */ "./node_modules/baobab-react/higher-order.js");
/* harmony import */ var baobab_react_higher_order__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(baobab_react_higher_order__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/es/index.js");
/* harmony import */ var jmarroyave_components_uxi_blog_post_page__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! jmarroyave/components/uxi/blog_post/page */ "./src/jmarroyave/components/uxi/blog_post/page.js");
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }







var mapStateToProps = function mapStateToProps(state) {
	return {
		//media: state.media,
	};
};

var mapDispatchToProps = function mapDispatchToProps(dispatch) {
	return {};
};

var Page = function (_React$Component) {
	_inherits(Page, _React$Component);

	function Page(props, context) {
		_classCallCheck(this, Page);

		var _this = _possibleConstructorReturn(this, (Page.__proto__ || Object.getPrototypeOf(Page)).call(this, props, context));

		_this.api = window.__api;
		return _this;
	}

	_createClass(Page, [{
		key: 'componentDidMount',
		value: function componentDidMount() {
			var params = this.props.router.params;
			this.api.getPost("blog", params.year + '-' + params.month + '-' + params.day + '-' + params.post);
		}
	}, {
		key: 'render',
		value: function render() {
			var params = { app: this.props.app, page: this.props.page, router: this.props.router, location: this.props.location };
			return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(jmarroyave_components_uxi_blog_post_page__WEBPACK_IMPORTED_MODULE_4__["default"], params);
		}
	}]);

	return Page;
}(react__WEBPACK_IMPORTED_MODULE_0___default.a.Component);

Page = Object(baobab_react_higher_order__WEBPACK_IMPORTED_MODULE_2__["branch"])({
	app: ['app'],
	page: ['pages', 'post']
}, Page);

Page = Object(react_redux__WEBPACK_IMPORTED_MODULE_1__["connect"])(mapStateToProps, mapDispatchToProps)(Page);

Object(react_router_dom__WEBPACK_IMPORTED_MODULE_3__["withRouter"])(Page);
/* harmony default export */ __webpack_exports__["default"] = (Page);

/***/ }),

/***/ "./src/jmarroyave/pages/cv.js":
/*!************************************!*\
  !*** ./src/jmarroyave/pages/cv.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var baobab_react_higher_order__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! baobab-react/higher-order */ "./node_modules/baobab-react/higher-order.js");
/* harmony import */ var baobab_react_higher_order__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(baobab_react_higher_order__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/es/index.js");
/* harmony import */ var jmarroyave_components_uxi_cv_page__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! jmarroyave/components/uxi/cv/page */ "./src/jmarroyave/components/uxi/cv/page.js");
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }







var mapStateToProps = function mapStateToProps(state) {
	return {
		//media: state.media,
	};
};

var mapDispatchToProps = function mapDispatchToProps(dispatch) {
	return {};
};

var Page = function (_React$Component) {
	_inherits(Page, _React$Component);

	function Page(props, context) {
		_classCallCheck(this, Page);

		var _this = _possibleConstructorReturn(this, (Page.__proto__ || Object.getPrototypeOf(Page)).call(this, props, context));

		_this.api = window.__api;
		return _this;
	}

	_createClass(Page, [{
		key: 'componentDidMount',
		value: function componentDidMount() {
			this.api.getCV();
		}
	}, {
		key: 'render',
		value: function render() {
			var params = { app: this.props.app, page: this.props.page, router: this.props.router, location: this.props.location };
			return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(jmarroyave_components_uxi_cv_page__WEBPACK_IMPORTED_MODULE_4__["default"], params);
		}
	}]);

	return Page;
}(react__WEBPACK_IMPORTED_MODULE_0___default.a.Component);

Page = Object(baobab_react_higher_order__WEBPACK_IMPORTED_MODULE_2__["branch"])({
	app: ['app'],
	page: ['pages', 'cv']
}, Page);

Page = Object(react_redux__WEBPACK_IMPORTED_MODULE_1__["connect"])(mapStateToProps, mapDispatchToProps)(Page);

Object(react_router_dom__WEBPACK_IMPORTED_MODULE_3__["withRouter"])(Page);
/* harmony default export */ __webpack_exports__["default"] = (Page);

/***/ }),

/***/ "./src/jmarroyave/pages/home.js":
/*!**************************************!*\
  !*** ./src/jmarroyave/pages/home.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var baobab_react_higher_order__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! baobab-react/higher-order */ "./node_modules/baobab-react/higher-order.js");
/* harmony import */ var baobab_react_higher_order__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(baobab_react_higher_order__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/es/index.js");
/* harmony import */ var jmarroyave_components_uxi_home_page__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! jmarroyave/components/uxi/home/page */ "./src/jmarroyave/components/uxi/home/page.js");
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }







var mapStateToProps = function mapStateToProps(state) {
	return {
		//media: state.media,
	};
};

var mapDispatchToProps = function mapDispatchToProps(dispatch) {
	return {};
};

var Page = function (_React$Component) {
	_inherits(Page, _React$Component);

	function Page(props, context) {
		_classCallCheck(this, Page);

		var _this = _possibleConstructorReturn(this, (Page.__proto__ || Object.getPrototypeOf(Page)).call(this, props, context));

		_this.api = window.__api;
		return _this;
	}

	_createClass(Page, [{
		key: 'componentDidMount',
		value: function componentDidMount() {
			this.api.getHome();
			this.api.getTrends();
		}
	}, {
		key: 'render',
		value: function render() {
			var params = { app: this.props.app, page: this.props.page, router: this.props.router, location: this.props.location };
			return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(jmarroyave_components_uxi_home_page__WEBPACK_IMPORTED_MODULE_4__["default"], params);
		}
	}]);

	return Page;
}(react__WEBPACK_IMPORTED_MODULE_0___default.a.Component);

Page = Object(baobab_react_higher_order__WEBPACK_IMPORTED_MODULE_2__["branch"])({
	app: ['app'],
	page: ['pages', 'home']
}, Page);

Page = Object(react_redux__WEBPACK_IMPORTED_MODULE_1__["connect"])(mapStateToProps, mapDispatchToProps)(Page);

Object(react_router_dom__WEBPACK_IMPORTED_MODULE_3__["withRouter"])(Page);
/* harmony default export */ __webpack_exports__["default"] = (Page);

/***/ }),

/***/ "./src/jmarroyave/pages/kb.js":
/*!************************************!*\
  !*** ./src/jmarroyave/pages/kb.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var baobab_react_higher_order__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! baobab-react/higher-order */ "./node_modules/baobab-react/higher-order.js");
/* harmony import */ var baobab_react_higher_order__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(baobab_react_higher_order__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/es/index.js");
/* harmony import */ var jmarroyave_components_uxi_blog_page__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! jmarroyave/components/uxi/blog/page */ "./src/jmarroyave/components/uxi/blog/page.js");
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }







var mapStateToProps = function mapStateToProps(state) {
	return {
		//media: state.media,
	};
};

var mapDispatchToProps = function mapDispatchToProps(dispatch) {
	return {};
};

var Page = function (_React$Component) {
	_inherits(Page, _React$Component);

	function Page(props, context) {
		_classCallCheck(this, Page);

		var _this = _possibleConstructorReturn(this, (Page.__proto__ || Object.getPrototypeOf(Page)).call(this, props, context));

		_this.api = window.__api;
		_this.area = "kb";
		return _this;
	}

	_createClass(Page, [{
		key: 'componentDidMount',
		value: function componentDidMount() {
			this.api.getBlog(this.area);
		}
	}, {
		key: 'render',
		value: function render() {
			var params = { app: this.props.app, page: this.props.page, router: this.props.router, location: this.props.location };
			return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(jmarroyave_components_uxi_blog_page__WEBPACK_IMPORTED_MODULE_4__["default"], params);
		}
	}]);

	return Page;
}(react__WEBPACK_IMPORTED_MODULE_0___default.a.Component);

Page = Object(baobab_react_higher_order__WEBPACK_IMPORTED_MODULE_2__["branch"])({
	app: ['app'],
	page: ['pages', 'blog']
}, Page);

Page = Object(react_redux__WEBPACK_IMPORTED_MODULE_1__["connect"])(mapStateToProps, mapDispatchToProps)(Page);

Object(react_router_dom__WEBPACK_IMPORTED_MODULE_3__["withRouter"])(Page);
/* harmony default export */ __webpack_exports__["default"] = (Page);

/***/ }),

/***/ "./src/jmarroyave/pages/kb_post.js":
/*!*****************************************!*\
  !*** ./src/jmarroyave/pages/kb_post.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var baobab_react_higher_order__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! baobab-react/higher-order */ "./node_modules/baobab-react/higher-order.js");
/* harmony import */ var baobab_react_higher_order__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(baobab_react_higher_order__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/es/index.js");
/* harmony import */ var jmarroyave_components_uxi_blog_post_page__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! jmarroyave/components/uxi/blog_post/page */ "./src/jmarroyave/components/uxi/blog_post/page.js");
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }







var mapStateToProps = function mapStateToProps(state) {
	return {
		//media: state.media,
	};
};

var mapDispatchToProps = function mapDispatchToProps(dispatch) {
	return {};
};

var Page = function (_React$Component) {
	_inherits(Page, _React$Component);

	function Page(props, context) {
		_classCallCheck(this, Page);

		var _this = _possibleConstructorReturn(this, (Page.__proto__ || Object.getPrototypeOf(Page)).call(this, props, context));

		_this.api = window.__api;
		return _this;
	}

	_createClass(Page, [{
		key: 'componentDidMount',
		value: function componentDidMount() {
			var params = this.props.router.params;
			this.api.getPost("kb", 'kb-' + params.post);
		}
	}, {
		key: 'render',
		value: function render() {
			var params = { app: this.props.app, page: this.props.page, router: this.props.router, location: this.props.location };
			return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(jmarroyave_components_uxi_blog_post_page__WEBPACK_IMPORTED_MODULE_4__["default"], params);
		}
	}]);

	return Page;
}(react__WEBPACK_IMPORTED_MODULE_0___default.a.Component);

Page = Object(baobab_react_higher_order__WEBPACK_IMPORTED_MODULE_2__["branch"])({
	app: ['app'],
	page: ['pages', 'post']
}, Page);

Page = Object(react_redux__WEBPACK_IMPORTED_MODULE_1__["connect"])(mapStateToProps, mapDispatchToProps)(Page);

Object(react_router_dom__WEBPACK_IMPORTED_MODULE_3__["withRouter"])(Page);
/* harmony default export */ __webpack_exports__["default"] = (Page);

/***/ }),

/***/ "./src/jmarroyave/pages/kb_post_android.js":
/*!*************************************************!*\
  !*** ./src/jmarroyave/pages/kb_post_android.js ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var baobab_react_higher_order__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! baobab-react/higher-order */ "./node_modules/baobab-react/higher-order.js");
/* harmony import */ var baobab_react_higher_order__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(baobab_react_higher_order__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/es/index.js");
/* harmony import */ var jmarroyave_components_uxi_kb_page__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! jmarroyave/components/uxi/kb/page */ "./src/jmarroyave/components/uxi/kb/page.js");
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }







var mapStateToProps = function mapStateToProps(state) {
	return {
		//media: state.media,
	};
};

var mapDispatchToProps = function mapDispatchToProps(dispatch) {
	return {};
};

var Page = function (_React$Component) {
	_inherits(Page, _React$Component);

	function Page(props, context) {
		_classCallCheck(this, Page);

		var _this = _possibleConstructorReturn(this, (Page.__proto__ || Object.getPrototypeOf(Page)).call(this, props, context));

		_this.api = window.__api;
		return _this;
	}

	_createClass(Page, [{
		key: 'componentDidMount',
		value: function componentDidMount() {
			this.api.getKBAndroidCategories();
		}
	}, {
		key: 'render',
		value: function render() {
			var params = { component: 'android', app: this.props.app, page: this.props.page, router: this.props.router, location: this.props.location };
			return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(jmarroyave_components_uxi_kb_page__WEBPACK_IMPORTED_MODULE_4__["default"], params);
		}
	}]);

	return Page;
}(react__WEBPACK_IMPORTED_MODULE_0___default.a.Component);

Page = Object(baobab_react_higher_order__WEBPACK_IMPORTED_MODULE_2__["branch"])({
	app: ['app'],
	page: ['pages', 'kb_android']
}, Page);

Page = Object(react_redux__WEBPACK_IMPORTED_MODULE_1__["connect"])(mapStateToProps, mapDispatchToProps)(Page);

Object(react_router_dom__WEBPACK_IMPORTED_MODULE_3__["withRouter"])(Page);
/* harmony default export */ __webpack_exports__["default"] = (Page);

/***/ }),

/***/ "./src/jmarroyave/pages/labs.js":
/*!**************************************!*\
  !*** ./src/jmarroyave/pages/labs.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var baobab_react_higher_order__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! baobab-react/higher-order */ "./node_modules/baobab-react/higher-order.js");
/* harmony import */ var baobab_react_higher_order__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(baobab_react_higher_order__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/es/index.js");
/* harmony import */ var jmarroyave_components_uxi_blog_page__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! jmarroyave/components/uxi/blog/page */ "./src/jmarroyave/components/uxi/blog/page.js");
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }







var mapStateToProps = function mapStateToProps(state) {
	return {
		//media: state.media,
	};
};

var mapDispatchToProps = function mapDispatchToProps(dispatch) {
	return {};
};

var Page = function (_React$Component) {
	_inherits(Page, _React$Component);

	function Page(props, context) {
		_classCallCheck(this, Page);

		var _this = _possibleConstructorReturn(this, (Page.__proto__ || Object.getPrototypeOf(Page)).call(this, props, context));

		_this.api = window.__api;
		_this.area = "labs";
		return _this;
	}

	_createClass(Page, [{
		key: 'componentDidMount',
		value: function componentDidMount() {
			this.api.getBlog(this.area);
		}
	}, {
		key: 'render',
		value: function render() {
			var params = { app: this.props.app, page: this.props.page, router: this.props.router, location: this.props.location };
			return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(jmarroyave_components_uxi_blog_page__WEBPACK_IMPORTED_MODULE_4__["default"], params);
		}
	}]);

	return Page;
}(react__WEBPACK_IMPORTED_MODULE_0___default.a.Component);

Page = Object(baobab_react_higher_order__WEBPACK_IMPORTED_MODULE_2__["branch"])({
	app: ['app'],
	page: ['pages', 'blog']
}, Page);

Page = Object(react_redux__WEBPACK_IMPORTED_MODULE_1__["connect"])(mapStateToProps, mapDispatchToProps)(Page);

Object(react_router_dom__WEBPACK_IMPORTED_MODULE_3__["withRouter"])(Page);
/* harmony default export */ __webpack_exports__["default"] = (Page);

/***/ }),

/***/ "./src/jmarroyave/pages/labs_project.js":
/*!**********************************************!*\
  !*** ./src/jmarroyave/pages/labs_project.js ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var baobab_react_higher_order__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! baobab-react/higher-order */ "./node_modules/baobab-react/higher-order.js");
/* harmony import */ var baobab_react_higher_order__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(baobab_react_higher_order__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/es/index.js");
/* harmony import */ var jmarroyave_components_uxi_blog_post_page__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! jmarroyave/components/uxi/blog_post/page */ "./src/jmarroyave/components/uxi/blog_post/page.js");
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }







var mapStateToProps = function mapStateToProps(state) {
	return {
		//media: state.media,
	};
};

var mapDispatchToProps = function mapDispatchToProps(dispatch) {
	return {};
};

var Page = function (_React$Component) {
	_inherits(Page, _React$Component);

	function Page(props, context) {
		_classCallCheck(this, Page);

		var _this = _possibleConstructorReturn(this, (Page.__proto__ || Object.getPrototypeOf(Page)).call(this, props, context));

		_this.api = window.__api;
		return _this;
	}

	_createClass(Page, [{
		key: 'componentDidMount',
		value: function componentDidMount() {
			var params = this.props.router.params;
			this.api.getPost("labs", 'labs-' + params.project);
		}
	}, {
		key: 'render',
		value: function render() {
			var params = { app: this.props.app, page: this.props.page, router: this.props.router, location: this.props.location };
			return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(jmarroyave_components_uxi_blog_post_page__WEBPACK_IMPORTED_MODULE_4__["default"], params);
		}
	}]);

	return Page;
}(react__WEBPACK_IMPORTED_MODULE_0___default.a.Component);

Page = Object(baobab_react_higher_order__WEBPACK_IMPORTED_MODULE_2__["branch"])({
	app: ['app'],
	page: ['pages', 'post']
}, Page);

Page = Object(react_redux__WEBPACK_IMPORTED_MODULE_1__["connect"])(mapStateToProps, mapDispatchToProps)(Page);

Object(react_router_dom__WEBPACK_IMPORTED_MODULE_3__["withRouter"])(Page);
/* harmony default export */ __webpack_exports__["default"] = (Page);

/***/ }),

/***/ "./src/shared/jmarroyave/social_networks.js":
/*!**************************************************!*\
  !*** ./src/shared/jmarroyave/social_networks.js ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _social_networks_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./social_networks.scss */ "./src/shared/jmarroyave/social_networks.scss");
/* harmony import */ var _social_networks_scss__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_social_networks_scss__WEBPACK_IMPORTED_MODULE_1__);
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }




var Component = function (_React$Component) {
		_inherits(Component, _React$Component);

		function Component() {
				_classCallCheck(this, Component);

				return _possibleConstructorReturn(this, (Component.__proto__ || Object.getPrototypeOf(Component)).apply(this, arguments));
		}

		_createClass(Component, [{
				key: 'render',
				value: function render() {
						return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
								'div',
								{ className: 'mod-social-icons layout-align-center-center layout-column flex' },
								react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
										'a',
										{ href: 'http://twitter.com/jmarroyave' },
										react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
												'span',
												{ className: 'fa-stack fa-lg' },
												react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement('i', { className: 'fa fa-square-o fa-stack-2x' }),
												react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement('i', { className: 'fa fa-twitter fa-stack-1x', style: { color: '#00aced' } })
										)
								),
								react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
										'a',
										{ href: 'http://facebook.com/jmarroyave' },
										react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
												'span',
												{ className: 'fa-stack fa-lg' },
												react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement('i', { className: 'fa fa-square-o fa-stack-2x' }),
												react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement('i', { className: 'fa fa-facebook fa-stack-1x', style: { color: '#3b5998' } })
										)
								),
								react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
										'a',
										{ href: 'http://gt.linkedin.com/jmarroyave' },
										react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
												'span',
												{ className: 'fa-stack fa-lg' },
												react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement('i', { className: 'fa fa-square-o fa-stack-2x' }),
												react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement('i', { className: 'fa fa-linkedin fa-stack-1x', style: { color: '#0077B5' } })
										)
								),
								react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
										'a',
										{ href: 'http://plus.google.com/112618720945759819017' },
										react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
												'span',
												{ className: 'fa-stack fa-lg' },
												react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement('i', { className: 'fa fa-square-o fa-stack-2x' }),
												react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement('i', { className: 'fa fa-google-plus fa-stack-1x', style: { color: '#d34836' } })
										)
								),
								react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
										'a',
										{ href: 'http://github.com/jmarroyave' },
										react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
												'span',
												{ className: 'fa-stack fa-lg' },
												react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement('i', { className: 'fa fa-square-o fa-stack-2x' }),
												react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement('i', { className: 'fa fa-github fa-stack-1x', style: { color: '#000' } })
										)
								),
								react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
										'a',
										{ href: 'mailto:jmarroyave@gmail.com', className: 'not-released' },
										react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
												'span',
												{ className: 'fa-stack fa-lg' },
												react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement('i', { className: 'fa fa-square-o fa-stack-2x' }),
												react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement('i', { className: 'fa fa-envelope-o fa-stack-1x', style: { color: '#000' } })
										)
								)
						);
				}
		}]);

		return Component;
}(react__WEBPACK_IMPORTED_MODULE_0___default.a.Component);

/* harmony default export */ __webpack_exports__["default"] = (Component);

/***/ }),

/***/ "./src/shared/jmarroyave/social_networks.scss":
/*!****************************************************!*\
  !*** ./src/shared/jmarroyave/social_networks.scss ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../../../../frameworks/webapps/startup/node_modules/css-loader!../../../../../../../frameworks/webapps/startup/node_modules/sass-loader/lib/loader.js!./social_networks.scss */ "../../../../frameworks/webapps/startup/node_modules/css-loader/index.js!../../../../frameworks/webapps/startup/node_modules/sass-loader/lib/loader.js!./src/shared/jmarroyave/social_networks.scss");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2ptYXJyb3lhdmUvY29tcG9uZW50cy91eGkvY29yZS9jb21fdmVyc2lvbi5zY3NzIiwid2VicGFjazovLy8uL3NyYy9qbWFycm95YXZlL2NvbXBvbmVudHMvdXhpL2NvcmUvcGFnZS9mb290ZXIuc2NzcyIsIndlYnBhY2s6Ly8vLi9zcmMvam1hcnJveWF2ZS9jb21wb25lbnRzL3V4aS9jb3JlL3doYXRzX2hvdC5zY3NzIiwid2VicGFjazovLy8uL3NyYy9qbWFycm95YXZlL2luZGV4LnNjc3MiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NoYXJlZC9qbWFycm95YXZlL3NvY2lhbF9uZXR3b3Jrcy5zY3NzIiwid2VicGFjazovLy8uL3NyYy9jb3JlL2FwcC9hcGkuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvcmUvYXBwL3NlcnZlci5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29yZS9jb21wb25lbnRzL2FwcC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29yZS9jb21wb25lbnRzL2FwcF9saXN0LmpzIiwid2VicGFjazovLy8uL3NyYy9jb3JlL2NvbXBvbmVudHMvYXBwYmFyLmpzIiwid2VicGFjazovLy8uL3NyYy9jb3JlL2NvbXBvbmVudHMvYnV0dG9uLmpzIiwid2VicGFjazovLy8uL3NyYy9jb3JlL2NvbXBvbmVudHMvY29tcG9uZW50LmpzIiwid2VicGFjazovLy8uL3NyYy9jb3JlL2NvbXBvbmVudHMvZXJyb3IuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvcmUvY29tcG9uZW50cy9pY29uLmpzIiwid2VicGFjazovLy8uL3NyYy9jb3JlL2NvbXBvbmVudHMvbG9hZGluZy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29yZS9jb21wb25lbnRzL2xvYWRpbmdfYmFyLmpzIiwid2VicGFjazovLy8uL3NyYy9jb3JlL2NvbXBvbmVudHMvbW9ja3VwL2Jsb2NrLmpzIiwid2VicGFjazovLy8uL3NyYy9jb3JlL2NvbXBvbmVudHMvc25hY2tiYXIuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvcmUvY29tcG9uZW50cy90b29sYmFyLmpzIiwid2VicGFjazovLy8uL3NyYy9jb3JlL2NvbXBvbmVudHMvdWlfY29tcG9uZW50LmpzIiwid2VicGFjazovLy8uL3NyYy9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvam1hcnJveWF2ZS9hcHAvYXBpLmpzIiwid2VicGFjazovLy8uL3NyYy9qbWFycm95YXZlL2FwcC9yZWR1eC9hY3Rpb25zL3R5cGVzLmpzIiwid2VicGFjazovLy8uL3NyYy9qbWFycm95YXZlL2FwcC9yZWR1eC9jb25maWd1cmVTdG9yZS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvam1hcnJveWF2ZS9hcHAvcmVkdXgvcmVkdWNlcnMvbGFiZWxzLmpzIiwid2VicGFjazovLy8uL3NyYy9qbWFycm95YXZlL2FwcC9yZWR1eC9yZWR1Y2Vycy9tZXNzYWdlcy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvam1hcnJveWF2ZS9hcHAvc3RhdGUuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2ptYXJyb3lhdmUvY29tcG9uZW50cy9kYXRhL3Bvc3RfbGluay5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvam1hcnJveWF2ZS9jb21wb25lbnRzL3V4aS9ibGFuay9wYWdlLmpzIiwid2VicGFjazovLy8uL3NyYy9qbWFycm95YXZlL2NvbXBvbmVudHMvdXhpL2Jsb2cvcGFnZS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvam1hcnJveWF2ZS9jb21wb25lbnRzL3V4aS9ibG9nX3Bvc3QvcGFnZS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvam1hcnJveWF2ZS9jb21wb25lbnRzL3V4aS9jb3JlL2NvbV92ZXJzaW9uLmpzIiwid2VicGFjazovLy8uL3NyYy9qbWFycm95YXZlL2NvbXBvbmVudHMvdXhpL2NvcmUvY29tX3ZlcnNpb24uc2Nzcz9lYzQ4Iiwid2VicGFjazovLy8uL3NyYy9qbWFycm95YXZlL2NvbXBvbmVudHMvdXhpL2NvcmUvZGVidWcuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2ptYXJyb3lhdmUvY29tcG9uZW50cy91eGkvY29yZS9mb290ZXJfbGlua3MuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2ptYXJyb3lhdmUvY29tcG9uZW50cy91eGkvY29yZS9ncmlkX2NvbnRhaW5lci5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvam1hcnJveWF2ZS9jb21wb25lbnRzL3V4aS9jb3JlL2dyaWRfaXRlbS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvam1hcnJveWF2ZS9jb21wb25lbnRzL3V4aS9jb3JlL3BhZ2UvYXBwLmpzIiwid2VicGFjazovLy8uL3NyYy9qbWFycm95YXZlL2NvbXBvbmVudHMvdXhpL2NvcmUvcGFnZS9ib2R5LmpzIiwid2VicGFjazovLy8uL3NyYy9qbWFycm95YXZlL2NvbXBvbmVudHMvdXhpL2NvcmUvcGFnZS9kcmF3ZXIuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2ptYXJyb3lhdmUvY29tcG9uZW50cy91eGkvY29yZS9wYWdlL2Zvb3Rlci5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvam1hcnJveWF2ZS9jb21wb25lbnRzL3V4aS9jb3JlL3BhZ2UvZm9vdGVyLnNjc3M/NDhjMyIsIndlYnBhY2s6Ly8vLi9zcmMvam1hcnJveWF2ZS9jb21wb25lbnRzL3V4aS9jb3JlL3BhZ2UvaGVhZGVyLmpzIiwid2VicGFjazovLy8uL3NyYy9qbWFycm95YXZlL2NvbXBvbmVudHMvdXhpL2NvcmUvdG9wX2Jhci5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvam1hcnJveWF2ZS9jb21wb25lbnRzL3V4aS9jb3JlL3doYXRzX2hvdC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvam1hcnJveWF2ZS9jb21wb25lbnRzL3V4aS9jb3JlL3doYXRzX2hvdC5zY3NzP2EyYTYiLCJ3ZWJwYWNrOi8vLy4vc3JjL2ptYXJyb3lhdmUvY29tcG9uZW50cy91eGkvY29yZS93aXRoLW1vZHVsZS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvam1hcnJveWF2ZS9jb21wb25lbnRzL3V4aS9jdi9wYWdlLmpzIiwid2VicGFjazovLy8uL3NyYy9qbWFycm95YXZlL2NvbXBvbmVudHMvdXhpL2hvbWUvYmxvY2suanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2ptYXJyb3lhdmUvY29tcG9uZW50cy91eGkvaG9tZS9wYWdlLmpzIiwid2VicGFjazovLy8uL3NyYy9qbWFycm95YXZlL2NvbXBvbmVudHMvdXhpL2tiL3BhZ2UuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2ptYXJyb3lhdmUvY29uZi9jb25zdGFudHMuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2ptYXJyb3lhdmUvY29uZi9uYXZpZ2F0aW9uLmpzIiwid2VicGFjazovLy8uL3NyYy9qbWFycm95YXZlL2NvbmYvdmFsdWVzL2RlZmF1bHQuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2ptYXJyb3lhdmUvY29uZi92ZXJzaW9ucy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvam1hcnJveWF2ZS9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvam1hcnJveWF2ZS9pbmRleC5zY3NzP2M3MDIiLCJ3ZWJwYWNrOi8vLy4vc3JjL2ptYXJyb3lhdmUvcGFnZXMvYmxhbmsuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2ptYXJyb3lhdmUvcGFnZXMvYmxvZy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvam1hcnJveWF2ZS9wYWdlcy9ibG9nX3Bvc3QuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2ptYXJyb3lhdmUvcGFnZXMvY3YuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2ptYXJyb3lhdmUvcGFnZXMvaG9tZS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvam1hcnJveWF2ZS9wYWdlcy9rYi5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvam1hcnJveWF2ZS9wYWdlcy9rYl9wb3N0LmpzIiwid2VicGFjazovLy8uL3NyYy9qbWFycm95YXZlL3BhZ2VzL2tiX3Bvc3RfYW5kcm9pZC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvam1hcnJveWF2ZS9wYWdlcy9sYWJzLmpzIiwid2VicGFjazovLy8uL3NyYy9qbWFycm95YXZlL3BhZ2VzL2xhYnNfcHJvamVjdC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvc2hhcmVkL2ptYXJyb3lhdmUvc29jaWFsX25ldHdvcmtzLmpzIiwid2VicGFjazovLy8uL3NyYy9zaGFyZWQvam1hcnJveWF2ZS9zb2NpYWxfbmV0d29ya3Muc2Nzcz9kOThjIl0sIm5hbWVzIjpbIkFQSSIsInByb3BzIiwiZXJyb3IiLCJjdXJyZW50X2NvbXBvbmVudCIsImNvbXBvbmVudHMiLCJsb2NhbCIsInRpdGxlIiwiZGVidWciLCJzZXJ2ZXIiLCJTZXJ2ZXIiLCJlcnIiLCJpZCIsImZhbWlseSIsInZlcnNpb24iLCJkYXRhIiwiaXRlbSIsImZpbmQiLCJvblN0YXJ0TG9hZGluZyIsIm9uU3RvcExvYWRpbmciLCJvbkVycm9yIiwiY29ubmVjdGlvbnMiLCJwcm90b2NvbCIsInBhdGgiLCJjdXJyZW50Iiwic2VydmVyVVJJIiwibWV0aG9kIiwidXJpIiwicGFyYW1zIiwiY29uZmlnIiwiY2FsbGJhY2siLCJjYWxsYmFja19lcnIiLCIkdGhpcyIsInVybCIsImluZGV4T2YiLCJwIiwidHJpZ2dlck9uU3RhcnRMb2FkaW5nIiwidGltZW91dCIsImF4aW9zIiwiZ2V0IiwicG9zdCIsImNvbnNvbGUiLCJ0b1VwcGVyQ2FzZSIsInRoZW4iLCJyZXNwb25zZSIsInRyaWdnZXJPblN0b3BMb2FkaW5nIiwiY2F0Y2giLCJ0cmlnZ2VyT25FcnJvciIsIlByb21pc2UiLCJyZXNvbHZlIiwicmVqZWN0IiwiZXhlYyIsImRyYXdlcldpZHRoIiwidGhlbWVCVyIsImNyZWF0ZU11aVRoZW1lIiwicGFsZXR0ZSIsInByaW1hcnkiLCJsaWdodCIsIm1haW4iLCJkYXJrIiwiY29udHJhc3RUZXh0Iiwic2Vjb25kYXJ5IiwidHlwb2dyYXBoeSIsImZvbnRGYW1pbHkiLCJqb2luIiwiZm9udFNpemUiLCJzdHlsZXMiLCJyb290Iiwicm9vdEZpeGVkIiwibWFyZ2luVG9wIiwiYm9keSIsImJveFNpemluZyIsIm1hcmdpbiIsImxvYWRpbmciLCJoZWlnaHQiLCJtZW51QnV0dG9uIiwibWFyZ2luTGVmdCIsIm1hcmdpblJpZ2h0IiwiZHJhd2VyUGFwZXIiLCJwb3NpdGlvbiIsIndpZHRoIiwiVUlBcHAiLCJzdGF0ZSIsImRyYXdlck9wZW4iLCJ0b2dnbGVEcmF3ZXIiLCJiaW5kIiwic2V0U3RhdGUiLCJrZXkiLCJjbGFzc2VzIiwidGhlbWUiLCJwYWdlX3RpdGxlIiwiYmFyUG9zaXRpb24iLCJhcHBiYXIiLCJiYXJTdHlsZSIsImRyYXdlciIsImNsYXNzTmFtZXMiLCJsb2dvIiwic3JjIiwiY2xhc3NOYW1lIiwidG9vbGJhciIsIm1hcCIsIm1lbnUiLCJocmVmIiwibmFtZSIsImNoaWxkcmVuIiwiUmVhY3QiLCJDb21wb25lbnQiLCJ3aXRoU3R5bGVzIiwid2l0aFRoZW1lIiwiQXBwTGlzdCIsImRlZmF1bHRQcm9wcyIsInR5cGUiLCJVSUFwcEJhciIsImRlZmF1bHRzIiwiY29sb3IiLCJVSUNvbXBvbmVudCIsIlVJQnV0dG9uIiwiZGlzYWJsZWQiLCJvbkNsaWNrIiwiZmFiIiwic3R5bGUiLCJpY28iLCJpY29uIiwicmVuZGVyIiwiY29tcG9uZW50IiwicGgiLCJwbGFjZWhvbGRlciIsInBoVyIsInBoSCIsIkVycm9yQm91bmRhcnkiLCJoYXNFcnJvciIsImVycm9ycyIsImluZm8iLCJwdXNoIiwid2luZG93IiwiX19hcGkiLCJzZXRFcnJvciIsInRvU3RyaW5nIiwicmVmIiwiZnJvbSIsInBhZGRpbmciLCJib3JkZXIiLCJlIiwiVUlJY29uIiwiZ2V0SWNvbiIsInpJbmRleCIsInRvcCIsInJpZ2h0IiwibGVmdCIsImJvdHRvbSIsImJhY2tncm91bmRDb2xvciIsIlVJTG9hZGluZ0JhciIsInRleHRBbGlnbiIsImZvbnRXZWlnaHQiLCJwYWRkaW5nVG9wIiwiTW9ja3VwQmxvY2siLCJVSVNuYWNrYmFyIiwib3BlbiIsIm1lc3NhZ2UiLCJoYW5kbGVSZXF1ZXN0Q2xvc2UiLCJldmVudCIsInJlYXNvbiIsInZlcnRpY2FsIiwiaG9yaXpvbnRhbCIsIlN0cmluZyIsIlVJVG9vbGJhciIsImdldERlZmF1bHRzIiwiZGVmIiwiaW5pdFVJIiwiUmVhY3RET00iLCJkb2N1bWVudCIsImdldEVsZW1lbnRCeUlkIiwiUm9vdCIsIm1vZHVsZSIsInBhcmVudCIsIkNvbnN0YW50cyIsIkRFQlVHIiwiTE9DQUwiLCJWRVJTSU9OIiwiQ09NSUQiLCJDT01GIiwiQ09NViIsIlVYSV9WRVJTSU9OUyIsIlN0YXRlIiwiZGF0YV9rYl9hbmRyb2lkIiwiYXBpVVJJIiwiZGF0YVBhdGgiLCJzZXQiLCJhcHAiLCJnZXRBUEkiLCJnZXRBcHAiLCJibG9nIiwiYXJlYSIsImNhdGVnb3J5IiwiZjEiLCJ2MSIsIkJhc2VBUEkiLCJNRVNTQUdFU19MT0FESU5HIiwiTUVTU0FHRVNfRkFJTEVEIiwiTUVTU0FHRVNfRkVUQ0hFRCIsIk1FU1NBR0VfTE9BRElORyIsIk1FU1NBR0VfRkFJTEVEIiwiTUVTU0FHRV9GRVRDSEVEIiwiTEFCRUxTX0xPQURJTkciLCJMQUJFTFNfRkFJTEVEIiwiTEFCRUxTX0ZFVENIRUQiLCJDb25maWd1cmVTdG9yZSIsInN0b3JlIiwiY3JlYXRlU3RvcmUiLCJjb21iaW5lUmVkdWNlcnMiLCJtZXNzYWdlcyIsIk1lc3NhZ2VzIiwibGFiZWxzIiwiTGFiZWxzIiwiYXBwbHlNaWRkbGV3YXJlIiwidGh1bmsiLCJsb2dnZXIiLCJhY3Rpb24iLCJBY3Rpb25UeXBlcyIsInBheWxvYWQiLCJpZHgiLCJ0ZXh0IiwidHJlZSIsIkJhb2JhYiIsInBhZ2VzIiwiZ2xvYmFsIiwiaG9tZSIsInRyZW5kcyIsImNvdXJzZXMiLCJjdiIsImtiX2FuZHJvaWQiLCJyZWNvcmRzIiwiY2F0ZWdvcmllcyIsImF1dG9Db21taXQiLCJhc3luY2hyb25vdXMiLCJpbW11dGFibGUiLCJwZXJzaXN0ZW50IiwiX19zdGF0ZSIsIlBvc3RMaW5rQ29tcG9uZW50Iiwic2x1ZyIsIndpdGhNb2R1bGUiLCJQYWdlIiwiY29udGV4dCIsImFwaSIsInJvdXRlciIsInJvdXRlIiwiSG9tZVByb3h5IiwiTG9hZGFibGUiLCJsb2FkZXIiLCJMb2FkaW5nIiwicGFnZSIsImNvbSIsImdldENvbXBvbmVudHNWZXJzaW9uIiwib3B0aW9uIiwiaGFuZGxlQ2hhbmdlIiwib25DbG9zZSIsInZhbHVlIiwidGFyZ2V0Iiwic2V0Q29tcG9uZW50c1ZlcnNpb24iLCJDT01fU1dJVENIIiwidmlzaWJsZSIsIkRlYnVnIiwidGV4dEFsaWdubWVudCIsImlubmVyV2lkdGgiLCJjbGllbnRXaWR0aCIsImlubmVySGVpZ2h0IiwiY2xpZW50SGVpZ2h0IiwiYnJvd3Nlck5hbWUiLCJicm93c2VyVmVyc2lvbiIsIm1vYmlsZVZlbmRvciIsIm1vYmlsZU1vZGVsIiwib3NOYW1lIiwib3NWZXJzaW9uIiwiR3JpZENvbnRhaW5lciIsInNwYWNpbmciLCJhbGlnbiIsImp1c3RpZnkiLCJ2YWxpZ24iLCJhbGlnbkl0ZW1zIiwiZGlyZWN0aW9uIiwiR3JpZEl0ZW0iLCJ4cyIsInNtIiwibWQiLCJiYXIiLCJmbGV4R3JvdyIsIm1pbkhlaWdodCIsImJvcmRlclJhZGl1cyIsIk1MQkFwcCIsIm5hdmlnYXRpb24iLCJOYXZpZ2F0aW9uIiwib3B0aW9ucyIsInNob3dJbk1lbnUiLCJNRU5VX0JBUl9GR19DT0xPUiIsIm1pbldpZHRoIiwibWVudUNsaWNrIiwiVElUTEUiLCJhcHBCb2R5IiwiQ2hpbGRyZW4iLCJ0b0FycmF5IiwiTUVOVV9CQVJfQkdfQ09MT1IiLCJBcHBCb2R5IiwiQXBwRHJhd2VyIiwicGF0aG5hbWUiLCJGb290ZXJDb21wb25lbnQiLCJIZWFkZXJDb21wb25lbnQiLCJUb3BCYXIiLCJob3QiLCJIb3RCYXJDb21wb25lbnQiLCJjb250cm9sIiwiY2xlYW4iLCJib3JkZXJCb3R0b20iLCJBbmRyb2lkUHJveHkiLCJDb25mIiwiVmVyc2lvbnMiLCJMT0ciLCJDT01fQ1VSUkVOVCIsIkRFRkFVTFRfVVhJIiwiSG9tZUNvbXBvbmVudCIsIkJsb2dDb21wb25lbnQiLCJCbG9nUG9zdENvbXBvbmVudCIsIktCQ29tcG9uZW50IiwiS0JQb3N0QW5kcm9pZENvbXBvbmVudCIsIktCUG9zdENvbXBvbmVudCIsIkxhYnNDb21wb25lbnQiLCJQcm9qZWN0Q29tcG9uZW50IiwiQ1ZDb21wb25lbnQiLCJJbmRleCIsIk5BViIsImhhc2hIaXN0b3J5IiwiciIsIlJvb3RlZEluZGV4IiwiYnJhbmNoIiwid2l0aFJvdXRlciIsIm1hcFN0YXRlVG9Qcm9wcyIsIm1hcERpc3BhdGNoVG9Qcm9wcyIsImdldEJsb2ciLCJsb2NhdGlvbiIsImNvbm5lY3QiLCJnZXRQb3N0IiwieWVhciIsIm1vbnRoIiwiZGF5IiwiZ2V0Q1YiLCJnZXRIb21lIiwiZ2V0VHJlbmRzIiwiZ2V0S0JBbmRyb2lkQ2F0ZWdvcmllcyIsInByb2plY3QiXSwibWFwcGluZ3MiOiI7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGdCQUFRLG9CQUFvQjtBQUM1QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHlCQUFpQiw0QkFBNEI7QUFDN0M7QUFDQTtBQUNBLDBCQUFrQiwyQkFBMkI7QUFDN0M7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBLGtEQUEwQztBQUMxQzs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7OztBQUdBOztBQUVBO0FBQ0EseUNBQWlDOztBQUVqQztBQUNBO0FBQ0E7QUFDQSxhQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0EsY0FB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QUFDLGlFQUFELElBQWEsV0FBVyxLQUFLaEIsS0FBTCxDQUFXZ0IsU0FBbkMsR0FBUDtBQUNGLGFBQUssU0FBTDtBQUNFLGlCQUFPLDJEQUFDLCtEQUFELElBQVUsV0FBVyxLQUFLaEIsS0FBTCxDQUFXZ0IsU0FBaEMsR0FBUDtBQUNGLGFBQUssT0FBTDtBQUNFLGlCQUFPLDJEQUFDLGdFQUFELElBQVcsV0FBVyxLQUFLaEIsS0FBTCxDQUFXZ0IsU0FBakMsR0FBUDtBQUNGLGFBQUssUUFBTDtBQUNFLGlCQUFPLDJEQUFDLCtEQUFELElBQVksV0FBVyxLQUFLaEIsS0FBTCxDQUFXZ0IsU0FBbEMsR0FBUDtBQUNGLGFBQUssTUFBTDtBQUNFLGlCQUFPLDJEQUFDLHdFQUFELElBQVUsV0FBVyxLQUFLaEIsS0FBTCxDQUFXZ0IsU0FBaEMsR0FBUDtBQUNGLGFBQUssU0FBTDtBQUNFLGlCQUFPLDJEQUFDLGtFQUFELElBQWEsV0FBVyxLQUFLaEIsS0FBTCxDQUFXZ0IsU0FBbkMsR0FBUDtBQUNGLGFBQUssVUFBTDtBQUNFLGlCQUFPLDJEQUFDLCtFQUFELElBQWMsV0FBVyxLQUFLaEIsS0FBTCxDQUFXZ0IsU0FBcEMsR0FBUDtBQUNGLGFBQUssT0FBTDtBQUNFLGlCQUFPLDJEQUFDLG9FQUFELElBQVcsV0FBVyxLQUFLaEIsS0FBTCxDQUFXZ0IsU0FBakMsR0FBUDtBQUNGLGFBQUssTUFBTDtBQUNFLGlCQUFPLDJEQUFDLCtEQUFELElBQVUsV0FBVyxLQUFLaEIsS0FBTCxDQUFXZ0IsU0FBaEMsR0FBUDtBQUNGLGFBQUssTUFBTDtBQUNFLGlCQUFPLDJEQUFDLG1FQUFELElBQVUsV0FBVyxLQUFLaEIsS0FBTCxDQUFXZ0IsU0FBaEMsR0FBUDtBQUNGLGFBQUssVUFBTDtBQUNFLGlCQUFPLDJEQUFDLCtEQUFELElBQWMsV0FBVyxLQUFLaEIsS0FBTCxDQUFXZ0IsU0FBcEMsR0FBUDtBQUNGLGFBQUssSUFBTDtBQUNFLGlCQUFPLDJEQUFDLCtEQUFELElBQVEsV0FBVyxLQUFLaEIsS0FBTCxDQUFXZ0IsU0FB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O0FBQ0E7O0FBRUEsYUFBYSxtQkFBTyxDQUFDLHFMQUE2Rjs7QUFFbEg7O0FBRUEsR0FBRyxLQUFVLEVBQUUsRSIsImZpbGUiOiJhcHAuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBpbnN0YWxsIGEgSlNPTlAgY2FsbGJhY2sgZm9yIGNodW5rIGxvYWRpbmdcbiBcdGZ1bmN0aW9uIHdlYnBhY2tKc29ucENhbGxiYWNrKGRhdGEpIHtcbiBcdFx0dmFyIGNodW5rSWRzID0gZGF0YVswXTtcbiBcdFx0dmFyIG1vcmVNb2R1bGVzID0gZGF0YVsxXTtcbiBcdFx0dmFyIGV4ZWN1dGVNb2R1bGVzID0gZGF0YVsyXTtcblxuIFx0XHQvLyBhZGQgXCJtb3JlTW9kdWxlc1wiIHRvIHRoZSBtb2R1bGVzIG9iamVjdCxcbiBcdFx0Ly8gdGhlbiBmbGFnIGFsbCBcImNodW5rSWRzXCIgYXMgbG9hZGVkIGFuZCBmaXJlIGNhbGxiYWNrXG4gXHRcdHZhciBtb2R1bGVJZCwgY2h1bmtJZCwgaSA9IDAsIHJlc29sdmVzID0gW107XG4gXHRcdGZvcig7aSA8IGNodW5rSWRzLmxlbmd0aDsgaSsrKSB7XG4gXHRcdFx0Y2h1bmtJZCA9IGNodW5rSWRzW2ldO1xuIFx0XHRcdGlmKGluc3RhbGxlZENodW5rc1tjaHVua0lkXSkge1xuIFx0XHRcdFx0cmVzb2x2ZXMucHVzaChpbnN0YWxsZWRDaHVua3NbY2h1bmtJZF1bMF0pO1xuIFx0XHRcdH1cbiBcdFx0XHRpbnN0YWxsZWRDaHVua3NbY2h1bmtJZF0gPSAwO1xuIFx0XHR9XG4gXHRcdGZvcihtb2R1bGVJZCBpbiBtb3JlTW9kdWxlcykge1xuIFx0XHRcdGlmKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChtb3JlTW9kdWxlcywgbW9kdWxlSWQpKSB7XG4gXHRcdFx0XHRtb2R1bGVzW21vZHVsZUlkXSA9IG1vcmVNb2R1bGVzW21vZHVsZUlkXTtcbiBcdFx0XHR9XG4gXHRcdH1cbiBcdFx0aWYocGFyZW50SnNvbnBGdW5jdGlvbikgcGFyZW50SnNvbnBGdW5jdGlvbihkYXRhKTtcblxuIFx0XHR3aGlsZShyZXNvbHZlcy5sZW5ndGgpIHtcbiBcdFx0XHRyZXNvbHZlcy5zaGlmdCgpKCk7XG4gXHRcdH1cblxuIFx0XHQvLyBhZGQgZW50cnkgbW9kdWxlcyBmcm9tIGxvYWRlZCBjaHVuayB0byBkZWZlcnJlZCBsaXN0XG4gXHRcdGRlZmVycmVkTW9kdWxlcy5wdXNoLmFwcGx5KGRlZmVycmVkTW9kdWxlcywgZXhlY3V0ZU1vZHVsZXMgfHwgW10pO1xuXG4gXHRcdC8vIHJ1biBkZWZlcnJlZCBtb2R1bGVzIHdoZW4gYWxsIGNodW5rcyByZWFkeVxuIFx0XHRyZXR1cm4gY2hlY2tEZWZlcnJlZE1vZHVsZXMoKTtcbiBcdH07XG4gXHRmdW5jdGlvbiBjaGVja0RlZmVycmVkTW9kdWxlcygpIHtcbiBcdFx0dmFyIHJlc3VsdDtcbiBcdFx0Zm9yKHZhciBpID0gMDsgaSA8IGRlZmVycmVkTW9kdWxlcy5sZW5ndGg7IGkrKykge1xuIFx0XHRcdHZhciBkZWZlcnJlZE1vZHVsZSA9IGRlZmVycmVkTW9kdWxlc1tpXTtcbiBcdFx0XHR2YXIgZnVsZmlsbGVkID0gdHJ1ZTtcbiBcdFx0XHRmb3IodmFyIGogPSAxOyBqIDwgZGVmZXJyZWRNb2R1bGUubGVuZ3RoOyBqKyspIHtcbiBcdFx0XHRcdHZhciBkZXBJZCA9IGRlZmVycmVkTW9kdWxlW2pdO1xuIFx0XHRcdFx0aWYoaW5zdGFsbGVkQ2h1bmtzW2RlcElkXSAhPT0gMCkgZnVsZmlsbGVkID0gZmFsc2U7XG4gXHRcdFx0fVxuIFx0XHRcdGlmKGZ1bGZpbGxlZCkge1xuIFx0XHRcdFx0ZGVmZXJyZWRNb2R1bGVzLnNwbGljZShpLS0sIDEpO1xuIFx0XHRcdFx0cmVzdWx0ID0gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBkZWZlcnJlZE1vZHVsZVswXSk7XG4gXHRcdFx0fVxuIFx0XHR9XG4gXHRcdHJldHVybiByZXN1bHQ7XG4gXHR9XG5cbiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIG9iamVjdCB0byBzdG9yZSBsb2FkZWQgYW5kIGxvYWRpbmcgY2h1bmtzXG4gXHQvLyB1bmRlZmluZWQgPSBjaHVuayBub3QgbG9hZGVkLCBudWxsID0gY2h1bmsgcHJlbG9hZGVkL3ByZWZldGNoZWRcbiBcdC8vIFByb21pc2UgPSBjaHVuayBsb2FkaW5nLCAwID0gY2h1bmsgbG9hZGVkXG4gXHR2YXIgaW5zdGFsbGVkQ2h1bmtzID0ge1xuIFx0XHRcImFwcFwiOiAwXG4gXHR9O1xuXG4gXHR2YXIgZGVmZXJyZWRNb2R1bGVzID0gW107XG5cbiBcdC8vIHNjcmlwdCBwYXRoIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBqc29ucFNjcmlwdFNyYyhjaHVua0lkKSB7XG4gXHRcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fLnAgKyBcIlwiICsgKHt9W2NodW5rSWRdfHxjaHVua0lkKSArIFwiLmpzXCJcbiBcdH1cblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG4gXHQvLyBUaGlzIGZpbGUgY29udGFpbnMgb25seSB0aGUgZW50cnkgY2h1bmsuXG4gXHQvLyBUaGUgY2h1bmsgbG9hZGluZyBmdW5jdGlvbiBmb3IgYWRkaXRpb25hbCBjaHVua3NcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZSA9IGZ1bmN0aW9uIHJlcXVpcmVFbnN1cmUoY2h1bmtJZCkge1xuIFx0XHR2YXIgcHJvbWlzZXMgPSBbXTtcblxuXG4gXHRcdC8vIEpTT05QIGNodW5rIGxvYWRpbmcgZm9yIGphdmFzY3JpcHRcblxuIFx0XHR2YXIgaW5zdGFsbGVkQ2h1bmtEYXRhID0gaW5zdGFsbGVkQ2h1bmtzW2NodW5rSWRdO1xuIFx0XHRpZihpbnN0YWxsZWRDaHVua0RhdGEgIT09IDApIHsgLy8gMCBtZWFucyBcImFscmVhZHkgaW5zdGFsbGVkXCIuXG5cbiBcdFx0XHQvLyBhIFByb21pc2UgbWVhbnMgXCJjdXJyZW50bHkgbG9hZGluZ1wiLlxuIFx0XHRcdGlmKGluc3RhbGxlZENodW5rRGF0YSkge1xuIFx0XHRcdFx0cHJvbWlzZXMucHVzaChpbnN0YWxsZWRDaHVua0RhdGFbMl0pO1xuIFx0XHRcdH0gZWxzZSB7XG4gXHRcdFx0XHQvLyBzZXR1cCBQcm9taXNlIGluIGNodW5rIGNhY2hlXG4gXHRcdFx0XHR2YXIgcHJvbWlzZSA9IG5ldyBQcm9taXNlKGZ1bmN0aW9uKHJlc29sdmUsIHJlamVjdCkge1xuIFx0XHRcdFx0XHRpbnN0YWxsZWRDaHVua0RhdGEgPSBpbnN0YWxsZWRDaHVua3NbY2h1bmtJZF0gPSBbcmVzb2x2ZSwgcmVqZWN0XTtcbiBcdFx0XHRcdH0pO1xuIFx0XHRcdFx0cHJvbWlzZXMucHVzaChpbnN0YWxsZWRDaHVua0RhdGFbMl0gPSBwcm9taXNlKTtcblxuIFx0XHRcdFx0Ly8gc3RhcnQgY2h1bmsgbG9hZGluZ1xuIFx0XHRcdFx0dmFyIHNjcmlwdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NjcmlwdCcpO1xuIFx0XHRcdFx0dmFyIG9uU2NyaXB0Q29tcGxldGU7XG5cbiBcdFx0XHRcdHNjcmlwdC5jaGFyc2V0ID0gJ3V0Zi04JztcbiBcdFx0XHRcdHNjcmlwdC50aW1lb3V0ID0gMTIwO1xuIFx0XHRcdFx0aWYgKF9fd2VicGFja19yZXF1aXJlX18ubmMpIHtcbiBcdFx0XHRcdFx0c2NyaXB0LnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIF9fd2VicGFja19yZXF1aXJlX18ubmMpO1xuIFx0XHRcdFx0fVxuIFx0XHRcdFx0c2NyaXB0LnNyYyA9IGpzb25wU2NyaXB0U3JjKGNodW5rSWQpO1xuXG4gXHRcdFx0XHRvblNjcmlwdENvbXBsZXRlID0gZnVuY3Rpb24gKGV2ZW50KSB7XG4gXHRcdFx0XHRcdC8vIGF2b2lkIG1lbSBsZWFrcyBpbiBJRS5cbiBcdFx0XHRcdFx0c2NyaXB0Lm9uZXJyb3IgPSBzY3JpcHQub25sb2FkID0gbnVsbDtcbiBcdFx0XHRcdFx0Y2xlYXJUaW1lb3V0KHRpbWVvdXQpO1xuIFx0XHRcdFx0XHR2YXIgY2h1bmsgPSBpbnN0YWxsZWRDaHVua3NbY2h1bmtJZF07XG4gXHRcdFx0XHRcdGlmKGNodW5rICE9PSAwKSB7XG4gXHRcdFx0XHRcdFx0aWYoY2h1bmspIHtcbiBcdFx0XHRcdFx0XHRcdHZhciBlcnJvclR5cGUgPSBldmVudCAmJiAoZXZlbnQudHlwZSA9PT0gJ2xvYWQnID8gJ21pc3NpbmcnIDogZXZlbnQudHlwZSk7XG4gXHRcdFx0XHRcdFx0XHR2YXIgcmVhbFNyYyA9IGV2ZW50ICYmIGV2ZW50LnRhcmdldCAmJiBldmVudC50YXJnZXQuc3JjO1xuIFx0XHRcdFx0XHRcdFx0dmFyIGVycm9yID0gbmV3IEVycm9yKCdMb2FkaW5nIGNodW5rICcgKyBjaHVua0lkICsgJyBmYWlsZWQuXFxuKCcgKyBlcnJvclR5cGUgKyAnOiAnICsgcmVhbFNyYyArICcpJyk7XG4gXHRcdFx0XHRcdFx0XHRlcnJvci50eXBlID0gZXJyb3JUeXBlO1xuIFx0XHRcdFx0XHRcdFx0ZXJyb3IucmVxdWVzdCA9IHJlYWxTcmM7XG4gXHRcdFx0XHRcdFx0XHRjaHVua1sxXShlcnJvcik7XG4gXHRcdFx0XHRcdFx0fVxuIFx0XHRcdFx0XHRcdGluc3RhbGxlZENodW5rc1tjaHVua0lkXSA9IHVuZGVmaW5lZDtcbiBcdFx0XHRcdFx0fVxuIFx0XHRcdFx0fTtcbiBcdFx0XHRcdHZhciB0aW1lb3V0ID0gc2V0VGltZW91dChmdW5jdGlvbigpe1xuIFx0XHRcdFx0XHRvblNjcmlwdENvbXBsZXRlKHsgdHlwZTogJ3RpbWVvdXQnLCB0YXJnZXQ6IHNjcmlwdCB9KTtcbiBcdFx0XHRcdH0sIDEyMDAwMCk7XG4gXHRcdFx0XHRzY3JpcHQub25lcnJvciA9IHNjcmlwdC5vbmxvYWQgPSBvblNjcmlwdENvbXBsZXRlO1xuIFx0XHRcdFx0ZG9jdW1lbnQuaGVhZC5hcHBlbmRDaGlsZChzY3JpcHQpO1xuIFx0XHRcdH1cbiBcdFx0fVxuIFx0XHRyZXR1cm4gUHJvbWlzZS5hbGwocHJvbWlzZXMpO1xuIFx0fTtcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG4gXHQvLyBvbiBlcnJvciBmdW5jdGlvbiBmb3IgYXN5bmMgbG9hZGluZ1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vZSA9IGZ1bmN0aW9uKGVycikgeyBjb25zb2xlLmVycm9yKGVycik7IHRocm93IGVycjsgfTtcblxuIFx0dmFyIGpzb25wQXJyYXkgPSB3aW5kb3dbXCJ3ZWJwYWNrSnNvbnBcIl0gPSB3aW5kb3dbXCJ3ZWJwYWNrSnNvbnBcIl0gfHwgW107XG4gXHR2YXIgb2xkSnNvbnBGdW5jdGlvbiA9IGpzb25wQXJyYXkucHVzaC5iaW5kKGpzb25wQXJyYXkpO1xuIFx0anNvbnBBcnJheS5wdXNoID0gd2VicGFja0pzb25wQ2FsbGJhY2s7XG4gXHRqc29ucEFycmF5ID0ganNvbnBBcnJheS5zbGljZSgpO1xuIFx0Zm9yKHZhciBpID0gMDsgaSA8IGpzb25wQXJyYXkubGVuZ3RoOyBpKyspIHdlYnBhY2tKc29ucENhbGxiYWNrKGpzb25wQXJyYXlbaV0pO1xuIFx0dmFyIHBhcmVudEpzb25wRnVuY3Rpb24gPSBvbGRKc29ucEZ1bmN0aW9uO1xuXG5cbiBcdC8vIGFkZCBlbnRyeSBtb2R1bGUgdG8gZGVmZXJyZWQgbGlzdFxuIFx0ZGVmZXJyZWRNb2R1bGVzLnB1c2goWzAsXCJ2ZW5kb3JcIl0pO1xuIFx0Ly8gcnVuIGRlZmVycmVkIG1vZHVsZXMgd2hlbiByZWFkeVxuIFx0cmV0dXJuIGNoZWNrRGVmZXJyZWRNb2R1bGVzKCk7XG4iLCJleHBvcnRzID0gbW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vZnJhbWV3b3Jrcy93ZWJhcHBzL3N0YXJ0dXAvbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvbGliL2Nzcy1iYXNlLmpzXCIpKGZhbHNlKTtcbi8vIGltcG9ydHNcblxuXG4vLyBtb2R1bGVcbmV4cG9ydHMucHVzaChbbW9kdWxlLmlkLCBcIi5tb2QtdmVyc2lvbiB7XFxuICB3aWR0aDogMTAwJTtcXG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xcbiAgcGFkZGluZzogMTBweDsgfVxcblwiLCBcIlwiXSk7XG5cbi8vIGV4cG9ydHNcbiIsImV4cG9ydHMgPSBtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCIuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9mcmFtZXdvcmtzL3dlYmFwcHMvc3RhcnR1cC9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9saWIvY3NzLWJhc2UuanNcIikoZmFsc2UpO1xuLy8gaW1wb3J0c1xuXG5cbi8vIG1vZHVsZVxuZXhwb3J0cy5wdXNoKFttb2R1bGUuaWQsIFwiLm1vZC1mb290ZXIge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogIzU1NTtcXG4gIGNvbG9yOiB3aGl0ZTtcXG4gIHBhZGRpbmc6IDIwcHggMjBweCAyMHB4IDMwcHg7IH1cXG5cXG4ubW9kLWZvb3RlciBhOnZpc2l0ZWQsXFxuLm1vZC1mb290ZXIgYTpsaW5rIHtcXG4gIGNvbG9yOiB3aGl0ZTtcXG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTsgfVxcblwiLCBcIlwiXSk7XG5cbi8vIGV4cG9ydHNcbiIsImV4cG9ydHMgPSBtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCIuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9mcmFtZXdvcmtzL3dlYmFwcHMvc3RhcnR1cC9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9saWIvY3NzLWJhc2UuanNcIikoZmFsc2UpO1xuLy8gaW1wb3J0c1xuXG5cbi8vIG1vZHVsZVxuZXhwb3J0cy5wdXNoKFttb2R1bGUuaWQsIFwiLm1vZC13aGF0cy1ob3Qge1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgZm9udC1zaXplOiAwLjhlbTsgfVxcblwiLCBcIlwiXSk7XG5cbi8vIGV4cG9ydHNcbiIsImV4cG9ydHMgPSBtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCIuLi8uLi8uLi8uLi8uLi8uLi9mcmFtZXdvcmtzL3dlYmFwcHMvc3RhcnR1cC9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9saWIvY3NzLWJhc2UuanNcIikoZmFsc2UpO1xuLy8gaW1wb3J0c1xuXG5cbi8vIG1vZHVsZVxuZXhwb3J0cy5wdXNoKFttb2R1bGUuaWQsIFwiXCIsIFwiXCJdKTtcblxuLy8gZXhwb3J0c1xuIiwiZXhwb3J0cyA9IG1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIi4uLy4uLy4uLy4uLy4uLy4uLy4uL2ZyYW1ld29ya3Mvd2ViYXBwcy9zdGFydHVwL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2xpYi9jc3MtYmFzZS5qc1wiKShmYWxzZSk7XG4vLyBpbXBvcnRzXG5cblxuLy8gbW9kdWxlXG5leHBvcnRzLnB1c2goW21vZHVsZS5pZCwgXCIubW9kLXNvY2lhbC1pY29ucyB7XFxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICBtYXJnaW46IDEwcHggMDsgfVxcblxcbi5tb2Qtc29jaWFsLWljb25zIGEge1xcbiAgZm9udC1zaXplOiAxNHB4ICFpbXBvcnRhbnQ7XFxuICBtYXJnaW4tcmlnaHQ6IDVweDsgfVxcblxcbi5tb2Qtc29jaWFsLWljb25zIGE6aG92ZXIge1xcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lOyB9XFxuXFxuLm1vZC1zb2NpYWwtaWNvbnMgYSBpIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyIGNlbnRlcjtcXG4gIGxpbmUtaGVpZ2h0OiAzMnB4O1xcbiAgYm9yZGVyLXJhZGl1czogOHB4O1xcbiAgYm9yZGVyOiAxcHggc29saWQgI2EwYTBhMDtcXG4gIGhlaWdodDogMzhweDtcXG4gIHdpZHRoOiAzOHB4O1xcbiAgcGFkZGluZy10b3A6IDJweDsgfVxcblwiLCBcIlwiXSk7XG5cbi8vIGV4cG9ydHNcbiIsImltcG9ydCBTZXJ2ZXIgZnJvbSAnY29yZS9hcHAvc2VydmVyJztcblxuY2xhc3MgQVBJIHtcblx0Y29uc3RydWN0b3IocHJvcHMpIHtcblx0XHR0aGlzLmVycm9yID0gXCJcIjtcblx0XHR0aGlzLmN1cnJlbnRfY29tcG9uZW50ID0gcHJvcHMuY3VycmVudF9jb21wb25lbnQ7XG5cdFx0dGhpcy5jb21wb25lbnRzID0gcHJvcHMuY29tcG9uZW50cztcblx0XHR0aGlzLmxvY2FsID0gcHJvcHMubG9jYWw7XG5cdFx0dGhpcy50aXRsZSA9IHByb3BzLnRpdGxlO1xuXHRcdHRoaXMuZGVidWcgPSBwcm9wcy5kZWJ1ZztcblxuXHRcdHRoaXMuc2VydmVyID0gbmV3IFNlcnZlcih7ZGVidWc6IHRoaXMuZGVidWcsIGxvY2FsOiB0aGlzLmxvY2FsfSk7XG5cdH1cblxuXHRnZXRFcnJvcigpe1xuXHRcdHJldHVybiB0aGlzLmVycm9yO1xuXHR9XG5cblx0c2V0RXJyb3IoZXJyKXtcblx0XHR0aGlzLmVycm9yICs9IFwiXFxuXCIgKyBlcnI7XG5cdH1cblxuXHRnZXRDb21wb25lbnRzVmVyc2lvbigpe1xuXHRcdHJldHVybiB0aGlzLmN1cnJlbnRfY29tcG9uZW50O1xuXHR9XG5cblx0c2V0Q29tcG9uZW50c1ZlcnNpb24oaWQpe1xuXHRcdHZhciBmYW1pbHksIHZlcnNpb247XG5cdFx0Y29uc3QgZGF0YSA9IHRoaXMuY29tcG9uZW50cztcblx0XHRjb25zdCBpdGVtID0gZGF0YS5maW5kKChpdGVtKSA9PiAoaXRlbS5pZCA9PSBpZCkgPyBpdGVtIDogbnVsbCk7XG5cblx0XHR0aGlzLmN1cnJlbnRfY29tcG9uZW50ID0ge2lkIDogaXRlbS5pZCwgZmFtaWx5IDogaXRlbS5mYW1pbHksIHZlcnNpb24gOiBpdGVtLnZlcnNpb259O1xuXHR9XG4gIFxufVxuXG5leHBvcnQgZGVmYXVsdCBBUEk7XG4iLCJpbXBvcnQgYXhpb3MgZnJvbSAnYXhpb3MnO1xuXG5jbGFzcyBTZXJ2ZXIge1xuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgIHRoaXMub25TdGFydExvYWRpbmcgPSBudWxsO1xuICAgIHRoaXMub25TdG9wTG9hZGluZyA9IG51bGw7XG4gICAgdGhpcy5vbkVycm9yID0gbnVsbDtcbiAgICBcblxuICAgIHZhciBjb25uZWN0aW9ucyA9IFtcbiAgICAgIHtwcm90b2NvbDogJ2h0dHAnLCBzZXJ2ZXI6ICcxOTIuMTY4LjEuMTUwJywgcGF0aDonL2RhdGEnfSxcbiAgICAgIHtwcm90b2NvbDogJ2h0dHBzJywgc2VydmVyOiAnam1hcnJveWF2ZS1zZWFyY2gtYmFja2VuZC5oZXJva3VhcHAuY29tJywgcGF0aDonJ30sXG4gICAgICB7cHJvdG9jb2w6ICdodHRwcycsIHNlcnZlcjogJ2ptYXJyb3lhdmUtZGF0YS1zZXJ2ZXIuaGVyb2t1YXBwLmNvbScsIHBhdGg6Jyd9LFxuICAgIF1cblxuICAgIHZhciBjdXJyZW50ID0gIChwcm9wcyAmJiBwcm9wcy5sb2NhbCA9PSBmYWxzZSkgPyBjb25uZWN0aW9uc1syXSA6IGNvbm5lY3Rpb25zWzBdOyBcbiAgICB0aGlzLnNlcnZlclVSSSA9IGAke2N1cnJlbnQucHJvdG9jb2x9Oi8vJHtjdXJyZW50LnNlcnZlcn0ke2N1cnJlbnQucGF0aH1gO1xuICAgIHRoaXMuZGVidWcgPSAoIXByb3BzIHx8IHByb3BzLmRlYnVnKSA/IHRydWUgOiBmYWxzZTtcbiAgfVxuXG4gIHRyaWdnZXJPblN0YXJ0TG9hZGluZygpeyAgIFxuICAgIGlmKHRoaXMub25TdGFydExvYWRpbmcpe1xuICAgICAgdGhpcy5vblN0YXJ0TG9hZGluZygpO1xuICAgIH1cbiAgfVxuXG4gIHRyaWdnZXJPblN0b3BMb2FkaW5nKCl7XG4gICAgaWYodGhpcy5vblN0b3BMb2FkaW5nKVxuICAgICAgdGhpcy5vblN0b3BMb2FkaW5nKCk7XG4gIH1cblxuICB0cmlnZ2VyT25FcnJvcihlcnIpe1xuICAgIGlmKHRoaXMub25FcnJvcilcbiAgICAgIHRoaXMub25FcnJvcihlcnIpOyAgIFxuICB9XG5cbiAgZXhlYyhtZXRob2QsIHVyaSwgcGFyYW1zLCBjb25maWcsIGNhbGxiYWNrLCBjYWxsYmFja19lcnIpe1xuICAgIHZhciAkdGhpcyA9IHRoaXM7ICAgXG4gICAgdmFyIHVybCA9ICh1cmkuaW5kZXhPZihcImh0dHBcIikgPT0gMCB8fCB1cmkuaW5kZXhPZihcIi5cIikgPT0gMCkgPyB1cmkgOiB0aGlzLnNlcnZlclVSSSArIHVyaTtcbiAgICB2YXIgcDtcbiAgICB0aGlzLnRyaWdnZXJPblN0YXJ0TG9hZGluZygpXG4gICAgY29uc3QgdGltZW91dCA9IDYwICogMTAwMDtcblxuICAgIGlmKG1ldGhvZCA9PT0gJ2dldCcpe1xuICAgICAgcCA9IGF4aW9zLmdldCh1cmwsIHtcbiAgICAgICAgcGFyYW1zOnBhcmFtcyxcbiAgICAgICAgdGltZW91dDogKGNvbmZpZyAmJiBjb25maWcudGltZW91dCkgPyBjb25maWcudGltZW91dCA6IHRpbWVvdXQsXG4gICAgICB9KTtcbiAgICB9IGVsc2Uge1xuICAgICAgcCA9IGF4aW9zLnBvc3QodXJsLCBwYXJhbXMsIHtcbiAgICAgICAgdGltZW91dDogKGNvbmZpZyAmJiBjb25maWcudGltZW91dCkgPyBjb25maWcudGltZW91dCA6IHRpbWVvdXQsXG4gICAgICB9KTtcbiAgICB9XG5cbiAgICBpZigkdGhpcy5kZWJ1Zyl7XG4gICAgICBjb25zb2xlLmRlYnVnKFwiU1JWXCIsIG1ldGhvZC50b1VwcGVyQ2FzZSgpLCB1cmksIHBhcmFtcyk7XG4gICAgfVxuXG5cbiAgICBwLnRoZW4ocmVzcG9uc2UgPT4ge1xuICAgICAgaWYoJHRoaXMuZGVidWcpe1xuICAgICAgICBjb25zb2xlLmRlYnVnKFwiU1JWXCIsIG1ldGhvZC50b1VwcGVyQ2FzZSgpLCB1cmksIHBhcmFtcywgJ1Jlc3BvbnNlJywgcmVzcG9uc2UpO1xuICAgICAgfVxuICAgICAgaWYoY2FsbGJhY2spXG4gICAgICAgIGNhbGxiYWNrKHJlc3BvbnNlLmRhdGEpO1xuICAgICAgJHRoaXMudHJpZ2dlck9uU3RvcExvYWRpbmcoKVxuICAgIH0pXG4gICAgLmNhdGNoKGVyciA9PiB7XG4gICAgICBpZigkdGhpcy5kZWJ1Zyl7XG4gICAgICAgIGNvbnNvbGUuZGVidWcoXCJTUlZcIiwgbWV0aG9kLnRvVXBwZXJDYXNlKCksIHVyaSwgcGFyYW1zLCBcIkVSUk9SXCIsIGVycik7XG4gICAgICB9XG4gICAgICB0aGlzLnRyaWdnZXJPbkVycm9yKGVycik7XG4gICAgICBpZihjYWxsYmFja19lcnIpe1xuICAgICAgICBjYWxsYmFja19lcnIoZXJyKVxuICAgICAgfVxuICAgICAgJHRoaXMudHJpZ2dlck9uU3RvcExvYWRpbmcoKVxuICAgIH0pOyAgICAgIFxuICB9XG5cbiAgZ2V0cCh1cmksIHBhcmFtcyl7XG4gICAgY29uc3QgJHRoaXMgPSB0aGlzO1xuICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gICAgICAkdGhpcy5nZXQodXJpLHBhcmFtcyxmdW5jdGlvbihkYXRhKXtcbiAgICAgICAgcmVzb2x2ZShkYXRhKTtcbiAgICAgIH0pO1xuICAgIH0pO1xuICB9XG5cbiAgZ2V0KHVyaSwgcGFyYW1zLCBjYWxsYmFjayl7XG4gICAgaWYocGFyYW1zLnBhcmFtcylcbiAgICAgIHBhcmFtcyA9IHBhcmFtcy5wYXJhbXM7XG4gICAgdGhpcy5leGVjKCdnZXQnLCB1cmksIHBhcmFtcywge30sIGNhbGxiYWNrKTtcbiAgfVxuXG4gIGdldExvbmcodXJpLCBwYXJhbXMsIHRpbWVvdXQsIGNhbGxiYWNrLCBjYWxsYmFja19lcnIpe1xuICAgIGlmKHBhcmFtcy5wYXJhbXMpXG4gICAgICBwYXJhbXMgPSBwYXJhbXMucGFyYW1zO1xuICAgIHRoaXMuZXhlYygnZ2V0JywgdXJpLCBwYXJhbXMsIHt0aW1lb3V0OiB0aW1lb3V0fSwgY2FsbGJhY2ssIGNhbGxiYWNrX2Vycik7XG4gIH1cblxuICBwb3N0KHVyaSwgcGFyYW1zLCBjYWxsYmFjaywgY2FsbGJhY2tfZXJyKXtcbiAgICBpZihwYXJhbXMucGFyYW1zKVxuICAgICAgcGFyYW1zID0gcGFyYW1zLnBhcmFtcztcbiAgICB0aGlzLmV4ZWMoJ3Bvc3QnLCB1cmksIHBhcmFtcywge30sIGNhbGxiYWNrLCBjYWxsYmFja19lcnIpO1xuICB9ICBcblxuICBmZXRjaCh1cmwsIHBhcmFtcywgY2FsbGJhY2ssIGNhbGxiYWNrX2Vycil7XG4gICAgaWYocGFyYW1zLnBhcmFtcylcbiAgICAgIHBhcmFtcyA9IHBhcmFtcy5wYXJhbXM7XG4gICAgdmFyICR0aGlzID0gdGhpczsgICBcbiAgICB0aGlzLnRyaWdnZXJPblN0YXJ0TG9hZGluZygpXG4gICAgYXhpb3MuZ2V0KHVybCwge3BhcmFtczpwYXJhbXN9KVxuICAgIC50aGVuKGZ1bmN0aW9uKHJlc3BvbnNlKXtcbiAgICAgIGlmKCR0aGlzLmRlYnVnKXtcbiAgICAgICAgY29uc29sZS5kZWJ1ZyhcIlNSVlwiLCAnRkVUQ0g6JywgdXJsLCBwYXJhbXMsICdTZXJ2ZXIgUmVzcG9uc2U6JywgcmVzcG9uc2UpO1xuICAgICAgfVxuICAgICAgaWYoY2FsbGJhY2spe1xuICAgICAgICBjYWxsYmFjayhyZXNwb25zZS5kYXRhKTtcbiAgICAgIH1cbiAgICAgICR0aGlzLnRyaWdnZXJPblN0b3BMb2FkaW5nKClcbiAgICB9KVxuICAgIC5jYXRjaChlcnIgPT4ge1xuICAgICAgaWYoJHRoaXMuZGVidWcpe1xuICAgICAgICBjb25zb2xlLmRlYnVnKFwiU1JWXCIsICdGRVRDSDonLCB1cmwsIHBhcmFtcywgJ1NlcnZlciBFcnJvcjonLCBlcnIpO1xuICAgICAgfVxuICAgICAgJHRoaXMudHJpZ2dlck9uU3RvcExvYWRpbmcoKVxuICAgICAgdGhpcy50cmlnZ2VyT25FcnJvcihlcnIpO1xuICAgIH0pOyAgICAgIFxuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IFNlcnZlcjtcbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyB3aXRoU3R5bGVzIH0gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvc3R5bGVzJztcbmltcG9ydCBVSUFwcEJhciBmcm9tICdjb3JlL2NvbXBvbmVudHMvYXBwYmFyJztcbmltcG9ydCBVSVRvb2xiYXIgZnJvbSAnY29yZS9jb21wb25lbnRzL3Rvb2xiYXInO1xuaW1wb3J0IFVJQnV0dG9uIGZyb20gJ2NvcmUvY29tcG9uZW50cy9idXR0b24nO1xuaW1wb3J0IFVJTG9hZGluZ0JhciBmcm9tICdjb3JlL2NvbXBvbmVudHMvbG9hZGluZ19iYXInO1xuaW1wb3J0IFVJU25hY2tiYXIgZnJvbSAnY29yZS9jb21wb25lbnRzL3NuYWNrYmFyJztcbmltcG9ydCBIaWRkZW4gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvSGlkZGVuJztcbmltcG9ydCBEcmF3ZXIgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvRHJhd2VyJztcbmltcG9ydCBJY29uQnV0dG9uIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL0ljb25CdXR0b24nO1xuaW1wb3J0IFVJSWNvbiBmcm9tICdjb3JlL2NvbXBvbmVudHMvaWNvbic7XG5pbXBvcnQgeyBNdWlUaGVtZVByb3ZpZGVyLCBjcmVhdGVNdWlUaGVtZSB9IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL3N0eWxlcyc7XG5pbXBvcnQgYmx1ZSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9jb2xvcnMvYmx1ZSc7XG5pbXBvcnQgcmVkIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL2NvbG9ycy9yZWQnO1xuaW1wb3J0IGNsYXNzTmFtZXMgZnJvbSAnY2xhc3NuYW1lcyc7XG5pbXBvcnQgSGVsbWV0IGZyb20gJ3JlYWN0LWhlbG1ldCc7XG5pbXBvcnQgRXJyb3JCb3VuZHJ5IGZyb20gJ2NvcmUvY29tcG9uZW50cy9lcnJvcic7XG5pbXBvcnQgQ3NzQmFzZWxpbmUgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvQ3NzQmFzZWxpbmUnO1xuaW1wb3J0IHsgTGluayB9IGZyb20gJ3JlYWN0LXJvdXRlcidcblxuY29uc3QgZHJhd2VyV2lkdGggPSAyNDA7XG5cbmNvbnN0IHRoZW1lQlcgPSBjcmVhdGVNdWlUaGVtZSh7XG4gIHBhbGV0dGU6IHtcbiAgICBwcmltYXJ5OiB7XG4gICAgICBsaWdodDogJyNmZmZmZmYnLFxuICAgICAgbWFpbjogJyNmYWZhZmEnLFxuICAgICAgZGFyazogJyNjN2M3YzcnLFxuICAgICAgY29udHJhc3RUZXh0OiAnIzAwMCcsXG4gICAgfSxcbiAgICBzZWNvbmRhcnk6IHtcbiAgICAgIGxpZ2h0OiAnIzQ4NDg0OCcsXG4gICAgICBtYWluOiAnIzIxMjEyMScsXG4gICAgICBkYXJrOiAnIzAwMCcsXG4gICAgICBjb250cmFzdFRleHQ6ICcjZmZmJyxcbiAgICB9LFxuICB9LFxuICB0eXBvZ3JhcGh5OiB7XG4gICAgLy8gVXNlIHRoZSBzeXN0ZW0gZm9udCBpbnN0ZWFkIG9mIHRoZSBkZWZhdWx0IFJvYm90byBmb250LlxuICAgIGZvbnRGYW1pbHk6IFtcbiAgICAgIFwiQXJpYWxcIixcbiAgICBdLmpvaW4oJywnKSxcbiAgICBmb250U2l6ZTogJzEwcHgnLFxuICB9LFxufSk7XG5cbmNvbnN0IHN0eWxlcyA9IHRoZW1lID0+ICh7XG5cdHJvb3Q6IHtcblx0fSxcblx0cm9vdEZpeGVkOiB7XG5cdFx0bWFyZ2luVG9wOiA2Nixcblx0fSxcblx0Ym9keToge1xuXHRcdGJveFNpemluZzogJ2JvcmRlci1ib3gnLFxuXHRcdG1hcmdpbjogMCxcblx0fSxcblx0bG9hZGluZyA6IHtcblx0XHRoZWlnaHQ6IDIsXG5cdH0sXG5cdG1lbnVCdXR0b246IHtcblx0XHRtYXJnaW5MZWZ0OiA4LFxuXHRcdG1hcmdpblJpZ2h0OiA4LFxuXHR9LFxuXHRkcmF3ZXJQYXBlcjoge1xuXHRcdHBvc2l0aW9uOiAncmVsYXRpdmUnLFxuXHRcdGhlaWdodDogJzEwMCUnLFxuXHRcdHdpZHRoOiBkcmF3ZXJXaWR0aCxcblx0fSxcblx0dGl0bGUgOiB7XG5cdFx0bWFyZ2luUmlnaHQ6IDEwLFxuXHRcdGZvbnRTaXplOiAxNCxcblx0fSxcbn0pO1xuXG5jbGFzcyBVSUFwcCBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIHN1cGVyKCk7XG4gICAgdGhpcy5zdGF0ZSA9IHtcbiAgICBcdGRyYXdlck9wZW46IGZhbHNlLFxuICAgIH1cbiAgICB0aGlzLnRvZ2dsZURyYXdlciA9IHRoaXMudG9nZ2xlRHJhd2VyLmJpbmQodGhpcyk7XG4gIH1cbiBcbiAgdG9nZ2xlRHJhd2VyKCl7XG4gICAgdGhpcy5zZXRTdGF0ZSh7IGRyYXdlck9wZW46ICF0aGlzLnN0YXRlLmRyYXdlck9wZW4gfSk7XG4gIH1cblxuICByZW5kZXIoKSB7XG4gIFx0dmFyIGtleSA9IDA7XG4gIFx0Y29uc3QgY2xhc3NlcyA9IHRoaXMucHJvcHMuY2xhc3NlcztcbiAgXHRjb25zdCB0aXRsZSA9ICh0aGlzLnByb3BzLnRpdGxlKSA/IHRoaXMucHJvcHMudGl0bGUgOiAnW1NldCB0aXRsZV0nO1xuICBcdGNvbnN0IHRoZW1lID0gKHRoaXMucHJvcHMudGhlbWUpID8gdGhpcy5wcm9wcy50aGVtZSA6IHRoZW1lQlc7XG4gIFx0Y29uc3QgcGFnZV90aXRsZSA9ICh0aGlzLnByb3BzLnBhZ2VfdGl0bGUpID8gdGhpcy5wcm9wcy5wYWdlX3RpdGxlIDogdGl0bGU7XG5cbiAgICByZXR1cm4gKFxuXHRcdDxNdWlUaGVtZVByb3ZpZGVyIHRoZW1lPXt0aGVtZX0+XG5cdFx0XHQ8Q3NzQmFzZWxpbmUgLz5cblx0ICAgIFx0PEVycm9yQm91bmRyeSBmcm9tPVwiL2NvcmUvYXBwL3Jvb3RcIj5cblx0XHRcdFx0PGRpdiBjbGFzc05hbWU9eyh0aGlzLnByb3BzLmJhclBvc2l0aW9uICYmIHRoaXMucHJvcHMuYmFyUG9zaXRpb24gPT09ICdmaXhlZCcpID8gY2xhc3Nlcy5yb290Rml4ZWQgOiBjbGFzc2VzLnJvb3R9PlxuXHRcdFx0XHRcdDxIZWxtZXQ+XG5cdFx0XHRcdFx0XHQ8dGl0bGU+e3BhZ2VfdGl0bGV9PC90aXRsZT5cblx0XHRcdFx0XHQ8L0hlbG1ldD5cdFx0XHRcdFx0XG5cdFx0XHRcdFx0PFVJQXBwQmFyIHBvc2l0aW9uPXt0aGlzLnByb3BzLmJhclBvc2l0aW9ufSBjbGFzc05hbWU9e2NsYXNzZXMuYXBwYmFyfT5cblx0XHRcdFx0XHRcdDxFcnJvckJvdW5kcnkgZnJvbT1cIi9jb3JlL2FwcC90b29sYmFyXCI+XHRcdFx0XHRcdFxuXHRcdFx0XHRcdFx0XHQ8VUlUb29sYmFyIHN0eWxlPXt0aGlzLnByb3BzLmJhclN0eWxlfT5cblx0XHRcdFx0XHRcdFx0XHR7dGhpcy5wcm9wcy5kcmF3ZXIgJiZcblx0XHRcdFx0XHRcdFx0XHQ8SWNvbkJ1dHRvbiBjb2xvcj1cInNlY29uZGFyeVwiIGFyaWEtbGFiZWw9XCJvcGVuIGRyYXdlclwiIG9uQ2xpY2s9e3RoaXMudG9nZ2xlRHJhd2VyfSBjbGFzc05hbWU9e2NsYXNzTmFtZXMoY2xhc3Nlcy5tZW51QnV0dG9uKX0+XG5cdFx0XHRcdFx0XHRcdFx0XHQ8VUlJY29uIGljb249eydkcmF3ZXInfS8+XG5cdFx0XHRcdFx0XHRcdFx0PC9JY29uQnV0dG9uPlx0XG5cdFx0XHRcdFx0XHRcdFx0fVx0ICAgICAgICAgIFxuXHRcdFx0XHRcdFx0XHRcdHt0aGlzLnByb3BzLnRpdGxlICYmIHRoaXMucHJvcHMubG9nbyA9PT0gbnVsbCAmJlxuXHRcdFx0XHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9e2NsYXNzZXMudGl0bGV9PlxuXHRcdFx0XHRcdFx0XHRcdFx0XHR7dGhpcy5wcm9wcy50aXRsZX1cblx0XHRcdFx0XHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdFx0XHR7dGhpcy5wcm9wcy5sb2dvICYmXG5cdFx0XHRcdFx0XHRcdFx0XHQ8TGluayB0bz17YC9gfT5cblx0XHRcdFx0XHRcdFx0XHRcdFx0PGltZyBhbHQ9J2xvZ28nIHNyYz17dGhpcy5wcm9wcy5sb2dvLnNyY30gY2xhc3NOYW1lPXt0aGlzLnByb3BzLmxvZ28uY2xhc3NOYW1lfS8+XG5cdFx0XHRcdFx0XHRcdFx0XHQ8L0xpbms+XG5cdFx0XHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0XHRcdHt0aGlzLnByb3BzLnRvb2xiYXIgJiYgdGhpcy5wcm9wcy50b29sYmFyLm1hcChpdGVtID0+XG5cdFx0XHRcdFx0XHRcdFx0XHRpdGVtXG5cdFx0XHRcdFx0XHRcdFx0KX1cblx0XHRcdFx0XHRcdFx0XHR7dGhpcy5wcm9wcy5tZW51ICYmIHRoaXMucHJvcHMubWVudS5tYXAoaXRlbSA9PiBcblx0XHRcdFx0XHRcdFx0XHRcdDxVSUJ1dHRvbiBrZXk9e2tleSsrfSBocmVmPXtpdGVtLmhyZWZ9IGNvbG9yPXsnc2Vjb25kYXJ5J30+e2l0ZW0ubmFtZX08L1VJQnV0dG9uPiAgICAgICAgICAgIFxuXHRcdFx0XHRcdFx0XHRcdCl9XG5cdFx0XHRcdFx0XHRcdDwvVUlUb29sYmFyPlxuXHRcdFx0XHRcdFx0PC9FcnJvckJvdW5kcnk+XHRcdFx0XHRcdFx0XHRcdFxuXHRcdFx0XHRcdFx0PFVJTG9hZGluZ0JhciBjbGFzc05hbWU9e2NsYXNzZXMubG9hZGluZ30gc2VydmVyPXt0aGlzLnByb3BzLnNlcnZlcn0vPlxuXHRcdFx0XHRcdDwvVUlBcHBCYXI+IFxuXHRcdFx0XHRcdDxVSVNuYWNrYmFyIHNlcnZlcj17dGhpcy5wcm9wcy5zZXJ2ZXJ9Lz5cblx0XHRcdFx0XHQ8RXJyb3JCb3VuZHJ5IGZyb209XCIvY29yZS9hcHAvZHJhd2VyXCI+XHRcdFx0XHRcdFxuXHRcdFx0XHRcdFx0PERyYXdlcj5cblx0XHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9e2NsYXNzZXMuZHJhd2VyUGFwZXJ9IHRhYkluZGV4PXswfSByb2xlPVwiYnV0dG9uXCI+XG5cdFx0XHRcdFx0XHRcdFx0e3RoaXMucHJvcHMuZHJhd2VyfVx0XG5cdFx0XHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHRcdFx0PC9EcmF3ZXI+XG5cdFx0XHRcdFx0PC9FcnJvckJvdW5kcnk+XG5cdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9e2NsYXNzZXMuYm9keX0+XG5cdFx0XHRcdFx0XHQ8RXJyb3JCb3VuZHJ5IGZyb209XCIvY29yZS9hcHAvY2hpbGRyZW5cIj5cblx0XHRcdFx0XHRcdFx0e3RoaXMucHJvcHMuY2hpbGRyZW59XG5cdFx0XHRcdFx0XHQ8L0Vycm9yQm91bmRyeT5cblx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0PC9kaXY+ICAgXHRcblx0XHRcdDwvRXJyb3JCb3VuZHJ5PlxuXHRcdDwvTXVpVGhlbWVQcm92aWRlcj5cbiAgICApO1xuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IHdpdGhTdHlsZXMoc3R5bGVzLCB7IHdpdGhUaGVtZTogdHJ1ZSB9KShVSUFwcCk7XG5cbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5cbmNsYXNzIEFwcExpc3QgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuXHRyZW5kZXIoKXtcblx0IFx0cmV0dXJuKFxuICBcdFx0dGhpcy5wcm9wcy5jaGlsZHJlblxuXHQgICAgKVxuICBcdH1cbn1cblxuQXBwTGlzdC5kZWZhdWx0UHJvcHMgPSB7XG4gIHR5cGU6ICdBcHBMaXN0Jyxcbn1cblxuZXhwb3J0IGRlZmF1bHQgQXBwTGlzdDtcbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgVUlDb21wb25lbnQgZnJvbSAnY29yZS9jb21wb25lbnRzL3VpX2NvbXBvbmVudCc7XG5pbXBvcnQgeyB3aXRoU3R5bGVzIH0gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvc3R5bGVzJztcbmltcG9ydCBBcHBCYXIgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvQXBwQmFyJztcblxuXG5jb25zdCBzdHlsZXMgPSB0aGVtZSA9PiAoe1xuICByb290OiB7XG4gIH0sXG59KVxuXG5jbGFzcyBVSUFwcEJhciBleHRlbmRzIFVJQ29tcG9uZW50IHtcbiAgY29uc3RydWN0b3IoKSB7XG4gICAgc3VwZXIoKTtcbiAgICB0aGlzLnN0YXRlID0ge1xuICAgIH1cbiAgfVxuXG4gIGdldERlZmF1bHRzKCl7XG4gICAgY29uc3QgZGVmYXVsdHMgPSB7XG4gICAgICBwb3NpdGlvbiAgOiAnc3RhdGljJyxcbiAgICAgIGNsYXNzTmFtZSA6ICcnLFxuICAgICAgY29sb3I6ICdwcmltYXJ5JywgICAgICBcbiAgICB9ICAgIFxuICAgIHJldHVybiBkZWZhdWx0cztcbiAgfVxuICBcbiAgY29tcG9uZW50RGlkTW91bnQoKSB7XG5cbiAgfVxuICBcbiAgcmVuZGVyKCkge1xuICAgIGNvbnN0IGNsYXNzZXMgPSB0aGlzLnByb3BzLmNsYXNzZXM7XG4gICAgcmV0dXJuIChcbiAgICAgIDxBcHBCYXIgY2xhc3NOYW1lPXtjbGFzc2VzLnJvb3R9IHBvc2l0aW9uPXt0aGlzLnN0YXRlLnBvc2l0aW9ufSBjbGFzc05hbWU9e3RoaXMuc3RhdGUuY2xhc3NOYW1lfSBjb2xvcj17dGhpcy5zdGF0ZS5jb2xvcn0+XG4gICAgICAgIHt0aGlzLnByb3BzLmNoaWxkcmVufVxuICAgICAgPC9BcHBCYXI+XG4gICAgKTtcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCB3aXRoU3R5bGVzKHN0eWxlcykoVUlBcHBCYXIpOyIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgVUlDb21wb25lbnQgZnJvbSAnY29yZS9jb21wb25lbnRzL3VpX2NvbXBvbmVudCc7XG5pbXBvcnQgeyB3aXRoU3R5bGVzIH0gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvc3R5bGVzJztcbmltcG9ydCBCdXR0b24gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvQnV0dG9uJztcbmltcG9ydCBJY29uQnV0dG9uIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL0ljb25CdXR0b24nO1xuaW1wb3J0IFVJSWNvbiBmcm9tICdjb3JlL2NvbXBvbmVudHMvaWNvbic7XG5cbmNvbnN0IHN0eWxlcyA9IFtdO1xuXG5jbGFzcyBVSUJ1dHRvbiBleHRlbmRzIFVJQ29tcG9uZW50IHtcbiAgY29uc3RydWN0b3IoKSB7XG4gICAgc3VwZXIoKTtcbiAgICB0aGlzLnN0YXRlID0ge1xuICAgIH1cbiAgfVxuXG4gIGdldERlZmF1bHRzKCl7XG4gICAgY29uc3QgZGVmYXVsdHMgPSB7XG4gICAgICBjbGFzc05hbWUgOiAnJywgICAgICBcbiAgICAgIGhyZWY6ICcnLFxuICAgICAgZGlzYWJsZWQ6IGZhbHNlLFxuICAgICAgb25DbGljazogbnVsbCxcbiAgICAgIGZhYjogZmFsc2UsXG4gICAgICBzdHlsZToge30sXG4gICAgfSAgICBcbiAgICByZXR1cm4gZGVmYXVsdHM7XG4gIH1cbiAgXG4gIGNvbXBvbmVudERpZE1vdW50KCkge1xuXG4gIH1cbiAgXG4gIHJlbmRlcigpIHtcbiAgICBjb25zdCBpY28gPSAoXCJpY29uXCIgaW4gdGhpcy5wcm9wcyAmJiB0aGlzLnByb3BzLmljb24gIT0gbnVsbCkgPyA8VUlJY29uIGljb249e3RoaXMucHJvcHMuaWNvbn0vPiA6IFwiXCI7XG4gICAgY29uc3QgY29sb3IgPSAodGhpcy5zdGF0ZS5jb2xvciA9PSBcImNvbnRyYXN0XCIpID8gXCJzZWNvbmRhcnlcIiA6IHRoaXMuc3RhdGUuY29sb3I7XG4gICAgcmV0dXJuIChcbiAgICAgICh0aGlzLnN0YXRlLmZhYiA/XG4gICAgICAgICAgPEJ1dHRvbiByYWlzZWQ9eyh0aGlzLnN0YXRlLmZhYikgPyBcInJhaXNlZFwiIDogXCJmbGF0XCJ9IGNvbG9yPXt0aGlzLnN0YXRlLmNvbG9yfSBocmVmPXt0aGlzLnN0YXRlLmhyZWZ9IGNsYXNzTmFtZT17dGhpcy5zdGF0ZS5jbGFzc05hbWV9IG9uQ2xpY2s9e3RoaXMuc3RhdGUub25DbGlja30gZGlzYWJsZWQ9eyh0aGlzLnByb3BzLmRpc2FibGVkKSA/IHRoaXMucHJvcHMuZGlzYWJsZWQgOiB0aGlzLnN0YXRlLmRpc2FibGVkfSBmYWIgc3R5bGU9e3RoaXMuc3RhdGUuc3R5bGV9PlxuICAgICAgICAgICAge2ljb31cbiAgICAgICAgICA8L0J1dHRvbj5cbiAgICAgIDpcbiAgICAgICAgKGljbyAmJiB0aGlzLnByb3BzLnJlbmRlciA9PT0gJ2ljb24nKSA/XG4gICAgICAgICAgPEljb25CdXR0b24gY2xhc3NOYW1lPXt0aGlzLnN0YXRlLmNsYXNzTmFtZX0gZGlzYWJsZWQ9e3RoaXMucHJvcHMuZGlzYWJsZWR9IGNvbG9yPXt0aGlzLnN0YXRlLmNvbG9yfSBvbkNsaWNrPXt0aGlzLnN0YXRlLm9uQ2xpY2t9IHN0eWxlPXt0aGlzLnN0YXRlLnN0eWxlfT5cbiAgICAgICAgICAgIHtpY299XG4gICAgICAgICAgPC9JY29uQnV0dG9uPiAgICAgICAgICAgICBcbiAgICAgICAgOiAgICAgIFxuICAgICAgICAgIDxCdXR0b24gcmFpc2VkPXsodGhpcy5zdGF0ZS5mYWIpID8gXCJyYWlzZWRcIiA6IFwiZmxhdFwifSBjb2xvcj17dGhpcy5zdGF0ZS5jb2xvcn0gaHJlZj17dGhpcy5zdGF0ZS5ocmVmfSBjbGFzc05hbWU9e3RoaXMuc3RhdGUuY2xhc3NOYW1lfSBvbkNsaWNrPXt0aGlzLnN0YXRlLm9uQ2xpY2t9IGRpc2FibGVkPXsodGhpcy5wcm9wcy5kaXNhYmxlZCkgPyB0aGlzLnByb3BzLmRpc2FibGVkIDogdGhpcy5zdGF0ZS5kaXNhYmxlZH0gc3R5bGU9e3RoaXMuc3RhdGUuc3R5bGV9PlxuICAgICAgICAgICAge2ljbyAmJlxuICAgICAgICAgICAgICBpY29cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHt0aGlzLnByb3BzLmNoaWxkcmVufVxuICAgICAgICAgIDwvQnV0dG9uPlxuICAgICAgKVxuICAgIClcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCB3aXRoU3R5bGVzKHN0eWxlcykoVUlCdXR0b24pOyIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgRXJyb3JCb3VuZHJ5IGZyb20gJ2NvcmUvY29tcG9uZW50cy9lcnJvcic7XG5pbXBvcnQgTG9hZGluZyBmcm9tICdjb3JlL2NvbXBvbmVudHMvbG9hZGluZy5qcyc7XG5cbmNvbnN0IGNvbXBvbmVudCA9IE1vZHVsZUNvbXBvbmVudCA9PlxuXHRjbGFzcyBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG5cdFx0cmVuZGVyKCl7XG5cdFx0XHRjb25zdCB0aXRsZSA9IChcInRpdGxlXCIgaW4gdGhpcy5wcm9wcykgPyB0aGlzLnByb3BzLnRpdGxlIDogbnVsbDtcblx0XHRcdGNvbnN0IHBoID0gKFwicGxhY2Vob2xkZXJcIiBpbiB0aGlzLnByb3BzKSA/IHRoaXMucHJvcHMucGxhY2Vob2xkZXIgOiB7fTtcblx0XHRcdGNvbnN0IHBoVyA9IChwaC53aWR0aCkgPyBwaC53aWR0aCA6ICcxMDAlJztcblx0XHRcdGNvbnN0IHBoSCA9IChwaC5oZWlnaHQpID8gcGguaGVpZ2h0IDogJzI1MCc7XG5cblx0XHRcdHZhciBsb2FkaW5nID0gZmFsc2U7XG5cdFx0XHRpZihcImRhdGFcIiBpbiB0aGlzLnByb3BzKXtcblx0XHRcdFx0aWYoIXRoaXMucHJvcHMuZGF0YSB8fCB0aGlzLnByb3BzLmRhdGEgPT0gbnVsbCl7XG5cdFx0XHRcdFx0bG9hZGluZyA9IHRydWU7XG5cdFx0XHRcdH1cblx0XHRcdH1cblxuXHRcdFx0cmV0dXJuIChcblx0XHRcdFx0PEVycm9yQm91bmRyeSBmcm9tPXt0aXRsZX0gc3R5bGU9e3t3aWR0aDonMTAwJSd9fT5cblx0XHRcdFx0XHR7bG9hZGluZyAmJiA8ZGl2PmxvYWRpbmc8L2Rpdj59XG5cdFx0XHRcdFx0eyFsb2FkaW5nICYmIDxNb2R1bGVDb21wb25lbnQgey4uLnRoaXMucHJvcHN9Lz59XG5cdFx0XHRcdDwvRXJyb3JCb3VuZHJ5PlxuXHRcdFx0KTtcblx0XHR9XG5cdH1cblxuZXhwb3J0IGRlZmF1bHQgY29tcG9uZW50OyIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5cbmNsYXNzIEVycm9yQm91bmRhcnkgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgIHN1cGVyKHByb3BzKTtcbiAgICB0aGlzLnN0YXRlID0geyBcbiAgICAgIGhhc0Vycm9yOiBmYWxzZSwgXG4gICAgICBlcnJvcnMgOiBbXSxcbiAgICB9O1xuICB9XG5cbiAgY29tcG9uZW50RGlkQ2F0Y2goZXJyb3IsIGluZm8pIHtcbiAgICB2YXIgZXJyb3JzID0gdGhpcy5zdGF0ZS5lcnJvcnM7XG4gICAgLy9jb25zb2xlLmRlYnVnKGVycm9yKTtcbiAgICBlcnJvcnMucHVzaChlcnJvcik7XG4gICAgdGhpcy5zZXRTdGF0ZSh7IGhhc0Vycm9yOiB0cnVlLCBlcnJvcnM6IGVycm9yc30pO1xuXG4gICAgaWYod2luZG93Ll9fYXBpKVxuICAgICAgd2luZG93Ll9fYXBpLnNldEVycm9yKGVycm9ycy50b1N0cmluZygpKTtcbiAgfVxuXG4gIHJlbmRlcigpIHtcbiAgICBjb25zdCByZWYgPSAodGhpcy5wcm9wcy5mcm9tKSA/IHRoaXMucHJvcHMuZnJvbSA6IFwiLVwiO1xuICAgIGNvbnN0IGVycm9ycyA9IHRoaXMuc3RhdGUuZXJyb3JzO1xuICAgIHZhciBrZXkgPSAwO1xuICAgIGlmICh0aGlzLnN0YXRlLmhhc0Vycm9yKSB7XG4gICAgICByZXR1cm4gIDxkaXYgc3R5bGU9e3tjb2xvcjoncmVkJywgbWFyZ2luOiAnMHB4JywgcGFkZGluZzonMHB4JywgYm9yZGVyOiAnMXB4IHNvbGlkIHJlZCd9fT5cbiAgICAgICAgICAgICAgICAgIDxkaXYgc3R5bGU9e3tmb250U2l6ZTonMS4yZW0nfX0+PGI+RXJyb3IgaW4gY29tcG9uZW50czwvYj48L2Rpdj5cbiAgICAgICAgICAgICAgICAgIDxkaXYgc3R5bGU9e3tmb250U2l6ZTonMC45ZW0nfX0+UmVmZXJlbmNlOiB7cmVmfTwvZGl2PlxuICAgICAgICAgICAgICAgICAgPGhyLz5cbiAgICAgICAgICAgICAgICAgIHtlcnJvcnMubWFwKChlKSA9PlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGtleT17a2V5Kyt9IHN0eWxlPXt7Zm9udFNpemU6JzAuOGVtJ319PntlLnRvU3RyaW5nKCl9PC9kaXY+XG4gICAgICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgIDwvZGl2PjtcbiAgICB9XG4gICAgcmV0dXJuIHRoaXMucHJvcHMuY2hpbGRyZW47XG4gIH1cbn1cblxuXG5leHBvcnQgZGVmYXVsdCBFcnJvckJvdW5kYXJ5OyIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgVUlDb21wb25lbnQgZnJvbSAnY29yZS9jb21wb25lbnRzL3VpX2NvbXBvbmVudC5qcyc7XG5pbXBvcnQgeyB3aXRoU3R5bGVzIH0gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvc3R5bGVzJztcbmltcG9ydCBTZW5kSWNvbiBmcm9tICdAbWF0ZXJpYWwtdWkvaWNvbnMvU2VuZCc7XG5pbXBvcnQgUmVwbHlJY29uIGZyb20gJ0BtYXRlcmlhbC11aS9pY29ucy9SZXBseSc7XG5pbXBvcnQgUmVwbHlBbGxJY29uIGZyb20gJ0BtYXRlcmlhbC11aS9pY29ucy9SZXBseUFsbCc7XG5pbXBvcnQgRm9yd2FyZEljb24gZnJvbSAnQG1hdGVyaWFsLXVpL2ljb25zL0ZvcndhcmQnO1xuaW1wb3J0IERyYWZ0c0ljb24gZnJvbSAnQG1hdGVyaWFsLXVpL2ljb25zL0RyYWZ0cyc7XG5pbXBvcnQgQ2FuY2VsSWNvbiBmcm9tICdAbWF0ZXJpYWwtdWkvaWNvbnMvQ2FuY2VsJztcbmltcG9ydCBBdHRhY2hGaWxlSWNvbiBmcm9tICdAbWF0ZXJpYWwtdWkvaWNvbnMvQXR0YWNoRmlsZSc7XG5pbXBvcnQgQXJjaGl2ZUljb24gZnJvbSAnQG1hdGVyaWFsLXVpL2ljb25zL0FyY2hpdmUnO1xuaW1wb3J0IERlbGV0ZUljb24gZnJvbSAnQG1hdGVyaWFsLXVpL2ljb25zL0RlbGV0ZSc7XG5pbXBvcnQgU3BhbUljb24gZnJvbSAnQG1hdGVyaWFsLXVpL2ljb25zL0J1Z1JlcG9ydCc7XG5pbXBvcnQgRGVidWdJY29uIGZyb20gJ0BtYXRlcmlhbC11aS9pY29ucy9CdWdSZXBvcnQnO1xuaW1wb3J0IENvbnRhY3RzSWNvbiBmcm9tICdAbWF0ZXJpYWwtdWkvaWNvbnMvQ29udGFjdHMnO1xuaW1wb3J0IERvbmVJY29uIGZyb20gJ0BtYXRlcmlhbC11aS9pY29ucy9Eb25lJztcbmltcG9ydCBIb21lSWNvbiBmcm9tICdAbWF0ZXJpYWwtdWkvaWNvbnMvSG9tZSc7XG5pbXBvcnQgU2VhcmNoSWNvbiBmcm9tICdAbWF0ZXJpYWwtdWkvaWNvbnMvU2VhcmNoJztcbmltcG9ydCBOb3RpZmljYXRpb25JY29uIGZyb20gJ0BtYXRlcmlhbC11aS9pY29ucy9Ob3RpZmljYXRpb25zJztcbmltcG9ydCBNZXNzYWdlSWNvbiBmcm9tICdAbWF0ZXJpYWwtdWkvaWNvbnMvRW1haWwnO1xuaW1wb3J0IEZhdm9yaXRlSWNvbiBmcm9tICdAbWF0ZXJpYWwtdWkvaWNvbnMvRmF2b3JpdGUnO1xuaW1wb3J0IENoYXRJY29uIGZyb20gJ0BtYXRlcmlhbC11aS9pY29ucy9DaGF0QnViYmxlJztcbmltcG9ydCBSZXR3ZWV0SWNvbiBmcm9tICdAbWF0ZXJpYWwtdWkvaWNvbnMvQ2FjaGVkJztcbmltcG9ydCBFZGl0SWNvbiBmcm9tICdAbWF0ZXJpYWwtdWkvaWNvbnMvRWRpdCc7XG5pbXBvcnQgQ2xvc2VJY29uIGZyb20gJ0BtYXRlcmlhbC11aS9pY29ucy9DbG9zZSc7XG5pbXBvcnQgTm90Rm91bmRJY29uIGZyb20gJ0BtYXRlcmlhbC11aS9pY29ucy9CbG9jayc7XG5pbXBvcnQgRHJhd2VySWNvbiBmcm9tICdAbWF0ZXJpYWwtdWkvaWNvbnMvTWVudSc7XG5pbXBvcnQgQmxvZ0ljb24gZnJvbSAnQG1hdGVyaWFsLXVpL2ljb25zL0luc2VydENvbW1lbnQnO1xuaW1wb3J0IEhpc3RvcnlJY29uIGZyb20gJ0BtYXRlcmlhbC11aS9pY29ucy9IaXN0b3J5JztcbmltcG9ydCBTZXR0aW5nc0ljb24gZnJvbSAnQG1hdGVyaWFsLXVpL2ljb25zL1NldHRpbmdzQXBwbGljYXRpb25zJztcbmltcG9ydCBTYXZlSWNvbiBmcm9tICdAbWF0ZXJpYWwtdWkvaWNvbnMvU2F2ZSc7XG5pbXBvcnQgTWVudUljb24gZnJvbSAnQG1hdGVyaWFsLXVpL2ljb25zL01vcmVWZXJ0JztcbmltcG9ydCBRdWVzdGlvbkljb24gZnJvbSAnQG1hdGVyaWFsLXVpL2ljb25zL0hlbHAnO1xuaW1wb3J0IE9LSWNvbiBmcm9tICdAbWF0ZXJpYWwtdWkvaWNvbnMvRG9uZSc7XG5cbmNvbnN0IHN0eWxlcyA9IFtdO1xuXG5jbGFzcyBVSUljb24gZXh0ZW5kcyBVSUNvbXBvbmVudCB7XG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIHN1cGVyKCk7XG4gICAgdGhpcy5zdGF0ZSA9IHtcbiAgICAgIGNsYXNzTmFtZTogJycsXG4gICAgfVxuICB9XG5cbiAgZ2V0RGVmYXVsdHMoKXtcbiAgICBjb25zdCBkZWZhdWx0cyA9IHtcbiAgICAgIGNsYXNzTmFtZTogJycsXG4gICAgfSAgICBcbiAgICByZXR1cm4gZGVmYXVsdHM7XG4gIH1cbiAgXG4gIGdldEljb24oaWNvbil7XG4gICAgaWYoIWljb24pIHJldHVybiA8Tm90Rm91bmRJY29uIGNsYXNzTmFtZT17dGhpcy5zdGF0ZS5jbGFzc05hbWV9Lz47XG5cbiAgICBzd2l0Y2goaWNvbil7XG4gICAgICBjYXNlIFwic2VuZFwiOlxuICAgICAgICByZXR1cm4gPFNlbmRJY29uIGNsYXNzTmFtZT17dGhpcy5zdGF0ZS5jbGFzc05hbWV9Lz47XG4gICAgICBjYXNlIFwicmVwbHlcIjpcbiAgICAgICAgcmV0dXJuIDxSZXBseUljb24gY2xhc3NOYW1lPXt0aGlzLnN0YXRlLmNsYXNzTmFtZX0vPjtcbiAgICAgIGNhc2UgXCJyZXBseV9hbGxcIjpcbiAgICAgICAgcmV0dXJuIDxSZXBseUFsbEljb24gY2xhc3NOYW1lPXt0aGlzLnN0YXRlLmNsYXNzTmFtZX0vPjtcbiAgICAgIGNhc2UgXCJmb3J3YXJkXCI6XG4gICAgICAgIHJldHVybiA8Rm9yd2FyZEljb24gY2xhc3NOYW1lPXt0aGlzLnN0YXRlLmNsYXNzTmFtZX0vPjtcbiAgICAgIGNhc2UgXCJkcmFmdFwiOlxuICAgICAgICByZXR1cm4gPERyYWZ0c0ljb24gY2xhc3NOYW1lPXt0aGlzLnN0YXRlLmNsYXNzTmFtZX0vPjtcbiAgICAgIGNhc2UgXCJjYW5jZWxcIjpcbiAgICAgICAgcmV0dXJuIDxDYW5jZWxJY29uIGNsYXNzTmFtZT17dGhpcy5zdGF0ZS5jbGFzc05hbWV9Lz47XG4gICAgICBjYXNlIFwiYXR0YWNoXCI6XG4gICAgICAgIHJldHVybiA8QXR0YWNoRmlsZUljb24gY2xhc3NOYW1lPXt0aGlzLnN0YXRlLmNsYXNzTmFtZX0vPjtcbiAgICAgIGNhc2UgXCJkZWxldGVcIjpcbiAgICAgICAgcmV0dXJuIDxEZWxldGVJY29uIGNsYXNzTmFtZT17dGhpcy5zdGF0ZS5jbGFzc05hbWV9Lz47XG4gICAgICBjYXNlIFwiYXJjaGl2ZVwiOlxuICAgICAgICByZXR1cm4gPEFyY2hpdmVJY29uIGNsYXNzTmFtZT17dGhpcy5zdGF0ZS5jbGFzc05hbWV9Lz47XG4gICAgICBjYXNlIFwic3BhbVwiOlxuICAgICAgICByZXR1cm4gPFNwYW1JY29uIGNsYXNzTmFtZT17dGhpcy5zdGF0ZS5jbGFzc05hbWV9Lz47ICAgICAgIFxuICAgICAgY2FzZSBcImNvbnRhY3RzXCI6XG4gICAgICAgIHJldHVybiA8Q29udGFjdHNJY29uIGNsYXNzTmFtZT17dGhpcy5zdGF0ZS5jbGFzc05hbWV9Lz47ICAgICAgIFxuICAgICAgY2FzZSBcImRvbmVcIjpcbiAgICAgICAgcmV0dXJuIDxEb25lSWNvbiBjbGFzc05hbWU9e3RoaXMuc3RhdGUuY2xhc3NOYW1lfS8+OyAgICAgICBcbiAgICAgIGNhc2UgXCJob21lXCI6XG4gICAgICAgIHJldHVybiA8SG9tZUljb24gY2xhc3NOYW1lPXt0aGlzLnN0YXRlLmNsYXNzTmFtZX0vPjsgICAgICAgXG4gICAgICBjYXNlIFwic2VhcmNoXCI6XG4gICAgICAgIHJldHVybiA8U2VhcmNoSWNvbiBjbGFzc05hbWU9e3RoaXMuc3RhdGUuY2xhc3NOYW1lfS8+OyAgICAgICBcbiAgICAgIGNhc2UgXCJub3RpZmljYXRpb25cIjpcbiAgICAgICAgcmV0dXJuIDxOb3RpZmljYXRpb25JY29uIGNsYXNzTmFtZT17dGhpcy5zdGF0ZS5jbGFzc05hbWV9Lz47ICAgICAgIFxuICAgICAgY2FzZSBcIm1lc3NhZ2VcIjpcbiAgICAgICAgcmV0dXJuIDxNZXNzYWdlSWNvbiBjbGFzc05hbWU9e3RoaXMuc3RhdGUuY2xhc3NOYW1lfS8+OyAgICAgICBcbiAgICAgIGNhc2UgXCJmYXZvcml0ZVwiOlxuICAgICAgICByZXR1cm4gPEZhdm9yaXRlSWNvbiBjbGFzc05hbWU9e3RoaXMuc3RhdGUuY2xhc3NOYW1lfS8+OyAgICAgICBcbiAgICAgIGNhc2UgXCJyZXBseS10d2VldFwiOlxuICAgICAgICByZXR1cm4gPENoYXRJY29uIGNsYXNzTmFtZT17dGhpcy5zdGF0ZS5jbGFzc05hbWV9Lz47ICAgICAgIFxuICAgICAgY2FzZSBcInJldHdlZXRcIjpcbiAgICAgICAgcmV0dXJuIDxSZXR3ZWV0SWNvbiBjbGFzc05hbWU9e3RoaXMuc3RhdGUuY2xhc3NOYW1lfS8+OyAgICAgICBcbiAgICAgIGNhc2UgXCJjb21wb3NlXCI6XG4gICAgICAgIHJldHVybiA8RWRpdEljb24gY2xhc3NOYW1lPXt0aGlzLnN0YXRlLmNsYXNzTmFtZX0vPjsgICAgICAgXG4gICAgICBjYXNlIFwiY2xvc2VcIjpcbiAgICAgICAgcmV0dXJuIDxDbG9zZUljb24gY2xhc3NOYW1lPXt0aGlzLnN0YXRlLmNsYXNzTmFtZX0vPjsgICAgICAgXG4gICAgICBjYXNlIFwiZHJhd2VyXCI6XG4gICAgICAgIHJldHVybiA8RHJhd2VySWNvbiBjbGFzc05hbWU9e3RoaXMuc3RhdGUuY2xhc3NOYW1lfS8+OyAgICAgICBcbiAgICAgIGNhc2UgXCJibG9nXCI6XG4gICAgICAgIHJldHVybiA8QmxvZ0ljb24gY2xhc3NOYW1lPXt0aGlzLnN0YXRlLmNsYXNzTmFtZX0vPjsgICAgICAgXG4gICAgICBjYXNlIFwiaGlzdG9yeVwiOlxuICAgICAgICByZXR1cm4gPEhpc3RvcnlJY29uIGNsYXNzTmFtZT17dGhpcy5zdGF0ZS5jbGFzc05hbWV9Lz47ICAgICAgIFxuICAgICAgY2FzZSBcInNldHRpbmdzXCI6XG4gICAgICAgIHJldHVybiA8U2V0dGluZ3NJY29uIGNsYXNzTmFtZT17dGhpcy5zdGF0ZS5jbGFzc05hbWV9Lz47ICAgICAgIFxuICAgICAgY2FzZSBcImRlYnVnXCI6XG4gICAgICAgIHJldHVybiA8RGVidWdJY29uIGNsYXNzTmFtZT17dGhpcy5zdGF0ZS5jbGFzc05hbWV9Lz47ICAgICAgIFxuICAgICAgY2FzZSBcInNhdmVcIjpcbiAgICAgICAgcmV0dXJuIDxTYXZlSWNvbiBjbGFzc05hbWU9e3RoaXMuc3RhdGUuY2xhc3NOYW1lfS8+OyAgICAgICBcbiAgICAgIGNhc2UgXCJtZW51XCI6XG4gICAgICAgIHJldHVybiA8TWVudUljb24gY2xhc3NOYW1lPXt0aGlzLnN0YXRlLmNsYXNzTmFtZX0vPjsgICAgICAgXG4gICAgICBjYXNlIFwicXVlc3Rpb25cIjpcbiAgICAgICAgcmV0dXJuIDxRdWVzdGlvbkljb24gY2xhc3NOYW1lPXt0aGlzLnN0YXRlLmNsYXNzTmFtZX0vPjsgICAgICAgXG4gICAgICBjYXNlIFwib2tcIjpcbiAgICAgICAgcmV0dXJuIDxPS0ljb24gY2xhc3NOYW1lPXt0aGlzLnN0YXRlLmNsYXNzTmFtZX0vPjsgICAgICAgXG4gICAgICBkZWZhdWx0OlxuICAgICAgICByZXR1cm4gPE5vdEZvdW5kSWNvbiBjbGFzc05hbWU9e3RoaXMuc3RhdGUuY2xhc3NOYW1lfS8+O1xuICAgIH1cbiAgfVxuXG4gIHJlbmRlcigpIHtcbiAgICBjb25zdCBpY28gPSB0aGlzLmdldEljb24odGhpcy5wcm9wcy5pY29uKTtcbiAgICByZXR1cm4gKFxuICAgICAgaWNvXG4gICAgKVxuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IHdpdGhTdHlsZXMoc3R5bGVzKShVSUljb24pO1xuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcblxuY2xhc3MgQ29tcG9uZW50IGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcblxuICByZW5kZXIoKSB7XG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXYgc3R5bGU9e3tcdHpJbmRleDogOTk5OSwgcG9zaXRpb246J2Fic29sdXRlJywgdG9wOicwcHgnLCBcbiAgICAgICAgICAgICAgcmlnaHQ6JzBweCcsIGxlZnQ6JzBweCcsIGJvdHRvbTonMHB4JywgIFxuICAgICAgXHRcdFx0XHRiYWNrZ3JvdW5kQ29sb3I6JyMwMDAwMDA2MCd9fT5cbiAgICAgIDwvZGl2PlxuICAgICAgKTtcbiAgfVxufVxuXG5cbmV4cG9ydCBkZWZhdWx0IENvbXBvbmVudDsiLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IFVJQ29tcG9uZW50IGZyb20gJ2NvcmUvY29tcG9uZW50cy91aV9jb21wb25lbnQuanMnO1xuaW1wb3J0IHsgd2l0aFN0eWxlcyB9IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL3N0eWxlcyc7XG5pbXBvcnQgeyBMaW5lYXJQcm9ncmVzcyB9IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL0xpbmVhclByb2dyZXNzJztcblxuY29uc3Qgc3R5bGVzID0gW3tcbn1dO1xuXG5jbGFzcyBVSUxvYWRpbmdCYXIgZXh0ZW5kcyBVSUNvbXBvbmVudCB7XG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIHN1cGVyKCk7XG4gICAgdGhpcy5zdGF0ZSA9IHtcbiAgICAgIGxvYWRpbmc6IGZhbHNlLFxuICAgIH1cbiAgfVxuXG4gIGdldERlZmF1bHRzKCl7XG4gICAgY29uc3QgZGVmYXVsdHMgPSB7XG4gICAgICBjbGFzc05hbWU6ICcnLFxuICAgIH0gICAgXG4gICAgcmV0dXJuIGRlZmF1bHRzO1xuICB9XG4gIFxuICBjb21wb25lbnREaWRNb3VudCgpe1xuICAgIGNvbnN0ICR0aGlzID0gdGhpcztcblxuICAgIGlmKHRoaXMucHJvcHMuc2VydmVyKXtcbiAgICAgIHRoaXMucHJvcHMuc2VydmVyLm9uU3RhcnRMb2FkaW5nID0gZnVuY3Rpb24oKXtcbiAgICAgICAgJHRoaXMuc2V0U3RhdGUoe2xvYWRpbmc6IHRydWV9KTtcbiAgICAgIH1cbiAgICAgIHRoaXMucHJvcHMuc2VydmVyLm9uU3RvcExvYWRpbmcgPSBmdW5jdGlvbigpe1xuICAgICAgICAkdGhpcy5zZXRTdGF0ZSh7bG9hZGluZzogZmFsc2V9KTtcbiAgICAgIH1cbiAgICAgIHRoaXMucHJvcHMuc2VydmVyLm9uRXJyb3IgPSBmdW5jdGlvbihlcnIpe1xuICAgICAgICAkdGhpcy5zZXRTdGF0ZSh7bG9hZGluZzogZmFsc2V9KTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICByZW5kZXIoKSB7XG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXYgY2xhc3NOYW1lPXt0aGlzLnByb3BzLmNsYXNzTmFtZX0+XG4gICAgICAgIHt0aGlzLnN0YXRlLmxvYWRpbmcgJiZcbiAgICAgICAgICA8TGluZWFyUHJvZ3Jlc3MgY2xhc3NOYW1lPXt0aGlzLnByb3BzLmNsYXNzTmFtZX0gY29sb3I9J2FjY2VudCcvPlxuICAgICAgICB9XG4gICAgICA8L2Rpdj5cbiAgICApO1xuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IHdpdGhTdHlsZXMoc3R5bGVzKShVSUxvYWRpbmdCYXIpOyIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyB3aXRoU3R5bGVzIH0gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvc3R5bGVzJztcblxuY29uc3Qgc3R5bGVzID0gdGhlbWUgPT4gKHtcblx0cm9vdCA6IHtcblx0XHR3aWR0aDogJzEwMCUnLFxuXHRcdGJvcmRlcjogJzFweCBkYXNoZWQgZ3JheScsXG5cdFx0YmFja2dyb3VuZENvbG9yOiAnI2UwZTBlMDY2Jyxcblx0XHR0ZXh0QWxpZ246ICdjZW50ZXInLFxuXHRcdGNvbG9yOiAnYmxhY2snLFxuXHRcdGZvbnRTaXplOiAnMS4xcmVtJyxcblx0XHRmb250V2VpZ2h0OiAnYm9sZCcsXG5cdFx0cGFkZGluZ1RvcDogJzEwcHgnLFxuXHRcdGJveFNpemluZzogJ2JvcmRlci1ib3gnLFxuXHR9LFxufSk7XG5jbGFzcyBNb2NrdXBCbG9jayBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7IFxuICByZW5kZXIoKSB7XG4gIFx0Y29uc3QgdGl0bGUgPSAodGhpcy5wcm9wcy50aXRsZSkgPyB0aGlzLnByb3BzLnRpdGxlIDogJ01PQ0sgQkxPQ0snO1xuICBcdGNvbnN0IGNsYXNzZXMgPSB0aGlzLnByb3BzLmNsYXNzZXM7XG4gIFx0Y29uc3QgaGVpZ2h0ID0gKHRoaXMucHJvcHMuaGVpZ2h0KSA/IHRoaXMucHJvcHMuaGVpZ2h0IDogJzMwcHgnO1xuICAgIHJldHVybiAoXG4gICAgICA8ZGl2IGNsYXNzTmFtZT17Y2xhc3Nlcy5yb290fSBzdHlsZT17e2hlaWdodDogaGVpZ2h0LCB3aWR0aDonMTAwJSd9fT57dGl0bGV9PC9kaXY+XG4gICAgKTtcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCB3aXRoU3R5bGVzKHN0eWxlcykoTW9ja3VwQmxvY2spOyIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgVUlDb21wb25lbnQgZnJvbSAnY29yZS9jb21wb25lbnRzL3VpX2NvbXBvbmVudC5qcyc7XG5pbXBvcnQgU25hY2tiYXIgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvU25hY2tiYXInO1xuXG5jbGFzcyBVSVNuYWNrYmFyIGV4dGVuZHMgVUlDb21wb25lbnQge1xuICBjb25zdHJ1Y3RvcigpIHtcbiAgICBzdXBlcigpO1xuICAgIHRoaXMuc3RhdGUgPSB7XG4gICAgICBvcGVuOiBmYWxzZSxcbiAgICAgIG1lc3NhZ2U6ICcnLFxuICAgIH1cblxuICAgIHRoaXMuaGFuZGxlUmVxdWVzdENsb3NlID0gdGhpcy5oYW5kbGVSZXF1ZXN0Q2xvc2UuYmluZCh0aGlzKTtcbiAgfVxuXG4gIGdldERlZmF1bHRzKCl7XG4gICAgY29uc3QgZGVmYXVsdHMgPSB7XG4gICAgfSAgICBcbiAgICByZXR1cm4gZGVmYXVsdHM7XG4gIH1cblxuICBoYW5kbGVSZXF1ZXN0Q2xvc2UoZXZlbnQsIHJlYXNvbil7XG4gICAgdGhpcy5zZXRTdGF0ZSh7IG9wZW46IGZhbHNlLCBtZXNzYWdlIDogJycgfSk7XG4gIH07XG4gIFxuICBjb21wb25lbnREaWRNb3VudCgpe1xuICAgIGNvbnN0ICR0aGlzID0gdGhpcztcblxuICAgIGlmKHRoaXMucHJvcHMuc2VydmVyKXtcbiAgICAgIHRoaXMucHJvcHMuc2VydmVyLm9uRXJyb3IgPSBmdW5jdGlvbihlcnIpe1xuICAgICAgICAkdGhpcy5zZXRTdGF0ZSh7b3BlbjogdHJ1ZSwgbWVzc2FnZTogZXJyLnRvU3RyaW5nKCl9KTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICByZW5kZXIoKSB7XG4gICAgcmV0dXJuIChcbiAgICAgIDxTbmFja2JhclxuICAgICAgICBhbmNob3JPcmlnaW49e3tcbiAgICAgICAgICB2ZXJ0aWNhbDogJ2JvdHRvbScsXG4gICAgICAgICAgaG9yaXpvbnRhbDogJ2xlZnQnLFxuICAgICAgICB9fVxuICAgICAgICBvcGVuPXt0aGlzLnN0YXRlLm9wZW59XG4gICAgICAgIGF1dG9IaWRlRHVyYXRpb249ezYwMDB9XG4gICAgICAgIG9uUmVxdWVzdENsb3NlPXt0aGlzLmhhbmRsZVJlcXVlc3RDbG9zZX1cbiAgICAgICAgU25hY2tiYXJDb250ZW50UHJvcHM9e3tcbiAgICAgICAgICAnYXJpYS1kZXNjcmliZWRieSc6ICdtZXNzYWdlLWlkJyxcbiAgICAgICAgfX1cbiAgICAgICAgbWVzc2FnZT17U3RyaW5nKHRoaXMuc3RhdGUubWVzc2FnZSl9XG4gICAgICAvPlxuICAgICk7XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgVUlTbmFja2JhcjsiLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IFVJQ29tcG9uZW50IGZyb20gJ2NvcmUvY29tcG9uZW50cy91aV9jb21wb25lbnQnO1xuaW1wb3J0IHsgd2l0aFN0eWxlcyB9IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL3N0eWxlcyc7XG5pbXBvcnQgVG9vbGJhciBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9Ub29sYmFyJztcblxuY29uc3Qgc3R5bGVzID0gdGhlbWUgPT4gKHtcbiAgcm9vdDoge1xuICB9LFxufSlcblxuY2xhc3MgVUlUb29sYmFyIGV4dGVuZHMgVUlDb21wb25lbnQge1xuICBjb25zdHJ1Y3RvcigpIHtcbiAgICBzdXBlcigpO1xuICAgIHRoaXMuc3RhdGUgPSB7XG4gICAgfVxuICB9XG5cbiAgZ2V0RGVmYXVsdHMoKXtcbiAgICBjb25zdCBkZWZhdWx0cyA9IHtcbiAgICAgIGNsYXNzTmFtZSA6ICcnLCAgICAgIFxuICAgIH0gICAgXG4gICAgcmV0dXJuIGRlZmF1bHRzO1xuICB9XG4gIFxuICBjb21wb25lbnREaWRNb3VudCgpIHtcblxuICB9XG4gIFxuICByZW5kZXIoKSB7XG4gICAgY29uc3QgY2xhc3NlcyA9IHRoaXMucHJvcHMuY2xhc3NlcztcbiAgICByZXR1cm4gKFxuICAgICAgPFRvb2xiYXIgY2xhc3NOYW1lPXtjbGFzc2VzLnJvb3R9IHN0eWxlPXt0aGlzLnByb3BzLnN0eWxlfT5cbiAgICAgICAge3RoaXMucHJvcHMuY2hpbGRyZW59XG4gICAgICA8L1Rvb2xiYXI+XG4gICAgKTtcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCB3aXRoU3R5bGVzKHN0eWxlcykoVUlUb29sYmFyKTsiLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuXG5jbGFzcyBVSUNvbXBvbmVudCBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gIGdldERlZmF1bHRzKCl7fVxuXG4gIGluaXRVSSgpIHtcbiAgICBjb25zdCBkZWZhdWx0cyA9IHRoaXMuZ2V0RGVmYXVsdHMoKTsgICAgXG4gICAgZm9yKHZhciBkZWYgaW4gZGVmYXVsdHMpe1xuICAgICAgdGhpcy5zdGF0ZVtkZWZdID0gKHRoaXMucHJvcHNbZGVmXSkgPyB0aGlzLnByb3BzW2RlZl0gOiBkZWZhdWx0c1tkZWZdO1xuICAgIH1cbiAgfVxuXG4gIGNvbXBvbmVudFdpbGxNb3VudCgpe1xuICAgIHRoaXMuaW5pdFVJKCk7XG4gIH1cbiAgXG4gIHJlbmRlcigpIHtcbiAgICByZXR1cm4gXCJcIjtcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCAoVUlDb21wb25lbnQpOyIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcbmltcG9ydCBSZWFjdERPTSBmcm9tICdyZWFjdC1kb20nXG5pbXBvcnQgeyBBcHBDb250YWluZXIgfSBmcm9tICdyZWFjdC1ob3QtbG9hZGVyJ1xuaW1wb3J0IFJvb3QgZnJvbSAnam1hcnJveWF2ZS9pbmRleCdcblxuY29uc3QgcmVuZGVyID0gQ29tcG9uZW50ID0+IHtcbiAgUmVhY3RET00ucmVuZGVyKFxuICAgIDxBcHBDb250YWluZXI+XG4gICAgICA8Q29tcG9uZW50IC8+XG4gICAgPC9BcHBDb250YWluZXI+LFxuICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdyb290JylcbiAgKVxufVxuXG5yZW5kZXIoUm9vdClcblxuaWYgKG1vZHVsZS5ob3QpIHtcbiAgbW9kdWxlLmhvdC5hY2NlcHQoJy4vam1hcnJveWF2ZS9pbmRleCcsICgpID0+IHsgcmVuZGVyKFJvb3QpIH0pXG59IiwiaW1wb3J0IEJhc2VBUEkgZnJvbSAnY29yZS9hcHAvYXBpJztcbmltcG9ydCBTdGF0ZSBmcm9tICdqbWFycm95YXZlL2FwcC9zdGF0ZSc7XG5pbXBvcnQgQ29uc3RhbnRzIGZyb20gJ2ptYXJyb3lhdmUvY29uZi9jb25zdGFudHMnXG5cbmNsYXNzIEFQSSBleHRlbmRzIEJhc2VBUEl7XG5cdGNvbnN0cnVjdG9yKHBhcmVudCl7XG5cdFx0c3VwZXIoe1xuXHRcdFx0ZGVidWcgOiBDb25zdGFudHMuREVCVUcsXG5cdCAgICBcdGxvY2FsOiBDb25zdGFudHMuTE9DQUwsXG4gICAgXHRcdHRpdGxlIDogQ29uc3RhbnRzLlZFUlNJT04sXG4gICAgXHRcdGN1cnJlbnRfY29tcG9uZW50IDoge2lkIDogQ29uc3RhbnRzLkNPTUlELCBmYW1pbHkgOiBDb25zdGFudHMuQ09NRiwgdmVyc2lvbiA6IENvbnN0YW50cy5DT01WfSxcbiAgICBcdFx0Y29tcG9uZW50czogQ29uc3RhbnRzLlVYSV9WRVJTSU9OUyxcblx0XHR9KTtcblx0XHR0aGlzLnN0YXRlID0gU3RhdGU7XHRcblx0XHR0aGlzLmRhdGFfa2JfYW5kcm9pZCA9IHRoaXMuc2VydmVyLnNlcnZlclVSSSArICcvYXBwcy9qbWFycm95YXZlLWNzL2RhdGEvYW5kcm9pZF9pbmRleCc7XG5cdH1cblxuXHRnZXRBUEkoYXBpVVJJLCBkYXRhUGF0aCwgcGFyYW1zKXtcblx0XHRjb25zdCAkdGhpcyA9IHRoaXM7XG5cdFx0JHRoaXMuc3RhdGUuc2V0KGRhdGFQYXRoLCBudWxsKTtcblx0XHR0aGlzLnNlcnZlci5nZXQoYXBpVVJJLCBwYXJhbXMsIGZ1bmN0aW9uKGRhdGEpe1xuXHRcdFx0JHRoaXMuc3RhdGUuc2V0KGRhdGFQYXRoLCBkYXRhKTtcblx0XHR9KTtcdFx0XHRcdFx0XHRcblx0fVxuXG5cdGdldEFwcCgpe1xuXHRcdGNvbnN0IGFwcCA9IHRoaXMuc3RhdGUuZ2V0KFsnYXBwJ10pO1xuXHRcdGlmKGFwcCAhPSBudWxsKSByZXR1cm47XG5cblx0XHRjb25zdCB1cmkgPSAnL2FwcHMvam1hcnJveWF2ZS1jcy9hcHAnO1xuXHRcdGNvbnN0IHBhcmFtcyA9IHt9O1xuXHRcdHRoaXMuZ2V0QVBJKHVyaSwgWydhcHAnXSwgcGFyYW1zKTtcblx0fVxuXG5cdGdldEhvbWUoKXtcblx0XHR0aGlzLmdldEFwcCgpO1xuXG5cdFx0Y29uc3QgdXJpID0gJy9hcHBzL2ptYXJyb3lhdmUtY3MvcGFnZXMvaG9tZSc7XG5cdFx0Y29uc3QgcGFyYW1zID0ge307XG5cdFx0dGhpcy5nZXRBUEkodXJpLCBbJ3BhZ2VzJywnaG9tZScsJ2RhdGEnXSwgcGFyYW1zKTtcblx0fVxuXG5cdGdldFRyZW5kcygpe1xuXHRcdHRoaXMuZ2V0QXBwKCk7XG5cdFx0XG5cdFx0Y29uc3QgdXJpID0gJy9hcHBzL3RyZW5kcy9zdGFja292ZXJmbG93L2hpc3RvcnknO1xuXHRcdGNvbnN0IHBhcmFtcyA9IHt9O1xuXHRcdHRoaXMuZ2V0QVBJKHVyaSwgWydwYWdlcycsJ2hvbWUnLCd0cmVuZHMnXSwgcGFyYW1zKTtcblx0fVxuXG5cdGdldEJsb2coYmxvZyl7XG5cdFx0dGhpcy5nZXRBcHAoKTtcblx0XHRcblx0XHR0aGlzLnN0YXRlLnNldChbJ3BhZ2VzJywnYmxvZycsICdhcmVhJ10sIGJsb2cpO1xuXHRcdGNvbnN0IHVyaSA9ICcvYXBwcy9qbWFycm95YXZlLWNzL3BhZ2VzL2Jsb2cnO1xuXHRcdGNvbnN0IHBhcmFtcyA9IHthcmVhOiBibG9nfTtcblx0XHR0aGlzLmdldEFQSSh1cmksIFsncGFnZXMnLCdibG9nJywnZGF0YSddLCBwYXJhbXMpO1xuXHR9XG5cblx0Z2V0UG9zdChibG9nLCBwb3N0KXtcblx0XHR0aGlzLmdldEFwcCgpO1xuXHRcdFxuXHRcdHRoaXMuc3RhdGUuc2V0KFsncGFnZXMnLCdwb3N0JywgJ2FyZWEnXSwgYmxvZyk7XG5cdFx0Y29uc3QgdXJpID0gJy9hcHBzL2ptYXJyb3lhdmUtY3MvcGFnZXMvcG9zdCc7XG5cdFx0Y29uc3QgcGFyYW1zID0ge2lkOiBwb3N0fTtcblx0XHR0aGlzLmdldEFQSSh1cmksIFsncGFnZXMnLCdwb3N0JywnZGF0YSddLCBwYXJhbXMpO1xuXHR9XG5cblx0Z2V0Q1YoKXtcblx0XHR0aGlzLmdldEFwcCgpO1xuXHRcdFxuXHRcdGNvbnN0IHVyaSA9ICcvYXBwcy9qbWFycm95YXZlLWNzL3BhZ2VzL2N2Jztcblx0XHRjb25zdCBwYXJhbXMgPSB7fTtcblx0XHR0aGlzLmdldEFQSSh1cmksIFsncGFnZXMnLCdjdicsJ2RhdGEnXSwgcGFyYW1zKTtcblx0fVxuXG5cdGdldEtCQW5kcm9pZChjYXRlZ29yeSl7XG5cdFx0dGhpcy5nZXRBcHAoKTtcblx0XHRcblx0XHRjb25zdCB1cmkgPSAnL2FwcHMvam1hcnJveWF2ZS1jcy9kYXRhL2FuZHJvaWRfaW5kZXgnO1xuXHRcdGNvbnN0IHBhcmFtcyA9IHtmMTogJ2NhdCcsIHYxOiBjYXRlZ29yeX07XG5cdFx0dGhpcy5nZXRBUEkodXJpLCBbJ3BhZ2VzJywgJ2tiX2FuZHJvaWQnLCAnZGF0YScsICdyZWNvcmRzJ10sIHBhcmFtcyk7XG5cdH1cblxuXHRnZXRLQkFuZHJvaWRDYXRlZ29yaWVzKCl7XG5cdFx0dGhpcy5nZXRBcHAoKTtcblx0XHRcblx0XHRjb25zdCB1cmkgPSAnL2FwcHMvam1hcnJveWF2ZS1jcy9kYXRhL2FuZHJvaWRfY2F0ZWdvcmllcyc7XG5cdFx0Y29uc3QgcGFyYW1zID0ge307XG5cdFx0dGhpcy5nZXRBUEkodXJpLCBbJ3BhZ2VzJywgJ2tiX2FuZHJvaWQnLCAnZGF0YScsICdjYXRlZ29yaWVzJ10sIHBhcmFtcyk7XG5cdH1cbn1cblxud2luZG93Ll9fYXBpID0gbmV3IEFQSSgpO1xuZXhwb3J0IGRlZmF1bHQgQVBJOyIsImV4cG9ydCBjb25zdCBNRVNTQUdFU19MT0FESU5HID0gJ01FU1NBR0VTX0xPQURJTkcnO1xuZXhwb3J0IGNvbnN0IE1FU1NBR0VTX0ZBSUxFRCA9ICdNRVNTQUdFU19GQUlMRUQnO1xuZXhwb3J0IGNvbnN0IE1FU1NBR0VTX0ZFVENIRUQgPSAnTUVTU0FHRVNfRkVUQ0hFRCc7XG5cbmV4cG9ydCBjb25zdCBNRVNTQUdFX0xPQURJTkcgPSAnTUVTU0FHRV9MT0FESU5HJztcbmV4cG9ydCBjb25zdCBNRVNTQUdFX0ZBSUxFRCA9ICdNRVNTQUdFX0ZBSUxFRCc7XG5leHBvcnQgY29uc3QgTUVTU0FHRV9GRVRDSEVEID0gJ01FU1NBR0VfRkVUQ0hFRCc7XG5cbmV4cG9ydCBjb25zdCBMQUJFTFNfTE9BRElORyA9ICdMQUJFTFNfTE9BRElORyc7XG5leHBvcnQgY29uc3QgTEFCRUxTX0ZBSUxFRCA9ICdMQUJFTFNfRkFJTEVEJztcbmV4cG9ydCBjb25zdCBMQUJFTFNfRkVUQ0hFRCA9ICdMQUJFTFNfRkVUQ0hFRCc7XG4iLCJpbXBvcnQgeyBjcmVhdGVTdG9yZSwgY29tYmluZVJlZHVjZXJzLCBhcHBseU1pZGRsZXdhcmUgfSBmcm9tICdyZWR1eCc7XG5cbmltcG9ydCB7IE1lc3NhZ2VzIH0gZnJvbSAnam1hcnJveWF2ZS9hcHAvcmVkdXgvcmVkdWNlcnMvbWVzc2FnZXMnO1xuaW1wb3J0IHsgTGFiZWxzIH0gZnJvbSAnam1hcnJveWF2ZS9hcHAvcmVkdXgvcmVkdWNlcnMvbGFiZWxzJztcblxuaW1wb3J0IHRodW5rIGZyb20gJ3JlZHV4LXRodW5rJztcbmltcG9ydCBsb2dnZXIgZnJvbSAncmVkdXgtbG9nZ2VyJztcblxuZXhwb3J0IGNvbnN0IENvbmZpZ3VyZVN0b3JlID0gKCkgPT4ge1xuICAgIGNvbnN0IHN0b3JlID0gY3JlYXRlU3RvcmUoXG4gICAgICAgIGNvbWJpbmVSZWR1Y2Vycyh7XG4gICAgICAgICAgICBtZXNzYWdlcyA6IE1lc3NhZ2VzLFxuICAgICAgICAgICAgbGFiZWxzIDogTGFiZWxzLFxuICAgICAgICB9KSxcblx0XHRhcHBseU1pZGRsZXdhcmUodGh1bmssIGxvZ2dlcikgJiYgYXBwbHlNaWRkbGV3YXJlKHRodW5rKVxuICAgICk7XG5cbiAgICByZXR1cm4gc3RvcmU7XG59IiwiaW1wb3J0ICogYXMgQWN0aW9uVHlwZXMgZnJvbSAnam1hcnJveWF2ZS9hcHAvcmVkdXgvYWN0aW9ucy90eXBlcyc7XG5cbmV4cG9ydCBjb25zdCBMYWJlbHMgPSAoc3RhdGUgPSB7IGxvYWRpbmc6IHRydWUsIGVycjogbnVsbCwgZGF0YTpbXX0sIGFjdGlvbikgPT4ge1xuICAgIHN3aXRjaCAoYWN0aW9uLnR5cGUpIHtcbiAgICAgICAgY2FzZSBBY3Rpb25UeXBlcy5MQUJFTFNfRkVUQ0hFRDpcbiAgICAgICAgICAgIHJldHVybiB7Li4uc3RhdGUsIGxvYWRpbmc6IGZhbHNlLCBlcnI6IG51bGwsIGRhdGE6IGFjdGlvbi5wYXlsb2FkfTtcblxuICAgICAgICBjYXNlIEFjdGlvblR5cGVzLkxBQkVMU19MT0FESU5HOlxuICAgICAgICAgICAgcmV0dXJuIHsuLi5zdGF0ZSwgbG9hZGluZzogdHJ1ZSwgZXJyOiBudWxsLCBkYXRhOiBbXX1cblxuICAgICAgICBjYXNlIEFjdGlvblR5cGVzLkxBQkVMU19GQUlMRUQ6XG4gICAgICAgICAgICByZXR1cm4gey4uLnN0YXRlLCBsb2FkaW5nOiBmYWxzZSwgZXJyOiBhY3Rpb24ucGF5bG9hZH07XG5cbiAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgIHJldHVybiBzdGF0ZTtcbiAgICB9XG59IiwiaW1wb3J0ICogYXMgQWN0aW9uVHlwZXMgZnJvbSAnam1hcnJveWF2ZS9hcHAvcmVkdXgvYWN0aW9ucy90eXBlcyc7XG5cbmV4cG9ydCBjb25zdCBNZXNzYWdlcyA9IChzdGF0ZSA9IHsgbG9hZGluZzogdHJ1ZSwgZXJyOiBudWxsLCBkYXRhOltdfSwgYWN0aW9uKSA9PiB7XG4gICAgc3dpdGNoIChhY3Rpb24udHlwZSkge1xuICAgICAgICBjYXNlIEFjdGlvblR5cGVzLk1FU1NBR0VTX0ZFVENIRUQ6XG4gICAgICAgICAgICByZXR1cm4gey4uLnN0YXRlLCBsb2FkaW5nOiBmYWxzZSwgZXJyOiBudWxsLCBkYXRhOiBhY3Rpb24ucGF5bG9hZC5kYXRhfTtcblxuICAgICAgICBjYXNlIEFjdGlvblR5cGVzLk1FU1NBR0VTX0xPQURJTkc6XG4gICAgICAgICAgICByZXR1cm4gey4uLnN0YXRlLCBsb2FkaW5nOiB0cnVlLCBlcnI6IG51bGwsIGRhdGE6IFtdfVxuXG4gICAgICAgIGNhc2UgQWN0aW9uVHlwZXMuTUVTU0FHRVNfRkFJTEVEOlxuICAgICAgICAgICAgcmV0dXJuIHsuLi5zdGF0ZSwgbG9hZGluZzogZmFsc2UsIGVycjogYWN0aW9uLnBheWxvYWR9O1xuXG4gICAgICAgIGNhc2UgQWN0aW9uVHlwZXMuTUVTU0FHRV9GRVRDSEVEOlxuICAgICAgICAgICAgYWN0aW9uLnBheWxvYWQubWVzc2FnZS5tZXNzYWdlc1thY3Rpb24ucGF5bG9hZC5pZHhdLnRleHQgPSBhY3Rpb24ucGF5bG9hZC50ZXh0OyAgICAgICBcbiAgICAgICAgICAgIHJldHVybiB7Li4uc3RhdGUsIGxvYWRpbmc6IGZhbHNlLCBlcnI6IG51bGx9O1xuXG4gICAgICAgIGNhc2UgQWN0aW9uVHlwZXMuTUVTU0FHRV9MT0FESU5HOlxuICAgICAgICAgICAgcmV0dXJuIHsuLi5zdGF0ZSwgbG9hZGluZzogdHJ1ZSwgZXJyOiBudWxsfVxuXG4gICAgICAgIGNhc2UgQWN0aW9uVHlwZXMuTUVTU0FHRV9GQUlMRUQ6XG4gICAgICAgICAgICByZXR1cm4gey4uLnN0YXRlLCBsb2FkaW5nOiBmYWxzZSwgZXJyOiBhY3Rpb24ucGF5bG9hZH07XG5cbiAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgIHJldHVybiBzdGF0ZTtcbiAgICB9XG59IiwiaW1wb3J0IEJhb2JhYiBmcm9tICdiYW9iYWInO1xuaW1wb3J0IENvbnN0YW50cyBmcm9tICdqbWFycm95YXZlL2NvbmYvY29uc3RhbnRzJ1xuXG52YXIgdHJlZSA9IG5ldyBCYW9iYWIoe1xuICBhcHAgOiBudWxsLFxuICBwYWdlcyA6IHtcbiAgICBnbG9iYWwgOiB7fSxcbiAgICBob21lIDoge1xuICAgICAgZGF0YToge30sXG4gICAgICB0cmVuZHM6IG51bGwsXG4gICAgfSxcbiAgICBibG9nIDoge1xuICAgICAgZGF0YToge30sXG4gICAgICBhcmVhOiBcIlwiLFxuICAgIH0sXG4gICAgcG9zdCA6IHtcbiAgICAgIGRhdGE6IHt9LFxuICAgICAgYXJlYTogXCJcIixcbiAgICB9LFxuICAgIGNvdXJzZXMgOiB7XG4gICAgICBkYXRhOiB7fSxcbiAgICB9LFxuICAgIGN2IDoge1xuICAgICAgZGF0YToge30sXG4gICAgfSxcbiAgICBrYl9hbmRyb2lkIDoge1xuICAgICAgZGF0YToge1xuICAgICAgICByZWNvcmRzIDogbnVsbCxcbiAgICAgICAgY2F0ZWdvcmllcyA6IG51bGwsXG4gICAgICB9LFxuICAgIH0sXG4gIH0sXG59LFxue1xuICBhdXRvQ29tbWl0OiB0cnVlLFxuICBhc3luY2hyb25vdXMgOiBmYWxzZSxcbiAgaW1tdXRhYmxlOiBmYWxzZSxcbiAgcGVyc2lzdGVudDogZmFsc2UsIFxufSk7XG5cbndpbmRvdy5fX3N0YXRlID0gdHJlZTtcblxuZXhwb3J0IGRlZmF1bHQgdHJlZTtcblxuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IExpbmsgfSBmcm9tICdyZWFjdC1yb3V0ZXInO1xuaW1wb3J0IHdpdGhNb2R1bGUgZnJvbSAnam1hcnJveWF2ZS9jb21wb25lbnRzL3V4aS9jb3JlL3dpdGgtbW9kdWxlJztcblxuY2xhc3MgUG9zdExpbmtDb21wb25lbnQgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuXHRyZW5kZXIoKXtcblx0XHRjb25zdCBzbHVnID0gKFwic2x1Z1wiIGluIHRoaXMucHJvcHMpID8gdGhpcy5wcm9wcy5zbHVnIDogbnVsbDtcblx0XHRjb25zdCBjYXRlZ29yeSA9IHRoaXMucHJvcHMuY2F0ZWdvcnk7XG5cblx0XHRpZighc2x1ZykgcmV0dXJuIHRoaXMucHJvcHMuY2hpbGRyZW47XG5cblx0XHRyZXR1cm4gKFxuXHRcdFx0PExpbmsgdG89e2Ake3NsdWd9YH0+XG5cdFx0XHRcdHt0aGlzLnByb3BzLmNoaWxkcmVufVxuXHRcdFx0PC9MaW5rPlxuXHRcdCk7XG5cdH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgd2l0aE1vZHVsZShQb3N0TGlua0NvbXBvbmVudCk7XG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgd2l0aFN0eWxlcyB9IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL3N0eWxlcyc7XG5pbXBvcnQgR3JpZCBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9HcmlkJztcbmltcG9ydCBBcHAgXHRcdGZyb20gJ2ptYXJyb3lhdmUvY29tcG9uZW50cy91eGkvY29yZS9wYWdlL2FwcCc7XG5pbXBvcnQgQXBwQm9keSBcdGZyb20gJ2ptYXJyb3lhdmUvY29tcG9uZW50cy91eGkvY29yZS9wYWdlL2JvZHknO1xuXG5jb25zdCBzdHlsZXMgPSB0aGVtZSA9PiAoeyBcblxufSk7XG5cbmNsYXNzIFBhZ2UgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICBjb25zdHJ1Y3Rvcihwcm9wcyxjb250ZXh0KSB7XG4gICAgXHRzdXBlcihwcm9wcyxjb250ZXh0KTtcbiAgICBcdHRoaXMuYXBpID0gd2luZG93Ll9fYXBpO1xuXHR9XG5cblx0Y29tcG9uZW50RGlkTW91bnQoKXtcblx0fVxuXG5cdHJlbmRlcigpe1xuXHRcdGNvbnN0IHRpdGxlID0gKFwidGl0bGVcIiBpbiB0aGlzLnByb3BzKSA/IDxoMT57dGhpcy5wcm9wcy50aXRsZX08L2gxPiA6IFwiXCI7XG5cdFx0cmV0dXJuIChcblx0XHRcdDxBcHAgcm91dGVyPXt0aGlzLnByb3BzLnJvdXRlcn0gYXBwPXt0aGlzLnByb3BzLmFwcH0+XG5cdFx0XHRcdDxBcHBCb2R5IHBhdGg9e1t7dGV4dDogJ2hvbWUnLCByb3V0ZTogJy8nfSwge3RleHQ6ICdsYWJzJ31dfSBhcHA9e3RoaXMucHJvcHMuYXBwfSBkYXRhPXt7fX0+XG5cdFx0XHRcdFx0PEdyaWQgY29udGFpbmVyIHNwYWNpbmc9ezh9IGNsYXNzTmFtZT17J21vZC1sYWJzJ30gc3R5bGU9e3twYWRkaW5nVG9wOiAnNSUnLHdpZHRoOicxMDAlJ319PlxuXHRcdFx0XHRcdFx0PEdyaWQgaXRlbSB4cz17MTJ9IGFsaWduPSdjZW50ZXInPlxuXHRcdFx0XHRcdFx0XHR7dGl0bGV9XG5cdFx0XHRcdFx0XHQ8L0dyaWQ+XG5cdFx0XHRcdFx0XHQ8R3JpZCBpdGVtIHhzPXsxfSBtZD17NH0+XG5cdFx0XHRcdFx0XHQ8L0dyaWQ+XG5cdFx0XHRcdFx0XHQ8R3JpZCBpdGVtIGFsaWduPSdjZW50ZXInIHhzPXsxMH0gbWQ9ezR9IGNsYXNzTmFtZT17J2ZyYW1lJ30+XG5cdFx0XHRcdFx0XHRcdDxpbWcgc3JjPScuL3Jlcy9pbWcvbGFiczAwMi5qcGcnIHdpZHRoPScxMDAlJy8+XG5cdFx0XHRcdFx0XHRcdDxoMT5Tb3JyeSwgaXQncyBqdXN0IGEgbGFicyBkZW1vPC9oMT5cblx0XHRcdFx0XHRcdDwvR3JpZD5cblx0XHRcdFx0XHQ8L0dyaWQ+IFxuXHRcdFx0XHQ8L0FwcEJvZHk+XG5cdFx0XHQ8L0FwcD5cblx0XHQpO1xuXHR9XG59XG5cbmV4cG9ydCBkZWZhdWx0IHdpdGhTdHlsZXMoc3R5bGVzKShQYWdlKTsiLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IExvYWRhYmxlIGZyb20gJ3JlYWN0LWxvYWRhYmxlJztcbmltcG9ydCBMb2FkaW5nIGZyb20gJ2NvcmUvY29tcG9uZW50cy9sb2FkaW5nJztcbmltcG9ydCBBcHAgXHRcdGZyb20gJ2ptYXJyb3lhdmUvY29tcG9uZW50cy91eGkvY29yZS9wYWdlL2FwcCc7XG5pbXBvcnQgQXBwQm9keSBcdGZyb20gJ2ptYXJyb3lhdmUvY29tcG9uZW50cy91eGkvY29yZS9wYWdlL2JvZHknO1xuXG5jb25zdCBIb21lUHJveHkgPSBMb2FkYWJsZSh7XG4gIGxvYWRlcjogKCkgPT4gaW1wb3J0KCdqbWFycm95YXZlL2NvbXBvbmVudHMvdXhpL2Jsb2cvbGF5b3V0L2xheW91dC1wcm94eScpLFxuICBsb2FkaW5nOiBMb2FkaW5nLFxufSk7XG5cbmNsYXNzIFBhZ2UgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuXHRjb25zdHJ1Y3Rvcihwcm9wcyxjb250ZXh0KSB7XG5cdFx0c3VwZXIocHJvcHMsY29udGV4dCk7XG5cdFx0dGhpcy5hcGkgPSB3aW5kb3cuX19hcGk7XG5cdH1cblxuXHRjb21wb25lbnREaWRNb3VudCgpe1xuXHR9XG5cblx0cmVuZGVyKCl7XG5cdFx0Y29uc3QgYXBwID0gdGhpcy5wcm9wcy5hcHA7XG5cdFx0dmFyIGtleSA9IDA7XG5cdFx0cmV0dXJuIChcblx0XHRcdDxBcHAgcm91dGVyPXt0aGlzLnByb3BzLnJvdXRlcn0gYXBwPXt0aGlzLnByb3BzLmFwcH0+XG5cdFx0XHRcdDxBcHBCb2R5IHBhdGg9e1t7dGV4dDogJ2hvbWUnLCByb3V0ZTogJy8nfV19IGFwcD17dGhpcy5wcm9wcy5hcHB9IGRhdGE9e3tob21lOiB0aGlzLnByb3BzLnBhZ2V9fT5cblx0XHRcdFx0XHQ8SG9tZVByb3h5IGRhdGE9e3RoaXMucHJvcHMucGFnZS5kYXRhfSB0aXRsZT17dGhpcy5wcm9wcy5wYWdlLmFyZWF9Lz5cblx0XHRcdFx0PC9BcHBCb2R5PlxuXHRcdFx0PC9BcHA+XG5cdFx0KTtcblx0fVxufVxuXG5leHBvcnQgZGVmYXVsdCBQYWdlOyIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgTG9hZGFibGUgZnJvbSAncmVhY3QtbG9hZGFibGUnO1xuaW1wb3J0IExvYWRpbmcgZnJvbSAnY29yZS9jb21wb25lbnRzL2xvYWRpbmcnO1xuaW1wb3J0IEFwcCBcdFx0ZnJvbSAnam1hcnJveWF2ZS9jb21wb25lbnRzL3V4aS9jb3JlL3BhZ2UvYXBwJztcbmltcG9ydCBBcHBCb2R5IFx0ZnJvbSAnam1hcnJveWF2ZS9jb21wb25lbnRzL3V4aS9jb3JlL3BhZ2UvYm9keSc7XG5cbmNvbnN0IEhvbWVQcm94eSA9IExvYWRhYmxlKHtcbiAgbG9hZGVyOiAoKSA9PiBpbXBvcnQoJ2ptYXJyb3lhdmUvY29tcG9uZW50cy91eGkvYmxvZ19wb3N0L2xheW91dC9sYXlvdXQtcHJveHknKSxcbiAgbG9hZGluZzogTG9hZGluZyxcbn0pO1xuXG5jbGFzcyBQYWdlIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcblx0Y29uc3RydWN0b3IocHJvcHMsY29udGV4dCkge1xuXHRcdHN1cGVyKHByb3BzLGNvbnRleHQpO1xuXHRcdHRoaXMuYXBpID0gd2luZG93Ll9fYXBpO1xuXHR9XG5cblx0Y29tcG9uZW50RGlkTW91bnQoKXtcblx0fVxuXG5cdHJlbmRlcigpe1xuXHRcdGNvbnN0IGFwcCA9IHRoaXMucHJvcHMuYXBwO1xuXHRcdHZhciBrZXkgPSAwO1xuXHRcdHJldHVybiAoXG5cdFx0XHQ8QXBwIHJvdXRlcj17dGhpcy5wcm9wcy5yb3V0ZXJ9IGFwcD17dGhpcy5wcm9wcy5hcHB9PlxuXHRcdFx0XHQ8QXBwQm9keSBwYXRoPXtbe3RleHQ6ICdob21lJywgcm91dGU6ICcvJ31dfSBhcHA9e3RoaXMucHJvcHMuYXBwfSBkYXRhPXt7aG9tZTogdGhpcy5wcm9wcy5wYWdlfX0+XG5cdFx0XHRcdFx0PEhvbWVQcm94eSBkYXRhPXt0aGlzLnByb3BzLnBhZ2UuZGF0YX0gdGl0bGU9e3RoaXMucHJvcHMucGFnZS5hcmVhfS8+XG5cdFx0XHRcdDwvQXBwQm9keT5cblx0XHRcdDwvQXBwPlxuXHRcdCk7XG5cdH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgUGFnZTsiLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IHdpdGhNb2R1bGUgZnJvbSAnam1hcnJveWF2ZS9jb21wb25lbnRzL3V4aS9jb3JlL3dpdGgtbW9kdWxlJztcbmltcG9ydCBCdXR0b24gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvQnV0dG9uJztcbmltcG9ydCBEaWFsb2cgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvRGlhbG9nJztcbmltcG9ydCBEaWFsb2dBY3Rpb25zIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL0RpYWxvZ0FjdGlvbnMnO1xuaW1wb3J0IERpYWxvZ0NvbnRlbnQgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvRGlhbG9nQ29udGVudCc7XG5pbXBvcnQgRGlhbG9nVGl0bGUgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvRGlhbG9nVGl0bGUnO1xuaW1wb3J0IElucHV0TGFiZWwgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvSW5wdXRMYWJlbCc7XG5pbXBvcnQgSW5wdXQgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvSW5wdXQnO1xuaW1wb3J0IEZvcm1Db250cm9sIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL0Zvcm1Db250cm9sJztcbmltcG9ydCBTZWxlY3QgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvU2VsZWN0JztcbmltcG9ydCBDb25zdGFudHMgZnJvbSAnam1hcnJveWF2ZS9jb25mL2NvbnN0YW50cyc7XG5pbXBvcnQgJy4vY29tX3ZlcnNpb24uc2Nzcyc7XG5cbmNsYXNzIENvbXBvbmVudCBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG5cdGNvbnN0cnVjdG9yKHByb3BzKXtcblx0XHRzdXBlcihwcm9wcyk7XG5cblx0XHRjb25zdCBjb20gPSB3aW5kb3cuX19hcGkuZ2V0Q29tcG9uZW50c1ZlcnNpb24oKTtcblxuXHRcdHRoaXMuc3RhdGUgPSB7XG5cdFx0XHRvcHRpb246IGNvbS5pZCxcblx0XHR9O1xuXG5cdFx0dGhpcy5oYW5kbGVDaGFuZ2UgPSB0aGlzLmhhbmRsZUNoYW5nZS5iaW5kKHRoaXMpO1xuXHRcdHRoaXMub25DbG9zZSA9IHRoaXMub25DbG9zZS5iaW5kKHRoaXMpO1xuXHR9XG5cblx0aGFuZGxlQ2hhbmdlKGV2ZW50KXtcblx0XHRjb25zdCB2YWx1ZSA9IGV2ZW50LnRhcmdldC52YWx1ZTtcblx0XHR0aGlzLnNldFN0YXRlKHsgb3B0aW9uIDogdmFsdWUgfSk7XG5cdFx0d2luZG93Ll9fYXBpLnNldENvbXBvbmVudHNWZXJzaW9uKHZhbHVlKTtcblx0fVxuXG5cdG9uQ2xvc2UoKXtcblx0XHRpZih0aGlzLnByb3BzLm9uQ2xvc2UgIT0gbnVsbCl7XG5cdFx0XHR0aGlzLnByb3BzLm9uQ2xvc2UoKTtcblx0XHR9XG5cdH1cblxuXHRyZW5kZXIoKXtcdFxuXHRcdGlmKCFDb25zdGFudHMuQ09NX1NXSVRDSCl7XG5cdFx0XHRyZXR1cm4gbnVsbDtcblx0XHR9XG5cblx0XHRjb25zdCBkYXRhID0gQ29uc3RhbnRzLlVYSV9WRVJTSU9OUztcblx0XHRyZXR1cm4gKFxuXHRcdFx0PGRpdiBjbGFzc05hbWU9J21vZC12ZXJzaW9uJz5cblx0ICBcdFx0XHQ8Rm9ybUNvbnRyb2w+XG5cdCAgICBcdFx0XHQ8SW5wdXRMYWJlbCBodG1sRm9yPVwibmF0aXZlLXNpbXBsZVwiPlVYVUkgVmVyc2lvbjwvSW5wdXRMYWJlbD5cblx0XHRcdFx0XHQ8U2VsZWN0IG5hdGl2ZSB2YWx1ZT17dGhpcy5zdGF0ZS5vcHRpb259IG9uQ2hhbmdlPXt0aGlzLmhhbmRsZUNoYW5nZX0gaW5wdXQ9ezxJbnB1dCBpZD1cIm5hdGl2ZS1zaW1wbGVcIiAvPn0+XG5cdFx0XHRcdFx0XHR7ZGF0YS5tYXAoKGl0ZW0pID0+XG5cdFx0XHRcdFx0XHRcdGl0ZW0udmlzaWJsZSAmJiA8b3B0aW9uIGtleT17aXRlbS5pZH0gdmFsdWU9e2l0ZW0uaWR9PntpdGVtLmZhbWlseX0ge2Ake2l0ZW0udmVyc2lvblswXX0uJHtpdGVtLnZlcnNpb25bMV19LiR7aXRlbS52ZXJzaW9uWzJdfWB9PC9vcHRpb24+XG5cdFx0XHRcdFx0XHQpfVxuXHRcdFx0XHRcdDwvU2VsZWN0PlxuXHQgICAgICAgIFx0PC9Gb3JtQ29udHJvbD5cbiAgICAgICAgXHQ8L2Rpdj5cblx0XHQpXG5cdH1cblxufVxuXG5leHBvcnQgZGVmYXVsdCB3aXRoTW9kdWxlKENvbXBvbmVudCk7IiwiXG52YXIgY29udGVudCA9IHJlcXVpcmUoXCIhIS4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL2ZyYW1ld29ya3Mvd2ViYXBwcy9zdGFydHVwL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2luZGV4LmpzIS4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL2ZyYW1ld29ya3Mvd2ViYXBwcy9zdGFydHVwL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9saWIvbG9hZGVyLmpzIS4vY29tX3ZlcnNpb24uc2Nzc1wiKTtcblxuaWYodHlwZW9mIGNvbnRlbnQgPT09ICdzdHJpbmcnKSBjb250ZW50ID0gW1ttb2R1bGUuaWQsIGNvbnRlbnQsICcnXV07XG5cbnZhciB0cmFuc2Zvcm07XG52YXIgaW5zZXJ0SW50bztcblxuXG5cbnZhciBvcHRpb25zID0ge1wiaG1yXCI6dHJ1ZX1cblxub3B0aW9ucy50cmFuc2Zvcm0gPSB0cmFuc2Zvcm1cbm9wdGlvbnMuaW5zZXJ0SW50byA9IHVuZGVmaW5lZDtcblxudmFyIHVwZGF0ZSA9IHJlcXVpcmUoXCIhLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vZnJhbWV3b3Jrcy93ZWJhcHBzL3N0YXJ0dXAvbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9saWIvYWRkU3R5bGVzLmpzXCIpKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5pZihjb250ZW50LmxvY2FscykgbW9kdWxlLmV4cG9ydHMgPSBjb250ZW50LmxvY2FscztcblxuaWYobW9kdWxlLmhvdCkge1xuXHRtb2R1bGUuaG90LmFjY2VwdChcIiEhLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vZnJhbWV3b3Jrcy93ZWJhcHBzL3N0YXJ0dXAvbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvaW5kZXguanMhLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vZnJhbWV3b3Jrcy93ZWJhcHBzL3N0YXJ0dXAvbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2xpYi9sb2FkZXIuanMhLi9jb21fdmVyc2lvbi5zY3NzXCIsIGZ1bmN0aW9uKCkge1xuXHRcdHZhciBuZXdDb250ZW50ID0gcmVxdWlyZShcIiEhLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vZnJhbWV3b3Jrcy93ZWJhcHBzL3N0YXJ0dXAvbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvaW5kZXguanMhLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vZnJhbWV3b3Jrcy93ZWJhcHBzL3N0YXJ0dXAvbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2xpYi9sb2FkZXIuanMhLi9jb21fdmVyc2lvbi5zY3NzXCIpO1xuXG5cdFx0aWYodHlwZW9mIG5ld0NvbnRlbnQgPT09ICdzdHJpbmcnKSBuZXdDb250ZW50ID0gW1ttb2R1bGUuaWQsIG5ld0NvbnRlbnQsICcnXV07XG5cblx0XHR2YXIgbG9jYWxzID0gKGZ1bmN0aW9uKGEsIGIpIHtcblx0XHRcdHZhciBrZXksIGlkeCA9IDA7XG5cblx0XHRcdGZvcihrZXkgaW4gYSkge1xuXHRcdFx0XHRpZighYiB8fCBhW2tleV0gIT09IGJba2V5XSkgcmV0dXJuIGZhbHNlO1xuXHRcdFx0XHRpZHgrKztcblx0XHRcdH1cblxuXHRcdFx0Zm9yKGtleSBpbiBiKSBpZHgtLTtcblxuXHRcdFx0cmV0dXJuIGlkeCA9PT0gMDtcblx0XHR9KGNvbnRlbnQubG9jYWxzLCBuZXdDb250ZW50LmxvY2FscykpO1xuXG5cdFx0aWYoIWxvY2FscykgdGhyb3cgbmV3IEVycm9yKCdBYm9ydGluZyBDU1MgSE1SIGR1ZSB0byBjaGFuZ2VkIGNzcy1tb2R1bGVzIGxvY2Fscy4nKTtcblxuXHRcdHVwZGF0ZShuZXdDb250ZW50KTtcblx0fSk7XG5cblx0bW9kdWxlLmhvdC5kaXNwb3NlKGZ1bmN0aW9uKCkgeyB1cGRhdGUoKTsgfSk7XG59IiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCB3aXRoTW9kdWxlIGZyb20gJ2ptYXJyb3lhdmUvY29tcG9uZW50cy91eGkvY29yZS93aXRoLW1vZHVsZSc7XG5pbXBvcnQge2Jyb3dzZXJOYW1lLCBicm93c2VyVmVyc2lvbiwgTW9iaWxlVmlldywgbW9iaWxlVmVuZG9yLCBtb2JpbGVNb2RlbCwgZGV2aWNlRGV0ZWN0LCBvc05hbWUsIG9zVmVyc2lvbn0gZnJvbSBcInJlYWN0LWRldmljZS1kZXRlY3RcIjtcbmltcG9ydCBDb25zdGFudHMgZnJvbSAnam1hcnJveWF2ZS9jb25mL2NvbnN0YW50cyc7XG5cbmNsYXNzIERlYnVnIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcblxuXHRyZW5kZXIoKXtcdFxuXHRcdGNvbnN0IGFwcCA9IHRoaXMucHJvcHMuYXBwO1xuXHRcdGNvbnN0IGRhdGEgPSAoXCJkYXRhXCIgaW4gdGhpcy5wcm9wcykgPyB0aGlzLnByb3BzLmRhdGEgOiB7fTtcblxuXHRcdGlmKCFhcHApIHJldHVybiA8ZGl2Lz47XG5cdFx0cmV0dXJuICggIFxuXHRcdFx0PGRpdj5cblx0XHRcdHthcHAubG9jYWwgJiYgXG5cdFx0XHRcdDxkaXYgc3R5bGU9e3tiYWNrZ3JvdW5kQ29sb3I6ICdyZ2IoMjA0LCAwLCAwKScsIGNvbG9yOiAnd2hpdGUnLCBmb250U2l6ZTogJzEuNXJlbScsIHRleHRBbGlnbm1lbnQ6ICdqdXN0aWZ5JywgcGFkZGluZzogJzIlJywgd2lkdGg6JzEwMCUnfX0+XG5cdFx0XHRcdFx0PGI+Tm90aWNlOjwvYj4gVGVzdCBkYXRhc2V0IGVuYWJsZWRcblx0XHRcdFx0PC9kaXY+XG5cdFx0XHR9XG5cdFx0XHR7Q29uc3RhbnRzLkRFQlVHICYmIFxuXHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cIm1vZC1kZWJ1Z1wiPlxuXHRcdFx0XHRcdDxzcGFuPjxiPlZlcnNpb246IHtDb25zdGFudHMuVkVSU0lPTn08L2I+PC9zcGFuPjxici8+XG5cdFx0XHRcdFx0PHNwYW4+PGI+U2l6ZTo8L2I+IHt3aW5kb3cuaW5uZXJXaWR0aCB8fCBkb2N1bWVudC5ib2R5LmNsaWVudFdpZHRofSB4IHt3aW5kb3cuaW5uZXJIZWlnaHQgfHwgZG9jdW1lbnQuYm9keS5jbGllbnRIZWlnaHR9PC9zcGFuPjxici8+XG5cdFx0XHRcdFx0PHNwYW4+PGI+QnJvd3Nlcjo8L2I+IHticm93c2VyTmFtZX0gdi5be2Jyb3dzZXJWZXJzaW9ufV08L3NwYW4+PGJyLz5cblx0XHRcdFx0XHQ8TW9iaWxlVmlldz48c3Bhbj48Yj5Nb2JpbGU6PC9iPiB7bW9iaWxlVmVuZG9yfSB7bW9iaWxlTW9kZWx9PC9zcGFuPjxici8+PC9Nb2JpbGVWaWV3PlxuXHRcdFx0XHRcdDxzcGFuPjxiPk9TOjwvYj4ge29zTmFtZX0gdi5be29zVmVyc2lvbn1dPC9zcGFuPjxici8+XHRcdFx0XHRcdFxuXHRcdFx0XHRcdHsoYXBwLmVycm9yKSAmJiBcblx0XHRcdFx0XHRcdDxkaXY+XG5cdFx0XHRcdFx0XHRcdDxoci8+XG5cdFx0XHRcdFx0XHRcdDxzcGFuPjxiPkVycm9yOjwvYj4ge2FwcC5lcnJvcn08L3NwYW4+XG5cdFx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0XHR9XG5cblx0XHRcdFx0PC9kaXY+XG5cdFx0XHR9XG5cdFx0XHQ8L2Rpdj5cdFx0XHRcblx0XHQpXG5cdH1cblxufVxuXG5leHBvcnQgZGVmYXVsdCB3aXRoTW9kdWxlKERlYnVnKTsiLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5pbXBvcnQgR3JpZENvbnRhaW5lciBmcm9tICdqbWFycm95YXZlL2NvbXBvbmVudHMvdXhpL2NvcmUvZ3JpZF9jb250YWluZXInO1xuaW1wb3J0IEdyaWRJdGVtIGZyb20gJ2ptYXJyb3lhdmUvY29tcG9uZW50cy91eGkvY29yZS9ncmlkX2l0ZW0nO1xuaW1wb3J0IHsgTGluayB9IGZyb20gJ3JlYWN0LXJvdXRlcic7XG5cbmNsYXNzIENvbXBvbmVudCBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gIHJlbmRlcigpIHtcbiAgICByZXR1cm4gKFxuXHRcdDxHcmlkQ29udGFpbmVyIHNwYWNpbmc9ezh9PlxuXHRcdFx0PEdyaWRJdGVtIHhzPXsxMn0gc209ezZ9IG1kPXs0fT5cblx0XHRcdFx0PGgxPmptYXJyb3lhdmU8L2gxPlxuXHRcdFx0XHRcdDxkaXY+PExpbmsgdG89eycvYWNlcmNhJ30+YWNlcmNhPC9MaW5rPjwvZGl2PlxuXHRcdFx0PC9HcmlkSXRlbT5cblx0XHRcdDxHcmlkSXRlbSB4cz17MTJ9IHNtPXs2fSBtZD17NH0+XG5cdFx0XHRcdDxoMT5sYWJzPC9oMT5cblx0XHRcdFx0XHQ8ZGl2PjxMaW5rIHRvPXsnbGFicy9tbGInfT5tbGI8L0xpbms+PC9kaXY+XG5cdFx0XHRcdFx0PGRpdj48TGluayB0bz17J2xhYnMvdHJlbmRzJ30+dHJlbmRzPC9MaW5rPjwvZGl2PlxuXHRcdFx0XHRcdDxkaXY+PExpbmsgdG89eydsYWJzL3NlYXJjaCd9PnNlYXJjaDwvTGluaz48L2Rpdj5cblx0XHRcdDwvR3JpZEl0ZW0+XG5cdFx0XHQ8R3JpZEl0ZW0geHM9ezEyfSBzbT17Nn0gbWQ9ezR9PlxuXHRcdFx0XHQ8aDE+a25vd2xlZGdlIGJhc2U8L2gxPlxuXHRcdFx0XHRcdDxkaXY+PExpbmsgdG89eydrYi9hbmRyb2lkJ30+YW5kcm9pZCBsaWJzPC9MaW5rPjwvZGl2PlxuXHRcdFx0PC9HcmlkSXRlbT5cdFx0XHRcdFx0XG5cdFx0PC9HcmlkQ29udGFpbmVyPiBcbiAgICApO1xuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IChDb21wb25lbnQpOyIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgd2l0aE1vZHVsZSBmcm9tICdqbWFycm95YXZlL2NvbXBvbmVudHMvdXhpL2NvcmUvd2l0aC1tb2R1bGUnO1xuaW1wb3J0IEdyaWQgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvR3JpZCc7XG5cbmNsYXNzIEdyaWRDb250YWluZXIgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuXHRyZW5kZXIoKXtcblx0XHR2YXIgc3BhY2luZyA9IChcInNwYWNpbmdcIiBpbiB0aGlzLnByb3BzKSA/IHRoaXMucHJvcHMuc3BhY2luZyA6IDA7XG5cdFx0dmFyIGFsaWduID0gKFwiYWxpZ25cIiBpbiB0aGlzLnByb3BzKVx0PyB0aGlzLnByb3BzLmFsaWduIDogKChcImp1c3RpZnlcIiBpbiB0aGlzLnByb3BzKSA/IHRoaXMucHJvcHMuanVzdGlmeSA6ICdmbGV4LXN0YXJ0Jyk7IFxuXHRcdHZhciB2YWxpZ24gPSAoXCJ2YWxpZ25cIiBpbiB0aGlzLnByb3BzKVx0PyB0aGlzLnByb3BzLmFsaWduIDogKChcImFsaWduSXRlbXNcIiBpbiB0aGlzLnByb3BzKSA/IHRoaXMucHJvcHMuYWxpZ25JdGVtcyA6ICdmbGV4LXN0YXJ0Jyk7IFxuXHRcdHZhciBkaXJlY3Rpb24gPSAoXCJkaXJlY3Rpb25cIiBpbiB0aGlzLnByb3BzKVx0PyB0aGlzLnByb3BzLmRpcmVjdGlvbiA6ICdyb3cnOyBcblx0XHR2YXIgY2xhc3NOYW1lID0gKFwiY2xhc3NOYW1lXCIgaW4gdGhpcy5wcm9wcylcdD8gdGhpcy5wcm9wcy5jbGFzc05hbWUgOiAnJzsgXG5cdFx0XG5cdFx0cmV0dXJuIChcblx0XHRcdDxHcmlkIGNsYXNzTmFtZT17Y2xhc3NOYW1lfSBjb250YWluZXIgc3BhY2luZz17c3BhY2luZ30gc3R5bGU9e3t3aWR0aDonMTAwJSd9fSBkaXJlY3Rpb249e2RpcmVjdGlvbn0gYWxpZ25JdGVtcz17dmFsaWdufSBqdXN0aWZ5PXthbGlnbn0+XG5cdFx0XHRcdHt0aGlzLnByb3BzLmNoaWxkcmVufSBcblx0XHRcdDwvR3JpZD5cblx0XHQpXG5cdH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgd2l0aE1vZHVsZShHcmlkQ29udGFpbmVyKTsiLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IHdpdGhNb2R1bGUgZnJvbSAnam1hcnJveWF2ZS9jb21wb25lbnRzL3V4aS9jb3JlL3dpdGgtbW9kdWxlJztcbmltcG9ydCBHcmlkIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL0dyaWQnO1xuXG5jbGFzcyBHcmlkSXRlbSBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG5cdHJlbmRlcigpe1xuXHRcdHZhciB2aXNpYmxlID0gKFwidmlzaWJsZVwiIGluIHRoaXMucHJvcHMpXHQ/IHRoaXMucHJvcHMudmlzaWJsZSA6IHRydWU7IFxuXHRcdHZhciB4cyA9IChcInhzXCIgaW4gdGhpcy5wcm9wcykgPyB0aGlzLnByb3BzLnhzIDogMTI7XG5cdFx0dmFyIGNsYXNzTmFtZSA9IChcImNsYXNzTmFtZVwiIGluIHRoaXMucHJvcHMpXHQ/IHRoaXMucHJvcHMuY2xhc3NOYW1lIDogJyc7IFxuXHRcdHJldHVybiAoXG5cdFx0XHR2aXNpYmxlICYmXG5cdFx0XHRcdDxHcmlkIGNsYXNzTmFtZT17Y2xhc3NOYW1lfSBpdGVtIHhzPXt4c30gc209e3RoaXMucHJvcHMuc219IG1kPXt0aGlzLnByb3BzLm1kfSBzdHlsZT17dGhpcy5wcm9wcy5zdHlsZX0+XG5cdFx0XHRcdFx0e3RoaXMucHJvcHMuY2hpbGRyZW59IFxuXHRcdFx0XHQ8L0dyaWQ+XHRcdFx0XG5cdFx0KVxuXHR9XG59XG5cbmV4cG9ydCBkZWZhdWx0IHdpdGhNb2R1bGUoR3JpZEl0ZW0pOyIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBjcmVhdGVNdWlUaGVtZSB9IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL3N0eWxlcyc7XG5pbXBvcnQgeyB3aXRoU3R5bGVzIH0gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvc3R5bGVzJztcbmltcG9ydCBIaWRkZW4gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvSGlkZGVuJztcbmltcG9ydCBHcmlkIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL0dyaWQnO1xuaW1wb3J0IEFwcCBmcm9tICdjb3JlL2NvbXBvbmVudHMvYXBwJztcbmltcG9ydCBCdXR0b24gZnJvbSAnY29yZS9jb21wb25lbnRzL2J1dHRvbi5qcyc7XG5pbXBvcnQgQXBwRHJhd2VyIGZyb20gJ2ptYXJyb3lhdmUvY29tcG9uZW50cy91eGkvY29yZS9wYWdlL2RyYXdlcic7XG5pbXBvcnQgTmF2aWdhdGlvbiBmcm9tICdqbWFycm95YXZlL2NvbmYvbmF2aWdhdGlvbic7XG5pbXBvcnQgQ29uc3RhbnRzIGZyb20gJ2ptYXJyb3lhdmUvY29uZi9jb25zdGFudHMnXG5cbmNvbnN0IHRoZW1lID0gY3JlYXRlTXVpVGhlbWUoe1xuICBwYWxldHRlOiB7XG4gICAgcHJpbWFyeToge1xuICAgICAgbGlnaHQ6ICcjNDE1NjljJyxcbiAgICAgIG1haW46ICcjMDAyZTZkJyxcbiAgICAgIGRhcms6ICcjMDAwNDQxJyxcbiAgICAgIGNvbnRyYXN0VGV4dDogJyNmZmYnLFxuICAgIH0sXG4gICAgc2Vjb25kYXJ5OiB7XG4gICAgICBsaWdodDogJyNmZjUwNDcnLFxuICAgICAgbWFpbjogJyNkMTAwMWUnLFxuICAgICAgZGFyazogJyM5NzAwMDAnLFxuICAgICAgY29udHJhc3RUZXh0OiAnI2ZmZicsXG4gICAgfSxcbiAgfSxcbiAgdHlwb2dyYXBoeToge1xuICAgIC8vIFVzZSB0aGUgc3lzdGVtIGZvbnQgaW5zdGVhZCBvZiB0aGUgZGVmYXVsdCBSb2JvdG8gZm9udC5cbiAgICBmb250RmFtaWx5OiBbXG4gICAgICBcIkhlbHZldGljYSBOZXVlXCIsXG4gICAgICBcIkhlbHZldGljYVwiLFxuICAgICAgXCJBcmlhbFwiLFxuICAgICAgJy1hcHBsZS1zeXN0ZW0nLFxuICAgICAgJ0JsaW5rTWFjU3lzdGVtRm9udCcsXG4gICAgICAnXCJTZWdvZSBVSVwiJyxcbiAgICAgICdSb2JvdG8nLFxuICAgICAgJ3NhbnMtc2VyaWYnLFxuICAgICAgJ1wiQXBwbGUgQ29sb3IgRW1vamlcIicsXG4gICAgICAnXCJTZWdvZSBVSSBFbW9qaVwiJyxcbiAgICAgICdcIlNlZ29lIFVJIFN5bWJvbFwiJyxcbiAgICBdLmpvaW4oJywnKSxcbiAgICBmb250U2l6ZTogJzEycHgnLFxuICB9LFxufSk7XG5cbmNvbnN0IHN0eWxlcyA9IHRoZW1lID0+ICh7IFxuICBiYXI6e1xuICAgIHBhZGRpbmc6IDAsXG4gICAgd2lkdGg6ICcxMDAlJyxcbiAgICBoZWlnaHQ6ICcxMDAlJyxcbiAgICBib3hTaXppbmc6ICdib3JkZXItYm94JyxcbiAgfSxcbiAgYm9keSA6IHtcbiAgICBwYWRkaW5nOiAwLFxuICAgIGZsZXhHcm93OiAxLFxuICAgIG1hcmdpblRvcDogLTUsXG4gICAgd2lkdGg6ICcxMDAlJyxcbiAgICBtaW5IZWlnaHQ6ICc5MHZoJyxcbiAgICBib3hTaXppbmc6ICdib3JkZXItYm94JyxcbiAgICB6SW5kZXg6IDMsXG4gICAgYm9yZGVyUmFkaXVzOiA1LFxuICB9LFxufSk7XG5cbmNsYXNzIE1MQkFwcCBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gIGNvbnN0cnVjdG9yKHByb3BzKXtcbiAgICBzdXBlcihwcm9wcyk7XG5cbiAgICB0aGlzLm5hdmlnYXRpb24gPSBuZXcgTmF2aWdhdGlvbigpO1xuICB9XG5cbiAgbWVudUNsaWNrKHBhdGgpe1xuICAgIHRoaXMucHJvcHMucm91dGVyLnB1c2gocGF0aCk7XG4gIH1cblxuICByZW5kZXIoKXtcbiAgICB2YXIga2V5ID0gMDtcbiAgICBjb25zdCBjbGFzc2VzID0gdGhpcy5wcm9wcy5jbGFzc2VzO1xuICAgIGNvbnN0IHRvb2xiYXIgPSBbXTtcbiAgICB0aGlzLm5hdmlnYXRpb24ub3B0aW9ucy5tYXAoaXRlbSA9PiB7XG4gICAgXHRpZihpdGVtLnNob3dJbk1lbnUpXG5cdFx0ICAgIHRvb2xiYXIucHVzaCg8QnV0dG9uIGtleT17a2V5Kyt9IHN0eWxlPXt7Y29sb3I6IENvbnN0YW50cy5NRU5VX0JBUl9GR19DT0xPUiwgZm9udFNpemU6ICcxLjEwZW0nLCBwYWRkaW5nOiAnMC41ZW0nLCBtaW5XaWR0aDogJzEuMjVlbSd9fSBvbkNsaWNrPXt0aGlzLm1lbnVDbGljay5iaW5kKHRoaXMsIGl0ZW0ucm91dGUpfT57aXRlbS5uYW1lfTwvQnV0dG9uPilcbiAgICB9KTtcbiAgICBcbiAgICBjb25zdCBtZW51ID0gW107XG4gICAgY29uc3QgdGl0bGUgPSBgJHtDb25zdGFudHMuVElUTEV9IHwgJHtDb25zdGFudHMuVkVSU0lPTn1gO1xuICAgIGNvbnN0IGFwcGJhciA9IHt0aXRsZTogdGl0bGUsIGxvZ286IG51bGwsIG1lbnUgOiBtZW51LCB0b29sYmFyOiB0b29sYmFyfTtcbiAgICBjb25zdCBhcHBCb2R5ID0gUmVhY3QuQ2hpbGRyZW4udG9BcnJheSh0aGlzLnByb3BzLmNoaWxkcmVuKS5maW5kKChpdGVtKT0+e1xuICAgICAgcmV0dXJuIChpdGVtLnByb3BzLnR5cGUgPT09ICdCb2R5JykgPyBpdGVtIDogbnVsbDtcbiAgICB9KTtcblxuICAgIHJldHVybihcbiAgICAgIDxBcHAgYmFyU3R5bGU9e3tiYWNrZ3JvdW5kQ29sb3I6IENvbnN0YW50cy5NRU5VX0JBUl9CR19DT0xPUiwgY29sb3I6IENvbnN0YW50cy5NRU5VX0JBUl9GR19DT0xPUn19IGJhclBvc2l0aW9uPXt0aGlzLnByb3BzLmJhclBvc2l0aW9ufSBwYWdlX3RpdGxlPXthcHBiYXIudGl0bGV9IGxvZ289e2FwcGJhci5sb2dvfSB0b29sYmFyPXthcHBiYXIudG9vbGJhcn0gc2VydmVyPXt0aGlzLnByb3BzLnNlcnZlcn0gdGhlbWU9e251bGx9PlxuICAgICAgICA8R3JpZCBjb250YWluZXIgc3BhY2luZz17MH0gY2xhc3NOYW1lPXtjbGFzc2VzLnBhZ2V9PlxuICAgICAgICAgIDxHcmlkIGl0ZW0geHM9ezEyfSBzbT17MTJ9IG1kPXsxMn0gPlxuICAgICAgICAgICAgPEdyaWQgY29udGFpbmVyIGp1c3RpZnk9J2ZsZXgtc3RhcnQnIGRpcmVjdGlvbj0nY29sdW1uJyBzcGFjaW5nPXswfT5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2NsYXNzZXMuYm9keX0gc3R5bGU9e3t3aWR0aDonMTAwJSd9fT5cbiAgICAgICAgICAgICAgICB7YXBwQm9keX1cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L0dyaWQ+ICAgICAgICAgXG4gICAgICAgICAgPC9HcmlkPlxuICAgICAgICA8L0dyaWQ+XG4gICAgICA8L0FwcD5cbiAgICApXG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgd2l0aFN0eWxlcyhzdHlsZXMpKE1MQkFwcCk7IiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBGb290ZXIgZnJvbSAnam1hcnJveWF2ZS9jb21wb25lbnRzL3V4aS9jb3JlL3BhZ2UvZm9vdGVyJ1xuaW1wb3J0IEhlYWRlciBmcm9tICdqbWFycm95YXZlL2NvbXBvbmVudHMvdXhpL2NvcmUvcGFnZS9oZWFkZXInXG5cbmNsYXNzIEFwcEJvZHkgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICByZW5kZXIoKXtcbiAgICBjb25zdCBhcHAgPSB0aGlzLnByb3BzLmFwcDtcbiAgICBjb25zdCBkYXRhID0gdGhpcy5wcm9wcy5kYXRhO1xuICAgIGNvbnN0IGNoaWxkcmVuID0gdGhpcy5wcm9wcy5jaGlsZHJlbjtcbiAgICByZXR1cm4oXG4gICAgICA8ZGl2IHN0eWxlPXt7cG9zaXRpb246ICdyZWxhdGl2ZSd9fT5cbiAgICAgICAgPEhlYWRlciBhcHA9e2FwcH0gZGF0YT17ZGF0YX0vPlxuICAgICAgICA8ZGl2IHN0eWxlPXt7bWluSGVpZ2h0OiAnOTB2aCd9fT5cbiAgICAgICAgICB7Y2hpbGRyZW59XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8Rm9vdGVyLz5cbiAgICAgIDwvZGl2PlxuICAgIClcbiAgfVxufVxuXG5BcHBCb2R5LmRlZmF1bHRQcm9wcyA9IHtcbiAgdHlwZTogJ0JvZHknLFxufVxuXG5leHBvcnQgZGVmYXVsdCBBcHBCb2R5O1xuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IExpbmsgfSBmcm9tICdyZWFjdC1yb3V0ZXInO1xuaW1wb3J0IExpc3QsIHtMaXN0SXRlbSwgTGlzdEl0ZW1JY29uLCBMaXN0SXRlbVRleHQsfSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9MaXN0JztcbmltcG9ydCBVSUFwcExpc3QgZnJvbSAnY29yZS9jb21wb25lbnRzL2FwcF9saXN0JztcbmltcG9ydCBVSUljb24gZnJvbSAnY29yZS9jb21wb25lbnRzL2ljb24nO1xuaW1wb3J0IE5hdmlnYXRpb24gZnJvbSAnam1hcnJveWF2ZS9jb25mL25hdmlnYXRpb24nO1xuXG5jbGFzcyBBcHBEcmF3ZXIgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuXHRjb25zdHJ1Y3Rvcihwcm9wcyl7XG5cdFx0c3VwZXIocHJvcHMpO1xuXHRcdHRoaXMubmF2aWdhdGlvbiA9IG5ldyBOYXZpZ2F0aW9uKCk7XG5cdH1cblx0cmVuZGVyKCl7XG5cdFx0dmFyIGtleSA9IDA7XG4gIFx0cmV0dXJuKFxuICBcdFx0PFVJQXBwTGlzdD5cblx0XHRcdFx0PExpc3QgZGVuc2U9e3RydWV9PlxuXHRcdFx0XHRcdHt0aGlzLm5hdmlnYXRpb24ub3B0aW9ucy5tYXAoaXRlbT0+XG5cdFx0XHRcdFx0XHQ8TGluayBrZXk9e2tleSsrfSB0bz17e3BhdGhuYW1lOml0ZW0ucm91dGV9fSBjbGFzc05hbWU9eydsaW5rJ30+XG5cdFx0XHRcdFx0XHRcdDxMaXN0SXRlbSBidXR0b24+XG5cdFx0XHRcdFx0XHRcdFx0PExpc3RJdGVtSWNvbj5cblx0XHRcdFx0XHRcdFx0XHRcdDxVSUljb24gaWNvbj17aXRlbS5pY29ufS8+XG5cdFx0XHRcdFx0XHRcdFx0PC9MaXN0SXRlbUljb24+XG5cdFx0XHRcdFx0XHRcdFx0PExpc3RJdGVtVGV4dCBpbnNldCBwcmltYXJ5PXtpdGVtLm5hbWV9IC8+XG5cdFx0XHRcdFx0XHRcdDwvTGlzdEl0ZW0+XG5cdFx0XHRcdFx0XHQ8L0xpbms+XG5cdFx0XHRcdFx0KX1cblx0XHRcdFx0PC9MaXN0PlxuXHRcdFx0PC9VSUFwcExpc3Q+XG5cdCAgICApO1xuICBcdH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgQXBwRHJhd2VyO1xuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCB3aXRoTW9kdWxlIGZyb20gJ2ptYXJyb3lhdmUvY29tcG9uZW50cy91eGkvY29yZS93aXRoLW1vZHVsZSc7XG5pbXBvcnQgR3JpZENvbnRhaW5lciBmcm9tICdqbWFycm95YXZlL2NvbXBvbmVudHMvdXhpL2NvcmUvZ3JpZF9jb250YWluZXInO1xuaW1wb3J0IEdyaWRJdGVtIGZyb20gJ2ptYXJyb3lhdmUvY29tcG9uZW50cy91eGkvY29yZS9ncmlkX2l0ZW0nO1xuaW1wb3J0IEZvb3RlckxpbmtzIGZyb20gJ2ptYXJyb3lhdmUvY29tcG9uZW50cy91eGkvY29yZS9mb290ZXJfbGlua3MnO1xuaW1wb3J0IFNvY2lhbE5ldHdvcmtzIGZyb20gJ3NoYXJlZC9qbWFycm95YXZlL3NvY2lhbF9uZXR3b3Jrcyc7XG5pbXBvcnQgTUJsb2NrIGZyb20gJ2NvcmUvY29tcG9uZW50cy9tb2NrdXAvYmxvY2snO1xuXG5pbXBvcnQgXCIuL2Zvb3Rlci5zY3NzXCI7XG5cbmNsYXNzIEZvb3RlckNvbXBvbmVudCBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG5cdHJlbmRlcigpe1x0XG5cdFx0Y29uc3QgZGF0YSA9IHRoaXMucHJvcHMuZGF0YTtcblx0XHRyZXR1cm4gKFxuXHRcdFx0PGRpdiBjbGFzc05hbWU9XCJtb2QtZm9vdGVyXCI+XG5cdFx0XHRcdDxHcmlkQ29udGFpbmVyIHNwYWNpbmc9ezh9PlxuXHRcdFx0XHRcdDxHcmlkSXRlbSB4cz17MTJ9PlxuXHRcdFx0XHRcdFx0PEZvb3RlckxpbmtzIGRhdGE9e2RhdGF9Lz5cblx0XHRcdFx0XHQ8L0dyaWRJdGVtPlx0XHRcdFx0XHRcblx0XHRcdFx0XHQ8R3JpZEl0ZW0geHM9ezEyfSBzdHlsZT17e3RleHRBbGlnbjogJ2NlbnRlcid9fT5cblx0XHRcdFx0XHRcdDxTb2NpYWxOZXR3b3Jrcy8+XG5cdFx0XHRcdFx0PC9HcmlkSXRlbT5cblx0XHRcdFx0PC9HcmlkQ29udGFpbmVyPiBcblx0XHRcdDwvZGl2Plx0XHRcdFxuXHRcdClcblx0fVxuXG59XG5cbmV4cG9ydCBkZWZhdWx0IHdpdGhNb2R1bGUoRm9vdGVyQ29tcG9uZW50KTsiLCJcbnZhciBjb250ZW50ID0gcmVxdWlyZShcIiEhLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vZnJhbWV3b3Jrcy93ZWJhcHBzL3N0YXJ0dXAvbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvaW5kZXguanMhLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vZnJhbWV3b3Jrcy93ZWJhcHBzL3N0YXJ0dXAvbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2xpYi9sb2FkZXIuanMhLi9mb290ZXIuc2Nzc1wiKTtcblxuaWYodHlwZW9mIGNvbnRlbnQgPT09ICdzdHJpbmcnKSBjb250ZW50ID0gW1ttb2R1bGUuaWQsIGNvbnRlbnQsICcnXV07XG5cbnZhciB0cmFuc2Zvcm07XG52YXIgaW5zZXJ0SW50bztcblxuXG5cbnZhciBvcHRpb25zID0ge1wiaG1yXCI6dHJ1ZX1cblxub3B0aW9ucy50cmFuc2Zvcm0gPSB0cmFuc2Zvcm1cbm9wdGlvbnMuaW5zZXJ0SW50byA9IHVuZGVmaW5lZDtcblxudmFyIHVwZGF0ZSA9IHJlcXVpcmUoXCIhLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vZnJhbWV3b3Jrcy93ZWJhcHBzL3N0YXJ0dXAvbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9saWIvYWRkU3R5bGVzLmpzXCIpKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5pZihjb250ZW50LmxvY2FscykgbW9kdWxlLmV4cG9ydHMgPSBjb250ZW50LmxvY2FscztcblxuaWYobW9kdWxlLmhvdCkge1xuXHRtb2R1bGUuaG90LmFjY2VwdChcIiEhLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vZnJhbWV3b3Jrcy93ZWJhcHBzL3N0YXJ0dXAvbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvaW5kZXguanMhLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vZnJhbWV3b3Jrcy93ZWJhcHBzL3N0YXJ0dXAvbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2xpYi9sb2FkZXIuanMhLi9mb290ZXIuc2Nzc1wiLCBmdW5jdGlvbigpIHtcblx0XHR2YXIgbmV3Q29udGVudCA9IHJlcXVpcmUoXCIhIS4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL2ZyYW1ld29ya3Mvd2ViYXBwcy9zdGFydHVwL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2luZGV4LmpzIS4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL2ZyYW1ld29ya3Mvd2ViYXBwcy9zdGFydHVwL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9saWIvbG9hZGVyLmpzIS4vZm9vdGVyLnNjc3NcIik7XG5cblx0XHRpZih0eXBlb2YgbmV3Q29udGVudCA9PT0gJ3N0cmluZycpIG5ld0NvbnRlbnQgPSBbW21vZHVsZS5pZCwgbmV3Q29udGVudCwgJyddXTtcblxuXHRcdHZhciBsb2NhbHMgPSAoZnVuY3Rpb24oYSwgYikge1xuXHRcdFx0dmFyIGtleSwgaWR4ID0gMDtcblxuXHRcdFx0Zm9yKGtleSBpbiBhKSB7XG5cdFx0XHRcdGlmKCFiIHx8IGFba2V5XSAhPT0gYltrZXldKSByZXR1cm4gZmFsc2U7XG5cdFx0XHRcdGlkeCsrO1xuXHRcdFx0fVxuXG5cdFx0XHRmb3Ioa2V5IGluIGIpIGlkeC0tO1xuXG5cdFx0XHRyZXR1cm4gaWR4ID09PSAwO1xuXHRcdH0oY29udGVudC5sb2NhbHMsIG5ld0NvbnRlbnQubG9jYWxzKSk7XG5cblx0XHRpZighbG9jYWxzKSB0aHJvdyBuZXcgRXJyb3IoJ0Fib3J0aW5nIENTUyBITVIgZHVlIHRvIGNoYW5nZWQgY3NzLW1vZHVsZXMgbG9jYWxzLicpO1xuXG5cdFx0dXBkYXRlKG5ld0NvbnRlbnQpO1xuXHR9KTtcblxuXHRtb2R1bGUuaG90LmRpc3Bvc2UoZnVuY3Rpb24oKSB7IHVwZGF0ZSgpOyB9KTtcbn0iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IENvbXBvbmVudCBmcm9tICdjb3JlL2NvbXBvbmVudHMvY29tcG9uZW50JztcbmltcG9ydCBEZWJ1ZyBmcm9tICdqbWFycm95YXZlL2NvbXBvbmVudHMvdXhpL2NvcmUvZGVidWcnO1xuaW1wb3J0IENvbVZlcnNpb24gZnJvbSAnam1hcnJveWF2ZS9jb21wb25lbnRzL3V4aS9jb3JlL2NvbV92ZXJzaW9uJztcbmltcG9ydCBUb3BCYXIgZnJvbSAnam1hcnJveWF2ZS9jb21wb25lbnRzL3V4aS9jb3JlL3RvcF9iYXInO1xuaW1wb3J0IEdyaWRDb250YWluZXIgZnJvbSAnam1hcnJveWF2ZS9jb21wb25lbnRzL3V4aS9jb3JlL2dyaWRfY29udGFpbmVyJztcbmltcG9ydCBHcmlkSXRlbSBmcm9tICdqbWFycm95YXZlL2NvbXBvbmVudHMvdXhpL2NvcmUvZ3JpZF9pdGVtJztcblxuY2xhc3MgSGVhZGVyQ29tcG9uZW50IGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcblx0Y29uc3RydWN0b3IocHJvcHMpe1xuXHRcdHN1cGVyKHByb3BzKTtcblx0fVxuXG5cdHJlbmRlcigpe1x0XG5cdFx0Y29uc3QgZGF0YSA9IHRoaXMucHJvcHMuZGF0YTtcblx0XHRjb25zdCBhcHAgPSB0aGlzLnByb3BzLmFwcDtcblx0XHRyZXR1cm4gKFxuXHRcdFx0PEdyaWRDb250YWluZXI+XG5cdFx0XHRcdDxHcmlkSXRlbT5cblx0XHRcdFx0XHQ8Q29tVmVyc2lvbi8+XG5cdFx0XHQgICAgICBcdDxEZWJ1ZyBhcHA9e2FwcH0gZGF0YT17ZGF0YX0vPlxuXHRcdFx0XHQ8L0dyaWRJdGVtPlxuXHRcdFx0XHQ8R3JpZEl0ZW0+XG5cdFx0XHRcdFx0PFRvcEJhciBkYXRhPXthcHB9Lz5cblx0XHRcdFx0PC9HcmlkSXRlbT5cblx0XHRcdDwvR3JpZENvbnRhaW5lcj5cblx0XHQpXG5cdH1cblxufVxuXG5leHBvcnQgZGVmYXVsdCBDb21wb25lbnQoSGVhZGVyQ29tcG9uZW50KTsiLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5pbXBvcnQgQ29tcG9uZW50IGZyb20gJ2NvcmUvY29tcG9uZW50cy9jb21wb25lbnQnO1xuaW1wb3J0IEdyaWRDb250YWluZXIgZnJvbSAnam1hcnJveWF2ZS9jb21wb25lbnRzL3V4aS9jb3JlL2dyaWRfY29udGFpbmVyJztcbmltcG9ydCBHcmlkSXRlbSBmcm9tICdqbWFycm95YXZlL2NvbXBvbmVudHMvdXhpL2NvcmUvZ3JpZF9pdGVtJztcbmltcG9ydCBCbG9jayBmcm9tICdqbWFycm95YXZlL2NvbXBvbmVudHMvdXhpL2hvbWUvYmxvY2snO1xuaW1wb3J0IFdoYXRzSG90IGZyb20gJ2ptYXJyb3lhdmUvY29tcG9uZW50cy91eGkvY29yZS93aGF0c19ob3QnO1xuXG5jbGFzcyBUb3BCYXIgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICByZW5kZXIoKSB7XG4gIFx0Y29uc3QgZGF0YSA9IHRoaXMucHJvcHMuZGF0YTtcbiAgICByZXR1cm4gKFxuICAgIFx0PEJsb2NrPlxuXHRcdFx0PEdyaWRDb250YWluZXI+XG5cdFx0XHRcdDxHcmlkSXRlbSB4cz17MTJ9PlxuXHRcdFx0XHRcdDxXaGF0c0hvdCBkYXRhPXtkYXRhLmhvdH0vPlxuXHRcdFx0XHQ8L0dyaWRJdGVtPlxuXHRcdFx0PC9HcmlkQ29udGFpbmVyPlxuXHRcdDwvQmxvY2s+XG4gICAgKTtcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBDb21wb25lbnQoVG9wQmFyKTsiLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5pbXBvcnQgUG9zdExpbmsgZnJvbSAnam1hcnJveWF2ZS9jb21wb25lbnRzL2RhdGEvcG9zdF9saW5rJztcbmltcG9ydCBDb21wb25lbnQgZnJvbSAnY29yZS9jb21wb25lbnRzL2NvbXBvbmVudCc7XG5pbXBvcnQgJy4vd2hhdHNfaG90LnNjc3MnO1xuXG5jbGFzcyBIb3RCYXJDb21wb25lbnQgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICByZW5kZXIoKSB7XG4gIFx0Y29uc3QgZGF0YSA9IHRoaXMucHJvcHMuZGF0YTtcbiAgICByZXR1cm4gKFxuICAgICAgPGRpdiBjbGFzc05hbWU9J21vZC13aGF0cy1ob3QnPlxuICAgICAgXHQ8UG9zdExpbmsgc2x1Zz17ZGF0YS5zbHVnfSBjYXRlZ29yeT17ZGF0YS5hcmVhfT5cbiAgICAgIFx0XHR7ZGF0YS5hcmVhfSA+IHtkYXRhLnRpdGxlfVxuICAgICAgXHQ8L1Bvc3RMaW5rPlxuICAgICAgPC9kaXY+XG4gICAgKTtcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBDb21wb25lbnQoSG90QmFyQ29tcG9uZW50KTsiLCJcbnZhciBjb250ZW50ID0gcmVxdWlyZShcIiEhLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vZnJhbWV3b3Jrcy93ZWJhcHBzL3N0YXJ0dXAvbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvaW5kZXguanMhLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vZnJhbWV3b3Jrcy93ZWJhcHBzL3N0YXJ0dXAvbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2xpYi9sb2FkZXIuanMhLi93aGF0c19ob3Quc2Nzc1wiKTtcblxuaWYodHlwZW9mIGNvbnRlbnQgPT09ICdzdHJpbmcnKSBjb250ZW50ID0gW1ttb2R1bGUuaWQsIGNvbnRlbnQsICcnXV07XG5cbnZhciB0cmFuc2Zvcm07XG52YXIgaW5zZXJ0SW50bztcblxuXG5cbnZhciBvcHRpb25zID0ge1wiaG1yXCI6dHJ1ZX1cblxub3B0aW9ucy50cmFuc2Zvcm0gPSB0cmFuc2Zvcm1cbm9wdGlvbnMuaW5zZXJ0SW50byA9IHVuZGVmaW5lZDtcblxudmFyIHVwZGF0ZSA9IHJlcXVpcmUoXCIhLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vZnJhbWV3b3Jrcy93ZWJhcHBzL3N0YXJ0dXAvbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9saWIvYWRkU3R5bGVzLmpzXCIpKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5pZihjb250ZW50LmxvY2FscykgbW9kdWxlLmV4cG9ydHMgPSBjb250ZW50LmxvY2FscztcblxuaWYobW9kdWxlLmhvdCkge1xuXHRtb2R1bGUuaG90LmFjY2VwdChcIiEhLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vZnJhbWV3b3Jrcy93ZWJhcHBzL3N0YXJ0dXAvbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvaW5kZXguanMhLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vZnJhbWV3b3Jrcy93ZWJhcHBzL3N0YXJ0dXAvbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2xpYi9sb2FkZXIuanMhLi93aGF0c19ob3Quc2Nzc1wiLCBmdW5jdGlvbigpIHtcblx0XHR2YXIgbmV3Q29udGVudCA9IHJlcXVpcmUoXCIhIS4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL2ZyYW1ld29ya3Mvd2ViYXBwcy9zdGFydHVwL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2luZGV4LmpzIS4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL2ZyYW1ld29ya3Mvd2ViYXBwcy9zdGFydHVwL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9saWIvbG9hZGVyLmpzIS4vd2hhdHNfaG90LnNjc3NcIik7XG5cblx0XHRpZih0eXBlb2YgbmV3Q29udGVudCA9PT0gJ3N0cmluZycpIG5ld0NvbnRlbnQgPSBbW21vZHVsZS5pZCwgbmV3Q29udGVudCwgJyddXTtcblxuXHRcdHZhciBsb2NhbHMgPSAoZnVuY3Rpb24oYSwgYikge1xuXHRcdFx0dmFyIGtleSwgaWR4ID0gMDtcblxuXHRcdFx0Zm9yKGtleSBpbiBhKSB7XG5cdFx0XHRcdGlmKCFiIHx8IGFba2V5XSAhPT0gYltrZXldKSByZXR1cm4gZmFsc2U7XG5cdFx0XHRcdGlkeCsrO1xuXHRcdFx0fVxuXG5cdFx0XHRmb3Ioa2V5IGluIGIpIGlkeC0tO1xuXG5cdFx0XHRyZXR1cm4gaWR4ID09PSAwO1xuXHRcdH0oY29udGVudC5sb2NhbHMsIG5ld0NvbnRlbnQubG9jYWxzKSk7XG5cblx0XHRpZighbG9jYWxzKSB0aHJvdyBuZXcgRXJyb3IoJ0Fib3J0aW5nIENTUyBITVIgZHVlIHRvIGNoYW5nZWQgY3NzLW1vZHVsZXMgbG9jYWxzLicpO1xuXG5cdFx0dXBkYXRlKG5ld0NvbnRlbnQpO1xuXHR9KTtcblxuXHRtb2R1bGUuaG90LmRpc3Bvc2UoZnVuY3Rpb24oKSB7IHVwZGF0ZSgpOyB9KTtcbn0iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IEVycm9yQm91bmRyeSBmcm9tICdjb3JlL2NvbXBvbmVudHMvZXJyb3InO1xuaW1wb3J0IExvYWRpbmcgZnJvbSAnY29yZS9jb21wb25lbnRzL2xvYWRpbmcuanMnO1xuaW1wb3J0IENvbnN0YW50cyBmcm9tICdqbWFycm95YXZlL2NvbmYvY29uc3RhbnRzJ1xuXG5jb25zdCB3aXRoTW9kdWxlID0gTW9kdWxlQ29tcG9uZW50ID0+XG5cdGNsYXNzIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcblx0XHRyZW5kZXIoKXtcblx0XHRcdGNvbnN0IHRpdGxlID0gKFwidGl0bGVcIiBpbiB0aGlzLnByb3BzKSA/IHRoaXMucHJvcHMudGl0bGUgOiBudWxsO1xuXHRcdFx0Y29uc3QgcGggPSAoXCJwbGFjZWhvbGRlclwiIGluIHRoaXMucHJvcHMpID8gdGhpcy5wcm9wcy5wbGFjZWhvbGRlciA6IHt9O1xuXHRcdFx0Y29uc3QgcGhXID0gKHBoLndpZHRoKSA/IHBoLndpZHRoIDogJzEwMCUnO1xuXHRcdFx0Y29uc3QgcGhIID0gKHBoLmhlaWdodCkgPyBwaC5oZWlnaHQgOiAnMjUwJztcblxuXHRcdFx0cmV0dXJuIChcblx0XHRcdFx0PEVycm9yQm91bmRyeSBmcm9tPXt0aXRsZX0gc3R5bGU9e3t3aWR0aDonMTAwJSd9fT5cblx0XHRcdFx0XHQ8TW9kdWxlQ29tcG9uZW50IHsuLi50aGlzLnByb3BzfS8+XG5cdFx0XHRcdDwvRXJyb3JCb3VuZHJ5PlxuXHRcdFx0KTtcblx0XHR9XG5cdH1cblxuZXhwb3J0IGRlZmF1bHQgd2l0aE1vZHVsZTsiLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IExvYWRhYmxlIGZyb20gJ3JlYWN0LWxvYWRhYmxlJztcbmltcG9ydCBMb2FkaW5nIGZyb20gJ2NvcmUvY29tcG9uZW50cy9sb2FkaW5nJztcbmltcG9ydCBBcHAgXHRcdGZyb20gJ2ptYXJyb3lhdmUvY29tcG9uZW50cy91eGkvY29yZS9wYWdlL2FwcCc7XG5pbXBvcnQgQXBwQm9keSBcdGZyb20gJ2ptYXJyb3lhdmUvY29tcG9uZW50cy91eGkvY29yZS9wYWdlL2JvZHknO1xuXG5jb25zdCBIb21lUHJveHkgPSBMb2FkYWJsZSh7XG4gIGxvYWRlcjogKCkgPT4gaW1wb3J0KCdqbWFycm95YXZlL2NvbXBvbmVudHMvdXhpL2N2L2xheW91dC9sYXlvdXQtcHJveHknKSxcbiAgbG9hZGluZzogTG9hZGluZyxcbn0pO1xuXG5jbGFzcyBQYWdlIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcblx0Y29uc3RydWN0b3IocHJvcHMsY29udGV4dCkge1xuXHRcdHN1cGVyKHByb3BzLGNvbnRleHQpO1xuXHRcdHRoaXMuYXBpID0gd2luZG93Ll9fYXBpO1xuXHR9XG5cblx0Y29tcG9uZW50RGlkTW91bnQoKXtcblx0fVxuXG5cdHJlbmRlcigpe1xuXHRcdGNvbnN0IGFwcCA9IHRoaXMucHJvcHMuYXBwO1xuXHRcdHZhciBrZXkgPSAwO1xuXHRcdHJldHVybiAoXG5cdFx0XHQ8QXBwIHJvdXRlcj17dGhpcy5wcm9wcy5yb3V0ZXJ9IGFwcD17dGhpcy5wcm9wcy5hcHB9PlxuXHRcdFx0XHQ8QXBwQm9keSBwYXRoPXtbe3RleHQ6ICdob21lJywgcm91dGU6ICcvJ31dfSBhcHA9e3RoaXMucHJvcHMuYXBwfSBkYXRhPXt7aG9tZTogdGhpcy5wcm9wcy5wYWdlfX0+XG5cdFx0XHRcdFx0PEhvbWVQcm94eSBkYXRhPXt0aGlzLnByb3BzLnBhZ2UuZGF0YX0vPlxuXHRcdFx0XHQ8L0FwcEJvZHk+XG5cdFx0XHQ8L0FwcD5cblx0XHQpO1xuXHR9XG59XG5cbmV4cG9ydCBkZWZhdWx0IFBhZ2U7IiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBFcnJvckJvdW5kcnkgZnJvbSAnY29yZS9jb21wb25lbnRzL2Vycm9yJztcblxuY2xhc3MgQ29tcG9uZW50IGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcblx0cmVuZGVyKCl7XG5cdFx0Y29uc3QgdGl0bGUgPSAodGhpcy5wcm9wcy50aXRsZSAmJiB0aGlzLnByb3BzLnRpdGxlICE9PSBcIlwiKSA/IHRoaXMucHJvcHMudGl0bGUgOiBudWxsO1xuXHRcdGNvbnN0IGNoaWxkcmVuID0gKFwiY29udHJvbFwiIGluIHRoaXMucHJvcHMpID8gdGhpcy5wcm9wcy5jb250cm9sIDogdGhpcy5wcm9wcy5jaGlsZHJlbjtcblx0XHRjb25zdCB2aXNpYmxlID0gKFwiY29udHJvbFwiIGluIHRoaXMucHJvcHMgJiYgdGhpcy5wcm9wcy5jb250cm9sID09IG51bGwpID8gZmFsc2UgOiB0cnVlO1xuXHRcdGNvbnN0IHBhZGRpbmdUb3AgPSAoXCJwYWRkaW5nVG9wXCIgaW4gdGhpcy5wcm9wcykgPyB0aGlzLnByb3BzLnBhZGRpbmdUb3AgOiAnN3B4Jztcblx0XHRjb25zdCBjbGVhbiA9IChcImNsZWFuXCIgaW4gdGhpcy5wcm9wcykgPyB0cnVlIDogZmFsc2U7XG5cdFx0dmFyIGJvcmRlckJvdHRvbSA9ICcxcHggc29saWQgI2VlZSc7XG5cblx0XHRpZighdmlzaWJsZSkgcmV0dXJuIG51bGw7XG5cdFx0aWYoY2xlYW4pIHJldHVybiBjaGlsZHJlbjtcbiBcblx0XHR2YXIga2V5ID0gMDtcdFx0XG5cdFx0cmV0dXJuIChcblx0XHRcdDxkaXYgY2xhc3NOYW1lPSdtb2QtYmxvY2snIHN0eWxlPXt7Ym9yZGVyQm90dG9tOiBib3JkZXJCb3R0b20sIGJhY2tncm91bmRDb2xvcjogJ3doaXRlJywgcGFkZGluZzogJzdweCcsIHBhZGRpbmdUb3A6IHBhZGRpbmdUb3B9fT5cblx0XHRcdFx0e3RpdGxlICYmIDxoMT57dGl0bGV9PC9oMT59XG5cdFx0XHRcdDxkaXYgY2xhc3NOYW1lPSdib2R5Jz5cblx0XHRcdFx0XHQ8RXJyb3JCb3VuZHJ5IGZyb209e3RpdGxlfT5cblx0XHRcdFx0XHRcdHtjaGlsZHJlbn1cblx0XHRcdFx0XHQ8L0Vycm9yQm91bmRyeT5cblx0XHRcdFx0PC9kaXY+XG5cdFx0XHQ8L2Rpdj5cblx0XHQpO1xuXHR9XG59XG5cbmV4cG9ydCBkZWZhdWx0IChDb21wb25lbnQpOyIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgTG9hZGFibGUgZnJvbSAncmVhY3QtbG9hZGFibGUnO1xuaW1wb3J0IExvYWRpbmcgZnJvbSAnY29yZS9jb21wb25lbnRzL2xvYWRpbmcnO1xuaW1wb3J0IEFwcCBcdFx0ZnJvbSAnam1hcnJveWF2ZS9jb21wb25lbnRzL3V4aS9jb3JlL3BhZ2UvYXBwJztcbmltcG9ydCBBcHBCb2R5IFx0ZnJvbSAnam1hcnJveWF2ZS9jb21wb25lbnRzL3V4aS9jb3JlL3BhZ2UvYm9keSc7XG5cbmNvbnN0IEhvbWVQcm94eSA9IExvYWRhYmxlKHtcbiAgbG9hZGVyOiAoKSA9PiBpbXBvcnQoJ2ptYXJyb3lhdmUvY29tcG9uZW50cy91eGkvaG9tZS9sYXlvdXQvaG9tZS1sYXlvdXQtcHJveHknKSxcbiAgbG9hZGluZzogTG9hZGluZyxcbn0pO1xuXG5jbGFzcyBQYWdlIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcblx0Y29uc3RydWN0b3IocHJvcHMsY29udGV4dCkge1xuXHRcdHN1cGVyKHByb3BzLGNvbnRleHQpO1xuXHRcdHRoaXMuYXBpID0gd2luZG93Ll9fYXBpO1xuXHR9XG5cblx0Y29tcG9uZW50RGlkTW91bnQoKXtcblx0fVxuXG5cdHJlbmRlcigpe1xuXHRcdGNvbnN0IGFwcCA9IHRoaXMucHJvcHMuYXBwO1xuXHRcdHZhciBrZXkgPSAwO1xuXHRcdHJldHVybiAoXG5cdFx0XHQ8QXBwIHJvdXRlcj17dGhpcy5wcm9wcy5yb3V0ZXJ9IGFwcD17YXBwfT5cblx0XHRcdFx0PEFwcEJvZHkgcGF0aD17W3t0ZXh0OiAnaG9tZScsIHJvdXRlOiAnLyd9XX0gYXBwPXthcHB9IGRhdGE9e3RoaXMucHJvcHMucGFnZX0+XG5cdFx0XHRcdFx0PEhvbWVQcm94eSBkYXRhPXt0aGlzLnByb3BzLnBhZ2UuZGF0YX0gdHJlbmRzPXt0aGlzLnByb3BzLnBhZ2UudHJlbmRzfS8+XG5cdFx0XHRcdDwvQXBwQm9keT5cblx0XHRcdDwvQXBwPlxuXHRcdCk7XG5cdH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgUGFnZTsiLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IExvYWRhYmxlIGZyb20gJ3JlYWN0LWxvYWRhYmxlJztcbmltcG9ydCBMb2FkaW5nIGZyb20gJ2NvcmUvY29tcG9uZW50cy9sb2FkaW5nJztcbmltcG9ydCBBcHAgXHRcdGZyb20gJ2ptYXJyb3lhdmUvY29tcG9uZW50cy91eGkvY29yZS9wYWdlL2FwcCc7XG5pbXBvcnQgQXBwQm9keSBcdGZyb20gJ2ptYXJyb3lhdmUvY29tcG9uZW50cy91eGkvY29yZS9wYWdlL2JvZHknO1xuXG5jb25zdCBBbmRyb2lkUHJveHkgPSBMb2FkYWJsZSh7XG4gIGxvYWRlcjogKCkgPT4gaW1wb3J0KCdqbWFycm95YXZlL2NvbXBvbmVudHMvdXhpL2tiL2FuZHJvaWQvbGF5b3V0L2xheW91dC1wcm94eScpLFxuICBsb2FkaW5nOiBMb2FkaW5nLFxufSk7XG5cbmNsYXNzIFBhZ2UgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuXHRjb25zdHJ1Y3Rvcihwcm9wcyxjb250ZXh0KSB7XG5cdFx0c3VwZXIocHJvcHMsY29udGV4dCk7XG5cdFx0dGhpcy5hcGkgPSB3aW5kb3cuX19hcGk7XG5cdH1cblxuXHRjb21wb25lbnREaWRNb3VudCgpe1xuXHR9XG5cblx0cmVuZGVyKCl7XG5cdFx0Y29uc3QgYXBwID0gdGhpcy5wcm9wcy5hcHA7XG5cdFx0dmFyIGtleSA9IDA7XG5cdFx0cmV0dXJuIChcblx0XHRcdDxBcHAgcm91dGVyPXt0aGlzLnByb3BzLnJvdXRlcn0gYXBwPXt0aGlzLnByb3BzLmFwcH0+XG5cdFx0XHRcdDxBcHBCb2R5IHBhdGg9e1t7dGV4dDogJ2hvbWUnLCByb3V0ZTogJy8nfV19IGFwcD17dGhpcy5wcm9wcy5hcHB9IGRhdGE9e3tob21lOiB0aGlzLnByb3BzLnBhZ2V9fT5cblx0XHRcdFx0XHR7KHRoaXMucHJvcHMuY29tcG9uZW50ID09ICdhbmRyb2lkJykgPyA8QW5kcm9pZFByb3h5IGRhdGE9e3RoaXMucHJvcHMucGFnZS5kYXRhfS8+IDogXCJcIn1cblx0XHRcdFx0PC9BcHBCb2R5PlxuXHRcdFx0PC9BcHA+XG5cdFx0KTtcblx0fVxufVxuXG5leHBvcnQgZGVmYXVsdCBQYWdlOyIsImltcG9ydCBDb25mIGZyb20gJ2ptYXJyb3lhdmUvY29uZi92YWx1ZXMvZGVmYXVsdCc7XG5pbXBvcnQgVmVyc2lvbnMgZnJvbSAnam1hcnJveWF2ZS9jb25mL3ZlcnNpb25zJztcblxuY2xhc3MgQ29uc3RhbnRzIHtcbn1cblxuQ29uc3RhbnRzLkRFQlVHID0gQ29uZi5ERUJVRztcblxuQ29uc3RhbnRzLkxPQ0FMID0gQ29uZi5MT0NBTDtcbkNvbnN0YW50cy5USVRMRSA9IFwiSk1BcnJveWF2ZSAtIENpZW5jaWFzIGRlIGxhIENvbXB1dGFjacOzblwiO1xuQ29uc3RhbnRzLlZFUlNJT04gPSBDb25mLlZFUlNJT047XG5cbkNvbnN0YW50cy5NRU5VX0JBUl9GR19DT0xPUiA9IFwiI0ZGRlwiO1xuQ29uc3RhbnRzLk1FTlVfQkFSX0JHX0NPTE9SID0gXCIjMzMzXCI7XG5cbkNvbnN0YW50cy5VWElfVkVSU0lPTlMgPSBWZXJzaW9ucy5MT0c7XG5cblxuQ29uc3RhbnRzLkNPTV9DVVJSRU5UID0gQ29uc3RhbnRzLlVYSV9WRVJTSU9OUy5maW5kKChpdGVtKSA9PiAoaXRlbS5pZCA9PSBDb25mLkRFRkFVTFRfVVhJKSA/IGl0ZW0gOiBudWxsKTtcblxuXG5Db25zdGFudHMuQ09NSUQgPSBDb25zdGFudHMuQ09NX0NVUlJFTlQuaWQ7XG5Db25zdGFudHMuQ09NRiA9IENvbnN0YW50cy5DT01fQ1VSUkVOVC5mYW1pbHk7XG5Db25zdGFudHMuQ09NViA9IENvbnN0YW50cy5DT01fQ1VSUkVOVC52ZXJzaW9uO1xuXG5Db25zdGFudHMuQ09NX1NXSVRDSCA9IENvbmYuQ09NX1NXSVRDSDtcblxuZXhwb3J0IGRlZmF1bHQgKENvbnN0YW50cyk7IiwiaW1wb3J0IEJsYW5rQ29tcG9uZW50IGZyb20gJ2ptYXJyb3lhdmUvcGFnZXMvYmxhbmsnO1xuaW1wb3J0IEhvbWVDb21wb25lbnQgZnJvbSAnam1hcnJveWF2ZS9wYWdlcy9ob21lJztcbmltcG9ydCBCbG9nQ29tcG9uZW50IGZyb20gJ2ptYXJyb3lhdmUvcGFnZXMvYmxvZyc7XG5pbXBvcnQgTGFic0NvbXBvbmVudCBmcm9tICdqbWFycm95YXZlL3BhZ2VzL2xhYnMnO1xuaW1wb3J0IEJsb2dQb3N0Q29tcG9uZW50IGZyb20gJ2ptYXJyb3lhdmUvcGFnZXMvYmxvZ19wb3N0JztcbmltcG9ydCBQcm9qZWN0Q29tcG9uZW50IGZyb20gJ2ptYXJyb3lhdmUvcGFnZXMvbGFic19wcm9qZWN0JztcbmltcG9ydCBDVkNvbXBvbmVudCBmcm9tICdqbWFycm95YXZlL3BhZ2VzL2N2JztcbmltcG9ydCBLQkNvbXBvbmVudCBmcm9tICdqbWFycm95YXZlL3BhZ2VzL2tiJztcbmltcG9ydCBLQlBvc3RDb21wb25lbnQgZnJvbSAnam1hcnJveWF2ZS9wYWdlcy9rYl9wb3N0JztcbmltcG9ydCBLQlBvc3RBbmRyb2lkQ29tcG9uZW50IGZyb20gJ2ptYXJyb3lhdmUvcGFnZXMva2JfcG9zdF9hbmRyb2lkJztcblxuY2xhc3MgTmF2aWdhdGlvbiB7XG4gIGNvbnN0cnVjdG9yKCl7XG4gICAgdGhpcy5vcHRpb25zID0gW1xuXHRcdHtcblx0XHRcdHNob3dJbk1lbnU6IHRydWUsIFxuXHRcdFx0bmFtZTogJ0hvbWUnLCBcblx0XHRcdGljb246IG51bGwsIFxuXHRcdFx0cm91dGU6ICcvJywgXG5cdFx0XHRjb21wb25lbnQ6IEhvbWVDb21wb25lbnRcblx0XHR9LFxuXHRcdHtcblx0XHRcdHNob3dJbk1lbnU6IHRydWUsIFxuXHRcdFx0bmFtZTogJ0Jsb2cnLCBcblx0XHRcdGljb246IG51bGwsIFxuXHRcdFx0cm91dGU6ICcvYmxvZycsIFxuXHRcdFx0Y29tcG9uZW50OiBCbG9nQ29tcG9uZW50XG5cdFx0fSxcblx0XHR7XG5cdFx0XHRzaG93SW5NZW51OiBmYWxzZSwgXG5cdFx0XHRuYW1lOiAnQmxvZyBQb3N0JywgXG5cdFx0XHRpY29uOiAnYmxvZycsIFxuXHRcdFx0cm91dGU6ICcvYmxvZy86eWVhci86bW9udGgvOmRheS86cG9zdCcsIFxuXHRcdFx0Y29tcG9uZW50OiBCbG9nUG9zdENvbXBvbmVudFxuXHRcdH0sXG5cdFx0e1xuXHRcdFx0c2hvd0luTWVudTogdHJ1ZSwgXG5cdFx0XHRuYW1lOiAnS0InLCBcblx0XHRcdGljb246IG51bGwsIFxuXHRcdFx0cm91dGU6ICcva2InLCBcblx0XHRcdGNvbXBvbmVudDogS0JDb21wb25lbnRcblx0XHR9LFxuXHRcdHtcblx0XHRcdHNob3dJbk1lbnU6IGZhbHNlLCBcblx0XHRcdG5hbWU6ICdLQiBQb3N0IC0gQW5kcm9pZCcsIFxuXHRcdFx0aWNvbjogJ2Jsb2cnLCBcblx0XHRcdHJvdXRlOiAnL2tiL2FuZHJvaWQnLCBcblx0XHRcdGNvbXBvbmVudDogS0JQb3N0QW5kcm9pZENvbXBvbmVudFxuXHRcdH0sXG5cdFx0e1xuXHRcdFx0c2hvd0luTWVudTogZmFsc2UsIFxuXHRcdFx0bmFtZTogJ0tCIFBvc3QnLCBcblx0XHRcdGljb246ICdibG9nJywgXG5cdFx0XHRyb3V0ZTogJy9rYi86cG9zdCcsIFxuXHRcdFx0Y29tcG9uZW50OiBLQlBvc3RDb21wb25lbnRcblx0XHR9LFxuXHRcdHtcblx0XHRcdHNob3dJbk1lbnU6IHRydWUsIFxuXHRcdFx0bmFtZTogJ0xhYnMnLCBcblx0XHRcdGljb246IG51bGwsIFxuXHRcdFx0cm91dGU6ICcvbGFicycsIFxuXHRcdFx0Y29tcG9uZW50OiBMYWJzQ29tcG9uZW50XG5cdFx0fSxcblx0XHR7XG5cdFx0XHRzaG93SW5NZW51OiBmYWxzZSwgXG5cdFx0XHRuYW1lOiAnUHJvamVjdCcsIFxuXHRcdFx0aWNvbjogJ2Jsb2cnLCBcblx0XHRcdHJvdXRlOiAnL2xhYnMvOnByb2plY3QnLCBcblx0XHRcdGNvbXBvbmVudDogUHJvamVjdENvbXBvbmVudFxuXHRcdH0sXG5cdFx0e1xuXHRcdFx0c2hvd0luTWVudTogdHJ1ZSwgXG5cdFx0XHRuYW1lOiAnQWNlcmNhJywgXG5cdFx0XHRpY29uOiBudWxsLCBcblx0XHRcdHJvdXRlOiAnL2FjZXJjYScsIFxuXHRcdFx0Y29tcG9uZW50OiBDVkNvbXBvbmVudFxuXHRcdH0sXG5cdF07XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgTmF2aWdhdGlvbjsiLCJjbGFzcyBDb25mIHtcbn1cblxuQ29uZi5WRVJTSU9OID0gXCIwLjEuMFwiO1xuQ29uZi5ERUJVRyA9IGZhbHNlO1xuQ29uZi5MT0NBTCA9IHRydWU7XG5Db25mLkNPTV9TV0lUQ0ggPSBmYWxzZTtcbkNvbmYuREVGQVVMVF9VWEkgPSAxO1xuXG5leHBvcnQgZGVmYXVsdCAoQ29uZik7IiwiaW1wb3J0IENvbmYgZnJvbSAnam1hcnJveWF2ZS9jb25mL3ZhbHVlcy9kZWZhdWx0JztcblxuY2xhc3MgVmVyc2lvbnMge1xufVxuXG4vKlxuLSAwLjEuMFxuXHQtIFxuKi9cblxuVmVyc2lvbnMuTE9HID0gW1xuXHR7aWQgOiAxLCBcdGZhbWlseTogJ21hdGVyaWFsJyxcdFx0XHR2ZXJzaW9uOiBbMCwxLDBdLCBcdFx0dmlzaWJsZTogdHJ1ZX0sXG5dXG5cbmV4cG9ydCBkZWZhdWx0IChWZXJzaW9ucyk7IiwiaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IFJvdXRlciwgaGFzaEhpc3RvcnksIFJvdXRlLCBMaW5rIH0gZnJvbSAncmVhY3Qtcm91dGVyJztcbmltcG9ydCB7cm9vdH0gZnJvbSAnYmFvYmFiLXJlYWN0L2hpZ2hlci1vcmRlcic7XG5pbXBvcnQgQVBJIGZyb20gJ2ptYXJyb3lhdmUvYXBwL2FwaSc7XG5pbXBvcnQgTkFWIGZyb20gJ2ptYXJyb3lhdmUvY29uZi9uYXZpZ2F0aW9uJztcbmltcG9ydCBFcnJvckJvdW5kcnkgZnJvbSAnY29yZS9jb21wb25lbnRzL2Vycm9yJztcblxuaW1wb3J0IHsgUHJvdmlkZXIgfSBmcm9tICdyZWFjdC1yZWR1eCc7XG5pbXBvcnQgeyBDb25maWd1cmVTdG9yZSB9IGZyb20gJ2ptYXJyb3lhdmUvYXBwL3JlZHV4L2NvbmZpZ3VyZVN0b3JlJztcblxuLy9pbXBvcnQgeyBUcmFuc2l0aW9uR3JvdXAsIENTU1RyYW5zaXRpb24gfSBmcm9tICdyZWFjdC10cmFuc2l0aW9uLWdyb3VwJztcbmltcG9ydCBcIi4vaW5kZXguc2Nzc1wiO1xuXG5jbGFzcyBJbmRleCBleHRlbmRzIENvbXBvbmVudCB7XG5cdGNvbnN0cnVjdG9yKHByb3BzKXtcblx0XHRzdXBlcihwcm9wcyk7XG5cdFx0dGhpcy5uYXZpZ2F0aW9uID0gbmV3IE5BVigpO1xuXHR9XG5cdHJlbmRlcigpIHtcblx0XHR2YXIga2V5ID0gMDtcblx0XHRyZXR1cm4gKFxuXHRcdFx0PEVycm9yQm91bmRyeSBmcm9tPVwiL2ptYXJyb3lhdmUvcm9vdFwiPlxuXHRcdFx0XHQ8UHJvdmlkZXIgc3RvcmU9e0NvbmZpZ3VyZVN0b3JlKCl9PlxuXHRcdFx0XHRcdDxSb3V0ZXIgaGlzdG9yeT17aGFzaEhpc3Rvcnl9PlxuXHRcdFx0XHRcdFx0e3RoaXMubmF2aWdhdGlvbi5vcHRpb25zLm1hcChyID0+IFxuXHRcdFx0XHRcdFx0XHQ8Um91dGUga2V5PXtrZXkrK30gcGF0aD17ci5yb3V0ZX0gY29tcG9uZW50PXtyLmNvbXBvbmVudH0vPlxuXHRcdFx0XHRcdFx0KX0gICAgICAgXG5cdFx0XHRcdFx0PC9Sb3V0ZXI+XG5cdFx0XHRcdDwvUHJvdmlkZXI+XG5cdFx0XHQ8L0Vycm9yQm91bmRyeT5cblx0XHQpO1xuXHR9XG59XG5cbmNvbnN0IFJvb3RlZEluZGV4ID0gcm9vdCh3aW5kb3cuX19zdGF0ZSwgSW5kZXgpO1xuZXhwb3J0IGRlZmF1bHQgUm9vdGVkSW5kZXg7IiwiXG52YXIgY29udGVudCA9IHJlcXVpcmUoXCIhIS4uLy4uLy4uLy4uLy4uLy4uL2ZyYW1ld29ya3Mvd2ViYXBwcy9zdGFydHVwL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2luZGV4LmpzIS4uLy4uLy4uLy4uLy4uLy4uL2ZyYW1ld29ya3Mvd2ViYXBwcy9zdGFydHVwL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9saWIvbG9hZGVyLmpzIS4vaW5kZXguc2Nzc1wiKTtcblxuaWYodHlwZW9mIGNvbnRlbnQgPT09ICdzdHJpbmcnKSBjb250ZW50ID0gW1ttb2R1bGUuaWQsIGNvbnRlbnQsICcnXV07XG5cbnZhciB0cmFuc2Zvcm07XG52YXIgaW5zZXJ0SW50bztcblxuXG5cbnZhciBvcHRpb25zID0ge1wiaG1yXCI6dHJ1ZX1cblxub3B0aW9ucy50cmFuc2Zvcm0gPSB0cmFuc2Zvcm1cbm9wdGlvbnMuaW5zZXJ0SW50byA9IHVuZGVmaW5lZDtcblxudmFyIHVwZGF0ZSA9IHJlcXVpcmUoXCIhLi4vLi4vLi4vLi4vLi4vLi4vZnJhbWV3b3Jrcy93ZWJhcHBzL3N0YXJ0dXAvbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9saWIvYWRkU3R5bGVzLmpzXCIpKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5pZihjb250ZW50LmxvY2FscykgbW9kdWxlLmV4cG9ydHMgPSBjb250ZW50LmxvY2FscztcblxuaWYobW9kdWxlLmhvdCkge1xuXHRtb2R1bGUuaG90LmFjY2VwdChcIiEhLi4vLi4vLi4vLi4vLi4vLi4vZnJhbWV3b3Jrcy93ZWJhcHBzL3N0YXJ0dXAvbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvaW5kZXguanMhLi4vLi4vLi4vLi4vLi4vLi4vZnJhbWV3b3Jrcy93ZWJhcHBzL3N0YXJ0dXAvbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2xpYi9sb2FkZXIuanMhLi9pbmRleC5zY3NzXCIsIGZ1bmN0aW9uKCkge1xuXHRcdHZhciBuZXdDb250ZW50ID0gcmVxdWlyZShcIiEhLi4vLi4vLi4vLi4vLi4vLi4vZnJhbWV3b3Jrcy93ZWJhcHBzL3N0YXJ0dXAvbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvaW5kZXguanMhLi4vLi4vLi4vLi4vLi4vLi4vZnJhbWV3b3Jrcy93ZWJhcHBzL3N0YXJ0dXAvbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2xpYi9sb2FkZXIuanMhLi9pbmRleC5zY3NzXCIpO1xuXG5cdFx0aWYodHlwZW9mIG5ld0NvbnRlbnQgPT09ICdzdHJpbmcnKSBuZXdDb250ZW50ID0gW1ttb2R1bGUuaWQsIG5ld0NvbnRlbnQsICcnXV07XG5cblx0XHR2YXIgbG9jYWxzID0gKGZ1bmN0aW9uKGEsIGIpIHtcblx0XHRcdHZhciBrZXksIGlkeCA9IDA7XG5cblx0XHRcdGZvcihrZXkgaW4gYSkge1xuXHRcdFx0XHRpZighYiB8fCBhW2tleV0gIT09IGJba2V5XSkgcmV0dXJuIGZhbHNlO1xuXHRcdFx0XHRpZHgrKztcblx0XHRcdH1cblxuXHRcdFx0Zm9yKGtleSBpbiBiKSBpZHgtLTtcblxuXHRcdFx0cmV0dXJuIGlkeCA9PT0gMDtcblx0XHR9KGNvbnRlbnQubG9jYWxzLCBuZXdDb250ZW50LmxvY2FscykpO1xuXG5cdFx0aWYoIWxvY2FscykgdGhyb3cgbmV3IEVycm9yKCdBYm9ydGluZyBDU1MgSE1SIGR1ZSB0byBjaGFuZ2VkIGNzcy1tb2R1bGVzIGxvY2Fscy4nKTtcblxuXHRcdHVwZGF0ZShuZXdDb250ZW50KTtcblx0fSk7XG5cblx0bW9kdWxlLmhvdC5kaXNwb3NlKGZ1bmN0aW9uKCkgeyB1cGRhdGUoKTsgfSk7XG59IiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IGJyYW5jaCB9IGZyb20gJ2Jhb2JhYi1yZWFjdC9oaWdoZXItb3JkZXInO1xuaW1wb3J0IHsgd2l0aFJvdXRlciB9IGZyb20gJ3JlYWN0LXJvdXRlci1kb20nXG5pbXBvcnQgQmxhbmsgZnJvbSAnam1hcnJveWF2ZS9jb21wb25lbnRzL3V4aS9ibGFuay9wYWdlJztcblxuY2xhc3MgUGFnZSBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG5cdGNvbnN0cnVjdG9yKHByb3BzLGNvbnRleHQpIHtcblx0XHRzdXBlcihwcm9wcyxjb250ZXh0KTtcblx0XHR0aGlzLmFwaSA9IHdpbmRvdy5fX2FwaTtcblx0fVxuXG5cdGNvbXBvbmVudERpZE1vdW50KCl7XG5cdH1cblxuXHRyZW5kZXIoKXtcblx0XHRyZXR1cm4gPEJsYW5rIHsuLi50aGlzLnByb3BzfS8+XG5cdH1cbn1cblxuUGFnZSA9IGJyYW5jaCh7XG5cdGFwcDogWydhcHAnXVxufSwgUGFnZSk7XG5cbndpdGhSb3V0ZXIoUGFnZSk7XG5leHBvcnQgZGVmYXVsdCBQYWdlOyIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBjb25uZWN0IH0gZnJvbSAncmVhY3QtcmVkdXgnO1xuaW1wb3J0IHticmFuY2h9IGZyb20gJ2Jhb2JhYi1yZWFjdC9oaWdoZXItb3JkZXInO1xuaW1wb3J0IHsgd2l0aFJvdXRlciB9IGZyb20gJ3JlYWN0LXJvdXRlci1kb20nXG5pbXBvcnQgUGFnZUNvbXBvbmVudCBmcm9tICdqbWFycm95YXZlL2NvbXBvbmVudHMvdXhpL2Jsb2cvcGFnZSc7XG5cbmNvbnN0IG1hcFN0YXRlVG9Qcm9wcyA9IHN0YXRlID0+IHtcbiAgcmV0dXJuIHtcbiAgICAvL21lZGlhOiBzdGF0ZS5tZWRpYSxcbiAgfVxufVxuXG5jb25zdCBtYXBEaXNwYXRjaFRvUHJvcHMgPSBkaXNwYXRjaCA9PiAoe1xufSk7XG5cbmNsYXNzIFBhZ2UgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuXHRjb25zdHJ1Y3Rvcihwcm9wcyxjb250ZXh0KSB7XG5cdFx0c3VwZXIocHJvcHMsY29udGV4dCk7XG5cdFx0dGhpcy5hcGkgPSB3aW5kb3cuX19hcGk7XG5cdFx0dGhpcy5hcmVhID0gXCJibG9nXCI7XG5cdH1cblxuXHRjb21wb25lbnREaWRNb3VudCgpe1xuXHRcdHRoaXMuYXBpLmdldEJsb2codGhpcy5hcmVhKTtcblx0fVxuXG5cdHJlbmRlcigpe1xuXHRcdGNvbnN0IHBhcmFtcyA9IHthcHA6IHRoaXMucHJvcHMuYXBwLCBwYWdlOiB0aGlzLnByb3BzLnBhZ2UsIHJvdXRlcjogdGhpcy5wcm9wcy5yb3V0ZXIsIGxvY2F0aW9uOiB0aGlzLnByb3BzLmxvY2F0aW9ufTtcblx0XHRyZXR1cm4gPFBhZ2VDb21wb25lbnQgey4uLnBhcmFtc30vPlxuXHR9XG59XG5cblBhZ2UgPSBicmFuY2goe1xuXHRhcHA6IFsnYXBwJ10sXG5cdHBhZ2U6IFsncGFnZXMnLCdibG9nJ10sXG59LCBQYWdlKTtcblxuUGFnZSA9IGNvbm5lY3QobWFwU3RhdGVUb1Byb3BzLCBtYXBEaXNwYXRjaFRvUHJvcHMpKFBhZ2UpO1xuXG53aXRoUm91dGVyKFBhZ2UpO1xuZXhwb3J0IGRlZmF1bHQgUGFnZTsiLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgY29ubmVjdCB9IGZyb20gJ3JlYWN0LXJlZHV4JztcbmltcG9ydCB7YnJhbmNofSBmcm9tICdiYW9iYWItcmVhY3QvaGlnaGVyLW9yZGVyJztcbmltcG9ydCB7IHdpdGhSb3V0ZXIgfSBmcm9tICdyZWFjdC1yb3V0ZXItZG9tJ1xuaW1wb3J0IFBhZ2VDb21wb25lbnQgZnJvbSAnam1hcnJveWF2ZS9jb21wb25lbnRzL3V4aS9ibG9nX3Bvc3QvcGFnZSc7XG5cbmNvbnN0IG1hcFN0YXRlVG9Qcm9wcyA9IHN0YXRlID0+IHtcbiAgcmV0dXJuIHtcbiAgICAvL21lZGlhOiBzdGF0ZS5tZWRpYSxcbiAgfVxufVxuXG5jb25zdCBtYXBEaXNwYXRjaFRvUHJvcHMgPSBkaXNwYXRjaCA9PiAoe1xufSk7XG5cbmNsYXNzIFBhZ2UgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuXHRjb25zdHJ1Y3Rvcihwcm9wcyxjb250ZXh0KSB7XG5cdFx0c3VwZXIocHJvcHMsY29udGV4dCk7XG5cdFx0dGhpcy5hcGkgPSB3aW5kb3cuX19hcGk7XG5cdH1cblxuXHRjb21wb25lbnREaWRNb3VudCgpe1xuXHRcdGNvbnN0IHBhcmFtcyA9IHRoaXMucHJvcHMucm91dGVyLnBhcmFtcztcblx0XHR0aGlzLmFwaS5nZXRQb3N0KFwiYmxvZ1wiLCBgJHtwYXJhbXMueWVhcn0tJHtwYXJhbXMubW9udGh9LSR7cGFyYW1zLmRheX0tJHtwYXJhbXMucG9zdH1gKTtcblx0fVxuXG5cdHJlbmRlcigpe1xuXHRcdGNvbnN0IHBhcmFtcyA9IHthcHA6IHRoaXMucHJvcHMuYXBwLCBwYWdlOiB0aGlzLnByb3BzLnBhZ2UsIHJvdXRlcjogdGhpcy5wcm9wcy5yb3V0ZXIsIGxvY2F0aW9uOiB0aGlzLnByb3BzLmxvY2F0aW9ufTtcblx0XHRyZXR1cm4gPFBhZ2VDb21wb25lbnQgey4uLnBhcmFtc30vPlxuXHR9XG59XG5cblBhZ2UgPSBicmFuY2goe1xuXHRhcHA6IFsnYXBwJ10sXG5cdHBhZ2U6IFsncGFnZXMnLCdwb3N0J10sXG59LCBQYWdlKTtcblxuUGFnZSA9IGNvbm5lY3QobWFwU3RhdGVUb1Byb3BzLCBtYXBEaXNwYXRjaFRvUHJvcHMpKFBhZ2UpO1xuXG53aXRoUm91dGVyKFBhZ2UpO1xuZXhwb3J0IGRlZmF1bHQgUGFnZTsiLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgY29ubmVjdCB9IGZyb20gJ3JlYWN0LXJlZHV4JztcbmltcG9ydCB7YnJhbmNofSBmcm9tICdiYW9iYWItcmVhY3QvaGlnaGVyLW9yZGVyJztcbmltcG9ydCB7IHdpdGhSb3V0ZXIgfSBmcm9tICdyZWFjdC1yb3V0ZXItZG9tJ1xuaW1wb3J0IFBhZ2VDb21wb25lbnQgZnJvbSAnam1hcnJveWF2ZS9jb21wb25lbnRzL3V4aS9jdi9wYWdlJztcblxuY29uc3QgbWFwU3RhdGVUb1Byb3BzID0gc3RhdGUgPT4ge1xuICByZXR1cm4ge1xuICAgIC8vbWVkaWE6IHN0YXRlLm1lZGlhLFxuICB9XG59XG5cbmNvbnN0IG1hcERpc3BhdGNoVG9Qcm9wcyA9IGRpc3BhdGNoID0+ICh7XG59KTtcblxuY2xhc3MgUGFnZSBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG5cdGNvbnN0cnVjdG9yKHByb3BzLGNvbnRleHQpIHtcblx0XHRzdXBlcihwcm9wcyxjb250ZXh0KTtcblx0XHR0aGlzLmFwaSA9IHdpbmRvdy5fX2FwaTtcblx0fVxuXG5cdGNvbXBvbmVudERpZE1vdW50KCl7XG5cdFx0dGhpcy5hcGkuZ2V0Q1YoKTtcblx0fVxuXG5cdHJlbmRlcigpe1xuXHRcdGNvbnN0IHBhcmFtcyA9IHthcHA6IHRoaXMucHJvcHMuYXBwLCBwYWdlOiB0aGlzLnByb3BzLnBhZ2UsIHJvdXRlcjogdGhpcy5wcm9wcy5yb3V0ZXIsIGxvY2F0aW9uOiB0aGlzLnByb3BzLmxvY2F0aW9ufTtcblx0XHRyZXR1cm4gPFBhZ2VDb21wb25lbnQgey4uLnBhcmFtc30vPlxuXHR9XG59XG5cblBhZ2UgPSBicmFuY2goe1xuXHRhcHA6IFsnYXBwJ10sXG5cdHBhZ2U6IFsncGFnZXMnLCdjdiddLFxufSwgUGFnZSk7XG5cblBhZ2UgPSBjb25uZWN0KG1hcFN0YXRlVG9Qcm9wcywgbWFwRGlzcGF0Y2hUb1Byb3BzKShQYWdlKTtcblxud2l0aFJvdXRlcihQYWdlKTtcbmV4cG9ydCBkZWZhdWx0IFBhZ2U7IiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IGNvbm5lY3QgfSBmcm9tICdyZWFjdC1yZWR1eCc7XG5pbXBvcnQge2JyYW5jaH0gZnJvbSAnYmFvYmFiLXJlYWN0L2hpZ2hlci1vcmRlcic7XG5pbXBvcnQgeyB3aXRoUm91dGVyIH0gZnJvbSAncmVhY3Qtcm91dGVyLWRvbSdcbmltcG9ydCBIb21lIGZyb20gJ2ptYXJyb3lhdmUvY29tcG9uZW50cy91eGkvaG9tZS9wYWdlJztcblxuY29uc3QgbWFwU3RhdGVUb1Byb3BzID0gc3RhdGUgPT4ge1xuICByZXR1cm4ge1xuICAgIC8vbWVkaWE6IHN0YXRlLm1lZGlhLFxuICB9XG59XG5cbmNvbnN0IG1hcERpc3BhdGNoVG9Qcm9wcyA9IGRpc3BhdGNoID0+ICh7XG59KTtcblxuY2xhc3MgUGFnZSBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG5cdGNvbnN0cnVjdG9yKHByb3BzLGNvbnRleHQpIHtcblx0XHRzdXBlcihwcm9wcyxjb250ZXh0KTtcblx0XHR0aGlzLmFwaSA9IHdpbmRvdy5fX2FwaTtcblx0fVxuXG5cdGNvbXBvbmVudERpZE1vdW50KCl7XG5cdFx0dGhpcy5hcGkuZ2V0SG9tZSgpO1xuXHRcdHRoaXMuYXBpLmdldFRyZW5kcygpO1xuXHR9XG5cblx0cmVuZGVyKCl7XG5cdFx0Y29uc3QgcGFyYW1zID0ge2FwcDogdGhpcy5wcm9wcy5hcHAsIHBhZ2U6IHRoaXMucHJvcHMucGFnZSwgcm91dGVyOiB0aGlzLnByb3BzLnJvdXRlciwgbG9jYXRpb246IHRoaXMucHJvcHMubG9jYXRpb259O1xuXHRcdHJldHVybiA8SG9tZSB7Li4ucGFyYW1zfS8+XG5cdH1cbn1cblxuUGFnZSA9IGJyYW5jaCh7XG5cdGFwcDogWydhcHAnXSxcblx0cGFnZTogWydwYWdlcycsJ2hvbWUnXSxcbn0sIFBhZ2UpO1xuXG5QYWdlID0gY29ubmVjdChtYXBTdGF0ZVRvUHJvcHMsIG1hcERpc3BhdGNoVG9Qcm9wcykoUGFnZSk7XG5cbndpdGhSb3V0ZXIoUGFnZSk7XG5leHBvcnQgZGVmYXVsdCBQYWdlOyIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBjb25uZWN0IH0gZnJvbSAncmVhY3QtcmVkdXgnO1xuaW1wb3J0IHticmFuY2h9IGZyb20gJ2Jhb2JhYi1yZWFjdC9oaWdoZXItb3JkZXInO1xuaW1wb3J0IHsgd2l0aFJvdXRlciB9IGZyb20gJ3JlYWN0LXJvdXRlci1kb20nXG5pbXBvcnQgUGFnZUNvbXBvbmVudCBmcm9tICdqbWFycm95YXZlL2NvbXBvbmVudHMvdXhpL2Jsb2cvcGFnZSc7XG5cbmNvbnN0IG1hcFN0YXRlVG9Qcm9wcyA9IHN0YXRlID0+IHtcbiAgcmV0dXJuIHtcbiAgICAvL21lZGlhOiBzdGF0ZS5tZWRpYSxcbiAgfVxufVxuXG5jb25zdCBtYXBEaXNwYXRjaFRvUHJvcHMgPSBkaXNwYXRjaCA9PiAoe1xufSk7XG5cbmNsYXNzIFBhZ2UgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuXHRjb25zdHJ1Y3Rvcihwcm9wcyxjb250ZXh0KSB7XG5cdFx0c3VwZXIocHJvcHMsY29udGV4dCk7XG5cdFx0dGhpcy5hcGkgPSB3aW5kb3cuX19hcGk7XG5cdFx0dGhpcy5hcmVhID0gXCJrYlwiO1xuXHR9XG5cblx0Y29tcG9uZW50RGlkTW91bnQoKXtcblx0XHR0aGlzLmFwaS5nZXRCbG9nKHRoaXMuYXJlYSk7XG5cdH1cblxuXHRyZW5kZXIoKXtcblx0XHRjb25zdCBwYXJhbXMgPSB7YXBwOiB0aGlzLnByb3BzLmFwcCwgcGFnZTogdGhpcy5wcm9wcy5wYWdlLCByb3V0ZXI6IHRoaXMucHJvcHMucm91dGVyLCBsb2NhdGlvbjogdGhpcy5wcm9wcy5sb2NhdGlvbn07XG5cdFx0cmV0dXJuIDxQYWdlQ29tcG9uZW50IHsuLi5wYXJhbXN9Lz5cblx0fVxufVxuXG5QYWdlID0gYnJhbmNoKHtcblx0YXBwOiBbJ2FwcCddLFxuXHRwYWdlOiBbJ3BhZ2VzJywnYmxvZyddLFxufSwgUGFnZSk7XG5cblBhZ2UgPSBjb25uZWN0KG1hcFN0YXRlVG9Qcm9wcywgbWFwRGlzcGF0Y2hUb1Byb3BzKShQYWdlKTtcblxud2l0aFJvdXRlcihQYWdlKTtcbmV4cG9ydCBkZWZhdWx0IFBhZ2U7IiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IGNvbm5lY3QgfSBmcm9tICdyZWFjdC1yZWR1eCc7XG5pbXBvcnQge2JyYW5jaH0gZnJvbSAnYmFvYmFiLXJlYWN0L2hpZ2hlci1vcmRlcic7XG5pbXBvcnQgeyB3aXRoUm91dGVyIH0gZnJvbSAncmVhY3Qtcm91dGVyLWRvbSdcbmltcG9ydCBQYWdlQ29tcG9uZW50IGZyb20gJ2ptYXJyb3lhdmUvY29tcG9uZW50cy91eGkvYmxvZ19wb3N0L3BhZ2UnO1xuXG5jb25zdCBtYXBTdGF0ZVRvUHJvcHMgPSBzdGF0ZSA9PiB7XG4gIHJldHVybiB7XG4gICAgLy9tZWRpYTogc3RhdGUubWVkaWEsXG4gIH1cbn1cblxuY29uc3QgbWFwRGlzcGF0Y2hUb1Byb3BzID0gZGlzcGF0Y2ggPT4gKHtcbn0pO1xuXG5jbGFzcyBQYWdlIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcblx0Y29uc3RydWN0b3IocHJvcHMsY29udGV4dCkge1xuXHRcdHN1cGVyKHByb3BzLGNvbnRleHQpO1xuXHRcdHRoaXMuYXBpID0gd2luZG93Ll9fYXBpO1xuXHR9XG5cblx0Y29tcG9uZW50RGlkTW91bnQoKXtcblx0XHRjb25zdCBwYXJhbXMgPSB0aGlzLnByb3BzLnJvdXRlci5wYXJhbXM7XG5cdFx0dGhpcy5hcGkuZ2V0UG9zdChcImtiXCIsIGBrYi0ke3BhcmFtcy5wb3N0fWApO1xuXHR9XG5cblx0cmVuZGVyKCl7XG5cdFx0Y29uc3QgcGFyYW1zID0ge2FwcDogdGhpcy5wcm9wcy5hcHAsIHBhZ2U6IHRoaXMucHJvcHMucGFnZSwgcm91dGVyOiB0aGlzLnByb3BzLnJvdXRlciwgbG9jYXRpb246IHRoaXMucHJvcHMubG9jYXRpb259O1xuXHRcdHJldHVybiA8UGFnZUNvbXBvbmVudCB7Li4ucGFyYW1zfS8+XG5cdH1cbn1cblxuUGFnZSA9IGJyYW5jaCh7XG5cdGFwcDogWydhcHAnXSxcblx0cGFnZTogWydwYWdlcycsJ3Bvc3QnXSxcbn0sIFBhZ2UpO1xuXG5QYWdlID0gY29ubmVjdChtYXBTdGF0ZVRvUHJvcHMsIG1hcERpc3BhdGNoVG9Qcm9wcykoUGFnZSk7XG5cbndpdGhSb3V0ZXIoUGFnZSk7XG5leHBvcnQgZGVmYXVsdCBQYWdlOyIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBjb25uZWN0IH0gZnJvbSAncmVhY3QtcmVkdXgnO1xuaW1wb3J0IHticmFuY2h9IGZyb20gJ2Jhb2JhYi1yZWFjdC9oaWdoZXItb3JkZXInO1xuaW1wb3J0IHsgd2l0aFJvdXRlciB9IGZyb20gJ3JlYWN0LXJvdXRlci1kb20nXG5pbXBvcnQgUGFnZUNvbXBvbmVudCBmcm9tICdqbWFycm95YXZlL2NvbXBvbmVudHMvdXhpL2tiL3BhZ2UnO1xuXG5jb25zdCBtYXBTdGF0ZVRvUHJvcHMgPSBzdGF0ZSA9PiB7XG4gIHJldHVybiB7XG4gICAgLy9tZWRpYTogc3RhdGUubWVkaWEsXG4gIH1cbn1cblxuY29uc3QgbWFwRGlzcGF0Y2hUb1Byb3BzID0gZGlzcGF0Y2ggPT4gKHtcbn0pO1xuXG5jbGFzcyBQYWdlIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcblx0Y29uc3RydWN0b3IocHJvcHMsY29udGV4dCkge1xuXHRcdHN1cGVyKHByb3BzLGNvbnRleHQpO1xuXHRcdHRoaXMuYXBpID0gd2luZG93Ll9fYXBpO1xuXHR9XG5cblx0Y29tcG9uZW50RGlkTW91bnQoKXtcblx0XHR0aGlzLmFwaS5nZXRLQkFuZHJvaWRDYXRlZ29yaWVzKCk7XG5cdH1cblxuXHRyZW5kZXIoKXtcblx0XHRjb25zdCBwYXJhbXMgPSB7Y29tcG9uZW50OiAnYW5kcm9pZCcsIGFwcDogdGhpcy5wcm9wcy5hcHAsIHBhZ2U6IHRoaXMucHJvcHMucGFnZSwgcm91dGVyOiB0aGlzLnByb3BzLnJvdXRlciwgbG9jYXRpb246IHRoaXMucHJvcHMubG9jYXRpb259O1xuXHRcdHJldHVybiA8UGFnZUNvbXBvbmVudCB7Li4ucGFyYW1zfS8+XG5cdH1cbn1cblxuUGFnZSA9IGJyYW5jaCh7XG5cdGFwcDogWydhcHAnXSxcblx0cGFnZTogWydwYWdlcycsJ2tiX2FuZHJvaWQnXSxcbn0sIFBhZ2UpO1xuXG5QYWdlID0gY29ubmVjdChtYXBTdGF0ZVRvUHJvcHMsIG1hcERpc3BhdGNoVG9Qcm9wcykoUGFnZSk7XG5cbndpdGhSb3V0ZXIoUGFnZSk7XG5leHBvcnQgZGVmYXVsdCBQYWdlOyIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBjb25uZWN0IH0gZnJvbSAncmVhY3QtcmVkdXgnO1xuaW1wb3J0IHticmFuY2h9IGZyb20gJ2Jhb2JhYi1yZWFjdC9oaWdoZXItb3JkZXInO1xuaW1wb3J0IHsgd2l0aFJvdXRlciB9IGZyb20gJ3JlYWN0LXJvdXRlci1kb20nXG5pbXBvcnQgUGFnZUNvbXBvbmVudCBmcm9tICdqbWFycm95YXZlL2NvbXBvbmVudHMvdXhpL2Jsb2cvcGFnZSc7XG5cbmNvbnN0IG1hcFN0YXRlVG9Qcm9wcyA9IHN0YXRlID0+IHtcbiAgcmV0dXJuIHtcbiAgICAvL21lZGlhOiBzdGF0ZS5tZWRpYSxcbiAgfVxufVxuXG5jb25zdCBtYXBEaXNwYXRjaFRvUHJvcHMgPSBkaXNwYXRjaCA9PiAoe1xufSk7XG5cbmNsYXNzIFBhZ2UgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuXHRjb25zdHJ1Y3Rvcihwcm9wcyxjb250ZXh0KSB7XG5cdFx0c3VwZXIocHJvcHMsY29udGV4dCk7XG5cdFx0dGhpcy5hcGkgPSB3aW5kb3cuX19hcGk7XG5cdFx0dGhpcy5hcmVhID0gXCJsYWJzXCI7XG5cdH1cblxuXHRjb21wb25lbnREaWRNb3VudCgpe1xuXHRcdHRoaXMuYXBpLmdldEJsb2codGhpcy5hcmVhKTtcblx0fVxuXG5cdHJlbmRlcigpe1xuXHRcdGNvbnN0IHBhcmFtcyA9IHthcHA6IHRoaXMucHJvcHMuYXBwLCBwYWdlOiB0aGlzLnByb3BzLnBhZ2UsIHJvdXRlcjogdGhpcy5wcm9wcy5yb3V0ZXIsIGxvY2F0aW9uOiB0aGlzLnByb3BzLmxvY2F0aW9ufTtcblx0XHRyZXR1cm4gPFBhZ2VDb21wb25lbnQgey4uLnBhcmFtc30vPlxuXHR9XG59XG5cblBhZ2UgPSBicmFuY2goe1xuXHRhcHA6IFsnYXBwJ10sXG5cdHBhZ2U6IFsncGFnZXMnLCdibG9nJ10sXG59LCBQYWdlKTtcblxuUGFnZSA9IGNvbm5lY3QobWFwU3RhdGVUb1Byb3BzLCBtYXBEaXNwYXRjaFRvUHJvcHMpKFBhZ2UpO1xuXG53aXRoUm91dGVyKFBhZ2UpO1xuZXhwb3J0IGRlZmF1bHQgUGFnZTsiLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgY29ubmVjdCB9IGZyb20gJ3JlYWN0LXJlZHV4JztcbmltcG9ydCB7YnJhbmNofSBmcm9tICdiYW9iYWItcmVhY3QvaGlnaGVyLW9yZGVyJztcbmltcG9ydCB7IHdpdGhSb3V0ZXIgfSBmcm9tICdyZWFjdC1yb3V0ZXItZG9tJ1xuaW1wb3J0IFBhZ2VDb21wb25lbnQgZnJvbSAnam1hcnJveWF2ZS9jb21wb25lbnRzL3V4aS9ibG9nX3Bvc3QvcGFnZSc7XG5cbmNvbnN0IG1hcFN0YXRlVG9Qcm9wcyA9IHN0YXRlID0+IHtcbiAgcmV0dXJuIHtcbiAgICAvL21lZGlhOiBzdGF0ZS5tZWRpYSxcbiAgfVxufVxuXG5jb25zdCBtYXBEaXNwYXRjaFRvUHJvcHMgPSBkaXNwYXRjaCA9PiAoe1xufSk7XG5cbmNsYXNzIFBhZ2UgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuXHRjb25zdHJ1Y3Rvcihwcm9wcyxjb250ZXh0KSB7XG5cdFx0c3VwZXIocHJvcHMsY29udGV4dCk7XG5cdFx0dGhpcy5hcGkgPSB3aW5kb3cuX19hcGk7XG5cdH1cblxuXHRjb21wb25lbnREaWRNb3VudCgpe1xuXHRcdGNvbnN0IHBhcmFtcyA9IHRoaXMucHJvcHMucm91dGVyLnBhcmFtcztcblx0XHR0aGlzLmFwaS5nZXRQb3N0KFwibGFic1wiLCBgbGFicy0ke3BhcmFtcy5wcm9qZWN0fWApO1xuXHR9XG5cblx0cmVuZGVyKCl7XG5cdFx0Y29uc3QgcGFyYW1zID0ge2FwcDogdGhpcy5wcm9wcy5hcHAsIHBhZ2U6IHRoaXMucHJvcHMucGFnZSwgcm91dGVyOiB0aGlzLnByb3BzLnJvdXRlciwgbG9jYXRpb246IHRoaXMucHJvcHMubG9jYXRpb259O1xuXHRcdHJldHVybiA8UGFnZUNvbXBvbmVudCB7Li4ucGFyYW1zfS8+XG5cdH1cbn1cblxuUGFnZSA9IGJyYW5jaCh7XG5cdGFwcDogWydhcHAnXSxcblx0cGFnZTogWydwYWdlcycsJ3Bvc3QnXSxcbn0sIFBhZ2UpO1xuXG5QYWdlID0gY29ubmVjdChtYXBTdGF0ZVRvUHJvcHMsIG1hcERpc3BhdGNoVG9Qcm9wcykoUGFnZSk7XG5cbndpdGhSb3V0ZXIoUGFnZSk7XG5leHBvcnQgZGVmYXVsdCBQYWdlOyIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcbmltcG9ydCAnLi9zb2NpYWxfbmV0d29ya3Muc2Nzcyc7XG5cbmNsYXNzIENvbXBvbmVudCBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gIHJlbmRlcigpIHtcbiAgICByZXR1cm4gKFxuXHQgIDxkaXYgY2xhc3NOYW1lPVwibW9kLXNvY2lhbC1pY29ucyBsYXlvdXQtYWxpZ24tY2VudGVyLWNlbnRlciBsYXlvdXQtY29sdW1uIGZsZXhcIj5cblx0ICAgIDxhIGhyZWY9XCJodHRwOi8vdHdpdHRlci5jb20vam1hcnJveWF2ZVwiPlxuXHRcdFx0XHQ8c3BhbiBjbGFzc05hbWU9XCJmYS1zdGFjayBmYS1sZ1wiPlxuXHRcdFx0XHQgIDxpIGNsYXNzTmFtZT1cImZhIGZhLXNxdWFyZS1vIGZhLXN0YWNrLTJ4XCI+PC9pPlxuXHRcdFx0XHQgIDxpIGNsYXNzTmFtZT1cImZhIGZhLXR3aXR0ZXIgZmEtc3RhY2stMXhcIiBzdHlsZT17e2NvbG9yOiAnIzAwYWNlZCd9fT48L2k+XG5cdFx0XHRcdDwvc3Bhbj5cblx0XHRcdDwvYT5cblx0ICAgIDxhIGhyZWY9XCJodHRwOi8vZmFjZWJvb2suY29tL2ptYXJyb3lhdmVcIj5cblx0XHRcdFx0PHNwYW4gY2xhc3NOYW1lPVwiZmEtc3RhY2sgZmEtbGdcIj5cblx0XHRcdFx0ICA8aSBjbGFzc05hbWU9XCJmYSBmYS1zcXVhcmUtbyBmYS1zdGFjay0yeFwiPjwvaT5cblx0XHRcdFx0ICA8aSBjbGFzc05hbWU9XCJmYSBmYS1mYWNlYm9vayBmYS1zdGFjay0xeFwiIHN0eWxlPXt7Y29sb3I6ICcjM2I1OTk4J319PjwvaT5cblx0XHRcdFx0PC9zcGFuPlx0ICAgIFxuXHRcdFx0PC9hPlxuXHQgICAgPGEgaHJlZj1cImh0dHA6Ly9ndC5saW5rZWRpbi5jb20vam1hcnJveWF2ZVwiPlxuXHRcdFx0XHQ8c3BhbiBjbGFzc05hbWU9XCJmYS1zdGFjayBmYS1sZ1wiPlxuXHRcdFx0XHQgIDxpIGNsYXNzTmFtZT1cImZhIGZhLXNxdWFyZS1vIGZhLXN0YWNrLTJ4XCI+PC9pPlxuXHRcdFx0XHQgIDxpIGNsYXNzTmFtZT1cImZhIGZhLWxpbmtlZGluIGZhLXN0YWNrLTF4XCIgc3R5bGU9e3tjb2xvcjogJyMwMDc3QjUnfX0+PC9pPlxuXHRcdFx0XHQ8L3NwYW4+XHQgICAgXG5cdFx0XHQ8L2E+XG5cdCAgICA8YSBocmVmPVwiaHR0cDovL3BsdXMuZ29vZ2xlLmNvbS8xMTI2MTg3MjA5NDU3NTk4MTkwMTdcIj5cblx0XHRcdFx0PHNwYW4gY2xhc3NOYW1lPVwiZmEtc3RhY2sgZmEtbGdcIj5cblx0XHRcdFx0ICA8aSBjbGFzc05hbWU9XCJmYSBmYS1zcXVhcmUtbyBmYS1zdGFjay0yeFwiPjwvaT5cblx0XHRcdFx0ICA8aSBjbGFzc05hbWU9XCJmYSBmYS1nb29nbGUtcGx1cyBmYS1zdGFjay0xeFwiIHN0eWxlPXt7Y29sb3I6ICcjZDM0ODM2J319PjwvaT5cblx0XHRcdFx0PC9zcGFuPlx0ICAgIFxuXHRcdFx0PC9hPlxuXHQgICAgPGEgaHJlZj1cImh0dHA6Ly9naXRodWIuY29tL2ptYXJyb3lhdmVcIj5cblx0XHRcdFx0PHNwYW4gY2xhc3NOYW1lPVwiZmEtc3RhY2sgZmEtbGdcIj5cblx0XHRcdFx0ICA8aSBjbGFzc05hbWU9XCJmYSBmYS1zcXVhcmUtbyBmYS1zdGFjay0yeFwiPjwvaT5cblx0XHRcdFx0ICA8aSBjbGFzc05hbWU9XCJmYSBmYS1naXRodWIgZmEtc3RhY2stMXhcIiBzdHlsZT17e2NvbG9yOiAnIzAwMCd9fT48L2k+XG5cdFx0XHRcdDwvc3Bhbj5cdCAgICBcblx0XHRcdDwvYT5cblx0ICAgIDxhIGhyZWY9XCJtYWlsdG86am1hcnJveWF2ZUBnbWFpbC5jb21cIiBjbGFzc05hbWU9J25vdC1yZWxlYXNlZCc+XG5cdFx0XHRcdDxzcGFuIGNsYXNzTmFtZT1cImZhLXN0YWNrIGZhLWxnXCI+XG5cdFx0XHRcdCAgPGkgY2xhc3NOYW1lPVwiZmEgZmEtc3F1YXJlLW8gZmEtc3RhY2stMnhcIj48L2k+XG5cdFx0XHRcdCAgPGkgY2xhc3NOYW1lPVwiZmEgZmEtZW52ZWxvcGUtbyBmYS1zdGFjay0xeFwiIHN0eWxlPXt7Y29sb3I6ICcjMDAwJ319PjwvaT5cblx0XHRcdFx0PC9zcGFuPlxuXHQgICAgPC9hPiAgICBcblx0ICA8L2Rpdj5cbiAgICApO1xuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IChDb21wb25lbnQpOyIsIlxudmFyIGNvbnRlbnQgPSByZXF1aXJlKFwiISEuLi8uLi8uLi8uLi8uLi8uLi8uLi9mcmFtZXdvcmtzL3dlYmFwcHMvc3RhcnR1cC9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9pbmRleC5qcyEuLi8uLi8uLi8uLi8uLi8uLi8uLi9mcmFtZXdvcmtzL3dlYmFwcHMvc3RhcnR1cC9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvbGliL2xvYWRlci5qcyEuL3NvY2lhbF9uZXR3b3Jrcy5zY3NzXCIpO1xuXG5pZih0eXBlb2YgY29udGVudCA9PT0gJ3N0cmluZycpIGNvbnRlbnQgPSBbW21vZHVsZS5pZCwgY29udGVudCwgJyddXTtcblxudmFyIHRyYW5zZm9ybTtcbnZhciBpbnNlcnRJbnRvO1xuXG5cblxudmFyIG9wdGlvbnMgPSB7XCJobXJcIjp0cnVlfVxuXG5vcHRpb25zLnRyYW5zZm9ybSA9IHRyYW5zZm9ybVxub3B0aW9ucy5pbnNlcnRJbnRvID0gdW5kZWZpbmVkO1xuXG52YXIgdXBkYXRlID0gcmVxdWlyZShcIiEuLi8uLi8uLi8uLi8uLi8uLi8uLi9mcmFtZXdvcmtzL3dlYmFwcHMvc3RhcnR1cC9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2xpYi9hZGRTdHlsZXMuanNcIikoY29udGVudCwgb3B0aW9ucyk7XG5cbmlmKGNvbnRlbnQubG9jYWxzKSBtb2R1bGUuZXhwb3J0cyA9IGNvbnRlbnQubG9jYWxzO1xuXG5pZihtb2R1bGUuaG90KSB7XG5cdG1vZHVsZS5ob3QuYWNjZXB0KFwiISEuLi8uLi8uLi8uLi8uLi8uLi8uLi9mcmFtZXdvcmtzL3dlYmFwcHMvc3RhcnR1cC9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9pbmRleC5qcyEuLi8uLi8uLi8uLi8uLi8uLi8uLi9mcmFtZXdvcmtzL3dlYmFwcHMvc3RhcnR1cC9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvbGliL2xvYWRlci5qcyEuL3NvY2lhbF9uZXR3b3Jrcy5zY3NzXCIsIGZ1bmN0aW9uKCkge1xuXHRcdHZhciBuZXdDb250ZW50ID0gcmVxdWlyZShcIiEhLi4vLi4vLi4vLi4vLi4vLi4vLi4vZnJhbWV3b3Jrcy93ZWJhcHBzL3N0YXJ0dXAvbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvaW5kZXguanMhLi4vLi4vLi4vLi4vLi4vLi4vLi4vZnJhbWV3b3Jrcy93ZWJhcHBzL3N0YXJ0dXAvbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2xpYi9sb2FkZXIuanMhLi9zb2NpYWxfbmV0d29ya3Muc2Nzc1wiKTtcblxuXHRcdGlmKHR5cGVvZiBuZXdDb250ZW50ID09PSAnc3RyaW5nJykgbmV3Q29udGVudCA9IFtbbW9kdWxlLmlkLCBuZXdDb250ZW50LCAnJ11dO1xuXG5cdFx0dmFyIGxvY2FscyA9IChmdW5jdGlvbihhLCBiKSB7XG5cdFx0XHR2YXIga2V5LCBpZHggPSAwO1xuXG5cdFx0XHRmb3Ioa2V5IGluIGEpIHtcblx0XHRcdFx0aWYoIWIgfHwgYVtrZXldICE9PSBiW2tleV0pIHJldHVybiBmYWxzZTtcblx0XHRcdFx0aWR4Kys7XG5cdFx0XHR9XG5cblx0XHRcdGZvcihrZXkgaW4gYikgaWR4LS07XG5cblx0XHRcdHJldHVybiBpZHggPT09IDA7XG5cdFx0fShjb250ZW50LmxvY2FscywgbmV3Q29udGVudC5sb2NhbHMpKTtcblxuXHRcdGlmKCFsb2NhbHMpIHRocm93IG5ldyBFcnJvcignQWJvcnRpbmcgQ1NTIEhNUiBkdWUgdG8gY2hhbmdlZCBjc3MtbW9kdWxlcyBsb2NhbHMuJyk7XG5cblx0XHR1cGRhdGUobmV3Q29udGVudCk7XG5cdH0pO1xuXG5cdG1vZHVsZS5ob3QuZGlzcG9zZShmdW5jdGlvbigpIHsgdXBkYXRlKCk7IH0pO1xufSJdLCJzb3VyY2VSb290IjoiIn0=