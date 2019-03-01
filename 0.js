(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[0],{

/***/ "../../../../frameworks/webapps/startup/node_modules/css-loader/dist/cjs.js!../../../../frameworks/webapps/startup/node_modules/sass-loader/lib/loader.js!./src/jmarroyave/components/uxi/cv/latest_courses.scss":
/*!*************************************************************************************************************************************************************************************************************************************!*\
  !*** /media/jm/labs/dev/frameworks/webapps/startup/node_modules/css-loader/dist/cjs.js!/media/jm/labs/dev/frameworks/webapps/startup/node_modules/sass-loader/lib/loader.js!./src/jmarroyave/components/uxi/cv/latest_courses.scss ***!
  \*************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../../../../../../frameworks/webapps/startup/node_modules/css-loader/dist/runtime/api.js */ "../../../../frameworks/webapps/startup/node_modules/css-loader/dist/runtime/api.js")(false);
// Module
exports.push([module.i, ".mod-latest-courses {\n  padding-bottom: 30px; }\n\n.mod-latest-courses .course {\n  padding-bottom: 2em; }\n\n.mod-latest-courses .course .header .from {\n  font-size: 1.25em; }\n\n.mod-latest-courses .course .name {\n  font-size: 2.0em;\n  line-height: 1.25em; }\n\n.mod-latest-courses .course .platform {\n  font-size: 0.75em; }\n", ""]);



/***/ }),

/***/ "../../../../frameworks/webapps/startup/node_modules/css-loader/dist/cjs.js!../../../../frameworks/webapps/startup/node_modules/sass-loader/lib/loader.js!./src/jmarroyave/components/uxi/home/hero.scss":
/*!*****************************************************************************************************************************************************************************************************************************!*\
  !*** /media/jm/labs/dev/frameworks/webapps/startup/node_modules/css-loader/dist/cjs.js!/media/jm/labs/dev/frameworks/webapps/startup/node_modules/sass-loader/lib/loader.js!./src/jmarroyave/components/uxi/home/hero.scss ***!
  \*****************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../../../../../../frameworks/webapps/startup/node_modules/css-loader/dist/runtime/api.js */ "../../../../frameworks/webapps/startup/node_modules/css-loader/dist/runtime/api.js")(false);
// Module
exports.push([module.i, ".mod-hero {\n  text-align: center;\n  padding-top: 4em;\n  padding-bottom: 4em; }\n\n.mod-hero h1 {\n  font-size: 3em;\n  line-height: 1.25em; }\n\n.mod-hero h2 {\n  font-size: 1.25em;\n  line-height: 1.25em; }\n", ""]);



/***/ }),

/***/ "../../../../frameworks/webapps/startup/node_modules/css-loader/dist/cjs.js!../../../../frameworks/webapps/startup/node_modules/sass-loader/lib/loader.js!./src/jmarroyave/components/uxi/home/recent.scss":
/*!*******************************************************************************************************************************************************************************************************************************!*\
  !*** /media/jm/labs/dev/frameworks/webapps/startup/node_modules/css-loader/dist/cjs.js!/media/jm/labs/dev/frameworks/webapps/startup/node_modules/sass-loader/lib/loader.js!./src/jmarroyave/components/uxi/home/recent.scss ***!
  \*******************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../../../../../../frameworks/webapps/startup/node_modules/css-loader/dist/runtime/api.js */ "../../../../frameworks/webapps/startup/node_modules/css-loader/dist/runtime/api.js")(false);
// Module
exports.push([module.i, ".mod-recent {\n  text-align: center; }\n\n.mod-recent h1 {\n  font-size: 1.1em; }\n\n.mod-recent h2 {\n  font-size: 1em; }\n", ""]);



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

var _reactRouterDom = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/es/index.js");

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
      var lastUpdate = trends && trends.last_update ? new Date(trends.last_update) : "";
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

/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvam1hcnJveWF2ZS9jb21wb25lbnRzL3V4aS9jdi9sYXRlc3RfY291cnNlcy5zY3NzIiwid2VicGFjazovLy8uL3NyYy9qbWFycm95YXZlL2NvbXBvbmVudHMvdXhpL2hvbWUvaGVyby5zY3NzIiwid2VicGFjazovLy8uL3NyYy9qbWFycm95YXZlL2NvbXBvbmVudHMvdXhpL2hvbWUvcmVjZW50LnNjc3MiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvcmUvdWkvZGF0YS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvam1hcnJveWF2ZS9jb21wb25lbnRzL3V4aS9jdi9sYXRlc3RfY291cnNlcy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvam1hcnJveWF2ZS9jb21wb25lbnRzL3V4aS9jdi9sYXRlc3RfY291cnNlcy5zY3NzPzIxOWQiLCJ3ZWJwYWNrOi8vLy4vc3JjL2ptYXJyb3lhdmUvY29tcG9uZW50cy91eGkvaG9tZS9oZXJvLmpzIiwid2VicGFjazovLy8uL3NyYy9qbWFycm95YXZlL2NvbXBvbmVudHMvdXhpL2hvbWUvaGVyby5zY3NzPzNiY2EiLCJ3ZWJwYWNrOi8vLy4vc3JjL2ptYXJyb3lhdmUvY29tcG9uZW50cy91eGkvaG9tZS9sYXlvdXQvaG9tZS1sYXlvdXQtcHJveHkuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2ptYXJyb3lhdmUvY29tcG9uZW50cy91eGkvaG9tZS9sYXlvdXQvbGcvaG9tZS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvam1hcnJveWF2ZS9jb21wb25lbnRzL3V4aS9ob21lL3JlY2VudC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvam1hcnJveWF2ZS9jb21wb25lbnRzL3V4aS9ob21lL3JlY2VudC5zY3NzP2EzYmEiLCJ3ZWJwYWNrOi8vLy4vc3JjL2ptYXJyb3lhdmUvY29tcG9uZW50cy91eGkvaG9tZS9zb2Z0d2FyZV90cmVuZHMuanMiXSwibmFtZXMiOlsic3R5bGVzIiwidGhlbWUiLCJyb3ciLCJiYWNrZ3JvdW5kQ29sb3IiLCJwYWxldHRlIiwiYmFja2dyb3VuZCIsImRlZmF1bHQiLCJEYXRhIiwicHJvcHMiLCJoaWRkZW4iLCJoZWFkZXJzIiwiY2xhc3NlcyIsImRhdGEiLCJzdHlsZSIsImtleSIsImxlbmd0aCIsImhlYWRlcnNDb2xzIiwiT2JqZWN0Iiwia2V5cyIsIm1hcCIsIml0ZW0iLCJwYWRkaW5nIiwiY2VsbCIsImluZGV4T2YiLCJSZWFjdCIsIkNvbXBvbmVudCIsIkNvdXJzZSIsInBsYXRmb3JtIiwicmF0aW5nIiwibmFtZSIsImZyb20iLCJMYXRlc3RDb3Vyc2VzIiwic2xpY2UiLCJQYWdlQ29tcG9uZW50IiwicmVuZGVyRGVmYXVsdCIsInRyZW5kcyIsIndpZHRoIiwidGl0bGUiLCJjb250cm9sIiwiTW9kdWxlcyIsIlRyYW5zZmVycyIsIm1vZHMiLCJnZXRNb2R1bGVzIiwibW9kVGVzdCIsInJlY2VudCIsImNvdXJzZXMiLCJSZWNlbnRJdGVtIiwiYXJlYSIsInNsdWciLCJSZWNlbnRJdGVtcyIsIlNvZnR3YXJlVHJlbmQiLCJTb2Z0d2FyZVRyZW5kQ29tcG9uZW50Iiwid2luZG93IiwiX19hcGkiLCJnZXREYXRhIiwiaXRlbXMiLCJsYXN0VXBkYXRlIiwibGFzdF91cGRhdGUiLCJEYXRlIiwibGlzdCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQUEsMkJBQTJCLG1CQUFPLENBQUMsNkxBQW1HO0FBQ3RJO0FBQ0EsY0FBYyxRQUFTLHdCQUF3Qix5QkFBeUIsRUFBRSxpQ0FBaUMsd0JBQXdCLEVBQUUsK0NBQStDLHNCQUFzQixFQUFFLHVDQUF1QyxxQkFBcUIsd0JBQXdCLEVBQUUsMkNBQTJDLHNCQUFzQixFQUFFOzs7Ozs7Ozs7Ozs7O0FDRnJXLDJCQUEyQixtQkFBTyxDQUFDLDZMQUFtRztBQUN0STtBQUNBLGNBQWMsUUFBUyxjQUFjLHVCQUF1QixxQkFBcUIsd0JBQXdCLEVBQUUsa0JBQWtCLG1CQUFtQix3QkFBd0IsRUFBRSxrQkFBa0Isc0JBQXNCLHdCQUF3QixFQUFFOzs7Ozs7Ozs7Ozs7O0FD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Q0UsMkRBQWtCLDZCQUFDLGFBQUQ7QUFBVSxhQUFLLEVBQUUwQyxVQUFqQjtBQUE2QixZQUFJLEVBQUU7QUFBbkMsUUFBbEIsQ0FERixDQVhGLENBREY7QUFpQkQ7Ozs7RUExQmtDaEMsZUFBTUMsUzs7ZUE2QjVCLHdCQUFVMEIsc0JBQVYsQyIsImZpbGUiOiIwLmpzIiwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0cyA9IG1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL2ZyYW1ld29ya3Mvd2ViYXBwcy9zdGFydHVwL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIikoZmFsc2UpO1xuLy8gTW9kdWxlXG5leHBvcnRzLnB1c2goW21vZHVsZS5pZCwgXCIubW9kLWxhdGVzdC1jb3Vyc2VzIHtcXG4gIHBhZGRpbmctYm90dG9tOiAzMHB4OyB9XFxuXFxuLm1vZC1sYXRlc3QtY291cnNlcyAuY291cnNlIHtcXG4gIHBhZGRpbmctYm90dG9tOiAyZW07IH1cXG5cXG4ubW9kLWxhdGVzdC1jb3Vyc2VzIC5jb3Vyc2UgLmhlYWRlciAuZnJvbSB7XFxuICBmb250LXNpemU6IDEuMjVlbTsgfVxcblxcbi5tb2QtbGF0ZXN0LWNvdXJzZXMgLmNvdXJzZSAubmFtZSB7XFxuICBmb250LXNpemU6IDIuMGVtO1xcbiAgbGluZS1oZWlnaHQ6IDEuMjVlbTsgfVxcblxcbi5tb2QtbGF0ZXN0LWNvdXJzZXMgLmNvdXJzZSAucGxhdGZvcm0ge1xcbiAgZm9udC1zaXplOiAwLjc1ZW07IH1cXG5cIiwgXCJcIl0pO1xuXG4iLCJleHBvcnRzID0gbW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vZnJhbWV3b3Jrcy93ZWJhcHBzL3N0YXJ0dXAvbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiKShmYWxzZSk7XG4vLyBNb2R1bGVcbmV4cG9ydHMucHVzaChbbW9kdWxlLmlkLCBcIi5tb2QtaGVybyB7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICBwYWRkaW5nLXRvcDogNGVtO1xcbiAgcGFkZGluZy1ib3R0b206IDRlbTsgfVxcblxcbi5tb2QtaGVybyBoMSB7XFxuICBmb250LXNpemU6IDNlbTtcXG4gIGxpbmUtaGVpZ2h0OiAxLjI1ZW07IH1cXG5cXG4ubW9kLWhlcm8gaDIge1xcbiAgZm9udC1zaXplOiAxLjI1ZW07XFxuICBsaW5lLWhlaWdodDogMS4yNWVtOyB9XFxuXCIsIFwiXCJdKTtcblxuIiwiZXhwb3J0cyA9IG1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL2ZyYW1ld29ya3Mvd2ViYXBwcy9zdGFydHVwL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIikoZmFsc2UpO1xuLy8gTW9kdWxlXG5leHBvcnRzLnB1c2goW21vZHVsZS5pZCwgXCIubW9kLXJlY2VudCB7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7IH1cXG5cXG4ubW9kLXJlY2VudCBoMSB7XFxuICBmb250LXNpemU6IDEuMWVtOyB9XFxuXFxuLm1vZC1yZWNlbnQgaDIge1xcbiAgZm9udC1zaXplOiAxZW07IH1cXG5cIiwgXCJcIl0pO1xuXG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuXG5pbXBvcnQgeyB3aXRoU3R5bGVzIH0gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvc3R5bGVzJztcbmltcG9ydCBUYWJsZSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9UYWJsZSc7XG5pbXBvcnQgVGFibGVCb2R5IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL1RhYmxlQm9keSc7XG5pbXBvcnQgVGFibGVDZWxsIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL1RhYmxlQ2VsbCc7XG5pbXBvcnQgVGFibGVIZWFkIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL1RhYmxlSGVhZCc7XG5pbXBvcnQgVGFibGVSb3cgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvVGFibGVSb3cnO1xuXG5jb25zdCBzdHlsZXMgPSB0aGVtZSA9PiAoe1xuICByb3c6IHtcbiAgICAnJjpudGgtb2YtdHlwZShvZGQpJzoge1xuICAgICAgYmFja2dyb3VuZENvbG9yOiB0aGVtZS5wYWxldHRlLmJhY2tncm91bmQuZGVmYXVsdCxcbiAgICB9LFxuICB9LFxufSk7XG5cbmNsYXNzIERhdGEgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuXHRjb25zdHJ1Y3Rvcigpe1xuXHRcdHN1cGVyKCk7XG5cdH1cblxuICByZW5kZXIoKSB7XG4gIFx0dmFyIHsgaGlkZGVuLCBoZWFkZXJzLCBjbGFzc2VzLCBkYXRhLCBzdHlsZSB9ID0gdGhpcy5wcm9wcztcbiAgICB2YXIga2V5ID0gMDtcbiAgICBoZWFkZXJzID0gKGhlYWRlcnMgPT09IGZhbHNlKSA/IGhlYWRlcnMgOiB0cnVlO1xuICAgIGhpZGRlbiA9IChoaWRkZW4pID8gaGlkZGVuIDogW107XG5cbiAgICBpZighZGF0YSB8fCBkYXRhLmxlbmd0aCA9PT0gMCkgcmV0dXJuIDxkaXY+Tm8gZGF0YTwvZGl2PlxuXG4gICAgY29uc3QgaGVhZGVyc0NvbHMgPSBPYmplY3Qua2V5cyhkYXRhWzBdKTsgXG5cbiAgICAvL2NvbnNvbGUubG9nKGhpZGRlbiwgaGVhZGVyc0NvbHMpO1xuXG4gICAgcmV0dXJuIChcbiAgICBcdDxUYWJsZSBzdHlsZT17c3R5bGV9PlxuICAgICAgICB7aGVhZGVycyAmJlxuICAgICAgICAgIDxUYWJsZUhlYWQ+XG4gICAgICAgICAgICA8VGFibGVSb3c+XG4gICAgICAgICAgICAgIHtoZWFkZXJzQ29scy5tYXAoaXRlbSA9PlxuICAgICAgICAgICAgICAgIDxUYWJsZUNlbGwga2V5PXtrZXkrK30gc3R5bGU9e3twYWRkaW5nIDogJzRweCd9fT57aXRlbX08L1RhYmxlQ2VsbD5cbiAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgIDwvVGFibGVSb3c+XG4gICAgICAgICAgPC9UYWJsZUhlYWQ+XG4gICAgICAgIH1cbiAgICAgICAgPFRhYmxlQm9keT5cbiAgICAgICAgICB7ZGF0YS5tYXAocm93PT5cbiAgICAgICAgICAgIDxUYWJsZVJvdyBrZXk9e2tleSsrfSBjbGFzc05hbWU9e2NsYXNzZXMucm93fT5cbiAgICAgICAgICAgICAge2hlYWRlcnNDb2xzLm1hcChjZWxsPT5cbiAgICAgICAgICAgICAgICAoaGlkZGVuLmluZGV4T2YoY2VsbCkgPT09IC0xKSA/IDxUYWJsZUNlbGwgc3R5bGU9e3twYWRkaW5nIDogJzRweCd9fSBrZXk9e2tleSsrfT57cm93W2NlbGxdfTwvVGFibGVDZWxsPiA6IFwiXCJcbiAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgIDwvVGFibGVSb3c+XG4gICAgICAgICAgKX1cbiAgICAgICAgPC9UYWJsZUJvZHk+XG4gICAgXHQ8L1RhYmxlPlxuICAgICk7XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgd2l0aFN0eWxlcyhzdHlsZXMpKERhdGEpOyIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcbmltcG9ydCBDb21wb25lbnQgZnJvbSAnY29yZS9jb21wb25lbnRzL2NvbXBvbmVudCc7XG5pbXBvcnQgR3JpZENvbnRhaW5lciBmcm9tICdqbWFycm95YXZlL2NvbXBvbmVudHMvdXhpL2NvcmUvZ3JpZF9jb250YWluZXInO1xuaW1wb3J0IEdyaWRJdGVtIGZyb20gJ2ptYXJyb3lhdmUvY29tcG9uZW50cy91eGkvY29yZS9ncmlkX2l0ZW0nO1xuaW1wb3J0IFN0YXJSYXRpbmdzIGZyb20gJ3JlYWN0LXN0YXItcmF0aW5ncyc7XG5pbXBvcnQgXCIuL2xhdGVzdF9jb3Vyc2VzLnNjc3NcIjtcblxuZnVuY3Rpb24gQ291cnNlKHtkYXRhfSkge1xuICByZXR1cm4gKFxuICBcdDxHcmlkSXRlbSB4cz17MTJ9IHNtPXs2fSBtZD17NH0gIGNsYXNzTmFtZT0nY291cnNlJz5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPSdoZWFkZXInPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT0ncGxhdGZvcm0nPntkYXRhLnBsYXRmb3JtfTwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT0ncmF0aW5nJz48U3RhclJhdGluZ3MgcmF0aW5nPXtkYXRhLnJhdGluZ30gc3RhclJhdGVkQ29sb3I9XCIjMjIyXCIgbnVtYmVyT2ZTdGFycz17NX0gc3RhckRpbWVuc2lvbj0nOHB4JyBzdGFyU3BhY2luZz1cIjJweFwiLz48L2Rpdj5cbiAgICAgIDwvZGl2PlxuICBcdFx0PGRpdiBjbGFzc05hbWU9J25hbWUnPntkYXRhLm5hbWV9PC9kaXY+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT0nZnJvbSc+e2RhdGEuZnJvbX08L2Rpdj5cblx0ICA8L0dyaWRJdGVtPlxuICApO1xufVxuXG5jbGFzcyBMYXRlc3RDb3Vyc2VzIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgcmVuZGVyKCkge1xuICAgIHZhciBrZXkgPSAwO1xuICBcdGNvbnN0IGRhdGEgPSB0aGlzLnByb3BzLmRhdGE7XG4gICAgcmV0dXJuIChcbiAgICAgIDxHcmlkQ29udGFpbmVyIHNwYWNpbmc9ezh9IGNsYXNzTmFtZT0nbW9kLWxhdGVzdC1jb3Vyc2VzJz5cbiAgXHRcdHtkYXRhLnNsaWNlKDAsMykubWFwKChpdGVtKT0+XG5cdFx0XHRcdDxDb3Vyc2UgZGF0YT17aXRlbX0ga2V5PXtrZXkrK30vPlxuICBcdFx0KX1cbiAgICAgIDwvR3JpZENvbnRhaW5lcj5cbiAgICApO1xuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IENvbXBvbmVudChMYXRlc3RDb3Vyc2VzKTsiLCJcbnZhciBjb250ZW50ID0gcmVxdWlyZShcIiEhLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vZnJhbWV3b3Jrcy93ZWJhcHBzL3N0YXJ0dXAvbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vZnJhbWV3b3Jrcy93ZWJhcHBzL3N0YXJ0dXAvbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2xpYi9sb2FkZXIuanMhLi9sYXRlc3RfY291cnNlcy5zY3NzXCIpO1xuXG5pZih0eXBlb2YgY29udGVudCA9PT0gJ3N0cmluZycpIGNvbnRlbnQgPSBbW21vZHVsZS5pZCwgY29udGVudCwgJyddXTtcblxudmFyIHRyYW5zZm9ybTtcbnZhciBpbnNlcnRJbnRvO1xuXG5cblxudmFyIG9wdGlvbnMgPSB7XCJobXJcIjp0cnVlfVxuXG5vcHRpb25zLnRyYW5zZm9ybSA9IHRyYW5zZm9ybVxub3B0aW9ucy5pbnNlcnRJbnRvID0gdW5kZWZpbmVkO1xuXG52YXIgdXBkYXRlID0gcmVxdWlyZShcIiEuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9mcmFtZXdvcmtzL3dlYmFwcHMvc3RhcnR1cC9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2xpYi9hZGRTdHlsZXMuanNcIikoY29udGVudCwgb3B0aW9ucyk7XG5cbmlmKGNvbnRlbnQubG9jYWxzKSBtb2R1bGUuZXhwb3J0cyA9IGNvbnRlbnQubG9jYWxzO1xuXG5pZihtb2R1bGUuaG90KSB7XG5cdG1vZHVsZS5ob3QuYWNjZXB0KFwiISEuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9mcmFtZXdvcmtzL3dlYmFwcHMvc3RhcnR1cC9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9mcmFtZXdvcmtzL3dlYmFwcHMvc3RhcnR1cC9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvbGliL2xvYWRlci5qcyEuL2xhdGVzdF9jb3Vyc2VzLnNjc3NcIiwgZnVuY3Rpb24oKSB7XG5cdFx0dmFyIG5ld0NvbnRlbnQgPSByZXF1aXJlKFwiISEuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9mcmFtZXdvcmtzL3dlYmFwcHMvc3RhcnR1cC9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9mcmFtZXdvcmtzL3dlYmFwcHMvc3RhcnR1cC9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvbGliL2xvYWRlci5qcyEuL2xhdGVzdF9jb3Vyc2VzLnNjc3NcIik7XG5cblx0XHRpZih0eXBlb2YgbmV3Q29udGVudCA9PT0gJ3N0cmluZycpIG5ld0NvbnRlbnQgPSBbW21vZHVsZS5pZCwgbmV3Q29udGVudCwgJyddXTtcblxuXHRcdHZhciBsb2NhbHMgPSAoZnVuY3Rpb24oYSwgYikge1xuXHRcdFx0dmFyIGtleSwgaWR4ID0gMDtcblxuXHRcdFx0Zm9yKGtleSBpbiBhKSB7XG5cdFx0XHRcdGlmKCFiIHx8IGFba2V5XSAhPT0gYltrZXldKSByZXR1cm4gZmFsc2U7XG5cdFx0XHRcdGlkeCsrO1xuXHRcdFx0fVxuXG5cdFx0XHRmb3Ioa2V5IGluIGIpIGlkeC0tO1xuXG5cdFx0XHRyZXR1cm4gaWR4ID09PSAwO1xuXHRcdH0oY29udGVudC5sb2NhbHMsIG5ld0NvbnRlbnQubG9jYWxzKSk7XG5cblx0XHRpZighbG9jYWxzKSB0aHJvdyBuZXcgRXJyb3IoJ0Fib3J0aW5nIENTUyBITVIgZHVlIHRvIGNoYW5nZWQgY3NzLW1vZHVsZXMgbG9jYWxzLicpO1xuXG5cdFx0dXBkYXRlKG5ld0NvbnRlbnQpO1xuXHR9KTtcblxuXHRtb2R1bGUuaG90LmRpc3Bvc2UoZnVuY3Rpb24oKSB7IHVwZGF0ZSgpOyB9KTtcbn0iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5pbXBvcnQgJy4vaGVyby5zY3NzJztcblxuY2xhc3MgQ29tcG9uZW50IGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgcmVuZGVyKCkge1xuICAgIHJldHVybiAoXG4gICAgICA8ZGl2IGNsYXNzTmFtZT0nbW9kLWhlcm8nPlxuICAgICAgXHQ8aDE+Sm9zJmVhY3V0ZTsgTWlndWVsIEFycm95YXZlIE9jaG9hPC9oMT5cbiAgICAgIFx0PGgyPkNpZW5jaWFzIGRlIGxhIGNvbXB1dGFjaSZvYWN1dGU7bjwvaDI+XG4gICAgICA8L2Rpdj5cbiAgICApO1xuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IChDb21wb25lbnQpOyIsIlxudmFyIGNvbnRlbnQgPSByZXF1aXJlKFwiISEuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9mcmFtZXdvcmtzL3dlYmFwcHMvc3RhcnR1cC9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9mcmFtZXdvcmtzL3dlYmFwcHMvc3RhcnR1cC9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvbGliL2xvYWRlci5qcyEuL2hlcm8uc2Nzc1wiKTtcblxuaWYodHlwZW9mIGNvbnRlbnQgPT09ICdzdHJpbmcnKSBjb250ZW50ID0gW1ttb2R1bGUuaWQsIGNvbnRlbnQsICcnXV07XG5cbnZhciB0cmFuc2Zvcm07XG52YXIgaW5zZXJ0SW50bztcblxuXG5cbnZhciBvcHRpb25zID0ge1wiaG1yXCI6dHJ1ZX1cblxub3B0aW9ucy50cmFuc2Zvcm0gPSB0cmFuc2Zvcm1cbm9wdGlvbnMuaW5zZXJ0SW50byA9IHVuZGVmaW5lZDtcblxudmFyIHVwZGF0ZSA9IHJlcXVpcmUoXCIhLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vZnJhbWV3b3Jrcy93ZWJhcHBzL3N0YXJ0dXAvbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9saWIvYWRkU3R5bGVzLmpzXCIpKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5pZihjb250ZW50LmxvY2FscykgbW9kdWxlLmV4cG9ydHMgPSBjb250ZW50LmxvY2FscztcblxuaWYobW9kdWxlLmhvdCkge1xuXHRtb2R1bGUuaG90LmFjY2VwdChcIiEhLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vZnJhbWV3b3Jrcy93ZWJhcHBzL3N0YXJ0dXAvbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vZnJhbWV3b3Jrcy93ZWJhcHBzL3N0YXJ0dXAvbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2xpYi9sb2FkZXIuanMhLi9oZXJvLnNjc3NcIiwgZnVuY3Rpb24oKSB7XG5cdFx0dmFyIG5ld0NvbnRlbnQgPSByZXF1aXJlKFwiISEuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9mcmFtZXdvcmtzL3dlYmFwcHMvc3RhcnR1cC9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9mcmFtZXdvcmtzL3dlYmFwcHMvc3RhcnR1cC9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvbGliL2xvYWRlci5qcyEuL2hlcm8uc2Nzc1wiKTtcblxuXHRcdGlmKHR5cGVvZiBuZXdDb250ZW50ID09PSAnc3RyaW5nJykgbmV3Q29udGVudCA9IFtbbW9kdWxlLmlkLCBuZXdDb250ZW50LCAnJ11dO1xuXG5cdFx0dmFyIGxvY2FscyA9IChmdW5jdGlvbihhLCBiKSB7XG5cdFx0XHR2YXIga2V5LCBpZHggPSAwO1xuXG5cdFx0XHRmb3Ioa2V5IGluIGEpIHtcblx0XHRcdFx0aWYoIWIgfHwgYVtrZXldICE9PSBiW2tleV0pIHJldHVybiBmYWxzZTtcblx0XHRcdFx0aWR4Kys7XG5cdFx0XHR9XG5cblx0XHRcdGZvcihrZXkgaW4gYikgaWR4LS07XG5cblx0XHRcdHJldHVybiBpZHggPT09IDA7XG5cdFx0fShjb250ZW50LmxvY2FscywgbmV3Q29udGVudC5sb2NhbHMpKTtcblxuXHRcdGlmKCFsb2NhbHMpIHRocm93IG5ldyBFcnJvcignQWJvcnRpbmcgQ1NTIEhNUiBkdWUgdG8gY2hhbmdlZCBjc3MtbW9kdWxlcyBsb2NhbHMuJyk7XG5cblx0XHR1cGRhdGUobmV3Q29udGVudCk7XG5cdH0pO1xuXG5cdG1vZHVsZS5ob3QuZGlzcG9zZShmdW5jdGlvbigpIHsgdXBkYXRlKCk7IH0pO1xufSIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgSGlkZGVuIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL0hpZGRlbic7XG5pbXBvcnQgeyAgQnJvd3NlclZpZXcsICBNb2JpbGVWaWV3IH0gZnJvbSBcInJlYWN0LWRldmljZS1kZXRlY3RcIjtcbmltcG9ydCB3aXRoTW9kdWxlIGZyb20gJ2ptYXJyb3lhdmUvY29tcG9uZW50cy91eGkvY29yZS93aXRoLW1vZHVsZSc7XG5pbXBvcnQgSG9tZUxHIGZyb20gXCJqbWFycm95YXZlL2NvbXBvbmVudHMvdXhpL2hvbWUvbGF5b3V0L2xnL2hvbWVcIjtcblxuY2xhc3MgUGFnZUNvbXBvbmVudCBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG5cdHJlbmRlcigpe1xuXHRcdHJldHVybiB0aGlzLnJlbmRlckRlZmF1bHQoKTtcblx0fVxuXG5cdHJlbmRlckRlZmF1bHQoKXtcblx0XHRjb25zdCB7IGRhdGEsIHRyZW5kcyB9ID0gdGhpcy5wcm9wcztcblx0XHRyZXR1cm4gKFxuXHRcdFx0PGRpdiBzdHlsZT17e3dpZHRoOicxMDAlJ319Plx0XHRcdFx0XG4gICAgXHRcdFx0PEhvbWVMRyBkYXRhPXtkYXRhfSB0cmVuZHM9e3RyZW5kc30vPlxuXHRcdFx0PC9kaXY+XG5cdFx0KVx0XHRcblx0fVxuXG5cdHJlbmRlck11bHRpcGxlKCl7XG5cdFx0dmFyIGRhdGEgPSB0aGlzLnByb3BzLmRhdGE7XG5cdFx0cmV0dXJuIChcblx0XHRcdDxkaXYgc3R5bGU9e3t3aWR0aDonMTAwJSd9fT5cdFx0XHRcdFxuICAgICAgICBcdFx0PEhpZGRlbiBvbmx5PXtbJ3NtJywgJ21kJywgJ2xnJywgJ3hsJ119PlxuICAgICAgICBcdFx0XHRcblx0XHQgICAgICAgIDwvSGlkZGVuPlxuICAgICAgICBcdFx0PEhpZGRlbiBvbmx5PXtbJ3hzJywgJ21kJywgJ2xnJywgJ3hsJ119PlxuICAgICAgICBcdFx0XHRcblx0XHQgICAgICAgIDwvSGlkZGVuPlxuICAgICAgICBcdFx0PEhpZGRlbiBvbmx5PXtbJ3hzJywgJ3NtJ119PlxuICAgICAgICBcdFx0XHQ8SG9tZUxHIGRhdGE9e2RhdGF9Lz5cblx0XHQgICAgICAgIDwvSGlkZGVuPlxuXHRcdFx0PC9kaXY+XG5cdFx0KVxuXHR9XG59XG5cbmV4cG9ydCBkZWZhdWx0IHdpdGhNb2R1bGUoUGFnZUNvbXBvbmVudCk7IiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IExpbmsgfSBmcm9tICdyZWFjdC1yb3V0ZXItZG9tJ1xuaW1wb3J0IEdyaWRDb250YWluZXIgZnJvbSAnam1hcnJveWF2ZS9jb21wb25lbnRzL3V4aS9jb3JlL2dyaWRfY29udGFpbmVyJztcbmltcG9ydCBHcmlkSXRlbSBmcm9tICdqbWFycm95YXZlL2NvbXBvbmVudHMvdXhpL2NvcmUvZ3JpZF9pdGVtJztcbmltcG9ydCBIaWRkZW4gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvSGlkZGVuJztcbmltcG9ydCBNb2R1bGVzIGZyb20gJ2ptYXJyb3lhdmUvY29uZi9sYXlvdXQvbW9kdWxlcyc7XG5pbXBvcnQgd2l0aE1vZHVsZSBmcm9tICdqbWFycm95YXZlL2NvbXBvbmVudHMvdXhpL2NvcmUvd2l0aC1tb2R1bGUnO1xuaW1wb3J0IEJsb2NrIGZyb20gJ2ptYXJyb3lhdmUvY29tcG9uZW50cy91eGkvaG9tZS9ibG9jayc7XG5pbXBvcnQgTUJsb2NrIGZyb20gJ2NvcmUvY29tcG9uZW50cy9tb2NrdXAvYmxvY2snO1xuaW1wb3J0IFNlY3Rpb24gZnJvbSAnY29yZS9jb21wb25lbnRzL2xheW91dC9zZWN0aW9uJztcbmltcG9ydCBIZXJvIGZyb20gJ2ptYXJyb3lhdmUvY29tcG9uZW50cy91eGkvaG9tZS9oZXJvJztcbmltcG9ydCBSZWNlbnQgZnJvbSAnam1hcnJveWF2ZS9jb21wb25lbnRzL3V4aS9ob21lL3JlY2VudCc7XG5pbXBvcnQgU29mdHdhcmVUcmVuZHMgZnJvbSAnam1hcnJveWF2ZS9jb21wb25lbnRzL3V4aS9ob21lL3NvZnR3YXJlX3RyZW5kcyc7XG5pbXBvcnQgTGF0ZXN0Q291cnNlcyBmcm9tICdqbWFycm95YXZlL2NvbXBvbmVudHMvdXhpL2N2L2xhdGVzdF9jb3Vyc2VzJztcblxuY2xhc3MgUGFnZUNvbXBvbmVudCBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG5cdGdldE1vZHVsZXMoKXtcblx0XHR2YXIgZGF0YSA9IHRoaXMucHJvcHMuZGF0YTtcdFx0XG5cblx0XHRyZXR1cm4gW1xuXHRcdFx0e3RpdGxlOiBcIlRlc3RcIiwgXHRcdGNvbnRyb2w6IChNb2R1bGVzLlRyYW5zZmVycykgPyA8ZGl2PnRlc3Q8L2Rpdj4gOiBudWxsfSxcblx0XHRdO1xuXHR9XG5cblx0cmVuZGVyKCl7XG5cdFx0Y29uc3QgZGF0YSA9IHRoaXMucHJvcHMuZGF0YTtcdFx0XG5cdFx0Y29uc3QgdHJlbmRzID0gdGhpcy5wcm9wcy50cmVuZHM7XHRcdFxuXHRcdGNvbnN0IG1vZHMgPSB0aGlzLmdldE1vZHVsZXMoKTtcblx0XHRjb25zdCBtb2RUZXN0ID0gbW9kc1swXTtcblxuXHRcdGNvbnN0IHJlY2VudCA9IChkYXRhIT1udWxsKSA/IGRhdGEucmVjZW50IDogbnVsbFxuXHRcdGNvbnN0IGNvdXJzZXMgPSAoZGF0YSE9bnVsbCkgPyBkYXRhLmNvdXJzZXMgOiBudWxsXG5cdFx0cmV0dXJuIChcblx0XHRcdDxHcmlkQ29udGFpbmVyIGNsYXNzTmFtZT0nbW9kLXBhZ2UnPlxuXHRcdFx0XHQ8R3JpZEl0ZW0+XG5cdFx0XHRcdFx0PEdyaWRDb250YWluZXI+XG5cdFx0XHRcdFx0XHQ8R3JpZEl0ZW0+XG5cdFx0XHRcdFx0XHRcdDxTZWN0aW9uIGNvbG9yPXsnd2hpdGUnfT5cblx0XHRcdFx0XHRcdFx0XHQ8R3JpZENvbnRhaW5lciBzcGFjaW5nPXsxNn0+XG5cdFx0XHRcdFx0XHRcdFx0XHQ8R3JpZEl0ZW0+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdDxIZXJvLz5cblx0XHRcdFx0XHRcdFx0XHRcdFx0PFJlY2VudCBkYXRhPXtyZWNlbnR9Lz5cblx0XHRcdFx0XHRcdFx0XHRcdDwvR3JpZEl0ZW0+XG5cdFx0XHRcdFx0XHRcdFx0PC9HcmlkQ29udGFpbmVyPiBcblx0XHRcdFx0XHRcdFx0PC9TZWN0aW9uPlxuXHRcdFx0XHRcdFx0PC9HcmlkSXRlbT4gXG5cdFx0XHRcdFx0XHQ8R3JpZEl0ZW0+XG5cdFx0XHRcdFx0XHRcdDxTZWN0aW9uIGNvbG9yPXsnI2MwYzBjMCd9PlxuXHRcdFx0XHRcdFx0XHRcdDxoMT5MYWJzPC9oMT5cblx0XHRcdFx0XHRcdFx0XHQ8U29mdHdhcmVUcmVuZHMgZGF0YT17dHJlbmRzfS8+XG5cdFx0XHRcdFx0XHRcdDwvU2VjdGlvbj5cblx0XHRcdFx0XHRcdDwvR3JpZEl0ZW0+ICBcblx0XHRcdFx0XHRcdDxHcmlkSXRlbT5cblx0XHRcdFx0XHRcdFx0PFNlY3Rpb24gY29sb3I9eyd3aGl0ZSd9PlxuXHRcdFx0XHRcdFx0XHRcdDxoMT5lTGVhcm5pbmc8L2gxPlxuXHRcdFx0XHRcdFx0XHRcdDxMYXRlc3RDb3Vyc2VzIGRhdGE9e2NvdXJzZXN9Lz5cblx0XHRcdFx0XHRcdFx0PC9TZWN0aW9uPlxuXHRcdFx0XHRcdFx0PC9HcmlkSXRlbT4gIFxuXHRcdFx0XHRcdDwvR3JpZENvbnRhaW5lcj5cblx0XHRcdFx0PC9HcmlkSXRlbT5cblx0XHRcdDwvR3JpZENvbnRhaW5lcj5cblx0XHQpXG5cdH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgd2l0aE1vZHVsZShQYWdlQ29tcG9uZW50KTtcbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcbmltcG9ydCBDb21wb25lbnQgZnJvbSAnY29yZS9jb21wb25lbnRzL2NvbXBvbmVudCc7XG5pbXBvcnQgUG9zdExpbmsgZnJvbSAnam1hcnJveWF2ZS9jb21wb25lbnRzL2RhdGEvcG9zdF9saW5rJztcbmltcG9ydCBcIi4vcmVjZW50LnNjc3NcIjtcblxuZnVuY3Rpb24gUmVjZW50SXRlbSh7ZGF0YX0pe1xuXHRyZXR1cm4gKFxuXHRcdDxoMj48UG9zdExpbmsgY2F0ZWdvcnk9e2RhdGEuYXJlYX0gc2x1Zz17ZGF0YS5zbHVnfT57ZGF0YS50aXRsZX08L1Bvc3RMaW5rPjwvaDI+XG5cdClcbn1cblxuY2xhc3MgUmVjZW50SXRlbXMgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICByZW5kZXIoKSB7XG4gICAgdmFyIGtleSA9IDA7XG4gIFx0Y29uc3QgZGF0YSA9IHRoaXMucHJvcHMuZGF0YTtcbiAgICByZXR1cm4gKFxuICAgICAgPGRpdiBjbGFzc05hbWU9J21vZC1yZWNlbnQnPlxuICAgICAgXHQ8aDE+UmVjZW50PC9oMT5cbiAgICBcdFx0e2RhdGEubWFwKChpdGVtKT0+XG4gICAgXHRcdFx0PFJlY2VudEl0ZW0gZGF0YT17aXRlbX0ga2V5PXtrZXkrK30vPlxuICAgIFx0XHQpfVxuICAgICAgPC9kaXY+XG4gICAgKTtcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBDb21wb25lbnQoUmVjZW50SXRlbXMpOyIsIlxudmFyIGNvbnRlbnQgPSByZXF1aXJlKFwiISEuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9mcmFtZXdvcmtzL3dlYmFwcHMvc3RhcnR1cC9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9mcmFtZXdvcmtzL3dlYmFwcHMvc3RhcnR1cC9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvbGliL2xvYWRlci5qcyEuL3JlY2VudC5zY3NzXCIpO1xuXG5pZih0eXBlb2YgY29udGVudCA9PT0gJ3N0cmluZycpIGNvbnRlbnQgPSBbW21vZHVsZS5pZCwgY29udGVudCwgJyddXTtcblxudmFyIHRyYW5zZm9ybTtcbnZhciBpbnNlcnRJbnRvO1xuXG5cblxudmFyIG9wdGlvbnMgPSB7XCJobXJcIjp0cnVlfVxuXG5vcHRpb25zLnRyYW5zZm9ybSA9IHRyYW5zZm9ybVxub3B0aW9ucy5pbnNlcnRJbnRvID0gdW5kZWZpbmVkO1xuXG52YXIgdXBkYXRlID0gcmVxdWlyZShcIiEuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9mcmFtZXdvcmtzL3dlYmFwcHMvc3RhcnR1cC9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2xpYi9hZGRTdHlsZXMuanNcIikoY29udGVudCwgb3B0aW9ucyk7XG5cbmlmKGNvbnRlbnQubG9jYWxzKSBtb2R1bGUuZXhwb3J0cyA9IGNvbnRlbnQubG9jYWxzO1xuXG5pZihtb2R1bGUuaG90KSB7XG5cdG1vZHVsZS5ob3QuYWNjZXB0KFwiISEuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9mcmFtZXdvcmtzL3dlYmFwcHMvc3RhcnR1cC9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9mcmFtZXdvcmtzL3dlYmFwcHMvc3RhcnR1cC9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvbGliL2xvYWRlci5qcyEuL3JlY2VudC5zY3NzXCIsIGZ1bmN0aW9uKCkge1xuXHRcdHZhciBuZXdDb250ZW50ID0gcmVxdWlyZShcIiEhLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vZnJhbWV3b3Jrcy93ZWJhcHBzL3N0YXJ0dXAvbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vZnJhbWV3b3Jrcy93ZWJhcHBzL3N0YXJ0dXAvbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2xpYi9sb2FkZXIuanMhLi9yZWNlbnQuc2Nzc1wiKTtcblxuXHRcdGlmKHR5cGVvZiBuZXdDb250ZW50ID09PSAnc3RyaW5nJykgbmV3Q29udGVudCA9IFtbbW9kdWxlLmlkLCBuZXdDb250ZW50LCAnJ11dO1xuXG5cdFx0dmFyIGxvY2FscyA9IChmdW5jdGlvbihhLCBiKSB7XG5cdFx0XHR2YXIga2V5LCBpZHggPSAwO1xuXG5cdFx0XHRmb3Ioa2V5IGluIGEpIHtcblx0XHRcdFx0aWYoIWIgfHwgYVtrZXldICE9PSBiW2tleV0pIHJldHVybiBmYWxzZTtcblx0XHRcdFx0aWR4Kys7XG5cdFx0XHR9XG5cblx0XHRcdGZvcihrZXkgaW4gYikgaWR4LS07XG5cblx0XHRcdHJldHVybiBpZHggPT09IDA7XG5cdFx0fShjb250ZW50LmxvY2FscywgbmV3Q29udGVudC5sb2NhbHMpKTtcblxuXHRcdGlmKCFsb2NhbHMpIHRocm93IG5ldyBFcnJvcignQWJvcnRpbmcgQ1NTIEhNUiBkdWUgdG8gY2hhbmdlZCBjc3MtbW9kdWxlcyBsb2NhbHMuJyk7XG5cblx0XHR1cGRhdGUobmV3Q29udGVudCk7XG5cdH0pO1xuXG5cdG1vZHVsZS5ob3QuZGlzcG9zZShmdW5jdGlvbigpIHsgdXBkYXRlKCk7IH0pO1xufSIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcbmltcG9ydCBHcmlkQ29udGFpbmVyIGZyb20gJ2ptYXJyb3lhdmUvY29tcG9uZW50cy91eGkvY29yZS9ncmlkX2NvbnRhaW5lcic7XG5pbXBvcnQgR3JpZEl0ZW0gZnJvbSAnam1hcnJveWF2ZS9jb21wb25lbnRzL3V4aS9jb3JlL2dyaWRfaXRlbSc7XG5pbXBvcnQgTGluayBmcm9tICdjb3JlL3VpL2xpbmsnXG5pbXBvcnQgQ29tcG9uZW50IGZyb20gJ2NvcmUvY29tcG9uZW50cy9jb21wb25lbnQnO1xuaW1wb3J0IENvcmVEYXRlIGZyb20gJ2NvcmUvY29tcG9uZW50cy9kYXRlJztcbmltcG9ydCBEYXRhIGZyb20gJ2NvcmUvdWkvZGF0YSc7XG5pbXBvcnQgTG9hZGluZyBmcm9tICdjb3JlL3VpL2xvYWRpbmcnO1xuXG5mdW5jdGlvbiBTb2Z0d2FyZVRyZW5kKHtkYXRhfSkge1xuICBpZighZGF0YSkgcmV0dXJuIDxMb2FkaW5nLz47XG5cbiAgZGF0YSA9IGRhdGEuc2xpY2UoMCwxMCk7XG4gICAgcmV0dXJuIChcbiAgICAgIDxEYXRhIGhlYWRlcnM9e2ZhbHNlfSBoaWRkZW49e1tcImlkXCIsXCJ0b3RhbFwiLFwidHlwZVwiLCBcImljb25cIl19IGRhdGE9e2RhdGF9Lz5cbiAgICApO1xufVxuXG5jbGFzcyBTb2Z0d2FyZVRyZW5kQ29tcG9uZW50IGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgcmVuZGVyKCkge1xuICAgIHZhciB7IGRhdGEgfSA9IHRoaXMucHJvcHM7XG4gICAgdmFyIGtleSA9IDA7XG4gICAgXG4gICAgdmFyIHRyZW5kcyA9IHdpbmRvdy5fX2FwaS5nZXREYXRhKFsnaW5mbycsICd0cmVuZHMnXSk7XG4gICAgXG4gICAgY29uc3QgaXRlbXMgPSBbe3RpdGxlOiAnT1MnLCBrZXk6ICdvcyd9LHt0aXRsZTogJ0xlbmd1YWplcycsIGtleTogJ2xhbmcnfSx7dGl0bGU6ICdMaWJyZXJpYXMnLCBrZXk6ICdmdyd9LHt0aXRsZTogJ1NlcnZpY2lvcycsIGtleTogJ3NlcnZpY2VzJ31dO1xuICAgIGNvbnN0IGxhc3RVcGRhdGUgPSAodHJlbmRzICYmIHRyZW5kcy5sYXN0X3VwZGF0ZSkgPyBuZXcgRGF0ZSh0cmVuZHMubGFzdF91cGRhdGUpIDogXCJcIjtcbiAgICByZXR1cm4gKFxuICAgICAgPEdyaWRDb250YWluZXIgc3BhY2luZz17OH0+ICAgICAgIFxuICAgICAgICA8R3JpZEl0ZW0geHM9ezEyfT5cbiAgICAgICAgICA8aDI+U29mdHdhcmUgZW4gU3RhY2tvdmVyZmxvdzwvaDI+XG4gICAgICAgICAgPGRpdj50ZW5kZW5jaWFzIGVuIHVzbyBkZSBzb2Z0d2FyZSBwYXJhIGRlc2Fycm9sbG8gb2J0ZW5pZG8gZGUgbGFzIHByZWd1bnRhcyBkZSBsYSBjb211bmlkYWQgZGUgU3RhY2tvdmVyZmxvdy4gPExpbmsgdG89eydsYWJzL3N0YWNrb3ZlcmZsb3cnfT52ZXIgbcOhczwvTGluaz48L2Rpdj5cbiAgICAgICAgPC9HcmlkSXRlbT5cbiAgICAgICAge2l0ZW1zLm1hcChsaXN0ID0+XG4gICAgICAgICAgPEdyaWRJdGVtIHhzPXsxMn0gc209ezZ9IG1kPXszfSBrZXk9e2tleSsrfT5cbiAgICAgICAgICAgIDxoMT57bGlzdC50aXRsZX08L2gxPlxuICAgICAgICAgICAgPFNvZnR3YXJlVHJlbmQgZGF0YT17ZGF0YVtsaXN0LmtleV19Lz5cbiAgICAgICAgICA8L0dyaWRJdGVtPlxuICAgICAgICApfVxuICAgICAgICA8R3JpZEl0ZW0geHM9ezEyfT5cbiAgICAgICAgICA8ZGl2PkFjdHVhbGl6YWRvOiA8Q29yZURhdGUgdmFsdWU9e2xhc3RVcGRhdGV9IGxhbmc9eydlcyd9Lz48L2Rpdj5cbiAgICAgICAgPC9HcmlkSXRlbT5cbiAgICAgIDwvR3JpZENvbnRhaW5lcj4gICAgICAgXG4gICAgKTtcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBDb21wb25lbnQoU29mdHdhcmVUcmVuZENvbXBvbmVudCk7ICJdLCJzb3VyY2VSb290IjoiIn0=