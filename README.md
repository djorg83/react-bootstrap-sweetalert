# react-bootstrap-sweetalert

[![NPM version](http://img.shields.io/npm/v/react-bootstrap-sweetalert.svg)](https://www.npmjs.com/package/react-bootstrap-sweetalert)
[![Downloads](https://img.shields.io/npm/dm/react-bootstrap-sweetalert.svg)](https://www.npmjs.com/package/react-bootstrap-sweetalert)

[![NPM](https://nodei.co/npm/react-bootstrap-sweetalert.png?downloads=true&stars=true)](https://nodei.co/npm/react-bootstrap-sweetalert/)

SweetAlert for React/Bootstrap
==========

An awesome replacement for JavaScript's alert.

Demo
----

[See the demo site here, with basic examples, and a sandbox for testing your own!](http://djorg.info/react-bootstrap-sweet-alert-demo/)

Usage
-----

You can install SweetAlert through npm:

```bash
npm install react-bootstrap-sweetalert
```

```javascript
var SweetAlert = require('react-bootstrap-sweetalert');
```

```javascript
Be sure to include lib/css/animations.css in your app.
```


Examples
--------

The most basic message:

```javascript
<SweetAlert 
	title="Here's a message!" 
	onConfirm={this.hideAlert} />
```

A title with text under:

```javascript
<SweetAlert 
	title="Here's a message!" 
	content="It's pretty, isn't it?"
	onConfirm={this.hideAlert} />
```

A success message!:

```javascript
<SweetAlert 
	type="success"
	title="Good job!" 
	content="You clicked the button!"
	onConfirm={this.hideAlert} />
```

A warning message, with Cancel and Confirm callbacks:

```javascript
<SweetAlert 
	showCancel
	confirmBtnText="Yes, delete it!"
	confirmBtnBsStyle="danger"
	cancelBtnBsStyle="default"
	type="warning"
	title="Are you sure?" 
	content="You will not be able to recover this imaginary file!"
	onConfirm={this.deleteFile}
	onCancel={this.cancelDelete} />
```

A message with a custom icon:

```javascript
<SweetAlert 
	showCancel
	confirmBtnText="Yes"
	cancelBtnText="No"
	confirmBtnBsStyle="primary"
	cancelBtnBsStyle="default"
	type="custom"
	customIcon="thumbs-up.jpg"
	title="Do you like thumbs?" 
	content="You will find they are up!"
	onConfirm={this.hideAlert}
	onCancel={this.hideAlert} />
```

An HTML message:

```javascript
<SweetAlert 
	title={<span>HTML <small>Title</small>!</span>} 
	content={<span>A custom <span style={{color:'#F8BB86'}}>html</span> message.</span>}
	onConfirm={this.hideAlert} />
```

A replacement for the "prompt" function:

```javascript
<SweetAlert 
	showCancel
	cancelBtnBsStyle="default"
	type="input"
	title="An input!" 
	content="Write something interesting:"
	inputPlaceHolder="Write something"
	onConfirm={this.onRecieveInput}
	onCancel={this.hideAlert} />
```

Configuration
-------------

| Property               | Required?    | Prop Type    | Default Value              | Description |
| :--------------------- | :----------- | :----------- | :------------------------- | :---------- |
| type                   | no           | string       | 'default'                  | The type of alert to display. Allowed values: 'default', 'info', 'success', 'warning', 'danger', 'error', 'input', 'custom' |
| title                  | yes          | string, node | undefined                  | The text to display for the title. JSX/ReactNode allowed. |
| content                | no           | string, node | undefined                  | The text to display for the content section. JSX/ReactNode allowed. |
| onCancel               | no           | func         | undefined                  | Invoked when user clicks cancel button. Also invoked if allowEscape is true and user hits ESCAPE key. |
| onConfirm              | yes          | func         | undefined                  | Invoked when user clicks confirm button. Also invoked if user hits ENTER key. |
| confirmBtnText         | no           | string       | 'OK'                       | Text of confirm button. |
| cancelBtnText          | no           | string       | 'Cancel'                   | Text of cancel button. |
| cancelBtnBsStyle       | no           | string       | 'link'                     | Bootstrap style of cancel button. Allowed values: 'default', 'primary', 'link', 'info', 'success', 'warning', 'danger' |
| confirmBtnBsStyle      | no           | string       | 'primary'                  | Bootstrap style of confirm button. Allowed values: 'default', 'primary', 'link', 'info', 'success', 'warning', 'danger' |
| customIcon             | no           | string, node | undefined                  | Either a string url for an image to use as the icon, or JSX/ReactNode. |
| inputPlaceHolder       | no           | string       | undefined                  | Deprecated, use placeholder. |
| placeholder            | no           | string       | undefined                  | If type is input, this is the placeholder for the input field. |
| required               | no           | bool         | true                       | If true, requires the input field to have a value. |
| inputValidationMsg     | no           | string       | 'Please enter a response!' | Deprecated, use validationMsg |
| validationMsg          | no           | string       | 'Please enter a response!' | If type is input, this is the message to diplay when the user clicks confirm without entering a value. |
| defaultValue           | no           | string       | undefined                  | If type is input, this is the default value for the input field. |
| inputType              | no           | string       | 'text'                     | If type is input, this is the input type (text, textarea, password, number, etc...) |
| style                  | no           | object       | undefined                  | Style overrides applied to the sweetalert wrapper. |
| customClass            | no           | string       | undefined                  | Custom CSS class applied to the sweetalert wrapper. |
| showCancel             | no           | bool         | false                      | If true, the cancel button will show. |
| allowEscape            | no           | bool         | true                       | If true, the onCancel function will be invoked when the user hits the ESCAPE key. |
| hideOverlay            | no           | bool         | false                      | If true, then the modal overlay will not be rendered. |

Related projects
----------------

* [SweetAlert](https://github.com/t4t5/sweetalert)
* [SweetAlert for Android](https://github.com/pedant/sweet-alert-dialog)
* [SweetAlert for Bootstrap](https://github.com/lipis/bootstrap-sweetalert)
* [SweetAlert for AngularJS](https://github.com/oitozero/ngSweetAlert)
* [SweetAlert for RubyOnRails](https://github.com/sharshenov/sweetalert-rails)
