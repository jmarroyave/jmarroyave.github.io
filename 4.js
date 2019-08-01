(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[4],{

/***/ "../../../../../../../../mnt/z/local/software/dev/webapps/app/react/node_modules/css-loader/index.js!../../../../../../../../mnt/z/local/software/dev/webapps/app/react/node_modules/sass-loader/lib/loader.js!./src/jmarroyave/components/uxi/blog/list.scss":
/*!*************************************************************************************************************************************************************************************************************!*\
  !*** /mnt/z/local/software/dev/webapps/app/react/node_modules/css-loader!/mnt/z/local/software/dev/webapps/app/react/node_modules/sass-loader/lib/loader.js!./src/jmarroyave/components/uxi/blog/list.scss ***!
  \*************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../../../../../../../../../../mnt/z/local/software/dev/webapps/app/react/node_modules/css-loader/lib/css-base.js */ "../../../../../../../../mnt/z/local/software/dev/webapps/app/react/node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".mod-blog-list {\n  padding: 4rem; }\n\n.mod-blog-list a {\n  padding: 0px;\n  margin: 0px; }\n\n.mod-blog-list h2 {\n  margin: 0.2rem 0; }\n\n.mod-blog-list .date span {\n  float: right;\n  font-size: 0.8rem !important; }\n\n.mod-blog-list .tags span {\n  font-size: 0.8rem !important;\n  padding: 0px;\n  margin: 0px; }\n", ""]);

// exports


/***/ }),

/***/ "../../../../../../../../mnt/z/local/software/dev/webapps/app/react/node_modules/css-loader/index.js!../../../../../../../../mnt/z/local/software/dev/webapps/app/react/node_modules/sass-loader/lib/loader.js!./src/jmarroyave/components/uxi/core/title.scss":
/*!**************************************************************************************************************************************************************************************************************!*\
  !*** /mnt/z/local/software/dev/webapps/app/react/node_modules/css-loader!/mnt/z/local/software/dev/webapps/app/react/node_modules/sass-loader/lib/loader.js!./src/jmarroyave/components/uxi/core/title.scss ***!
  \**************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../../../../../../../../../../mnt/z/local/software/dev/webapps/app/react/node_modules/css-loader/lib/css-base.js */ "../../../../../../../../mnt/z/local/software/dev/webapps/app/react/node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".mod-post-title .header2 {\n  height: 30vh;\n  background-color: #333;\n  padding: 1em;\n  color: white;\n  font-size: 1.5em;\n  line-height: 2rem; }\n\n.mod-post-title .header {\n  height: 30vh;\n  background-color: #333;\n  padding: 0;\n  color: white; }\n\n.mod-post-title .title {\n  min-height: 30vh;\n  background-color: #c0c0c0;\n  margin: -20vh 1em 0 1em;\n  border-radius: 0.5em; }\n\n.mod-post-title .title .parent {\n  display: table;\n  height: 100%;\n  width: 100%;\n  padding: 1rem; }\n\n.mod-post-title .title .container {\n  text-align: center;\n  display: table-cell;\n  vertical-align: middle;\n  padding: 0;\n  background-color: #fefefe;\n  color: #333;\n  font-size: 1.25em;\n  line-height: 1.5rem; }\n", ""]);

// exports


/***/ }),

/***/ "./src/core/components/date.js":
/*!*************************************!*\
  !*** ./src/core/components/date.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_components_ui_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core/components/ui_component */ "./src/core/components/ui_component.js");
/* harmony import */ var javascript_time_ago__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! javascript-time-ago */ "./node_modules/javascript-time-ago/index.js");
/* harmony import */ var javascript_time_ago_locale_en__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! javascript-time-ago/locale/en */ "./node_modules/javascript-time-ago/locale/en/index.js");
/* harmony import */ var javascript_time_ago_locale_en__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(javascript_time_ago_locale_en__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var javascript_time_ago_locale_es__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! javascript-time-ago/locale/es */ "./node_modules/javascript-time-ago/locale/es/index.js");
/* harmony import */ var javascript_time_ago_locale_es__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(javascript_time_ago_locale_es__WEBPACK_IMPORTED_MODULE_4__);
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
          javascript_time_ago__WEBPACK_IMPORTED_MODULE_2__["default"].addLocale(javascript_time_ago_locale_es__WEBPACK_IMPORTED_MODULE_4___default.a);
          timeAgo = new javascript_time_ago__WEBPACK_IMPORTED_MODULE_2__["default"]('es-US');
          break;

        default:
          javascript_time_ago__WEBPACK_IMPORTED_MODULE_2__["default"].addLocale(javascript_time_ago_locale_en__WEBPACK_IMPORTED_MODULE_3___default.a);
          timeAgo = new javascript_time_ago__WEBPACK_IMPORTED_MODULE_2__["default"]('en-US');
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

      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
        className: this.state.className
      }, str);
    }
  }]);

  return UIDate;
}(core_components_ui_component__WEBPACK_IMPORTED_MODULE_1__["default"]);

/* harmony default export */ __webpack_exports__["default"] = (UIDate);

/***/ }),

/***/ "./src/core/components/layout/section.js":
/*!***********************************************!*\
  !*** ./src/core/components/layout/section.js ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @material-ui/core/styles */ "./node_modules/@material-ui/core/styles/index.js");
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_1__);
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
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: classes.root,
        style: {
          backgroundColor: color
        }
      }, this.props.children);
    }
  }]);

  return LayoutSection;
}(react__WEBPACK_IMPORTED_MODULE_0___default.a.Component);

/* harmony default export */ __webpack_exports__["default"] = (Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_1__["withStyles"])(styles)(LayoutSection));

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
}(react__WEBPACK_IMPORTED_MODULE_0___default.a.Component);

/* harmony default export */ __webpack_exports__["default"] = (UIComponent);

/***/ }),

/***/ "./src/core/ui/list.js":
/*!*****************************!*\
  !*** ./src/core/ui/list.js ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_ui_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core/ui/link */ "./src/core/ui/link.js");
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/core/styles */ "./node_modules/@material-ui/core/styles/index.js");
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _material_ui_core_Avatar__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/core/Avatar */ "./node_modules/@material-ui/core/Avatar/index.js");
/* harmony import */ var _material_ui_core_Avatar__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Avatar__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _material_ui_core_List__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/core/List */ "./node_modules/@material-ui/core/List/index.js");
/* harmony import */ var _material_ui_core_List__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_List__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _material_ui_core_ListItem__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @material-ui/core/ListItem */ "./node_modules/@material-ui/core/ListItem/index.js");
/* harmony import */ var _material_ui_core_ListItem__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_ListItem__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _material_ui_core_ListItemAvatar__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @material-ui/core/ListItemAvatar */ "./node_modules/@material-ui/core/ListItemAvatar/index.js");
/* harmony import */ var _material_ui_core_ListItemAvatar__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_ListItemAvatar__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _material_ui_core_ListItemText__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @material-ui/core/ListItemText */ "./node_modules/@material-ui/core/ListItemText/index.js");
/* harmony import */ var _material_ui_core_ListItemText__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_ListItemText__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _material_ui_core_Divider__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @material-ui/core/Divider */ "./node_modules/@material-ui/core/Divider/index.js");
/* harmony import */ var _material_ui_core_Divider__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Divider__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var core_ui_placeholder__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! core/ui/placeholder */ "./src/core/ui/placeholder.js");
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { keys.push.apply(keys, Object.getOwnPropertySymbols(object)); } if (enumerableOnly) keys = keys.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { if (i % 2) { var source = arguments[i] != null ? arguments[i] : {}; ownKeys(source, true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(arguments[i])); } else { ownKeys(arguments[i]).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(arguments[i], key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

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
        backgroundColor: theme.palette.background["default"]
      }
    }
  };
};

function ListItem(_ref) {
  var item = _ref.item,
      button = _ref.button,
      avatarType = _ref.avatarType,
      avatarLambda = _ref.avatarLambda,
      primaryLambda = _ref.primaryLambda;
  avatarLambda = avatarLambda ? avatarLambda : function (item) {
    return item;
  };
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_ListItem__WEBPACK_IMPORTED_MODULE_5___default.a, {
    button: button
  }, avatarType !== false && (avatarType === "icon" || avatarType === "text" ? react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_ListItemAvatar__WEBPACK_IMPORTED_MODULE_6___default.a, null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Avatar__WEBPACK_IMPORTED_MODULE_3___default.a, null, avatarLambda(item))) : react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_ListItemAvatar__WEBPACK_IMPORTED_MODULE_6___default.a, null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Avatar__WEBPACK_IMPORTED_MODULE_3___default.a, {
    src: avatarLambda(item)
  }))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_ListItemText__WEBPACK_IMPORTED_MODULE_7___default.a, {
    primary: primaryLambda(item)
  }));
}

var List =
/*#__PURE__*/
function (_React$Component) {
  _inherits(List, _React$Component);

  function List() {
    _classCallCheck(this, List);

    return _possibleConstructorReturn(this, _getPrototypeOf(List).apply(this, arguments));
  }

  _createClass(List, [{
    key: "render",
    value: function render() {
      var _this = this;

      var _this$props = this.props,
          data = _this$props.data,
          primaryLambda = _this$props.primaryLambda,
          avatarLambda = _this$props.avatarLambda,
          avatarType = _this$props.avatarType,
          goToLambda = _this$props.goToLambda,
          maxItems = _this$props.maxItems,
          loading = _this$props.loading,
          noData = _this$props.noData,
          style = _this$props.style;
      var key = 0;
      data = data ? data.slice(0, maxItems) : [];
      maxItems = !maxItems || maxItems == 0 ? 10 : maxItems;
      noData = noData ? noData : "no items";
      if (loading === true) return this.renderLoading(maxItems, key, style);
      if (!data || data.length == 0) return this.renderNoItems(noData, style);
      style = style ? style : {};
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_List__WEBPACK_IMPORTED_MODULE_4___default.a, {
        style: _objectSpread({
          padding: 0,
          margin: 0
        }, style)
      }, data.map(function (item, idx) {
        return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
          key: key++
        }, goToLambda ? react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(core_ui_link__WEBPACK_IMPORTED_MODULE_1__["default"], {
          to: goToLambda(item)
        }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(ListItem, _extends({
          button: true,
          item: item
        }, _this.props))) : react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(ListItem, _extends({
          item: item
        }, _this.props)), key < data.length && react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Divider__WEBPACK_IMPORTED_MODULE_8___default.a, null));
      }));
    }
  }, {
    key: "renderLoading",
    value: function renderLoading(maxItems, key, style) {
      maxItems = maxItems == -1 ? 5 : maxItems;
      var data = [];

      for (var i = 0; i < maxItems; i++) {
        data.push(i);
      }

      var ph = this.renderPlaceholder();
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_List__WEBPACK_IMPORTED_MODULE_4___default.a, {
        style: style
      }, data.map(function (item, idx) {
        return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
          key: key++
        }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_ListItem__WEBPACK_IMPORTED_MODULE_5___default.a, null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_ListItemAvatar__WEBPACK_IMPORTED_MODULE_6___default.a, null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Avatar__WEBPACK_IMPORTED_MODULE_3___default.a, null, " ")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_ListItemText__WEBPACK_IMPORTED_MODULE_7___default.a, {
          primary: ph
        })), key < data.length && react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Divider__WEBPACK_IMPORTED_MODULE_8___default.a, null));
      }));
    }
  }, {
    key: "renderPlaceholder",
    value: function renderPlaceholder() {
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(core_ui_placeholder__WEBPACK_IMPORTED_MODULE_9__["default"], {
        data: [[["-", 220, 10]]]
      });
    }
  }, {
    key: "renderNoItems",
    value: function renderNoItems(noData, style) {
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_List__WEBPACK_IMPORTED_MODULE_4___default.a, {
        style: style
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_ListItem__WEBPACK_IMPORTED_MODULE_5___default.a, null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_ListItemText__WEBPACK_IMPORTED_MODULE_7___default.a, {
        primary: noData
      })));
    }
  }]);

  return List;
}(react__WEBPACK_IMPORTED_MODULE_0___default.a.Component);

/* harmony default export */ __webpack_exports__["default"] = (Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_2__["withStyles"])(styles)(List));

/***/ }),

/***/ "./src/core/ui/placeholder.js":
/*!************************************!*\
  !*** ./src/core/ui/placeholder.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_content_loader__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-content-loader */ "./node_modules/react-content-loader/dist/react-content-loader.es.js");
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }




var PH =
/*#__PURE__*/
function (_React$Component) {
  _inherits(PH, _React$Component);

  function PH() {
    _classCallCheck(this, PH);

    return _possibleConstructorReturn(this, _getPrototypeOf(PH).apply(this, arguments));
  }

  _createClass(PH, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          data = _this$props.data,
          spacing = _this$props.spacing;
      spacing = spacing ? parseInt(spacing) : 4;

      var _this$renderPlacehold = this.renderPlaceholders(data, spacing),
          height = _this$renderPlacehold.height,
          width = _this$renderPlacehold.width,
          phs = _this$renderPlacehold.phs;

      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_content_loader__WEBPACK_IMPORTED_MODULE_1__["default"], {
        height: height,
        width: width,
        speed: 2,
        primaryColor: "#f3f3f3",
        secondaryColor: "#bcbcbc"
      }, phs.map(function (item) {
        return item;
      }));
    }
  }, {
    key: "renderPlaceholders",
    value: function renderPlaceholders(data, spacing) {
      var height = 0;
      var width = 0;
      var ph,
          phs = [];
      var y = 0;

      var _ph;

      var key = 0;
      var padding = spacing;

      for (var i = 0; i < data.length; i++) {
        var row = data[i];
        var x = padding;

        for (var j = 0; j < row.length; j++) {
          ph = row[j];
          ph[1] = parseInt(ph[1]);
          ph[2] = parseInt(ph[2]);
          var pad = ph[3] ? ph[3] : 0;

          switch (ph[0]) {
            case "o":
              _ph = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("rect", {
                key: key++,
                x: x + pad,
                y: y,
                rx: "0",
                ry: "0",
                width: ph[1],
                height: ph[2]
              });
              break;

            case "-":
            default:
              _ph = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("rect", {
                key: key++,
                x: x + pad,
                y: y,
                rx: "0",
                ry: "0",
                width: ph[1],
                height: ph[2]
              });
              break;
          }

          x += ph[1] + padding;
          width = x > width ? x : width;
          phs.push(_ph);
        }

        y += ph[2] + (j + 1 < row.length ? padding : 0);
      }

      height = y;
      width = width;
      return {
        height: height,
        width: width,
        phs: phs
      };
    }
  }]);

  return PH;
}(react__WEBPACK_IMPORTED_MODULE_0___default.a.Component);

/* harmony default export */ __webpack_exports__["default"] = (PH);

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
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/es/index.js");
/* harmony import */ var core_components_with_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core/components/with-module */ "./src/core/components/with-module.js");
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
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Link"], {
        to: "".concat(slug)
      }, this.props.children);
    }
  }]);

  return PostLinkComponent;
}(react__WEBPACK_IMPORTED_MODULE_0___default.a.Component);

/* harmony default export */ __webpack_exports__["default"] = (Object(core_components_with_module__WEBPACK_IMPORTED_MODULE_2__["default"])(PostLinkComponent));

/***/ }),

/***/ "./src/jmarroyave/components/uxi/blog/layout/layout-proxy.js":
/*!*******************************************************************!*\
  !*** ./src/jmarroyave/components/uxi/blog/layout/layout-proxy.js ***!
  \*******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _material_ui_core_Hidden__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @material-ui/core/Hidden */ "./node_modules/@material-ui/core/Hidden/index.js");
/* harmony import */ var _material_ui_core_Hidden__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Hidden__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_device_detect__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-device-detect */ "./node_modules/react-device-detect/dist/index.js");
/* harmony import */ var react_device_detect__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_device_detect__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_components_with_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core/components/with-module */ "./src/core/components/with-module.js");
/* harmony import */ var jmarroyave_components_uxi_blog_layout_lg_page__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! jmarroyave/components/uxi/blog/layout/lg/page */ "./src/jmarroyave/components/uxi/blog/layout/lg/page.js");
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
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        style: {
          width: '100%'
        }
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(jmarroyave_components_uxi_blog_layout_lg_page__WEBPACK_IMPORTED_MODULE_4__["default"], {
        data: data,
        title: title
      }));
    }
  }, {
    key: "renderMultiple",
    value: function renderMultiple() {
      var data = this.props.data;
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        style: {
          width: '100%'
        }
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Hidden__WEBPACK_IMPORTED_MODULE_1___default.a, {
        only: ['sm', 'md', 'lg', 'xl']
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Hidden__WEBPACK_IMPORTED_MODULE_1___default.a, {
        only: ['xs', 'md', 'lg', 'xl']
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Hidden__WEBPACK_IMPORTED_MODULE_1___default.a, {
        only: ['xs', 'sm']
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(jmarroyave_components_uxi_blog_layout_lg_page__WEBPACK_IMPORTED_MODULE_4__["default"], {
        data: data
      })));
    }
  }]);

  return PageComponent;
}(react__WEBPACK_IMPORTED_MODULE_0___default.a.Component);

/* harmony default export */ __webpack_exports__["default"] = (Object(core_components_with_module__WEBPACK_IMPORTED_MODULE_3__["default"])(PageComponent));

/***/ }),

/***/ "./src/jmarroyave/components/uxi/blog/layout/lg/page.js":
/*!**************************************************************!*\
  !*** ./src/jmarroyave/components/uxi/blog/layout/lg/page.js ***!
  \**************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_ui_layout_grid_container__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core/ui/layout/grid_container */ "./src/core/ui/layout/grid_container.js");
/* harmony import */ var core_ui_layout_grid_item__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core/ui/layout/grid_item */ "./src/core/ui/layout/grid_item.js");
/* harmony import */ var _material_ui_core_Hidden__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/core/Hidden */ "./node_modules/@material-ui/core/Hidden/index.js");
/* harmony import */ var _material_ui_core_Hidden__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Hidden__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var jmarroyave_conf_layout_modules__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! jmarroyave/conf/layout/modules */ "./src/jmarroyave/conf/layout/modules.js");
/* harmony import */ var core_components_with_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! core/components/with-module */ "./src/core/components/with-module.js");
/* harmony import */ var jmarroyave_components_uxi_home_block__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! jmarroyave/components/uxi/home/block */ "./src/jmarroyave/components/uxi/home/block.js");
/* harmony import */ var core_components_mockup_block__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! core/components/mockup/block */ "./src/core/components/mockup/block.js");
/* harmony import */ var core_components_layout_section__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! core/components/layout/section */ "./src/core/components/layout/section.js");
/* harmony import */ var jmarroyave_components_uxi_blog_list__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! jmarroyave/components/uxi/blog/list */ "./src/jmarroyave/components/uxi/blog/list.js");
/* harmony import */ var jmarroyave_components_uxi_core_title__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! jmarroyave/components/uxi/core/title */ "./src/jmarroyave/components/uxi/core/title.js");
/* harmony import */ var core_ui_placeholder__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! core/ui/placeholder */ "./src/core/ui/placeholder.js");
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _objectDestructuringEmpty(obj) { if (obj == null) throw new TypeError("Cannot destructure undefined"); }














function PH(_ref) {
  _objectDestructuringEmpty(_ref);

  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(core_ui_placeholder__WEBPACK_IMPORTED_MODULE_11__["default"], {
    data: [[["-", "180", "15"]]]
  }));
}

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
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(core_ui_layout_grid_container__WEBPACK_IMPORTED_MODULE_1__["default"], {
        className: "blog-page"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(core_ui_layout_grid_item__WEBPACK_IMPORTED_MODULE_2__["default"], {
        fill: true
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(jmarroyave_components_uxi_core_title__WEBPACK_IMPORTED_MODULE_10__["default"], {
        title: this.renderTitle(title),
        loading: posts == null ? true : false,
        placeholder: react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(PH, null)
      })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(core_ui_layout_grid_item__WEBPACK_IMPORTED_MODULE_2__["default"], {
        fill: true
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(jmarroyave_components_uxi_blog_list__WEBPACK_IMPORTED_MODULE_9__["default"], {
        area: title,
        data: posts
      })));
    }
  }, {
    key: "renderTitle",
    value: function renderTitle(title) {
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h1", null, title));
    }
  }]);

  return PageComponent;
}(react__WEBPACK_IMPORTED_MODULE_0___default.a.Component);

/* harmony default export */ __webpack_exports__["default"] = (Object(core_components_with_module__WEBPACK_IMPORTED_MODULE_5__["default"])(PageComponent));

/***/ }),

/***/ "./src/jmarroyave/components/uxi/blog/list.js":
/*!****************************************************!*\
  !*** ./src/jmarroyave/components/uxi/blog/list.js ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var jmarroyave_components_data_post_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! jmarroyave/components/data/post_link */ "./src/jmarroyave/components/data/post_link.js");
/* harmony import */ var core_ui_layout_grid_container__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core/ui/layout/grid_container */ "./src/core/ui/layout/grid_container.js");
/* harmony import */ var core_ui_layout_grid_item__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core/ui/layout/grid_item */ "./src/core/ui/layout/grid_item.js");
/* harmony import */ var core_components_date__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! core/components/date */ "./src/core/components/date.js");
/* harmony import */ var core_ui_list__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! core/ui/list */ "./src/core/ui/list.js");
/* harmony import */ var _list_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./list.scss */ "./src/jmarroyave/components/uxi/blog/list.scss");
/* harmony import */ var _list_scss__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_list_scss__WEBPACK_IMPORTED_MODULE_6__);
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
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "date"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(core_components_date__WEBPACK_IMPORTED_MODULE_4__["default"], {
    value: data.date
  })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(jmarroyave_components_data_post_link__WEBPACK_IMPORTED_MODULE_1__["default"], {
    slug: data.slug
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h2", null, data.title)), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "excerpt"
  }, data.excerpt), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "tags"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", null, data.category), " ", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", null, "tags: ", data.tags)));
}

var Blog =
/*#__PURE__*/
function (_React$Component) {
  _inherits(Blog, _React$Component);

  function Blog() {
    _classCallCheck(this, Blog);

    return _possibleConstructorReturn(this, _getPrototypeOf(Blog).apply(this, arguments));
  }

  _createClass(Blog, [{
    key: "render",
    value: function render() {
      var data = this.props.data;
      var area = this.props.area;
      var key = 0;
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "mod-blog-list"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(core_ui_list__WEBPACK_IMPORTED_MODULE_5__["default"], {
        loading: data == null ? true : false,
        maxItems: 10,
        data: data,
        primaryLambda: function primaryLambda(item) {
          return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Post, {
            data: item
          });
        },
        avatarType: false
      }));
    }
  }]);

  return Blog;
}(react__WEBPACK_IMPORTED_MODULE_0___default.a.Component);

/* harmony default export */ __webpack_exports__["default"] = (Blog);

/***/ }),

/***/ "./src/jmarroyave/components/uxi/blog/list.scss":
/*!******************************************************!*\
  !*** ./src/jmarroyave/components/uxi/blog/list.scss ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../../../../../../../../../../mnt/z/local/software/dev/webapps/app/react/node_modules/css-loader!../../../../../../../../../../../../../mnt/z/local/software/dev/webapps/app/react/node_modules/sass-loader/lib/loader.js!./list.scss */ "../../../../../../../../mnt/z/local/software/dev/webapps/app/react/node_modules/css-loader/index.js!../../../../../../../../mnt/z/local/software/dev/webapps/app/react/node_modules/sass-loader/lib/loader.js!./src/jmarroyave/components/uxi/blog/list.scss");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../../../../../../../../../../../../mnt/z/local/software/dev/webapps/app/react/node_modules/style-loader/lib/addStyles.js */ "../../../../../../../../mnt/z/local/software/dev/webapps/app/react/node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ "./src/jmarroyave/components/uxi/core/title.js":
/*!*****************************************************!*\
  !*** ./src/jmarroyave/components/uxi/core/title.js ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_ui_layout_grid_container__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core/ui/layout/grid_container */ "./src/core/ui/layout/grid_container.js");
/* harmony import */ var core_ui_layout_grid_item__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core/ui/layout/grid_item */ "./src/core/ui/layout/grid_item.js");
/* harmony import */ var _title_scss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./title.scss */ "./src/jmarroyave/components/uxi/core/title.scss");
/* harmony import */ var _title_scss__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_title_scss__WEBPACK_IMPORTED_MODULE_3__);
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

  function Content() {
    _classCallCheck(this, Content);

    return _possibleConstructorReturn(this, _getPrototypeOf(Content).apply(this, arguments));
  }

  _createClass(Content, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          title = _this$props.title,
          loading = _this$props.loading,
          placeholder = _this$props.placeholder;
      loading = loading === true ? true : false;
      title = title ? title : react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null);
      placeholder = placeholder ? placeholder : react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null);
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(core_ui_layout_grid_container__WEBPACK_IMPORTED_MODULE_1__["default"], {
        className: "mod-post-title"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(core_ui_layout_grid_item__WEBPACK_IMPORTED_MODULE_2__["default"], {
        className: "header2",
        fill: true
      }, !loading ? this.renderContent(title) : placeholder));
    }
  }, {
    key: "render2",
    value: function render2() {
      var _this$props2 = this.props,
          title = _this$props2.title,
          loading = _this$props2.loading,
          placeholder = _this$props2.placeholder;
      loading = loading === true ? true : false;
      title = title ? title : react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null);
      placeholder = placeholder ? placeholder : react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null);
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(core_ui_layout_grid_container__WEBPACK_IMPORTED_MODULE_1__["default"], {
        className: "mod-post-title"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(core_ui_layout_grid_item__WEBPACK_IMPORTED_MODULE_2__["default"], {
        className: "header",
        fill: true
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(core_ui_layout_grid_item__WEBPACK_IMPORTED_MODULE_2__["default"], {
        className: "title",
        fill: true
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "parent"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "container"
      }, !loading ? this.renderContent(title) : placeholder))));
    }
  }, {
    key: "renderContent",
    value: function renderContent(title) {
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, title);
    }
  }]);

  return Content;
}(react__WEBPACK_IMPORTED_MODULE_0___default.a.Component);

/* harmony default export */ __webpack_exports__["default"] = (Content);

/***/ }),

/***/ "./src/jmarroyave/components/uxi/core/title.scss":
/*!*******************************************************!*\
  !*** ./src/jmarroyave/components/uxi/core/title.scss ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../../../../../../../../../../mnt/z/local/software/dev/webapps/app/react/node_modules/css-loader!../../../../../../../../../../../../../mnt/z/local/software/dev/webapps/app/react/node_modules/sass-loader/lib/loader.js!./title.scss */ "../../../../../../../../mnt/z/local/software/dev/webapps/app/react/node_modules/css-loader/index.js!../../../../../../../../mnt/z/local/software/dev/webapps/app/react/node_modules/sass-loader/lib/loader.js!./src/jmarroyave/components/uxi/core/title.scss");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../../../../../../../../../../../../mnt/z/local/software/dev/webapps/app/react/node_modules/style-loader/lib/addStyles.js */ "../../../../../../../../mnt/z/local/software/dev/webapps/app/react/node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

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
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "mod-block",
        style: {
          borderBottom: borderBottom,
          backgroundColor: 'white',
          padding: '7px',
          paddingTop: paddingTop
        }
      }, title && react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h1", null, title), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "body"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(core_components_error__WEBPACK_IMPORTED_MODULE_1__["default"], {
        from: title
      }, children)));
    }
  }]);

  return Component;
}(react__WEBPACK_IMPORTED_MODULE_0___default.a.Component);

/* harmony default export */ __webpack_exports__["default"] = (Component);

/***/ }),

/***/ "./src/jmarroyave/conf/layout/modules.js":
/*!***********************************************!*\
  !*** ./src/jmarroyave/conf/layout/modules.js ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Modules = function Modules() {
  _classCallCheck(this, Modules);
};

Modules.Games = false;
Modules.Standings = false;
Modules.PostSeason = false;
Modules.Transfers = true;
/* harmony default export */ __webpack_exports__["default"] = (Modules);

/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvam1hcnJveWF2ZS9jb21wb25lbnRzL3V4aS9ibG9nL2xpc3Quc2NzcyIsIndlYnBhY2s6Ly8vLi9zcmMvam1hcnJveWF2ZS9jb21wb25lbnRzL3V4aS9jb3JlL3RpdGxlLnNjc3MiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvcmUvY29tcG9uZW50cy9kYXRlLmpzIiwid2VicGFjazovLy8uL3NyYy9jb3JlL2NvbXBvbmVudHMvbGF5b3V0L3NlY3Rpb24uanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvcmUvY29tcG9uZW50cy91aV9jb21wb25lbnQuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvcmUvdWkvbGlzdC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29yZS91aS9wbGFjZWhvbGRlci5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvam1hcnJveWF2ZS9jb21wb25lbnRzL2RhdGEvcG9zdF9saW5rLmpzIiwid2VicGFjazovLy8uL3NyYy9qbWFycm95YXZlL2NvbXBvbmVudHMvdXhpL2Jsb2cvbGF5b3V0L2xheW91dC1wcm94eS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvam1hcnJveWF2ZS9jb21wb25lbnRzL3V4aS9ibG9nL2xheW91dC9sZy9wYWdlLmpzIiwid2VicGFjazovLy8uL3NyYy9qbWFycm95YXZlL2NvbXBvbmVudHMvdXhpL2Jsb2cvbGlzdC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvam1hcnJveWF2ZS9jb21wb25lbnRzL3V4aS9ibG9nL2xpc3Quc2Nzcz84M2QxIiwid2VicGFjazovLy8uL3NyYy9qbWFycm95YXZlL2NvbXBvbmVudHMvdXhpL2NvcmUvdGl0bGUuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2ptYXJyb3lhdmUvY29tcG9uZW50cy91eGkvY29yZS90aXRsZS5zY3NzP2QxZTYiLCJ3ZWJwYWNrOi8vLy4vc3JjL2ptYXJyb3lhdmUvY29tcG9uZW50cy91eGkvaG9tZS9ibG9jay5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvam1hcnJveWF2ZS9jb25mL2xheW91dC9tb2R1bGVzLmpzIl0sIm5hbWVzIjpbIlVJRGF0ZSIsInN0YXRlIiwiZGVmYXVsdHMiLCJjbGFzc05hbWUiLCJ0aW1lQWdvIiwibGFuZyIsInByb3BzIiwiVGltZUFnbyIsImFkZExvY2FsZSIsImVzIiwiZW4iLCJkYXRlIiwic3RyIiwidmFsdWUiLCJsZW5ndGgiLCJEYXRlIiwibnVtIiwiTnVtYmVyIiwiaXNJbnRlZ2VyIiwiZm9ybWF0IiwiZXgiLCJVSUNvbXBvbmVudCIsInN0eWxlcyIsInRoZW1lIiwicm9vdCIsIndpZHRoIiwiYm94U2l6aW5nIiwicGFkZGluZyIsIkxheW91dFNlY3Rpb24iLCJjbGFzc2VzIiwiY29sb3IiLCJiYWNrZ3JvdW5kQ29sb3IiLCJjaGlsZHJlbiIsIlJlYWN0IiwiQ29tcG9uZW50Iiwid2l0aFN0eWxlcyIsImdldERlZmF1bHRzIiwiZGVmIiwiaW5pdFVJIiwicm93IiwicGFsZXR0ZSIsImJhY2tncm91bmQiLCJMaXN0SXRlbSIsIml0ZW0iLCJidXR0b24iLCJhdmF0YXJUeXBlIiwiYXZhdGFyTGFtYmRhIiwicHJpbWFyeUxhbWJkYSIsIkxpc3QiLCJkYXRhIiwiZ29Ub0xhbWJkYSIsIm1heEl0ZW1zIiwibG9hZGluZyIsIm5vRGF0YSIsInN0eWxlIiwia2V5Iiwic2xpY2UiLCJyZW5kZXJMb2FkaW5nIiwicmVuZGVyTm9JdGVtcyIsIm1hcmdpbiIsIm1hcCIsImlkeCIsImkiLCJwdXNoIiwicGgiLCJyZW5kZXJQbGFjZWhvbGRlciIsIlBIIiwic3BhY2luZyIsInBhcnNlSW50IiwicmVuZGVyUGxhY2Vob2xkZXJzIiwiaGVpZ2h0IiwicGhzIiwieSIsIl9waCIsIngiLCJqIiwicGFkIiwiUG9zdExpbmtDb21wb25lbnQiLCJzbHVnIiwiY2F0ZWdvcnkiLCJ3aXRoTW9kdWxlIiwiUGFnZUNvbXBvbmVudCIsInJlbmRlckRlZmF1bHQiLCJ0aXRsZSIsInBvc3RzIiwicmVuZGVyVGl0bGUiLCJQb3N0IiwiZXhjZXJwdCIsInRhZ3MiLCJCbG9nIiwiYXJlYSIsIkNvbnRlbnQiLCJwbGFjZWhvbGRlciIsInJlbmRlckNvbnRlbnQiLCJjb250cm9sIiwidmlzaWJsZSIsInBhZGRpbmdUb3AiLCJjbGVhbiIsImJvcmRlckJvdHRvbSIsIk1vZHVsZXMiLCJHYW1lcyIsIlN0YW5kaW5ncyIsIlBvc3RTZWFzb24iLCJUcmFuc2ZlcnMiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUFBLDJCQUEyQixtQkFBTyxDQUFDLDZPQUEySDtBQUM5Sjs7O0FBR0E7QUFDQSxjQUFjLFFBQVMsbUJBQW1CLGtCQUFrQixFQUFFLHNCQUFzQixpQkFBaUIsZ0JBQWdCLEVBQUUsdUJBQXVCLHFCQUFxQixFQUFFLCtCQUErQixpQkFBaUIsaUNBQWlDLEVBQUUsK0JBQStCLGlDQUFpQyxpQkFBaUIsZ0JBQWdCLEVBQUU7O0FBRTNWOzs7Ozs7Ozs7Ozs7QUNQQSwyQkFBMkIsbUJBQU8sQ0FBQyw2T0FBMkg7QUFDOUo7OztBQUdBO0FBQ0EsY0FBYyxRQUFTLDZCQUE2QixpQkFBaUIsMkJBQTJCLGlCQUFpQixpQkFBaUIscUJBQXFCLHNCQUFzQixFQUFFLDZCQUE2QixpQkFBaUIsMkJBQTJCLGVBQWUsaUJBQWlCLEVBQUUsNEJBQTRCLHFCQUFxQiw4QkFBOEIsNEJBQTRCLHlCQUF5QixFQUFFLG9DQUFvQyxtQkFBbUIsaUJBQWlCLGdCQUFnQixrQkFBa0IsRUFBRSx1Q0FBdUMsdUJBQXVCLHdCQUF3QiwyQkFBMkIsZUFBZSw4QkFBOEIsZ0JBQWdCLHNCQUFzQix3QkFBd0IsRUFBRTs7QUFFMXVCOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDUEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7SUFFTUEsTTs7Ozs7QUFDSixvQkFBYztBQUFBOztBQUFBOztBQUNaO0FBQ0EsVUFBS0MsS0FBTCxHQUFhLEVBQWI7QUFGWTtBQUliOzs7O2tDQUVZO0FBQ1gsVUFBTUMsUUFBUSxHQUFHO0FBQ2ZDLGlCQUFTLEVBQUc7QUFERyxPQUFqQjtBQUdBLGFBQU9ELFFB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SyxHQUFJLFdBQVcsS0FBSzNGLEtBQWpCLEdBQTBCLElBQTFCLEdBQWlDLEtBQS9DO0FBQ0EsVUFBSTRGLFlBQVksR0FBRyxnQkFBbkI7QUFFQSxVQUFHLENBQUNILE9BQUosRUFBYSxPQUFPLElBQVA7QUFDYixVQUFHRSxLQUFILEVBQVUsT0FBT2pFLFFBQVA7QUFFVixVQUFJdUIsR0FBRyxHQUFHLENBQVY7QUFDQSxhQUNDO0FBQUssaUJBQVMsRUFBQyxXQUFmO0FBQTJCLGFBQUssRUFBRTtBQUFDMkMsc0JBQVksRUFBRUEsWUFBZjtBQUE2Qm5FLHlCQUFlLEVBQUUsT0FBOUM7QUFBdURKLGlCQUFPLEVBQUUsS0FBaEU7QUFBdUVxRSxvQkFBVSxFQUFFQTtBQUFuRjtBQUFsQyxTQUNFYixLQUFLLElBQUksdUVBQUtBLEtBQUwsQ0FEWCxFQUVDO0FBQUssaUJBQVMsRUFBQztBQUFmLFNBQ0MsMkRBQUMsNkRBQUQ7QUFBYyxZQUFJLEVBQUVBO0FBQXBCLFNBQ0VuRCxRQURGLENBREQsQ0FGRCxDQUREO0FBVUE7Ozs7RUF2QnNCQyw0Q0FBSyxDQUFDQyxTOztBQTBCZEEsd0VBQWhCLEU7Ozs7Ozs7Ozs7Ozs7OztJQzdCTWlFLE87Ozs7QUFJTkEsT0FBTyxDQUFDQyxLQUFSLEdBQWdCLEtBQWhCO0FBQ0FELE9BQU8sQ0FBQ0UsU0FBUixHQUFvQixLQUFwQjtBQUNBRixPQUFPLENBQUNHLFVBQVIsR0FBcUIsS0FBckI7QUFDQUgsT0FBTyxDQUFDSSxTQUFSLEdBQW9CLElBQXBCO0FBRWdCSixzRUFBaEIsRSIsImZpbGUiOiI0LmpzIiwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0cyA9IG1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL21udC96L2xvY2FsL3NvZnR3YXJlL2Rldi93ZWJhcHBzL2FwcC9yZWFjdC9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9saWIvY3NzLWJhc2UuanNcIikoZmFsc2UpO1xuLy8gaW1wb3J0c1xuXG5cbi8vIG1vZHVsZVxuZXhwb3J0cy5wdXNoKFttb2R1bGUuaWQsIFwiLm1vZC1ibG9nLWxpc3Qge1xcbiAgcGFkZGluZzogNHJlbTsgfVxcblxcbi5tb2QtYmxvZy1saXN0IGEge1xcbiAgcGFkZGluZzogMHB4O1xcbiAgbWFyZ2luOiAwcHg7IH1cXG5cXG4ubW9kLWJsb2ctbGlzdCBoMiB7XFxuICBtYXJnaW46IDAuMnJlbSAwOyB9XFxuXFxuLm1vZC1ibG9nLWxpc3QgLmRhdGUgc3BhbiB7XFxuICBmbG9hdDogcmlnaHQ7XFxuICBmb250LXNpemU6IDAuOHJlbSAhaW1wb3J0YW50OyB9XFxuXFxuLm1vZC1ibG9nLWxpc3QgLnRhZ3Mgc3BhbiB7XFxuICBmb250LXNpemU6IDAuOHJlbSAhaW1wb3J0YW50O1xcbiAgcGFkZGluZzogMHB4O1xcbiAgbWFyZ2luOiAwcHg7IH1cXG5cIiwgXCJcIl0pO1xuXG4vLyBleHBvcnRzXG4iLCJleHBvcnRzID0gbW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vbW50L3ovbG9jYWwvc29mdHdhcmUvZGV2L3dlYmFwcHMvYXBwL3JlYWN0L25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2xpYi9jc3MtYmFzZS5qc1wiKShmYWxzZSk7XG4vLyBpbXBvcnRzXG5cblxuLy8gbW9kdWxlXG5leHBvcnRzLnB1c2goW21vZHVsZS5pZCwgXCIubW9kLXBvc3QtdGl0bGUgLmhlYWRlcjIge1xcbiAgaGVpZ2h0OiAzMHZoO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogIzMzMztcXG4gIHBhZGRpbmc6IDFlbTtcXG4gIGNvbG9yOiB3aGl0ZTtcXG4gIGZvbnQtc2l6ZTogMS41ZW07XFxuICBsaW5lLWhlaWdodDogMnJlbTsgfVxcblxcbi5tb2QtcG9zdC10aXRsZSAuaGVhZGVyIHtcXG4gIGhlaWdodDogMzB2aDtcXG4gIGJhY2tncm91bmQtY29sb3I6ICMzMzM7XFxuICBwYWRkaW5nOiAwO1xcbiAgY29sb3I6IHdoaXRlOyB9XFxuXFxuLm1vZC1wb3N0LXRpdGxlIC50aXRsZSB7XFxuICBtaW4taGVpZ2h0OiAzMHZoO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2MwYzBjMDtcXG4gIG1hcmdpbjogLTIwdmggMWVtIDAgMWVtO1xcbiAgYm9yZGVyLXJhZGl1czogMC41ZW07IH1cXG5cXG4ubW9kLXBvc3QtdGl0bGUgLnRpdGxlIC5wYXJlbnQge1xcbiAgZGlzcGxheTogdGFibGU7XFxuICBoZWlnaHQ6IDEwMCU7XFxuICB3aWR0aDogMTAwJTtcXG4gIHBhZGRpbmc6IDFyZW07IH1cXG5cXG4ubW9kLXBvc3QtdGl0bGUgLnRpdGxlIC5jb250YWluZXIge1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgZGlzcGxheTogdGFibGUtY2VsbDtcXG4gIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XFxuICBwYWRkaW5nOiAwO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZlZmVmZTtcXG4gIGNvbG9yOiAjMzMzO1xcbiAgZm9udC1zaXplOiAxLjI1ZW07XFxuICBsaW5lLWhlaWdodDogMS41cmVtOyB9XFxuXCIsIFwiXCJdKTtcblxuLy8gZXhwb3J0c1xuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBVSUNvbXBvbmVudCBmcm9tICdjb3JlL2NvbXBvbmVudHMvdWlfY29tcG9uZW50JztcbmltcG9ydCBUaW1lQWdvIGZyb20gJ2phdmFzY3JpcHQtdGltZS1hZ28nXG5pbXBvcnQgZW4gZnJvbSAnamF2YXNjcmlwdC10aW1lLWFnby9sb2NhbGUvZW4nXG5pbXBvcnQgZXMgZnJvbSAnamF2YXNjcmlwdC10aW1lLWFnby9sb2NhbGUvZXMnXG5cbmNsYXNzIFVJRGF0ZSBleHRlbmRzIFVJQ29tcG9uZW50IHsgXG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIHN1cGVyKCk7XG4gICAgdGhpcy5zdGF0ZSA9IHtcbiAgICB9XG4gIH1cblxuICBnZXREZWZhdWx0cygpe1xuICAgIGNvbnN0IGRlZmF1bHRzID0ge1xuICAgICAgY2xhc3NOYW1lIDogJycsICAgICAgXG4gICAgfSAgICBcbiAgICByZXR1cm4gZGVmYXVsdHM7XG4gIH0gIFxuICByZW5kZXIoKSB7XG4gICAgdmFyIHRpbWVBZ287XG4gICAgY29uc3QgbGFuZyA9IChcImxhbmdcIiBpbiB0aGlzLnByb3BzKSA/IHRoaXMucHJvcHMubGFuZyA6IFwiZW5cIjtcbiAgICBzd2l0Y2gobGFuZyl7XG4gICAgICBjYXNlIFwiZXNcIiA6XG4gICAgICAgIFRpbWVBZ28uYWRkTG9jYWxlKGVzKTtcbiAgICAgICAgdGltZUFnbyA9IG5ldyBUaW1lQWdvKCdlcy1VUycpO1xuICAgICAgICBicmVhaztcbiAgICAgIGRlZmF1bHQ6XG4gICAgICAgIFRpbWVBZ28uYWRkTG9jYWxlKGVuKTtcbiAgICAgICAgdGltZUFnbyA9IG5ldyBUaW1lQWdvKCdlbi1VUycpO1xuICAgIH1cblxuICAgIFxuICAgIHZhciBkYXRlO1xuICAgIHZhciBzdHI7XG4gICAgdHJ5e1xuICAgICAgdmFyIHZhbHVlID0gdGhpcy5wcm9wcy52YWx1ZTtcblxuICAgICAgaWYoIXZhbHVlIHx8IHZhbHVlID09IG51bGwgfHwgdmFsdWUgPT09ICcnIHx8IHZhbHVlLmxlbmd0aCA9PSAwKXtcbiAgICAgICAgc3RyID0gJyc7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBpZih2YWx1ZSBpbnN0YW5jZW9mIERhdGUpe1xuICAgICAgICAgIGRhdGUgPSBuZXcgRGF0ZSh2YWx1ZSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgY29uc3QgbnVtID0gTnVtYmVyKHZhbHVlKTtcbiAgICAgICAgICBpZihOdW1iZXIuaXNJbnRlZ2VyKG51bSkpe1xuICAgICAgICAgICAgZGF0ZSA9IG5ldyBEYXRlKG51bSk7XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGRhdGUgPSBuZXcgRGF0ZSh2YWx1ZSk7XG4gICAgICAgICAgfVxuICAgICAgICB9ICAgICAgIFxuICAgICAgICBzdHIgPSB0aW1lQWdvLmZvcm1hdChkYXRlLCAndHdpdHRlcicpO1xuICAgICAgfSAgICBcbiAgICB9IGNhdGNoIChleCl7XG4gICAgICBzdHIgPSB0aGlzLnByb3BzLnZhbHVlO1xuICAgIH1cbiAgICByZXR1cm4gKFxuICAgICAgPHNwYW4gY2xhc3NOYW1lPXt0aGlzLnN0YXRlLmNsYXNzTmFtZX0+e3N0cn08L3NwYW4+XG4gICAgKTtcbiAgfVxufVxuXG5cbmV4cG9ydCBkZWZhdWx0IFVJRGF0ZTsiLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgd2l0aFN0eWxlcyB9IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL3N0eWxlcyc7XG5cbmNvbnN0IHN0eWxlcyA9IHRoZW1lID0+ICh7XG5cdHJvb3QgOiB7XG5cdFx0d2lkdGg6ICcxMDAlJyxcblx0XHRib3hTaXppbmc6ICdib3JkZXItYm94Jyxcblx0XHRwYWRkaW5nOiAnMTZweCcsXG5cdH0sXG59KTtcbmNsYXNzIExheW91dFNlY3Rpb24gZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQgeyBcbiAgcmVuZGVyKCkge1xuICBcdGNvbnN0IGNsYXNzZXMgPSB0aGlzLnByb3BzLmNsYXNzZXM7XG4gIFx0Ly9jb25zdCBoZWlnaHQgPSAoXCJoZWlnaHRcIiBpbiB0aGlzLnByb3BzKSA/IHRoaXMucHJvcHMuaGVpZ2h0IDogJzMwcHgnO1xuICBcdGNvbnN0IGNvbG9yID0gKFwiY29sb3JcIiBpbiB0aGlzLnByb3BzKSA/IHRoaXMucHJvcHMuY29sb3IgOiAnd2hpdGUnO1xuICAgIHJldHVybiAoXG4gICAgICA8ZGl2IGNsYXNzTmFtZT17Y2xhc3Nlcy5yb290fSBzdHlsZT17e2JhY2tncm91bmRDb2xvcjogY29sb3J9fT5cbiAgICAgIFx0e3RoaXMucHJvcHMuY2hpbGRyZW59XG4gICAgICA8L2Rpdj5cbiAgICApO1xuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IHdpdGhTdHlsZXMoc3R5bGVzKShMYXlvdXRTZWN0aW9uKTsiLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuXG5jbGFzcyBVSUNvbXBvbmVudCBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gIGdldERlZmF1bHRzKCl7fVxuXG4gIGluaXRVSSgpIHtcbiAgICBjb25zdCBkZWZhdWx0cyA9IHRoaXMuZ2V0RGVmYXVsdHMoKTsgICAgXG4gICAgZm9yKHZhciBkZWYgaW4gZGVmYXVsdHMpe1xuICAgICAgdGhpcy5zdGF0ZVtkZWZdID0gKHRoaXMucHJvcHNbZGVmXSkgPyB0aGlzLnByb3BzW2RlZl0gOiBkZWZhdWx0c1tkZWZdO1xuICAgIH1cbiAgfVxuXG4gIGNvbXBvbmVudFdpbGxNb3VudCgpe1xuICAgIHRoaXMuaW5pdFVJKCk7XG4gIH1cbiAgXG4gIHJlbmRlcigpIHtcbiAgICByZXR1cm4gXCJcIjtcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCAoVUlDb21wb25lbnQpOyIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgTGluayBmcm9tICdjb3JlL3VpL2xpbmsnO1xuXG5pbXBvcnQgeyB3aXRoU3R5bGVzIH0gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvc3R5bGVzJztcbmltcG9ydCBNREF2YXRhciBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9BdmF0YXInO1xuaW1wb3J0IE1ETGlzdCBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9MaXN0JztcbmltcG9ydCBNRExpc3RJdGVtIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL0xpc3RJdGVtJztcbmltcG9ydCBNRExpc3RJdGVtQXZhdGFyIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL0xpc3RJdGVtQXZhdGFyJztcbmltcG9ydCBNRExpc3RJdGVtVGV4dCBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9MaXN0SXRlbVRleHQnO1xuaW1wb3J0IE1ERGl2aWRlciBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9EaXZpZGVyJztcblxuaW1wb3J0IFBsYWNlaG9sZGVyIGZyb20gJ2NvcmUvdWkvcGxhY2Vob2xkZXInO1xuXG5jb25zdCBzdHlsZXMgPSB0aGVtZSA9PiAoe1xuICByb3c6IHtcbiAgICAnJjpudGgtb2YtdHlwZShvZGQpJzoge1xuICAgICAgYmFja2dyb3VuZENvbG9yOiB0aGVtZS5wYWxldHRlLmJhY2tncm91bmQuZGVmYXVsdCxcbiAgICB9LFxuICB9LFxufSk7XG5cbmZ1bmN0aW9uIExpc3RJdGVtKHtpdGVtLCBidXR0b24sIGF2YXRhclR5cGUsIGF2YXRhckxhbWJkYSwgcHJpbWFyeUxhbWJkYX0pe1xuICBhdmF0YXJMYW1iZGEgPSAoYXZhdGFyTGFtYmRhKSA/IGF2YXRhckxhbWJkYSA6IChpdGVtPT5pdGVtKTtcbiAgcmV0dXJuIChcbiAgICAgIDxNRExpc3RJdGVtIGJ1dHRvbj17YnV0dG9ufT5cbiAgICAgICAgICB7KGF2YXRhclR5cGUgIT09IGZhbHNlKSAmJlxuICAgICAgICAgICAgKChhdmF0YXJUeXBlID09PSBcImljb25cIiB8fCBhdmF0YXJUeXBlID09PSBcInRleHRcIikgP1xuICAgICAgICAgICAgICA8TURMaXN0SXRlbUF2YXRhcj48TURBdmF0YXI+e2F2YXRhckxhbWJkYShpdGVtKX08L01EQXZhdGFyPjwvTURMaXN0SXRlbUF2YXRhcj5cbiAgICAgICAgICAgIDpcbiAgICAgICAgICAgICAgPE1ETGlzdEl0ZW1BdmF0YXI+PE1EQXZhdGFyIHNyYz17YXZhdGFyTGFtYmRhKGl0ZW0pfT48L01EQXZhdGFyPjwvTURMaXN0SXRlbUF2YXRhcj5cbiAgICAgICAgICApfVxuICAgICAgICAgIDxNRExpc3RJdGVtVGV4dCBwcmltYXJ5PXtwcmltYXJ5TGFtYmRhKGl0ZW0pfS8+XG4gICAgICA8L01ETGlzdEl0ZW0+XG4gICAgKVxufVxuXG5cbmNsYXNzIExpc3QgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICByZW5kZXIoKSB7XG4gIFx0dmFyIHsgZGF0YSwgcHJpbWFyeUxhbWJkYSwgYXZhdGFyTGFtYmRhLCBhdmF0YXJUeXBlLCBnb1RvTGFtYmRhLCBtYXhJdGVtcywgbG9hZGluZywgbm9EYXRhLCBzdHlsZSB9ID0gdGhpcy5wcm9wcztcbiAgICB2YXIga2V5ID0gMFxuICAgIGRhdGEgPSAoZGF0YSkgPyBkYXRhLnNsaWNlKDAsbWF4SXRlbXMpIDogW107XG4gICAgbWF4SXRlbXMgPSAoIW1heEl0ZW1zIHx8IG1heEl0ZW1zID09IDApID8gMTAgOiBtYXhJdGVtcztcbiAgICBub0RhdGEgPSAobm9EYXRhKSA/IG5vRGF0YSA6IFwibm8gaXRlbXNcIjtcblxuICAgIGlmKGxvYWRpbmcgPT09IHRydWUpIHJldHVybiB0aGlzLnJlbmRlckxvYWRpbmcobWF4SXRlbXMsIGtleSwgc3R5bGUpO1xuXG4gICAgaWYoIWRhdGEgfHwgZGF0YS5sZW5ndGggPT0gMCkgcmV0dXJuIHRoaXMucmVuZGVyTm9JdGVtcyhub0RhdGEsIHN0eWxlKTtcblxuICAgIHN0eWxlID0gKHN0eWxlKSA/IHN0eWxlIDoge307XG5cbiAgICByZXR1cm4gKFxuICAgICAgICA8TURMaXN0IHN0eWxlPXt7cGFkZGluZzogMCwgbWFyZ2luOiAwLCAuLi5zdHlsZX19PlxuICAgICAgICAgICAge2RhdGEubWFwKChpdGVtLCBpZHgpPT5cbiAgICAgICAgICAgICAgPGRpdiBrZXk9e2tleSsrfT5cbiAgICAgICAgICAgICAgICB7KGdvVG9MYW1iZGEpID8gXG4gICAgICAgICAgICAgICAgICAgIDxMaW5rIHRvPXtnb1RvTGFtYmRhKGl0ZW0pfT48TGlzdEl0ZW0gYnV0dG9uIGl0ZW09e2l0ZW19IHsuLi50aGlzLnByb3BzfS8+PC9MaW5rPlxuICAgICAgICAgICAgICAgICAgOlxuICAgICAgICAgICAgICAgICAgICA8TGlzdEl0ZW0gaXRlbT17aXRlbX0gey4uLnRoaXMucHJvcHN9Lz5cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgeyhrZXkgPCBkYXRhLmxlbmd0aCkgJiZcbiAgICAgICAgICAgICAgICAgIDxNRERpdmlkZXIvPlxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICApfSAgICAgICAgICAgICAgICAgICAgICAgIFxuICAgICAgICA8L01ETGlzdD5cbiAgICApO1xuICB9XG5cbiAgcmVuZGVyTG9hZGluZyhtYXhJdGVtcywga2V5LCBzdHlsZSl7XG4gICAgbWF4SXRlbXMgPSAobWF4SXRlbXMgPT0gLTEpID8gNSA6IG1heEl0ZW1zO1xuICAgIHZhciBkYXRhID0gW107IGZvcih2YXIgaSA9IDA7IGkgPCBtYXhJdGVtczsgaSsrKSBkYXRhLnB1c2goaSk7XG4gICAgY29uc3QgcGggPSB0aGlzLnJlbmRlclBsYWNlaG9sZGVyKCk7XG5cbiAgICByZXR1cm4gKFxuICAgICAgICA8TURMaXN0IHN0eWxlPXtzdHlsZX0+XG4gICAgICAgICAgICB7ZGF0YS5tYXAoKGl0ZW0sIGlkeCk9PlxuICAgICAgICAgICAgICA8ZGl2IGtleT17a2V5Kyt9PlxuICAgICAgICAgICAgICAgIDxNRExpc3RJdGVtPlxuICAgICAgICAgICAgICAgICAgICA8TURMaXN0SXRlbUF2YXRhcj48TURBdmF0YXI+IDwvTURBdmF0YXI+PC9NRExpc3RJdGVtQXZhdGFyPlxuICAgICAgICAgICAgICAgICAgICA8TURMaXN0SXRlbVRleHQgcHJpbWFyeT17cGh9Lz5cbiAgICAgICAgICAgICAgICA8L01ETGlzdEl0ZW0+XG4gICAgICAgICAgICAgICAgeyhrZXkgPCBkYXRhLmxlbmd0aCkgJiZcbiAgICAgICAgICAgICAgICAgIDxNRERpdmlkZXIvPlxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICApfSAgICAgICAgICAgICAgICAgICAgICAgIFxuICAgICAgICA8L01ETGlzdD5cbiAgICApO1xuICB9XG5cbiAgcmVuZGVyUGxhY2Vob2xkZXIoKXtcbiAgICByZXR1cm4gKFxuICAgICAgPFBsYWNlaG9sZGVyIGRhdGE9e1tbW1wiLVwiLCAyMjAsIDEwXV1dfS8+XG4gICAgKVxuICB9XG5cbiAgcmVuZGVyTm9JdGVtcyhub0RhdGEsIHN0eWxlKXtcbiAgICByZXR1cm4gKFxuICAgICAgICA8TURMaXN0IHN0eWxlPXtzdHlsZX0+XG4gICAgICAgICAgPE1ETGlzdEl0ZW0+XG4gICAgICAgICAgICAgIDxNRExpc3RJdGVtVGV4dCBwcmltYXJ5PXtub0RhdGF9Lz5cbiAgICAgICAgICA8L01ETGlzdEl0ZW0+XG4gICAgICAgIDwvTURMaXN0PlxuICAgICk7XG4gIH1cblxufVxuXG5leHBvcnQgZGVmYXVsdCB3aXRoU3R5bGVzKHN0eWxlcykoTGlzdCk7IiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcblxuaW1wb3J0IENvbnRlbnRMb2FkZXIgZnJvbSAncmVhY3QtY29udGVudC1sb2FkZXInXG5cbmNsYXNzIFBIIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgcmVuZGVyKCkge1xuICBcdHZhciB7IGRhdGEsIHNwYWNpbmcgfSA9IHRoaXMucHJvcHM7XG4gIFx0c3BhY2luZyA9IChzcGFjaW5nKSA/IHBhcnNlSW50KHNwYWNpbmcpIDogNDtcbiAgXHRjb25zdCB7aGVpZ2h0LCB3aWR0aCwgcGhzfSA9IHRoaXMucmVuZGVyUGxhY2Vob2xkZXJzKGRhdGEsIHNwYWNpbmcpO1xuICAgIHJldHVybiAoXG5cdFx0PENvbnRlbnRMb2FkZXJcblx0XHRcdGhlaWdodD17aGVpZ2h0fVxuXHRcdFx0d2lkdGg9e3dpZHRofVxuXHRcdFx0c3BlZWQ9ezJ9XG5cdFx0XHRwcmltYXJ5Q29sb3I9XCIjZjNmM2YzXCJcblx0XHRcdHNlY29uZGFyeUNvbG9yPVwiI2JjYmNiY1wiPlxuXHRcdFx0e3Bocy5tYXAoaXRlbSA9PiBpdGVtKX1cblx0XHQ8L0NvbnRlbnRMb2FkZXI+XHRcdFx0XG4gICAgKTtcbiAgfVxuXG4gIHJlbmRlclBsYWNlaG9sZGVycyhkYXRhLCBzcGFjaW5nKXtcbiAgXHR2YXIgaGVpZ2h0ID0gMDtcbiAgXHR2YXIgd2lkdGggPSAwO1xuICBcdHZhciBwaCwgcGhzID0gW107XG5cdHZhciB5ID0gMDtcblx0dmFyIF9waDtcblx0dmFyIGtleSA9IDA7XG5cdHZhciBwYWRkaW5nID0gc3BhY2luZztcblx0XG5cdGZvcih2YXIgaSA9IDA7IGkgPCBkYXRhLmxlbmd0aDsgaSsrKXtcblx0XHR2YXIgcm93ID0gZGF0YVtpXTtcblx0XHR2YXIgeCA9IHBhZGRpbmc7XG5cdFx0Zm9yKHZhciBqID0gMDsgaiA8IHJvdy5sZW5ndGg7IGorKyl7XG5cdFx0XHRwaCA9IHJvd1tqXTtcblx0XHRcdHBoWzFdID0gcGFyc2VJbnQocGhbMV0pO1xuXHRcdFx0cGhbMl0gPSBwYXJzZUludChwaFsyXSk7XG5cdFx0XHR2YXIgcGFkID0gKHBoWzNdKSA/IHBoWzNdIDogMDtcblx0XHRcdHN3aXRjaChwaFswXSl7XG5cdFx0XHRcdGNhc2UgXCJvXCI6XG5cdFx0XHRcdFx0X3BoID0gPHJlY3Qga2V5PXtrZXkrK30geD17eCArIHBhZH0geT17eX0gcng9XCIwXCIgcnk9XCIwXCIgd2lkdGg9e3BoWzFdfSBoZWlnaHQ9e3BoWzJdfSAvPjtcblx0XHRcdFx0XHRicmVhaztcblx0XHRcdFx0Y2FzZSBcIi1cIjpcdFx0XHRcdFxuXHRcdFx0XHRkZWZhdWx0OlxuXHRcdFx0XHRcdF9waCA9IDxyZWN0IGtleT17a2V5Kyt9IHg9e3ggKyBwYWR9IHk9e3l9IHJ4PVwiMFwiIHJ5PVwiMFwiIHdpZHRoPXtwaFsxXX0gaGVpZ2h0PXtwaFsyXX0gLz47XG5cdFx0XHRcdFx0YnJlYWs7XG5cdFx0XHR9XG5cdFx0XHR4ICs9IHBoWzFdICsgcGFkZGluZztcblx0XHRcdHdpZHRoID0gKHggPiB3aWR0aCkgPyB4IDogd2lkdGg7XG5cdFx0XHRwaHMucHVzaChfcGgpO1xuXHRcdH1cblx0XHR5ICs9IHBoWzJdICsgKCgoaiArIDEpIDwgcm93Lmxlbmd0aCkgPyBwYWRkaW5nIDogMCk7XG5cdH1cblxuXHRoZWlnaHQgPSB5O1xuXHR3aWR0aCA9ICB3aWR0aDtcblx0cmV0dXJuIHtoZWlnaHQ6IGhlaWdodCwgd2lkdGg6IHdpZHRoLCBwaHM6IHBoc307XG4gIH1cblxufVxuXG5leHBvcnQgZGVmYXVsdCBQSDsiLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgTGluayB9IGZyb20gJ3JlYWN0LXJvdXRlci1kb20nO1xuaW1wb3J0IHdpdGhNb2R1bGUgZnJvbSAnY29yZS9jb21wb25lbnRzL3dpdGgtbW9kdWxlJztcblxuY2xhc3MgUG9zdExpbmtDb21wb25lbnQgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuXHRyZW5kZXIoKXtcblx0XHRjb25zdCBzbHVnID0gKFwic2x1Z1wiIGluIHRoaXMucHJvcHMpID8gdGhpcy5wcm9wcy5zbHVnIDogbnVsbDtcblx0XHRjb25zdCBjYXRlZ29yeSA9IHRoaXMucHJvcHMuY2F0ZWdvcnk7XG5cblx0XHRpZighc2x1ZykgcmV0dXJuIHRoaXMucHJvcHMuY2hpbGRyZW47XG5cblx0XHRyZXR1cm4gKFxuXHRcdFx0PExpbmsgdG89e2Ake3NsdWd9YH0+XG5cdFx0XHRcdHt0aGlzLnByb3BzLmNoaWxkcmVufVxuXHRcdFx0PC9MaW5rPlxuXHRcdCk7XG5cdH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgd2l0aE1vZHVsZShQb3N0TGlua0NvbXBvbmVudCk7XG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IEhpZGRlbiBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9IaWRkZW4nO1xuaW1wb3J0IHsgIEJyb3dzZXJWaWV3LCAgTW9iaWxlVmlldyB9IGZyb20gXCJyZWFjdC1kZXZpY2UtZGV0ZWN0XCI7XG5pbXBvcnQgd2l0aE1vZHVsZSBmcm9tICdjb3JlL2NvbXBvbmVudHMvd2l0aC1tb2R1bGUnO1xuaW1wb3J0IExHIGZyb20gXCJqbWFycm95YXZlL2NvbXBvbmVudHMvdXhpL2Jsb2cvbGF5b3V0L2xnL3BhZ2VcIjtcblxuY2xhc3MgUGFnZUNvbXBvbmVudCBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG5cdHJlbmRlcigpe1xuXHRcdHJldHVybiB0aGlzLnJlbmRlckRlZmF1bHQoKTtcblx0fVxuXG5cdHJlbmRlckRlZmF1bHQoKXtcblx0XHRjb25zdCBkYXRhID0gdGhpcy5wcm9wcy5kYXRhO1xuXHRcdGNvbnN0IHRpdGxlID0gdGhpcy5wcm9wcy50aXRsZTtcblx0XHRyZXR1cm4gKFxuXHRcdFx0PGRpdiBzdHlsZT17e3dpZHRoOicxMDAlJ319Plx0XHRcdFx0XG4gICAgXHRcdFx0PExHIGRhdGE9e2RhdGF9IHRpdGxlPXt0aXRsZX0vPlxuXHRcdFx0PC9kaXY+XG5cdFx0KVx0XHRcblx0fVxuXG5cdHJlbmRlck11bHRpcGxlKCl7XG5cdFx0dmFyIGRhdGEgPSB0aGlzLnByb3BzLmRhdGE7XG5cdFx0cmV0dXJuIChcblx0XHRcdDxkaXYgc3R5bGU9e3t3aWR0aDonMTAwJSd9fT5cdFx0XHRcdFxuICAgICAgICBcdFx0PEhpZGRlbiBvbmx5PXtbJ3NtJywgJ21kJywgJ2xnJywgJ3hsJ119PlxuICAgICAgICBcdFx0XHRcblx0XHQgICAgICAgIDwvSGlkZGVuPlxuICAgICAgICBcdFx0PEhpZGRlbiBvbmx5PXtbJ3hzJywgJ21kJywgJ2xnJywgJ3hsJ119PlxuICAgICAgICBcdFx0XHRcblx0XHQgICAgICAgIDwvSGlkZGVuPlxuICAgICAgICBcdFx0PEhpZGRlbiBvbmx5PXtbJ3hzJywgJ3NtJ119PlxuICAgICAgICBcdFx0XHQ8TEcgZGF0YT17ZGF0YX0vPlxuXHRcdCAgICAgICAgPC9IaWRkZW4+XG5cdFx0XHQ8L2Rpdj5cblx0XHQpXG5cdH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgd2l0aE1vZHVsZShQYWdlQ29tcG9uZW50KTsiLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IEdyaWRDb250YWluZXIgZnJvbSAnY29yZS91aS9sYXlvdXQvZ3JpZF9jb250YWluZXInO1xuaW1wb3J0IEdyaWRJdGVtIGZyb20gJ2NvcmUvdWkvbGF5b3V0L2dyaWRfaXRlbSc7XG5pbXBvcnQgSGlkZGVuIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL0hpZGRlbic7XG5pbXBvcnQgTW9kdWxlcyBmcm9tICdqbWFycm95YXZlL2NvbmYvbGF5b3V0L21vZHVsZXMnO1xuaW1wb3J0IHdpdGhNb2R1bGUgZnJvbSAnY29yZS9jb21wb25lbnRzL3dpdGgtbW9kdWxlJztcbmltcG9ydCBCbG9jayBmcm9tICdqbWFycm95YXZlL2NvbXBvbmVudHMvdXhpL2hvbWUvYmxvY2snO1xuaW1wb3J0IE1CbG9jayBmcm9tICdjb3JlL2NvbXBvbmVudHMvbW9ja3VwL2Jsb2NrJztcbmltcG9ydCBTZWN0aW9uIGZyb20gJ2NvcmUvY29tcG9uZW50cy9sYXlvdXQvc2VjdGlvbic7XG5pbXBvcnQgTGlzdCBmcm9tICdqbWFycm95YXZlL2NvbXBvbmVudHMvdXhpL2Jsb2cvbGlzdCc7XG5pbXBvcnQgVGl0bGUgZnJvbSAnam1hcnJveWF2ZS9jb21wb25lbnRzL3V4aS9jb3JlL3RpdGxlJztcbmltcG9ydCBQbGFjZWhvbGRlciBmcm9tICdjb3JlL3VpL3BsYWNlaG9sZGVyJztcblxuZnVuY3Rpb24gUEgoe30pe1xuICAgIHJldHVybiAoXG4gICAgICA8ZGl2PlxuICAgICAgICA8UGxhY2Vob2xkZXIgZGF0YT17W1xuICAgICAgICAgIFtbXCItXCIsIFwiMTgwXCIsIFwiMTVcIl1dLFxuICAgICAgICBdfS8+XG4gICAgICA8L2Rpdj5cbiAgICApXG59XG5cbmNsYXNzIFBhZ2VDb21wb25lbnQgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuXHRyZW5kZXIoKXtcblx0XHRjb25zdCB7IGRhdGEsIHRpdGxlIH0gPSB0aGlzLnByb3BzO1xuXHRcdGNvbnN0IHBvc3RzID0gKGRhdGEgJiYgZGF0YS5wb3N0cykgPyBkYXRhLnBvc3RzIDogbnVsbDtcblx0XHRyZXR1cm4gKFxuXHRcdFx0PEdyaWRDb250YWluZXIgY2xhc3NOYW1lPSdibG9nLXBhZ2UnPlxuXHRcdFx0XHQ8R3JpZEl0ZW0gZmlsbD5cblx0XHRcdFx0XHQ8VGl0bGUgdGl0bGU9e3RoaXMucmVuZGVyVGl0bGUodGl0bGUpfSBsb2FkaW5nPXsocG9zdHMgPT0gbnVsbCkgPyB0cnVlIDogZmFsc2V9IHBsYWNlaG9sZGVyPXs8UEgvPn0vPlxuXHRcdFx0XHQ8L0dyaWRJdGVtPlx0XHRcdFxuXHRcdFx0XHQ8R3JpZEl0ZW0gZmlsbD5cblx0XHRcdFx0XHQ8TGlzdCBhcmVhPXt0aXRsZX0gZGF0YT17cG9zdHN9Lz5cblx0XHRcdFx0PC9HcmlkSXRlbT4gIFxuXHRcdFx0PC9HcmlkQ29udGFpbmVyPlxuXHRcdClcblx0fVxuXG5cdHJlbmRlclRpdGxlKHRpdGxlKXtcblx0XHRyZXR1cm4gKFxuXHRcdFx0PGRpdj5cblx0XHRcdFx0PGgxPnt0aXRsZX08L2gxPlxuXHRcdFx0PC9kaXY+XHRcdFx0XG5cdFx0KVxuXHR9XG5cbn1cblxuZXhwb3J0IGRlZmF1bHQgd2l0aE1vZHVsZShQYWdlQ29tcG9uZW50KTtcbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgUG9zdExpbmsgZnJvbSBcImptYXJyb3lhdmUvY29tcG9uZW50cy9kYXRhL3Bvc3RfbGlua1wiO1xuaW1wb3J0IEdyaWRDb250YWluZXIgZnJvbSAnY29yZS91aS9sYXlvdXQvZ3JpZF9jb250YWluZXInO1xuaW1wb3J0IEdyaWRJdGVtIGZyb20gJ2NvcmUvdWkvbGF5b3V0L2dyaWRfaXRlbSc7XG5pbXBvcnQgRGF0ZSBmcm9tICdjb3JlL2NvbXBvbmVudHMvZGF0ZSc7XG5pbXBvcnQgTGlzdCBmcm9tICdjb3JlL3VpL2xpc3QnO1xuXG5pbXBvcnQgXCIuL2xpc3Quc2Nzc1wiO1xuXG5mdW5jdGlvbiBQb3N0KHtkYXRhfSl7XG5cdHJldHVybiAoXG5cdFx0PGRpdj5cblx0XHRcdDxkaXYgY2xhc3NOYW1lPSdkYXRlJz48RGF0ZSB2YWx1ZT17ZGF0YS5kYXRlfS8+PC9kaXY+XG5cdFx0XHQ8UG9zdExpbmsgc2x1Zz17ZGF0YS5zbHVnfT48aDI+e2RhdGEudGl0bGV9PC9oMj48L1Bvc3RMaW5rPlxuXHRcdFx0PGRpdiBjbGFzc05hbWU9J2V4Y2VycHQnPntkYXRhLmV4Y2VycHR9PC9kaXY+XG5cdFx0XHQ8ZGl2IGNsYXNzTmFtZT0ndGFncyc+PHNwYW4+e2RhdGEuY2F0ZWdvcnl9PC9zcGFuPiA8c3Bhbj50YWdzOiB7ZGF0YS50YWdzfTwvc3Bhbj48L2Rpdj5cblx0XHQ8L2Rpdj5cblx0KVxufVxuXG5jbGFzcyBCbG9nIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcblx0cmVuZGVyKCl7XG5cdFx0Y29uc3QgZGF0YSA9IHRoaXMucHJvcHMuZGF0YTtcblx0XHRjb25zdCBhcmVhID0gdGhpcy5wcm9wcy5hcmVhO1xuXHRcdHZhciBrZXkgPSAwO1xuXHRcdHJldHVybiAoXG5cdFx0XHQ8ZGl2IGNsYXNzTmFtZT0nbW9kLWJsb2ctbGlzdCc+XG5cdCAgICAgICAgICAgIDxMaXN0IFxuXHQgICAgICAgICAgICAgICAgbG9hZGluZz17KGRhdGEgPT0gbnVsbCkgPyB0cnVlIDogZmFsc2V9XG5cdCAgICAgICAgICAgICAgICBtYXhJdGVtcz17MTB9XG5cdCAgICAgICAgICAgICAgICBkYXRhPXtkYXRhfSBcblx0ICAgICAgICAgICAgICAgIHByaW1hcnlMYW1iZGE9eyhpdGVtKT0+PFBvc3QgZGF0YT17aXRlbX0vPn0gXG5cdCAgICAgICAgICAgICAgICBhdmF0YXJUeXBlPXtmYWxzZX1cblx0ICAgICAgICAgICAgLz5cblx0XHRcdDwvZGl2PlxuXHRcdCk7XG5cdH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgQmxvZzsiLCJcbnZhciBjb250ZW50ID0gcmVxdWlyZShcIiEhLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vbW50L3ovbG9jYWwvc29mdHdhcmUvZGV2L3dlYmFwcHMvYXBwL3JlYWN0L25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2luZGV4LmpzIS4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL21udC96L2xvY2FsL3NvZnR3YXJlL2Rldi93ZWJhcHBzL2FwcC9yZWFjdC9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvbGliL2xvYWRlci5qcyEuL2xpc3Quc2Nzc1wiKTtcblxuaWYodHlwZW9mIGNvbnRlbnQgPT09ICdzdHJpbmcnKSBjb250ZW50ID0gW1ttb2R1bGUuaWQsIGNvbnRlbnQsICcnXV07XG5cbnZhciB0cmFuc2Zvcm07XG52YXIgaW5zZXJ0SW50bztcblxuXG5cbnZhciBvcHRpb25zID0ge1wiaG1yXCI6dHJ1ZX1cblxub3B0aW9ucy50cmFuc2Zvcm0gPSB0cmFuc2Zvcm1cbm9wdGlvbnMuaW5zZXJ0SW50byA9IHVuZGVmaW5lZDtcblxudmFyIHVwZGF0ZSA9IHJlcXVpcmUoXCIhLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vbW50L3ovbG9jYWwvc29mdHdhcmUvZGV2L3dlYmFwcHMvYXBwL3JlYWN0L25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvbGliL2FkZFN0eWxlcy5qc1wiKShjb250ZW50LCBvcHRpb25zKTtcblxuaWYoY29udGVudC5sb2NhbHMpIG1vZHVsZS5leHBvcnRzID0gY29udGVudC5sb2NhbHM7XG5cbmlmKG1vZHVsZS5ob3QpIHtcblx0bW9kdWxlLmhvdC5hY2NlcHQoXCIhIS4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL21udC96L2xvY2FsL3NvZnR3YXJlL2Rldi93ZWJhcHBzL2FwcC9yZWFjdC9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9pbmRleC5qcyEuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9tbnQvei9sb2NhbC9zb2Z0d2FyZS9kZXYvd2ViYXBwcy9hcHAvcmVhY3Qvbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2xpYi9sb2FkZXIuanMhLi9saXN0LnNjc3NcIiwgZnVuY3Rpb24oKSB7XG5cdFx0dmFyIG5ld0NvbnRlbnQgPSByZXF1aXJlKFwiISEuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9tbnQvei9sb2NhbC9zb2Z0d2FyZS9kZXYvd2ViYXBwcy9hcHAvcmVhY3Qvbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvaW5kZXguanMhLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vbW50L3ovbG9jYWwvc29mdHdhcmUvZGV2L3dlYmFwcHMvYXBwL3JlYWN0L25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9saWIvbG9hZGVyLmpzIS4vbGlzdC5zY3NzXCIpO1xuXG5cdFx0aWYodHlwZW9mIG5ld0NvbnRlbnQgPT09ICdzdHJpbmcnKSBuZXdDb250ZW50ID0gW1ttb2R1bGUuaWQsIG5ld0NvbnRlbnQsICcnXV07XG5cblx0XHR2YXIgbG9jYWxzID0gKGZ1bmN0aW9uKGEsIGIpIHtcblx0XHRcdHZhciBrZXksIGlkeCA9IDA7XG5cblx0XHRcdGZvcihrZXkgaW4gYSkge1xuXHRcdFx0XHRpZighYiB8fCBhW2tleV0gIT09IGJba2V5XSkgcmV0dXJuIGZhbHNlO1xuXHRcdFx0XHRpZHgrKztcblx0XHRcdH1cblxuXHRcdFx0Zm9yKGtleSBpbiBiKSBpZHgtLTtcblxuXHRcdFx0cmV0dXJuIGlkeCA9PT0gMDtcblx0XHR9KGNvbnRlbnQubG9jYWxzLCBuZXdDb250ZW50LmxvY2FscykpO1xuXG5cdFx0aWYoIWxvY2FscykgdGhyb3cgbmV3IEVycm9yKCdBYm9ydGluZyBDU1MgSE1SIGR1ZSB0byBjaGFuZ2VkIGNzcy1tb2R1bGVzIGxvY2Fscy4nKTtcblxuXHRcdHVwZGF0ZShuZXdDb250ZW50KTtcblx0fSk7XG5cblx0bW9kdWxlLmhvdC5kaXNwb3NlKGZ1bmN0aW9uKCkgeyB1cGRhdGUoKTsgfSk7XG59IiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBHcmlkQ29udGFpbmVyIGZyb20gJ2NvcmUvdWkvbGF5b3V0L2dyaWRfY29udGFpbmVyJztcbmltcG9ydCBHcmlkSXRlbSBmcm9tICdjb3JlL3VpL2xheW91dC9ncmlkX2l0ZW0nO1xuaW1wb3J0ICcuL3RpdGxlLnNjc3MnO1xuXG5jbGFzcyBDb250ZW50IGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcblxuXHRyZW5kZXIoKXtcblx0XHR2YXIgeyB0aXRsZSwgbG9hZGluZywgcGxhY2Vob2xkZXIgfSA9IHRoaXMucHJvcHM7XG5cdFx0bG9hZGluZyA9IChsb2FkaW5nID09PSB0cnVlKSA/IHRydWUgOiBmYWxzZTtcblx0XHR0aXRsZSA9ICh0aXRsZSkgPyB0aXRsZSA6IDxkaXYvPjtcblx0XHRwbGFjZWhvbGRlciA9IChwbGFjZWhvbGRlcikgPyBwbGFjZWhvbGRlciA6IDxkaXYvPjtcblx0XHRyZXR1cm4gKFxuXHRcdFx0PEdyaWRDb250YWluZXIgY2xhc3NOYW1lPSdtb2QtcG9zdC10aXRsZSc+XG5cdFx0XHRcdDxHcmlkSXRlbSBjbGFzc05hbWU9XCJoZWFkZXIyXCIgZmlsbD5cblx0XHRcdFx0XHR7KCFsb2FkaW5nKSA/IHRoaXMucmVuZGVyQ29udGVudCh0aXRsZSkgOiBwbGFjZWhvbGRlcn1cblx0XHRcdFx0PC9HcmlkSXRlbT5cblx0XHRcdDwvR3JpZENvbnRhaW5lcj5cblx0XHQpO1xuXHR9XG5cblx0cmVuZGVyMigpe1xuXHRcdHZhciB7IHRpdGxlLCBsb2FkaW5nLCBwbGFjZWhvbGRlciB9ID0gdGhpcy5wcm9wcztcblx0XHRsb2FkaW5nID0gKGxvYWRpbmcgPT09IHRydWUpID8gdHJ1ZSA6IGZhbHNlO1xuXHRcdHRpdGxlID0gKHRpdGxlKSA/IHRpdGxlIDogPGRpdi8+O1xuXHRcdHBsYWNlaG9sZGVyID0gKHBsYWNlaG9sZGVyKSA/IHBsYWNlaG9sZGVyIDogPGRpdi8+O1xuXHRcdHJldHVybiAoXG5cdFx0XHQ8R3JpZENvbnRhaW5lciBjbGFzc05hbWU9J21vZC1wb3N0LXRpdGxlJz5cblx0XHRcdFx0PEdyaWRJdGVtIGNsYXNzTmFtZT1cImhlYWRlclwiIGZpbGw+XG5cdFx0XHRcdDwvR3JpZEl0ZW0+XG5cdFx0XHRcdDxHcmlkSXRlbSBjbGFzc05hbWU9XCJ0aXRsZVwiIGZpbGw+XG5cdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJwYXJlbnRcIj5cblx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyXCI+XG5cdFx0XHRcdFx0XHRcdHsoIWxvYWRpbmcpID8gdGhpcy5yZW5kZXJDb250ZW50KHRpdGxlKSA6IHBsYWNlaG9sZGVyfVxuXHRcdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdFx0PC9kaXY+XHRcdFx0XHRcdFxuXHRcdFx0XHQ8L0dyaWRJdGVtPlxuXHRcdFx0PC9HcmlkQ29udGFpbmVyPlxuXHRcdCk7XG5cdH1cblxuXHRyZW5kZXJDb250ZW50KHRpdGxlKXtcblx0XHRyZXR1cm4gKFxuXHRcdFx0PGRpdj5cblx0XHRcdFx0e3RpdGxlfVxuXHRcdFx0PC9kaXY+XHRcdFx0XG5cdFx0KVxuXHR9XG59XG5cbmV4cG9ydCBkZWZhdWx0IENvbnRlbnQ7IiwiXG52YXIgY29udGVudCA9IHJlcXVpcmUoXCIhIS4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL21udC96L2xvY2FsL3NvZnR3YXJlL2Rldi93ZWJhcHBzL2FwcC9yZWFjdC9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9pbmRleC5qcyEuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9tbnQvei9sb2NhbC9zb2Z0d2FyZS9kZXYvd2ViYXBwcy9hcHAvcmVhY3Qvbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2xpYi9sb2FkZXIuanMhLi90aXRsZS5zY3NzXCIpO1xuXG5pZih0eXBlb2YgY29udGVudCA9PT0gJ3N0cmluZycpIGNvbnRlbnQgPSBbW21vZHVsZS5pZCwgY29udGVudCwgJyddXTtcblxudmFyIHRyYW5zZm9ybTtcbnZhciBpbnNlcnRJbnRvO1xuXG5cblxudmFyIG9wdGlvbnMgPSB7XCJobXJcIjp0cnVlfVxuXG5vcHRpb25zLnRyYW5zZm9ybSA9IHRyYW5zZm9ybVxub3B0aW9ucy5pbnNlcnRJbnRvID0gdW5kZWZpbmVkO1xuXG52YXIgdXBkYXRlID0gcmVxdWlyZShcIiEuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9tbnQvei9sb2NhbC9zb2Z0d2FyZS9kZXYvd2ViYXBwcy9hcHAvcmVhY3Qvbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9saWIvYWRkU3R5bGVzLmpzXCIpKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5pZihjb250ZW50LmxvY2FscykgbW9kdWxlLmV4cG9ydHMgPSBjb250ZW50LmxvY2FscztcblxuaWYobW9kdWxlLmhvdCkge1xuXHRtb2R1bGUuaG90LmFjY2VwdChcIiEhLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vbW50L3ovbG9jYWwvc29mdHdhcmUvZGV2L3dlYmFwcHMvYXBwL3JlYWN0L25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2luZGV4LmpzIS4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL21udC96L2xvY2FsL3NvZnR3YXJlL2Rldi93ZWJhcHBzL2FwcC9yZWFjdC9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvbGliL2xvYWRlci5qcyEuL3RpdGxlLnNjc3NcIiwgZnVuY3Rpb24oKSB7XG5cdFx0dmFyIG5ld0NvbnRlbnQgPSByZXF1aXJlKFwiISEuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9tbnQvei9sb2NhbC9zb2Z0d2FyZS9kZXYvd2ViYXBwcy9hcHAvcmVhY3Qvbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvaW5kZXguanMhLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vbW50L3ovbG9jYWwvc29mdHdhcmUvZGV2L3dlYmFwcHMvYXBwL3JlYWN0L25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9saWIvbG9hZGVyLmpzIS4vdGl0bGUuc2Nzc1wiKTtcblxuXHRcdGlmKHR5cGVvZiBuZXdDb250ZW50ID09PSAnc3RyaW5nJykgbmV3Q29udGVudCA9IFtbbW9kdWxlLmlkLCBuZXdDb250ZW50LCAnJ11dO1xuXG5cdFx0dmFyIGxvY2FscyA9IChmdW5jdGlvbihhLCBiKSB7XG5cdFx0XHR2YXIga2V5LCBpZHggPSAwO1xuXG5cdFx0XHRmb3Ioa2V5IGluIGEpIHtcblx0XHRcdFx0aWYoIWIgfHwgYVtrZXldICE9PSBiW2tleV0pIHJldHVybiBmYWxzZTtcblx0XHRcdFx0aWR4Kys7XG5cdFx0XHR9XG5cblx0XHRcdGZvcihrZXkgaW4gYikgaWR4LS07XG5cblx0XHRcdHJldHVybiBpZHggPT09IDA7XG5cdFx0fShjb250ZW50LmxvY2FscywgbmV3Q29udGVudC5sb2NhbHMpKTtcblxuXHRcdGlmKCFsb2NhbHMpIHRocm93IG5ldyBFcnJvcignQWJvcnRpbmcgQ1NTIEhNUiBkdWUgdG8gY2hhbmdlZCBjc3MtbW9kdWxlcyBsb2NhbHMuJyk7XG5cblx0XHR1cGRhdGUobmV3Q29udGVudCk7XG5cdH0pO1xuXG5cdG1vZHVsZS5ob3QuZGlzcG9zZShmdW5jdGlvbigpIHsgdXBkYXRlKCk7IH0pO1xufSIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgRXJyb3JCb3VuZHJ5IGZyb20gJ2NvcmUvY29tcG9uZW50cy9lcnJvcic7XG5cbmNsYXNzIENvbXBvbmVudCBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG5cdHJlbmRlcigpe1xuXHRcdGNvbnN0IHRpdGxlID0gKHRoaXMucHJvcHMudGl0bGUgJiYgdGhpcy5wcm9wcy50aXRsZSAhPT0gXCJcIikgPyB0aGlzLnByb3BzLnRpdGxlIDogbnVsbDtcblx0XHRjb25zdCBjaGlsZHJlbiA9IChcImNvbnRyb2xcIiBpbiB0aGlzLnByb3BzKSA/IHRoaXMucHJvcHMuY29udHJvbCA6IHRoaXMucHJvcHMuY2hpbGRyZW47XG5cdFx0Y29uc3QgdmlzaWJsZSA9IChcImNvbnRyb2xcIiBpbiB0aGlzLnByb3BzICYmIHRoaXMucHJvcHMuY29udHJvbCA9PSBudWxsKSA/IGZhbHNlIDogdHJ1ZTtcblx0XHRjb25zdCBwYWRkaW5nVG9wID0gKFwicGFkZGluZ1RvcFwiIGluIHRoaXMucHJvcHMpID8gdGhpcy5wcm9wcy5wYWRkaW5nVG9wIDogJzdweCc7XG5cdFx0Y29uc3QgY2xlYW4gPSAoXCJjbGVhblwiIGluIHRoaXMucHJvcHMpID8gdHJ1ZSA6IGZhbHNlO1xuXHRcdHZhciBib3JkZXJCb3R0b20gPSAnMXB4IHNvbGlkICNlZWUnO1xuXG5cdFx0aWYoIXZpc2libGUpIHJldHVybiBudWxsO1xuXHRcdGlmKGNsZWFuKSByZXR1cm4gY2hpbGRyZW47XG4gXG5cdFx0dmFyIGtleSA9IDA7XHRcdFxuXHRcdHJldHVybiAoXG5cdFx0XHQ8ZGl2IGNsYXNzTmFtZT0nbW9kLWJsb2NrJyBzdHlsZT17e2JvcmRlckJvdHRvbTogYm9yZGVyQm90dG9tLCBiYWNrZ3JvdW5kQ29sb3I6ICd3aGl0ZScsIHBhZGRpbmc6ICc3cHgnLCBwYWRkaW5nVG9wOiBwYWRkaW5nVG9wfX0+XG5cdFx0XHRcdHt0aXRsZSAmJiA8aDE+e3RpdGxlfTwvaDE+fVxuXHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT0nYm9keSc+XG5cdFx0XHRcdFx0PEVycm9yQm91bmRyeSBmcm9tPXt0aXRsZX0+XG5cdFx0XHRcdFx0XHR7Y2hpbGRyZW59XG5cdFx0XHRcdFx0PC9FcnJvckJvdW5kcnk+XG5cdFx0XHRcdDwvZGl2PlxuXHRcdFx0PC9kaXY+XG5cdFx0KTtcblx0fVxufVxuXG5leHBvcnQgZGVmYXVsdCAoQ29tcG9uZW50KTsiLCJjbGFzcyBNb2R1bGVzIHtcbn1cblxuXG5Nb2R1bGVzLkdhbWVzID0gZmFsc2U7XG5Nb2R1bGVzLlN0YW5kaW5ncyA9IGZhbHNlO1xuTW9kdWxlcy5Qb3N0U2Vhc29uID0gZmFsc2U7XG5Nb2R1bGVzLlRyYW5zZmVycyA9IHRydWU7XG5cbmV4cG9ydCBkZWZhdWx0IChNb2R1bGVzKTsiXSwic291cmNlUm9vdCI6IiJ9