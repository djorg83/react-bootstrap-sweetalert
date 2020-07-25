import {Example} from "./Example";

const title: string = 'Input. A replacement for the "prompt" function';

const snippet: string = `
<SweetAlert
  input
  showCancel
  cancelBtnBsStyle="light"
  title="An input!"
  placeHolder="Write something"
  onConfirm={(response) => this.onReceiveInput(response)}
  onCancel={this.onCancel}
>
  Write something interesting:
</SweetAlert>
`;

export default new Example(title, snippet);
