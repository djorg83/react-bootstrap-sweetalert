'use strict';

// third-party
import React             from 'react';
import objectAssign      from 'object-assign';

// components
import SuccessIcon       from './SuccessIcon';
import ErrorIcon         from './ErrorIcon';
import InfoIcon          from './InfoIcon';
import WarningIcon       from './WarningIcon';
import CustomIcon        from './CustomIcon';
import Buttons           from './Buttons';
import Input             from './Input';
import ValidationMessage from './ValidationMessage';
import Title             from './Title';
import Content           from './Content';

// styles
import styles            from '../styles/SweetAlertStyles';

let style = styles.sweetAlert;
if (window.innerWidth < 767) {
    style = objectAssign({}, style, styles.sweetAlertMobile);
}

export default class SweetAlert extends React.Component {

    static propTypes = {
        type               : React.PropTypes.oneOf(['default', 'info', 'success', 'warning', 'danger', 'error', 'input', 'custom']),
        title              : React.PropTypes.oneOfType([React.PropTypes.node, React.PropTypes.string]).isRequired,
        content            : React.PropTypes.oneOfType([React.PropTypes.node, React.PropTypes.string]),
        onCancel           : React.PropTypes.func,
        onConfirm          : React.PropTypes.func.isRequired,
        confirmBtnText     : React.PropTypes.string,
        cancelBtnText      : React.PropTypes.string,
        cancelBtnBsStyle   : React.PropTypes.oneOf(['default', 'primary', 'link', 'info', 'success', 'warning', 'danger']),
        confirmBtnBsStyle  : React.PropTypes.oneOf(['default', 'primary', 'link', 'info', 'success', 'warning', 'danger']),
        customIcon         : React.PropTypes.oneOfType([React.PropTypes.node, React.PropTypes.string]),
        required           : React.PropTypes.bool,
        placeholder        : React.PropTypes.string,
        validationMsg      : React.PropTypes.string,
        defaultValue       : React.PropTypes.string,
        inputType          : React.PropTypes.string,
        style              : React.PropTypes.object,
        customClass        : React.PropTypes.string,
        showCancel         : React.PropTypes.bool,
        allowEscape        : React.PropTypes.bool,
        hideOverlay        : React.PropTypes.bool
    };

    static defaultProps = {
        type               : 'default',
        allowEscape        : true,
        validationMsg      : 'Please enter a response!',
        inputType          : 'text',
        customClass        : '',
        hideOverlay        : false,
        required           : true
    };

    state = {
        inputValue            : null,
        showValidationMessage : false
    };

    componentWillMount() {
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

    deprecationWarning = (msg) => {
        try {
            console.warn('react-bootstrap-sweetalert: ' + msg);
        } catch (e) {

        }
    };

    renderIcon = () => {
        switch (this.props.type) {
            case 'danger':
            case 'error':
                return <ErrorIcon />;
            case 'warning':
                return <WarningIcon />;
            case 'info':
                return <InfoIcon />
            case 'success':
                return <SuccessIcon />
            case 'custom':
                if (this.props.customIcon) {
                    if (typeof this.props.customIcon == 'string') {
                        return <CustomIcon iconUrl={this.props.customIcon} />
                    } else {
                        return this.props.customIcon;
                    }
                }
        }
    };

    onChangeInput =(e) => {
        this.setState({
            inputValue: e.target.value,
            showValidationMessage: false
        });
    };

    onConfirm = () => {
        if (this.props.type === 'input') {
            if (this.props.required && (this.state.inputValue == null || this.state.inputValue.length < 1)) {
                this.setState({
                    showValidationMessage: true
                });
            } else {
                this.props.onConfirm(this.state.inputValue);
            }
        } else {
            this.props.onConfirm();
        }
    };

    onInputKeyDown = (e) =>  {
        if (e.keyCode == 13) {
            if (this.props.onConfirm) {
                this.onConfirm();
                e.stopPropagation();
            }
        }
    };

    onKeyDown = (e) =>  {
        if (e.keyCode == 27) {
            if (this.props.allowEscape && this.props.onCancel) {
                this.props.onCancel();
                e.stopPropagation();
            }
        }
    };

    render() {

        return (
            <div>

                {!this.props.hideOverlay && <div style={styles.overlay}></div>}
                
                <div
                    style={objectAssign({}, style, this.props.style)} 
                    onKeyDown={this.onKeyDown} 
                    className={'sweet-alert ' + this.props.customClass}
                >
                    
                    {this.renderIcon()}
                    
                    <Title {...this.props} />
                    <Content {...this.props} />
                    
                    {this.props.type === 'input' && (
                        <Input
                            {...this.props}
                            {...this.state}
                            onInputKeyDown={this.onInputKeyDown}
                            onChangeInput={this.onChangeInput}
                        />
                    )}
                    
                    {this.state.showValidationMessage && <ValidationMessage {...this.props} />}

                    <Buttons
                        {...this.props}
                        onConfirm={this.onConfirm}
                        focusConfirmBtn={(this.props.type !== 'input')}
                    />

                </div>

            </div>
        );
    }

}