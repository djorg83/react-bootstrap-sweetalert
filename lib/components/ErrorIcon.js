var React = require('react');
var Radium = require('radium');
var styles = require('../styles/SweetAlertStyles');

var ErrorIcon = React.createClass({
    render: function() {
    	return (
    		<div style={[styles.icon, styles.iconError]}>
				<span style={styles.iconErrorX}>
					<span style={[styles.iconErrorLine, styles.iconErrorLineLeft]}></span>
					<span style={[styles.iconErrorLine, styles.iconErrorLineRight]}></span>
				</span>
			</div>
    	);
    }
});

module.exports = Radium(ErrorIcon);