'use strict';
import React  from 'react';
import styles from '../styles/SweetAlertStyles';

const defaultMessage = 'Please enter a response!';
const emailMessage = 'Please enter a valid email!';

export default ({ validationMsg, inputType }) => {
    const message = validationMsg || (inputType === 'email' ? emailMessage : defaultMessage);

    return (
        <div style={styles.validationMessage}>
            <div style={styles.exclamationIcon}>!</div>{message}
        </div>
    );
};