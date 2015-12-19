var React = require('react');
var BS = require('react-bootstrap');
var Button = BS.Button;
var Row = BS.Row;
var Col = BS.Col;
var SweetAlert = require('../components/SweetAlert');
var reactTools = require('react-tools');

var examples = [{
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
}];

var DemoHome = React.createClass({

	getInitialState: function() {
		return {
			alert: null,
			textareaValue: '<SweetAlert \n \ttype="success" \n \ttitle="Woot!" \n \tcontent="I did it!" \n \tonConfirm={this.hideAlert} />'
		};
	},

	renderHeader: function() {
		return (
			<div className="jumbotron">
				<h1>SweetAlert for React/Bootstrap</h1>
				<p>A beautiful replacement for JavaScript's "alert"</p>
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
		this.setState({
			alert: (
				<SweetAlert 
					showCancel
					confirmBtnText="Continue"
					confirmBtnBsStyle={type}
					type={type}
					title="Are you sure?" 
					content="You will not be able to recover this imaginary file!"
					onCancel={this.hideAlert}
					onConfirm={this.hideAlert} />
			)
		});
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
				<SweetAlert 
					type="success"
					title="Deleted!" 
					content="Your imaginary file has been deleted."
					onConfirm={this.hideAlert} />
			)
		});
	},

	cancelDelete: function() {
		this.setState({
			alert: (
				<SweetAlert 
					type="danger"
					title="Cancelled" 
					content="Your imaginary file is safe :)"
					onConfirm={this.hideAlert} />
			)
		});
	},

	onRecieveInput: function(value) {
		this.setState({
			alert: (
				<SweetAlert 
					type="success"
					title="Nice!" 
					content={'You wrote: ' + value}
					onConfirm={this.hideAlert} />
			)
		});		
	},

	runExample: function(i) {
		switch (i) {
			case 0:
				this.setState({
					alert: (
						<SweetAlert 
							title="Here's a message!" 
							onConfirm={this.hideAlert} />
					)
				});
				break;
			case 1:
				this.setState({
					alert: (
						<SweetAlert 
							title="Here's a message!" 
							content="It's pretty, isn't it?"
							onConfirm={this.hideAlert} />
					)
				});
				break;
			case 2:
				this.setState({
					alert: (
						<SweetAlert 
							type="success"
							title="Good job!" 
							content="You clicked the button!"
							onConfirm={this.hideAlert} />
					)
				});
				break;
			case 3:
				this.setState({
					alert: (
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
					)
				});
				break;
			case 4:
				this.setState({
					alert: (
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
					)
				});
				break;
			case 5:
				this.setState({
					alert: (
						<SweetAlert 
							title={<span>HTML <small>Title</small>!</span>} 
							content={<span>A custom <span style={{color:'#F8BB86'}}>html</span> message.</span>}
							onConfirm={this.hideAlert} />
					)
				});
				break;
			case 6:
				this.setState({
					alert: (
						<SweetAlert 
							showCancel
							cancelBtnBsStyle="default"
							type="input"
							title="An input!" 
							content="Write something interesting:"
							inputPlaceHolder="Write something"
							onConfirm={this.onRecieveInput}
							onCancel={this.hideAlert} />
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
					<pre>&lt;SweetAlert<br/>
						<span style={indent}>title="Here's a message!"</span><br/>
						<span style={indent}>onConfirm=&#123;this.onConfirm&#125; /&gt;</span>
					</pre>
				);
			case 1:
				return (
					<pre>&lt;SweetAlert<br/>
						<span style={indent}>title="Here's a message!"</span><br/>
						<span style={indent}>content="It's pretty, isn't it?"</span><br/>
						<span style={indent}>onConfirm=&#123;this.onConfirm&#125; /&gt;</span>
					</pre>
				);
			case 2:
				return (
					<pre>&lt;SweetAlert<br/>
						<span style={indent}>type="success"</span><br/>
						<span style={indent}>title="Good job!"</span><br/>
						<span style={indent}>content="You clicked the button!"</span><br/>
						<span style={indent}>onConfirm=&#123;this.onConfirm&#125; /&gt;</span>
					</pre>
				);
			case 3:
				return (
					<pre>&lt;SweetAlert<br/>
						<span style={indent}>showCancel</span><br/>
						<span style={indent}>confirmBtnText="Yes, delete it!"</span><br/>
						<span style={indent}>confirmBtnBsStyle="danger"</span><br/>
						<span style={indent}>cancelBtnBsStyle="default"</span><br/>
						<span style={indent}>type="warning"</span><br/>
						<span style={indent}>title="Are you sure?"</span><br/>
						<span style={indent}>content="You will not be able to recover this imaginary file!"</span><br/>
						<span style={indent}>onConfirm=&#123;this.deleteFile&#125;</span><br/>
						<span style={indent}>onCancel=&#123;this.onCancelDelete&#125; /&gt;</span>
					</pre>
				);
			case 4:
				return (
					<pre>&lt;SweetAlert<br/>
					<span style={indent}>showCancel</span><br/>
						<span style={indent}>confirmBtnText="Yes"</span><br/>
						<span style={indent}>cancelBtnText="No"</span><br/>
						<span style={indent}>confirmBtnBsStyle="primary"</span><br/>
						<span style={indent}>cancelBtnBsStyle="default"</span><br/>
						<span style={indent}>type="custom"</span><br/>
						<span style={indent}>customIcon="thumbs-up.jpg"</span><br/>
						<span style={indent}>title="Do you like thumbs?"</span><br/>
						<span style={indent}>content="You will find they are up!"</span><br/>
						<span style={indent}>onConfirm=&#123;this.onConfirm&#125;</span><br/>
						<span style={indent}>onCancel=&#123;this.onCancel&#125; /&gt;</span>
					</pre>
				);
			case 5:
				return (
					<pre>&lt;SweetAlert<br/>
						<span style={indent}>title=&#123;&lt;span&gt;HTML &lt;small&gt;Title&lt;/small&gt;!&lt;/span&gt;&#125;</span><br/>
						<span style={indent}>content=&#123;&lt;span&gt;A custom &lt;span style=&#123;&#123;color:'#F8BB86'&#125;&#125;&gt;html&lt;/span&gt; message.&lt;/span&gt;&#125;</span><br/>
						<span style={indent}>onConfirm=&#123;this.onConfirm&#125; /&gt;</span>
					</pre>
				);
			case 6:
				return (
					<pre>&lt;SweetAlert<br/>
						<span style={indent}>showCancel</span><br/>
						<span style={indent}>cancelBtnBsStyle="default"</span><br/>
						<span style={indent}>type="input"</span><br/>
						<span style={indent}>title="An input!"</span><br/>
						<span style={indent}>content="Write something interesting:"</span><br/>
						<span style={indent}>inputPlaceHolder="Write something"</span><br/>
						<span style={indent}>onConfirm=&#123;this.onRecieveInput&#125;</span><br/>
						<span style={indent}>onCancel=&#123;this.onCancel&#125; /&gt;</span>
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

	onChangeTextarea: function(e) {
		this.setState({
			textareaValue: e.target.value
		});
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
			var hideAlert = this.hideAlert;
			this.setState({
				alert: (
					<SweetAlert 
						type="danger"
						title="Whoops!" 
						content="That didn't work."
						onConfirm={hideAlert} />
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

					<h1>Try these buttons!</h1>
					
					<div className="examples">
						<Button 
							bsSize="large"
							style={{marginRight:8}} 
							bsStyle="primary"
							onClick={this.buttonExample.bind(null, 'primary')}>
							Primary
						</Button>
						<Button 
							bsSize="large"
							style={{marginRight:8}} 
							bsStyle="info"
							onClick={this.buttonExample.bind(null, 'info')}>
							Info
						</Button>
						<Button 
							bsSize="large"
							style={{marginRight:8}} 
							bsStyle="success"
							onClick={this.buttonExample.bind(null, 'success')}>
							Success
						</Button>
						<Button 
							bsSize="large"
							style={{marginRight:8}} 
							bsStyle="warning"
							onClick={this.buttonExample.bind(null, 'warning')}>
							Warning
						</Button>
						<Button 
							bsSize="large"
							bsStyle="danger"
							onClick={this.buttonExample.bind(null, 'danger')}>
							Danger
						</Button>
					</div>

					<h1>or create your own here...</h1>
					<p className="text-muted text-center lead">Be sure to use &#123;this.hideAlert&#125; for onConfirm and onCancel.</p>

					<div>
						<h4></h4>
						<Row>
							<Col sm={2} className="text-center">
								<p>
									<Button 
										bsStyle="primary"
										onClick={this.runInputExample}>
										Try it
									</Button>
								</p>
							</Col>
							<Col sm={10}>
								<textarea spellcheck="false" ref="jsxInput" onChange={this.onChangeTextarea} style={{
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
								}}>{this.state.textareaValue}</textarea>
							</Col>
						</Row>
					</div>

					<h2>Examples</h2>

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