'use strict';
import React  from 'react';
import styles from '../styles/SweetAlertStyles';

const style = Object.assign({}, styles.icon, styles.iconCustom);

export default ({ iconUrl }) => (
    <div style={Object.assign({}, style, {backgroundImage: 'url(' + iconUrl + ')'})}></div>
);