import {Example} from "./Example";

const title: string = "Custom Actions";

const snippet: string = `
<SweetAlert 
    success 
    title="Success Data!" 
    onConfirm={this.onConfirm} 
    customActions={
        <React.Fragment>
            <button onClick={this.onCancel}>Cancel</button>
            <button onClick={this.onConfirm}>Info</button>
            <button onClick={this.onConfirm}>Confirm</button>
        </React.Fragment>
    }
>
  A message with custom actions!
</SweetAlert>
`;

export default new Example(title, snippet);