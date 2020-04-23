"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _reactFontawesome = require("@fortawesome/react-fontawesome");

var _freeSolidSvgIcons = require("@fortawesome/free-solid-svg-icons");

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var PlusBox = _react["default"].forwardRef(function (props, inputRef) {
  return /*#__PURE__*/_react["default"].createElement("div", {
    style: {
      display: props.changeImage && !props.srcImage ? '' : 'none'
    },
    onClick: function onClick() {
      return props.activedClick();
    },
    className: "add-image"
  }, /*#__PURE__*/_react["default"].createElement(_reactFontawesome.FontAwesomeIcon, {
    color: "#bbb",
    icon: _freeSolidSvgIcons.faPlusSquare
  }), /*#__PURE__*/_react["default"].createElement("input", {
    id: "add-image",
    onChange: function onChange() {
      props.preview();
    },
    type: "file",
    hidden: true,
    ref: inputRef
  }));
});

var _default = PlusBox;
exports["default"] = _default;