import {Example} from "./Example";

const title: string = "Small Buttons";

const snippet: string = `
<SweetAlert
  title="Here's a message!"
  onConfirm={this.onConfirm}
  onCancel={this.onCancel}
  btnSize="sm"
/>
`;

export default new Example(title, snippet);
