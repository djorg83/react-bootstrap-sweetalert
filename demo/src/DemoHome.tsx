import React from 'react';
import SweetAlert, { SweetAlertType } from '../build-output/src/components/SweetAlert';
import reactTools from 'react-tools';
import { Button, Row, Col, Alert } from 'react-bootstrap';

// @ts-ignore
window.React = React;
// @ts-ignore
window.SweetAlert = SweetAlert;

// @ts-ignore
let hideAlert: Function = () => {};

const examples = [{
	title: 'A basic message'
}, {
	title: 'A title with text under'
}, {
	title: 'A success message!'
}, {
	title: 'A warning message, with Cancel and Confirm callbacks'
}, {
	title: 'A message with a custom icon and close button'
}, {
	title: 'An HTML message'
}, {
	title: 'A replacement for the "prompt" function'
}, {
	title: 'Password Prompt'
}, {
	title: 'Custom style'
}, {
	title: 'Long message'
}];

const longMessageTitle = "Here's a long message!";
const longMessage = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio ipsa, libero id, ducimus aperiam similique dolorum nisi laborum, voluptatibus deleniti animi expedita odio tenetur dolores. Totam voluptatem reprehenderit quisquam sed? Dolorem quasi ab molestiae tempore aut, sunt sint veritatis, natus hic totam pariatur eveniet aperiam quos, fugiat quod odio voluptatibus nesciunt fugit minus? Blanditiis, iure quidem eius exercitationem sapiente optio! Placeat obcaecati alias commodi aut quisquam exercitationem voluptatibus vel sunt esse, distinctio quibusdam delectus consectetur officia, explicabo saepe quidem suscipit qui sint itaque tenetur velit libero non accusantium? Voluptatibus, ipsam? Reprehenderit consequatur nobis recusandae eum esse nemo! Iure autem exercitationem et, expedita temporibus quisquam fuga, natus necessitatibus doloribus quasi illum culpa impedit error officia accusamus, nobis dicta earum nemo pariatur? Delectus officiis, optio natus corrupti hic deleniti totam ut illum eligendi iure magni quod nam dicta magnam aperiam vero aliquam, ad blanditiis. Illo ratione id accusantium esse est ex adipisci! Quisquam eos officia animi voluptatibus? Fugit alias, mollitia iste hic illum aliquam et numquam nesciunt! Iste, quas? Ducimus, excepturi. Voluptate deserunt eius consequuntur a aliquid voluptatibus adipisci repellat molestias expedita. Assumenda voluptatum in consequuntur alias asperiores suscipit fugit at numquam, ullam animi quia tempora architecto nulla ducimus veritatis minus! Nesciunt quam quod est deserunt saepe quos. Exercitationem vel obcaecati molestias. Odio amet maiores laboriosam fugit, doloribus illo magni eos. Minima hic perferendis harum, dolore tempore enim. Repellendus labore nulla omnis maiores eligendi ipsum quisquam, voluptatem est ut nemo veniam dolorem. Eveniet ipsum est accusamus dolorum eius libero provident, aspernatur magnam deleniti soluta iusto, dicta unde ipsam optio earum corrupti commodi harum pariatur odio minima deserunt suscipit delectus ex. Vel, numquam. Aut modi, in cum, accusamus distinctio sint illo dignissimos esse sunt ratione ex magnam quisquam consequatur nulla amet architecto possimus quos eveniet? Cupiditate error unde nesciunt tempora quo, soluta itaque!';

interface DemoState {
	alert: React.ReactNode;
	textareaValue: string;
}

export default class DemoHome extends React.Component<{}, DemoState> {

	state: DemoState = {
		alert: null,
		textareaValue: '<SweetAlert \n\t success \n\t title="Woot!" \n\t onConfirm={() => hideAlert()} \n> \n \tI did it! \n </SweetAlert>'
	};

	renderHeader = () => {
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
						<span className="fa fa-github" /> View on GitHub
					</a>
				</p>
				<iframe src="http://ghbtns.com/github-btn.html?user=djorg83&amp;repo=react-bootstrap-sweetalert&amp;type=watch&amp;count=true" className="social-share" />
			</div>
		);
	};

	buttonExample = (type: SweetAlertType) => {
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
							onConfirm={(response: string) => this.onReceiveInput(response)}
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
	};

	hideAlert = () => {
		this.setState({
			alert: null
		});
	};

	onConfirm = () => {
		this.setState({
			alert: null
		});
	};

	onCancel = () => {
		this.setState({
			alert: null
		});
	};

	deleteFile = () => {
		this.setState({
			alert: (
				<SweetAlert success title="Deleted!" onConfirm={this.hideAlert}>
					Your imaginary file has been deleted.
				</SweetAlert>
			)
		});
	};

	cancelDelete = () => {
		this.setState({
			alert: (
				<SweetAlert danger title="Cancelled" onConfirm={this.hideAlert}>
					Your imaginary file is safe :)
				</SweetAlert>
			)
		});
	};

	onReceiveInput = (value: string) => {
		this.setState({
			alert: (
				<SweetAlert success title="Nice!" onConfirm={this.hideAlert}>
					You wrote: {value}
				</SweetAlert>
			)
		});
	};

	runExample = (i: number) => {
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
							showCloseButton
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
							placeholder="Write something"
							onConfirm={this.onReceiveInput}
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
			case 9:
				this.setState({
					alert: (
						<SweetAlert title={longMessageTitle} onConfirm={this.hideAlert}>
							{longMessage}
						</SweetAlert>
					)
				});
				break;
		}
	};

	renderCodeSnippet = (i: number) => {
		const indent = {marginLeft:30};
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
						<span style={indent}>showCloseButton</span><br/>
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
						<span style={indent}>onConfirm=&#123;(response) => this.onReceiveInput(response)&#125;</span><br/>
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
			case 9:
				return (
					<pre>
						&lt;SweetAlert title="{longMessageTitle}" onConfirm=&#123;this.onConfirm&#125;&gt;<br/>
						<span style={indent}>{longMessage}</span><br/>
						&lt;/SweetAlert&gt;
					</pre>
				);
			default:
				return (<div>Whoops! This is embarrassing.</div>);
		}
	};

	renderExample = (example: { title: string }, i: number) => {
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
	};

	private jsxInputElement: HTMLTextAreaElement = null;

	setJsxInputElement = (element: HTMLTextAreaElement) => {
		this.jsxInputElement = element;
	};

	runInputExample = () => {

		try {
			const input = this.jsxInputElement.value;
			console.log(input);

			const code = reactTools.transform(input);
			console.log(code);

			hideAlert = () => this.hideAlert();

			this.setState({
				alert: eval(code),
			});
		} catch (e) {
			console.log(e);
			const hideAlert = this.hideAlert;
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

	};

	render() {
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
									spellCheck={false}
									ref={this.setJsxInputElement}
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
								/>
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
			        <li><a href="http://github.com/djorg83"><i className="fa fa-github" /> GitHub</a></li>
			      </ul>
			    </footer>

			    {this.state.alert}
			</div>
		);
	}
}
