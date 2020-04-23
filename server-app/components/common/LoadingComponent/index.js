"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var LoadingComponent = function LoadingComponent(props) {
  if (props.pastDelay) {
    return /*#__PURE__*/_react["default"].createElement("div", {
      className: "d-flex justify-content-center align-items-center"
    }, /*#__PURE__*/_react["default"].createElement("h2", null, "Loading"));
  }

  return null;
};

var _default = LoadingComponent;
exports["default"] = _default;