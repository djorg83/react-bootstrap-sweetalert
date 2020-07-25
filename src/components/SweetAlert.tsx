// third-party
import React, { CSSProperties, ReactNode } from 'react';

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
import {
  SweetAlertAnimationProps,
  SweetAlertOptionalPropsWithDefaults,
  SweetAlertProps,
  SweetAlertPropsTypes, SweetAlertRenderProps,
  SweetAlertState,
} from '../types';
import { SWEET_ALERT_PROP_TYPES } from '../prop-types';
import { SWEET_ALERT_DEFAULT_PROPS } from '../default-props';

const SWEET_ALERT_DEFAULT_STYLES = styles.sweetAlert;

const _resetting: { [alertId:string]: boolean } = {};

const debugLogger = (...args: any[]): void => {
  // uncomment the next line to get some debugging logs.
  // console.log(...args);
};

export default class SweetAlert extends React.Component<SweetAlertProps, SweetAlertState> {

  static propTypes: SweetAlertPropsTypes = SWEET_ALERT_PROP_TYPES;
  static defaultProps: SweetAlertOptionalPropsWithDefaults = SWEET_ALERT_DEFAULT_PROPS;
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

  readonly state: SweetAlertState;
  private inputElement: HTMLInputElement|HTMLTextAreaElement = null;

  constructor(props: SweetAlertProps) {
    super(props);

    if (this.props.beforeUpdate) {
      this.unsupportedProp('beforeUpdate', 'use props.afterUpdate');
    }

    const newState: SweetAlertState = Object.assign(SweetAlert.getDefaultState(), {
      hideTimeoutHandlerFunc: this.hideTimeoutHandler.bind(this)
    });

    if (this.props.defaultValue != null) {
      newState.inputValue = this.props.defaultValue;
    }

    this.state = newState;

    this.props.beforeMount();
  }

  componentDidMount() {
    document.body.classList.add('sweetalert-overflow-hidden');
    this.focusInput();
    if (this.props.afterMount) {
      this.props.afterMount();
    }
  }

  static generateId(): string {
    return '' + Date.now() + Math.ceil(Math.random() * 10000000000) + Math.ceil(Math.random() * 10000000000);
  }

  static getDefaultState(): SweetAlertState {
    return {
      id: SweetAlert.generateId(),
      show: true,
      focusConfirmBtn: true,
      focusCancelBtn: false,
      inputValue: '',
      showValidationMessage: false,
      timer: null,
      animation: "",
      prevTimeout: 0,
      closingAction: null,
      dependencies: [],
    }
  }

  static getDerivedStateFromProps(nextProps: SweetAlertProps, nextState: SweetAlertState) {

    if (_resetting[nextState.id]) {
      return {};
    }

    let newState = {};

    const typeChanged = nextState.type !== SweetAlert.getTypeFromProps(nextProps);
    const dependenciesChanged = nextState.dependencies !== nextProps.dependencies;
    const timeoutChanged = nextState.prevTimeout !== nextProps.timeout;

    // if the type of the alert changed, or the dependencies changed, then update the state from props
    if (typeChanged || dependenciesChanged) {
      newState = {
        ...newState,
        ...SweetAlert.getStateFromProps(nextProps),
      };
    }

    // if the state is changing, or the timeout changed, then reset the timeout timer
    if (JSON.stringify(newState) !== '{}' || timeoutChanged) {
      newState = {
        ...newState,
        ...SweetAlert.handleTimeout(nextProps, nextState.timer)
      };
    }

    // return the partially updated state
    return {
      ...newState,
      ...SweetAlert.handleAnimState(nextProps, nextState, nextState.hideTimeoutHandlerFunc),
    };
  }

  componentDidUpdate(prevProps: SweetAlertProps, prevState: SweetAlertState) {
    if (this.props.beforeUpdate) {
      this.props.beforeUpdate(prevProps, prevState);
    }

    if (!prevState.show && this.state.show) {
      this.focusInput();
    }

    this.props.afterUpdate(this.props, this.state);
  }

  componentWillUnmount() {
    document.body.classList.remove('sweetalert-overflow-hidden');
    if (this.state.timer) {
      clearTimeout(this.state.timer);
    }
    if (this.props.beforeUnmount) {
      this.props.beforeUnmount();
    }
  }

  hideTimeoutHandler(time: number) {
    setTimeout(() => {
      const closingAction = this.state.closingAction;

      /**
       * Removing the closing action (shouldn't trigger another animation timeout)
       */
      this.setState({ show: false, closingAction: null }, (): void => {

        // handle the action that was started before the closing animation was started
        switch (closingAction) {
          case 'confirm':
            this.onConfirm(false);
            break;
          case 'cancel':
            this.onCancel(false);
            break;
          default:
            break;
        }

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

  static isAnimation(animProp?: boolean|SweetAlertAnimationProps): boolean {
    return animProp && typeof animProp !== 'boolean';
  }

  static animationFromProp(animProp: SweetAlertAnimationProps) {
    return animProp.name + ' ' + animProp.duration + 'ms';
  }

  static handleAnimState(props: SweetAlertProps, state: SweetAlertState, hideTimeout: Function) {

    const userDefinedShow = typeof props.show === 'boolean';
    let show = (userDefinedShow && !state.closingAction) ? props.show : state.show;

    let animation = '';

    if (show) {
      if (props.openAnim) {
        if (SweetAlert.isAnimation(props.openAnim)) {
          animation = SweetAlert.animationFromProp(props.openAnim as SweetAlertAnimationProps);
        } else if (SweetAlert.isAnimation(SweetAlert.defaultProps.openAnim)) {
          animation = SweetAlert.animationFromProp(SweetAlert.defaultProps.openAnim as SweetAlertAnimationProps);
        }
      }
    } else if (state.closingAction && props.closeAnim) {
      let animProp: SweetAlertAnimationProps;

      if (SweetAlert.isAnimation(props.closeAnim)) {
        animProp = props.closeAnim as SweetAlertAnimationProps;
      } else if (SweetAlert.isAnimation(SweetAlert.defaultProps.closeAnim)) {
        animProp = SweetAlert.defaultProps.closeAnim as SweetAlertAnimationProps;
      }

      if (animProp) {
        animation = SweetAlert.animationFromProp(animProp);
        hideTimeout(animProp.duration);
        show = true;
      }
    }

    return { show, animation };
  };

  static getStateFromProps = (props: SweetAlertProps) => {
    const type = SweetAlert.getTypeFromProps(props);
    return {
      type,
      focusConfirmBtn: props.focusConfirmBtn && type !== 'input',
      focusCancelBtn: props.focusCancelBtn && type !== 'input',
      dependencies: props.dependencies,
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

  focusInput = () => {
    debugLogger('inputElement', this.inputElement);
    if (this.inputElement) {
      debugLogger('inputElement trying to focus', this.inputElement);
      try {
        this.inputElement.focus();
      } catch (e) {
        debugLogger('inputElement focus error', e);
        // whoops
      }
    }
  }

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

  isDisabled = (): boolean => {
    return this.props.onCancel && this.props.disabled;
  };

  onAlertClose = (callback: () => void) => {
    _resetting[this.state.id] = true;

    debugLogger('onAlertClose resetting state');
    this.setState({
      ...SweetAlert.getDefaultState(),
      id: this.state.id,
    }, () => {
      _resetting[this.state.id] = false;
      callback();
    });
  };

  beforeCloseAlert = (closingAction: 'confirm'|'cancel', callback: () => void) => {

    debugLogger('in beforeCloseAlert: setting show to false');
    this.setState({ show: false, closingAction }, (): void => {
      debugLogger('state updated', this.state.show);
      if (!this.state.show) {
        debugLogger('invoking callback');
        callback();
      }
    });
  };

  onConfirm = (handleCloseAnimations: boolean = true) => {

    if (this.isDisabled()) {
      return;
    }

    // if this is an input alert, then we will send the input value to the props.onConfirm function
    const isInput: boolean = this.state.type === 'input';
    const inputValue: string = this.state.inputValue;

    // if this is a controlled alert, then we will send the dependencies value to the props.onConfirm function
    const isControlled: boolean = this.state.type === 'controlled';
    const dependencies: any[] = [...this.state.dependencies];

    if (isInput && !this.isValidInput()) {
      this.setState({
        showValidationMessage: true
      });
      return;
    }

    const confirm = (): void => {
      debugLogger('in confirm callback');
      if (isInput) {
        this.onAlertClose(() => {
          this.props.onConfirm(inputValue);
        });
      } else if (isControlled) {
        this.onAlertClose(() => {
          this.props.onConfirm(dependencies);
        });
      } else {
        this.onAlertClose(() => this.props.onConfirm());
      }
    };

    if (handleCloseAnimations) {
      debugLogger('calling beforeCloseAlert');
      this.beforeCloseAlert('confirm', () => confirm());
    } else {
      confirm();
    }

  };

  onCancel = (handleCloseAnimations: boolean = true) => {

    const cancel = (): void => {
      this.onAlertClose(() => {
        if (this.props.onCancel) {
          this.props.onCancel();
        }
      });
    };

    if (handleCloseAnimations) {
      this.beforeCloseAlert('cancel', () => cancel());
    } else {
      cancel();
    }
  };

  onInputKeyDown = (e: React.KeyboardEvent) =>  {
    if (e.keyCode == 13) {
      e.stopPropagation();
      this.onConfirm();
    }
  };

  onKeyDown = (e: React.KeyboardEvent) =>  {
    if (e.keyCode == 27) {
      if (this.props.allowEscape && this.props.onCancel) {
        e.stopPropagation();
        this.onCancel();
      }
    }
  };

  onClickInside = (e: React.MouseEvent) => {
    e.stopPropagation();
  };

  onClickOutside = () => {
    if (this.props.closeOnClickOutside && this.props.onCancel) {
      this.onCancel();
    }
  };

  setAutoFocusInputRef = (element: HTMLInputElement|HTMLTextAreaElement) => {
    this.inputElement = element;
  };

  getComposedStyle = (): CSSProperties => {
    return Object.assign(
      {},
      SWEET_ALERT_DEFAULT_STYLES,
      this.props.style,
      { animation: this.state.animation }
    );
  };

  getAlertContent = (): ReactNode => {

    // Support for render props for content of alert
    if (typeof this.props.children === 'function') {
      const renderProps: SweetAlertRenderProps = {
        onEnterKeyDownConfirm: (event: React.KeyboardEvent) => {
          if (event.key === 'Enter') {
            event.preventDefault();
            event.stopPropagation();
            this.onConfirm();
          }
        },
        confirm: () => this.onConfirm(),
        cancel: () => this.onCancel(),
        setAutoFocusInputRef: this.setAutoFocusInputRef.bind(this),
      }
      return this.props.children(renderProps);
    }

    return this.props.children;
  };

  getCloseButton = (): ReactNode => {
    if (!this.props.showCloseButton || !this.props.onCancel) {
      return null;
    }
    return (
      <span
        className='btn'
        style={Object.assign({}, styles.closeButton, this.props.closeBtnStyle)}
        onClick={() => this.onCancel()}
      >x</span>
    );
  };

  getInputField = (): ReactNode => {
    if (this.state.type !== 'input') {
      return null;
    }
    return (
      <Input
        {...this.props}
        {...this.state}
        type={this.state.type}
        onInputKeyDown={this.onInputKeyDown}
        onChangeInput={this.onChangeInput}
      />
    );
  };

  getValidationMessage = (): ReactNode => {
    if (!this.state.showValidationMessage) {
      return null;
    }
    return <ValidationMessage {...this.props} />;
  };

  getButtons = (): ReactNode => {
    return (
      <Buttons
        {...this.props}
        type={this.state.type}
        onConfirm={this.onConfirm}
        onCancel={this.onCancel}
        focusConfirmBtn={this.state.focusConfirmBtn}
        focusCancelBtn={this.state.focusCancelBtn}
        disabled={this.isDisabled()}
      />
    );
  };

  getInjectedStyles = (): ReactNode => {
    return (
      <>
        <style type="text/css" dangerouslySetInnerHTML={{
            __html: `
                body.sweetalert-overflow-hidden {
                  overflow: hidden;
                }
                body .sweet-alert button {
                  outline: none !important;
                }
              `
          }}
        />

        <style type="text/css">
          {`<Inject>../css/animations.css</Inject>`}
        </style>
      </>
    );
  };

  render() {
    if (!this.state.show) {
      return null;
    }

    return (
      <div>
        {this.getInjectedStyles()}
        <Overlay
          show={!this.props.hideOverlay}
          onClick={this.onClickOutside}
          onKeyDown={this.onKeyDown}
        >
          <div
            style={this.getComposedStyle()}
            tabIndex={0}
            onKeyDown={this.onKeyDown}
            onClick={this.onClickInside}
            className={'sweet-alert ' + this.props.customClass}
          >
            {this.getCloseButton()}
            {this.getIcon()}
            <Title>{this.props.title}</Title>
            <Content>{this.getAlertContent()}</Content>
            {this.getInputField()}
            {this.getValidationMessage()}
            {this.getButtons()}
          </div>
        </Overlay>
      </div>
    );
  }

}
