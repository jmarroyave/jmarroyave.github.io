(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[2],{

/***/ "../../../../frameworks/webapps/startup/node_modules/css-loader/index.js!../../../../frameworks/webapps/startup/node_modules/sass-loader/lib/loader.js!./src/jmarroyave/components/uxi/blog_post/content.scss":
/*!*****************************************************************************************************************************************************************************************************************!*\
  !*** /media/jm/labs/frameworks/webapps/startup/node_modules/css-loader!/media/jm/labs/frameworks/webapps/startup/node_modules/sass-loader/lib/loader.js!./src/jmarroyave/components/uxi/blog_post/content.scss ***!
  \*****************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../../../../../../frameworks/webapps/startup/node_modules/css-loader/lib/css-base.js */ "../../../../frameworks/webapps/startup/node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".mod-post-content {\n  font-size: 1.3em;\n  line-height: 1.8em; }\n\n.mod-post-content .date {\n  font-size: 0.8em;\n  line-height: 0.9em;\n  margin-top: -10px;\n  font-weight: bold; }\n\n.mod-post-content .excerpt {\n  font-size: 1em;\n  line-height: 1.1em;\n  font-style: italic; }\n\n.mod-post-content .alert {\n  border: 1px solid black;\n  background-color: RGBA(0, 0, 0, 0.3);\n  padding: 5px;\n  border-radius: 5px;\n  color: white;\n  margin-top: 10px;\n  margin-bottom: 10px; }\n", ""]);

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
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }







var UIDate = function (_UIComponent) {
  _inherits(UIDate, _UIComponent);

  function UIDate() {
    _classCallCheck(this, UIDate);

    var _this = _possibleConstructorReturn(this, (UIDate.__proto__ || Object.getPrototypeOf(UIDate)).call(this));

    _this.state = {};
    return _this;
  }

  _createClass(UIDate, [{
    key: 'getDefaults',
    value: function getDefaults() {
      var defaults = {
        className: ''
      };
      return defaults;
    }
  }, {
    key: 'render',
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
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
        'span',
        { className: this.state.className },
        str
      );
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
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }




var styles = function styles(theme) {
  return {
    root: {
      width: '100%',
      boxSizing: 'border-box',
      padding: '16px'
    }
  };
};

var LayoutSection = function (_React$Component) {
  _inherits(LayoutSection, _React$Component);

  function LayoutSection() {
    _classCallCheck(this, LayoutSection);

    return _possibleConstructorReturn(this, (LayoutSection.__proto__ || Object.getPrototypeOf(LayoutSection)).apply(this, arguments));
  }

  _createClass(LayoutSection, [{
    key: 'render',
    value: function render() {
      var classes = this.props.classes;
      //const height = ("height" in this.props) ? this.props.height : '30px';
      var color = "color" in this.props ? this.props.color : 'white';
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
        'div',
        { className: classes.root, style: { backgroundColor: color } },
        this.props.children
      );
    }
  }]);

  return LayoutSection;
}(react__WEBPACK_IMPORTED_MODULE_0___default.a.Component);

/* harmony default export */ __webpack_exports__["default"] = (Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_1__["withStyles"])(styles)(LayoutSection));

/***/ }),

/***/ "./src/jmarroyave/components/data/blog_link.js":
/*!*****************************************************!*\
  !*** ./src/jmarroyave/components/data/blog_link.js ***!
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





var BlogLinkComponent = function (_React$Component) {
	_inherits(BlogLinkComponent, _React$Component);

	function BlogLinkComponent() {
		_classCallCheck(this, BlogLinkComponent);

		return _possibleConstructorReturn(this, (BlogLinkComponent.__proto__ || Object.getPrototypeOf(BlogLinkComponent)).apply(this, arguments));
	}

	_createClass(BlogLinkComponent, [{
		key: 'render',
		value: function render() {
			var slug = this.props.slug;
			return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
				react_router__WEBPACK_IMPORTED_MODULE_1__["Link"],
				{ to: '/' + slug },
				this.props.children
			);
		}
	}]);

	return BlogLinkComponent;
}(react__WEBPACK_IMPORTED_MODULE_0___default.a.Component);

/* harmony default export */ __webpack_exports__["default"] = (Object(jmarroyave_components_uxi_core_with_module__WEBPACK_IMPORTED_MODULE_2__["default"])(BlogLinkComponent));

/***/ }),

/***/ "./src/jmarroyave/components/uxi/blog_post/content.js":
/*!************************************************************!*\
  !*** ./src/jmarroyave/components/uxi/blog_post/content.js ***!
  \************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_components_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core/components/component */ "./src/core/components/component.js");
/* harmony import */ var jmarroyave_components_data_post_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! jmarroyave/components/data/post_link */ "./src/jmarroyave/components/data/post_link.js");
/* harmony import */ var jmarroyave_components_uxi_core_grid_container__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! jmarroyave/components/uxi/core/grid_container */ "./src/jmarroyave/components/uxi/core/grid_container.js");
/* harmony import */ var jmarroyave_components_uxi_core_grid_item__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! jmarroyave/components/uxi/core/grid_item */ "./src/jmarroyave/components/uxi/core/grid_item.js");
/* harmony import */ var core_components_date__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! core/components/date */ "./src/core/components/date.js");
/* harmony import */ var _content_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./content.scss */ "./src/jmarroyave/components/uxi/blog_post/content.scss");
/* harmony import */ var _content_scss__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_content_scss__WEBPACK_IMPORTED_MODULE_6__);
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }










var Content = function (_React$Component) {
	_inherits(Content, _React$Component);

	function Content(props, context) {
		_classCallCheck(this, Content);

		var _this = _possibleConstructorReturn(this, (Content.__proto__ || Object.getPrototypeOf(Content)).call(this, props, context));

		_this.api = window.__api;
		return _this;
	}

	_createClass(Content, [{
		key: 'componentDidMount',
		value: function componentDidMount() {}
	}, {
		key: 'render',
		value: function render() {
			var data = this.props.data;
			var key = 0;
			return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
				jmarroyave_components_uxi_core_grid_container__WEBPACK_IMPORTED_MODULE_3__["default"],
				{ className: 'mod-post-content' },
				react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
					jmarroyave_components_uxi_core_grid_item__WEBPACK_IMPORTED_MODULE_4__["default"],
					null,
					react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
						'div',
						null,
						react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(core_components_date__WEBPACK_IMPORTED_MODULE_5__["default"], { value: data.date, className: 'date' })
					)
				),
				react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
					jmarroyave_components_uxi_core_grid_item__WEBPACK_IMPORTED_MODULE_4__["default"],
					null,
					react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement('div', { dangerouslySetInnerHTML: { __html: data.html } })
				)
			);
		}
	}]);

	return Content;
}(react__WEBPACK_IMPORTED_MODULE_0___default.a.Component);

/* harmony default export */ __webpack_exports__["default"] = (Object(core_components_component__WEBPACK_IMPORTED_MODULE_1__["default"])(Content));

/***/ }),

/***/ "./src/jmarroyave/components/uxi/blog_post/content.scss":
/*!**************************************************************!*\
  !*** ./src/jmarroyave/components/uxi/blog_post/content.scss ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../../../../../../frameworks/webapps/startup/node_modules/css-loader!../../../../../../../../../frameworks/webapps/startup/node_modules/sass-loader/lib/loader.js!./content.scss */ "../../../../frameworks/webapps/startup/node_modules/css-loader/index.js!../../../../frameworks/webapps/startup/node_modules/sass-loader/lib/loader.js!./src/jmarroyave/components/uxi/blog_post/content.scss");

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
/* harmony import */ var jmarroyave_components_uxi_core_with_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! jmarroyave/components/uxi/core/with-module */ "./src/jmarroyave/components/uxi/core/with-module.js");
/* harmony import */ var jmarroyave_components_uxi_blog_post_layout_lg_page__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! jmarroyave/components/uxi/blog_post/layout/lg/page */ "./src/jmarroyave/components/uxi/blog_post/layout/lg/page.js");
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }







var PageComponent = function (_React$Component) {
	_inherits(PageComponent, _React$Component);

	function PageComponent() {
		_classCallCheck(this, PageComponent);

		return _possibleConstructorReturn(this, (PageComponent.__proto__ || Object.getPrototypeOf(PageComponent)).apply(this, arguments));
	}

	_createClass(PageComponent, [{
		key: 'render',
		value: function render() {
			return this.renderDefault();
		}
	}, {
		key: 'renderDefault',
		value: function renderDefault() {
			var data = this.props.data;
			var title = this.props.title;
			return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
				'div',
				{ style: { width: '100%' } },
				react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(jmarroyave_components_uxi_blog_post_layout_lg_page__WEBPACK_IMPORTED_MODULE_4__["default"], { data: data, title: title })
			);
		}
	}, {
		key: 'renderMultiple',
		value: function renderMultiple() {
			var data = this.props.data;
			return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
				'div',
				{ style: { width: '100%' } },
				react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Hidden__WEBPACK_IMPORTED_MODULE_1___default.a, { only: ['sm', 'md', 'lg', 'xl'] }),
				react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Hidden__WEBPACK_IMPORTED_MODULE_1___default.a, { only: ['xs', 'md', 'lg', 'xl'] }),
				react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
					_material_ui_core_Hidden__WEBPACK_IMPORTED_MODULE_1___default.a,
					{ only: ['xs', 'sm'] },
					react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(jmarroyave_components_uxi_blog_post_layout_lg_page__WEBPACK_IMPORTED_MODULE_4__["default"], { data: data })
				)
			);
		}
	}]);

	return PageComponent;
}(react__WEBPACK_IMPORTED_MODULE_0___default.a.Component);

/* harmony default export */ __webpack_exports__["default"] = (Object(jmarroyave_components_uxi_core_with_module__WEBPACK_IMPORTED_MODULE_3__["default"])(PageComponent));

/***/ }),

/***/ "./src/jmarroyave/components/uxi/blog_post/layout/lg/page.js":
/*!*******************************************************************!*\
  !*** ./src/jmarroyave/components/uxi/blog_post/layout/lg/page.js ***!
  \*******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-router */ "./node_modules/react-router/es/index.js");
/* harmony import */ var jmarroyave_components_uxi_core_grid_container__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! jmarroyave/components/uxi/core/grid_container */ "./src/jmarroyave/components/uxi/core/grid_container.js");
/* harmony import */ var jmarroyave_components_uxi_core_grid_item__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! jmarroyave/components/uxi/core/grid_item */ "./src/jmarroyave/components/uxi/core/grid_item.js");
/* harmony import */ var _material_ui_core_Hidden__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/core/Hidden */ "./node_modules/@material-ui/core/Hidden/index.js");
/* harmony import */ var _material_ui_core_Hidden__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Hidden__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var jmarroyave_conf_layout_modules__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! jmarroyave/conf/layout/modules */ "./src/jmarroyave/conf/layout/modules.js");
/* harmony import */ var jmarroyave_components_uxi_core_with_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! jmarroyave/components/uxi/core/with-module */ "./src/jmarroyave/components/uxi/core/with-module.js");
/* harmony import */ var jmarroyave_components_uxi_home_block__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! jmarroyave/components/uxi/home/block */ "./src/jmarroyave/components/uxi/home/block.js");
/* harmony import */ var core_components_mockup_block__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! core/components/mockup/block */ "./src/core/components/mockup/block.js");
/* harmony import */ var core_components_layout_section__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! core/components/layout/section */ "./src/core/components/layout/section.js");
/* harmony import */ var jmarroyave_components_uxi_blog_post_content__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! jmarroyave/components/uxi/blog_post/content */ "./src/jmarroyave/components/uxi/blog_post/content.js");
/* harmony import */ var jmarroyave_components_data_blog_link__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! jmarroyave/components/data/blog_link */ "./src/jmarroyave/components/data/blog_link.js");
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }














var PageComponent = function (_React$Component) {
	_inherits(PageComponent, _React$Component);

	function PageComponent() {
		_classCallCheck(this, PageComponent);

		return _possibleConstructorReturn(this, (PageComponent.__proto__ || Object.getPrototypeOf(PageComponent)).apply(this, arguments));
	}

	_createClass(PageComponent, [{
		key: 'getModules',
		value: function getModules() {
			var data = this.props.data;

			return [{ title: "Test", control: jmarroyave_conf_layout_modules__WEBPACK_IMPORTED_MODULE_5__["default"].Transfers ? react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
					'div',
					null,
					'test'
				) : null }];
		}
	}, {
		key: 'render',
		value: function render() {
			var data = this.props.data;
			var title = this.props.title;
			var mods = this.getModules();
			var modTest = mods[0];

			var post = data ? data.post : null;
			return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
				jmarroyave_components_uxi_core_grid_container__WEBPACK_IMPORTED_MODULE_2__["default"],
				null,
				react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
					jmarroyave_components_uxi_core_grid_item__WEBPACK_IMPORTED_MODULE_3__["default"],
					null,
					react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
						jmarroyave_components_uxi_core_grid_container__WEBPACK_IMPORTED_MODULE_2__["default"],
						null,
						react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(jmarroyave_components_uxi_core_grid_item__WEBPACK_IMPORTED_MODULE_3__["default"], { xs: 1 }),
						react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
							jmarroyave_components_uxi_core_grid_item__WEBPACK_IMPORTED_MODULE_3__["default"],
							{ xs: 10 },
							react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
								jmarroyave_components_uxi_core_grid_container__WEBPACK_IMPORTED_MODULE_2__["default"],
								null,
								react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
									jmarroyave_components_uxi_core_grid_item__WEBPACK_IMPORTED_MODULE_3__["default"],
									null,
									react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
										'h1',
										null,
										react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
											jmarroyave_components_data_blog_link__WEBPACK_IMPORTED_MODULE_11__["default"],
											{ slug: title },
											title
										),
										' > ',
										post ? post.title : ''
									)
								),
								react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
									jmarroyave_components_uxi_core_grid_item__WEBPACK_IMPORTED_MODULE_3__["default"],
									null,
									react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(jmarroyave_components_uxi_blog_post_content__WEBPACK_IMPORTED_MODULE_10__["default"], { data: post })
								)
							)
						),
						react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(jmarroyave_components_uxi_core_grid_item__WEBPACK_IMPORTED_MODULE_3__["default"], { xs: 1 })
					)
				)
			);
		}
	}]);

	return PageComponent;
}(react__WEBPACK_IMPORTED_MODULE_0___default.a.Component);

/* harmony default export */ __webpack_exports__["default"] = (Object(jmarroyave_components_uxi_core_with_module__WEBPACK_IMPORTED_MODULE_6__["default"])(PageComponent));

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvam1hcnJveWF2ZS9jb21wb25lbnRzL3V4aS9ibG9nX3Bvc3QvY29udGVudC5zY3NzIiwid2VicGFjazovLy8uL3NyYy9jb3JlL2NvbXBvbmVudHMvZGF0ZS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29yZS9jb21wb25lbnRzL2xheW91dC9zZWN0aW9uLmpzIiwid2VicGFjazovLy8uL3NyYy9qbWFycm95YXZlL2NvbXBvbmVudHMvZGF0YS9ibG9nX2xpbmsuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2ptYXJyb3lhdmUvY29tcG9uZW50cy91eGkvYmxvZ19wb3N0L2NvbnRlbnQuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2ptYXJyb3lhdmUvY29tcG9uZW50cy91eGkvYmxvZ19wb3N0L2NvbnRlbnQuc2Nzcz84NWE0Iiwid2VicGFjazovLy8uL3NyYy9qbWFycm95YXZlL2NvbXBvbmVudHMvdXhpL2Jsb2dfcG9zdC9sYXlvdXQvbGF5b3V0LXByb3h5LmpzIiwid2VicGFjazovLy8uL3NyYy9qbWFycm95YXZlL2NvbXBvbmVudHMvdXhpL2Jsb2dfcG9zdC9sYXlvdXQvbGcvcGFnZS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvam1hcnJveWF2ZS9jb25mL2xheW91dC9tb2R1bGVzLmpzIl0sIm5hbWVzIjpbIlVJRGF0ZSIsInN0YXRlIiwiZGVmYXVsdHMiLCJjbGFzc05hbWUiLCJ0aW1lQWdvIiwibGFuZyIsInByb3BzIiwiVGltZUFnbyIsImFkZExvY2FsZSIsImVzIiwiZW4iLCJkYXRlIiwic3RyIiwidmFsdWUiLCJsZW5ndGgiLCJEYXRlIiwibnVtIiwiTnVtYmVyIiwiaXNJbnRlZ2VyIiwiZm9ybWF0IiwiZXgiLCJVSUNvbXBvbmVudCIsInN0eWxlcyIsInJvb3QiLCJ3aWR0aCIsImJveFNpemluZyIsInBhZGRpbmciLCJMYXlvdXRTZWN0aW9uIiwiY2xhc3NlcyIsImNvbG9yIiwiYmFja2dyb3VuZENvbG9yIiwiY2hpbGRyZW4iLCJSZWFjdCIsIkNvbXBvbmVudCIsIndpdGhTdHlsZXMiLCJCbG9nTGlua0NvbXBvbmVudCIsInNsdWciLCJ3aXRoTW9kdWxlIiwiQ29udGVudCIsImNvbnRleHQiLCJhcGkiLCJ3aW5kb3ciLCJfX2FwaSIsImRhdGEiLCJrZXkiLCJfX2h0bWwiLCJodG1sIiwiUGFnZUNvbXBvbmVudCIsInJlbmRlckRlZmF1bHQiLCJ0aXRsZSIsImNvbnRyb2wiLCJNb2R1bGVzIiwiVHJhbnNmZXJzIiwibW9kcyIsImdldE1vZHVsZXMiLCJtb2RUZXN0IiwicG9zdCIsIkdhbWVzIiwiU3RhbmRpbmdzIiwiUG9zdFNlYXNvbiJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQUEsMkJBQTJCLG1CQUFPLENBQUMscUxBQStGO0FBQ2xJOzs7QUFHQTtBQUNBLGNBQWMsUUFBUyxzQkFBc0IscUJBQXFCLHVCQUF1QixFQUFFLDZCQUE2QixxQkFBcUIsdUJBQXVCLHNCQUFzQixzQkFBc0IsRUFBRSxnQ0FBZ0MsbUJBQW1CLHVCQUF1Qix1QkFBdUIsRUFBRSw4QkFBOEIsNEJBQTRCLHlDQUF5QyxpQkFBaUIsdUJBQXVCLGlCQUFpQixxQkFBcUIsd0JBQXdCLEVBQUU7O0FBRWhnQjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDUEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7SUFFTUEsTTs7O0FBQ0osb0JBQWM7QUFBQTs7QUFBQTs7QUFFWixVQUFLQyxLQUFMLEdBQWEsRUFBYjtBQUZZO0FBSWI7Ozs7a0NBRVk7QUFDWCxVQUFNQyxXQUFXO0FBQ2ZDLG1CQUFZO0FBREcsT0FBakI7QUFHQSxhQUFPRCxRQUFQO0FBQ0Q7Ozs2QkFDUTtBQUNQLFVBQUlFLE9BQUo7QUFDQSxVQUFNQyxPQUFRLFVBQVUsS0FBS0MsS0FBaEIsR0FBeUIsS0FBS0EsS0FBTCxDQUFXRCxJQUFwQyxHQUEyQyxJQUF4RDtBQUNBLGNBQU9BLElBQVA7QUFDRSxhQUFLLElBQUw7QUFDRUUscUVBQU9BLENBQUNDLFNBQVIsQ0FBa0JDLG9FQUFsQjtBQUNBTCxv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QUFBO0FBQ0M7QUFBQywyRkFBRDtBQUFBO0FBQ0MsaUVBQUMsZ0ZBQUQsSUFBVSxJQUFJLENBQWQsR0FERDtBQUdDO0FBQUMsdUZBQUQ7QUFBQSxTQUFXLElBQUksRUFBZjtBQUNDO0FBQUMsNkZBQUQ7QUFBQTtBQUNDO0FBQUMseUZBQUQ7QUFBQTtBQUNDO0FBQUE7QUFBQTtBQUFJO0FBQUMsd0ZBQUQ7QUFBQSxhQUFVLE1BQU1QLEtBQWhCO0FBQXdCQTtBQUF4QixXQUFKO0FBQUE7QUFBa0RPLGNBQUQsR0FBU0EsS0FBS1AsS0FBZCxHQUFzQjtBQUF2RTtBQURELFNBREQ7QUFJQztBQUFDLHlGQUFEO0FBQUE7QUFDQyxvRUFBQyxvRkFBRCxJQUFTLE1BQU1PLElBQWY7QUFERDtBQUpEO0FBREQsT0FIRDtBQWFDLGlFQUFDLGdGQUFELElBQVUsSUFBSSxDQUFkO0FBYkQ7QUFERDtBQURELElBREQ7QUFzQkE7Ozs7RUF0QzBCeEIsNENBQUtBLENBQUNDLFM7O0FBeUNuQkkseUpBQVVBLENBQUNVLGFBQVgsQ0FBZixFOzs7Ozs7Ozs7Ozs7Ozs7SUN0RE1JLE87Ozs7QUFJTkEsUUFBUU0sS0FBUixHQUFnQixLQUFoQjtBQUNBTixRQUFRTyxTQUFSLEdBQW9CLEtBQXBCO0FBQ0FQLFFBQVFRLFVBQVIsR0FBcUIsS0FBckI7QUFDQVIsUUFBUUMsU0FBUixHQUFvQixJQUFwQjs7QUFFZ0JELHNFQUFoQixFIiwiZmlsZSI6IjIuanMiLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnRzID0gbW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vZnJhbWV3b3Jrcy93ZWJhcHBzL3N0YXJ0dXAvbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvbGliL2Nzcy1iYXNlLmpzXCIpKGZhbHNlKTtcbi8vIGltcG9ydHNcblxuXG4vLyBtb2R1bGVcbmV4cG9ydHMucHVzaChbbW9kdWxlLmlkLCBcIi5tb2QtcG9zdC1jb250ZW50IHtcXG4gIGZvbnQtc2l6ZTogMS4zZW07XFxuICBsaW5lLWhlaWdodDogMS44ZW07IH1cXG5cXG4ubW9kLXBvc3QtY29udGVudCAuZGF0ZSB7XFxuICBmb250LXNpemU6IDAuOGVtO1xcbiAgbGluZS1oZWlnaHQ6IDAuOWVtO1xcbiAgbWFyZ2luLXRvcDogLTEwcHg7XFxuICBmb250LXdlaWdodDogYm9sZDsgfVxcblxcbi5tb2QtcG9zdC1jb250ZW50IC5leGNlcnB0IHtcXG4gIGZvbnQtc2l6ZTogMWVtO1xcbiAgbGluZS1oZWlnaHQ6IDEuMWVtO1xcbiAgZm9udC1zdHlsZTogaXRhbGljOyB9XFxuXFxuLm1vZC1wb3N0LWNvbnRlbnQgLmFsZXJ0IHtcXG4gIGJvcmRlcjogMXB4IHNvbGlkIGJsYWNrO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogUkdCQSgwLCAwLCAwLCAwLjMpO1xcbiAgcGFkZGluZzogNXB4O1xcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xcbiAgY29sb3I6IHdoaXRlO1xcbiAgbWFyZ2luLXRvcDogMTBweDtcXG4gIG1hcmdpbi1ib3R0b206IDEwcHg7IH1cXG5cIiwgXCJcIl0pO1xuXG4vLyBleHBvcnRzXG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IFVJQ29tcG9uZW50IGZyb20gJ2NvcmUvY29tcG9uZW50cy91aV9jb21wb25lbnQnO1xuaW1wb3J0IFRpbWVBZ28gZnJvbSAnamF2YXNjcmlwdC10aW1lLWFnbydcbmltcG9ydCBlbiBmcm9tICdqYXZhc2NyaXB0LXRpbWUtYWdvL2xvY2FsZS9lbidcbmltcG9ydCBlcyBmcm9tICdqYXZhc2NyaXB0LXRpbWUtYWdvL2xvY2FsZS9lcydcblxuY2xhc3MgVUlEYXRlIGV4dGVuZHMgVUlDb21wb25lbnQgeyBcbiAgY29uc3RydWN0b3IoKSB7XG4gICAgc3VwZXIoKTtcbiAgICB0aGlzLnN0YXRlID0ge1xuICAgIH1cbiAgfVxuXG4gIGdldERlZmF1bHRzKCl7XG4gICAgY29uc3QgZGVmYXVsdHMgPSB7XG4gICAgICBjbGFzc05hbWUgOiAnJywgICAgICBcbiAgICB9ICAgIFxuICAgIHJldHVybiBkZWZhdWx0cztcbiAgfSAgXG4gIHJlbmRlcigpIHtcbiAgICB2YXIgdGltZUFnbztcbiAgICBjb25zdCBsYW5nID0gKFwibGFuZ1wiIGluIHRoaXMucHJvcHMpID8gdGhpcy5wcm9wcy5sYW5nIDogXCJlblwiO1xuICAgIHN3aXRjaChsYW5nKXtcbiAgICAgIGNhc2UgXCJlc1wiIDpcbiAgICAgICAgVGltZUFnby5hZGRMb2NhbGUoZXMpO1xuICAgICAgICB0aW1lQWdvID0gbmV3IFRpbWVBZ28oJ2VzLVVTJyk7XG4gICAgICAgIGJyZWFrO1xuICAgICAgZGVmYXVsdDpcbiAgICAgICAgVGltZUFnby5hZGRMb2NhbGUoZW4pO1xuICAgICAgICB0aW1lQWdvID0gbmV3IFRpbWVBZ28oJ2VuLVVTJyk7XG4gICAgfVxuXG4gICAgXG4gICAgdmFyIGRhdGU7XG4gICAgdmFyIHN0cjtcbiAgICB0cnl7XG4gICAgICB2YXIgdmFsdWUgPSB0aGlzLnByb3BzLnZhbHVlO1xuXG4gICAgICBpZighdmFsdWUgfHwgdmFsdWUgPT0gbnVsbCB8fCB2YWx1ZSA9PT0gJycgfHwgdmFsdWUubGVuZ3RoID09IDApe1xuICAgICAgICBzdHIgPSAnJztcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGlmKHZhbHVlIGluc3RhbmNlb2YgRGF0ZSl7XG4gICAgICAgICAgZGF0ZSA9IG5ldyBEYXRlKHZhbHVlKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBjb25zdCBudW0gPSBOdW1iZXIodmFsdWUpO1xuICAgICAgICAgIGlmKE51bWJlci5pc0ludGVnZXIobnVtKSl7XG4gICAgICAgICAgICBkYXRlID0gbmV3IERhdGUobnVtKTtcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgZGF0ZSA9IG5ldyBEYXRlKHZhbHVlKTtcbiAgICAgICAgICB9XG4gICAgICAgIH0gICAgICAgXG4gICAgICAgIHN0ciA9IHRpbWVBZ28uZm9ybWF0KGRhdGUsICd0d2l0dGVyJyk7XG4gICAgICB9ICAgIFxuICAgIH0gY2F0Y2ggKGV4KXtcbiAgICAgIHN0ciA9IHRoaXMucHJvcHMudmFsdWU7XG4gICAgfVxuICAgIHJldHVybiAoXG4gICAgICA8c3BhbiBjbGFzc05hbWU9e3RoaXMuc3RhdGUuY2xhc3NOYW1lfT57c3RyfTwvc3Bhbj5cbiAgICApO1xuICB9XG59XG5cblxuZXhwb3J0IGRlZmF1bHQgVUlEYXRlOyIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyB3aXRoU3R5bGVzIH0gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvc3R5bGVzJztcblxuY29uc3Qgc3R5bGVzID0gdGhlbWUgPT4gKHtcblx0cm9vdCA6IHtcblx0XHR3aWR0aDogJzEwMCUnLFxuXHRcdGJveFNpemluZzogJ2JvcmRlci1ib3gnLFxuXHRcdHBhZGRpbmc6ICcxNnB4Jyxcblx0fSxcbn0pO1xuY2xhc3MgTGF5b3V0U2VjdGlvbiBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7IFxuICByZW5kZXIoKSB7XG4gIFx0Y29uc3QgY2xhc3NlcyA9IHRoaXMucHJvcHMuY2xhc3NlcztcbiAgXHQvL2NvbnN0IGhlaWdodCA9IChcImhlaWdodFwiIGluIHRoaXMucHJvcHMpID8gdGhpcy5wcm9wcy5oZWlnaHQgOiAnMzBweCc7XG4gIFx0Y29uc3QgY29sb3IgPSAoXCJjb2xvclwiIGluIHRoaXMucHJvcHMpID8gdGhpcy5wcm9wcy5jb2xvciA6ICd3aGl0ZSc7XG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXYgY2xhc3NOYW1lPXtjbGFzc2VzLnJvb3R9IHN0eWxlPXt7YmFja2dyb3VuZENvbG9yOiBjb2xvcn19PlxuICAgICAgXHR7dGhpcy5wcm9wcy5jaGlsZHJlbn1cbiAgICAgIDwvZGl2PlxuICAgICk7XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgd2l0aFN0eWxlcyhzdHlsZXMpKExheW91dFNlY3Rpb24pOyIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBMaW5rIH0gZnJvbSAncmVhY3Qtcm91dGVyJztcbmltcG9ydCB3aXRoTW9kdWxlIGZyb20gJ2ptYXJyb3lhdmUvY29tcG9uZW50cy91eGkvY29yZS93aXRoLW1vZHVsZSc7XG5cbmNsYXNzIEJsb2dMaW5rQ29tcG9uZW50IGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcblx0cmVuZGVyKCl7XG5cdFx0Y29uc3Qgc2x1ZyA9IHRoaXMucHJvcHMuc2x1Zztcblx0XHRyZXR1cm4gKFxuXHRcdFx0PExpbmsgdG89e2AvJHtzbHVnfWB9PlxuXHRcdFx0XHR7dGhpcy5wcm9wcy5jaGlsZHJlbn1cblx0XHRcdDwvTGluaz5cblx0XHQpO1xuXHR9XG59XG5cbmV4cG9ydCBkZWZhdWx0IHdpdGhNb2R1bGUoQmxvZ0xpbmtDb21wb25lbnQpO1xuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBDb21wb25lbnQgZnJvbSAnY29yZS9jb21wb25lbnRzL2NvbXBvbmVudCc7XG5pbXBvcnQgUG9zdExpbmsgZnJvbSBcImptYXJyb3lhdmUvY29tcG9uZW50cy9kYXRhL3Bvc3RfbGlua1wiO1xuaW1wb3J0IEdyaWRDb250YWluZXIgZnJvbSAnam1hcnJveWF2ZS9jb21wb25lbnRzL3V4aS9jb3JlL2dyaWRfY29udGFpbmVyJztcbmltcG9ydCBHcmlkSXRlbSBmcm9tICdqbWFycm95YXZlL2NvbXBvbmVudHMvdXhpL2NvcmUvZ3JpZF9pdGVtJztcbmltcG9ydCBEYXRlIGZyb20gJ2NvcmUvY29tcG9uZW50cy9kYXRlJztcblxuaW1wb3J0ICcuL2NvbnRlbnQuc2Nzcyc7XG5cbmNsYXNzIENvbnRlbnQgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuXHRjb25zdHJ1Y3Rvcihwcm9wcyxjb250ZXh0KSB7XG5cdFx0c3VwZXIocHJvcHMsY29udGV4dCk7XG5cdFx0dGhpcy5hcGkgPSB3aW5kb3cuX19hcGk7XG5cdH1cblxuXHRjb21wb25lbnREaWRNb3VudCgpe1xuXHR9XG5cblx0cmVuZGVyKCl7XG5cdFx0Y29uc3QgZGF0YSA9IHRoaXMucHJvcHMuZGF0YTtcblx0XHR2YXIga2V5ID0gMDtcblx0XHRyZXR1cm4gKFxuXHRcdFx0PEdyaWRDb250YWluZXIgY2xhc3NOYW1lPSdtb2QtcG9zdC1jb250ZW50Jz5cblx0XHRcdFx0PEdyaWRJdGVtPlxuXHRcdFx0XHRcdDxkaXY+PERhdGUgdmFsdWU9e2RhdGEuZGF0ZX0gY2xhc3NOYW1lPSdkYXRlJy8+PC9kaXY+XG5cdFx0XHRcdDwvR3JpZEl0ZW0+XG5cdFx0XHRcdDxHcmlkSXRlbT5cblx0XHRcdFx0XHQ8ZGl2IGRhbmdlcm91c2x5U2V0SW5uZXJIVE1MPXt7IF9faHRtbDogZGF0YS5odG1sIH19PjwvZGl2PlxuXHRcdFx0XHQ8L0dyaWRJdGVtPlxuXHRcdFx0PC9HcmlkQ29udGFpbmVyPlxuXHQpO1xuXHR9XG59XG5cbmV4cG9ydCBkZWZhdWx0IENvbXBvbmVudChDb250ZW50KTsiLCJcbnZhciBjb250ZW50ID0gcmVxdWlyZShcIiEhLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vZnJhbWV3b3Jrcy93ZWJhcHBzL3N0YXJ0dXAvbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvaW5kZXguanMhLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vZnJhbWV3b3Jrcy93ZWJhcHBzL3N0YXJ0dXAvbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2xpYi9sb2FkZXIuanMhLi9jb250ZW50LnNjc3NcIik7XG5cbmlmKHR5cGVvZiBjb250ZW50ID09PSAnc3RyaW5nJykgY29udGVudCA9IFtbbW9kdWxlLmlkLCBjb250ZW50LCAnJ11dO1xuXG52YXIgdHJhbnNmb3JtO1xudmFyIGluc2VydEludG87XG5cblxuXG52YXIgb3B0aW9ucyA9IHtcImhtclwiOnRydWV9XG5cbm9wdGlvbnMudHJhbnNmb3JtID0gdHJhbnNmb3JtXG5vcHRpb25zLmluc2VydEludG8gPSB1bmRlZmluZWQ7XG5cbnZhciB1cGRhdGUgPSByZXF1aXJlKFwiIS4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL2ZyYW1ld29ya3Mvd2ViYXBwcy9zdGFydHVwL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvbGliL2FkZFN0eWxlcy5qc1wiKShjb250ZW50LCBvcHRpb25zKTtcblxuaWYoY29udGVudC5sb2NhbHMpIG1vZHVsZS5leHBvcnRzID0gY29udGVudC5sb2NhbHM7XG5cbmlmKG1vZHVsZS5ob3QpIHtcblx0bW9kdWxlLmhvdC5hY2NlcHQoXCIhIS4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL2ZyYW1ld29ya3Mvd2ViYXBwcy9zdGFydHVwL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2luZGV4LmpzIS4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL2ZyYW1ld29ya3Mvd2ViYXBwcy9zdGFydHVwL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9saWIvbG9hZGVyLmpzIS4vY29udGVudC5zY3NzXCIsIGZ1bmN0aW9uKCkge1xuXHRcdHZhciBuZXdDb250ZW50ID0gcmVxdWlyZShcIiEhLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vZnJhbWV3b3Jrcy93ZWJhcHBzL3N0YXJ0dXAvbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvaW5kZXguanMhLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vZnJhbWV3b3Jrcy93ZWJhcHBzL3N0YXJ0dXAvbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2xpYi9sb2FkZXIuanMhLi9jb250ZW50LnNjc3NcIik7XG5cblx0XHRpZih0eXBlb2YgbmV3Q29udGVudCA9PT0gJ3N0cmluZycpIG5ld0NvbnRlbnQgPSBbW21vZHVsZS5pZCwgbmV3Q29udGVudCwgJyddXTtcblxuXHRcdHZhciBsb2NhbHMgPSAoZnVuY3Rpb24oYSwgYikge1xuXHRcdFx0dmFyIGtleSwgaWR4ID0gMDtcblxuXHRcdFx0Zm9yKGtleSBpbiBhKSB7XG5cdFx0XHRcdGlmKCFiIHx8IGFba2V5XSAhPT0gYltrZXldKSByZXR1cm4gZmFsc2U7XG5cdFx0XHRcdGlkeCsrO1xuXHRcdFx0fVxuXG5cdFx0XHRmb3Ioa2V5IGluIGIpIGlkeC0tO1xuXG5cdFx0XHRyZXR1cm4gaWR4ID09PSAwO1xuXHRcdH0oY29udGVudC5sb2NhbHMsIG5ld0NvbnRlbnQubG9jYWxzKSk7XG5cblx0XHRpZighbG9jYWxzKSB0aHJvdyBuZXcgRXJyb3IoJ0Fib3J0aW5nIENTUyBITVIgZHVlIHRvIGNoYW5nZWQgY3NzLW1vZHVsZXMgbG9jYWxzLicpO1xuXG5cdFx0dXBkYXRlKG5ld0NvbnRlbnQpO1xuXHR9KTtcblxuXHRtb2R1bGUuaG90LmRpc3Bvc2UoZnVuY3Rpb24oKSB7IHVwZGF0ZSgpOyB9KTtcbn0iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IEhpZGRlbiBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9IaWRkZW4nO1xuaW1wb3J0IHsgIEJyb3dzZXJWaWV3LCAgTW9iaWxlVmlldyB9IGZyb20gXCJyZWFjdC1kZXZpY2UtZGV0ZWN0XCI7XG5pbXBvcnQgd2l0aE1vZHVsZSBmcm9tICdqbWFycm95YXZlL2NvbXBvbmVudHMvdXhpL2NvcmUvd2l0aC1tb2R1bGUnO1xuaW1wb3J0IExHIGZyb20gXCJqbWFycm95YXZlL2NvbXBvbmVudHMvdXhpL2Jsb2dfcG9zdC9sYXlvdXQvbGcvcGFnZVwiO1xuXG5jbGFzcyBQYWdlQ29tcG9uZW50IGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcblx0cmVuZGVyKCl7XG5cdFx0cmV0dXJuIHRoaXMucmVuZGVyRGVmYXVsdCgpO1xuXHR9XG5cblx0cmVuZGVyRGVmYXVsdCgpe1xuXHRcdHZhciBkYXRhID0gdGhpcy5wcm9wcy5kYXRhO1xuXHRcdHZhciB0aXRsZSA9IHRoaXMucHJvcHMudGl0bGU7XG5cdFx0cmV0dXJuIChcblx0XHRcdDxkaXYgc3R5bGU9e3t3aWR0aDonMTAwJSd9fT5cdFx0XHRcdFxuICAgIFx0XHRcdDxMRyBkYXRhPXtkYXRhfSB0aXRsZT17dGl0bGV9Lz5cblx0XHRcdDwvZGl2PlxuXHRcdClcdFx0XG5cdH1cblxuXHRyZW5kZXJNdWx0aXBsZSgpe1xuXHRcdHZhciBkYXRhID0gdGhpcy5wcm9wcy5kYXRhO1xuXHRcdHJldHVybiAoXG5cdFx0XHQ8ZGl2IHN0eWxlPXt7d2lkdGg6JzEwMCUnfX0+XHRcdFx0XHRcbiAgICAgICAgXHRcdDxIaWRkZW4gb25seT17WydzbScsICdtZCcsICdsZycsICd4bCddfT5cbiAgICAgICAgXHRcdFx0XG5cdFx0ICAgICAgICA8L0hpZGRlbj5cbiAgICAgICAgXHRcdDxIaWRkZW4gb25seT17Wyd4cycsICdtZCcsICdsZycsICd4bCddfT5cbiAgICAgICAgXHRcdFx0XG5cdFx0ICAgICAgICA8L0hpZGRlbj5cbiAgICAgICAgXHRcdDxIaWRkZW4gb25seT17Wyd4cycsICdzbSddfT5cbiAgICAgICAgXHRcdFx0PExHIGRhdGE9e2RhdGF9Lz5cblx0XHQgICAgICAgIDwvSGlkZGVuPlxuXHRcdFx0PC9kaXY+XG5cdFx0KVxuXHR9XG59XG5cbmV4cG9ydCBkZWZhdWx0IHdpdGhNb2R1bGUoUGFnZUNvbXBvbmVudCk7IiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IExpbmsgfSBmcm9tICdyZWFjdC1yb3V0ZXInXG5pbXBvcnQgR3JpZENvbnRhaW5lciBmcm9tICdqbWFycm95YXZlL2NvbXBvbmVudHMvdXhpL2NvcmUvZ3JpZF9jb250YWluZXInO1xuaW1wb3J0IEdyaWRJdGVtIGZyb20gJ2ptYXJyb3lhdmUvY29tcG9uZW50cy91eGkvY29yZS9ncmlkX2l0ZW0nO1xuaW1wb3J0IEhpZGRlbiBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9IaWRkZW4nO1xuaW1wb3J0IE1vZHVsZXMgZnJvbSAnam1hcnJveWF2ZS9jb25mL2xheW91dC9tb2R1bGVzJztcbmltcG9ydCB3aXRoTW9kdWxlIGZyb20gJ2ptYXJyb3lhdmUvY29tcG9uZW50cy91eGkvY29yZS93aXRoLW1vZHVsZSc7XG5pbXBvcnQgQmxvY2sgZnJvbSAnam1hcnJveWF2ZS9jb21wb25lbnRzL3V4aS9ob21lL2Jsb2NrJztcbmltcG9ydCBNQmxvY2sgZnJvbSAnY29yZS9jb21wb25lbnRzL21vY2t1cC9ibG9jayc7XG5pbXBvcnQgU2VjdGlvbiBmcm9tICdjb3JlL2NvbXBvbmVudHMvbGF5b3V0L3NlY3Rpb24nO1xuaW1wb3J0IENvbnRlbnQgZnJvbSAnam1hcnJveWF2ZS9jb21wb25lbnRzL3V4aS9ibG9nX3Bvc3QvY29udGVudCc7XG5pbXBvcnQgQmxvZ0xpbmsgZnJvbSBcImptYXJyb3lhdmUvY29tcG9uZW50cy9kYXRhL2Jsb2dfbGlua1wiO1xuXG5jbGFzcyBQYWdlQ29tcG9uZW50IGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcblx0Z2V0TW9kdWxlcygpe1xuXHRcdHZhciBkYXRhID0gdGhpcy5wcm9wcy5kYXRhO1x0XHRcblxuXHRcdHJldHVybiBbXG5cdFx0XHR7dGl0bGU6IFwiVGVzdFwiLCBcdFx0Y29udHJvbDogKE1vZHVsZXMuVHJhbnNmZXJzKSA/IDxkaXY+dGVzdDwvZGl2PiA6IG51bGx9LFxuXHRcdF07XG5cdH1cblxuXHRyZW5kZXIoKXtcblx0XHRjb25zdCBkYXRhID0gdGhpcy5wcm9wcy5kYXRhO1x0XHRcblx0XHRjb25zdCB0aXRsZSA9IHRoaXMucHJvcHMudGl0bGU7XG5cdFx0Y29uc3QgbW9kcyA9IHRoaXMuZ2V0TW9kdWxlcygpO1xuXHRcdGNvbnN0IG1vZFRlc3QgPSBtb2RzWzBdO1xuXG5cdFx0Y29uc3QgcG9zdCA9IChkYXRhKSA/IGRhdGEucG9zdCA6IG51bGw7XG5cdFx0cmV0dXJuIChcblx0XHRcdDxHcmlkQ29udGFpbmVyPlxuXHRcdFx0XHQ8R3JpZEl0ZW0+XG5cdFx0XHRcdFx0PEdyaWRDb250YWluZXI+XG5cdFx0XHRcdFx0XHQ8R3JpZEl0ZW0geHM9ezF9PlxuXHRcdFx0XHRcdFx0PC9HcmlkSXRlbT5cblx0XHRcdFx0XHRcdDxHcmlkSXRlbSAgeHM9ezEwfT5cblx0XHRcdFx0XHRcdFx0PEdyaWRDb250YWluZXI+XG5cdFx0XHRcdFx0XHRcdFx0PEdyaWRJdGVtPlxuXHRcdFx0XHRcdFx0XHRcdFx0PGgxPjxCbG9nTGluayBzbHVnPXt0aXRsZX0+e3RpdGxlfTwvQmxvZ0xpbms+ID4geyhwb3N0KSA/IHBvc3QudGl0bGUgOiAnJ308L2gxPlxuXHRcdFx0XHRcdFx0XHRcdDwvR3JpZEl0ZW0+XHRcdFx0XG5cdFx0XHRcdFx0XHRcdFx0PEdyaWRJdGVtPlx0XHRcdFx0XHRcdFx0XHRcdFxuXHRcdFx0XHRcdFx0XHRcdFx0PENvbnRlbnQgZGF0YT17cG9zdH0vPlxuXHRcdFx0XHRcdFx0XHRcdDwvR3JpZEl0ZW0+ICBcblx0XHRcdFx0XHRcdFx0PC9HcmlkQ29udGFpbmVyPlxuXHRcdFx0XHRcdFx0PC9HcmlkSXRlbT5cdFx0XHRcblx0XHRcdFx0XHRcdDxHcmlkSXRlbSB4cz17MX0+XG5cdFx0XHRcdFx0XHQ8L0dyaWRJdGVtPlxuXHRcdFx0XHRcdDwvR3JpZENvbnRhaW5lcj5cblx0XHRcdFx0PC9HcmlkSXRlbT5cblx0XHRcdDwvR3JpZENvbnRhaW5lcj5cblx0XHQpXG5cdH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgd2l0aE1vZHVsZShQYWdlQ29tcG9uZW50KTtcblxuIiwiY2xhc3MgTW9kdWxlcyB7XG59XG5cblxuTW9kdWxlcy5HYW1lcyA9IGZhbHNlO1xuTW9kdWxlcy5TdGFuZGluZ3MgPSBmYWxzZTtcbk1vZHVsZXMuUG9zdFNlYXNvbiA9IGZhbHNlO1xuTW9kdWxlcy5UcmFuc2ZlcnMgPSB0cnVlO1xuXG5leHBvcnQgZGVmYXVsdCAoTW9kdWxlcyk7Il0sInNvdXJjZVJvb3QiOiIifQ==