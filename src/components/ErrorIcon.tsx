import React  from 'react';
import * as styles from '../styles/SweetAlertStyles';

const ErrorIcon: React.FunctionComponent = () => (
	<div style={Object.assign({}, styles.icon, styles.iconError)}>
		<span style={styles.iconErrorX}>
			<span style={Object.assign({}, styles.iconErrorLine, styles.iconErrorLineLeft)} />
			<span style={Object.assign({}, styles.iconErrorLine, styles.iconErrorLineRight)} />
		</span>
	</div>
);

export default ErrorIcon;