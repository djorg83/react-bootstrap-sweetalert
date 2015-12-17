var React = require('react');
var Radium = require('radium');
var styles = require('../styles/SweetAlertStyles');

var Buttons = React.createClass({
    displayName: 'Buttons',

    propTypes: {
        confirmBtnText: React.PropTypes.string,
        cancelBtnText: React.PropTypes.string,
        cancelBtnBsStyle: React.PropTypes.oneOf(['default', 'primary', 'link', 'info', 'success', 'warning', 'danger']),
        confirmBtnBsStyle: React.PropTypes.oneOf(['default', 'primary', 'link', 'info', 'success', 'warning', 'danger']),
        showCancel: React.PropTypes.bool
    },

    getDefaultProps: function () {
        return {
            confirmBtnText: 'OK',
            cancelBtnText: 'Cancel',
            cancelBtnBsStyle: 'link',
            confirmBtnBsStyle: 'primary',
            showCancel: false
        };
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

    render: function () {
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
    }
});

module.exports = Radium(Buttons);