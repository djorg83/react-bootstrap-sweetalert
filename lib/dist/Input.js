'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _objectAssign = require('object-assign');

var _objectAssign2 = _interopRequireDefault(_objectAssign);

var _SweetAlertStyles = require('../styles/SweetAlertStyles');

var _SweetAlertStyles2 = _interopRequireDefault(_SweetAlertStyles);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Input = function (_React$Component) {
	_inherits(Input, _React$Component);

	function Input() {
		_classCallCheck(this, Input);

		return _possibleConstructorReturn(this, Object.getPrototypeOf(Input).apply(this, arguments));
	}

	_createClass(Input, [{
		key: 'componentDidMount',
		value: function componentDidMount() {
			if (this.props.type === 'input') {
				try {
					this.refs.input.focus();
				} catch (e) {
					// whoops
				}
			}
		}
	}, {
		key: 'render',
		value: function render() {
			return _react2.default.createElement(
				'div',
				{ style: { position: 'relative' } },
				this.props.inputType === 'textarea' ? _react2.default.createElement('textarea', {
					ref: 'input',
					rows: 4,
					className: 'form-control',
					value: this.props.inputValue || '',
					onChange: this.props.onChangeInput,
					onKeyDown: this.props.onInputKeyDown,
					placeholder: this.props.inputPlaceHolder || this.props.placeholder }) : _react2.default.createElement('input', {
					type: this.props.inputType,
					ref: 'input',
					className: 'form-control',
					value: this.props.inputValue || '',
					onChange: this.props.onChangeInput,
					onKeyDown: this.props.onInputKeyDown,
					placeholder: this.props.inputPlaceHolder || this.props.placeholder }),
				this.props.showValidationMessage && _react2.default.createElement(
					'div',
					{ style: _SweetAlertStyles2.default.inputErrorIcon },
					_react2.default.createElement('div', { style: (0, _objectAssign2.default)({}, _SweetAlertStyles2.default.inputErrorIconBeforeAfter, _SweetAlertStyles2.default.inputErrorIconBefore) }),
					_react2.default.createElement('div', { style: (0, _objectAssign2.default)({}, _SweetAlertStyles2.default.inputErrorIconBeforeAfter, _SweetAlertStyles2.default.inputErrorIconAfter) })
				)
			);
		}
	}]);

	return Input;
}(_react2.default.Component);

exports.default = Input;