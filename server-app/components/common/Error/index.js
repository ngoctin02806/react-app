"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _reactFontawesome = require("@fortawesome/react-fontawesome");

var _freeSolidSvgIcons = require("@fortawesome/free-solid-svg-icons");

var _react = _interopRequireDefault(require("react"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _templateObject2() {
  var data = _taggedTemplateLiteral(["\n  color: rgba(228,67,64,0.82);\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  color: ", ";\n  font-size: 12px;\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var ErrorUser = _styledComponents["default"].div(_templateObject(), function (props) {
  return props.color || 'rgba(228,67,64,0.82)';
});

var DangerErrorIcon = _styledComponents["default"].div(_templateObject2());

var ShowedError = function ShowedError(props) {
  return /*#__PURE__*/_react["default"].createElement("div", {
    className: "d-flex align-items-center"
  }, /*#__PURE__*/_react["default"].createElement(DangerErrorIcon, {
    className: "mr-1"
  }, /*#__PURE__*/_react["default"].createElement(_reactFontawesome.FontAwesomeIcon, {
    icon: _freeSolidSvgIcons.faTimesCircle
  })), /*#__PURE__*/_react["default"].createElement(ErrorUser, {
    color: props.color
  }, props.message));
};

var _default = ShowedError;
exports["default"] = _default;