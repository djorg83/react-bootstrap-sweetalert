'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _SweetAlertStyles = require('../styles/SweetAlertStyles');

var _SweetAlertStyles2 = _interopRequireDefault(_SweetAlertStyles);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function (_ref) {
    var validationMsg = _ref.validationMsg;
    return _react2.default.createElement(
        'div',
        { style: _SweetAlertStyles2.default.validationMessage },
        _react2.default.createElement(
            'div',
            { style: _SweetAlertStyles2.default.exclamationIcon },
            '!'
        ),
        validationMsg
    );
};