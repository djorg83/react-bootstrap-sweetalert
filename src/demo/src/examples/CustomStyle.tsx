import {Example} from "./Example";

const title: string = "Customized Styles";

const snippet: string = `
<SweetAlert
  title="Yay!"
  style={{ backgroundColor:'blue', color: 'white' }}
  confirmBtnBsStyle={'secondary'}
  onConfirm={this.onConfirm}
  onCancel={this.onCancel}
>
  It's blue!
</SweetAlert>
`;

export default new Example(title, snippet);
