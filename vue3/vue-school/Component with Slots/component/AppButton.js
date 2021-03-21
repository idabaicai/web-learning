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
    <button> {{ text }} </button>
   </div>
   `
})