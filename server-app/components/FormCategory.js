"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireWildcard(require("react"));

var _axios = _interopRequireDefault(require("axios"));

var _reactstrap = require("reactstrap");

var _config = _interopRequireDefault(require("../../config/config"));

var _AddImage = _interopRequireDefault(require("./common/AddImage"));

var _Error = _interopRequireDefault(require("./common/Error"));

var _LoadingContext = _interopRequireDefault(require("./context/LoadingContext/LoadingContext"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(n); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

var FormCategory = function FormCategory(props) {
  var loadingCtx = (0, _react.useContext)(_LoadingContext["default"]);

  var _useState = (0, _react.useState)({
    value: '',
    errorMsg: '',
    isValidInput: true
  }),
      _useState2 = _slicedToArray(_useState, 2),
      nameCategoryObj = _useState2[0],
      setNameCategoryObj = _useState2[1];

  var _useState3 = (0, _react.useState)({
    value: '',
    errorMsg: '',
    isValidInput: true
  }),
      _useState4 = _slicedToArray(_useState3, 2),
      identifyOfCategoryObj = _useState4[0],
      setIdentifyCategoryObj = _useState4[1];

  var validateInput = function validateInput(name, value) {
    if (name === 'category') {
      var regex = /(?:[\0-@\[-\^`\{-\xBF\xC4-\xC7\xCB\xCE-\xD1\xD6-\xD8\xDB\xDC\xDE\xDF\xE4-\xE7\xEB\xEE-\xF1\xF6-\xF8\xFB-\u0101\u0104-\u010F\u0112-\u0127\u012A-\u0167\u016A-\u019F\u01A2-\u01AE\u01B1-\u1E9F\u1EBE\u1EBF\u1EFA-\uD7FF\uE000-\uFFFF]|[\uD800-\uDBFF][\uDC00-\uDFFF]|[\uD800-\uDBFF](?![\uDC00-\uDFFF])|(?:[^\uD800-\uDBFF]|^)[\uDC00-\uDFFF])$/;
      var checkingResult = regex.exec(value);

      if (value === '') {
        return {
          isValidInput: false,
          errorMsg: 'Vui lòng không để trống Tên danh mục.'
        };
      }

      if (checkingResult !== null && checkingResult[0] !== ' ') {
        return {
          isValidInput: false,
          errorMsg: 'Vui lòng nhập đúng Tên danh mục.'
        };
      }
    }

    return {
      isValidInput: true,
      errorMsg: ''
    };
  };

  var handleInputValidation = function handleInputValidation(event) {
    var validObj = validateInput(event.target.name, event.target.value);
    setNameCategoryObj(_objectSpread({
      value: event.target.value
    }, validObj));
  };

  var submitForm = function submitForm(event) {
    event.preventDefault();

    if (nameCategoryObj.value === '') {
      setNameCategoryObj({
        value: '',
        isValidInput: false,
        errorMsg: 'Vui lòng không để trống Tên danh mục.'
      });
    } else {
      var data = {
        category_name: nameCategoryObj.value,
        icon_category: localStorage.getItem('icon-category'),
        parent: identifyOfCategoryObj.value === '' ? null : identifyOfCategoryObj.value
      };
      loadingCtx.showDone(true);
      setTimeout(function () {
        (0, _axios["default"])("".concat(_config["default"]['HOST']).concat(_config["default"]['VERSION'], "/categories"), {
          method: 'POST',
          data: _objectSpread({}, data)
        }).then(function (_ref) {
          var data = _ref.data;
          localStorage.removeItem('icon-category');
          setNameCategoryObj({
            value: '',
            isValidInput: true,
            errorMsg: ''
          });
          loadingCtx.showLoading(true);
          setTimeout(function () {
            loadingCtx.showDone(false);
          }, 1000);
          props.addCategory(data);
        })["catch"](function (err) {
          console.log(err.response);
        });
      }, 2000);
    }
  };

  return /*#__PURE__*/_react["default"].createElement(_reactstrap.Form, {
    onSubmit: submitForm
  }, /*#__PURE__*/_react["default"].createElement(_reactstrap.Row, null, /*#__PURE__*/_react["default"].createElement(_reactstrap.Col, {
    md: 12
  }, /*#__PURE__*/_react["default"].createElement(_AddImage["default"], null))), /*#__PURE__*/_react["default"].createElement(_reactstrap.Row, {
    form: true,
    className: "mt-2"
  }, /*#__PURE__*/_react["default"].createElement(_reactstrap.Col, {
    md: 6
  }, /*#__PURE__*/_react["default"].createElement(_reactstrap.FormGroup, null, /*#__PURE__*/_react["default"].createElement(_reactstrap.Label, {
    "for": "exampleEmail"
  }, "T\xEAn danh m\u1EE5c"), /*#__PURE__*/_react["default"].createElement(_reactstrap.Input, {
    type: "text",
    name: "category",
    id: "categoryName",
    placeholder: "T\xEAn danh m\u1EE5c",
    value: nameCategoryObj.value,
    onChange: function onChange(event) {
      return setNameCategoryObj({
        value: event.target.value,
        isValidInput: true,
        errorMsg: ''
      });
    },
    onBlur: function onBlur(event) {
      return handleInputValidation(event);
    }
  }), !nameCategoryObj.isValidInput && /*#__PURE__*/_react["default"].createElement(_Error["default"], {
    message: nameCategoryObj.errorMsg
  }))), /*#__PURE__*/_react["default"].createElement(_reactstrap.Col, {
    md: 6
  }, /*#__PURE__*/_react["default"].createElement(_reactstrap.FormGroup, null, /*#__PURE__*/_react["default"].createElement(_reactstrap.Label, {
    className: "p-0",
    "for": "exampleSelect"
  }, "Danh m\u1EE5c cha"), /*#__PURE__*/_react["default"].createElement(_reactstrap.Input, {
    value: identifyOfCategoryObj.value,
    onChange: function onChange(event) {
      return setIdentifyCategoryObj({
        value: event.target.value,
        isValidInput: true,
        errorMsg: ''
      });
    },
    type: "select",
    name: "select",
    id: "exampleSelect"
  }, /*#__PURE__*/_react["default"].createElement("option", {
    value: ""
  }, "Ch\u1ECDn danh m\u1EE5c"), props.categories.map(function (cate, i) {
    return /*#__PURE__*/_react["default"].createElement("option", {
      key: cate._id,
      value: cate._id
    }, cate.category_name);
  }))))), /*#__PURE__*/_react["default"].createElement(_reactstrap.Button, {
    color: "primary"
  }, "T\u1EA1o"));
};

var _default = FormCategory;
exports["default"] = _default;