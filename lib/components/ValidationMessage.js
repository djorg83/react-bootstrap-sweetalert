'use strict';
import React  from 'react';
import styles from '../styles/SweetAlertStyles';

export default (props) => (
    <div style={styles.validationMessage}>
        <div style={styles.exclamationIcon}>!</div>{props.inputValidationMsg || props.validationMsg}
    </div>
);