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

const defaultRegex = /^.+$/;
const emailRegex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

let style = styles.sweetAlert;

if (typeof window !== 'undefined') {
    if (window && window.innerWidth && window.innerWidth < 767) {
        style = objectAssign({}, style, styles.sweetAlertMobile);
    }
}

class Overlay extends React.Component {
    componentDidMount() {
        if (this.refs.overlay) {
            this.refs.overlay.scrollTop = 0;
        }
    }

    render() {
        const { show, onClick, onKeyDown, children } = this.props
        return show ? (
            <div ref="overlay" style={styles.overlay} onClick={onClick} tabIndex="0" onKeyDown={onKeyDown}>
                {children}
            </div>
        ) : (
            <div tabIndex="0" onKeyDown={onKeyDown}>
                {children}
            </div>
        )
    }
}

export default class SweetAlert extends React.Component {

    static propTypes = {
        type                : PropTypes.oneOf(['default', 'info', 'success', 'warning', 'danger', 'error', 'input', 'custom']),
        title               : PropTypes.oneOfType([PropTypes.node, PropTypes.string]).isRequired,
        onCancel            : PropTypes.func,
        onConfirm           : PropTypes.func.isRequired,
        confirmBtnText      : PropTypes.oneOfType([PropTypes.node, PropTypes.string]),
        confirmBtnBsStyle   : PropTypes.oneOf(['default', 'primary', 'link', 'info', 'success', 'warning', 'danger']),
        confirmBtnCssClass  : PropTypes.string,
        confirmBtnStyle     : PropTypes.object,
        cancelBtnText       : PropTypes.oneOfType([PropTypes.node, PropTypes.string]),
        cancelBtnBsStyle    : PropTypes.oneOf(['default', 'primary', 'link', 'info', 'success', 'warning', 'danger']),
        cancelBtnCssClass   : PropTypes.string,
        cancelBtnStyle      : PropTypes.object,
        btnSize             : PropTypes.string,
        customIcon          : PropTypes.oneOfType([PropTypes.node, PropTypes.string]),
        show                : PropTypes.bool,
        required            : PropTypes.bool,
        placeholder         : PropTypes.string,
        validationMsg       : PropTypes.string,
        validationRegex     : PropTypes.object,
        defaultValue        : PropTypes.string,
        inputType           : PropTypes.string,
        style               : PropTypes.object,
        closeBtnStyle       : PropTypes.object,
        customClass         : PropTypes.string,
        showConfirm         : PropTypes.bool,
        showCancel          : PropTypes.bool,
        showCloseButton     : PropTypes.bool,
        allowEscape         : PropTypes.bool,
        closeOnClickOutside : PropTypes.bool,
        hideOverlay         : PropTypes.bool,
        disabled            : PropTypes.bool,
        focusConfirmBtn     : PropTypes.bool,
        beforeMount         : PropTypes.func,
        afterMount          : PropTypes.func,
        beforeUpdate        : PropTypes.func,
        afterUpdate         : PropTypes.func,
        beforeUnmount       : PropTypes.func,
        timeout             : PropTypes.number,
    };

    static defaultProps = {
        allowEscape         : true,
        closeOnClickOutside : true,
        validationMsg       : null,
        validationRegex     : null,
        inputType           : 'text',
        customClass         : '',
        hideOverlay         : false,
        show                : true,
        required            : true,
        disabled            : false,
        focusConfirmBtn     : true,
        showCloseButton     : false,
        beforeMount         : () => {},
        afterMount          : () => {},
        beforeUpdate        : () => {},
        afterUpdate         : () => {},
        beforeUnmount       : () => {},
        style               : {},
        closeBtnStyle       : {},
        timeout             : 0,
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
        focusConfirmBtn       : true,
        inputValue            : '',
        showValidationMessage : false,
        timer                 : null,
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

        this.setStateFromProps();

        this.props.beforeMount();
    }

    componentDidMount() {
        document.body.classList.add('sweetalert-overflow-hidden');
        this.props.afterMount();
        this.handleTimeout();
    }

    componentWillReceiveProps(nextProps) {
        if (this.getTypeFromProps(this.props) !== this.getTypeFromProps(nextProps)) {
            this.setStateFromProps(nextProps);
            this.handleTimeout(nextProps);
        } else if (this.props.timeout !== nextProps.timeout) {
            this.handleTimeout(nextProps);
        }
    }

    componentWillUpdate(nextProps, nextState) {
        this.props.beforeUpdate(nextProps, nextState);
    }

    componentDidUpdate(prevProps, prevState) {
        this.props.afterUpdate(prevProps, prevState);
    }

    componentWillUnmount() {
        document.body.classList.remove('sweetalert-overflow-hidden');
        this.props.beforeUnmount();
    }

    handleTimeout(props) {
        props = props || this.props;

        if (this.state.timer) {
            clearTimeout(this.state.timer);
        }

        if (props.timeout && props.timeout > 0) {
            const timer = setTimeout(() => props.onConfirm(), props.timeout);

            this.setState({ timer });
        }
    }

    setStateFromProps = (props) => {
        props = props || this.props;
        const type = this.getTypeFromProps(props)
        this.setState({
            type,
            focusConfirmBtn: props.focusConfirmBtn && type !== 'input',
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

    onChangeInput = (e) => {
        this.setState({
            inputValue: e.target.value,
            showValidationMessage: false
        });
    };

    isValidInput = () => {
        if (!this.props.required) {
            return true;
        }
        const regex = this.props.validationRegex || (this.props.inputType === 'email' ? emailRegex : defaultRegex);
        return regex.test(this.state.inputValue);
    };

    onConfirm = () => {
        if (this.state.type === 'input') {
            if (this.isValidInput()) {
                this.props.onConfirm(this.state.inputValue);
            } else {
                this.setState({
                    showValidationMessage: true
                });
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
        // if (e.keyCode == 13) {
        //     if (this.props.onConfirm) {
        //         this.onConfirm();
        //         e.stopPropagation();
        //     }
        // }
        if (e.keyCode == 27) {
            if (this.props.allowEscape && this.props.onCancel) {
                this.props.onCancel();
                e.stopPropagation();
            }
        }
    };

    onClickInside = (e) => {
        e.stopPropagation();
    };

    onClickOutside = () => {
        if (this.props.closeOnClickOutside && this.props.onCancel) {
            this.props.onCancel();
        }
    };

    render() {
        if (!this.props.show) {
            return false;
        }
        return (
            <div>

                <style type="text/css" dangerouslySetInnerHTML={{ __html: `
                    body.sweetalert-overflow-hidden {
                        overflow: hidden;
                    }
                ` }} />

                <style type="text/css" scoped>
                    {`<Inject>../css/animations.css</Inject>`}
                </style>

                <Overlay show={!this.props.hideOverlay} onClick={this.onClickOutside} onKeyDown={this.onKeyDown}>

                  <div
                    style={objectAssign({}, style, this.props.style)}
                    tabIndex="0"
                    ref="container"
                    onKeyDown={this.onKeyDown}
                    onClick={this.onClickInside}
                    className={'sweet-alert ' + this.props.customClass}
                  >
                        {this.props.showCloseButton && <span
                          className='btn'
                          style={objectAssign({}, styles.closeButton, this.props.style)}
                          onClick={this.props.onCancel}
                        >x</span>}

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
                            type={this.state.type}
                            onConfirm={this.onConfirm}
                            focusConfirmBtn={this.state.focusConfirmBtn}
                        />

                    </div>

                </Overlay>

            </div>
        );
    }

}
