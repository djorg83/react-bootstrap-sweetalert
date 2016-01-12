var React = require('react');
var Radium = require('radium');
var styles = require('../styles/SweetAlertStyles');

var Buttons = React.createClass({

    propTypes: {
        confirmBtnText: React.PropTypes.string,
        cancelBtnText: React.PropTypes.string,
        cancelBtnBsStyle: React.PropTypes.oneOf(['default', 'primary', 'link', 'info', 'success', 'warning', 'danger']),
        confirmBtnBsStyle: React.PropTypes.oneOf(['default', 'primary', 'link', 'info', 'success', 'warning', 'danger']),
        onCancel: React.PropTypes.func,
        onConfirm: React.PropTypes.func,
        showCancel: React.PropTypes.bool,
        focusConfirmBtn: React.PropTypes.bool
    },

    getDefaultProps: function() {
        return {
            confirmBtnText: 'OK',
            cancelBtnText: 'Cancel',
            cancelBtnBsStyle: 'link',
            confirmBtnBsStyle: 'primary',
            focusConfirmBtn: true,
            showCancel: false
        };
    },

    componentDidMount: function(){
        if (this.props.focusConfirmBtn && this.refs.confirmBtn) {
            try {
                this.refs.confirmBtn.focus(); 
            } catch (e) {
                // whoops
            }
        }
    },

    getButtonStyle: function(bsStyle) {
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

    render: function() {
        var cancelBtnBsStyle = this.props.cancelBtnBsStyle === 'error' ? 'danger' : this.props.cancelBtnBsStyle;
        var confirmBtnBsStyle = this.props.confirmBtnBsStyle === 'error' ? 'danger' : this.props.confirmBtnBsStyle;
        return (
            <p style={{marginTop: 20}}>
                {this.props.showCancel && (
                    <button 
                        style={this.getButtonStyle(cancelBtnBsStyle)} 
                        className={'btn btn-lg btn-' + cancelBtnBsStyle}
                        onClick={this.props.onCancel}
                        type="button" >
                        {this.props.cancelBtnText}
                    </button>
                )}
                <button 
                    ref="confirmBtn"
                    style={this.getButtonStyle(confirmBtnBsStyle)} 
                    className={'btn btn-lg btn-' + confirmBtnBsStyle}
                    onClick={this.props.onConfirm}
                    type="button" >
                    {this.props.confirmBtnText}
                </button>
            </p>
        );
    }
});

module.exports = Radium(Buttons);