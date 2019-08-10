import React  from 'react';
import * as styles from '../styles/SweetAlertStyles';

const defaultMessage = 'Please enter a response!';
const emailMessage = 'Please enter a valid email!';

const ValidationMessage: React.FunctionComponent<{
  validationMsg: string,
  inputType: string,
}> = ({ validationMsg, inputType }) => {
  const message = validationMsg || (inputType === 'email' ? emailMessage : defaultMessage);

  return (
    <div style={styles.validationMessage}>
      <div style={styles.exclamationIcon}>!</div>{message}
    </div>
  );
};

export default ValidationMessage;