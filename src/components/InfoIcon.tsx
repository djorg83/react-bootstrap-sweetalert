import React  from 'react';
import * as styles from '../styles/SweetAlertStyles';

const InfoIcon: React.FunctionComponent = () => (
  <div style={Object.assign({}, styles.icon, styles.iconInfo)}>
    <div style={styles.iconInfoBefore}></div>
    <div style={styles.iconInfoAfter}></div>
  </div>
);

export default InfoIcon;