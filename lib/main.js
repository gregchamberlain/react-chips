'use strict';

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactDom = require('react-dom');

var _reactChips = require('react-chips');

var _reactChips2 = _interopRequireDefault(_reactChips);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var items = ["Java", "Ruby", "Javascript", "C", "C++"];

(0, _reactDom.render)(_react2.default.createElement(_reactChips2.default, { autoCompleteData: items }), document.getElementById("root"));