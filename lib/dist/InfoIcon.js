var React = require('react');
var Radium = require('radium');
var styles = require('../styles/SweetAlertStyles');

var InfoIcon = React.createClass({
    displayName: 'InfoIcon',

    render: function () {
        return React.createElement(
            'div',
            { style: [styles.icon, styles.iconInfo] },
            React.createElement('div', { style: styles.iconInfoBefore }),
            React.createElement('div', { style: styles.iconInfoAfter })
        );
    }
});

module.exports = Radium(InfoIcon);