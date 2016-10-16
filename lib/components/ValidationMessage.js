'use strict';
import React  from 'react';
import styles from '../styles/SweetAlertStyles';

export default ({ inputValidationMsg, validationMsg }) => (
    <div style={styles.validationMessage}>
        <div style={styles.exclamationIcon}>!</div>{inputValidationMsg || validationMsg}
    </div>
);