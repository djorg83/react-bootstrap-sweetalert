'use strict';
import React        from 'react';
import objectAssign from 'object-assign';
import styles       from '../styles/SweetAlertStyles';

let style = objectAssign({}, styles.icon, styles.iconCustom);

export default (props) => (
    <div style={objectAssign({}, style, {backgroundImage: 'url(' + props.iconUrl + ')'})}></div>
);