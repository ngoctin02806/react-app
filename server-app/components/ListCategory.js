"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _reactFontawesome = require("@fortawesome/react-fontawesome");

var _freeSolidSvgIcons = require("@fortawesome/free-solid-svg-icons");

var _CategoryItem = _interopRequireDefault(require("./CategoryItem"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  font-size: 17px;\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var LabelStyled = _styledComponents["default"].label(_templateObject());

var ListCategory = function ListCategory(props) {
  return /*#__PURE__*/_react["default"].createElement("div", null, /*#__PURE__*/_react["default"].createElement(_reactFontawesome.FontAwesomeIcon, {
    className: "mr-1",
    size: "lg",
    icon: _freeSolidSvgIcons.faListOl
  }), /*#__PURE__*/_react["default"].createElement(LabelStyled, props, "Danh m\u1EE5c"), /*#__PURE__*/_react["default"].createElement("div", {
    className: "border p-2"
  }, props.categories.map(function (item, index) {
    return /*#__PURE__*/_react["default"].createElement(_CategoryItem["default"], {
      key: index,
      nameIcon: item.category_name,
      urlIcon: item.icon_category
    });
  })));
};

var _default = ListCategory;
exports["default"] = _default;