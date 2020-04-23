"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = _default;

var _react = _interopRequireDefault(require("react"));

var _reactFadeIn = _interopRequireDefault(require("react-fade-in"));

var _reactLottie = _interopRequireDefault(require("react-lottie"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

var circleLoading = _interopRequireWildcard(require("../../../images/circleLoading.json"));

var doneLoading = _interopRequireWildcard(require("../../../images/doneLoading.json"));

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  position: absolute;\n  background-color: rgba(221,221,221,0.91);\n  width: 100%;\n  height: 92.5vh;\n  z-index: 10;\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var LoadingScreen = _styledComponents["default"].div(_templateObject());

function _default(props) {
  var defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: circleLoading["default"],
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice'
    }
  };
  var defaultOptions1 = {
    loop: false,
    autoplay: true,
    animationData: doneLoading["default"],
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice'
    }
  };
  return /*#__PURE__*/_react["default"].createElement(LoadingScreen, {
    className: "d-flex align-items-center justify-content-center"
  }, /*#__PURE__*/_react["default"].createElement(_reactFadeIn["default"], null, /*#__PURE__*/_react["default"].createElement("div", {
    style: {
      height: '100%'
    },
    className: "d-flex align-items-center"
  }, /*#__PURE__*/_react["default"].createElement("h1", null, "Fetching pizza"), !props.loading ? /*#__PURE__*/_react["default"].createElement(_reactLottie["default"], {
    style: {
      margin: 0
    },
    options: defaultOptions,
    width: 60,
    height: 60
  }) : /*#__PURE__*/_react["default"].createElement(_reactLottie["default"], {
    options: defaultOptions1,
    width: 120,
    height: 120
  }))));
}