app.component('app-button', {
  props: {
    text: {
      type: String
    }
  },
  template:
   /*html */
   `
   <div>
    <button>
      <slot></slot>
    </button>
   </div>
   `
})