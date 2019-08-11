import React from 'react';
import * as styles from '../styles/SweetAlertStyles';
import {SweetAlertProps, SweetAlertState} from "./SweetAlert";

type PropsAndState = SweetAlertProps & SweetAlertState;

interface InputProps extends PropsAndState {
  onInputKeyDown: Function;
  onChangeInput: Function;
}

export default class Input extends React.Component<InputProps> {

  private inputElement: HTMLInputElement|HTMLTextAreaElement = null;

  componentDidMount() {
    if (this.props.type === 'input') {
      try {
        this.inputElement.focus();
      } catch (e) {
        // whoops
      }
    }
  }

  setInputElementRef = (element: HTMLInputElement|HTMLTextAreaElement) => {
    this.inputElement = element;
  };

  render() {
    return (
      <div style={{position: 'relative'}}>

        {this.props.inputType === 'textarea' ? (
          <textarea
            ref={this.setInputElementRef}
            rows={4}
            className="form-control"
            value={this.props.inputValue || ''}
            onChange={(e) => this.props.onChangeInput(e)}
            onKeyDown={(e) => this.props.onInputKeyDown(e)}
            placeholder={this.props.placeholder}/>
        ) : (
          <input
            type={this.props.inputType}
            ref={this.setInputElementRef}
            className="form-control"
            value={this.props.inputValue || ''}
            onChange={(e) => this.props.onChangeInput(e)}
            onKeyDown={(e) => this.props.onInputKeyDown(e)}
            placeholder={this.props.placeholder}/>
        )}


        {this.props.showValidationMessage && (
          <div style={styles.inputErrorIcon}>
            <div style={Object.assign({}, styles.inputErrorIconBeforeAfter, styles.inputErrorIconBefore)} />
            <div style={Object.assign({}, styles.inputErrorIconBeforeAfter, styles.inputErrorIconAfter)} />
          </div>
        )}

      </div>
    );
  }
}