import {Example} from "./index";

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
  customIcon="/demo/assets/thumbs-up.jpg"
  title="Do you like thumbs?"
  onConfirm={this.onConfirm}
  onCancel={this.onCancel}
>
  You will find they are up!
</SweetAlert>
`;

export default new Example(title, snippet);
