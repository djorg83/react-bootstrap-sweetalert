var React = require('react');
var Radium = require('radium');
var styles = require('../styles/SweetAlertStyles');

var CustomIcon = React.createClass({

	propTypes: {
		iconUrl: React.PropTypes.string.isRequired
	},

    render: function() {
    	return (
    		<div style={[styles.icon, styles.iconCustom, {
                backgroundImage: 'url(' + this.props.iconUrl + ')'
            }]}></div>
    	);
    }
});

module.exports = Radium(CustomIcon);