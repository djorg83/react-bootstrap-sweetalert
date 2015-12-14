var React = require('react');
var Radium = require('radium');
var styles = require('../styles/SweetAlertStyles');

var SweetAlert = React.createClass({

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

	getDefaultProps: function() {
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

    getInitialState: function() {
        return {
            inputValue: null,
            showValidationMessage: false
        };
    },

    componentDidMount: function(){
        this.refs.confirmBtn.focus(); 
    },

    renderErrorIcon: function() {
    	return (
    		<div style={[styles.icon, styles.iconError]}>
				<span style={styles.iconErrorX}>
					<span style={[styles.iconErrorLine, styles.iconErrorLineLeft]}></span>
					<span style={[styles.iconErrorLine, styles.iconErrorLineRight]}></span>
				</span>
			</div>
    	);
    },

    renderWarningIcon: function() {
    	return (
    		<div style={[styles.icon, styles.iconWarning]}>
				<span style={styles.iconWarningBody}></span>
				<span style={styles.iconWarningDot}></span>
			</div>
    	);
    },

    renderInfoIcon: function() {
    	return (
    		<div style={[styles.icon, styles.iconInfo]}>
                <div style={styles.iconInfoBefore}></div>
                <div style={styles.iconInfoAfter}></div>
            </div>
        );
    },

    renderSuccessIcon: function() {
        return (
            <div style={[styles.icon, styles.iconSuccess]}>
                <div style={[styles.iconSuccessBeforeAfter, styles.iconSuccessBefore]}></div>
                <span style={[styles.iconSuccessLine, styles.iconSuccessLineTip]}></span>
                <span style={[styles.iconSuccessLine, styles.iconSuccessLineLong]}></span>
                <div style={styles.iconSuccessPlaceholder}></div>
                <div style={styles.iconSuccessFix}></div>
                <div style={[styles.iconSuccessBeforeAfter, styles.iconSuccessAfter]}></div>
			</div>
    	);
    },

    renderCustomIcon: function() {
    	return (
    		<div style={[styles.icon, styles.iconCustom, {
                backgroundImage: 'url(' + this.props.customIcon + ')'
            }]}></div>
    	);
    },

    renderIcon: function() {
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

    onChangeInput: function(e) {
        this.setState({
            inputValue: e.target.value,
            showValidationMessage: false
        });
    },

    renderInput: function() {
        if (this.props.type === 'input') {
            return (
                <div style={{position:'relative'}}>
                    <input 
                        type="text" 
                        className="form-control" 
                        value={this.state.inputValue}
                        onChange={this.onChangeInput}
                        placeholder={this.props.inputPlaceHolder} />
                    {this.state.showValidationMessage && (
                        <div style={styles.inputErrorIcon}>
                            <div style={[styles.inputErrorIconBeforeAfter, styles.inputErrorIconBefore]}></div>
                            <div style={[styles.inputErrorIconBeforeAfter, styles.inputErrorIconAfter]}></div>
                        </div>
                    )}
                </div>
            );
        }
    },

    renderValidationMessage: function() {
        if (this.state.showValidationMessage) {
            return (
                <div style={styles.validationMessage}>
                    <div style={styles.exclamationIcon}>!</div>{this.props.inputValidationMsg}
                </div>
            );
        }
    },

    onConfirm: function() {
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

    renderButtons: function() {
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
                    onClick={this.onConfirm}
                    type="button" >
                    {this.props.confirmBtnText}
                </button>
			</p>
    	);
    },

    onKeyDown: function(e) {
        if (e.keyCode == 27) {
            if (this.props.allowEscape && this.props.onCancel) {
                this.props.onCancel();
                e.stopPropagation();
            }
        }
    },

	render: function() {
		return (
			<div>
				<div style={styles.overlay}></div>
				<div onKeyDown={this.onKeyDown} style={styles.sweetAlert} className="sweet-alert">
					{this.renderIcon()}
				  	<h2>{this.props.title}</h2>
				  	<p className="text-muted lead">{this.props.content}</p>
                    {this.renderInput()}
                    {this.renderValidationMessage()}
					{this.renderButtons()}
				</div>
			</div>
		);
	}
});

module.exports = Radium(SweetAlert);