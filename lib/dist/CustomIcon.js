'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _objectAssign = require('object-assign');

var _objectAssign2 = _interopRequireDefault(_objectAssign);

var _SweetAlertStyles = require('../styles/SweetAlertStyles');

var _SweetAlertStyles2 = _interopRequireDefault(_SweetAlertStyles);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var style = (0, _objectAssign2.default)({}, _SweetAlertStyles2.default.icon, _SweetAlertStyles2.default.iconCustom);

exports.default = function (_ref) {
    var iconUrl = _ref.iconUrl;
    return _react2.default.createElement('div', { style: (0, _objectAssign2.default)({}, style, { backgroundImage: 'url(' + iconUrl + ')' }) });
};