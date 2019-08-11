import {Example} from "./index";

const title: string = 'Input. A replacement for the "prompt" function';

const snippet: string = `
<SweetAlert
  input
  showCancel
  cancelBtnBsStyle="default"
  title="An input!"
  placeHolder="Write something"
  onConfirm={(response) => this.onReceiveInput(response)}
  onCancel={this.onCancel}
>
  Write something interesting:
</SweetAlert>
`;

export default new Example(title, snippet);
