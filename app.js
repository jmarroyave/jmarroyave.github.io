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

/***/ "../../../../../frameworks/webapps/startup/node_modules/css-loader/index.js!../../../../../frameworks/webapps/startup/node_modules/sass-loader/lib/loader.js!./src/jmarroyave/components/uxi/core/com_version.scss":
/*!****************************************************************************************************************************************************************************************************************!*\
  !*** /media/jm/labs/frameworks/webapps/startup/node_modules/css-loader!/media/jm/labs/frameworks/webapps/startup/node_modules/sass-loader/lib/loader.js!./src/jmarroyave/components/uxi/core/com_version.scss ***!
  \****************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../../../../../../../frameworks/webapps/startup/node_modules/css-loader/lib/css-base.js */ "../../../../../frameworks/webapps/startup/node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".mod-version {\n  width: 100%;\n  background-color: white;\n  padding: 10px; }\n", ""]);

// exports


/***/ }),

/***/ "../../../../../frameworks/webapps/startup/node_modules/css-loader/index.js!../../../../../frameworks/webapps/startup/node_modules/sass-loader/lib/loader.js!./src/jmarroyave/components/uxi/core/page/footer.scss":
/*!****************************************************************************************************************************************************************************************************************!*\
  !*** /media/jm/labs/frameworks/webapps/startup/node_modules/css-loader!/media/jm/labs/frameworks/webapps/startup/node_modules/sass-loader/lib/loader.js!./src/jmarroyave/components/uxi/core/page/footer.scss ***!
  \****************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../../../../../../../../frameworks/webapps/startup/node_modules/css-loader/lib/css-base.js */ "../../../../../frameworks/webapps/startup/node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".mod-footer {\n  background-color: #555;\n  color: white;\n  padding: 20px 20px 20px 30px; }\n\n.mod-footer a:visited,\n.mod-footer a:link {\n  color: white;\n  text-decoration: none; }\n", ""]);

// exports


/***/ }),

/***/ "../../../../../frameworks/webapps/startup/node_modules/css-loader/index.js!../../../../../frameworks/webapps/startup/node_modules/sass-loader/lib/loader.js!./src/jmarroyave/components/uxi/core/whats_hot.scss":
/*!**************************************************************************************************************************************************************************************************************!*\
  !*** /media/jm/labs/frameworks/webapps/startup/node_modules/css-loader!/media/jm/labs/frameworks/webapps/startup/node_modules/sass-loader/lib/loader.js!./src/jmarroyave/components/uxi/core/whats_hot.scss ***!
  \**************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../../../../../../../frameworks/webapps/startup/node_modules/css-loader/lib/css-base.js */ "../../../../../frameworks/webapps/startup/node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".mod-whats-hot {\n  text-align: center;\n  font-size: 0.8em; }\n", ""]);

// exports


/***/ }),

/***/ "../../../../../frameworks/webapps/startup/node_modules/css-loader/index.js!../../../../../frameworks/webapps/startup/node_modules/sass-loader/lib/loader.js!./src/jmarroyave/index.scss":
/*!**************************************************************************************************************************************************************************************!*\
  !*** /media/jm/labs/frameworks/webapps/startup/node_modules/css-loader!/media/jm/labs/frameworks/webapps/startup/node_modules/sass-loader/lib/loader.js!./src/jmarroyave/index.scss ***!
  \**************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../../../../frameworks/webapps/startup/node_modules/css-loader/lib/css-base.js */ "../../../../../frameworks/webapps/startup/node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/***/ }),

/***/ "../../../../../frameworks/webapps/startup/node_modules/css-loader/index.js!../../../../../frameworks/webapps/startup/node_modules/sass-loader/lib/loader.js!./src/shared/jmarroyave/social_networks.scss":
/*!*******************************************************************************************************************************************************************************************************!*\
  !*** /media/jm/labs/frameworks/webapps/startup/node_modules/css-loader!/media/jm/labs/frameworks/webapps/startup/node_modules/sass-loader/lib/loader.js!./src/shared/jmarroyave/social_networks.scss ***!
  \*******************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../../../../../frameworks/webapps/startup/node_modules/css-loader/lib/css-base.js */ "../../../../../frameworks/webapps/startup/node_modules/css-loader/lib/css-base.js")(false);
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
			debug: false,
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


var content = __webpack_require__(/*! !../../../../../../../../../../frameworks/webapps/startup/node_modules/css-loader!../../../../../../../../../../frameworks/webapps/startup/node_modules/sass-loader/lib/loader.js!./com_version.scss */ "../../../../../frameworks/webapps/startup/node_modules/css-loader/index.js!../../../../../frameworks/webapps/startup/node_modules/sass-loader/lib/loader.js!./src/jmarroyave/components/uxi/core/com_version.scss");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../../../../../../../../../frameworks/webapps/startup/node_modules/style-loader/lib/addStyles.js */ "../../../../../frameworks/webapps/startup/node_modules/style-loader/lib/addStyles.js")(content, options);

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


var content = __webpack_require__(/*! !../../../../../../../../../../../frameworks/webapps/startup/node_modules/css-loader!../../../../../../../../../../../frameworks/webapps/startup/node_modules/sass-loader/lib/loader.js!./footer.scss */ "../../../../../frameworks/webapps/startup/node_modules/css-loader/index.js!../../../../../frameworks/webapps/startup/node_modules/sass-loader/lib/loader.js!./src/jmarroyave/components/uxi/core/page/footer.scss");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../../../../../../../../../../frameworks/webapps/startup/node_modules/style-loader/lib/addStyles.js */ "../../../../../frameworks/webapps/startup/node_modules/style-loader/lib/addStyles.js")(content, options);

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


var content = __webpack_require__(/*! !../../../../../../../../../../frameworks/webapps/startup/node_modules/css-loader!../../../../../../../../../../frameworks/webapps/startup/node_modules/sass-loader/lib/loader.js!./whats_hot.scss */ "../../../../../frameworks/webapps/startup/node_modules/css-loader/index.js!../../../../../frameworks/webapps/startup/node_modules/sass-loader/lib/loader.js!./src/jmarroyave/components/uxi/core/whats_hot.scss");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../../../../../../../../../frameworks/webapps/startup/node_modules/style-loader/lib/addStyles.js */ "../../../../../frameworks/webapps/startup/node_modules/style-loader/lib/addStyles.js")(content, options);

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
Conf.LOCAL = false;
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


var content = __webpack_require__(/*! !../../../../../../../frameworks/webapps/startup/node_modules/css-loader!../../../../../../../frameworks/webapps/startup/node_modules/sass-loader/lib/loader.js!./index.scss */ "../../../../../frameworks/webapps/startup/node_modules/css-loader/index.js!../../../../../frameworks/webapps/startup/node_modules/sass-loader/lib/loader.js!./src/jmarroyave/index.scss");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../../../../../../frameworks/webapps/startup/node_modules/style-loader/lib/addStyles.js */ "../../../../../frameworks/webapps/startup/node_modules/style-loader/lib/addStyles.js")(content, options);

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


var content = __webpack_require__(/*! !../../../../../../../../frameworks/webapps/startup/node_modules/css-loader!../../../../../../../../frameworks/webapps/startup/node_modules/sass-loader/lib/loader.js!./social_networks.scss */ "../../../../../frameworks/webapps/startup/node_modules/css-loader/index.js!../../../../../frameworks/webapps/startup/node_modules/sass-loader/lib/loader.js!./src/shared/jmarroyave/social_networks.scss");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../../../../../../../frameworks/webapps/startup/node_modules/style-loader/lib/addStyles.js */ "../../../../../frameworks/webapps/startup/node_modules/style-loader/lib/addStyles.js")(content, options);

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2ptYXJyb3lhdmUvY29tcG9uZW50cy91eGkvY29yZS9jb21fdmVyc2lvbi5zY3NzIiwid2VicGFjazovLy8uL3NyYy9qbWFycm95YXZlL2NvbXBvbmVudHMvdXhpL2NvcmUvcGFnZS9mb290ZXIuc2NzcyIsIndlYnBhY2s6Ly8vLi9zcmMvam1hcnJveWF2ZS9jb21wb25lbnRzL3V4aS9jb3JlL3doYXRzX2hvdC5zY3NzIiwid2VicGFjazovLy8uL3NyYy9qbWFycm95YXZlL2luZGV4LnNjc3MiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NoYXJlZC9qbWFycm95YXZlL3NvY2lhbF9uZXR3b3Jrcy5zY3NzIiwid2VicGFjazovLy8uL3NyYy9jb3JlL2FwcC9hcGkuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvcmUvYXBwL3NlcnZlci5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29yZS9jb21wb25lbnRzL2FwcC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29yZS9jb21wb25lbnRzL2FwcF9saXN0LmpzIiwid2VicGFjazovLy8uL3NyYy9jb3JlL2NvbXBvbmVudHMvYXBwYmFyLmpzIiwid2VicGFjazovLy8uL3NyYy9jb3JlL2NvbXBvbmVudHMvYnV0dG9uLmpzIiwid2VicGFjazovLy8uL3NyYy9jb3JlL2NvbXBvbmVudHMvY29tcG9uZW50LmpzIiwid2VicGFjazovLy8uL3NyYy9jb3JlL2NvbXBvbmVudHMvZXJyb3IuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvcmUvY29tcG9uZW50cy9pY29uLmpzIiwid2VicGFjazovLy8uL3NyYy9jb3JlL2NvbXBvbmVudHMvbG9hZGluZy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29yZS9jb21wb25lbnRzL2xvYWRpbmdfYmFyLmpzIiwid2VicGFjazovLy8uL3NyYy9jb3JlL2NvbXBvbmVudHMvbW9ja3VwL2Jsb2NrLmpzIiwid2VicGFjazovLy8uL3NyYy9jb3JlL2NvbXBvbmVudHMvc25hY2tiYXIuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvcmUvY29tcG9uZW50cy90b29sYmFyLmpzIiwid2VicGFjazovLy8uL3NyYy9jb3JlL2NvbXBvbmVudHMvdWlfY29tcG9uZW50LmpzIiwid2VicGFjazovLy8uL3NyYy9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvam1hcnJveWF2ZS9hcHAvYXBpLmpzIiwid2VicGFjazovLy8uL3NyYy9qbWFycm95YXZlL2FwcC9yZWR1eC9hY3Rpb25zL3R5cGVzLmpzIiwid2VicGFjazovLy8uL3NyYy9qbWFycm95YXZlL2FwcC9yZWR1eC9jb25maWd1cmVTdG9yZS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvam1hcnJveWF2ZS9hcHAvcmVkdXgvcmVkdWNlcnMvbGFiZWxzLmpzIiwid2VicGFjazovLy8uL3NyYy9qbWFycm95YXZlL2FwcC9yZWR1eC9yZWR1Y2Vycy9tZXNzYWdlcy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvam1hcnJveWF2ZS9hcHAvc3RhdGUuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2ptYXJyb3lhdmUvY29tcG9uZW50cy9kYXRhL3Bvc3RfbGluay5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvam1hcnJveWF2ZS9jb21wb25lbnRzL3V4aS9ibGFuay9wYWdlLmpzIiwid2VicGFjazovLy8uL3NyYy9qbWFycm95YXZlL2NvbXBvbmVudHMvdXhpL2Jsb2cvcGFnZS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvam1hcnJveWF2ZS9jb21wb25lbnRzL3V4aS9ibG9nX3Bvc3QvcGFnZS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvam1hcnJveWF2ZS9jb21wb25lbnRzL3V4aS9jb3JlL2NvbV92ZXJzaW9uLmpzIiwid2VicGFjazovLy8uL3NyYy9qbWFycm95YXZlL2NvbXBvbmVudHMvdXhpL2NvcmUvY29tX3ZlcnNpb24uc2Nzcz9lYzQ4Iiwid2VicGFjazovLy8uL3NyYy9qbWFycm95YXZlL2NvbXBvbmVudHMvdXhpL2NvcmUvZGVidWcuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2ptYXJyb3lhdmUvY29tcG9uZW50cy91eGkvY29yZS9mb290ZXJfbGlua3MuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2ptYXJyb3lhdmUvY29tcG9uZW50cy91eGkvY29yZS9ncmlkX2NvbnRhaW5lci5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvam1hcnJveWF2ZS9jb21wb25lbnRzL3V4aS9jb3JlL2dyaWRfaXRlbS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvam1hcnJveWF2ZS9jb21wb25lbnRzL3V4aS9jb3JlL3BhZ2UvYXBwLmpzIiwid2VicGFjazovLy8uL3NyYy9qbWFycm95YXZlL2NvbXBvbmVudHMvdXhpL2NvcmUvcGFnZS9ib2R5LmpzIiwid2VicGFjazovLy8uL3NyYy9qbWFycm95YXZlL2NvbXBvbmVudHMvdXhpL2NvcmUvcGFnZS9kcmF3ZXIuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2ptYXJyb3lhdmUvY29tcG9uZW50cy91eGkvY29yZS9wYWdlL2Zvb3Rlci5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvam1hcnJveWF2ZS9jb21wb25lbnRzL3V4aS9jb3JlL3BhZ2UvZm9vdGVyLnNjc3M/NDhjMyIsIndlYnBhY2s6Ly8vLi9zcmMvam1hcnJveWF2ZS9jb21wb25lbnRzL3V4aS9jb3JlL3BhZ2UvaGVhZGVyLmpzIiwid2VicGFjazovLy8uL3NyYy9qbWFycm95YXZlL2NvbXBvbmVudHMvdXhpL2NvcmUvdG9wX2Jhci5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvam1hcnJveWF2ZS9jb21wb25lbnRzL3V4aS9jb3JlL3doYXRzX2hvdC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvam1hcnJveWF2ZS9jb21wb25lbnRzL3V4aS9jb3JlL3doYXRzX2hvdC5zY3NzP2EyYTYiLCJ3ZWJwYWNrOi8vLy4vc3JjL2ptYXJyb3lhdmUvY29tcG9uZW50cy91eGkvY29yZS93aXRoLW1vZHVsZS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvam1hcnJveWF2ZS9jb21wb25lbnRzL3V4aS9jdi9wYWdlLmpzIiwid2VicGFjazovLy8uL3NyYy9qbWFycm95YXZlL2NvbXBvbmVudHMvdXhpL2hvbWUvYmxvY2suanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2ptYXJyb3lhdmUvY29tcG9uZW50cy91eGkvaG9tZS9wYWdlLmpzIiwid2VicGFjazovLy8uL3NyYy9qbWFycm95YXZlL2NvbXBvbmVudHMvdXhpL2tiL3BhZ2UuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2ptYXJyb3lhdmUvY29uZi9jb25zdGFudHMuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2ptYXJyb3lhdmUvY29uZi9uYXZpZ2F0aW9uLmpzIiwid2VicGFjazovLy8uL3NyYy9qbWFycm95YXZlL2NvbmYvdmFsdWVzL2RlZmF1bHQuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2ptYXJyb3lhdmUvY29uZi92ZXJzaW9ucy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvam1hcnJveWF2ZS9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvam1hcnJveWF2ZS9pbmRleC5zY3NzP2M3MDIiLCJ3ZWJwYWNrOi8vLy4vc3JjL2ptYXJyb3lhdmUvcGFnZXMvYmxhbmsuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2ptYXJyb3lhdmUvcGFnZXMvYmxvZy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvam1hcnJveWF2ZS9wYWdlcy9ibG9nX3Bvc3QuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2ptYXJyb3lhdmUvcGFnZXMvY3YuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2ptYXJyb3lhdmUvcGFnZXMvaG9tZS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvam1hcnJveWF2ZS9wYWdlcy9rYi5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvam1hcnJveWF2ZS9wYWdlcy9rYl9wb3N0LmpzIiwid2VicGFjazovLy8uL3NyYy9qbWFycm95YXZlL3BhZ2VzL2tiX3Bvc3RfYW5kcm9pZC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvam1hcnJveWF2ZS9wYWdlcy9sYWJzLmpzIiwid2VicGFjazovLy8uL3NyYy9qbWFycm95YXZlL3BhZ2VzL2xhYnNfcHJvamVjdC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvc2hhcmVkL2ptYXJyb3lhdmUvc29jaWFsX25ldHdvcmtzLmpzIiwid2VicGFjazovLy8uL3NyYy9zaGFyZWQvam1hcnJveWF2ZS9zb2NpYWxfbmV0d29ya3Muc2Nzcz9kOThjIl0sIm5hbWVzIjpbIkFQSSIsInByb3BzIiwiZXJyb3IiLCJjdXJyZW50X2NvbXBvbmVudCIsImNvbXBvbmVudHMiLCJsb2NhbCIsInRpdGxlIiwiZGVidWciLCJzZXJ2ZXIiLCJTZXJ2ZXIiLCJlcnIiLCJpZCIsImZhbWlseSIsInZlcnNpb24iLCJkYXRhIiwiaXRlbSIsImZpbmQiLCJvblN0YXJ0TG9hZGluZyIsIm9uU3RvcExvYWRpbmciLCJvbkVycm9yIiwiY29ubmVjdGlvbnMiLCJwcm90b2NvbCIsInBhdGgiLCJjdXJyZW50Iiwic2VydmVyVVJJIiwibWV0aG9kIiwidXJpIiwicGFyYW1zIiwiY29uZmlnIiwiY2FsbGJhY2siLCJjYWxsYmFja19lcnIiLCIkdGhpcyIsInVybCIsImluZGV4T2YiLCJwIiwidHJpZ2dlck9uU3RhcnRMb2FkaW5nIiwidGltZW91dCIsImF4aW9zIiwiZ2V0IiwicG9zdCIsImNvbnNvbGUiLCJ0b1VwcGVyQ2FzZSIsInRoZW4iLCJyZXNwb25zZSIsInRyaWdnZXJPblN0b3BMb2FkaW5nIiwiY2F0Y2giLCJ0cmlnZ2VyT25FcnJvciIsIlByb21pc2UiLCJyZXNvbHZlIiwicmVqZWN0IiwiZXhlYyIsImRyYXdlcldpZHRoIiwidGhlbWVCVyIsImNyZWF0ZU11aVRoZW1lIiwicGFsZXR0ZSIsInByaW1hcnkiLCJsaWdodCIsIm1haW4iLCJkYXJrIiwiY29udHJhc3RUZXh0Iiwic2Vjb25kYXJ5IiwidHlwb2dyYXBoeSIsImZvbnRGYW1pbHkiLCJqb2luIiwiZm9udFNpemUiLCJzdHlsZXMiLCJyb290Iiwicm9vdEZpeGVkIiwibWFyZ2luVG9wIiwiYm9keSIsImJveFNpemluZyIsIm1hcmdpbiIsImxvYWRpbmciLCJoZWlnaHQiLCJtZW51QnV0dG9uIiwibWFyZ2luTGVmdCIsIm1hcmdpblJpZ2h0IiwiZHJhd2VyUGFwZXIiLCJwb3NpdGlvbiIsIndpZHRoIiwiVUlBcHAiLCJzdGF0ZSIsImRyYXdlck9wZW4iLCJ0b2dnbGVEcmF3ZXIiLCJiaW5kIiwic2V0U3RhdGUiLCJrZXkiLCJjbGFzc2VzIiwidGhlbWUiLCJwYWdlX3RpdGxlIiwiYmFyUG9zaXRpb24iLCJhcHBiYXIiLCJiYXJTdHlsZSIsImRyYXdlciIsImNsYXNzTmFtZXMiLCJsb2dvIiwic3JjIiwiY2xhc3NOYW1lIiwidG9vbGJhciIsIm1hcCIsIm1lbnUiLCJocmVmIiwibmFtZSIsImNoaWxkcmVuIiwiUmVhY3QiLCJDb21wb25lbnQiLCJ3aXRoU3R5bGVzIiwid2l0aFRoZW1lIiwiQXBwTGlzdCIsImRlZmF1bHRQcm9wcyIsInR5cGUiLCJVSUFwcEJhciIsImRlZmF1bHRzIiwiY29sb3IiLCJVSUNvbXBvbmVudCIsIlVJQnV0dG9uIiwiZGlzYWJsZWQiLCJvbkNsaWNrIiwiZmFiIiwic3R5bGUiLCJpY28iLCJpY29uIiwicmVuZGVyIiwiY29tcG9uZW50IiwicGgiLCJwbGFjZWhvbGRlciIsInBoVyIsInBoSCIsIkVycm9yQm91bmRhcnkiLCJoYXNFcnJvciIsImVycm9ycyIsImluZm8iLCJwdXNoIiwid2luZG93IiwiX19hcGkiLCJzZXRFcnJvciIsInRvU3RyaW5nIiwicmVmIiwiZnJvbSIsInBhZGRpbmciLCJib3JkZXIiLCJlIiwiVUlJY29uIiwiZ2V0SWNvbiIsInpJbmRleCIsInRvcCIsInJpZ2h0IiwibGVmdCIsImJvdHRvbSIsImJhY2tncm91bmRDb2xvciIsIlVJTG9hZGluZ0JhciIsInRleHRBbGlnbiIsImZvbnRXZWlnaHQiLCJwYWRkaW5nVG9wIiwiTW9ja3VwQmxvY2siLCJVSVNuYWNrYmFyIiwib3BlbiIsIm1lc3NhZ2UiLCJoYW5kbGVSZXF1ZXN0Q2xvc2UiLCJldmVudCIsInJlYXNvbiIsInZlcnRpY2FsIiwiaG9yaXpvbnRhbCIsIlN0cmluZyIsIlVJVG9vbGJhciIsImdldERlZmF1bHRzIiwiZGVmIiwiaW5pdFVJIiwiUmVhY3RET00iLCJkb2N1bWVudCIsImdldEVsZW1lbnRCeUlkIiwiUm9vdCIsIm1vZHVsZSIsInBhcmVudCIsIkNvbnN0YW50cyIsIkxPQ0FMIiwiVkVSU0lPTiIsIkNPTUlEIiwiQ09NRiIsIkNPTVYiLCJVWElfVkVSU0lPTlMiLCJTdGF0ZSIsImRhdGFfa2JfYW5kcm9pZCIsImFwaVVSSSIsImRhdGFQYXRoIiwic2V0IiwiYXBwIiwiZ2V0QVBJIiwiZ2V0QXBwIiwiYmxvZyIsImFyZWEiLCJjYXRlZ29yeSIsImYxIiwidjEiLCJCYXNlQVBJIiwiTUVTU0FHRVNfTE9BRElORyIsIk1FU1NBR0VTX0ZBSUxFRCIsIk1FU1NBR0VTX0ZFVENIRUQiLCJNRVNTQUdFX0xPQURJTkciLCJNRVNTQUdFX0ZBSUxFRCIsIk1FU1NBR0VfRkVUQ0hFRCIsIkxBQkVMU19MT0FESU5HIiwiTEFCRUxTX0ZBSUxFRCIsIkxBQkVMU19GRVRDSEVEIiwiQ29uZmlndXJlU3RvcmUiLCJzdG9yZSIsImNyZWF0ZVN0b3JlIiwiY29tYmluZVJlZHVjZXJzIiwibWVzc2FnZXMiLCJNZXNzYWdlcyIsImxhYmVscyIsIkxhYmVscyIsImFwcGx5TWlkZGxld2FyZSIsInRodW5rIiwibG9nZ2VyIiwiYWN0aW9uIiwiQWN0aW9uVHlwZXMiLCJwYXlsb2FkIiwiaWR4IiwidGV4dCIsInRyZWUiLCJCYW9iYWIiLCJwYWdlcyIsImdsb2JhbCIsImhvbWUiLCJ0cmVuZHMiLCJjb3Vyc2VzIiwiY3YiLCJrYl9hbmRyb2lkIiwicmVjb3JkcyIsImNhdGVnb3JpZXMiLCJhdXRvQ29tbWl0IiwiYXN5bmNocm9ub3VzIiwiaW1tdXRhYmxlIiwicGVyc2lzdGVudCIsIl9fc3RhdGUiLCJQb3N0TGlua0NvbXBvbmVudCIsInNsdWciLCJ3aXRoTW9kdWxlIiwiUGFnZSIsImNvbnRleHQiLCJhcGkiLCJyb3V0ZXIiLCJyb3V0ZSIsIkhvbWVQcm94eSIsIkxvYWRhYmxlIiwibG9hZGVyIiwiTG9hZGluZyIsInBhZ2UiLCJjb20iLCJnZXRDb21wb25lbnRzVmVyc2lvbiIsIm9wdGlvbiIsImhhbmRsZUNoYW5nZSIsIm9uQ2xvc2UiLCJ2YWx1ZSIsInRhcmdldCIsInNldENvbXBvbmVudHNWZXJzaW9uIiwiQ09NX1NXSVRDSCIsInZpc2libGUiLCJEZWJ1ZyIsInRleHRBbGlnbm1lbnQiLCJERUJVRyIsImlubmVyV2lkdGgiLCJjbGllbnRXaWR0aCIsImlubmVySGVpZ2h0IiwiY2xpZW50SGVpZ2h0IiwiYnJvd3Nlck5hbWUiLCJicm93c2VyVmVyc2lvbiIsIm1vYmlsZVZlbmRvciIsIm1vYmlsZU1vZGVsIiwib3NOYW1lIiwib3NWZXJzaW9uIiwiR3JpZENvbnRhaW5lciIsInNwYWNpbmciLCJhbGlnbiIsImp1c3RpZnkiLCJ2YWxpZ24iLCJhbGlnbkl0ZW1zIiwiZGlyZWN0aW9uIiwiR3JpZEl0ZW0iLCJ4cyIsInNtIiwibWQiLCJiYXIiLCJmbGV4R3JvdyIsIm1pbkhlaWdodCIsImJvcmRlclJhZGl1cyIsIk1MQkFwcCIsIm5hdmlnYXRpb24iLCJOYXZpZ2F0aW9uIiwib3B0aW9ucyIsInNob3dJbk1lbnUiLCJNRU5VX0JBUl9GR19DT0xPUiIsIm1pbldpZHRoIiwibWVudUNsaWNrIiwiVElUTEUiLCJhcHBCb2R5IiwiQ2hpbGRyZW4iLCJ0b0FycmF5IiwiTUVOVV9CQVJfQkdfQ09MT1IiLCJBcHBCb2R5IiwiQXBwRHJhd2VyIiwicGF0aG5hbWUiLCJGb290ZXJDb21wb25lbnQiLCJIZWFkZXJDb21wb25lbnQiLCJUb3BCYXIiLCJob3QiLCJIb3RCYXJDb21wb25lbnQiLCJjb250cm9sIiwiY2xlYW4iLCJib3JkZXJCb3R0b20iLCJBbmRyb2lkUHJveHkiLCJDb25mIiwiVmVyc2lvbnMiLCJMT0ciLCJDT01fQ1VSUkVOVCIsIkRFRkFVTFRfVVhJIiwiSG9tZUNvbXBvbmVudCIsIkJsb2dDb21wb25lbnQiLCJCbG9nUG9zdENvbXBvbmVudCIsIktCQ29tcG9uZW50IiwiS0JQb3N0QW5kcm9pZENvbXBvbmVudCIsIktCUG9zdENvbXBvbmVudCIsIkxhYnNDb21wb25lbnQiLCJQcm9qZWN0Q29tcG9uZW50IiwiQ1ZDb21wb25lbnQiLCJJbmRleCIsIk5BViIsImhhc2hIaXN0b3J5IiwiciIsIlJvb3RlZEluZGV4IiwiYnJhbmNoIiwid2l0aFJvdXRlciIsIm1hcFN0YXRlVG9Qcm9wcyIsIm1hcERpc3BhdGNoVG9Qcm9wcyIsImdldEJsb2ciLCJsb2NhdGlvbiIsImNvbm5lY3QiLCJnZXRQb3N0IiwieWVhciIsIm1vbnRoIiwiZGF5IiwiZ2V0Q1YiLCJnZXRIb21lIiwiZ2V0VHJlbmRzIiwiZ2V0S0JBbmRyb2lkQ2F0ZWdvcmllcyIsInByb2plY3QiXSwibWFwcGluZ3MiOiI7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGdCQUFRLG9CQUFvQjtBQUM1QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHlCQUFpQiw0QkFBNEI7QUFDN0M7QUFDQTtBQUNBLDBCQUFrQiwyQkFBMkI7QUFDN0M7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBLGtEQUEwQztBQUMxQzs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7OztBQUdBOztBQUVBO0FBQ0EseUNBQWlDOztBQUVqQztBQUNBO0FBQ0E7QUFDQSxhQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0EsY0FB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QUFDLGlFQUFELElBQWEsV0FBVyxLQUFLaEIsS0FBTCxDQUFXZ0IsU0FBbkMsR0FBUDtBQUNGLGFBQUssU0FBTDtBQUNFLGlCQUFPLDJEQUFDLCtEQUFELElBQVUsV0FBVyxLQUFLaEIsS0FBTCxDQUFXZ0IsU0FBaEMsR0FBUDtBQUNGLGFBQUssT0FBTDtBQUNFLGlCQUFPLDJEQUFDLGdFQUFELElBQVcsV0FBVyxLQUFLaEIsS0FBTCxDQUFXZ0IsU0FBakMsR0FBUDtBQUNGLGFBQUssUUFBTDtBQUNFLGlCQUFPLDJEQUFDLCtEQUFELElBQVksV0FBVyxLQUFLaEIsS0FBTCxDQUFXZ0IsU0FBbEMsR0FBUDtBQUNGLGFBQUssTUFBTDtBQUNFLGlCQUFPLDJEQUFDLHdFQUFELElBQVUsV0FBVyxLQUFLaEIsS0FBTCxDQUFXZ0IsU0FBaEMsR0FBUDtBQUNGLGFBQUssU0FBTDtBQUNFLGlCQUFPLDJEQUFDLGtFQUFELElBQWEsV0FBVyxLQUFLaEIsS0FBTCxDQUFXZ0IsU0FBbkMsR0FBUDtBQUNGLGFBQUssVUFBTDtBQUNFLGlCQUFPLDJEQUFDLCtFQUFELElBQWMsV0FBVyxLQUFLaEIsS0FBTCxDQUFXZ0IsU0FBcEMsR0FBUDtBQUNGLGFBQUssT0FBTDtBQUNFLGlCQUFPLDJEQUFDLG9FQUFELElBQVcsV0FBVyxLQUFLaEIsS0FBTCxDQUFXZ0IsU0FBakMsR0FBUDtBQUNGLGFBQUssTUFBTDtBQUNFLGlCQUFPLDJEQUFDLCtEQUFELElBQVUsV0FBVyxLQUFLaEIsS0FBTCxDQUFXZ0IsU0FBaEMsR0FBUDtBQUNGLGFBQUssTUFBTDtBQUNFLGlCQUFPLDJEQUFDLG1FQUFELElBQVUsV0FBVyxLQUFLaEIsS0FBTCxDQUFXZ0IsU0FBaEMsR0FBUDtBQUNGLGFBQUssVUFBTDtBQUNFLGlCQUFPLDJEQUFDLCtEQUFELElBQWMsV0FBVyxLQUFLaEIsS0FBTCxDQUFXZ0IsU0FBcEMsR0FBUDtBQUNGLGFBQUssSUFBTDtBQUNFLGlCQUFPLDJEQUFDLCtEQUFELElBQVEsV0FBVyxLQUFLaEIsS0FBTCxDQUFXZ0IsU0FB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YUFBYSxtQkFBTyxDQUFDLDJMQUFnRzs7QUFFckg7O0FBRUEsR0FBRyxLQUFVLEVBQUUsRSIsImZpbGUiOiJhcHAuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBpbnN0YWxsIGEgSlNPTlAgY2FsbGJhY2sgZm9yIGNodW5rIGxvYWRpbmdcbiBcdGZ1bmN0aW9uIHdlYnBhY2tKc29ucENhbGxiYWNrKGRhdGEpIHtcbiBcdFx0dmFyIGNodW5rSWRzID0gZGF0YVswXTtcbiBcdFx0dmFyIG1vcmVNb2R1bGVzID0gZGF0YVsxXTtcbiBcdFx0dmFyIGV4ZWN1dGVNb2R1bGVzID0gZGF0YVsyXTtcblxuIFx0XHQvLyBhZGQgXCJtb3JlTW9kdWxlc1wiIHRvIHRoZSBtb2R1bGVzIG9iamVjdCxcbiBcdFx0Ly8gdGhlbiBmbGFnIGFsbCBcImNodW5rSWRzXCIgYXMgbG9hZGVkIGFuZCBmaXJlIGNhbGxiYWNrXG4gXHRcdHZhciBtb2R1bGVJZCwgY2h1bmtJZCwgaSA9IDAsIHJlc29sdmVzID0gW107XG4gXHRcdGZvcig7aSA8IGNodW5rSWRzLmxlbmd0aDsgaSsrKSB7XG4gXHRcdFx0Y2h1bmtJZCA9IGNodW5rSWRzW2ldO1xuIFx0XHRcdGlmKGluc3RhbGxlZENodW5rc1tjaHVua0lkXSkge1xuIFx0XHRcdFx0cmVzb2x2ZXMucHVzaChpbnN0YWxsZWRDaHVua3NbY2h1bmtJZF1bMF0pO1xuIFx0XHRcdH1cbiBcdFx0XHRpbnN0YWxsZWRDaHVua3NbY2h1bmtJZF0gPSAwO1xuIFx0XHR9XG4gXHRcdGZvcihtb2R1bGVJZCBpbiBtb3JlTW9kdWxlcykge1xuIFx0XHRcdGlmKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChtb3JlTW9kdWxlcywgbW9kdWxlSWQpKSB7XG4gXHRcdFx0XHRtb2R1bGVzW21vZHVsZUlkXSA9IG1vcmVNb2R1bGVzW21vZHVsZUlkXTtcbiBcdFx0XHR9XG4gXHRcdH1cbiBcdFx0aWYocGFyZW50SnNvbnBGdW5jdGlvbikgcGFyZW50SnNvbnBGdW5jdGlvbihkYXRhKTtcblxuIFx0XHR3aGlsZShyZXNvbHZlcy5sZW5ndGgpIHtcbiBcdFx0XHRyZXNvbHZlcy5zaGlmdCgpKCk7XG4gXHRcdH1cblxuIFx0XHQvLyBhZGQgZW50cnkgbW9kdWxlcyBmcm9tIGxvYWRlZCBjaHVuayB0byBkZWZlcnJlZCBsaXN0XG4gXHRcdGRlZmVycmVkTW9kdWxlcy5wdXNoLmFwcGx5KGRlZmVycmVkTW9kdWxlcywgZXhlY3V0ZU1vZHVsZXMgfHwgW10pO1xuXG4gXHRcdC8vIHJ1biBkZWZlcnJlZCBtb2R1bGVzIHdoZW4gYWxsIGNodW5rcyByZWFkeVxuIFx0XHRyZXR1cm4gY2hlY2tEZWZlcnJlZE1vZHVsZXMoKTtcbiBcdH07XG4gXHRmdW5jdGlvbiBjaGVja0RlZmVycmVkTW9kdWxlcygpIHtcbiBcdFx0dmFyIHJlc3VsdDtcbiBcdFx0Zm9yKHZhciBpID0gMDsgaSA8IGRlZmVycmVkTW9kdWxlcy5sZW5ndGg7IGkrKykge1xuIFx0XHRcdHZhciBkZWZlcnJlZE1vZHVsZSA9IGRlZmVycmVkTW9kdWxlc1tpXTtcbiBcdFx0XHR2YXIgZnVsZmlsbGVkID0gdHJ1ZTtcbiBcdFx0XHRmb3IodmFyIGogPSAxOyBqIDwgZGVmZXJyZWRNb2R1bGUubGVuZ3RoOyBqKyspIHtcbiBcdFx0XHRcdHZhciBkZXBJZCA9IGRlZmVycmVkTW9kdWxlW2pdO1xuIFx0XHRcdFx0aWYoaW5zdGFsbGVkQ2h1bmtzW2RlcElkXSAhPT0gMCkgZnVsZmlsbGVkID0gZmFsc2U7XG4gXHRcdFx0fVxuIFx0XHRcdGlmKGZ1bGZpbGxlZCkge1xuIFx0XHRcdFx0ZGVmZXJyZWRNb2R1bGVzLnNwbGljZShpLS0sIDEpO1xuIFx0XHRcdFx0cmVzdWx0ID0gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBkZWZlcnJlZE1vZHVsZVswXSk7XG4gXHRcdFx0fVxuIFx0XHR9XG4gXHRcdHJldHVybiByZXN1bHQ7XG4gXHR9XG5cbiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIG9iamVjdCB0byBzdG9yZSBsb2FkZWQgYW5kIGxvYWRpbmcgY2h1bmtzXG4gXHQvLyB1bmRlZmluZWQgPSBjaHVuayBub3QgbG9hZGVkLCBudWxsID0gY2h1bmsgcHJlbG9hZGVkL3ByZWZldGNoZWRcbiBcdC8vIFByb21pc2UgPSBjaHVuayBsb2FkaW5nLCAwID0gY2h1bmsgbG9hZGVkXG4gXHR2YXIgaW5zdGFsbGVkQ2h1bmtzID0ge1xuIFx0XHRcImFwcFwiOiAwXG4gXHR9O1xuXG4gXHR2YXIgZGVmZXJyZWRNb2R1bGVzID0gW107XG5cbiBcdC8vIHNjcmlwdCBwYXRoIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBqc29ucFNjcmlwdFNyYyhjaHVua0lkKSB7XG4gXHRcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fLnAgKyBcIlwiICsgKHt9W2NodW5rSWRdfHxjaHVua0lkKSArIFwiLmpzXCJcbiBcdH1cblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG4gXHQvLyBUaGlzIGZpbGUgY29udGFpbnMgb25seSB0aGUgZW50cnkgY2h1bmsuXG4gXHQvLyBUaGUgY2h1bmsgbG9hZGluZyBmdW5jdGlvbiBmb3IgYWRkaXRpb25hbCBjaHVua3NcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZSA9IGZ1bmN0aW9uIHJlcXVpcmVFbnN1cmUoY2h1bmtJZCkge1xuIFx0XHR2YXIgcHJvbWlzZXMgPSBbXTtcblxuXG4gXHRcdC8vIEpTT05QIGNodW5rIGxvYWRpbmcgZm9yIGphdmFzY3JpcHRcblxuIFx0XHR2YXIgaW5zdGFsbGVkQ2h1bmtEYXRhID0gaW5zdGFsbGVkQ2h1bmtzW2NodW5rSWRdO1xuIFx0XHRpZihpbnN0YWxsZWRDaHVua0RhdGEgIT09IDApIHsgLy8gMCBtZWFucyBcImFscmVhZHkgaW5zdGFsbGVkXCIuXG5cbiBcdFx0XHQvLyBhIFByb21pc2UgbWVhbnMgXCJjdXJyZW50bHkgbG9hZGluZ1wiLlxuIFx0XHRcdGlmKGluc3RhbGxlZENodW5rRGF0YSkge1xuIFx0XHRcdFx0cHJvbWlzZXMucHVzaChpbnN0YWxsZWRDaHVua0RhdGFbMl0pO1xuIFx0XHRcdH0gZWxzZSB7XG4gXHRcdFx0XHQvLyBzZXR1cCBQcm9taXNlIGluIGNodW5rIGNhY2hlXG4gXHRcdFx0XHR2YXIgcHJvbWlzZSA9IG5ldyBQcm9taXNlKGZ1bmN0aW9uKHJlc29sdmUsIHJlamVjdCkge1xuIFx0XHRcdFx0XHRpbnN0YWxsZWRDaHVua0RhdGEgPSBpbnN0YWxsZWRDaHVua3NbY2h1bmtJZF0gPSBbcmVzb2x2ZSwgcmVqZWN0XTtcbiBcdFx0XHRcdH0pO1xuIFx0XHRcdFx0cHJvbWlzZXMucHVzaChpbnN0YWxsZWRDaHVua0RhdGFbMl0gPSBwcm9taXNlKTtcblxuIFx0XHRcdFx0Ly8gc3RhcnQgY2h1bmsgbG9hZGluZ1xuIFx0XHRcdFx0dmFyIHNjcmlwdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NjcmlwdCcpO1xuIFx0XHRcdFx0dmFyIG9uU2NyaXB0Q29tcGxldGU7XG5cbiBcdFx0XHRcdHNjcmlwdC5jaGFyc2V0ID0gJ3V0Zi04JztcbiBcdFx0XHRcdHNjcmlwdC50aW1lb3V0ID0gMTIwO1xuIFx0XHRcdFx0aWYgKF9fd2VicGFja19yZXF1aXJlX18ubmMpIHtcbiBcdFx0XHRcdFx0c2NyaXB0LnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIF9fd2VicGFja19yZXF1aXJlX18ubmMpO1xuIFx0XHRcdFx0fVxuIFx0XHRcdFx0c2NyaXB0LnNyYyA9IGpzb25wU2NyaXB0U3JjKGNodW5rSWQpO1xuXG4gXHRcdFx0XHRvblNjcmlwdENvbXBsZXRlID0gZnVuY3Rpb24gKGV2ZW50KSB7XG4gXHRcdFx0XHRcdC8vIGF2b2lkIG1lbSBsZWFrcyBpbiBJRS5cbiBcdFx0XHRcdFx0c2NyaXB0Lm9uZXJyb3IgPSBzY3JpcHQub25sb2FkID0gbnVsbDtcbiBcdFx0XHRcdFx0Y2xlYXJUaW1lb3V0KHRpbWVvdXQpO1xuIFx0XHRcdFx0XHR2YXIgY2h1bmsgPSBpbnN0YWxsZWRDaHVua3NbY2h1bmtJZF07XG4gXHRcdFx0XHRcdGlmKGNodW5rICE9PSAwKSB7XG4gXHRcdFx0XHRcdFx0aWYoY2h1bmspIHtcbiBcdFx0XHRcdFx0XHRcdHZhciBlcnJvclR5cGUgPSBldmVudCAmJiAoZXZlbnQudHlwZSA9PT0gJ2xvYWQnID8gJ21pc3NpbmcnIDogZXZlbnQudHlwZSk7XG4gXHRcdFx0XHRcdFx0XHR2YXIgcmVhbFNyYyA9IGV2ZW50ICYmIGV2ZW50LnRhcmdldCAmJiBldmVudC50YXJnZXQuc3JjO1xuIFx0XHRcdFx0XHRcdFx0dmFyIGVycm9yID0gbmV3IEVycm9yKCdMb2FkaW5nIGNodW5rICcgKyBjaHVua0lkICsgJyBmYWlsZWQuXFxuKCcgKyBlcnJvclR5cGUgKyAnOiAnICsgcmVhbFNyYyArICcpJyk7XG4gXHRcdFx0XHRcdFx0XHRlcnJvci50eXBlID0gZXJyb3JUeXBlO1xuIFx0XHRcdFx0XHRcdFx0ZXJyb3IucmVxdWVzdCA9IHJlYWxTcmM7XG4gXHRcdFx0XHRcdFx0XHRjaHVua1sxXShlcnJvcik7XG4gXHRcdFx0XHRcdFx0fVxuIFx0XHRcdFx0XHRcdGluc3RhbGxlZENodW5rc1tjaHVua0lkXSA9IHVuZGVmaW5lZDtcbiBcdFx0XHRcdFx0fVxuIFx0XHRcdFx0fTtcbiBcdFx0XHRcdHZhciB0aW1lb3V0ID0gc2V0VGltZW91dChmdW5jdGlvbigpe1xuIFx0XHRcdFx0XHRvblNjcmlwdENvbXBsZXRlKHsgdHlwZTogJ3RpbWVvdXQnLCB0YXJnZXQ6IHNjcmlwdCB9KTtcbiBcdFx0XHRcdH0sIDEyMDAwMCk7XG4gXHRcdFx0XHRzY3JpcHQub25lcnJvciA9IHNjcmlwdC5vbmxvYWQgPSBvblNjcmlwdENvbXBsZXRlO1xuIFx0XHRcdFx0ZG9jdW1lbnQuaGVhZC5hcHBlbmRDaGlsZChzY3JpcHQpO1xuIFx0XHRcdH1cbiBcdFx0fVxuIFx0XHRyZXR1cm4gUHJvbWlzZS5hbGwocHJvbWlzZXMpO1xuIFx0fTtcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG4gXHQvLyBvbiBlcnJvciBmdW5jdGlvbiBmb3IgYXN5bmMgbG9hZGluZ1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vZSA9IGZ1bmN0aW9uKGVycikgeyBjb25zb2xlLmVycm9yKGVycik7IHRocm93IGVycjsgfTtcblxuIFx0dmFyIGpzb25wQXJyYXkgPSB3aW5kb3dbXCJ3ZWJwYWNrSnNvbnBcIl0gPSB3aW5kb3dbXCJ3ZWJwYWNrSnNvbnBcIl0gfHwgW107XG4gXHR2YXIgb2xkSnNvbnBGdW5jdGlvbiA9IGpzb25wQXJyYXkucHVzaC5iaW5kKGpzb25wQXJyYXkpO1xuIFx0anNvbnBBcnJheS5wdXNoID0gd2VicGFja0pzb25wQ2FsbGJhY2s7XG4gXHRqc29ucEFycmF5ID0ganNvbnBBcnJheS5zbGljZSgpO1xuIFx0Zm9yKHZhciBpID0gMDsgaSA8IGpzb25wQXJyYXkubGVuZ3RoOyBpKyspIHdlYnBhY2tKc29ucENhbGxiYWNrKGpzb25wQXJyYXlbaV0pO1xuIFx0dmFyIHBhcmVudEpzb25wRnVuY3Rpb24gPSBvbGRKc29ucEZ1bmN0aW9uO1xuXG5cbiBcdC8vIGFkZCBlbnRyeSBtb2R1bGUgdG8gZGVmZXJyZWQgbGlzdFxuIFx0ZGVmZXJyZWRNb2R1bGVzLnB1c2goWzAsXCJ2ZW5kb3JcIl0pO1xuIFx0Ly8gcnVuIGRlZmVycmVkIG1vZHVsZXMgd2hlbiByZWFkeVxuIFx0cmV0dXJuIGNoZWNrRGVmZXJyZWRNb2R1bGVzKCk7XG4iLCJleHBvcnRzID0gbW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vZnJhbWV3b3Jrcy93ZWJhcHBzL3N0YXJ0dXAvbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvbGliL2Nzcy1iYXNlLmpzXCIpKGZhbHNlKTtcbi8vIGltcG9ydHNcblxuXG4vLyBtb2R1bGVcbmV4cG9ydHMucHVzaChbbW9kdWxlLmlkLCBcIi5tb2QtdmVyc2lvbiB7XFxuICB3aWR0aDogMTAwJTtcXG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xcbiAgcGFkZGluZzogMTBweDsgfVxcblwiLCBcIlwiXSk7XG5cbi8vIGV4cG9ydHNcbiIsImV4cG9ydHMgPSBtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCIuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9mcmFtZXdvcmtzL3dlYmFwcHMvc3RhcnR1cC9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9saWIvY3NzLWJhc2UuanNcIikoZmFsc2UpO1xuLy8gaW1wb3J0c1xuXG5cbi8vIG1vZHVsZVxuZXhwb3J0cy5wdXNoKFttb2R1bGUuaWQsIFwiLm1vZC1mb290ZXIge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogIzU1NTtcXG4gIGNvbG9yOiB3aGl0ZTtcXG4gIHBhZGRpbmc6IDIwcHggMjBweCAyMHB4IDMwcHg7IH1cXG5cXG4ubW9kLWZvb3RlciBhOnZpc2l0ZWQsXFxuLm1vZC1mb290ZXIgYTpsaW5rIHtcXG4gIGNvbG9yOiB3aGl0ZTtcXG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTsgfVxcblwiLCBcIlwiXSk7XG5cbi8vIGV4cG9ydHNcbiIsImV4cG9ydHMgPSBtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCIuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9mcmFtZXdvcmtzL3dlYmFwcHMvc3RhcnR1cC9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9saWIvY3NzLWJhc2UuanNcIikoZmFsc2UpO1xuLy8gaW1wb3J0c1xuXG5cbi8vIG1vZHVsZVxuZXhwb3J0cy5wdXNoKFttb2R1bGUuaWQsIFwiLm1vZC13aGF0cy1ob3Qge1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgZm9udC1zaXplOiAwLjhlbTsgfVxcblwiLCBcIlwiXSk7XG5cbi8vIGV4cG9ydHNcbiIsImV4cG9ydHMgPSBtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCIuLi8uLi8uLi8uLi8uLi8uLi8uLi9mcmFtZXdvcmtzL3dlYmFwcHMvc3RhcnR1cC9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9saWIvY3NzLWJhc2UuanNcIikoZmFsc2UpO1xuLy8gaW1wb3J0c1xuXG5cbi8vIG1vZHVsZVxuZXhwb3J0cy5wdXNoKFttb2R1bGUuaWQsIFwiXCIsIFwiXCJdKTtcblxuLy8gZXhwb3J0c1xuIiwiZXhwb3J0cyA9IG1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL2ZyYW1ld29ya3Mvd2ViYXBwcy9zdGFydHVwL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2xpYi9jc3MtYmFzZS5qc1wiKShmYWxzZSk7XG4vLyBpbXBvcnRzXG5cblxuLy8gbW9kdWxlXG5leHBvcnRzLnB1c2goW21vZHVsZS5pZCwgXCIubW9kLXNvY2lhbC1pY29ucyB7XFxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICBtYXJnaW46IDEwcHggMDsgfVxcblxcbi5tb2Qtc29jaWFsLWljb25zIGEge1xcbiAgZm9udC1zaXplOiAxNHB4ICFpbXBvcnRhbnQ7XFxuICBtYXJnaW4tcmlnaHQ6IDVweDsgfVxcblxcbi5tb2Qtc29jaWFsLWljb25zIGE6aG92ZXIge1xcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lOyB9XFxuXFxuLm1vZC1zb2NpYWwtaWNvbnMgYSBpIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyIGNlbnRlcjtcXG4gIGxpbmUtaGVpZ2h0OiAzMnB4O1xcbiAgYm9yZGVyLXJhZGl1czogOHB4O1xcbiAgYm9yZGVyOiAxcHggc29saWQgI2EwYTBhMDtcXG4gIGhlaWdodDogMzhweDtcXG4gIHdpZHRoOiAzOHB4O1xcbiAgcGFkZGluZy10b3A6IDJweDsgfVxcblwiLCBcIlwiXSk7XG5cbi8vIGV4cG9ydHNcbiIsImltcG9ydCBTZXJ2ZXIgZnJvbSAnY29yZS9hcHAvc2VydmVyJztcblxuY2xhc3MgQVBJIHtcblx0Y29uc3RydWN0b3IocHJvcHMpIHtcblx0XHR0aGlzLmVycm9yID0gXCJcIjtcblx0XHR0aGlzLmN1cnJlbnRfY29tcG9uZW50ID0gcHJvcHMuY3VycmVudF9jb21wb25lbnQ7XG5cdFx0dGhpcy5jb21wb25lbnRzID0gcHJvcHMuY29tcG9uZW50cztcblx0XHR0aGlzLmxvY2FsID0gcHJvcHMubG9jYWw7XG5cdFx0dGhpcy50aXRsZSA9IHByb3BzLnRpdGxlO1xuXHRcdHRoaXMuZGVidWcgPSBwcm9wcy5kZWJ1ZztcblxuXHRcdHRoaXMuc2VydmVyID0gbmV3IFNlcnZlcih7ZGVidWc6IHRoaXMuZGVidWcsIGxvY2FsOiB0aGlzLmxvY2FsfSk7XG5cdH1cblxuXHRnZXRFcnJvcigpe1xuXHRcdHJldHVybiB0aGlzLmVycm9yO1xuXHR9XG5cblx0c2V0RXJyb3IoZXJyKXtcblx0XHR0aGlzLmVycm9yICs9IFwiXFxuXCIgKyBlcnI7XG5cdH1cblxuXHRnZXRDb21wb25lbnRzVmVyc2lvbigpe1xuXHRcdHJldHVybiB0aGlzLmN1cnJlbnRfY29tcG9uZW50O1xuXHR9XG5cblx0c2V0Q29tcG9uZW50c1ZlcnNpb24oaWQpe1xuXHRcdHZhciBmYW1pbHksIHZlcnNpb247XG5cdFx0Y29uc3QgZGF0YSA9IHRoaXMuY29tcG9uZW50cztcblx0XHRjb25zdCBpdGVtID0gZGF0YS5maW5kKChpdGVtKSA9PiAoaXRlbS5pZCA9PSBpZCkgPyBpdGVtIDogbnVsbCk7XG5cblx0XHR0aGlzLmN1cnJlbnRfY29tcG9uZW50ID0ge2lkIDogaXRlbS5pZCwgZmFtaWx5IDogaXRlbS5mYW1pbHksIHZlcnNpb24gOiBpdGVtLnZlcnNpb259O1xuXHR9XG4gIFxufVxuXG5leHBvcnQgZGVmYXVsdCBBUEk7XG4iLCJpbXBvcnQgYXhpb3MgZnJvbSAnYXhpb3MnO1xuXG5jbGFzcyBTZXJ2ZXIge1xuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgIHRoaXMub25TdGFydExvYWRpbmcgPSBudWxsO1xuICAgIHRoaXMub25TdG9wTG9hZGluZyA9IG51bGw7XG4gICAgdGhpcy5vbkVycm9yID0gbnVsbDtcbiAgICBcblxuICAgIHZhciBjb25uZWN0aW9ucyA9IFtcbiAgICAgIHtwcm90b2NvbDogJ2h0dHAnLCBzZXJ2ZXI6ICcxOTIuMTY4LjEuMTUwJywgcGF0aDonL2RhdGEnfSxcbiAgICAgIHtwcm90b2NvbDogJ2h0dHBzJywgc2VydmVyOiAnam1hcnJveWF2ZS1zZWFyY2gtYmFja2VuZC5oZXJva3VhcHAuY29tJywgcGF0aDonJ30sXG4gICAgICB7cHJvdG9jb2w6ICdodHRwcycsIHNlcnZlcjogJ2ptYXJyb3lhdmUtZGF0YS1zZXJ2ZXIuaGVyb2t1YXBwLmNvbScsIHBhdGg6Jyd9LFxuICAgIF1cblxuICAgIHZhciBjdXJyZW50ID0gIChwcm9wcyAmJiBwcm9wcy5sb2NhbCA9PSBmYWxzZSkgPyBjb25uZWN0aW9uc1syXSA6IGNvbm5lY3Rpb25zWzBdOyBcbiAgICB0aGlzLnNlcnZlclVSSSA9IGAke2N1cnJlbnQucHJvdG9jb2x9Oi8vJHtjdXJyZW50LnNlcnZlcn0ke2N1cnJlbnQucGF0aH1gO1xuICAgIHRoaXMuZGVidWcgPSAoIXByb3BzIHx8IHByb3BzLmRlYnVnKSA/IHRydWUgOiBmYWxzZTtcbiAgfVxuXG4gIHRyaWdnZXJPblN0YXJ0TG9hZGluZygpeyAgIFxuICAgIGlmKHRoaXMub25TdGFydExvYWRpbmcpe1xuICAgICAgdGhpcy5vblN0YXJ0TG9hZGluZygpO1xuICAgIH1cbiAgfVxuXG4gIHRyaWdnZXJPblN0b3BMb2FkaW5nKCl7XG4gICAgaWYodGhpcy5vblN0b3BMb2FkaW5nKVxuICAgICAgdGhpcy5vblN0b3BMb2FkaW5nKCk7XG4gIH1cblxuICB0cmlnZ2VyT25FcnJvcihlcnIpe1xuICAgIGlmKHRoaXMub25FcnJvcilcbiAgICAgIHRoaXMub25FcnJvcihlcnIpOyAgIFxuICB9XG5cbiAgZXhlYyhtZXRob2QsIHVyaSwgcGFyYW1zLCBjb25maWcsIGNhbGxiYWNrLCBjYWxsYmFja19lcnIpe1xuICAgIHZhciAkdGhpcyA9IHRoaXM7ICAgXG4gICAgdmFyIHVybCA9ICh1cmkuaW5kZXhPZihcImh0dHBcIikgPT0gMCB8fCB1cmkuaW5kZXhPZihcIi5cIikgPT0gMCkgPyB1cmkgOiB0aGlzLnNlcnZlclVSSSArIHVyaTtcbiAgICB2YXIgcDtcbiAgICB0aGlzLnRyaWdnZXJPblN0YXJ0TG9hZGluZygpXG4gICAgY29uc3QgdGltZW91dCA9IDYwICogMTAwMDtcblxuICAgIGlmKG1ldGhvZCA9PT0gJ2dldCcpe1xuICAgICAgcCA9IGF4aW9zLmdldCh1cmwsIHtcbiAgICAgICAgcGFyYW1zOnBhcmFtcyxcbiAgICAgICAgdGltZW91dDogKGNvbmZpZyAmJiBjb25maWcudGltZW91dCkgPyBjb25maWcudGltZW91dCA6IHRpbWVvdXQsXG4gICAgICB9KTtcbiAgICB9IGVsc2Uge1xuICAgICAgcCA9IGF4aW9zLnBvc3QodXJsLCBwYXJhbXMsIHtcbiAgICAgICAgdGltZW91dDogKGNvbmZpZyAmJiBjb25maWcudGltZW91dCkgPyBjb25maWcudGltZW91dCA6IHRpbWVvdXQsXG4gICAgICB9KTtcbiAgICB9XG5cbiAgICBpZigkdGhpcy5kZWJ1Zyl7XG4gICAgICBjb25zb2xlLmRlYnVnKFwiU1JWXCIsIG1ldGhvZC50b1VwcGVyQ2FzZSgpLCB1cmksIHBhcmFtcyk7XG4gICAgfVxuXG5cbiAgICBwLnRoZW4ocmVzcG9uc2UgPT4ge1xuICAgICAgaWYoJHRoaXMuZGVidWcpe1xuICAgICAgICBjb25zb2xlLmRlYnVnKFwiU1JWXCIsIG1ldGhvZC50b1VwcGVyQ2FzZSgpLCB1cmksIHBhcmFtcywgJ1Jlc3BvbnNlJywgcmVzcG9uc2UpO1xuICAgICAgfVxuICAgICAgaWYoY2FsbGJhY2spXG4gICAgICAgIGNhbGxiYWNrKHJlc3BvbnNlLmRhdGEpO1xuICAgICAgJHRoaXMudHJpZ2dlck9uU3RvcExvYWRpbmcoKVxuICAgIH0pXG4gICAgLmNhdGNoKGVyciA9PiB7XG4gICAgICBpZigkdGhpcy5kZWJ1Zyl7XG4gICAgICAgIGNvbnNvbGUuZGVidWcoXCJTUlZcIiwgbWV0aG9kLnRvVXBwZXJDYXNlKCksIHVyaSwgcGFyYW1zLCBcIkVSUk9SXCIsIGVycik7XG4gICAgICB9XG4gICAgICB0aGlzLnRyaWdnZXJPbkVycm9yKGVycik7XG4gICAgICBpZihjYWxsYmFja19lcnIpe1xuICAgICAgICBjYWxsYmFja19lcnIoZXJyKVxuICAgICAgfVxuICAgICAgJHRoaXMudHJpZ2dlck9uU3RvcExvYWRpbmcoKVxuICAgIH0pOyAgICAgIFxuICB9XG5cbiAgZ2V0cCh1cmksIHBhcmFtcyl7XG4gICAgY29uc3QgJHRoaXMgPSB0aGlzO1xuICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gICAgICAkdGhpcy5nZXQodXJpLHBhcmFtcyxmdW5jdGlvbihkYXRhKXtcbiAgICAgICAgcmVzb2x2ZShkYXRhKTtcbiAgICAgIH0pO1xuICAgIH0pO1xuICB9XG5cbiAgZ2V0KHVyaSwgcGFyYW1zLCBjYWxsYmFjayl7XG4gICAgaWYocGFyYW1zLnBhcmFtcylcbiAgICAgIHBhcmFtcyA9IHBhcmFtcy5wYXJhbXM7XG4gICAgdGhpcy5leGVjKCdnZXQnLCB1cmksIHBhcmFtcywge30sIGNhbGxiYWNrKTtcbiAgfVxuXG4gIGdldExvbmcodXJpLCBwYXJhbXMsIHRpbWVvdXQsIGNhbGxiYWNrLCBjYWxsYmFja19lcnIpe1xuICAgIGlmKHBhcmFtcy5wYXJhbXMpXG4gICAgICBwYXJhbXMgPSBwYXJhbXMucGFyYW1zO1xuICAgIHRoaXMuZXhlYygnZ2V0JywgdXJpLCBwYXJhbXMsIHt0aW1lb3V0OiB0aW1lb3V0fSwgY2FsbGJhY2ssIGNhbGxiYWNrX2Vycik7XG4gIH1cblxuICBwb3N0KHVyaSwgcGFyYW1zLCBjYWxsYmFjaywgY2FsbGJhY2tfZXJyKXtcbiAgICBpZihwYXJhbXMucGFyYW1zKVxuICAgICAgcGFyYW1zID0gcGFyYW1zLnBhcmFtcztcbiAgICB0aGlzLmV4ZWMoJ3Bvc3QnLCB1cmksIHBhcmFtcywge30sIGNhbGxiYWNrLCBjYWxsYmFja19lcnIpO1xuICB9ICBcblxuICBmZXRjaCh1cmwsIHBhcmFtcywgY2FsbGJhY2ssIGNhbGxiYWNrX2Vycil7XG4gICAgaWYocGFyYW1zLnBhcmFtcylcbiAgICAgIHBhcmFtcyA9IHBhcmFtcy5wYXJhbXM7XG4gICAgdmFyICR0aGlzID0gdGhpczsgICBcbiAgICB0aGlzLnRyaWdnZXJPblN0YXJ0TG9hZGluZygpXG4gICAgYXhpb3MuZ2V0KHVybCwge3BhcmFtczpwYXJhbXN9KVxuICAgIC50aGVuKGZ1bmN0aW9uKHJlc3BvbnNlKXtcbiAgICAgIGlmKCR0aGlzLmRlYnVnKXtcbiAgICAgICAgY29uc29sZS5kZWJ1ZyhcIlNSVlwiLCAnRkVUQ0g6JywgdXJsLCBwYXJhbXMsICdTZXJ2ZXIgUmVzcG9uc2U6JywgcmVzcG9uc2UpO1xuICAgICAgfVxuICAgICAgaWYoY2FsbGJhY2spe1xuICAgICAgICBjYWxsYmFjayhyZXNwb25zZS5kYXRhKTtcbiAgICAgIH1cbiAgICAgICR0aGlzLnRyaWdnZXJPblN0b3BMb2FkaW5nKClcbiAgICB9KVxuICAgIC5jYXRjaChlcnIgPT4ge1xuICAgICAgaWYoJHRoaXMuZGVidWcpe1xuICAgICAgICBjb25zb2xlLmRlYnVnKFwiU1JWXCIsICdGRVRDSDonLCB1cmwsIHBhcmFtcywgJ1NlcnZlciBFcnJvcjonLCBlcnIpO1xuICAgICAgfVxuICAgICAgJHRoaXMudHJpZ2dlck9uU3RvcExvYWRpbmcoKVxuICAgICAgdGhpcy50cmlnZ2VyT25FcnJvcihlcnIpO1xuICAgIH0pOyAgICAgIFxuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IFNlcnZlcjtcbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyB3aXRoU3R5bGVzIH0gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvc3R5bGVzJztcbmltcG9ydCBVSUFwcEJhciBmcm9tICdjb3JlL2NvbXBvbmVudHMvYXBwYmFyJztcbmltcG9ydCBVSVRvb2xiYXIgZnJvbSAnY29yZS9jb21wb25lbnRzL3Rvb2xiYXInO1xuaW1wb3J0IFVJQnV0dG9uIGZyb20gJ2NvcmUvY29tcG9uZW50cy9idXR0b24nO1xuaW1wb3J0IFVJTG9hZGluZ0JhciBmcm9tICdjb3JlL2NvbXBvbmVudHMvbG9hZGluZ19iYXInO1xuaW1wb3J0IFVJU25hY2tiYXIgZnJvbSAnY29yZS9jb21wb25lbnRzL3NuYWNrYmFyJztcbmltcG9ydCBIaWRkZW4gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvSGlkZGVuJztcbmltcG9ydCBEcmF3ZXIgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvRHJhd2VyJztcbmltcG9ydCBJY29uQnV0dG9uIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL0ljb25CdXR0b24nO1xuaW1wb3J0IFVJSWNvbiBmcm9tICdjb3JlL2NvbXBvbmVudHMvaWNvbic7XG5pbXBvcnQgeyBNdWlUaGVtZVByb3ZpZGVyLCBjcmVhdGVNdWlUaGVtZSB9IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL3N0eWxlcyc7XG5pbXBvcnQgYmx1ZSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9jb2xvcnMvYmx1ZSc7XG5pbXBvcnQgcmVkIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL2NvbG9ycy9yZWQnO1xuaW1wb3J0IGNsYXNzTmFtZXMgZnJvbSAnY2xhc3NuYW1lcyc7XG5pbXBvcnQgSGVsbWV0IGZyb20gJ3JlYWN0LWhlbG1ldCc7XG5pbXBvcnQgRXJyb3JCb3VuZHJ5IGZyb20gJ2NvcmUvY29tcG9uZW50cy9lcnJvcic7XG5pbXBvcnQgQ3NzQmFzZWxpbmUgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvQ3NzQmFzZWxpbmUnO1xuaW1wb3J0IHsgTGluayB9IGZyb20gJ3JlYWN0LXJvdXRlcidcblxuY29uc3QgZHJhd2VyV2lkdGggPSAyNDA7XG5cbmNvbnN0IHRoZW1lQlcgPSBjcmVhdGVNdWlUaGVtZSh7XG4gIHBhbGV0dGU6IHtcbiAgICBwcmltYXJ5OiB7XG4gICAgICBsaWdodDogJyNmZmZmZmYnLFxuICAgICAgbWFpbjogJyNmYWZhZmEnLFxuICAgICAgZGFyazogJyNjN2M3YzcnLFxuICAgICAgY29udHJhc3RUZXh0OiAnIzAwMCcsXG4gICAgfSxcbiAgICBzZWNvbmRhcnk6IHtcbiAgICAgIGxpZ2h0OiAnIzQ4NDg0OCcsXG4gICAgICBtYWluOiAnIzIxMjEyMScsXG4gICAgICBkYXJrOiAnIzAwMCcsXG4gICAgICBjb250cmFzdFRleHQ6ICcjZmZmJyxcbiAgICB9LFxuICB9LFxuICB0eXBvZ3JhcGh5OiB7XG4gICAgLy8gVXNlIHRoZSBzeXN0ZW0gZm9udCBpbnN0ZWFkIG9mIHRoZSBkZWZhdWx0IFJvYm90byBmb250LlxuICAgIGZvbnRGYW1pbHk6IFtcbiAgICAgIFwiQXJpYWxcIixcbiAgICBdLmpvaW4oJywnKSxcbiAgICBmb250U2l6ZTogJzEwcHgnLFxuICB9LFxufSk7XG5cbmNvbnN0IHN0eWxlcyA9IHRoZW1lID0+ICh7XG5cdHJvb3Q6IHtcblx0fSxcblx0cm9vdEZpeGVkOiB7XG5cdFx0bWFyZ2luVG9wOiA2Nixcblx0fSxcblx0Ym9keToge1xuXHRcdGJveFNpemluZzogJ2JvcmRlci1ib3gnLFxuXHRcdG1hcmdpbjogMCxcblx0fSxcblx0bG9hZGluZyA6IHtcblx0XHRoZWlnaHQ6IDIsXG5cdH0sXG5cdG1lbnVCdXR0b246IHtcblx0XHRtYXJnaW5MZWZ0OiA4LFxuXHRcdG1hcmdpblJpZ2h0OiA4LFxuXHR9LFxuXHRkcmF3ZXJQYXBlcjoge1xuXHRcdHBvc2l0aW9uOiAncmVsYXRpdmUnLFxuXHRcdGhlaWdodDogJzEwMCUnLFxuXHRcdHdpZHRoOiBkcmF3ZXJXaWR0aCxcblx0fSxcblx0dGl0bGUgOiB7XG5cdFx0bWFyZ2luUmlnaHQ6IDEwLFxuXHRcdGZvbnRTaXplOiAxNCxcblx0fSxcbn0pO1xuXG5jbGFzcyBVSUFwcCBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIHN1cGVyKCk7XG4gICAgdGhpcy5zdGF0ZSA9IHtcbiAgICBcdGRyYXdlck9wZW46IGZhbHNlLFxuICAgIH1cbiAgICB0aGlzLnRvZ2dsZURyYXdlciA9IHRoaXMudG9nZ2xlRHJhd2VyLmJpbmQodGhpcyk7XG4gIH1cbiBcbiAgdG9nZ2xlRHJhd2VyKCl7XG4gICAgdGhpcy5zZXRTdGF0ZSh7IGRyYXdlck9wZW46ICF0aGlzLnN0YXRlLmRyYXdlck9wZW4gfSk7XG4gIH1cblxuICByZW5kZXIoKSB7XG4gIFx0dmFyIGtleSA9IDA7XG4gIFx0Y29uc3QgY2xhc3NlcyA9IHRoaXMucHJvcHMuY2xhc3NlcztcbiAgXHRjb25zdCB0aXRsZSA9ICh0aGlzLnByb3BzLnRpdGxlKSA/IHRoaXMucHJvcHMudGl0bGUgOiAnW1NldCB0aXRsZV0nO1xuICBcdGNvbnN0IHRoZW1lID0gKHRoaXMucHJvcHMudGhlbWUpID8gdGhpcy5wcm9wcy50aGVtZSA6IHRoZW1lQlc7XG4gIFx0Y29uc3QgcGFnZV90aXRsZSA9ICh0aGlzLnByb3BzLnBhZ2VfdGl0bGUpID8gdGhpcy5wcm9wcy5wYWdlX3RpdGxlIDogdGl0bGU7XG5cbiAgICByZXR1cm4gKFxuXHRcdDxNdWlUaGVtZVByb3ZpZGVyIHRoZW1lPXt0aGVtZX0+XG5cdFx0XHQ8Q3NzQmFzZWxpbmUgLz5cblx0ICAgIFx0PEVycm9yQm91bmRyeSBmcm9tPVwiL2NvcmUvYXBwL3Jvb3RcIj5cblx0XHRcdFx0PGRpdiBjbGFzc05hbWU9eyh0aGlzLnByb3BzLmJhclBvc2l0aW9uICYmIHRoaXMucHJvcHMuYmFyUG9zaXRpb24gPT09ICdmaXhlZCcpID8gY2xhc3Nlcy5yb290Rml4ZWQgOiBjbGFzc2VzLnJvb3R9PlxuXHRcdFx0XHRcdDxIZWxtZXQ+XG5cdFx0XHRcdFx0XHQ8dGl0bGU+e3BhZ2VfdGl0bGV9PC90aXRsZT5cblx0XHRcdFx0XHQ8L0hlbG1ldD5cdFx0XHRcdFx0XG5cdFx0XHRcdFx0PFVJQXBwQmFyIHBvc2l0aW9uPXt0aGlzLnByb3BzLmJhclBvc2l0aW9ufSBjbGFzc05hbWU9e2NsYXNzZXMuYXBwYmFyfT5cblx0XHRcdFx0XHRcdDxFcnJvckJvdW5kcnkgZnJvbT1cIi9jb3JlL2FwcC90b29sYmFyXCI+XHRcdFx0XHRcdFxuXHRcdFx0XHRcdFx0XHQ8VUlUb29sYmFyIHN0eWxlPXt0aGlzLnByb3BzLmJhclN0eWxlfT5cblx0XHRcdFx0XHRcdFx0XHR7dGhpcy5wcm9wcy5kcmF3ZXIgJiZcblx0XHRcdFx0XHRcdFx0XHQ8SWNvbkJ1dHRvbiBjb2xvcj1cInNlY29uZGFyeVwiIGFyaWEtbGFiZWw9XCJvcGVuIGRyYXdlclwiIG9uQ2xpY2s9e3RoaXMudG9nZ2xlRHJhd2VyfSBjbGFzc05hbWU9e2NsYXNzTmFtZXMoY2xhc3Nlcy5tZW51QnV0dG9uKX0+XG5cdFx0XHRcdFx0XHRcdFx0XHQ8VUlJY29uIGljb249eydkcmF3ZXInfS8+XG5cdFx0XHRcdFx0XHRcdFx0PC9JY29uQnV0dG9uPlx0XG5cdFx0XHRcdFx0XHRcdFx0fVx0ICAgICAgICAgIFxuXHRcdFx0XHRcdFx0XHRcdHt0aGlzLnByb3BzLnRpdGxlICYmIHRoaXMucHJvcHMubG9nbyA9PT0gbnVsbCAmJlxuXHRcdFx0XHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9e2NsYXNzZXMudGl0bGV9PlxuXHRcdFx0XHRcdFx0XHRcdFx0XHR7dGhpcy5wcm9wcy50aXRsZX1cblx0XHRcdFx0XHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdFx0XHR7dGhpcy5wcm9wcy5sb2dvICYmXG5cdFx0XHRcdFx0XHRcdFx0XHQ8TGluayB0bz17YC9gfT5cblx0XHRcdFx0XHRcdFx0XHRcdFx0PGltZyBhbHQ9J2xvZ28nIHNyYz17dGhpcy5wcm9wcy5sb2dvLnNyY30gY2xhc3NOYW1lPXt0aGlzLnByb3BzLmxvZ28uY2xhc3NOYW1lfS8+XG5cdFx0XHRcdFx0XHRcdFx0XHQ8L0xpbms+XG5cdFx0XHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0XHRcdHt0aGlzLnByb3BzLnRvb2xiYXIgJiYgdGhpcy5wcm9wcy50b29sYmFyLm1hcChpdGVtID0+XG5cdFx0XHRcdFx0XHRcdFx0XHRpdGVtXG5cdFx0XHRcdFx0XHRcdFx0KX1cblx0XHRcdFx0XHRcdFx0XHR7dGhpcy5wcm9wcy5tZW51ICYmIHRoaXMucHJvcHMubWVudS5tYXAoaXRlbSA9PiBcblx0XHRcdFx0XHRcdFx0XHRcdDxVSUJ1dHRvbiBrZXk9e2tleSsrfSBocmVmPXtpdGVtLmhyZWZ9IGNvbG9yPXsnc2Vjb25kYXJ5J30+e2l0ZW0ubmFtZX08L1VJQnV0dG9uPiAgICAgICAgICAgIFxuXHRcdFx0XHRcdFx0XHRcdCl9XG5cdFx0XHRcdFx0XHRcdDwvVUlUb29sYmFyPlxuXHRcdFx0XHRcdFx0PC9FcnJvckJvdW5kcnk+XHRcdFx0XHRcdFx0XHRcdFxuXHRcdFx0XHRcdFx0PFVJTG9hZGluZ0JhciBjbGFzc05hbWU9e2NsYXNzZXMubG9hZGluZ30gc2VydmVyPXt0aGlzLnByb3BzLnNlcnZlcn0vPlxuXHRcdFx0XHRcdDwvVUlBcHBCYXI+IFxuXHRcdFx0XHRcdDxVSVNuYWNrYmFyIHNlcnZlcj17dGhpcy5wcm9wcy5zZXJ2ZXJ9Lz5cblx0XHRcdFx0XHQ8RXJyb3JCb3VuZHJ5IGZyb209XCIvY29yZS9hcHAvZHJhd2VyXCI+XHRcdFx0XHRcdFxuXHRcdFx0XHRcdFx0PERyYXdlcj5cblx0XHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9e2NsYXNzZXMuZHJhd2VyUGFwZXJ9IHRhYkluZGV4PXswfSByb2xlPVwiYnV0dG9uXCI+XG5cdFx0XHRcdFx0XHRcdFx0e3RoaXMucHJvcHMuZHJhd2VyfVx0XG5cdFx0XHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHRcdFx0PC9EcmF3ZXI+XG5cdFx0XHRcdFx0PC9FcnJvckJvdW5kcnk+XG5cdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9e2NsYXNzZXMuYm9keX0+XG5cdFx0XHRcdFx0XHQ8RXJyb3JCb3VuZHJ5IGZyb209XCIvY29yZS9hcHAvY2hpbGRyZW5cIj5cblx0XHRcdFx0XHRcdFx0e3RoaXMucHJvcHMuY2hpbGRyZW59XG5cdFx0XHRcdFx0XHQ8L0Vycm9yQm91bmRyeT5cblx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0PC9kaXY+ICAgXHRcblx0XHRcdDwvRXJyb3JCb3VuZHJ5PlxuXHRcdDwvTXVpVGhlbWVQcm92aWRlcj5cbiAgICApO1xuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IHdpdGhTdHlsZXMoc3R5bGVzLCB7IHdpdGhUaGVtZTogdHJ1ZSB9KShVSUFwcCk7XG5cbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5cbmNsYXNzIEFwcExpc3QgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuXHRyZW5kZXIoKXtcblx0IFx0cmV0dXJuKFxuICBcdFx0dGhpcy5wcm9wcy5jaGlsZHJlblxuXHQgICAgKVxuICBcdH1cbn1cblxuQXBwTGlzdC5kZWZhdWx0UHJvcHMgPSB7XG4gIHR5cGU6ICdBcHBMaXN0Jyxcbn1cblxuZXhwb3J0IGRlZmF1bHQgQXBwTGlzdDtcbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgVUlDb21wb25lbnQgZnJvbSAnY29yZS9jb21wb25lbnRzL3VpX2NvbXBvbmVudCc7XG5pbXBvcnQgeyB3aXRoU3R5bGVzIH0gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvc3R5bGVzJztcbmltcG9ydCBBcHBCYXIgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvQXBwQmFyJztcblxuXG5jb25zdCBzdHlsZXMgPSB0aGVtZSA9PiAoe1xuICByb290OiB7XG4gIH0sXG59KVxuXG5jbGFzcyBVSUFwcEJhciBleHRlbmRzIFVJQ29tcG9uZW50IHtcbiAgY29uc3RydWN0b3IoKSB7XG4gICAgc3VwZXIoKTtcbiAgICB0aGlzLnN0YXRlID0ge1xuICAgIH1cbiAgfVxuXG4gIGdldERlZmF1bHRzKCl7XG4gICAgY29uc3QgZGVmYXVsdHMgPSB7XG4gICAgICBwb3NpdGlvbiAgOiAnc3RhdGljJyxcbiAgICAgIGNsYXNzTmFtZSA6ICcnLFxuICAgICAgY29sb3I6ICdwcmltYXJ5JywgICAgICBcbiAgICB9ICAgIFxuICAgIHJldHVybiBkZWZhdWx0cztcbiAgfVxuICBcbiAgY29tcG9uZW50RGlkTW91bnQoKSB7XG5cbiAgfVxuICBcbiAgcmVuZGVyKCkge1xuICAgIGNvbnN0IGNsYXNzZXMgPSB0aGlzLnByb3BzLmNsYXNzZXM7XG4gICAgcmV0dXJuIChcbiAgICAgIDxBcHBCYXIgY2xhc3NOYW1lPXtjbGFzc2VzLnJvb3R9IHBvc2l0aW9uPXt0aGlzLnN0YXRlLnBvc2l0aW9ufSBjbGFzc05hbWU9e3RoaXMuc3RhdGUuY2xhc3NOYW1lfSBjb2xvcj17dGhpcy5zdGF0ZS5jb2xvcn0+XG4gICAgICAgIHt0aGlzLnByb3BzLmNoaWxkcmVufVxuICAgICAgPC9BcHBCYXI+XG4gICAgKTtcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCB3aXRoU3R5bGVzKHN0eWxlcykoVUlBcHBCYXIpOyIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgVUlDb21wb25lbnQgZnJvbSAnY29yZS9jb21wb25lbnRzL3VpX2NvbXBvbmVudCc7XG5pbXBvcnQgeyB3aXRoU3R5bGVzIH0gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvc3R5bGVzJztcbmltcG9ydCBCdXR0b24gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvQnV0dG9uJztcbmltcG9ydCBJY29uQnV0dG9uIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL0ljb25CdXR0b24nO1xuaW1wb3J0IFVJSWNvbiBmcm9tICdjb3JlL2NvbXBvbmVudHMvaWNvbic7XG5cbmNvbnN0IHN0eWxlcyA9IFtdO1xuXG5jbGFzcyBVSUJ1dHRvbiBleHRlbmRzIFVJQ29tcG9uZW50IHtcbiAgY29uc3RydWN0b3IoKSB7XG4gICAgc3VwZXIoKTtcbiAgICB0aGlzLnN0YXRlID0ge1xuICAgIH1cbiAgfVxuXG4gIGdldERlZmF1bHRzKCl7XG4gICAgY29uc3QgZGVmYXVsdHMgPSB7XG4gICAgICBjbGFzc05hbWUgOiAnJywgICAgICBcbiAgICAgIGhyZWY6ICcnLFxuICAgICAgZGlzYWJsZWQ6IGZhbHNlLFxuICAgICAgb25DbGljazogbnVsbCxcbiAgICAgIGZhYjogZmFsc2UsXG4gICAgICBzdHlsZToge30sXG4gICAgfSAgICBcbiAgICByZXR1cm4gZGVmYXVsdHM7XG4gIH1cbiAgXG4gIGNvbXBvbmVudERpZE1vdW50KCkge1xuXG4gIH1cbiAgXG4gIHJlbmRlcigpIHtcbiAgICBjb25zdCBpY28gPSAoXCJpY29uXCIgaW4gdGhpcy5wcm9wcyAmJiB0aGlzLnByb3BzLmljb24gIT0gbnVsbCkgPyA8VUlJY29uIGljb249e3RoaXMucHJvcHMuaWNvbn0vPiA6IFwiXCI7XG4gICAgY29uc3QgY29sb3IgPSAodGhpcy5zdGF0ZS5jb2xvciA9PSBcImNvbnRyYXN0XCIpID8gXCJzZWNvbmRhcnlcIiA6IHRoaXMuc3RhdGUuY29sb3I7XG4gICAgcmV0dXJuIChcbiAgICAgICh0aGlzLnN0YXRlLmZhYiA/XG4gICAgICAgICAgPEJ1dHRvbiByYWlzZWQ9eyh0aGlzLnN0YXRlLmZhYikgPyBcInJhaXNlZFwiIDogXCJmbGF0XCJ9IGNvbG9yPXt0aGlzLnN0YXRlLmNvbG9yfSBocmVmPXt0aGlzLnN0YXRlLmhyZWZ9IGNsYXNzTmFtZT17dGhpcy5zdGF0ZS5jbGFzc05hbWV9IG9uQ2xpY2s9e3RoaXMuc3RhdGUub25DbGlja30gZGlzYWJsZWQ9eyh0aGlzLnByb3BzLmRpc2FibGVkKSA/IHRoaXMucHJvcHMuZGlzYWJsZWQgOiB0aGlzLnN0YXRlLmRpc2FibGVkfSBmYWIgc3R5bGU9e3RoaXMuc3RhdGUuc3R5bGV9PlxuICAgICAgICAgICAge2ljb31cbiAgICAgICAgICA8L0J1dHRvbj5cbiAgICAgIDpcbiAgICAgICAgKGljbyAmJiB0aGlzLnByb3BzLnJlbmRlciA9PT0gJ2ljb24nKSA/XG4gICAgICAgICAgPEljb25CdXR0b24gY2xhc3NOYW1lPXt0aGlzLnN0YXRlLmNsYXNzTmFtZX0gZGlzYWJsZWQ9e3RoaXMucHJvcHMuZGlzYWJsZWR9IGNvbG9yPXt0aGlzLnN0YXRlLmNvbG9yfSBvbkNsaWNrPXt0aGlzLnN0YXRlLm9uQ2xpY2t9IHN0eWxlPXt0aGlzLnN0YXRlLnN0eWxlfT5cbiAgICAgICAgICAgIHtpY299XG4gICAgICAgICAgPC9JY29uQnV0dG9uPiAgICAgICAgICAgICBcbiAgICAgICAgOiAgICAgIFxuICAgICAgICAgIDxCdXR0b24gcmFpc2VkPXsodGhpcy5zdGF0ZS5mYWIpID8gXCJyYWlzZWRcIiA6IFwiZmxhdFwifSBjb2xvcj17dGhpcy5zdGF0ZS5jb2xvcn0gaHJlZj17dGhpcy5zdGF0ZS5ocmVmfSBjbGFzc05hbWU9e3RoaXMuc3RhdGUuY2xhc3NOYW1lfSBvbkNsaWNrPXt0aGlzLnN0YXRlLm9uQ2xpY2t9IGRpc2FibGVkPXsodGhpcy5wcm9wcy5kaXNhYmxlZCkgPyB0aGlzLnByb3BzLmRpc2FibGVkIDogdGhpcy5zdGF0ZS5kaXNhYmxlZH0gc3R5bGU9e3RoaXMuc3RhdGUuc3R5bGV9PlxuICAgICAgICAgICAge2ljbyAmJlxuICAgICAgICAgICAgICBpY29cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHt0aGlzLnByb3BzLmNoaWxkcmVufVxuICAgICAgICAgIDwvQnV0dG9uPlxuICAgICAgKVxuICAgIClcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCB3aXRoU3R5bGVzKHN0eWxlcykoVUlCdXR0b24pOyIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgRXJyb3JCb3VuZHJ5IGZyb20gJ2NvcmUvY29tcG9uZW50cy9lcnJvcic7XG5pbXBvcnQgTG9hZGluZyBmcm9tICdjb3JlL2NvbXBvbmVudHMvbG9hZGluZy5qcyc7XG5cbmNvbnN0IGNvbXBvbmVudCA9IE1vZHVsZUNvbXBvbmVudCA9PlxuXHRjbGFzcyBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG5cdFx0cmVuZGVyKCl7XG5cdFx0XHRjb25zdCB0aXRsZSA9IChcInRpdGxlXCIgaW4gdGhpcy5wcm9wcykgPyB0aGlzLnByb3BzLnRpdGxlIDogbnVsbDtcblx0XHRcdGNvbnN0IHBoID0gKFwicGxhY2Vob2xkZXJcIiBpbiB0aGlzLnByb3BzKSA/IHRoaXMucHJvcHMucGxhY2Vob2xkZXIgOiB7fTtcblx0XHRcdGNvbnN0IHBoVyA9IChwaC53aWR0aCkgPyBwaC53aWR0aCA6ICcxMDAlJztcblx0XHRcdGNvbnN0IHBoSCA9IChwaC5oZWlnaHQpID8gcGguaGVpZ2h0IDogJzI1MCc7XG5cblx0XHRcdHZhciBsb2FkaW5nID0gZmFsc2U7XG5cdFx0XHRpZihcImRhdGFcIiBpbiB0aGlzLnByb3BzKXtcblx0XHRcdFx0aWYoIXRoaXMucHJvcHMuZGF0YSB8fCB0aGlzLnByb3BzLmRhdGEgPT0gbnVsbCl7XG5cdFx0XHRcdFx0bG9hZGluZyA9IHRydWU7XG5cdFx0XHRcdH1cblx0XHRcdH1cblxuXHRcdFx0cmV0dXJuIChcblx0XHRcdFx0PEVycm9yQm91bmRyeSBmcm9tPXt0aXRsZX0gc3R5bGU9e3t3aWR0aDonMTAwJSd9fT5cblx0XHRcdFx0XHR7bG9hZGluZyAmJiA8ZGl2PmxvYWRpbmc8L2Rpdj59XG5cdFx0XHRcdFx0eyFsb2FkaW5nICYmIDxNb2R1bGVDb21wb25lbnQgey4uLnRoaXMucHJvcHN9Lz59XG5cdFx0XHRcdDwvRXJyb3JCb3VuZHJ5PlxuXHRcdFx0KTtcblx0XHR9XG5cdH1cblxuZXhwb3J0IGRlZmF1bHQgY29tcG9uZW50OyIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5cbmNsYXNzIEVycm9yQm91bmRhcnkgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgIHN1cGVyKHByb3BzKTtcbiAgICB0aGlzLnN0YXRlID0geyBcbiAgICAgIGhhc0Vycm9yOiBmYWxzZSwgXG4gICAgICBlcnJvcnMgOiBbXSxcbiAgICB9O1xuICB9XG5cbiAgY29tcG9uZW50RGlkQ2F0Y2goZXJyb3IsIGluZm8pIHtcbiAgICB2YXIgZXJyb3JzID0gdGhpcy5zdGF0ZS5lcnJvcnM7XG4gICAgLy9jb25zb2xlLmRlYnVnKGVycm9yKTtcbiAgICBlcnJvcnMucHVzaChlcnJvcik7XG4gICAgdGhpcy5zZXRTdGF0ZSh7IGhhc0Vycm9yOiB0cnVlLCBlcnJvcnM6IGVycm9yc30pO1xuXG4gICAgaWYod2luZG93Ll9fYXBpKVxuICAgICAgd2luZG93Ll9fYXBpLnNldEVycm9yKGVycm9ycy50b1N0cmluZygpKTtcbiAgfVxuXG4gIHJlbmRlcigpIHtcbiAgICBjb25zdCByZWYgPSAodGhpcy5wcm9wcy5mcm9tKSA/IHRoaXMucHJvcHMuZnJvbSA6IFwiLVwiO1xuICAgIGNvbnN0IGVycm9ycyA9IHRoaXMuc3RhdGUuZXJyb3JzO1xuICAgIHZhciBrZXkgPSAwO1xuICAgIGlmICh0aGlzLnN0YXRlLmhhc0Vycm9yKSB7XG4gICAgICByZXR1cm4gIDxkaXYgc3R5bGU9e3tjb2xvcjoncmVkJywgbWFyZ2luOiAnMHB4JywgcGFkZGluZzonMHB4JywgYm9yZGVyOiAnMXB4IHNvbGlkIHJlZCd9fT5cbiAgICAgICAgICAgICAgICAgIDxkaXYgc3R5bGU9e3tmb250U2l6ZTonMS4yZW0nfX0+PGI+RXJyb3IgaW4gY29tcG9uZW50czwvYj48L2Rpdj5cbiAgICAgICAgICAgICAgICAgIDxkaXYgc3R5bGU9e3tmb250U2l6ZTonMC45ZW0nfX0+UmVmZXJlbmNlOiB7cmVmfTwvZGl2PlxuICAgICAgICAgICAgICAgICAgPGhyLz5cbiAgICAgICAgICAgICAgICAgIHtlcnJvcnMubWFwKChlKSA9PlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGtleT17a2V5Kyt9IHN0eWxlPXt7Zm9udFNpemU6JzAuOGVtJ319PntlLnRvU3RyaW5nKCl9PC9kaXY+XG4gICAgICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgIDwvZGl2PjtcbiAgICB9XG4gICAgcmV0dXJuIHRoaXMucHJvcHMuY2hpbGRyZW47XG4gIH1cbn1cblxuXG5leHBvcnQgZGVmYXVsdCBFcnJvckJvdW5kYXJ5OyIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgVUlDb21wb25lbnQgZnJvbSAnY29yZS9jb21wb25lbnRzL3VpX2NvbXBvbmVudC5qcyc7XG5pbXBvcnQgeyB3aXRoU3R5bGVzIH0gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvc3R5bGVzJztcbmltcG9ydCBTZW5kSWNvbiBmcm9tICdAbWF0ZXJpYWwtdWkvaWNvbnMvU2VuZCc7XG5pbXBvcnQgUmVwbHlJY29uIGZyb20gJ0BtYXRlcmlhbC11aS9pY29ucy9SZXBseSc7XG5pbXBvcnQgUmVwbHlBbGxJY29uIGZyb20gJ0BtYXRlcmlhbC11aS9pY29ucy9SZXBseUFsbCc7XG5pbXBvcnQgRm9yd2FyZEljb24gZnJvbSAnQG1hdGVyaWFsLXVpL2ljb25zL0ZvcndhcmQnO1xuaW1wb3J0IERyYWZ0c0ljb24gZnJvbSAnQG1hdGVyaWFsLXVpL2ljb25zL0RyYWZ0cyc7XG5pbXBvcnQgQ2FuY2VsSWNvbiBmcm9tICdAbWF0ZXJpYWwtdWkvaWNvbnMvQ2FuY2VsJztcbmltcG9ydCBBdHRhY2hGaWxlSWNvbiBmcm9tICdAbWF0ZXJpYWwtdWkvaWNvbnMvQXR0YWNoRmlsZSc7XG5pbXBvcnQgQXJjaGl2ZUljb24gZnJvbSAnQG1hdGVyaWFsLXVpL2ljb25zL0FyY2hpdmUnO1xuaW1wb3J0IERlbGV0ZUljb24gZnJvbSAnQG1hdGVyaWFsLXVpL2ljb25zL0RlbGV0ZSc7XG5pbXBvcnQgU3BhbUljb24gZnJvbSAnQG1hdGVyaWFsLXVpL2ljb25zL0J1Z1JlcG9ydCc7XG5pbXBvcnQgRGVidWdJY29uIGZyb20gJ0BtYXRlcmlhbC11aS9pY29ucy9CdWdSZXBvcnQnO1xuaW1wb3J0IENvbnRhY3RzSWNvbiBmcm9tICdAbWF0ZXJpYWwtdWkvaWNvbnMvQ29udGFjdHMnO1xuaW1wb3J0IERvbmVJY29uIGZyb20gJ0BtYXRlcmlhbC11aS9pY29ucy9Eb25lJztcbmltcG9ydCBIb21lSWNvbiBmcm9tICdAbWF0ZXJpYWwtdWkvaWNvbnMvSG9tZSc7XG5pbXBvcnQgU2VhcmNoSWNvbiBmcm9tICdAbWF0ZXJpYWwtdWkvaWNvbnMvU2VhcmNoJztcbmltcG9ydCBOb3RpZmljYXRpb25JY29uIGZyb20gJ0BtYXRlcmlhbC11aS9pY29ucy9Ob3RpZmljYXRpb25zJztcbmltcG9ydCBNZXNzYWdlSWNvbiBmcm9tICdAbWF0ZXJpYWwtdWkvaWNvbnMvRW1haWwnO1xuaW1wb3J0IEZhdm9yaXRlSWNvbiBmcm9tICdAbWF0ZXJpYWwtdWkvaWNvbnMvRmF2b3JpdGUnO1xuaW1wb3J0IENoYXRJY29uIGZyb20gJ0BtYXRlcmlhbC11aS9pY29ucy9DaGF0QnViYmxlJztcbmltcG9ydCBSZXR3ZWV0SWNvbiBmcm9tICdAbWF0ZXJpYWwtdWkvaWNvbnMvQ2FjaGVkJztcbmltcG9ydCBFZGl0SWNvbiBmcm9tICdAbWF0ZXJpYWwtdWkvaWNvbnMvRWRpdCc7XG5pbXBvcnQgQ2xvc2VJY29uIGZyb20gJ0BtYXRlcmlhbC11aS9pY29ucy9DbG9zZSc7XG5pbXBvcnQgTm90Rm91bmRJY29uIGZyb20gJ0BtYXRlcmlhbC11aS9pY29ucy9CbG9jayc7XG5pbXBvcnQgRHJhd2VySWNvbiBmcm9tICdAbWF0ZXJpYWwtdWkvaWNvbnMvTWVudSc7XG5pbXBvcnQgQmxvZ0ljb24gZnJvbSAnQG1hdGVyaWFsLXVpL2ljb25zL0luc2VydENvbW1lbnQnO1xuaW1wb3J0IEhpc3RvcnlJY29uIGZyb20gJ0BtYXRlcmlhbC11aS9pY29ucy9IaXN0b3J5JztcbmltcG9ydCBTZXR0aW5nc0ljb24gZnJvbSAnQG1hdGVyaWFsLXVpL2ljb25zL1NldHRpbmdzQXBwbGljYXRpb25zJztcbmltcG9ydCBTYXZlSWNvbiBmcm9tICdAbWF0ZXJpYWwtdWkvaWNvbnMvU2F2ZSc7XG5pbXBvcnQgTWVudUljb24gZnJvbSAnQG1hdGVyaWFsLXVpL2ljb25zL01vcmVWZXJ0JztcbmltcG9ydCBRdWVzdGlvbkljb24gZnJvbSAnQG1hdGVyaWFsLXVpL2ljb25zL0hlbHAnO1xuaW1wb3J0IE9LSWNvbiBmcm9tICdAbWF0ZXJpYWwtdWkvaWNvbnMvRG9uZSc7XG5cbmNvbnN0IHN0eWxlcyA9IFtdO1xuXG5jbGFzcyBVSUljb24gZXh0ZW5kcyBVSUNvbXBvbmVudCB7XG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIHN1cGVyKCk7XG4gICAgdGhpcy5zdGF0ZSA9IHtcbiAgICAgIGNsYXNzTmFtZTogJycsXG4gICAgfVxuICB9XG5cbiAgZ2V0RGVmYXVsdHMoKXtcbiAgICBjb25zdCBkZWZhdWx0cyA9IHtcbiAgICAgIGNsYXNzTmFtZTogJycsXG4gICAgfSAgICBcbiAgICByZXR1cm4gZGVmYXVsdHM7XG4gIH1cbiAgXG4gIGdldEljb24oaWNvbil7XG4gICAgaWYoIWljb24pIHJldHVybiA8Tm90Rm91bmRJY29uIGNsYXNzTmFtZT17dGhpcy5zdGF0ZS5jbGFzc05hbWV9Lz47XG5cbiAgICBzd2l0Y2goaWNvbil7XG4gICAgICBjYXNlIFwic2VuZFwiOlxuICAgICAgICByZXR1cm4gPFNlbmRJY29uIGNsYXNzTmFtZT17dGhpcy5zdGF0ZS5jbGFzc05hbWV9Lz47XG4gICAgICBjYXNlIFwicmVwbHlcIjpcbiAgICAgICAgcmV0dXJuIDxSZXBseUljb24gY2xhc3NOYW1lPXt0aGlzLnN0YXRlLmNsYXNzTmFtZX0vPjtcbiAgICAgIGNhc2UgXCJyZXBseV9hbGxcIjpcbiAgICAgICAgcmV0dXJuIDxSZXBseUFsbEljb24gY2xhc3NOYW1lPXt0aGlzLnN0YXRlLmNsYXNzTmFtZX0vPjtcbiAgICAgIGNhc2UgXCJmb3J3YXJkXCI6XG4gICAgICAgIHJldHVybiA8Rm9yd2FyZEljb24gY2xhc3NOYW1lPXt0aGlzLnN0YXRlLmNsYXNzTmFtZX0vPjtcbiAgICAgIGNhc2UgXCJkcmFmdFwiOlxuICAgICAgICByZXR1cm4gPERyYWZ0c0ljb24gY2xhc3NOYW1lPXt0aGlzLnN0YXRlLmNsYXNzTmFtZX0vPjtcbiAgICAgIGNhc2UgXCJjYW5jZWxcIjpcbiAgICAgICAgcmV0dXJuIDxDYW5jZWxJY29uIGNsYXNzTmFtZT17dGhpcy5zdGF0ZS5jbGFzc05hbWV9Lz47XG4gICAgICBjYXNlIFwiYXR0YWNoXCI6XG4gICAgICAgIHJldHVybiA8QXR0YWNoRmlsZUljb24gY2xhc3NOYW1lPXt0aGlzLnN0YXRlLmNsYXNzTmFtZX0vPjtcbiAgICAgIGNhc2UgXCJkZWxldGVcIjpcbiAgICAgICAgcmV0dXJuIDxEZWxldGVJY29uIGNsYXNzTmFtZT17dGhpcy5zdGF0ZS5jbGFzc05hbWV9Lz47XG4gICAgICBjYXNlIFwiYXJjaGl2ZVwiOlxuICAgICAgICByZXR1cm4gPEFyY2hpdmVJY29uIGNsYXNzTmFtZT17dGhpcy5zdGF0ZS5jbGFzc05hbWV9Lz47XG4gICAgICBjYXNlIFwic3BhbVwiOlxuICAgICAgICByZXR1cm4gPFNwYW1JY29uIGNsYXNzTmFtZT17dGhpcy5zdGF0ZS5jbGFzc05hbWV9Lz47ICAgICAgIFxuICAgICAgY2FzZSBcImNvbnRhY3RzXCI6XG4gICAgICAgIHJldHVybiA8Q29udGFjdHNJY29uIGNsYXNzTmFtZT17dGhpcy5zdGF0ZS5jbGFzc05hbWV9Lz47ICAgICAgIFxuICAgICAgY2FzZSBcImRvbmVcIjpcbiAgICAgICAgcmV0dXJuIDxEb25lSWNvbiBjbGFzc05hbWU9e3RoaXMuc3RhdGUuY2xhc3NOYW1lfS8+OyAgICAgICBcbiAgICAgIGNhc2UgXCJob21lXCI6XG4gICAgICAgIHJldHVybiA8SG9tZUljb24gY2xhc3NOYW1lPXt0aGlzLnN0YXRlLmNsYXNzTmFtZX0vPjsgICAgICAgXG4gICAgICBjYXNlIFwic2VhcmNoXCI6XG4gICAgICAgIHJldHVybiA8U2VhcmNoSWNvbiBjbGFzc05hbWU9e3RoaXMuc3RhdGUuY2xhc3NOYW1lfS8+OyAgICAgICBcbiAgICAgIGNhc2UgXCJub3RpZmljYXRpb25cIjpcbiAgICAgICAgcmV0dXJuIDxOb3RpZmljYXRpb25JY29uIGNsYXNzTmFtZT17dGhpcy5zdGF0ZS5jbGFzc05hbWV9Lz47ICAgICAgIFxuICAgICAgY2FzZSBcIm1lc3NhZ2VcIjpcbiAgICAgICAgcmV0dXJuIDxNZXNzYWdlSWNvbiBjbGFzc05hbWU9e3RoaXMuc3RhdGUuY2xhc3NOYW1lfS8+OyAgICAgICBcbiAgICAgIGNhc2UgXCJmYXZvcml0ZVwiOlxuICAgICAgICByZXR1cm4gPEZhdm9yaXRlSWNvbiBjbGFzc05hbWU9e3RoaXMuc3RhdGUuY2xhc3NOYW1lfS8+OyAgICAgICBcbiAgICAgIGNhc2UgXCJyZXBseS10d2VldFwiOlxuICAgICAgICByZXR1cm4gPENoYXRJY29uIGNsYXNzTmFtZT17dGhpcy5zdGF0ZS5jbGFzc05hbWV9Lz47ICAgICAgIFxuICAgICAgY2FzZSBcInJldHdlZXRcIjpcbiAgICAgICAgcmV0dXJuIDxSZXR3ZWV0SWNvbiBjbGFzc05hbWU9e3RoaXMuc3RhdGUuY2xhc3NOYW1lfS8+OyAgICAgICBcbiAgICAgIGNhc2UgXCJjb21wb3NlXCI6XG4gICAgICAgIHJldHVybiA8RWRpdEljb24gY2xhc3NOYW1lPXt0aGlzLnN0YXRlLmNsYXNzTmFtZX0vPjsgICAgICAgXG4gICAgICBjYXNlIFwiY2xvc2VcIjpcbiAgICAgICAgcmV0dXJuIDxDbG9zZUljb24gY2xhc3NOYW1lPXt0aGlzLnN0YXRlLmNsYXNzTmFtZX0vPjsgICAgICAgXG4gICAgICBjYXNlIFwiZHJhd2VyXCI6XG4gICAgICAgIHJldHVybiA8RHJhd2VySWNvbiBjbGFzc05hbWU9e3RoaXMuc3RhdGUuY2xhc3NOYW1lfS8+OyAgICAgICBcbiAgICAgIGNhc2UgXCJibG9nXCI6XG4gICAgICAgIHJldHVybiA8QmxvZ0ljb24gY2xhc3NOYW1lPXt0aGlzLnN0YXRlLmNsYXNzTmFtZX0vPjsgICAgICAgXG4gICAgICBjYXNlIFwiaGlzdG9yeVwiOlxuICAgICAgICByZXR1cm4gPEhpc3RvcnlJY29uIGNsYXNzTmFtZT17dGhpcy5zdGF0ZS5jbGFzc05hbWV9Lz47ICAgICAgIFxuICAgICAgY2FzZSBcInNldHRpbmdzXCI6XG4gICAgICAgIHJldHVybiA8U2V0dGluZ3NJY29uIGNsYXNzTmFtZT17dGhpcy5zdGF0ZS5jbGFzc05hbWV9Lz47ICAgICAgIFxuICAgICAgY2FzZSBcImRlYnVnXCI6XG4gICAgICAgIHJldHVybiA8RGVidWdJY29uIGNsYXNzTmFtZT17dGhpcy5zdGF0ZS5jbGFzc05hbWV9Lz47ICAgICAgIFxuICAgICAgY2FzZSBcInNhdmVcIjpcbiAgICAgICAgcmV0dXJuIDxTYXZlSWNvbiBjbGFzc05hbWU9e3RoaXMuc3RhdGUuY2xhc3NOYW1lfS8+OyAgICAgICBcbiAgICAgIGNhc2UgXCJtZW51XCI6XG4gICAgICAgIHJldHVybiA8TWVudUljb24gY2xhc3NOYW1lPXt0aGlzLnN0YXRlLmNsYXNzTmFtZX0vPjsgICAgICAgXG4gICAgICBjYXNlIFwicXVlc3Rpb25cIjpcbiAgICAgICAgcmV0dXJuIDxRdWVzdGlvbkljb24gY2xhc3NOYW1lPXt0aGlzLnN0YXRlLmNsYXNzTmFtZX0vPjsgICAgICAgXG4gICAgICBjYXNlIFwib2tcIjpcbiAgICAgICAgcmV0dXJuIDxPS0ljb24gY2xhc3NOYW1lPXt0aGlzLnN0YXRlLmNsYXNzTmFtZX0vPjsgICAgICAgXG4gICAgICBkZWZhdWx0OlxuICAgICAgICByZXR1cm4gPE5vdEZvdW5kSWNvbiBjbGFzc05hbWU9e3RoaXMuc3RhdGUuY2xhc3NOYW1lfS8+O1xuICAgIH1cbiAgfVxuXG4gIHJlbmRlcigpIHtcbiAgICBjb25zdCBpY28gPSB0aGlzLmdldEljb24odGhpcy5wcm9wcy5pY29uKTtcbiAgICByZXR1cm4gKFxuICAgICAgaWNvXG4gICAgKVxuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IHdpdGhTdHlsZXMoc3R5bGVzKShVSUljb24pO1xuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcblxuY2xhc3MgQ29tcG9uZW50IGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcblxuICByZW5kZXIoKSB7XG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXYgc3R5bGU9e3tcdHpJbmRleDogOTk5OSwgcG9zaXRpb246J2Fic29sdXRlJywgdG9wOicwcHgnLCBcbiAgICAgICAgICAgICAgcmlnaHQ6JzBweCcsIGxlZnQ6JzBweCcsIGJvdHRvbTonMHB4JywgIFxuICAgICAgXHRcdFx0XHRiYWNrZ3JvdW5kQ29sb3I6JyMwMDAwMDA2MCd9fT5cbiAgICAgIDwvZGl2PlxuICAgICAgKTtcbiAgfVxufVxuXG5cbmV4cG9ydCBkZWZhdWx0IENvbXBvbmVudDsiLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IFVJQ29tcG9uZW50IGZyb20gJ2NvcmUvY29tcG9uZW50cy91aV9jb21wb25lbnQuanMnO1xuaW1wb3J0IHsgd2l0aFN0eWxlcyB9IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL3N0eWxlcyc7XG5pbXBvcnQgeyBMaW5lYXJQcm9ncmVzcyB9IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL0xpbmVhclByb2dyZXNzJztcblxuY29uc3Qgc3R5bGVzID0gW3tcbn1dO1xuXG5jbGFzcyBVSUxvYWRpbmdCYXIgZXh0ZW5kcyBVSUNvbXBvbmVudCB7XG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIHN1cGVyKCk7XG4gICAgdGhpcy5zdGF0ZSA9IHtcbiAgICAgIGxvYWRpbmc6IGZhbHNlLFxuICAgIH1cbiAgfVxuXG4gIGdldERlZmF1bHRzKCl7XG4gICAgY29uc3QgZGVmYXVsdHMgPSB7XG4gICAgICBjbGFzc05hbWU6ICcnLFxuICAgIH0gICAgXG4gICAgcmV0dXJuIGRlZmF1bHRzO1xuICB9XG4gIFxuICBjb21wb25lbnREaWRNb3VudCgpe1xuICAgIGNvbnN0ICR0aGlzID0gdGhpcztcblxuICAgIGlmKHRoaXMucHJvcHMuc2VydmVyKXtcbiAgICAgIHRoaXMucHJvcHMuc2VydmVyLm9uU3RhcnRMb2FkaW5nID0gZnVuY3Rpb24oKXtcbiAgICAgICAgJHRoaXMuc2V0U3RhdGUoe2xvYWRpbmc6IHRydWV9KTtcbiAgICAgIH1cbiAgICAgIHRoaXMucHJvcHMuc2VydmVyLm9uU3RvcExvYWRpbmcgPSBmdW5jdGlvbigpe1xuICAgICAgICAkdGhpcy5zZXRTdGF0ZSh7bG9hZGluZzogZmFsc2V9KTtcbiAgICAgIH1cbiAgICAgIHRoaXMucHJvcHMuc2VydmVyLm9uRXJyb3IgPSBmdW5jdGlvbihlcnIpe1xuICAgICAgICAkdGhpcy5zZXRTdGF0ZSh7bG9hZGluZzogZmFsc2V9KTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICByZW5kZXIoKSB7XG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXYgY2xhc3NOYW1lPXt0aGlzLnByb3BzLmNsYXNzTmFtZX0+XG4gICAgICAgIHt0aGlzLnN0YXRlLmxvYWRpbmcgJiZcbiAgICAgICAgICA8TGluZWFyUHJvZ3Jlc3MgY2xhc3NOYW1lPXt0aGlzLnByb3BzLmNsYXNzTmFtZX0gY29sb3I9J2FjY2VudCcvPlxuICAgICAgICB9XG4gICAgICA8L2Rpdj5cbiAgICApO1xuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IHdpdGhTdHlsZXMoc3R5bGVzKShVSUxvYWRpbmdCYXIpOyIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyB3aXRoU3R5bGVzIH0gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvc3R5bGVzJztcblxuY29uc3Qgc3R5bGVzID0gdGhlbWUgPT4gKHtcblx0cm9vdCA6IHtcblx0XHR3aWR0aDogJzEwMCUnLFxuXHRcdGJvcmRlcjogJzFweCBkYXNoZWQgZ3JheScsXG5cdFx0YmFja2dyb3VuZENvbG9yOiAnI2UwZTBlMDY2Jyxcblx0XHR0ZXh0QWxpZ246ICdjZW50ZXInLFxuXHRcdGNvbG9yOiAnYmxhY2snLFxuXHRcdGZvbnRTaXplOiAnMS4xcmVtJyxcblx0XHRmb250V2VpZ2h0OiAnYm9sZCcsXG5cdFx0cGFkZGluZ1RvcDogJzEwcHgnLFxuXHRcdGJveFNpemluZzogJ2JvcmRlci1ib3gnLFxuXHR9LFxufSk7XG5jbGFzcyBNb2NrdXBCbG9jayBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7IFxuICByZW5kZXIoKSB7XG4gIFx0Y29uc3QgdGl0bGUgPSAodGhpcy5wcm9wcy50aXRsZSkgPyB0aGlzLnByb3BzLnRpdGxlIDogJ01PQ0sgQkxPQ0snO1xuICBcdGNvbnN0IGNsYXNzZXMgPSB0aGlzLnByb3BzLmNsYXNzZXM7XG4gIFx0Y29uc3QgaGVpZ2h0ID0gKHRoaXMucHJvcHMuaGVpZ2h0KSA/IHRoaXMucHJvcHMuaGVpZ2h0IDogJzMwcHgnO1xuICAgIHJldHVybiAoXG4gICAgICA8ZGl2IGNsYXNzTmFtZT17Y2xhc3Nlcy5yb290fSBzdHlsZT17e2hlaWdodDogaGVpZ2h0LCB3aWR0aDonMTAwJSd9fT57dGl0bGV9PC9kaXY+XG4gICAgKTtcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCB3aXRoU3R5bGVzKHN0eWxlcykoTW9ja3VwQmxvY2spOyIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgVUlDb21wb25lbnQgZnJvbSAnY29yZS9jb21wb25lbnRzL3VpX2NvbXBvbmVudC5qcyc7XG5pbXBvcnQgU25hY2tiYXIgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvU25hY2tiYXInO1xuXG5jbGFzcyBVSVNuYWNrYmFyIGV4dGVuZHMgVUlDb21wb25lbnQge1xuICBjb25zdHJ1Y3RvcigpIHtcbiAgICBzdXBlcigpO1xuICAgIHRoaXMuc3RhdGUgPSB7XG4gICAgICBvcGVuOiBmYWxzZSxcbiAgICAgIG1lc3NhZ2U6ICcnLFxuICAgIH1cblxuICAgIHRoaXMuaGFuZGxlUmVxdWVzdENsb3NlID0gdGhpcy5oYW5kbGVSZXF1ZXN0Q2xvc2UuYmluZCh0aGlzKTtcbiAgfVxuXG4gIGdldERlZmF1bHRzKCl7XG4gICAgY29uc3QgZGVmYXVsdHMgPSB7XG4gICAgfSAgICBcbiAgICByZXR1cm4gZGVmYXVsdHM7XG4gIH1cblxuICBoYW5kbGVSZXF1ZXN0Q2xvc2UoZXZlbnQsIHJlYXNvbil7XG4gICAgdGhpcy5zZXRTdGF0ZSh7IG9wZW46IGZhbHNlLCBtZXNzYWdlIDogJycgfSk7XG4gIH07XG4gIFxuICBjb21wb25lbnREaWRNb3VudCgpe1xuICAgIGNvbnN0ICR0aGlzID0gdGhpcztcblxuICAgIGlmKHRoaXMucHJvcHMuc2VydmVyKXtcbiAgICAgIHRoaXMucHJvcHMuc2VydmVyLm9uRXJyb3IgPSBmdW5jdGlvbihlcnIpe1xuICAgICAgICAkdGhpcy5zZXRTdGF0ZSh7b3BlbjogdHJ1ZSwgbWVzc2FnZTogZXJyLnRvU3RyaW5nKCl9KTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICByZW5kZXIoKSB7XG4gICAgcmV0dXJuIChcbiAgICAgIDxTbmFja2JhclxuICAgICAgICBhbmNob3JPcmlnaW49e3tcbiAgICAgICAgICB2ZXJ0aWNhbDogJ2JvdHRvbScsXG4gICAgICAgICAgaG9yaXpvbnRhbDogJ2xlZnQnLFxuICAgICAgICB9fVxuICAgICAgICBvcGVuPXt0aGlzLnN0YXRlLm9wZW59XG4gICAgICAgIGF1dG9IaWRlRHVyYXRpb249ezYwMDB9XG4gICAgICAgIG9uUmVxdWVzdENsb3NlPXt0aGlzLmhhbmRsZVJlcXVlc3RDbG9zZX1cbiAgICAgICAgU25hY2tiYXJDb250ZW50UHJvcHM9e3tcbiAgICAgICAgICAnYXJpYS1kZXNjcmliZWRieSc6ICdtZXNzYWdlLWlkJyxcbiAgICAgICAgfX1cbiAgICAgICAgbWVzc2FnZT17U3RyaW5nKHRoaXMuc3RhdGUubWVzc2FnZSl9XG4gICAgICAvPlxuICAgICk7XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgVUlTbmFja2JhcjsiLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IFVJQ29tcG9uZW50IGZyb20gJ2NvcmUvY29tcG9uZW50cy91aV9jb21wb25lbnQnO1xuaW1wb3J0IHsgd2l0aFN0eWxlcyB9IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL3N0eWxlcyc7XG5pbXBvcnQgVG9vbGJhciBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9Ub29sYmFyJztcblxuY29uc3Qgc3R5bGVzID0gdGhlbWUgPT4gKHtcbiAgcm9vdDoge1xuICB9LFxufSlcblxuY2xhc3MgVUlUb29sYmFyIGV4dGVuZHMgVUlDb21wb25lbnQge1xuICBjb25zdHJ1Y3RvcigpIHtcbiAgICBzdXBlcigpO1xuICAgIHRoaXMuc3RhdGUgPSB7XG4gICAgfVxuICB9XG5cbiAgZ2V0RGVmYXVsdHMoKXtcbiAgICBjb25zdCBkZWZhdWx0cyA9IHtcbiAgICAgIGNsYXNzTmFtZSA6ICcnLCAgICAgIFxuICAgIH0gICAgXG4gICAgcmV0dXJuIGRlZmF1bHRzO1xuICB9XG4gIFxuICBjb21wb25lbnREaWRNb3VudCgpIHtcblxuICB9XG4gIFxuICByZW5kZXIoKSB7XG4gICAgY29uc3QgY2xhc3NlcyA9IHRoaXMucHJvcHMuY2xhc3NlcztcbiAgICByZXR1cm4gKFxuICAgICAgPFRvb2xiYXIgY2xhc3NOYW1lPXtjbGFzc2VzLnJvb3R9IHN0eWxlPXt0aGlzLnByb3BzLnN0eWxlfT5cbiAgICAgICAge3RoaXMucHJvcHMuY2hpbGRyZW59XG4gICAgICA8L1Rvb2xiYXI+XG4gICAgKTtcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCB3aXRoU3R5bGVzKHN0eWxlcykoVUlUb29sYmFyKTsiLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuXG5jbGFzcyBVSUNvbXBvbmVudCBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gIGdldERlZmF1bHRzKCl7fVxuXG4gIGluaXRVSSgpIHtcbiAgICBjb25zdCBkZWZhdWx0cyA9IHRoaXMuZ2V0RGVmYXVsdHMoKTsgICAgXG4gICAgZm9yKHZhciBkZWYgaW4gZGVmYXVsdHMpe1xuICAgICAgdGhpcy5zdGF0ZVtkZWZdID0gKHRoaXMucHJvcHNbZGVmXSkgPyB0aGlzLnByb3BzW2RlZl0gOiBkZWZhdWx0c1tkZWZdO1xuICAgIH1cbiAgfVxuXG4gIGNvbXBvbmVudFdpbGxNb3VudCgpe1xuICAgIHRoaXMuaW5pdFVJKCk7XG4gIH1cbiAgXG4gIHJlbmRlcigpIHtcbiAgICByZXR1cm4gXCJcIjtcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCAoVUlDb21wb25lbnQpOyIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcbmltcG9ydCBSZWFjdERPTSBmcm9tICdyZWFjdC1kb20nXG5pbXBvcnQgeyBBcHBDb250YWluZXIgfSBmcm9tICdyZWFjdC1ob3QtbG9hZGVyJ1xuaW1wb3J0IFJvb3QgZnJvbSAnam1hcnJveWF2ZS9pbmRleCdcblxuY29uc3QgcmVuZGVyID0gQ29tcG9uZW50ID0+IHtcbiAgUmVhY3RET00ucmVuZGVyKFxuICAgIDxBcHBDb250YWluZXI+XG4gICAgICA8Q29tcG9uZW50IC8+XG4gICAgPC9BcHBDb250YWluZXI+LFxuICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdyb290JylcbiAgKVxufVxuXG5yZW5kZXIoUm9vdClcblxuaWYgKG1vZHVsZS5ob3QpIHtcbiAgbW9kdWxlLmhvdC5hY2NlcHQoJy4vam1hcnJveWF2ZS9pbmRleCcsICgpID0+IHsgcmVuZGVyKFJvb3QpIH0pXG59IiwiaW1wb3J0IEJhc2VBUEkgZnJvbSAnY29yZS9hcHAvYXBpJztcbmltcG9ydCBTdGF0ZSBmcm9tICdqbWFycm95YXZlL2FwcC9zdGF0ZSc7XG5pbXBvcnQgQ29uc3RhbnRzIGZyb20gJ2ptYXJyb3lhdmUvY29uZi9jb25zdGFudHMnXG5cbmNsYXNzIEFQSSBleHRlbmRzIEJhc2VBUEl7XG5cdGNvbnN0cnVjdG9yKHBhcmVudCl7XG5cdFx0c3VwZXIoe1xuXHRcdFx0ZGVidWcgOiBmYWxzZSxcblx0ICAgIFx0bG9jYWw6IENvbnN0YW50cy5MT0NBTCxcbiAgICBcdFx0dGl0bGUgOiBDb25zdGFudHMuVkVSU0lPTixcbiAgICBcdFx0Y3VycmVudF9jb21wb25lbnQgOiB7aWQgOiBDb25zdGFudHMuQ09NSUQsIGZhbWlseSA6IENvbnN0YW50cy5DT01GLCB2ZXJzaW9uIDogQ29uc3RhbnRzLkNPTVZ9LFxuICAgIFx0XHRjb21wb25lbnRzOiBDb25zdGFudHMuVVhJX1ZFUlNJT05TLFxuXHRcdH0pO1xuXHRcdHRoaXMuc3RhdGUgPSBTdGF0ZTtcdFxuXHRcdHRoaXMuZGF0YV9rYl9hbmRyb2lkID0gdGhpcy5zZXJ2ZXIuc2VydmVyVVJJICsgJy9hcHBzL2ptYXJyb3lhdmUtY3MvZGF0YS9hbmRyb2lkX2luZGV4Jztcblx0fVxuXG5cdGdldEFQSShhcGlVUkksIGRhdGFQYXRoLCBwYXJhbXMpe1xuXHRcdGNvbnN0ICR0aGlzID0gdGhpcztcblx0XHQkdGhpcy5zdGF0ZS5zZXQoZGF0YVBhdGgsIG51bGwpO1xuXHRcdHRoaXMuc2VydmVyLmdldChhcGlVUkksIHBhcmFtcywgZnVuY3Rpb24oZGF0YSl7XG5cdFx0XHQkdGhpcy5zdGF0ZS5zZXQoZGF0YVBhdGgsIGRhdGEpO1xuXHRcdH0pO1x0XHRcdFx0XHRcdFxuXHR9XG5cblx0Z2V0QXBwKCl7XG5cdFx0Y29uc3QgYXBwID0gdGhpcy5zdGF0ZS5nZXQoWydhcHAnXSk7XG5cdFx0aWYoYXBwICE9IG51bGwpIHJldHVybjtcblxuXHRcdGNvbnN0IHVyaSA9ICcvYXBwcy9qbWFycm95YXZlLWNzL2FwcCc7XG5cdFx0Y29uc3QgcGFyYW1zID0ge307XG5cdFx0dGhpcy5nZXRBUEkodXJpLCBbJ2FwcCddLCBwYXJhbXMpO1xuXHR9XG5cblx0Z2V0SG9tZSgpe1xuXHRcdHRoaXMuZ2V0QXBwKCk7XG5cblx0XHRjb25zdCB1cmkgPSAnL2FwcHMvam1hcnJveWF2ZS1jcy9wYWdlcy9ob21lJztcblx0XHRjb25zdCBwYXJhbXMgPSB7fTtcblx0XHR0aGlzLmdldEFQSSh1cmksIFsncGFnZXMnLCdob21lJywnZGF0YSddLCBwYXJhbXMpO1xuXHR9XG5cblx0Z2V0VHJlbmRzKCl7XG5cdFx0dGhpcy5nZXRBcHAoKTtcblx0XHRcblx0XHRjb25zdCB1cmkgPSAnL2FwcHMvdHJlbmRzL3N0YWNrb3ZlcmZsb3cvaGlzdG9yeSc7XG5cdFx0Y29uc3QgcGFyYW1zID0ge307XG5cdFx0dGhpcy5nZXRBUEkodXJpLCBbJ3BhZ2VzJywnaG9tZScsJ3RyZW5kcyddLCBwYXJhbXMpO1xuXHR9XG5cblx0Z2V0QmxvZyhibG9nKXtcblx0XHR0aGlzLmdldEFwcCgpO1xuXHRcdFxuXHRcdHRoaXMuc3RhdGUuc2V0KFsncGFnZXMnLCdibG9nJywgJ2FyZWEnXSwgYmxvZyk7XG5cdFx0Y29uc3QgdXJpID0gJy9hcHBzL2ptYXJyb3lhdmUtY3MvcGFnZXMvYmxvZyc7XG5cdFx0Y29uc3QgcGFyYW1zID0ge2FyZWE6IGJsb2d9O1xuXHRcdHRoaXMuZ2V0QVBJKHVyaSwgWydwYWdlcycsJ2Jsb2cnLCdkYXRhJ10sIHBhcmFtcyk7XG5cdH1cblxuXHRnZXRQb3N0KGJsb2csIHBvc3Qpe1xuXHRcdHRoaXMuZ2V0QXBwKCk7XG5cdFx0XG5cdFx0dGhpcy5zdGF0ZS5zZXQoWydwYWdlcycsJ3Bvc3QnLCAnYXJlYSddLCBibG9nKTtcblx0XHRjb25zdCB1cmkgPSAnL2FwcHMvam1hcnJveWF2ZS1jcy9wYWdlcy9wb3N0Jztcblx0XHRjb25zdCBwYXJhbXMgPSB7aWQ6IHBvc3R9O1xuXHRcdHRoaXMuZ2V0QVBJKHVyaSwgWydwYWdlcycsJ3Bvc3QnLCdkYXRhJ10sIHBhcmFtcyk7XG5cdH1cblxuXHRnZXRDVigpe1xuXHRcdHRoaXMuZ2V0QXBwKCk7XG5cdFx0XG5cdFx0Y29uc3QgdXJpID0gJy9hcHBzL2ptYXJyb3lhdmUtY3MvcGFnZXMvY3YnO1xuXHRcdGNvbnN0IHBhcmFtcyA9IHt9O1xuXHRcdHRoaXMuZ2V0QVBJKHVyaSwgWydwYWdlcycsJ2N2JywnZGF0YSddLCBwYXJhbXMpO1xuXHR9XG5cblx0Z2V0S0JBbmRyb2lkKGNhdGVnb3J5KXtcblx0XHR0aGlzLmdldEFwcCgpO1xuXHRcdFxuXHRcdGNvbnN0IHVyaSA9ICcvYXBwcy9qbWFycm95YXZlLWNzL2RhdGEvYW5kcm9pZF9pbmRleCc7XG5cdFx0Y29uc3QgcGFyYW1zID0ge2YxOiAnY2F0JywgdjE6IGNhdGVnb3J5fTtcblx0XHR0aGlzLmdldEFQSSh1cmksIFsncGFnZXMnLCAna2JfYW5kcm9pZCcsICdkYXRhJywgJ3JlY29yZHMnXSwgcGFyYW1zKTtcblx0fVxuXG5cdGdldEtCQW5kcm9pZENhdGVnb3JpZXMoKXtcblx0XHR0aGlzLmdldEFwcCgpO1xuXHRcdFxuXHRcdGNvbnN0IHVyaSA9ICcvYXBwcy9qbWFycm95YXZlLWNzL2RhdGEvYW5kcm9pZF9jYXRlZ29yaWVzJztcblx0XHRjb25zdCBwYXJhbXMgPSB7fTtcblx0XHR0aGlzLmdldEFQSSh1cmksIFsncGFnZXMnLCAna2JfYW5kcm9pZCcsICdkYXRhJywgJ2NhdGVnb3JpZXMnXSwgcGFyYW1zKTtcblx0fVxufVxuXG53aW5kb3cuX19hcGkgPSBuZXcgQVBJKCk7XG5leHBvcnQgZGVmYXVsdCBBUEk7IiwiZXhwb3J0IGNvbnN0IE1FU1NBR0VTX0xPQURJTkcgPSAnTUVTU0FHRVNfTE9BRElORyc7XG5leHBvcnQgY29uc3QgTUVTU0FHRVNfRkFJTEVEID0gJ01FU1NBR0VTX0ZBSUxFRCc7XG5leHBvcnQgY29uc3QgTUVTU0FHRVNfRkVUQ0hFRCA9ICdNRVNTQUdFU19GRVRDSEVEJztcblxuZXhwb3J0IGNvbnN0IE1FU1NBR0VfTE9BRElORyA9ICdNRVNTQUdFX0xPQURJTkcnO1xuZXhwb3J0IGNvbnN0IE1FU1NBR0VfRkFJTEVEID0gJ01FU1NBR0VfRkFJTEVEJztcbmV4cG9ydCBjb25zdCBNRVNTQUdFX0ZFVENIRUQgPSAnTUVTU0FHRV9GRVRDSEVEJztcblxuZXhwb3J0IGNvbnN0IExBQkVMU19MT0FESU5HID0gJ0xBQkVMU19MT0FESU5HJztcbmV4cG9ydCBjb25zdCBMQUJFTFNfRkFJTEVEID0gJ0xBQkVMU19GQUlMRUQnO1xuZXhwb3J0IGNvbnN0IExBQkVMU19GRVRDSEVEID0gJ0xBQkVMU19GRVRDSEVEJztcbiIsImltcG9ydCB7IGNyZWF0ZVN0b3JlLCBjb21iaW5lUmVkdWNlcnMsIGFwcGx5TWlkZGxld2FyZSB9IGZyb20gJ3JlZHV4JztcblxuaW1wb3J0IHsgTWVzc2FnZXMgfSBmcm9tICdqbWFycm95YXZlL2FwcC9yZWR1eC9yZWR1Y2Vycy9tZXNzYWdlcyc7XG5pbXBvcnQgeyBMYWJlbHMgfSBmcm9tICdqbWFycm95YXZlL2FwcC9yZWR1eC9yZWR1Y2Vycy9sYWJlbHMnO1xuXG5pbXBvcnQgdGh1bmsgZnJvbSAncmVkdXgtdGh1bmsnO1xuaW1wb3J0IGxvZ2dlciBmcm9tICdyZWR1eC1sb2dnZXInO1xuXG5leHBvcnQgY29uc3QgQ29uZmlndXJlU3RvcmUgPSAoKSA9PiB7XG4gICAgY29uc3Qgc3RvcmUgPSBjcmVhdGVTdG9yZShcbiAgICAgICAgY29tYmluZVJlZHVjZXJzKHtcbiAgICAgICAgICAgIG1lc3NhZ2VzIDogTWVzc2FnZXMsXG4gICAgICAgICAgICBsYWJlbHMgOiBMYWJlbHMsXG4gICAgICAgIH0pLFxuXHRcdGFwcGx5TWlkZGxld2FyZSh0aHVuaywgbG9nZ2VyKSAmJiBhcHBseU1pZGRsZXdhcmUodGh1bmspXG4gICAgKTtcblxuICAgIHJldHVybiBzdG9yZTtcbn0iLCJpbXBvcnQgKiBhcyBBY3Rpb25UeXBlcyBmcm9tICdqbWFycm95YXZlL2FwcC9yZWR1eC9hY3Rpb25zL3R5cGVzJztcblxuZXhwb3J0IGNvbnN0IExhYmVscyA9IChzdGF0ZSA9IHsgbG9hZGluZzogdHJ1ZSwgZXJyOiBudWxsLCBkYXRhOltdfSwgYWN0aW9uKSA9PiB7XG4gICAgc3dpdGNoIChhY3Rpb24udHlwZSkge1xuICAgICAgICBjYXNlIEFjdGlvblR5cGVzLkxBQkVMU19GRVRDSEVEOlxuICAgICAgICAgICAgcmV0dXJuIHsuLi5zdGF0ZSwgbG9hZGluZzogZmFsc2UsIGVycjogbnVsbCwgZGF0YTogYWN0aW9uLnBheWxvYWR9O1xuXG4gICAgICAgIGNhc2UgQWN0aW9uVHlwZXMuTEFCRUxTX0xPQURJTkc6XG4gICAgICAgICAgICByZXR1cm4gey4uLnN0YXRlLCBsb2FkaW5nOiB0cnVlLCBlcnI6IG51bGwsIGRhdGE6IFtdfVxuXG4gICAgICAgIGNhc2UgQWN0aW9uVHlwZXMuTEFCRUxTX0ZBSUxFRDpcbiAgICAgICAgICAgIHJldHVybiB7Li4uc3RhdGUsIGxvYWRpbmc6IGZhbHNlLCBlcnI6IGFjdGlvbi5wYXlsb2FkfTtcblxuICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgcmV0dXJuIHN0YXRlO1xuICAgIH1cbn0iLCJpbXBvcnQgKiBhcyBBY3Rpb25UeXBlcyBmcm9tICdqbWFycm95YXZlL2FwcC9yZWR1eC9hY3Rpb25zL3R5cGVzJztcblxuZXhwb3J0IGNvbnN0IE1lc3NhZ2VzID0gKHN0YXRlID0geyBsb2FkaW5nOiB0cnVlLCBlcnI6IG51bGwsIGRhdGE6W119LCBhY3Rpb24pID0+IHtcbiAgICBzd2l0Y2ggKGFjdGlvbi50eXBlKSB7XG4gICAgICAgIGNhc2UgQWN0aW9uVHlwZXMuTUVTU0FHRVNfRkVUQ0hFRDpcbiAgICAgICAgICAgIHJldHVybiB7Li4uc3RhdGUsIGxvYWRpbmc6IGZhbHNlLCBlcnI6IG51bGwsIGRhdGE6IGFjdGlvbi5wYXlsb2FkLmRhdGF9O1xuXG4gICAgICAgIGNhc2UgQWN0aW9uVHlwZXMuTUVTU0FHRVNfTE9BRElORzpcbiAgICAgICAgICAgIHJldHVybiB7Li4uc3RhdGUsIGxvYWRpbmc6IHRydWUsIGVycjogbnVsbCwgZGF0YTogW119XG5cbiAgICAgICAgY2FzZSBBY3Rpb25UeXBlcy5NRVNTQUdFU19GQUlMRUQ6XG4gICAgICAgICAgICByZXR1cm4gey4uLnN0YXRlLCBsb2FkaW5nOiBmYWxzZSwgZXJyOiBhY3Rpb24ucGF5bG9hZH07XG5cbiAgICAgICAgY2FzZSBBY3Rpb25UeXBlcy5NRVNTQUdFX0ZFVENIRUQ6XG4gICAgICAgICAgICBhY3Rpb24ucGF5bG9hZC5tZXNzYWdlLm1lc3NhZ2VzW2FjdGlvbi5wYXlsb2FkLmlkeF0udGV4dCA9IGFjdGlvbi5wYXlsb2FkLnRleHQ7ICAgICAgIFxuICAgICAgICAgICAgcmV0dXJuIHsuLi5zdGF0ZSwgbG9hZGluZzogZmFsc2UsIGVycjogbnVsbH07XG5cbiAgICAgICAgY2FzZSBBY3Rpb25UeXBlcy5NRVNTQUdFX0xPQURJTkc6XG4gICAgICAgICAgICByZXR1cm4gey4uLnN0YXRlLCBsb2FkaW5nOiB0cnVlLCBlcnI6IG51bGx9XG5cbiAgICAgICAgY2FzZSBBY3Rpb25UeXBlcy5NRVNTQUdFX0ZBSUxFRDpcbiAgICAgICAgICAgIHJldHVybiB7Li4uc3RhdGUsIGxvYWRpbmc6IGZhbHNlLCBlcnI6IGFjdGlvbi5wYXlsb2FkfTtcblxuICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgcmV0dXJuIHN0YXRlO1xuICAgIH1cbn0iLCJpbXBvcnQgQmFvYmFiIGZyb20gJ2Jhb2JhYic7XG5pbXBvcnQgQ29uc3RhbnRzIGZyb20gJ2ptYXJyb3lhdmUvY29uZi9jb25zdGFudHMnXG5cbnZhciB0cmVlID0gbmV3IEJhb2JhYih7XG4gIGFwcCA6IG51bGwsXG4gIHBhZ2VzIDoge1xuICAgIGdsb2JhbCA6IHt9LFxuICAgIGhvbWUgOiB7XG4gICAgICBkYXRhOiB7fSxcbiAgICAgIHRyZW5kczogbnVsbCxcbiAgICB9LFxuICAgIGJsb2cgOiB7XG4gICAgICBkYXRhOiB7fSxcbiAgICAgIGFyZWE6IFwiXCIsXG4gICAgfSxcbiAgICBwb3N0IDoge1xuICAgICAgZGF0YToge30sXG4gICAgICBhcmVhOiBcIlwiLFxuICAgIH0sXG4gICAgY291cnNlcyA6IHtcbiAgICAgIGRhdGE6IHt9LFxuICAgIH0sXG4gICAgY3YgOiB7XG4gICAgICBkYXRhOiB7fSxcbiAgICB9LFxuICAgIGtiX2FuZHJvaWQgOiB7XG4gICAgICBkYXRhOiB7XG4gICAgICAgIHJlY29yZHMgOiBudWxsLFxuICAgICAgICBjYXRlZ29yaWVzIDogbnVsbCxcbiAgICAgIH0sXG4gICAgfSxcbiAgfSxcbn0sXG57XG4gIGF1dG9Db21taXQ6IHRydWUsXG4gIGFzeW5jaHJvbm91cyA6IGZhbHNlLFxuICBpbW11dGFibGU6IGZhbHNlLFxuICBwZXJzaXN0ZW50OiBmYWxzZSwgXG59KTtcblxud2luZG93Ll9fc3RhdGUgPSB0cmVlO1xuXG5leHBvcnQgZGVmYXVsdCB0cmVlO1xuXG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgTGluayB9IGZyb20gJ3JlYWN0LXJvdXRlcic7XG5pbXBvcnQgd2l0aE1vZHVsZSBmcm9tICdqbWFycm95YXZlL2NvbXBvbmVudHMvdXhpL2NvcmUvd2l0aC1tb2R1bGUnO1xuXG5jbGFzcyBQb3N0TGlua0NvbXBvbmVudCBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG5cdHJlbmRlcigpe1xuXHRcdGNvbnN0IHNsdWcgPSAoXCJzbHVnXCIgaW4gdGhpcy5wcm9wcykgPyB0aGlzLnByb3BzLnNsdWcgOiBudWxsO1xuXHRcdGNvbnN0IGNhdGVnb3J5ID0gdGhpcy5wcm9wcy5jYXRlZ29yeTtcblxuXHRcdGlmKCFzbHVnKSByZXR1cm4gdGhpcy5wcm9wcy5jaGlsZHJlbjtcblxuXHRcdHJldHVybiAoXG5cdFx0XHQ8TGluayB0bz17YCR7c2x1Z31gfT5cblx0XHRcdFx0e3RoaXMucHJvcHMuY2hpbGRyZW59XG5cdFx0XHQ8L0xpbms+XG5cdFx0KTtcblx0fVxufVxuXG5leHBvcnQgZGVmYXVsdCB3aXRoTW9kdWxlKFBvc3RMaW5rQ29tcG9uZW50KTtcbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyB3aXRoU3R5bGVzIH0gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvc3R5bGVzJztcbmltcG9ydCBHcmlkIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL0dyaWQnO1xuaW1wb3J0IEFwcCBcdFx0ZnJvbSAnam1hcnJveWF2ZS9jb21wb25lbnRzL3V4aS9jb3JlL3BhZ2UvYXBwJztcbmltcG9ydCBBcHBCb2R5IFx0ZnJvbSAnam1hcnJveWF2ZS9jb21wb25lbnRzL3V4aS9jb3JlL3BhZ2UvYm9keSc7XG5cbmNvbnN0IHN0eWxlcyA9IHRoZW1lID0+ICh7IFxuXG59KTtcblxuY2xhc3MgUGFnZSBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gIGNvbnN0cnVjdG9yKHByb3BzLGNvbnRleHQpIHtcbiAgICBcdHN1cGVyKHByb3BzLGNvbnRleHQpO1xuICAgIFx0dGhpcy5hcGkgPSB3aW5kb3cuX19hcGk7XG5cdH1cblxuXHRjb21wb25lbnREaWRNb3VudCgpe1xuXHR9XG5cblx0cmVuZGVyKCl7XG5cdFx0Y29uc3QgdGl0bGUgPSAoXCJ0aXRsZVwiIGluIHRoaXMucHJvcHMpID8gPGgxPnt0aGlzLnByb3BzLnRpdGxlfTwvaDE+IDogXCJcIjtcblx0XHRyZXR1cm4gKFxuXHRcdFx0PEFwcCByb3V0ZXI9e3RoaXMucHJvcHMucm91dGVyfSBhcHA9e3RoaXMucHJvcHMuYXBwfT5cblx0XHRcdFx0PEFwcEJvZHkgcGF0aD17W3t0ZXh0OiAnaG9tZScsIHJvdXRlOiAnLyd9LCB7dGV4dDogJ2xhYnMnfV19IGFwcD17dGhpcy5wcm9wcy5hcHB9IGRhdGE9e3t9fT5cblx0XHRcdFx0XHQ8R3JpZCBjb250YWluZXIgc3BhY2luZz17OH0gY2xhc3NOYW1lPXsnbW9kLWxhYnMnfSBzdHlsZT17e3BhZGRpbmdUb3A6ICc1JScsd2lkdGg6JzEwMCUnfX0+XG5cdFx0XHRcdFx0XHQ8R3JpZCBpdGVtIHhzPXsxMn0gYWxpZ249J2NlbnRlcic+XG5cdFx0XHRcdFx0XHRcdHt0aXRsZX1cblx0XHRcdFx0XHRcdDwvR3JpZD5cblx0XHRcdFx0XHRcdDxHcmlkIGl0ZW0geHM9ezF9IG1kPXs0fT5cblx0XHRcdFx0XHRcdDwvR3JpZD5cblx0XHRcdFx0XHRcdDxHcmlkIGl0ZW0gYWxpZ249J2NlbnRlcicgeHM9ezEwfSBtZD17NH0gY2xhc3NOYW1lPXsnZnJhbWUnfT5cblx0XHRcdFx0XHRcdFx0PGltZyBzcmM9Jy4vcmVzL2ltZy9sYWJzMDAyLmpwZycgd2lkdGg9JzEwMCUnLz5cblx0XHRcdFx0XHRcdFx0PGgxPlNvcnJ5LCBpdCdzIGp1c3QgYSBsYWJzIGRlbW88L2gxPlxuXHRcdFx0XHRcdFx0PC9HcmlkPlxuXHRcdFx0XHRcdDwvR3JpZD4gXG5cdFx0XHRcdDwvQXBwQm9keT5cblx0XHRcdDwvQXBwPlxuXHRcdCk7XG5cdH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgd2l0aFN0eWxlcyhzdHlsZXMpKFBhZ2UpOyIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgTG9hZGFibGUgZnJvbSAncmVhY3QtbG9hZGFibGUnO1xuaW1wb3J0IExvYWRpbmcgZnJvbSAnY29yZS9jb21wb25lbnRzL2xvYWRpbmcnO1xuaW1wb3J0IEFwcCBcdFx0ZnJvbSAnam1hcnJveWF2ZS9jb21wb25lbnRzL3V4aS9jb3JlL3BhZ2UvYXBwJztcbmltcG9ydCBBcHBCb2R5IFx0ZnJvbSAnam1hcnJveWF2ZS9jb21wb25lbnRzL3V4aS9jb3JlL3BhZ2UvYm9keSc7XG5cbmNvbnN0IEhvbWVQcm94eSA9IExvYWRhYmxlKHtcbiAgbG9hZGVyOiAoKSA9PiBpbXBvcnQoJ2ptYXJyb3lhdmUvY29tcG9uZW50cy91eGkvYmxvZy9sYXlvdXQvbGF5b3V0LXByb3h5JyksXG4gIGxvYWRpbmc6IExvYWRpbmcsXG59KTtcblxuY2xhc3MgUGFnZSBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG5cdGNvbnN0cnVjdG9yKHByb3BzLGNvbnRleHQpIHtcblx0XHRzdXBlcihwcm9wcyxjb250ZXh0KTtcblx0XHR0aGlzLmFwaSA9IHdpbmRvdy5fX2FwaTtcblx0fVxuXG5cdGNvbXBvbmVudERpZE1vdW50KCl7XG5cdH1cblxuXHRyZW5kZXIoKXtcblx0XHRjb25zdCBhcHAgPSB0aGlzLnByb3BzLmFwcDtcblx0XHR2YXIga2V5ID0gMDtcblx0XHRyZXR1cm4gKFxuXHRcdFx0PEFwcCByb3V0ZXI9e3RoaXMucHJvcHMucm91dGVyfSBhcHA9e3RoaXMucHJvcHMuYXBwfT5cblx0XHRcdFx0PEFwcEJvZHkgcGF0aD17W3t0ZXh0OiAnaG9tZScsIHJvdXRlOiAnLyd9XX0gYXBwPXt0aGlzLnByb3BzLmFwcH0gZGF0YT17e2hvbWU6IHRoaXMucHJvcHMucGFnZX19PlxuXHRcdFx0XHRcdDxIb21lUHJveHkgZGF0YT17dGhpcy5wcm9wcy5wYWdlLmRhdGF9IHRpdGxlPXt0aGlzLnByb3BzLnBhZ2UuYXJlYX0vPlxuXHRcdFx0XHQ8L0FwcEJvZHk+XG5cdFx0XHQ8L0FwcD5cblx0XHQpO1xuXHR9XG59XG5cbmV4cG9ydCBkZWZhdWx0IFBhZ2U7IiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBMb2FkYWJsZSBmcm9tICdyZWFjdC1sb2FkYWJsZSc7XG5pbXBvcnQgTG9hZGluZyBmcm9tICdjb3JlL2NvbXBvbmVudHMvbG9hZGluZyc7XG5pbXBvcnQgQXBwIFx0XHRmcm9tICdqbWFycm95YXZlL2NvbXBvbmVudHMvdXhpL2NvcmUvcGFnZS9hcHAnO1xuaW1wb3J0IEFwcEJvZHkgXHRmcm9tICdqbWFycm95YXZlL2NvbXBvbmVudHMvdXhpL2NvcmUvcGFnZS9ib2R5JztcblxuY29uc3QgSG9tZVByb3h5ID0gTG9hZGFibGUoe1xuICBsb2FkZXI6ICgpID0+IGltcG9ydCgnam1hcnJveWF2ZS9jb21wb25lbnRzL3V4aS9ibG9nX3Bvc3QvbGF5b3V0L2xheW91dC1wcm94eScpLFxuICBsb2FkaW5nOiBMb2FkaW5nLFxufSk7XG5cbmNsYXNzIFBhZ2UgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuXHRjb25zdHJ1Y3Rvcihwcm9wcyxjb250ZXh0KSB7XG5cdFx0c3VwZXIocHJvcHMsY29udGV4dCk7XG5cdFx0dGhpcy5hcGkgPSB3aW5kb3cuX19hcGk7XG5cdH1cblxuXHRjb21wb25lbnREaWRNb3VudCgpe1xuXHR9XG5cblx0cmVuZGVyKCl7XG5cdFx0Y29uc3QgYXBwID0gdGhpcy5wcm9wcy5hcHA7XG5cdFx0dmFyIGtleSA9IDA7XG5cdFx0cmV0dXJuIChcblx0XHRcdDxBcHAgcm91dGVyPXt0aGlzLnByb3BzLnJvdXRlcn0gYXBwPXt0aGlzLnByb3BzLmFwcH0+XG5cdFx0XHRcdDxBcHBCb2R5IHBhdGg9e1t7dGV4dDogJ2hvbWUnLCByb3V0ZTogJy8nfV19IGFwcD17dGhpcy5wcm9wcy5hcHB9IGRhdGE9e3tob21lOiB0aGlzLnByb3BzLnBhZ2V9fT5cblx0XHRcdFx0XHQ8SG9tZVByb3h5IGRhdGE9e3RoaXMucHJvcHMucGFnZS5kYXRhfSB0aXRsZT17dGhpcy5wcm9wcy5wYWdlLmFyZWF9Lz5cblx0XHRcdFx0PC9BcHBCb2R5PlxuXHRcdFx0PC9BcHA+XG5cdFx0KTtcblx0fVxufVxuXG5leHBvcnQgZGVmYXVsdCBQYWdlOyIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgd2l0aE1vZHVsZSBmcm9tICdqbWFycm95YXZlL2NvbXBvbmVudHMvdXhpL2NvcmUvd2l0aC1tb2R1bGUnO1xuaW1wb3J0IEJ1dHRvbiBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9CdXR0b24nO1xuaW1wb3J0IERpYWxvZyBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9EaWFsb2cnO1xuaW1wb3J0IERpYWxvZ0FjdGlvbnMgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvRGlhbG9nQWN0aW9ucyc7XG5pbXBvcnQgRGlhbG9nQ29udGVudCBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9EaWFsb2dDb250ZW50JztcbmltcG9ydCBEaWFsb2dUaXRsZSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9EaWFsb2dUaXRsZSc7XG5pbXBvcnQgSW5wdXRMYWJlbCBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9JbnB1dExhYmVsJztcbmltcG9ydCBJbnB1dCBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9JbnB1dCc7XG5pbXBvcnQgRm9ybUNvbnRyb2wgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvRm9ybUNvbnRyb2wnO1xuaW1wb3J0IFNlbGVjdCBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9TZWxlY3QnO1xuaW1wb3J0IENvbnN0YW50cyBmcm9tICdqbWFycm95YXZlL2NvbmYvY29uc3RhbnRzJztcbmltcG9ydCAnLi9jb21fdmVyc2lvbi5zY3NzJztcblxuY2xhc3MgQ29tcG9uZW50IGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcblx0Y29uc3RydWN0b3IocHJvcHMpe1xuXHRcdHN1cGVyKHByb3BzKTtcblxuXHRcdGNvbnN0IGNvbSA9IHdpbmRvdy5fX2FwaS5nZXRDb21wb25lbnRzVmVyc2lvbigpO1xuXG5cdFx0dGhpcy5zdGF0ZSA9IHtcblx0XHRcdG9wdGlvbjogY29tLmlkLFxuXHRcdH07XG5cblx0XHR0aGlzLmhhbmRsZUNoYW5nZSA9IHRoaXMuaGFuZGxlQ2hhbmdlLmJpbmQodGhpcyk7XG5cdFx0dGhpcy5vbkNsb3NlID0gdGhpcy5vbkNsb3NlLmJpbmQodGhpcyk7XG5cdH1cblxuXHRoYW5kbGVDaGFuZ2UoZXZlbnQpe1xuXHRcdGNvbnN0IHZhbHVlID0gZXZlbnQudGFyZ2V0LnZhbHVlO1xuXHRcdHRoaXMuc2V0U3RhdGUoeyBvcHRpb24gOiB2YWx1ZSB9KTtcblx0XHR3aW5kb3cuX19hcGkuc2V0Q29tcG9uZW50c1ZlcnNpb24odmFsdWUpO1xuXHR9XG5cblx0b25DbG9zZSgpe1xuXHRcdGlmKHRoaXMucHJvcHMub25DbG9zZSAhPSBudWxsKXtcblx0XHRcdHRoaXMucHJvcHMub25DbG9zZSgpO1xuXHRcdH1cblx0fVxuXG5cdHJlbmRlcigpe1x0XG5cdFx0aWYoIUNvbnN0YW50cy5DT01fU1dJVENIKXtcblx0XHRcdHJldHVybiBudWxsO1xuXHRcdH1cblxuXHRcdGNvbnN0IGRhdGEgPSBDb25zdGFudHMuVVhJX1ZFUlNJT05TO1xuXHRcdHJldHVybiAoXG5cdFx0XHQ8ZGl2IGNsYXNzTmFtZT0nbW9kLXZlcnNpb24nPlxuXHQgIFx0XHRcdDxGb3JtQ29udHJvbD5cblx0ICAgIFx0XHRcdDxJbnB1dExhYmVsIGh0bWxGb3I9XCJuYXRpdmUtc2ltcGxlXCI+VVhVSSBWZXJzaW9uPC9JbnB1dExhYmVsPlxuXHRcdFx0XHRcdDxTZWxlY3QgbmF0aXZlIHZhbHVlPXt0aGlzLnN0YXRlLm9wdGlvbn0gb25DaGFuZ2U9e3RoaXMuaGFuZGxlQ2hhbmdlfSBpbnB1dD17PElucHV0IGlkPVwibmF0aXZlLXNpbXBsZVwiIC8+fT5cblx0XHRcdFx0XHRcdHtkYXRhLm1hcCgoaXRlbSkgPT5cblx0XHRcdFx0XHRcdFx0aXRlbS52aXNpYmxlICYmIDxvcHRpb24ga2V5PXtpdGVtLmlkfSB2YWx1ZT17aXRlbS5pZH0+e2l0ZW0uZmFtaWx5fSB7YCR7aXRlbS52ZXJzaW9uWzBdfS4ke2l0ZW0udmVyc2lvblsxXX0uJHtpdGVtLnZlcnNpb25bMl19YH08L29wdGlvbj5cblx0XHRcdFx0XHRcdCl9XG5cdFx0XHRcdFx0PC9TZWxlY3Q+XG5cdCAgICAgICAgXHQ8L0Zvcm1Db250cm9sPlxuICAgICAgICBcdDwvZGl2PlxuXHRcdClcblx0fVxuXG59XG5cbmV4cG9ydCBkZWZhdWx0IHdpdGhNb2R1bGUoQ29tcG9uZW50KTsiLCJcbnZhciBjb250ZW50ID0gcmVxdWlyZShcIiEhLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vZnJhbWV3b3Jrcy93ZWJhcHBzL3N0YXJ0dXAvbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvaW5kZXguanMhLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vZnJhbWV3b3Jrcy93ZWJhcHBzL3N0YXJ0dXAvbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2xpYi9sb2FkZXIuanMhLi9jb21fdmVyc2lvbi5zY3NzXCIpO1xuXG5pZih0eXBlb2YgY29udGVudCA9PT0gJ3N0cmluZycpIGNvbnRlbnQgPSBbW21vZHVsZS5pZCwgY29udGVudCwgJyddXTtcblxudmFyIHRyYW5zZm9ybTtcbnZhciBpbnNlcnRJbnRvO1xuXG5cblxudmFyIG9wdGlvbnMgPSB7XCJobXJcIjp0cnVlfVxuXG5vcHRpb25zLnRyYW5zZm9ybSA9IHRyYW5zZm9ybVxub3B0aW9ucy5pbnNlcnRJbnRvID0gdW5kZWZpbmVkO1xuXG52YXIgdXBkYXRlID0gcmVxdWlyZShcIiEuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9mcmFtZXdvcmtzL3dlYmFwcHMvc3RhcnR1cC9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2xpYi9hZGRTdHlsZXMuanNcIikoY29udGVudCwgb3B0aW9ucyk7XG5cbmlmKGNvbnRlbnQubG9jYWxzKSBtb2R1bGUuZXhwb3J0cyA9IGNvbnRlbnQubG9jYWxzO1xuXG5pZihtb2R1bGUuaG90KSB7XG5cdG1vZHVsZS5ob3QuYWNjZXB0KFwiISEuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9mcmFtZXdvcmtzL3dlYmFwcHMvc3RhcnR1cC9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9pbmRleC5qcyEuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9mcmFtZXdvcmtzL3dlYmFwcHMvc3RhcnR1cC9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvbGliL2xvYWRlci5qcyEuL2NvbV92ZXJzaW9uLnNjc3NcIiwgZnVuY3Rpb24oKSB7XG5cdFx0dmFyIG5ld0NvbnRlbnQgPSByZXF1aXJlKFwiISEuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9mcmFtZXdvcmtzL3dlYmFwcHMvc3RhcnR1cC9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9pbmRleC5qcyEuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9mcmFtZXdvcmtzL3dlYmFwcHMvc3RhcnR1cC9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvbGliL2xvYWRlci5qcyEuL2NvbV92ZXJzaW9uLnNjc3NcIik7XG5cblx0XHRpZih0eXBlb2YgbmV3Q29udGVudCA9PT0gJ3N0cmluZycpIG5ld0NvbnRlbnQgPSBbW21vZHVsZS5pZCwgbmV3Q29udGVudCwgJyddXTtcblxuXHRcdHZhciBsb2NhbHMgPSAoZnVuY3Rpb24oYSwgYikge1xuXHRcdFx0dmFyIGtleSwgaWR4ID0gMDtcblxuXHRcdFx0Zm9yKGtleSBpbiBhKSB7XG5cdFx0XHRcdGlmKCFiIHx8IGFba2V5XSAhPT0gYltrZXldKSByZXR1cm4gZmFsc2U7XG5cdFx0XHRcdGlkeCsrO1xuXHRcdFx0fVxuXG5cdFx0XHRmb3Ioa2V5IGluIGIpIGlkeC0tO1xuXG5cdFx0XHRyZXR1cm4gaWR4ID09PSAwO1xuXHRcdH0oY29udGVudC5sb2NhbHMsIG5ld0NvbnRlbnQubG9jYWxzKSk7XG5cblx0XHRpZighbG9jYWxzKSB0aHJvdyBuZXcgRXJyb3IoJ0Fib3J0aW5nIENTUyBITVIgZHVlIHRvIGNoYW5nZWQgY3NzLW1vZHVsZXMgbG9jYWxzLicpO1xuXG5cdFx0dXBkYXRlKG5ld0NvbnRlbnQpO1xuXHR9KTtcblxuXHRtb2R1bGUuaG90LmRpc3Bvc2UoZnVuY3Rpb24oKSB7IHVwZGF0ZSgpOyB9KTtcbn0iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IHdpdGhNb2R1bGUgZnJvbSAnam1hcnJveWF2ZS9jb21wb25lbnRzL3V4aS9jb3JlL3dpdGgtbW9kdWxlJztcbmltcG9ydCB7YnJvd3Nlck5hbWUsIGJyb3dzZXJWZXJzaW9uLCBNb2JpbGVWaWV3LCBtb2JpbGVWZW5kb3IsIG1vYmlsZU1vZGVsLCBkZXZpY2VEZXRlY3QsIG9zTmFtZSwgb3NWZXJzaW9ufSBmcm9tIFwicmVhY3QtZGV2aWNlLWRldGVjdFwiO1xuaW1wb3J0IENvbnN0YW50cyBmcm9tICdqbWFycm95YXZlL2NvbmYvY29uc3RhbnRzJztcblxuY2xhc3MgRGVidWcgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuXG5cdHJlbmRlcigpe1x0XG5cdFx0Y29uc3QgYXBwID0gdGhpcy5wcm9wcy5hcHA7XG5cdFx0Y29uc3QgZGF0YSA9IChcImRhdGFcIiBpbiB0aGlzLnByb3BzKSA/IHRoaXMucHJvcHMuZGF0YSA6IHt9O1xuXG5cdFx0aWYoIWFwcCkgcmV0dXJuIDxkaXYvPjtcblx0XHRyZXR1cm4gKCAgXG5cdFx0XHQ8ZGl2PlxuXHRcdFx0e2FwcC5sb2NhbCAmJiBcblx0XHRcdFx0PGRpdiBzdHlsZT17e2JhY2tncm91bmRDb2xvcjogJ3JnYigyMDQsIDAsIDApJywgY29sb3I6ICd3aGl0ZScsIGZvbnRTaXplOiAnMS41cmVtJywgdGV4dEFsaWdubWVudDogJ2p1c3RpZnknLCBwYWRkaW5nOiAnMiUnLCB3aWR0aDonMTAwJSd9fT5cblx0XHRcdFx0XHQ8Yj5Ob3RpY2U6PC9iPiBUZXN0IGRhdGFzZXQgZW5hYmxlZFxuXHRcdFx0XHQ8L2Rpdj5cblx0XHRcdH1cblx0XHRcdHtDb25zdGFudHMuREVCVUcgJiYgXG5cdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwibW9kLWRlYnVnXCI+XG5cdFx0XHRcdFx0PHNwYW4+PGI+VmVyc2lvbjoge0NvbnN0YW50cy5WRVJTSU9OfTwvYj48L3NwYW4+PGJyLz5cblx0XHRcdFx0XHQ8c3Bhbj48Yj5TaXplOjwvYj4ge3dpbmRvdy5pbm5lcldpZHRoIHx8IGRvY3VtZW50LmJvZHkuY2xpZW50V2lkdGh9IHgge3dpbmRvdy5pbm5lckhlaWdodCB8fCBkb2N1bWVudC5ib2R5LmNsaWVudEhlaWdodH08L3NwYW4+PGJyLz5cblx0XHRcdFx0XHQ8c3Bhbj48Yj5Ccm93c2VyOjwvYj4ge2Jyb3dzZXJOYW1lfSB2Llt7YnJvd3NlclZlcnNpb259XTwvc3Bhbj48YnIvPlxuXHRcdFx0XHRcdDxNb2JpbGVWaWV3PjxzcGFuPjxiPk1vYmlsZTo8L2I+IHttb2JpbGVWZW5kb3J9IHttb2JpbGVNb2RlbH08L3NwYW4+PGJyLz48L01vYmlsZVZpZXc+XG5cdFx0XHRcdFx0PHNwYW4+PGI+T1M6PC9iPiB7b3NOYW1lfSB2Llt7b3NWZXJzaW9ufV08L3NwYW4+PGJyLz5cdFx0XHRcdFx0XG5cdFx0XHRcdFx0eyhhcHAuZXJyb3IpICYmIFxuXHRcdFx0XHRcdFx0PGRpdj5cblx0XHRcdFx0XHRcdFx0PGhyLz5cblx0XHRcdFx0XHRcdFx0PHNwYW4+PGI+RXJyb3I6PC9iPiB7YXBwLmVycm9yfTwvc3Bhbj5cblx0XHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHRcdH1cblxuXHRcdFx0XHQ8L2Rpdj5cblx0XHRcdH1cblx0XHRcdDwvZGl2Plx0XHRcdFxuXHRcdClcblx0fVxuXG59XG5cbmV4cG9ydCBkZWZhdWx0IHdpdGhNb2R1bGUoRGVidWcpOyIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcbmltcG9ydCBHcmlkQ29udGFpbmVyIGZyb20gJ2ptYXJyb3lhdmUvY29tcG9uZW50cy91eGkvY29yZS9ncmlkX2NvbnRhaW5lcic7XG5pbXBvcnQgR3JpZEl0ZW0gZnJvbSAnam1hcnJveWF2ZS9jb21wb25lbnRzL3V4aS9jb3JlL2dyaWRfaXRlbSc7XG5pbXBvcnQgeyBMaW5rIH0gZnJvbSAncmVhY3Qtcm91dGVyJztcblxuY2xhc3MgQ29tcG9uZW50IGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgcmVuZGVyKCkge1xuICAgIHJldHVybiAoXG5cdFx0PEdyaWRDb250YWluZXIgc3BhY2luZz17OH0+XG5cdFx0XHQ8R3JpZEl0ZW0geHM9ezEyfSBzbT17Nn0gbWQ9ezR9PlxuXHRcdFx0XHQ8aDE+am1hcnJveWF2ZTwvaDE+XG5cdFx0XHRcdFx0PGRpdj48TGluayB0bz17Jy9hY2VyY2EnfT5hY2VyY2E8L0xpbms+PC9kaXY+XG5cdFx0XHQ8L0dyaWRJdGVtPlxuXHRcdFx0PEdyaWRJdGVtIHhzPXsxMn0gc209ezZ9IG1kPXs0fT5cblx0XHRcdFx0PGgxPmxhYnM8L2gxPlxuXHRcdFx0XHRcdDxkaXY+PExpbmsgdG89eydsYWJzL21sYid9Pm1sYjwvTGluaz48L2Rpdj5cblx0XHRcdFx0XHQ8ZGl2PjxMaW5rIHRvPXsnbGFicy90cmVuZHMnfT50cmVuZHM8L0xpbms+PC9kaXY+XG5cdFx0XHRcdFx0PGRpdj48TGluayB0bz17J2xhYnMvc2VhcmNoJ30+c2VhcmNoPC9MaW5rPjwvZGl2PlxuXHRcdFx0PC9HcmlkSXRlbT5cblx0XHRcdDxHcmlkSXRlbSB4cz17MTJ9IHNtPXs2fSBtZD17NH0+XG5cdFx0XHRcdDxoMT5rbm93bGVkZ2UgYmFzZTwvaDE+XG5cdFx0XHRcdFx0PGRpdj48TGluayB0bz17J2tiL2FuZHJvaWQnfT5hbmRyb2lkIGxpYnM8L0xpbms+PC9kaXY+XG5cdFx0XHQ8L0dyaWRJdGVtPlx0XHRcdFx0XHRcblx0XHQ8L0dyaWRDb250YWluZXI+IFxuICAgICk7XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgKENvbXBvbmVudCk7IiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCB3aXRoTW9kdWxlIGZyb20gJ2ptYXJyb3lhdmUvY29tcG9uZW50cy91eGkvY29yZS93aXRoLW1vZHVsZSc7XG5pbXBvcnQgR3JpZCBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9HcmlkJztcblxuY2xhc3MgR3JpZENvbnRhaW5lciBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG5cdHJlbmRlcigpe1xuXHRcdHZhciBzcGFjaW5nID0gKFwic3BhY2luZ1wiIGluIHRoaXMucHJvcHMpID8gdGhpcy5wcm9wcy5zcGFjaW5nIDogMDtcblx0XHR2YXIgYWxpZ24gPSAoXCJhbGlnblwiIGluIHRoaXMucHJvcHMpXHQ/IHRoaXMucHJvcHMuYWxpZ24gOiAoKFwianVzdGlmeVwiIGluIHRoaXMucHJvcHMpID8gdGhpcy5wcm9wcy5qdXN0aWZ5IDogJ2ZsZXgtc3RhcnQnKTsgXG5cdFx0dmFyIHZhbGlnbiA9IChcInZhbGlnblwiIGluIHRoaXMucHJvcHMpXHQ/IHRoaXMucHJvcHMuYWxpZ24gOiAoKFwiYWxpZ25JdGVtc1wiIGluIHRoaXMucHJvcHMpID8gdGhpcy5wcm9wcy5hbGlnbkl0ZW1zIDogJ2ZsZXgtc3RhcnQnKTsgXG5cdFx0dmFyIGRpcmVjdGlvbiA9IChcImRpcmVjdGlvblwiIGluIHRoaXMucHJvcHMpXHQ/IHRoaXMucHJvcHMuZGlyZWN0aW9uIDogJ3Jvdyc7IFxuXHRcdHZhciBjbGFzc05hbWUgPSAoXCJjbGFzc05hbWVcIiBpbiB0aGlzLnByb3BzKVx0PyB0aGlzLnByb3BzLmNsYXNzTmFtZSA6ICcnOyBcblx0XHRcblx0XHRyZXR1cm4gKFxuXHRcdFx0PEdyaWQgY2xhc3NOYW1lPXtjbGFzc05hbWV9IGNvbnRhaW5lciBzcGFjaW5nPXtzcGFjaW5nfSBzdHlsZT17e3dpZHRoOicxMDAlJ319IGRpcmVjdGlvbj17ZGlyZWN0aW9ufSBhbGlnbkl0ZW1zPXt2YWxpZ259IGp1c3RpZnk9e2FsaWdufT5cblx0XHRcdFx0e3RoaXMucHJvcHMuY2hpbGRyZW59IFxuXHRcdFx0PC9HcmlkPlxuXHRcdClcblx0fVxufVxuXG5leHBvcnQgZGVmYXVsdCB3aXRoTW9kdWxlKEdyaWRDb250YWluZXIpOyIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgd2l0aE1vZHVsZSBmcm9tICdqbWFycm95YXZlL2NvbXBvbmVudHMvdXhpL2NvcmUvd2l0aC1tb2R1bGUnO1xuaW1wb3J0IEdyaWQgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvR3JpZCc7XG5cbmNsYXNzIEdyaWRJdGVtIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcblx0cmVuZGVyKCl7XG5cdFx0dmFyIHZpc2libGUgPSAoXCJ2aXNpYmxlXCIgaW4gdGhpcy5wcm9wcylcdD8gdGhpcy5wcm9wcy52aXNpYmxlIDogdHJ1ZTsgXG5cdFx0dmFyIHhzID0gKFwieHNcIiBpbiB0aGlzLnByb3BzKSA/IHRoaXMucHJvcHMueHMgOiAxMjtcblx0XHR2YXIgY2xhc3NOYW1lID0gKFwiY2xhc3NOYW1lXCIgaW4gdGhpcy5wcm9wcylcdD8gdGhpcy5wcm9wcy5jbGFzc05hbWUgOiAnJzsgXG5cdFx0cmV0dXJuIChcblx0XHRcdHZpc2libGUgJiZcblx0XHRcdFx0PEdyaWQgY2xhc3NOYW1lPXtjbGFzc05hbWV9IGl0ZW0geHM9e3hzfSBzbT17dGhpcy5wcm9wcy5zbX0gbWQ9e3RoaXMucHJvcHMubWR9IHN0eWxlPXt0aGlzLnByb3BzLnN0eWxlfT5cblx0XHRcdFx0XHR7dGhpcy5wcm9wcy5jaGlsZHJlbn0gXG5cdFx0XHRcdDwvR3JpZD5cdFx0XHRcblx0XHQpXG5cdH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgd2l0aE1vZHVsZShHcmlkSXRlbSk7IiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IGNyZWF0ZU11aVRoZW1lIH0gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvc3R5bGVzJztcbmltcG9ydCB7IHdpdGhTdHlsZXMgfSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9zdHlsZXMnO1xuaW1wb3J0IEhpZGRlbiBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9IaWRkZW4nO1xuaW1wb3J0IEdyaWQgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvR3JpZCc7XG5pbXBvcnQgQXBwIGZyb20gJ2NvcmUvY29tcG9uZW50cy9hcHAnO1xuaW1wb3J0IEJ1dHRvbiBmcm9tICdjb3JlL2NvbXBvbmVudHMvYnV0dG9uLmpzJztcbmltcG9ydCBBcHBEcmF3ZXIgZnJvbSAnam1hcnJveWF2ZS9jb21wb25lbnRzL3V4aS9jb3JlL3BhZ2UvZHJhd2VyJztcbmltcG9ydCBOYXZpZ2F0aW9uIGZyb20gJ2ptYXJyb3lhdmUvY29uZi9uYXZpZ2F0aW9uJztcbmltcG9ydCBDb25zdGFudHMgZnJvbSAnam1hcnJveWF2ZS9jb25mL2NvbnN0YW50cydcblxuY29uc3QgdGhlbWUgPSBjcmVhdGVNdWlUaGVtZSh7XG4gIHBhbGV0dGU6IHtcbiAgICBwcmltYXJ5OiB7XG4gICAgICBsaWdodDogJyM0MTU2OWMnLFxuICAgICAgbWFpbjogJyMwMDJlNmQnLFxuICAgICAgZGFyazogJyMwMDA0NDEnLFxuICAgICAgY29udHJhc3RUZXh0OiAnI2ZmZicsXG4gICAgfSxcbiAgICBzZWNvbmRhcnk6IHtcbiAgICAgIGxpZ2h0OiAnI2ZmNTA0NycsXG4gICAgICBtYWluOiAnI2QxMDAxZScsXG4gICAgICBkYXJrOiAnIzk3MDAwMCcsXG4gICAgICBjb250cmFzdFRleHQ6ICcjZmZmJyxcbiAgICB9LFxuICB9LFxuICB0eXBvZ3JhcGh5OiB7XG4gICAgLy8gVXNlIHRoZSBzeXN0ZW0gZm9udCBpbnN0ZWFkIG9mIHRoZSBkZWZhdWx0IFJvYm90byBmb250LlxuICAgIGZvbnRGYW1pbHk6IFtcbiAgICAgIFwiSGVsdmV0aWNhIE5ldWVcIixcbiAgICAgIFwiSGVsdmV0aWNhXCIsXG4gICAgICBcIkFyaWFsXCIsXG4gICAgICAnLWFwcGxlLXN5c3RlbScsXG4gICAgICAnQmxpbmtNYWNTeXN0ZW1Gb250JyxcbiAgICAgICdcIlNlZ29lIFVJXCInLFxuICAgICAgJ1JvYm90bycsXG4gICAgICAnc2Fucy1zZXJpZicsXG4gICAgICAnXCJBcHBsZSBDb2xvciBFbW9qaVwiJyxcbiAgICAgICdcIlNlZ29lIFVJIEVtb2ppXCInLFxuICAgICAgJ1wiU2Vnb2UgVUkgU3ltYm9sXCInLFxuICAgIF0uam9pbignLCcpLFxuICAgIGZvbnRTaXplOiAnMTJweCcsXG4gIH0sXG59KTtcblxuY29uc3Qgc3R5bGVzID0gdGhlbWUgPT4gKHsgXG4gIGJhcjp7XG4gICAgcGFkZGluZzogMCxcbiAgICB3aWR0aDogJzEwMCUnLFxuICAgIGhlaWdodDogJzEwMCUnLFxuICAgIGJveFNpemluZzogJ2JvcmRlci1ib3gnLFxuICB9LFxuICBib2R5IDoge1xuICAgIHBhZGRpbmc6IDAsXG4gICAgZmxleEdyb3c6IDEsXG4gICAgbWFyZ2luVG9wOiAtNSxcbiAgICB3aWR0aDogJzEwMCUnLFxuICAgIG1pbkhlaWdodDogJzkwdmgnLFxuICAgIGJveFNpemluZzogJ2JvcmRlci1ib3gnLFxuICAgIHpJbmRleDogMyxcbiAgICBib3JkZXJSYWRpdXM6IDUsXG4gIH0sXG59KTtcblxuY2xhc3MgTUxCQXBwIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgY29uc3RydWN0b3IocHJvcHMpe1xuICAgIHN1cGVyKHByb3BzKTtcblxuICAgIHRoaXMubmF2aWdhdGlvbiA9IG5ldyBOYXZpZ2F0aW9uKCk7XG4gIH1cblxuICBtZW51Q2xpY2socGF0aCl7XG4gICAgdGhpcy5wcm9wcy5yb3V0ZXIucHVzaChwYXRoKTtcbiAgfVxuXG4gIHJlbmRlcigpe1xuICAgIHZhciBrZXkgPSAwO1xuICAgIGNvbnN0IGNsYXNzZXMgPSB0aGlzLnByb3BzLmNsYXNzZXM7XG4gICAgY29uc3QgdG9vbGJhciA9IFtdO1xuICAgIHRoaXMubmF2aWdhdGlvbi5vcHRpb25zLm1hcChpdGVtID0+IHtcbiAgICBcdGlmKGl0ZW0uc2hvd0luTWVudSlcblx0XHQgICAgdG9vbGJhci5wdXNoKDxCdXR0b24ga2V5PXtrZXkrK30gc3R5bGU9e3tjb2xvcjogQ29uc3RhbnRzLk1FTlVfQkFSX0ZHX0NPTE9SLCBmb250U2l6ZTogJzEuMTBlbScsIHBhZGRpbmc6ICcwLjVlbScsIG1pbldpZHRoOiAnMS4yNWVtJ319IG9uQ2xpY2s9e3RoaXMubWVudUNsaWNrLmJpbmQodGhpcywgaXRlbS5yb3V0ZSl9PntpdGVtLm5hbWV9PC9CdXR0b24+KVxuICAgIH0pO1xuICAgIFxuICAgIGNvbnN0IG1lbnUgPSBbXTtcbiAgICBjb25zdCB0aXRsZSA9IGAke0NvbnN0YW50cy5USVRMRX0gfCAke0NvbnN0YW50cy5WRVJTSU9OfWA7XG4gICAgY29uc3QgYXBwYmFyID0ge3RpdGxlOiB0aXRsZSwgbG9nbzogbnVsbCwgbWVudSA6IG1lbnUsIHRvb2xiYXI6IHRvb2xiYXJ9O1xuICAgIGNvbnN0IGFwcEJvZHkgPSBSZWFjdC5DaGlsZHJlbi50b0FycmF5KHRoaXMucHJvcHMuY2hpbGRyZW4pLmZpbmQoKGl0ZW0pPT57XG4gICAgICByZXR1cm4gKGl0ZW0ucHJvcHMudHlwZSA9PT0gJ0JvZHknKSA/IGl0ZW0gOiBudWxsO1xuICAgIH0pO1xuXG4gICAgcmV0dXJuKFxuICAgICAgPEFwcCBiYXJTdHlsZT17e2JhY2tncm91bmRDb2xvcjogQ29uc3RhbnRzLk1FTlVfQkFSX0JHX0NPTE9SLCBjb2xvcjogQ29uc3RhbnRzLk1FTlVfQkFSX0ZHX0NPTE9SfX0gYmFyUG9zaXRpb249e3RoaXMucHJvcHMuYmFyUG9zaXRpb259IHBhZ2VfdGl0bGU9e2FwcGJhci50aXRsZX0gbG9nbz17YXBwYmFyLmxvZ299IHRvb2xiYXI9e2FwcGJhci50b29sYmFyfSBzZXJ2ZXI9e3RoaXMucHJvcHMuc2VydmVyfSB0aGVtZT17bnVsbH0+XG4gICAgICAgIDxHcmlkIGNvbnRhaW5lciBzcGFjaW5nPXswfSBjbGFzc05hbWU9e2NsYXNzZXMucGFnZX0+XG4gICAgICAgICAgPEdyaWQgaXRlbSB4cz17MTJ9IHNtPXsxMn0gbWQ9ezEyfSA+XG4gICAgICAgICAgICA8R3JpZCBjb250YWluZXIganVzdGlmeT0nZmxleC1zdGFydCcgZGlyZWN0aW9uPSdjb2x1bW4nIHNwYWNpbmc9ezB9PlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17Y2xhc3Nlcy5ib2R5fSBzdHlsZT17e3dpZHRoOicxMDAlJ319PlxuICAgICAgICAgICAgICAgIHthcHBCb2R5fVxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvR3JpZD4gICAgICAgICBcbiAgICAgICAgICA8L0dyaWQ+XG4gICAgICAgIDwvR3JpZD5cbiAgICAgIDwvQXBwPlxuICAgIClcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCB3aXRoU3R5bGVzKHN0eWxlcykoTUxCQXBwKTsiLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IEZvb3RlciBmcm9tICdqbWFycm95YXZlL2NvbXBvbmVudHMvdXhpL2NvcmUvcGFnZS9mb290ZXInXG5pbXBvcnQgSGVhZGVyIGZyb20gJ2ptYXJyb3lhdmUvY29tcG9uZW50cy91eGkvY29yZS9wYWdlL2hlYWRlcidcblxuY2xhc3MgQXBwQm9keSBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gIHJlbmRlcigpe1xuICAgIGNvbnN0IGFwcCA9IHRoaXMucHJvcHMuYXBwO1xuICAgIGNvbnN0IGRhdGEgPSB0aGlzLnByb3BzLmRhdGE7XG4gICAgY29uc3QgY2hpbGRyZW4gPSB0aGlzLnByb3BzLmNoaWxkcmVuO1xuICAgIHJldHVybihcbiAgICAgIDxkaXYgc3R5bGU9e3twb3NpdGlvbjogJ3JlbGF0aXZlJ319PlxuICAgICAgICA8SGVhZGVyIGFwcD17YXBwfSBkYXRhPXtkYXRhfS8+XG4gICAgICAgIDxkaXYgc3R5bGU9e3ttaW5IZWlnaHQ6ICc5MHZoJ319PlxuICAgICAgICAgIHtjaGlsZHJlbn1cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxGb290ZXIvPlxuICAgICAgPC9kaXY+XG4gICAgKVxuICB9XG59XG5cbkFwcEJvZHkuZGVmYXVsdFByb3BzID0ge1xuICB0eXBlOiAnQm9keScsXG59XG5cbmV4cG9ydCBkZWZhdWx0IEFwcEJvZHk7XG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgTGluayB9IGZyb20gJ3JlYWN0LXJvdXRlcic7XG5pbXBvcnQgTGlzdCwge0xpc3RJdGVtLCBMaXN0SXRlbUljb24sIExpc3RJdGVtVGV4dCx9IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL0xpc3QnO1xuaW1wb3J0IFVJQXBwTGlzdCBmcm9tICdjb3JlL2NvbXBvbmVudHMvYXBwX2xpc3QnO1xuaW1wb3J0IFVJSWNvbiBmcm9tICdjb3JlL2NvbXBvbmVudHMvaWNvbic7XG5pbXBvcnQgTmF2aWdhdGlvbiBmcm9tICdqbWFycm95YXZlL2NvbmYvbmF2aWdhdGlvbic7XG5cbmNsYXNzIEFwcERyYXdlciBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG5cdGNvbnN0cnVjdG9yKHByb3BzKXtcblx0XHRzdXBlcihwcm9wcyk7XG5cdFx0dGhpcy5uYXZpZ2F0aW9uID0gbmV3IE5hdmlnYXRpb24oKTtcblx0fVxuXHRyZW5kZXIoKXtcblx0XHR2YXIga2V5ID0gMDtcbiAgXHRyZXR1cm4oXG4gIFx0XHQ8VUlBcHBMaXN0PlxuXHRcdFx0XHQ8TGlzdCBkZW5zZT17dHJ1ZX0+XG5cdFx0XHRcdFx0e3RoaXMubmF2aWdhdGlvbi5vcHRpb25zLm1hcChpdGVtPT5cblx0XHRcdFx0XHRcdDxMaW5rIGtleT17a2V5Kyt9IHRvPXt7cGF0aG5hbWU6aXRlbS5yb3V0ZX19IGNsYXNzTmFtZT17J2xpbmsnfT5cblx0XHRcdFx0XHRcdFx0PExpc3RJdGVtIGJ1dHRvbj5cblx0XHRcdFx0XHRcdFx0XHQ8TGlzdEl0ZW1JY29uPlxuXHRcdFx0XHRcdFx0XHRcdFx0PFVJSWNvbiBpY29uPXtpdGVtLmljb259Lz5cblx0XHRcdFx0XHRcdFx0XHQ8L0xpc3RJdGVtSWNvbj5cblx0XHRcdFx0XHRcdFx0XHQ8TGlzdEl0ZW1UZXh0IGluc2V0IHByaW1hcnk9e2l0ZW0ubmFtZX0gLz5cblx0XHRcdFx0XHRcdFx0PC9MaXN0SXRlbT5cblx0XHRcdFx0XHRcdDwvTGluaz5cblx0XHRcdFx0XHQpfVxuXHRcdFx0XHQ8L0xpc3Q+XG5cdFx0XHQ8L1VJQXBwTGlzdD5cblx0ICAgICk7XG4gIFx0fVxufVxuXG5leHBvcnQgZGVmYXVsdCBBcHBEcmF3ZXI7XG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IHdpdGhNb2R1bGUgZnJvbSAnam1hcnJveWF2ZS9jb21wb25lbnRzL3V4aS9jb3JlL3dpdGgtbW9kdWxlJztcbmltcG9ydCBHcmlkQ29udGFpbmVyIGZyb20gJ2ptYXJyb3lhdmUvY29tcG9uZW50cy91eGkvY29yZS9ncmlkX2NvbnRhaW5lcic7XG5pbXBvcnQgR3JpZEl0ZW0gZnJvbSAnam1hcnJveWF2ZS9jb21wb25lbnRzL3V4aS9jb3JlL2dyaWRfaXRlbSc7XG5pbXBvcnQgRm9vdGVyTGlua3MgZnJvbSAnam1hcnJveWF2ZS9jb21wb25lbnRzL3V4aS9jb3JlL2Zvb3Rlcl9saW5rcyc7XG5pbXBvcnQgU29jaWFsTmV0d29ya3MgZnJvbSAnc2hhcmVkL2ptYXJyb3lhdmUvc29jaWFsX25ldHdvcmtzJztcbmltcG9ydCBNQmxvY2sgZnJvbSAnY29yZS9jb21wb25lbnRzL21vY2t1cC9ibG9jayc7XG5cbmltcG9ydCBcIi4vZm9vdGVyLnNjc3NcIjtcblxuY2xhc3MgRm9vdGVyQ29tcG9uZW50IGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcblx0cmVuZGVyKCl7XHRcblx0XHRjb25zdCBkYXRhID0gdGhpcy5wcm9wcy5kYXRhO1xuXHRcdHJldHVybiAoXG5cdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cIm1vZC1mb290ZXJcIj5cblx0XHRcdFx0PEdyaWRDb250YWluZXIgc3BhY2luZz17OH0+XG5cdFx0XHRcdFx0PEdyaWRJdGVtIHhzPXsxMn0+XG5cdFx0XHRcdFx0XHQ8Rm9vdGVyTGlua3MgZGF0YT17ZGF0YX0vPlxuXHRcdFx0XHRcdDwvR3JpZEl0ZW0+XHRcdFx0XHRcdFxuXHRcdFx0XHRcdDxHcmlkSXRlbSB4cz17MTJ9IHN0eWxlPXt7dGV4dEFsaWduOiAnY2VudGVyJ319PlxuXHRcdFx0XHRcdFx0PFNvY2lhbE5ldHdvcmtzLz5cblx0XHRcdFx0XHQ8L0dyaWRJdGVtPlxuXHRcdFx0XHQ8L0dyaWRDb250YWluZXI+IFxuXHRcdFx0PC9kaXY+XHRcdFx0XG5cdFx0KVxuXHR9XG5cbn1cblxuZXhwb3J0IGRlZmF1bHQgd2l0aE1vZHVsZShGb290ZXJDb21wb25lbnQpOyIsIlxudmFyIGNvbnRlbnQgPSByZXF1aXJlKFwiISEuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9mcmFtZXdvcmtzL3dlYmFwcHMvc3RhcnR1cC9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9pbmRleC5qcyEuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9mcmFtZXdvcmtzL3dlYmFwcHMvc3RhcnR1cC9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvbGliL2xvYWRlci5qcyEuL2Zvb3Rlci5zY3NzXCIpO1xuXG5pZih0eXBlb2YgY29udGVudCA9PT0gJ3N0cmluZycpIGNvbnRlbnQgPSBbW21vZHVsZS5pZCwgY29udGVudCwgJyddXTtcblxudmFyIHRyYW5zZm9ybTtcbnZhciBpbnNlcnRJbnRvO1xuXG5cblxudmFyIG9wdGlvbnMgPSB7XCJobXJcIjp0cnVlfVxuXG5vcHRpb25zLnRyYW5zZm9ybSA9IHRyYW5zZm9ybVxub3B0aW9ucy5pbnNlcnRJbnRvID0gdW5kZWZpbmVkO1xuXG52YXIgdXBkYXRlID0gcmVxdWlyZShcIiEuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9mcmFtZXdvcmtzL3dlYmFwcHMvc3RhcnR1cC9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2xpYi9hZGRTdHlsZXMuanNcIikoY29udGVudCwgb3B0aW9ucyk7XG5cbmlmKGNvbnRlbnQubG9jYWxzKSBtb2R1bGUuZXhwb3J0cyA9IGNvbnRlbnQubG9jYWxzO1xuXG5pZihtb2R1bGUuaG90KSB7XG5cdG1vZHVsZS5ob3QuYWNjZXB0KFwiISEuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9mcmFtZXdvcmtzL3dlYmFwcHMvc3RhcnR1cC9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9pbmRleC5qcyEuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9mcmFtZXdvcmtzL3dlYmFwcHMvc3RhcnR1cC9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvbGliL2xvYWRlci5qcyEuL2Zvb3Rlci5zY3NzXCIsIGZ1bmN0aW9uKCkge1xuXHRcdHZhciBuZXdDb250ZW50ID0gcmVxdWlyZShcIiEhLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vZnJhbWV3b3Jrcy93ZWJhcHBzL3N0YXJ0dXAvbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvaW5kZXguanMhLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vZnJhbWV3b3Jrcy93ZWJhcHBzL3N0YXJ0dXAvbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2xpYi9sb2FkZXIuanMhLi9mb290ZXIuc2Nzc1wiKTtcblxuXHRcdGlmKHR5cGVvZiBuZXdDb250ZW50ID09PSAnc3RyaW5nJykgbmV3Q29udGVudCA9IFtbbW9kdWxlLmlkLCBuZXdDb250ZW50LCAnJ11dO1xuXG5cdFx0dmFyIGxvY2FscyA9IChmdW5jdGlvbihhLCBiKSB7XG5cdFx0XHR2YXIga2V5LCBpZHggPSAwO1xuXG5cdFx0XHRmb3Ioa2V5IGluIGEpIHtcblx0XHRcdFx0aWYoIWIgfHwgYVtrZXldICE9PSBiW2tleV0pIHJldHVybiBmYWxzZTtcblx0XHRcdFx0aWR4Kys7XG5cdFx0XHR9XG5cblx0XHRcdGZvcihrZXkgaW4gYikgaWR4LS07XG5cblx0XHRcdHJldHVybiBpZHggPT09IDA7XG5cdFx0fShjb250ZW50LmxvY2FscywgbmV3Q29udGVudC5sb2NhbHMpKTtcblxuXHRcdGlmKCFsb2NhbHMpIHRocm93IG5ldyBFcnJvcignQWJvcnRpbmcgQ1NTIEhNUiBkdWUgdG8gY2hhbmdlZCBjc3MtbW9kdWxlcyBsb2NhbHMuJyk7XG5cblx0XHR1cGRhdGUobmV3Q29udGVudCk7XG5cdH0pO1xuXG5cdG1vZHVsZS5ob3QuZGlzcG9zZShmdW5jdGlvbigpIHsgdXBkYXRlKCk7IH0pO1xufSIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgQ29tcG9uZW50IGZyb20gJ2NvcmUvY29tcG9uZW50cy9jb21wb25lbnQnO1xuaW1wb3J0IERlYnVnIGZyb20gJ2ptYXJyb3lhdmUvY29tcG9uZW50cy91eGkvY29yZS9kZWJ1Zyc7XG5pbXBvcnQgQ29tVmVyc2lvbiBmcm9tICdqbWFycm95YXZlL2NvbXBvbmVudHMvdXhpL2NvcmUvY29tX3ZlcnNpb24nO1xuaW1wb3J0IFRvcEJhciBmcm9tICdqbWFycm95YXZlL2NvbXBvbmVudHMvdXhpL2NvcmUvdG9wX2Jhcic7XG5pbXBvcnQgR3JpZENvbnRhaW5lciBmcm9tICdqbWFycm95YXZlL2NvbXBvbmVudHMvdXhpL2NvcmUvZ3JpZF9jb250YWluZXInO1xuaW1wb3J0IEdyaWRJdGVtIGZyb20gJ2ptYXJyb3lhdmUvY29tcG9uZW50cy91eGkvY29yZS9ncmlkX2l0ZW0nO1xuXG5jbGFzcyBIZWFkZXJDb21wb25lbnQgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuXHRjb25zdHJ1Y3Rvcihwcm9wcyl7XG5cdFx0c3VwZXIocHJvcHMpO1xuXHR9XG5cblx0cmVuZGVyKCl7XHRcblx0XHRjb25zdCBkYXRhID0gdGhpcy5wcm9wcy5kYXRhO1xuXHRcdGNvbnN0IGFwcCA9IHRoaXMucHJvcHMuYXBwO1xuXHRcdHJldHVybiAoXG5cdFx0XHQ8R3JpZENvbnRhaW5lcj5cblx0XHRcdFx0PEdyaWRJdGVtPlxuXHRcdFx0XHRcdDxDb21WZXJzaW9uLz5cblx0XHRcdCAgICAgIFx0PERlYnVnIGFwcD17YXBwfSBkYXRhPXtkYXRhfS8+XG5cdFx0XHRcdDwvR3JpZEl0ZW0+XG5cdFx0XHRcdDxHcmlkSXRlbT5cblx0XHRcdFx0XHQ8VG9wQmFyIGRhdGE9e2FwcH0vPlxuXHRcdFx0XHQ8L0dyaWRJdGVtPlxuXHRcdFx0PC9HcmlkQ29udGFpbmVyPlxuXHRcdClcblx0fVxuXG59XG5cbmV4cG9ydCBkZWZhdWx0IENvbXBvbmVudChIZWFkZXJDb21wb25lbnQpOyIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcbmltcG9ydCBDb21wb25lbnQgZnJvbSAnY29yZS9jb21wb25lbnRzL2NvbXBvbmVudCc7XG5pbXBvcnQgR3JpZENvbnRhaW5lciBmcm9tICdqbWFycm95YXZlL2NvbXBvbmVudHMvdXhpL2NvcmUvZ3JpZF9jb250YWluZXInO1xuaW1wb3J0IEdyaWRJdGVtIGZyb20gJ2ptYXJyb3lhdmUvY29tcG9uZW50cy91eGkvY29yZS9ncmlkX2l0ZW0nO1xuaW1wb3J0IEJsb2NrIGZyb20gJ2ptYXJyb3lhdmUvY29tcG9uZW50cy91eGkvaG9tZS9ibG9jayc7XG5pbXBvcnQgV2hhdHNIb3QgZnJvbSAnam1hcnJveWF2ZS9jb21wb25lbnRzL3V4aS9jb3JlL3doYXRzX2hvdCc7XG5cbmNsYXNzIFRvcEJhciBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gIHJlbmRlcigpIHtcbiAgXHRjb25zdCBkYXRhID0gdGhpcy5wcm9wcy5kYXRhO1xuICAgIHJldHVybiAoXG4gICAgXHQ8QmxvY2s+XG5cdFx0XHQ8R3JpZENvbnRhaW5lcj5cblx0XHRcdFx0PEdyaWRJdGVtIHhzPXsxMn0+XG5cdFx0XHRcdFx0PFdoYXRzSG90IGRhdGE9e2RhdGEuaG90fS8+XG5cdFx0XHRcdDwvR3JpZEl0ZW0+XG5cdFx0XHQ8L0dyaWRDb250YWluZXI+XG5cdFx0PC9CbG9jaz5cbiAgICApO1xuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IENvbXBvbmVudChUb3BCYXIpOyIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcbmltcG9ydCBQb3N0TGluayBmcm9tICdqbWFycm95YXZlL2NvbXBvbmVudHMvZGF0YS9wb3N0X2xpbmsnO1xuaW1wb3J0IENvbXBvbmVudCBmcm9tICdjb3JlL2NvbXBvbmVudHMvY29tcG9uZW50JztcbmltcG9ydCAnLi93aGF0c19ob3Quc2Nzcyc7XG5cbmNsYXNzIEhvdEJhckNvbXBvbmVudCBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gIHJlbmRlcigpIHtcbiAgXHRjb25zdCBkYXRhID0gdGhpcy5wcm9wcy5kYXRhO1xuICAgIHJldHVybiAoXG4gICAgICA8ZGl2IGNsYXNzTmFtZT0nbW9kLXdoYXRzLWhvdCc+XG4gICAgICBcdDxQb3N0TGluayBzbHVnPXtkYXRhLnNsdWd9IGNhdGVnb3J5PXtkYXRhLmFyZWF9PlxuICAgICAgXHRcdHtkYXRhLmFyZWF9ID4ge2RhdGEudGl0bGV9XG4gICAgICBcdDwvUG9zdExpbms+XG4gICAgICA8L2Rpdj5cbiAgICApO1xuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IENvbXBvbmVudChIb3RCYXJDb21wb25lbnQpOyIsIlxudmFyIGNvbnRlbnQgPSByZXF1aXJlKFwiISEuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9mcmFtZXdvcmtzL3dlYmFwcHMvc3RhcnR1cC9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9pbmRleC5qcyEuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9mcmFtZXdvcmtzL3dlYmFwcHMvc3RhcnR1cC9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvbGliL2xvYWRlci5qcyEuL3doYXRzX2hvdC5zY3NzXCIpO1xuXG5pZih0eXBlb2YgY29udGVudCA9PT0gJ3N0cmluZycpIGNvbnRlbnQgPSBbW21vZHVsZS5pZCwgY29udGVudCwgJyddXTtcblxudmFyIHRyYW5zZm9ybTtcbnZhciBpbnNlcnRJbnRvO1xuXG5cblxudmFyIG9wdGlvbnMgPSB7XCJobXJcIjp0cnVlfVxuXG5vcHRpb25zLnRyYW5zZm9ybSA9IHRyYW5zZm9ybVxub3B0aW9ucy5pbnNlcnRJbnRvID0gdW5kZWZpbmVkO1xuXG52YXIgdXBkYXRlID0gcmVxdWlyZShcIiEuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9mcmFtZXdvcmtzL3dlYmFwcHMvc3RhcnR1cC9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2xpYi9hZGRTdHlsZXMuanNcIikoY29udGVudCwgb3B0aW9ucyk7XG5cbmlmKGNvbnRlbnQubG9jYWxzKSBtb2R1bGUuZXhwb3J0cyA9IGNvbnRlbnQubG9jYWxzO1xuXG5pZihtb2R1bGUuaG90KSB7XG5cdG1vZHVsZS5ob3QuYWNjZXB0KFwiISEuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9mcmFtZXdvcmtzL3dlYmFwcHMvc3RhcnR1cC9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9pbmRleC5qcyEuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9mcmFtZXdvcmtzL3dlYmFwcHMvc3RhcnR1cC9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvbGliL2xvYWRlci5qcyEuL3doYXRzX2hvdC5zY3NzXCIsIGZ1bmN0aW9uKCkge1xuXHRcdHZhciBuZXdDb250ZW50ID0gcmVxdWlyZShcIiEhLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vZnJhbWV3b3Jrcy93ZWJhcHBzL3N0YXJ0dXAvbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvaW5kZXguanMhLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vZnJhbWV3b3Jrcy93ZWJhcHBzL3N0YXJ0dXAvbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2xpYi9sb2FkZXIuanMhLi93aGF0c19ob3Quc2Nzc1wiKTtcblxuXHRcdGlmKHR5cGVvZiBuZXdDb250ZW50ID09PSAnc3RyaW5nJykgbmV3Q29udGVudCA9IFtbbW9kdWxlLmlkLCBuZXdDb250ZW50LCAnJ11dO1xuXG5cdFx0dmFyIGxvY2FscyA9IChmdW5jdGlvbihhLCBiKSB7XG5cdFx0XHR2YXIga2V5LCBpZHggPSAwO1xuXG5cdFx0XHRmb3Ioa2V5IGluIGEpIHtcblx0XHRcdFx0aWYoIWIgfHwgYVtrZXldICE9PSBiW2tleV0pIHJldHVybiBmYWxzZTtcblx0XHRcdFx0aWR4Kys7XG5cdFx0XHR9XG5cblx0XHRcdGZvcihrZXkgaW4gYikgaWR4LS07XG5cblx0XHRcdHJldHVybiBpZHggPT09IDA7XG5cdFx0fShjb250ZW50LmxvY2FscywgbmV3Q29udGVudC5sb2NhbHMpKTtcblxuXHRcdGlmKCFsb2NhbHMpIHRocm93IG5ldyBFcnJvcignQWJvcnRpbmcgQ1NTIEhNUiBkdWUgdG8gY2hhbmdlZCBjc3MtbW9kdWxlcyBsb2NhbHMuJyk7XG5cblx0XHR1cGRhdGUobmV3Q29udGVudCk7XG5cdH0pO1xuXG5cdG1vZHVsZS5ob3QuZGlzcG9zZShmdW5jdGlvbigpIHsgdXBkYXRlKCk7IH0pO1xufSIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgRXJyb3JCb3VuZHJ5IGZyb20gJ2NvcmUvY29tcG9uZW50cy9lcnJvcic7XG5pbXBvcnQgTG9hZGluZyBmcm9tICdjb3JlL2NvbXBvbmVudHMvbG9hZGluZy5qcyc7XG5pbXBvcnQgQ29uc3RhbnRzIGZyb20gJ2ptYXJyb3lhdmUvY29uZi9jb25zdGFudHMnXG5cbmNvbnN0IHdpdGhNb2R1bGUgPSBNb2R1bGVDb21wb25lbnQgPT5cblx0Y2xhc3MgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuXHRcdHJlbmRlcigpe1xuXHRcdFx0Y29uc3QgdGl0bGUgPSAoXCJ0aXRsZVwiIGluIHRoaXMucHJvcHMpID8gdGhpcy5wcm9wcy50aXRsZSA6IG51bGw7XG5cdFx0XHRjb25zdCBwaCA9IChcInBsYWNlaG9sZGVyXCIgaW4gdGhpcy5wcm9wcykgPyB0aGlzLnByb3BzLnBsYWNlaG9sZGVyIDoge307XG5cdFx0XHRjb25zdCBwaFcgPSAocGgud2lkdGgpID8gcGgud2lkdGggOiAnMTAwJSc7XG5cdFx0XHRjb25zdCBwaEggPSAocGguaGVpZ2h0KSA/IHBoLmhlaWdodCA6ICcyNTAnO1xuXG5cdFx0XHRyZXR1cm4gKFxuXHRcdFx0XHQ8RXJyb3JCb3VuZHJ5IGZyb209e3RpdGxlfSBzdHlsZT17e3dpZHRoOicxMDAlJ319PlxuXHRcdFx0XHRcdDxNb2R1bGVDb21wb25lbnQgey4uLnRoaXMucHJvcHN9Lz5cblx0XHRcdFx0PC9FcnJvckJvdW5kcnk+XG5cdFx0XHQpO1xuXHRcdH1cblx0fVxuXG5leHBvcnQgZGVmYXVsdCB3aXRoTW9kdWxlOyIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgTG9hZGFibGUgZnJvbSAncmVhY3QtbG9hZGFibGUnO1xuaW1wb3J0IExvYWRpbmcgZnJvbSAnY29yZS9jb21wb25lbnRzL2xvYWRpbmcnO1xuaW1wb3J0IEFwcCBcdFx0ZnJvbSAnam1hcnJveWF2ZS9jb21wb25lbnRzL3V4aS9jb3JlL3BhZ2UvYXBwJztcbmltcG9ydCBBcHBCb2R5IFx0ZnJvbSAnam1hcnJveWF2ZS9jb21wb25lbnRzL3V4aS9jb3JlL3BhZ2UvYm9keSc7XG5cbmNvbnN0IEhvbWVQcm94eSA9IExvYWRhYmxlKHtcbiAgbG9hZGVyOiAoKSA9PiBpbXBvcnQoJ2ptYXJyb3lhdmUvY29tcG9uZW50cy91eGkvY3YvbGF5b3V0L2xheW91dC1wcm94eScpLFxuICBsb2FkaW5nOiBMb2FkaW5nLFxufSk7XG5cbmNsYXNzIFBhZ2UgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuXHRjb25zdHJ1Y3Rvcihwcm9wcyxjb250ZXh0KSB7XG5cdFx0c3VwZXIocHJvcHMsY29udGV4dCk7XG5cdFx0dGhpcy5hcGkgPSB3aW5kb3cuX19hcGk7XG5cdH1cblxuXHRjb21wb25lbnREaWRNb3VudCgpe1xuXHR9XG5cblx0cmVuZGVyKCl7XG5cdFx0Y29uc3QgYXBwID0gdGhpcy5wcm9wcy5hcHA7XG5cdFx0dmFyIGtleSA9IDA7XG5cdFx0cmV0dXJuIChcblx0XHRcdDxBcHAgcm91dGVyPXt0aGlzLnByb3BzLnJvdXRlcn0gYXBwPXt0aGlzLnByb3BzLmFwcH0+XG5cdFx0XHRcdDxBcHBCb2R5IHBhdGg9e1t7dGV4dDogJ2hvbWUnLCByb3V0ZTogJy8nfV19IGFwcD17dGhpcy5wcm9wcy5hcHB9IGRhdGE9e3tob21lOiB0aGlzLnByb3BzLnBhZ2V9fT5cblx0XHRcdFx0XHQ8SG9tZVByb3h5IGRhdGE9e3RoaXMucHJvcHMucGFnZS5kYXRhfS8+XG5cdFx0XHRcdDwvQXBwQm9keT5cblx0XHRcdDwvQXBwPlxuXHRcdCk7XG5cdH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgUGFnZTsiLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IEVycm9yQm91bmRyeSBmcm9tICdjb3JlL2NvbXBvbmVudHMvZXJyb3InO1xuXG5jbGFzcyBDb21wb25lbnQgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuXHRyZW5kZXIoKXtcblx0XHRjb25zdCB0aXRsZSA9ICh0aGlzLnByb3BzLnRpdGxlICYmIHRoaXMucHJvcHMudGl0bGUgIT09IFwiXCIpID8gdGhpcy5wcm9wcy50aXRsZSA6IG51bGw7XG5cdFx0Y29uc3QgY2hpbGRyZW4gPSAoXCJjb250cm9sXCIgaW4gdGhpcy5wcm9wcykgPyB0aGlzLnByb3BzLmNvbnRyb2wgOiB0aGlzLnByb3BzLmNoaWxkcmVuO1xuXHRcdGNvbnN0IHZpc2libGUgPSAoXCJjb250cm9sXCIgaW4gdGhpcy5wcm9wcyAmJiB0aGlzLnByb3BzLmNvbnRyb2wgPT0gbnVsbCkgPyBmYWxzZSA6IHRydWU7XG5cdFx0Y29uc3QgcGFkZGluZ1RvcCA9IChcInBhZGRpbmdUb3BcIiBpbiB0aGlzLnByb3BzKSA/IHRoaXMucHJvcHMucGFkZGluZ1RvcCA6ICc3cHgnO1xuXHRcdGNvbnN0IGNsZWFuID0gKFwiY2xlYW5cIiBpbiB0aGlzLnByb3BzKSA/IHRydWUgOiBmYWxzZTtcblx0XHR2YXIgYm9yZGVyQm90dG9tID0gJzFweCBzb2xpZCAjZWVlJztcblxuXHRcdGlmKCF2aXNpYmxlKSByZXR1cm4gbnVsbDtcblx0XHRpZihjbGVhbikgcmV0dXJuIGNoaWxkcmVuO1xuIFxuXHRcdHZhciBrZXkgPSAwO1x0XHRcblx0XHRyZXR1cm4gKFxuXHRcdFx0PGRpdiBjbGFzc05hbWU9J21vZC1ibG9jaycgc3R5bGU9e3tib3JkZXJCb3R0b206IGJvcmRlckJvdHRvbSwgYmFja2dyb3VuZENvbG9yOiAnd2hpdGUnLCBwYWRkaW5nOiAnN3B4JywgcGFkZGluZ1RvcDogcGFkZGluZ1RvcH19PlxuXHRcdFx0XHR7dGl0bGUgJiYgPGgxPnt0aXRsZX08L2gxPn1cblx0XHRcdFx0PGRpdiBjbGFzc05hbWU9J2JvZHknPlxuXHRcdFx0XHRcdDxFcnJvckJvdW5kcnkgZnJvbT17dGl0bGV9PlxuXHRcdFx0XHRcdFx0e2NoaWxkcmVufVxuXHRcdFx0XHRcdDwvRXJyb3JCb3VuZHJ5PlxuXHRcdFx0XHQ8L2Rpdj5cblx0XHRcdDwvZGl2PlxuXHRcdCk7XG5cdH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgKENvbXBvbmVudCk7IiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBMb2FkYWJsZSBmcm9tICdyZWFjdC1sb2FkYWJsZSc7XG5pbXBvcnQgTG9hZGluZyBmcm9tICdjb3JlL2NvbXBvbmVudHMvbG9hZGluZyc7XG5pbXBvcnQgQXBwIFx0XHRmcm9tICdqbWFycm95YXZlL2NvbXBvbmVudHMvdXhpL2NvcmUvcGFnZS9hcHAnO1xuaW1wb3J0IEFwcEJvZHkgXHRmcm9tICdqbWFycm95YXZlL2NvbXBvbmVudHMvdXhpL2NvcmUvcGFnZS9ib2R5JztcblxuY29uc3QgSG9tZVByb3h5ID0gTG9hZGFibGUoe1xuICBsb2FkZXI6ICgpID0+IGltcG9ydCgnam1hcnJveWF2ZS9jb21wb25lbnRzL3V4aS9ob21lL2xheW91dC9ob21lLWxheW91dC1wcm94eScpLFxuICBsb2FkaW5nOiBMb2FkaW5nLFxufSk7XG5cbmNsYXNzIFBhZ2UgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuXHRjb25zdHJ1Y3Rvcihwcm9wcyxjb250ZXh0KSB7XG5cdFx0c3VwZXIocHJvcHMsY29udGV4dCk7XG5cdFx0dGhpcy5hcGkgPSB3aW5kb3cuX19hcGk7XG5cdH1cblxuXHRjb21wb25lbnREaWRNb3VudCgpe1xuXHR9XG5cblx0cmVuZGVyKCl7XG5cdFx0Y29uc3QgYXBwID0gdGhpcy5wcm9wcy5hcHA7XG5cdFx0dmFyIGtleSA9IDA7XG5cdFx0cmV0dXJuIChcblx0XHRcdDxBcHAgcm91dGVyPXt0aGlzLnByb3BzLnJvdXRlcn0gYXBwPXthcHB9PlxuXHRcdFx0XHQ8QXBwQm9keSBwYXRoPXtbe3RleHQ6ICdob21lJywgcm91dGU6ICcvJ31dfSBhcHA9e2FwcH0gZGF0YT17dGhpcy5wcm9wcy5wYWdlfT5cblx0XHRcdFx0XHQ8SG9tZVByb3h5IGRhdGE9e3RoaXMucHJvcHMucGFnZS5kYXRhfSB0cmVuZHM9e3RoaXMucHJvcHMucGFnZS50cmVuZHN9Lz5cblx0XHRcdFx0PC9BcHBCb2R5PlxuXHRcdFx0PC9BcHA+XG5cdFx0KTtcblx0fVxufVxuXG5leHBvcnQgZGVmYXVsdCBQYWdlOyIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgTG9hZGFibGUgZnJvbSAncmVhY3QtbG9hZGFibGUnO1xuaW1wb3J0IExvYWRpbmcgZnJvbSAnY29yZS9jb21wb25lbnRzL2xvYWRpbmcnO1xuaW1wb3J0IEFwcCBcdFx0ZnJvbSAnam1hcnJveWF2ZS9jb21wb25lbnRzL3V4aS9jb3JlL3BhZ2UvYXBwJztcbmltcG9ydCBBcHBCb2R5IFx0ZnJvbSAnam1hcnJveWF2ZS9jb21wb25lbnRzL3V4aS9jb3JlL3BhZ2UvYm9keSc7XG5cbmNvbnN0IEFuZHJvaWRQcm94eSA9IExvYWRhYmxlKHtcbiAgbG9hZGVyOiAoKSA9PiBpbXBvcnQoJ2ptYXJyb3lhdmUvY29tcG9uZW50cy91eGkva2IvYW5kcm9pZC9sYXlvdXQvbGF5b3V0LXByb3h5JyksXG4gIGxvYWRpbmc6IExvYWRpbmcsXG59KTtcblxuY2xhc3MgUGFnZSBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG5cdGNvbnN0cnVjdG9yKHByb3BzLGNvbnRleHQpIHtcblx0XHRzdXBlcihwcm9wcyxjb250ZXh0KTtcblx0XHR0aGlzLmFwaSA9IHdpbmRvdy5fX2FwaTtcblx0fVxuXG5cdGNvbXBvbmVudERpZE1vdW50KCl7XG5cdH1cblxuXHRyZW5kZXIoKXtcblx0XHRjb25zdCBhcHAgPSB0aGlzLnByb3BzLmFwcDtcblx0XHR2YXIga2V5ID0gMDtcblx0XHRyZXR1cm4gKFxuXHRcdFx0PEFwcCByb3V0ZXI9e3RoaXMucHJvcHMucm91dGVyfSBhcHA9e3RoaXMucHJvcHMuYXBwfT5cblx0XHRcdFx0PEFwcEJvZHkgcGF0aD17W3t0ZXh0OiAnaG9tZScsIHJvdXRlOiAnLyd9XX0gYXBwPXt0aGlzLnByb3BzLmFwcH0gZGF0YT17e2hvbWU6IHRoaXMucHJvcHMucGFnZX19PlxuXHRcdFx0XHRcdHsodGhpcy5wcm9wcy5jb21wb25lbnQgPT0gJ2FuZHJvaWQnKSA/IDxBbmRyb2lkUHJveHkgZGF0YT17dGhpcy5wcm9wcy5wYWdlLmRhdGF9Lz4gOiBcIlwifVxuXHRcdFx0XHQ8L0FwcEJvZHk+XG5cdFx0XHQ8L0FwcD5cblx0XHQpO1xuXHR9XG59XG5cbmV4cG9ydCBkZWZhdWx0IFBhZ2U7IiwiaW1wb3J0IENvbmYgZnJvbSAnam1hcnJveWF2ZS9jb25mL3ZhbHVlcy9kZWZhdWx0JztcbmltcG9ydCBWZXJzaW9ucyBmcm9tICdqbWFycm95YXZlL2NvbmYvdmVyc2lvbnMnO1xuXG5jbGFzcyBDb25zdGFudHMge1xufVxuXG5Db25zdGFudHMuREVCVUcgPSBDb25mLkRFQlVHO1xuXG5Db25zdGFudHMuTE9DQUwgPSBDb25mLkxPQ0FMO1xuQ29uc3RhbnRzLlRJVExFID0gXCJKTUFycm95YXZlIC0gQ2llbmNpYXMgZGUgbGEgQ29tcHV0YWNpw7NuXCI7XG5Db25zdGFudHMuVkVSU0lPTiA9IENvbmYuVkVSU0lPTjtcblxuQ29uc3RhbnRzLk1FTlVfQkFSX0ZHX0NPTE9SID0gXCIjRkZGXCI7XG5Db25zdGFudHMuTUVOVV9CQVJfQkdfQ09MT1IgPSBcIiMzMzNcIjtcblxuQ29uc3RhbnRzLlVYSV9WRVJTSU9OUyA9IFZlcnNpb25zLkxPRztcblxuXG5Db25zdGFudHMuQ09NX0NVUlJFTlQgPSBDb25zdGFudHMuVVhJX1ZFUlNJT05TLmZpbmQoKGl0ZW0pID0+IChpdGVtLmlkID09IENvbmYuREVGQVVMVF9VWEkpID8gaXRlbSA6IG51bGwpO1xuXG5cbkNvbnN0YW50cy5DT01JRCA9IENvbnN0YW50cy5DT01fQ1VSUkVOVC5pZDtcbkNvbnN0YW50cy5DT01GID0gQ29uc3RhbnRzLkNPTV9DVVJSRU5ULmZhbWlseTtcbkNvbnN0YW50cy5DT01WID0gQ29uc3RhbnRzLkNPTV9DVVJSRU5ULnZlcnNpb247XG5cbkNvbnN0YW50cy5DT01fU1dJVENIID0gQ29uZi5DT01fU1dJVENIO1xuXG5leHBvcnQgZGVmYXVsdCAoQ29uc3RhbnRzKTsiLCJpbXBvcnQgQmxhbmtDb21wb25lbnQgZnJvbSAnam1hcnJveWF2ZS9wYWdlcy9ibGFuayc7XG5pbXBvcnQgSG9tZUNvbXBvbmVudCBmcm9tICdqbWFycm95YXZlL3BhZ2VzL2hvbWUnO1xuaW1wb3J0IEJsb2dDb21wb25lbnQgZnJvbSAnam1hcnJveWF2ZS9wYWdlcy9ibG9nJztcbmltcG9ydCBMYWJzQ29tcG9uZW50IGZyb20gJ2ptYXJyb3lhdmUvcGFnZXMvbGFicyc7XG5pbXBvcnQgQmxvZ1Bvc3RDb21wb25lbnQgZnJvbSAnam1hcnJveWF2ZS9wYWdlcy9ibG9nX3Bvc3QnO1xuaW1wb3J0IFByb2plY3RDb21wb25lbnQgZnJvbSAnam1hcnJveWF2ZS9wYWdlcy9sYWJzX3Byb2plY3QnO1xuaW1wb3J0IENWQ29tcG9uZW50IGZyb20gJ2ptYXJyb3lhdmUvcGFnZXMvY3YnO1xuaW1wb3J0IEtCQ29tcG9uZW50IGZyb20gJ2ptYXJyb3lhdmUvcGFnZXMva2InO1xuaW1wb3J0IEtCUG9zdENvbXBvbmVudCBmcm9tICdqbWFycm95YXZlL3BhZ2VzL2tiX3Bvc3QnO1xuaW1wb3J0IEtCUG9zdEFuZHJvaWRDb21wb25lbnQgZnJvbSAnam1hcnJveWF2ZS9wYWdlcy9rYl9wb3N0X2FuZHJvaWQnO1xuXG5jbGFzcyBOYXZpZ2F0aW9uIHtcbiAgY29uc3RydWN0b3IoKXtcbiAgICB0aGlzLm9wdGlvbnMgPSBbXG5cdFx0e1xuXHRcdFx0c2hvd0luTWVudTogdHJ1ZSwgXG5cdFx0XHRuYW1lOiAnSG9tZScsIFxuXHRcdFx0aWNvbjogbnVsbCwgXG5cdFx0XHRyb3V0ZTogJy8nLCBcblx0XHRcdGNvbXBvbmVudDogSG9tZUNvbXBvbmVudFxuXHRcdH0sXG5cdFx0e1xuXHRcdFx0c2hvd0luTWVudTogdHJ1ZSwgXG5cdFx0XHRuYW1lOiAnQmxvZycsIFxuXHRcdFx0aWNvbjogbnVsbCwgXG5cdFx0XHRyb3V0ZTogJy9ibG9nJywgXG5cdFx0XHRjb21wb25lbnQ6IEJsb2dDb21wb25lbnRcblx0XHR9LFxuXHRcdHtcblx0XHRcdHNob3dJbk1lbnU6IGZhbHNlLCBcblx0XHRcdG5hbWU6ICdCbG9nIFBvc3QnLCBcblx0XHRcdGljb246ICdibG9nJywgXG5cdFx0XHRyb3V0ZTogJy9ibG9nLzp5ZWFyLzptb250aC86ZGF5Lzpwb3N0JywgXG5cdFx0XHRjb21wb25lbnQ6IEJsb2dQb3N0Q29tcG9uZW50XG5cdFx0fSxcblx0XHR7XG5cdFx0XHRzaG93SW5NZW51OiB0cnVlLCBcblx0XHRcdG5hbWU6ICdLQicsIFxuXHRcdFx0aWNvbjogbnVsbCwgXG5cdFx0XHRyb3V0ZTogJy9rYicsIFxuXHRcdFx0Y29tcG9uZW50OiBLQkNvbXBvbmVudFxuXHRcdH0sXG5cdFx0e1xuXHRcdFx0c2hvd0luTWVudTogZmFsc2UsIFxuXHRcdFx0bmFtZTogJ0tCIFBvc3QgLSBBbmRyb2lkJywgXG5cdFx0XHRpY29uOiAnYmxvZycsIFxuXHRcdFx0cm91dGU6ICcva2IvYW5kcm9pZCcsIFxuXHRcdFx0Y29tcG9uZW50OiBLQlBvc3RBbmRyb2lkQ29tcG9uZW50XG5cdFx0fSxcblx0XHR7XG5cdFx0XHRzaG93SW5NZW51OiBmYWxzZSwgXG5cdFx0XHRuYW1lOiAnS0IgUG9zdCcsIFxuXHRcdFx0aWNvbjogJ2Jsb2cnLCBcblx0XHRcdHJvdXRlOiAnL2tiLzpwb3N0JywgXG5cdFx0XHRjb21wb25lbnQ6IEtCUG9zdENvbXBvbmVudFxuXHRcdH0sXG5cdFx0e1xuXHRcdFx0c2hvd0luTWVudTogdHJ1ZSwgXG5cdFx0XHRuYW1lOiAnTGFicycsIFxuXHRcdFx0aWNvbjogbnVsbCwgXG5cdFx0XHRyb3V0ZTogJy9sYWJzJywgXG5cdFx0XHRjb21wb25lbnQ6IExhYnNDb21wb25lbnRcblx0XHR9LFxuXHRcdHtcblx0XHRcdHNob3dJbk1lbnU6IGZhbHNlLCBcblx0XHRcdG5hbWU6ICdQcm9qZWN0JywgXG5cdFx0XHRpY29uOiAnYmxvZycsIFxuXHRcdFx0cm91dGU6ICcvbGFicy86cHJvamVjdCcsIFxuXHRcdFx0Y29tcG9uZW50OiBQcm9qZWN0Q29tcG9uZW50XG5cdFx0fSxcblx0XHR7XG5cdFx0XHRzaG93SW5NZW51OiB0cnVlLCBcblx0XHRcdG5hbWU6ICdBY2VyY2EnLCBcblx0XHRcdGljb246IG51bGwsIFxuXHRcdFx0cm91dGU6ICcvYWNlcmNhJywgXG5cdFx0XHRjb21wb25lbnQ6IENWQ29tcG9uZW50XG5cdFx0fSxcblx0XTtcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBOYXZpZ2F0aW9uOyIsImNsYXNzIENvbmYge1xufVxuXG5Db25mLlZFUlNJT04gPSBcIjAuMS4wXCI7XG5Db25mLkRFQlVHID0gZmFsc2U7XG5Db25mLkxPQ0FMID0gZmFsc2U7XG5Db25mLkNPTV9TV0lUQ0ggPSBmYWxzZTtcbkNvbmYuREVGQVVMVF9VWEkgPSAxO1xuXG5leHBvcnQgZGVmYXVsdCAoQ29uZik7IiwiaW1wb3J0IENvbmYgZnJvbSAnam1hcnJveWF2ZS9jb25mL3ZhbHVlcy9kZWZhdWx0JztcblxuY2xhc3MgVmVyc2lvbnMge1xufVxuXG4vKlxuLSAwLjEuMFxuXHQtIFxuKi9cblxuVmVyc2lvbnMuTE9HID0gW1xuXHR7aWQgOiAxLCBcdGZhbWlseTogJ21hdGVyaWFsJyxcdFx0XHR2ZXJzaW9uOiBbMCwxLDBdLCBcdFx0dmlzaWJsZTogdHJ1ZX0sXG5dXG5cbmV4cG9ydCBkZWZhdWx0IChWZXJzaW9ucyk7IiwiaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IFJvdXRlciwgaGFzaEhpc3RvcnksIFJvdXRlLCBMaW5rIH0gZnJvbSAncmVhY3Qtcm91dGVyJztcbmltcG9ydCB7cm9vdH0gZnJvbSAnYmFvYmFiLXJlYWN0L2hpZ2hlci1vcmRlcic7XG5pbXBvcnQgQVBJIGZyb20gJ2ptYXJyb3lhdmUvYXBwL2FwaSc7XG5pbXBvcnQgTkFWIGZyb20gJ2ptYXJyb3lhdmUvY29uZi9uYXZpZ2F0aW9uJztcbmltcG9ydCBFcnJvckJvdW5kcnkgZnJvbSAnY29yZS9jb21wb25lbnRzL2Vycm9yJztcblxuaW1wb3J0IHsgUHJvdmlkZXIgfSBmcm9tICdyZWFjdC1yZWR1eCc7XG5pbXBvcnQgeyBDb25maWd1cmVTdG9yZSB9IGZyb20gJ2ptYXJyb3lhdmUvYXBwL3JlZHV4L2NvbmZpZ3VyZVN0b3JlJztcblxuLy9pbXBvcnQgeyBUcmFuc2l0aW9uR3JvdXAsIENTU1RyYW5zaXRpb24gfSBmcm9tICdyZWFjdC10cmFuc2l0aW9uLWdyb3VwJztcbmltcG9ydCBcIi4vaW5kZXguc2Nzc1wiO1xuXG5jbGFzcyBJbmRleCBleHRlbmRzIENvbXBvbmVudCB7XG5cdGNvbnN0cnVjdG9yKHByb3BzKXtcblx0XHRzdXBlcihwcm9wcyk7XG5cdFx0dGhpcy5uYXZpZ2F0aW9uID0gbmV3IE5BVigpO1xuXHR9XG5cdHJlbmRlcigpIHtcblx0XHR2YXIga2V5ID0gMDtcblx0XHRyZXR1cm4gKFxuXHRcdFx0PEVycm9yQm91bmRyeSBmcm9tPVwiL2ptYXJyb3lhdmUvcm9vdFwiPlxuXHRcdFx0XHQ8UHJvdmlkZXIgc3RvcmU9e0NvbmZpZ3VyZVN0b3JlKCl9PlxuXHRcdFx0XHRcdDxSb3V0ZXIgaGlzdG9yeT17aGFzaEhpc3Rvcnl9PlxuXHRcdFx0XHRcdFx0e3RoaXMubmF2aWdhdGlvbi5vcHRpb25zLm1hcChyID0+IFxuXHRcdFx0XHRcdFx0XHQ8Um91dGUga2V5PXtrZXkrK30gcGF0aD17ci5yb3V0ZX0gY29tcG9uZW50PXtyLmNvbXBvbmVudH0vPlxuXHRcdFx0XHRcdFx0KX0gICAgICAgXG5cdFx0XHRcdFx0PC9Sb3V0ZXI+XG5cdFx0XHRcdDwvUHJvdmlkZXI+XG5cdFx0XHQ8L0Vycm9yQm91bmRyeT5cblx0XHQpO1xuXHR9XG59XG5cbmNvbnN0IFJvb3RlZEluZGV4ID0gcm9vdCh3aW5kb3cuX19zdGF0ZSwgSW5kZXgpO1xuZXhwb3J0IGRlZmF1bHQgUm9vdGVkSW5kZXg7IiwiXG52YXIgY29udGVudCA9IHJlcXVpcmUoXCIhIS4uLy4uLy4uLy4uLy4uLy4uLy4uL2ZyYW1ld29ya3Mvd2ViYXBwcy9zdGFydHVwL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2luZGV4LmpzIS4uLy4uLy4uLy4uLy4uLy4uLy4uL2ZyYW1ld29ya3Mvd2ViYXBwcy9zdGFydHVwL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9saWIvbG9hZGVyLmpzIS4vaW5kZXguc2Nzc1wiKTtcblxuaWYodHlwZW9mIGNvbnRlbnQgPT09ICdzdHJpbmcnKSBjb250ZW50ID0gW1ttb2R1bGUuaWQsIGNvbnRlbnQsICcnXV07XG5cbnZhciB0cmFuc2Zvcm07XG52YXIgaW5zZXJ0SW50bztcblxuXG5cbnZhciBvcHRpb25zID0ge1wiaG1yXCI6dHJ1ZX1cblxub3B0aW9ucy50cmFuc2Zvcm0gPSB0cmFuc2Zvcm1cbm9wdGlvbnMuaW5zZXJ0SW50byA9IHVuZGVmaW5lZDtcblxudmFyIHVwZGF0ZSA9IHJlcXVpcmUoXCIhLi4vLi4vLi4vLi4vLi4vLi4vLi4vZnJhbWV3b3Jrcy93ZWJhcHBzL3N0YXJ0dXAvbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9saWIvYWRkU3R5bGVzLmpzXCIpKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5pZihjb250ZW50LmxvY2FscykgbW9kdWxlLmV4cG9ydHMgPSBjb250ZW50LmxvY2FscztcblxuaWYobW9kdWxlLmhvdCkge1xuXHRtb2R1bGUuaG90LmFjY2VwdChcIiEhLi4vLi4vLi4vLi4vLi4vLi4vLi4vZnJhbWV3b3Jrcy93ZWJhcHBzL3N0YXJ0dXAvbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvaW5kZXguanMhLi4vLi4vLi4vLi4vLi4vLi4vLi4vZnJhbWV3b3Jrcy93ZWJhcHBzL3N0YXJ0dXAvbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2xpYi9sb2FkZXIuanMhLi9pbmRleC5zY3NzXCIsIGZ1bmN0aW9uKCkge1xuXHRcdHZhciBuZXdDb250ZW50ID0gcmVxdWlyZShcIiEhLi4vLi4vLi4vLi4vLi4vLi4vLi4vZnJhbWV3b3Jrcy93ZWJhcHBzL3N0YXJ0dXAvbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvaW5kZXguanMhLi4vLi4vLi4vLi4vLi4vLi4vLi4vZnJhbWV3b3Jrcy93ZWJhcHBzL3N0YXJ0dXAvbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2xpYi9sb2FkZXIuanMhLi9pbmRleC5zY3NzXCIpO1xuXG5cdFx0aWYodHlwZW9mIG5ld0NvbnRlbnQgPT09ICdzdHJpbmcnKSBuZXdDb250ZW50ID0gW1ttb2R1bGUuaWQsIG5ld0NvbnRlbnQsICcnXV07XG5cblx0XHR2YXIgbG9jYWxzID0gKGZ1bmN0aW9uKGEsIGIpIHtcblx0XHRcdHZhciBrZXksIGlkeCA9IDA7XG5cblx0XHRcdGZvcihrZXkgaW4gYSkge1xuXHRcdFx0XHRpZighYiB8fCBhW2tleV0gIT09IGJba2V5XSkgcmV0dXJuIGZhbHNlO1xuXHRcdFx0XHRpZHgrKztcblx0XHRcdH1cblxuXHRcdFx0Zm9yKGtleSBpbiBiKSBpZHgtLTtcblxuXHRcdFx0cmV0dXJuIGlkeCA9PT0gMDtcblx0XHR9KGNvbnRlbnQubG9jYWxzLCBuZXdDb250ZW50LmxvY2FscykpO1xuXG5cdFx0aWYoIWxvY2FscykgdGhyb3cgbmV3IEVycm9yKCdBYm9ydGluZyBDU1MgSE1SIGR1ZSB0byBjaGFuZ2VkIGNzcy1tb2R1bGVzIGxvY2Fscy4nKTtcblxuXHRcdHVwZGF0ZShuZXdDb250ZW50KTtcblx0fSk7XG5cblx0bW9kdWxlLmhvdC5kaXNwb3NlKGZ1bmN0aW9uKCkgeyB1cGRhdGUoKTsgfSk7XG59IiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IGJyYW5jaCB9IGZyb20gJ2Jhb2JhYi1yZWFjdC9oaWdoZXItb3JkZXInO1xuaW1wb3J0IHsgd2l0aFJvdXRlciB9IGZyb20gJ3JlYWN0LXJvdXRlci1kb20nXG5pbXBvcnQgQmxhbmsgZnJvbSAnam1hcnJveWF2ZS9jb21wb25lbnRzL3V4aS9ibGFuay9wYWdlJztcblxuY2xhc3MgUGFnZSBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG5cdGNvbnN0cnVjdG9yKHByb3BzLGNvbnRleHQpIHtcblx0XHRzdXBlcihwcm9wcyxjb250ZXh0KTtcblx0XHR0aGlzLmFwaSA9IHdpbmRvdy5fX2FwaTtcblx0fVxuXG5cdGNvbXBvbmVudERpZE1vdW50KCl7XG5cdH1cblxuXHRyZW5kZXIoKXtcblx0XHRyZXR1cm4gPEJsYW5rIHsuLi50aGlzLnByb3BzfS8+XG5cdH1cbn1cblxuUGFnZSA9IGJyYW5jaCh7XG5cdGFwcDogWydhcHAnXVxufSwgUGFnZSk7XG5cbndpdGhSb3V0ZXIoUGFnZSk7XG5leHBvcnQgZGVmYXVsdCBQYWdlOyIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBjb25uZWN0IH0gZnJvbSAncmVhY3QtcmVkdXgnO1xuaW1wb3J0IHticmFuY2h9IGZyb20gJ2Jhb2JhYi1yZWFjdC9oaWdoZXItb3JkZXInO1xuaW1wb3J0IHsgd2l0aFJvdXRlciB9IGZyb20gJ3JlYWN0LXJvdXRlci1kb20nXG5pbXBvcnQgUGFnZUNvbXBvbmVudCBmcm9tICdqbWFycm95YXZlL2NvbXBvbmVudHMvdXhpL2Jsb2cvcGFnZSc7XG5cbmNvbnN0IG1hcFN0YXRlVG9Qcm9wcyA9IHN0YXRlID0+IHtcbiAgcmV0dXJuIHtcbiAgICAvL21lZGlhOiBzdGF0ZS5tZWRpYSxcbiAgfVxufVxuXG5jb25zdCBtYXBEaXNwYXRjaFRvUHJvcHMgPSBkaXNwYXRjaCA9PiAoe1xufSk7XG5cbmNsYXNzIFBhZ2UgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuXHRjb25zdHJ1Y3Rvcihwcm9wcyxjb250ZXh0KSB7XG5cdFx0c3VwZXIocHJvcHMsY29udGV4dCk7XG5cdFx0dGhpcy5hcGkgPSB3aW5kb3cuX19hcGk7XG5cdFx0dGhpcy5hcmVhID0gXCJibG9nXCI7XG5cdH1cblxuXHRjb21wb25lbnREaWRNb3VudCgpe1xuXHRcdHRoaXMuYXBpLmdldEJsb2codGhpcy5hcmVhKTtcblx0fVxuXG5cdHJlbmRlcigpe1xuXHRcdGNvbnN0IHBhcmFtcyA9IHthcHA6IHRoaXMucHJvcHMuYXBwLCBwYWdlOiB0aGlzLnByb3BzLnBhZ2UsIHJvdXRlcjogdGhpcy5wcm9wcy5yb3V0ZXIsIGxvY2F0aW9uOiB0aGlzLnByb3BzLmxvY2F0aW9ufTtcblx0XHRyZXR1cm4gPFBhZ2VDb21wb25lbnQgey4uLnBhcmFtc30vPlxuXHR9XG59XG5cblBhZ2UgPSBicmFuY2goe1xuXHRhcHA6IFsnYXBwJ10sXG5cdHBhZ2U6IFsncGFnZXMnLCdibG9nJ10sXG59LCBQYWdlKTtcblxuUGFnZSA9IGNvbm5lY3QobWFwU3RhdGVUb1Byb3BzLCBtYXBEaXNwYXRjaFRvUHJvcHMpKFBhZ2UpO1xuXG53aXRoUm91dGVyKFBhZ2UpO1xuZXhwb3J0IGRlZmF1bHQgUGFnZTsiLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgY29ubmVjdCB9IGZyb20gJ3JlYWN0LXJlZHV4JztcbmltcG9ydCB7YnJhbmNofSBmcm9tICdiYW9iYWItcmVhY3QvaGlnaGVyLW9yZGVyJztcbmltcG9ydCB7IHdpdGhSb3V0ZXIgfSBmcm9tICdyZWFjdC1yb3V0ZXItZG9tJ1xuaW1wb3J0IFBhZ2VDb21wb25lbnQgZnJvbSAnam1hcnJveWF2ZS9jb21wb25lbnRzL3V4aS9ibG9nX3Bvc3QvcGFnZSc7XG5cbmNvbnN0IG1hcFN0YXRlVG9Qcm9wcyA9IHN0YXRlID0+IHtcbiAgcmV0dXJuIHtcbiAgICAvL21lZGlhOiBzdGF0ZS5tZWRpYSxcbiAgfVxufVxuXG5jb25zdCBtYXBEaXNwYXRjaFRvUHJvcHMgPSBkaXNwYXRjaCA9PiAoe1xufSk7XG5cbmNsYXNzIFBhZ2UgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuXHRjb25zdHJ1Y3Rvcihwcm9wcyxjb250ZXh0KSB7XG5cdFx0c3VwZXIocHJvcHMsY29udGV4dCk7XG5cdFx0dGhpcy5hcGkgPSB3aW5kb3cuX19hcGk7XG5cdH1cblxuXHRjb21wb25lbnREaWRNb3VudCgpe1xuXHRcdGNvbnN0IHBhcmFtcyA9IHRoaXMucHJvcHMucm91dGVyLnBhcmFtcztcblx0XHR0aGlzLmFwaS5nZXRQb3N0KFwiYmxvZ1wiLCBgJHtwYXJhbXMueWVhcn0tJHtwYXJhbXMubW9udGh9LSR7cGFyYW1zLmRheX0tJHtwYXJhbXMucG9zdH1gKTtcblx0fVxuXG5cdHJlbmRlcigpe1xuXHRcdGNvbnN0IHBhcmFtcyA9IHthcHA6IHRoaXMucHJvcHMuYXBwLCBwYWdlOiB0aGlzLnByb3BzLnBhZ2UsIHJvdXRlcjogdGhpcy5wcm9wcy5yb3V0ZXIsIGxvY2F0aW9uOiB0aGlzLnByb3BzLmxvY2F0aW9ufTtcblx0XHRyZXR1cm4gPFBhZ2VDb21wb25lbnQgey4uLnBhcmFtc30vPlxuXHR9XG59XG5cblBhZ2UgPSBicmFuY2goe1xuXHRhcHA6IFsnYXBwJ10sXG5cdHBhZ2U6IFsncGFnZXMnLCdwb3N0J10sXG59LCBQYWdlKTtcblxuUGFnZSA9IGNvbm5lY3QobWFwU3RhdGVUb1Byb3BzLCBtYXBEaXNwYXRjaFRvUHJvcHMpKFBhZ2UpO1xuXG53aXRoUm91dGVyKFBhZ2UpO1xuZXhwb3J0IGRlZmF1bHQgUGFnZTsiLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgY29ubmVjdCB9IGZyb20gJ3JlYWN0LXJlZHV4JztcbmltcG9ydCB7YnJhbmNofSBmcm9tICdiYW9iYWItcmVhY3QvaGlnaGVyLW9yZGVyJztcbmltcG9ydCB7IHdpdGhSb3V0ZXIgfSBmcm9tICdyZWFjdC1yb3V0ZXItZG9tJ1xuaW1wb3J0IFBhZ2VDb21wb25lbnQgZnJvbSAnam1hcnJveWF2ZS9jb21wb25lbnRzL3V4aS9jdi9wYWdlJztcblxuY29uc3QgbWFwU3RhdGVUb1Byb3BzID0gc3RhdGUgPT4ge1xuICByZXR1cm4ge1xuICAgIC8vbWVkaWE6IHN0YXRlLm1lZGlhLFxuICB9XG59XG5cbmNvbnN0IG1hcERpc3BhdGNoVG9Qcm9wcyA9IGRpc3BhdGNoID0+ICh7XG59KTtcblxuY2xhc3MgUGFnZSBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG5cdGNvbnN0cnVjdG9yKHByb3BzLGNvbnRleHQpIHtcblx0XHRzdXBlcihwcm9wcyxjb250ZXh0KTtcblx0XHR0aGlzLmFwaSA9IHdpbmRvdy5fX2FwaTtcblx0fVxuXG5cdGNvbXBvbmVudERpZE1vdW50KCl7XG5cdFx0dGhpcy5hcGkuZ2V0Q1YoKTtcblx0fVxuXG5cdHJlbmRlcigpe1xuXHRcdGNvbnN0IHBhcmFtcyA9IHthcHA6IHRoaXMucHJvcHMuYXBwLCBwYWdlOiB0aGlzLnByb3BzLnBhZ2UsIHJvdXRlcjogdGhpcy5wcm9wcy5yb3V0ZXIsIGxvY2F0aW9uOiB0aGlzLnByb3BzLmxvY2F0aW9ufTtcblx0XHRyZXR1cm4gPFBhZ2VDb21wb25lbnQgey4uLnBhcmFtc30vPlxuXHR9XG59XG5cblBhZ2UgPSBicmFuY2goe1xuXHRhcHA6IFsnYXBwJ10sXG5cdHBhZ2U6IFsncGFnZXMnLCdjdiddLFxufSwgUGFnZSk7XG5cblBhZ2UgPSBjb25uZWN0KG1hcFN0YXRlVG9Qcm9wcywgbWFwRGlzcGF0Y2hUb1Byb3BzKShQYWdlKTtcblxud2l0aFJvdXRlcihQYWdlKTtcbmV4cG9ydCBkZWZhdWx0IFBhZ2U7IiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IGNvbm5lY3QgfSBmcm9tICdyZWFjdC1yZWR1eCc7XG5pbXBvcnQge2JyYW5jaH0gZnJvbSAnYmFvYmFiLXJlYWN0L2hpZ2hlci1vcmRlcic7XG5pbXBvcnQgeyB3aXRoUm91dGVyIH0gZnJvbSAncmVhY3Qtcm91dGVyLWRvbSdcbmltcG9ydCBIb21lIGZyb20gJ2ptYXJyb3lhdmUvY29tcG9uZW50cy91eGkvaG9tZS9wYWdlJztcblxuY29uc3QgbWFwU3RhdGVUb1Byb3BzID0gc3RhdGUgPT4ge1xuICByZXR1cm4ge1xuICAgIC8vbWVkaWE6IHN0YXRlLm1lZGlhLFxuICB9XG59XG5cbmNvbnN0IG1hcERpc3BhdGNoVG9Qcm9wcyA9IGRpc3BhdGNoID0+ICh7XG59KTtcblxuY2xhc3MgUGFnZSBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG5cdGNvbnN0cnVjdG9yKHByb3BzLGNvbnRleHQpIHtcblx0XHRzdXBlcihwcm9wcyxjb250ZXh0KTtcblx0XHR0aGlzLmFwaSA9IHdpbmRvdy5fX2FwaTtcblx0fVxuXG5cdGNvbXBvbmVudERpZE1vdW50KCl7XG5cdFx0dGhpcy5hcGkuZ2V0SG9tZSgpO1xuXHRcdHRoaXMuYXBpLmdldFRyZW5kcygpO1xuXHR9XG5cblx0cmVuZGVyKCl7XG5cdFx0Y29uc3QgcGFyYW1zID0ge2FwcDogdGhpcy5wcm9wcy5hcHAsIHBhZ2U6IHRoaXMucHJvcHMucGFnZSwgcm91dGVyOiB0aGlzLnByb3BzLnJvdXRlciwgbG9jYXRpb246IHRoaXMucHJvcHMubG9jYXRpb259O1xuXHRcdHJldHVybiA8SG9tZSB7Li4ucGFyYW1zfS8+XG5cdH1cbn1cblxuUGFnZSA9IGJyYW5jaCh7XG5cdGFwcDogWydhcHAnXSxcblx0cGFnZTogWydwYWdlcycsJ2hvbWUnXSxcbn0sIFBhZ2UpO1xuXG5QYWdlID0gY29ubmVjdChtYXBTdGF0ZVRvUHJvcHMsIG1hcERpc3BhdGNoVG9Qcm9wcykoUGFnZSk7XG5cbndpdGhSb3V0ZXIoUGFnZSk7XG5leHBvcnQgZGVmYXVsdCBQYWdlOyIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBjb25uZWN0IH0gZnJvbSAncmVhY3QtcmVkdXgnO1xuaW1wb3J0IHticmFuY2h9IGZyb20gJ2Jhb2JhYi1yZWFjdC9oaWdoZXItb3JkZXInO1xuaW1wb3J0IHsgd2l0aFJvdXRlciB9IGZyb20gJ3JlYWN0LXJvdXRlci1kb20nXG5pbXBvcnQgUGFnZUNvbXBvbmVudCBmcm9tICdqbWFycm95YXZlL2NvbXBvbmVudHMvdXhpL2Jsb2cvcGFnZSc7XG5cbmNvbnN0IG1hcFN0YXRlVG9Qcm9wcyA9IHN0YXRlID0+IHtcbiAgcmV0dXJuIHtcbiAgICAvL21lZGlhOiBzdGF0ZS5tZWRpYSxcbiAgfVxufVxuXG5jb25zdCBtYXBEaXNwYXRjaFRvUHJvcHMgPSBkaXNwYXRjaCA9PiAoe1xufSk7XG5cbmNsYXNzIFBhZ2UgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuXHRjb25zdHJ1Y3Rvcihwcm9wcyxjb250ZXh0KSB7XG5cdFx0c3VwZXIocHJvcHMsY29udGV4dCk7XG5cdFx0dGhpcy5hcGkgPSB3aW5kb3cuX19hcGk7XG5cdFx0dGhpcy5hcmVhID0gXCJrYlwiO1xuXHR9XG5cblx0Y29tcG9uZW50RGlkTW91bnQoKXtcblx0XHR0aGlzLmFwaS5nZXRCbG9nKHRoaXMuYXJlYSk7XG5cdH1cblxuXHRyZW5kZXIoKXtcblx0XHRjb25zdCBwYXJhbXMgPSB7YXBwOiB0aGlzLnByb3BzLmFwcCwgcGFnZTogdGhpcy5wcm9wcy5wYWdlLCByb3V0ZXI6IHRoaXMucHJvcHMucm91dGVyLCBsb2NhdGlvbjogdGhpcy5wcm9wcy5sb2NhdGlvbn07XG5cdFx0cmV0dXJuIDxQYWdlQ29tcG9uZW50IHsuLi5wYXJhbXN9Lz5cblx0fVxufVxuXG5QYWdlID0gYnJhbmNoKHtcblx0YXBwOiBbJ2FwcCddLFxuXHRwYWdlOiBbJ3BhZ2VzJywnYmxvZyddLFxufSwgUGFnZSk7XG5cblBhZ2UgPSBjb25uZWN0KG1hcFN0YXRlVG9Qcm9wcywgbWFwRGlzcGF0Y2hUb1Byb3BzKShQYWdlKTtcblxud2l0aFJvdXRlcihQYWdlKTtcbmV4cG9ydCBkZWZhdWx0IFBhZ2U7IiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IGNvbm5lY3QgfSBmcm9tICdyZWFjdC1yZWR1eCc7XG5pbXBvcnQge2JyYW5jaH0gZnJvbSAnYmFvYmFiLXJlYWN0L2hpZ2hlci1vcmRlcic7XG5pbXBvcnQgeyB3aXRoUm91dGVyIH0gZnJvbSAncmVhY3Qtcm91dGVyLWRvbSdcbmltcG9ydCBQYWdlQ29tcG9uZW50IGZyb20gJ2ptYXJyb3lhdmUvY29tcG9uZW50cy91eGkvYmxvZ19wb3N0L3BhZ2UnO1xuXG5jb25zdCBtYXBTdGF0ZVRvUHJvcHMgPSBzdGF0ZSA9PiB7XG4gIHJldHVybiB7XG4gICAgLy9tZWRpYTogc3RhdGUubWVkaWEsXG4gIH1cbn1cblxuY29uc3QgbWFwRGlzcGF0Y2hUb1Byb3BzID0gZGlzcGF0Y2ggPT4gKHtcbn0pO1xuXG5jbGFzcyBQYWdlIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcblx0Y29uc3RydWN0b3IocHJvcHMsY29udGV4dCkge1xuXHRcdHN1cGVyKHByb3BzLGNvbnRleHQpO1xuXHRcdHRoaXMuYXBpID0gd2luZG93Ll9fYXBpO1xuXHR9XG5cblx0Y29tcG9uZW50RGlkTW91bnQoKXtcblx0XHRjb25zdCBwYXJhbXMgPSB0aGlzLnByb3BzLnJvdXRlci5wYXJhbXM7XG5cdFx0dGhpcy5hcGkuZ2V0UG9zdChcImtiXCIsIGBrYi0ke3BhcmFtcy5wb3N0fWApO1xuXHR9XG5cblx0cmVuZGVyKCl7XG5cdFx0Y29uc3QgcGFyYW1zID0ge2FwcDogdGhpcy5wcm9wcy5hcHAsIHBhZ2U6IHRoaXMucHJvcHMucGFnZSwgcm91dGVyOiB0aGlzLnByb3BzLnJvdXRlciwgbG9jYXRpb246IHRoaXMucHJvcHMubG9jYXRpb259O1xuXHRcdHJldHVybiA8UGFnZUNvbXBvbmVudCB7Li4ucGFyYW1zfS8+XG5cdH1cbn1cblxuUGFnZSA9IGJyYW5jaCh7XG5cdGFwcDogWydhcHAnXSxcblx0cGFnZTogWydwYWdlcycsJ3Bvc3QnXSxcbn0sIFBhZ2UpO1xuXG5QYWdlID0gY29ubmVjdChtYXBTdGF0ZVRvUHJvcHMsIG1hcERpc3BhdGNoVG9Qcm9wcykoUGFnZSk7XG5cbndpdGhSb3V0ZXIoUGFnZSk7XG5leHBvcnQgZGVmYXVsdCBQYWdlOyIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBjb25uZWN0IH0gZnJvbSAncmVhY3QtcmVkdXgnO1xuaW1wb3J0IHticmFuY2h9IGZyb20gJ2Jhb2JhYi1yZWFjdC9oaWdoZXItb3JkZXInO1xuaW1wb3J0IHsgd2l0aFJvdXRlciB9IGZyb20gJ3JlYWN0LXJvdXRlci1kb20nXG5pbXBvcnQgUGFnZUNvbXBvbmVudCBmcm9tICdqbWFycm95YXZlL2NvbXBvbmVudHMvdXhpL2tiL3BhZ2UnO1xuXG5jb25zdCBtYXBTdGF0ZVRvUHJvcHMgPSBzdGF0ZSA9PiB7XG4gIHJldHVybiB7XG4gICAgLy9tZWRpYTogc3RhdGUubWVkaWEsXG4gIH1cbn1cblxuY29uc3QgbWFwRGlzcGF0Y2hUb1Byb3BzID0gZGlzcGF0Y2ggPT4gKHtcbn0pO1xuXG5jbGFzcyBQYWdlIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcblx0Y29uc3RydWN0b3IocHJvcHMsY29udGV4dCkge1xuXHRcdHN1cGVyKHByb3BzLGNvbnRleHQpO1xuXHRcdHRoaXMuYXBpID0gd2luZG93Ll9fYXBpO1xuXHR9XG5cblx0Y29tcG9uZW50RGlkTW91bnQoKXtcblx0XHR0aGlzLmFwaS5nZXRLQkFuZHJvaWRDYXRlZ29yaWVzKCk7XG5cdH1cblxuXHRyZW5kZXIoKXtcblx0XHRjb25zdCBwYXJhbXMgPSB7Y29tcG9uZW50OiAnYW5kcm9pZCcsIGFwcDogdGhpcy5wcm9wcy5hcHAsIHBhZ2U6IHRoaXMucHJvcHMucGFnZSwgcm91dGVyOiB0aGlzLnByb3BzLnJvdXRlciwgbG9jYXRpb246IHRoaXMucHJvcHMubG9jYXRpb259O1xuXHRcdHJldHVybiA8UGFnZUNvbXBvbmVudCB7Li4ucGFyYW1zfS8+XG5cdH1cbn1cblxuUGFnZSA9IGJyYW5jaCh7XG5cdGFwcDogWydhcHAnXSxcblx0cGFnZTogWydwYWdlcycsJ2tiX2FuZHJvaWQnXSxcbn0sIFBhZ2UpO1xuXG5QYWdlID0gY29ubmVjdChtYXBTdGF0ZVRvUHJvcHMsIG1hcERpc3BhdGNoVG9Qcm9wcykoUGFnZSk7XG5cbndpdGhSb3V0ZXIoUGFnZSk7XG5leHBvcnQgZGVmYXVsdCBQYWdlOyIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBjb25uZWN0IH0gZnJvbSAncmVhY3QtcmVkdXgnO1xuaW1wb3J0IHticmFuY2h9IGZyb20gJ2Jhb2JhYi1yZWFjdC9oaWdoZXItb3JkZXInO1xuaW1wb3J0IHsgd2l0aFJvdXRlciB9IGZyb20gJ3JlYWN0LXJvdXRlci1kb20nXG5pbXBvcnQgUGFnZUNvbXBvbmVudCBmcm9tICdqbWFycm95YXZlL2NvbXBvbmVudHMvdXhpL2Jsb2cvcGFnZSc7XG5cbmNvbnN0IG1hcFN0YXRlVG9Qcm9wcyA9IHN0YXRlID0+IHtcbiAgcmV0dXJuIHtcbiAgICAvL21lZGlhOiBzdGF0ZS5tZWRpYSxcbiAgfVxufVxuXG5jb25zdCBtYXBEaXNwYXRjaFRvUHJvcHMgPSBkaXNwYXRjaCA9PiAoe1xufSk7XG5cbmNsYXNzIFBhZ2UgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuXHRjb25zdHJ1Y3Rvcihwcm9wcyxjb250ZXh0KSB7XG5cdFx0c3VwZXIocHJvcHMsY29udGV4dCk7XG5cdFx0dGhpcy5hcGkgPSB3aW5kb3cuX19hcGk7XG5cdFx0dGhpcy5hcmVhID0gXCJsYWJzXCI7XG5cdH1cblxuXHRjb21wb25lbnREaWRNb3VudCgpe1xuXHRcdHRoaXMuYXBpLmdldEJsb2codGhpcy5hcmVhKTtcblx0fVxuXG5cdHJlbmRlcigpe1xuXHRcdGNvbnN0IHBhcmFtcyA9IHthcHA6IHRoaXMucHJvcHMuYXBwLCBwYWdlOiB0aGlzLnByb3BzLnBhZ2UsIHJvdXRlcjogdGhpcy5wcm9wcy5yb3V0ZXIsIGxvY2F0aW9uOiB0aGlzLnByb3BzLmxvY2F0aW9ufTtcblx0XHRyZXR1cm4gPFBhZ2VDb21wb25lbnQgey4uLnBhcmFtc30vPlxuXHR9XG59XG5cblBhZ2UgPSBicmFuY2goe1xuXHRhcHA6IFsnYXBwJ10sXG5cdHBhZ2U6IFsncGFnZXMnLCdibG9nJ10sXG59LCBQYWdlKTtcblxuUGFnZSA9IGNvbm5lY3QobWFwU3RhdGVUb1Byb3BzLCBtYXBEaXNwYXRjaFRvUHJvcHMpKFBhZ2UpO1xuXG53aXRoUm91dGVyKFBhZ2UpO1xuZXhwb3J0IGRlZmF1bHQgUGFnZTsiLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgY29ubmVjdCB9IGZyb20gJ3JlYWN0LXJlZHV4JztcbmltcG9ydCB7YnJhbmNofSBmcm9tICdiYW9iYWItcmVhY3QvaGlnaGVyLW9yZGVyJztcbmltcG9ydCB7IHdpdGhSb3V0ZXIgfSBmcm9tICdyZWFjdC1yb3V0ZXItZG9tJ1xuaW1wb3J0IFBhZ2VDb21wb25lbnQgZnJvbSAnam1hcnJveWF2ZS9jb21wb25lbnRzL3V4aS9ibG9nX3Bvc3QvcGFnZSc7XG5cbmNvbnN0IG1hcFN0YXRlVG9Qcm9wcyA9IHN0YXRlID0+IHtcbiAgcmV0dXJuIHtcbiAgICAvL21lZGlhOiBzdGF0ZS5tZWRpYSxcbiAgfVxufVxuXG5jb25zdCBtYXBEaXNwYXRjaFRvUHJvcHMgPSBkaXNwYXRjaCA9PiAoe1xufSk7XG5cbmNsYXNzIFBhZ2UgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuXHRjb25zdHJ1Y3Rvcihwcm9wcyxjb250ZXh0KSB7XG5cdFx0c3VwZXIocHJvcHMsY29udGV4dCk7XG5cdFx0dGhpcy5hcGkgPSB3aW5kb3cuX19hcGk7XG5cdH1cblxuXHRjb21wb25lbnREaWRNb3VudCgpe1xuXHRcdGNvbnN0IHBhcmFtcyA9IHRoaXMucHJvcHMucm91dGVyLnBhcmFtcztcblx0XHR0aGlzLmFwaS5nZXRQb3N0KFwibGFic1wiLCBgbGFicy0ke3BhcmFtcy5wcm9qZWN0fWApO1xuXHR9XG5cblx0cmVuZGVyKCl7XG5cdFx0Y29uc3QgcGFyYW1zID0ge2FwcDogdGhpcy5wcm9wcy5hcHAsIHBhZ2U6IHRoaXMucHJvcHMucGFnZSwgcm91dGVyOiB0aGlzLnByb3BzLnJvdXRlciwgbG9jYXRpb246IHRoaXMucHJvcHMubG9jYXRpb259O1xuXHRcdHJldHVybiA8UGFnZUNvbXBvbmVudCB7Li4ucGFyYW1zfS8+XG5cdH1cbn1cblxuUGFnZSA9IGJyYW5jaCh7XG5cdGFwcDogWydhcHAnXSxcblx0cGFnZTogWydwYWdlcycsJ3Bvc3QnXSxcbn0sIFBhZ2UpO1xuXG5QYWdlID0gY29ubmVjdChtYXBTdGF0ZVRvUHJvcHMsIG1hcERpc3BhdGNoVG9Qcm9wcykoUGFnZSk7XG5cbndpdGhSb3V0ZXIoUGFnZSk7XG5leHBvcnQgZGVmYXVsdCBQYWdlOyIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcbmltcG9ydCAnLi9zb2NpYWxfbmV0d29ya3Muc2Nzcyc7XG5cbmNsYXNzIENvbXBvbmVudCBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gIHJlbmRlcigpIHtcbiAgICByZXR1cm4gKFxuXHQgIDxkaXYgY2xhc3NOYW1lPVwibW9kLXNvY2lhbC1pY29ucyBsYXlvdXQtYWxpZ24tY2VudGVyLWNlbnRlciBsYXlvdXQtY29sdW1uIGZsZXhcIj5cblx0ICAgIDxhIGhyZWY9XCJodHRwOi8vdHdpdHRlci5jb20vam1hcnJveWF2ZVwiPlxuXHRcdFx0XHQ8c3BhbiBjbGFzc05hbWU9XCJmYS1zdGFjayBmYS1sZ1wiPlxuXHRcdFx0XHQgIDxpIGNsYXNzTmFtZT1cImZhIGZhLXNxdWFyZS1vIGZhLXN0YWNrLTJ4XCI+PC9pPlxuXHRcdFx0XHQgIDxpIGNsYXNzTmFtZT1cImZhIGZhLXR3aXR0ZXIgZmEtc3RhY2stMXhcIiBzdHlsZT17e2NvbG9yOiAnIzAwYWNlZCd9fT48L2k+XG5cdFx0XHRcdDwvc3Bhbj5cblx0XHRcdDwvYT5cblx0ICAgIDxhIGhyZWY9XCJodHRwOi8vZmFjZWJvb2suY29tL2ptYXJyb3lhdmVcIj5cblx0XHRcdFx0PHNwYW4gY2xhc3NOYW1lPVwiZmEtc3RhY2sgZmEtbGdcIj5cblx0XHRcdFx0ICA8aSBjbGFzc05hbWU9XCJmYSBmYS1zcXVhcmUtbyBmYS1zdGFjay0yeFwiPjwvaT5cblx0XHRcdFx0ICA8aSBjbGFzc05hbWU9XCJmYSBmYS1mYWNlYm9vayBmYS1zdGFjay0xeFwiIHN0eWxlPXt7Y29sb3I6ICcjM2I1OTk4J319PjwvaT5cblx0XHRcdFx0PC9zcGFuPlx0ICAgIFxuXHRcdFx0PC9hPlxuXHQgICAgPGEgaHJlZj1cImh0dHA6Ly9ndC5saW5rZWRpbi5jb20vam1hcnJveWF2ZVwiPlxuXHRcdFx0XHQ8c3BhbiBjbGFzc05hbWU9XCJmYS1zdGFjayBmYS1sZ1wiPlxuXHRcdFx0XHQgIDxpIGNsYXNzTmFtZT1cImZhIGZhLXNxdWFyZS1vIGZhLXN0YWNrLTJ4XCI+PC9pPlxuXHRcdFx0XHQgIDxpIGNsYXNzTmFtZT1cImZhIGZhLWxpbmtlZGluIGZhLXN0YWNrLTF4XCIgc3R5bGU9e3tjb2xvcjogJyMwMDc3QjUnfX0+PC9pPlxuXHRcdFx0XHQ8L3NwYW4+XHQgICAgXG5cdFx0XHQ8L2E+XG5cdCAgICA8YSBocmVmPVwiaHR0cDovL3BsdXMuZ29vZ2xlLmNvbS8xMTI2MTg3MjA5NDU3NTk4MTkwMTdcIj5cblx0XHRcdFx0PHNwYW4gY2xhc3NOYW1lPVwiZmEtc3RhY2sgZmEtbGdcIj5cblx0XHRcdFx0ICA8aSBjbGFzc05hbWU9XCJmYSBmYS1zcXVhcmUtbyBmYS1zdGFjay0yeFwiPjwvaT5cblx0XHRcdFx0ICA8aSBjbGFzc05hbWU9XCJmYSBmYS1nb29nbGUtcGx1cyBmYS1zdGFjay0xeFwiIHN0eWxlPXt7Y29sb3I6ICcjZDM0ODM2J319PjwvaT5cblx0XHRcdFx0PC9zcGFuPlx0ICAgIFxuXHRcdFx0PC9hPlxuXHQgICAgPGEgaHJlZj1cImh0dHA6Ly9naXRodWIuY29tL2ptYXJyb3lhdmVcIj5cblx0XHRcdFx0PHNwYW4gY2xhc3NOYW1lPVwiZmEtc3RhY2sgZmEtbGdcIj5cblx0XHRcdFx0ICA8aSBjbGFzc05hbWU9XCJmYSBmYS1zcXVhcmUtbyBmYS1zdGFjay0yeFwiPjwvaT5cblx0XHRcdFx0ICA8aSBjbGFzc05hbWU9XCJmYSBmYS1naXRodWIgZmEtc3RhY2stMXhcIiBzdHlsZT17e2NvbG9yOiAnIzAwMCd9fT48L2k+XG5cdFx0XHRcdDwvc3Bhbj5cdCAgICBcblx0XHRcdDwvYT5cblx0ICAgIDxhIGhyZWY9XCJtYWlsdG86am1hcnJveWF2ZUBnbWFpbC5jb21cIiBjbGFzc05hbWU9J25vdC1yZWxlYXNlZCc+XG5cdFx0XHRcdDxzcGFuIGNsYXNzTmFtZT1cImZhLXN0YWNrIGZhLWxnXCI+XG5cdFx0XHRcdCAgPGkgY2xhc3NOYW1lPVwiZmEgZmEtc3F1YXJlLW8gZmEtc3RhY2stMnhcIj48L2k+XG5cdFx0XHRcdCAgPGkgY2xhc3NOYW1lPVwiZmEgZmEtZW52ZWxvcGUtbyBmYS1zdGFjay0xeFwiIHN0eWxlPXt7Y29sb3I6ICcjMDAwJ319PjwvaT5cblx0XHRcdFx0PC9zcGFuPlxuXHQgICAgPC9hPiAgICBcblx0ICA8L2Rpdj5cbiAgICApO1xuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IChDb21wb25lbnQpOyIsIlxudmFyIGNvbnRlbnQgPSByZXF1aXJlKFwiISEuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9mcmFtZXdvcmtzL3dlYmFwcHMvc3RhcnR1cC9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9pbmRleC5qcyEuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9mcmFtZXdvcmtzL3dlYmFwcHMvc3RhcnR1cC9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvbGliL2xvYWRlci5qcyEuL3NvY2lhbF9uZXR3b3Jrcy5zY3NzXCIpO1xuXG5pZih0eXBlb2YgY29udGVudCA9PT0gJ3N0cmluZycpIGNvbnRlbnQgPSBbW21vZHVsZS5pZCwgY29udGVudCwgJyddXTtcblxudmFyIHRyYW5zZm9ybTtcbnZhciBpbnNlcnRJbnRvO1xuXG5cblxudmFyIG9wdGlvbnMgPSB7XCJobXJcIjp0cnVlfVxuXG5vcHRpb25zLnRyYW5zZm9ybSA9IHRyYW5zZm9ybVxub3B0aW9ucy5pbnNlcnRJbnRvID0gdW5kZWZpbmVkO1xuXG52YXIgdXBkYXRlID0gcmVxdWlyZShcIiEuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9mcmFtZXdvcmtzL3dlYmFwcHMvc3RhcnR1cC9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2xpYi9hZGRTdHlsZXMuanNcIikoY29udGVudCwgb3B0aW9ucyk7XG5cbmlmKGNvbnRlbnQubG9jYWxzKSBtb2R1bGUuZXhwb3J0cyA9IGNvbnRlbnQubG9jYWxzO1xuXG5pZihtb2R1bGUuaG90KSB7XG5cdG1vZHVsZS5ob3QuYWNjZXB0KFwiISEuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9mcmFtZXdvcmtzL3dlYmFwcHMvc3RhcnR1cC9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9pbmRleC5qcyEuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9mcmFtZXdvcmtzL3dlYmFwcHMvc3RhcnR1cC9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvbGliL2xvYWRlci5qcyEuL3NvY2lhbF9uZXR3b3Jrcy5zY3NzXCIsIGZ1bmN0aW9uKCkge1xuXHRcdHZhciBuZXdDb250ZW50ID0gcmVxdWlyZShcIiEhLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vZnJhbWV3b3Jrcy93ZWJhcHBzL3N0YXJ0dXAvbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvaW5kZXguanMhLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vZnJhbWV3b3Jrcy93ZWJhcHBzL3N0YXJ0dXAvbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2xpYi9sb2FkZXIuanMhLi9zb2NpYWxfbmV0d29ya3Muc2Nzc1wiKTtcblxuXHRcdGlmKHR5cGVvZiBuZXdDb250ZW50ID09PSAnc3RyaW5nJykgbmV3Q29udGVudCA9IFtbbW9kdWxlLmlkLCBuZXdDb250ZW50LCAnJ11dO1xuXG5cdFx0dmFyIGxvY2FscyA9IChmdW5jdGlvbihhLCBiKSB7XG5cdFx0XHR2YXIga2V5LCBpZHggPSAwO1xuXG5cdFx0XHRmb3Ioa2V5IGluIGEpIHtcblx0XHRcdFx0aWYoIWIgfHwgYVtrZXldICE9PSBiW2tleV0pIHJldHVybiBmYWxzZTtcblx0XHRcdFx0aWR4Kys7XG5cdFx0XHR9XG5cblx0XHRcdGZvcihrZXkgaW4gYikgaWR4LS07XG5cblx0XHRcdHJldHVybiBpZHggPT09IDA7XG5cdFx0fShjb250ZW50LmxvY2FscywgbmV3Q29udGVudC5sb2NhbHMpKTtcblxuXHRcdGlmKCFsb2NhbHMpIHRocm93IG5ldyBFcnJvcignQWJvcnRpbmcgQ1NTIEhNUiBkdWUgdG8gY2hhbmdlZCBjc3MtbW9kdWxlcyBsb2NhbHMuJyk7XG5cblx0XHR1cGRhdGUobmV3Q29udGVudCk7XG5cdH0pO1xuXG5cdG1vZHVsZS5ob3QuZGlzcG9zZShmdW5jdGlvbigpIHsgdXBkYXRlKCk7IH0pO1xufSJdLCJzb3VyY2VSb290IjoiIn0=