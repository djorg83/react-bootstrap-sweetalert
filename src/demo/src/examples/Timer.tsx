import {Example} from "./Example";

const title: string = "A success message, with a close timer";

const snippet: string = `
<SweetAlert
  success
  title="Success Data!"
  onConfirm={this.onConfirm}
  onCancel={this.onCancel}
  timeout={2000}
>
  This success message will automatically close after 2 seconds
</SweetAlert>
`;

export default new Example(title, snippet);
