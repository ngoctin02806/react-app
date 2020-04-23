"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _reactRouterDom = require("react-router-dom");

var _Image = _interopRequireDefault(require("../Image"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _templateObject6() {
  var data = _taggedTemplateLiteral(["\n  width: 100%;\n\n  &:hover {\n    box-shadow: 0px 0px 3px #dddddd;\n  }\n"]);

  _templateObject6 = function _templateObject6() {
    return data;
  };

  return data;
}

function _templateObject5() {
  var data = _taggedTemplateLiteral(["\n  padding: 10px;\n"]);

  _templateObject5 = function _templateObject5() {
    return data;
  };

  return data;
}

function _templateObject4() {
  var data = _taggedTemplateLiteral(["\n  position: relative;\n  padding-top: 175px;\n"]);

  _templateObject4 = function _templateObject4() {
    return data;
  };

  return data;
}

function _templateObject3() {
  var data = _taggedTemplateLiteral(["\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n"]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = _taggedTemplateLiteral(["\n  font-weight: normal;\n  font-size: 14px;\n  color: #535353;\n  padding-top: 10px;\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  color: #f57224;\n  font-size: 20px;\n  font-weight: initial;\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var DivPrice = _styledComponents["default"].div(_templateObject());

var DivName = _styledComponents["default"].div(_templateObject2());

var DivImg = _styledComponents["default"].div(_templateObject3());

var CardImg = _styledComponents["default"].div(_templateObject4());

var WrapContent = _styledComponents["default"].div(_templateObject5());

var Card = _styledComponents["default"].div(_templateObject6());

var ProductCard = function ProductCard(props) {
  var _props$product = props.product,
      product_name = _props$product.product_name,
      price = _props$product.price,
      images = _props$product.images,
      _id = _props$product._id;
  return /*#__PURE__*/_react["default"].createElement(Card, null, /*#__PURE__*/_react["default"].createElement(CardImg, null, /*#__PURE__*/_react["default"].createElement(DivImg, null, /*#__PURE__*/_react["default"].createElement(_Image["default"], {
    heightSkeleton: 150,
    src: images[0].url
  }))), /*#__PURE__*/_react["default"].createElement(WrapContent, null, /*#__PURE__*/_react["default"].createElement(DivName, null, /*#__PURE__*/_react["default"].createElement(_reactRouterDom.Link, {
    to: "/san-pham/".concat(_id)
  }, product_name)), /*#__PURE__*/_react["default"].createElement(DivPrice, null, price, " \u0111")));
};

var _default = ProductCard;
exports["default"] = _default;