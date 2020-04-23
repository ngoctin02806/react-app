"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _reactFontawesome = require("@fortawesome/react-fontawesome");

var _freeSolidSvgIcons = require("@fortawesome/free-solid-svg-icons");

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  width: 15px;\n  height: 15px;\n  background-color: #dddddd;\n  cursor: pointer;\n  position: absolute;\n  right: 5px;\n  top: 5px;\n  z-index: 100;\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var CloseCircle = _styledComponents["default"].div(_templateObject());

var DeleteIcon = function DeleteIcon(props) {
  return /*#__PURE__*/_react["default"].createElement(CloseCircle, {
    onClick: props.deleteImage,
    className: "d-flex justify-content-center align-items-center rounded-circle shadow"
  }, /*#__PURE__*/_react["default"].createElement(_reactFontawesome.FontAwesomeIcon, {
    color: "#aaa",
    icon: _freeSolidSvgIcons.faTimes,
    size: "xs"
  }));
};

var _default = DeleteIcon;
exports["default"] = _default;