(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[1],{

/***/ "../../../../../frameworks/webapps/startup/node_modules/css-loader/index.js!../../../../../frameworks/webapps/startup/node_modules/sass-loader/lib/loader.js!./src/jmarroyave/components/uxi/cv/content.scss":
/*!**********************************************************************************************************************************************************************************************************!*\
  !*** /media/jm/labs/frameworks/webapps/startup/node_modules/css-loader!/media/jm/labs/frameworks/webapps/startup/node_modules/sass-loader/lib/loader.js!./src/jmarroyave/components/uxi/cv/content.scss ***!
  \**********************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../../../../../../../frameworks/webapps/startup/node_modules/css-loader/lib/css-base.js */ "../../../../../frameworks/webapps/startup/node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/***/ }),

/***/ "../../../../../frameworks/webapps/startup/node_modules/css-loader/index.js!../../../../../frameworks/webapps/startup/node_modules/sass-loader/lib/loader.js!./src/jmarroyave/components/uxi/cv/courses.scss":
/*!**********************************************************************************************************************************************************************************************************!*\
  !*** /media/jm/labs/frameworks/webapps/startup/node_modules/css-loader!/media/jm/labs/frameworks/webapps/startup/node_modules/sass-loader/lib/loader.js!./src/jmarroyave/components/uxi/cv/courses.scss ***!
  \**********************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../../../../../../../frameworks/webapps/startup/node_modules/css-loader/lib/css-base.js */ "../../../../../frameworks/webapps/startup/node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".mod-courses-list .course {\n  padding-bottom: 20px; }\n\n.mod-courses-list .course .header .platform {\n  font-size: 0.7em; }\n\n.mod-courses-list .course .name {\n  font-size: 1.1em; }\n\n.mod-courses-list .course .comments {\n  font-size: 0.9em;\n  text-alignment: justify; }\n\n.mod-courses-list .course .from {\n  font-size: 0.8em; }\n", ""]);

// exports


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

/***/ "./src/jmarroyave/components/uxi/cv/content.js":
/*!*****************************************************!*\
  !*** ./src/jmarroyave/components/uxi/cv/content.js ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_components_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core/components/component */ "./src/core/components/component.js");
/* harmony import */ var _content_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./content.scss */ "./src/jmarroyave/components/uxi/cv/content.scss");
/* harmony import */ var _content_scss__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_content_scss__WEBPACK_IMPORTED_MODULE_2__);
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
				'div',
				{ className: 'mod-content' },
				react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
					'div',
					{ className: 'row' },
					react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
						'div',
						{ className: 'col' },
						react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
							'div',
							null,
							react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
								'h3',
								null,
								'Resumen'
							),
							react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
								'div',
								null,
								'Estudi\xE9 ciencias de la computaci\xF3n y he trabajado en desarrollo de software por varios a\xF1os formando mi experiencia en todo el ciclo de desarrollo del l mismo, desde el an\xE1lisis de requerimientos hasta la implementaci\xF3n del sistema y capacitaci\xF3n de usuarios. Tengo experiencia en diferentes plataformas de desarrollo y en la pr\xE1ctica de varias metodolog\xEDas, adem\xE1s he trabajado gestionando equipos de desarrollo o y administrando el desarrollo tanto de proyectos como productos de software.'
							),
							react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
								'h3',
								null,
								'Experiencia Profesional'
							),
							react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
								'div',
								null,
								react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
									'ul',
									null,
									react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
										'li',
										null,
										'Desarrollo web, desktop y m\xF3vil.'
									),
									react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
										'li',
										null,
										'Desarrollo e integraci\xF3n de sistemas'
									),
									react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
										'li',
										null,
										'Sistemas de informaci\xF3n y gesti\xF3n empresarial.'
									),
									react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
										'li',
										null,
										'Dise\xF1o de sistemas inform\xE1ticos.'
									),
									react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
										'li',
										null,
										'Administraci\xF3n de equipos de desarrollo de software.'
									),
									react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
										'li',
										null,
										'Implementaci\xF3n y capacitaci\xF3n de usuarios tanto operativos como expertos.'
									)
								)
							),
							react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
								'h3',
								null,
								'Formaci\xF3n Acad\xE9mica'
							),
							react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
								'div',
								null,
								'Lic. en Ingenier\xEDa en Ciencias de la Computaci\xF3n - Cum Laude 2,005, Universidad del Valle de Guatemala'
							)
						),
						react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement('br', null),
						react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement('br', null)
					)
				)
			);
		}
	}]);

	return Content;
}(react__WEBPACK_IMPORTED_MODULE_0___default.a.Component);

/* harmony default export */ __webpack_exports__["default"] = (Object(core_components_component__WEBPACK_IMPORTED_MODULE_1__["default"])(Content));

/***/ }),

/***/ "./src/jmarroyave/components/uxi/cv/content.scss":
/*!*******************************************************!*\
  !*** ./src/jmarroyave/components/uxi/cv/content.scss ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../../../../../../../frameworks/webapps/startup/node_modules/css-loader!../../../../../../../../../../frameworks/webapps/startup/node_modules/sass-loader/lib/loader.js!./content.scss */ "../../../../../frameworks/webapps/startup/node_modules/css-loader/index.js!../../../../../frameworks/webapps/startup/node_modules/sass-loader/lib/loader.js!./src/jmarroyave/components/uxi/cv/content.scss");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../../../../../../../../../frameworks/webapps/startup/node_modules/style-loader/lib/addStyles.js */ "../../../../../frameworks/webapps/startup/node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ "./src/jmarroyave/components/uxi/cv/courses.js":
/*!*****************************************************!*\
  !*** ./src/jmarroyave/components/uxi/cv/courses.js ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_components_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core/components/component */ "./src/core/components/component.js");
/* harmony import */ var jmarroyave_components_uxi_core_grid_container__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! jmarroyave/components/uxi/core/grid_container */ "./src/jmarroyave/components/uxi/core/grid_container.js");
/* harmony import */ var jmarroyave_components_uxi_core_grid_item__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! jmarroyave/components/uxi/core/grid_item */ "./src/jmarroyave/components/uxi/core/grid_item.js");
/* harmony import */ var react_star_ratings__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-star-ratings */ "./node_modules/react-star-ratings/build/index.js");
/* harmony import */ var react_star_ratings__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_star_ratings__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _courses_scss__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./courses.scss */ "./src/jmarroyave/components/uxi/cv/courses.scss");
/* harmony import */ var _courses_scss__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_courses_scss__WEBPACK_IMPORTED_MODULE_5__);
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }








function Course(_ref) {
	var data = _ref.data;

	return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
		jmarroyave_components_uxi_core_grid_item__WEBPACK_IMPORTED_MODULE_3__["default"],
		{ className: 'course' },
		react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
			'div',
			{ className: 'header' },
			react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
				'div',
				{ className: 'platform' },
				data.platform
			),
			react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
				'div',
				{ className: 'rating' },
				react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_star_ratings__WEBPACK_IMPORTED_MODULE_4___default.a, { rating: data.rating, starRatedColor: '#222', numberOfStars: 5, starDimension: '8px', starSpacing: '2px' })
			)
		),
		react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
			'div',
			{ className: 'name' },
			data.name
		),
		react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
			'div',
			{ className: 'from' },
			data.from
		),
		data.comments != "" ? react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
			'div',
			{ className: 'comments' },
			'Comentarios: ',
			data.comments
		) : ""
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
			var key = 0;
			return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
				jmarroyave_components_uxi_core_grid_container__WEBPACK_IMPORTED_MODULE_2__["default"],
				{ className: 'mod-courses-list' },
				react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
					jmarroyave_components_uxi_core_grid_item__WEBPACK_IMPORTED_MODULE_3__["default"],
					null,
					react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
						'h3',
						null,
						'Cursos'
					)
				),
				data.map(function (item) {
					return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Course, { data: item, key: key++ });
				})
			);
		}
	}]);

	return List;
}(react__WEBPACK_IMPORTED_MODULE_0___default.a.Component);

/* harmony default export */ __webpack_exports__["default"] = (Object(core_components_component__WEBPACK_IMPORTED_MODULE_1__["default"])(List));

/***/ }),

/***/ "./src/jmarroyave/components/uxi/cv/courses.scss":
/*!*******************************************************!*\
  !*** ./src/jmarroyave/components/uxi/cv/courses.scss ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../../../../../../../frameworks/webapps/startup/node_modules/css-loader!../../../../../../../../../../frameworks/webapps/startup/node_modules/sass-loader/lib/loader.js!./courses.scss */ "../../../../../frameworks/webapps/startup/node_modules/css-loader/index.js!../../../../../frameworks/webapps/startup/node_modules/sass-loader/lib/loader.js!./src/jmarroyave/components/uxi/cv/courses.scss");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../../../../../../../../../frameworks/webapps/startup/node_modules/style-loader/lib/addStyles.js */ "../../../../../frameworks/webapps/startup/node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ "./src/jmarroyave/components/uxi/cv/layout/layout-proxy.js":
/*!*****************************************************************!*\
  !*** ./src/jmarroyave/components/uxi/cv/layout/layout-proxy.js ***!
  \*****************************************************************/
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
/* harmony import */ var jmarroyave_components_uxi_cv_layout_lg_page__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! jmarroyave/components/uxi/cv/layout/lg/page */ "./src/jmarroyave/components/uxi/cv/layout/lg/page.js");
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
				react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(jmarroyave_components_uxi_cv_layout_lg_page__WEBPACK_IMPORTED_MODULE_4__["default"], { data: data })
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
					react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(jmarroyave_components_uxi_cv_layout_lg_page__WEBPACK_IMPORTED_MODULE_4__["default"], { data: data })
				)
			);
		}
	}]);

	return PageComponent;
}(react__WEBPACK_IMPORTED_MODULE_0___default.a.Component);

/* harmony default export */ __webpack_exports__["default"] = (Object(jmarroyave_components_uxi_core_with_module__WEBPACK_IMPORTED_MODULE_3__["default"])(PageComponent));

/***/ }),

/***/ "./src/jmarroyave/components/uxi/cv/layout/lg/page.js":
/*!************************************************************!*\
  !*** ./src/jmarroyave/components/uxi/cv/layout/lg/page.js ***!
  \************************************************************/
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
/* harmony import */ var jmarroyave_components_uxi_cv_content__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! jmarroyave/components/uxi/cv/content */ "./src/jmarroyave/components/uxi/cv/content.js");
/* harmony import */ var jmarroyave_components_uxi_cv_courses__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! jmarroyave/components/uxi/cv/courses */ "./src/jmarroyave/components/uxi/cv/courses.js");
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
						react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
							jmarroyave_components_uxi_core_grid_item__WEBPACK_IMPORTED_MODULE_3__["default"],
							{ style: { padding: '20px 20px 30px 20px' } },
							react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
								jmarroyave_components_uxi_core_grid_container__WEBPACK_IMPORTED_MODULE_2__["default"],
								null,
								react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
									jmarroyave_components_uxi_core_grid_item__WEBPACK_IMPORTED_MODULE_3__["default"],
									null,
									react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
										'h1',
										null,
										'acerca'
									)
								),
								react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
									jmarroyave_components_uxi_core_grid_item__WEBPACK_IMPORTED_MODULE_3__["default"],
									null,
									react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(jmarroyave_components_uxi_cv_content__WEBPACK_IMPORTED_MODULE_10__["default"], null)
								),
								react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
									jmarroyave_components_uxi_core_grid_item__WEBPACK_IMPORTED_MODULE_3__["default"],
									null,
									react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(jmarroyave_components_uxi_cv_courses__WEBPACK_IMPORTED_MODULE_11__["default"], { data: data.courses })
								)
							)
						)
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvam1hcnJveWF2ZS9jb21wb25lbnRzL3V4aS9jdi9jb250ZW50LnNjc3MiLCJ3ZWJwYWNrOi8vLy4vc3JjL2ptYXJyb3lhdmUvY29tcG9uZW50cy91eGkvY3YvY291cnNlcy5zY3NzIiwid2VicGFjazovLy8uL3NyYy9jb3JlL2NvbXBvbmVudHMvbGF5b3V0L3NlY3Rpb24uanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2ptYXJyb3lhdmUvY29tcG9uZW50cy91eGkvY3YvY29udGVudC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvam1hcnJveWF2ZS9jb21wb25lbnRzL3V4aS9jdi9jb250ZW50LnNjc3M/NDAzMCIsIndlYnBhY2s6Ly8vLi9zcmMvam1hcnJveWF2ZS9jb21wb25lbnRzL3V4aS9jdi9jb3Vyc2VzLmpzIiwid2VicGFjazovLy8uL3NyYy9qbWFycm95YXZlL2NvbXBvbmVudHMvdXhpL2N2L2NvdXJzZXMuc2Nzcz85ZTc5Iiwid2VicGFjazovLy8uL3NyYy9qbWFycm95YXZlL2NvbXBvbmVudHMvdXhpL2N2L2xheW91dC9sYXlvdXQtcHJveHkuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2ptYXJyb3lhdmUvY29tcG9uZW50cy91eGkvY3YvbGF5b3V0L2xnL3BhZ2UuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2ptYXJyb3lhdmUvY29uZi9sYXlvdXQvbW9kdWxlcy5qcyJdLCJuYW1lcyI6WyJzdHlsZXMiLCJyb290Iiwid2lkdGgiLCJib3hTaXppbmciLCJwYWRkaW5nIiwiTGF5b3V0U2VjdGlvbiIsImNsYXNzZXMiLCJwcm9wcyIsImNvbG9yIiwiYmFja2dyb3VuZENvbG9yIiwiY2hpbGRyZW4iLCJSZWFjdCIsIkNvbXBvbmVudCIsIndpdGhTdHlsZXMiLCJDb250ZW50IiwiY29udGV4dCIsImFwaSIsIndpbmRvdyIsIl9fYXBpIiwiZGF0YSIsImtleSIsIkNvdXJzZSIsInBsYXRmb3JtIiwicmF0aW5nIiwibmFtZSIsImZyb20iLCJjb21tZW50cyIsIkxpc3QiLCJtYXAiLCJpdGVtIiwiUGFnZUNvbXBvbmVudCIsInJlbmRlckRlZmF1bHQiLCJ3aXRoTW9kdWxlIiwidGl0bGUiLCJjb250cm9sIiwiTW9kdWxlcyIsIlRyYW5zZmVycyIsIm1vZHMiLCJnZXRNb2R1bGVzIiwibW9kVGVzdCIsImNvdXJzZXMiLCJHYW1lcyIsIlN0YW5kaW5ncyIsIlBvc3RTZWFzb24iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUFBLDJCQUEyQixtQkFBTyxDQUFDLDJMQUFrRztBQUNySTs7O0FBR0E7QUFDQSxjQUFjLFFBQVM7O0FBRXZCOzs7Ozs7Ozs7Ozs7QUNQQSwyQkFBMkIsbUJBQU8sQ0FBQywyTEFBa0c7QUFDckk7OztBQUdBO0FBQ0EsY0FBYyxRQUFTLDhCQUE4Qix5QkFBeUIsRUFBRSxpREFBaUQscUJBQXFCLEVBQUUscUNBQXFDLHFCQUFxQixFQUFFLHlDQUF5QyxxQkFBcUIsNEJBQTRCLEVBQUUscUNBQXFDLHFCQUFxQixFQUFFOztBQUU1Vzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNQQTtBQUNBOztBQUVBLElBQU1BLFNBQVMsU0FBVEEsTUFBUztBQUFBLFNBQVU7QUFDeEJDLFVBQU87QUFDTkMsYUFBTyxNQUREO0FBRU5DLGlCQUFXLFlBRkw7QUFHTkMsZUFBUztBQUhIO0FBRGlCLEdBQVY7QUFBQSxDQUFmOztJQU9NQyxhOzs7Ozs7Ozs7Ozs2QkFDSztBQUNSLFVBQU1DLFVBQVUsS0FBS0MsS0FBTCxDQUFXRCxPQUEzQjtBQUNBO0FBQ0EsVUFBTUUsUUFBUyxXQUFXLEtBQUtELEtBQWpCLEdBQTBCLEtBQUtBLEtBQUwsQ0FBV0MsS0FBckMsR0FBNkMsT0FBM0Q7QUFDQyxhQUNFO0FBQUE7QUFBQSxVQUFLLFdBQVdGLFFBQVFMLElBQXhCLEVBQThCLE9BQU8sRUFBQ1EsaUJBQWlCRCxLQUFsQixFQUFyQztBQUNFLGFBQUtELEtBQUwsQ0FBV0c7QUFEYixPQURGO0FBS0Q7Ozs7RUFWeUJDLDRDQUFLQSxDQUFDQyxTOztBQWFuQkMs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QUE7QUFDQyxvRUFBQyw2RUFBRDtBQURELFNBSkQ7QUFPQztBQUFDLHlGQUFEO0FBQUE7QUFDQyxvRUFBQyw2RUFBRCxJQUFTLE1BQU1lLEtBQUtxQixPQUFwQjtBQUREO0FBUEQ7QUFERDtBQUREO0FBREQ7QUFERCxJQUREO0FBcUJBOzs7O0VBbEMwQjdCLDRDQUFLQSxDQUFDQyxTOztBQXFDbkJvQix5SkFBVUEsQ0FBQ0YsYUFBWCxDQUFmLEU7Ozs7Ozs7Ozs7Ozs7OztJQ2xETUssTzs7OztBQUlOQSxRQUFRTSxLQUFSLEdBQWdCLEtBQWhCO0FBQ0FOLFFBQVFPLFNBQVIsR0FBb0IsS0FBcEI7QUFDQVAsUUFBUVEsVUFBUixHQUFxQixLQUFyQjtBQUNBUixRQUFRQyxTQUFSLEdBQW9CLElBQXBCOztBQUVnQkQsc0VBQWhCLEUiLCJmaWxlIjoiMS5qcyIsInNvdXJjZXNDb250ZW50IjpbImV4cG9ydHMgPSBtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCIuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9mcmFtZXdvcmtzL3dlYmFwcHMvc3RhcnR1cC9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9saWIvY3NzLWJhc2UuanNcIikoZmFsc2UpO1xuLy8gaW1wb3J0c1xuXG5cbi8vIG1vZHVsZVxuZXhwb3J0cy5wdXNoKFttb2R1bGUuaWQsIFwiXCIsIFwiXCJdKTtcblxuLy8gZXhwb3J0c1xuIiwiZXhwb3J0cyA9IG1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL2ZyYW1ld29ya3Mvd2ViYXBwcy9zdGFydHVwL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2xpYi9jc3MtYmFzZS5qc1wiKShmYWxzZSk7XG4vLyBpbXBvcnRzXG5cblxuLy8gbW9kdWxlXG5leHBvcnRzLnB1c2goW21vZHVsZS5pZCwgXCIubW9kLWNvdXJzZXMtbGlzdCAuY291cnNlIHtcXG4gIHBhZGRpbmctYm90dG9tOiAyMHB4OyB9XFxuXFxuLm1vZC1jb3Vyc2VzLWxpc3QgLmNvdXJzZSAuaGVhZGVyIC5wbGF0Zm9ybSB7XFxuICBmb250LXNpemU6IDAuN2VtOyB9XFxuXFxuLm1vZC1jb3Vyc2VzLWxpc3QgLmNvdXJzZSAubmFtZSB7XFxuICBmb250LXNpemU6IDEuMWVtOyB9XFxuXFxuLm1vZC1jb3Vyc2VzLWxpc3QgLmNvdXJzZSAuY29tbWVudHMge1xcbiAgZm9udC1zaXplOiAwLjllbTtcXG4gIHRleHQtYWxpZ25tZW50OiBqdXN0aWZ5OyB9XFxuXFxuLm1vZC1jb3Vyc2VzLWxpc3QgLmNvdXJzZSAuZnJvbSB7XFxuICBmb250LXNpemU6IDAuOGVtOyB9XFxuXCIsIFwiXCJdKTtcblxuLy8gZXhwb3J0c1xuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IHdpdGhTdHlsZXMgfSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9zdHlsZXMnO1xuXG5jb25zdCBzdHlsZXMgPSB0aGVtZSA9PiAoe1xuXHRyb290IDoge1xuXHRcdHdpZHRoOiAnMTAwJScsXG5cdFx0Ym94U2l6aW5nOiAnYm9yZGVyLWJveCcsXG5cdFx0cGFkZGluZzogJzE2cHgnLFxuXHR9LFxufSk7XG5jbGFzcyBMYXlvdXRTZWN0aW9uIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHsgXG4gIHJlbmRlcigpIHtcbiAgXHRjb25zdCBjbGFzc2VzID0gdGhpcy5wcm9wcy5jbGFzc2VzO1xuICBcdC8vY29uc3QgaGVpZ2h0ID0gKFwiaGVpZ2h0XCIgaW4gdGhpcy5wcm9wcykgPyB0aGlzLnByb3BzLmhlaWdodCA6ICczMHB4JztcbiAgXHRjb25zdCBjb2xvciA9IChcImNvbG9yXCIgaW4gdGhpcy5wcm9wcykgPyB0aGlzLnByb3BzLmNvbG9yIDogJ3doaXRlJztcbiAgICByZXR1cm4gKFxuICAgICAgPGRpdiBjbGFzc05hbWU9e2NsYXNzZXMucm9vdH0gc3R5bGU9e3tiYWNrZ3JvdW5kQ29sb3I6IGNvbG9yfX0+XG4gICAgICBcdHt0aGlzLnByb3BzLmNoaWxkcmVufVxuICAgICAgPC9kaXY+XG4gICAgKTtcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCB3aXRoU3R5bGVzKHN0eWxlcykoTGF5b3V0U2VjdGlvbik7IiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBDb21wb25lbnQgZnJvbSAnY29yZS9jb21wb25lbnRzL2NvbXBvbmVudCc7XG5pbXBvcnQgXCIuL2NvbnRlbnQuc2Nzc1wiO1xuXG5jbGFzcyBDb250ZW50IGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcblx0Y29uc3RydWN0b3IocHJvcHMsY29udGV4dCkge1xuXHRcdHN1cGVyKHByb3BzLGNvbnRleHQpO1xuXHRcdHRoaXMuYXBpID0gd2luZG93Ll9fYXBpO1xuXHR9XG5cblx0Y29tcG9uZW50RGlkTW91bnQoKXtcblx0fVxuXG5cdHJlbmRlcigpe1xuXHRcdGNvbnN0IGRhdGEgPSB0aGlzLnByb3BzLmRhdGE7XG5cdFx0dmFyIGtleSA9IDA7XG5cdFx0cmV0dXJuIChcblx0XHRcdDxkaXYgY2xhc3NOYW1lPVwibW9kLWNvbnRlbnRcIj5cblx0XHRcdCAgPGRpdiBjbGFzc05hbWU9XCJyb3dcIj5cblx0XHRcdCAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbFwiPlxuXHRcdFx0XHRcdFx0PGRpdj5cblx0XHRcdFx0XHRcdFx0PGgzPlJlc3VtZW48L2gzPlxuXHRcdFx0XHRcdFx0XHQ8ZGl2PlxuXHRcdFx0XHRcdFx0XHRcdEVzdHVkacOpIGNpZW5jaWFzIGRlIGxhIGNvbXB1dGFjacOzbiB5IGhlIHRyYWJhamFkbyBlbiBkZXNhcnJvbGxvIGRlIHNvZnR3YXJlIHBvciB2YXJpb3MgYcOxb3MgZm9ybWFuZG8gbWkgZXhwZXJpZW5jaWEgZW5cblx0XHRcdFx0XHRcdFx0XHR0b2RvIGVsIGNpY2xvIGRlIGRlc2Fycm9sbG8gZGVsIGwgbWlzbW8sIGRlc2RlIGVsIGFuw6FsaXNpcyBkZSByZXF1ZXJpbWllbnRvcyBoYXN0YSBsYSBpbXBsZW1lbnRhY2nDs24gZGVsIHNpc3RlbWEgeVxuXHRcdFx0XHRcdFx0XHRcdGNhcGFjaXRhY2nDs24gZGUgdXN1YXJpb3MuXG5cdFx0XHRcdFx0XHRcdFx0VGVuZ28gZXhwZXJpZW5jaWEgZW4gZGlmZXJlbnRlcyBwbGF0YWZvcm1hcyBkZSBkZXNhcnJvbGxvIHkgZW4gbGEgcHLDoWN0aWNhIGRlIHZhcmlhcyBtZXRvZG9sb2fDrWFzLCBhZGVtw6FzIGhlIHRyYWJhamFkb1xuXHRcdFx0XHRcdFx0XHRcdGdlc3Rpb25hbmRvIGVxdWlwb3MgZGUgZGVzYXJyb2xsb1xuXHRcdFx0XHRcdFx0XHRcdG8geSBhZG1pbmlzdHJhbmRvIGVsIGRlc2Fycm9sbG8gdGFudG8gZGUgcHJveWVjdG9zIGNvbW8gcHJvZHVjdG9zIGRlIHNvZnR3YXJlLlxuXHRcdFx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0XHRcdFx0PGgzPkV4cGVyaWVuY2lhIFByb2Zlc2lvbmFsPC9oMz5cblx0XHRcdFx0XHRcdFx0PGRpdj5cblx0XHRcdFx0XHRcdFx0XHQ8dWw+XG5cdFx0XHRcdFx0XHRcdFx0XHQ8bGk+RGVzYXJyb2xsbyB3ZWIsIGRlc2t0b3AgeSBtw7N2aWwuPC9saT5cblx0XHRcdFx0XHRcdFx0XHRcdDxsaT5EZXNhcnJvbGxvIGUgaW50ZWdyYWNpw7NuIGRlIHNpc3RlbWFzPC9saT5cblx0XHRcdFx0XHRcdFx0XHRcdDxsaT5TaXN0ZW1hcyBkZSBpbmZvcm1hY2nDs24geSBnZXN0acOzbiBlbXByZXNhcmlhbC48L2xpPlxuXHRcdFx0XHRcdFx0XHRcdFx0PGxpPkRpc2XDsW8gZGUgc2lzdGVtYXMgaW5mb3Jtw6F0aWNvcy48L2xpPlxuXHRcdFx0XHRcdFx0XHRcdFx0PGxpPkFkbWluaXN0cmFjacOzbiBkZSBlcXVpcG9zIGRlIGRlc2Fycm9sbG8gZGUgc29mdHdhcmUuPC9saT5cblx0XHRcdFx0XHRcdFx0XHRcdDxsaT5JbXBsZW1lbnRhY2nDs24geSBjYXBhY2l0YWNpw7NuIGRlIHVzdWFyaW9zIHRhbnRvIG9wZXJhdGl2b3MgY29tbyBleHBlcnRvcy48L2xpPlxuXHRcdFx0XHRcdFx0XHRcdDwvdWw+XG5cdFx0XHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHRcdFx0XHQ8aDM+Rm9ybWFjacOzbiBBY2Fkw6ltaWNhPC9oMz5cblx0XHRcdFx0XHRcdFx0PGRpdj5cblx0XHRcdFx0XHRcdFx0XHRMaWMuIGVuIEluZ2VuaWVyw61hIGVuIENpZW5jaWFzIGRlIGxhIENvbXB1dGFjacOzbiAtIEN1bSBMYXVkZVxuXHRcdFx0XHRcdFx0XHRcdDIsMDA1LCBVbml2ZXJzaWRhZCBkZWwgVmFsbGUgZGUgR3VhdGVtYWxhXG5cdFx0XHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdFx0XHQ8YnIvPjxici8+XG5cdFx0XHQgICAgPC9kaXY+XG5cdFx0XHQgIDwvZGl2PlxuXHRcdFx0PC9kaXY+XG5cdFx0KTtcblx0fVxufVxuXG5leHBvcnQgZGVmYXVsdCBDb21wb25lbnQoQ29udGVudCk7IiwiXG52YXIgY29udGVudCA9IHJlcXVpcmUoXCIhIS4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL2ZyYW1ld29ya3Mvd2ViYXBwcy9zdGFydHVwL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2luZGV4LmpzIS4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL2ZyYW1ld29ya3Mvd2ViYXBwcy9zdGFydHVwL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9saWIvbG9hZGVyLmpzIS4vY29udGVudC5zY3NzXCIpO1xuXG5pZih0eXBlb2YgY29udGVudCA9PT0gJ3N0cmluZycpIGNvbnRlbnQgPSBbW21vZHVsZS5pZCwgY29udGVudCwgJyddXTtcblxudmFyIHRyYW5zZm9ybTtcbnZhciBpbnNlcnRJbnRvO1xuXG5cblxudmFyIG9wdGlvbnMgPSB7XCJobXJcIjp0cnVlfVxuXG5vcHRpb25zLnRyYW5zZm9ybSA9IHRyYW5zZm9ybVxub3B0aW9ucy5pbnNlcnRJbnRvID0gdW5kZWZpbmVkO1xuXG52YXIgdXBkYXRlID0gcmVxdWlyZShcIiEuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9mcmFtZXdvcmtzL3dlYmFwcHMvc3RhcnR1cC9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2xpYi9hZGRTdHlsZXMuanNcIikoY29udGVudCwgb3B0aW9ucyk7XG5cbmlmKGNvbnRlbnQubG9jYWxzKSBtb2R1bGUuZXhwb3J0cyA9IGNvbnRlbnQubG9jYWxzO1xuXG5pZihtb2R1bGUuaG90KSB7XG5cdG1vZHVsZS5ob3QuYWNjZXB0KFwiISEuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9mcmFtZXdvcmtzL3dlYmFwcHMvc3RhcnR1cC9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9pbmRleC5qcyEuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9mcmFtZXdvcmtzL3dlYmFwcHMvc3RhcnR1cC9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvbGliL2xvYWRlci5qcyEuL2NvbnRlbnQuc2Nzc1wiLCBmdW5jdGlvbigpIHtcblx0XHR2YXIgbmV3Q29udGVudCA9IHJlcXVpcmUoXCIhIS4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL2ZyYW1ld29ya3Mvd2ViYXBwcy9zdGFydHVwL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2luZGV4LmpzIS4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL2ZyYW1ld29ya3Mvd2ViYXBwcy9zdGFydHVwL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9saWIvbG9hZGVyLmpzIS4vY29udGVudC5zY3NzXCIpO1xuXG5cdFx0aWYodHlwZW9mIG5ld0NvbnRlbnQgPT09ICdzdHJpbmcnKSBuZXdDb250ZW50ID0gW1ttb2R1bGUuaWQsIG5ld0NvbnRlbnQsICcnXV07XG5cblx0XHR2YXIgbG9jYWxzID0gKGZ1bmN0aW9uKGEsIGIpIHtcblx0XHRcdHZhciBrZXksIGlkeCA9IDA7XG5cblx0XHRcdGZvcihrZXkgaW4gYSkge1xuXHRcdFx0XHRpZighYiB8fCBhW2tleV0gIT09IGJba2V5XSkgcmV0dXJuIGZhbHNlO1xuXHRcdFx0XHRpZHgrKztcblx0XHRcdH1cblxuXHRcdFx0Zm9yKGtleSBpbiBiKSBpZHgtLTtcblxuXHRcdFx0cmV0dXJuIGlkeCA9PT0gMDtcblx0XHR9KGNvbnRlbnQubG9jYWxzLCBuZXdDb250ZW50LmxvY2FscykpO1xuXG5cdFx0aWYoIWxvY2FscykgdGhyb3cgbmV3IEVycm9yKCdBYm9ydGluZyBDU1MgSE1SIGR1ZSB0byBjaGFuZ2VkIGNzcy1tb2R1bGVzIGxvY2Fscy4nKTtcblxuXHRcdHVwZGF0ZShuZXdDb250ZW50KTtcblx0fSk7XG5cblx0bW9kdWxlLmhvdC5kaXNwb3NlKGZ1bmN0aW9uKCkgeyB1cGRhdGUoKTsgfSk7XG59IiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBDb21wb25lbnQgZnJvbSAnY29yZS9jb21wb25lbnRzL2NvbXBvbmVudCc7XG5pbXBvcnQgR3JpZENvbnRhaW5lciBmcm9tICdqbWFycm95YXZlL2NvbXBvbmVudHMvdXhpL2NvcmUvZ3JpZF9jb250YWluZXInO1xuaW1wb3J0IEdyaWRJdGVtIGZyb20gJ2ptYXJyb3lhdmUvY29tcG9uZW50cy91eGkvY29yZS9ncmlkX2l0ZW0nO1xuaW1wb3J0IFN0YXJSYXRpbmdzIGZyb20gJ3JlYWN0LXN0YXItcmF0aW5ncyc7XG5pbXBvcnQgXCIuL2NvdXJzZXMuc2Nzc1wiO1xuXG5mdW5jdGlvbiBDb3Vyc2Uoe2RhdGF9KXtcblx0cmV0dXJuIChcblx0XHQ8R3JpZEl0ZW0gY2xhc3NOYW1lPSdjb3Vyc2UnPlxuXHQgICAgICA8ZGl2IGNsYXNzTmFtZT0naGVhZGVyJz5cbiAgICBcdCAgICA8ZGl2IGNsYXNzTmFtZT0ncGxhdGZvcm0nPntkYXRhLnBsYXRmb3JtfTwvZGl2PlxuXHQgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdyYXRpbmcnPjxTdGFyUmF0aW5ncyByYXRpbmc9e2RhdGEucmF0aW5nfSBzdGFyUmF0ZWRDb2xvcj1cIiMyMjJcIiBudW1iZXJPZlN0YXJzPXs1fSBzdGFyRGltZW5zaW9uPSc4cHgnIHN0YXJTcGFjaW5nPVwiMnB4XCIvPjwvZGl2PlxuXHQgICAgICA8L2Rpdj5cblx0ICBcdFx0PGRpdiBjbGFzc05hbWU9J25hbWUnPntkYXRhLm5hbWV9PC9kaXY+XG5cdFx0ICAgIDxkaXYgY2xhc3NOYW1lPSdmcm9tJz57ZGF0YS5mcm9tfTwvZGl2PlxuXHQgIFx0XHR7KGRhdGEuY29tbWVudHMgIT0gXCJcIikgPyA8ZGl2IGNsYXNzTmFtZT0nY29tbWVudHMnPkNvbWVudGFyaW9zOiB7ZGF0YS5jb21tZW50c308L2Rpdj4gOiBcIlwifVxuXHRcdDwvR3JpZEl0ZW0+XG5cdClcbn1cblxuY2xhc3MgTGlzdCBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG5cdGNvbnN0cnVjdG9yKHByb3BzLGNvbnRleHQpIHtcblx0XHRzdXBlcihwcm9wcyxjb250ZXh0KTtcblx0XHR0aGlzLmFwaSA9IHdpbmRvdy5fX2FwaTtcblx0fVxuXG5cdGNvbXBvbmVudERpZE1vdW50KCl7XG5cdH1cblxuXHRyZW5kZXIoKXtcblx0XHRjb25zdCBkYXRhID0gdGhpcy5wcm9wcy5kYXRhO1xuXHRcdHZhciBrZXkgPSAwO1xuXHRcdHJldHVybiAoXG5cdFx0XHQ8R3JpZENvbnRhaW5lciBjbGFzc05hbWU9J21vZC1jb3Vyc2VzLWxpc3QnPlxuXHRcdFx0XHQ8R3JpZEl0ZW0+XG5cdFx0XHRcdDxoMz5DdXJzb3M8L2gzPlxuXHRcdFx0XHQ8L0dyaWRJdGVtPlxuXHRcdFx0XHR7ZGF0YS5tYXAoKGl0ZW0pPT5cblx0XHRcdFx0XHQ8Q291cnNlIGRhdGE9e2l0ZW19IGtleT17a2V5Kyt9Lz5cblx0XHRcdFx0KX1cblx0XHRcdDwvR3JpZENvbnRhaW5lcj5cblx0XHQpO1xuXHR9XG59XG5cbmV4cG9ydCBkZWZhdWx0IENvbXBvbmVudChMaXN0KTsiLCJcbnZhciBjb250ZW50ID0gcmVxdWlyZShcIiEhLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vZnJhbWV3b3Jrcy93ZWJhcHBzL3N0YXJ0dXAvbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvaW5kZXguanMhLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vZnJhbWV3b3Jrcy93ZWJhcHBzL3N0YXJ0dXAvbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2xpYi9sb2FkZXIuanMhLi9jb3Vyc2VzLnNjc3NcIik7XG5cbmlmKHR5cGVvZiBjb250ZW50ID09PSAnc3RyaW5nJykgY29udGVudCA9IFtbbW9kdWxlLmlkLCBjb250ZW50LCAnJ11dO1xuXG52YXIgdHJhbnNmb3JtO1xudmFyIGluc2VydEludG87XG5cblxuXG52YXIgb3B0aW9ucyA9IHtcImhtclwiOnRydWV9XG5cbm9wdGlvbnMudHJhbnNmb3JtID0gdHJhbnNmb3JtXG5vcHRpb25zLmluc2VydEludG8gPSB1bmRlZmluZWQ7XG5cbnZhciB1cGRhdGUgPSByZXF1aXJlKFwiIS4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL2ZyYW1ld29ya3Mvd2ViYXBwcy9zdGFydHVwL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvbGliL2FkZFN0eWxlcy5qc1wiKShjb250ZW50LCBvcHRpb25zKTtcblxuaWYoY29udGVudC5sb2NhbHMpIG1vZHVsZS5leHBvcnRzID0gY29udGVudC5sb2NhbHM7XG5cbmlmKG1vZHVsZS5ob3QpIHtcblx0bW9kdWxlLmhvdC5hY2NlcHQoXCIhIS4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL2ZyYW1ld29ya3Mvd2ViYXBwcy9zdGFydHVwL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2luZGV4LmpzIS4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL2ZyYW1ld29ya3Mvd2ViYXBwcy9zdGFydHVwL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9saWIvbG9hZGVyLmpzIS4vY291cnNlcy5zY3NzXCIsIGZ1bmN0aW9uKCkge1xuXHRcdHZhciBuZXdDb250ZW50ID0gcmVxdWlyZShcIiEhLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vZnJhbWV3b3Jrcy93ZWJhcHBzL3N0YXJ0dXAvbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvaW5kZXguanMhLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vZnJhbWV3b3Jrcy93ZWJhcHBzL3N0YXJ0dXAvbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2xpYi9sb2FkZXIuanMhLi9jb3Vyc2VzLnNjc3NcIik7XG5cblx0XHRpZih0eXBlb2YgbmV3Q29udGVudCA9PT0gJ3N0cmluZycpIG5ld0NvbnRlbnQgPSBbW21vZHVsZS5pZCwgbmV3Q29udGVudCwgJyddXTtcblxuXHRcdHZhciBsb2NhbHMgPSAoZnVuY3Rpb24oYSwgYikge1xuXHRcdFx0dmFyIGtleSwgaWR4ID0gMDtcblxuXHRcdFx0Zm9yKGtleSBpbiBhKSB7XG5cdFx0XHRcdGlmKCFiIHx8IGFba2V5XSAhPT0gYltrZXldKSByZXR1cm4gZmFsc2U7XG5cdFx0XHRcdGlkeCsrO1xuXHRcdFx0fVxuXG5cdFx0XHRmb3Ioa2V5IGluIGIpIGlkeC0tO1xuXG5cdFx0XHRyZXR1cm4gaWR4ID09PSAwO1xuXHRcdH0oY29udGVudC5sb2NhbHMsIG5ld0NvbnRlbnQubG9jYWxzKSk7XG5cblx0XHRpZighbG9jYWxzKSB0aHJvdyBuZXcgRXJyb3IoJ0Fib3J0aW5nIENTUyBITVIgZHVlIHRvIGNoYW5nZWQgY3NzLW1vZHVsZXMgbG9jYWxzLicpO1xuXG5cdFx0dXBkYXRlKG5ld0NvbnRlbnQpO1xuXHR9KTtcblxuXHRtb2R1bGUuaG90LmRpc3Bvc2UoZnVuY3Rpb24oKSB7IHVwZGF0ZSgpOyB9KTtcbn0iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IEhpZGRlbiBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9IaWRkZW4nO1xuaW1wb3J0IHsgIEJyb3dzZXJWaWV3LCAgTW9iaWxlVmlldyB9IGZyb20gXCJyZWFjdC1kZXZpY2UtZGV0ZWN0XCI7XG5pbXBvcnQgd2l0aE1vZHVsZSBmcm9tICdqbWFycm95YXZlL2NvbXBvbmVudHMvdXhpL2NvcmUvd2l0aC1tb2R1bGUnO1xuaW1wb3J0IExHIGZyb20gXCJqbWFycm95YXZlL2NvbXBvbmVudHMvdXhpL2N2L2xheW91dC9sZy9wYWdlXCI7XG5cbmNsYXNzIFBhZ2VDb21wb25lbnQgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuXHRyZW5kZXIoKXtcblx0XHRyZXR1cm4gdGhpcy5yZW5kZXJEZWZhdWx0KCk7XG5cdH1cblxuXHRyZW5kZXJEZWZhdWx0KCl7XG5cdFx0dmFyIGRhdGEgPSB0aGlzLnByb3BzLmRhdGE7XG5cdFx0cmV0dXJuIChcblx0XHRcdDxkaXYgc3R5bGU9e3t3aWR0aDonMTAwJSd9fT5cdFx0XHRcdFxuICAgIFx0XHRcdDxMRyBkYXRhPXtkYXRhfS8+XG5cdFx0XHQ8L2Rpdj5cblx0XHQpXHRcdFxuXHR9XG5cblx0cmVuZGVyTXVsdGlwbGUoKXtcblx0XHR2YXIgZGF0YSA9IHRoaXMucHJvcHMuZGF0YTtcblx0XHRyZXR1cm4gKFxuXHRcdFx0PGRpdiBzdHlsZT17e3dpZHRoOicxMDAlJ319Plx0XHRcdFx0XG4gICAgICAgIFx0XHQ8SGlkZGVuIG9ubHk9e1snc20nLCAnbWQnLCAnbGcnLCAneGwnXX0+XG4gICAgICAgIFx0XHRcdFxuXHRcdCAgICAgICAgPC9IaWRkZW4+XG4gICAgICAgIFx0XHQ8SGlkZGVuIG9ubHk9e1sneHMnLCAnbWQnLCAnbGcnLCAneGwnXX0+XG4gICAgICAgIFx0XHRcdFxuXHRcdCAgICAgICAgPC9IaWRkZW4+XG4gICAgICAgIFx0XHQ8SGlkZGVuIG9ubHk9e1sneHMnLCAnc20nXX0+XG4gICAgICAgIFx0XHRcdDxMRyBkYXRhPXtkYXRhfS8+XG5cdFx0ICAgICAgICA8L0hpZGRlbj5cblx0XHRcdDwvZGl2PlxuXHRcdClcblx0fVxufVxuXG5leHBvcnQgZGVmYXVsdCB3aXRoTW9kdWxlKFBhZ2VDb21wb25lbnQpOyIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBMaW5rIH0gZnJvbSAncmVhY3Qtcm91dGVyJ1xuaW1wb3J0IEdyaWRDb250YWluZXIgZnJvbSAnam1hcnJveWF2ZS9jb21wb25lbnRzL3V4aS9jb3JlL2dyaWRfY29udGFpbmVyJztcbmltcG9ydCBHcmlkSXRlbSBmcm9tICdqbWFycm95YXZlL2NvbXBvbmVudHMvdXhpL2NvcmUvZ3JpZF9pdGVtJztcbmltcG9ydCBIaWRkZW4gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvSGlkZGVuJztcbmltcG9ydCBNb2R1bGVzIGZyb20gJ2ptYXJyb3lhdmUvY29uZi9sYXlvdXQvbW9kdWxlcyc7XG5pbXBvcnQgd2l0aE1vZHVsZSBmcm9tICdqbWFycm95YXZlL2NvbXBvbmVudHMvdXhpL2NvcmUvd2l0aC1tb2R1bGUnO1xuaW1wb3J0IEJsb2NrIGZyb20gJ2ptYXJyb3lhdmUvY29tcG9uZW50cy91eGkvaG9tZS9ibG9jayc7XG5pbXBvcnQgTUJsb2NrIGZyb20gJ2NvcmUvY29tcG9uZW50cy9tb2NrdXAvYmxvY2snO1xuaW1wb3J0IFNlY3Rpb24gZnJvbSAnY29yZS9jb21wb25lbnRzL2xheW91dC9zZWN0aW9uJztcbmltcG9ydCBDb250ZW50IGZyb20gJ2ptYXJyb3lhdmUvY29tcG9uZW50cy91eGkvY3YvY29udGVudCc7XG5pbXBvcnQgQ291cnNlcyBmcm9tICdqbWFycm95YXZlL2NvbXBvbmVudHMvdXhpL2N2L2NvdXJzZXMnO1xuXG5jbGFzcyBQYWdlQ29tcG9uZW50IGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcblx0Z2V0TW9kdWxlcygpe1xuXHRcdHZhciBkYXRhID0gdGhpcy5wcm9wcy5kYXRhO1x0XHRcblxuXHRcdHJldHVybiBbXG5cdFx0XHR7dGl0bGU6IFwiVGVzdFwiLCBcdFx0Y29udHJvbDogKE1vZHVsZXMuVHJhbnNmZXJzKSA/IDxkaXY+dGVzdDwvZGl2PiA6IG51bGx9LFxuXHRcdF07XG5cdH1cblxuXHRyZW5kZXIoKXtcblx0XHRjb25zdCBkYXRhID0gdGhpcy5wcm9wcy5kYXRhO1x0XHRcblx0XHRjb25zdCBtb2RzID0gdGhpcy5nZXRNb2R1bGVzKCk7XG5cdFx0Y29uc3QgbW9kVGVzdCA9IG1vZHNbMF07XG5cdFx0cmV0dXJuIChcblx0XHRcdDxHcmlkQ29udGFpbmVyPlxuXHRcdFx0XHQ8R3JpZEl0ZW0+XG5cdFx0XHRcdFx0PEdyaWRDb250YWluZXI+XG5cdFx0XHRcdFx0XHQ8R3JpZEl0ZW0gc3R5bGU9e3twYWRkaW5nOiAnMjBweCAyMHB4IDMwcHggMjBweCd9fT5cblx0XHRcdFx0XHRcdFx0PEdyaWRDb250YWluZXI+XG5cdFx0XHRcdFx0XHRcdFx0PEdyaWRJdGVtPlxuXHRcdFx0XHRcdFx0XHRcdFx0PGgxPmFjZXJjYTwvaDE+XG5cdFx0XHRcdFx0XHRcdFx0PC9HcmlkSXRlbT5cdFx0XHRcblx0XHRcdFx0XHRcdFx0XHQ8R3JpZEl0ZW0+XG5cdFx0XHRcdFx0XHRcdFx0XHQ8Q29udGVudC8+XG5cdFx0XHRcdFx0XHRcdFx0PC9HcmlkSXRlbT4gIFxuXHRcdFx0XHRcdFx0XHRcdDxHcmlkSXRlbT5cdFx0XHRcdFx0XHRcdFx0XHRcblx0XHRcdFx0XHRcdFx0XHRcdDxDb3Vyc2VzIGRhdGE9e2RhdGEuY291cnNlc30vPlxuXHRcdFx0XHRcdFx0XHRcdDwvR3JpZEl0ZW0+ICBcblx0XHRcdFx0XHRcdFx0PC9HcmlkQ29udGFpbmVyPlxuXHRcdFx0XHRcdFx0PC9HcmlkSXRlbT5cdFx0XHRcblx0XHRcdFx0XHQ8L0dyaWRDb250YWluZXI+XG5cdFx0XHRcdDwvR3JpZEl0ZW0+XG5cdFx0XHQ8L0dyaWRDb250YWluZXI+XG5cdFx0KVxuXHR9XG59XG5cbmV4cG9ydCBkZWZhdWx0IHdpdGhNb2R1bGUoUGFnZUNvbXBvbmVudCk7XG5cbiIsImNsYXNzIE1vZHVsZXMge1xufVxuXG5cbk1vZHVsZXMuR2FtZXMgPSBmYWxzZTtcbk1vZHVsZXMuU3RhbmRpbmdzID0gZmFsc2U7XG5Nb2R1bGVzLlBvc3RTZWFzb24gPSBmYWxzZTtcbk1vZHVsZXMuVHJhbnNmZXJzID0gdHJ1ZTtcblxuZXhwb3J0IGRlZmF1bHQgKE1vZHVsZXMpOyJdLCJzb3VyY2VSb290IjoiIn0=