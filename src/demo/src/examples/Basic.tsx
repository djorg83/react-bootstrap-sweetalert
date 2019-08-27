import {Example} from "./Example";

const title: string = "A basic message";

const snippet: string = `
<SweetAlert title="Here's a message!" onConfirm={this.onConfirm} />
`;

export default new Example(title, snippet);
