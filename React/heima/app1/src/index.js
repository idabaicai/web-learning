import React from 'react'
import ReactDOM from 'react-dom'
import './css/index.css'


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
  return <li
    key={item}
    className="list"
    style={{color:'pink'}}
    >{item}</li>
})

/**
 * component and props
 */
function Welcome(props) {
  return (
    <h1>Hello, {props.name}</h1>
  )
}
ReactDOM.render(
  <div>
    <ul>
      {listItems}
    </ul>
    <Welcome name="dabai" />
  </div>,
  document.getElementById('root')
)