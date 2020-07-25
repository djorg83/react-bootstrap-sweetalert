import React from 'react';
import * as styles from '../styles/SweetAlertStyles';
import {SweetAlertProps} from "../types";
import {actions as actionsStyle } from "../styles/SweetAlertStyles";

export default class Buttons extends React.Component<SweetAlertProps> {

  static defaultProps = {
    confirmBtnText: 'OK',
    confirmBtnBsStyle: 'primary',
    confirmBtnCssClass: '',
    confirmBtnStyle: {},
    cancelBtnText: 'Cancel',
    cancelBtnBsStyle: 'link',
    cancelBtnCssClass: '',
    cancelBtnStyle: {},
    focusConfirmBtn: true,
    focusCancelBtn: false,
    showConfirm: true,
    showCancel: false,
    reverseButtons: false,
    btnSize: 'lg',
  };

  static styles: { [key: string]: { borderColor: string, shadowColor: string } } = {
    primary: {
      borderColor: '#286090',
      shadowColor: 'rgb(165, 202, 234)'
    },
    success: {
      borderColor: '#4cae4c',
      shadowColor: 'rgba(76, 174, 76, 0.6)'
    },
    info: {
      borderColor: '#46b8da',
      shadowColor: 'rgba(70, 184, 218, 0.6)'
    },
    danger: {
      borderColor: '#d43f3a',
      shadowColor: 'rgba(212, 63, 58, 0.6)'
    },
    warning: {
      borderColor: '#eea236',
      shadowColor: 'rgba(238, 162, 54, 0.6)'
    },
    default: {
      borderColor: '#cccccc',
      shadowColor: 'rgba(204, 204, 204, 0.6)'
    },
    secondary: {
      borderColor: '#cccccc',
      shadowColor: 'rgba(204, 204, 204, 0.6)'
    }
  };

  private buttonStyles = {};
  private confirmButtonElement: HTMLAnchorElement = null;
  private cancelButtonElement: HTMLAnchorElement = null;

  componentDidMount() {
    this.focusButton();
  }

  componentDidUpdate(prevProps: SweetAlertProps) {
    // when displaying back to back alerts React will treat this
    // as an update to the same alert. this causes componentDidMount
    // to not be called for the subsequent alerts. i hope to find a better
    // way to handle this in the future, but for now i'm checking if the
    // title, type, or button text has changed
    if (
      prevProps.type !== this.props.type ||
      prevProps.confirmBtnText !== this.props.confirmBtnText ||
      prevProps.title !== this.props.title
    ) {
      setTimeout(() => this.focusButton(), 0);
    }
  }

  setConfirmButtonElementRef = (element: HTMLAnchorElement) => {
    this.confirmButtonElement = element;
  };

  setCancelButtonElementRef = (element: HTMLAnchorElement) => {
    this.cancelButtonElement = element;
  };

  focusButton() {
    if (this.props.focusCancelBtn && this.cancelButtonElement) {
      try {
        this.cancelButtonElement.focus();
      } catch (e) {
        // whoops
      }
    } else if (this.props.focusConfirmBtn && this.confirmButtonElement) {
      try {
        this.confirmButtonElement.focus();
      } catch (e) {
        // whoops
      }
    }
  }

  getButtonStyle = (bsStyle: string) => {
    if (bsStyle === 'error') bsStyle = 'danger';
    if (this.buttonStyles[bsStyle] == null) {
      const style = Buttons.styles[bsStyle] || Buttons.styles.default;
      this.buttonStyles[bsStyle] = {
        borderColor: `${style.borderColor}`,
        boxShadow: `inset 0 1px 1px rgba(0,0,0,.075), 0 0 8px ${style.shadowColor}`,
      };
    }
    return this.buttonStyles[bsStyle];
  };

  confirmButtonRender() {
    if(!this.props.showConfirm)
      return false;

    const confirmBtnBsStyle = this.props.confirmBtnBsStyle === 'error' ? 'danger' : this.props.confirmBtnBsStyle;
    const confirmButtonStyle = Object.assign(
      {},
      styles.button,
      this.getButtonStyle(confirmBtnBsStyle),
      this.props.confirmBtnStyle || {}
    );

    /**
     * These buttons are <a> anchor tags because for some reason React is triggering click events on <button>
     * elements when an enter key event is fired from an input field in the alert.
     * Please do not change this back to any other type of element.
     */
    return (
      <a
        ref={this.setConfirmButtonElementRef}
        href={'#'}
        style={confirmButtonStyle}
        className={`btn btn-${this.props.btnSize} btn-${confirmBtnBsStyle} ${this.props.confirmBtnCssClass} ${this.props.disabled ? 'disabled' : ''}`}
        onClick={(e) => {
          e.stopPropagation();
          e.preventDefault();
          if (!this.props.disabled) {
            this.props.onConfirm()
          }
        }}
      >
        {this.props.confirmBtnText}
      </a>
    );
  }

  cancelButtonRender() {
    if(!this.props.showCancel)
      return false;

    const cancelBtnBsStyle = this.props.cancelBtnBsStyle === 'error' ? 'danger' : this.props.cancelBtnBsStyle;
    const cancelButtonStyle = Object.assign(
      {},
      styles.button,
      this.props.cancelBtnStyle || {}
    );

    /**
     * These buttons are <a> anchor tags because for some reason React is triggering click events on <button>
     * elements when an enter key event is fired from an input field in the alert.
     * Please do not change this back to any other type of element.
     */
    return (
      <a
        ref={this.setCancelButtonElementRef}
        href={'#'}
        style={cancelButtonStyle}
        className={`btn btn-${this.props.btnSize} btn-${cancelBtnBsStyle} ${this.props.cancelBtnCssClass}`}
        onClick={(e) => {
          e.stopPropagation();
          e.preventDefault();
          this.props.onCancel()
        }}
      >
        { this.props.cancelBtnText }
      </a>
    );
  }

  render() {
    if (!this.props.showConfirm && !this.props.showCancel) {
      return false;
    }

    return (
      <p style={actionsStyle}>
        { this.props.customButtons ? (
            this.props.customButtons
        ) : (
          <React.Fragment>
            { !this.props.reverseButtons ? (
              <React.Fragment>
                {this.cancelButtonRender()}
                {this.confirmButtonRender()}
              </React.Fragment>
            ) : (
              <React.Fragment>
                {this.confirmButtonRender()}
                {this.cancelButtonRender()}
              </React.Fragment>
            ) }
          </React.Fragment>
        ) }
      </p>
    );
  }
}
