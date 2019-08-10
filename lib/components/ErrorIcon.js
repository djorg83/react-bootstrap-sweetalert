'use strict';
import React  from 'react';
import styles from '../styles/SweetAlertStyles';

export default () => (
	<div style={Object.assign({}, styles.icon, styles.iconError)}>
		<span style={styles.iconErrorX}>
			<span style={Object.assign({}, styles.iconErrorLine, styles.iconErrorLineLeft)}></span>
			<span style={Object.assign({}, styles.iconErrorLine, styles.iconErrorLineRight)}></span>
		</span>
	</div>
);