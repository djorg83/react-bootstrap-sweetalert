var React = require('react');
var Radium = require('radium');
var styles = require('../styles/SweetAlertStyles');

var WarningIcon = React.createClass({
    render: function() {
    	return (
    		<div style={[styles.icon, styles.iconWarning]}>
				<span style={styles.iconWarningBody}></span>
				<span style={styles.iconWarningDot}></span>
			</div>
    	);
    }
});

module.exports = Radium(WarningIcon);