import {Example} from "./Example";

const title: string = "Custom Buttons";

const snippet: string = `
<SweetAlert 
    success 
    title="Success Data!" 
    onConfirm={this.onConfirm} 
    customButtons={
      <React.Fragment>
        <button onClick={this.onCancel}>Cancel</button>
        <button onClick={this.onConfirm}>Info</button>
        <button onClick={this.onConfirm}>Confirm</button>
      </React.Fragment>
    }
>
  A message with custom buttons!
</SweetAlert>
`;

export default new Example(title, snippet);
