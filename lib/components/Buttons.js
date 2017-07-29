'use strict';
import React        from 'react';
import PropTypes    from 'prop-types';
import objectAssign from 'object-assign';
import styles       from '../styles/SweetAlertStyles';

export default class Buttons extends React.Component {

    static propTypes = {
        confirmBtnText    : PropTypes.oneOfType([PropTypes.node, PropTypes.string]),
        cancelBtnText     : PropTypes.oneOfType([PropTypes.node, PropTypes.string]),
        cancelBtnBsStyle  : PropTypes.oneOf(['default', 'primary', 'link', 'info', 'success', 'warning', 'danger']),
        confirmBtnBsStyle : PropTypes.oneOf(['default', 'primary', 'link', 'info', 'success', 'warning', 'danger']),
        onCancel          : PropTypes.func,
        onConfirm         : PropTypes.func,
        showConfirm       : PropTypes.bool,
        showCancel        : PropTypes.bool,
        focusConfirmBtn   : PropTypes.bool
    };

    static defaultProps = {
        confirmBtnText    : 'OK',
        cancelBtnText     : 'Cancel',
        cancelBtnBsStyle  : 'link',
        confirmBtnBsStyle : 'primary',
        focusConfirmBtn   : true,
        showConfirm       : true,
        showCancel        : false
    };

    static styles = {
        primary : {
            borderColor : '#286090',
            shadowColor : 'rgb(165, 202, 234)'
        },
        success : {
            borderColor : '#4cae4c',
            shadowColor : 'rgba(76, 174, 76, 0.6)'
        },
        info : {
            borderColor : '#46b8da',
            shadowColor : 'rgba(70, 184, 218, 0.6)'
        },
        danger : {
            borderColor : '#d43f3a',
            shadowColor : 'rgba(212, 63, 58, 0.6)'
        },
        warning : {
            borderColor : '#eea236',
            shadowColor : 'rgba(238, 162, 54, 0.6)'
        },
        default : {
            borderColor : '#cccccc',
            shadowColor : 'rgba(204, 204, 204, 0.6)'
        }
    };

    buttonStyles = {};

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
        if (bsStyle === 'error') bsStyle = 'danger';
        if (this.buttonStyles[bsStyle] == null) {
            const style       = Buttons.styles[bsStyle] || Buttons.styles.default;
            const borderColor = `borderColor: ${style.borderColor} !important`;
            const boxShadow   = `boxShadow: inset 0 1px 1px rgba(0,0,0,.075), 0 0 8px ${style.shadowColor} !important;`;
            this.buttonStyles[bsStyle] = ` ${borderColor} ${boxShadow}`;
        }
        return this.buttonStyles[bsStyle];
    };

    render() {
        if (!this.props.showConfirm && !this.props.showCancel) {
            return false;
        }
        const cancelBtnBsStyle = this.props.cancelBtnBsStyle === 'error' ? 'danger' : this.props.cancelBtnBsStyle;
        const confirmBtnBsStyle = this.props.confirmBtnBsStyle === 'error' ? 'danger' : this.props.confirmBtnBsStyle;
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
                {this.props.showConfirm && (
                    <span>
                        <style type="text/css" scoped>
                            {'button { outline: 0 !important; ' + this.getButtonStyle(confirmBtnBsStyle) + '}'} 
                        </style>
                        <button 
                            ref="confirmBtn"
                            disabled={this.props.disabled}
                            style={styles.button} 
                            className={'btn btn-lg btn-' + confirmBtnBsStyle}
                            onClick={this.props.onConfirm}
                            type="button" >
                            {this.props.confirmBtnText}
                        </button>
                    </span>
                )}
            </p>
        );
    }
}