'use strict';
import React  from 'react';
import styles from '../styles/SweetAlertStyles';

export default () => (
	<div style={Object.assign({}, styles.icon, styles.iconWarning)}>
		<span style={styles.iconWarningBody}></span>
		<span style={styles.iconWarningDot}></span>
	</div>
);