"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _reactHelmet = require("react-helmet");

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _ProductList = _interopRequireDefault(require("./ProductList"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _templateObject2() {
  var data = _taggedTemplateLiteral(["\n  display: flex;\n  justify-content: center;\n  padding-top: 20px;\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  font-size: 25px;\n  color: #aaa;\n  font-weight: normal;\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var ProductTitle = _styledComponents["default"].div(_templateObject());

var DivTitle = _styledComponents["default"].div(_templateObject2());

var Home = function Home(props) {
  return /*#__PURE__*/_react["default"].createElement("div", {
    className: "bg-light"
  }, /*#__PURE__*/_react["default"].createElement("div", {
    className: "container"
  }, /*#__PURE__*/_react["default"].createElement(DivTitle, null, /*#__PURE__*/_react["default"].createElement(_reactHelmet.Helmet, null, /*#__PURE__*/_react["default"].createElement("title", null, "Trang ch\u1EE7")), /*#__PURE__*/_react["default"].createElement(ProductTitle, null, "T\u1EA5t c\u1EA3 s\u1EA3n ph\u1EA9m")), /*#__PURE__*/_react["default"].createElement(_ProductList["default"], null)));
};

var _default = Home;
exports["default"] = _default;