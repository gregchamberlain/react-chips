'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactAutosuggest = require('react-autosuggest');

var _reactAutosuggest2 = _interopRequireDefault(_reactAutosuggest);

var _radium = require('radium');

var _radium2 = _interopRequireDefault(_radium);

var _reactThemeable = require('react-themeable');

var _reactThemeable2 = _interopRequireDefault(_reactThemeable);

var _theme = require('./theme');

var _theme2 = _interopRequireDefault(_theme);

var _Chip = require('./Chip');

var _Chip2 = _interopRequireDefault(_Chip);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Chips = function (_Component) {
  _inherits(Chips, _Component);

  function Chips(props) {
    _classCallCheck(this, Chips);

    var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(Chips).call(this, props));

    _this.componentDidMount = function () {
      _this.chips = document.getElementById('chips-wrapper');
    };

    _this.onBlur = function (e) {
      _this.chips.focus();
    };

    _this.onFocus = function (e) {
      _this.chips.blur();
    };

    _this.handleKeyDown = function (e) {
      if (!_this.props.fromSuggestionsOnly && e.keyCode === 9) {
        e.preventDefault();
        if (_this.state.value) _this.addChip(_this.state.value);
      }
      if (e.keyCode === 8) {
        _this.onBackspace();
      } else if (_this.state.chipSelected) {
        _this.setState({ chipSelected: false });
      }
    };

    _this.onBackspace = function (code) {
      if (_this.state.value === "" && _this.state.chips.length > 0) {
        if (_this.state.chipSelected) {
          var nextChips = _this.state.chips.slice(0, -1);
          _this.setState({
            chipSelected: false,
            chips: nextChips
          });
          _this.props.onChange(nextChips);
        } else {
          _this.setState({ chipSelected: true });
        }
      }
    };

    _this.addChip = function (value) {
      if (_this.props.uniqueChips && _this.state.chips.indexOf(value) !== -1) {
        _this.setState({ value: "" });
        return;
      }
      var chips = [].concat(_toConsumableArray(_this.state.chips), [value]);
      _this.setState({ chips: chips, value: "" });
      _this.props.onChange(chips);
    };

    _this.removeChip = function (idx) {
      return function () {
        var chips = _this.state.chips;

        var left = chips.slice(0, idx);
        var right = chips.slice(idx + 1);
        var nextChips = [].concat(_toConsumableArray(left), _toConsumableArray(right));
        _this.setState({ chips: nextChips });
        _this.props.onChange(nextChips);
      };
    };

    _this.renderChips = function () {
      return _this.state.chips.map(function (chip, idx) {
        return _react2.default.cloneElement(_this.props.renderChip(chip), {
          selected: _this.state.chipSelected && idx === _this.state.chips.length - 1,
          onRemove: _this.removeChip(idx),
          index: idx,
          key: 'chip' + idx
        });
      });
    };

    _this.getItems = function () {
      if (_this.props.uniqueChips) {
        return _this.props.suggestions.filter(function (item) {
          return _this.state.chips.indexOf(_this.props.getChipValue(item)) === -1;
        });
      } else {
        return _this.props.suggestions;
      }
    };

    _this.onSuggestionsFetchRequested = function (_ref) {
      var value = _ref.value;
      var _this$props = _this.props;
      var suggestions = _this$props.suggestions;
      var suggestionsFilter = _this$props.suggestionsFilter;

      _this.setState({
        suggestions: _this.getItems().filter(function (opts) {
          return suggestionsFilter(opts, value);
        })
      });
    };

    _this.onSuggestionsClearRequested = function () {
      _this.setState({ suggestions: [] });
    };

    _this.onChange = function (e, _ref2) {
      var newValue = _ref2.newValue;

      if (!_this.props.fromSuggestionsOnly && newValue.indexOf(',') !== -1) {
        var chips = newValue.split(",").map(function (val) {
          return val.trim();
        }).filter(function (val) {
          return val !== "";
        });
        chips.forEach(function (chip) {
          _this.addChip(chip);
        });
      } else {
        _this.setState({ value: newValue });
      }
    };

    _this.state = {
      value: "",
      chips: props.chips,
      chipSelected: false,
      suggestions: []
    };
    return _this;
  }

  _createClass(Chips, [{
    key: 'render',
    value: function render() {
      var _this2 = this;

      var _state = this.state;
      var value = _state.value;
      var suggestions = _state.suggestions;
      var _props = this.props;
      var placeholder = _props.placeholder;
      var renderSuggestion = _props.renderSuggestion;
      var getSuggestionValue = _props.getSuggestionValue;

      var themr = (0, _reactThemeable2.default)(this.props.theme);

      var inputProps = {
        placeholder: placeholder,
        value: value,
        onChange: this.onChange,
        onKeyDown: this.handleKeyDown,
        onBlur: this.onBlur,
        onFocus: this.onFocus
      };

      return _react2.default.createElement(
        'div',
        _extends({}, themr(200, 'chipsContainer'), { id: 'chips-wrapper' }),
        this.renderChips(),
        _react2.default.createElement(_reactAutosuggest2.default, {
          theme: this.props.theme,
          suggestions: this.state.suggestions,
          onSuggestionsFetchRequested: this.onSuggestionsFetchRequested,
          onSuggestionsClearRequested: this.onSuggestionsClearRequested,
          renderSuggestion: renderSuggestion,
          inputProps: inputProps,
          getSuggestionValue: getSuggestionValue,
          onSuggestionSelected: function onSuggestionSelected(e, _ref3) {
            var suggestion = _ref3.suggestion;
            return _this2.addChip(suggestion);
          }
        })
      );
    }
  }]);

  return Chips;
}(_react.Component);

Chips.propTypes = {
  placeholder: _react.PropTypes.string,
  theme: _react.PropTypes.object,
  suggestions: _react.PropTypes.array,
  fromSuggestionsOnly: _react.PropTypes.bool,
  uniqueChips: _react.PropTypes.bool,
  chips: _react.PropTypes.array,
  getSuggestionValue: _react.PropTypes.func,
  onChange: _react.PropTypes.func,
  renderChip: _react.PropTypes.func,
  renderSuggestion: _react.PropTypes.func,
  suggestionsFilter: _react.PropTypes.func,
  getChipValue: _react.PropTypes.func
};

Chips.defaultProps = {
  placeholder: '',
  theme: _theme2.default,
  suggestions: [],
  fromSuggestionsOnly: false,
  uniqueChips: true,
  getSuggestionValue: function getSuggestionValue(s) {
    return s;
  },
  chips: [],
  onChange: function onChange() {},
  renderChip: function renderChip(value) {
    return _react2.default.createElement(
      _Chip2.default,
      null,
      value
    );
  },
  renderSuggestion: function renderSuggestion(suggestion, _ref4) {
    var query = _ref4.query;
    return _react2.default.createElement(
      'span',
      null,
      suggestion
    );
  },
  suggestionsFilter: function suggestionsFilter(opt, val) {
    return opt.toLowerCase().indexOf(val.toLowerCase()) !== -1;
  },
  getChipValue: function getChipValue(item) {
    return item;
  }
};
exports.default = (0, _radium2.default)(Chips);