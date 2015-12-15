var React = require('react');
var Radium = require('radium');
var styles = require('../styles/SweetAlertStyles');

var SweetAlert = React.createClass({
    displayName: 'SweetAlert',

    propTypes: {
        type: React.PropTypes.string,
        title: React.PropTypes.node,
        content: React.PropTypes.node,
        onCancel: React.PropTypes.func,
        onConfirm: React.PropTypes.func,
        confirmBtnText: React.PropTypes.string,
        cancelBtnText: React.PropTypes.string,
        cancelBtnBsStyle: React.PropTypes.string,
        confirmBtnBsStyle: React.PropTypes.string,
        showCancel: React.PropTypes.bool,
        allowEscape: React.PropTypes.bool,
        customIcon: React.PropTypes.string,
        inputPlaceHolder: React.PropTypes.string,
        inputValidationMsg: React.PropTypes.string
    },

    getDefaultProps: function () {
        return {
            type: 'default',
            confirmBtnText: 'OK',
            cancelBtnText: 'Cancel',
            cancelBtnBsStyle: 'link',
            confirmBtnBsStyle: 'primary',
            showCancel: false,
            allowEscape: true,
            inputValidationMsg: 'Please enter a response!'
        };
    },

    getInitialState: function () {
        return {
            inputValue: null,
            showValidationMessage: false
        };
    },

    componentDidMount: function () {
        this.refs.confirmBtn.focus();
    },

    renderErrorIcon: function () {
        return React.createElement(
            'div',
            { style: [styles.icon, styles.iconError] },
            React.createElement(
                'span',
                { style: styles.iconErrorX },
                React.createElement('span', { style: [styles.iconErrorLine, styles.iconErrorLineLeft] }),
                React.createElement('span', { style: [styles.iconErrorLine, styles.iconErrorLineRight] })
            )
        );
    },

    renderWarningIcon: function () {
        return React.createElement(
            'div',
            { style: [styles.icon, styles.iconWarning] },
            React.createElement('span', { style: styles.iconWarningBody }),
            React.createElement('span', { style: styles.iconWarningDot })
        );
    },

    renderInfoIcon: function () {
        return React.createElement(
            'div',
            { style: [styles.icon, styles.iconInfo] },
            React.createElement('div', { style: styles.iconInfoBefore }),
            React.createElement('div', { style: styles.iconInfoAfter })
        );
    },

    renderSuccessIcon: function () {
        return React.createElement(
            'div',
            { style: [styles.icon, styles.iconSuccess] },
            React.createElement('div', { style: [styles.iconSuccessBeforeAfter, styles.iconSuccessBefore] }),
            React.createElement('span', { style: [styles.iconSuccessLine, styles.iconSuccessLineTip] }),
            React.createElement('span', { style: [styles.iconSuccessLine, styles.iconSuccessLineLong] }),
            React.createElement('div', { style: styles.iconSuccessPlaceholder }),
            React.createElement('div', { style: styles.iconSuccessFix }),
            React.createElement('div', { style: [styles.iconSuccessBeforeAfter, styles.iconSuccessAfter] })
        );
    },

    renderCustomIcon: function () {
        return React.createElement('div', { style: [styles.icon, styles.iconCustom, {
                backgroundImage: 'url(' + this.props.customIcon + ')'
            }] });
    },

    renderIcon: function () {
        switch (this.props.type) {
            case 'danger':
            case 'error':
                return this.renderErrorIcon();
            case 'warning':
                return this.renderWarningIcon();
            case 'info':
                return this.renderInfoIcon();
            case 'success':
                return this.renderSuccessIcon();
            case 'custom':
                return this.renderCustomIcon();
        }
    },

    getButtonStyle: function (bsStyle) {
        var style = [styles.button];
        switch (bsStyle) {
            case 'default':
                style.push(styles.buttonDefault);
                break;
            case 'primary':
                style.push(styles.buttonPrimary);
                break;
            case 'success':
                style.push(styles.buttonSuccess);
                break;
            case 'info':
                style.push(styles.buttonInfo);
                break;
            case 'danger':
            case 'error':
                style.push(styles.buttonDanger);
                break;
            case 'warning':
                style.push(styles.buttonWarning);
                break;
        }
        return style;
    },

    onChangeInput: function (e) {
        this.setState({
            inputValue: e.target.value,
            showValidationMessage: false
        });
    },

    renderInput: function () {
        if (this.props.type === 'input') {
            return React.createElement(
                'div',
                { style: { position: 'relative' } },
                React.createElement('input', {
                    type: 'text',
                    className: 'form-control',
                    value: this.state.inputValue,
                    onChange: this.onChangeInput,
                    placeholder: this.props.inputPlaceHolder }),
                this.state.showValidationMessage && React.createElement(
                    'div',
                    { style: styles.inputErrorIcon },
                    React.createElement('div', { style: [styles.inputErrorIconBeforeAfter, styles.inputErrorIconBefore] }),
                    React.createElement('div', { style: [styles.inputErrorIconBeforeAfter, styles.inputErrorIconAfter] })
                )
            );
        }
    },

    renderValidationMessage: function () {
        if (this.state.showValidationMessage) {
            return React.createElement(
                'div',
                { style: styles.validationMessage },
                React.createElement(
                    'div',
                    { style: styles.exclamationIcon },
                    '!'
                ),
                this.props.inputValidationMsg
            );
        }
    },

    onConfirm: function () {
        if (this.props.type === 'input') {
            if (this.state.inputValue == null || this.state.inputValue.length < 1) {
                this.setState({
                    showValidationMessage: true
                });
            } else {
                this.props.onConfirm(this.state.inputValue);
            }
        } else {
            this.props.onConfirm();
        }
    },

    renderButtons: function () {
        var cancelBtnBsStyle = this.props.cancelBtnBsStyle === 'error' ? 'danger' : this.props.cancelBtnBsStyle;
        var confirmBtnBsStyle = this.props.confirmBtnBsStyle === 'error' ? 'danger' : this.props.confirmBtnBsStyle;
        return React.createElement(
            'p',
            { style: { marginTop: 20 } },
            this.props.showCancel && React.createElement(
                'button',
                {
                    style: this.getButtonStyle(cancelBtnBsStyle),
                    className: 'btn btn-lg btn-' + cancelBtnBsStyle,
                    onClick: this.props.onCancel,
                    type: 'button' },
                this.props.cancelBtnText
            ),
            React.createElement(
                'button',
                {
                    ref: 'confirmBtn',
                    style: this.getButtonStyle(confirmBtnBsStyle),
                    className: 'btn btn-lg btn-' + confirmBtnBsStyle,
                    onClick: this.onConfirm,
                    type: 'button' },
                this.props.confirmBtnText
            )
        );
    },

    onKeyDown: function (e) {
        if (e.keyCode == 27) {
            if (this.props.allowEscape && this.props.onCancel) {
                this.props.onCancel();
                e.stopPropagation();
            }
        }
    },

    render: function () {
        return React.createElement(
            'div',
            null,
            React.createElement('div', { style: styles.overlay }),
            React.createElement(
                'div',
                { onKeyDown: this.onKeyDown, style: styles.sweetAlert, className: 'sweet-alert' },
                this.renderIcon(),
                React.createElement(
                    'h2',
                    null,
                    this.props.title
                ),
                React.createElement(
                    'p',
                    { className: 'text-muted lead' },
                    this.props.content
                ),
                this.renderInput(),
                this.renderValidationMessage(),
                this.renderButtons()
            )
        );
    }
});

module.exports = Radium(SweetAlert);