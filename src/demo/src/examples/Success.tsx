import {Example} from "./Example";

const title: string = "A success message!";

const snippet: string = `
<SweetAlert success title="Good job!" onConfirm={this.onConfirm}>
  You clicked the button!
</SweetAlert>
`;

export default new Example(title, snippet);
