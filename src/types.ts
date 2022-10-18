import React, { CSSProperties } from "react";

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
  confirmBtnBsStyle?: string;
  cancelBtnBsStyle?: string;
  showCloseButton?: boolean;
  beforeMount?: () => any;
  afterMount?: () => any;
  beforeUpdate?: (prevProps: SweetAlertProps, prevState: SweetAlertState) => any;
  afterUpdate?: (props: SweetAlertProps, state: SweetAlertState) => any;
  beforeUnmount?: () => any;
  style?: CSSProperties;
  closeBtnStyle?: CSSProperties;
  timeout?: number;
  openAnim?: boolean|SweetAlertAnimationProps;
  closeAnim?: boolean|SweetAlertAnimationProps;
  reverseButtons?: boolean;
  dependencies?: any[];
}

export type SweetAlertType = "default"
  |"secondary"
  |"info"
  |"success"
  |"warning"
  |"danger"
  |"error"
  |"input"
  |"custom"
  |"controlled";

export interface SweetAlertOptionalProps extends SweetAlertOptionalPropsWithDefaults {
  type?: SweetAlertType;

  // shortcut props
  secondary?: boolean;
  info?: boolean;
  success?: boolean;
  warning?: boolean;
  danger?: boolean;
  error?: boolean;
  input?: boolean;
  custom?: boolean;
  controlled?: boolean;

  onCancel?: () => any;
  confirmBtnText?: React.ReactNode|string;
  confirmBtnCssClass?: string;
  confirmBtnStyle?: CSSProperties;
  cancelBtnText?: React.ReactNode|string;
  cancelBtnCssClass?: string;
  cancelBtnStyle?: CSSProperties;
  btnSize?: string;
  customIcon?: React.ReactNode|string;
  placeholder?: string;
  defaultValue?: string;
  showConfirm?: boolean;
  showCancel?: boolean;
  customButtons?: React.ReactNode;
}

export interface SweetAlertProps extends SweetAlertOptionalProps {
  title: React.ReactNode|string;
  onConfirm: (response?: any) => any;
  children: children: React.ReactNode|string;
}

export type SweetAlertPropsTypes = { [key in keyof SweetAlertProps]: any };

export interface SweetAlertState {
  id: string;
  show: boolean;
  type?: SweetAlertType;
  focusConfirmBtn?: boolean;
  focusCancelBtn?: boolean;
  inputValue?: string;
  showValidationMessage?: boolean;
  timer?: any;
  animation?: string;
  prevTimeout?: number;
  hideTimeoutHandlerFunc?: (time: number) => void;
  closingAction: "confirm"|"cancel";
  dependencies: any[];
}

export interface SweetAlertRenderProps {
  /**
   * Invoke this function to trigger the 'confirm' action.
   */
  confirm: () => any;

  /**
   * Invoke this function to trigger the 'cancel' action.
   */
  cancel: () => any;

  /**
   * Attach this to a keydown enter on an input element to trigger the 'confirm' action when the enter key ispressed.
   *
   * onKeyDown={this.onKeyDown}
   *
   * @param event
   */
  onEnterKeyDownConfirm: (event: React.KeyboardEvent) => any;

  /**
   * Use this to assign a ref to the input element you would like to focus when the alert is initially rendered.
   *
   * ref={setAutoFocusInputRef}
   *
   * @param element
   */
  setAutoFocusInputRef: (element: HTMLInputElement|HTMLTextAreaElement) => void;
}
