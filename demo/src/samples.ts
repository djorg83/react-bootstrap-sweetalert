
export interface Sample {
  title: string;
  snippet: string;
}

export const samples: Sample[] = [
  {
    title: 'A basic message',
    snippet: `
<SweetAlert title="Here's a message!" onConfirm={this.onConfirm} />
`
  },

  {
    title: 'A title with text under',
    snippet: `
<SweetAlert title="Here's a message!" onConfirm={this.onConfirm}>
  It's pretty, isn't it?
</SweetAlert>
`
  },

  {
    title: 'A success message!',
    snippet: `
<SweetAlert success title="Good job!" onConfirm={this.onConfirm}>
  You clicked the button!
</SweetAlert>
`
  },

  {
    title: 'A warning message, with Cancel and Confirm callbacks',
    snippet: `
<SweetAlert
  warning
  showCancel
  confirmBtnText="Yes, delete it!"
  confirmBtnBsStyle="danger"
  cancelBtnBsStyle="default"
  title="Are you sure?"
  onConfirm={this.deleteFile}
  onCancel={this.onCancel}
>
  You will not be able to recover this imaginary file!
</SweetAlert>
`
  },

  {
    title: 'A message with a custom icon and close button',
    snippet: `
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
`
  },

  {
    title: 'An HTML message',
    snippet: `
<SweetAlert
  title={<span>HTML <small>Title</small>!</span>}
  onConfirm={this.onConfirm}
>
  <span>A custom <span style={{color:'#F8BB86'}}>html</span> message.</span>
</SweetAlert>
 `
  },

  {
    title: 'A replacement for the "prompt" function',
    snippet: `
<SweetAlert
  input
  showCancel
  cancelBtnBsStyle="default"
  title="An input!"
  placeHolder="Write something"
  onConfirm={(response) => this.onReceiveInput(response)}
  onCancel={this.onCancel}
>
  Write something interesting:
</SweetAlert>
 `
  },

  {
    title: 'Password Prompt',
    snippet: `
<SweetAlert
  input
  required
  inputType="password"
  title="Enter Password"
  validationMsg="You must enter your password!"
  onConfirm={this.onConfirm}
/>
 `
  },

  {
    title: 'Custom style',
    snippet: `
<SweetAlert
  title="Yay!"
  style={{backgroundColor:'blue'}}
  onConfirm={this.onConfirm}
>
  It's blue!
</SweetAlert>
 `
  },

  {
    title: 'Long message',
    snippet: `
<SweetAlert title="Here's a long message!" onConfirm={this.onConfirm}>
  Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio ipsa, libero id, ducimus aperiam similique dolorum nisi laborum, voluptatibus deleniti animi expedita odio tenetur dolores. Totam voluptatem reprehenderit quisquam sed? Dolorem quasi ab molestiae tempore aut, sunt sint veritatis, natus hic totam pariatur eveniet aperiam quos, fugiat quod odio voluptatibus nesciunt fugit minus? Blanditiis, iure quidem eius exercitationem sapiente optio! Placeat obcaecati alias commodi aut quisquam exercitationem voluptatibus vel sunt esse, distinctio quibusdam delectus consectetur officia, explicabo saepe quidem suscipit qui sint itaque tenetur velit libero non accusantium? Voluptatibus, ipsam? Reprehenderit consequatur nobis recusandae eum esse nemo! Iure autem exercitationem et, expedita temporibus quisquam fuga, natus necessitatibus doloribus quasi illum culpa impedit error officia accusamus, nobis dicta earum nemo pariatur? Delectus officiis, optio natus corrupti hic deleniti totam ut illum eligendi iure magni quod nam dicta magnam aperiam vero aliquam, ad blanditiis. Illo ratione id accusantium esse est ex adipisci! Quisquam eos officia animi voluptatibus? Fugit alias, mollitia iste hic illum aliquam et numquam nesciunt! Iste, quas? Ducimus, excepturi. Voluptate deserunt eius consequuntur a aliquid voluptatibus adipisci repellat molestias expedita. Assumenda voluptatum in consequuntur alias asperiores suscipit fugit at numquam, ullam animi quia tempora architecto nulla ducimus veritatis minus! Nesciunt quam quod est deserunt saepe quos. Exercitationem vel obcaecati molestias. Odio amet maiores laboriosam fugit, doloribus illo magni eos. Minima hic perferendis harum, dolore tempore enim. Repellendus labore nulla omnis maiores eligendi ipsum quisquam, voluptatem est ut nemo veniam dolorem. Eveniet ipsum est accusamus dolorum eius libero provident, aspernatur magnam deleniti soluta iusto, dicta unde ipsam optio earum corrupti commodi harum pariatur odio minima deserunt suscipit delectus ex. Vel, numquam. Aut modi, in cum, accusamus distinctio sint illo dignissimos esse sunt ratione ex magnam quisquam consequatur nulla amet architecto possimus quos eveniet? Cupiditate error unde nesciunt tempora quo, soluta itaque!
</SweetAlert>
 `
  }
];
