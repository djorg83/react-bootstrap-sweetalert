# react-bootstrap-sweetalert

[![NPM version](http://img.shields.io/npm/v/react-bootstrap-sweetalert.svg)](https://www.npmjs.com/package/react-bootstrap-sweetalert)
[![Downloads](https://img.shields.io/npm/dm/react-bootstrap-sweetalert.svg)](https://www.npmjs.com/package/react-bootstrap-sweetalert)
[![David](https://img.shields.io/david/djorg83/react-bootstrap-sweetalert.svg?maxAge=2592000)](https://github.com/djorg83/react-bootstrap-sweetalert)
[![GitHub issues](https://img.shields.io/github/issues/djorg83/react-bootstrap-sweetalert.svg?maxAge=2592000)](https://github.com/djorg83/react-bootstrap-sweetalert)
[![license](https://img.shields.io/github/license/djorg83/react-bootstrap-sweetalert.svg?maxAge=2592000)](https://github.com/djorg83/react-bootstrap-sweetalert)
[![GitHub stars](https://img.shields.io/github/stars/djorg83/react-bootstrap-sweetalert.svg?style=social&label=Star&maxAge=2592000)](https://github.com/djorg83/react-bootstrap-sweetalert)

[![NPM](https://nodei.co/npm/react-bootstrap-sweetalert.png?downloads=true&stars=true)](https://nodei.co/npm/react-bootstrap-sweetalert/)

# SweetAlert for React/Bootstrap

An awesome replacement for JavaScript's alert.

----

## Demo & Examples

[See the demo site here, with basic examples, and a sandbox for testing your own!](http://djorg83.github.io/react-bootstrap-sweetalert/)

----

## Getting Started

```bash
# with npm
npm i react-bootstrap-sweetalert

# with yarn
yarn add react-bootstrap-sweetalert
```

```javascript
const SweetAlert = require('react-bootstrap-sweetalert');

// or 

import SweetAlert from 'react-bootstrap-sweetalert';
```

----

## Recommended Usage

It is recommended that you keep an alert in your state, and remove it when the `onConfirm` or `onCancel` callbacks are invoked.

You can have stackable alerts by keeping an array of alerts in your data store, and always providing the first alert in
the array as the visible alert.  When an alert is closed, remove it from the store.

See [`examples/redux`](https://github.com/djorg83/react-bootstrap-sweetalert/tree/master/examples/redux) for a working example of how to implement stackable alerts with a Redux store.

----

## Tip: Receiving an input value

If you're using `input` type, the value of the input will be sent to the `onConfirm` callback as the first argument.

``` js
onConfirm={(response) => this.onRecieveInput(response)}
```

## Changes in version 5.1

* Fixed deprecation warning from componentWillMount, componentWillUpdate and componentWillReceiveProps
* Fixed Sweetalert input validation message overflowing container.
* Added `props.focusCancelBtn` that focuses on the cancel button by default.
* Added `props.reverseButtons` that reverses the cancel and confirm button order.
* Added `props.customButtons` that overrides the buttons in the alert.
* Added support for custom show and hide animations with `props.openAnim` and `props.closeAnim`.

For more see [CHANGE_LOG.md](https://github.com/djorg83/react-bootstrap-sweetalert/blob/master/CHANGE_LOG.md)

## Props

- [title](#propstitle) (required)
- [type](#propstype)
- [onConfirm](#propsonconfirm) (required)
- [onCancel](#propsoncancel)
- [customIcon](#propscustomicon)
- [allowEscape](#propsallowescape)
- [closeOnClickOutside](#propscloseonclickoutside)
- [hideOverlay](#propshideoverlay)
- [timeout](#propstimeout)
- [show](#propsshow)

##### Buttons

- [btnSize](#propsbtnsize)
- [confirmBtnText](#propsconfirmbtntext)
- [confirmBtnBsStyle](#propsconfirmbtnbsstyle)
- [confirmBtnCssClass](#propsconfirmbtncssclass)
- [confirmBtnStyle](#propsconfirmbtnstyle)
- [cancelBtnText](#propscancelbtntext)
- [cancelBtnBsStyle](#propscancelbtnbsstyle)
- [cancelBtnCssClass](#propscancelbtncssclass)
- [cancelBtnStyle](#propscancelbtnstyle)
- [showCloseButton](#propsshowclosebutton)
- [reverseButtons](#propsreversebuttons)
- [customButtons](#propscustombuttons)
- [focusConfirmBtn](#propsfocusconfirmbtn)
- [focusCancelBtn](#propsfocuscancelbtn)
- [closeBtnStyle](#propsclosebtnstyle)
- [showConfirm](#propsshowconfirm)
- [showCancel](#propsshowcancel)
- [disabled](#propsdisabled)

##### Input

- [placeholder](#propsplaceholder)
- [required](#propsrequired)
- [validationMsg](#propsvalidationmsg)
- [validationRegex](#propsvalidationregex)
- [defaultValue](#propsdefaultvalue)
- [inputType](#propsinputtype)

##### Hooks

- [beforeMount](#propsbeforemount)
- [afterMount](#propsaftermount)
- [afterUpdate](#propsafterupdate)
- [beforeUnmount](#propsbeforeunmount)

##### Styling

- [style](#propsstyle)
- [customClass](#propscustomclass)

##### Animations

- [openAnim](#propsopenanim)
- [closeAnim](#propscloseanim)

----

### `props.title`
The text to display for the title. JSX/ReactNode allowed.
- `PropTypes.oneOfType([PropTypes.node, PropTypes.string])`
- Default: `undefined`
----
### `props.onConfirm`
Invoked when user clicks confirm button. Also invoked if user hits ENTER key.
- `PropTypes.func`
- Default: `undefined`
----
### `props.onCancel`
Invoked when user clicks cancel button. Also invoked if allowEscape is true and user hits ESCAPE key.
- `PropTypes.func`
- Default: `undefined`
----
### `props.type`
The type of alert to display. 
- `PropTypes.string`
- Default: `'default'`
- Allowed values: `'default'`, `'info'`, `'success'`, `'warning'`, `'danger'`, `'error'`, `'input'`, `'custom'`
----
### `props.btnSize`
The type of alert to display. 
- `PropTypes.string`
- Default: `'lg'`
- Allowed values: `'lg'`, `'sm'`, `'xs'`
----
### `props.confirmBtnText`
Content of confirm button, or JSX/ReactNode.
- `PropTypes.oneOfType([PropTypes.node, PropTypes.string])`
- Default: `'OK'`
----
### `props.confirmBtnBsStyle`
Bootstrap style of confirm button.
- `PropTypes.string`
- Default: `'primary'`
- Recommended values: `'default'`, `'primary'`, `'link'`, `'info'`, `'success'`, `'warning'`, `'danger'`, `'secondary'`, `'outline-{variant}'`
----
### `props.confirmBtnCssClass`
CSS class added to confirm button.
- `PropTypes.string`
- Default: `''`
----
### `props.confirmBtnStyle`
Inline style added to confirm button.
- `PropTypes.object`
- Default: `{}`
----
### `props.cancelBtnText`
Content of cancel button, or JSX/ReactNode.
- `PropTypes.oneOfType([PropTypes.node, PropTypes.string])`
- Default: `'Cancel'`
----
### `props.cancelBtnBsStyle`
Text of cancel button, or JSX/ReactNode.
- `PropTypes.string`
- Default: `'link'`
- Recommended values: `'default'`, `'primary'`, `'link'`, `'info'`, `'success'`, `'warning'`, `'danger'`, `'secondary'`, `'outline-{variant}'`
----
### `props.cancelBtnCssClass`
CSS class added to cancel button.
- `PropTypes.string`
- Default: `''`
----
### `props.cancelBtnStyle`
Inline style added to cancel button.
- `PropTypes.object`
- Default: `{}`
----
### `props.showCloseButton`
If set to true, then an X close button will be shown in the top right of the alert.
- `PropTypes.bool`
- Default: `false`
----
### `props.reverseButtons`
Reverses the order of the Confirm and Cancel buttons. Default positioning is [Cancel] [Confirm]
- `PropTypes.bool`
- Default: `false`
----
### `props.customButtons`
Custom buttons to use in place of the default Confirm and Cancel buttons. Can render any JSX/ReactNodes here.
- `PropTypes.node`
- Default: `undefined`
----
### `props.customIcon`
Either a string url for an image to use as the icon, or JSX/ReactNode.
- `PropTypes.oneOfType([PropTypes.node, PropTypes.string])`
- Default: `undefined`
----
### `props.placeholder`
If `props.type` is `'input'`, this is the placeholder for the input field.
- `PropTypes.string`
- Default: `undefined`
----
### `props.show`
If false, the alert will not be rendered.
Warning: Using this option should be a last resort, and is somewhat of an anti-pattern for this library.
The recommended way to control visibility is to only render a `<SweetAlert/>` element when you want one to be displayed,
and remove it when the `onConfirm` or `onCancel` methods are called.
- `PropTypes.bool`
- Default: `true`
----
### `props.focusConfirmBtn`
If true the Confirm button will receive focus automatically.  NOTE: Does not apply when `props.type` is `'input'`
- `PropTypes.bool`
- Default: `true`
----
### `props.focusCancelBtn`
If true the Cancel button will receive focus automatically.  NOTE: Does not apply when `props.type` is `'input'`
- `PropTypes.bool`
- Default: `false`
----
### `props.required`
If `props.type` is `'input'`, this prop controls whether the input field is required to have a value.
- `PropTypes.bool`
- Default: `true`
----
### `props.validationMsg`
If `props.type` is `'input'` and `props.required` is `true`, this is the message to display when the user clicks confirm without entering a value.
- `PropTypes.string`
- Default: `'Please enter a response!'`
----
### `props.validationRegex`
If `props.type` is `'input'` and `props.required` is `true`, this Regex is used to validate input value.
- `PropTypes.object`
- Default: `/^.+$/`
----
### `props.defaultValue`
If `props.type` is `'input'`, this is the default value for the input field.
- `PropTypes.oneOfType([PropTypes.number, PropTypes.string])`
- Default: `undefined`
----
### `props.inputType`
If `props.type` is `'input'`, this is the default value for the input field.
- `PropTypes.string`
- Default: `'text'`
- Recommended values: `'text'`, `'password'`, `'number'`, `'textarea'`
----
### `props.style`
Style overrides applied to the sweetalert wrapper.
- `PropTypes.object`
- Default: `{}`
----
### `props.closeBtnStyle`
Style overrides applied to the X close button.
- `PropTypes.object`
- Default: `{}`
----
### `props.customClass`
Custom CSS class applied to the sweetalert wrapper.
- `PropTypes.string`
- Default: `''`
----
### `props.showConfirm`
If `true`, the Confirm button will show.
- `PropTypes.bool`
- Default: `true`
----
### `props.showCancel`
If `true`, the Cancel button will show.
- `PropTypes.bool`
- Default: `false`
----
### `props.allowEscape`
If `true`, the `onCancel` function will be invoked when the user hits the `ESCAPE` key.
- `PropTypes.bool`
- Default: `true`
----
### `props.closeOnClickOutside`
If `true`, the `onCancel` function will be invoked when clicking outside the modal.
- `PropTypes.bool`
- Default: `true`
----
### `props.hideOverlay`
If `true`, then the modal overlay will not be rendered.
- `PropTypes.bool`
- Default: `false`
----
### `props.disabled`
If `true`, then the Confirm button will be disabled. (NOTE: This does not effect the `props.allowEscape` behavior.)
If you set disabled to `true` but do not provide an `onCancel` function, then the `disabled` property will not be honored.
- `PropTypes.bool`
- Default: `false`
----
### `props.beforeMount`
Hook which is invoked at the end of the component `constructor` function.
- `PropTypes.func`
- Default: `() => {}`
----
### `props.afterMount`
Hook which is invoked at the end of the `componentDidMount` method.
- `PropTypes.func`
- Default: `() => {}`
----
### `props.afterUpdate`
Hook which is invoked at the end of the `componentDidUpdate` method.
- `PropTypes.func`
- Default: `() => {}`
----
### `props.beforeUnmount`
Hook which is invoked at the end of the `componentWillUnmount` method.
- `PropTypes.func`
- Default: `() => {}`
----
### `props.timeout`
If defined, and greater than `0`, `props.onConfirm` will be invoked to close the alert automatically after the specified number of milliseconds.
- `PropTypes.number`
- Default: `0`
----
### `props.openAnim`
Provide custom show animation or false to have no animation. To specify a custom animation, provide the name of your css animation and duration of the animation in milliseconds.
- `PropTypes.oneOfType([PropTypes.bool, PropTypes.object])`
- Default: `{ name: 'showSweetAlert', duration: 300 }`
----
### `props.closeAnim`
Provide custom hide animation or false to have no animation. To specify a custom animation, provide the name of your css animation and duration of the animation in milliseconds. For a simple hide animation you can use `{ name: 'hideSweetAlert', duration: 100 }`
- `PropTypes.oneOfType([PropTypes.bool, PropTypes.object])`
- Default: `false`

## Related projects

* [SweetAlert](https://github.com/t4t5/sweetalert)
* [SweetAlert for Android](https://github.com/pedant/sweet-alert-dialog)
* [SweetAlert for Bootstrap](https://github.com/lipis/bootstrap-sweetalert)
* [SweetAlert for AngularJS](https://github.com/oitozero/ngSweetAlert)
* [SweetAlert for RubyOnRails](https://github.com/sharshenov/sweetalert-rails)

## Development

``` bash
yarn demo && open http://localhost:3000
```
