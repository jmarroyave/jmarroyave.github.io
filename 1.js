(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[1],{

/***/ "../../../../frameworks/webapps/startup/node_modules/css-loader/dist/cjs.js!../../../../frameworks/webapps/startup/node_modules/sass-loader/lib/loader.js!./src/jmarroyave/components/uxi/kb/android/content.scss":
/*!**************************************************************************************************************************************************************************************************************************************!*\
  !*** /media/jm/labs/dev/frameworks/webapps/startup/node_modules/css-loader/dist/cjs.js!/media/jm/labs/dev/frameworks/webapps/startup/node_modules/sass-loader/lib/loader.js!./src/jmarroyave/components/uxi/kb/android/content.scss ***!
  \**************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../../../../../../../frameworks/webapps/startup/node_modules/css-loader/dist/runtime/api.js */ "../../../../frameworks/webapps/startup/node_modules/css-loader/dist/runtime/api.js")(false);
// Module
exports.push([module.i, ".mod-kb-android {\n  font-size: 1.3em;\n  line-height: 1.8em; }\n\n.mod-kb-android .date {\n  font-size: 0.8em;\n  line-height: 0.9em;\n  margin-top: -10px;\n  font-weight: bold; }\n\n.mod-kb-android .excerpt {\n  font-size: 1em;\n  line-height: 1.1em;\n  font-style: italic; }\n\n.mod-kb-android .categories {\n  padding-bottom: 20px; }\n\n.mod-kb-android h1 {\n  font-size: 1.2em;\n  line-height: 1.0em; }\n\n.mod-kb-android .category {\n  font-size: 0.75em;\n  line-height: 1.0em;\n  padding-right: 20px;\n  color: #555;\n  cursor: pointer; }\n\n.mod-kb-android .category.active {\n  font-weight: bold;\n  color: black; }\n\n.mod-kb-android .item {\n  padding-bottom: 1em; }\n\n.mod-kb-android .item .subcat {\n  font-size: 0.6em; }\n\n.mod-kb-android .item .title {\n  font-size: 1em;\n  line-height: 1em; }\n\n.mod-kb-android .item .title .refs {\n  font-size: 0.6em; }\n\n.mod-kb-android .item .description {\n  font-size: 0.75em;\n  line-height: 1.25em; }\n\n.mod-kb-android .item .links {\n  padding: 0px;\n  line-height: 0.8em; }\n\n.mod-kb-android .item span.link {\n  padding: 0px;\n  font-size: 0.75em; }\n\n.mod-kb-android .item .images {\n  padding-top: 10px;\n  padding-left: 20px; }\n\n.mod-kb-android .page_index .page {\n  color: #444;\n  cursor: pointer;\n  padding-right: 10px;\n  font-size: 1em; }\n\n.mod-kb-android .page_index .page.active {\n  color: black;\n  font-weight: bold; }\n\n.mod-kb-android .footer {\n  font-size: 0.75em; }\n", ""]);



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

var _reactRouterDom = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/es/index.js");

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

/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvam1hcnJveWF2ZS9jb21wb25lbnRzL3V4aS9rYi9hbmRyb2lkL2NvbnRlbnQuc2NzcyIsIndlYnBhY2s6Ly8vLi9zcmMvam1hcnJveWF2ZS9jb21wb25lbnRzL3V4aS9rYi9hbmRyb2lkL2NvbnRlbnQuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2ptYXJyb3lhdmUvY29tcG9uZW50cy91eGkva2IvYW5kcm9pZC9jb250ZW50LnNjc3M/YTUzNiIsIndlYnBhY2s6Ly8vLi9zcmMvam1hcnJveWF2ZS9jb21wb25lbnRzL3V4aS9rYi9hbmRyb2lkL2xheW91dC9sYXlvdXQtcHJveHkuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2ptYXJyb3lhdmUvY29tcG9uZW50cy91eGkva2IvYW5kcm9pZC9sYXlvdXQvbGcvcGFnZS5qcyJdLCJuYW1lcyI6WyJDb250ZW50IiwicHJvcHMiLCJjb250ZXh0IiwiYXBpIiwid2luZG93IiwiX19hcGkiLCJzdGF0ZSIsImNhdGVnb3J5IiwicGFnZSIsIml0ZW1zUGVyUGFnZSIsImZldGNoRGF0YSIsImNhdCIsImdldEtCQW5kcm9pZCIsInNldFN0YXRlIiwiaSIsInNjcm9sbFRvIiwiZGF0YSIsInJlY29yZHMiLCJjYXRlZ29yaWVzIiwia2V5IiwidG90UGFnZXMiLCJNYXRoIiwiY2VpbCIsImxlbmd0aCIsInBhZ2VzIiwicHVzaCIsInBhZ2VEYXRhIiwic2xpY2UiLCJlbCIsImNvbnRhaW5lciIsImRhdGFfa2JfYW5kcm9pZCIsIm1hcCIsIml0ZW0iLCJzZXRDYXRlZ29yeSIsImJpbmQiLCJjYXQyIiwidGl0bGUiLCJjb3VudCIsImRlc2MiLCJyZXBvIiwiaG9tZXBhZ2UiLCJkb2NzIiwiZGVtbyIsIm1hc3RlcnBpZWNlIiwibGljZW5zZSIsImltZ3MiLCJpdGVtSW1nIiwic2V0UGFnZSIsIlJlYWN0IiwiQ29tcG9uZW50IiwiUGFnZUNvbXBvbmVudCIsInJlbmRlckRlZmF1bHQiLCJ3aWR0aCJdLCJtYXBw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QUFDQSxhQUNDO0FBQUssYUFBSyxFQUFFO0FBQUNvQyxlQUFLLEVBQUM7QUFBUDtBQUFaLFNBQ0ksNkJBQUMsYUFBRDtBQUFJLFlBQUksRUFBRXBDO0FBQVYsUUFESixDQUREO0FBS0E7Ozs7RUFaMEJnQyxlQUFNQyxTOztlQWVuQix5QkFBV0MsYUFBWCxDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNyQmY7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7SUFFTUEsYTs7Ozs7Ozs7Ozs7Ozs2QkFDRztBQUFBLFVBQ0NsQyxJQURELEdBQ1UsS0FBS2YsS0FEZixDQUNDZSxJQUREO0FBRVAsYUFDQyw2QkFBQyx1QkFBRCxRQUNDLDZCQUFDLGtCQUFELFFBQ0MsNkJBQUMsdUJBQUQsUUFDQyw2QkFBQyxrQkFBRDtBQUFVLFVBQUUsRUFBRSxDQUFkO0FBQWlCLFVBQUUsRUFBRTtBQUFyQixRQURELEVBR0MsNkJBQUMsa0JBQUQ7QUFBVyxVQUFFLEVBQUUsRUFBZjtBQUFtQixVQUFFLEVBQUU7QUFBdkIsU0FDQyw2QkFBQyx1QkFBRCxRQUNDLDZCQUFDLGtCQUFELFFBQ0MseUNBQUksNkJBQUMsa0JBQUQ7QUFBVSxZQUFJLEVBQUU7QUFBaEIsY0FBSixlQURELENBREQsRUFJQyw2QkFBQyxrQkFBRCxRQUNDLDZCQUFDLGdCQUFEO0FBQVMsWUFBSSxFQUFFQTtBQUFmLFFBREQsQ0FKRCxDQURELENBSEQsRUFhQyw2QkFBQyxrQkFBRDtBQUFVLFVBQUUsRUFBRSxDQUFkO0FBQWlCLFVBQUUsRUFBRTtBQUFyQixRQWJELENBREQsQ0FERCxDQUREO0FBc0JBOzs7O0VBekIwQmdDLGVBQU1DLFM7O2VBNEJuQix5QkFBV0MsYUFBWCxDIiwiZmlsZSI6IjEuanMiLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnRzID0gbW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vZnJhbWV3b3Jrcy93ZWJhcHBzL3N0YXJ0dXAvbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiKShmYWxzZSk7XG4vLyBNb2R1bGVcbmV4cG9ydHMucHVzaChbbW9kdWxlLmlkLCBcIi5tb2Qta2ItYW5kcm9pZCB7XFxuICBmb250LXNpemU6IDEuM2VtO1xcbiAgbGluZS1oZWlnaHQ6IDEuOGVtOyB9XFxuXFxuLm1vZC1rYi1hbmRyb2lkIC5kYXRlIHtcXG4gIGZvbnQtc2l6ZTogMC44ZW07XFxuICBsaW5lLWhlaWdodDogMC45ZW07XFxuICBtYXJnaW4tdG9wOiAtMTBweDtcXG4gIGZvbnQtd2VpZ2h0OiBib2xkOyB9XFxuXFxuLm1vZC1rYi1hbmRyb2lkIC5leGNlcnB0IHtcXG4gIGZvbnQtc2l6ZTogMWVtO1xcbiAgbGluZS1oZWlnaHQ6IDEuMWVtO1xcbiAgZm9udC1zdHlsZTogaXRhbGljOyB9XFxuXFxuLm1vZC1rYi1hbmRyb2lkIC5jYXRlZ29yaWVzIHtcXG4gIHBhZGRpbmctYm90dG9tOiAyMHB4OyB9XFxuXFxuLm1vZC1rYi1hbmRyb2lkIGgxIHtcXG4gIGZvbnQtc2l6ZTogMS4yZW07XFxuICBsaW5lLWhlaWdodDogMS4wZW07IH1cXG5cXG4ubW9kLWtiLWFuZHJvaWQgLmNhdGVnb3J5IHtcXG4gIGZvbnQtc2l6ZTogMC43NWVtO1xcbiAgbGluZS1oZWlnaHQ6IDEuMGVtO1xcbiAgcGFkZGluZy1yaWdodDogMjBweDtcXG4gIGNvbG9yOiAjNTU1O1xcbiAgY3Vyc29yOiBwb2ludGVyOyB9XFxuXFxuLm1vZC1rYi1hbmRyb2lkIC5jYXRlZ29yeS5hY3RpdmUge1xcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxuICBjb2xvcjogYmxhY2s7IH1cXG5cXG4ubW9kLWtiLWFuZHJvaWQgLml0ZW0ge1xcbiAgcGFkZGluZy1ib3R0b206IDFlbTsgfVxcblxcbi5tb2Qta2ItYW5kcm9pZCAuaXRlbSAuc3ViY2F0IHtcXG4gIGZvbnQtc2l6ZTogMC42ZW07IH1cXG5cXG4ubW9kLWtiLWFuZHJvaWQgLml0ZW0gLnRpdGxlIHtcXG4gIGZvbnQtc2l6ZTogMWVtO1xcbiAgbGluZS1oZWlnaHQ6IDFlbTsgfVxcblxcbi5tb2Qta2ItYW5kcm9pZCAuaXRlbSAudGl0bGUgLnJlZnMge1xcbiAgZm9udC1zaXplOiAwLjZlbTsgfVxcblxcbi5tb2Qta2ItYW5kcm9pZCAuaXRlbSAuZGVzY3JpcHRpb24ge1xcbiAgZm9udC1zaXplOiAwLjc1ZW07XFxuICBsaW5lLWhlaWdodDogMS4yNWVtOyB9XFxuXFxuLm1vZC1rYi1hbmRyb2lkIC5pdGVtIC5saW5rcyB7XFxuICBwYWRkaW5nOiAwcHg7XFxuICBsaW5lLWhlaWdodDogMC44ZW07IH1cXG5cXG4ubW9kLWtiLWFuZHJvaWQgLml0ZW0gc3Bhbi5saW5rIHtcXG4gIHBhZGRpbmc6IDBweDtcXG4gIGZvbnQtc2l6ZTogMC43NWVtOyB9XFxuXFxuLm1vZC1rYi1hbmRyb2lkIC5pdGVtIC5pbWFnZXMge1xcbiAgcGFkZGluZy10b3A6IDEwcHg7XFxuICBwYWRkaW5nLWxlZnQ6IDIwcHg7IH1cXG5cXG4ubW9kLWtiLWFuZHJvaWQgLnBhZ2VfaW5kZXggLnBhZ2Uge1xcbiAgY29sb3I6ICM0NDQ7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxuICBwYWRkaW5nLXJpZ2h0OiAxMHB4O1xcbiAgZm9udC1zaXplOiAxZW07IH1cXG5cXG4ubW9kLWtiLWFuZHJvaWQgLnBhZ2VfaW5kZXggLnBhZ2UuYWN0aXZlIHtcXG4gIGNvbG9yOiBibGFjaztcXG4gIGZvbnQtd2VpZ2h0OiBib2xkOyB9XFxuXFxuLm1vZC1rYi1hbmRyb2lkIC5mb290ZXIge1xcbiAgZm9udC1zaXplOiAwLjc1ZW07IH1cXG5cIiwgXCJcIl0pO1xuXG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IENvbXBvbmVudCBmcm9tICdjb3JlL2NvbXBvbmVudHMvY29tcG9uZW50JztcbmltcG9ydCBQb3N0TGluayBmcm9tIFwiam1hcnJveWF2ZS9jb21wb25lbnRzL2RhdGEvcG9zdF9saW5rXCI7XG5pbXBvcnQgR3JpZENvbnRhaW5lciBmcm9tICdqbWFycm95YXZlL2NvbXBvbmVudHMvdXhpL2NvcmUvZ3JpZF9jb250YWluZXInO1xuaW1wb3J0IEdyaWRJdGVtIGZyb20gJ2ptYXJyb3lhdmUvY29tcG9uZW50cy91eGkvY29yZS9ncmlkX2l0ZW0nO1xuaW1wb3J0IERhdGUgZnJvbSAnY29yZS9jb21wb25lbnRzL2RhdGUnO1xuXG5pbXBvcnQgJy4vY29udGVudC5zY3NzJztcblxuY2xhc3MgQ29udGVudCBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG5cdGNvbnN0cnVjdG9yKHByb3BzLGNvbnRleHQpIHtcblx0XHRzdXBlcihwcm9wcyxjb250ZXh0KTtcblx0XHR0aGlzLmFwaSA9IHdpbmRvdy5fX2FwaTtcblx0XHR0aGlzLnN0YXRlID0ge1xuXHRcdFx0Y2F0ZWdvcnk6ICdEZXYgJiBCdWlsZCcsXG5cdFx0XHRwYWdlOiAxLFxuXHRcdH1cblxuXHRcdHRoaXMuaXRlbXNQZXJQYWdlID0gMjU7XG5cdH1cblxuXHRjb21wb25lbnREaWRNb3VudCgpe1xuXHRcdHRoaXMuZmV0Y2hEYXRhKHRoaXMuc3RhdGUuY2F0ZWdvcnkpO1xuXHR9XG5cblx0ZmV0Y2hEYXRhKGNhdCl7XG5cdFx0dGhpcy5hcGkuZ2V0S0JBbmRyb2lkKGNhdCk7XHRcdFxuXHR9XG5cblx0c2V0Q2F0ZWdvcnkoY2F0KXtcblx0XHR0aGlzLnNldFN0YXRlKHtjYXRlZ29yeTogY2F0LCBwYWdlOiAxfSk7XG5cdFx0dGhpcy5mZXRjaERhdGEoY2F0KTtcblx0fVxuXG5cdHNldFBhZ2UoaSl7XG5cdFx0dGhpcy5zZXRTdGF0ZSh7cGFnZTogaX0pO1xuXHRcdHdpbmRvdy5zY3JvbGxUbygwLDApO1xuXHR9XG5cblx0cmVuZGVyKCl7XG5cdFx0dmFyIGRhdGEgPSAodGhpcy5wcm9wcy5kYXRhLnJlY29yZHMpID8gdGhpcy5wcm9wcy5kYXRhLnJlY29yZHMucmVjb3JkcyA6IFtdO1xuXHRcdGNvbnN0IGNhdGVnb3JpZXMgPSAodGhpcy5wcm9wcy5kYXRhLmNhdGVnb3JpZXMpID8gdGhpcy5wcm9wcy5kYXRhLmNhdGVnb3JpZXMucmVjb3JkcyA6IFtdO1xuXHRcdHZhciBrZXkgPSAwO1xuXG5cdFx0Y29uc3QgdG90UGFnZXMgPSBNYXRoLmNlaWwoZGF0YS5sZW5ndGggLyB0aGlzLml0ZW1zUGVyUGFnZSk7XG5cdFx0dmFyIHBhZ2VzID0gW107IGZvcih2YXIgaSA9IDE7IGk8PXRvdFBhZ2VzO2krKyl7cGFnZXMucHVzaChpKX1cblxuXHRcdGNvbnN0IHBhZ2VEYXRhID0gZGF0YS5zbGljZSgodGhpcy5pdGVtc1BlclBhZ2UgKiAodGhpcy5zdGF0ZS5wYWdlIC0gMSkpLCAodGhpcy5pdGVtc1BlclBhZ2UgKiB0aGlzLnN0YXRlLnBhZ2UpKTtcblxuXHRcdHJldHVybiAoXG5cdFx0XHQ8R3JpZENvbnRhaW5lciBjbGFzc05hbWU9J21vZC1rYi1hbmRyb2lkJyByZWY9eyBlbCA9PiB0aGlzLmNvbnRhaW5lciA9IGVsfT5cblx0XHRcdFx0PEdyaWRJdGVtPlx0XHRcdFx0XG5cdFx0XHRcdFx0PGRpdj48RGF0ZSB2YWx1ZT17JzAxLzA1LzIwMTgnfSBjbGFzc05hbWU9J2RhdGUnLz48L2Rpdj5cblx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT0nZXhjZXJwdCc+XG5cdFx0XHRcdFx0XHRSZWNvcGlsYWNpw7NuIGRlIGxpYnJlcsOtYXMgcGFyYSB1dGlsaXphciBlbiBBbmRyb2lkIDxhIGhyZWY9e3RoaXMuYXBpLmRhdGFfa2JfYW5kcm9pZH0+ZGVzY2FyZ2FyPC9hPlxuXHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHQ8L0dyaWRJdGVtPlxuXHRcdFx0XHQ8R3JpZEl0ZW0+XG5cdFx0XHRcdFx0PGJyLz5cblx0XHRcdFx0XHQ8aDE+Q2F0ZWdvciZpYWN1dGU7YXM8L2gxPlxuXHRcdFx0XHRcdDxHcmlkQ29udGFpbmVyIGNsYXNzTmFtZT0nY2F0ZWdvcmllcycgZGlyZWN0aW9uPSdyb3cnPlxuXHRcdFx0XHRcdFx0e2NhdGVnb3JpZXMubWFwKChpdGVtKT0+XG5cdFx0XHRcdFx0XHRcdDxHcmlkSXRlbSBrZXk9e2tleSsrfSB4cz17NH0gbWQ9ezJ9IGxnPXsxfT5cblx0XHRcdFx0XHRcdFx0IFx0PHNwYW4gY2xhc3NOYW1lPXtgY2F0ZWdvcnkgJHsoaXRlbSA9PSB0aGlzLnN0YXRlLmNhdGVnb3J5KSA/IFwiYWN0aXZlXCIgOiBcIlwifWB9IG9uQ2xpY2s9e3RoaXMuc2V0Q2F0ZWdvcnkuYmluZCh0aGlzLCBpdGVtKX0+e2l0ZW19PC9zcGFuPlxuXHRcdFx0XHRcdFx0XHQ8L0dyaWRJdGVtPlxuXHRcdFx0XHRcdFx0KX1cblx0XHRcdFx0XHQ8L0dyaWRDb250YWluZXI+XG5cdFx0XHRcdFx0PGhyLz5cblx0XHRcdFx0PC9HcmlkSXRlbT5cblx0XHRcdFx0PEdyaWRJdGVtPlxuXHRcdFx0XHRcdHtwYWdlRGF0YS5sZW5ndGggPT0gMCAmJiBcblx0XHRcdFx0XHRcdDxkaXY+TG9hZGluZzwvZGl2PlxuXHRcdFx0XHRcdH1cblx0XHRcdFx0XHR7cGFnZURhdGEubGVuZ3RoID4gMCAmJiBwYWdlRGF0YS5tYXAoKGl0ZW0pPT5cblx0XHRcdFx0XHRcdDxkaXYga2V5PXtrZXkrK30gY2xhc3NOYW1lPSdpdGVtJz5cblx0XHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9J3N1YmNhdCc+e2l0ZW0uY2F0Mn08L2Rpdj5cblx0XHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9J3RpdGxlJz57aXRlbS50aXRsZX0gPHNwYW4gY2xhc3NOYW1lPSdyZWZzJz5bcmVmczp7aXRlbS5jb3VudH1dPC9zcGFuPjwvZGl2PlxuXHRcdFx0XHRcdFx0XHR7KGl0ZW0uZGVzYyAmJiBpdGVtLmRlc2MgIT0gXCJcIikgJiYgPGRpdiBjbGFzc05hbWU9J2Rlc2NyaXB0aW9uJz57aXRlbS5kZXNjfTwvZGl2Pn0gXG5cdFx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPSdsaW5rcyc+XG5cdFx0XHRcdFx0XHRcdFx0PHNwYW4gY2xhc3NOYW1lPSdsaW5rJz48YSBocmVmPXtpdGVtLnJlcG99PmdpdGh1YjwvYT4gPC9zcGFuPlxuXHRcdFx0XHRcdFx0XHRcdHsoaXRlbS5ob21lcGFnZSAmJiBpdGVtLmhvbWVwYWdlICE9IFwiXCIpICYmIDxzcGFuIGNsYXNzTmFtZT0nbGluayc+PGEgaHJlZj17aXRlbS5ob21lcGFnZX0+aG9tZXBhZ2U8L2E+IDwvc3Bhbj59IFxuXHRcdFx0XHRcdFx0XHRcdHsoaXRlbS5kb2NzICYmIGl0ZW0uZG9jcyAhPSBcIlwiKSAmJiA8c3BhbiBjbGFzc05hbWU9J2xpbmsnPjxhIGhyZWY9e2l0ZW0uZG9jc30+ZG9jczwvYT4gPC9zcGFuPn0gXG5cdFx0XHRcdFx0XHRcdFx0eyhpdGVtLmRlbW8gJiYgaXRlbS5kZW1vICE9IFwiXCIpICYmIDxzcGFuIGNsYXNzTmFtZT0nbGluayc+PGEgaHJlZj17aXRlbS5kZW1vfT5kZW1vPC9hPiA8L3NwYW4+fSBcblx0XHRcdFx0XHRcdFx0XHR7KGl0ZW0ubWFzdGVycGllY2UgJiYgaXRlbS5tYXN0ZXJwaWVjZSAhPSBcIlwiKSAmJiA8c3BhbiBjbGFzc05hbWU9J2xpbmsnPjxhIGhyZWY9e2l0ZW0ubWFzdGVycGllY2V9Pm1hc3RlciBwaWVjZTwvYT4gPC9zcGFuPn0gXG5cdFx0XHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT0nbGlua3MnPlxuXHRcdFx0XHRcdFx0XHRcdHsoaXRlbS5saWNlbnNlICYmIGl0ZW0ubGljZW5zZSAhPSBcIlwiKSAmJiA8c3BhbiBjbGFzc05hbWU9J3N1YmNhdCc+bGljZW5zZToge2l0ZW0ubGljZW5zZX08L3NwYW4+fSBcblx0XHRcdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPSdpbWFnZXMnPlxuXHRcdFx0XHRcdFx0XHR7aXRlbS5pbWdzLm1hcCgoaXRlbUltZyk9PlxuXHRcdFx0XHRcdFx0XHRcdDxpbWcga2V5PXtrZXkrK30gaGVpZ2h0PVwiMjAwcHhcIiBzcmM9e2l0ZW1JbWd9Lz5cblx0XHRcdFx0XHRcdFx0KX1cblx0XHRcdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0XHQpfVxuXHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPSdwYWdlX2luZGV4Jz5cblx0XHRcdFx0XHR7cGFnZXMubWFwKChpdGVtKT0+XG5cdFx0XHRcdFx0XHQ8c3BhbiBrZXk9e2tleSsrfSBvbkNsaWNrPXt0aGlzLnNldFBhZ2UuYmluZCh0aGlzLCBpdGVtKX0gY2xhc3NOYW1lPXtgcGFnZSAkeyh0aGlzLnN0YXRlLnBhZ2UgPT0gaXRlbSk/ICdhY3RpdmUnIDogJyd9YH0+e2l0ZW19IDwvc3Bhbj5cblx0XHRcdFx0XHQpfVxuXHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHQ8L0dyaWRJdGVtPlxuXHRcdFx0XHQ8R3JpZEl0ZW0gY2xhc3NOYW1lPSdmb290ZXInPlxuXHRcdFx0XHRcdDxoci8+XG5cdFx0XHRcdFx0aW1wb3J0YWRvcyBkZXNkZTpcblx0XHRcdFx0XHQ8dWw+XG5cdFx0XHRcdFx0ICA8bGk+PGEgaHJlZj1cImh0dHBzOi8vZ2l0aHViLmNvbS93YXNhYmVlZi9hd2Vzb21lLWFuZHJvaWQtdWlcIj53YXNhYmVlZi9hd2Vzb21lLWFuZHJvaWQtdWk8L2E+PC9saT5cblx0XHRcdFx0XHQgIDxsaT48YSBocmVmPVwiaHR0cHM6Ly9naXRodWIuY29tL3dhc2FiZWVmL2F3ZXNvbWUtYW5kcm9pZC1saWJyYXJpZXNcIj53YXNhYmVlZi9hd2Vzb21lLWFuZHJvaWQtbGlicmFyaWVzPC9hPjwvbGk+XG5cdFx0XHRcdFx0ICA8bGk+PGEgaHJlZj1cImh0dHBzOi8vZ2l0aHViLmNvbS9UcmluZWEvYW5kcm9pZC1vcGVuLXByb2plY3RcIj5UcmluZWEvYW5kcm9pZC1vcGVuLXByb2plY3Q8L2E+PC9saT5cblx0XHRcdFx0XHQgIDxsaT48YSBocmVmPVwiaHR0cHM6Ly9naXRodWIuY29tL1BoaWxKYXkvQW5kcm9pZEVsZW1lbnRhbHNcIj5QaGlsSmF5L0FuZHJvaWRFbGVtZW50YWxzPC9hPjwvbGk+XG5cdFx0XHRcdFx0ICA8bGk+PGEgaHJlZj1cImh0dHBzOi8vZ2l0aHViLmNvbS90aGFuaHRvYW4xMTk2L2F3ZXNvbWUtYW5kcm9pZC11aVwiPnRoYW5odG9hbjExOTYvYXdlc29tZS1hbmRyb2lkLXVpPC9hPjwvbGk+XG5cdFx0XHRcdFx0ICA8bGk+PGEgaHJlZj1cImh0dHBzOi8vZ2l0aHViLmNvbS90aGFuaHRvYW4xMTk2L2F3ZXNvbWUtYW5kcm9pZFwiPnRoYW5odG9hbjExOTYvYXdlc29tZS1hbmRyb2lkPC9hPio8L2xpPlxuXHRcdFx0XHRcdCAgPGxpPjxhIGhyZWY9XCJodHRwczovL2dpdGh1Yi5jb20vc25vd2RyZWFtL2F3ZXNvbWUtYW5kcm9pZFwiPnNub3dkcmVhbS9hd2Vzb21lLWFuZHJvaWQ8L2E+KjwvbGk+XG5cdFx0XHRcdFx0ICA8bGk+PGEgaHJlZj1cImh0dHBzOi8vZ2l0aHViLmNvbS90aGFuaHRvYW4xMTk2L2F3ZXNvbWUtYW5kcm9pZC1saWJyYXJpZXNcIj50aGFuaHRvYW4xMTk2L2F3ZXNvbWUtYW5kcm9pZC1saWJyYXJpZXM8L2E+KjwvbGk+XG5cdFx0XHRcdFx0ICA8bGk+PGEgaHJlZj1cImh0dHBzOi8vZ2l0aHViLmNvbS9saWdodFNreS9Bd2Vzb21lLU1hdGVyaWFsRGVzaWduXCI+bGlnaHRTa3kvQXdlc29tZS1NYXRlcmlhbERlc2lnbjwvYT4qPC9saT5cblx0XHRcdFx0XHQgIDxsaT48YSBocmVmPVwiaHR0cHM6Ly9naXRodWIuY29tL2NvZGVwYXRoL2FuZHJvaWRfZ3VpZGVzL3dpa2kvTXVzdC1IYXZlLUxpYnJhcmllc1wiPmNvZGVwYXRoL2FuZHJvaWRfZ3VpZGVzPC9hPio8L2xpPlxuXHRcdFx0XHRcdCAgPGxpPjxhIGhyZWY9XCJodHRwczovL2dpdGh1Yi5jb20vbGlnaHRTa3kvQXdlc29tZS1NYXRlcmlhbERlc2lnblwiPmxpZ2h0U2t5L0F3ZXNvbWUtTWF0ZXJpYWxEZXNpZ248L2E+KjwvbGk+XG5cdFx0XHRcdFx0PC91bD5cblx0XHRcdFx0XHQ8L0dyaWRJdGVtPlxuXHRcdFx0PC9HcmlkQ29udGFpbmVyPlxuXHQpO1xuXHR9XG59XG5cbmV4cG9ydCBkZWZhdWx0IENvbXBvbmVudChDb250ZW50KTsiLCJcbnZhciBjb250ZW50ID0gcmVxdWlyZShcIiEhLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vZnJhbWV3b3Jrcy93ZWJhcHBzL3N0YXJ0dXAvbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vZnJhbWV3b3Jrcy93ZWJhcHBzL3N0YXJ0dXAvbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2xpYi9sb2FkZXIuanMhLi9jb250ZW50LnNjc3NcIik7XG5cbmlmKHR5cGVvZiBjb250ZW50ID09PSAnc3RyaW5nJykgY29udGVudCA9IFtbbW9kdWxlLmlkLCBjb250ZW50LCAnJ11dO1xuXG52YXIgdHJhbnNmb3JtO1xudmFyIGluc2VydEludG87XG5cblxuXG52YXIgb3B0aW9ucyA9IHtcImhtclwiOnRydWV9XG5cbm9wdGlvbnMudHJhbnNmb3JtID0gdHJhbnNmb3JtXG5vcHRpb25zLmluc2VydEludG8gPSB1bmRlZmluZWQ7XG5cbnZhciB1cGRhdGUgPSByZXF1aXJlKFwiIS4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL2ZyYW1ld29ya3Mvd2ViYXBwcy9zdGFydHVwL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvbGliL2FkZFN0eWxlcy5qc1wiKShjb250ZW50LCBvcHRpb25zKTtcblxuaWYoY29udGVudC5sb2NhbHMpIG1vZHVsZS5leHBvcnRzID0gY29udGVudC5sb2NhbHM7XG5cbmlmKG1vZHVsZS5ob3QpIHtcblx0bW9kdWxlLmhvdC5hY2NlcHQoXCIhIS4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL2ZyYW1ld29ya3Mvd2ViYXBwcy9zdGFydHVwL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL2ZyYW1ld29ya3Mvd2ViYXBwcy9zdGFydHVwL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9saWIvbG9hZGVyLmpzIS4vY29udGVudC5zY3NzXCIsIGZ1bmN0aW9uKCkge1xuXHRcdHZhciBuZXdDb250ZW50ID0gcmVxdWlyZShcIiEhLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vZnJhbWV3b3Jrcy93ZWJhcHBzL3N0YXJ0dXAvbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vZnJhbWV3b3Jrcy93ZWJhcHBzL3N0YXJ0dXAvbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2xpYi9sb2FkZXIuanMhLi9jb250ZW50LnNjc3NcIik7XG5cblx0XHRpZih0eXBlb2YgbmV3Q29udGVudCA9PT0gJ3N0cmluZycpIG5ld0NvbnRlbnQgPSBbW21vZHVsZS5pZCwgbmV3Q29udGVudCwgJyddXTtcblxuXHRcdHZhciBsb2NhbHMgPSAoZnVuY3Rpb24oYSwgYikge1xuXHRcdFx0dmFyIGtleSwgaWR4ID0gMDtcblxuXHRcdFx0Zm9yKGtleSBpbiBhKSB7XG5cdFx0XHRcdGlmKCFiIHx8IGFba2V5XSAhPT0gYltrZXldKSByZXR1cm4gZmFsc2U7XG5cdFx0XHRcdGlkeCsrO1xuXHRcdFx0fVxuXG5cdFx0XHRmb3Ioa2V5IGluIGIpIGlkeC0tO1xuXG5cdFx0XHRyZXR1cm4gaWR4ID09PSAwO1xuXHRcdH0oY29udGVudC5sb2NhbHMsIG5ld0NvbnRlbnQubG9jYWxzKSk7XG5cblx0XHRpZighbG9jYWxzKSB0aHJvdyBuZXcgRXJyb3IoJ0Fib3J0aW5nIENTUyBITVIgZHVlIHRvIGNoYW5nZWQgY3NzLW1vZHVsZXMgbG9jYWxzLicpO1xuXG5cdFx0dXBkYXRlKG5ld0NvbnRlbnQpO1xuXHR9KTtcblxuXHRtb2R1bGUuaG90LmRpc3Bvc2UoZnVuY3Rpb24oKSB7IHVwZGF0ZSgpOyB9KTtcbn0iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IEhpZGRlbiBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9IaWRkZW4nO1xuaW1wb3J0IHsgIEJyb3dzZXJWaWV3LCAgTW9iaWxlVmlldyB9IGZyb20gXCJyZWFjdC1kZXZpY2UtZGV0ZWN0XCI7XG5pbXBvcnQgd2l0aE1vZHVsZSBmcm9tICdqbWFycm95YXZlL2NvbXBvbmVudHMvdXhpL2NvcmUvd2l0aC1tb2R1bGUnO1xuaW1wb3J0IExHIGZyb20gXCJqbWFycm95YXZlL2NvbXBvbmVudHMvdXhpL2tiL2FuZHJvaWQvbGF5b3V0L2xnL3BhZ2VcIjtcblxuY2xhc3MgUGFnZUNvbXBvbmVudCBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG5cdHJlbmRlcigpe1xuXHRcdHJldHVybiB0aGlzLnJlbmRlckRlZmF1bHQoKTtcblx0fVxuXG5cdHJlbmRlckRlZmF1bHQoKXtcblx0XHR2YXIgZGF0YSA9IHRoaXMucHJvcHMuZGF0YTtcblx0XHRyZXR1cm4gKFxuXHRcdFx0PGRpdiBzdHlsZT17e3dpZHRoOicxMDAlJ319Plx0XHRcdFx0XG4gICAgXHRcdFx0PExHIGRhdGE9e2RhdGF9Lz5cblx0XHRcdDwvZGl2PlxuXHRcdClcdFx0XG5cdH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgd2l0aE1vZHVsZShQYWdlQ29tcG9uZW50KTsiLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgTGluayB9IGZyb20gJ3JlYWN0LXJvdXRlci1kb20nXG5pbXBvcnQgR3JpZENvbnRhaW5lciBmcm9tICdqbWFycm95YXZlL2NvbXBvbmVudHMvdXhpL2NvcmUvZ3JpZF9jb250YWluZXInO1xuaW1wb3J0IEdyaWRJdGVtIGZyb20gJ2ptYXJyb3lhdmUvY29tcG9uZW50cy91eGkvY29yZS9ncmlkX2l0ZW0nO1xuaW1wb3J0IEhpZGRlbiBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9IaWRkZW4nO1xuaW1wb3J0IE1vZHVsZXMgZnJvbSAnam1hcnJveWF2ZS9jb25mL2xheW91dC9tb2R1bGVzJztcbmltcG9ydCB3aXRoTW9kdWxlIGZyb20gJ2ptYXJyb3lhdmUvY29tcG9uZW50cy91eGkvY29yZS93aXRoLW1vZHVsZSc7XG5pbXBvcnQgQmxvY2sgZnJvbSAnam1hcnJveWF2ZS9jb21wb25lbnRzL3V4aS9ob21lL2Jsb2NrJztcbmltcG9ydCBNQmxvY2sgZnJvbSAnY29yZS9jb21wb25lbnRzL21vY2t1cC9ibG9jayc7XG5pbXBvcnQgU2VjdGlvbiBmcm9tICdjb3JlL2NvbXBvbmVudHMvbGF5b3V0L3NlY3Rpb24nO1xuaW1wb3J0IEJsb2dMaW5rIGZyb20gXCJqbWFycm95YXZlL2NvbXBvbmVudHMvZGF0YS9ibG9nX2xpbmtcIjtcbmltcG9ydCBDb250ZW50IGZyb20gJ2ptYXJyb3lhdmUvY29tcG9uZW50cy91eGkva2IvYW5kcm9pZC9jb250ZW50JztcblxuY2xhc3MgUGFnZUNvbXBvbmVudCBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG5cdHJlbmRlcigpe1xuXHRcdGNvbnN0IHsgZGF0YSB9ID0gdGhpcy5wcm9wcztcblx0XHRyZXR1cm4gKFxuXHRcdFx0PEdyaWRDb250YWluZXI+XG5cdFx0XHRcdDxHcmlkSXRlbT5cblx0XHRcdFx0XHQ8R3JpZENvbnRhaW5lcj5cblx0XHRcdFx0XHRcdDxHcmlkSXRlbSB4cz17MX0gbWQ9ezJ9PlxuXHRcdFx0XHRcdFx0PC9HcmlkSXRlbT5cblx0XHRcdFx0XHRcdDxHcmlkSXRlbSAgeHM9ezEwfSBtZD17OH0+XG5cdFx0XHRcdFx0XHRcdDxHcmlkQ29udGFpbmVyPlxuXHRcdFx0XHRcdFx0XHRcdDxHcmlkSXRlbT5cblx0XHRcdFx0XHRcdFx0XHRcdDxoMT48QmxvZ0xpbmsgc2x1Zz17J2tiJ30+a2I8L0Jsb2dMaW5rPiA+IGFuZHJvaWQ8L2gxPlxuXHRcdFx0XHRcdFx0XHRcdDwvR3JpZEl0ZW0+XHRcdFx0XG5cdFx0XHRcdFx0XHRcdFx0PEdyaWRJdGVtPlxuXHRcdFx0XHRcdFx0XHRcdFx0PENvbnRlbnQgZGF0YT17ZGF0YX0vPlxuXHRcdFx0XHRcdFx0XHRcdDwvR3JpZEl0ZW0+ICBcblx0XHRcdFx0XHRcdFx0PC9HcmlkQ29udGFpbmVyPlxuXHRcdFx0XHRcdFx0PC9HcmlkSXRlbT5cdFx0XHRcblx0XHRcdFx0XHRcdDxHcmlkSXRlbSB4cz17MX0gbWQ9ezJ9PlxuXHRcdFx0XHRcdFx0PC9HcmlkSXRlbT5cblx0XHRcdFx0XHQ8L0dyaWRDb250YWluZXI+XG5cdFx0XHRcdDwvR3JpZEl0ZW0+XG5cdFx0XHQ8L0dyaWRDb250YWluZXI+XG5cdFx0KVxuXHR9XG59XG5cbmV4cG9ydCBkZWZhdWx0IHdpdGhNb2R1bGUoUGFnZUNvbXBvbmVudCk7XG5cbiJdLCJzb3VyY2VSb290IjoiIn0=