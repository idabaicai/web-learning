
const { h } = Vue

app.component('demo', {
  render() {
    return h('div', {
      id: 'hello',
    }, [ h('span', 'word')] ) 
  }
})