import {Example} from "./Example";

const title: string = "A message with a custom icon and close button";

const snippet: string = `
<SweetAlert
  custom
  showCancel
  showCloseButton
  confirmBtnText="Yes"
  cancelBtnText="No"
  confirmBtnBsStyle="primary"
  cancelBtnBsStyle="default"
  customIcon="https://raw.githubusercontent.com/djorg83/react-bootstrap-sweetalert/master/demo/assets/thumbs-up.jpg"
  title="Do you like thumbs?"
  onConfirm={this.onConfirm}
  onCancel={this.onCancel}
>
  You will find they are up!
</SweetAlert>
`;

export default new Example(title, snippet);
