"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function NotFoundPage(props) {
  return /*#__PURE__*/_react["default"].createElement("div", {
    className: "d-flex align-items-center justify-content-center",
    style: {
      height: '100vh',
      backgroundColor: '#219aff'
    }
  }, /*#__PURE__*/_react["default"].createElement("div", {
    className: "d-flex align-items-center",
    style: {
      color: '#fff'
    }
  }, /*#__PURE__*/_react["default"].createElement("div", {
    className: "mr-2 page-404"
  }, "404"), /*#__PURE__*/_react["default"].createElement("div", {
    className: "not-found"
  }, "NOT FOUND !")));
}

var _default = NotFoundPage;
exports["default"] = _default;