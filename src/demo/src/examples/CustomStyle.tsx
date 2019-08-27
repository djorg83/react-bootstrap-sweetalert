import {Example} from "./Example";

const title: string = "Customized Styles";

const snippet: string = `
<SweetAlert
  title="Yay!"
  style={{backgroundColor:'blue'}}
  onConfirm={this.onConfirm}
>
  It's blue!
</SweetAlert>
`;

export default new Example(title, snippet);
