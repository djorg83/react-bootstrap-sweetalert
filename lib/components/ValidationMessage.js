'use strict';
import React  from 'react';
import styles from '../styles/SweetAlertStyles';

export default ({ validationMsg }) => (
    <div style={styles.validationMessage}>
        <div style={styles.exclamationIcon}>!</div>{validationMsg}
    </div>
);