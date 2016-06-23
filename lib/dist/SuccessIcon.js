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

exports.default = function () {
    return _react2.default.createElement(
        'div',
        { style: (0, _objectAssign2.default)({}, _SweetAlertStyles2.default.icon, _SweetAlertStyles2.default.iconSuccess) },
        _react2.default.createElement('div', { style: (0, _objectAssign2.default)({}, _SweetAlertStyles2.default.iconSuccessBeforeAfter, _SweetAlertStyles2.default.iconSuccessBefore) }),
        _react2.default.createElement('span', { style: (0, _objectAssign2.default)({}, _SweetAlertStyles2.default.iconSuccessLine, _SweetAlertStyles2.default.iconSuccessLineTip) }),
        _react2.default.createElement('span', { style: (0, _objectAssign2.default)({}, _SweetAlertStyles2.default.iconSuccessLine, _SweetAlertStyles2.default.iconSuccessLineLong) }),
        _react2.default.createElement('div', { style: _SweetAlertStyles2.default.iconSuccessPlaceholder }),
        _react2.default.createElement('div', { style: _SweetAlertStyles2.default.iconSuccessFix }),
        _react2.default.createElement('div', { style: (0, _objectAssign2.default)({}, _SweetAlertStyles2.default.iconSuccessBeforeAfter, _SweetAlertStyles2.default.iconSuccessAfter) })
    );
};