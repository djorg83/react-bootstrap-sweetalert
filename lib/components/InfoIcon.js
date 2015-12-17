var React = require('react');
var Radium = require('radium');
var styles = require('../styles/SweetAlertStyles');

var InfoIcon = React.createClass({
    render: function() {
    	return (
    		<div style={[styles.icon, styles.iconInfo]}>
                <div style={styles.iconInfoBefore}></div>
                <div style={styles.iconInfoAfter}></div>
            </div>
        );
    }
});

module.exports = Radium(InfoIcon);