import {Example} from "./Example";

const title: string = "Focus Cancel Button";

const snippet: string = `
<SweetAlert
  title="Here's a message!"
  onConfirm={this.onConfirm}
  onCancel={this.onCancel}
  showCancel={true}
  focusCancelBtn={true}
/>
`;

export default new Example(title, snippet);
