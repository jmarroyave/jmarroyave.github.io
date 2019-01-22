(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[3],{

/***/ "../../../../../frameworks/webapps/startup/node_modules/css-loader/index.js!../../../../../frameworks/webapps/startup/node_modules/sass-loader/lib/loader.js!./src/jmarroyave/components/uxi/kb/android/content.scss":
/*!******************************************************************************************************************************************************************************************************************!*\
  !*** /media/jm/labs/frameworks/webapps/startup/node_modules/css-loader!/media/jm/labs/frameworks/webapps/startup/node_modules/sass-loader/lib/loader.js!./src/jmarroyave/components/uxi/kb/android/content.scss ***!
  \******************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../../../../../../../../frameworks/webapps/startup/node_modules/css-loader/lib/css-base.js */ "../../../../../frameworks/webapps/startup/node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".mod-kb-android {\n  font-size: 1.3em;\n  line-height: 1.8em; }\n\n.mod-kb-android .date {\n  font-size: 0.8em;\n  line-height: 0.9em;\n  margin-top: -10px;\n  font-weight: bold; }\n\n.mod-kb-android .excerpt {\n  font-size: 1em;\n  line-height: 1.1em;\n  font-style: italic; }\n\n.mod-kb-android .categories {\n  padding-bottom: 20px; }\n\n.mod-kb-android h1 {\n  font-size: 1.2em;\n  line-height: 1.0em; }\n\n.mod-kb-android .category {\n  font-size: 0.75em;\n  line-height: 1.0em;\n  padding-right: 20px;\n  color: #555;\n  cursor: pointer; }\n\n.mod-kb-android .category.active {\n  font-weight: bold;\n  color: black; }\n\n.mod-kb-android .item {\n  padding-bottom: 1em; }\n\n.mod-kb-android .item .subcat {\n  font-size: 0.6em; }\n\n.mod-kb-android .item .title {\n  font-size: 1em;\n  line-height: 1em; }\n\n.mod-kb-android .item .title .refs {\n  font-size: 0.6em; }\n\n.mod-kb-android .item .description {\n  font-size: 0.75em;\n  line-height: 1.25em; }\n\n.mod-kb-android .item .links {\n  padding: 0px;\n  line-height: 0.8em; }\n\n.mod-kb-android .item span.link {\n  padding: 0px;\n  font-size: 0.75em; }\n\n.mod-kb-android .item .images {\n  padding-top: 10px;\n  padding-left: 20px; }\n\n.mod-kb-android .page_index .page {\n  color: #444;\n  cursor: pointer;\n  padding-right: 10px;\n  font-size: 1em; }\n\n.mod-kb-android .page_index .page.active {\n  color: black;\n  font-weight: bold; }\n\n.mod-kb-android .footer {\n  font-size: 0.75em; }\n", ""]);

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

/***/ "./src/jmarroyave/components/uxi/kb/android/content.js":
/*!*************************************************************!*\
  !*** ./src/jmarroyave/components/uxi/kb/android/content.js ***!
  \*************************************************************/
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
/* harmony import */ var _content_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./content.scss */ "./src/jmarroyave/components/uxi/kb/android/content.scss");
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
		_this.state = {
			category: 'Dev & Build',
			page: 1
		};

		_this.itemsPerPage = 25;
		return _this;
	}

	_createClass(Content, [{
		key: 'componentDidMount',
		value: function componentDidMount() {
			this.fetchData(this.state.category);
		}
	}, {
		key: 'fetchData',
		value: function fetchData(cat) {
			this.api.getKBAndroid(cat);
		}
	}, {
		key: 'setCategory',
		value: function setCategory(cat) {
			this.setState({ category: cat, page: 1 });
			this.fetchData(cat);
		}
	}, {
		key: 'setPage',
		value: function setPage(i) {
			this.setState({ page: i });
			window.scrollTo(0, 0);
		}
	}, {
		key: 'render',
		value: function render() {
			var _this2 = this;

			var data = this.props.data.records ? this.props.data.records.records : [];
			var categories = this.props.data.categories ? this.props.data.categories.records : [];
			var key = 0;

			var totPages = Math.ceil(data.length / this.itemsPerPage);
			var pages = [];for (var i = 1; i <= totPages; i++) {
				pages.push(i);
			}

			var pageData = data.slice(this.itemsPerPage * (this.state.page - 1), this.itemsPerPage * this.state.page);

			return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
				jmarroyave_components_uxi_core_grid_container__WEBPACK_IMPORTED_MODULE_3__["default"],
				{ className: 'mod-kb-android', ref: function ref(el) {
						return _this2.container = el;
					} },
				react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
					jmarroyave_components_uxi_core_grid_item__WEBPACK_IMPORTED_MODULE_4__["default"],
					null,
					react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
						'div',
						null,
						react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(core_components_date__WEBPACK_IMPORTED_MODULE_5__["default"], { value: '01/05/2018', className: 'date' })
					),
					react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
						'div',
						{ className: 'excerpt' },
						'Recopilaci\xF3n de librer\xEDas para utilizar en Android ',
						react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
							'a',
							{ href: this.api.data_kb_android },
							'descargar'
						)
					)
				),
				react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
					jmarroyave_components_uxi_core_grid_item__WEBPACK_IMPORTED_MODULE_4__["default"],
					null,
					react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement('br', null),
					react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
						'h1',
						null,
						'Categor\xEDas'
					),
					react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
						jmarroyave_components_uxi_core_grid_container__WEBPACK_IMPORTED_MODULE_3__["default"],
						{ className: 'categories', direction: 'row' },
						categories.map(function (item) {
							return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
								jmarroyave_components_uxi_core_grid_item__WEBPACK_IMPORTED_MODULE_4__["default"],
								{ key: key++, xs: 4, md: 2, lg: 1 },
								react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
									'span',
									{ className: 'category ' + (item == _this2.state.category ? "active" : ""), onClick: _this2.setCategory.bind(_this2, item) },
									item
								)
							);
						})
					),
					react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement('hr', null)
				),
				react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
					jmarroyave_components_uxi_core_grid_item__WEBPACK_IMPORTED_MODULE_4__["default"],
					null,
					pageData.length == 0 && react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
						'div',
						null,
						'Loading'
					),
					pageData.length > 0 && pageData.map(function (item) {
						return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
							'div',
							{ key: key++, className: 'item' },
							react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
								'div',
								{ className: 'subcat' },
								item.cat2
							),
							react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
								'div',
								{ className: 'title' },
								item.title,
								' ',
								react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
									'span',
									{ className: 'refs' },
									'[refs:',
									item.count,
									']'
								)
							),
							item.desc && item.desc != "" && react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
								'div',
								{ className: 'description' },
								item.desc
							),
							react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
								'div',
								{ className: 'links' },
								react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
									'span',
									{ className: 'link' },
									react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
										'a',
										{ href: item.repo },
										'github'
									),
									' '
								),
								item.homepage && item.homepage != "" && react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
									'span',
									{ className: 'link' },
									react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
										'a',
										{ href: item.homepage },
										'homepage'
									),
									' '
								),
								item.docs && item.docs != "" && react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
									'span',
									{ className: 'link' },
									react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
										'a',
										{ href: item.docs },
										'docs'
									),
									' '
								),
								item.demo && item.demo != "" && react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
									'span',
									{ className: 'link' },
									react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
										'a',
										{ href: item.demo },
										'demo'
									),
									' '
								),
								item.masterpiece && item.masterpiece != "" && react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
									'span',
									{ className: 'link' },
									react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
										'a',
										{ href: item.masterpiece },
										'master piece'
									),
									' '
								)
							),
							react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
								'div',
								{ className: 'links' },
								item.license && item.license != "" && react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
									'span',
									{ className: 'subcat' },
									'license: ',
									item.license
								)
							),
							react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
								'div',
								{ className: 'images' },
								item.imgs.map(function (itemImg) {
									return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement('img', { key: key++, height: '200px', src: itemImg });
								})
							)
						);
					}),
					react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
						'div',
						{ className: 'page_index' },
						pages.map(function (item) {
							return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
								'span',
								{ key: key++, onClick: _this2.setPage.bind(_this2, item), className: 'page ' + (_this2.state.page == item ? 'active' : '') },
								item,
								' '
							);
						})
					)
				),
				react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
					jmarroyave_components_uxi_core_grid_item__WEBPACK_IMPORTED_MODULE_4__["default"],
					{ className: 'footer' },
					react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement('hr', null),
					'importados desde:',
					react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
						'ul',
						null,
						react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
							'li',
							null,
							react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
								'a',
								{ href: 'https://github.com/wasabeef/awesome-android-ui' },
								'wasabeef/awesome-android-ui'
							)
						),
						react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
							'li',
							null,
							react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
								'a',
								{ href: 'https://github.com/wasabeef/awesome-android-libraries' },
								'wasabeef/awesome-android-libraries'
							)
						),
						react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
							'li',
							null,
							react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
								'a',
								{ href: 'https://github.com/Trinea/android-open-project' },
								'Trinea/android-open-project'
							)
						),
						react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
							'li',
							null,
							react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
								'a',
								{ href: 'https://github.com/PhilJay/AndroidElementals' },
								'PhilJay/AndroidElementals'
							)
						),
						react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
							'li',
							null,
							react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
								'a',
								{ href: 'https://github.com/thanhtoan1196/awesome-android-ui' },
								'thanhtoan1196/awesome-android-ui'
							)
						),
						react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
							'li',
							null,
							react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
								'a',
								{ href: 'https://github.com/thanhtoan1196/awesome-android' },
								'thanhtoan1196/awesome-android'
							),
							'*'
						),
						react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
							'li',
							null,
							react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
								'a',
								{ href: 'https://github.com/snowdream/awesome-android' },
								'snowdream/awesome-android'
							),
							'*'
						),
						react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
							'li',
							null,
							react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
								'a',
								{ href: 'https://github.com/thanhtoan1196/awesome-android-libraries' },
								'thanhtoan1196/awesome-android-libraries'
							),
							'*'
						),
						react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
							'li',
							null,
							react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
								'a',
								{ href: 'https://github.com/lightSky/Awesome-MaterialDesign' },
								'lightSky/Awesome-MaterialDesign'
							),
							'*'
						),
						react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
							'li',
							null,
							react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
								'a',
								{ href: 'https://github.com/codepath/android_guides/wiki/Must-Have-Libraries' },
								'codepath/android_guides'
							),
							'*'
						),
						react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
							'li',
							null,
							react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
								'a',
								{ href: 'https://github.com/lightSky/Awesome-MaterialDesign' },
								'lightSky/Awesome-MaterialDesign'
							),
							'*'
						)
					)
				)
			);
		}
	}]);

	return Content;
}(react__WEBPACK_IMPORTED_MODULE_0___default.a.Component);

/* harmony default export */ __webpack_exports__["default"] = (Object(core_components_component__WEBPACK_IMPORTED_MODULE_1__["default"])(Content));

/***/ }),

/***/ "./src/jmarroyave/components/uxi/kb/android/content.scss":
/*!***************************************************************!*\
  !*** ./src/jmarroyave/components/uxi/kb/android/content.scss ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../../../../../../../../frameworks/webapps/startup/node_modules/css-loader!../../../../../../../../../../../frameworks/webapps/startup/node_modules/sass-loader/lib/loader.js!./content.scss */ "../../../../../frameworks/webapps/startup/node_modules/css-loader/index.js!../../../../../frameworks/webapps/startup/node_modules/sass-loader/lib/loader.js!./src/jmarroyave/components/uxi/kb/android/content.scss");

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

/***/ "./src/jmarroyave/components/uxi/kb/android/layout/layout-proxy.js":
/*!*************************************************************************!*\
  !*** ./src/jmarroyave/components/uxi/kb/android/layout/layout-proxy.js ***!
  \*************************************************************************/
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
/* harmony import */ var jmarroyave_components_uxi_kb_android_layout_lg_page__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! jmarroyave/components/uxi/kb/android/layout/lg/page */ "./src/jmarroyave/components/uxi/kb/android/layout/lg/page.js");
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
			return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
				'div',
				{ style: { width: '100%' } },
				react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(jmarroyave_components_uxi_kb_android_layout_lg_page__WEBPACK_IMPORTED_MODULE_4__["default"], { data: data })
			);
		}
	}]);

	return PageComponent;
}(react__WEBPACK_IMPORTED_MODULE_0___default.a.Component);

/* harmony default export */ __webpack_exports__["default"] = (Object(jmarroyave_components_uxi_core_with_module__WEBPACK_IMPORTED_MODULE_3__["default"])(PageComponent));

/***/ }),

/***/ "./src/jmarroyave/components/uxi/kb/android/layout/lg/page.js":
/*!********************************************************************!*\
  !*** ./src/jmarroyave/components/uxi/kb/android/layout/lg/page.js ***!
  \********************************************************************/
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
/* harmony import */ var jmarroyave_components_data_blog_link__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! jmarroyave/components/data/blog_link */ "./src/jmarroyave/components/data/blog_link.js");
/* harmony import */ var jmarroyave_components_uxi_kb_android_content__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! jmarroyave/components/uxi/kb/android/content */ "./src/jmarroyave/components/uxi/kb/android/content.js");
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
			var mods = this.getModules();
			var modTest = mods[0];
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
										react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
											jmarroyave_components_data_blog_link__WEBPACK_IMPORTED_MODULE_10__["default"],
											{ slug: 'kb' },
											'kb'
										),
										' > android'
									)
								),
								react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
									jmarroyave_components_uxi_core_grid_item__WEBPACK_IMPORTED_MODULE_3__["default"],
									null,
									react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(jmarroyave_components_uxi_kb_android_content__WEBPACK_IMPORTED_MODULE_11__["default"], { data: data })
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvam1hcnJveWF2ZS9jb21wb25lbnRzL3V4aS9rYi9hbmRyb2lkL2NvbnRlbnQuc2NzcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29yZS9jb21wb25lbnRzL2RhdGUuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvcmUvY29tcG9uZW50cy9sYXlvdXQvc2VjdGlvbi5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvam1hcnJveWF2ZS9jb21wb25lbnRzL2RhdGEvYmxvZ19saW5rLmpzIiwid2VicGFjazovLy8uL3NyYy9qbWFycm95YXZlL2NvbXBvbmVudHMvdXhpL2tiL2FuZHJvaWQvY29udGVudC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvam1hcnJveWF2ZS9jb21wb25lbnRzL3V4aS9rYi9hbmRyb2lkL2NvbnRlbnQuc2Nzcz9jNDE5Iiwid2VicGFjazovLy8uL3NyYy9qbWFycm95YXZlL2NvbXBvbmVudHMvdXhpL2tiL2FuZHJvaWQvbGF5b3V0L2xheW91dC1wcm94eS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvam1hcnJveWF2ZS9jb21wb25lbnRzL3V4aS9rYi9hbmRyb2lkL2xheW91dC9sZy9wYWdlLmpzIiwid2VicGFjazovLy8uL3NyYy9qbWFycm95YXZlL2NvbmYvbGF5b3V0L21vZHVsZXMuanMiXSwibmFtZXMiOlsiVUlEYXRlIiwic3RhdGUiLCJkZWZhdWx0cyIsImNsYXNzTmFtZSIsIlRpbWVBZ28iLCJhZGRMb2NhbGUiLCJlbiIsInRpbWVBZ28iLCJkYXRlIiwic3RyIiwicHJvcHMiLCJ2YWx1ZSIsImxlbmd0aCIsIkRhdGUiLCJmb3JtYXQiLCJleCIsIlVJQ29tcG9uZW50Iiwic3R5bGVzIiwicm9vdCIsIndpZHRoIiwiYm94U2l6aW5nIiwicGFkZGluZyIsIkxheW91dFNlY3Rpb24iLCJjbGFzc2VzIiwiY29sb3IiLCJiYWNrZ3JvdW5kQ29sb3IiLCJjaGlsZHJlbiIsIlJlYWN0IiwiQ29tcG9uZW50Iiwid2l0aFN0eWxlcyIsIkJsb2dMaW5rQ29tcG9uZW50Iiwic2x1ZyIsIndpdGhNb2R1bGUiLCJDb250ZW50IiwiY29udGV4dCIsImFwaSIsIndpbmRvdyIsIl9fYXBpIiwiY2F0ZWdvcnkiLCJwYWdlIiwiaXRlbXNQZXJQYWdlIiwiZmV0Y2hEYXRhIiwiY2F0IiwiZ2V0S0JBbmRyb2lkIiwic2V0U3RhdGUiLCJpIiwic2Nyb2xsVG8iLCJkYXRhIiwicmVjb3JkcyIsImNhdGVnb3JpZXMiLCJrZXkiLCJ0b3RQYWdlcyIsIk1hdGgiLCJjZWlsIiwicGFnZXMiLCJwdXNoIiwicGFnZURhdGEiLCJzbGljZSIsImNvbnRhaW5lciIsImVsIiwiZGF0YV9rYl9hbmRyb2lkIiwibWFwIiwiaXRlbSIsInNldENhdGVnb3J5IiwiYmluZCIsImNhdDIiLCJ0aXRsZSIsImNvdW50IiwiZGVzYyIsInJlcG8iLCJob21lcGFnZSIsImRvY3MiLCJkZW1vIiwibWFzdGVycGllY2UiLCJsaWNlbnNlIiwiaW1ncyIsIml0ZW1JbWciLCJzZXRQYWdlIiwiUGFnZUNvbXBvbmVudCIsInJlbmRlckRlZmF1bHQiLCJjb250cm9sIiwiTW9kdWxlcyIsIlRyYW5zZmVycyIsIm1vZHMiLCJnZXRNb2R1bGVzIiwibW9kVGVzdCIsIkdhbWVzIiwiU3RhbmRpbmdzIiwiUG9zdFNlYXNvbiJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQUEsMkJBQTJCLG1CQUFPLENBQUMsOExBQXFHO0FBQ3hJOzs7QUFHQTtBQUNBLGNBQWMsUUFBUyxvQkFBb0IscUJBQXFCLHVCQUF1QixFQUFFLDJCQUEyQixxQkFBcUIsdUJBQXVCLHNCQUFzQixzQkFBc0IsRUFBRSw4QkFBOEIsbUJBQW1CLHVCQUF1Qix1QkFBdUIsRUFBRSxpQ0FBaUMseUJBQXlCLEVBQUUsd0JBQXdCLHFCQUFxQix1QkFBdUIsRUFBRSwrQkFBK0Isc0JBQXNCLHVCQUF1Qix3QkFBd0IsZ0JBQWdCLG9CQUFvQixFQUFFLHNDQUFzQyxzQkFBc0IsaUJBQWlCLEVBQUUsMkJBQTJCLHdCQUF3QixFQUFFLG1DQUFtQyxx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QVFPLFVBQVIsR0FBcUIsS0FBckI7QUFDQVAsUUFBUUMsU0FBUixHQUFvQixJQUFwQjs7QUFFZ0JELHNFQUFoQixFIiwiZmlsZSI6IjMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnRzID0gbW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vZnJhbWV3b3Jrcy93ZWJhcHBzL3N0YXJ0dXAvbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvbGliL2Nzcy1iYXNlLmpzXCIpKGZhbHNlKTtcbi8vIGltcG9ydHNcblxuXG4vLyBtb2R1bGVcbmV4cG9ydHMucHVzaChbbW9kdWxlLmlkLCBcIi5tb2Qta2ItYW5kcm9pZCB7XFxuICBmb250LXNpemU6IDEuM2VtO1xcbiAgbGluZS1oZWlnaHQ6IDEuOGVtOyB9XFxuXFxuLm1vZC1rYi1hbmRyb2lkIC5kYXRlIHtcXG4gIGZvbnQtc2l6ZTogMC44ZW07XFxuICBsaW5lLWhlaWdodDogMC45ZW07XFxuICBtYXJnaW4tdG9wOiAtMTBweDtcXG4gIGZvbnQtd2VpZ2h0OiBib2xkOyB9XFxuXFxuLm1vZC1rYi1hbmRyb2lkIC5leGNlcnB0IHtcXG4gIGZvbnQtc2l6ZTogMWVtO1xcbiAgbGluZS1oZWlnaHQ6IDEuMWVtO1xcbiAgZm9udC1zdHlsZTogaXRhbGljOyB9XFxuXFxuLm1vZC1rYi1hbmRyb2lkIC5jYXRlZ29yaWVzIHtcXG4gIHBhZGRpbmctYm90dG9tOiAyMHB4OyB9XFxuXFxuLm1vZC1rYi1hbmRyb2lkIGgxIHtcXG4gIGZvbnQtc2l6ZTogMS4yZW07XFxuICBsaW5lLWhlaWdodDogMS4wZW07IH1cXG5cXG4ubW9kLWtiLWFuZHJvaWQgLmNhdGVnb3J5IHtcXG4gIGZvbnQtc2l6ZTogMC43NWVtO1xcbiAgbGluZS1oZWlnaHQ6IDEuMGVtO1xcbiAgcGFkZGluZy1yaWdodDogMjBweDtcXG4gIGNvbG9yOiAjNTU1O1xcbiAgY3Vyc29yOiBwb2ludGVyOyB9XFxuXFxuLm1vZC1rYi1hbmRyb2lkIC5jYXRlZ29yeS5hY3RpdmUge1xcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxuICBjb2xvcjogYmxhY2s7IH1cXG5cXG4ubW9kLWtiLWFuZHJvaWQgLml0ZW0ge1xcbiAgcGFkZGluZy1ib3R0b206IDFlbTsgfVxcblxcbi5tb2Qta2ItYW5kcm9pZCAuaXRlbSAuc3ViY2F0IHtcXG4gIGZvbnQtc2l6ZTogMC42ZW07IH1cXG5cXG4ubW9kLWtiLWFuZHJvaWQgLml0ZW0gLnRpdGxlIHtcXG4gIGZvbnQtc2l6ZTogMWVtO1xcbiAgbGluZS1oZWlnaHQ6IDFlbTsgfVxcblxcbi5tb2Qta2ItYW5kcm9pZCAuaXRlbSAudGl0bGUgLnJlZnMge1xcbiAgZm9udC1zaXplOiAwLjZlbTsgfVxcblxcbi5tb2Qta2ItYW5kcm9pZCAuaXRlbSAuZGVzY3JpcHRpb24ge1xcbiAgZm9udC1zaXplOiAwLjc1ZW07XFxuICBsaW5lLWhlaWdodDogMS4yNWVtOyB9XFxuXFxuLm1vZC1rYi1hbmRyb2lkIC5pdGVtIC5saW5rcyB7XFxuICBwYWRkaW5nOiAwcHg7XFxuICBsaW5lLWhlaWdodDogMC44ZW07IH1cXG5cXG4ubW9kLWtiLWFuZHJvaWQgLml0ZW0gc3Bhbi5saW5rIHtcXG4gIHBhZGRpbmc6IDBweDtcXG4gIGZvbnQtc2l6ZTogMC43NWVtOyB9XFxuXFxuLm1vZC1rYi1hbmRyb2lkIC5pdGVtIC5pbWFnZXMge1xcbiAgcGFkZGluZy10b3A6IDEwcHg7XFxuICBwYWRkaW5nLWxlZnQ6IDIwcHg7IH1cXG5cXG4ubW9kLWtiLWFuZHJvaWQgLnBhZ2VfaW5kZXggLnBhZ2Uge1xcbiAgY29sb3I6ICM0NDQ7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxuICBwYWRkaW5nLXJpZ2h0OiAxMHB4O1xcbiAgZm9udC1zaXplOiAxZW07IH1cXG5cXG4ubW9kLWtiLWFuZHJvaWQgLnBhZ2VfaW5kZXggLnBhZ2UuYWN0aXZlIHtcXG4gIGNvbG9yOiBibGFjaztcXG4gIGZvbnQtd2VpZ2h0OiBib2xkOyB9XFxuXFxuLm1vZC1rYi1hbmRyb2lkIC5mb290ZXIge1xcbiAgZm9udC1zaXplOiAwLjc1ZW07IH1cXG5cIiwgXCJcIl0pO1xuXG4vLyBleHBvcnRzXG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IFVJQ29tcG9uZW50IGZyb20gJ2NvcmUvY29tcG9uZW50cy91aV9jb21wb25lbnQnO1xuaW1wb3J0IFRpbWVBZ28gZnJvbSAnamF2YXNjcmlwdC10aW1lLWFnbydcbmltcG9ydCBlbiBmcm9tICdqYXZhc2NyaXB0LXRpbWUtYWdvL2xvY2FsZS9lbidcblxuXG5jbGFzcyBVSURhdGUgZXh0ZW5kcyBVSUNvbXBvbmVudCB7IFxuICBjb25zdHJ1Y3RvcigpIHtcbiAgICBzdXBlcigpO1xuICAgIHRoaXMuc3RhdGUgPSB7XG4gICAgfVxuICB9XG5cbiAgZ2V0RGVmYXVsdHMoKXtcbiAgICBjb25zdCBkZWZhdWx0cyA9IHtcbiAgICAgIGNsYXNzTmFtZSA6ICcnLCAgICAgIFxuICAgIH0gICAgXG4gICAgcmV0dXJuIGRlZmF1bHRzO1xuICB9ICBcbiAgcmVuZGVyKCkge1xuICAgIFRpbWVBZ28uYWRkTG9jYWxlKGVuKVxuICAgIGNvbnN0IHRpbWVBZ28gPSBuZXcgVGltZUFnbygnZW4tVVMnKTtcbiAgICB2YXIgZGF0ZTtcbiAgICB2YXIgc3RyO1xuICAgIHRyeXtcblx0ICAgIGRhdGUgPSAoIXRoaXMucHJvcHMudmFsdWUgfHwgdGhpcy5wcm9wcy52YWx1ZSA9PT0gJycgfHwgdGhpcy5wcm9wcy52YWx1ZS5sZW5ndGggPT09IDApID8gJycgOiAodGhpcy5wcm9wcy52YWx1ZSBpbnN0YW5jZW9mIERhdGUpID8gdGhpcy5wcm9wcy52YWx1ZSA6IG5ldyBEYXRlKHRoaXMucHJvcHMudmFsdWUpO1xuXHQgICAgc3RyID0gKGRhdGUgPT09ICcnKSA/ICcnIDogdGltZUFnby5mb3JtYXQoZGF0ZSwgJ3R3aXR0ZXInKTtcbiAgICB9IGNhdGNoIChleCl7XG4gIFx0XHRzdHIgPSB0aGlzLnByb3BzLnZhbHVlO1xuICAgIH1cbiAgICByZXR1cm4gKFxuICAgICAgPHNwYW4gY2xhc3NOYW1lPXt0aGlzLnN0YXRlLmNsYXNzTmFtZX0+e3N0cn08L3NwYW4+XG4gICAgKTtcbiAgfVxufVxuXG5cbmV4cG9ydCBkZWZhdWx0IFVJRGF0ZTsiLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgd2l0aFN0eWxlcyB9IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL3N0eWxlcyc7XG5cbmNvbnN0IHN0eWxlcyA9IHRoZW1lID0+ICh7XG5cdHJvb3QgOiB7XG5cdFx0d2lkdGg6ICcxMDAlJyxcblx0XHRib3hTaXppbmc6ICdib3JkZXItYm94Jyxcblx0XHRwYWRkaW5nOiAnMTZweCcsXG5cdH0sXG59KTtcbmNsYXNzIExheW91dFNlY3Rpb24gZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQgeyBcbiAgcmVuZGVyKCkge1xuICBcdGNvbnN0IGNsYXNzZXMgPSB0aGlzLnByb3BzLmNsYXNzZXM7XG4gIFx0Ly9jb25zdCBoZWlnaHQgPSAoXCJoZWlnaHRcIiBpbiB0aGlzLnByb3BzKSA/IHRoaXMucHJvcHMuaGVpZ2h0IDogJzMwcHgnO1xuICBcdGNvbnN0IGNvbG9yID0gKFwiY29sb3JcIiBpbiB0aGlzLnByb3BzKSA/IHRoaXMucHJvcHMuY29sb3IgOiAnd2hpdGUnO1xuICAgIHJldHVybiAoXG4gICAgICA8ZGl2IGNsYXNzTmFtZT17Y2xhc3Nlcy5yb290fSBzdHlsZT17e2JhY2tncm91bmRDb2xvcjogY29sb3J9fT5cbiAgICAgIFx0e3RoaXMucHJvcHMuY2hpbGRyZW59XG4gICAgICA8L2Rpdj5cbiAgICApO1xuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IHdpdGhTdHlsZXMoc3R5bGVzKShMYXlvdXRTZWN0aW9uKTsiLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgTGluayB9IGZyb20gJ3JlYWN0LXJvdXRlcic7XG5pbXBvcnQgd2l0aE1vZHVsZSBmcm9tICdqbWFycm95YXZlL2NvbXBvbmVudHMvdXhpL2NvcmUvd2l0aC1tb2R1bGUnO1xuXG5jbGFzcyBCbG9nTGlua0NvbXBvbmVudCBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG5cdHJlbmRlcigpe1xuXHRcdGNvbnN0IHNsdWcgPSB0aGlzLnByb3BzLnNsdWc7XG5cdFx0cmV0dXJuIChcblx0XHRcdDxMaW5rIHRvPXtgLyR7c2x1Z31gfT5cblx0XHRcdFx0e3RoaXMucHJvcHMuY2hpbGRyZW59XG5cdFx0XHQ8L0xpbms+XG5cdFx0KTtcblx0fVxufVxuXG5leHBvcnQgZGVmYXVsdCB3aXRoTW9kdWxlKEJsb2dMaW5rQ29tcG9uZW50KTtcbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgQ29tcG9uZW50IGZyb20gJ2NvcmUvY29tcG9uZW50cy9jb21wb25lbnQnO1xuaW1wb3J0IFBvc3RMaW5rIGZyb20gXCJqbWFycm95YXZlL2NvbXBvbmVudHMvZGF0YS9wb3N0X2xpbmtcIjtcbmltcG9ydCBHcmlkQ29udGFpbmVyIGZyb20gJ2ptYXJyb3lhdmUvY29tcG9uZW50cy91eGkvY29yZS9ncmlkX2NvbnRhaW5lcic7XG5pbXBvcnQgR3JpZEl0ZW0gZnJvbSAnam1hcnJveWF2ZS9jb21wb25lbnRzL3V4aS9jb3JlL2dyaWRfaXRlbSc7XG5pbXBvcnQgRGF0ZSBmcm9tICdjb3JlL2NvbXBvbmVudHMvZGF0ZSc7XG5cbmltcG9ydCAnLi9jb250ZW50LnNjc3MnO1xuXG5jbGFzcyBDb250ZW50IGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcblx0Y29uc3RydWN0b3IocHJvcHMsY29udGV4dCkge1xuXHRcdHN1cGVyKHByb3BzLGNvbnRleHQpO1xuXHRcdHRoaXMuYXBpID0gd2luZG93Ll9fYXBpO1xuXHRcdHRoaXMuc3RhdGUgPSB7XG5cdFx0XHRjYXRlZ29yeTogJ0RldiAmIEJ1aWxkJyxcblx0XHRcdHBhZ2U6IDEsXG5cdFx0fVxuXG5cdFx0dGhpcy5pdGVtc1BlclBhZ2UgPSAyNTtcblx0fVxuXG5cdGNvbXBvbmVudERpZE1vdW50KCl7XG5cdFx0dGhpcy5mZXRjaERhdGEodGhpcy5zdGF0ZS5jYXRlZ29yeSk7XG5cdH1cblxuXHRmZXRjaERhdGEoY2F0KXtcblx0XHR0aGlzLmFwaS5nZXRLQkFuZHJvaWQoY2F0KTtcdFx0XG5cdH1cblxuXHRzZXRDYXRlZ29yeShjYXQpe1xuXHRcdHRoaXMuc2V0U3RhdGUoe2NhdGVnb3J5OiBjYXQsIHBhZ2U6IDF9KTtcblx0XHR0aGlzLmZldGNoRGF0YShjYXQpO1xuXHR9XG5cblx0c2V0UGFnZShpKXtcblx0XHR0aGlzLnNldFN0YXRlKHtwYWdlOiBpfSk7XG5cdFx0d2luZG93LnNjcm9sbFRvKDAsMCk7XG5cdH1cblxuXHRyZW5kZXIoKXtcblx0XHR2YXIgZGF0YSA9ICh0aGlzLnByb3BzLmRhdGEucmVjb3JkcykgPyB0aGlzLnByb3BzLmRhdGEucmVjb3Jkcy5yZWNvcmRzIDogW107XG5cdFx0Y29uc3QgY2F0ZWdvcmllcyA9ICh0aGlzLnByb3BzLmRhdGEuY2F0ZWdvcmllcykgPyB0aGlzLnByb3BzLmRhdGEuY2F0ZWdvcmllcy5yZWNvcmRzIDogW107XG5cdFx0dmFyIGtleSA9IDA7XG5cblx0XHRjb25zdCB0b3RQYWdlcyA9IE1hdGguY2VpbChkYXRhLmxlbmd0aCAvIHRoaXMuaXRlbXNQZXJQYWdlKTtcblx0XHR2YXIgcGFnZXMgPSBbXTsgZm9yKHZhciBpID0gMTsgaTw9dG90UGFnZXM7aSsrKXtwYWdlcy5wdXNoKGkpfVxuXG5cdFx0Y29uc3QgcGFnZURhdGEgPSBkYXRhLnNsaWNlKCh0aGlzLml0ZW1zUGVyUGFnZSAqICh0aGlzLnN0YXRlLnBhZ2UgLSAxKSksICh0aGlzLml0ZW1zUGVyUGFnZSAqIHRoaXMuc3RhdGUucGFnZSkpO1xuXG5cdFx0cmV0dXJuIChcblx0XHRcdDxHcmlkQ29udGFpbmVyIGNsYXNzTmFtZT0nbW9kLWtiLWFuZHJvaWQnIHJlZj17IGVsID0+IHRoaXMuY29udGFpbmVyID0gZWx9PlxuXHRcdFx0XHQ8R3JpZEl0ZW0+XHRcdFx0XHRcblx0XHRcdFx0XHQ8ZGl2PjxEYXRlIHZhbHVlPXsnMDEvMDUvMjAxOCd9IGNsYXNzTmFtZT0nZGF0ZScvPjwvZGl2PlxuXHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPSdleGNlcnB0Jz5cblx0XHRcdFx0XHRcdFJlY29waWxhY2nDs24gZGUgbGlicmVyw61hcyBwYXJhIHV0aWxpemFyIGVuIEFuZHJvaWQgPGEgaHJlZj17dGhpcy5hcGkuZGF0YV9rYl9hbmRyb2lkfT5kZXNjYXJnYXI8L2E+XG5cdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdDwvR3JpZEl0ZW0+XG5cdFx0XHRcdDxHcmlkSXRlbT5cblx0XHRcdFx0XHQ8YnIvPlxuXHRcdFx0XHRcdDxoMT5DYXRlZ29yJmlhY3V0ZTthczwvaDE+XG5cdFx0XHRcdFx0PEdyaWRDb250YWluZXIgY2xhc3NOYW1lPSdjYXRlZ29yaWVzJyBkaXJlY3Rpb249J3Jvdyc+XG5cdFx0XHRcdFx0XHR7Y2F0ZWdvcmllcy5tYXAoKGl0ZW0pPT5cblx0XHRcdFx0XHRcdFx0PEdyaWRJdGVtIGtleT17a2V5Kyt9IHhzPXs0fSBtZD17Mn0gbGc9ezF9PlxuXHRcdFx0XHRcdFx0XHQgXHQ8c3BhbiBjbGFzc05hbWU9e2BjYXRlZ29yeSAkeyhpdGVtID09IHRoaXMuc3RhdGUuY2F0ZWdvcnkpID8gXCJhY3RpdmVcIiA6IFwiXCJ9YH0gb25DbGljaz17dGhpcy5zZXRDYXRlZ29yeS5iaW5kKHRoaXMsIGl0ZW0pfT57aXRlbX08L3NwYW4+XG5cdFx0XHRcdFx0XHRcdDwvR3JpZEl0ZW0+XG5cdFx0XHRcdFx0XHQpfVxuXHRcdFx0XHRcdDwvR3JpZENvbnRhaW5lcj5cblx0XHRcdFx0XHQ8aHIvPlxuXHRcdFx0XHQ8L0dyaWRJdGVtPlxuXHRcdFx0XHQ8R3JpZEl0ZW0+XG5cdFx0XHRcdFx0e3BhZ2VEYXRhLmxlbmd0aCA9PSAwICYmIFxuXHRcdFx0XHRcdFx0PGRpdj5Mb2FkaW5nPC9kaXY+XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHRcdHtwYWdlRGF0YS5sZW5ndGggPiAwICYmIHBhZ2VEYXRhLm1hcCgoaXRlbSk9PlxuXHRcdFx0XHRcdFx0PGRpdiBrZXk9e2tleSsrfSBjbGFzc05hbWU9J2l0ZW0nPlxuXHRcdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT0nc3ViY2F0Jz57aXRlbS5jYXQyfTwvZGl2PlxuXHRcdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT0ndGl0bGUnPntpdGVtLnRpdGxlfSA8c3BhbiBjbGFzc05hbWU9J3JlZnMnPltyZWZzOntpdGVtLmNvdW50fV08L3NwYW4+PC9kaXY+XG5cdFx0XHRcdFx0XHRcdHsoaXRlbS5kZXNjICYmIGl0ZW0uZGVzYyAhPSBcIlwiKSAmJiA8ZGl2IGNsYXNzTmFtZT0nZGVzY3JpcHRpb24nPntpdGVtLmRlc2N9PC9kaXY+fSBcblx0XHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9J2xpbmtzJz5cblx0XHRcdFx0XHRcdFx0XHQ8c3BhbiBjbGFzc05hbWU9J2xpbmsnPjxhIGhyZWY9e2l0ZW0ucmVwb30+Z2l0aHViPC9hPiA8L3NwYW4+XG5cdFx0XHRcdFx0XHRcdFx0eyhpdGVtLmhvbWVwYWdlICYmIGl0ZW0uaG9tZXBhZ2UgIT0gXCJcIikgJiYgPHNwYW4gY2xhc3NOYW1lPSdsaW5rJz48YSBocmVmPXtpdGVtLmhvbWVwYWdlfT5ob21lcGFnZTwvYT4gPC9zcGFuPn0gXG5cdFx0XHRcdFx0XHRcdFx0eyhpdGVtLmRvY3MgJiYgaXRlbS5kb2NzICE9IFwiXCIpICYmIDxzcGFuIGNsYXNzTmFtZT0nbGluayc+PGEgaHJlZj17aXRlbS5kb2NzfT5kb2NzPC9hPiA8L3NwYW4+fSBcblx0XHRcdFx0XHRcdFx0XHR7KGl0ZW0uZGVtbyAmJiBpdGVtLmRlbW8gIT0gXCJcIikgJiYgPHNwYW4gY2xhc3NOYW1lPSdsaW5rJz48YSBocmVmPXtpdGVtLmRlbW99PmRlbW88L2E+IDwvc3Bhbj59IFxuXHRcdFx0XHRcdFx0XHRcdHsoaXRlbS5tYXN0ZXJwaWVjZSAmJiBpdGVtLm1hc3RlcnBpZWNlICE9IFwiXCIpICYmIDxzcGFuIGNsYXNzTmFtZT0nbGluayc+PGEgaHJlZj17aXRlbS5tYXN0ZXJwaWVjZX0+bWFzdGVyIHBpZWNlPC9hPiA8L3NwYW4+fSBcblx0XHRcdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPSdsaW5rcyc+XG5cdFx0XHRcdFx0XHRcdFx0eyhpdGVtLmxpY2Vuc2UgJiYgaXRlbS5saWNlbnNlICE9IFwiXCIpICYmIDxzcGFuIGNsYXNzTmFtZT0nc3ViY2F0Jz5saWNlbnNlOiB7aXRlbS5saWNlbnNlfTwvc3Bhbj59IFxuXHRcdFx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9J2ltYWdlcyc+XG5cdFx0XHRcdFx0XHRcdHtpdGVtLmltZ3MubWFwKChpdGVtSW1nKT0+XG5cdFx0XHRcdFx0XHRcdFx0PGltZyBrZXk9e2tleSsrfSBoZWlnaHQ9XCIyMDBweFwiIHNyYz17aXRlbUltZ30vPlxuXHRcdFx0XHRcdFx0XHQpfVxuXHRcdFx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHRcdCl9XG5cdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9J3BhZ2VfaW5kZXgnPlxuXHRcdFx0XHRcdHtwYWdlcy5tYXAoKGl0ZW0pPT5cblx0XHRcdFx0XHRcdDxzcGFuIGtleT17a2V5Kyt9IG9uQ2xpY2s9e3RoaXMuc2V0UGFnZS5iaW5kKHRoaXMsIGl0ZW0pfSBjbGFzc05hbWU9e2BwYWdlICR7KHRoaXMuc3RhdGUucGFnZSA9PSBpdGVtKT8gJ2FjdGl2ZScgOiAnJ31gfT57aXRlbX0gPC9zcGFuPlxuXHRcdFx0XHRcdCl9XG5cdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdDwvR3JpZEl0ZW0+XG5cdFx0XHRcdDxHcmlkSXRlbSBjbGFzc05hbWU9J2Zvb3Rlcic+XG5cdFx0XHRcdFx0PGhyLz5cblx0XHRcdFx0XHRpbXBvcnRhZG9zIGRlc2RlOlxuXHRcdFx0XHRcdDx1bD5cblx0XHRcdFx0XHQgIDxsaT48YSBocmVmPVwiaHR0cHM6Ly9naXRodWIuY29tL3dhc2FiZWVmL2F3ZXNvbWUtYW5kcm9pZC11aVwiPndhc2FiZWVmL2F3ZXNvbWUtYW5kcm9pZC11aTwvYT48L2xpPlxuXHRcdFx0XHRcdCAgPGxpPjxhIGhyZWY9XCJodHRwczovL2dpdGh1Yi5jb20vd2FzYWJlZWYvYXdlc29tZS1hbmRyb2lkLWxpYnJhcmllc1wiPndhc2FiZWVmL2F3ZXNvbWUtYW5kcm9pZC1saWJyYXJpZXM8L2E+PC9saT5cblx0XHRcdFx0XHQgIDxsaT48YSBocmVmPVwiaHR0cHM6Ly9naXRodWIuY29tL1RyaW5lYS9hbmRyb2lkLW9wZW4tcHJvamVjdFwiPlRyaW5lYS9hbmRyb2lkLW9wZW4tcHJvamVjdDwvYT48L2xpPlxuXHRcdFx0XHRcdCAgPGxpPjxhIGhyZWY9XCJodHRwczovL2dpdGh1Yi5jb20vUGhpbEpheS9BbmRyb2lkRWxlbWVudGFsc1wiPlBoaWxKYXkvQW5kcm9pZEVsZW1lbnRhbHM8L2E+PC9saT5cblx0XHRcdFx0XHQgIDxsaT48YSBocmVmPVwiaHR0cHM6Ly9naXRodWIuY29tL3RoYW5odG9hbjExOTYvYXdlc29tZS1hbmRyb2lkLXVpXCI+dGhhbmh0b2FuMTE5Ni9hd2Vzb21lLWFuZHJvaWQtdWk8L2E+PC9saT5cblx0XHRcdFx0XHQgIDxsaT48YSBocmVmPVwiaHR0cHM6Ly9naXRodWIuY29tL3RoYW5odG9hbjExOTYvYXdlc29tZS1hbmRyb2lkXCI+dGhhbmh0b2FuMTE5Ni9hd2Vzb21lLWFuZHJvaWQ8L2E+KjwvbGk+XG5cdFx0XHRcdFx0ICA8bGk+PGEgaHJlZj1cImh0dHBzOi8vZ2l0aHViLmNvbS9zbm93ZHJlYW0vYXdlc29tZS1hbmRyb2lkXCI+c25vd2RyZWFtL2F3ZXNvbWUtYW5kcm9pZDwvYT4qPC9saT5cblx0XHRcdFx0XHQgIDxsaT48YSBocmVmPVwiaHR0cHM6Ly9naXRodWIuY29tL3RoYW5odG9hbjExOTYvYXdlc29tZS1hbmRyb2lkLWxpYnJhcmllc1wiPnRoYW5odG9hbjExOTYvYXdlc29tZS1hbmRyb2lkLWxpYnJhcmllczwvYT4qPC9saT5cblx0XHRcdFx0XHQgIDxsaT48YSBocmVmPVwiaHR0cHM6Ly9naXRodWIuY29tL2xpZ2h0U2t5L0F3ZXNvbWUtTWF0ZXJpYWxEZXNpZ25cIj5saWdodFNreS9Bd2Vzb21lLU1hdGVyaWFsRGVzaWduPC9hPio8L2xpPlxuXHRcdFx0XHRcdCAgPGxpPjxhIGhyZWY9XCJodHRwczovL2dpdGh1Yi5jb20vY29kZXBhdGgvYW5kcm9pZF9ndWlkZXMvd2lraS9NdXN0LUhhdmUtTGlicmFyaWVzXCI+Y29kZXBhdGgvYW5kcm9pZF9ndWlkZXM8L2E+KjwvbGk+XG5cdFx0XHRcdFx0ICA8bGk+PGEgaHJlZj1cImh0dHBzOi8vZ2l0aHViLmNvbS9saWdodFNreS9Bd2Vzb21lLU1hdGVyaWFsRGVzaWduXCI+bGlnaHRTa3kvQXdlc29tZS1NYXRlcmlhbERlc2lnbjwvYT4qPC9saT5cblx0XHRcdFx0XHQ8L3VsPlxuXHRcdFx0XHRcdDwvR3JpZEl0ZW0+XG5cdFx0XHQ8L0dyaWRDb250YWluZXI+XG5cdCk7XG5cdH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgQ29tcG9uZW50KENvbnRlbnQpOyIsIlxudmFyIGNvbnRlbnQgPSByZXF1aXJlKFwiISEuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9mcmFtZXdvcmtzL3dlYmFwcHMvc3RhcnR1cC9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9pbmRleC5qcyEuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9mcmFtZXdvcmtzL3dlYmFwcHMvc3RhcnR1cC9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvbGliL2xvYWRlci5qcyEuL2NvbnRlbnQuc2Nzc1wiKTtcblxuaWYodHlwZW9mIGNvbnRlbnQgPT09ICdzdHJpbmcnKSBjb250ZW50ID0gW1ttb2R1bGUuaWQsIGNvbnRlbnQsICcnXV07XG5cbnZhciB0cmFuc2Zvcm07XG52YXIgaW5zZXJ0SW50bztcblxuXG5cbnZhciBvcHRpb25zID0ge1wiaG1yXCI6dHJ1ZX1cblxub3B0aW9ucy50cmFuc2Zvcm0gPSB0cmFuc2Zvcm1cbm9wdGlvbnMuaW5zZXJ0SW50byA9IHVuZGVmaW5lZDtcblxudmFyIHVwZGF0ZSA9IHJlcXVpcmUoXCIhLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vZnJhbWV3b3Jrcy93ZWJhcHBzL3N0YXJ0dXAvbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9saWIvYWRkU3R5bGVzLmpzXCIpKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5pZihjb250ZW50LmxvY2FscykgbW9kdWxlLmV4cG9ydHMgPSBjb250ZW50LmxvY2FscztcblxuaWYobW9kdWxlLmhvdCkge1xuXHRtb2R1bGUuaG90LmFjY2VwdChcIiEhLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vZnJhbWV3b3Jrcy93ZWJhcHBzL3N0YXJ0dXAvbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvaW5kZXguanMhLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vZnJhbWV3b3Jrcy93ZWJhcHBzL3N0YXJ0dXAvbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2xpYi9sb2FkZXIuanMhLi9jb250ZW50LnNjc3NcIiwgZnVuY3Rpb24oKSB7XG5cdFx0dmFyIG5ld0NvbnRlbnQgPSByZXF1aXJlKFwiISEuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9mcmFtZXdvcmtzL3dlYmFwcHMvc3RhcnR1cC9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9pbmRleC5qcyEuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9mcmFtZXdvcmtzL3dlYmFwcHMvc3RhcnR1cC9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvbGliL2xvYWRlci5qcyEuL2NvbnRlbnQuc2Nzc1wiKTtcblxuXHRcdGlmKHR5cGVvZiBuZXdDb250ZW50ID09PSAnc3RyaW5nJykgbmV3Q29udGVudCA9IFtbbW9kdWxlLmlkLCBuZXdDb250ZW50LCAnJ11dO1xuXG5cdFx0dmFyIGxvY2FscyA9IChmdW5jdGlvbihhLCBiKSB7XG5cdFx0XHR2YXIga2V5LCBpZHggPSAwO1xuXG5cdFx0XHRmb3Ioa2V5IGluIGEpIHtcblx0XHRcdFx0aWYoIWIgfHwgYVtrZXldICE9PSBiW2tleV0pIHJldHVybiBmYWxzZTtcblx0XHRcdFx0aWR4Kys7XG5cdFx0XHR9XG5cblx0XHRcdGZvcihrZXkgaW4gYikgaWR4LS07XG5cblx0XHRcdHJldHVybiBpZHggPT09IDA7XG5cdFx0fShjb250ZW50LmxvY2FscywgbmV3Q29udGVudC5sb2NhbHMpKTtcblxuXHRcdGlmKCFsb2NhbHMpIHRocm93IG5ldyBFcnJvcignQWJvcnRpbmcgQ1NTIEhNUiBkdWUgdG8gY2hhbmdlZCBjc3MtbW9kdWxlcyBsb2NhbHMuJyk7XG5cblx0XHR1cGRhdGUobmV3Q29udGVudCk7XG5cdH0pO1xuXG5cdG1vZHVsZS5ob3QuZGlzcG9zZShmdW5jdGlvbigpIHsgdXBkYXRlKCk7IH0pO1xufSIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgSGlkZGVuIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL0hpZGRlbic7XG5pbXBvcnQgeyAgQnJvd3NlclZpZXcsICBNb2JpbGVWaWV3IH0gZnJvbSBcInJlYWN0LWRldmljZS1kZXRlY3RcIjtcbmltcG9ydCB3aXRoTW9kdWxlIGZyb20gJ2ptYXJyb3lhdmUvY29tcG9uZW50cy91eGkvY29yZS93aXRoLW1vZHVsZSc7XG5pbXBvcnQgTEcgZnJvbSBcImptYXJyb3lhdmUvY29tcG9uZW50cy91eGkva2IvYW5kcm9pZC9sYXlvdXQvbGcvcGFnZVwiO1xuXG5jbGFzcyBQYWdlQ29tcG9uZW50IGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcblx0cmVuZGVyKCl7XG5cdFx0cmV0dXJuIHRoaXMucmVuZGVyRGVmYXVsdCgpO1xuXHR9XG5cblx0cmVuZGVyRGVmYXVsdCgpe1xuXHRcdHZhciBkYXRhID0gdGhpcy5wcm9wcy5kYXRhO1xuXHRcdHJldHVybiAoXG5cdFx0XHQ8ZGl2IHN0eWxlPXt7d2lkdGg6JzEwMCUnfX0+XHRcdFx0XHRcbiAgICBcdFx0XHQ8TEcgZGF0YT17ZGF0YX0vPlxuXHRcdFx0PC9kaXY+XG5cdFx0KVx0XHRcblx0fVxufVxuXG5leHBvcnQgZGVmYXVsdCB3aXRoTW9kdWxlKFBhZ2VDb21wb25lbnQpOyIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBMaW5rIH0gZnJvbSAncmVhY3Qtcm91dGVyJ1xuaW1wb3J0IEdyaWRDb250YWluZXIgZnJvbSAnam1hcnJveWF2ZS9jb21wb25lbnRzL3V4aS9jb3JlL2dyaWRfY29udGFpbmVyJztcbmltcG9ydCBHcmlkSXRlbSBmcm9tICdqbWFycm95YXZlL2NvbXBvbmVudHMvdXhpL2NvcmUvZ3JpZF9pdGVtJztcbmltcG9ydCBIaWRkZW4gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvSGlkZGVuJztcbmltcG9ydCBNb2R1bGVzIGZyb20gJ2ptYXJyb3lhdmUvY29uZi9sYXlvdXQvbW9kdWxlcyc7XG5pbXBvcnQgd2l0aE1vZHVsZSBmcm9tICdqbWFycm95YXZlL2NvbXBvbmVudHMvdXhpL2NvcmUvd2l0aC1tb2R1bGUnO1xuaW1wb3J0IEJsb2NrIGZyb20gJ2ptYXJyb3lhdmUvY29tcG9uZW50cy91eGkvaG9tZS9ibG9jayc7XG5pbXBvcnQgTUJsb2NrIGZyb20gJ2NvcmUvY29tcG9uZW50cy9tb2NrdXAvYmxvY2snO1xuaW1wb3J0IFNlY3Rpb24gZnJvbSAnY29yZS9jb21wb25lbnRzL2xheW91dC9zZWN0aW9uJztcbmltcG9ydCBCbG9nTGluayBmcm9tIFwiam1hcnJveWF2ZS9jb21wb25lbnRzL2RhdGEvYmxvZ19saW5rXCI7XG5pbXBvcnQgQ29udGVudCBmcm9tICdqbWFycm95YXZlL2NvbXBvbmVudHMvdXhpL2tiL2FuZHJvaWQvY29udGVudCc7XG5cbmNsYXNzIFBhZ2VDb21wb25lbnQgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuXHRnZXRNb2R1bGVzKCl7XG5cdFx0dmFyIGRhdGEgPSB0aGlzLnByb3BzLmRhdGE7XHRcdFxuXG5cdFx0cmV0dXJuIFtcblx0XHRcdHt0aXRsZTogXCJUZXN0XCIsIFx0XHRjb250cm9sOiAoTW9kdWxlcy5UcmFuc2ZlcnMpID8gPGRpdj50ZXN0PC9kaXY+IDogbnVsbH0sXG5cdFx0XTtcblx0fVxuXG5cdHJlbmRlcigpe1xuXHRcdGNvbnN0IGRhdGEgPSB0aGlzLnByb3BzLmRhdGE7XHRcdFxuXHRcdGNvbnN0IG1vZHMgPSB0aGlzLmdldE1vZHVsZXMoKTtcblx0XHRjb25zdCBtb2RUZXN0ID0gbW9kc1swXTtcblx0XHRyZXR1cm4gKFxuXHRcdFx0PEdyaWRDb250YWluZXI+XG5cdFx0XHRcdDxHcmlkSXRlbT5cblx0XHRcdFx0XHQ8R3JpZENvbnRhaW5lcj5cblx0XHRcdFx0XHRcdDxHcmlkSXRlbSB4cz17MX0gbWQ9ezJ9PlxuXHRcdFx0XHRcdFx0PC9HcmlkSXRlbT5cblx0XHRcdFx0XHRcdDxHcmlkSXRlbSAgeHM9ezEwfSBtZD17OH0+XG5cdFx0XHRcdFx0XHRcdDxHcmlkQ29udGFpbmVyPlxuXHRcdFx0XHRcdFx0XHRcdDxHcmlkSXRlbT5cblx0XHRcdFx0XHRcdFx0XHRcdDxoMT48QmxvZ0xpbmsgc2x1Zz17J2tiJ30+a2I8L0Jsb2dMaW5rPiA+IGFuZHJvaWQ8L2gxPlxuXHRcdFx0XHRcdFx0XHRcdDwvR3JpZEl0ZW0+XHRcdFx0XG5cdFx0XHRcdFx0XHRcdFx0PEdyaWRJdGVtPlxuXHRcdFx0XHRcdFx0XHRcdFx0PENvbnRlbnQgZGF0YT17ZGF0YX0vPlxuXHRcdFx0XHRcdFx0XHRcdDwvR3JpZEl0ZW0+ICBcblx0XHRcdFx0XHRcdFx0PC9HcmlkQ29udGFpbmVyPlxuXHRcdFx0XHRcdFx0PC9HcmlkSXRlbT5cdFx0XHRcblx0XHRcdFx0XHRcdDxHcmlkSXRlbSB4cz17MX0gbWQ9ezJ9PlxuXHRcdFx0XHRcdFx0PC9HcmlkSXRlbT5cblx0XHRcdFx0XHQ8L0dyaWRDb250YWluZXI+XG5cdFx0XHRcdDwvR3JpZEl0ZW0+XG5cdFx0XHQ8L0dyaWRDb250YWluZXI+XG5cdFx0KVxuXHR9XG59XG5cbmV4cG9ydCBkZWZhdWx0IHdpdGhNb2R1bGUoUGFnZUNvbXBvbmVudCk7XG5cbiIsImNsYXNzIE1vZHVsZXMge1xufVxuXG5cbk1vZHVsZXMuR2FtZXMgPSBmYWxzZTtcbk1vZHVsZXMuU3RhbmRpbmdzID0gZmFsc2U7XG5Nb2R1bGVzLlBvc3RTZWFzb24gPSBmYWxzZTtcbk1vZHVsZXMuVHJhbnNmZXJzID0gdHJ1ZTtcblxuZXhwb3J0IGRlZmF1bHQgKE1vZHVsZXMpOyJdLCJzb3VyY2VSb290IjoiIn0=