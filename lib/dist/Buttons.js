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

var Buttons = function (_React$Component) {
    _inherits(Buttons, _React$Component);

    function Buttons() {
        var _ref;

        var _temp, _this, _ret;

        _classCallCheck(this, Buttons);

        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
        }

        return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Buttons.__proto__ || Object.getPrototypeOf(Buttons)).call.apply(_ref, [this].concat(args))), _this), _this.buttonStyles = {}, _this.getButtonStyle = function (bsStyle) {
            if (bsStyle === 'error') bsStyle = 'danger';
            if (_this.buttonStyles[bsStyle] == null) {
                var style = Buttons.styles[bsStyle] || Buttons.styles.default;
                var borderColor = 'borderColor: ' + style.borderColor + ' !important';
                var boxShadow = 'boxShadow: inset 0 1px 1px rgba(0,0,0,.075), 0 0 8px ' + style.shadowColor + ' !important;';
                _this.buttonStyles[bsStyle] = ' ' + borderColor + ' ' + boxShadow;
            }
            return _this.buttonStyles[bsStyle];
        }, _temp), _possibleConstructorReturn(_this, _ret);
    }

    _createClass(Buttons, [{
        key: 'componentDidMount',
        value: function componentDidMount() {
            if (this.props.focusConfirmBtn && this.refs.confirmBtn) {
                try {
                    this.refs.confirmBtn.focus();
                } catch (e) {
                    // whoops
                }
            }
        }
    }, {
        key: 'render',
        value: function render() {
            var cancelBtnBsStyle = this.props.cancelBtnBsStyle === 'error' ? 'danger' : this.props.cancelBtnBsStyle;
            var confirmBtnBsStyle = this.props.confirmBtnBsStyle === 'error' ? 'danger' : this.props.confirmBtnBsStyle;
            return _react2.default.createElement(
                'p',
                { style: { marginTop: 20 } },
                this.props.showCancel && _react2.default.createElement(
                    'span',
                    null,
                    _react2.default.createElement(
                        'style',
                        { type: 'text/css', scoped: true },
                        'button { outline: 0 !important; ' + this.getButtonStyle(cancelBtnBsStyle) + '}'
                    ),
                    _react2.default.createElement(
                        'button',
                        {
                            style: _SweetAlertStyles2.default.button,
                            className: 'btn btn-lg btn-' + cancelBtnBsStyle,
                            onClick: this.props.onCancel,
                            type: 'button' },
                        this.props.cancelBtnText
                    )
                ),
                _react2.default.createElement(
                    'span',
                    null,
                    _react2.default.createElement(
                        'style',
                        { type: 'text/css', scoped: true },
                        'button { outline: 0 !important; ' + this.getButtonStyle(confirmBtnBsStyle) + '}'
                    ),
                    _react2.default.createElement(
                        'button',
                        {
                            ref: 'confirmBtn',
                            disabled: this.props.disabled,
                            style: _SweetAlertStyles2.default.button,
                            className: 'btn btn-lg btn-' + confirmBtnBsStyle,
                            onClick: this.props.onConfirm,
                            type: 'button' },
                        this.props.confirmBtnText
                    )
                )
            );
        }
    }]);

    return Buttons;
}(_react2.default.Component);

Buttons.propTypes = {
    confirmBtnText: _react2.default.PropTypes.oneOfType([_react2.default.PropTypes.node, _react2.default.PropTypes.string]),
    cancelBtnText: _react2.default.PropTypes.oneOfType([_react2.default.PropTypes.node, _react2.default.PropTypes.string]),
    cancelBtnBsStyle: _react2.default.PropTypes.oneOf(['default', 'primary', 'link', 'info', 'success', 'warning', 'danger']),
    confirmBtnBsStyle: _react2.default.PropTypes.oneOf(['default', 'primary', 'link', 'info', 'success', 'warning', 'danger']),
    onCancel: _react2.default.PropTypes.func,
    onConfirm: _react2.default.PropTypes.func,
    showCancel: _react2.default.PropTypes.bool,
    focusConfirmBtn: _react2.default.PropTypes.bool
};
Buttons.defaultProps = {
    confirmBtnText: 'OK',
    cancelBtnText: 'Cancel',
    cancelBtnBsStyle: 'link',
    confirmBtnBsStyle: 'primary',
    focusConfirmBtn: true,
    showCancel: false
};
Buttons.styles = {
    primary: {
        borderColor: '#286090',
        shadowColor: 'rgb(165, 202, 234)'
    },
    success: {
        borderColor: '#4cae4c',
        shadowColor: 'rgba(76, 174, 76, 0.6)'
    },
    info: {
        borderColor: '#46b8da',
        shadowColor: 'rgba(70, 184, 218, 0.6)'
    },
    danger: {
        borderColor: '#d43f3a',
        shadowColor: 'rgba(212, 63, 58, 0.6)'
    },
    warning: {
        borderColor: '#eea236',
        shadowColor: 'rgba(238, 162, 54, 0.6)'
    },
    default: {
        borderColor: '#cccccc',
        shadowColor: 'rgba(204, 204, 204, 0.6)'
    }
};
exports.default = Buttons;