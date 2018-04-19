# react-bootstrap-sweetalert

[![NPM version](http://img.shields.io/npm/v/react-bootstrap-sweetalert.svg)](https://www.npmjs.com/package/react-bootstrap-sweetalert)
[![Downloads](https://img.shields.io/npm/dm/react-bootstrap-sweetalert.svg)](https://www.npmjs.com/package/react-bootstrap-sweetalert)
[![David](https://img.shields.io/david/djorg83/react-bootstrap-sweetalert.svg?maxAge=2592000)](https://github.com/djorg83/react-bootstrap-sweetalert)
[![GitHub issues](https://img.shields.io/github/issues/djorg83/react-bootstrap-sweetalert.svg?maxAge=2592000)](https://github.com/djorg83/react-bootstrap-sweetalert)
[![license](https://img.shields.io/github/license/djorg83/react-bootstrap-sweetalert.svg?maxAge=2592000)](https://github.com/djorg83/react-bootstrap-sweetalert)
[![GitHub stars](https://img.shields.io/github/stars/djorg83/react-bootstrap-sweetalert.svg?style=social&label=Star&maxAge=2592000)](https://github.com/djorg83/react-bootstrap-sweetalert)

[![NPM](https://nodei.co/npm/react-bootstrap-sweetalert.png?downloads=true&stars=true)](https://nodei.co/npm/react-bootstrap-sweetalert/)

SweetAlert for React/Bootstrap
==========

An awesome replacement for JavaScript's alert.

Demo
----

[See the demo site here, with basic examples, and a sandbox for testing your own!](http://djorg83.github.io/react-bootstrap-sweetalert/)

Usage
-----

You can install SweetAlert through npm:

```bash
# with npm
npm install --save react-bootstrap-sweetalert

# with yarn
yarn add react-bootstrap-sweetalert
```

```javascript
const SweetAlert = require('react-bootstrap-sweetalert');
```

Changes in version 4.4
-----

* Added `props.validationRegex` for validating input. default: `/^.+$/`

Changes in version 4.3
-----

* Added `props.timeout` which calls onConfirm to close the alert automatically after a certain number of milliseconds. default: `0`

Changes in version 4.2
-----

* Fixed auto-focus on confirm button
* Removed outline css from alert
* Updated examples to not show deprecated params
* Added `props.focusConfirmBtn` to control whether you want to focus on the button automatically. default: `true`

Changes in version 4.1
-----

* Added `props.closeOnClickOutside` to trigger onClose when clicking outside. default=true
* Added `props.btnSize` to allow custom button size
* Added `props.confirmBtnCssClass` to allow custom class on confirm button
* Added `props.cancelBtnCssClass` to allow custom class on cancel button
* Added `props.confirmBtnStyle` to allow custom inline style on confirm button
* Added `props.cancelBtnStyle` to allow custom inline style on cancel button

Changes in version 4.0
-----

* Added `prop-types` as peer dependency
* Added `props.showConfirm` to allow hiding the confirm button
* Added `props.show` to allow hiding the confirm button

Examples
--------

The most basic message:

```javascript
<SweetAlert title="Here's a message!" onConfirm={this.hideAlert} />
```

A title with text under:

```javascript
<SweetAlert title="Here's a message!" onConfirm={this.hideAlert}>
	It's pretty, isn't it?
</SweetAlert>
```

A success message!:

```javascript
<SweetAlert success title="Good job!" onConfirm={this.hideAlert}>
	You clicked the button!
</SweetAlert>
```

A warning message, with Cancel and Confirm callbacks:

```javascript
<SweetAlert 
	warning
	showCancel
	confirmBtnText="Yes, delete it!"
	confirmBtnBsStyle="danger"
	cancelBtnBsStyle="default"
	title="Are you sure?"
	onConfirm={this.deleteFile}
	onCancel={this.cancelDelete}
>
	You will not be able to recover this imaginary file!
</SweetAlert>
```

A message with a custom icon:

```javascript
<SweetAlert
	custom
	showCancel
	confirmBtnText="Yes"
	cancelBtnText="No"
	confirmBtnBsStyle="primary"
	cancelBtnBsStyle="default"
	customIcon="thumbs-up.jpg"
	title="Do you like thumbs?" 
	onConfirm={this.hideAlert}
	onCancel={this.hideAlert}
>
	You will find they are up!
</SweetAlert>
```

An HTML message:

```javascript
<SweetAlert 
	title={<span>HTML <small>Title</small>!</span>} 
	onConfirm={this.hideAlert}
>
	<span>A custom <span style={{color:'#F8BB86'}}>html</span> message.</span>
</SweetAlert>
```

A replacement for the "prompt" function:

```javascript
<SweetAlert
	input
	showCancel
	cancelBtnBsStyle="default"
	title="An input!"
	placeHolder="Write something"
	onConfirm={this.onRecieveInput}
	onCancel={this.hideAlert}
>
	Write something interesting:
</SweetAlert>
```

Password Prompt:

```javascript
<SweetAlert
	input
	inputType="password"
	title="Enter Password"
	required
    validationMsg="You must enter your password!"
	onConfirm={this.hideAlert}
/>
```

Custom Styles:

```javascript
<SweetAlert style={{backgroundColor:'blue'}} title="Yay!" onConfirm={this.hideAlert}>
	Its blue!
</SweetAlert>
```

Configuration
-------------

| Property               | Required?    | Prop Type    | Default Value              | Description |
| :--------------------- | :----------- | :----------- | :------------------------- | :---------- |
| type                   | no           | string       | 'default'                  | The type of alert to display. Allowed values: 'default', 'info', 'success', 'warning', 'danger', 'error', 'input', 'custom' |
| title                  | yes          | string, node | undefined                  | The text to display for the title. JSX/ReactNode allowed. |
| onCancel               | no           | func         | undefined                  | Invoked when user clicks cancel button. Also invoked if allowEscape is true and user hits ESCAPE key. |
| onConfirm              | yes          | func         | undefined                  | Invoked when user clicks confirm button. Also invoked if user hits ENTER key. |
| btnSize          | no           | string         | 'lg'                       | Allow custom button size. `lg`, `sm`, `xs`. |
| confirmBtnText         | no           | string, node | 'OK'                       | Text of confirm button, or JSX/ReactNode. |
| confirmBtnBsStyle      | no           | string       | 'primary'                  | Bootstrap style of confirm button. Allowed values: 'default', 'primary', 'link', 'info', 'success', 'warning', 'danger' |
| confirmBtnCssClass          | no           | string         | ''                       | CSS class added to confirm button. |
| confirmBtnStyle          | no           | object         | {}                       | Inline style added to confirm button. |
| cancelBtnText          | no           | string, node | 'Cancel'                   | Text of cancel button, or JSX/ReactNode. |
| cancelBtnBsStyle       | no           | string       | 'link'                     | Bootstrap style of cancel button. Allowed values: 'default', 'primary', 'link', 'info', 'success', 'warning', 'danger' |
| cancelBtnCssClass          | no           | string         | ''                       | CSS class added to cancel button. |
| cancelBtnStyle          | no           | object         | {}                       | Inline style added to cancel button. |
| customIcon             | no           | string, node | undefined                  | Either a string url for an image to use as the icon, or JSX/ReactNode. |
| placeholder            | no           | string       | undefined                  | If type is input, this is the placeholder for the input field. |
| show                   | no           | bool         | true                       | If false, the alert will not be rendered. |
| focusConfirmBtn        | no           | bool         | true                       | If true (and type != input) the comfirm button will receive focus automatically. |
| required               | no           | bool         | true                       | If true, requires the input field to have a value. |
| validationMsg          | no           | string       | 'Please enter a response!' | If type is input, this is the message to diplay when the user clicks confirm without entering a value. |
| validationRegex        | no           | object       | `/^.+$/`                   | Used to validate input value. |
| defaultValue           | no           | string       | undefined                  | If type is input, this is the default value for the input field. |
| inputType              | no           | string       | 'text'                     | If type is input, this is the input type (text, textarea, password, number, etc...) |
| style                  | no           | object       | undefined                  | Style overrides applied to the sweetalert wrapper. |
| customClass            | no           | string       | undefined                  | Custom CSS class applied to the sweetalert wrapper. |
| showConfirm            | no           | bool         | true                       | If false, the confirm button will not show. |
| showCancel             | no           | bool         | false                      | If true, the cancel button will show. |
| allowEscape            | no           | bool         | true                       | If true, the onCancel function will be invoked when the user hits the ESCAPE key. |
| closeOnClickOutside    | no           | bool         | true                       | If true, clicking outside the modal will trigger `onCancel`. |
| hideOverlay            | no           | bool         | false                      | If true, then the modal overlay will not be rendered. |
| disabled               | no           | bool         | false                      | If true, then the confirm button will be disabled. (NOTE: This does not effect the allowEscape prop behavior.)|
| beforeMount            | no           | func         | noop                       | Hook which is invoked during componentWillMount. |
| afterMount             | no           | func         | noop                       | Hook which is invoked during componentDidMount. |
| beforeUpdate           | no           | func         | noop                       | Hook which is invoked during componentWillUpdate. |
| afterUpdate            | no           | func         | noop                       | Hook which is invoked during componentDidUpdate. |
| beforeUnmount          | no           | func         | noop                       | Hook which is invoked during componentWillUnmount. |
| timeout                | no           | number       | 0                          | Call props.onConfirm to close the alert automatically after a certain number of milliseconds. |

Related projects
----------------

* [SweetAlert](https://github.com/t4t5/sweetalert)
* [SweetAlert for Android](https://github.com/pedant/sweet-alert-dialog)
* [SweetAlert for Bootstrap](https://github.com/lipis/bootstrap-sweetalert)
* [SweetAlert for AngularJS](https://github.com/oitozero/ngSweetAlert)
* [SweetAlert for RubyOnRails](https://github.com/sharshenov/sweetalert-rails)

Development
--------

``` bash
yarn dev && open http://localhost:3000
```

