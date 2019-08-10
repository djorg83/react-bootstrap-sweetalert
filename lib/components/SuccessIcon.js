'use strict';
import React  from 'react';
import styles from '../styles/SweetAlertStyles';

export default () => (
  <div style={Object.assign({}, styles.icon, styles.iconSuccess)}>
    <div style={Object.assign({}, styles.iconSuccessBeforeAfter, styles.iconSuccessBefore)}></div>
    <span style={Object.assign({}, styles.iconSuccessLine, styles.iconSuccessLineTip)}></span>
    <span style={Object.assign({}, styles.iconSuccessLine, styles.iconSuccessLineLong)}></span>
    <div style={styles.iconSuccessPlaceholder}></div>
    <div style={styles.iconSuccessFix}></div>
    <div style={Object.assign({}, styles.iconSuccessBeforeAfter, styles.iconSuccessAfter)}></div>
  </div>
);