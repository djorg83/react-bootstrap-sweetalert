var React = require('react');
var Radium = require('radium');
var styles = require('../styles/SweetAlertStyles');

var SuccessIcon = React.createClass({
    render: function() {
        return (
            <div style={[styles.icon, styles.iconSuccess]}>
                <div style={[styles.iconSuccessBeforeAfter, styles.iconSuccessBefore]}></div>
                <span style={[styles.iconSuccessLine, styles.iconSuccessLineTip]}></span>
                <span style={[styles.iconSuccessLine, styles.iconSuccessLineLong]}></span>
                <div style={styles.iconSuccessPlaceholder}></div>
                <div style={styles.iconSuccessFix}></div>
                <div style={[styles.iconSuccessBeforeAfter, styles.iconSuccessAfter]}></div>
			</div>
    	);
    }
});

module.exports = Radium(SuccessIcon);