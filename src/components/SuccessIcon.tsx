import React       from 'react';
import * as styles from '../styles/SweetAlertStyles';

const SuccessIcon: React.FunctionComponent = () => (
  <div style={Object.assign({}, styles.icon, styles.iconSuccess)}>
      <div style={Object.assign({}, styles.iconSuccessBeforeAfter, styles.iconSuccessBefore)} />
      <span style={Object.assign({}, styles.iconSuccessLine, styles.iconSuccessLineTip)} />
      <span style={Object.assign({}, styles.iconSuccessLine, styles.iconSuccessLineLong)} />
      <div style={styles.iconSuccessPlaceholder} />
      <div style={styles.iconSuccessFix} />
      <div style={Object.assign({}, styles.iconSuccessBeforeAfter, styles.iconSuccessAfter)} />
  </div>
);

export default SuccessIcon;