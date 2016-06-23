'use strict';
import React        from 'react';
import objectAssign from 'object-assign';
import styles       from '../styles/SweetAlertStyles';

export default class Buttons extends React.Component {

    static propTypes = {
        confirmBtnText    : React.PropTypes.string,
        cancelBtnText     : React.PropTypes.string,
        cancelBtnBsStyle  : React.PropTypes.oneOf(['default', 'primary', 'link', 'info', 'success', 'warning', 'danger']),
        confirmBtnBsStyle : React.PropTypes.oneOf(['default', 'primary', 'link', 'info', 'success', 'warning', 'danger']),
        onCancel          : React.PropTypes.func,
        onConfirm         : React.PropTypes.func,
        showCancel        : React.PropTypes.bool,
        focusConfirmBtn   : React.PropTypes.bool
    };

    static defaultProps = {
        confirmBtnText    : 'OK',
        cancelBtnText     : 'Cancel',
        cancelBtnBsStyle  : 'link',
        confirmBtnBsStyle : 'primary',
        focusConfirmBtn   : true,
        showCancel        : false
    };

    componentDidMount() {
        if (this.props.focusConfirmBtn && this.refs.confirmBtn) {
            try {
                this.refs.confirmBtn.focus(); 
            } catch (e) {
                // whoops
            }
        }
    }

    getButtonStyle = (bsStyle) => {
        let borderColor = '';
        let shadowColor = '';
        switch (bsStyle) {
            case 'primary':
                borderColor = '#286090';
                shadowColor = 'rgb(165, 202, 234)';
                break;
            case 'success':
                borderColor = '#4cae4c';
                shadowColor = 'rgba(76, 174, 76, 0.6)';
                break;
            case 'info':
                borderColor = '#46b8da';
                shadowColor = 'rgba(70, 184, 218, 0.6)';
                break;
            case 'danger':
            case 'error':
                borderColor = '#d43f3a';
                shadowColor = 'rgba(212, 63, 58, 0.6)';
                break;
            case 'warning':
                borderColor = '#eea236';
                shadowColor = 'rgba(238, 162, 54, 0.6)';
                break;
            case 'default':
            default:
                borderColor = '#cccccc;';
                shadowColor = 'rgba(204, 204, 204, 0.6)';
                break;
        }
        return ` borderColor: ${borderColor} !important; boxShadow: inset 0 1px 1px rgba(0,0,0,.075), 0 0 8px ${shadowColor} !important;`;
    };

    render() {
        var cancelBtnBsStyle = this.props.cancelBtnBsStyle === 'error' ? 'danger' : this.props.cancelBtnBsStyle;
        var confirmBtnBsStyle = this.props.confirmBtnBsStyle === 'error' ? 'danger' : this.props.confirmBtnBsStyle;
        return (
            <p style={{marginTop: 20}}>
                {this.props.showCancel && (
                    <span>
                        <style type="text/css" scoped>
                            {'button { outline: 0 !important; ' + this.getButtonStyle(cancelBtnBsStyle) + '}'} 
                        </style>
                        <button 
                            style={styles.button} 
                            className={'btn btn-lg btn-' + cancelBtnBsStyle}
                            onClick={this.props.onCancel}
                            type="button" >
                            {this.props.cancelBtnText}
                        </button>
                    </span>
                )}
                <span>
                    <style type="text/css" scoped>
                        {'button { outline: 0 !important; ' + this.getButtonStyle(confirmBtnBsStyle) + '}'} 
                    </style>
                    <button 
                        ref="confirmBtn"
                        style={styles.button} 
                        className={'btn btn-lg btn-' + confirmBtnBsStyle}
                        onClick={this.props.onConfirm}
                        type="button" >
                        {this.props.confirmBtnText}
                    </button>
                </span>
            </p>
        );
    }
}