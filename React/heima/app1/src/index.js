import React from 'react'
import ReactDOM from 'react-dom'


// function tick() {
//   const element = (
//     <div>
//       <h3> It is {new Date().toLocaleTimeString()} </h3>
//     </div>
//   );
//   ReactDOM.render(element, document.getElementById('root'))
// }
// setInterval(tick, 1000)

const numbers = [1, 2, 3, 4, 5]

const listItems = numbers.map(item => {
  return <li key={item}>{item}</li>
})
console.log(listItems)
ReactDOM.render(
  <ul>
    {listItems}
  </ul>,
  document.getElementById('root')
)