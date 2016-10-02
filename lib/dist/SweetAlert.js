'use strict';

// third-party

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _objectAssign = require('object-assign');

var _objectAssign2 = _interopRequireDefault(_objectAssign);

var _SuccessIcon = require('./SuccessIcon');

var _SuccessIcon2 = _interopRequireDefault(_SuccessIcon);

var _ErrorIcon = require('./ErrorIcon');

var _ErrorIcon2 = _interopRequireDefault(_ErrorIcon);

var _InfoIcon = require('./InfoIcon');

var _InfoIcon2 = _interopRequireDefault(_InfoIcon);

var _WarningIcon = require('./WarningIcon');

var _WarningIcon2 = _interopRequireDefault(_WarningIcon);

var _CustomIcon = require('./CustomIcon');

var _CustomIcon2 = _interopRequireDefault(_CustomIcon);

var _Buttons = require('./Buttons');

var _Buttons2 = _interopRequireDefault(_Buttons);

var _Input = require('./Input');

var _Input2 = _interopRequireDefault(_Input);

var _ValidationMessage = require('./ValidationMessage');

var _ValidationMessage2 = _interopRequireDefault(_ValidationMessage);

var _Title = require('./Title');

var _Title2 = _interopRequireDefault(_Title);

var _Content = require('./Content');

var _Content2 = _interopRequireDefault(_Content);

var _SweetAlertStyles = require('../styles/SweetAlertStyles');

var _SweetAlertStyles2 = _interopRequireDefault(_SweetAlertStyles);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

// components


// styles


var style = _SweetAlertStyles2.default.sweetAlert;

//Check if window exists for server side rendering
if (window && window.innerWidth < 767) {
    style = (0, _objectAssign2.default)({}, style, _SweetAlertStyles2.default.sweetAlertMobile);
}

var SweetAlert = function (_React$Component) {
    _inherits(SweetAlert, _React$Component);

    function SweetAlert() {
        var _Object$getPrototypeO;

        var _temp, _this, _ret;

        _classCallCheck(this, SweetAlert);

        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
        }

        return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_Object$getPrototypeO = Object.getPrototypeOf(SweetAlert)).call.apply(_Object$getPrototypeO, [this].concat(args))), _this), _this.state = {
            inputValue: '',
            showValidationMessage: false
        }, _this.deprecationWarning = function (msg) {
            try {
                console.warn('react-bootstrap-sweetalert: ' + msg);
            } catch (e) {}
        }, _this.renderIcon = function () {
            switch (_this.props.type) {
                case 'danger':
                case 'error':
                    return _react2.default.createElement(_ErrorIcon2.default, null);
                case 'warning':
                    return _react2.default.createElement(_WarningIcon2.default, null);
                case 'info':
                    return _react2.default.createElement(_InfoIcon2.default, null);
                case 'success':
                    return _react2.default.createElement(_SuccessIcon2.default, null);
                case 'custom':
                    if (_this.props.customIcon) {
                        if (typeof _this.props.customIcon == 'string') {
                            return _react2.default.createElement(_CustomIcon2.default, { iconUrl: _this.props.customIcon });
                        } else {
                            return _this.props.customIcon;
                        }
                    }
            }
        }, _this.onChangeInput = function (e) {
            _this.setState({
                inputValue: e.target.value,
                showValidationMessage: false
            });
        }, _this.onConfirm = function () {
            if (_this.props.type === 'input') {
                if (_this.props.required && (_this.state.inputValue == null || _this.state.inputValue.length < 1)) {
                    _this.setState({
                        showValidationMessage: true
                    });
                } else {
                    _this.props.onConfirm(_this.state.inputValue);
                }
            } else {
                _this.props.onConfirm();
            }
        }, _this.onInputKeyDown = function (e) {
            if (e.keyCode == 13) {
                if (_this.props.onConfirm) {
                    _this.onConfirm();
                    e.stopPropagation();
                }
            }
        }, _this.onKeyDown = function (e) {
            if (e.keyCode == 27) {
                if (_this.props.allowEscape && _this.props.onCancel) {
                    _this.props.onCancel();
                    e.stopPropagation();
                }
            }
        }, _temp), _possibleConstructorReturn(_this, _ret);
    }

    _createClass(SweetAlert, [{
        key: 'componentWillMount',
        value: function componentWillMount() {
            if (this.props.inputPlaceHolder) {
                this.deprecationWarning('\'inputPlaceHolder\' prop is deprecated. Please use the prop \'placeholder\'.');
            }
            if (this.props.inputValidationMsg) {
                this.deprecationWarning('\'inputValidationMsg\' prop is deprecated. Please use the prop \'validationMsg\'.');
            }
            if (this.props.defaultValue != null) {
                this.setState({
                    inputValue: this.props.defaultValue
                });
            }
        }
    }, {
        key: 'render',
        value: function render() {

            return _react2.default.createElement(
                'div',
                null,
                !this.props.hideOverlay && _react2.default.createElement('div', { style: _SweetAlertStyles2.default.overlay }),
                _react2.default.createElement(
                    'div',
                    {
                        style: (0, _objectAssign2.default)({}, style, this.props.style),
                        onKeyDown: this.onKeyDown,
                        className: 'sweet-alert ' + this.props.customClass
                    },
                    this.renderIcon(),
                    _react2.default.createElement(_Title2.default, this.props),
                    _react2.default.createElement(_Content2.default, this.props),
                    this.props.type === 'input' && _react2.default.createElement(_Input2.default, _extends({}, this.props, this.state, {
                        onInputKeyDown: this.onInputKeyDown,
                        onChangeInput: this.onChangeInput
                    })),
                    this.state.showValidationMessage && _react2.default.createElement(_ValidationMessage2.default, this.props),
                    _react2.default.createElement(_Buttons2.default, _extends({}, this.props, {
                        onConfirm: this.onConfirm,
                        focusConfirmBtn: this.props.type !== 'input'
                    }))
                )
            );
        }
    }]);

    return SweetAlert;
}(_react2.default.Component);

SweetAlert.propTypes = {
    type: _react2.default.PropTypes.oneOf(['default', 'info', 'success', 'warning', 'danger', 'error', 'input', 'custom']),
    title: _react2.default.PropTypes.oneOfType([_react2.default.PropTypes.node, _react2.default.PropTypes.string]).isRequired,
    content: _react2.default.PropTypes.oneOfType([_react2.default.PropTypes.node, _react2.default.PropTypes.string]),
    onCancel: _react2.default.PropTypes.func,
    onConfirm: _react2.default.PropTypes.func.isRequired,
    confirmBtnText: _react2.default.PropTypes.string,
    cancelBtnText: _react2.default.PropTypes.string,
    cancelBtnBsStyle: _react2.default.PropTypes.oneOf(['default', 'primary', 'link', 'info', 'success', 'warning', 'danger']),
    confirmBtnBsStyle: _react2.default.PropTypes.oneOf(['default', 'primary', 'link', 'info', 'success', 'warning', 'danger']),
    customIcon: _react2.default.PropTypes.oneOfType([_react2.default.PropTypes.node, _react2.default.PropTypes.string]),
    required: _react2.default.PropTypes.bool,
    placeholder: _react2.default.PropTypes.string,
    validationMsg: _react2.default.PropTypes.string,
    defaultValue: _react2.default.PropTypes.string,
    inputType: _react2.default.PropTypes.string,
    style: _react2.default.PropTypes.object,
    customClass: _react2.default.PropTypes.string,
    showCancel: _react2.default.PropTypes.bool,
    allowEscape: _react2.default.PropTypes.bool,
    hideOverlay: _react2.default.PropTypes.bool
};
SweetAlert.defaultProps = {
    type: 'default',
    allowEscape: true,
    validationMsg: 'Please enter a response!',
    inputType: 'text',
    customClass: '',
    hideOverlay: false,
    required: true
};
exports.default = SweetAlert;