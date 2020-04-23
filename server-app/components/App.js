"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _reactRouterDom = require("react-router-dom");

var _reactLoadable = _interopRequireDefault(require("react-loadable"));

var _Header = _interopRequireDefault(require("./common/Header"));

var _NotFoundPage = _interopRequireDefault(require("./common/NotFoundPage"));

var _LoadingWrap = _interopRequireDefault(require("./LoadingWrap"));

var _LoadingComponent = _interopRequireDefault(require("./common/LoadingComponent"));

var _CategoryContextProvider = _interopRequireDefault(require("./context/CategoryContext/CategoryContextProvider"));

var _LoadingContextProvider = _interopRequireDefault(require("./context/LoadingContext/LoadingContextProvider"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function App(props) {
  return /*#__PURE__*/_react["default"].createElement("div", {
    className: "position-relative"
  }, /*#__PURE__*/_react["default"].createElement(_LoadingContextProvider["default"], null, /*#__PURE__*/_react["default"].createElement(_Header["default"], null), /*#__PURE__*/_react["default"].createElement(_LoadingWrap["default"], null), /*#__PURE__*/_react["default"].createElement("div", null, /*#__PURE__*/_react["default"].createElement(_CategoryContextProvider["default"], null, /*#__PURE__*/_react["default"].createElement(_reactRouterDom.Switch, null, /*#__PURE__*/_react["default"].createElement(_reactRouterDom.Route, {
    path: "/",
    exact: true,
    component: (0, _reactLoadable["default"])({
      loader: function loader() {
        return new Promise(function (resolve, reject) {
          setTimeout(function () {
            resolve(Promise.resolve().then(function () {
              return _interopRequireWildcard(require('./Home'));
            }));
          }, 1000);
        });
      },
      loading: _LoadingComponent["default"],
      delay: 200
    })
  }), /*#__PURE__*/_react["default"].createElement(_reactRouterDom.Route, {
    path: "/tao-danh-muc",
    component: (0, _reactLoadable["default"])({
      loader: function loader() {
        return new Promise(function (resolve, reject) {
          setTimeout(function () {
            resolve(Promise.resolve().then(function () {
              return _interopRequireWildcard(require('./PostCategory'));
            }));
          }, 1000);
        });
      },
      loading: _LoadingComponent["default"],
      delay: 200
    })
  }), /*#__PURE__*/_react["default"].createElement(_reactRouterDom.Route, {
    component: _NotFoundPage["default"]
  }))))));
}

var _default = App;
exports["default"] = _default;