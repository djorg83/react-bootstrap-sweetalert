import {Example} from "./index";

const title: string = "An HTML message";

const snippet: string = `
<SweetAlert
  title={<span>HTML <small>Title</small>!</span>}
  onConfirm={this.onConfirm}
>
  <span>A custom <span style={{color:'#F8BB86'}}>html</span> message.</span>
</SweetAlert>
`;

export default new Example(title, snippet);
