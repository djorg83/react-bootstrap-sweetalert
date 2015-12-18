# react-bootstrap-sweetalert

SweetAlert for React/Boostrap
==========

An awesome replacement for JavaScript's alert.

Demo
----

[See the demo site here!](http://djorg.info/react-bootstrap-sweet-alert-demo/)

Usage
-----

**Be sure to include lib/css/animations.css in your app.**

You can install SweetAlert through npm:

```bash
npm install react-bootstrap-sweetalert
```

```javascript
var SweetAlert = require('react-bootstrap-sweetalert');
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

Related projects
----------------

* [SweetAlert](https://github.com/t4t5/sweetalert)
* [SweetAlert for Android](https://github.com/pedant/sweet-alert-dialog)
* [SweetAlert for Bootstrap](https://github.com/lipis/bootstrap-sweetalert)
* [SweetAlert for AngularJS](https://github.com/oitozero/ngSweetAlert)
* [SweetAlert for RubyOnRails](https://github.com/sharshenov/sweetalert-rails)
