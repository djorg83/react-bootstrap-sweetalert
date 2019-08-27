import {Example} from "./Example";

const title: string = "Password Prompt";

const snippet: string = `
<SweetAlert
  input
  required
  inputType="password"
  title="Enter Password"
  validationMsg="You must enter your password!"
  onConfirm={this.onConfirm}
/>
`;

export default new Example(title, snippet);
