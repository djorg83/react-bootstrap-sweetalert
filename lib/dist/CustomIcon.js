var React = require('react');
var Radium = require('radium');
var styles = require('../styles/SweetAlertStyles');

var CustomIcon = React.createClass({
  displayName: 'CustomIcon',

  propTypes: {
    iconUrl: React.PropTypes.string.isRequired
  },

  render: function () {
    return React.createElement('div', { style: [styles.icon, styles.iconCustom, {
        backgroundImage: 'url(' + this.props.iconUrl + ')'
      }] });
  }
});

module.exports = Radium(CustomIcon);