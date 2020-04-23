"use strict";

var _express = _interopRequireDefault(require("express"));

var _path = _interopRequireDefault(require("path"));

var _react = _interopRequireDefault(require("react"));

var _server = _interopRequireDefault(require("react-dom/server"));

var _reactRouterDom = require("react-router-dom");

var _cors = _interopRequireDefault(require("cors"));

var _App = _interopRequireDefault(require("../components/App"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var server = (0, _express["default"])();
server.use(_express["default"]["static"](_path["default"].resolve(__dirname, '../../dist')));
server.use('/img', _express["default"]["static"](_path["default"].resolve(__dirname, '../images')));
server.use((0, _cors["default"])());
server.get('/*', function (req, res) {
  var context = {};

  var initialMarkupHtml = _server["default"].renderToString( /*#__PURE__*/_react["default"].createElement(_reactRouterDom.StaticRouter, {
    location: req.url,
    context: context
  }, /*#__PURE__*/_react["default"].createElement(_App["default"], null)));

  return res.send("<!DOCTYPE html>\n                          <html lang=\"en\">\n                            <head>\n                                <meta charset=\"UTF-8\">\n                                <title>React App</title>\n                                <meta name=\"viewport\" content=\"width=device-width, initial-scale=1, shrink-to-fit=no\">\n                                <link rel=\"icon\" href=\"/img/icons/react-logo.ico\" type=\"image/x-icon\" />\n                            <link href=\"/main.css\" rel=\"stylesheet\"></head>\n                            <body>\n                                <div id=\"root\">".concat(initialMarkupHtml, "</div>\n                            <script src=\"/main.js\"></script></body>\n                          </html>"));
});
server.listen(3000, function () {
  console.info("[SERVER] Server is listening on port ".concat(3000));
});