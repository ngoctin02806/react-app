"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireWildcard(require("react"));

var _reactstrap = require("reactstrap");

var _reactHelmet = require("react-helmet");

var _FormCategory = _interopRequireDefault(require("./FormCategory"));

var _ListCategory = _interopRequireDefault(require("./ListCategory"));

var _CategoryContext = _interopRequireDefault(require("./context/CategoryContext/CategoryContext"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

var PostCategory = function PostCategory(props) {
  var categoryCtx = (0, _react.useContext)(_CategoryContext["default"]);
  (0, _react.useEffect)(function () {
    return function () {
      return console.log('PostCategory Unmount');
    };
  });
  return /*#__PURE__*/_react["default"].createElement("div", {
    className: "container"
  }, /*#__PURE__*/_react["default"].createElement(_reactstrap.Row, {
    className: "pt-4 position-relative"
  }, /*#__PURE__*/_react["default"].createElement(_reactHelmet.Helmet, null, /*#__PURE__*/_react["default"].createElement("meta", {
    charSet: "utf-8"
  }), /*#__PURE__*/_react["default"].createElement("title", null, "T\u1EA1o danh m\u1EE5c"), /*#__PURE__*/_react["default"].createElement("link", {
    rel: "canonical",
    href: "http://mysite.com/example"
  })), /*#__PURE__*/_react["default"].createElement(_reactstrap.Col, {
    md: 8
  }, /*#__PURE__*/_react["default"].createElement(_FormCategory["default"], {
    categories: categoryCtx.categories,
    addCategory: categoryCtx.addCategory
  })), /*#__PURE__*/_react["default"].createElement(_reactstrap.Col, {
    md: 4
  }, /*#__PURE__*/_react["default"].createElement(_ListCategory["default"], {
    categories: categoryCtx.childCategories
  }))));
};

var _default = PostCategory;
exports["default"] = _default;