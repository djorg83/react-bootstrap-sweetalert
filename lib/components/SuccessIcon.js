'use strict';
import React        from 'react';
import objectAssign from 'object-assign';
import styles       from '../styles/SweetAlertStyles';

export default () => (
    <div style={objectAssign({}, styles.icon, styles.iconSuccess)}>
        <div style={objectAssign({}, styles.iconSuccessBeforeAfter, styles.iconSuccessBefore)}></div>
        <span style={objectAssign({}, styles.iconSuccessLine, styles.iconSuccessLineTip)}></span>
        <span style={objectAssign({}, styles.iconSuccessLine, styles.iconSuccessLineLong)}></span>
        <div style={styles.iconSuccessPlaceholder}></div>
        <div style={styles.iconSuccessFix}></div>
        <div style={objectAssign({}, styles.iconSuccessBeforeAfter, styles.iconSuccessAfter)}></div>
    </div>
);