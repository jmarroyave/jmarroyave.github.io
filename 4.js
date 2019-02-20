(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[4],{

/***/ "../../../../frameworks/webapps/startup/node_modules/css-loader/index.js!../../../../frameworks/webapps/startup/node_modules/sass-loader/lib/loader.js!./src/jmarroyave/components/uxi/cv/latest_courses.scss":
/*!*****************************************************************************************************************************************************************************************************************!*\
  !*** /media/jm/labs/frameworks/webapps/startup/node_modules/css-loader!/media/jm/labs/frameworks/webapps/startup/node_modules/sass-loader/lib/loader.js!./src/jmarroyave/components/uxi/cv/latest_courses.scss ***!
  \*****************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../../../../../../frameworks/webapps/startup/node_modules/css-loader/lib/css-base.js */ "../../../../frameworks/webapps/startup/node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".mod-latest-courses {\n  padding-bottom: 30px; }\n\n.mod-latest-courses .course {\n  padding-bottom: 2em; }\n\n.mod-latest-courses .course .header .from {\n  font-size: 1.25em; }\n\n.mod-latest-courses .course .name {\n  font-size: 2.0em;\n  line-height: 1.25em; }\n\n.mod-latest-courses .course .platform {\n  font-size: 0.75em; }\n", ""]);

// exports


/***/ }),

/***/ "../../../../frameworks/webapps/startup/node_modules/css-loader/index.js!../../../../frameworks/webapps/startup/node_modules/sass-loader/lib/loader.js!./src/jmarroyave/components/uxi/home/hero.scss":
/*!*********************************************************************************************************************************************************************************************************!*\
  !*** /media/jm/labs/frameworks/webapps/startup/node_modules/css-loader!/media/jm/labs/frameworks/webapps/startup/node_modules/sass-loader/lib/loader.js!./src/jmarroyave/components/uxi/home/hero.scss ***!
  \*********************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../../../../../../frameworks/webapps/startup/node_modules/css-loader/lib/css-base.js */ "../../../../frameworks/webapps/startup/node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".mod-hero {\n  text-align: center;\n  padding-top: 4em;\n  padding-bottom: 4em; }\n\n.mod-hero h1 {\n  font-size: 3em;\n  line-height: 1.25em; }\n\n.mod-hero h2 {\n  font-size: 1.25em;\n  line-height: 1.25em; }\n", ""]);

// exports


/***/ }),

/***/ "../../../../frameworks/webapps/startup/node_modules/css-loader/index.js!../../../../frameworks/webapps/startup/node_modules/sass-loader/lib/loader.js!./src/jmarroyave/components/uxi/home/recent.scss":
/*!***********************************************************************************************************************************************************************************************************!*\
  !*** /media/jm/labs/frameworks/webapps/startup/node_modules/css-loader!/media/jm/labs/frameworks/webapps/startup/node_modules/sass-loader/lib/loader.js!./src/jmarroyave/components/uxi/home/recent.scss ***!
  \***********************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../../../../../../frameworks/webapps/startup/node_modules/css-loader/lib/css-base.js */ "../../../../frameworks/webapps/startup/node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".mod-recent {\n  text-align: center; }\n\n.mod-recent h1 {\n  font-size: 1.1em; }\n\n.mod-recent h2 {\n  font-size: 1em; }\n", ""]);

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

/***/ "./src/jmarroyave/components/uxi/cv/latest_courses.js":
/*!************************************************************!*\
  !*** ./src/jmarroyave/components/uxi/cv/latest_courses.js ***!
  \************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_components_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core/components/component */ "./src/core/components/component.js");
/* harmony import */ var jmarroyave_components_uxi_core_grid_container__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! jmarroyave/components/uxi/core/grid_container */ "./src/jmarroyave/components/uxi/core/grid_container.js");
/* harmony import */ var jmarroyave_components_uxi_core_grid_item__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! jmarroyave/components/uxi/core/grid_item */ "./src/jmarroyave/components/uxi/core/grid_item.js");
!(function webpackMissingModule() { var e = new Error("Cannot find module 'react-star-ratings'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());
/* harmony import */ var _latest_courses_scss__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./latest_courses.scss */ "./src/jmarroyave/components/uxi/cv/latest_courses.scss");
/* harmony import */ var _latest_courses_scss__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_latest_courses_scss__WEBPACK_IMPORTED_MODULE_5__);
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }








function Course(_ref) {
  var data = _ref.data;

  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
    jmarroyave_components_uxi_core_grid_item__WEBPACK_IMPORTED_MODULE_3__["default"],
    { xs: 12, sm: 6, md: 4, className: 'course' },
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
        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(!(function webpackMissingModule() { var e = new Error("Cannot find module 'react-star-ratings'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()), { rating: data.rating, starRatedColor: '#222', numberOfStars: 5, starDimension: '8px', starSpacing: '2px' })
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
    )
  );
}

var LatestCourses = function (_React$Component) {
  _inherits(LatestCourses, _React$Component);

  function LatestCourses() {
    _classCallCheck(this, LatestCourses);

    return _possibleConstructorReturn(this, (LatestCourses.__proto__ || Object.getPrototypeOf(LatestCourses)).apply(this, arguments));
  }

  _createClass(LatestCourses, [{
    key: 'render',
    value: function render() {
      var key = 0;
      var data = this.props.data;
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
        jmarroyave_components_uxi_core_grid_container__WEBPACK_IMPORTED_MODULE_2__["default"],
        { spacing: 8, className: 'mod-latest-courses' },
        data.slice(0, 3).map(function (item) {
          return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Course, { data: item, key: key++ });
        })
      );
    }
  }]);

  return LatestCourses;
}(react__WEBPACK_IMPORTED_MODULE_0___default.a.Component);

/* harmony default export */ __webpack_exports__["default"] = (Object(core_components_component__WEBPACK_IMPORTED_MODULE_1__["default"])(LatestCourses));

/***/ }),

/***/ "./src/jmarroyave/components/uxi/cv/latest_courses.scss":
/*!**************************************************************!*\
  !*** ./src/jmarroyave/components/uxi/cv/latest_courses.scss ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../../../../../../frameworks/webapps/startup/node_modules/css-loader!../../../../../../../../../frameworks/webapps/startup/node_modules/sass-loader/lib/loader.js!./latest_courses.scss */ "../../../../frameworks/webapps/startup/node_modules/css-loader/index.js!../../../../frameworks/webapps/startup/node_modules/sass-loader/lib/loader.js!./src/jmarroyave/components/uxi/cv/latest_courses.scss");

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
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _hero_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./hero.scss */ "./src/jmarroyave/components/uxi/home/hero.scss");
/* harmony import */ var _hero_scss__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_hero_scss__WEBPACK_IMPORTED_MODULE_1__);
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }




var Component = function (_React$Component) {
  _inherits(Component, _React$Component);

  function Component() {
    _classCallCheck(this, Component);

    return _possibleConstructorReturn(this, (Component.__proto__ || Object.getPrototypeOf(Component)).apply(this, arguments));
  }

  _createClass(Component, [{
    key: 'render',
    value: function render() {
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
        'div',
        { className: 'mod-hero' },
        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
          'h1',
          null,
          'Jos\xE9 Miguel Arroyave Ochoa'
        ),
        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
          'h2',
          null,
          'Ciencias de la computaci\xF3n'
        )
      );
    }
  }]);

  return Component;
}(react__WEBPACK_IMPORTED_MODULE_0___default.a.Component);

/* harmony default export */ __webpack_exports__["default"] = (Component);

/***/ }),

/***/ "./src/jmarroyave/components/uxi/home/hero.scss":
/*!******************************************************!*\
  !*** ./src/jmarroyave/components/uxi/home/hero.scss ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../../../../../../frameworks/webapps/startup/node_modules/css-loader!../../../../../../../../../frameworks/webapps/startup/node_modules/sass-loader/lib/loader.js!./hero.scss */ "../../../../frameworks/webapps/startup/node_modules/css-loader/index.js!../../../../frameworks/webapps/startup/node_modules/sass-loader/lib/loader.js!./src/jmarroyave/components/uxi/home/hero.scss");

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
/* harmony import */ var jmarroyave_components_uxi_home_layout_lg_home__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! jmarroyave/components/uxi/home/layout/lg/home */ "./src/jmarroyave/components/uxi/home/layout/lg/home.js");
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
			var trends = this.props.trends;
			return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
				'div',
				{ style: { width: '100%' } },
				react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(jmarroyave_components_uxi_home_layout_lg_home__WEBPACK_IMPORTED_MODULE_4__["default"], { data: data, trends: trends })
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
					react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(jmarroyave_components_uxi_home_layout_lg_home__WEBPACK_IMPORTED_MODULE_4__["default"], { data: data })
				)
			);
		}
	}]);

	return PageComponent;
}(react__WEBPACK_IMPORTED_MODULE_0___default.a.Component);

/* harmony default export */ __webpack_exports__["default"] = (Object(jmarroyave_components_uxi_core_with_module__WEBPACK_IMPORTED_MODULE_3__["default"])(PageComponent));

/***/ }),

/***/ "./src/jmarroyave/components/uxi/home/layout/lg/home.js":
/*!**************************************************************!*\
  !*** ./src/jmarroyave/components/uxi/home/layout/lg/home.js ***!
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
/* harmony import */ var jmarroyave_components_uxi_home_hero__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! jmarroyave/components/uxi/home/hero */ "./src/jmarroyave/components/uxi/home/hero.js");
/* harmony import */ var jmarroyave_components_uxi_home_recent__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! jmarroyave/components/uxi/home/recent */ "./src/jmarroyave/components/uxi/home/recent.js");
/* harmony import */ var jmarroyave_components_uxi_home_software_trends__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! jmarroyave/components/uxi/home/software_trends */ "./src/jmarroyave/components/uxi/home/software_trends.js");
/* harmony import */ var jmarroyave_components_uxi_cv_latest_courses__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! jmarroyave/components/uxi/cv/latest_courses */ "./src/jmarroyave/components/uxi/cv/latest_courses.js");
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
			var trends = this.props.trends;
			var mods = this.getModules();
			var modTest = mods[0];

			var recent = data != null ? data.recent : null;
			var courses = data != null ? data.courses : null;
			return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
				jmarroyave_components_uxi_core_grid_container__WEBPACK_IMPORTED_MODULE_2__["default"],
				{ className: 'mod-page' },
				react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
					jmarroyave_components_uxi_core_grid_item__WEBPACK_IMPORTED_MODULE_3__["default"],
					null,
					react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
						jmarroyave_components_uxi_core_grid_container__WEBPACK_IMPORTED_MODULE_2__["default"],
						null,
						react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
							jmarroyave_components_uxi_core_grid_item__WEBPACK_IMPORTED_MODULE_3__["default"],
							null,
							react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
								core_components_layout_section__WEBPACK_IMPORTED_MODULE_9__["default"],
								{ color: 'white' },
								react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
									jmarroyave_components_uxi_core_grid_container__WEBPACK_IMPORTED_MODULE_2__["default"],
									{ spacing: 16 },
									react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
										jmarroyave_components_uxi_core_grid_item__WEBPACK_IMPORTED_MODULE_3__["default"],
										null,
										react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(jmarroyave_components_uxi_home_hero__WEBPACK_IMPORTED_MODULE_10__["default"], null),
										react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(jmarroyave_components_uxi_home_recent__WEBPACK_IMPORTED_MODULE_11__["default"], { data: recent })
									)
								)
							)
						),
						react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
							jmarroyave_components_uxi_core_grid_item__WEBPACK_IMPORTED_MODULE_3__["default"],
							null,
							react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
								core_components_layout_section__WEBPACK_IMPORTED_MODULE_9__["default"],
								{ color: '#c0c0c0' },
								react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
									'h1',
									null,
									'Labs'
								),
								react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(jmarroyave_components_uxi_home_software_trends__WEBPACK_IMPORTED_MODULE_12__["default"], { data: trends })
							)
						),
						react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
							jmarroyave_components_uxi_core_grid_item__WEBPACK_IMPORTED_MODULE_3__["default"],
							null,
							react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
								core_components_layout_section__WEBPACK_IMPORTED_MODULE_9__["default"],
								{ color: 'white' },
								react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
									'h1',
									null,
									'eLearning'
								),
								react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(jmarroyave_components_uxi_cv_latest_courses__WEBPACK_IMPORTED_MODULE_13__["default"], { data: courses })
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

/***/ "./src/jmarroyave/components/uxi/home/recent.js":
/*!******************************************************!*\
  !*** ./src/jmarroyave/components/uxi/home/recent.js ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_components_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core/components/component */ "./src/core/components/component.js");
/* harmony import */ var jmarroyave_components_data_post_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! jmarroyave/components/data/post_link */ "./src/jmarroyave/components/data/post_link.js");
/* harmony import */ var _recent_scss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./recent.scss */ "./src/jmarroyave/components/uxi/home/recent.scss");
/* harmony import */ var _recent_scss__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_recent_scss__WEBPACK_IMPORTED_MODULE_3__);
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }






function RecentItem(_ref) {
  var data = _ref.data;

  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
    'h2',
    null,
    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
      jmarroyave_components_data_post_link__WEBPACK_IMPORTED_MODULE_2__["default"],
      { category: data.area, slug: data.slug },
      data.title
    )
  );
}

var RecentItems = function (_React$Component) {
  _inherits(RecentItems, _React$Component);

  function RecentItems() {
    _classCallCheck(this, RecentItems);

    return _possibleConstructorReturn(this, (RecentItems.__proto__ || Object.getPrototypeOf(RecentItems)).apply(this, arguments));
  }

  _createClass(RecentItems, [{
    key: 'render',
    value: function render() {
      var key = 0;
      var data = this.props.data;
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
        'div',
        { className: 'mod-recent' },
        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
          'h1',
          null,
          'Recent'
        ),
        data.map(function (item) {
          return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(RecentItem, { data: item, key: key++ });
        })
      );
    }
  }]);

  return RecentItems;
}(react__WEBPACK_IMPORTED_MODULE_0___default.a.Component);

/* harmony default export */ __webpack_exports__["default"] = (Object(core_components_component__WEBPACK_IMPORTED_MODULE_1__["default"])(RecentItems));

/***/ }),

/***/ "./src/jmarroyave/components/uxi/home/recent.scss":
/*!********************************************************!*\
  !*** ./src/jmarroyave/components/uxi/home/recent.scss ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../../../../../../frameworks/webapps/startup/node_modules/css-loader!../../../../../../../../../frameworks/webapps/startup/node_modules/sass-loader/lib/loader.js!./recent.scss */ "../../../../frameworks/webapps/startup/node_modules/css-loader/index.js!../../../../frameworks/webapps/startup/node_modules/sass-loader/lib/loader.js!./src/jmarroyave/components/uxi/home/recent.scss");

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
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var jmarroyave_components_uxi_core_grid_container__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! jmarroyave/components/uxi/core/grid_container */ "./src/jmarroyave/components/uxi/core/grid_container.js");
/* harmony import */ var jmarroyave_components_uxi_core_grid_item__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! jmarroyave/components/uxi/core/grid_item */ "./src/jmarroyave/components/uxi/core/grid_item.js");
/* harmony import */ var react_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-router */ "./node_modules/react-router/es/index.js");
/* harmony import */ var core_components_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! core/components/component */ "./src/core/components/component.js");
/* harmony import */ var core_components_date__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! core/components/date */ "./src/core/components/date.js");
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }








function SoftwareTrend(_ref) {
  var data = _ref.data;

  var key = 0;
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
    'ul',
    null,
    data.map(function (item) {
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
        'li',
        { key: key++ },
        item.text
      );
    })
  );
}

var SoftwareTrendComponent = function (_React$Component) {
  _inherits(SoftwareTrendComponent, _React$Component);

  function SoftwareTrendComponent() {
    _classCallCheck(this, SoftwareTrendComponent);

    return _possibleConstructorReturn(this, (SoftwareTrendComponent.__proto__ || Object.getPrototypeOf(SoftwareTrendComponent)).apply(this, arguments));
  }

  _createClass(SoftwareTrendComponent, [{
    key: 'render',
    value: function render() {
      var key = 0;
      var data = this.props.data;
      var comp = data.comp[0];
      var items = [{ title: 'OS', key: 'os' }, { title: 'Lenguajes', key: 'lang' }, { title: 'Librerias', key: 'fw' }, { title: 'Servicios', key: 'services' }];
      var lastUpdate = new Date(comp.date.substring(0, 4) + '/' + comp.date.substring(4, 6) + '/' + comp.date.substring(6, 8));
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
        jmarroyave_components_uxi_core_grid_container__WEBPACK_IMPORTED_MODULE_1__["default"],
        { spacing: 8 },
        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
          jmarroyave_components_uxi_core_grid_item__WEBPACK_IMPORTED_MODULE_2__["default"],
          { xs: 12 },
          react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
            'h2',
            null,
            'Procesamiento de Lenguaje Natural'
          ),
          react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
            'div',
            null,
            'tendencias en uso de software para desarrollo acorde a las preguntas de la comunidad de Stackoverflow. ',
            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
              react_router__WEBPACK_IMPORTED_MODULE_3__["Link"],
              { to: 'labs/stackoverflow' },
              'ver m\xE1s'
            )
          )
        ),
        items.map(function (list) {
          return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
            jmarroyave_components_uxi_core_grid_item__WEBPACK_IMPORTED_MODULE_2__["default"],
            { xs: 12, sm: 6, md: 3, key: key++ },
            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
              'h1',
              null,
              list.title
            ),
            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(SoftwareTrend, { data: data[list.key].slice(0, 10) })
          );
        }),
        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
          jmarroyave_components_uxi_core_grid_item__WEBPACK_IMPORTED_MODULE_2__["default"],
          { xs: 12 },
          react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
            'div',
            null,
            'Actualizado: ',
            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(core_components_date__WEBPACK_IMPORTED_MODULE_5__["default"], { value: lastUpdate, lang: 'es' })
          )
        )
      );
    }
  }]);

  return SoftwareTrendComponent;
}(react__WEBPACK_IMPORTED_MODULE_0___default.a.Component);

/* harmony default export */ __webpack_exports__["default"] = (Object(core_components_component__WEBPACK_IMPORTED_MODULE_4__["default"])(SoftwareTrendComponent));

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvam1hcnJveWF2ZS9jb21wb25lbnRzL3V4aS9jdi9sYXRlc3RfY291cnNlcy5zY3NzIiwid2VicGFjazovLy8uL3NyYy9qbWFycm95YXZlL2NvbXBvbmVudHMvdXhpL2hvbWUvaGVyby5zY3NzIiwid2VicGFjazovLy8uL3NyYy9qbWFycm95YXZlL2NvbXBvbmVudHMvdXhpL2hvbWUvcmVjZW50LnNjc3MiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvcmUvY29tcG9uZW50cy9kYXRlLmpzIiwid2VicGFjazovLy8uL3NyYy9jb3JlL2NvbXBvbmVudHMvbGF5b3V0L3NlY3Rpb24uanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2ptYXJyb3lhdmUvY29tcG9uZW50cy91eGkvY3YvbGF0ZXN0X2NvdXJzZXMuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2ptYXJyb3lhdmUvY29tcG9uZW50cy91eGkvY3YvbGF0ZXN0X2NvdXJzZXMuc2Nzcz85YjlkIiwid2VicGFjazovLy8uL3NyYy9qbWFycm95YXZlL2NvbXBvbmVudHMvdXhpL2hvbWUvaGVyby5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvam1hcnJveWF2ZS9jb21wb25lbnRzL3V4aS9ob21lL2hlcm8uc2Nzcz84MTU1Iiwid2VicGFjazovLy8uL3NyYy9qbWFycm95YXZlL2NvbXBvbmVudHMvdXhpL2hvbWUvbGF5b3V0L2hvbWUtbGF5b3V0LXByb3h5LmpzIiwid2VicGFjazovLy8uL3NyYy9qbWFycm95YXZlL2NvbXBvbmVudHMvdXhpL2hvbWUvbGF5b3V0L2xnL2hvbWUuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2ptYXJyb3lhdmUvY29tcG9uZW50cy91eGkvaG9tZS9yZWNlbnQuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2ptYXJyb3lhdmUvY29tcG9uZW50cy91eGkvaG9tZS9yZWNlbnQuc2Nzcz84ODkyIiwid2VicGFjazovLy8uL3NyYy9qbWFycm95YXZlL2NvbXBvbmVudHMvdXhpL2hvbWUvc29mdHdhcmVfdHJlbmRzLmpzIiwid2VicGFjazovLy8uL3NyYy9qbWFycm95YXZlL2NvbmYvbGF5b3V0L21vZHVsZXMuanMiXSwibmFtZXMiOlsiVUlEYXRlIiwic3RhdGUiLCJkZWZhdWx0cyIsImNsYXNzTmFtZSIsInRpbWVBZ28iLCJsYW5nIiwicHJvcHMiLCJUaW1lQWdvIiwiYWRkTG9jYWxlIiwiZXMiLCJlbiIsImRhdGUiLCJzdHIiLCJ2YWx1ZSIsImxlbmd0aCIsIkRhdGUiLCJudW0iLCJOdW1iZXIiLCJpc0ludGVnZXIiLCJmb3JtYXQiLCJleCIsIlVJQ29tcG9uZW50Iiwic3R5bGVzIiwicm9vdCIsIndpZHRoIiwiYm94U2l6aW5nIiwicGFkZGluZyIsIkxheW91dFNlY3Rpb24iLCJjbGFzc2VzIiwiY29sb3IiLCJiYWNrZ3JvdW5kQ29sb3IiLCJjaGlsZHJlbiIsIlJlYWN0IiwiQ29tcG9uZW50Iiwid2l0aFN0eWxlcyIsIkNvdXJzZSIsImRhdGEiLCJwbGF0Zm9ybSIsInJhdGluZyIsIm5hbWUiLCJmcm9tIiwiTGF0ZXN0Q291cnNlcyIsImtleSIsInNsaWNlIiwibWFwIiwiaXRlbSIsIlBhZ2VDb21wb25lbnQiLCJyZW5kZXJEZWZhdWx0IiwidHJlbmRzIiwid2l0aE1vZHVsZSIsInRpdGxlIiwiY29udHJvbCIsIk1vZHVsZXMiLCJUcmFuc2ZlcnMiLCJtb2RzIiwiZ2V0TW9kdWxlcyIsIm1vZFRlc3QiLCJyZWNlbnQiLCJjb3Vyc2VzIiwiUmVjZW50SXRlbSIsImFyZWEiLCJzbHVnIiwiUmVjZW50SXRlbXMiLCJTb2Z0d2FyZVRyZW5kIiwidGV4dCIsIlNvZnR3YXJlVHJlbmRDb21wb25lbnQiLCJjb21wIiwiaXRlbXMiLCJsYXN0VXBkYXRlIiwic3Vic3RyaW5nIiwibGlzdCIsIkdhbWVzIiwiU3RhbmRpbmdzIiwiUG9zdFNlYXNvbiJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQUEsMkJBQTJCLG1CQUFPLENBQUMscUxBQStGO0FBQ2xJOzs7QUFHQTtBQUNBLGNBQWMsUUFBUyx3QkFBd0Is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NUc7QUFGRixTQURGO0FBS0dGLGNBQU12QixHQUFOLENBQVU7QUFBQSxpQkFDVDtBQUFDLDRGQUFEO0FBQUEsY0FBVSxJQUFJLEVBQWQsRUFBa0IsSUFBSSxDQUF0QixFQUF5QixJQUFJLENBQTdCLEVBQWdDLEtBQUtGLEtBQXJDO0FBQ0U7QUFBQTtBQUFBO0FBQUs0QixtQkFBS3BCO0FBQVYsYUFERjtBQUVFLHVFQUFDLGFBQUQsSUFBZSxNQUFNZCxLQUFLa0MsS0FBSzVCLEdBQVYsRUFBZUMsS0FBZixDQUFxQixDQUFyQixFQUF1QixFQUF2QixDQUFyQjtBQUZGLFdBRFM7QUFBQSxTQUFWLENBTEg7QUFXRTtBQUFDLDBGQUFEO0FBQUEsWUFBVSxJQUFJLEVBQWQ7QUFDRTtBQUFBO0FBQUE7QUFBQTtBQUFrQix1RUFBQyw0REFBRCxJQUFVLE9BQU95QixVQUFqQixFQUE2QixNQUFNLElBQW5DO0FBQWxCO0FBREY7QUFYRixPQURGO0FBaUJEOzs7O0VBeEJrQ3BDLDRDQUFLQSxDQUFDQyxTOztBQTJCNUJBLHdJQUFTQSxDQUFDZ0Msc0JBQVYsQ0FBZixFOzs7Ozs7Ozs7Ozs7Ozs7SUMvQ01iLE87Ozs7QUFJTkEsUUFBUW1CLEtBQVIsR0FBZ0IsS0FBaEI7QUFDQW5CLFFBQVFvQixTQUFSLEdBQW9CLEtBQXBCO0FBQ0FwQixRQUFRcUIsVUFBUixHQUFxQixLQUFyQjtBQUNBckIsUUFBUUMsU0FBUixHQUFvQixJQUFwQjs7QUFFZ0JELHNFQUFoQixFIiwiZmlsZSI6IjQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnRzID0gbW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vZnJhbWV3b3Jrcy93ZWJhcHBzL3N0YXJ0dXAvbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvbGliL2Nzcy1iYXNlLmpzXCIpKGZhbHNlKTtcbi8vIGltcG9ydHNcblxuXG4vLyBtb2R1bGVcbmV4cG9ydHMucHVzaChbbW9kdWxlLmlkLCBcIi5tb2QtbGF0ZXN0LWNvdXJzZXMge1xcbiAgcGFkZGluZy1ib3R0b206IDMwcHg7IH1cXG5cXG4ubW9kLWxhdGVzdC1jb3Vyc2VzIC5jb3Vyc2Uge1xcbiAgcGFkZGluZy1ib3R0b206IDJlbTsgfVxcblxcbi5tb2QtbGF0ZXN0LWNvdXJzZXMgLmNvdXJzZSAuaGVhZGVyIC5mcm9tIHtcXG4gIGZvbnQtc2l6ZTogMS4yNWVtOyB9XFxuXFxuLm1vZC1sYXRlc3QtY291cnNlcyAuY291cnNlIC5uYW1lIHtcXG4gIGZvbnQtc2l6ZTogMi4wZW07XFxuICBsaW5lLWhlaWdodDogMS4yNWVtOyB9XFxuXFxuLm1vZC1sYXRlc3QtY291cnNlcyAuY291cnNlIC5wbGF0Zm9ybSB7XFxuICBmb250LXNpemU6IDAuNzVlbTsgfVxcblwiLCBcIlwiXSk7XG5cbi8vIGV4cG9ydHNcbiIsImV4cG9ydHMgPSBtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCIuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9mcmFtZXdvcmtzL3dlYmFwcHMvc3RhcnR1cC9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9saWIvY3NzLWJhc2UuanNcIikoZmFsc2UpO1xuLy8gaW1wb3J0c1xuXG5cbi8vIG1vZHVsZVxuZXhwb3J0cy5wdXNoKFttb2R1bGUuaWQsIFwiLm1vZC1oZXJvIHtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gIHBhZGRpbmctdG9wOiA0ZW07XFxuICBwYWRkaW5nLWJvdHRvbTogNGVtOyB9XFxuXFxuLm1vZC1oZXJvIGgxIHtcXG4gIGZvbnQtc2l6ZTogM2VtO1xcbiAgbGluZS1oZWlnaHQ6IDEuMjVlbTsgfVxcblxcbi5tb2QtaGVybyBoMiB7XFxuICBmb250LXNpemU6IDEuMjVlbTtcXG4gIGxpbmUtaGVpZ2h0OiAxLjI1ZW07IH1cXG5cIiwgXCJcIl0pO1xuXG4vLyBleHBvcnRzXG4iLCJleHBvcnRzID0gbW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vZnJhbWV3b3Jrcy93ZWJhcHBzL3N0YXJ0dXAvbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvbGliL2Nzcy1iYXNlLmpzXCIpKGZhbHNlKTtcbi8vIGltcG9ydHNcblxuXG4vLyBtb2R1bGVcbmV4cG9ydHMucHVzaChbbW9kdWxlLmlkLCBcIi5tb2QtcmVjZW50IHtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjsgfVxcblxcbi5tb2QtcmVjZW50IGgxIHtcXG4gIGZvbnQtc2l6ZTogMS4xZW07IH1cXG5cXG4ubW9kLXJlY2VudCBoMiB7XFxuICBmb250LXNpemU6IDFlbTsgfVxcblwiLCBcIlwiXSk7XG5cbi8vIGV4cG9ydHNcbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgVUlDb21wb25lbnQgZnJvbSAnY29yZS9jb21wb25lbnRzL3VpX2NvbXBvbmVudCc7XG5pbXBvcnQgVGltZUFnbyBmcm9tICdqYXZhc2NyaXB0LXRpbWUtYWdvJ1xuaW1wb3J0IGVuIGZyb20gJ2phdmFzY3JpcHQtdGltZS1hZ28vbG9jYWxlL2VuJ1xuaW1wb3J0IGVzIGZyb20gJ2phdmFzY3JpcHQtdGltZS1hZ28vbG9jYWxlL2VzJ1xuXG5jbGFzcyBVSURhdGUgZXh0ZW5kcyBVSUNvbXBvbmVudCB7IFxuICBjb25zdHJ1Y3RvcigpIHtcbiAgICBzdXBlcigpO1xuICAgIHRoaXMuc3RhdGUgPSB7XG4gICAgfVxuICB9XG5cbiAgZ2V0RGVmYXVsdHMoKXtcbiAgICBjb25zdCBkZWZhdWx0cyA9IHtcbiAgICAgIGNsYXNzTmFtZSA6ICcnLCAgICAgIFxuICAgIH0gICAgXG4gICAgcmV0dXJuIGRlZmF1bHRzO1xuICB9ICBcbiAgcmVuZGVyKCkge1xuICAgIHZhciB0aW1lQWdvO1xuICAgIGNvbnN0IGxhbmcgPSAoXCJsYW5nXCIgaW4gdGhpcy5wcm9wcykgPyB0aGlzLnByb3BzLmxhbmcgOiBcImVuXCI7XG4gICAgc3dpdGNoKGxhbmcpe1xuICAgICAgY2FzZSBcImVzXCIgOlxuICAgICAgICBUaW1lQWdvLmFkZExvY2FsZShlcyk7XG4gICAgICAgIHRpbWVBZ28gPSBuZXcgVGltZUFnbygnZXMtVVMnKTtcbiAgICAgICAgYnJlYWs7XG4gICAgICBkZWZhdWx0OlxuICAgICAgICBUaW1lQWdvLmFkZExvY2FsZShlbik7XG4gICAgICAgIHRpbWVBZ28gPSBuZXcgVGltZUFnbygnZW4tVVMnKTtcbiAgICB9XG5cbiAgICBcbiAgICB2YXIgZGF0ZTtcbiAgICB2YXIgc3RyO1xuICAgIHRyeXtcbiAgICAgIHZhciB2YWx1ZSA9IHRoaXMucHJvcHMudmFsdWU7XG5cbiAgICAgIGlmKCF2YWx1ZSB8fCB2YWx1ZSA9PSBudWxsIHx8IHZhbHVlID09PSAnJyB8fCB2YWx1ZS5sZW5ndGggPT0gMCl7XG4gICAgICAgIHN0ciA9ICcnO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgaWYodmFsdWUgaW5zdGFuY2VvZiBEYXRlKXtcbiAgICAgICAgICBkYXRlID0gbmV3IERhdGUodmFsdWUpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGNvbnN0IG51bSA9IE51bWJlcih2YWx1ZSk7XG4gICAgICAgICAgaWYoTnVtYmVyLmlzSW50ZWdlcihudW0pKXtcbiAgICAgICAgICAgIGRhdGUgPSBuZXcgRGF0ZShudW0pO1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBkYXRlID0gbmV3IERhdGUodmFsdWUpO1xuICAgICAgICAgIH1cbiAgICAgICAgfSAgICAgICBcbiAgICAgICAgc3RyID0gdGltZUFnby5mb3JtYXQoZGF0ZSwgJ3R3aXR0ZXInKTtcbiAgICAgIH0gICAgXG4gICAgfSBjYXRjaCAoZXgpe1xuICAgICAgc3RyID0gdGhpcy5wcm9wcy52YWx1ZTtcbiAgICB9XG4gICAgcmV0dXJuIChcbiAgICAgIDxzcGFuIGNsYXNzTmFtZT17dGhpcy5zdGF0ZS5jbGFzc05hbWV9PntzdHJ9PC9zcGFuPlxuICAgICk7XG4gIH1cbn1cblxuXG5leHBvcnQgZGVmYXVsdCBVSURhdGU7IiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IHdpdGhTdHlsZXMgfSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9zdHlsZXMnO1xuXG5jb25zdCBzdHlsZXMgPSB0aGVtZSA9PiAoe1xuXHRyb290IDoge1xuXHRcdHdpZHRoOiAnMTAwJScsXG5cdFx0Ym94U2l6aW5nOiAnYm9yZGVyLWJveCcsXG5cdFx0cGFkZGluZzogJzE2cHgnLFxuXHR9LFxufSk7XG5jbGFzcyBMYXlvdXRTZWN0aW9uIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHsgXG4gIHJlbmRlcigpIHtcbiAgXHRjb25zdCBjbGFzc2VzID0gdGhpcy5wcm9wcy5jbGFzc2VzO1xuICBcdC8vY29uc3QgaGVpZ2h0ID0gKFwiaGVpZ2h0XCIgaW4gdGhpcy5wcm9wcykgPyB0aGlzLnByb3BzLmhlaWdodCA6ICczMHB4JztcbiAgXHRjb25zdCBjb2xvciA9IChcImNvbG9yXCIgaW4gdGhpcy5wcm9wcykgPyB0aGlzLnByb3BzLmNvbG9yIDogJ3doaXRlJztcbiAgICByZXR1cm4gKFxuICAgICAgPGRpdiBjbGFzc05hbWU9e2NsYXNzZXMucm9vdH0gc3R5bGU9e3tiYWNrZ3JvdW5kQ29sb3I6IGNvbG9yfX0+XG4gICAgICBcdHt0aGlzLnByb3BzLmNoaWxkcmVufVxuICAgICAgPC9kaXY+XG4gICAgKTtcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCB3aXRoU3R5bGVzKHN0eWxlcykoTGF5b3V0U2VjdGlvbik7IiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuaW1wb3J0IENvbXBvbmVudCBmcm9tICdjb3JlL2NvbXBvbmVudHMvY29tcG9uZW50JztcbmltcG9ydCBHcmlkQ29udGFpbmVyIGZyb20gJ2ptYXJyb3lhdmUvY29tcG9uZW50cy91eGkvY29yZS9ncmlkX2NvbnRhaW5lcic7XG5pbXBvcnQgR3JpZEl0ZW0gZnJvbSAnam1hcnJveWF2ZS9jb21wb25lbnRzL3V4aS9jb3JlL2dyaWRfaXRlbSc7XG5pbXBvcnQgU3RhclJhdGluZ3MgZnJvbSAncmVhY3Qtc3Rhci1yYXRpbmdzJztcbmltcG9ydCBcIi4vbGF0ZXN0X2NvdXJzZXMuc2Nzc1wiO1xuXG5mdW5jdGlvbiBDb3Vyc2Uoe2RhdGF9KSB7XG4gIHJldHVybiAoXG4gIFx0PEdyaWRJdGVtIHhzPXsxMn0gc209ezZ9IG1kPXs0fSAgY2xhc3NOYW1lPSdjb3Vyc2UnPlxuICAgICAgPGRpdiBjbGFzc05hbWU9J2hlYWRlcic+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPSdwbGF0Zm9ybSc+e2RhdGEucGxhdGZvcm19PC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPSdyYXRpbmcnPjxTdGFyUmF0aW5ncyByYXRpbmc9e2RhdGEucmF0aW5nfSBzdGFyUmF0ZWRDb2xvcj1cIiMyMjJcIiBudW1iZXJPZlN0YXJzPXs1fSBzdGFyRGltZW5zaW9uPSc4cHgnIHN0YXJTcGFjaW5nPVwiMnB4XCIvPjwvZGl2PlxuICAgICAgPC9kaXY+XG4gIFx0XHQ8ZGl2IGNsYXNzTmFtZT0nbmFtZSc+e2RhdGEubmFtZX08L2Rpdj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPSdmcm9tJz57ZGF0YS5mcm9tfTwvZGl2PlxuXHQgIDwvR3JpZEl0ZW0+XG4gICk7XG59XG5cbmNsYXNzIExhdGVzdENvdXJzZXMgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICByZW5kZXIoKSB7XG4gICAgdmFyIGtleSA9IDA7XG4gIFx0Y29uc3QgZGF0YSA9IHRoaXMucHJvcHMuZGF0YTtcbiAgICByZXR1cm4gKFxuICAgICAgPEdyaWRDb250YWluZXIgc3BhY2luZz17OH0gY2xhc3NOYW1lPSdtb2QtbGF0ZXN0LWNvdXJzZXMnPlxuICBcdFx0e2RhdGEuc2xpY2UoMCwzKS5tYXAoKGl0ZW0pPT5cblx0XHRcdFx0PENvdXJzZSBkYXRhPXtpdGVtfSBrZXk9e2tleSsrfS8+XG4gIFx0XHQpfVxuICAgICAgPC9HcmlkQ29udGFpbmVyPlxuICAgICk7XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgQ29tcG9uZW50KExhdGVzdENvdXJzZXMpOyIsIlxudmFyIGNvbnRlbnQgPSByZXF1aXJlKFwiISEuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9mcmFtZXdvcmtzL3dlYmFwcHMvc3RhcnR1cC9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9pbmRleC5qcyEuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9mcmFtZXdvcmtzL3dlYmFwcHMvc3RhcnR1cC9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvbGliL2xvYWRlci5qcyEuL2xhdGVzdF9jb3Vyc2VzLnNjc3NcIik7XG5cbmlmKHR5cGVvZiBjb250ZW50ID09PSAnc3RyaW5nJykgY29udGVudCA9IFtbbW9kdWxlLmlkLCBjb250ZW50LCAnJ11dO1xuXG52YXIgdHJhbnNmb3JtO1xudmFyIGluc2VydEludG87XG5cblxuXG52YXIgb3B0aW9ucyA9IHtcImhtclwiOnRydWV9XG5cbm9wdGlvbnMudHJhbnNmb3JtID0gdHJhbnNmb3JtXG5vcHRpb25zLmluc2VydEludG8gPSB1bmRlZmluZWQ7XG5cbnZhciB1cGRhdGUgPSByZXF1aXJlKFwiIS4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL2ZyYW1ld29ya3Mvd2ViYXBwcy9zdGFydHVwL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvbGliL2FkZFN0eWxlcy5qc1wiKShjb250ZW50LCBvcHRpb25zKTtcblxuaWYoY29udGVudC5sb2NhbHMpIG1vZHVsZS5leHBvcnRzID0gY29udGVudC5sb2NhbHM7XG5cbmlmKG1vZHVsZS5ob3QpIHtcblx0bW9kdWxlLmhvdC5hY2NlcHQoXCIhIS4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL2ZyYW1ld29ya3Mvd2ViYXBwcy9zdGFydHVwL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2luZGV4LmpzIS4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL2ZyYW1ld29ya3Mvd2ViYXBwcy9zdGFydHVwL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9saWIvbG9hZGVyLmpzIS4vbGF0ZXN0X2NvdXJzZXMuc2Nzc1wiLCBmdW5jdGlvbigpIHtcblx0XHR2YXIgbmV3Q29udGVudCA9IHJlcXVpcmUoXCIhIS4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL2ZyYW1ld29ya3Mvd2ViYXBwcy9zdGFydHVwL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2luZGV4LmpzIS4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL2ZyYW1ld29ya3Mvd2ViYXBwcy9zdGFydHVwL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9saWIvbG9hZGVyLmpzIS4vbGF0ZXN0X2NvdXJzZXMuc2Nzc1wiKTtcblxuXHRcdGlmKHR5cGVvZiBuZXdDb250ZW50ID09PSAnc3RyaW5nJykgbmV3Q29udGVudCA9IFtbbW9kdWxlLmlkLCBuZXdDb250ZW50LCAnJ11dO1xuXG5cdFx0dmFyIGxvY2FscyA9IChmdW5jdGlvbihhLCBiKSB7XG5cdFx0XHR2YXIga2V5LCBpZHggPSAwO1xuXG5cdFx0XHRmb3Ioa2V5IGluIGEpIHtcblx0XHRcdFx0aWYoIWIgfHwgYVtrZXldICE9PSBiW2tleV0pIHJldHVybiBmYWxzZTtcblx0XHRcdFx0aWR4Kys7XG5cdFx0XHR9XG5cblx0XHRcdGZvcihrZXkgaW4gYikgaWR4LS07XG5cblx0XHRcdHJldHVybiBpZHggPT09IDA7XG5cdFx0fShjb250ZW50LmxvY2FscywgbmV3Q29udGVudC5sb2NhbHMpKTtcblxuXHRcdGlmKCFsb2NhbHMpIHRocm93IG5ldyBFcnJvcignQWJvcnRpbmcgQ1NTIEhNUiBkdWUgdG8gY2hhbmdlZCBjc3MtbW9kdWxlcyBsb2NhbHMuJyk7XG5cblx0XHR1cGRhdGUobmV3Q29udGVudCk7XG5cdH0pO1xuXG5cdG1vZHVsZS5ob3QuZGlzcG9zZShmdW5jdGlvbigpIHsgdXBkYXRlKCk7IH0pO1xufSIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcbmltcG9ydCAnLi9oZXJvLnNjc3MnO1xuXG5jbGFzcyBDb21wb25lbnQgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICByZW5kZXIoKSB7XG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXYgY2xhc3NOYW1lPSdtb2QtaGVybyc+XG4gICAgICBcdDxoMT5Kb3MmZWFjdXRlOyBNaWd1ZWwgQXJyb3lhdmUgT2Nob2E8L2gxPlxuICAgICAgXHQ8aDI+Q2llbmNpYXMgZGUgbGEgY29tcHV0YWNpJm9hY3V0ZTtuPC9oMj5cbiAgICAgIDwvZGl2PlxuICAgICk7XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgKENvbXBvbmVudCk7IiwiXG52YXIgY29udGVudCA9IHJlcXVpcmUoXCIhIS4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL2ZyYW1ld29ya3Mvd2ViYXBwcy9zdGFydHVwL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2luZGV4LmpzIS4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL2ZyYW1ld29ya3Mvd2ViYXBwcy9zdGFydHVwL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9saWIvbG9hZGVyLmpzIS4vaGVyby5zY3NzXCIpO1xuXG5pZih0eXBlb2YgY29udGVudCA9PT0gJ3N0cmluZycpIGNvbnRlbnQgPSBbW21vZHVsZS5pZCwgY29udGVudCwgJyddXTtcblxudmFyIHRyYW5zZm9ybTtcbnZhciBpbnNlcnRJbnRvO1xuXG5cblxudmFyIG9wdGlvbnMgPSB7XCJobXJcIjp0cnVlfVxuXG5vcHRpb25zLnRyYW5zZm9ybSA9IHRyYW5zZm9ybVxub3B0aW9ucy5pbnNlcnRJbnRvID0gdW5kZWZpbmVkO1xuXG52YXIgdXBkYXRlID0gcmVxdWlyZShcIiEuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9mcmFtZXdvcmtzL3dlYmFwcHMvc3RhcnR1cC9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2xpYi9hZGRTdHlsZXMuanNcIikoY29udGVudCwgb3B0aW9ucyk7XG5cbmlmKGNvbnRlbnQubG9jYWxzKSBtb2R1bGUuZXhwb3J0cyA9IGNvbnRlbnQubG9jYWxzO1xuXG5pZihtb2R1bGUuaG90KSB7XG5cdG1vZHVsZS5ob3QuYWNjZXB0KFwiISEuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9mcmFtZXdvcmtzL3dlYmFwcHMvc3RhcnR1cC9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9pbmRleC5qcyEuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9mcmFtZXdvcmtzL3dlYmFwcHMvc3RhcnR1cC9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvbGliL2xvYWRlci5qcyEuL2hlcm8uc2Nzc1wiLCBmdW5jdGlvbigpIHtcblx0XHR2YXIgbmV3Q29udGVudCA9IHJlcXVpcmUoXCIhIS4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL2ZyYW1ld29ya3Mvd2ViYXBwcy9zdGFydHVwL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2luZGV4LmpzIS4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL2ZyYW1ld29ya3Mvd2ViYXBwcy9zdGFydHVwL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9saWIvbG9hZGVyLmpzIS4vaGVyby5zY3NzXCIpO1xuXG5cdFx0aWYodHlwZW9mIG5ld0NvbnRlbnQgPT09ICdzdHJpbmcnKSBuZXdDb250ZW50ID0gW1ttb2R1bGUuaWQsIG5ld0NvbnRlbnQsICcnXV07XG5cblx0XHR2YXIgbG9jYWxzID0gKGZ1bmN0aW9uKGEsIGIpIHtcblx0XHRcdHZhciBrZXksIGlkeCA9IDA7XG5cblx0XHRcdGZvcihrZXkgaW4gYSkge1xuXHRcdFx0XHRpZighYiB8fCBhW2tleV0gIT09IGJba2V5XSkgcmV0dXJuIGZhbHNlO1xuXHRcdFx0XHRpZHgrKztcblx0XHRcdH1cblxuXHRcdFx0Zm9yKGtleSBpbiBiKSBpZHgtLTtcblxuXHRcdFx0cmV0dXJuIGlkeCA9PT0gMDtcblx0XHR9KGNvbnRlbnQubG9jYWxzLCBuZXdDb250ZW50LmxvY2FscykpO1xuXG5cdFx0aWYoIWxvY2FscykgdGhyb3cgbmV3IEVycm9yKCdBYm9ydGluZyBDU1MgSE1SIGR1ZSB0byBjaGFuZ2VkIGNzcy1tb2R1bGVzIGxvY2Fscy4nKTtcblxuXHRcdHVwZGF0ZShuZXdDb250ZW50KTtcblx0fSk7XG5cblx0bW9kdWxlLmhvdC5kaXNwb3NlKGZ1bmN0aW9uKCkgeyB1cGRhdGUoKTsgfSk7XG59IiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBIaWRkZW4gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvSGlkZGVuJztcbmltcG9ydCB7ICBCcm93c2VyVmlldywgIE1vYmlsZVZpZXcgfSBmcm9tIFwicmVhY3QtZGV2aWNlLWRldGVjdFwiO1xuaW1wb3J0IHdpdGhNb2R1bGUgZnJvbSAnam1hcnJveWF2ZS9jb21wb25lbnRzL3V4aS9jb3JlL3dpdGgtbW9kdWxlJztcbmltcG9ydCBIb21lTEcgZnJvbSBcImptYXJyb3lhdmUvY29tcG9uZW50cy91eGkvaG9tZS9sYXlvdXQvbGcvaG9tZVwiO1xuXG5jbGFzcyBQYWdlQ29tcG9uZW50IGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcblx0cmVuZGVyKCl7XG5cdFx0cmV0dXJuIHRoaXMucmVuZGVyRGVmYXVsdCgpO1xuXHR9XG5cblx0cmVuZGVyRGVmYXVsdCgpe1xuXHRcdHZhciBkYXRhID0gdGhpcy5wcm9wcy5kYXRhO1xuXHRcdHZhciB0cmVuZHMgPSB0aGlzLnByb3BzLnRyZW5kcztcblx0XHRyZXR1cm4gKFxuXHRcdFx0PGRpdiBzdHlsZT17e3dpZHRoOicxMDAlJ319Plx0XHRcdFx0XG4gICAgXHRcdFx0PEhvbWVMRyBkYXRhPXtkYXRhfSB0cmVuZHM9e3RyZW5kc30vPlxuXHRcdFx0PC9kaXY+XG5cdFx0KVx0XHRcblx0fVxuXG5cdHJlbmRlck11bHRpcGxlKCl7XG5cdFx0dmFyIGRhdGEgPSB0aGlzLnByb3BzLmRhdGE7XG5cdFx0cmV0dXJuIChcblx0XHRcdDxkaXYgc3R5bGU9e3t3aWR0aDonMTAwJSd9fT5cdFx0XHRcdFxuICAgICAgICBcdFx0PEhpZGRlbiBvbmx5PXtbJ3NtJywgJ21kJywgJ2xnJywgJ3hsJ119PlxuICAgICAgICBcdFx0XHRcblx0XHQgICAgICAgIDwvSGlkZGVuPlxuICAgICAgICBcdFx0PEhpZGRlbiBvbmx5PXtbJ3hzJywgJ21kJywgJ2xnJywgJ3hsJ119PlxuICAgICAgICBcdFx0XHRcblx0XHQgICAgICAgIDwvSGlkZGVuPlxuICAgICAgICBcdFx0PEhpZGRlbiBvbmx5PXtbJ3hzJywgJ3NtJ119PlxuICAgICAgICBcdFx0XHQ8SG9tZUxHIGRhdGE9e2RhdGF9Lz5cblx0XHQgICAgICAgIDwvSGlkZGVuPlxuXHRcdFx0PC9kaXY+XG5cdFx0KVxuXHR9XG59XG5cbmV4cG9ydCBkZWZhdWx0IHdpdGhNb2R1bGUoUGFnZUNvbXBvbmVudCk7IiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IExpbmsgfSBmcm9tICdyZWFjdC1yb3V0ZXInXG5pbXBvcnQgR3JpZENvbnRhaW5lciBmcm9tICdqbWFycm95YXZlL2NvbXBvbmVudHMvdXhpL2NvcmUvZ3JpZF9jb250YWluZXInO1xuaW1wb3J0IEdyaWRJdGVtIGZyb20gJ2ptYXJyb3lhdmUvY29tcG9uZW50cy91eGkvY29yZS9ncmlkX2l0ZW0nO1xuaW1wb3J0IEhpZGRlbiBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9IaWRkZW4nO1xuaW1wb3J0IE1vZHVsZXMgZnJvbSAnam1hcnJveWF2ZS9jb25mL2xheW91dC9tb2R1bGVzJztcbmltcG9ydCB3aXRoTW9kdWxlIGZyb20gJ2ptYXJyb3lhdmUvY29tcG9uZW50cy91eGkvY29yZS93aXRoLW1vZHVsZSc7XG5pbXBvcnQgQmxvY2sgZnJvbSAnam1hcnJveWF2ZS9jb21wb25lbnRzL3V4aS9ob21lL2Jsb2NrJztcbmltcG9ydCBNQmxvY2sgZnJvbSAnY29yZS9jb21wb25lbnRzL21vY2t1cC9ibG9jayc7XG5pbXBvcnQgU2VjdGlvbiBmcm9tICdjb3JlL2NvbXBvbmVudHMvbGF5b3V0L3NlY3Rpb24nO1xuaW1wb3J0IEhlcm8gZnJvbSAnam1hcnJveWF2ZS9jb21wb25lbnRzL3V4aS9ob21lL2hlcm8nO1xuaW1wb3J0IFJlY2VudCBmcm9tICdqbWFycm95YXZlL2NvbXBvbmVudHMvdXhpL2hvbWUvcmVjZW50JztcbmltcG9ydCBTb2Z0d2FyZVRyZW5kcyBmcm9tICdqbWFycm95YXZlL2NvbXBvbmVudHMvdXhpL2hvbWUvc29mdHdhcmVfdHJlbmRzJztcbmltcG9ydCBMYXRlc3RDb3Vyc2VzIGZyb20gJ2ptYXJyb3lhdmUvY29tcG9uZW50cy91eGkvY3YvbGF0ZXN0X2NvdXJzZXMnO1xuXG5jbGFzcyBQYWdlQ29tcG9uZW50IGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcblx0Z2V0TW9kdWxlcygpe1xuXHRcdHZhciBkYXRhID0gdGhpcy5wcm9wcy5kYXRhO1x0XHRcblxuXHRcdHJldHVybiBbXG5cdFx0XHR7dGl0bGU6IFwiVGVzdFwiLCBcdFx0Y29udHJvbDogKE1vZHVsZXMuVHJhbnNmZXJzKSA/IDxkaXY+dGVzdDwvZGl2PiA6IG51bGx9LFxuXHRcdF07XG5cdH1cblxuXHRyZW5kZXIoKXtcblx0XHRjb25zdCBkYXRhID0gdGhpcy5wcm9wcy5kYXRhO1x0XHRcblx0XHRjb25zdCB0cmVuZHMgPSB0aGlzLnByb3BzLnRyZW5kcztcdFx0XG5cdFx0Y29uc3QgbW9kcyA9IHRoaXMuZ2V0TW9kdWxlcygpO1xuXHRcdGNvbnN0IG1vZFRlc3QgPSBtb2RzWzBdO1xuXG5cdFx0Y29uc3QgcmVjZW50ID0gKGRhdGEhPW51bGwpID8gZGF0YS5yZWNlbnQgOiBudWxsXG5cdFx0Y29uc3QgY291cnNlcyA9IChkYXRhIT1udWxsKSA/IGRhdGEuY291cnNlcyA6IG51bGxcblx0XHRyZXR1cm4gKFxuXHRcdFx0PEdyaWRDb250YWluZXIgY2xhc3NOYW1lPSdtb2QtcGFnZSc+XG5cdFx0XHRcdDxHcmlkSXRlbT5cblx0XHRcdFx0XHQ8R3JpZENvbnRhaW5lcj5cblx0XHRcdFx0XHRcdDxHcmlkSXRlbT5cblx0XHRcdFx0XHRcdFx0PFNlY3Rpb24gY29sb3I9eyd3aGl0ZSd9PlxuXHRcdFx0XHRcdFx0XHRcdDxHcmlkQ29udGFpbmVyIHNwYWNpbmc9ezE2fT5cblx0XHRcdFx0XHRcdFx0XHRcdDxHcmlkSXRlbT5cblx0XHRcdFx0XHRcdFx0XHRcdFx0PEhlcm8vPlxuXHRcdFx0XHRcdFx0XHRcdFx0XHQ8UmVjZW50IGRhdGE9e3JlY2VudH0vPlxuXHRcdFx0XHRcdFx0XHRcdFx0PC9HcmlkSXRlbT5cblx0XHRcdFx0XHRcdFx0XHQ8L0dyaWRDb250YWluZXI+IFxuXHRcdFx0XHRcdFx0XHQ8L1NlY3Rpb24+XG5cdFx0XHRcdFx0XHQ8L0dyaWRJdGVtPiBcblx0XHRcdFx0XHRcdDxHcmlkSXRlbT5cblx0XHRcdFx0XHRcdFx0PFNlY3Rpb24gY29sb3I9eycjYzBjMGMwJ30+XG5cdFx0XHRcdFx0XHRcdFx0PGgxPkxhYnM8L2gxPlxuXHRcdFx0XHRcdFx0XHRcdDxTb2Z0d2FyZVRyZW5kcyBkYXRhPXt0cmVuZHN9Lz5cblx0XHRcdFx0XHRcdFx0PC9TZWN0aW9uPlxuXHRcdFx0XHRcdFx0PC9HcmlkSXRlbT4gIFxuXHRcdFx0XHRcdFx0PEdyaWRJdGVtPlxuXHRcdFx0XHRcdFx0XHQ8U2VjdGlvbiBjb2xvcj17J3doaXRlJ30+XG5cdFx0XHRcdFx0XHRcdFx0PGgxPmVMZWFybmluZzwvaDE+XG5cdFx0XHRcdFx0XHRcdFx0PExhdGVzdENvdXJzZXMgZGF0YT17Y291cnNlc30vPlxuXHRcdFx0XHRcdFx0XHQ8L1NlY3Rpb24+XG5cdFx0XHRcdFx0XHQ8L0dyaWRJdGVtPiAgXG5cdFx0XHRcdFx0PC9HcmlkQ29udGFpbmVyPlxuXHRcdFx0XHQ8L0dyaWRJdGVtPlxuXHRcdFx0PC9HcmlkQ29udGFpbmVyPlxuXHRcdClcblx0fVxufVxuXG5leHBvcnQgZGVmYXVsdCB3aXRoTW9kdWxlKFBhZ2VDb21wb25lbnQpO1xuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuaW1wb3J0IENvbXBvbmVudCBmcm9tICdjb3JlL2NvbXBvbmVudHMvY29tcG9uZW50JztcbmltcG9ydCBQb3N0TGluayBmcm9tICdqbWFycm95YXZlL2NvbXBvbmVudHMvZGF0YS9wb3N0X2xpbmsnO1xuaW1wb3J0IFwiLi9yZWNlbnQuc2Nzc1wiO1xuXG5mdW5jdGlvbiBSZWNlbnRJdGVtKHtkYXRhfSl7XG5cdHJldHVybiAoXG5cdFx0PGgyPjxQb3N0TGluayBjYXRlZ29yeT17ZGF0YS5hcmVhfSBzbHVnPXtkYXRhLnNsdWd9PntkYXRhLnRpdGxlfTwvUG9zdExpbms+PC9oMj5cblx0KVxufVxuXG5jbGFzcyBSZWNlbnRJdGVtcyBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gIHJlbmRlcigpIHtcbiAgICB2YXIga2V5ID0gMDtcbiAgXHRjb25zdCBkYXRhID0gdGhpcy5wcm9wcy5kYXRhO1xuICAgIHJldHVybiAoXG4gICAgICA8ZGl2IGNsYXNzTmFtZT0nbW9kLXJlY2VudCc+XG4gICAgICBcdDxoMT5SZWNlbnQ8L2gxPlxuICAgIFx0XHR7ZGF0YS5tYXAoKGl0ZW0pPT5cbiAgICBcdFx0XHQ8UmVjZW50SXRlbSBkYXRhPXtpdGVtfSBrZXk9e2tleSsrfS8+XG4gICAgXHRcdCl9XG4gICAgICA8L2Rpdj5cbiAgICApO1xuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IENvbXBvbmVudChSZWNlbnRJdGVtcyk7IiwiXG52YXIgY29udGVudCA9IHJlcXVpcmUoXCIhIS4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL2ZyYW1ld29ya3Mvd2ViYXBwcy9zdGFydHVwL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2luZGV4LmpzIS4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL2ZyYW1ld29ya3Mvd2ViYXBwcy9zdGFydHVwL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9saWIvbG9hZGVyLmpzIS4vcmVjZW50LnNjc3NcIik7XG5cbmlmKHR5cGVvZiBjb250ZW50ID09PSAnc3RyaW5nJykgY29udGVudCA9IFtbbW9kdWxlLmlkLCBjb250ZW50LCAnJ11dO1xuXG52YXIgdHJhbnNmb3JtO1xudmFyIGluc2VydEludG87XG5cblxuXG52YXIgb3B0aW9ucyA9IHtcImhtclwiOnRydWV9XG5cbm9wdGlvbnMudHJhbnNmb3JtID0gdHJhbnNmb3JtXG5vcHRpb25zLmluc2VydEludG8gPSB1bmRlZmluZWQ7XG5cbnZhciB1cGRhdGUgPSByZXF1aXJlKFwiIS4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL2ZyYW1ld29ya3Mvd2ViYXBwcy9zdGFydHVwL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvbGliL2FkZFN0eWxlcy5qc1wiKShjb250ZW50LCBvcHRpb25zKTtcblxuaWYoY29udGVudC5sb2NhbHMpIG1vZHVsZS5leHBvcnRzID0gY29udGVudC5sb2NhbHM7XG5cbmlmKG1vZHVsZS5ob3QpIHtcblx0bW9kdWxlLmhvdC5hY2NlcHQoXCIhIS4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL2ZyYW1ld29ya3Mvd2ViYXBwcy9zdGFydHVwL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2luZGV4LmpzIS4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL2ZyYW1ld29ya3Mvd2ViYXBwcy9zdGFydHVwL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9saWIvbG9hZGVyLmpzIS4vcmVjZW50LnNjc3NcIiwgZnVuY3Rpb24oKSB7XG5cdFx0dmFyIG5ld0NvbnRlbnQgPSByZXF1aXJlKFwiISEuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9mcmFtZXdvcmtzL3dlYmFwcHMvc3RhcnR1cC9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9pbmRleC5qcyEuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9mcmFtZXdvcmtzL3dlYmFwcHMvc3RhcnR1cC9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvbGliL2xvYWRlci5qcyEuL3JlY2VudC5zY3NzXCIpO1xuXG5cdFx0aWYodHlwZW9mIG5ld0NvbnRlbnQgPT09ICdzdHJpbmcnKSBuZXdDb250ZW50ID0gW1ttb2R1bGUuaWQsIG5ld0NvbnRlbnQsICcnXV07XG5cblx0XHR2YXIgbG9jYWxzID0gKGZ1bmN0aW9uKGEsIGIpIHtcblx0XHRcdHZhciBrZXksIGlkeCA9IDA7XG5cblx0XHRcdGZvcihrZXkgaW4gYSkge1xuXHRcdFx0XHRpZighYiB8fCBhW2tleV0gIT09IGJba2V5XSkgcmV0dXJuIGZhbHNlO1xuXHRcdFx0XHRpZHgrKztcblx0XHRcdH1cblxuXHRcdFx0Zm9yKGtleSBpbiBiKSBpZHgtLTtcblxuXHRcdFx0cmV0dXJuIGlkeCA9PT0gMDtcblx0XHR9KGNvbnRlbnQubG9jYWxzLCBuZXdDb250ZW50LmxvY2FscykpO1xuXG5cdFx0aWYoIWxvY2FscykgdGhyb3cgbmV3IEVycm9yKCdBYm9ydGluZyBDU1MgSE1SIGR1ZSB0byBjaGFuZ2VkIGNzcy1tb2R1bGVzIGxvY2Fscy4nKTtcblxuXHRcdHVwZGF0ZShuZXdDb250ZW50KTtcblx0fSk7XG5cblx0bW9kdWxlLmhvdC5kaXNwb3NlKGZ1bmN0aW9uKCkgeyB1cGRhdGUoKTsgfSk7XG59IiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuaW1wb3J0IEdyaWRDb250YWluZXIgZnJvbSAnam1hcnJveWF2ZS9jb21wb25lbnRzL3V4aS9jb3JlL2dyaWRfY29udGFpbmVyJztcbmltcG9ydCBHcmlkSXRlbSBmcm9tICdqbWFycm95YXZlL2NvbXBvbmVudHMvdXhpL2NvcmUvZ3JpZF9pdGVtJztcbmltcG9ydCB7IExpbmsgfSBmcm9tICdyZWFjdC1yb3V0ZXInXG5pbXBvcnQgQ29tcG9uZW50IGZyb20gJ2NvcmUvY29tcG9uZW50cy9jb21wb25lbnQnO1xuaW1wb3J0IENvcmVEYXRlIGZyb20gJ2NvcmUvY29tcG9uZW50cy9kYXRlJztcblxuZnVuY3Rpb24gU29mdHdhcmVUcmVuZCh7ZGF0YX0pIHtcbiAgICB2YXIga2V5ID0gMDtcbiAgICByZXR1cm4gKFxuICAgICAgPHVsPlxuICBcdFx0e2RhdGEubWFwKChpdGVtKT0+XG4gIFx0XHRcdDxsaSBrZXk9e2tleSsrfT5cbiAgXHRcdFx0XHR7aXRlbS50ZXh0fVxuICBcdFx0XHQ8L2xpPlxuICBcdFx0KX1cbiAgICAgIDwvdWw+XG4gICAgKTtcbn1cblxuY2xhc3MgU29mdHdhcmVUcmVuZENvbXBvbmVudCBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gIHJlbmRlcigpIHtcbiAgICB2YXIga2V5ID0gMDtcbiAgXHRjb25zdCBkYXRhID0gdGhpcy5wcm9wcy5kYXRhO1xuICAgIGNvbnN0IGNvbXAgPSBkYXRhLmNvbXBbMF07XG4gIFx0Y29uc3QgaXRlbXMgPSBbe3RpdGxlOiAnT1MnLCBrZXk6ICdvcyd9LHt0aXRsZTogJ0xlbmd1YWplcycsIGtleTogJ2xhbmcnfSx7dGl0bGU6ICdMaWJyZXJpYXMnLCBrZXk6ICdmdyd9LHt0aXRsZTogJ1NlcnZpY2lvcycsIGtleTogJ3NlcnZpY2VzJ31dO1xuICAgIGNvbnN0IGxhc3RVcGRhdGUgPSBuZXcgRGF0ZShgJHtjb21wLmRhdGUuc3Vic3RyaW5nKDAsNCl9LyR7Y29tcC5kYXRlLnN1YnN0cmluZyg0LDYpfS8ke2NvbXAuZGF0ZS5zdWJzdHJpbmcoNiw4KX1gKVxuICAgIHJldHVybiAoXG4gICAgICA8R3JpZENvbnRhaW5lciBzcGFjaW5nPXs4fT4gICAgICAgXG4gICAgICAgIDxHcmlkSXRlbSB4cz17MTJ9PlxuICAgICAgICAgIDxoMj5Qcm9jZXNhbWllbnRvIGRlIExlbmd1YWplIE5hdHVyYWw8L2gyPlxuICAgICAgICAgIDxkaXY+dGVuZGVuY2lhcyBlbiB1c28gZGUgc29mdHdhcmUgcGFyYSBkZXNhcnJvbGxvIGFjb3JkZSBhIGxhcyBwcmVndW50YXMgZGUgbGEgY29tdW5pZGFkIGRlIFN0YWNrb3ZlcmZsb3cuIDxMaW5rIHRvPXsnbGFicy9zdGFja292ZXJmbG93J30+dmVyIG3DoXM8L0xpbms+PC9kaXY+XG4gICAgICAgIDwvR3JpZEl0ZW0+XG4gICAgICAgIHtpdGVtcy5tYXAobGlzdCA9PlxuICAgICAgICAgIDxHcmlkSXRlbSB4cz17MTJ9IHNtPXs2fSBtZD17M30ga2V5PXtrZXkrK30+XG4gICAgICAgICAgICA8aDE+e2xpc3QudGl0bGV9PC9oMT5cbiAgICAgICAgICAgIDxTb2Z0d2FyZVRyZW5kIGRhdGE9e2RhdGFbbGlzdC5rZXldLnNsaWNlKDAsMTApfS8+XG4gICAgICAgICAgPC9HcmlkSXRlbT5cbiAgICAgICAgKX1cbiAgICAgICAgPEdyaWRJdGVtIHhzPXsxMn0+XG4gICAgICAgICAgPGRpdj5BY3R1YWxpemFkbzogPENvcmVEYXRlIHZhbHVlPXtsYXN0VXBkYXRlfSBsYW5nPXsnZXMnfS8+PC9kaXY+XG4gICAgICAgIDwvR3JpZEl0ZW0+XG4gICAgICA8L0dyaWRDb250YWluZXI+ICAgICAgIFxuICAgICk7XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgQ29tcG9uZW50KFNvZnR3YXJlVHJlbmRDb21wb25lbnQpOyIsImNsYXNzIE1vZHVsZXMge1xufVxuXG5cbk1vZHVsZXMuR2FtZXMgPSBmYWxzZTtcbk1vZHVsZXMuU3RhbmRpbmdzID0gZmFsc2U7XG5Nb2R1bGVzLlBvc3RTZWFzb24gPSBmYWxzZTtcbk1vZHVsZXMuVHJhbnNmZXJzID0gdHJ1ZTtcblxuZXhwb3J0IGRlZmF1bHQgKE1vZHVsZXMpOyJdLCJzb3VyY2VSb290IjoiIn0=