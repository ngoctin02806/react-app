"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _Image = _interopRequireDefault(require("./common/Image"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var CategoryItem = function CategoryItem(props) {
  return /*#__PURE__*/_react["default"].createElement("div", {
    style: {
      cursor: 'pointer'
    },
    className: "d-flex align-items-center p-1 hover-item"
  }, /*#__PURE__*/_react["default"].createElement(_Image["default"], {
    className: "mr-2 rounded-circle",
    width: "30px",
    height: "30px",
    heightSkeleton: 30,
    src: props.urlIcon,
    alt: "",
    circle: true
  }), /*#__PURE__*/_react["default"].createElement("div", null, props.nameIcon));
};

var _default = CategoryItem;
exports["default"] = _default;