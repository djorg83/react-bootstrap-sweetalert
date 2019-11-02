import {Example} from "./Example";

const title: string = "Reversed Buttons";

const snippet: string = `
<SweetAlert
  title="Here's a message!"
  onConfirm={this.onConfirm}
  onCancel={this.onCancel}
  showCancel={true}
  reverseButtons={true}
/>
`;

export default new Example(title, snippet);
