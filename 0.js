(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[0],{

/***/ "../../../../frameworks/webapps/startup/node_modules/css-loader/index.js!../../../../frameworks/webapps/startup/node_modules/sass-loader/lib/loader.js!./src/jmarroyave/components/uxi/kb/android/content.scss":
/*!******************************************************************************************************************************************************************************************************************!*\
  !*** /media/jm/labs/frameworks/webapps/startup/node_modules/css-loader!/media/jm/labs/frameworks/webapps/startup/node_modules/sass-loader/lib/loader.js!./src/jmarroyave/components/uxi/kb/android/content.scss ***!
  \******************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../../../../../../../frameworks/webapps/startup/node_modules/css-loader/lib/css-base.js */ "../../../../frameworks/webapps/startup/node_modules/css-loader/lib/css-base.js")(false);
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


var content = __webpack_require__(/*! !../../../../../../../../../../frameworks/webapps/startup/node_modules/css-loader!../../../../../../../../../../frameworks/webapps/startup/node_modules/sass-loader/lib/loader.js!./content.scss */ "../../../../frameworks/webapps/startup/node_modules/css-loader/index.js!../../../../frameworks/webapps/startup/node_modules/sass-loader/lib/loader.js!./src/jmarroyave/components/uxi/kb/android/content.scss");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvam1hcnJveWF2ZS9jb21wb25lbnRzL3V4aS9rYi9hbmRyb2lkL2NvbnRlbnQuc2NzcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29yZS9jb21wb25lbnRzL2RhdGUuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvcmUvY29tcG9uZW50cy9sYXlvdXQvc2VjdGlvbi5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvam1hcnJveWF2ZS9jb21wb25lbnRzL2RhdGEvYmxvZ19saW5rLmpzIiwid2VicGFjazovLy8uL3NyYy9qbWFycm95YXZlL2NvbXBvbmVudHMvdXhpL2tiL2FuZHJvaWQvY29udGVudC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvam1hcnJveWF2ZS9jb21wb25lbnRzL3V4aS9rYi9hbmRyb2lkL2NvbnRlbnQuc2Nzcz9jNDE5Iiwid2VicGFjazovLy8uL3NyYy9qbWFycm95YXZlL2NvbXBvbmVudHMvdXhpL2tiL2FuZHJvaWQvbGF5b3V0L2xheW91dC1wcm94eS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvam1hcnJveWF2ZS9jb21wb25lbnRzL3V4aS9rYi9hbmRyb2lkL2xheW91dC9sZy9wYWdlLmpzIiwid2VicGFjazovLy8uL3NyYy9qbWFycm95YXZlL2NvbmYvbGF5b3V0L21vZHVsZXMuanMiXSwibmFtZXMiOlsiVUlEYXRlIiwic3RhdGUiLCJkZWZhdWx0cyIsImNsYXNzTmFtZSIsInRpbWVBZ28iLCJsYW5nIiwicHJvcHMiLCJUaW1lQWdvIiwiYWRkTG9jYWxlIiwiZXMiLCJlbiIsImRhdGUiLCJzdHIiLCJ2YWx1ZSIsImxlbmd0aCIsIkRhdGUiLCJudW0iLCJOdW1iZXIiLCJpc0ludGVnZXIiLCJmb3JtYXQiLCJleCIsIlVJQ29tcG9uZW50Iiwic3R5bGVzIiwicm9vdCIsIndpZHRoIiwiYm94U2l6aW5nIiwicGFkZGluZyIsIkxheW91dFNlY3Rpb24iLCJjbGFzc2VzIiwiY29sb3IiLCJiYWNrZ3JvdW5kQ29sb3IiLCJjaGlsZHJlbiIsIlJlYWN0IiwiQ29tcG9uZW50Iiwid2l0aFN0eWxlcyIsIkJsb2dMaW5rQ29tcG9uZW50Iiwic2x1ZyIsIndpdGhNb2R1bGUiLCJDb250ZW50IiwiY29udGV4dCIsImFwaSIsIndpbmRvdyIsIl9fYXBpIiwiY2F0ZWdvcnkiLCJwYWdlIiwiaXRlbXNQZXJQYWdlIiwiZmV0Y2hEYXRhIiwiY2F0IiwiZ2V0S0JBbmRyb2lkIiwic2V0U3RhdGUiLCJpIiwic2Nyb2xsVG8iLCJkYXRhIiwicmVjb3JkcyIsImNhdGVnb3JpZXMiLCJrZXkiLCJ0b3RQYWdlcyIsIk1hdGgiLCJjZWlsIiwicGFnZXMiLCJwdXNoIiwicGFnZURhdGEiLCJzbGljZSIsImNvbnRhaW5lciIsImVsIiwiZGF0YV9rYl9hbmRyb2lkIiwibWFwIiwiaXRlbSIsInNldENhdGVnb3J5IiwiYmluZCIsImNhdDIiLCJ0aXRsZSIsImNvdW50IiwiZGVzYyIsInJlcG8iLCJob21lcGFnZSIsImRvY3MiLCJkZW1vIiwibWFzdGVycGllY2UiLCJsaWNlbnNlIiwiaW1ncyIsIml0ZW1JbWciLCJzZXRQYWdlIiwiUGFnZUNvbXBvbmVudCIsInJlbmRlckRlZmF1bHQiLCJjb250cm9sIiwiTW9kdWxlcyIsIlRyYW5zZmVycyIsIm1vZHMiLCJnZXRNb2R1bGVzIiwibW9kVGVzdCIsIkdhbWVzIiwiU3RhbmRpbmdzIiwiUG9zdFNlYXNvbiJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQUEsMkJBQTJCLG1CQUFPLENBQUMsd0xBQWtHO0FBQ3JJOzs7QUFHQTtBQUNBLGNBQWMsUUFBUyxvQkFBb0IscUJBQXFCLHVCQUF1QixFQUFFLDJCQUEyQixxQkFBcUIsdUJBQXVCLHNCQUFzQixzQkFBc0IsRUFBRSw4QkFBOEIsbUJBQW1CLHVCQUF1Qix1QkFBdUIsRUFBRSxpQ0FBaUMseUJBQXlCLEVBQUUsd0JBQXdCLHFCQUFxQix1QkFBdUIsRUFBRSwrQkFBK0Isc0JBQXNCLHVCQUF1Qix3QkFBd0IsZ0JBQWdCLG9CQUFvQixFQUFFLHNDQUFzQyxzQkFBc0Is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Q0M7QUFBQyx5RkFBRDtBQUFBO0FBQ0M7QUFBQTtBQUFBO0FBQUk7QUFBQyx3RkFBRDtBQUFBLGFBQVUsTUFBTSxJQUFoQjtBQUFBO0FBQUEsV0FBSjtBQUFBO0FBQUE7QUFERCxTQUREO0FBSUM7QUFBQyx5RkFBRDtBQUFBO0FBQ0Msb0VBQUMscUZBQUQsSUFBUyxNQUFNcEMsSUFBZjtBQUREO0FBSkQ7QUFERCxPQUhEO0FBYUMsaUVBQUMsZ0ZBQUQsSUFBVSxJQUFJLENBQWQsRUFBaUIsSUFBSSxDQUFyQjtBQWJEO0FBREQ7QUFERCxJQUREO0FBc0JBOzs7O0VBbkMwQnBCLDRDQUFLQSxDQUFDQyxTOztBQXNDbkJJLHlKQUFVQSxDQUFDOEMsYUFBWCxDQUFmLEU7Ozs7Ozs7Ozs7Ozs7OztJQ25ETUcsTzs7OztBQUlOQSxRQUFRSyxLQUFSLEdBQWdCLEtBQWhCO0FBQ0FMLFFBQVFNLFNBQVIsR0FBb0IsS0FBcEI7QUFDQU4sUUFBUU8sVUFBUixHQUFxQixLQUFyQjtBQUNBUCxRQUFRQyxTQUFSLEdBQW9CLElBQXBCOztBQUVnQkQsc0VBQWhCLEUiLCJmaWxlIjoiMC5qcyIsInNvdXJjZXNDb250ZW50IjpbImV4cG9ydHMgPSBtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCIuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9mcmFtZXdvcmtzL3dlYmFwcHMvc3RhcnR1cC9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9saWIvY3NzLWJhc2UuanNcIikoZmFsc2UpO1xuLy8gaW1wb3J0c1xuXG5cbi8vIG1vZHVsZVxuZXhwb3J0cy5wdXNoKFttb2R1bGUuaWQsIFwiLm1vZC1rYi1hbmRyb2lkIHtcXG4gIGZvbnQtc2l6ZTogMS4zZW07XFxuICBsaW5lLWhlaWdodDogMS44ZW07IH1cXG5cXG4ubW9kLWtiLWFuZHJvaWQgLmRhdGUge1xcbiAgZm9udC1zaXplOiAwLjhlbTtcXG4gIGxpbmUtaGVpZ2h0OiAwLjllbTtcXG4gIG1hcmdpbi10b3A6IC0xMHB4O1xcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7IH1cXG5cXG4ubW9kLWtiLWFuZHJvaWQgLmV4Y2VycHQge1xcbiAgZm9udC1zaXplOiAxZW07XFxuICBsaW5lLWhlaWdodDogMS4xZW07XFxuICBmb250LXN0eWxlOiBpdGFsaWM7IH1cXG5cXG4ubW9kLWtiLWFuZHJvaWQgLmNhdGVnb3JpZXMge1xcbiAgcGFkZGluZy1ib3R0b206IDIwcHg7IH1cXG5cXG4ubW9kLWtiLWFuZHJvaWQgaDEge1xcbiAgZm9udC1zaXplOiAxLjJlbTtcXG4gIGxpbmUtaGVpZ2h0OiAxLjBlbTsgfVxcblxcbi5tb2Qta2ItYW5kcm9pZCAuY2F0ZWdvcnkge1xcbiAgZm9udC1zaXplOiAwLjc1ZW07XFxuICBsaW5lLWhlaWdodDogMS4wZW07XFxuICBwYWRkaW5nLXJpZ2h0OiAyMHB4O1xcbiAgY29sb3I6ICM1NTU7XFxuICBjdXJzb3I6IHBvaW50ZXI7IH1cXG5cXG4ubW9kLWtiLWFuZHJvaWQgLmNhdGVnb3J5LmFjdGl2ZSB7XFxuICBmb250LXdlaWdodDogYm9sZDtcXG4gIGNvbG9yOiBibGFjazsgfVxcblxcbi5tb2Qta2ItYW5kcm9pZCAuaXRlbSB7XFxuICBwYWRkaW5nLWJvdHRvbTogMWVtOyB9XFxuXFxuLm1vZC1rYi1hbmRyb2lkIC5pdGVtIC5zdWJjYXQge1xcbiAgZm9udC1zaXplOiAwLjZlbTsgfVxcblxcbi5tb2Qta2ItYW5kcm9pZCAuaXRlbSAudGl0bGUge1xcbiAgZm9udC1zaXplOiAxZW07XFxuICBsaW5lLWhlaWdodDogMWVtOyB9XFxuXFxuLm1vZC1rYi1hbmRyb2lkIC5pdGVtIC50aXRsZSAucmVmcyB7XFxuICBmb250LXNpemU6IDAuNmVtOyB9XFxuXFxuLm1vZC1rYi1hbmRyb2lkIC5pdGVtIC5kZXNjcmlwdGlvbiB7XFxuICBmb250LXNpemU6IDAuNzVlbTtcXG4gIGxpbmUtaGVpZ2h0OiAxLjI1ZW07IH1cXG5cXG4ubW9kLWtiLWFuZHJvaWQgLml0ZW0gLmxpbmtzIHtcXG4gIHBhZGRpbmc6IDBweDtcXG4gIGxpbmUtaGVpZ2h0OiAwLjhlbTsgfVxcblxcbi5tb2Qta2ItYW5kcm9pZCAuaXRlbSBzcGFuLmxpbmsge1xcbiAgcGFkZGluZzogMHB4O1xcbiAgZm9udC1zaXplOiAwLjc1ZW07IH1cXG5cXG4ubW9kLWtiLWFuZHJvaWQgLml0ZW0gLmltYWdlcyB7XFxuICBwYWRkaW5nLXRvcDogMTBweDtcXG4gIHBhZGRpbmctbGVmdDogMjBweDsgfVxcblxcbi5tb2Qta2ItYW5kcm9pZCAucGFnZV9pbmRleCAucGFnZSB7XFxuICBjb2xvcjogIzQ0NDtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG4gIHBhZGRpbmctcmlnaHQ6IDEwcHg7XFxuICBmb250LXNpemU6IDFlbTsgfVxcblxcbi5tb2Qta2ItYW5kcm9pZCAucGFnZV9pbmRleCAucGFnZS5hY3RpdmUge1xcbiAgY29sb3I6IGJsYWNrO1xcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7IH1cXG5cXG4ubW9kLWtiLWFuZHJvaWQgLmZvb3RlciB7XFxuICBmb250LXNpemU6IDAuNzVlbTsgfVxcblwiLCBcIlwiXSk7XG5cbi8vIGV4cG9ydHNcbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgVUlDb21wb25lbnQgZnJvbSAnY29yZS9jb21wb25lbnRzL3VpX2NvbXBvbmVudCc7XG5pbXBvcnQgVGltZUFnbyBmcm9tICdqYXZhc2NyaXB0LXRpbWUtYWdvJ1xuaW1wb3J0IGVuIGZyb20gJ2phdmFzY3JpcHQtdGltZS1hZ28vbG9jYWxlL2VuJ1xuaW1wb3J0IGVzIGZyb20gJ2phdmFzY3JpcHQtdGltZS1hZ28vbG9jYWxlL2VzJ1xuXG5jbGFzcyBVSURhdGUgZXh0ZW5kcyBVSUNvbXBvbmVudCB7IFxuICBjb25zdHJ1Y3RvcigpIHtcbiAgICBzdXBlcigpO1xuICAgIHRoaXMuc3RhdGUgPSB7XG4gICAgfVxuICB9XG5cbiAgZ2V0RGVmYXVsdHMoKXtcbiAgICBjb25zdCBkZWZhdWx0cyA9IHtcbiAgICAgIGNsYXNzTmFtZSA6ICcnLCAgICAgIFxuICAgIH0gICAgXG4gICAgcmV0dXJuIGRlZmF1bHRzO1xuICB9ICBcbiAgcmVuZGVyKCkge1xuICAgIHZhciB0aW1lQWdvO1xuICAgIGNvbnN0IGxhbmcgPSAoXCJsYW5nXCIgaW4gdGhpcy5wcm9wcykgPyB0aGlzLnByb3BzLmxhbmcgOiBcImVuXCI7XG4gICAgc3dpdGNoKGxhbmcpe1xuICAgICAgY2FzZSBcImVzXCIgOlxuICAgICAgICBUaW1lQWdvLmFkZExvY2FsZShlcyk7XG4gICAgICAgIHRpbWVBZ28gPSBuZXcgVGltZUFnbygnZXMtVVMnKTtcbiAgICAgICAgYnJlYWs7XG4gICAgICBkZWZhdWx0OlxuICAgICAgICBUaW1lQWdvLmFkZExvY2FsZShlbik7XG4gICAgICAgIHRpbWVBZ28gPSBuZXcgVGltZUFnbygnZW4tVVMnKTtcbiAgICB9XG5cbiAgICBcbiAgICB2YXIgZGF0ZTtcbiAgICB2YXIgc3RyO1xuICAgIHRyeXtcbiAgICAgIHZhciB2YWx1ZSA9IHRoaXMucHJvcHMudmFsdWU7XG5cbiAgICAgIGlmKCF2YWx1ZSB8fCB2YWx1ZSA9PSBudWxsIHx8IHZhbHVlID09PSAnJyB8fCB2YWx1ZS5sZW5ndGggPT0gMCl7XG4gICAgICAgIHN0ciA9ICcnO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgaWYodmFsdWUgaW5zdGFuY2VvZiBEYXRlKXtcbiAgICAgICAgICBkYXRlID0gbmV3IERhdGUodmFsdWUpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGNvbnN0IG51bSA9IE51bWJlcih2YWx1ZSk7XG4gICAgICAgICAgaWYoTnVtYmVyLmlzSW50ZWdlcihudW0pKXtcbiAgICAgICAgICAgIGRhdGUgPSBuZXcgRGF0ZShudW0pO1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBkYXRlID0gbmV3IERhdGUodmFsdWUpO1xuICAgICAgICAgIH1cbiAgICAgICAgfSAgICAgICBcbiAgICAgICAgc3RyID0gdGltZUFnby5mb3JtYXQoZGF0ZSwgJ3R3aXR0ZXInKTtcbiAgICAgIH0gICAgXG4gICAgfSBjYXRjaCAoZXgpe1xuICAgICAgc3RyID0gdGhpcy5wcm9wcy52YWx1ZTtcbiAgICB9XG4gICAgcmV0dXJuIChcbiAgICAgIDxzcGFuIGNsYXNzTmFtZT17dGhpcy5zdGF0ZS5jbGFzc05hbWV9PntzdHJ9PC9zcGFuPlxuICAgICk7XG4gIH1cbn1cblxuXG5leHBvcnQgZGVmYXVsdCBVSURhdGU7IiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IHdpdGhTdHlsZXMgfSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9zdHlsZXMnO1xuXG5jb25zdCBzdHlsZXMgPSB0aGVtZSA9PiAoe1xuXHRyb290IDoge1xuXHRcdHdpZHRoOiAnMTAwJScsXG5cdFx0Ym94U2l6aW5nOiAnYm9yZGVyLWJveCcsXG5cdFx0cGFkZGluZzogJzE2cHgnLFxuXHR9LFxufSk7XG5jbGFzcyBMYXlvdXRTZWN0aW9uIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHsgXG4gIHJlbmRlcigpIHtcbiAgXHRjb25zdCBjbGFzc2VzID0gdGhpcy5wcm9wcy5jbGFzc2VzO1xuICBcdC8vY29uc3QgaGVpZ2h0ID0gKFwiaGVpZ2h0XCIgaW4gdGhpcy5wcm9wcykgPyB0aGlzLnByb3BzLmhlaWdodCA6ICczMHB4JztcbiAgXHRjb25zdCBjb2xvciA9IChcImNvbG9yXCIgaW4gdGhpcy5wcm9wcykgPyB0aGlzLnByb3BzLmNvbG9yIDogJ3doaXRlJztcbiAgICByZXR1cm4gKFxuICAgICAgPGRpdiBjbGFzc05hbWU9e2NsYXNzZXMucm9vdH0gc3R5bGU9e3tiYWNrZ3JvdW5kQ29sb3I6IGNvbG9yfX0+XG4gICAgICBcdHt0aGlzLnByb3BzLmNoaWxkcmVufVxuICAgICAgPC9kaXY+XG4gICAgKTtcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCB3aXRoU3R5bGVzKHN0eWxlcykoTGF5b3V0U2VjdGlvbik7IiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IExpbmsgfSBmcm9tICdyZWFjdC1yb3V0ZXInO1xuaW1wb3J0IHdpdGhNb2R1bGUgZnJvbSAnam1hcnJveWF2ZS9jb21wb25lbnRzL3V4aS9jb3JlL3dpdGgtbW9kdWxlJztcblxuY2xhc3MgQmxvZ0xpbmtDb21wb25lbnQgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuXHRyZW5kZXIoKXtcblx0XHRjb25zdCBzbHVnID0gdGhpcy5wcm9wcy5zbHVnO1xuXHRcdHJldHVybiAoXG5cdFx0XHQ8TGluayB0bz17YC8ke3NsdWd9YH0+XG5cdFx0XHRcdHt0aGlzLnByb3BzLmNoaWxkcmVufVxuXHRcdFx0PC9MaW5rPlxuXHRcdCk7XG5cdH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgd2l0aE1vZHVsZShCbG9nTGlua0NvbXBvbmVudCk7XG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IENvbXBvbmVudCBmcm9tICdjb3JlL2NvbXBvbmVudHMvY29tcG9uZW50JztcbmltcG9ydCBQb3N0TGluayBmcm9tIFwiam1hcnJveWF2ZS9jb21wb25lbnRzL2RhdGEvcG9zdF9saW5rXCI7XG5pbXBvcnQgR3JpZENvbnRhaW5lciBmcm9tICdqbWFycm95YXZlL2NvbXBvbmVudHMvdXhpL2NvcmUvZ3JpZF9jb250YWluZXInO1xuaW1wb3J0IEdyaWRJdGVtIGZyb20gJ2ptYXJyb3lhdmUvY29tcG9uZW50cy91eGkvY29yZS9ncmlkX2l0ZW0nO1xuaW1wb3J0IERhdGUgZnJvbSAnY29yZS9jb21wb25lbnRzL2RhdGUnO1xuXG5pbXBvcnQgJy4vY29udGVudC5zY3NzJztcblxuY2xhc3MgQ29udGVudCBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG5cdGNvbnN0cnVjdG9yKHByb3BzLGNvbnRleHQpIHtcblx0XHRzdXBlcihwcm9wcyxjb250ZXh0KTtcblx0XHR0aGlzLmFwaSA9IHdpbmRvdy5fX2FwaTtcblx0XHR0aGlzLnN0YXRlID0ge1xuXHRcdFx0Y2F0ZWdvcnk6ICdEZXYgJiBCdWlsZCcsXG5cdFx0XHRwYWdlOiAxLFxuXHRcdH1cblxuXHRcdHRoaXMuaXRlbXNQZXJQYWdlID0gMjU7XG5cdH1cblxuXHRjb21wb25lbnREaWRNb3VudCgpe1xuXHRcdHRoaXMuZmV0Y2hEYXRhKHRoaXMuc3RhdGUuY2F0ZWdvcnkpO1xuXHR9XG5cblx0ZmV0Y2hEYXRhKGNhdCl7XG5cdFx0dGhpcy5hcGkuZ2V0S0JBbmRyb2lkKGNhdCk7XHRcdFxuXHR9XG5cblx0c2V0Q2F0ZWdvcnkoY2F0KXtcblx0XHR0aGlzLnNldFN0YXRlKHtjYXRlZ29yeTogY2F0LCBwYWdlOiAxfSk7XG5cdFx0dGhpcy5mZXRjaERhdGEoY2F0KTtcblx0fVxuXG5cdHNldFBhZ2UoaSl7XG5cdFx0dGhpcy5zZXRTdGF0ZSh7cGFnZTogaX0pO1xuXHRcdHdpbmRvdy5zY3JvbGxUbygwLDApO1xuXHR9XG5cblx0cmVuZGVyKCl7XG5cdFx0dmFyIGRhdGEgPSAodGhpcy5wcm9wcy5kYXRhLnJlY29yZHMpID8gdGhpcy5wcm9wcy5kYXRhLnJlY29yZHMucmVjb3JkcyA6IFtdO1xuXHRcdGNvbnN0IGNhdGVnb3JpZXMgPSAodGhpcy5wcm9wcy5kYXRhLmNhdGVnb3JpZXMpID8gdGhpcy5wcm9wcy5kYXRhLmNhdGVnb3JpZXMucmVjb3JkcyA6IFtdO1xuXHRcdHZhciBrZXkgPSAwO1xuXG5cdFx0Y29uc3QgdG90UGFnZXMgPSBNYXRoLmNlaWwoZGF0YS5sZW5ndGggLyB0aGlzLml0ZW1zUGVyUGFnZSk7XG5cdFx0dmFyIHBhZ2VzID0gW107IGZvcih2YXIgaSA9IDE7IGk8PXRvdFBhZ2VzO2krKyl7cGFnZXMucHVzaChpKX1cblxuXHRcdGNvbnN0IHBhZ2VEYXRhID0gZGF0YS5zbGljZSgodGhpcy5pdGVtc1BlclBhZ2UgKiAodGhpcy5zdGF0ZS5wYWdlIC0gMSkpLCAodGhpcy5pdGVtc1BlclBhZ2UgKiB0aGlzLnN0YXRlLnBhZ2UpKTtcblxuXHRcdHJldHVybiAoXG5cdFx0XHQ8R3JpZENvbnRhaW5lciBjbGFzc05hbWU9J21vZC1rYi1hbmRyb2lkJyByZWY9eyBlbCA9PiB0aGlzLmNvbnRhaW5lciA9IGVsfT5cblx0XHRcdFx0PEdyaWRJdGVtPlx0XHRcdFx0XG5cdFx0XHRcdFx0PGRpdj48RGF0ZSB2YWx1ZT17JzAxLzA1LzIwMTgnfSBjbGFzc05hbWU9J2RhdGUnLz48L2Rpdj5cblx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT0nZXhjZXJwdCc+XG5cdFx0XHRcdFx0XHRSZWNvcGlsYWNpw7NuIGRlIGxpYnJlcsOtYXMgcGFyYSB1dGlsaXphciBlbiBBbmRyb2lkIDxhIGhyZWY9e3RoaXMuYXBpLmRhdGFfa2JfYW5kcm9pZH0+ZGVzY2FyZ2FyPC9hPlxuXHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHQ8L0dyaWRJdGVtPlxuXHRcdFx0XHQ8R3JpZEl0ZW0+XG5cdFx0XHRcdFx0PGJyLz5cblx0XHRcdFx0XHQ8aDE+Q2F0ZWdvciZpYWN1dGU7YXM8L2gxPlxuXHRcdFx0XHRcdDxHcmlkQ29udGFpbmVyIGNsYXNzTmFtZT0nY2F0ZWdvcmllcycgZGlyZWN0aW9uPSdyb3cnPlxuXHRcdFx0XHRcdFx0e2NhdGVnb3JpZXMubWFwKChpdGVtKT0+XG5cdFx0XHRcdFx0XHRcdDxHcmlkSXRlbSBrZXk9e2tleSsrfSB4cz17NH0gbWQ9ezJ9IGxnPXsxfT5cblx0XHRcdFx0XHRcdFx0IFx0PHNwYW4gY2xhc3NOYW1lPXtgY2F0ZWdvcnkgJHsoaXRlbSA9PSB0aGlzLnN0YXRlLmNhdGVnb3J5KSA/IFwiYWN0aXZlXCIgOiBcIlwifWB9IG9uQ2xpY2s9e3RoaXMuc2V0Q2F0ZWdvcnkuYmluZCh0aGlzLCBpdGVtKX0+e2l0ZW19PC9zcGFuPlxuXHRcdFx0XHRcdFx0XHQ8L0dyaWRJdGVtPlxuXHRcdFx0XHRcdFx0KX1cblx0XHRcdFx0XHQ8L0dyaWRDb250YWluZXI+XG5cdFx0XHRcdFx0PGhyLz5cblx0XHRcdFx0PC9HcmlkSXRlbT5cblx0XHRcdFx0PEdyaWRJdGVtPlxuXHRcdFx0XHRcdHtwYWdlRGF0YS5sZW5ndGggPT0gMCAmJiBcblx0XHRcdFx0XHRcdDxkaXY+TG9hZGluZzwvZGl2PlxuXHRcdFx0XHRcdH1cblx0XHRcdFx0XHR7cGFnZURhdGEubGVuZ3RoID4gMCAmJiBwYWdlRGF0YS5tYXAoKGl0ZW0pPT5cblx0XHRcdFx0XHRcdDxkaXYga2V5PXtrZXkrK30gY2xhc3NOYW1lPSdpdGVtJz5cblx0XHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9J3N1YmNhdCc+e2l0ZW0uY2F0Mn08L2Rpdj5cblx0XHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9J3RpdGxlJz57aXRlbS50aXRsZX0gPHNwYW4gY2xhc3NOYW1lPSdyZWZzJz5bcmVmczp7aXRlbS5jb3VudH1dPC9zcGFuPjwvZGl2PlxuXHRcdFx0XHRcdFx0XHR7KGl0ZW0uZGVzYyAmJiBpdGVtLmRlc2MgIT0gXCJcIikgJiYgPGRpdiBjbGFzc05hbWU9J2Rlc2NyaXB0aW9uJz57aXRlbS5kZXNjfTwvZGl2Pn0gXG5cdFx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPSdsaW5rcyc+XG5cdFx0XHRcdFx0XHRcdFx0PHNwYW4gY2xhc3NOYW1lPSdsaW5rJz48YSBocmVmPXtpdGVtLnJlcG99PmdpdGh1YjwvYT4gPC9zcGFuPlxuXHRcdFx0XHRcdFx0XHRcdHsoaXRlbS5ob21lcGFnZSAmJiBpdGVtLmhvbWVwYWdlICE9IFwiXCIpICYmIDxzcGFuIGNsYXNzTmFtZT0nbGluayc+PGEgaHJlZj17aXRlbS5ob21lcGFnZX0+aG9tZXBhZ2U8L2E+IDwvc3Bhbj59IFxuXHRcdFx0XHRcdFx0XHRcdHsoaXRlbS5kb2NzICYmIGl0ZW0uZG9jcyAhPSBcIlwiKSAmJiA8c3BhbiBjbGFzc05hbWU9J2xpbmsnPjxhIGhyZWY9e2l0ZW0uZG9jc30+ZG9jczwvYT4gPC9zcGFuPn0gXG5cdFx0XHRcdFx0XHRcdFx0eyhpdGVtLmRlbW8gJiYgaXRlbS5kZW1vICE9IFwiXCIpICYmIDxzcGFuIGNsYXNzTmFtZT0nbGluayc+PGEgaHJlZj17aXRlbS5kZW1vfT5kZW1vPC9hPiA8L3NwYW4+fSBcblx0XHRcdFx0XHRcdFx0XHR7KGl0ZW0ubWFzdGVycGllY2UgJiYgaXRlbS5tYXN0ZXJwaWVjZSAhPSBcIlwiKSAmJiA8c3BhbiBjbGFzc05hbWU9J2xpbmsnPjxhIGhyZWY9e2l0ZW0ubWFzdGVycGllY2V9Pm1hc3RlciBwaWVjZTwvYT4gPC9zcGFuPn0gXG5cdFx0XHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT0nbGlua3MnPlxuXHRcdFx0XHRcdFx0XHRcdHsoaXRlbS5saWNlbnNlICYmIGl0ZW0ubGljZW5zZSAhPSBcIlwiKSAmJiA8c3BhbiBjbGFzc05hbWU9J3N1YmNhdCc+bGljZW5zZToge2l0ZW0ubGljZW5zZX08L3NwYW4+fSBcblx0XHRcdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPSdpbWFnZXMnPlxuXHRcdFx0XHRcdFx0XHR7aXRlbS5pbWdzLm1hcCgoaXRlbUltZyk9PlxuXHRcdFx0XHRcdFx0XHRcdDxpbWcga2V5PXtrZXkrK30gaGVpZ2h0PVwiMjAwcHhcIiBzcmM9e2l0ZW1JbWd9Lz5cblx0XHRcdFx0XHRcdFx0KX1cblx0XHRcdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0XHQpfVxuXHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPSdwYWdlX2luZGV4Jz5cblx0XHRcdFx0XHR7cGFnZXMubWFwKChpdGVtKT0+XG5cdFx0XHRcdFx0XHQ8c3BhbiBrZXk9e2tleSsrfSBvbkNsaWNrPXt0aGlzLnNldFBhZ2UuYmluZCh0aGlzLCBpdGVtKX0gY2xhc3NOYW1lPXtgcGFnZSAkeyh0aGlzLnN0YXRlLnBhZ2UgPT0gaXRlbSk/ICdhY3RpdmUnIDogJyd9YH0+e2l0ZW19IDwvc3Bhbj5cblx0XHRcdFx0XHQpfVxuXHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHQ8L0dyaWRJdGVtPlxuXHRcdFx0XHQ8R3JpZEl0ZW0gY2xhc3NOYW1lPSdmb290ZXInPlxuXHRcdFx0XHRcdDxoci8+XG5cdFx0XHRcdFx0aW1wb3J0YWRvcyBkZXNkZTpcblx0XHRcdFx0XHQ8dWw+XG5cdFx0XHRcdFx0ICA8bGk+PGEgaHJlZj1cImh0dHBzOi8vZ2l0aHViLmNvbS93YXNhYmVlZi9hd2Vzb21lLWFuZHJvaWQtdWlcIj53YXNhYmVlZi9hd2Vzb21lLWFuZHJvaWQtdWk8L2E+PC9saT5cblx0XHRcdFx0XHQgIDxsaT48YSBocmVmPVwiaHR0cHM6Ly9naXRodWIuY29tL3dhc2FiZWVmL2F3ZXNvbWUtYW5kcm9pZC1saWJyYXJpZXNcIj53YXNhYmVlZi9hd2Vzb21lLWFuZHJvaWQtbGlicmFyaWVzPC9hPjwvbGk+XG5cdFx0XHRcdFx0ICA8bGk+PGEgaHJlZj1cImh0dHBzOi8vZ2l0aHViLmNvbS9UcmluZWEvYW5kcm9pZC1vcGVuLXByb2plY3RcIj5UcmluZWEvYW5kcm9pZC1vcGVuLXByb2plY3Q8L2E+PC9saT5cblx0XHRcdFx0XHQgIDxsaT48YSBocmVmPVwiaHR0cHM6Ly9naXRodWIuY29tL1BoaWxKYXkvQW5kcm9pZEVsZW1lbnRhbHNcIj5QaGlsSmF5L0FuZHJvaWRFbGVtZW50YWxzPC9hPjwvbGk+XG5cdFx0XHRcdFx0ICA8bGk+PGEgaHJlZj1cImh0dHBzOi8vZ2l0aHViLmNvbS90aGFuaHRvYW4xMTk2L2F3ZXNvbWUtYW5kcm9pZC11aVwiPnRoYW5odG9hbjExOTYvYXdlc29tZS1hbmRyb2lkLXVpPC9hPjwvbGk+XG5cdFx0XHRcdFx0ICA8bGk+PGEgaHJlZj1cImh0dHBzOi8vZ2l0aHViLmNvbS90aGFuaHRvYW4xMTk2L2F3ZXNvbWUtYW5kcm9pZFwiPnRoYW5odG9hbjExOTYvYXdlc29tZS1hbmRyb2lkPC9hPio8L2xpPlxuXHRcdFx0XHRcdCAgPGxpPjxhIGhyZWY9XCJodHRwczovL2dpdGh1Yi5jb20vc25vd2RyZWFtL2F3ZXNvbWUtYW5kcm9pZFwiPnNub3dkcmVhbS9hd2Vzb21lLWFuZHJvaWQ8L2E+KjwvbGk+XG5cdFx0XHRcdFx0ICA8bGk+PGEgaHJlZj1cImh0dHBzOi8vZ2l0aHViLmNvbS90aGFuaHRvYW4xMTk2L2F3ZXNvbWUtYW5kcm9pZC1saWJyYXJpZXNcIj50aGFuaHRvYW4xMTk2L2F3ZXNvbWUtYW5kcm9pZC1saWJyYXJpZXM8L2E+KjwvbGk+XG5cdFx0XHRcdFx0ICA8bGk+PGEgaHJlZj1cImh0dHBzOi8vZ2l0aHViLmNvbS9saWdodFNreS9Bd2Vzb21lLU1hdGVyaWFsRGVzaWduXCI+bGlnaHRTa3kvQXdlc29tZS1NYXRlcmlhbERlc2lnbjwvYT4qPC9saT5cblx0XHRcdFx0XHQgIDxsaT48YSBocmVmPVwiaHR0cHM6Ly9naXRodWIuY29tL2NvZGVwYXRoL2FuZHJvaWRfZ3VpZGVzL3dpa2kvTXVzdC1IYXZlLUxpYnJhcmllc1wiPmNvZGVwYXRoL2FuZHJvaWRfZ3VpZGVzPC9hPio8L2xpPlxuXHRcdFx0XHRcdCAgPGxpPjxhIGhyZWY9XCJodHRwczovL2dpdGh1Yi5jb20vbGlnaHRTa3kvQXdlc29tZS1NYXRlcmlhbERlc2lnblwiPmxpZ2h0U2t5L0F3ZXNvbWUtTWF0ZXJpYWxEZXNpZ248L2E+KjwvbGk+XG5cdFx0XHRcdFx0PC91bD5cblx0XHRcdFx0XHQ8L0dyaWRJdGVtPlxuXHRcdFx0PC9HcmlkQ29udGFpbmVyPlxuXHQpO1xuXHR9XG59XG5cbmV4cG9ydCBkZWZhdWx0IENvbXBvbmVudChDb250ZW50KTsiLCJcbnZhciBjb250ZW50ID0gcmVxdWlyZShcIiEhLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vZnJhbWV3b3Jrcy93ZWJhcHBzL3N0YXJ0dXAvbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvaW5kZXguanMhLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vZnJhbWV3b3Jrcy93ZWJhcHBzL3N0YXJ0dXAvbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2xpYi9sb2FkZXIuanMhLi9jb250ZW50LnNjc3NcIik7XG5cbmlmKHR5cGVvZiBjb250ZW50ID09PSAnc3RyaW5nJykgY29udGVudCA9IFtbbW9kdWxlLmlkLCBjb250ZW50LCAnJ11dO1xuXG52YXIgdHJhbnNmb3JtO1xudmFyIGluc2VydEludG87XG5cblxuXG52YXIgb3B0aW9ucyA9IHtcImhtclwiOnRydWV9XG5cbm9wdGlvbnMudHJhbnNmb3JtID0gdHJhbnNmb3JtXG5vcHRpb25zLmluc2VydEludG8gPSB1bmRlZmluZWQ7XG5cbnZhciB1cGRhdGUgPSByZXF1aXJlKFwiIS4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL2ZyYW1ld29ya3Mvd2ViYXBwcy9zdGFydHVwL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvbGliL2FkZFN0eWxlcy5qc1wiKShjb250ZW50LCBvcHRpb25zKTtcblxuaWYoY29udGVudC5sb2NhbHMpIG1vZHVsZS5leHBvcnRzID0gY29udGVudC5sb2NhbHM7XG5cbmlmKG1vZHVsZS5ob3QpIHtcblx0bW9kdWxlLmhvdC5hY2NlcHQoXCIhIS4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL2ZyYW1ld29ya3Mvd2ViYXBwcy9zdGFydHVwL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2luZGV4LmpzIS4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL2ZyYW1ld29ya3Mvd2ViYXBwcy9zdGFydHVwL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9saWIvbG9hZGVyLmpzIS4vY29udGVudC5zY3NzXCIsIGZ1bmN0aW9uKCkge1xuXHRcdHZhciBuZXdDb250ZW50ID0gcmVxdWlyZShcIiEhLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vZnJhbWV3b3Jrcy93ZWJhcHBzL3N0YXJ0dXAvbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvaW5kZXguanMhLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vZnJhbWV3b3Jrcy93ZWJhcHBzL3N0YXJ0dXAvbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2xpYi9sb2FkZXIuanMhLi9jb250ZW50LnNjc3NcIik7XG5cblx0XHRpZih0eXBlb2YgbmV3Q29udGVudCA9PT0gJ3N0cmluZycpIG5ld0NvbnRlbnQgPSBbW21vZHVsZS5pZCwgbmV3Q29udGVudCwgJyddXTtcblxuXHRcdHZhciBsb2NhbHMgPSAoZnVuY3Rpb24oYSwgYikge1xuXHRcdFx0dmFyIGtleSwgaWR4ID0gMDtcblxuXHRcdFx0Zm9yKGtleSBpbiBhKSB7XG5cdFx0XHRcdGlmKCFiIHx8IGFba2V5XSAhPT0gYltrZXldKSByZXR1cm4gZmFsc2U7XG5cdFx0XHRcdGlkeCsrO1xuXHRcdFx0fVxuXG5cdFx0XHRmb3Ioa2V5IGluIGIpIGlkeC0tO1xuXG5cdFx0XHRyZXR1cm4gaWR4ID09PSAwO1xuXHRcdH0oY29udGVudC5sb2NhbHMsIG5ld0NvbnRlbnQubG9jYWxzKSk7XG5cblx0XHRpZighbG9jYWxzKSB0aHJvdyBuZXcgRXJyb3IoJ0Fib3J0aW5nIENTUyBITVIgZHVlIHRvIGNoYW5nZWQgY3NzLW1vZHVsZXMgbG9jYWxzLicpO1xuXG5cdFx0dXBkYXRlKG5ld0NvbnRlbnQpO1xuXHR9KTtcblxuXHRtb2R1bGUuaG90LmRpc3Bvc2UoZnVuY3Rpb24oKSB7IHVwZGF0ZSgpOyB9KTtcbn0iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IEhpZGRlbiBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9IaWRkZW4nO1xuaW1wb3J0IHsgIEJyb3dzZXJWaWV3LCAgTW9iaWxlVmlldyB9IGZyb20gXCJyZWFjdC1kZXZpY2UtZGV0ZWN0XCI7XG5pbXBvcnQgd2l0aE1vZHVsZSBmcm9tICdqbWFycm95YXZlL2NvbXBvbmVudHMvdXhpL2NvcmUvd2l0aC1tb2R1bGUnO1xuaW1wb3J0IExHIGZyb20gXCJqbWFycm95YXZlL2NvbXBvbmVudHMvdXhpL2tiL2FuZHJvaWQvbGF5b3V0L2xnL3BhZ2VcIjtcblxuY2xhc3MgUGFnZUNvbXBvbmVudCBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG5cdHJlbmRlcigpe1xuXHRcdHJldHVybiB0aGlzLnJlbmRlckRlZmF1bHQoKTtcblx0fVxuXG5cdHJlbmRlckRlZmF1bHQoKXtcblx0XHR2YXIgZGF0YSA9IHRoaXMucHJvcHMuZGF0YTtcblx0XHRyZXR1cm4gKFxuXHRcdFx0PGRpdiBzdHlsZT17e3dpZHRoOicxMDAlJ319Plx0XHRcdFx0XG4gICAgXHRcdFx0PExHIGRhdGE9e2RhdGF9Lz5cblx0XHRcdDwvZGl2PlxuXHRcdClcdFx0XG5cdH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgd2l0aE1vZHVsZShQYWdlQ29tcG9uZW50KTsiLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgTGluayB9IGZyb20gJ3JlYWN0LXJvdXRlcidcbmltcG9ydCBHcmlkQ29udGFpbmVyIGZyb20gJ2ptYXJyb3lhdmUvY29tcG9uZW50cy91eGkvY29yZS9ncmlkX2NvbnRhaW5lcic7XG5pbXBvcnQgR3JpZEl0ZW0gZnJvbSAnam1hcnJveWF2ZS9jb21wb25lbnRzL3V4aS9jb3JlL2dyaWRfaXRlbSc7XG5pbXBvcnQgSGlkZGVuIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL0hpZGRlbic7XG5pbXBvcnQgTW9kdWxlcyBmcm9tICdqbWFycm95YXZlL2NvbmYvbGF5b3V0L21vZHVsZXMnO1xuaW1wb3J0IHdpdGhNb2R1bGUgZnJvbSAnam1hcnJveWF2ZS9jb21wb25lbnRzL3V4aS9jb3JlL3dpdGgtbW9kdWxlJztcbmltcG9ydCBCbG9jayBmcm9tICdqbWFycm95YXZlL2NvbXBvbmVudHMvdXhpL2hvbWUvYmxvY2snO1xuaW1wb3J0IE1CbG9jayBmcm9tICdjb3JlL2NvbXBvbmVudHMvbW9ja3VwL2Jsb2NrJztcbmltcG9ydCBTZWN0aW9uIGZyb20gJ2NvcmUvY29tcG9uZW50cy9sYXlvdXQvc2VjdGlvbic7XG5pbXBvcnQgQmxvZ0xpbmsgZnJvbSBcImptYXJyb3lhdmUvY29tcG9uZW50cy9kYXRhL2Jsb2dfbGlua1wiO1xuaW1wb3J0IENvbnRlbnQgZnJvbSAnam1hcnJveWF2ZS9jb21wb25lbnRzL3V4aS9rYi9hbmRyb2lkL2NvbnRlbnQnO1xuXG5jbGFzcyBQYWdlQ29tcG9uZW50IGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcblx0Z2V0TW9kdWxlcygpe1xuXHRcdHZhciBkYXRhID0gdGhpcy5wcm9wcy5kYXRhO1x0XHRcblxuXHRcdHJldHVybiBbXG5cdFx0XHR7dGl0bGU6IFwiVGVzdFwiLCBcdFx0Y29udHJvbDogKE1vZHVsZXMuVHJhbnNmZXJzKSA/IDxkaXY+dGVzdDwvZGl2PiA6IG51bGx9LFxuXHRcdF07XG5cdH1cblxuXHRyZW5kZXIoKXtcblx0XHRjb25zdCBkYXRhID0gdGhpcy5wcm9wcy5kYXRhO1x0XHRcblx0XHRjb25zdCBtb2RzID0gdGhpcy5nZXRNb2R1bGVzKCk7XG5cdFx0Y29uc3QgbW9kVGVzdCA9IG1vZHNbMF07XG5cdFx0cmV0dXJuIChcblx0XHRcdDxHcmlkQ29udGFpbmVyPlxuXHRcdFx0XHQ8R3JpZEl0ZW0+XG5cdFx0XHRcdFx0PEdyaWRDb250YWluZXI+XG5cdFx0XHRcdFx0XHQ8R3JpZEl0ZW0geHM9ezF9IG1kPXsyfT5cblx0XHRcdFx0XHRcdDwvR3JpZEl0ZW0+XG5cdFx0XHRcdFx0XHQ8R3JpZEl0ZW0gIHhzPXsxMH0gbWQ9ezh9PlxuXHRcdFx0XHRcdFx0XHQ8R3JpZENvbnRhaW5lcj5cblx0XHRcdFx0XHRcdFx0XHQ8R3JpZEl0ZW0+XG5cdFx0XHRcdFx0XHRcdFx0XHQ8aDE+PEJsb2dMaW5rIHNsdWc9eydrYid9PmtiPC9CbG9nTGluaz4gPiBhbmRyb2lkPC9oMT5cblx0XHRcdFx0XHRcdFx0XHQ8L0dyaWRJdGVtPlx0XHRcdFxuXHRcdFx0XHRcdFx0XHRcdDxHcmlkSXRlbT5cblx0XHRcdFx0XHRcdFx0XHRcdDxDb250ZW50IGRhdGE9e2RhdGF9Lz5cblx0XHRcdFx0XHRcdFx0XHQ8L0dyaWRJdGVtPiAgXG5cdFx0XHRcdFx0XHRcdDwvR3JpZENvbnRhaW5lcj5cblx0XHRcdFx0XHRcdDwvR3JpZEl0ZW0+XHRcdFx0XG5cdFx0XHRcdFx0XHQ8R3JpZEl0ZW0geHM9ezF9IG1kPXsyfT5cblx0XHRcdFx0XHRcdDwvR3JpZEl0ZW0+XG5cdFx0XHRcdFx0PC9HcmlkQ29udGFpbmVyPlxuXHRcdFx0XHQ8L0dyaWRJdGVtPlxuXHRcdFx0PC9HcmlkQ29udGFpbmVyPlxuXHRcdClcblx0fVxufVxuXG5leHBvcnQgZGVmYXVsdCB3aXRoTW9kdWxlKFBhZ2VDb21wb25lbnQpO1xuXG4iLCJjbGFzcyBNb2R1bGVzIHtcbn1cblxuXG5Nb2R1bGVzLkdhbWVzID0gZmFsc2U7XG5Nb2R1bGVzLlN0YW5kaW5ncyA9IGZhbHNlO1xuTW9kdWxlcy5Qb3N0U2Vhc29uID0gZmFsc2U7XG5Nb2R1bGVzLlRyYW5zZmVycyA9IHRydWU7XG5cbmV4cG9ydCBkZWZhdWx0IChNb2R1bGVzKTsiXSwic291cmNlUm9vdCI6IiJ9