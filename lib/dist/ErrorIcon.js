var React = require('react');
var Radium = require('radium');
var styles = require('../styles/SweetAlertStyles');

var ErrorIcon = React.createClass({
  displayName: 'ErrorIcon',

  render: function () {
    return React.createElement(
      'div',
      { style: [styles.icon, styles.iconError] },
      React.createElement(
        'span',
        { style: styles.iconErrorX },
        React.createElement('span', { style: [styles.iconErrorLine, styles.iconErrorLineLeft] }),
        React.createElement('span', { style: [styles.iconErrorLine, styles.iconErrorLineRight] })
      )
    );
  }
});

module.exports = Radium(ErrorIcon);