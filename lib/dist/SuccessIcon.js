var React = require('react');
var Radium = require('radium');
var styles = require('../styles/SweetAlertStyles');

var SuccessIcon = React.createClass({
    displayName: 'SuccessIcon',

    render: function () {
        return React.createElement(
            'div',
            { style: [styles.icon, styles.iconSuccess] },
            React.createElement('div', { style: [styles.iconSuccessBeforeAfter, styles.iconSuccessBefore] }),
            React.createElement('span', { style: [styles.iconSuccessLine, styles.iconSuccessLineTip] }),
            React.createElement('span', { style: [styles.iconSuccessLine, styles.iconSuccessLineLong] }),
            React.createElement('div', { style: styles.iconSuccessPlaceholder }),
            React.createElement('div', { style: styles.iconSuccessFix }),
            React.createElement('div', { style: [styles.iconSuccessBeforeAfter, styles.iconSuccessAfter] })
        );
    }
});

module.exports = Radium(SuccessIcon);