'use strict';

// third-party
import React             from 'react';
import PropTypes         from 'prop-types';
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

if (typeof window !== 'undefined') {
    if (window && window.innerWidth && window.innerWidth < 767) {
        style = objectAssign({}, style, styles.sweetAlertMobile);
    }
}

export default class SweetAlert extends React.Component {

    static propTypes = {
        type               : PropTypes.oneOf(['default', 'info', 'success', 'warning', 'danger', 'error', 'input', 'custom']),
        title              : PropTypes.oneOfType([PropTypes.node, PropTypes.string]).isRequired,
        onCancel           : PropTypes.func,
        onConfirm          : PropTypes.func.isRequired,
        confirmBtnText     : PropTypes.oneOfType([PropTypes.node, PropTypes.string]),
        cancelBtnText      : PropTypes.oneOfType([PropTypes.node, PropTypes.string]),
        cancelBtnBsStyle   : PropTypes.oneOf(['default', 'primary', 'link', 'info', 'success', 'warning', 'danger']),
        confirmBtnBsStyle  : PropTypes.oneOf(['default', 'primary', 'link', 'info', 'success', 'warning', 'danger']),
        customIcon         : PropTypes.oneOfType([PropTypes.node, PropTypes.string]),
        required           : PropTypes.bool,
        placeholder        : PropTypes.string,
        validationMsg      : PropTypes.string,
        defaultValue       : PropTypes.string,
        inputType          : PropTypes.string,
        style              : PropTypes.object,
        customClass        : PropTypes.string,
        showCancel         : PropTypes.bool,
        allowEscape        : PropTypes.bool,
        hideOverlay        : PropTypes.bool,
        disabled           : PropTypes.bool,
        beforeMount        : PropTypes.func,
        afterMount         : PropTypes.func,
        beforeUpdate       : PropTypes.func,
        afterUpdate        : PropTypes.func,
        beforeUnmount      : PropTypes.func
    };

    static defaultProps = {
        allowEscape        : true,
        validationMsg      : 'Please enter a response!',
        inputType          : 'text',
        customClass        : '',
        hideOverlay        : false,
        required           : true,
        disabled           : false,
        beforeMount        : () => {},
        afterMount         : () => {},
        beforeUpdate       : () => {},
        afterUpdate        : () => {},
        beforeUnmount      : () => {}
    };

    static SuccessIcon       = SuccessIcon;
    static ErrorIcon         = ErrorIcon;
    static InfoIcon          = InfoIcon;
    static WarningIcon       = WarningIcon;
    static CustomIcon        = CustomIcon;
    static Buttons           = Buttons;
    static Input             = Input;
    static ValidationMessage = ValidationMessage;
    static Title             = Title;
    static Content           = Content;

    state = {
        type                  : 'default',
        inputValue            : '',
        showValidationMessage : false
    };

    componentWillMount() {
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

    componentDidMount() {
        this.props.afterMount();
    }

    componentWillReceiveProps(nextProps) {
        if (this.getTypeFromProps(this.props) !== this.getTypeFromProps(nextProps)) {
            this.setType(nextProps);
        }
    }

    componentWillUpdate(nextProps, nextState) {
        this.props.beforeUpdate();
    }

    componentDidUpdate(prevProps, prevState) {
        this.props.afterUpdate();
    }

    componentWillUnmount() {
        this.props.beforeUnmount();
    }

    setType = (props) => {
        this.setState({
            type:  this.getTypeFromProps(props || this.props)
        });
    };

    getTypeFromProps = (props) => {
        if (props.type) return props.type;
        if (props.info) return 'info';
        if (props.success) return 'success';
        if (props.warning) return 'warning';
        if (props.danger || props.error) return 'danger';
        if (props.input) return 'input';
        if (props.custom) return 'custom';
        return this.state.type;
    };

    deprecationWarning = (messsage) => {
        try {
            console.warn(`react-bootstrap-sweetalert: ${messsage} This option will be removed in verison 4.0`);
        } catch (e) {

        }
    };

    unsupportedProp = (oldProp, message) => {
        try {
            console.warn(`react-bootstrap-sweetalert: Unsupported prop '${oldProp}'. Please ${message}`);
        } catch (e) {

        }
    };

    getIcon = () => {
        switch (this.state.type) {
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
        if (this.state.type === 'input') {
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

                <style type="text/css" scoped>
                    {`<Inject>../css/animations.css</Inject>`}
                </style>

                {!this.props.hideOverlay && <div style={styles.overlay}></div>}

                <div
                    style={objectAssign({}, style, this.props.style)}
                    onKeyDown={this.onKeyDown}
                    className={'sweet-alert ' + this.props.customClass}
                >

                    {this.getIcon()}

                    <Title>{this.props.title}</Title>

                    <Content>{this.props.children}</Content>

                    {this.state.type === 'input' && (
                        <Input
                            {...this.props}
                            {...this.state}
                            type={this.state.type}
                            onInputKeyDown={this.onInputKeyDown}
                            onChangeInput={this.onChangeInput}
                        />
                    )}

                    {this.state.showValidationMessage && <ValidationMessage {...this.props} />}

                    <Buttons
                        {...this.props}
                        onConfirm={this.onConfirm}
                        focusConfirmBtn={(this.state.type !== 'input')}
                    />

                </div>

            </div>
        );
    }

}
