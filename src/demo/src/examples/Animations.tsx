import {Example} from "./Example";

const title: string = "Open/Close Animations";

const snippet: string = `
<SweetAlert
  title="Really long animation durations to exaggerate effect!"
  onConfirm={this.onConfirm}
  onCancel={this.onCancel}
  openAnim={{ name: 'showSweetAlert', duration: 2000 }}
  closeAnim={{ name: 'hideSweetAlert', duration: 2000 }}
/>
`;

export default new Example(title, snippet);
