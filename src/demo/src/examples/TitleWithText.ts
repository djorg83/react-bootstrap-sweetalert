import {Example} from "./index";

const title: string = "A title with text under";

const snippet: string = `
<SweetAlert title="Here's a message!" onConfirm={this.onConfirm}>
  It's pretty, isn't it?
</SweetAlert>
`;

export default new Example(title, snippet);
