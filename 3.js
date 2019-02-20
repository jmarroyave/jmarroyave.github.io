(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[3],{

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvam1hcnJveWF2ZS9jb21wb25lbnRzL3V4aS9ibG9nL2xpc3Quc2NzcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29yZS9jb21wb25lbnRzL2RhdGUuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvcmUvY29tcG9uZW50cy9sYXlvdXQvc2VjdGlvbi5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvam1hcnJveWF2ZS9jb21wb25lbnRzL3V4aS9ibG9nL2xheW91dC9sYXlvdXQtcHJveHkuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2ptYXJyb3lhdmUvY29tcG9uZW50cy91eGkvYmxvZy9sYXlvdXQvbGcvcGFnZS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvam1hcnJveWF2ZS9jb21wb25lbnRzL3V4aS9ibG9nL2xpc3QuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2ptYXJyb3lhdmUvY29tcG9uZW50cy91eGkvYmxvZy9saXN0LnNjc3M/ODc0YyIsIndlYnBhY2s6Ly8vLi9zcmMvam1hcnJveWF2ZS9jb25mL2xheW91dC9tb2R1bGVzLmpzIl0sIm5hbWVzIjpbIlVJRGF0ZSIsInN0YXRlIiwiZGVmYXVsdHMiLCJjbGFzc05hbWUiLCJ0aW1lQWdvIiwibGFuZyIsInByb3BzIiwiVGltZUFnbyIsImFkZExvY2FsZSIsImVzIiwiZW4iLCJkYXRlIiwic3RyIiwidmFsdWUiLCJsZW5ndGgiLCJEYXRlIiwibnVtIiwiTnVtYmVyIiwiaXNJbnRlZ2VyIiwiZm9ybWF0IiwiZXgiLCJVSUNvbXBvbmVudCIsInN0eWxlcyIsInJvb3QiLCJ3aWR0aCIsImJveFNpemluZyIsInBhZGRpbmciLCJMYXlvdXRTZWN0aW9uIiwiY2xhc3NlcyIsImNvbG9yIiwiYmFja2dyb3VuZENvbG9yIiwiY2hpbGRyZW4iLCJSZWFjdCIsIkNvbXBvbmVudCIsIndpdGhTdHlsZXMiLCJQYWdlQ29tcG9uZW50IiwicmVuZGVyRGVmYXVsdCIsImRhdGEiLCJ0aXRsZSIsIndpdGhNb2R1bGUiLCJjb250cm9sIiwiTW9kdWxlcyIsIlRyYW5zZmVycyIsIm1vZHMiLCJnZXRNb2R1bGVzIiwibW9kVGVzdCIsInBvc3RzIiwiUG9zdCIsInNsdWciLCJjYXRlZ29yeSIsInRhZ3MiLCJleGNlcnB0IiwiTGlzdCIsImNvbnRleHQiLCJhcGkiLCJ3aW5kb3ciLCJfX2FwaSIsImFyZWEiLCJrZXkiLCJtYXAiLCJpdGVtIiwiR2FtZXMiLCJTdGFuZGluZ3MiLCJQb3N0U2Vhc29uIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBQSwyQkFBMkIsbUJBQU8sQ0FBQyxxTEFBK0Y7QUFDbEk7OztBQUdBO0FBQ0EsY0FBYyxRQUFTLHlCQUF5Qix5QkFBeUIsRUFBRSxvQ0FBb0MscUJBQXFCLHVCQUF1QixzQkFBc0IsRUFBRSxpQ0FBaUMsbUJBQW1CLHdCQUF3QixFQUFFLGdDQUFnQyxzQkFBc0IsdUJBQXVCLEVBQUUsZ0NBQWdDLHFCQUFxQix1QkFBdUIsRUFBRSxtQ0FBbUMsbUJBQW1CLHVCQUF1QixFQUFFOztBQUU3ZTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDUEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7SUFFTUEsTTs7O0FBQ0osb0JBQWM7QUFBQTs7QUFBQTs7QUFFWixVQUFLQyxLQUFMLEdBQWEsRUFBYjtBQUZZO0FBSWI7Ozs7a0NBRVk7QUFDWCxVQUFNQyxXQUFXO0FBQ2ZDLG1CQUFZO0FBREcsT0FBakI7QUFHQSxhQUFPRCxRQUFQO0FBQ0Q7Ozs2QkFDUTtBQUNQLFVBQUlFLE9BQUo7QUFDQSxVQUFNQyxPQUFRLFVBQVUsS0FBS0MsS0FBaEIsR0FBeUIsS0FBS0EsS0FBTCxDQUFXRCxJQUFwQyxHQUEyQyxJQUF4RDtBQUNBLGNBQU9BLElBQVA7QUFDRSxhQUFLLElBQUw7QUFDRUUscUVBQU9BLENBQUNDLFNBQVIsQ0FBa0JDLG9FQUFsQjtBQUNBTCxvQkFBVSxJQUFJRywyREFBSixDQUFZLE9BQVosQ0FBVjtBQUNBO0FBQ0Y7QUFDRUEscUVBQU9BLENBQUNDLFNBQVIsQ0FBa0JFLG9FQUFsQjtB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cEIvQyxLQURvQixFQUNkK0MsT0FEYzs7QUFFMUIsUUFBS0MsR0FBTCxHQUFXQyxPQUFPQyxLQUFsQjtBQUYwQjtBQUcxQjs7OztzQ0FFa0IsQ0FDbEI7OzsyQkFFTztBQUNQLE9BQU1uQixPQUFPLEtBQUsvQixLQUFMLENBQVcrQixJQUF4QjtBQUNBLE9BQU1vQixPQUFPLEtBQUtuRCxLQUFMLENBQVdtRCxJQUF4QjtBQUNBLE9BQUlDLE1BQU0sQ0FBVjtBQUNBLFVBQ0M7QUFBQyx5RkFBRDtBQUFBLE1BQWUsV0FBVSxlQUF6QjtBQUNFckIsU0FBS3NCLEdBQUwsQ0FBUyxVQUFDQyxJQUFEO0FBQUEsWUFDVCwyREFBQyxJQUFELElBQU0sTUFBTUEsSUFBWixFQUFrQixLQUFLRixLQUF2QixHQURTO0FBQUEsS0FBVDtBQURGLElBREQ7QUFPQTs7OztFQXBCaUIxQiw0Q0FBS0EsQ0FBQ0MsUzs7QUF1QlZBLHdJQUFTQSxDQUFDbUIsSUFBVixDQUFmLEU7Ozs7Ozs7Ozs7OztBQzFDQSxjQUFjLG1CQUFPLENBQUMscVlBQW1NOztBQUV6Tiw0Q0FBNEMsUUFBUzs7QUFFckQ7QUFDQTs7OztBQUlBLGVBQWU7O0FBRWY7QUFDQTs7QUFFQSxhQUFhLG1CQUFPLENBQUMsMkxBQW1HOztBQUV4SDs7QUFFQSxHQUFHLEtBQVUsRUFBRSxFOzs7Ozs7Ozs7Ozs7Ozs7SUNuQlRYLE87Ozs7QUFJTkEsUUFBUW9CLEtBQVIsR0FBZ0IsS0FBaEI7QUFDQXBCLFFBQVFxQixTQUFSLEdBQW9CLEtBQXBCO0FBQ0FyQixRQUFRc0IsVUFBUixHQUFxQixLQUFyQjtBQUNBdEIsUUFBUUMsU0FBUixHQUFvQixJQUFwQjs7QUFFZ0JELHNFQUFoQixFIiwiZmlsZSI6IjMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnRzID0gbW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vZnJhbWV3b3Jrcy93ZWJhcHBzL3N0YXJ0dXAvbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvbGliL2Nzcy1iYXNlLmpzXCIpKGZhbHNlKTtcbi8vIGltcG9ydHNcblxuXG4vLyBtb2R1bGVcbmV4cG9ydHMucHVzaChbbW9kdWxlLmlkLCBcIi5tb2QtYmxvZy1saXN0IC5wb3N0IHtcXG4gIHBhZGRpbmctYm90dG9tOiAyMHB4OyB9XFxuXFxuLm1vZC1ibG9nLWxpc3QgLnBvc3QgLmNhdGVnb3J5IHtcXG4gIGZvbnQtc2l6ZTogMC44ZW07XFxuICBsaW5lLWhlaWdodDogMC45ZW07XFxuICBmb250LXdlaWdodDogYm9sZDsgfVxcblxcbi5tb2QtYmxvZy1saXN0IC5wb3N0IC50aXRsZSB7XFxuICBmb250LXNpemU6IDJlbTtcXG4gIGxpbmUtaGVpZ2h0OiAxLjI1ZW07IH1cXG5cXG4ubW9kLWJsb2ctbGlzdCAucG9zdCAuZGF0ZSB7XFxuICBmb250LXNpemU6IDAuNzVlbTtcXG4gIGxpbmUtaGVpZ2h0OiAxLjFlbTsgfVxcblxcbi5tb2QtYmxvZy1saXN0IC5wb3N0IC50YWdzIHtcXG4gIGZvbnQtc2l6ZTogMC44ZW07XFxuICBsaW5lLWhlaWdodDogMS4xZW07IH1cXG5cXG4ubW9kLWJsb2ctbGlzdCAucG9zdCAuZXhjZXJwdCB7XFxuICBmb250LXNpemU6IDFlbTtcXG4gIGxpbmUtaGVpZ2h0OiAxLjVlbTsgfVxcblwiLCBcIlwiXSk7XG5cbi8vIGV4cG9ydHNcbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgVUlDb21wb25lbnQgZnJvbSAnY29yZS9jb21wb25lbnRzL3VpX2NvbXBvbmVudCc7XG5pbXBvcnQgVGltZUFnbyBmcm9tICdqYXZhc2NyaXB0LXRpbWUtYWdvJ1xuaW1wb3J0IGVuIGZyb20gJ2phdmFzY3JpcHQtdGltZS1hZ28vbG9jYWxlL2VuJ1xuaW1wb3J0IGVzIGZyb20gJ2phdmFzY3JpcHQtdGltZS1hZ28vbG9jYWxlL2VzJ1xuXG5jbGFzcyBVSURhdGUgZXh0ZW5kcyBVSUNvbXBvbmVudCB7IFxuICBjb25zdHJ1Y3RvcigpIHtcbiAgICBzdXBlcigpO1xuICAgIHRoaXMuc3RhdGUgPSB7XG4gICAgfVxuICB9XG5cbiAgZ2V0RGVmYXVsdHMoKXtcbiAgICBjb25zdCBkZWZhdWx0cyA9IHtcbiAgICAgIGNsYXNzTmFtZSA6ICcnLCAgICAgIFxuICAgIH0gICAgXG4gICAgcmV0dXJuIGRlZmF1bHRzO1xuICB9ICBcbiAgcmVuZGVyKCkge1xuICAgIHZhciB0aW1lQWdvO1xuICAgIGNvbnN0IGxhbmcgPSAoXCJsYW5nXCIgaW4gdGhpcy5wcm9wcykgPyB0aGlzLnByb3BzLmxhbmcgOiBcImVuXCI7XG4gICAgc3dpdGNoKGxhbmcpe1xuICAgICAgY2FzZSBcImVzXCIgOlxuICAgICAgICBUaW1lQWdvLmFkZExvY2FsZShlcyk7XG4gICAgICAgIHRpbWVBZ28gPSBuZXcgVGltZUFnbygnZXMtVVMnKTtcbiAgICAgICAgYnJlYWs7XG4gICAgICBkZWZhdWx0OlxuICAgICAgICBUaW1lQWdvLmFkZExvY2FsZShlbik7XG4gICAgICAgIHRpbWVBZ28gPSBuZXcgVGltZUFnbygnZW4tVVMnKTtcbiAgICB9XG5cbiAgICBcbiAgICB2YXIgZGF0ZTtcbiAgICB2YXIgc3RyO1xuICAgIHRyeXtcbiAgICAgIHZhciB2YWx1ZSA9IHRoaXMucHJvcHMudmFsdWU7XG5cbiAgICAgIGlmKCF2YWx1ZSB8fCB2YWx1ZSA9PSBudWxsIHx8IHZhbHVlID09PSAnJyB8fCB2YWx1ZS5sZW5ndGggPT0gMCl7XG4gICAgICAgIHN0ciA9ICcnO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgaWYodmFsdWUgaW5zdGFuY2VvZiBEYXRlKXtcbiAgICAgICAgICBkYXRlID0gbmV3IERhdGUodmFsdWUpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGNvbnN0IG51bSA9IE51bWJlcih2YWx1ZSk7XG4gICAgICAgICAgaWYoTnVtYmVyLmlzSW50ZWdlcihudW0pKXtcbiAgICAgICAgICAgIGRhdGUgPSBuZXcgRGF0ZShudW0pO1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBkYXRlID0gbmV3IERhdGUodmFsdWUpO1xuICAgICAgICAgIH1cbiAgICAgICAgfSAgICAgICBcbiAgICAgICAgc3RyID0gdGltZUFnby5mb3JtYXQoZGF0ZSwgJ3R3aXR0ZXInKTtcbiAgICAgIH0gICAgXG4gICAgfSBjYXRjaCAoZXgpe1xuICAgICAgc3RyID0gdGhpcy5wcm9wcy52YWx1ZTtcbiAgICB9XG4gICAgcmV0dXJuIChcbiAgICAgIDxzcGFuIGNsYXNzTmFtZT17dGhpcy5zdGF0ZS5jbGFzc05hbWV9PntzdHJ9PC9zcGFuPlxuICAgICk7XG4gIH1cbn1cblxuXG5leHBvcnQgZGVmYXVsdCBVSURhdGU7IiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IHdpdGhTdHlsZXMgfSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9zdHlsZXMnO1xuXG5jb25zdCBzdHlsZXMgPSB0aGVtZSA9PiAoe1xuXHRyb290IDoge1xuXHRcdHdpZHRoOiAnMTAwJScsXG5cdFx0Ym94U2l6aW5nOiAnYm9yZGVyLWJveCcsXG5cdFx0cGFkZGluZzogJzE2cHgnLFxuXHR9LFxufSk7XG5jbGFzcyBMYXlvdXRTZWN0aW9uIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHsgXG4gIHJlbmRlcigpIHtcbiAgXHRjb25zdCBjbGFzc2VzID0gdGhpcy5wcm9wcy5jbGFzc2VzO1xuICBcdC8vY29uc3QgaGVpZ2h0ID0gKFwiaGVpZ2h0XCIgaW4gdGhpcy5wcm9wcykgPyB0aGlzLnByb3BzLmhlaWdodCA6ICczMHB4JztcbiAgXHRjb25zdCBjb2xvciA9IChcImNvbG9yXCIgaW4gdGhpcy5wcm9wcykgPyB0aGlzLnByb3BzLmNvbG9yIDogJ3doaXRlJztcbiAgICByZXR1cm4gKFxuICAgICAgPGRpdiBjbGFzc05hbWU9e2NsYXNzZXMucm9vdH0gc3R5bGU9e3tiYWNrZ3JvdW5kQ29sb3I6IGNvbG9yfX0+XG4gICAgICBcdHt0aGlzLnByb3BzLmNoaWxkcmVufVxuICAgICAgPC9kaXY+XG4gICAgKTtcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCB3aXRoU3R5bGVzKHN0eWxlcykoTGF5b3V0U2VjdGlvbik7IiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBIaWRkZW4gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvSGlkZGVuJztcbmltcG9ydCB7ICBCcm93c2VyVmlldywgIE1vYmlsZVZpZXcgfSBmcm9tIFwicmVhY3QtZGV2aWNlLWRldGVjdFwiO1xuaW1wb3J0IHdpdGhNb2R1bGUgZnJvbSAnam1hcnJveWF2ZS9jb21wb25lbnRzL3V4aS9jb3JlL3dpdGgtbW9kdWxlJztcbmltcG9ydCBMRyBmcm9tIFwiam1hcnJveWF2ZS9jb21wb25lbnRzL3V4aS9ibG9nL2xheW91dC9sZy9wYWdlXCI7XG5cbmNsYXNzIFBhZ2VDb21wb25lbnQgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuXHRyZW5kZXIoKXtcblx0XHRyZXR1cm4gdGhpcy5yZW5kZXJEZWZhdWx0KCk7XG5cdH1cblxuXHRyZW5kZXJEZWZhdWx0KCl7XG5cdFx0Y29uc3QgZGF0YSA9IHRoaXMucHJvcHMuZGF0YTtcblx0XHRjb25zdCB0aXRsZSA9IHRoaXMucHJvcHMudGl0bGU7XG5cdFx0cmV0dXJuIChcblx0XHRcdDxkaXYgc3R5bGU9e3t3aWR0aDonMTAwJSd9fT5cdFx0XHRcdFxuICAgIFx0XHRcdDxMRyBkYXRhPXtkYXRhfSB0aXRsZT17dGl0bGV9Lz5cblx0XHRcdDwvZGl2PlxuXHRcdClcdFx0XG5cdH1cblxuXHRyZW5kZXJNdWx0aXBsZSgpe1xuXHRcdHZhciBkYXRhID0gdGhpcy5wcm9wcy5kYXRhO1xuXHRcdHJldHVybiAoXG5cdFx0XHQ8ZGl2IHN0eWxlPXt7d2lkdGg6JzEwMCUnfX0+XHRcdFx0XHRcbiAgICAgICAgXHRcdDxIaWRkZW4gb25seT17WydzbScsICdtZCcsICdsZycsICd4bCddfT5cbiAgICAgICAgXHRcdFx0XG5cdFx0ICAgICAgICA8L0hpZGRlbj5cbiAgICAgICAgXHRcdDxIaWRkZW4gb25seT17Wyd4cycsICdtZCcsICdsZycsICd4bCddfT5cbiAgICAgICAgXHRcdFx0XG5cdFx0ICAgICAgICA8L0hpZGRlbj5cbiAgICAgICAgXHRcdDxIaWRkZW4gb25seT17Wyd4cycsICdzbSddfT5cbiAgICAgICAgXHRcdFx0PExHIGRhdGE9e2RhdGF9Lz5cblx0XHQgICAgICAgIDwvSGlkZGVuPlxuXHRcdFx0PC9kaXY+XG5cdFx0KVxuXHR9XG59XG5cbmV4cG9ydCBkZWZhdWx0IHdpdGhNb2R1bGUoUGFnZUNvbXBvbmVudCk7IiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IExpbmsgfSBmcm9tICdyZWFjdC1yb3V0ZXInXG5pbXBvcnQgR3JpZENvbnRhaW5lciBmcm9tICdqbWFycm95YXZlL2NvbXBvbmVudHMvdXhpL2NvcmUvZ3JpZF9jb250YWluZXInO1xuaW1wb3J0IEdyaWRJdGVtIGZyb20gJ2ptYXJyb3lhdmUvY29tcG9uZW50cy91eGkvY29yZS9ncmlkX2l0ZW0nO1xuaW1wb3J0IEhpZGRlbiBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9IaWRkZW4nO1xuaW1wb3J0IE1vZHVsZXMgZnJvbSAnam1hcnJveWF2ZS9jb25mL2xheW91dC9tb2R1bGVzJztcbmltcG9ydCB3aXRoTW9kdWxlIGZyb20gJ2ptYXJyb3lhdmUvY29tcG9uZW50cy91eGkvY29yZS93aXRoLW1vZHVsZSc7XG5pbXBvcnQgQmxvY2sgZnJvbSAnam1hcnJveWF2ZS9jb21wb25lbnRzL3V4aS9ob21lL2Jsb2NrJztcbmltcG9ydCBNQmxvY2sgZnJvbSAnY29yZS9jb21wb25lbnRzL21vY2t1cC9ibG9jayc7XG5pbXBvcnQgU2VjdGlvbiBmcm9tICdjb3JlL2NvbXBvbmVudHMvbGF5b3V0L3NlY3Rpb24nO1xuaW1wb3J0IExpc3QgZnJvbSAnam1hcnJveWF2ZS9jb21wb25lbnRzL3V4aS9ibG9nL2xpc3QnO1xuXG5jbGFzcyBQYWdlQ29tcG9uZW50IGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcblx0Z2V0TW9kdWxlcygpe1xuXHRcdHZhciBkYXRhID0gdGhpcy5wcm9wcy5kYXRhO1x0XHRcblxuXHRcdHJldHVybiBbXG5cdFx0XHR7dGl0bGU6IFwiVGVzdFwiLCBcdFx0Y29udHJvbDogKE1vZHVsZXMuVHJhbnNmZXJzKSA/IDxkaXY+dGVzdDwvZGl2PiA6IG51bGx9LFxuXHRcdF07XG5cdH1cblxuXHRyZW5kZXIoKXtcblx0XHRjb25zdCBkYXRhID0gdGhpcy5wcm9wcy5kYXRhO1x0XHRcblx0XHRjb25zdCB0aXRsZSA9IHRoaXMucHJvcHMudGl0bGU7XG5cdFx0Y29uc3QgbW9kcyA9IHRoaXMuZ2V0TW9kdWxlcygpO1xuXHRcdGNvbnN0IG1vZFRlc3QgPSBtb2RzWzBdO1xuXG5cdFx0Y29uc3QgcG9zdHMgPSAoZGF0YSAhPSBudWxsKSA/IGRhdGEucG9zdHMgOiBudWxsO1xuXHRcdHJldHVybiAoXG5cdFx0XHQ8R3JpZENvbnRhaW5lcj5cblx0XHRcdFx0PEdyaWRJdGVtPlxuXHRcdFx0XHRcdDxHcmlkQ29udGFpbmVyPlxuXHRcdFx0XHRcdFx0PEdyaWRJdGVtIHhzPXsxfSBtZD17Mn0+XG5cdFx0XHRcdFx0XHQ8L0dyaWRJdGVtPlxuXHRcdFx0XHRcdFx0PEdyaWRJdGVtICB4cz17MTB9IG1kPXs4fT5cblx0XHRcdFx0XHRcdFx0PEdyaWRDb250YWluZXI+XG5cdFx0XHRcdFx0XHRcdFx0PEdyaWRJdGVtPlxuXHRcdFx0XHRcdFx0XHRcdFx0PGgxPnt0aXRsZX08L2gxPlxuXHRcdFx0XHRcdFx0XHRcdDwvR3JpZEl0ZW0+XHRcdFx0XG5cdFx0XHRcdFx0XHRcdFx0PEdyaWRJdGVtPlxuXHRcdFx0XHRcdFx0XHRcdFx0PExpc3QgYXJlYT17dGl0bGV9IGRhdGE9e3Bvc3RzfS8+XG5cdFx0XHRcdFx0XHRcdFx0PC9HcmlkSXRlbT4gIFxuXHRcdFx0XHRcdFx0XHQ8L0dyaWRDb250YWluZXI+XG5cdFx0XHRcdFx0XHQ8L0dyaWRJdGVtPlx0XHRcdFxuXHRcdFx0XHRcdFx0PEdyaWRJdGVtIHhzPXsxfSBtZD17Mn0+XG5cdFx0XHRcdFx0XHQ8L0dyaWRJdGVtPlxuXHRcdFx0XHRcdDwvR3JpZENvbnRhaW5lcj5cblx0XHRcdFx0PC9HcmlkSXRlbT5cblx0XHRcdDwvR3JpZENvbnRhaW5lcj5cblx0XHQpXG5cdH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgd2l0aE1vZHVsZShQYWdlQ29tcG9uZW50KTtcbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgQ29tcG9uZW50IGZyb20gJ2NvcmUvY29tcG9uZW50cy9jb21wb25lbnQnO1xuaW1wb3J0IFBvc3RMaW5rIGZyb20gXCJqbWFycm95YXZlL2NvbXBvbmVudHMvZGF0YS9wb3N0X2xpbmtcIjtcbmltcG9ydCBHcmlkQ29udGFpbmVyIGZyb20gJ2ptYXJyb3lhdmUvY29tcG9uZW50cy91eGkvY29yZS9ncmlkX2NvbnRhaW5lcic7XG5pbXBvcnQgR3JpZEl0ZW0gZnJvbSAnam1hcnJveWF2ZS9jb21wb25lbnRzL3V4aS9jb3JlL2dyaWRfaXRlbSc7XG5pbXBvcnQgRGF0ZSBmcm9tICdjb3JlL2NvbXBvbmVudHMvZGF0ZSc7XG5cbmltcG9ydCBcIi4vbGlzdC5zY3NzXCI7XG5cbmZ1bmN0aW9uIFBvc3Qoe2RhdGF9KXtcblx0cmV0dXJuIChcblx0XHQ8R3JpZEl0ZW0geHM9ezEyfSAgY2xhc3NOYW1lPSdwb3N0Jz5cblx0XHRcdDxkaXYgY2xhc3NOYW1lPSdkYXRlJz48RGF0ZSB2YWx1ZT17ZGF0YS5kYXRlfS8+PC9kaXY+XG5cdFx0XHQ8ZGl2IGNsYXNzTmFtZT0ndGl0bGUnPjxQb3N0TGluayBzbHVnPXtkYXRhLnNsdWd9PntkYXRhLnRpdGxlfTwvUG9zdExpbms+PC9kaXY+XG5cdFx0XHQ8ZGl2PjxzcGFuIGNsYXNzTmFtZT0nY2F0ZWdvcnknPntkYXRhLmNhdGVnb3J5fTwvc3Bhbj4gPHNwYW4gY2xhc3NOYW1lPSd0YWdzJz50YWdzOiB7ZGF0YS50YWdzfTwvc3Bhbj48L2Rpdj5cblx0XHRcdDxkaXYgY2xhc3NOYW1lPSdleGNlcnB0Jz57ZGF0YS5leGNlcnB0fTwvZGl2PlxuXHRcdDwvR3JpZEl0ZW0+XG5cdClcbn1cblxuY2xhc3MgTGlzdCBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG5cdGNvbnN0cnVjdG9yKHByb3BzLGNvbnRleHQpIHtcblx0XHRzdXBlcihwcm9wcyxjb250ZXh0KTtcblx0XHR0aGlzLmFwaSA9IHdpbmRvdy5fX2FwaTtcblx0fVxuXG5cdGNvbXBvbmVudERpZE1vdW50KCl7XG5cdH1cblxuXHRyZW5kZXIoKXtcblx0XHRjb25zdCBkYXRhID0gdGhpcy5wcm9wcy5kYXRhO1xuXHRcdGNvbnN0IGFyZWEgPSB0aGlzLnByb3BzLmFyZWE7XG5cdFx0dmFyIGtleSA9IDA7XG5cdFx0cmV0dXJuIChcblx0XHRcdDxHcmlkQ29udGFpbmVyIGNsYXNzTmFtZT0nbW9kLWJsb2ctbGlzdCc+XG5cdFx0XHRcdHtkYXRhLm1hcCgoaXRlbSk9PlxuXHRcdFx0XHRcdDxQb3N0IGRhdGE9e2l0ZW19IGtleT17a2V5Kyt9Lz5cblx0XHRcdFx0KX1cblx0XHRcdDwvR3JpZENvbnRhaW5lcj5cblx0XHQpO1xuXHR9XG59XG5cbmV4cG9ydCBkZWZhdWx0IENvbXBvbmVudChMaXN0KTsiLCJcbnZhciBjb250ZW50ID0gcmVxdWlyZShcIiEhLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vZnJhbWV3b3Jrcy93ZWJhcHBzL3N0YXJ0dXAvbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvaW5kZXguanMhLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vZnJhbWV3b3Jrcy93ZWJhcHBzL3N0YXJ0dXAvbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2xpYi9sb2FkZXIuanMhLi9saXN0LnNjc3NcIik7XG5cbmlmKHR5cGVvZiBjb250ZW50ID09PSAnc3RyaW5nJykgY29udGVudCA9IFtbbW9kdWxlLmlkLCBjb250ZW50LCAnJ11dO1xuXG52YXIgdHJhbnNmb3JtO1xudmFyIGluc2VydEludG87XG5cblxuXG52YXIgb3B0aW9ucyA9IHtcImhtclwiOnRydWV9XG5cbm9wdGlvbnMudHJhbnNmb3JtID0gdHJhbnNmb3JtXG5vcHRpb25zLmluc2VydEludG8gPSB1bmRlZmluZWQ7XG5cbnZhciB1cGRhdGUgPSByZXF1aXJlKFwiIS4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL2ZyYW1ld29ya3Mvd2ViYXBwcy9zdGFydHVwL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvbGliL2FkZFN0eWxlcy5qc1wiKShjb250ZW50LCBvcHRpb25zKTtcblxuaWYoY29udGVudC5sb2NhbHMpIG1vZHVsZS5leHBvcnRzID0gY29udGVudC5sb2NhbHM7XG5cbmlmKG1vZHVsZS5ob3QpIHtcblx0bW9kdWxlLmhvdC5hY2NlcHQoXCIhIS4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL2ZyYW1ld29ya3Mvd2ViYXBwcy9zdGFydHVwL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2luZGV4LmpzIS4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL2ZyYW1ld29ya3Mvd2ViYXBwcy9zdGFydHVwL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9saWIvbG9hZGVyLmpzIS4vbGlzdC5zY3NzXCIsIGZ1bmN0aW9uKCkge1xuXHRcdHZhciBuZXdDb250ZW50ID0gcmVxdWlyZShcIiEhLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vZnJhbWV3b3Jrcy93ZWJhcHBzL3N0YXJ0dXAvbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvaW5kZXguanMhLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vZnJhbWV3b3Jrcy93ZWJhcHBzL3N0YXJ0dXAvbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2xpYi9sb2FkZXIuanMhLi9saXN0LnNjc3NcIik7XG5cblx0XHRpZih0eXBlb2YgbmV3Q29udGVudCA9PT0gJ3N0cmluZycpIG5ld0NvbnRlbnQgPSBbW21vZHVsZS5pZCwgbmV3Q29udGVudCwgJyddXTtcblxuXHRcdHZhciBsb2NhbHMgPSAoZnVuY3Rpb24oYSwgYikge1xuXHRcdFx0dmFyIGtleSwgaWR4ID0gMDtcblxuXHRcdFx0Zm9yKGtleSBpbiBhKSB7XG5cdFx0XHRcdGlmKCFiIHx8IGFba2V5XSAhPT0gYltrZXldKSByZXR1cm4gZmFsc2U7XG5cdFx0XHRcdGlkeCsrO1xuXHRcdFx0fVxuXG5cdFx0XHRmb3Ioa2V5IGluIGIpIGlkeC0tO1xuXG5cdFx0XHRyZXR1cm4gaWR4ID09PSAwO1xuXHRcdH0oY29udGVudC5sb2NhbHMsIG5ld0NvbnRlbnQubG9jYWxzKSk7XG5cblx0XHRpZighbG9jYWxzKSB0aHJvdyBuZXcgRXJyb3IoJ0Fib3J0aW5nIENTUyBITVIgZHVlIHRvIGNoYW5nZWQgY3NzLW1vZHVsZXMgbG9jYWxzLicpO1xuXG5cdFx0dXBkYXRlKG5ld0NvbnRlbnQpO1xuXHR9KTtcblxuXHRtb2R1bGUuaG90LmRpc3Bvc2UoZnVuY3Rpb24oKSB7IHVwZGF0ZSgpOyB9KTtcbn0iLCJjbGFzcyBNb2R1bGVzIHtcbn1cblxuXG5Nb2R1bGVzLkdhbWVzID0gZmFsc2U7XG5Nb2R1bGVzLlN0YW5kaW5ncyA9IGZhbHNlO1xuTW9kdWxlcy5Qb3N0U2Vhc29uID0gZmFsc2U7XG5Nb2R1bGVzLlRyYW5zZmVycyA9IHRydWU7XG5cbmV4cG9ydCBkZWZhdWx0IChNb2R1bGVzKTsiXSwic291cmNlUm9vdCI6IiJ9