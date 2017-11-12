'use strict';

// third-party

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

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

if (typeof window !== 'undefined') {
    if (window && window.innerWidth && window.innerWidth < 767) {
        style = (0, _objectAssign2.default)({}, style, _SweetAlertStyles2.default.sweetAlertMobile);
    }
}

var SweetAlert = function (_React$Component) {
    _inherits(SweetAlert, _React$Component);

    function SweetAlert() {
        var _ref;

        var _temp, _this, _ret;

        _classCallCheck(this, SweetAlert);

        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
        }

        return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = SweetAlert.__proto__ || Object.getPrototypeOf(SweetAlert)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
            type: 'default',
            inputValue: '',
            showValidationMessage: false
        }, _this.setType = function (props) {
            _this.setState({
                type: _this.getTypeFromProps(props || _this.props)
            });
        }, _this.getTypeFromProps = function (props) {
            if (props.type) return props.type;
            if (props.info) return 'info';
            if (props.success) return 'success';
            if (props.warning) return 'warning';
            if (props.danger || props.error) return 'danger';
            if (props.input) return 'input';
            if (props.custom) return 'custom';
            return _this.state.type;
        }, _this.unsupportedProp = function (oldProp, message) {
            try {
                console.warn('react-bootstrap-sweetalert: Unsupported prop \'' + oldProp + '\'. Please ' + message);
            } catch (e) {}
        }, _this.getIcon = function () {
            switch (_this.state.type) {
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
            if (_this.state.type === 'input') {
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
        }, _this.onClickOutside = function () {
            if (_this.props.closeOnClickOutside && _this.props.onCancel) {
                _this.props.onCancel();
            }
        }, _temp), _possibleConstructorReturn(_this, _ret);
    }

    _createClass(SweetAlert, [{
        key: 'componentWillMount',
        value: function componentWillMount() {
            if (this.props.inputPlaceHolder) {
                this.unsupportedProp('inputPlaceHolder', 'use props.placeholder');
            }
            if (this.props.inputValidationMsg) {
                this.unsupportedProp('inputValidationMsg', 'use props.validationMsg');
            }
            if (this.props.content) {
                this.unsupportedProp('content', 'use props.children <SweetAlert>your content</SweetAlert>');
            }
            if (this.props.defaultValue != null) {
                this.setState({
                    inputValue: this.props.defaultValue
                });
            }

            this.setType();

            this.props.beforeMount();
        }
    }, {
        key: 'componentDidMount',
        value: function componentDidMount() {
            if (!this.props.focusConfirmBtn && this.props.type !== 'input') {
                try {
                    this.refs.container.focus();
                } catch (e) {
                    // whoops
                }
            }
            this.props.afterMount();
        }
    }, {
        key: 'componentWillReceiveProps',
        value: function componentWillReceiveProps(nextProps) {
            if (this.getTypeFromProps(this.props) !== this.getTypeFromProps(nextProps)) {
                this.setType(nextProps);
            }
        }
    }, {
        key: 'componentWillUpdate',
        value: function componentWillUpdate(nextProps, nextState) {
            this.props.beforeUpdate(nextProps, nextState);
        }
    }, {
        key: 'componentDidUpdate',
        value: function componentDidUpdate(prevProps, prevState) {
            this.props.afterUpdate(prevProps, prevState);
        }
    }, {
        key: 'componentWillUnmount',
        value: function componentWillUnmount() {
            this.props.beforeUnmount();
        }
    }, {
        key: 'render',
        value: function render() {
            if (!this.props.show) {
                return false;
            }
            return _react2.default.createElement(
                'div',
                null,
                _react2.default.createElement(
                    'style',
                    { type: 'text/css', scoped: true },
                    '@-webkit-keyframes showSweetAlert {\n                      0% {\n                        transform: scale(0.7);\n                        -webkit-transform: scale(0.7);\n                      }\n                      45% {\n                        transform: scale(1.05);\n                        -webkit-transform: scale(1.05);\n                      }\n                      80% {\n                        transform: scale(0.95);\n                        -webkit-tranform: scale(0.95);\n                      }\n                      100% {\n                        transform: scale(1);\n                        -webkit-transform: scale(1);\n                      }\n                    }\n                    @keyframes showSweetAlert {\n                      0% {\n                        transform: scale(0.7);\n                        -webkit-transform: scale(0.7);\n                      }\n                      45% {\n                        transform: scale(1.05);\n                        -webkit-transform: scale(1.05);\n                      }\n                      80% {\n                        transform: scale(0.95);\n                        -webkit-tranform: scale(0.95);\n                      }\n                      100% {\n                        transform: scale(1);\n                        -webkit-transform: scale(1);\n                      }\n                    }\n                    @-webkit-keyframes hideSweetAlert {\n                      0% {\n                        transform: scale(1);\n                        -webkit-transform: scale(1);\n                      }\n                      100% {\n                        transform: scale(0.5);\n                        -webkit-transform: scale(0.5);\n                      }\n                    }\n                    @keyframes hideSweetAlert {\n                      0% {\n                        transform: scale(1);\n                        -webkit-transform: scale(1);\n                      }\n                      100% {\n                        transform: scale(0.5);\n                        -webkit-transform: scale(0.5);\n                      }\n                    }\n                    @-webkit-keyframes animateSuccessTip {\n                      0% {\n                        width: 0;\n                        left: 1px;\n                        top: 19px;\n                      }\n                      54% {\n                        width: 0;\n                        left: 1px;\n                        top: 19px;\n                      }\n                      70% {\n                        width: 50px;\n                        left: -8px;\n                        top: 37px;\n                      }\n                      84% {\n                        width: 17px;\n                        left: 21px;\n                        top: 48px;\n                      }\n                      100% {\n                        width: 25px;\n                        left: 14px;\n                        top: 45px;\n                      }\n                    }\n                    @keyframes animateSuccessTip {\n                      0% {\n                        width: 0;\n                        left: 1px;\n                        top: 19px;\n                      }\n                      54% {\n                        width: 0;\n                        left: 1px;\n                        top: 19px;\n                      }\n                      70% {\n                        width: 50px;\n                        left: -8px;\n                        top: 37px;\n                      }\n                      84% {\n                        width: 17px;\n                        left: 21px;\n                        top: 48px;\n                      }\n                      100% {\n                        width: 25px;\n                        left: 14px;\n                        top: 45px;\n                      }\n                    }\n                    @-webkit-keyframes animateSuccessLong {\n                      0% {\n                        width: 0;\n                        right: 46px;\n                        top: 54px;\n                      }\n                      65% {\n                        width: 0;\n                        right: 46px;\n                        top: 54px;\n                      }\n                      84% {\n                        width: 55px;\n                        right: 0px;\n                        top: 35px;\n                      }\n                      100% {\n                        width: 47px;\n                        right: 8px;\n                        top: 38px;\n                      }\n                    }\n                    @keyframes animateSuccessLong {\n                      0% {\n                        width: 0;\n                        right: 46px;\n                        top: 54px;\n                      }\n                      65% {\n                        width: 0;\n                        right: 46px;\n                        top: 54px;\n                      }\n                      84% {\n                        width: 55px;\n                        right: 0px;\n                        top: 35px;\n                      }\n                      100% {\n                        width: 47px;\n                        right: 8px;\n                        top: 38px;\n                      }\n                    }\n                    @-webkit-keyframes rotatePlaceholder {\n                      0% {\n                        transform: rotate(-45deg);\n                        -webkit-transform: rotate(-45deg);\n                      }\n                      5% {\n                        transform: rotate(-45deg);\n                        -webkit-transform: rotate(-45deg);\n                      }\n                      12% {\n                        transform: rotate(-405deg);\n                        -webkit-transform: rotate(-405deg);\n                      }\n                      100% {\n                        transform: rotate(-405deg);\n                        -webkit-transform: rotate(-405deg);\n                      }\n                    }\n                    @keyframes rotatePlaceholder {\n                      0% {\n                        transform: rotate(-45deg);\n                        -webkit-transform: rotate(-45deg);\n                      }\n                      5% {\n                        transform: rotate(-45deg);\n                        -webkit-transform: rotate(-45deg);\n                      }\n                      12% {\n                        transform: rotate(-405deg);\n                        -webkit-transform: rotate(-405deg);\n                      }\n                      100% {\n                        transform: rotate(-405deg);\n                        -webkit-transform: rotate(-405deg);\n                      }\n                    }\n                    @-webkit-keyframes animateErrorIcon {\n                      0% {\n                        transform: rotateX(100deg);\n                        -webkit-transform: rotateX(100deg);\n                        opacity: 0;\n                      }\n                      100% {\n                        transform: rotateX(0deg);\n                        -webkit-transform: rotateX(0deg);\n                        opacity: 1;\n                      }\n                    }\n                    @keyframes animateErrorIcon {\n                      0% {\n                        transform: rotateX(100deg);\n                        -webkit-transform: rotateX(100deg);\n                        opacity: 0;\n                      }\n                      100% {\n                        transform: rotateX(0deg);\n                        -webkit-transform: rotateX(0deg);\n                        opacity: 1;\n                      }\n                    }\n                    @-webkit-keyframes animateXMark {\n                      0% {\n                        transform: scale(0.4);\n                        -webkit-transform: scale(0.4);\n                        margin-top: 26px;\n                        opacity: 0;\n                      }\n                      50% {\n                        transform: scale(0.4);\n                        -webkit-transform: scale(0.4);\n                        margin-top: 26px;\n                        opacity: 0;\n                      }\n                      80% {\n                        transform: scale(1.15);\n                        -webkit-transform: scale(1.15);\n                        margin-top: -6px;\n                      }\n                      100% {\n                        transform: scale(1);\n                        -webkit-transform: scale(1);\n                        margin-top: 0;\n                        opacity: 1;\n                      }\n                    }\n                    @keyframes animateXMark {\n                      0% {\n                        transform: scale(0.4);\n                        -webkit-transform: scale(0.4);\n                        margin-top: 26px;\n                        opacity: 0;\n                      }\n                      50% {\n                        transform: scale(0.4);\n                        -webkit-transform: scale(0.4);\n                        margin-top: 26px;\n                        opacity: 0;\n                      }\n                      80% {\n                        transform: scale(1.15);\n                        -webkit-transform: scale(1.15);\n                        margin-top: -6px;\n                      }\n                      100% {\n                        transform: scale(1);\n                        -webkit-transform: scale(1);\n                        margin-top: 0;\n                        opacity: 1;\n                      }\n                    }\n                    @-webkit-keyframes pulseWarning {\n                      0% {\n                        border-color: #F8D486;\n                      }\n                      100% {\n                        border-color: #F8BB86;\n                      }\n                    }\n                    @keyframes pulseWarning {\n                      0% {\n                        border-color: #F8D486;\n                      }\n                      100% {\n                        border-color: #F8BB86;\n                      }\n                    }\n                    @-webkit-keyframes pulseWarningIns {\n                      0% {\n                        background-color: #F8D486;\n                      }\n                      100% {\n                        background-color: #F8BB86;\n                      }\n                    }\n                    @keyframes pulseWarningIns {\n                      0% {\n                        background-color: #F8D486;\n                      }\n                      100% {\n                        background-color: #F8BB86;\n                      }\n                    }'
                ),
                !this.props.hideOverlay && _react2.default.createElement('div', { style: _SweetAlertStyles2.default.overlay, onClick: this.onClickOutside }),
                _react2.default.createElement(
                    'div',
                    {
                        style: (0, _objectAssign2.default)({}, style, this.props.style),
                        tabIndex: '0',
                        ref: 'container',
                        onKeyDown: this.onKeyDown,
                        className: 'sweet-alert ' + this.props.customClass
                    },
                    this.getIcon(),
                    _react2.default.createElement(
                        _Title2.default,
                        null,
                        this.props.title
                    ),
                    _react2.default.createElement(
                        _Content2.default,
                        null,
                        this.props.children
                    ),
                    this.state.type === 'input' && _react2.default.createElement(_Input2.default, _extends({}, this.props, this.state, {
                        type: this.state.type,
                        onInputKeyDown: this.onInputKeyDown,
                        onChangeInput: this.onChangeInput
                    })),
                    this.state.showValidationMessage && _react2.default.createElement(_ValidationMessage2.default, this.props),
                    _react2.default.createElement(_Buttons2.default, _extends({}, this.props, {
                        onConfirm: this.onConfirm,
                        focusConfirmBtn: this.state.type !== 'input'
                    }))
                )
            );
        }
    }]);

    return SweetAlert;
}(_react2.default.Component);

SweetAlert.propTypes = {
    type: _propTypes2.default.oneOf(['default', 'info', 'success', 'warning', 'danger', 'error', 'input', 'custom']),
    title: _propTypes2.default.oneOfType([_propTypes2.default.node, _propTypes2.default.string]).isRequired,
    onCancel: _propTypes2.default.func,
    onConfirm: _propTypes2.default.func.isRequired,
    confirmBtnText: _propTypes2.default.oneOfType([_propTypes2.default.node, _propTypes2.default.string]),
    confirmBtnBsStyle: _propTypes2.default.oneOf(['default', 'primary', 'link', 'info', 'success', 'warning', 'danger']),
    confirmBtnCssClass: _propTypes2.default.string,
    confirmBtnStyle: _propTypes2.default.object,
    cancelBtnText: _propTypes2.default.oneOfType([_propTypes2.default.node, _propTypes2.default.string]),
    cancelBtnBsStyle: _propTypes2.default.oneOf(['default', 'primary', 'link', 'info', 'success', 'warning', 'danger']),
    cancelBtnCssClass: _propTypes2.default.string,
    cancelBtnStyle: _propTypes2.default.object,
    btnSize: _propTypes2.default.string,
    customIcon: _propTypes2.default.oneOfType([_propTypes2.default.node, _propTypes2.default.string]),
    show: _propTypes2.default.bool,
    required: _propTypes2.default.bool,
    placeholder: _propTypes2.default.string,
    validationMsg: _propTypes2.default.string,
    defaultValue: _propTypes2.default.string,
    inputType: _propTypes2.default.string,
    style: _propTypes2.default.object,
    customClass: _propTypes2.default.string,
    showConfirm: _propTypes2.default.bool,
    showCancel: _propTypes2.default.bool,
    allowEscape: _propTypes2.default.bool,
    closeOnClickOutside: _propTypes2.default.bool,
    hideOverlay: _propTypes2.default.bool,
    disabled: _propTypes2.default.bool,
    beforeMount: _propTypes2.default.func,
    afterMount: _propTypes2.default.func,
    beforeUpdate: _propTypes2.default.func,
    afterUpdate: _propTypes2.default.func,
    beforeUnmount: _propTypes2.default.func
};
SweetAlert.defaultProps = {
    allowEscape: true,
    closeOnClickOutside: true,
    validationMsg: 'Please enter a response!',
    inputType: 'text',
    customClass: '',
    hideOverlay: false,
    show: true,
    required: true,
    disabled: false,
    beforeMount: function beforeMount() {},
    afterMount: function afterMount() {},
    beforeUpdate: function beforeUpdate() {},
    afterUpdate: function afterUpdate() {},
    beforeUnmount: function beforeUnmount() {}
};
SweetAlert.SuccessIcon = _SuccessIcon2.default;
SweetAlert.ErrorIcon = _ErrorIcon2.default;
SweetAlert.InfoIcon = _InfoIcon2.default;
SweetAlert.WarningIcon = _WarningIcon2.default;
SweetAlert.CustomIcon = _CustomIcon2.default;
SweetAlert.Buttons = _Buttons2.default;
SweetAlert.Input = _Input2.default;
SweetAlert.ValidationMessage = _ValidationMessage2.default;
SweetAlert.Title = _Title2.default;
SweetAlert.Content = _Content2.default;
exports.default = SweetAlert;