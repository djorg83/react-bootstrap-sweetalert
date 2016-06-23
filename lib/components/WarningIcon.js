'use strict';
import React        from 'react';
import objectAssign from 'object-assign';
import styles       from '../styles/SweetAlertStyles';

export default () => (
	<div style={objectAssign({}, styles.icon, styles.iconWarning)}>
		<span style={styles.iconWarningBody}></span>
		<span style={styles.iconWarningDot}></span>
	</div>
);