import React  from 'react';
import * as styles from '../styles/SweetAlertStyles';
import {SweetAlertProps} from "./SweetAlert";

const defaultMessage = 'Please enter a response!';
const emailMessage = 'Please enter a valid email!';

const ValidationMessage: React.FunctionComponent<SweetAlertProps> = ({ validationMsg, inputType }) => {
  const message = validationMsg || (inputType === 'email' ? emailMessage : defaultMessage);

  return (
    <div style={styles.validationMessage}>
      <div style={styles.exclamationIcon}>!</div>{message}
    </div>
  );
};

export default ValidationMessage;