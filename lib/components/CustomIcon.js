'use strict';
import React        from 'react';
import objectAssign from 'object-assign';
import styles       from '../styles/SweetAlertStyles';

const style = objectAssign({}, styles.icon, styles.iconCustom);

export default ({ iconUrl }) => (
    <div style={objectAssign({}, style, {backgroundImage: 'url(' + iconUrl + ')'})}></div>
);