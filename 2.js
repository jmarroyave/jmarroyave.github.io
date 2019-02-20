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
      javascript_time_ago__WEBPACK_IMPORTED_MODULE_2__["default"].addLocale(javascript_time_ago_locale_en__WEBPACK_IMPORTED_MODULE_3___default.a);
      var timeAgo = new javascript_time_ago__WEBPACK_IMPORTED_MODULE_2__["default"]('en-US');
      var date;
      var str;
      try {
        date = !this.props.value || this.props.value === '' || this.props.value.length === 0 ? '' : this.props.value instanceof Date ? this.props.value : new Date(this.props.value);
        str = date === '' ? '' : timeAgo.format(date, 'twitter');
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvam1hcnJveWF2ZS9jb21wb25lbnRzL3V4aS9ibG9nX3Bvc3QvY29udGVudC5zY3NzIiwid2VicGFjazovLy8uL3NyYy9jb3JlL2NvbXBvbmVudHMvZGF0ZS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29yZS9jb21wb25lbnRzL2xheW91dC9zZWN0aW9uLmpzIiwid2VicGFjazovLy8uL3NyYy9qbWFycm95YXZlL2NvbXBvbmVudHMvZGF0YS9ibG9nX2xpbmsuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2ptYXJyb3lhdmUvY29tcG9uZW50cy91eGkvYmxvZ19wb3N0L2NvbnRlbnQuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2ptYXJyb3lhdmUvY29tcG9uZW50cy91eGkvYmxvZ19wb3N0L2NvbnRlbnQuc2Nzcz84NWE0Iiwid2VicGFjazovLy8uL3NyYy9qbWFycm95YXZlL2NvbXBvbmVudHMvdXhpL2Jsb2dfcG9zdC9sYXlvdXQvbGF5b3V0LXByb3h5LmpzIiwid2VicGFjazovLy8uL3NyYy9qbWFycm95YXZlL2NvbXBvbmVudHMvdXhpL2Jsb2dfcG9zdC9sYXlvdXQvbGcvcGFnZS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvam1hcnJveWF2ZS9jb25mL2xheW91dC9tb2R1bGVzLmpzIl0sIm5hbWVzIjpbIlVJRGF0ZSIsInN0YXRlIiwiZGVmYXVsdHMiLCJjbGFzc05hbWUiLCJUaW1lQWdvIiwiYWRkTG9jYWxlIiwiZW4iLCJ0aW1lQWdvIiwiZGF0ZSIsInN0ciIsInByb3BzIiwidmFsdWUiLCJsZW5ndGgiLCJEYXRlIiwiZm9ybWF0IiwiZXgiLCJVSUNvbXBvbmVudCIsInN0eWxlcyIsInJvb3QiLCJ3aWR0aCIsImJveFNpemluZyIsInBhZGRpbmciLCJMYXlvdXRTZWN0aW9uIiwiY2xhc3NlcyIsImNvbG9yIiwiYmFja2dyb3VuZENvbG9yIiwiY2hpbGRyZW4iLCJSZWFjdCIsIkNvbXBvbmVudCIsIndpdGhTdHlsZXMiLCJCbG9nTGlua0NvbXBvbmVudCIsInNsdWciLCJ3aXRoTW9kdWxlIiwiQ29udGVudCIsImNvbnRleHQiLCJhcGkiLCJ3aW5kb3ciLCJfX2FwaSIsImRhdGEiLCJrZXkiLCJfX2h0bWwiLCJodG1sIiwiUGFnZUNvbXBvbmVudCIsInJlbmRlckRlZmF1bHQiLCJ0aXRsZSIsImNvbnRyb2wiLCJNb2R1bGVzIiwiVHJhbnNmZXJzIiwibW9kcyIsImdldE1vZHVsZXMiLCJtb2RUZXN0IiwicG9zdCIsIkdhbWVzIiwiU3RhbmRpbmdzIiwiUG9zdFNlYXNvbiJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQUEsMkJBQTJCLG1CQUFPLENBQUMscUxBQStGO0FBQ2xJOzs7QUFHQTtBQUNBLGNBQWMsUUFBUyxzQkFBc0IscUJBQXFCLHVCQUF1QixFQUFFLDZCQUE2QixxQkFBcUIsdUJBQXVCLHNCQUFzQixzQkFBc0IsRUFBRSxnQ0FBZ0MsbUJBQW1CLHVCQUF1Qix1QkFBdUIsRUFBRSw4QkFBOEIsNEJBQTRCLHlDQUF5QyxpQkFBaUIsdUJBQXVCLGlCQUFpQixxQkFBcUIsd0JBQXdCLEVBQUU7O0FBRWhnQjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ1BBO0FBQ0E7QUFDQTtBQUNBOztJQUdNQSxNOzs7QUFDSixvQkFBYztBQUFBOztBQUFBOztBQUVaLFVBQUtDLEtBQUwsR0FBYSxFQUFiO0FBRlk7QUFJYjs7OztrQ0FFWTtBQUNYLFVBQU1DLFdBQVc7QUFDZkMsbUJBQVk7QUFERyxPQUFqQjtBQUdBLGFBQU9ELFFBQVA7QUFDRDs7OzZCQUNRO0FBQ1BFLGlFQUFPQSxDQUFDQyxTQUFSLENBQWtCQyxvRUFBbEI7QUFDQSxVQUFNQyxVQUFVLElBQUlILDJEQUFKLENBQVksT0FBWixDQUFoQjtBQUNBLFVBQUlJLElBQUo7QUFDQSxVQUFJQyxHQUFKO0FBQ0EsVUFBRztBQUNGRCxlQUFRLENBQUMsS0FBS0UsS0FBTCxDQUFXQyxLQUFaLElBQXFCLEtBQUtELEtBQUwsQ0FBV0MsS0FBWCxLQUFxQixFQUExQyxJQUFnRCxLQUFL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LDRDQUFLQSxDQUFDQyxTOztBQXlDbkJJLHlKQUFVQSxDQUFDVSxhQUFYLENBQWYsRTs7Ozs7Ozs7Ozs7Ozs7O0lDdERNSSxPOzs7O0FBSU5BLFFBQVFNLEtBQVIsR0FBZ0IsS0FBaEI7QUFDQU4sUUFBUU8sU0FBUixHQUFvQixLQUFwQjtBQUNBUCxRQUFRUSxVQUFSLEdBQXFCLEtBQXJCO0FBQ0FSLFFBQVFDLFNBQVIsR0FBb0IsSUFBcEI7O0FBRWdCRCxzRUFBaEIsRSIsImZpbGUiOiIyLmpzIiwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0cyA9IG1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL2ZyYW1ld29ya3Mvd2ViYXBwcy9zdGFydHVwL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2xpYi9jc3MtYmFzZS5qc1wiKShmYWxzZSk7XG4vLyBpbXBvcnRzXG5cblxuLy8gbW9kdWxlXG5leHBvcnRzLnB1c2goW21vZHVsZS5pZCwgXCIubW9kLXBvc3QtY29udGVudCB7XFxuICBmb250LXNpemU6IDEuM2VtO1xcbiAgbGluZS1oZWlnaHQ6IDEuOGVtOyB9XFxuXFxuLm1vZC1wb3N0LWNvbnRlbnQgLmRhdGUge1xcbiAgZm9udC1zaXplOiAwLjhlbTtcXG4gIGxpbmUtaGVpZ2h0OiAwLjllbTtcXG4gIG1hcmdpbi10b3A6IC0xMHB4O1xcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7IH1cXG5cXG4ubW9kLXBvc3QtY29udGVudCAuZXhjZXJwdCB7XFxuICBmb250LXNpemU6IDFlbTtcXG4gIGxpbmUtaGVpZ2h0OiAxLjFlbTtcXG4gIGZvbnQtc3R5bGU6IGl0YWxpYzsgfVxcblxcbi5tb2QtcG9zdC1jb250ZW50IC5hbGVydCB7XFxuICBib3JkZXI6IDFweCBzb2xpZCBibGFjaztcXG4gIGJhY2tncm91bmQtY29sb3I6IFJHQkEoMCwgMCwgMCwgMC4zKTtcXG4gIHBhZGRpbmc6IDVweDtcXG4gIGJvcmRlci1yYWRpdXM6IDVweDtcXG4gIGNvbG9yOiB3aGl0ZTtcXG4gIG1hcmdpbi10b3A6IDEwcHg7XFxuICBtYXJnaW4tYm90dG9tOiAxMHB4OyB9XFxuXCIsIFwiXCJdKTtcblxuLy8gZXhwb3J0c1xuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBVSUNvbXBvbmVudCBmcm9tICdjb3JlL2NvbXBvbmVudHMvdWlfY29tcG9uZW50JztcbmltcG9ydCBUaW1lQWdvIGZyb20gJ2phdmFzY3JpcHQtdGltZS1hZ28nXG5pbXBvcnQgZW4gZnJvbSAnamF2YXNjcmlwdC10aW1lLWFnby9sb2NhbGUvZW4nXG5cblxuY2xhc3MgVUlEYXRlIGV4dGVuZHMgVUlDb21wb25lbnQgeyBcbiAgY29uc3RydWN0b3IoKSB7XG4gICAgc3VwZXIoKTtcbiAgICB0aGlzLnN0YXRlID0ge1xuICAgIH1cbiAgfVxuXG4gIGdldERlZmF1bHRzKCl7XG4gICAgY29uc3QgZGVmYXVsdHMgPSB7XG4gICAgICBjbGFzc05hbWUgOiAnJywgICAgICBcbiAgICB9ICAgIFxuICAgIHJldHVybiBkZWZhdWx0cztcbiAgfSAgXG4gIHJlbmRlcigpIHtcbiAgICBUaW1lQWdvLmFkZExvY2FsZShlbilcbiAgICBjb25zdCB0aW1lQWdvID0gbmV3IFRpbWVBZ28oJ2VuLVVTJyk7XG4gICAgdmFyIGRhdGU7XG4gICAgdmFyIHN0cjtcbiAgICB0cnl7XG5cdCAgICBkYXRlID0gKCF0aGlzLnByb3BzLnZhbHVlIHx8IHRoaXMucHJvcHMudmFsdWUgPT09ICcnIHx8IHRoaXMucHJvcHMudmFsdWUubGVuZ3RoID09PSAwKSA/ICcnIDogKHRoaXMucHJvcHMudmFsdWUgaW5zdGFuY2VvZiBEYXRlKSA/IHRoaXMucHJvcHMudmFsdWUgOiBuZXcgRGF0ZSh0aGlzLnByb3BzLnZhbHVlKTtcblx0ICAgIHN0ciA9IChkYXRlID09PSAnJykgPyAnJyA6IHRpbWVBZ28uZm9ybWF0KGRhdGUsICd0d2l0dGVyJyk7XG4gICAgfSBjYXRjaCAoZXgpe1xuICBcdFx0c3RyID0gdGhpcy5wcm9wcy52YWx1ZTtcbiAgICB9XG4gICAgcmV0dXJuIChcbiAgICAgIDxzcGFuIGNsYXNzTmFtZT17dGhpcy5zdGF0ZS5jbGFzc05hbWV9PntzdHJ9PC9zcGFuPlxuICAgICk7XG4gIH1cbn1cblxuXG5leHBvcnQgZGVmYXVsdCBVSURhdGU7IiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IHdpdGhTdHlsZXMgfSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9zdHlsZXMnO1xuXG5jb25zdCBzdHlsZXMgPSB0aGVtZSA9PiAoe1xuXHRyb290IDoge1xuXHRcdHdpZHRoOiAnMTAwJScsXG5cdFx0Ym94U2l6aW5nOiAnYm9yZGVyLWJveCcsXG5cdFx0cGFkZGluZzogJzE2cHgnLFxuXHR9LFxufSk7XG5jbGFzcyBMYXlvdXRTZWN0aW9uIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHsgXG4gIHJlbmRlcigpIHtcbiAgXHRjb25zdCBjbGFzc2VzID0gdGhpcy5wcm9wcy5jbGFzc2VzO1xuICBcdC8vY29uc3QgaGVpZ2h0ID0gKFwiaGVpZ2h0XCIgaW4gdGhpcy5wcm9wcykgPyB0aGlzLnByb3BzLmhlaWdodCA6ICczMHB4JztcbiAgXHRjb25zdCBjb2xvciA9IChcImNvbG9yXCIgaW4gdGhpcy5wcm9wcykgPyB0aGlzLnByb3BzLmNvbG9yIDogJ3doaXRlJztcbiAgICByZXR1cm4gKFxuICAgICAgPGRpdiBjbGFzc05hbWU9e2NsYXNzZXMucm9vdH0gc3R5bGU9e3tiYWNrZ3JvdW5kQ29sb3I6IGNvbG9yfX0+XG4gICAgICBcdHt0aGlzLnByb3BzLmNoaWxkcmVufVxuICAgICAgPC9kaXY+XG4gICAgKTtcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCB3aXRoU3R5bGVzKHN0eWxlcykoTGF5b3V0U2VjdGlvbik7IiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IExpbmsgfSBmcm9tICdyZWFjdC1yb3V0ZXInO1xuaW1wb3J0IHdpdGhNb2R1bGUgZnJvbSAnam1hcnJveWF2ZS9jb21wb25lbnRzL3V4aS9jb3JlL3dpdGgtbW9kdWxlJztcblxuY2xhc3MgQmxvZ0xpbmtDb21wb25lbnQgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuXHRyZW5kZXIoKXtcblx0XHRjb25zdCBzbHVnID0gdGhpcy5wcm9wcy5zbHVnO1xuXHRcdHJldHVybiAoXG5cdFx0XHQ8TGluayB0bz17YC8ke3NsdWd9YH0+XG5cdFx0XHRcdHt0aGlzLnByb3BzLmNoaWxkcmVufVxuXHRcdFx0PC9MaW5rPlxuXHRcdCk7XG5cdH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgd2l0aE1vZHVsZShCbG9nTGlua0NvbXBvbmVudCk7XG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IENvbXBvbmVudCBmcm9tICdjb3JlL2NvbXBvbmVudHMvY29tcG9uZW50JztcbmltcG9ydCBQb3N0TGluayBmcm9tIFwiam1hcnJveWF2ZS9jb21wb25lbnRzL2RhdGEvcG9zdF9saW5rXCI7XG5pbXBvcnQgR3JpZENvbnRhaW5lciBmcm9tICdqbWFycm95YXZlL2NvbXBvbmVudHMvdXhpL2NvcmUvZ3JpZF9jb250YWluZXInO1xuaW1wb3J0IEdyaWRJdGVtIGZyb20gJ2ptYXJyb3lhdmUvY29tcG9uZW50cy91eGkvY29yZS9ncmlkX2l0ZW0nO1xuaW1wb3J0IERhdGUgZnJvbSAnY29yZS9jb21wb25lbnRzL2RhdGUnO1xuXG5pbXBvcnQgJy4vY29udGVudC5zY3NzJztcblxuY2xhc3MgQ29udGVudCBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG5cdGNvbnN0cnVjdG9yKHByb3BzLGNvbnRleHQpIHtcblx0XHRzdXBlcihwcm9wcyxjb250ZXh0KTtcblx0XHR0aGlzLmFwaSA9IHdpbmRvdy5fX2FwaTtcblx0fVxuXG5cdGNvbXBvbmVudERpZE1vdW50KCl7XG5cdH1cblxuXHRyZW5kZXIoKXtcblx0XHRjb25zdCBkYXRhID0gdGhpcy5wcm9wcy5kYXRhO1xuXHRcdHZhciBrZXkgPSAwO1xuXHRcdHJldHVybiAoXG5cdFx0XHQ8R3JpZENvbnRhaW5lciBjbGFzc05hbWU9J21vZC1wb3N0LWNvbnRlbnQnPlxuXHRcdFx0XHQ8R3JpZEl0ZW0+XG5cdFx0XHRcdFx0PGRpdj48RGF0ZSB2YWx1ZT17ZGF0YS5kYXRlfSBjbGFzc05hbWU9J2RhdGUnLz48L2Rpdj5cblx0XHRcdFx0PC9HcmlkSXRlbT5cblx0XHRcdFx0PEdyaWRJdGVtPlxuXHRcdFx0XHRcdDxkaXYgZGFuZ2Vyb3VzbHlTZXRJbm5lckhUTUw9e3sgX19odG1sOiBkYXRhLmh0bWwgfX0+PC9kaXY+XG5cdFx0XHRcdDwvR3JpZEl0ZW0+XG5cdFx0XHQ8L0dyaWRDb250YWluZXI+XG5cdCk7XG5cdH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgQ29tcG9uZW50KENvbnRlbnQpOyIsIlxudmFyIGNvbnRlbnQgPSByZXF1aXJlKFwiISEuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9mcmFtZXdvcmtzL3dlYmFwcHMvc3RhcnR1cC9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9pbmRleC5qcyEuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9mcmFtZXdvcmtzL3dlYmFwcHMvc3RhcnR1cC9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvbGliL2xvYWRlci5qcyEuL2NvbnRlbnQuc2Nzc1wiKTtcblxuaWYodHlwZW9mIGNvbnRlbnQgPT09ICdzdHJpbmcnKSBjb250ZW50ID0gW1ttb2R1bGUuaWQsIGNvbnRlbnQsICcnXV07XG5cbnZhciB0cmFuc2Zvcm07XG52YXIgaW5zZXJ0SW50bztcblxuXG5cbnZhciBvcHRpb25zID0ge1wiaG1yXCI6dHJ1ZX1cblxub3B0aW9ucy50cmFuc2Zvcm0gPSB0cmFuc2Zvcm1cbm9wdGlvbnMuaW5zZXJ0SW50byA9IHVuZGVmaW5lZDtcblxudmFyIHVwZGF0ZSA9IHJlcXVpcmUoXCIhLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vZnJhbWV3b3Jrcy93ZWJhcHBzL3N0YXJ0dXAvbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9saWIvYWRkU3R5bGVzLmpzXCIpKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5pZihjb250ZW50LmxvY2FscykgbW9kdWxlLmV4cG9ydHMgPSBjb250ZW50LmxvY2FscztcblxuaWYobW9kdWxlLmhvdCkge1xuXHRtb2R1bGUuaG90LmFjY2VwdChcIiEhLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vZnJhbWV3b3Jrcy93ZWJhcHBzL3N0YXJ0dXAvbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvaW5kZXguanMhLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vZnJhbWV3b3Jrcy93ZWJhcHBzL3N0YXJ0dXAvbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2xpYi9sb2FkZXIuanMhLi9jb250ZW50LnNjc3NcIiwgZnVuY3Rpb24oKSB7XG5cdFx0dmFyIG5ld0NvbnRlbnQgPSByZXF1aXJlKFwiISEuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9mcmFtZXdvcmtzL3dlYmFwcHMvc3RhcnR1cC9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9pbmRleC5qcyEuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9mcmFtZXdvcmtzL3dlYmFwcHMvc3RhcnR1cC9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvbGliL2xvYWRlci5qcyEuL2NvbnRlbnQuc2Nzc1wiKTtcblxuXHRcdGlmKHR5cGVvZiBuZXdDb250ZW50ID09PSAnc3RyaW5nJykgbmV3Q29udGVudCA9IFtbbW9kdWxlLmlkLCBuZXdDb250ZW50LCAnJ11dO1xuXG5cdFx0dmFyIGxvY2FscyA9IChmdW5jdGlvbihhLCBiKSB7XG5cdFx0XHR2YXIga2V5LCBpZHggPSAwO1xuXG5cdFx0XHRmb3Ioa2V5IGluIGEpIHtcblx0XHRcdFx0aWYoIWIgfHwgYVtrZXldICE9PSBiW2tleV0pIHJldHVybiBmYWxzZTtcblx0XHRcdFx0aWR4Kys7XG5cdFx0XHR9XG5cblx0XHRcdGZvcihrZXkgaW4gYikgaWR4LS07XG5cblx0XHRcdHJldHVybiBpZHggPT09IDA7XG5cdFx0fShjb250ZW50LmxvY2FscywgbmV3Q29udGVudC5sb2NhbHMpKTtcblxuXHRcdGlmKCFsb2NhbHMpIHRocm93IG5ldyBFcnJvcignQWJvcnRpbmcgQ1NTIEhNUiBkdWUgdG8gY2hhbmdlZCBjc3MtbW9kdWxlcyBsb2NhbHMuJyk7XG5cblx0XHR1cGRhdGUobmV3Q29udGVudCk7XG5cdH0pO1xuXG5cdG1vZHVsZS5ob3QuZGlzcG9zZShmdW5jdGlvbigpIHsgdXBkYXRlKCk7IH0pO1xufSIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgSGlkZGVuIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL0hpZGRlbic7XG5pbXBvcnQgeyAgQnJvd3NlclZpZXcsICBNb2JpbGVWaWV3IH0gZnJvbSBcInJlYWN0LWRldmljZS1kZXRlY3RcIjtcbmltcG9ydCB3aXRoTW9kdWxlIGZyb20gJ2ptYXJyb3lhdmUvY29tcG9uZW50cy91eGkvY29yZS93aXRoLW1vZHVsZSc7XG5pbXBvcnQgTEcgZnJvbSBcImptYXJyb3lhdmUvY29tcG9uZW50cy91eGkvYmxvZ19wb3N0L2xheW91dC9sZy9wYWdlXCI7XG5cbmNsYXNzIFBhZ2VDb21wb25lbnQgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuXHRyZW5kZXIoKXtcblx0XHRyZXR1cm4gdGhpcy5yZW5kZXJEZWZhdWx0KCk7XG5cdH1cblxuXHRyZW5kZXJEZWZhdWx0KCl7XG5cdFx0dmFyIGRhdGEgPSB0aGlzLnByb3BzLmRhdGE7XG5cdFx0dmFyIHRpdGxlID0gdGhpcy5wcm9wcy50aXRsZTtcblx0XHRyZXR1cm4gKFxuXHRcdFx0PGRpdiBzdHlsZT17e3dpZHRoOicxMDAlJ319Plx0XHRcdFx0XG4gICAgXHRcdFx0PExHIGRhdGE9e2RhdGF9IHRpdGxlPXt0aXRsZX0vPlxuXHRcdFx0PC9kaXY+XG5cdFx0KVx0XHRcblx0fVxuXG5cdHJlbmRlck11bHRpcGxlKCl7XG5cdFx0dmFyIGRhdGEgPSB0aGlzLnByb3BzLmRhdGE7XG5cdFx0cmV0dXJuIChcblx0XHRcdDxkaXYgc3R5bGU9e3t3aWR0aDonMTAwJSd9fT5cdFx0XHRcdFxuICAgICAgICBcdFx0PEhpZGRlbiBvbmx5PXtbJ3NtJywgJ21kJywgJ2xnJywgJ3hsJ119PlxuICAgICAgICBcdFx0XHRcblx0XHQgICAgICAgIDwvSGlkZGVuPlxuICAgICAgICBcdFx0PEhpZGRlbiBvbmx5PXtbJ3hzJywgJ21kJywgJ2xnJywgJ3hsJ119PlxuICAgICAgICBcdFx0XHRcblx0XHQgICAgICAgIDwvSGlkZGVuPlxuICAgICAgICBcdFx0PEhpZGRlbiBvbmx5PXtbJ3hzJywgJ3NtJ119PlxuICAgICAgICBcdFx0XHQ8TEcgZGF0YT17ZGF0YX0vPlxuXHRcdCAgICAgICAgPC9IaWRkZW4+XG5cdFx0XHQ8L2Rpdj5cblx0XHQpXG5cdH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgd2l0aE1vZHVsZShQYWdlQ29tcG9uZW50KTsiLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgTGluayB9IGZyb20gJ3JlYWN0LXJvdXRlcidcbmltcG9ydCBHcmlkQ29udGFpbmVyIGZyb20gJ2ptYXJyb3lhdmUvY29tcG9uZW50cy91eGkvY29yZS9ncmlkX2NvbnRhaW5lcic7XG5pbXBvcnQgR3JpZEl0ZW0gZnJvbSAnam1hcnJveWF2ZS9jb21wb25lbnRzL3V4aS9jb3JlL2dyaWRfaXRlbSc7XG5pbXBvcnQgSGlkZGVuIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL0hpZGRlbic7XG5pbXBvcnQgTW9kdWxlcyBmcm9tICdqbWFycm95YXZlL2NvbmYvbGF5b3V0L21vZHVsZXMnO1xuaW1wb3J0IHdpdGhNb2R1bGUgZnJvbSAnam1hcnJveWF2ZS9jb21wb25lbnRzL3V4aS9jb3JlL3dpdGgtbW9kdWxlJztcbmltcG9ydCBCbG9jayBmcm9tICdqbWFycm95YXZlL2NvbXBvbmVudHMvdXhpL2hvbWUvYmxvY2snO1xuaW1wb3J0IE1CbG9jayBmcm9tICdjb3JlL2NvbXBvbmVudHMvbW9ja3VwL2Jsb2NrJztcbmltcG9ydCBTZWN0aW9uIGZyb20gJ2NvcmUvY29tcG9uZW50cy9sYXlvdXQvc2VjdGlvbic7XG5pbXBvcnQgQ29udGVudCBmcm9tICdqbWFycm95YXZlL2NvbXBvbmVudHMvdXhpL2Jsb2dfcG9zdC9jb250ZW50JztcbmltcG9ydCBCbG9nTGluayBmcm9tIFwiam1hcnJveWF2ZS9jb21wb25lbnRzL2RhdGEvYmxvZ19saW5rXCI7XG5cbmNsYXNzIFBhZ2VDb21wb25lbnQgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuXHRnZXRNb2R1bGVzKCl7XG5cdFx0dmFyIGRhdGEgPSB0aGlzLnByb3BzLmRhdGE7XHRcdFxuXG5cdFx0cmV0dXJuIFtcblx0XHRcdHt0aXRsZTogXCJUZXN0XCIsIFx0XHRjb250cm9sOiAoTW9kdWxlcy5UcmFuc2ZlcnMpID8gPGRpdj50ZXN0PC9kaXY+IDogbnVsbH0sXG5cdFx0XTtcblx0fVxuXG5cdHJlbmRlcigpe1xuXHRcdGNvbnN0IGRhdGEgPSB0aGlzLnByb3BzLmRhdGE7XHRcdFxuXHRcdGNvbnN0IHRpdGxlID0gdGhpcy5wcm9wcy50aXRsZTtcblx0XHRjb25zdCBtb2RzID0gdGhpcy5nZXRNb2R1bGVzKCk7XG5cdFx0Y29uc3QgbW9kVGVzdCA9IG1vZHNbMF07XG5cblx0XHRjb25zdCBwb3N0ID0gKGRhdGEpID8gZGF0YS5wb3N0IDogbnVsbDtcblx0XHRyZXR1cm4gKFxuXHRcdFx0PEdyaWRDb250YWluZXI+XG5cdFx0XHRcdDxHcmlkSXRlbT5cblx0XHRcdFx0XHQ8R3JpZENvbnRhaW5lcj5cblx0XHRcdFx0XHRcdDxHcmlkSXRlbSB4cz17MX0+XG5cdFx0XHRcdFx0XHQ8L0dyaWRJdGVtPlxuXHRcdFx0XHRcdFx0PEdyaWRJdGVtICB4cz17MTB9PlxuXHRcdFx0XHRcdFx0XHQ8R3JpZENvbnRhaW5lcj5cblx0XHRcdFx0XHRcdFx0XHQ8R3JpZEl0ZW0+XG5cdFx0XHRcdFx0XHRcdFx0XHQ8aDE+PEJsb2dMaW5rIHNsdWc9e3RpdGxlfT57dGl0bGV9PC9CbG9nTGluaz4gPiB7KHBvc3QpID8gcG9zdC50aXRsZSA6ICcnfTwvaDE+XG5cdFx0XHRcdFx0XHRcdFx0PC9HcmlkSXRlbT5cdFx0XHRcblx0XHRcdFx0XHRcdFx0XHQ8R3JpZEl0ZW0+XHRcdFx0XHRcdFx0XHRcdFx0XG5cdFx0XHRcdFx0XHRcdFx0XHQ8Q29udGVudCBkYXRhPXtwb3N0fS8+XG5cdFx0XHRcdFx0XHRcdFx0PC9HcmlkSXRlbT4gIFxuXHRcdFx0XHRcdFx0XHQ8L0dyaWRDb250YWluZXI+XG5cdFx0XHRcdFx0XHQ8L0dyaWRJdGVtPlx0XHRcdFxuXHRcdFx0XHRcdFx0PEdyaWRJdGVtIHhzPXsxfT5cblx0XHRcdFx0XHRcdDwvR3JpZEl0ZW0+XG5cdFx0XHRcdFx0PC9HcmlkQ29udGFpbmVyPlxuXHRcdFx0XHQ8L0dyaWRJdGVtPlxuXHRcdFx0PC9HcmlkQ29udGFpbmVyPlxuXHRcdClcblx0fVxufVxuXG5leHBvcnQgZGVmYXVsdCB3aXRoTW9kdWxlKFBhZ2VDb21wb25lbnQpO1xuXG4iLCJjbGFzcyBNb2R1bGVzIHtcbn1cblxuXG5Nb2R1bGVzLkdhbWVzID0gZmFsc2U7XG5Nb2R1bGVzLlN0YW5kaW5ncyA9IGZhbHNlO1xuTW9kdWxlcy5Qb3N0U2Vhc29uID0gZmFsc2U7XG5Nb2R1bGVzLlRyYW5zZmVycyA9IHRydWU7XG5cbmV4cG9ydCBkZWZhdWx0IChNb2R1bGVzKTsiXSwic291cmNlUm9vdCI6IiJ9