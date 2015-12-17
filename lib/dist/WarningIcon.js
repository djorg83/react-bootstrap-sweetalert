var React = require('react');
var Radium = require('radium');
var styles = require('../styles/SweetAlertStyles');

var WarningIcon = React.createClass({
    displayName: 'WarningIcon',

    render: function () {
        return React.createElement(
            'div',
            { style: [styles.icon, styles.iconWarning] },
            React.createElement('span', { style: styles.iconWarningBody }),
            React.createElement('span', { style: styles.iconWarningDot })
        );
    }
});

module.exports = Radium(WarningIcon);