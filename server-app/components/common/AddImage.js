"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireWildcard(require("react"));

var _reactFontawesome = require("@fortawesome/react-fontawesome");

var _freeSolidSvgIcons = require("@fortawesome/free-solid-svg-icons");

var _index = _interopRequireDefault(require("./Image/index"));

var _PlusBox = _interopRequireDefault(require("./PlusBox"));

var _DeleteIcon = _interopRequireDefault(require("./DeleteIcon"));

var _firebaseHelper = require("../../utils/firebaseHelper");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(n); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

var AddImage = function AddImage(props) {
  var _useState = (0, _react.useState)(true),
      _useState2 = _slicedToArray(_useState, 2),
      deleteImageStatus = _useState2[0],
      setDeleteImageStatus = _useState2[1];

  var _useState3 = (0, _react.useState)(false),
      _useState4 = _slicedToArray(_useState3, 2),
      loadingStatus = _useState4[0],
      setLoadingStatus = _useState4[1];

  var _useState5 = (0, _react.useState)(''),
      _useState6 = _slicedToArray(_useState5, 2),
      loadBlobImg = _useState6[0],
      setLoadBlobImg = _useState6[1];

  var _useState7 = (0, _react.useState)(true),
      _useState8 = _slicedToArray(_useState7, 2),
      changeImage = _useState8[0],
      setChangeImage = _useState8[1];

  var fileInput = (0, _react.useRef)(null);

  var deleteImage = function deleteImage() {
    setLoadingStatus(true);

    var storageRef = _firebaseHelper.storage.ref();

    var iconRef = storageRef.child("images/".concat(localStorage.getItem('current-icon')));
    iconRef["delete"]().then(function () {
      setDeleteImageStatus(false);
      localStorage.removeItem('icon-category');
      localStorage.removeItem('current-icon');
      setLoadingStatus(false);
      setChangeImage(true);
    })["catch"](function (err) {
      console.log(err);
    });
  };

  var uploadImage = function uploadImage(fileImg) {
    var now = new Date().getTime();

    var storageRef = _firebaseHelper.storage.ref();

    var iconRef = storageRef.child("images/icon-category-".concat(now).concat(fileImg.name.slice(fileImg.name.indexOf('.'))));
    iconRef.put(fileImg).then(function (snapshot) {
      localStorage.setItem('current-icon', "icon-category-".concat(now).concat(fileImg.name.slice(fileImg.name.indexOf('.'))));
      return storageRef.child("images/icon-category-".concat(now).concat(fileImg.name.slice(fileImg.name.indexOf('.')))).getDownloadURL();
    }).then(function (url) {
      localStorage.setItem('icon-category', url);
    })["catch"](function (err) {
      console.log(err);
    });
  };

  var previewImage = function previewImage() {
    var fileReader = new FileReader();
    fileReader.addEventListener('load', function () {
      setDeleteImageStatus(true);
      setChangeImage(false);
      setLoadBlobImg("".concat(fileReader.result));
    }, false);

    if (fileInput.current.files[0]) {
      fileReader.readAsDataURL(fileInput.current.files[0]);
      uploadImage(fileInput.current.files[0]);
    }
  };

  var srcImage = localStorage.getItem('icon-category') || '';
  return /*#__PURE__*/_react["default"].createElement("div", null, /*#__PURE__*/_react["default"].createElement("label", {
    htmlFor: "add-image"
  }, "Upload icon"), /*#__PURE__*/_react["default"].createElement("div", {
    className: "d-flex align-items-center"
  }, /*#__PURE__*/_react["default"].createElement("div", {
    className: "position-relative",
    style: {
      display: !deleteImageStatus ? 'none' : ''
    }
  }, loadingStatus ? /*#__PURE__*/_react["default"].createElement("div", {
    className: "position-absolute d-flex justify-content-center align-items-center loading-background"
  }, /*#__PURE__*/_react["default"].createElement(_reactFontawesome.FontAwesomeIcon, {
    spin: true,
    size: "sm",
    color: "#212529",
    icon: _freeSolidSvgIcons.faCircleNotch
  })) : '', (srcImage || loadBlobImg) && /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, /*#__PURE__*/_react["default"].createElement(_DeleteIcon["default"], {
    deleteImage: deleteImage
  }), /*#__PURE__*/_react["default"].createElement(_index["default"], {
    width: "70px",
    height: "70px",
    heightSkeleton: 70,
    src: srcImage || loadBlobImg,
    alt: "Helloword"
  }))), /*#__PURE__*/_react["default"].createElement(_PlusBox["default"], {
    changeImage: changeImage,
    srcImage: srcImage,
    activedClick: function activedClick() {
      return fileInput.current.click();
    },
    preview: previewImage,
    ref: fileInput
  })));
};

var _default = AddImage;
exports["default"] = _default;