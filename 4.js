(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[4],{

/***/ "../../../../frameworks/webapps/startup/node_modules/css-loader/index.js!../../../../frameworks/webapps/startup/node_modules/sass-loader/lib/loader.js!./src/jmarroyave/components/uxi/blog/list.scss":
/*!*********************************************************************************************************************************************************************************************************!*\
  !*** /media/jm/labs/frameworks/webapps/startup/node_modules/css-loader!/media/jm/labs/frameworks/webapps/startup/node_modules/sass-loader/lib/loader.js!./src/jmarroyave/components/uxi/blog/list.scss ***!
  \*********************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../../../../../../frameworks/webapps/startup/node_modules/css-loader/lib/css-base.js */ "../../../../frameworks/webapps/startup/node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".mod-blog-list .post {\n  padding-bottom: 20px; }\n\n.mod-blog-list .post .category {\n  font-size: 0.8em;\n  line-height: 0.9em;\n  font-weight: bold; }\n\n.mod-blog-list .post .title {\n  font-size: 2em;\n  line-height: 1.25em; }\n\n.mod-blog-list .post .date {\n  font-size: 0.75em;\n  line-height: 1.1em; }\n\n.mod-blog-list .post .tags {\n  font-size: 0.8em;\n  line-height: 1.1em; }\n\n.mod-blog-list .post .excerpt {\n  font-size: 1em;\n  line-height: 1.5em; }\n", ""]);

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
/* harmony import */ var jmarroyave_components_uxi_core_with_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! jmarroyave/components/uxi/core/with-module */ "./src/jmarroyave/components/uxi/core/with-module.js");
/* harmony import */ var jmarroyave_components_uxi_blog_layout_lg_page__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! jmarroyave/components/uxi/blog/layout/lg/page */ "./src/jmarroyave/components/uxi/blog/layout/lg/page.js");
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
				react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(jmarroyave_components_uxi_blog_layout_lg_page__WEBPACK_IMPORTED_MODULE_4__["default"], { data: data, title: title })
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
					react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(jmarroyave_components_uxi_blog_layout_lg_page__WEBPACK_IMPORTED_MODULE_4__["default"], { data: data })
				)
			);
		}
	}]);

	return PageComponent;
}(react__WEBPACK_IMPORTED_MODULE_0___default.a.Component);

/* harmony default export */ __webpack_exports__["default"] = (Object(jmarroyave_components_uxi_core_with_module__WEBPACK_IMPORTED_MODULE_3__["default"])(PageComponent));

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
/* harmony import */ var jmarroyave_components_uxi_blog_list__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! jmarroyave/components/uxi/blog/list */ "./src/jmarroyave/components/uxi/blog/list.js");
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

			var posts = data != null ? data.posts : null;
			return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
				jmarroyave_components_uxi_core_grid_container__WEBPACK_IMPORTED_MODULE_2__["default"],
				null,
				react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
					jmarroyave_components_uxi_core_grid_item__WEBPACK_IMPORTED_MODULE_3__["default"],
					null,
					react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
						jmarroyave_components_uxi_core_grid_container__WEBPACK_IMPORTED_MODULE_2__["default"],
						null,
						react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(jmarroyave_components_uxi_core_grid_item__WEBPACK_IMPORTED_MODULE_3__["default"], { xs: 1, md: 2 }),
						react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
							jmarroyave_components_uxi_core_grid_item__WEBPACK_IMPORTED_MODULE_3__["default"],
							{ xs: 10, md: 8 },
							react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
								jmarroyave_components_uxi_core_grid_container__WEBPACK_IMPORTED_MODULE_2__["default"],
								null,
								react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
									jmarroyave_components_uxi_core_grid_item__WEBPACK_IMPORTED_MODULE_3__["default"],
									null,
									react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
										'h1',
										null,
										title
									)
								),
								react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
									jmarroyave_components_uxi_core_grid_item__WEBPACK_IMPORTED_MODULE_3__["default"],
									null,
									react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(jmarroyave_components_uxi_blog_list__WEBPACK_IMPORTED_MODULE_10__["default"], { area: title, data: posts })
								)
							)
						),
						react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(jmarroyave_components_uxi_core_grid_item__WEBPACK_IMPORTED_MODULE_3__["default"], { xs: 1, md: 2 })
					)
				)
			);
		}
	}]);

	return PageComponent;
}(react__WEBPACK_IMPORTED_MODULE_0___default.a.Component);

/* harmony default export */ __webpack_exports__["default"] = (Object(jmarroyave_components_uxi_core_with_module__WEBPACK_IMPORTED_MODULE_6__["default"])(PageComponent));

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
/* harmony import */ var core_components_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core/components/component */ "./src/core/components/component.js");
/* harmony import */ var jmarroyave_components_data_post_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! jmarroyave/components/data/post_link */ "./src/jmarroyave/components/data/post_link.js");
/* harmony import */ var jmarroyave_components_uxi_core_grid_container__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! jmarroyave/components/uxi/core/grid_container */ "./src/jmarroyave/components/uxi/core/grid_container.js");
/* harmony import */ var jmarroyave_components_uxi_core_grid_item__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! jmarroyave/components/uxi/core/grid_item */ "./src/jmarroyave/components/uxi/core/grid_item.js");
/* harmony import */ var core_components_date__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! core/components/date */ "./src/core/components/date.js");
/* harmony import */ var _list_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./list.scss */ "./src/jmarroyave/components/uxi/blog/list.scss");
/* harmony import */ var _list_scss__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_list_scss__WEBPACK_IMPORTED_MODULE_6__);
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }










function Post(_ref) {
	var data = _ref.data;

	return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
		jmarroyave_components_uxi_core_grid_item__WEBPACK_IMPORTED_MODULE_4__["default"],
		{ xs: 12, className: 'post' },
		react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
			'div',
			{ className: 'date' },
			react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(core_components_date__WEBPACK_IMPORTED_MODULE_5__["default"], { value: data.date })
		),
		react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
			'div',
			{ className: 'title' },
			react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
				jmarroyave_components_data_post_link__WEBPACK_IMPORTED_MODULE_2__["default"],
				{ slug: data.slug },
				data.title
			)
		),
		react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
			'div',
			null,
			react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
				'span',
				{ className: 'category' },
				data.category
			),
			' ',
			react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
				'span',
				{ className: 'tags' },
				'tags: ',
				data.tags
			)
		),
		react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
			'div',
			{ className: 'excerpt' },
			data.excerpt
		)
	);
}

var List = function (_React$Component) {
	_inherits(List, _React$Component);

	function List(props, context) {
		_classCallCheck(this, List);

		var _this = _possibleConstructorReturn(this, (List.__proto__ || Object.getPrototypeOf(List)).call(this, props, context));

		_this.api = window.__api;
		return _this;
	}

	_createClass(List, [{
		key: 'componentDidMount',
		value: function componentDidMount() {}
	}, {
		key: 'render',
		value: function render() {
			var data = this.props.data;
			var area = this.props.area;
			var key = 0;
			return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
				jmarroyave_components_uxi_core_grid_container__WEBPACK_IMPORTED_MODULE_3__["default"],
				{ className: 'mod-blog-list' },
				data.map(function (item) {
					return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Post, { data: item, key: key++ });
				})
			);
		}
	}]);

	return List;
}(react__WEBPACK_IMPORTED_MODULE_0___default.a.Component);

/* harmony default export */ __webpack_exports__["default"] = (Object(core_components_component__WEBPACK_IMPORTED_MODULE_1__["default"])(List));

/***/ }),

/***/ "./src/jmarroyave/components/uxi/blog/list.scss":
/*!******************************************************!*\
  !*** ./src/jmarroyave/components/uxi/blog/list.scss ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../../../../../../frameworks/webapps/startup/node_modules/css-loader!../../../../../../../../../frameworks/webapps/startup/node_modules/sass-loader/lib/loader.js!./list.scss */ "../../../../frameworks/webapps/startup/node_modules/css-loader/index.js!../../../../frameworks/webapps/startup/node_modules/sass-loader/lib/loader.js!./src/jmarroyave/components/uxi/blog/list.scss");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvam1hcnJveWF2ZS9jb21wb25lbnRzL3V4aS9ibG9nL2xpc3Quc2NzcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29yZS9jb21wb25lbnRzL2RhdGUuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvcmUvY29tcG9uZW50cy9sYXlvdXQvc2VjdGlvbi5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvam1hcnJveWF2ZS9jb21wb25lbnRzL3V4aS9ibG9nL2xheW91dC9sYXlvdXQtcHJveHkuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2ptYXJyb3lhdmUvY29tcG9uZW50cy91eGkvYmxvZy9sYXlvdXQvbGcvcGFnZS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvam1hcnJveWF2ZS9jb21wb25lbnRzL3V4aS9ibG9nL2xpc3QuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2ptYXJyb3lhdmUvY29tcG9uZW50cy91eGkvYmxvZy9saXN0LnNjc3M/ODc0YyIsIndlYnBhY2s6Ly8vLi9zcmMvam1hcnJveWF2ZS9jb25mL2xheW91dC9tb2R1bGVzLmpzIl0sIm5hbWVzIjpbIlVJRGF0ZSIsInN0YXRlIiwiZGVmYXVsdHMiLCJjbGFzc05hbWUiLCJUaW1lQWdvIiwiYWRkTG9jYWxlIiwiZW4iLCJ0aW1lQWdvIiwiZGF0ZSIsInN0ciIsInByb3BzIiwidmFsdWUiLCJsZW5ndGgiLCJEYXRlIiwiZm9ybWF0IiwiZXgiLCJVSUNvbXBvbmVudCIsInN0eWxlcyIsInJvb3QiLCJ3aWR0aCIsImJveFNpemluZyIsInBhZGRpbmciLCJMYXlvdXRTZWN0aW9uIiwiY2xhc3NlcyIsImNvbG9yIiwiYmFja2dyb3VuZENvbG9yIiwiY2hpbGRyZW4iLCJSZWFjdCIsIkNvbXBvbmVudCIsIndpdGhTdHlsZXMiLCJQYWdlQ29tcG9uZW50IiwicmVuZGVyRGVmYXVsdCIsImRhdGEiLCJ0aXRsZSIsIndpdGhNb2R1bGUiLCJjb250cm9sIiwiTW9kdWxlcyIsIlRyYW5zZmVycyIsIm1vZHMiLCJnZXRNb2R1bGVzIiwibW9kVGVzdCIsInBvc3RzIiwiUG9zdCIsInNsdWciLCJjYXRlZ29yeSIsInRhZ3MiLCJleGNlcnB0IiwiTGlzdCIsImNvbnRleHQiLCJhcGkiLCJ3aW5kb3ciLCJfX2FwaSIsImFyZWEiLCJrZXkiLCJtYXAiLCJpdGVtIiwiR2FtZXMiLCJTdGFuZGluZ3MiLCJQb3N0U2Vhc29uIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBQSwyQkFBMkIsbUJBQU8sQ0FBQyxxTEFBK0Y7QUFDbEk7OztBQUdBO0FBQ0EsY0FBYyxRQUFTLHlCQUF5Qix5QkFBeUIsRUFBRSxvQ0FBb0MscUJBQXFCLHVCQUF1QixzQkFBc0IsRUFBRSxpQ0FBaUMsbUJBQW1CLHdCQUF3QixFQUFFLGdDQUFnQyxzQkFBc0IsdUJBQXVCLEVBQUUsZ0NBQWdDLHFCQUFxQix1QkFBdUIsRUFBRSxtQ0FBbUMsbUJBQW1CLHVCQUF1QixFQUFFOztBQUU3ZTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ1BBO0FBQ0E7QUFDQTtBQUNBOztJQUdNQSxNOzs7QUFDSixvQkFBYztBQUFBOztBQUFBOztBQUVaLFVBQUtDLEtBQUwsR0FBYSxFQUFiO0FBRlk7QUFJYjs7OztrQ0FFWTtBQUNYLFVBQU1DLFdBQVc7QUFDZkMsbUJBQVk7QUFERyxPQUFqQjtBQUdBLGFBQU9ELFFBQVA7QUFDRDs7OzZCQUNRO0FBQ1BFLGlFQUFPQSxDQUFDQyxTQUFSLENBQWtCQyxvRUFBbEI7QUFDQSxVQUFNQyxVQUFVLElBQUlILDJEQUFKLENBQVksT0FBWixDQUFoQjtBQUNBLFVBQUlJLElBQUo7QUFDQSxVQUFJQyxHQUFKO0FBQ0EsVUFBRztBQUNGRCxlQUFRLENBQUMsS0FBS0UsS0FBTCxDQUFXQyxLQUFaLElBQXFCLEtBQUtELEtBQUwsQ0FBV0MsS0FBWCxLQUFxQixFQUExQyxJQUFnRCxLQUFLRCxLQUFMLENBQVdDLEtBQVgsQ0FBaUJDLE1BQWpCLEtBQTRCLENBQTdFLEdBQWtGLEVBQWxGLEdBQXdGLEtBQUtGLEtBQUwsQ0FBV0MsS0FB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LElBQVYsQ0FBZixFOzs7Ozs7Ozs7Ozs7QUMxQ0EsY0FBYyxtQkFBTyxDQUFDLHFZQUFtTTs7QUFFek4sNENBQTRDLFFBQVM7O0FBRXJEO0FBQ0E7Ozs7QUFJQSxlQUFlOztBQUVmO0FBQ0E7O0FBRUEsYUFBYSxtQkFBTyxDQUFDLDJMQUFtRzs7QUFFeEg7O0FBRUEsR0FBRyxLQUFVLEVBQUUsRTs7Ozs7Ozs7Ozs7Ozs7O0lDbkJUWCxPOzs7O0FBSU5BLFFBQVFvQixLQUFSLEdBQWdCLEtBQWhCO0FBQ0FwQixRQUFRcUIsU0FBUixHQUFvQixLQUFwQjtBQUNBckIsUUFBUXNCLFVBQVIsR0FBcUIsS0FBckI7QUFDQXRCLFFBQVFDLFNBQVIsR0FBb0IsSUFBcEI7O0FBRWdCRCxzRUFBaEIsRSIsImZpbGUiOiI0LmpzIiwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0cyA9IG1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL2ZyYW1ld29ya3Mvd2ViYXBwcy9zdGFydHVwL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2xpYi9jc3MtYmFzZS5qc1wiKShmYWxzZSk7XG4vLyBpbXBvcnRzXG5cblxuLy8gbW9kdWxlXG5leHBvcnRzLnB1c2goW21vZHVsZS5pZCwgXCIubW9kLWJsb2ctbGlzdCAucG9zdCB7XFxuICBwYWRkaW5nLWJvdHRvbTogMjBweDsgfVxcblxcbi5tb2QtYmxvZy1saXN0IC5wb3N0IC5jYXRlZ29yeSB7XFxuICBmb250LXNpemU6IDAuOGVtO1xcbiAgbGluZS1oZWlnaHQ6IDAuOWVtO1xcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7IH1cXG5cXG4ubW9kLWJsb2ctbGlzdCAucG9zdCAudGl0bGUge1xcbiAgZm9udC1zaXplOiAyZW07XFxuICBsaW5lLWhlaWdodDogMS4yNWVtOyB9XFxuXFxuLm1vZC1ibG9nLWxpc3QgLnBvc3QgLmRhdGUge1xcbiAgZm9udC1zaXplOiAwLjc1ZW07XFxuICBsaW5lLWhlaWdodDogMS4xZW07IH1cXG5cXG4ubW9kLWJsb2ctbGlzdCAucG9zdCAudGFncyB7XFxuICBmb250LXNpemU6IDAuOGVtO1xcbiAgbGluZS1oZWlnaHQ6IDEuMWVtOyB9XFxuXFxuLm1vZC1ibG9nLWxpc3QgLnBvc3QgLmV4Y2VycHQge1xcbiAgZm9udC1zaXplOiAxZW07XFxuICBsaW5lLWhlaWdodDogMS41ZW07IH1cXG5cIiwgXCJcIl0pO1xuXG4vLyBleHBvcnRzXG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IFVJQ29tcG9uZW50IGZyb20gJ2NvcmUvY29tcG9uZW50cy91aV9jb21wb25lbnQnO1xuaW1wb3J0IFRpbWVBZ28gZnJvbSAnamF2YXNjcmlwdC10aW1lLWFnbydcbmltcG9ydCBlbiBmcm9tICdqYXZhc2NyaXB0LXRpbWUtYWdvL2xvY2FsZS9lbidcblxuXG5jbGFzcyBVSURhdGUgZXh0ZW5kcyBVSUNvbXBvbmVudCB7IFxuICBjb25zdHJ1Y3RvcigpIHtcbiAgICBzdXBlcigpO1xuICAgIHRoaXMuc3RhdGUgPSB7XG4gICAgfVxuICB9XG5cbiAgZ2V0RGVmYXVsdHMoKXtcbiAgICBjb25zdCBkZWZhdWx0cyA9IHtcbiAgICAgIGNsYXNzTmFtZSA6ICcnLCAgICAgIFxuICAgIH0gICAgXG4gICAgcmV0dXJuIGRlZmF1bHRzO1xuICB9ICBcbiAgcmVuZGVyKCkge1xuICAgIFRpbWVBZ28uYWRkTG9jYWxlKGVuKVxuICAgIGNvbnN0IHRpbWVBZ28gPSBuZXcgVGltZUFnbygnZW4tVVMnKTtcbiAgICB2YXIgZGF0ZTtcbiAgICB2YXIgc3RyO1xuICAgIHRyeXtcblx0ICAgIGRhdGUgPSAoIXRoaXMucHJvcHMudmFsdWUgfHwgdGhpcy5wcm9wcy52YWx1ZSA9PT0gJycgfHwgdGhpcy5wcm9wcy52YWx1ZS5sZW5ndGggPT09IDApID8gJycgOiAodGhpcy5wcm9wcy52YWx1ZSBpbnN0YW5jZW9mIERhdGUpID8gdGhpcy5wcm9wcy52YWx1ZSA6IG5ldyBEYXRlKHRoaXMucHJvcHMudmFsdWUpO1xuXHQgICAgc3RyID0gKGRhdGUgPT09ICcnKSA/ICcnIDogdGltZUFnby5mb3JtYXQoZGF0ZSwgJ3R3aXR0ZXInKTtcbiAgICB9IGNhdGNoIChleCl7XG4gIFx0XHRzdHIgPSB0aGlzLnByb3BzLnZhbHVlO1xuICAgIH1cbiAgICByZXR1cm4gKFxuICAgICAgPHNwYW4gY2xhc3NOYW1lPXt0aGlzLnN0YXRlLmNsYXNzTmFtZX0+e3N0cn08L3NwYW4+XG4gICAgKTtcbiAgfVxufVxuXG5cbmV4cG9ydCBkZWZhdWx0IFVJRGF0ZTsiLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgd2l0aFN0eWxlcyB9IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL3N0eWxlcyc7XG5cbmNvbnN0IHN0eWxlcyA9IHRoZW1lID0+ICh7XG5cdHJvb3QgOiB7XG5cdFx0d2lkdGg6ICcxMDAlJyxcblx0XHRib3hTaXppbmc6ICdib3JkZXItYm94Jyxcblx0XHRwYWRkaW5nOiAnMTZweCcsXG5cdH0sXG59KTtcbmNsYXNzIExheW91dFNlY3Rpb24gZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQgeyBcbiAgcmVuZGVyKCkge1xuICBcdGNvbnN0IGNsYXNzZXMgPSB0aGlzLnByb3BzLmNsYXNzZXM7XG4gIFx0Ly9jb25zdCBoZWlnaHQgPSAoXCJoZWlnaHRcIiBpbiB0aGlzLnByb3BzKSA/IHRoaXMucHJvcHMuaGVpZ2h0IDogJzMwcHgnO1xuICBcdGNvbnN0IGNvbG9yID0gKFwiY29sb3JcIiBpbiB0aGlzLnByb3BzKSA/IHRoaXMucHJvcHMuY29sb3IgOiAnd2hpdGUnO1xuICAgIHJldHVybiAoXG4gICAgICA8ZGl2IGNsYXNzTmFtZT17Y2xhc3Nlcy5yb290fSBzdHlsZT17e2JhY2tncm91bmRDb2xvcjogY29sb3J9fT5cbiAgICAgIFx0e3RoaXMucHJvcHMuY2hpbGRyZW59XG4gICAgICA8L2Rpdj5cbiAgICApO1xuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IHdpdGhTdHlsZXMoc3R5bGVzKShMYXlvdXRTZWN0aW9uKTsiLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IEhpZGRlbiBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9IaWRkZW4nO1xuaW1wb3J0IHsgIEJyb3dzZXJWaWV3LCAgTW9iaWxlVmlldyB9IGZyb20gXCJyZWFjdC1kZXZpY2UtZGV0ZWN0XCI7XG5pbXBvcnQgd2l0aE1vZHVsZSBmcm9tICdqbWFycm95YXZlL2NvbXBvbmVudHMvdXhpL2NvcmUvd2l0aC1tb2R1bGUnO1xuaW1wb3J0IExHIGZyb20gXCJqbWFycm95YXZlL2NvbXBvbmVudHMvdXhpL2Jsb2cvbGF5b3V0L2xnL3BhZ2VcIjtcblxuY2xhc3MgUGFnZUNvbXBvbmVudCBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG5cdHJlbmRlcigpe1xuXHRcdHJldHVybiB0aGlzLnJlbmRlckRlZmF1bHQoKTtcblx0fVxuXG5cdHJlbmRlckRlZmF1bHQoKXtcblx0XHRjb25zdCBkYXRhID0gdGhpcy5wcm9wcy5kYXRhO1xuXHRcdGNvbnN0IHRpdGxlID0gdGhpcy5wcm9wcy50aXRsZTtcblx0XHRyZXR1cm4gKFxuXHRcdFx0PGRpdiBzdHlsZT17e3dpZHRoOicxMDAlJ319Plx0XHRcdFx0XG4gICAgXHRcdFx0PExHIGRhdGE9e2RhdGF9IHRpdGxlPXt0aXRsZX0vPlxuXHRcdFx0PC9kaXY+XG5cdFx0KVx0XHRcblx0fVxuXG5cdHJlbmRlck11bHRpcGxlKCl7XG5cdFx0dmFyIGRhdGEgPSB0aGlzLnByb3BzLmRhdGE7XG5cdFx0cmV0dXJuIChcblx0XHRcdDxkaXYgc3R5bGU9e3t3aWR0aDonMTAwJSd9fT5cdFx0XHRcdFxuICAgICAgICBcdFx0PEhpZGRlbiBvbmx5PXtbJ3NtJywgJ21kJywgJ2xnJywgJ3hsJ119PlxuICAgICAgICBcdFx0XHRcblx0XHQgICAgICAgIDwvSGlkZGVuPlxuICAgICAgICBcdFx0PEhpZGRlbiBvbmx5PXtbJ3hzJywgJ21kJywgJ2xnJywgJ3hsJ119PlxuICAgICAgICBcdFx0XHRcblx0XHQgICAgICAgIDwvSGlkZGVuPlxuICAgICAgICBcdFx0PEhpZGRlbiBvbmx5PXtbJ3hzJywgJ3NtJ119PlxuICAgICAgICBcdFx0XHQ8TEcgZGF0YT17ZGF0YX0vPlxuXHRcdCAgICAgICAgPC9IaWRkZW4+XG5cdFx0XHQ8L2Rpdj5cblx0XHQpXG5cdH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgd2l0aE1vZHVsZShQYWdlQ29tcG9uZW50KTsiLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgTGluayB9IGZyb20gJ3JlYWN0LXJvdXRlcidcbmltcG9ydCBHcmlkQ29udGFpbmVyIGZyb20gJ2ptYXJyb3lhdmUvY29tcG9uZW50cy91eGkvY29yZS9ncmlkX2NvbnRhaW5lcic7XG5pbXBvcnQgR3JpZEl0ZW0gZnJvbSAnam1hcnJveWF2ZS9jb21wb25lbnRzL3V4aS9jb3JlL2dyaWRfaXRlbSc7XG5pbXBvcnQgSGlkZGVuIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL0hpZGRlbic7XG5pbXBvcnQgTW9kdWxlcyBmcm9tICdqbWFycm95YXZlL2NvbmYvbGF5b3V0L21vZHVsZXMnO1xuaW1wb3J0IHdpdGhNb2R1bGUgZnJvbSAnam1hcnJveWF2ZS9jb21wb25lbnRzL3V4aS9jb3JlL3dpdGgtbW9kdWxlJztcbmltcG9ydCBCbG9jayBmcm9tICdqbWFycm95YXZlL2NvbXBvbmVudHMvdXhpL2hvbWUvYmxvY2snO1xuaW1wb3J0IE1CbG9jayBmcm9tICdjb3JlL2NvbXBvbmVudHMvbW9ja3VwL2Jsb2NrJztcbmltcG9ydCBTZWN0aW9uIGZyb20gJ2NvcmUvY29tcG9uZW50cy9sYXlvdXQvc2VjdGlvbic7XG5pbXBvcnQgTGlzdCBmcm9tICdqbWFycm95YXZlL2NvbXBvbmVudHMvdXhpL2Jsb2cvbGlzdCc7XG5cbmNsYXNzIFBhZ2VDb21wb25lbnQgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuXHRnZXRNb2R1bGVzKCl7XG5cdFx0dmFyIGRhdGEgPSB0aGlzLnByb3BzLmRhdGE7XHRcdFxuXG5cdFx0cmV0dXJuIFtcblx0XHRcdHt0aXRsZTogXCJUZXN0XCIsIFx0XHRjb250cm9sOiAoTW9kdWxlcy5UcmFuc2ZlcnMpID8gPGRpdj50ZXN0PC9kaXY+IDogbnVsbH0sXG5cdFx0XTtcblx0fVxuXG5cdHJlbmRlcigpe1xuXHRcdGNvbnN0IGRhdGEgPSB0aGlzLnByb3BzLmRhdGE7XHRcdFxuXHRcdGNvbnN0IHRpdGxlID0gdGhpcy5wcm9wcy50aXRsZTtcblx0XHRjb25zdCBtb2RzID0gdGhpcy5nZXRNb2R1bGVzKCk7XG5cdFx0Y29uc3QgbW9kVGVzdCA9IG1vZHNbMF07XG5cblx0XHRjb25zdCBwb3N0cyA9IChkYXRhICE9IG51bGwpID8gZGF0YS5wb3N0cyA6IG51bGw7XG5cdFx0cmV0dXJuIChcblx0XHRcdDxHcmlkQ29udGFpbmVyPlxuXHRcdFx0XHQ8R3JpZEl0ZW0+XG5cdFx0XHRcdFx0PEdyaWRDb250YWluZXI+XG5cdFx0XHRcdFx0XHQ8R3JpZEl0ZW0geHM9ezF9IG1kPXsyfT5cblx0XHRcdFx0XHRcdDwvR3JpZEl0ZW0+XG5cdFx0XHRcdFx0XHQ8R3JpZEl0ZW0gIHhzPXsxMH0gbWQ9ezh9PlxuXHRcdFx0XHRcdFx0XHQ8R3JpZENvbnRhaW5lcj5cblx0XHRcdFx0XHRcdFx0XHQ8R3JpZEl0ZW0+XG5cdFx0XHRcdFx0XHRcdFx0XHQ8aDE+e3RpdGxlfTwvaDE+XG5cdFx0XHRcdFx0XHRcdFx0PC9HcmlkSXRlbT5cdFx0XHRcblx0XHRcdFx0XHRcdFx0XHQ8R3JpZEl0ZW0+XG5cdFx0XHRcdFx0XHRcdFx0XHQ8TGlzdCBhcmVhPXt0aXRsZX0gZGF0YT17cG9zdHN9Lz5cblx0XHRcdFx0XHRcdFx0XHQ8L0dyaWRJdGVtPiAgXG5cdFx0XHRcdFx0XHRcdDwvR3JpZENvbnRhaW5lcj5cblx0XHRcdFx0XHRcdDwvR3JpZEl0ZW0+XHRcdFx0XG5cdFx0XHRcdFx0XHQ8R3JpZEl0ZW0geHM9ezF9IG1kPXsyfT5cblx0XHRcdFx0XHRcdDwvR3JpZEl0ZW0+XG5cdFx0XHRcdFx0PC9HcmlkQ29udGFpbmVyPlxuXHRcdFx0XHQ8L0dyaWRJdGVtPlxuXHRcdFx0PC9HcmlkQ29udGFpbmVyPlxuXHRcdClcblx0fVxufVxuXG5leHBvcnQgZGVmYXVsdCB3aXRoTW9kdWxlKFBhZ2VDb21wb25lbnQpO1xuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBDb21wb25lbnQgZnJvbSAnY29yZS9jb21wb25lbnRzL2NvbXBvbmVudCc7XG5pbXBvcnQgUG9zdExpbmsgZnJvbSBcImptYXJyb3lhdmUvY29tcG9uZW50cy9kYXRhL3Bvc3RfbGlua1wiO1xuaW1wb3J0IEdyaWRDb250YWluZXIgZnJvbSAnam1hcnJveWF2ZS9jb21wb25lbnRzL3V4aS9jb3JlL2dyaWRfY29udGFpbmVyJztcbmltcG9ydCBHcmlkSXRlbSBmcm9tICdqbWFycm95YXZlL2NvbXBvbmVudHMvdXhpL2NvcmUvZ3JpZF9pdGVtJztcbmltcG9ydCBEYXRlIGZyb20gJ2NvcmUvY29tcG9uZW50cy9kYXRlJztcblxuaW1wb3J0IFwiLi9saXN0LnNjc3NcIjtcblxuZnVuY3Rpb24gUG9zdCh7ZGF0YX0pe1xuXHRyZXR1cm4gKFxuXHRcdDxHcmlkSXRlbSB4cz17MTJ9ICBjbGFzc05hbWU9J3Bvc3QnPlxuXHRcdFx0PGRpdiBjbGFzc05hbWU9J2RhdGUnPjxEYXRlIHZhbHVlPXtkYXRhLmRhdGV9Lz48L2Rpdj5cblx0XHRcdDxkaXYgY2xhc3NOYW1lPSd0aXRsZSc+PFBvc3RMaW5rIHNsdWc9e2RhdGEuc2x1Z30+e2RhdGEudGl0bGV9PC9Qb3N0TGluaz48L2Rpdj5cblx0XHRcdDxkaXY+PHNwYW4gY2xhc3NOYW1lPSdjYXRlZ29yeSc+e2RhdGEuY2F0ZWdvcnl9PC9zcGFuPiA8c3BhbiBjbGFzc05hbWU9J3RhZ3MnPnRhZ3M6IHtkYXRhLnRhZ3N9PC9zcGFuPjwvZGl2PlxuXHRcdFx0PGRpdiBjbGFzc05hbWU9J2V4Y2VycHQnPntkYXRhLmV4Y2VycHR9PC9kaXY+XG5cdFx0PC9HcmlkSXRlbT5cblx0KVxufVxuXG5jbGFzcyBMaXN0IGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcblx0Y29uc3RydWN0b3IocHJvcHMsY29udGV4dCkge1xuXHRcdHN1cGVyKHByb3BzLGNvbnRleHQpO1xuXHRcdHRoaXMuYXBpID0gd2luZG93Ll9fYXBpO1xuXHR9XG5cblx0Y29tcG9uZW50RGlkTW91bnQoKXtcblx0fVxuXG5cdHJlbmRlcigpe1xuXHRcdGNvbnN0IGRhdGEgPSB0aGlzLnByb3BzLmRhdGE7XG5cdFx0Y29uc3QgYXJlYSA9IHRoaXMucHJvcHMuYXJlYTtcblx0XHR2YXIga2V5ID0gMDtcblx0XHRyZXR1cm4gKFxuXHRcdFx0PEdyaWRDb250YWluZXIgY2xhc3NOYW1lPSdtb2QtYmxvZy1saXN0Jz5cblx0XHRcdFx0e2RhdGEubWFwKChpdGVtKT0+XG5cdFx0XHRcdFx0PFBvc3QgZGF0YT17aXRlbX0ga2V5PXtrZXkrK30vPlxuXHRcdFx0XHQpfVxuXHRcdFx0PC9HcmlkQ29udGFpbmVyPlxuXHRcdCk7XG5cdH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgQ29tcG9uZW50KExpc3QpOyIsIlxudmFyIGNvbnRlbnQgPSByZXF1aXJlKFwiISEuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9mcmFtZXdvcmtzL3dlYmFwcHMvc3RhcnR1cC9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9pbmRleC5qcyEuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9mcmFtZXdvcmtzL3dlYmFwcHMvc3RhcnR1cC9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvbGliL2xvYWRlci5qcyEuL2xpc3Quc2Nzc1wiKTtcblxuaWYodHlwZW9mIGNvbnRlbnQgPT09ICdzdHJpbmcnKSBjb250ZW50ID0gW1ttb2R1bGUuaWQsIGNvbnRlbnQsICcnXV07XG5cbnZhciB0cmFuc2Zvcm07XG52YXIgaW5zZXJ0SW50bztcblxuXG5cbnZhciBvcHRpb25zID0ge1wiaG1yXCI6dHJ1ZX1cblxub3B0aW9ucy50cmFuc2Zvcm0gPSB0cmFuc2Zvcm1cbm9wdGlvbnMuaW5zZXJ0SW50byA9IHVuZGVmaW5lZDtcblxudmFyIHVwZGF0ZSA9IHJlcXVpcmUoXCIhLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vZnJhbWV3b3Jrcy93ZWJhcHBzL3N0YXJ0dXAvbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9saWIvYWRkU3R5bGVzLmpzXCIpKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5pZihjb250ZW50LmxvY2FscykgbW9kdWxlLmV4cG9ydHMgPSBjb250ZW50LmxvY2FscztcblxuaWYobW9kdWxlLmhvdCkge1xuXHRtb2R1bGUuaG90LmFjY2VwdChcIiEhLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vZnJhbWV3b3Jrcy93ZWJhcHBzL3N0YXJ0dXAvbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvaW5kZXguanMhLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vZnJhbWV3b3Jrcy93ZWJhcHBzL3N0YXJ0dXAvbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2xpYi9sb2FkZXIuanMhLi9saXN0LnNjc3NcIiwgZnVuY3Rpb24oKSB7XG5cdFx0dmFyIG5ld0NvbnRlbnQgPSByZXF1aXJlKFwiISEuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9mcmFtZXdvcmtzL3dlYmFwcHMvc3RhcnR1cC9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9pbmRleC5qcyEuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9mcmFtZXdvcmtzL3dlYmFwcHMvc3RhcnR1cC9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvbGliL2xvYWRlci5qcyEuL2xpc3Quc2Nzc1wiKTtcblxuXHRcdGlmKHR5cGVvZiBuZXdDb250ZW50ID09PSAnc3RyaW5nJykgbmV3Q29udGVudCA9IFtbbW9kdWxlLmlkLCBuZXdDb250ZW50LCAnJ11dO1xuXG5cdFx0dmFyIGxvY2FscyA9IChmdW5jdGlvbihhLCBiKSB7XG5cdFx0XHR2YXIga2V5LCBpZHggPSAwO1xuXG5cdFx0XHRmb3Ioa2V5IGluIGEpIHtcblx0XHRcdFx0aWYoIWIgfHwgYVtrZXldICE9PSBiW2tleV0pIHJldHVybiBmYWxzZTtcblx0XHRcdFx0aWR4Kys7XG5cdFx0XHR9XG5cblx0XHRcdGZvcihrZXkgaW4gYikgaWR4LS07XG5cblx0XHRcdHJldHVybiBpZHggPT09IDA7XG5cdFx0fShjb250ZW50LmxvY2FscywgbmV3Q29udGVudC5sb2NhbHMpKTtcblxuXHRcdGlmKCFsb2NhbHMpIHRocm93IG5ldyBFcnJvcignQWJvcnRpbmcgQ1NTIEhNUiBkdWUgdG8gY2hhbmdlZCBjc3MtbW9kdWxlcyBsb2NhbHMuJyk7XG5cblx0XHR1cGRhdGUobmV3Q29udGVudCk7XG5cdH0pO1xuXG5cdG1vZHVsZS5ob3QuZGlzcG9zZShmdW5jdGlvbigpIHsgdXBkYXRlKCk7IH0pO1xufSIsImNsYXNzIE1vZHVsZXMge1xufVxuXG5cbk1vZHVsZXMuR2FtZXMgPSBmYWxzZTtcbk1vZHVsZXMuU3RhbmRpbmdzID0gZmFsc2U7XG5Nb2R1bGVzLlBvc3RTZWFzb24gPSBmYWxzZTtcbk1vZHVsZXMuVHJhbnNmZXJzID0gdHJ1ZTtcblxuZXhwb3J0IGRlZmF1bHQgKE1vZHVsZXMpOyJdLCJzb3VyY2VSb290IjoiIn0=