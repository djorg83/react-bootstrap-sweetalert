import React from 'react';
import SweetAlert from '../../components/SweetAlert';
import { SweetAlertType } from '../../types';
import reactTools from 'react-tools';
import { Button, Row, Col, Alert } from 'react-bootstrap';
import {examples} from './examples';
import {Example} from './examples/Example';
import { SweetAlertRenderProps } from '../../types';

// @ts-ignore
window.React = React;
// @ts-ignore
window.SweetAlert = SweetAlert;

// @ts-ignore
// let hideAlert: Function = () => {};

interface DemoState {
	alert: React.ReactNode;
	showOtherAlert: boolean;
	showCounterAlert: boolean;
	showRenderPropsAlert: boolean;
	textareaValue: string;
	counter: number;
	firstName: string;
	lastName: string;
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
		showCounterAlert: false,
		showRenderPropsAlert: false,
		textareaValue: defaultTextAreaValue,
		counter: 0,
		firstName: '',
		lastName: '',
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
				<iframe src="https://ghbtns.com/github-btn.html?user=djorg83&amp;repo=react-bootstrap-sweetalert&amp;type=watch&amp;count=true" className="social-share" />
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
							cancelBtnBsStyle="light"
							customIcon={
								window.location.hostname === 'localhost'
									? 'assets/thumbs-up.jpg'
									: '/react-bootstrap-sweetalert/demo/assets/thumbs-up.jpg'
							}
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
							type={['primary'].includes(type) ? 'default' : type as SweetAlertType}
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

	showControlledResponse = (dependencies: any[]) => {
		this.setState({
			alert: (
				<SweetAlert success title={`Hello! ${this.state.firstName} ${this.state.lastName}`} onConfirm={this.hideAlert}>
					Response sent to onConfirm:
					<br/>
					<pre>
						{JSON.stringify(dependencies, null, 4)}
					</pre>
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

					<Alert variant="info">Modify the code below to make a SweetAlert. Be sure to use &#123;this.hideAlert&#125; for onConfirm and onCancel.</Alert>

					<div>
						<Row>
							<Col sm={2} className="text-center">
								<p>
									<Button
										variant="primary"
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
							].map((label: string, key) => (
								<Button
									key={key}
									style={{marginRight:8}}
									variant={['Input', 'Custom'].includes(label) ? 'light' : label.toLowerCase()}
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
										<Button variant="primary" onClick={() => this.runExample(example)} >
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
									<Button variant="primary" onClick={() => this.setState({ showOtherAlert: true })} >
										Try It
									</Button>
								</p>
							</Col>
							<Col sm={10}>
								<pre>{`<SweetAlert
 title={"Uses props.show"}
 onConfirm={() => this.setState({ showAlert: false })}
 onCancel={() => this.setState({ showAlert: false })}
 show={this.state.showAlert}
/>
`}</pre>
							</Col>
						</Row>
					</div>

					<div>
						<h4>Example Using props.dependencies</h4>
						<Row>
							<Col sm={2} className="text-center">
								<p>
									<Button variant="primary" onClick={() => this.setState({ showCounterAlert: true })} >
										Try It
									</Button>
								</p>
							</Col>
							<Col sm={10}>
								<pre>{`<SweetAlert
 title={"Uses props.dependencies"}
 onConfirm={this.onConfirm}
 onCancel={this.onCancel}
 type={'controlled'}
 dependencies={[this.state.counter]}
>
  <div>
    The counter value is: {this.state.counter}
    <hr/>
    <Button variant="success" onClick={() => this.setState({ counter: this.state.counter + 1 })} >
      Increment
    </Button>
    &nbsp;
    <Button variant="danger" onClick={() => this.setState({ counter: this.state.counter - 1 })} >
      Decrement
    </Button>
    <hr/>
  </div>
</SweetAlert>
`}</pre>
							</Col>
						</Row>
					</div>

					<div>
						<h4>Example Using Render Props</h4>
						<Row>
							<Col sm={2} className="text-center">
								<p>
									<Button variant="primary" onClick={() => this.setState({ showRenderPropsAlert: true })} >
										Try It
									</Button>
								</p>
							</Col>
							<Col sm={10}>
								<pre>{`<SweetAlert
 title={"Uses render props"}
 onConfirm={this.onConfirm}
 onCancel={this.onCancel}
 type={'controlled'}
 dependencies={[this.state.firstName, this.state.lastName]}
>
  {(renderProps: SweetAlertRenderProps) => (
    <form>
      Your name is: {this.state.firstName} {this.state.lastName}
      <hr/>
      <input
        type={'text'}
        ref={renderProps.setAutoFocusInputRef}
        className="form-control"
        value={this.state.firstName}
        onKeyDown={renderProps.onEnterKeyDownConfirm}
        onChange={(e) => this.setState({ firstName: e.target.value })}
        placeholder={'First name'}
      />
      <br />
      <input
        type={'text'}
        className="form-control"
        value={this.state.lastName}
        onKeyDown={renderProps.onEnterKeyDownConfirm}
        onChange={(e) => this.setState({ lastName: e.target.value })}
        placeholder={'Last name'}
      />
      <hr/>
    </form>
  )}
</SweetAlert>
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

					{this.state.showCounterAlert && (
						<SweetAlert
							show={this.state.showCounterAlert}
							onConfirm={() => this.setState({ showCounterAlert: false })}
							onCancel={() => this.setState({ showCounterAlert: false })}
							title={"Uses props.dependencies"}
							type={'controlled'}
							dependencies={[this.state.counter]}
						>
							<div>
								The counter value is: {this.state.counter}
								<hr/>
								<Button variant="success" onClick={() => this.setState({ counter: this.state.counter + 1 })} >
									Increment
								</Button>
								&nbsp;
								<Button variant="danger" onClick={() => this.setState({ counter: this.state.counter - 1 })} >
									Decrement
								</Button>
								<hr/>
							</div>
						</SweetAlert>
					)}

					<SweetAlert
						show={this.state.showRenderPropsAlert}
						onConfirm={(dependencies: any[]) => {
							this.setState({ showRenderPropsAlert: false })
							this.showControlledResponse(dependencies);
						}}
						onCancel={() => this.setState({ showRenderPropsAlert: false })}
						title={"Uses props.renderProps"}
						type={'controlled'}
						dependencies={[this.state.firstName, this.state.lastName]}
					>
						{(renderProps: SweetAlertRenderProps) => (
							<form>
								Your name is: {this.state.firstName} {this.state.lastName}
								<hr/>
								<input
									type={'text'}
									ref={renderProps.setAutoFocusInputRef}
									className="form-control"
									value={this.state.firstName}
									onKeyDown={renderProps.onEnterKeyDownConfirm}
									onChange={(e) => this.setState({ firstName: e.target.value })}
									placeholder={'First name'}
								/>
								<br />
								<input
									type={'text'}
									className="form-control"
									value={this.state.lastName}
									onKeyDown={renderProps.onEnterKeyDownConfirm}
									onChange={(e) => this.setState({ lastName: e.target.value })}
									placeholder={'Last name'}
								/>
								<hr/>
							</form>
						)}
					</SweetAlert>
			</div>
		);
	}
}
