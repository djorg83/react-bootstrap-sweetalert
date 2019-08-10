'use strict';
import React  from 'react';
import styles from '../styles/SweetAlertStyles';

export default () => (
	<div style={Object.assign({}, styles.icon, styles.iconInfo)}>
        <div style={styles.iconInfoBefore}></div>
        <div style={styles.iconInfoAfter}></div>
    </div>
);