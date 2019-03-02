(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[1],{

/***/ "../../../../frameworks/webapps/startup/node_modules/css-loader/dist/cjs.js!../../../../frameworks/webapps/startup/node_modules/sass-loader/lib/loader.js!./src/jmarroyave/components/uxi/cv/latest_courses.scss":
/*!*************************************************************************************************************************************************************************************************************************************!*\
  !*** /media/jm/labs/dev/frameworks/webapps/startup/node_modules/css-loader/dist/cjs.js!/media/jm/labs/dev/frameworks/webapps/startup/node_modules/sass-loader/lib/loader.js!./src/jmarroyave/components/uxi/cv/latest_courses.scss ***!
  \*************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../../../../../../frameworks/webapps/startup/node_modules/css-loader/dist/runtime/api.js */ "../../../../frameworks/webapps/startup/node_modules/css-loader/dist/runtime/api.js")(false);
// Module
exports.push([module.i, ".mod-latest-courses .course {\n  padding: 2em;\n  color: #333 !important; }\n\n.mod-latest-courses .course .header .from {\n  font-size: 1.25em; }\n\n.mod-latest-courses .course .name {\n  font-size: 2.0em;\n  line-height: 1.25em; }\n\n.mod-latest-courses .course .platform {\n  font-size: 0.75em; }\n", ""]);



/***/ }),

/***/ "../../../../frameworks/webapps/startup/node_modules/css-loader/dist/cjs.js!../../../../frameworks/webapps/startup/node_modules/sass-loader/lib/loader.js!./src/jmarroyave/components/uxi/home/hero.scss":
/*!*****************************************************************************************************************************************************************************************************************************!*\
  !*** /media/jm/labs/dev/frameworks/webapps/startup/node_modules/css-loader/dist/cjs.js!/media/jm/labs/dev/frameworks/webapps/startup/node_modules/sass-loader/lib/loader.js!./src/jmarroyave/components/uxi/home/hero.scss ***!
  \*****************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../../../../../../frameworks/webapps/startup/node_modules/css-loader/dist/runtime/api.js */ "../../../../frameworks/webapps/startup/node_modules/css-loader/dist/runtime/api.js")(false);
// Module
exports.push([module.i, ".mod-hero {\n  display: table;\n  padding: 0px;\n  margin: 0px;\n  height: 85%; }\n\n.mod-hero .container {\n  display: table-cell;\n  vertical-align: middle;\n  padding: 0px;\n  margin: 0px;\n  height: 100%; }\n\n.mod-hero h1 {\n  font-size: 2em;\n  line-height: 1.2em;\n  font-weight: lighter;\n  padding: 0px;\n  margin: 0px;\n  white-space: nowrap;\n  text-overflow: ellipsis; }\n\n.mod-hero h2 {\n  font-size: 1.2em;\n  line-height: 1.1em;\n  padding: 0px;\n  margin: 0px; }\n", ""]);



/***/ }),

/***/ "../../../../frameworks/webapps/startup/node_modules/css-loader/dist/cjs.js!../../../../frameworks/webapps/startup/node_modules/sass-loader/lib/loader.js!./src/jmarroyave/components/uxi/home/recent.scss":
/*!*******************************************************************************************************************************************************************************************************************************!*\
  !*** /media/jm/labs/dev/frameworks/webapps/startup/node_modules/css-loader/dist/cjs.js!/media/jm/labs/dev/frameworks/webapps/startup/node_modules/sass-loader/lib/loader.js!./src/jmarroyave/components/uxi/home/recent.scss ***!
  \*******************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../../../../../../frameworks/webapps/startup/node_modules/css-loader/dist/runtime/api.js */ "../../../../frameworks/webapps/startup/node_modules/css-loader/dist/runtime/api.js")(false);
// Module
exports.push([module.i, ".mod-recent {\n  text-align: center; }\n\n.mod-recent .post a {\n  color: white;\n  font-weight: bold; }\n\n.mod-recent .post a.visited {\n  color: #c0c0c0; }\n", ""]);



/***/ }),

/***/ "./src/core/ui/layout/section.js":
/*!***************************************!*\
  !*** ./src/core/ui/layout/section.js ***!
  \***************************************/
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
      var _this$props = this.props,
          className = _this$props.className,
          type = _this$props.type;
      var height = type === 'cover' ? "100vh" : "inherit";
      return _react.default.createElement("div", {
        className: className,
        style: {
          boxSizing: 'border-box',
          width: '100%',
          height: height
        }
      }, this.props.children);
    }
  }]);

  return LayoutSection;
}(_react.default.Component);

var _default = LayoutSection;
exports.default = _default;

/***/ }),

/***/ "./src/core/ui/list.js":
/*!*****************************!*\
  !*** ./src/core/ui/list.js ***!
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

var _styles = __webpack_require__(/*! @material-ui/core/styles */ "./node_modules/@material-ui/core/styles/index.js");

var _Avatar = _interopRequireDefault(__webpack_require__(/*! @material-ui/core/Avatar */ "./node_modules/@material-ui/core/Avatar/index.js"));

var _List = _interopRequireDefault(__webpack_require__(/*! @material-ui/core/List */ "./node_modules/@material-ui/core/List/index.js"));

var _ListItem = _interopRequireDefault(__webpack_require__(/*! @material-ui/core/ListItem */ "./node_modules/@material-ui/core/ListItem/index.js"));

var _ListItemAvatar = _interopRequireDefault(__webpack_require__(/*! @material-ui/core/ListItemAvatar */ "./node_modules/@material-ui/core/ListItemAvatar/index.js"));

var _ListItemText = _interopRequireDefault(__webpack_require__(/*! @material-ui/core/ListItemText */ "./node_modules/@material-ui/core/ListItemText/index.js"));

var _Divider = _interopRequireDefault(__webpack_require__(/*! @material-ui/core/Divider */ "./node_modules/@material-ui/core/Divider/index.js"));

var _placeholder = _interopRequireDefault(__webpack_require__(/*! core/ui/placeholder */ "./src/core/ui/placeholder.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

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

function ListItem(_ref) {
  var item = _ref.item,
      button = _ref.button,
      avatarType = _ref.avatarType,
      avatarLambda = _ref.avatarLambda,
      primaryLambda = _ref.primaryLambda;
  avatarLambda = avatarLambda ? avatarLambda : function (item) {
    return item;
  };
  return _react.default.createElement(_ListItem.default, {
    button: button
  }, avatarType !== false && (avatarType === "text" ? _react.default.createElement(_ListItemAvatar.default, null, _react.default.createElement(_Avatar.default, null, avatarLambda(item))) : _react.default.createElement(_ListItemAvatar.default, null, _react.default.createElement(_Avatar.default, {
    src: avatarLambda(item)
  }))), _react.default.createElement(_ListItemText.default, {
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
          noData = _this$props.noData;
      var key = 0;
      data = data ? data.slice(0, maxItems) : [];
      maxItems = !maxItems || maxItems == 0 ? 10 : maxItems;
      noData = noData ? noData : "no items";
      if (loading === true) return this.renderLoading(maxItems);
      if (!data || data.length == 0) return this.renderNoItems(noData);
      return _react.default.createElement(_List.default, null, data.map(function (item, idx) {
        return _react.default.createElement("div", {
          key: key++
        }, goToLambda ? _react.default.createElement(_reactRouterDom.Link, {
          to: goToLambda(item)
        }, _react.default.createElement(ListItem, _extends({
          button: true,
          item: item
        }, _this.props))) : _react.default.createElement(ListItem, _extends({
          item: item
        }, _this.props)), key < data.length && _react.default.createElement(_Divider.default, null));
      }));
    }
  }, {
    key: "renderLoading",
    value: function renderLoading(maxItems) {
      maxItems = maxItems == -1 ? 5 : maxItems;
      var data = [];

      for (var i = 0; i < maxItems; i++) {
        data.push(i);
      }

      var key = 0;
      var ph = this.renderPlaceholder();
      return _react.default.createElement(_List.default, null, data.map(function (item, idx) {
        return _react.default.createElement("div", {
          key: key++
        }, _react.default.createElement(_ListItem.default, null, _react.default.createElement(_ListItemAvatar.default, null, _react.default.createElement(_Avatar.default, null, " ")), _react.default.createElement(_ListItemText.default, {
          primary: ph
        })), key < data.length && _react.default.createElement(_Divider.default, null));
      }));
    }
  }, {
    key: "renderPlaceholder",
    value: function renderPlaceholder() {
      return _react.default.createElement(_placeholder.default, {
        data: [[["-", 220, 10]]]
      });
    }
  }, {
    key: "renderNoItems",
    value: function renderNoItems(noData) {
      return _react.default.createElement(_List.default, null, _react.default.createElement(_ListItem.default, null, _react.default.createElement(_ListItemText.default, {
        primary: noData
      })));
    }
  }]);

  return List;
}(_react.default.Component);

var _default = (0, _styles.withStyles)(styles)(List);

exports.default = _default;

/***/ }),

/***/ "./src/core/ui/paper.js":
/*!******************************!*\
  !*** ./src/core/ui/paper.js ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "./node_modules/react/index.js"));

var _Paper = _interopRequireDefault(__webpack_require__(/*! @material-ui/core/Paper */ "./node_modules/@material-ui/core/Paper/index.js"));

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

var Paper =
/*#__PURE__*/
function (_React$Component) {
  _inherits(Paper, _React$Component);

  function Paper() {
    _classCallCheck(this, Paper);

    return _possibleConstructorReturn(this, _getPrototypeOf(Paper).apply(this, arguments));
  }

  _createClass(Paper, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          children = _this$props.children,
          className = _this$props.className,
          elevation = _this$props.elevation,
          style = _this$props.style,
          fill = _this$props.fill;
      style = style ? style : {};

      if (fill) {
        style.width = "100%";
      }

      return _react.default.createElement(_Paper.default, {
        className: className,
        style: style,
        elevation: elevation
      }, children);
    }
  }]);

  return Paper;
}(_react.default.Component);

var _default = Paper;
exports.default = _default;

/***/ }),

/***/ "./src/core/ui/placeholder.js":
/*!************************************!*\
  !*** ./src/core/ui/placeholder.js ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "./node_modules/react/index.js"));

var _reactContentLoader = _interopRequireDefault(__webpack_require__(/*! react-content-loader */ "./node_modules/react-content-loader/dist/react-content-loader.es.js"));

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
      spacing = spacing ? parseInt(spacing) : 2;

      var _this$renderPlacehold = this.renderPlaceholders(data, spacing),
          height = _this$renderPlacehold.height,
          width = _this$renderPlacehold.width,
          phs = _this$renderPlacehold.phs;

      return _react.default.createElement(_reactContentLoader.default, {
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
              _ph = _react.default.createElement("rect", {
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
              _ph = _react.default.createElement("rect", {
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

        y += ph[2] + padding;
      }

      height = y + padding;
      width = width;
      return {
        height: height,
        width: width,
        phs: phs
      };
    }
  }]);

  return PH;
}(_react.default.Component);

var _default = PH;
exports.default = _default;

/***/ }),

/***/ "./src/core/ui/slider.js":
/*!*******************************!*\
  !*** ./src/core/ui/slider.js ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "./node_modules/react/index.js"));

var _reactSlick = _interopRequireDefault(__webpack_require__(/*! react-slick */ "./node_modules/react-slick/lib/index.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

var Slider =
/*#__PURE__*/
function (_React$Component) {
  _inherits(Slider, _React$Component);

  function Slider() {
    _classCallCheck(this, Slider);

    return _possibleConstructorReturn(this, _getPrototypeOf(Slider).apply(this, arguments));
  }

  _createClass(Slider, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          xs = _this$props.xs,
          sm = _this$props.sm,
          md = _this$props.md,
          lg = _this$props.lg,
          xl = _this$props.xl,
          children = _this$props.children,
          dots = _this$props.dots;
      var responsiveSettings = [];
      dots = dots ? dots : true;
      xs = xs ? xs : 1;
      sm = sm ? sm : xs;
      md = md ? md : sm;
      lg = lg ? lg : md;
      xl = xl ? xl : lg;

      if (xs) {
        responsiveSettings.push({
          breakpoint: 360,
          settings: {
            slidesToShow: parseInt(xs)
          }
        });
      }

      if (sm) {
        responsiveSettings.push({
          breakpoint: 640,
          settings: {
            slidesToShow: parseInt(sm)
          }
        });
      }

      if (md) {
        responsiveSettings.push({
          breakpoint: 1280,
          settings: {
            slidesToShow: parseInt(md)
          }
        });
      }

      if (lg) {
        responsiveSettings.push({
          breakpoint: 2400,
          settings: {
            slidesToShow: parseInt(lg)
          }
        });
      }

      if (xl) {
        responsiveSettings.push({
          breakpoint: 4800,
          settings: {
            slidesToShow: parseInt(xl)
          }
        });
      }

      var settings = {
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        dots: dots,
        initialSlide: 0,
        responsive: responsiveSettings
      };
      return _react.default.createElement("div", {
        style: {
          margin: "0rem 1rem"
        }
      }, _react.default.createElement(_reactSlick.default, _extends({}, settings, {
        style: {
          width: '95%'
        }
      }), children));
    }
  }]);

  return Slider;
}(_react.default.Component);

var _default = Slider;
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

var _withModule = _interopRequireDefault(__webpack_require__(/*! core/components/with-module */ "./src/core/components/with-module.js"));

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

var _grid_container = _interopRequireDefault(__webpack_require__(/*! core/ui/layout/grid_container */ "./src/core/ui/layout/grid_container.js"));

var _grid_item = _interopRequireDefault(__webpack_require__(/*! core/ui/layout/grid_item */ "./src/core/ui/layout/grid_item.js"));

var _reactStarRatings = _interopRequireDefault(__webpack_require__(/*! react-star-ratings */ "./node_modules/react-star-ratings/build/index.js"));

var _placeholder = _interopRequireDefault(__webpack_require__(/*! core/ui/placeholder */ "./src/core/ui/placeholder.js"));

var _paper = _interopRequireDefault(__webpack_require__(/*! core/ui/paper */ "./src/core/ui/paper.js"));

var _slider = _interopRequireDefault(__webpack_require__(/*! core/ui/slider */ "./src/core/ui/slider.js"));

var _list = _interopRequireDefault(__webpack_require__(/*! core/ui/list */ "./src/core/ui/list.js"));

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

function _objectDestructuringEmpty(obj) { if (obj == null) throw new TypeError("Cannot destructure undefined"); }

function Course(_ref) {
  var data = _ref.data;
  if (!data) return _react.default.createElement(RenderPlaceholder, null);
  return _react.default.createElement("div", null, _react.default.createElement("div", {
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

function RenderPlaceholder(_ref2) {
  _objectDestructuringEmpty(_ref2);

  return _react.default.createElement("div", null, _react.default.createElement(_placeholder.default, {
    data: [[["-", "80", "5"]], [["-", "150", "20"]], [["-", "150", "10"]], [["-", "150", "10"]]]
  }));
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
      var _this$props = this.props,
          data = _this$props.data,
          max = _this$props.max,
          dots = _this$props.dots,
          renderer = _this$props.renderer;
      var key = 0;
      renderer = renderer ? renderer : "list";
      max = max ? max : 3;
      dots = dots ? dots : true;
      data = data ? data.slice(0, max) : [null];
      return _react.default.createElement("div", {
        className: "mod-latest-courses"
      }, renderer === "list" ? this.renderList(data) : this.renderSlider(dots, data));
    }
  }, {
    key: "renderList",
    value: function renderList(data) {
      return _react.default.createElement(_list.default, {
        loading: data[0] == null ? true : false,
        maxItems: data.length,
        data: data,
        primaryLambda: function primaryLambda(item) {
          return _react.default.createElement(Course, {
            data: item
          });
        },
        avatarType: false
      });
    }
  }, {
    key: "renderSlider",
    value: function renderSlider(dots, data) {
      var children = [];

      for (var i = 0; i < data.length; i++) {
        children.push(_react.default.createElement("div", {
          key: i
        }, _react.default.createElement("div", {
          style: {
            padding: "1rem"
          }
        }, _react.default.createElement(_paper.default, {
          className: "course"
        }, _react.default.createElement(Course, {
          data: data[i]
        })))));
      }

      return _react.default.createElement(_slider.default, {
        dots: dots,
        xs: 1,
        sm: 1,
        md: 2,
        lg: 3
      }, children.map(function (item) {
        return item;
      }));
    }
  }]);

  return LatestCourses;
}(_react.default.Component);

var _default = LatestCourses;
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
      }, _react.default.createElement("div", {
        className: "container"
      }, _react.default.createElement("h1", null, "Jos\xE9 Miguel Arroyave O."), _react.default.createElement("h2", null, "Ciencias de la computaci\xF3n")));
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

var _withModule = _interopRequireDefault(__webpack_require__(/*! core/components/with-module */ "./src/core/components/with-module.js"));

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

var _withModule = _interopRequireDefault(__webpack_require__(/*! core/components/with-module */ "./src/core/components/with-module.js"));

var _grid_container = _interopRequireDefault(__webpack_require__(/*! core/ui/layout/grid_container */ "./src/core/ui/layout/grid_container.js"));

var _grid_item = _interopRequireDefault(__webpack_require__(/*! core/ui/layout/grid_item */ "./src/core/ui/layout/grid_item.js"));

var _section = _interopRequireDefault(__webpack_require__(/*! core/ui/layout/section */ "./src/core/ui/layout/section.js"));

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
    key: "render",
    value: function render() {
      var _this$props = this.props,
          data = _this$props.data,
          trends = _this$props.trends;
      var recent = data != null ? data.recent : null;
      var courses = data != null ? data.courses : null;
      return _react.default.createElement(_grid_container.default, null, _react.default.createElement(_grid_item.default, {
        fill: true
      }, _react.default.createElement(_section.default, {
        className: "home-hero",
        type: "cover"
      }, _react.default.createElement(_hero.default, null))), _react.default.createElement(_grid_item.default, {
        fill: true
      }, _react.default.createElement(_section.default, {
        className: "home-recent"
      }, _react.default.createElement(_recent.default, {
        noCheck: true,
        data: recent
      }))), _react.default.createElement(_grid_item.default, {
        fill: true
      }, _react.default.createElement(_section.default, {
        className: "home-trends"
      }, _react.default.createElement(_software_trends.default, {
        noCheck: true,
        data: trends
      }))), _react.default.createElement(_grid_item.default, {
        fill: true
      }, _react.default.createElement(_section.default, {
        className: "home-courses"
      }, _react.default.createElement("h2", null, "eLearning"), _react.default.createElement("div", null, "\xFAltimos cursos tomados en l\xEDnea"), _react.default.createElement(_latest_courses.default, {
        renderer: "slider",
        data: courses
      }))));
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

var _placeholder = _interopRequireDefault(__webpack_require__(/*! core/ui/placeholder */ "./src/core/ui/placeholder.js"));

var _grid_container = _interopRequireDefault(__webpack_require__(/*! core/ui/layout/grid_container */ "./src/core/ui/layout/grid_container.js"));

var _grid_item = _interopRequireDefault(__webpack_require__(/*! core/ui/layout/grid_item */ "./src/core/ui/layout/grid_item.js"));

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

function _objectDestructuringEmpty(obj) { if (obj == null) throw new TypeError("Cannot destructure undefined"); }

function RecentItem(_ref) {
  var data = _ref.data;
  if (!data || data == null) return _react.default.createElement(RenderPlaceholder, null);
  return _react.default.createElement("div", {
    className: "post"
  }, _react.default.createElement(_post_link.default, {
    category: data.area,
    slug: data.slug
  }, data.title));
}

function RenderPlaceholder(_ref2) {
  _objectDestructuringEmpty(_ref2);

  return _react.default.createElement("div", {
    style: {
      width: "60%",
      display: 'inline-flex'
    }
  }, _react.default.createElement(_placeholder.default, {
    data: [[["-", "180", "15"]]]
  }));
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
      var data = this.props.data;
      var key = 0;
      data = data ? data : [null, null, null];
      return _react.default.createElement(_grid_container.default, {
        className: "mod-recent",
        direction: "column",
        justify: "center",
        alignItems: "center"
      }, _react.default.createElement(_grid_item.default, null, _react.default.createElement("h1", null, "posts recientes"), _react.default.createElement("div", {
        className: "items"
      }, data.map(function (item) {
        return _react.default.createElement(RecentItem, {
          data: item,
          key: key++
        });
      }))));
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

var _grid_container = _interopRequireDefault(__webpack_require__(/*! core/ui/layout/grid_container */ "./src/core/ui/layout/grid_container.js"));

var _grid_item = _interopRequireDefault(__webpack_require__(/*! core/ui/layout/grid_item */ "./src/core/ui/layout/grid_item.js"));

var _list = _interopRequireDefault(__webpack_require__(/*! core/ui/list */ "./src/core/ui/list.js"));

var _paper = _interopRequireDefault(__webpack_require__(/*! core/ui/paper */ "./src/core/ui/paper.js"));

var _link = _interopRequireDefault(__webpack_require__(/*! core/ui/link */ "./src/core/ui/link.js"));

var _slider = _interopRequireDefault(__webpack_require__(/*! core/ui/slider */ "./src/core/ui/slider.js"));

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

var sections = [{
  title: "Lenguages",
  subtitle: "lenguajes, compiladores, interpretes.",
  key: "lang"
}, {
  title: 'Plataformas',
  subtitle: "sistemas operativos.",
  key: 'os'
}, {
  title: 'Frameworks',
  subtitle: "frameworks, bibliotecas.",
  key: 'fw'
}, {
  title: 'Herramientas',
  subtitle: "IDEs, paquetes, pipelines.",
  key: 'tools'
}, {
  title: 'Bases de Datos',
  subtitle: "relacionales, no-sql.",
  key: 'db'
}, {
  title: 'Servicios',
  subtitle: "clouds.",
  key: 'services'
}];

function SectionTrends(_ref) {
  var title = _ref.title,
      subtitle = _ref.subtitle,
      data = _ref.data;
  var key = 0;
  return _react.default.createElement("div", {
    style: {
      padding: "1rem"
    }
  }, _react.default.createElement(_paper.default, {
    key: key++,
    style: {
      padding: "1rem",
      flex: 1
    },
    fill: true
  }, _react.default.createElement("h1", null, title), _react.default.createElement("h6", null, subtitle), _react.default.createElement(_list.default, {
    loading: data == null ? true : false,
    maxItems: 5,
    data: data,
    primaryLambda: function primaryLambda(item) {
      return item.text;
    },
    avatarLambda: function avatarLambda(item) {
      return "/res/img/default-original.svg";
    },
    avatarType: "img"
  })));
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
      return _react.default.createElement(_grid_container.default, {
        spacing: 8
      }, _react.default.createElement(_grid_item.default, {
        xs: 12
      }, _react.default.createElement("h2", null, "software en stackoverflow"), _react.default.createElement("div", null, "tendencias en uso de software para desarrollo obtenido de las preguntas de la comunidad de stackoverflow. ", _react.default.createElement(_link.default, {
        to: 'labs/stackoverflow'
      }, "ver m\xE1s"))), _react.default.createElement(_grid_item.default, {
        xs: 12
      }, this.renderSlider(sections, data)));
    }
  }, {
    key: "renderSlider",
    value: function renderSlider(sections, data) {
      return _react.default.createElement(_slider.default, {
        xs: 1,
        sm: 1,
        md: 2,
        lg: 3
      }, sections.map(function (section, key) {
        return _react.default.createElement("div", {
          key: key
        }, _react.default.createElement(SectionTrends, {
          title: section.title,
          subtitle: section.subtitle,
          data: data ? data[section.key] : null
        }));
      }));
    }
  }]);

  return SoftwareTrendComponent;
}(_react.default.Component);

var _default = SoftwareTrendComponent;
exports.default = _default;

/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvam1hcnJveWF2ZS9jb21wb25lbnRzL3V4aS9jdi9sYXRlc3RfY291cnNlcy5zY3NzIiwid2VicGFjazovLy8uL3NyYy9qbWFycm95YXZlL2NvbXBvbmVudHMvdXhpL2hvbWUvaGVyby5zY3NzIiwid2VicGFjazovLy8uL3NyYy9qbWFycm95YXZlL2NvbXBvbmVudHMvdXhpL2hvbWUvcmVjZW50LnNjc3MiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvcmUvdWkvbGF5b3V0L3NlY3Rpb24uanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvcmUvdWkvbGlzdC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29yZS91aS9wYXBlci5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29yZS91aS9wbGFjZWhvbGRlci5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29yZS91aS9zbGlkZXIuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2ptYXJyb3lhdmUvY29tcG9uZW50cy9kYXRhL3Bvc3RfbGluay5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvam1hcnJveWF2ZS9jb21wb25lbnRzL3V4aS9jdi9sYXRlc3RfY291cnNlcy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvam1hcnJveWF2ZS9jb21wb25lbnRzL3V4aS9jdi9sYXRlc3RfY291cnNlcy5zY3NzPzIxOWQiLCJ3ZWJwYWNrOi8vLy4vc3JjL2ptYXJyb3lhdmUvY29tcG9uZW50cy91eGkvaG9tZS9oZXJvLmpzIiwid2VicGFjazovLy8uL3NyYy9qbWFycm95YXZlL2NvbXBvbmVudHMvdXhpL2hvbWUvaGVyby5zY3NzPzNiY2EiLCJ3ZWJwYWNrOi8vLy4vc3JjL2ptYXJyb3lhdmUvY29tcG9uZW50cy91eGkvaG9tZS9sYXlvdXQvaG9tZS1sYXlvdXQtcHJveHkuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2ptYXJyb3lhdmUvY29tcG9uZW50cy91eGkvaG9tZS9sYXlvdXQvbGcvaG9tZS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvam1hcnJveWF2ZS9jb21wb25lbnRzL3V4aS9ob21lL3JlY2VudC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvam1hcnJveWF2ZS9jb21wb25lbnRzL3V4aS9ob21lL3JlY2VudC5zY3NzP2EzYmEiLCJ3ZWJwYWNrOi8vLy4vc3JjL2ptYXJyb3lhdmUvY29tcG9uZW50cy91eGkvaG9tZS9zb2Z0d2FyZV90cmVuZHMuanMiXSwibmFtZXMiOlsiTGF5b3V0U2VjdGlvbiIsInByb3BzIiwiY2xhc3NOYW1lIiwidHlwZSIsImhlaWdodCIsImJveFNpemluZyIsIndpZHRoIiwiY2hpbGRyZW4iLCJSZWFjdCIsIkNvbXBvbmVudCIsInN0eWxlcyIsInRoZW1lIiwicm93IiwiYmFja2dyb3VuZENvbG9yIiwicGFsZXR0ZSIsImJhY2tncm91bmQiLCJkZWZhdWx0IiwiTGlzdEl0ZW0iLCJpdGVtIiwiYnV0dG9uIiwiYXZhdGFyVHlwZSIsImF2YXRhckxhbWJkYSIsInByaW1hcnlMYW1iZGEiLCJMaXN0IiwiZGF0YSIsImdvVG9MYW1iZGEiLCJtYXhJdGVtcyIsImxvYWRpbmciLCJub0RhdGEiLCJrZXkiLCJzbGljZSIsInJlbmRlckxvYWRpbmciLCJsZW5ndGgiLCJyZW5kZXJOb0l0ZW1zIiwibWFwIiwiaWR4IiwiaSIsInB1c2giLCJwaCIsInJlbmRlclBsYWNlaG9sZGVyIiwiUGFwZXIiLCJlbGV2YXRpb24iLCJzdHlsZSIsImZpbGwiLCJQSCIsInNwYWNpbmciLCJwYXJzZUludCIsInJlbmRlclBsYWNlaG9sZGVycyIsInBocyIsInkiLCJfcGgiLCJwYWRkaW5nIiwieCIsImoiLCJwYWQiLCJTbGlkZXIiLCJ4cyIsInNtIiwibWQiLCJsZyIsInhsIiwiZG90cyIsInJlc3BvbnNpdmVTZXR0aW5ncyIsImJyZWFrcG9pbnQiLCJzZXR0aW5ncyIsInNsaWRlc1RvU2hvdyIsImluZmluaXRlIiwic2xpZGVzVG9TY3JvbGwiLCJpbml0aWFsU2xpZGUiLCJyZXNwb25zaXZlIiwibWFyZ2luIiwiUG9zdExpbmtDb21wb25lbnQiLCJzbHVnIiwiY2F0ZWdvcnkiLCJDb3Vyc2UiLCJwbGF0Zm9ybSIsInJhdGluZyIsIm5hbWUiLCJmcm9tIiwiUmVuZGVyUGxhY2Vob2xkZXIiLCJMYXRlc3RDb3Vyc2VzIiwibWF4IiwicmVuZGVyZXIiLCJyZW5kZXJMaXN0IiwicmVuZGVyU2xpZGVyIiwiUGFnZUNvbXBvbmVudCIsInJlbmRlckRlZmF1bHQiLCJ0cmVuZHMiLCJyZWNlbnQiLCJjb3Vyc2VzIiwiUmVjZW50SXRlbSIsImFyZWEiLCJ0aXRsZSIsImRpc3BsYXkiLCJSZWNlbnRJdGVtcyIsInNlY3Rpb25zIiwic3VidGl0bGUiLCJTZWN0aW9uVHJlbmRzIiwiZmxleCIsInRleHQiLCJTb2Z0d2FyZVRyZW5kQ29tcG9uZW50Iiwic2VjdGlvbiJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQUEsMkJBQTJCLG1CQUFPLENBQUMsNkxBQW1HO0FBQ3RJO0FBQ0EsY0FBYyxRQUFTLGdDQUFnQyxpQkFBaUIsMkJBQTJCLEVBQUUsK0NBQStDLHNCQUFzQixFQUFFLHVDQUF1QyxxQkFBcUIsd0JBQXdCLEVBQUUsMkNBQTJDLHNCQUFzQixFQUFFOzs7Ozs7Ozs7Ozs7O0FDRnJVLDJCQUEyQixtQkFBTyxDQUFDLDZMQUFtRztBQUN0STtBQUNBLGNBQWMsUUFBUyxjQUFjLG1CQUFtQixpQkFBaUIsZ0JBQWdCLGdCQUFnQixFQUFFLDBCQUEwQix3QkFBd0IsMkJBQTJCLGlCQUFpQixnQkFBZ0IsaUJBQWlCLEVBQUUsa0JBQWtCLG1CQUFtQix1QkFBdUIseUJBQXlCLGlCQUFpQixnQkFBZ0Isd0JBQXdCLDRCQUE0QixFQUFFLGtCQUFrQixxQkFBcUIsdUJBQXVCLGlCQUFpQixnQkFBZ0IsRUFBRTs7Ozs7Ozs7Ozs7OztBQ0Z6ZiwyQkFBMkIsbUJBQU8sQ0FBQyw2TEFBbUc7QUFDdEk7QUFDQSxjQUFjLFFBQVMsZ0JBQWdCLHVCQUF1QixFQUFFLHlCQUF5QixpQkFBaUIsc0JBQXNCLEVBQUUsaUNBQWlDLG1CQUFtQixFQUFFOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7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Q0FBVjtBQUNBLGFBQ0ksNkJBQUMsdUJBQUQ7QUFBZSxlQUFPLEVBQUU7QUFBeEIsU0FDSSw2QkFBQyxrQkFBRDtBQUFVLFVBQUUsRUFBRTtBQUFkLFNBQ0UscUVBREYsRUFFRSx3SkFBK0csNkJBQUMsYUFBRDtBQUFNLFVBQUUsRUFBRTtBQUFWLHNCQUEvRyxDQUZGLENBREosRUFLSSw2QkFBQyxrQkFBRDtBQUFVLFVBQUUsRUFBRTtBQUFkLFNBQ0csS0FBS3VELFlBQUwsQ0FBa0JXLFFBQWxCLEVBQTRCdkUsSUFBNUIsQ0FESCxDQUxKLENBREo7QUFXRDs7O2lDQUVZdUUsUSxFQUFVdkUsSSxFQUFNO0FBQzNCLGFBQ0UsNkJBQUMsZUFBRDtBQUFRLFVBQUUsRUFBRSxDQUFaO0FBQWUsVUFBRSxFQUFFLENBQW5CO0FBQXNCLFVBQUUsRUFBRSxDQUExQjtBQUE2QixVQUFFLEVBQUU7QUFBakMsU0FDS3VFLFFBQVEsQ0FBQzdELEdBQVQsQ0FBYSxVQUFDbUUsT0FBRCxFQUFVeEUsR0FBVjtBQUFBLGVBQ1o7QUFBSyxhQUFHLEVBQUVBO0FBQVYsV0FDRSw2QkFBQyxhQUFEO0FBQWUsZUFBSyxFQUFFd0UsT0FBTyxDQUFDVCxLQUE5QjtBQUFxQyxrQkFBUSxFQUFFUyxPQUFPLENBQUNMLFFBQXZEO0FBQWlFLGNBQUksRUFBR3hFLElBQUQsR0FBU0EsSUFBSSxDQUFDNkUsT0FBTyxDQUFDeEUsR0FBVCxDQUFiLEdBQTZCO0FBQXBHLFVBREYsQ0FEWTtBQUFBLE9BQWIsQ0FETCxDQURGO0FBU0Q7Ozs7RUEzQmtDckIsZUFBTUMsUzs7ZUErQjVCMkYsc0IiLCJmaWxlIjoiMS5qcyIsInNvdXJjZXNDb250ZW50IjpbImV4cG9ydHMgPSBtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCIuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9mcmFtZXdvcmtzL3dlYmFwcHMvc3RhcnR1cC9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCIpKGZhbHNlKTtcbi8vIE1vZHVsZVxuZXhwb3J0cy5wdXNoKFttb2R1bGUuaWQsIFwiLm1vZC1sYXRlc3QtY291cnNlcyAuY291cnNlIHtcXG4gIHBhZGRpbmc6IDJlbTtcXG4gIGNvbG9yOiAjMzMzICFpbXBvcnRhbnQ7IH1cXG5cXG4ubW9kLWxhdGVzdC1jb3Vyc2VzIC5jb3Vyc2UgLmhlYWRlciAuZnJvbSB7XFxuICBmb250LXNpemU6IDEuMjVlbTsgfVxcblxcbi5tb2QtbGF0ZXN0LWNvdXJzZXMgLmNvdXJzZSAubmFtZSB7XFxuICBmb250LXNpemU6IDIuMGVtO1xcbiAgbGluZS1oZWlnaHQ6IDEuMjVlbTsgfVxcblxcbi5tb2QtbGF0ZXN0LWNvdXJzZXMgLmNvdXJzZSAucGxhdGZvcm0ge1xcbiAgZm9udC1zaXplOiAwLjc1ZW07IH1cXG5cIiwgXCJcIl0pO1xuXG4iLCJleHBvcnRzID0gbW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vZnJhbWV3b3Jrcy93ZWJhcHBzL3N0YXJ0dXAvbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiKShmYWxzZSk7XG4vLyBNb2R1bGVcbmV4cG9ydHMucHVzaChbbW9kdWxlLmlkLCBcIi5tb2QtaGVybyB7XFxuICBkaXNwbGF5OiB0YWJsZTtcXG4gIHBhZGRpbmc6IDBweDtcXG4gIG1hcmdpbjogMHB4O1xcbiAgaGVpZ2h0OiA4NSU7IH1cXG5cXG4ubW9kLWhlcm8gLmNvbnRhaW5lciB7XFxuICBkaXNwbGF5OiB0YWJsZS1jZWxsO1xcbiAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcXG4gIHBhZGRpbmc6IDBweDtcXG4gIG1hcmdpbjogMHB4O1xcbiAgaGVpZ2h0OiAxMDAlOyB9XFxuXFxuLm1vZC1oZXJvIGgxIHtcXG4gIGZvbnQtc2l6ZTogMmVtO1xcbiAgbGluZS1oZWlnaHQ6IDEuMmVtO1xcbiAgZm9udC13ZWlnaHQ6IGxpZ2h0ZXI7XFxuICBwYWRkaW5nOiAwcHg7XFxuICBtYXJnaW46IDBweDtcXG4gIHdoaXRlLXNwYWNlOiBub3dyYXA7XFxuICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpczsgfVxcblxcbi5tb2QtaGVybyBoMiB7XFxuICBmb250LXNpemU6IDEuMmVtO1xcbiAgbGluZS1oZWlnaHQ6IDEuMWVtO1xcbiAgcGFkZGluZzogMHB4O1xcbiAgbWFyZ2luOiAwcHg7IH1cXG5cIiwgXCJcIl0pO1xuXG4iLCJleHBvcnRzID0gbW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vZnJhbWV3b3Jrcy93ZWJhcHBzL3N0YXJ0dXAvbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiKShmYWxzZSk7XG4vLyBNb2R1bGVcbmV4cG9ydHMucHVzaChbbW9kdWxlLmlkLCBcIi5tb2QtcmVjZW50IHtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjsgfVxcblxcbi5tb2QtcmVjZW50IC5wb3N0IGEge1xcbiAgY29sb3I6IHdoaXRlO1xcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7IH1cXG5cXG4ubW9kLXJlY2VudCAucG9zdCBhLnZpc2l0ZWQge1xcbiAgY29sb3I6ICNjMGMwYzA7IH1cXG5cIiwgXCJcIl0pO1xuXG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgd2l0aFN0eWxlcyB9IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL3N0eWxlcyc7XG5cbmNsYXNzIExheW91dFNlY3Rpb24gZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQgeyBcbiAgcmVuZGVyKCkge1xuICAgIHZhciB7IGNsYXNzTmFtZSwgdHlwZSB9ID0gdGhpcy5wcm9wcztcbiAgICB2YXIgaGVpZ2h0ID0gKHR5cGUgPT09ICdjb3ZlcicpID8gXCIxMDB2aFwiIDogXCJpbmhlcml0XCI7IFxuICAgIHJldHVybiAoXG4gICAgICA8ZGl2IGNsYXNzTmFtZT17Y2xhc3NOYW1lfSBzdHlsZT17e2JveFNpemluZzogJ2JvcmRlci1ib3gnLCB3aWR0aDogJzEwMCUnLCBoZWlnaHQ6IGhlaWdodH19PlxuICAgICAgICB7dGhpcy5wcm9wcy5jaGlsZHJlbn1cbiAgICAgIDwvZGl2PlxuICAgICk7XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgTGF5b3V0U2VjdGlvbjsiLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgTGluayB9IGZyb20gJ3JlYWN0LXJvdXRlci1kb20nO1xuXG5pbXBvcnQgeyB3aXRoU3R5bGVzIH0gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvc3R5bGVzJztcbmltcG9ydCBNREF2YXRhciBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9BdmF0YXInO1xuaW1wb3J0IE1ETGlzdCBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9MaXN0JztcbmltcG9ydCBNRExpc3RJdGVtIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL0xpc3RJdGVtJztcbmltcG9ydCBNRExpc3RJdGVtQXZhdGFyIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL0xpc3RJdGVtQXZhdGFyJztcbmltcG9ydCBNRExpc3RJdGVtVGV4dCBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9MaXN0SXRlbVRleHQnO1xuaW1wb3J0IE1ERGl2aWRlciBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9EaXZpZGVyJztcblxuaW1wb3J0IFBsYWNlaG9sZGVyIGZyb20gJ2NvcmUvdWkvcGxhY2Vob2xkZXInO1xuXG5jb25zdCBzdHlsZXMgPSB0aGVtZSA9PiAoe1xuICByb3c6IHtcbiAgICAnJjpudGgtb2YtdHlwZShvZGQpJzoge1xuICAgICAgYmFja2dyb3VuZENvbG9yOiB0aGVtZS5wYWxldHRlLmJhY2tncm91bmQuZGVmYXVsdCxcbiAgICB9LFxuICB9LFxufSk7XG5cbmZ1bmN0aW9uIExpc3RJdGVtKHtpdGVtLCBidXR0b24sIGF2YXRhclR5cGUsIGF2YXRhckxhbWJkYSwgcHJpbWFyeUxhbWJkYX0pe1xuICBhdmF0YXJMYW1iZGEgPSAoYXZhdGFyTGFtYmRhKSA/IGF2YXRhckxhbWJkYSA6IChpdGVtPT5pdGVtKTtcbiAgcmV0dXJuIChcbiAgICAgIDxNRExpc3RJdGVtIGJ1dHRvbj17YnV0dG9ufT5cbiAgICAgICAgICB7KGF2YXRhclR5cGUgIT09IGZhbHNlKSAmJlxuICAgICAgICAgICAgKChhdmF0YXJUeXBlID09PSBcInRleHRcIikgP1xuICAgICAgICAgICAgICA8TURMaXN0SXRlbUF2YXRhcj48TURBdmF0YXI+e2F2YXRhckxhbWJkYShpdGVtKX08L01EQXZhdGFyPjwvTURMaXN0SXRlbUF2YXRhcj5cbiAgICAgICAgICAgIDpcbiAgICAgICAgICAgICAgPE1ETGlzdEl0ZW1BdmF0YXI+PE1EQXZhdGFyIHNyYz17YXZhdGFyTGFtYmRhKGl0ZW0pfT48L01EQXZhdGFyPjwvTURMaXN0SXRlbUF2YXRhcj5cbiAgICAgICAgICApfVxuICAgICAgICAgIDxNRExpc3RJdGVtVGV4dCBwcmltYXJ5PXtwcmltYXJ5TGFtYmRhKGl0ZW0pfS8+XG4gICAgICA8L01ETGlzdEl0ZW0+XG4gICAgKVxufVxuXG5cbmNsYXNzIExpc3QgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICByZW5kZXIoKSB7XG4gIFx0dmFyIHsgZGF0YSwgcHJpbWFyeUxhbWJkYSwgYXZhdGFyTGFtYmRhLCBhdmF0YXJUeXBlLCBnb1RvTGFtYmRhLCBtYXhJdGVtcywgbG9hZGluZywgbm9EYXRhIH0gPSB0aGlzLnByb3BzO1xuICAgIHZhciBrZXkgPSAwO1xuXG4gICAgZGF0YSA9IChkYXRhKSA/IGRhdGEuc2xpY2UoMCxtYXhJdGVtcykgOiBbXTtcbiAgICBtYXhJdGVtcyA9ICghbWF4SXRlbXMgfHwgbWF4SXRlbXMgPT0gMCkgPyAxMCA6IG1heEl0ZW1zO1xuICAgIG5vRGF0YSA9IChub0RhdGEpID8gbm9EYXRhIDogXCJubyBpdGVtc1wiO1xuXG4gICAgaWYobG9hZGluZyA9PT0gdHJ1ZSkgcmV0dXJuIHRoaXMucmVuZGVyTG9hZGluZyhtYXhJdGVtcyk7XG5cbiAgICBpZighZGF0YSB8fCBkYXRhLmxlbmd0aCA9PSAwKSByZXR1cm4gdGhpcy5yZW5kZXJOb0l0ZW1zKG5vRGF0YSk7XG5cbiAgICByZXR1cm4gKFxuICAgICAgICA8TURMaXN0PlxuICAgICAgICAgICAge2RhdGEubWFwKChpdGVtLCBpZHgpPT5cbiAgICAgICAgICAgICAgPGRpdiBrZXk9e2tleSsrfT5cbiAgICAgICAgICAgICAgICB7KGdvVG9MYW1iZGEpID8gXG4gICAgICAgICAgICAgICAgICAgIDxMaW5rIHRvPXtnb1RvTGFtYmRhKGl0ZW0pfT48TGlzdEl0ZW0gYnV0dG9uIGl0ZW09e2l0ZW19IHsuLi50aGlzLnByb3BzfS8+PC9MaW5rPlxuICAgICAgICAgICAgICAgICAgOlxuICAgICAgICAgICAgICAgICAgICA8TGlzdEl0ZW0gaXRlbT17aXRlbX0gey4uLnRoaXMucHJvcHN9Lz5cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgeyhrZXkgPCBkYXRhLmxlbmd0aCkgJiZcbiAgICAgICAgICAgICAgICAgIDxNRERpdmlkZXIvPlxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICApfSAgICAgICAgICAgICAgICAgICAgICAgIFxuICAgICAgICA8L01ETGlzdD5cbiAgICApO1xuICB9XG5cbiAgcmVuZGVyTG9hZGluZyhtYXhJdGVtcyl7XG4gICAgbWF4SXRlbXMgPSAobWF4SXRlbXMgPT0gLTEpID8gNSA6IG1heEl0ZW1zO1xuICAgIHZhciBkYXRhID0gW107IGZvcih2YXIgaSA9IDA7IGkgPCBtYXhJdGVtczsgaSsrKSBkYXRhLnB1c2goaSk7XG4gICAgdmFyIGtleSA9IDA7XG5cbiAgICBjb25zdCBwaCA9IHRoaXMucmVuZGVyUGxhY2Vob2xkZXIoKTtcblxuICAgIHJldHVybiAoXG4gICAgICAgIDxNRExpc3Q+XG4gICAgICAgICAgICB7ZGF0YS5tYXAoKGl0ZW0sIGlkeCk9PlxuICAgICAgICAgICAgICA8ZGl2IGtleT17a2V5Kyt9PlxuICAgICAgICAgICAgICAgIDxNRExpc3RJdGVtPlxuICAgICAgICAgICAgICAgICAgICA8TURMaXN0SXRlbUF2YXRhcj48TURBdmF0YXI+IDwvTURBdmF0YXI+PC9NRExpc3RJdGVtQXZhdGFyPlxuICAgICAgICAgICAgICAgICAgICA8TURMaXN0SXRlbVRleHQgcHJpbWFyeT17cGh9Lz5cbiAgICAgICAgICAgICAgICA8L01ETGlzdEl0ZW0+XG4gICAgICAgICAgICAgICAgeyhrZXkgPCBkYXRhLmxlbmd0aCkgJiZcbiAgICAgICAgICAgICAgICAgIDxNRERpdmlkZXIvPlxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICApfSAgICAgICAgICAgICAgICAgICAgICAgIFxuICAgICAgICA8L01ETGlzdD5cbiAgICApO1xuICB9XG5cbiAgcmVuZGVyUGxhY2Vob2xkZXIoKXtcbiAgICByZXR1cm4gKFxuICAgICAgPFBsYWNlaG9sZGVyIGRhdGE9e1tbW1wiLVwiLCAyMjAsIDEwXV1dfS8+XG4gICAgKVxuICB9XG5cbiAgcmVuZGVyTm9JdGVtcyhub0RhdGEpe1xuICAgIHJldHVybiAoXG4gICAgICAgIDxNRExpc3Q+XG4gICAgICAgICAgPE1ETGlzdEl0ZW0+XG4gICAgICAgICAgICAgIDxNRExpc3RJdGVtVGV4dCBwcmltYXJ5PXtub0RhdGF9Lz5cbiAgICAgICAgICA8L01ETGlzdEl0ZW0+XG4gICAgICAgIDwvTURMaXN0PlxuICAgICk7XG4gIH1cblxufVxuXG5leHBvcnQgZGVmYXVsdCB3aXRoU3R5bGVzKHN0eWxlcykoTGlzdCk7IiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcblxuaW1wb3J0IE1EUGFwZXIgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvUGFwZXInO1xuXG5cbmNsYXNzIFBhcGVyIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgcmVuZGVyKCkge1xuICAgIHZhciB7IGNoaWxkcmVuLCBjbGFzc05hbWUsIGVsZXZhdGlvbiwgc3R5bGUsIGZpbGwgfSA9IHRoaXMucHJvcHM7XG5cbiAgICBzdHlsZSA9IChzdHlsZSkgPyBzdHlsZSA6IHt9O1xuICAgIGlmKGZpbGwpIHtcbiAgICAgIHN0eWxlLndpZHRoID0gXCIxMDAlXCI7XG4gICAgfVxuXG4gICAgcmV0dXJuIChcbiAgICAgIDxNRFBhcGVyIGNsYXNzTmFtZT17Y2xhc3NOYW1lfSBzdHlsZT17c3R5bGV9IGVsZXZhdGlvbj17ZWxldmF0aW9ufT5cbiAgICAgICAge2NoaWxkcmVufVxuICAgICAgPC9NRFBhcGVyPlxuICAgICk7XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgUGFwZXI7IiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcblxuaW1wb3J0IENvbnRlbnRMb2FkZXIgZnJvbSAncmVhY3QtY29udGVudC1sb2FkZXInXG5cbmNsYXNzIFBIIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgcmVuZGVyKCkge1xuICBcdHZhciB7IGRhdGEsIHNwYWNpbmcgfSA9IHRoaXMucHJvcHM7XG4gIFx0c3BhY2luZyA9IChzcGFjaW5nKSA/IHBhcnNlSW50KHNwYWNpbmcpIDogMjtcbiAgXHRjb25zdCB7aGVpZ2h0LCB3aWR0aCwgcGhzfSA9IHRoaXMucmVuZGVyUGxhY2Vob2xkZXJzKGRhdGEsIHNwYWNpbmcpO1xuICAgIHJldHVybiAoXG5cdFx0PENvbnRlbnRMb2FkZXJcblx0XHRcdGhlaWdodD17aGVpZ2h0fVxuXHRcdFx0d2lkdGg9e3dpZHRofVxuXHRcdFx0c3BlZWQ9ezJ9XG5cdFx0XHRwcmltYXJ5Q29sb3I9XCIjZjNmM2YzXCJcblx0XHRcdHNlY29uZGFyeUNvbG9yPVwiI2JjYmNiY1wiPlxuXHRcdFx0e3Bocy5tYXAoaXRlbSA9PiBpdGVtKX1cblx0XHQ8L0NvbnRlbnRMb2FkZXI+XHRcdFx0XG4gICAgKTtcbiAgfVxuXG4gIHJlbmRlclBsYWNlaG9sZGVycyhkYXRhLCBzcGFjaW5nKXtcbiAgXHR2YXIgaGVpZ2h0ID0gMDtcbiAgXHR2YXIgd2lkdGggPSAwO1xuICBcdHZhciBwaCwgcGhzID0gW107XG5cdHZhciB5ID0gMDtcblx0dmFyIF9waDtcblx0dmFyIGtleSA9IDA7XG5cdHZhciBwYWRkaW5nID0gc3BhY2luZztcblx0XG5cdGZvcih2YXIgaSA9IDA7IGkgPCBkYXRhLmxlbmd0aDsgaSsrKXtcblx0XHR2YXIgcm93ID0gZGF0YVtpXTtcblx0XHR2YXIgeCA9IHBhZGRpbmc7XG5cdFx0Zm9yKHZhciBqID0gMDsgaiA8IHJvdy5sZW5ndGg7IGorKyl7XG5cdFx0XHRwaCA9IHJvd1tqXTtcblx0XHRcdHBoWzFdID0gcGFyc2VJbnQocGhbMV0pO1xuXHRcdFx0cGhbMl0gPSBwYXJzZUludChwaFsyXSk7XG5cdFx0XHR2YXIgcGFkID0gKHBoWzNdKSA/IHBoWzNdIDogMDtcblx0XHRcdHN3aXRjaChwaFswXSl7XG5cdFx0XHRcdGNhc2UgXCJvXCI6XG5cdFx0XHRcdFx0X3BoID0gPHJlY3Qga2V5PXtrZXkrK30geD17eCArIHBhZH0geT17eX0gcng9XCIwXCIgcnk9XCIwXCIgd2lkdGg9e3BoWzFdfSBoZWlnaHQ9e3BoWzJdfSAvPjtcblx0XHRcdFx0XHRicmVhaztcblx0XHRcdFx0Y2FzZSBcIi1cIjpcdFx0XHRcdFxuXHRcdFx0XHRkZWZhdWx0OlxuXHRcdFx0XHRcdF9waCA9IDxyZWN0IGtleT17a2V5Kyt9IHg9e3ggKyBwYWR9IHk9e3l9IHJ4PVwiMFwiIHJ5PVwiMFwiIHdpZHRoPXtwaFsxXX0gaGVpZ2h0PXtwaFsyXX0gLz47XG5cdFx0XHRcdFx0YnJlYWs7XG5cdFx0XHR9XG5cdFx0XHR4ICs9IHBoWzFdICsgcGFkZGluZztcblx0XHRcdHdpZHRoID0gKHggPiB3aWR0aCkgPyB4IDogd2lkdGg7XG5cdFx0XHRwaHMucHVzaChfcGgpO1xuXHRcdH1cblx0XHR5ICs9IHBoWzJdICsgcGFkZGluZztcblx0fVxuXG5cdGhlaWdodCA9IHkgKyBwYWRkaW5nO1xuXHR3aWR0aCA9ICB3aWR0aDtcblx0cmV0dXJuIHtoZWlnaHQ6IGhlaWdodCwgd2lkdGg6IHdpZHRoLCBwaHM6IHBoc307XG4gIH1cblxufVxuXG5leHBvcnQgZGVmYXVsdCBQSDsiLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuXG5pbXBvcnQgUlNsaWRlciBmcm9tIFwicmVhY3Qtc2xpY2tcIjtcblxuY2xhc3MgU2xpZGVyIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgcmVuZGVyKCkge1xuICAgIHZhciB7IHhzLCBzbSwgbWQsIGxnLCB4bCwgY2hpbGRyZW4sIGRvdHMgfSA9IHRoaXMucHJvcHM7XG4gICAgdmFyIHJlc3BvbnNpdmVTZXR0aW5ncyA9IFtdOyBcblxuICAgIGRvdHMgPSAoZG90cykgPyBkb3RzIDogdHJ1ZTtcblxuICAgIHhzID0gKHhzKSA/IHhzIDogMTtcbiAgICBzbSA9IChzbSkgPyBzbSA6IHhzO1xuICAgIG1kID0gKG1kKSA/IG1kIDogc207XG4gICAgbGcgPSAobGcpID8gbGcgOiBtZDtcbiAgICB4bCA9ICh4bCkgPyB4bCA6IGxnO1xuXG4gICAgaWYoeHMpe1xuICAgIFx0cmVzcG9uc2l2ZVNldHRpbmdzLnB1c2goeyBicmVha3BvaW50OiAzNjAsIHNldHRpbmdzOiB7IHNsaWRlc1RvU2hvdzogcGFyc2VJbnQoeHMpIH0gfSlcbiAgICB9XG5cbiAgICBpZihzbSl7XG4gICAgXHRyZXNwb25zaXZlU2V0dGluZ3MucHVzaCh7IGJyZWFrcG9pbnQ6IDY0MCwgc2V0dGluZ3M6IHsgc2xpZGVzVG9TaG93OiBwYXJzZUludChzbSkgfSB9KVxuICAgIH1cblxuICAgIGlmKG1kKXtcbiAgICBcdHJlc3BvbnNpdmVTZXR0aW5ncy5wdXNoKHsgYnJlYWtwb2ludDogMTI4MCwgc2V0dGluZ3M6IHsgc2xpZGVzVG9TaG93OiBwYXJzZUludChtZCkgfSB9KVxuICAgIH1cblxuICAgIGlmKGxnKXtcbiAgICBcdHJlc3BvbnNpdmVTZXR0aW5ncy5wdXNoKHsgYnJlYWtwb2ludDogMjQwMCwgc2V0dGluZ3M6IHsgc2xpZGVzVG9TaG93OiBwYXJzZUludChsZykgfSB9KVxuICAgIH1cblxuICAgIGlmKHhsKXtcbiAgICBcdHJlc3BvbnNpdmVTZXR0aW5ncy5wdXNoKHsgYnJlYWtwb2ludDogNDgwMCwgc2V0dGluZ3M6IHsgc2xpZGVzVG9TaG93OiBwYXJzZUludCh4bCkgfSB9KVxuICAgIH1cbiAgICBcblxuICAgIHZhciBzZXR0aW5ncyA9IHtcbiAgICAgIGluZmluaXRlOiB0cnVlLFxuICAgICAgc2xpZGVzVG9TaG93OiAxLFxuICAgICAgc2xpZGVzVG9TY3JvbGw6IDEsXG4gICAgICBkb3RzOiBkb3RzLFxuICAgICAgaW5pdGlhbFNsaWRlOiAwLFxuICAgICAgcmVzcG9uc2l2ZSA6IHJlc3BvbnNpdmVTZXR0aW5ncyxcbiAgICB9O1xuXG4gICAgcmV0dXJuIChcbiAgICBcdDxkaXYgc3R5bGU9e3ttYXJnaW46IFwiMHJlbSAxcmVtXCJ9fT5cblx0XHRcdDxSU2xpZGVyIHsuLi5zZXR0aW5nc30gc3R5bGU9e3t3aWR0aDogJzk1JSd9fT5cblx0XHRcdFx0e2NoaWxkcmVufVxuXHRcdFx0PC9SU2xpZGVyPlxuICAgICAgXHQ8L2Rpdj5cbiAgICApO1xuXG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgU2xpZGVyOyIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBMaW5rIH0gZnJvbSAncmVhY3Qtcm91dGVyLWRvbSc7XG5pbXBvcnQgd2l0aE1vZHVsZSBmcm9tICdjb3JlL2NvbXBvbmVudHMvd2l0aC1tb2R1bGUnO1xuXG5jbGFzcyBQb3N0TGlua0NvbXBvbmVudCBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG5cdHJlbmRlcigpe1xuXHRcdGNvbnN0IHNsdWcgPSAoXCJzbHVnXCIgaW4gdGhpcy5wcm9wcykgPyB0aGlzLnByb3BzLnNsdWcgOiBudWxsO1xuXHRcdGNvbnN0IGNhdGVnb3J5ID0gdGhpcy5wcm9wcy5jYXRlZ29yeTtcblxuXHRcdGlmKCFzbHVnKSByZXR1cm4gdGhpcy5wcm9wcy5jaGlsZHJlbjtcblxuXHRcdHJldHVybiAoXG5cdFx0XHQ8TGluayB0bz17YCR7c2x1Z31gfT5cblx0XHRcdFx0e3RoaXMucHJvcHMuY2hpbGRyZW59XG5cdFx0XHQ8L0xpbms+XG5cdFx0KTtcblx0fVxufVxuXG5leHBvcnQgZGVmYXVsdCB3aXRoTW9kdWxlKFBvc3RMaW5rQ29tcG9uZW50KTtcbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcbmltcG9ydCBHcmlkQ29udGFpbmVyIGZyb20gJ2NvcmUvdWkvbGF5b3V0L2dyaWRfY29udGFpbmVyJztcbmltcG9ydCBHcmlkSXRlbSBmcm9tICdjb3JlL3VpL2xheW91dC9ncmlkX2l0ZW0nO1xuaW1wb3J0IFN0YXJSYXRpbmdzIGZyb20gJ3JlYWN0LXN0YXItcmF0aW5ncyc7XG5pbXBvcnQgUGxhY2Vob2xkZXIgZnJvbSAnY29yZS91aS9wbGFjZWhvbGRlcic7XG5pbXBvcnQgUGFwZXIgZnJvbSAnY29yZS91aS9wYXBlcic7XG5pbXBvcnQgU2xpZGVyIGZyb20gJ2NvcmUvdWkvc2xpZGVyJztcbmltcG9ydCBMaXN0IGZyb20gJ2NvcmUvdWkvbGlzdCc7XG5cbmltcG9ydCBcIi4vbGF0ZXN0X2NvdXJzZXMuc2Nzc1wiO1xuXG5cbmZ1bmN0aW9uIENvdXJzZSh7ZGF0YX0pIHtcbiAgaWYoIWRhdGEpIHJldHVybiA8UmVuZGVyUGxhY2Vob2xkZXIvPlxuICByZXR1cm4gKFxuICAgICAgPGRpdj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9J2hlYWRlcic+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9J3BsYXRmb3JtJz57ZGF0YS5wbGF0Zm9ybX08L2Rpdj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0ncmF0aW5nJz48U3RhclJhdGluZ3MgcmF0aW5nPXtkYXRhLnJhdGluZ30gc3RhclJhdGVkQ29sb3I9XCIjMjIyXCIgbnVtYmVyT2ZTdGFycz17NX0gc3RhckRpbWVuc2lvbj0nOHB4JyBzdGFyU3BhY2luZz1cIjJweFwiLz48L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgXHRcdDxkaXYgY2xhc3NOYW1lPSduYW1lJz57ZGF0YS5uYW1lfTwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nZnJvbSc+e2RhdGEuZnJvbX08L2Rpdj5cbiAgICAgIDwvZGl2PlxuICApO1xufVxuXG5mdW5jdGlvbiBSZW5kZXJQbGFjZWhvbGRlcih7fSl7XG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXY+XG4gICAgICAgIDxQbGFjZWhvbGRlciBkYXRhPXtbXG4gICAgICAgICAgW1tcIi1cIiwgXCI4MFwiLCBcIjVcIl1dLFxuICAgICAgICAgIFtbXCItXCIsIFwiMTUwXCIsIFwiMjBcIl1dLFxuICAgICAgICAgIFtbXCItXCIsIFwiMTUwXCIsIFwiMTBcIl1dLFxuICAgICAgICAgIFtbXCItXCIsIFwiMTUwXCIsIFwiMTBcIl1dLFxuICAgICAgICBdfS8+XG4gICAgICA8L2Rpdj5cbiAgICApXG59XG5cblxuY2xhc3MgTGF0ZXN0Q291cnNlcyBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gIHJlbmRlcigpIHtcbiAgICB2YXIge2RhdGEsIG1heCwgZG90cywgcmVuZGVyZXJ9ID0gdGhpcy5wcm9wcztcbiAgICB2YXIga2V5ID0gMDtcblxuICAgIHJlbmRlcmVyID0gKHJlbmRlcmVyKSA/IHJlbmRlcmVyIDogXCJsaXN0XCI7XG4gICAgbWF4ID0gKG1heCkgPyBtYXggOiAzO1xuICAgIGRvdHMgPSAoZG90cykgPyBkb3RzIDogdHJ1ZTtcbiAgXHRkYXRhID0gKCBkYXRhICkgPyBkYXRhLnNsaWNlKDAsbWF4KSA6IFtudWxsXVxuXG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwibW9kLWxhdGVzdC1jb3Vyc2VzXCI+XG4gICAgICAgIHsocmVuZGVyZXIgPT09IFwibGlzdFwiKSA/IHRoaXMucmVuZGVyTGlzdChkYXRhKSA6IHRoaXMucmVuZGVyU2xpZGVyKGRvdHMsIGRhdGEpfVxuICAgICAgPC9kaXY+XG4gICAgKTtcbiAgfVxuXG4gIHJlbmRlckxpc3QoZGF0YSl7XG4gICAgcmV0dXJuIChcbiAgICAgIDxMaXN0IFxuICAgICAgICAgIGxvYWRpbmc9eyhkYXRhWzBdID09IG51bGwpID8gdHJ1ZSA6IGZhbHNlfVxuICAgICAgICAgIG1heEl0ZW1zPXtkYXRhLmxlbmd0aH1cbiAgICAgICAgICBkYXRhPXtkYXRhfSBcbiAgICAgICAgICBwcmltYXJ5TGFtYmRhPXsoaXRlbSk9PjxDb3Vyc2UgZGF0YT17aXRlbX0vPn0gXG4gICAgICAgICAgYXZhdGFyVHlwZT17ZmFsc2V9XG4gICAgICAvPiAgICAgIFxuICAgIClcbiAgfVxuXG4gIHJlbmRlclNsaWRlcihkb3RzLCBkYXRhKXtcbiAgICB2YXIgY2hpbGRyZW4gPSBbXTtcblxuICAgIGZvcih2YXIgaT0wOyBpIDwgZGF0YS5sZW5ndGg7IGkrKylcbiAgICAgIGNoaWxkcmVuLnB1c2goXG4gICAgICAgICAgPGRpdiBrZXk9e2l9PlxuICAgICAgICAgICAgPGRpdiBzdHlsZT17e3BhZGRpbmc6IFwiMXJlbVwifX0+XG4gICAgICAgICAgICAgIDxQYXBlciBjbGFzc05hbWU9J2NvdXJzZSc+XG4gICAgICAgICAgICAgICAgPENvdXJzZSBkYXRhPXtkYXRhW2ldfS8+XG4gICAgICAgICAgICAgIDwvUGFwZXI+XG4gICAgICAgICAgICA8L2Rpdj4gICAgICAgICAgICAgICAgXG4gICAgICAgICAgPC9kaXY+KTtcblxuICAgIHJldHVybiAoXG4gICAgICA8U2xpZGVyIGRvdHM9e2RvdHN9IHhzPXsxfSBzbT17MX0gbWQ9ezJ9IGxnPXszfT5cbiAgICAgICAge2NoaWxkcmVuLm1hcCgoaXRlbSk9Pml0ZW0pfVxuICAgICAgPC9TbGlkZXI+ICAgICAgXG4gICAgKSAgICBcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBMYXRlc3RDb3Vyc2VzOyIsIlxudmFyIGNvbnRlbnQgPSByZXF1aXJlKFwiISEuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9mcmFtZXdvcmtzL3dlYmFwcHMvc3RhcnR1cC9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9mcmFtZXdvcmtzL3dlYmFwcHMvc3RhcnR1cC9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvbGliL2xvYWRlci5qcyEuL2xhdGVzdF9jb3Vyc2VzLnNjc3NcIik7XG5cbmlmKHR5cGVvZiBjb250ZW50ID09PSAnc3RyaW5nJykgY29udGVudCA9IFtbbW9kdWxlLmlkLCBjb250ZW50LCAnJ11dO1xuXG52YXIgdHJhbnNmb3JtO1xudmFyIGluc2VydEludG87XG5cblxuXG52YXIgb3B0aW9ucyA9IHtcImhtclwiOnRydWV9XG5cbm9wdGlvbnMudHJhbnNmb3JtID0gdHJhbnNmb3JtXG5vcHRpb25zLmluc2VydEludG8gPSB1bmRlZmluZWQ7XG5cbnZhciB1cGRhdGUgPSByZXF1aXJlKFwiIS4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL2ZyYW1ld29ya3Mvd2ViYXBwcy9zdGFydHVwL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvbGliL2FkZFN0eWxlcy5qc1wiKShjb250ZW50LCBvcHRpb25zKTtcblxuaWYoY29udGVudC5sb2NhbHMpIG1vZHVsZS5leHBvcnRzID0gY29udGVudC5sb2NhbHM7XG5cbmlmKG1vZHVsZS5ob3QpIHtcblx0bW9kdWxlLmhvdC5hY2NlcHQoXCIhIS4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL2ZyYW1ld29ya3Mvd2ViYXBwcy9zdGFydHVwL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL2ZyYW1ld29ya3Mvd2ViYXBwcy9zdGFydHVwL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9saWIvbG9hZGVyLmpzIS4vbGF0ZXN0X2NvdXJzZXMuc2Nzc1wiLCBmdW5jdGlvbigpIHtcblx0XHR2YXIgbmV3Q29udGVudCA9IHJlcXVpcmUoXCIhIS4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL2ZyYW1ld29ya3Mvd2ViYXBwcy9zdGFydHVwL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL2ZyYW1ld29ya3Mvd2ViYXBwcy9zdGFydHVwL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9saWIvbG9hZGVyLmpzIS4vbGF0ZXN0X2NvdXJzZXMuc2Nzc1wiKTtcblxuXHRcdGlmKHR5cGVvZiBuZXdDb250ZW50ID09PSAnc3RyaW5nJykgbmV3Q29udGVudCA9IFtbbW9kdWxlLmlkLCBuZXdDb250ZW50LCAnJ11dO1xuXG5cdFx0dmFyIGxvY2FscyA9IChmdW5jdGlvbihhLCBiKSB7XG5cdFx0XHR2YXIga2V5LCBpZHggPSAwO1xuXG5cdFx0XHRmb3Ioa2V5IGluIGEpIHtcblx0XHRcdFx0aWYoIWIgfHwgYVtrZXldICE9PSBiW2tleV0pIHJldHVybiBmYWxzZTtcblx0XHRcdFx0aWR4Kys7XG5cdFx0XHR9XG5cblx0XHRcdGZvcihrZXkgaW4gYikgaWR4LS07XG5cblx0XHRcdHJldHVybiBpZHggPT09IDA7XG5cdFx0fShjb250ZW50LmxvY2FscywgbmV3Q29udGVudC5sb2NhbHMpKTtcblxuXHRcdGlmKCFsb2NhbHMpIHRocm93IG5ldyBFcnJvcignQWJvcnRpbmcgQ1NTIEhNUiBkdWUgdG8gY2hhbmdlZCBjc3MtbW9kdWxlcyBsb2NhbHMuJyk7XG5cblx0XHR1cGRhdGUobmV3Q29udGVudCk7XG5cdH0pO1xuXG5cdG1vZHVsZS5ob3QuZGlzcG9zZShmdW5jdGlvbigpIHsgdXBkYXRlKCk7IH0pO1xufSIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcbmltcG9ydCAnLi9oZXJvLnNjc3MnO1xuXG5jbGFzcyBDb21wb25lbnQgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICByZW5kZXIoKSB7XG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXYgY2xhc3NOYW1lPSdtb2QtaGVybyc+XG4gICAgICBcdDxkaXYgY2xhc3NOYW1lPSdjb250YWluZXInPlxuXHQgICAgICBcdDxoMT5Kb3MmZWFjdXRlOyBNaWd1ZWwgQXJyb3lhdmUgTy48L2gxPlxuXHQgICAgICBcdDxoMj5DaWVuY2lhcyBkZSBsYSBjb21wdXRhY2kmb2FjdXRlO248L2gyPlxuICAgICAgXHQ8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgICk7XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgKENvbXBvbmVudCk7IiwiXG52YXIgY29udGVudCA9IHJlcXVpcmUoXCIhIS4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL2ZyYW1ld29ya3Mvd2ViYXBwcy9zdGFydHVwL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL2ZyYW1ld29ya3Mvd2ViYXBwcy9zdGFydHVwL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9saWIvbG9hZGVyLmpzIS4vaGVyby5zY3NzXCIpO1xuXG5pZih0eXBlb2YgY29udGVudCA9PT0gJ3N0cmluZycpIGNvbnRlbnQgPSBbW21vZHVsZS5pZCwgY29udGVudCwgJyddXTtcblxudmFyIHRyYW5zZm9ybTtcbnZhciBpbnNlcnRJbnRvO1xuXG5cblxudmFyIG9wdGlvbnMgPSB7XCJobXJcIjp0cnVlfVxuXG5vcHRpb25zLnRyYW5zZm9ybSA9IHRyYW5zZm9ybVxub3B0aW9ucy5pbnNlcnRJbnRvID0gdW5kZWZpbmVkO1xuXG52YXIgdXBkYXRlID0gcmVxdWlyZShcIiEuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9mcmFtZXdvcmtzL3dlYmFwcHMvc3RhcnR1cC9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2xpYi9hZGRTdHlsZXMuanNcIikoY29udGVudCwgb3B0aW9ucyk7XG5cbmlmKGNvbnRlbnQubG9jYWxzKSBtb2R1bGUuZXhwb3J0cyA9IGNvbnRlbnQubG9jYWxzO1xuXG5pZihtb2R1bGUuaG90KSB7XG5cdG1vZHVsZS5ob3QuYWNjZXB0KFwiISEuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9mcmFtZXdvcmtzL3dlYmFwcHMvc3RhcnR1cC9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9mcmFtZXdvcmtzL3dlYmFwcHMvc3RhcnR1cC9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvbGliL2xvYWRlci5qcyEuL2hlcm8uc2Nzc1wiLCBmdW5jdGlvbigpIHtcblx0XHR2YXIgbmV3Q29udGVudCA9IHJlcXVpcmUoXCIhIS4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL2ZyYW1ld29ya3Mvd2ViYXBwcy9zdGFydHVwL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL2ZyYW1ld29ya3Mvd2ViYXBwcy9zdGFydHVwL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9saWIvbG9hZGVyLmpzIS4vaGVyby5zY3NzXCIpO1xuXG5cdFx0aWYodHlwZW9mIG5ld0NvbnRlbnQgPT09ICdzdHJpbmcnKSBuZXdDb250ZW50ID0gW1ttb2R1bGUuaWQsIG5ld0NvbnRlbnQsICcnXV07XG5cblx0XHR2YXIgbG9jYWxzID0gKGZ1bmN0aW9uKGEsIGIpIHtcblx0XHRcdHZhciBrZXksIGlkeCA9IDA7XG5cblx0XHRcdGZvcihrZXkgaW4gYSkge1xuXHRcdFx0XHRpZighYiB8fCBhW2tleV0gIT09IGJba2V5XSkgcmV0dXJuIGZhbHNlO1xuXHRcdFx0XHRpZHgrKztcblx0XHRcdH1cblxuXHRcdFx0Zm9yKGtleSBpbiBiKSBpZHgtLTtcblxuXHRcdFx0cmV0dXJuIGlkeCA9PT0gMDtcblx0XHR9KGNvbnRlbnQubG9jYWxzLCBuZXdDb250ZW50LmxvY2FscykpO1xuXG5cdFx0aWYoIWxvY2FscykgdGhyb3cgbmV3IEVycm9yKCdBYm9ydGluZyBDU1MgSE1SIGR1ZSB0byBjaGFuZ2VkIGNzcy1tb2R1bGVzIGxvY2Fscy4nKTtcblxuXHRcdHVwZGF0ZShuZXdDb250ZW50KTtcblx0fSk7XG5cblx0bW9kdWxlLmhvdC5kaXNwb3NlKGZ1bmN0aW9uKCkgeyB1cGRhdGUoKTsgfSk7XG59IiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBIaWRkZW4gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvSGlkZGVuJztcbmltcG9ydCB7ICBCcm93c2VyVmlldywgIE1vYmlsZVZpZXcgfSBmcm9tIFwicmVhY3QtZGV2aWNlLWRldGVjdFwiO1xuaW1wb3J0IHdpdGhNb2R1bGUgZnJvbSAnY29yZS9jb21wb25lbnRzL3dpdGgtbW9kdWxlJztcbmltcG9ydCBIb21lTEcgZnJvbSBcImptYXJyb3lhdmUvY29tcG9uZW50cy91eGkvaG9tZS9sYXlvdXQvbGcvaG9tZVwiO1xuXG5jbGFzcyBQYWdlQ29tcG9uZW50IGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcblx0cmVuZGVyKCl7XG5cdFx0cmV0dXJuIHRoaXMucmVuZGVyRGVmYXVsdCgpO1xuXHR9XG5cblx0cmVuZGVyRGVmYXVsdCgpe1xuXHRcdGNvbnN0IHsgZGF0YSwgdHJlbmRzIH0gPSB0aGlzLnByb3BzO1xuXHRcdHJldHVybiAoXG5cdFx0XHQ8ZGl2IHN0eWxlPXt7d2lkdGg6JzEwMCUnfX0+XHRcdFx0XHRcbiAgICBcdFx0XHQ8SG9tZUxHIGRhdGE9e2RhdGF9IHRyZW5kcz17dHJlbmRzfS8+XG5cdFx0XHQ8L2Rpdj5cblx0XHQpXHRcdFxuXHR9XG5cblx0cmVuZGVyTXVsdGlwbGUoKXtcblx0XHR2YXIgZGF0YSA9IHRoaXMucHJvcHMuZGF0YTtcblx0XHRyZXR1cm4gKFxuXHRcdFx0PGRpdiBzdHlsZT17e3dpZHRoOicxMDAlJ319Plx0XHRcdFx0XG4gICAgICAgIFx0XHQ8SGlkZGVuIG9ubHk9e1snc20nLCAnbWQnLCAnbGcnLCAneGwnXX0+XG4gICAgICAgIFx0XHRcdFxuXHRcdCAgICAgICAgPC9IaWRkZW4+XG4gICAgICAgIFx0XHQ8SGlkZGVuIG9ubHk9e1sneHMnLCAnbWQnLCAnbGcnLCAneGwnXX0+XG4gICAgICAgIFx0XHRcdFxuXHRcdCAgICAgICAgPC9IaWRkZW4+XG4gICAgICAgIFx0XHQ8SGlkZGVuIG9ubHk9e1sneHMnLCAnc20nXX0+XG4gICAgICAgIFx0XHRcdDxIb21lTEcgZGF0YT17ZGF0YX0vPlxuXHRcdCAgICAgICAgPC9IaWRkZW4+XG5cdFx0XHQ8L2Rpdj5cblx0XHQpXG5cdH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgd2l0aE1vZHVsZShQYWdlQ29tcG9uZW50KTsiLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgTGluayB9IGZyb20gJ3JlYWN0LXJvdXRlci1kb20nXG5pbXBvcnQgd2l0aE1vZHVsZSBmcm9tICdjb3JlL2NvbXBvbmVudHMvd2l0aC1tb2R1bGUnO1xuaW1wb3J0IEdyaWRDb250YWluZXIgZnJvbSAnY29yZS91aS9sYXlvdXQvZ3JpZF9jb250YWluZXInO1xuaW1wb3J0IEdyaWRJdGVtIGZyb20gJ2NvcmUvdWkvbGF5b3V0L2dyaWRfaXRlbSc7XG5pbXBvcnQgU2VjdGlvbiBmcm9tICdjb3JlL3VpL2xheW91dC9zZWN0aW9uJztcbmltcG9ydCBIZXJvIGZyb20gJ2ptYXJyb3lhdmUvY29tcG9uZW50cy91eGkvaG9tZS9oZXJvJztcbmltcG9ydCBSZWNlbnQgZnJvbSAnam1hcnJveWF2ZS9jb21wb25lbnRzL3V4aS9ob21lL3JlY2VudCc7XG5pbXBvcnQgU29mdHdhcmVUcmVuZHMgZnJvbSAnam1hcnJveWF2ZS9jb21wb25lbnRzL3V4aS9ob21lL3NvZnR3YXJlX3RyZW5kcyc7XG5pbXBvcnQgTGF0ZXN0Q291cnNlcyBmcm9tICdqbWFycm95YXZlL2NvbXBvbmVudHMvdXhpL2N2L2xhdGVzdF9jb3Vyc2VzJztcblxuY2xhc3MgUGFnZUNvbXBvbmVudCBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG5cdHJlbmRlcigpe1xuXHRcdHZhciB7ZGF0YSwgdHJlbmRzfSA9IHRoaXMucHJvcHM7XG5cblx0XHRjb25zdCByZWNlbnQgPSAoZGF0YSE9bnVsbCkgPyBkYXRhLnJlY2VudCA6IG51bGxcblx0XHRjb25zdCBjb3Vyc2VzID0gKGRhdGEhPW51bGwpID8gZGF0YS5jb3Vyc2VzIDogbnVsbFxuXHRcdHJldHVybiAoXG5cdFx0XHQ8R3JpZENvbnRhaW5lcj5cblx0XHRcdFx0PEdyaWRJdGVtIGZpbGw+XG5cdFx0XHRcdFx0PFNlY3Rpb24gY2xhc3NOYW1lPVwiaG9tZS1oZXJvXCIgdHlwZT0nY292ZXInPlxuXHRcdFx0XHRcdFx0PEhlcm8vPlxuXHRcdFx0XHRcdDwvU2VjdGlvbj5cblx0XHRcdFx0PC9HcmlkSXRlbT5cblx0XHRcdFx0PEdyaWRJdGVtIGZpbGw+XG5cdFx0XHRcdFx0PFNlY3Rpb24gY2xhc3NOYW1lPVwiaG9tZS1yZWNlbnRcIj5cblx0XHRcdFx0XHRcdDxSZWNlbnQgbm9DaGVjayBkYXRhPXtyZWNlbnR9Lz5cblx0XHRcdFx0XHQ8L1NlY3Rpb24+XG5cdFx0XHRcdDwvR3JpZEl0ZW0+XG5cdFx0XHRcdDxHcmlkSXRlbSBmaWxsPlxuXHRcdFx0XHRcdDxTZWN0aW9uIGNsYXNzTmFtZT1cImhvbWUtdHJlbmRzXCI+XG5cdFx0XHRcdFx0XHQ8U29mdHdhcmVUcmVuZHMgbm9DaGVjayBkYXRhPXt0cmVuZHN9Lz5cblx0XHRcdFx0XHQ8L1NlY3Rpb24+XG5cdFx0XHRcdDwvR3JpZEl0ZW0+XG5cdFx0XHRcdDxHcmlkSXRlbSBmaWxsPlxuXHRcdFx0XHRcdDxTZWN0aW9uIGNsYXNzTmFtZT1cImhvbWUtY291cnNlc1wiPlxuXHRcdCAgICAgICAgICAgICAgXHQ8aDI+ZUxlYXJuaW5nPC9oMj5cblx0XHQgICAgICAgICAgICAgIFx0PGRpdj4mdWFjdXRlO2x0aW1vcyBjdXJzb3MgdG9tYWRvcyBlbiBsJmlhY3V0ZTtuZWE8L2Rpdj5cblx0XHRcdFx0XHRcdDxMYXRlc3RDb3Vyc2VzIHJlbmRlcmVyPVwic2xpZGVyXCIgZGF0YT17Y291cnNlc30vPlxuXHRcdFx0XHRcdDwvU2VjdGlvbj5cblx0XHRcdFx0PC9HcmlkSXRlbT5cblx0XHRcdDwvR3JpZENvbnRhaW5lcj5cblx0XHQpXG5cdH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgd2l0aE1vZHVsZShQYWdlQ29tcG9uZW50KTtcbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcbmltcG9ydCBDb21wb25lbnQgZnJvbSAnY29yZS9jb21wb25lbnRzL2NvbXBvbmVudCc7XG5pbXBvcnQgUG9zdExpbmsgZnJvbSAnam1hcnJveWF2ZS9jb21wb25lbnRzL2RhdGEvcG9zdF9saW5rJztcbmltcG9ydCBQbGFjZWhvbGRlciBmcm9tICdjb3JlL3VpL3BsYWNlaG9sZGVyJztcbmltcG9ydCBHcmlkQ29udGFpbmVyIGZyb20gJ2NvcmUvdWkvbGF5b3V0L2dyaWRfY29udGFpbmVyJztcbmltcG9ydCBHcmlkSXRlbSBmcm9tICdjb3JlL3VpL2xheW91dC9ncmlkX2l0ZW0nO1xuaW1wb3J0IFwiLi9yZWNlbnQuc2Nzc1wiO1xuXG5mdW5jdGlvbiBSZWNlbnRJdGVtKHtkYXRhfSl7XG4gIGlmKCFkYXRhIHx8IGRhdGEgPT0gbnVsbCkgcmV0dXJuIDxSZW5kZXJQbGFjZWhvbGRlci8+XG5cdHJldHVybiAoXG5cdFx0PGRpdiBjbGFzc05hbWU9J3Bvc3QnPjxQb3N0TGluayBjYXRlZ29yeT17ZGF0YS5hcmVhfSBzbHVnPXtkYXRhLnNsdWd9PntkYXRhLnRpdGxlfTwvUG9zdExpbms+PC9kaXY+XG5cdClcbn1cblxuZnVuY3Rpb24gUmVuZGVyUGxhY2Vob2xkZXIoe30pe1xuICAgIHJldHVybiAoXG4gICAgICA8ZGl2IHN0eWxlPXt7d2lkdGg6IFwiNjAlXCIsIGRpc3BsYXk6ICdpbmxpbmUtZmxleCd9fT5cbiAgICAgICAgPFBsYWNlaG9sZGVyIGRhdGE9e1tcbiAgICAgICAgICBbW1wiLVwiLCBcIjE4MFwiLCBcIjE1XCJdXSxcbiAgICAgICAgXX0vPlxuICAgICAgPC9kaXY+XG4gICAgKVxufVxuXG5jbGFzcyBSZWNlbnRJdGVtcyBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gIHJlbmRlcigpIHtcbiAgICB2YXIgeyBkYXRhIH0gPSB0aGlzLnByb3BzO1xuICAgIHZhciBrZXkgPSAwO1xuICBcdGRhdGEgPSAoZGF0YSkgPyBkYXRhIDogW251bGwsIG51bGwsIG51bGxdO1xuICAgIHJldHVybiAoXG4gICAgICA8R3JpZENvbnRhaW5lciBjbGFzc05hbWU9J21vZC1yZWNlbnQnIGRpcmVjdGlvbj0nY29sdW1uJyBqdXN0aWZ5PSdjZW50ZXInIGFsaWduSXRlbXM9J2NlbnRlcic+XG4gICAgICAgIDxHcmlkSXRlbT5cbiAgICAgICAgXHQ8aDE+cG9zdHMgcmVjaWVudGVzPC9oMT5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIml0ZW1zXCI+XG4gICAgICAgIFx0XHR7ZGF0YS5tYXAoKGl0ZW0pPT5cbiAgICAgICAgXHRcdFx0PFJlY2VudEl0ZW0gZGF0YT17aXRlbX0ga2V5PXtrZXkrK30vPlxuICAgICAgICBcdFx0KX1cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9HcmlkSXRlbT5cbiAgICAgIDwvR3JpZENvbnRhaW5lcj5cbiAgICApO1xuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IENvbXBvbmVudChSZWNlbnRJdGVtcyk7IiwiXG52YXIgY29udGVudCA9IHJlcXVpcmUoXCIhIS4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL2ZyYW1ld29ya3Mvd2ViYXBwcy9zdGFydHVwL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL2ZyYW1ld29ya3Mvd2ViYXBwcy9zdGFydHVwL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9saWIvbG9hZGVyLmpzIS4vcmVjZW50LnNjc3NcIik7XG5cbmlmKHR5cGVvZiBjb250ZW50ID09PSAnc3RyaW5nJykgY29udGVudCA9IFtbbW9kdWxlLmlkLCBjb250ZW50LCAnJ11dO1xuXG52YXIgdHJhbnNmb3JtO1xudmFyIGluc2VydEludG87XG5cblxuXG52YXIgb3B0aW9ucyA9IHtcImhtclwiOnRydWV9XG5cbm9wdGlvbnMudHJhbnNmb3JtID0gdHJhbnNmb3JtXG5vcHRpb25zLmluc2VydEludG8gPSB1bmRlZmluZWQ7XG5cbnZhciB1cGRhdGUgPSByZXF1aXJlKFwiIS4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL2ZyYW1ld29ya3Mvd2ViYXBwcy9zdGFydHVwL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvbGliL2FkZFN0eWxlcy5qc1wiKShjb250ZW50LCBvcHRpb25zKTtcblxuaWYoY29udGVudC5sb2NhbHMpIG1vZHVsZS5leHBvcnRzID0gY29udGVudC5sb2NhbHM7XG5cbmlmKG1vZHVsZS5ob3QpIHtcblx0bW9kdWxlLmhvdC5hY2NlcHQoXCIhIS4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL2ZyYW1ld29ya3Mvd2ViYXBwcy9zdGFydHVwL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL2ZyYW1ld29ya3Mvd2ViYXBwcy9zdGFydHVwL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9saWIvbG9hZGVyLmpzIS4vcmVjZW50LnNjc3NcIiwgZnVuY3Rpb24oKSB7XG5cdFx0dmFyIG5ld0NvbnRlbnQgPSByZXF1aXJlKFwiISEuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9mcmFtZXdvcmtzL3dlYmFwcHMvc3RhcnR1cC9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9mcmFtZXdvcmtzL3dlYmFwcHMvc3RhcnR1cC9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvbGliL2xvYWRlci5qcyEuL3JlY2VudC5zY3NzXCIpO1xuXG5cdFx0aWYodHlwZW9mIG5ld0NvbnRlbnQgPT09ICdzdHJpbmcnKSBuZXdDb250ZW50ID0gW1ttb2R1bGUuaWQsIG5ld0NvbnRlbnQsICcnXV07XG5cblx0XHR2YXIgbG9jYWxzID0gKGZ1bmN0aW9uKGEsIGIpIHtcblx0XHRcdHZhciBrZXksIGlkeCA9IDA7XG5cblx0XHRcdGZvcihrZXkgaW4gYSkge1xuXHRcdFx0XHRpZighYiB8fCBhW2tleV0gIT09IGJba2V5XSkgcmV0dXJuIGZhbHNlO1xuXHRcdFx0XHRpZHgrKztcblx0XHRcdH1cblxuXHRcdFx0Zm9yKGtleSBpbiBiKSBpZHgtLTtcblxuXHRcdFx0cmV0dXJuIGlkeCA9PT0gMDtcblx0XHR9KGNvbnRlbnQubG9jYWxzLCBuZXdDb250ZW50LmxvY2FscykpO1xuXG5cdFx0aWYoIWxvY2FscykgdGhyb3cgbmV3IEVycm9yKCdBYm9ydGluZyBDU1MgSE1SIGR1ZSB0byBjaGFuZ2VkIGNzcy1tb2R1bGVzIGxvY2Fscy4nKTtcblxuXHRcdHVwZGF0ZShuZXdDb250ZW50KTtcblx0fSk7XG5cblx0bW9kdWxlLmhvdC5kaXNwb3NlKGZ1bmN0aW9uKCkgeyB1cGRhdGUoKTsgfSk7XG59IiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuXG5pbXBvcnQgR3JpZENvbnRhaW5lciBmcm9tICdjb3JlL3VpL2xheW91dC9ncmlkX2NvbnRhaW5lcic7XG5pbXBvcnQgR3JpZEl0ZW0gZnJvbSAnY29yZS91aS9sYXlvdXQvZ3JpZF9pdGVtJztcbmltcG9ydCBMaXN0IGZyb20gJ2NvcmUvdWkvbGlzdCc7XG5pbXBvcnQgUGFwZXIgZnJvbSAnY29yZS91aS9wYXBlcic7XG5pbXBvcnQgTGluayBmcm9tICdjb3JlL3VpL2xpbmsnO1xuaW1wb3J0IFNsaWRlciBmcm9tIFwiY29yZS91aS9zbGlkZXJcIjtcblxuY29uc3Qgc2VjdGlvbnMgPSBbXG4gIHt0aXRsZTogXCJMZW5ndWFnZXNcIiwgc3VidGl0bGU6IFwibGVuZ3VhamVzLCBjb21waWxhZG9yZXMsIGludGVycHJldGVzLlwiLCBrZXk6IFwibGFuZ1wifSxcbiAge3RpdGxlOiAnUGxhdGFmb3JtYXMnLCBzdWJ0aXRsZTogXCJzaXN0ZW1hcyBvcGVyYXRpdm9zLlwiLCBrZXk6ICdvcyd9LFxuICB7dGl0bGU6ICdGcmFtZXdvcmtzJywgc3VidGl0bGU6IFwiZnJhbWV3b3JrcywgYmlibGlvdGVjYXMuXCIsIGtleTogJ2Z3J30sXG4gIHt0aXRsZTogJ0hlcnJhbWllbnRhcycsIHN1YnRpdGxlOiBcIklERXMsIHBhcXVldGVzLCBwaXBlbGluZXMuXCIsIGtleTogJ3Rvb2xzJ30sXG4gIHt0aXRsZTogJ0Jhc2VzIGRlIERhdG9zJywgc3VidGl0bGU6IFwicmVsYWNpb25hbGVzLCBuby1zcWwuXCIsIGtleTogJ2RiJ30sXG4gIHt0aXRsZTogJ1NlcnZpY2lvcycsIHN1YnRpdGxlOiBcImNsb3Vkcy5cIiwga2V5OiAnc2VydmljZXMnfSAgXG5dO1xuXG5mdW5jdGlvbiBTZWN0aW9uVHJlbmRzKHt0aXRsZSwgc3VidGl0bGUsIGRhdGF9KSB7XG4gICAgdmFyIGtleSA9IDA7XG5cbiAgICByZXR1cm4gKFxuICAgICAgPGRpdiBzdHlsZT17e3BhZGRpbmc6IFwiMXJlbVwifX0+XG4gICAgICAgIDxQYXBlciBrZXk9e2tleSsrfSBzdHlsZT17e3BhZGRpbmc6IFwiMXJlbVwiLCBmbGV4OiAxfX0gZmlsbD5cbiAgICAgICAgICAgIDxoMT57dGl0bGV9PC9oMT5cbiAgICAgICAgICAgIDxoNj57c3VidGl0bGV9PC9oNj5cbiAgICAgICAgICAgIDxMaXN0IFxuICAgICAgICAgICAgICAgIGxvYWRpbmc9eyhkYXRhID09IG51bGwpID8gdHJ1ZSA6IGZhbHNlfVxuICAgICAgICAgICAgICAgIG1heEl0ZW1zPXs1fVxuICAgICAgICAgICAgICAgIGRhdGE9e2RhdGF9IFxuICAgICAgICAgICAgICAgIHByaW1hcnlMYW1iZGE9eyhpdGVtKT0+aXRlbS50ZXh0fSBcbiAgICAgICAgICAgICAgICBhdmF0YXJMYW1iZGE9eyhpdGVtKT0+YC9yZXMvaW1nL2RlZmF1bHQtb3JpZ2luYWwuc3ZnYH0gXG4gICAgICAgICAgICAgICAgYXZhdGFyVHlwZT17XCJpbWdcIn1cbiAgICAgICAgICAgIC8+XG4gICAgICAgIDwvUGFwZXI+XG4gICAgICA8L2Rpdj5cbiAgICApO1xufVxuXG5jbGFzcyBTb2Z0d2FyZVRyZW5kQ29tcG9uZW50IGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgcmVuZGVyKCkge1xuICAgIGNvbnN0IHsgZGF0YSB9ID0gdGhpcy5wcm9wcztcbiAgICB2YXIga2V5ID0gMDtcbiAgICByZXR1cm4gKFxuICAgICAgICA8R3JpZENvbnRhaW5lciBzcGFjaW5nPXs4fT5cbiAgICAgICAgICAgIDxHcmlkSXRlbSB4cz17MTJ9PlxuICAgICAgICAgICAgICA8aDI+c29mdHdhcmUgZW4gc3RhY2tvdmVyZmxvdzwvaDI+XG4gICAgICAgICAgICAgIDxkaXY+dGVuZGVuY2lhcyBlbiB1c28gZGUgc29mdHdhcmUgcGFyYSBkZXNhcnJvbGxvIG9idGVuaWRvIGRlIGxhcyBwcmVndW50YXMgZGUgbGEgY29tdW5pZGFkIGRlIHN0YWNrb3ZlcmZsb3cuIDxMaW5rIHRvPXsnbGFicy9zdGFja292ZXJmbG93J30+dmVyIG3DoXM8L0xpbms+PC9kaXY+XG4gICAgICAgICAgICA8L0dyaWRJdGVtPlxuICAgICAgICAgICAgPEdyaWRJdGVtIHhzPXsxMn0+XG4gICAgICAgICAgICAgIHt0aGlzLnJlbmRlclNsaWRlcihzZWN0aW9ucywgZGF0YSl9XG4gICAgICAgICAgICA8L0dyaWRJdGVtPiAgICAgICAgICAgIFxuICAgICAgICA8L0dyaWRDb250YWluZXI+XG4gICAgKTtcbiAgfVxuXG4gIHJlbmRlclNsaWRlcihzZWN0aW9ucywgZGF0YSkge1xuICAgIHJldHVybiAoXG4gICAgICA8U2xpZGVyIHhzPXsxfSBzbT17MX0gbWQ9ezJ9IGxnPXszfT5cbiAgICAgICAgICB7c2VjdGlvbnMubWFwKChzZWN0aW9uLCBrZXkpPT5cbiAgICAgICAgICAgIDxkaXYga2V5PXtrZXl9PlxuICAgICAgICAgICAgICA8U2VjdGlvblRyZW5kcyB0aXRsZT17c2VjdGlvbi50aXRsZX0gc3VidGl0bGU9e3NlY3Rpb24uc3VidGl0bGV9IGRhdGE9eyhkYXRhKSA/IGRhdGFbc2VjdGlvbi5rZXldIDogbnVsbH0vPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgKX1cbiAgICAgIDwvU2xpZGVyPlxuICAgICk7XG4gIH1cblxufVxuXG5leHBvcnQgZGVmYXVsdCBTb2Z0d2FyZVRyZW5kQ29tcG9uZW50OyJdLCJzb3VyY2VSb290IjoiIn0=