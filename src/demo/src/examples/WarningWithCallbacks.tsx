import {Example} from "./Example";

const title: string = "A warning message, with Cancel and Confirm callbacks";

const snippet: string = `
<SweetAlert
  warning
  showCancel
  confirmBtnText="Yes, delete it!"
  confirmBtnBsStyle="danger"
  cancelBtnBsStyle="default"
  title="Are you sure?"
  onConfirm={this.deleteFile}
  onCancel={this.onCancel}
>
  You will not be able to recover this imaginary file!
</SweetAlert>
`;

export default new Example(title, snippet);
