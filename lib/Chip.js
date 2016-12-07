'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _radium = require('radium');

var _radium2 = _interopRequireDefault(_radium);

var _reactThemeable = require('react-themeable');

var _reactThemeable2 = _interopRequireDefault(_reactThemeable);

var _theme = require('./theme');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Chip = function Chip(_ref) {
  var selected = _ref.selected,
      theme = _ref.theme,
      onRemove = _ref.onRemove,
      children = _ref.children;

  var themr = (0, _reactThemeable2.default)(theme);
  return _react2.default.createElement(
    'div',
    themr(1, 'chip', selected ? 'chipSelected' : ''),
    children,
    _react2.default.createElement(
      'span',
      _extends({}, themr(2, 'chipRemove'), {
        onClick: onRemove }),
      ' \xD7'
    )
  );
};

Chip.propTypes = {
  theme: _react.PropTypes.object,
  selected: _react.PropTypes.bool,
  onRemove: _react.PropTypes.func
};

Chip.defaultProps = {
  theme: _theme.chipTheme,
  selected: false
};

exports.default = (0, _radium2.default)(Chip);