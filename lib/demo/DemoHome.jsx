import React from 'react';
import SweetAlert from '../dist/SweetAlert';
import reactTools from 'react-tools';
import { Button, Row, Col, Alert } from 'react-bootstrap';

window.React = React;
window.SweetAlert = SweetAlert;

const examples = [{
	title: 'A basic message'
}, {
	title: 'A title with text under'
}, {
	title: 'A success message!'
}, {
	title: 'A warning message, with Cancel and Confirm callbacks'
}, {
	title: 'A message with a custom icon'
}, {
	title: 'An HTML message'
}, {
	title: 'A replacement for the "prompt" function'
}, {
	title: 'Password Prompt'
}, {
	title: 'Custom style'
}];

var DemoHome = React.createClass({

	getInitialState: function() {
		return {
			alert: null,
			textareaValue: '<SweetAlert \n\t success \n\t title="Woot!" \n\t onConfirm={this.hideAlert} \n> \n \tI did it! \n </SweetAlert>'
		};
	},

	renderHeader: function() {
		return (
			<div className="jumbotron">
				<h1>SweetAlert for React/Bootstrap</h1>
				<p>{'A beautiful replacement for JavaScript\'s "alert"'}</p>
				<p className="small">
					<span>This is just a rewrite for React/Bootstrap of the original </span>
					<a href="http://tristanedwards.me/sweetalert" target="_blank">SweetAlert</a>.
				</p>
				<p>
					<a className="btn btn-outline btn-lg" href="https://github.com/djorg83/react-bootstrap-sweetalert">
						<span className="fa fa-github"></span> View on GitHub
					</a>
				</p>
				<iframe src="http://ghbtns.com/github-btn.html?user=djorg83&amp;repo=react-bootstrap-sweetalert&amp;type=watch&amp;count=true" className="social-share"></iframe>
			</div>
		);
	},

	buttonExample: function(type) {
		switch (type) {
			case 'custom':
				this.setState({
					alert: (
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
					)
				});
				break;
			case 'input':
				this.setState({
					alert: (
						<SweetAlert
							input
							showCancel
							cancelBtnBsStyle="default"
							title="An input!"
							placeholder="Write something"
							onConfirm={this.onRecieveInput}
							onCancel={this.hideAlert}
						>
							Write something interesting:
						</SweetAlert>
					)
				});
				break;
			default:
				this.setState({
				alert: (
						<SweetAlert
							showCancel
							confirmBtnText="Continue"
							confirmBtnBsStyle={type}
							type={type}
							title="Are you sure?"
							onCancel={this.hideAlert}
							onConfirm={this.hideAlert}
						>
							You will not be able to recover this imaginary file!
						</SweetAlert>
					)
				});
				break;
		}
	},

	hideAlert: function() {
		this.setState({
			alert: null
		});
	},

	onConfirm: function() {
		this.setState({
			alert: null
		});
	},

	onCancel: function() {
		this.setState({
			alert: null
		});
	},

	deleteFile: function() {
		this.setState({
			alert: (
				<SweetAlert success title="Deleted!" onConfirm={this.hideAlert}>
					Your imaginary file has been deleted.
				</SweetAlert>
			)
		});
	},

	cancelDelete: function() {
		this.setState({
			alert: (
				<SweetAlert danger title="Cancelled" onConfirm={this.hideAlert}>
					Your imaginary file is safe :)
				</SweetAlert>
			)
		});
	},

	onRecieveInput: function(value) {
		this.setState({
			alert: (
				<SweetAlert success title="Nice!" onConfirm={this.hideAlert}>
					You wrote: {value}
				</SweetAlert>
			)
		});		
	},

	runExample: function(i) {
		switch (i) {
			case 0:
				this.setState({
					alert: (
						<SweetAlert title="Here's a message!" onConfirm={this.hideAlert} />						
					)
				});
				break;
			case 1:
				this.setState({
					alert: (
						<SweetAlert title="Here's a message!" onConfirm={this.hideAlert}>
							It's pretty, isn't it?
						</SweetAlert>
					)
				});
				break;
			case 2:
				this.setState({
					alert: (
						<SweetAlert success title="Good job!" onConfirm={this.hideAlert}>
							You clicked the button!
						</SweetAlert>
					)
				});
				break;
			case 3:
				this.setState({
					alert: (
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
					)
				});
				break;
			case 4:
				this.setState({
					alert: (
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
					)
				});
				break;
			case 5:
				this.setState({
					alert: (
						<SweetAlert 
							title={<span>HTML <small>Title</small>!</span>} 
							onConfirm={this.hideAlert}
						>
							<span>A custom <span style={{color:'#F8BB86'}}>html</span> message.</span>
						</SweetAlert>
					)
				});
				break;
			case 6:
				this.setState({
					alert: (
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
					)
				});
				break;
			case 7:
				this.setState({
					alert: (
						<SweetAlert
							input
							inputType="password"
							title="Enter Password"
							required
					        validationMsg="You must enter your password!"
							onConfirm={this.hideAlert}
						/>
					)
				});
				break;
			case 8:
				this.setState({
					alert: (
						<SweetAlert style={{backgroundColor:'blue'}} title="Yay!" onConfirm={this.hideAlert}>
							Its blue!
						</SweetAlert>
					)
				});
				break;
		}
	},

	renderCodeSnippet: function(i) {
		var indent = {marginLeft:30};
		switch (i) {
			case 0:
				return (
					<pre>
						&lt;SweetAlert title="Here's a message!" onConfirm=&#123;this.onConfirm&#125; /&gt;
					</pre>
				);
			case 1:
				return (
					<pre>
						&lt;SweetAlert title="Here's a message!" onConfirm=&#123;this.onConfirm&#125;&gt;<br/>
						<span style={indent}>It's pretty, isn't it?</span><br/>
						&lt;/SweetAlert&gt;
					</pre>
				);
			case 2:
				return (
					<pre>
						&lt;SweetAlert success title="Good job!" onConfirm=&#123;this.onConfirm&#125;&gt;<br/>
						<span style={indent}>You clicked the button!</span><br/>
						&lt;/SweetAlert&gt;
					</pre>
				);
			case 3:
				return (
					<pre>
						&lt;SweetAlert
						<br/>
						<span style={indent}>warning</span><br/>
						<span style={indent}>showCancel</span><br/>
						<span style={indent}>confirmBtnText="Yes, delete it!"</span><br/>
						<span style={indent}>confirmBtnBsStyle="danger"</span><br/>
						<span style={indent}>cancelBtnBsStyle="default"</span><br/>
						<span style={indent}>title="Are you sure?"</span><br/>
						<span style={indent}>onConfirm=&#123;this.deleteFile&#125;</span><br/>
						<span style={indent}>onCancel=&#123;this.onCancelDelete&#125;</span><br/>
						&gt;<br/>
						<span style={indent}>You will not be able to recover this imaginary file!</span><br/>
						&lt;/SweetAlert&gt;
					</pre>
				);
			case 4:
				return (
					<pre>
						&lt;SweetAlert
						<br/>
						<span style={indent}>custom</span><br/>
						<span style={indent}>showCancel</span><br/>
						<span style={indent}>confirmBtnText="Yes"</span><br/>
						<span style={indent}>cancelBtnText="No"</span><br/>
						<span style={indent}>confirmBtnBsStyle="primary"</span><br/>
						<span style={indent}>cancelBtnBsStyle="default"</span><br/>
						<span style={indent}>customIcon="thumbs-up.jpg"</span><br/>
						<span style={indent}>title="Do you like thumbs?"</span><br/>
						<span style={indent}>onConfirm=&#123;this.onConfirm&#125;</span><br/>
						<span style={indent}>onCancel=&#123;this.onCancel&#125;</span><br/>
						&gt;<br/>
						<span style={indent}>You will find they are up!</span><br/>
						&lt;/SweetAlert&gt;
					</pre>
				);
			case 5:
				return (
					<pre>
						&lt;SweetAlert
						<br/>
						<span style={indent}>title=&#123;&lt;span&gt;HTML &lt;small&gt;Title&lt;/small&gt;!&lt;/span&gt;&#125;</span><br/>
						<span style={indent}>onConfirm=&#123;this.onConfirm&#125;</span><br/>
						&gt;<br/>
						<span style={indent}>&lt;span&gt;A custom &lt;span style=&#123;&#123;color:'#F8BB86'&#125;&#125;&gt;html&lt;/span&gt; message.&lt;/span&gt;</span><br/>
						&lt;/SweetAlert&gt;
					</pre>
				);
			case 6:
				return (
					<pre>
						&lt;SweetAlert
						<br/>
						<span style={indent}>input</span><br/>
						<span style={indent}>showCancel</span><br/>
						<span style={indent}>cancelBtnBsStyle="default"</span><br/>
						<span style={indent}>title="An input!"</span><br/>
						<span style={indent}>placeHolder="Write something"</span><br/>
						<span style={indent}>onConfirm=&#123;this.onRecieveInput&#125;</span><br/>
						<span style={indent}>onCancel=&#123;this.onCancel&#125;</span><br/>
						&gt;<br/>
						<span style={indent}>Write something interesting:</span><br/>
						&lt;/SweetAlert&gt;
					</pre>
				);
			case 7:
				return (
					<pre>
						&lt;SweetAlert
						<br/>
						<span style={indent}>input</span><br/>
						<span style={indent}>required</span><br/>
						<span style={indent}>inputType="password"</span><br/>
						<span style={indent}>title="Enter Password"</span><br/>
				        <span style={indent}>validationMsg="You must enter your password!"</span><br/>
						<span style={indent}>onConfirm=&#123;this.onConfirm&#125;</span><br/>
						/&gt;
					</pre>
				);
			case 8:
				return (
					<pre>
						&lt;SweetAlert
						<br/>
						<span style={indent}>title="Yay!"</span><br/>
						<span style={indent}>style=&#123;&#123;backgroundColor:'blue'&#125;&#125;</span><br/>
						<span style={indent}>onConfirm=&#123;this.onConfirm&#125;</span><br/>
						&gt;<br/>
						<span style={indent}>It's blue!</span><br/>
						&lt;/SweetAlert&gt;
					</pre>
				);
		}
	},

	renderExample: function(example, i) {
		return (
			<div key={'example-' + i}>
				<h4>{example.title}</h4>
				<Row>
					<Col sm={2} className="text-center">
						<p>
							<Button 
								bsStyle="primary" 
								onClick={this.runExample.bind(null, i)}>
								Try It
							</Button>
						</p>
					</Col>
					<Col sm={10}>
						{this.renderCodeSnippet(i)}
					</Col>
				</Row>
			</div>
		);
	},

	runInputExample: function() {

		try {
			var input = this.refs.jsxInput.value;
			console.log(input);
			var code = reactTools.transform(input);
			this.setState({
				alert: eval(code)
			});
		} catch (e) {
			console.log(e);
			var hideAlert = this.hideAlert;
			this.setState({
				alert: (
					<SweetAlert
						type="danger"
						title="Whoops!"
						onConfirm={hideAlert}
					>
						That didn't work.
					</SweetAlert>
				)
			});
		}

	},

	render: function() {
		return (
			<div>
				{this.renderHeader()}

				<div className="container">

					<h2>Install via npm</h2>

					<pre className="text-center lead">$ npm install react-bootstrap-sweetalert</pre>

					<hr
						style={{
							marginTop: 50,
						    marginBottom: 50,
						    borderTopColor: '#BBBBBB'
						}}
					/>

					<h1>Sandbox</h1>

					<Alert bsStyle="info">Modify the code below to make a SweetAlert. Be sure to use &#123;this.hideAlert&#125; for onConfirm and onCancel.</Alert>

					<div>
						<Row>
							<Col sm={2} className="text-center">
								<p>
									<Button 
										bsStyle="primary"
										onClick={this.runInputExample}>
										Run it!
									</Button>
								</p>
							</Col>
							<Col sm={10}>
								<textarea
									spellCheck="false"
									ref="jsxInput"
									defaultValue={this.state.textareaValue}
									style={{
										height: 300, 
										width: '100%',
										display: 'block',
									    padding: 9.5,
									    margin: '0 0 10px',
									    fontSize: 15,
									    lineHeight: '1.6',
									    color: '#B7EC80',
									    wordBreak: 'break-all',
									    wordWrap: 'normal',
									    backgroundColor: '#424140',
									    border: '1px solid #ccc',
									    borderRadius: 4,
	    								overflow: 'auto',
	    								whiteSpace: 'pre',
	    								resize: 'none'
									}}
								></textarea>
							</Col>
						</Row>
					</div>

					<hr
						style={{
							marginTop: 50,
						    marginBottom: 50,
						    borderTopColor: '#BBBBBB'
						}}
					/>

					<h2>Examples</h2>

					<h4>Different types</h4>
					
					<Row>
						<Col sm={12} className="text-center">
							<Button 
								style={{marginRight:8}} 
								bsStyle="primary"
								onClick={this.buttonExample.bind(null, 'primary')}>
								Primary
							</Button>
							<Button 
								style={{marginRight:8}} 
								bsStyle="info"
								onClick={this.buttonExample.bind(null, 'info')}>
								Info
							</Button>
							<Button 
								style={{marginRight:8}} 
								bsStyle="success"
								onClick={this.buttonExample.bind(null, 'success')}>
								Success
							</Button>
							<Button 
								style={{marginRight:8}} 
								bsStyle="warning"
								onClick={this.buttonExample.bind(null, 'warning')}>
								Warning
							</Button>
							<Button 
								style={{marginRight:8}} 
								bsStyle="danger"
								onClick={this.buttonExample.bind(null, 'danger')}>
								Danger
							</Button>
							<Button 
								style={{marginRight:8}} 
								bsStyle="default"
								onClick={this.buttonExample.bind(null, 'custom')}>
								Custom
							</Button>
							<Button 
								style={{marginRight:8}} 
								bsStyle="default"
								onClick={this.buttonExample.bind(null, 'input')}>
								Input
							</Button>
						</Col>
					</Row>

					{examples.map(this.renderExample)}

				</div>
    
			    <footer>
			      <ul className="links">
			        <li><a href="http://github.com/djorg83"><i className="fa fa-github"></i> GitHub</a></li>
			      </ul>
			    </footer>

			    {this.state.alert}
			</div>
		);
	}
});

module.exports = DemoHome;
