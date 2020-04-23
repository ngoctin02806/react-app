"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireWildcard(require("react"));

var _reactRouterDom = require("react-router-dom");

var _reactstrap = require("reactstrap");

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(n); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

var Header = function Header(props) {
  var _useState = (0, _react.useState)(false),
      _useState2 = _slicedToArray(_useState, 2),
      isOpen = _useState2[0],
      setIsOpen = _useState2[1];

  var toggle = function toggle() {
    return setIsOpen(!isOpen);
  };

  return /*#__PURE__*/_react["default"].createElement("div", null, /*#__PURE__*/_react["default"].createElement(_reactstrap.Navbar, {
    color: "white",
    className: "shadow-sm",
    light: true,
    expand: "md"
  }, /*#__PURE__*/_react["default"].createElement(_reactstrap.NavbarBrand, {
    tag: "div",
    href: "/"
  }, "Reactstrap"), /*#__PURE__*/_react["default"].createElement(_reactstrap.NavbarToggler, {
    onClick: toggle
  }), /*#__PURE__*/_react["default"].createElement(_reactstrap.Collapse, {
    isOpen: isOpen,
    navbar: true
  }, /*#__PURE__*/_react["default"].createElement(_reactstrap.Nav, {
    className: "mr-auto",
    navbar: true
  }, /*#__PURE__*/_react["default"].createElement(_reactstrap.NavItem, null, /*#__PURE__*/_react["default"].createElement(_reactRouterDom.NavLink, {
    className: "nav-link",
    to: "/"
  }, "Trang ch\u1EE7")), /*#__PURE__*/_react["default"].createElement(_reactstrap.UncontrolledDropdown, {
    nav: true,
    inNavbar: true
  }, /*#__PURE__*/_react["default"].createElement(_reactstrap.DropdownToggle, {
    nav: true,
    caret: true
  }, "Action"), /*#__PURE__*/_react["default"].createElement(_reactstrap.DropdownMenu, {
    right: true
  }, /*#__PURE__*/_react["default"].createElement(_reactstrap.DropdownItem, null, /*#__PURE__*/_react["default"].createElement(_reactRouterDom.NavLink, {
    className: "nav-link p-0",
    to: "/tao-danh-muc"
  }, "T\u1EA1o danh m\u1EE5c"))))), /*#__PURE__*/_react["default"].createElement(_reactstrap.Nav, {
    navbar: true
  }, /*#__PURE__*/_react["default"].createElement(_reactstrap.NavItem, null, /*#__PURE__*/_react["default"].createElement(_reactRouterDom.NavLink, {
    className: "nav-link",
    to: "/dang-nhap"
  }, "\u0110\u0103ng nh\u1EADp")), /*#__PURE__*/_react["default"].createElement(_reactstrap.NavItem, null, /*#__PURE__*/_react["default"].createElement(_reactRouterDom.NavLink, {
    className: "nav-link",
    to: "/dang-ki"
  }, "\u0110\u0103ng k\xED"))))));
};

var _default = Header;
exports["default"] = _default;