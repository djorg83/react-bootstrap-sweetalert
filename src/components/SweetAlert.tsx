// third-party
import React, {CSSProperties} from 'react';
import PropTypes from 'prop-types';

// components
import SuccessIcon from './SuccessIcon';
import ErrorIcon from './ErrorIcon';
import InfoIcon from './InfoIcon';
import WarningIcon from './WarningIcon';
import CustomIcon from './CustomIcon';
import Buttons from './Buttons';
import Input from './Input';
import ValidationMessage from './ValidationMessage';
import Title from './Title';
import Content from './Content';
import Overlay from './Overlay';

// other
import * as styles from '../styles/SweetAlertStyles';
import * as Patterns from '../constants/patterns';

let style = styles.sweetAlert;

export interface SweetAlertAnimationProps {
    name: string;
    duration?: number;
}

export interface SweetAlertOptionalPropsWithDefaults {
  allowEscape?: boolean;
  closeOnClickOutside?: boolean;
  inputType?: string;
  customClass?: string;
  validationMsg?: string;
  validationRegex?: RegExp;
  hideOverlay?: boolean;
  show?: boolean;
  required?: boolean;
  disabled?: boolean;
  focusConfirmBtn?: boolean;
  focusCancelBtn?: boolean;
  showCloseButton?: boolean;
  beforeMount?: Function;
  afterMount?: Function;
  beforeUpdate?: Function;
  afterUpdate?: Function;
  beforeUnmount?: Function;
  style?: CSSProperties;
  closeBtnStyle?: CSSProperties;
  timeout?: number;
  openAnim?: boolean|SweetAlertAnimationProps;
  closeAnim?: boolean|SweetAlertAnimationProps;
  reverseButtons?: boolean;
}

export type SweetAlertType = 'default'|'secondary'|'info'|'success'|'warning'|'danger'|'error'|'input'|'custom';

export interface SweetAlertOptionalProps extends  SweetAlertOptionalPropsWithDefaults {
  type?: SweetAlertType,

  // shortcut props
  secondary?: boolean;
  info?: boolean;
  success?: boolean;
  warning?: boolean;
  danger?: boolean;
  error?: boolean;
  input?: boolean;
  custom?: boolean;

  onCancel?: Function,
  confirmBtnText?: React.ReactNode|string,
  confirmBtnBsStyle?: string,
  confirmBtnCssClass?: string,
  confirmBtnStyle?: CSSProperties,
  cancelBtnText?: React.ReactNode|string,
  cancelBtnBsStyle?: string,
  cancelBtnCssClass?: string,
  cancelBtnStyle?: CSSProperties,
  btnSize?: string,
  customIcon?: React.ReactNode|string,
  placeholder?: string,
  defaultValue?: string,
  showConfirm?: boolean,
  showCancel?: boolean,
  customActions?: React.ReactNode|string,
}

export interface SweetAlertProps extends SweetAlertOptionalProps {
  title: React.ReactNode|string;
  onConfirm: Function;
}

type SweetAlertPropsTypes = { [key in keyof SweetAlertProps]: any };

export interface SweetAlertState {
  show: boolean;
  type?: SweetAlertType;
  focusConfirmBtn?: boolean;
  focusCancelBtn?: boolean;
  inputValue?: string;
  showValidationMessage?: boolean;
  timer?: any;
  animation?: string;
  prevTimeout?: number;
  hideTimeoutHandlerFunc?: Function;
}

export default class SweetAlert extends React.Component<SweetAlertProps, SweetAlertState> {

  static propTypes: SweetAlertPropsTypes = {
    type: PropTypes.oneOf(['default', 'info', 'success', 'warning', 'danger', 'error', 'input', 'custom']),

    // shortcut props for type
    info: PropTypes.bool,
    success: PropTypes.bool,
    warning: PropTypes.bool,
    danger: PropTypes.bool,
    error: PropTypes.bool,
    input: PropTypes.bool,
    custom: PropTypes.bool,

    title: PropTypes.oneOfType([PropTypes.node, PropTypes.string]).isRequired,
    onCancel: PropTypes.func,
    onConfirm: PropTypes.func.isRequired,
    confirmBtnText: PropTypes.oneOfType([PropTypes.node, PropTypes.string]),
    confirmBtnBsStyle: PropTypes.string,
    confirmBtnCssClass: PropTypes.string,
    confirmBtnStyle: PropTypes.object,
    cancelBtnText: PropTypes.oneOfType([PropTypes.node, PropTypes.string]),
    cancelBtnBsStyle: PropTypes.string,
    cancelBtnCssClass: PropTypes.string,
    cancelBtnStyle: PropTypes.object,
    btnSize: PropTypes.string,
    customIcon: PropTypes.oneOfType([PropTypes.node, PropTypes.string]),
    show: PropTypes.bool,
    required: PropTypes.bool,
    placeholder: PropTypes.string,
    validationMsg: PropTypes.string,
    validationRegex: PropTypes.object,
    defaultValue: PropTypes.string,
    inputType: PropTypes.string,
    style: PropTypes.object,
    closeBtnStyle: PropTypes.object,
    customClass: PropTypes.string,
    showConfirm: PropTypes.bool,
    showCancel: PropTypes.bool,
    showCloseButton: PropTypes.bool,
    allowEscape: PropTypes.bool,
    closeOnClickOutside: PropTypes.bool,
    hideOverlay: PropTypes.bool,
    disabled: PropTypes.bool,
    focusConfirmBtn: PropTypes.bool,
    focusCancelBtn: PropTypes.bool,
    beforeMount: PropTypes.func,
    afterMount: PropTypes.func,
    beforeUpdate: PropTypes.func,
    afterUpdate: PropTypes.func,
    beforeUnmount: PropTypes.func,
    timeout: PropTypes.number,
    openAnim: PropTypes.any,
    closeAnim: PropTypes.any,
    reverseButtons: PropTypes.bool,
    customActions: PropTypes.oneOfType([PropTypes.node, PropTypes.string]),
  };

  static defaultProps: SweetAlertOptionalPropsWithDefaults = {
    allowEscape         : true,
    closeOnClickOutside : true,
    inputType           : 'text',
    customClass         : '',
    validationMsg       : null,
    validationRegex     : null,
    hideOverlay         : false,
    show                : true,
    required            : true,
    disabled            : false,
    focusConfirmBtn     : true,
    focusCancelBtn      : false,
    showCloseButton     : false,
    beforeMount         : () => {},
    afterMount          : () => {},
    beforeUpdate        : null,
    afterUpdate         : () => {},
    beforeUnmount       : () => {},
    style               : {},
    closeBtnStyle       : {},
    timeout             : 0,
    openAnim            : {name: "showSweetAlert", duration: 300},
    closeAnim           : false,
    reverseButtons      : false,
  };

  static SuccessIcon = SuccessIcon;
  static ErrorIcon = ErrorIcon;
  static InfoIcon = InfoIcon;
  static WarningIcon = WarningIcon;
  static CustomIcon = CustomIcon;
  static Buttons = Buttons;
  static Input = Input;
  static ValidationMessage = ValidationMessage;
  static Title = Title;
  static Content = Content;

  state: SweetAlertState = {
    show: false,
    type: 'default',
    focusConfirmBtn: true,
    focusCancelBtn: false,
    inputValue: '',
    showValidationMessage: false,
    timer: null,
    animation: "",
    prevTimeout: 0,
    hideTimeoutHandlerFunc: this.hideTimeoutHandler.bind(this)
  };

  constructor(props: SweetAlertProps) {
    super(props);

    if (this.props.beforeUpdate) {
      this.unsupportedProp('beforeUpdate', 'use props.afterUpdate');
    }

    if (this.props.defaultValue != null) {
      this.setState({
        inputValue: this.props.defaultValue
      });
    }

    this.props.beforeMount();
  }

  componentDidMount() {
    document.body.classList.add('sweetalert-overflow-hidden');

    this.props.afterMount();
  }

  static getDerivedStateFromProps(nextProps: SweetAlertProps, nextState: SweetAlertState) {
    let newState = {};
    if (nextState.type !== SweetAlert.getTypeFromProps(nextProps)) {
      newState = {
        ...SweetAlert.getStateFromProps(nextProps), // Set new type and focusConfirmButton
        ...SweetAlert.handleTimeout(nextProps, nextState.timer) // Set new timer
      };
    } else if (nextState.prevTimeout !== nextProps.timeout) {
      newState = {
        ...SweetAlert.handleTimeout(nextProps, nextState.timer) // Set new timer
      };
    }

    // No state change
    return {
      ...newState,
      ...SweetAlert.handleAnimState(nextProps, nextState.show, nextState.hideTimeoutHandlerFunc),
    };
  }

  componentDidUpdate(prevProps: SweetAlertProps, prevState: SweetAlertState) {
    if(this.props.beforeUpdate)
      this.props.beforeUpdate(prevProps, prevState);

    this.props.afterUpdate(prevProps, prevState);
  }

  componentWillUnmount() {
    document.body.classList.remove('sweetalert-overflow-hidden');
    clearTimeout(this.state.timer);
    this.props.beforeUnmount();
  }

  hideTimeoutHandler (time: number) {
    setTimeout(() => {
      this.setState({
        show: false
      });
    }, time);
  };

  static handleTimeout(props: SweetAlertProps, currentTimer: any) {
    if (currentTimer) {
      clearTimeout(currentTimer);
    }

    if (props.timeout && props.timeout > 0) {
      const timer: any = setTimeout(() => props.onConfirm(), props.timeout);
      return { timer: timer, prevTimeout: props.timeout };
    }

    return null;
  }

  static handleAnimState(props: SweetAlertProps, stateShow: boolean, hideTimeoutFunc: Function) {
      let animation = "";
      if(props.show != stateShow) {
          if(props.show) {
              if(props.openAnim) {
                if((typeof props.openAnim === "boolean")) {
                  if(props.openAnim && SweetAlert.defaultProps.openAnim && typeof SweetAlert.defaultProps.openAnim !== 'boolean')
                    animation = SweetAlert.defaultProps.openAnim.name + " " + SweetAlert.defaultProps.openAnim.duration + "ms";
                } else {
                  animation = props.openAnim.name + " " + props.openAnim.duration + "ms";
                }
              }
              stateShow = true;
          } else {
              if(props.closeAnim) {
                  if((typeof props.closeAnim === "boolean")) {
                    if(SweetAlert.defaultProps.closeAnim && typeof SweetAlert.defaultProps.closeAnim !== 'boolean') {
                        animation = SweetAlert.defaultProps.closeAnim.name + " " + SweetAlert.defaultProps.closeAnim.duration + "ms";
                        hideTimeoutFunc(SweetAlert.defaultProps.closeAnim.duration);
                    } else {
                        stateShow = false;
                    }
                  } else {
                      animation = props.closeAnim.name + " " + props.closeAnim.duration + "ms";
                      hideTimeoutFunc(props.closeAnim.duration);
                  }
              } else {
                  stateShow = false;
              }
          }
      }

      return {
          show: stateShow,
          animation
      }
  };
      
  static getStateFromProps = (props: SweetAlertProps) => {
    const type = SweetAlert.getTypeFromProps(props);
    return {
      type: type,
      focusConfirmBtn: props.focusConfirmBtn && type !== 'input',
      focusCancelBtn: props.focusCancelBtn && type !== 'input',
    };
  };

  static getTypeFromProps = (props: SweetAlertProps) => {
    if (props.type) return props.type;
    if (props.secondary) return 'secondary';
    if (props.info) return 'info';
    if (props.success) return 'success';
    if (props.warning) return 'warning';
    if (props.danger || props.error) return 'danger';
    if (props.input) return 'input';
    if (props.custom) return 'custom';
    return 'default';
  };

  unsupportedProp = (oldProp: string, message: string) => {
    try {
      console.warn(`react-bootstrap-sweetalert: Unsupported prop '${oldProp}'. Please ${message}`);
    } catch (e) {
      // do nothing
    }
  };

  getIcon = (): React.ReactNode => {
    switch (this.state.type) {
      case 'danger':
      case 'error':
        return <ErrorIcon />;
      case 'warning':
        return <WarningIcon />;
      case 'info':
        return <InfoIcon />;
      case 'success':
        return <SuccessIcon />;
      case 'custom':
        if (this.props.customIcon) {
          if (typeof this.props.customIcon == 'string') {
            return <CustomIcon iconUrl={this.props.customIcon} />
          }
          return this.props.customIcon;
        }
        return null;
      default:
        return null;
    }
  };

  onChangeInput = (e: React.ChangeEvent) => {
    const target = e.target as HTMLTextAreaElement|HTMLInputElement;
    this.setState({
      inputValue: target.value,
      showValidationMessage: false
    });
  };

  isValidInput = () => {
    if (!this.props.required) {
      return true;
    }
    const regex = this.props.validationRegex || (this.props.inputType === 'email' ? Patterns.emailRegex : Patterns.defaultRegex);
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

  onInputKeyDown = (e: React.KeyboardEvent) =>  {
    if (e.keyCode == 13) {
      if (this.props.onConfirm) {
        this.onConfirm();
        e.stopPropagation();
      }
    }
  };

  onKeyDown = (e: React.KeyboardEvent) =>  {
    if (e.keyCode == 27) {
      if (this.props.allowEscape && this.props.onCancel) {
        this.props.onCancel();
        e.stopPropagation();
      }
    }
  };

  onClickInside = (e: React.MouseEvent) => {
    e.stopPropagation();
  };

  onClickOutside = () => {
    if (this.props.closeOnClickOutside && this.props.onCancel) {
      this.props.onCancel();
    }
  };

  render() {
    if (!this.state.show) {
      return false;
    }
    return (
      <div>

        <style type="text/css" dangerouslySetInnerHTML={{ __html: `
            body.sweetalert-overflow-hidden {
              overflow: hidden;
            }
            body .sweet-alert button {
              outline: none !important;
            }
        ` }} />

        <style type="text/css">
          {`<Inject>../css/animations.css</Inject>`}
        </style>

        <Overlay
          show={!this.props.hideOverlay}
          onClick={this.onClickOutside}
          onKeyDown={this.onKeyDown}
        >

          <div
            style={Object.assign({}, style, this.props.style, {animation: this.state.animation})}
            tabIndex={0}
            ref="container"
            onKeyDown={this.onKeyDown}
            onClick={this.onClickInside}
            className={'sweet-alert ' + this.props.customClass}
          >
            {(this.props.showCloseButton && this.props.onCancel)&& <span
              className='btn'
              style={Object.assign({}, styles.closeButton, this.props.style)}
              onClick={() => this.props.onCancel()}
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
              focusCancelBtn={this.state.focusCancelBtn}
            />

          </div>

        </Overlay>

      </div>
    );
  }

}
