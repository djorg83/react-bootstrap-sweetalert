import React from 'react';
import SweetAlert, { SweetAlertType } from '../../components/SweetAlert';
import reactTools from 'react-tools';
import { Button, Row, Col, Alert } from 'react-bootstrap';
import {examples} from './examples';
import {Example} from './examples/Example';

// @ts-ignore
window.React = React;
// @ts-ignore
window.SweetAlert = SweetAlert;

// @ts-ignore
// let hideAlert: Function = () => {};

interface DemoState {
	alert: React.ReactNode;
	showOtherAlert: boolean;
	textareaValue: string;
}

const defaultTextAreaValue: string = `
<SweetAlert
  success
  title="Woot!"
  onConfirm={this.hideAlert}
>
  I did it!
</SweetAlert>
`.trim();

export default class Demo extends React.Component<{}, DemoState> {

	state: DemoState = {
		alert: null,
		showOtherAlert: false,
		textareaValue: defaultTextAreaValue,
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

	buttonExample = (type: SweetAlertType|string) => {
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
							customIcon="/demo/assets/thumbs-up.jpg"
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
							type={type as SweetAlertType}
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

	hideAlert = () => this.setState({ alert: null });
	onConfirm = () => this.hideAlert();
	onCancel = () => this.hideAlert();

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

	runExample = ({ snippet }: Example) => this.setState({ alert: this.evalJsxSnippet(snippet) });

	private jsxInputElement: HTMLTextAreaElement = null;

	setJsxInputElement = (element: HTMLTextAreaElement) => {
		this.jsxInputElement = element;
	};

	evalJsxSnippet = (jsx: string): React.ReactNode => {
		try {
			const code = reactTools.transform(jsx);
			return eval(code);
		} catch (e) {
			console.log(e);
			return (
				<SweetAlert
					type="danger"
					title="Whoops!"
					onConfirm={() => this.hideAlert()}
				>
					That didn't work.
				</SweetAlert>
			);
		}
	};

	runInputExample = () => {
		this.setState({
			alert: this.evalJsxSnippet(this.jsxInputElement.value),
		});
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
							{[
								'Primary',
								'Info',
								'Success',
								'Warning',
								'Danger',
								'Custom',
								'Input',
							].map((label: string) => (
								<Button
									style={{marginRight:8}}
									bsStyle={label === 'Input' || label === 'Custom' ? 'default' : label.toLowerCase()}
									onClick={() => this.buttonExample(label.toLowerCase())}
								>
									{label}
								</Button>
							))}
						</Col>
					</Row>

					{examples.map((example: Example, index: number) => (
						<div key={'example-' + index}>
							<h4>{example.title}</h4>
							<Row>
								<Col sm={2} className="text-center">
									<p>
										<Button bsStyle="primary" onClick={() => this.runExample(example)} >
											Try It
										</Button>
									</p>
								</Col>
								<Col sm={10}>
									<pre>{example.snippet.trim()}</pre>
								</Col>
							</Row>
						</div>
					))}

					<div>
						<h4>Example Using props.show</h4>
						<Row>
							<Col sm={2} className="text-center">
								<p>
									<Button bsStyle="primary" onClick={() => this.setState({ showOtherAlert: true })} >
										Try It
									</Button>
								</p>
							</Col>
							<Col sm={10}>
								<pre>{`<SweetAlert
 title={"Uses props.show"}
 onConfirm={() => this.setState({ showOtherAlert: false })}
 onCancel={() => this.setState({ showOtherAlert: false })}
 show={this.state.showOtherAlert}
/>
`}</pre>
							</Col>
						</Row>
					</div>

				</div>

			    <footer>
			      <ul className="links">
			        <li><a href="http://github.com/djorg83"><i className="fa fa-github" /> GitHub</a></li>
			      </ul>
			    </footer>

			    {this.state.alert}

					<SweetAlert
						title={"Uses props.show"}
						onConfirm={() => this.setState({ showOtherAlert: false })}
						onCancel={() => this.setState({ showOtherAlert: false })}
						show={this.state.showOtherAlert}
					/>
			</div>
		);
	}
}
