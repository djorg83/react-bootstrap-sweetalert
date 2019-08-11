import {Example} from "./index";

const title: string = "A basic message";

const snippet: string = `
<SweetAlert title="Here's a message!" onConfirm={this.onConfirm} />
`;

export default new Example(title, snippet);
