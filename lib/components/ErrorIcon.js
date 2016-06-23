'use strict';
import React        from 'react';
import objectAssign from 'object-assign';
import styles       from '../styles/SweetAlertStyles';

export default () => (
	<div style={objectAssign({}, styles.icon, styles.iconError)}>
		<span style={styles.iconErrorX}>
			<span style={objectAssign({}, styles.iconErrorLine, styles.iconErrorLineLeft)}></span>
			<span style={objectAssign({}, styles.iconErrorLine, styles.iconErrorLineRight)}></span>
		</span>
	</div>
);