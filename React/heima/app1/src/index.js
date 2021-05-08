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
class Welcome1 extends React.Component {
  render() {
    return <h1>Hello, {this.props.name}</h1>
  }
}

/**
 * Extrating Components
 */
const user = {
  name: 'dabai',
  avatar: 'https://cdn.jsdelivr.net/gh/idabaicai/ImageBase@master/2021/avatar.2641s37p23hc.jpg',
}
function Avatar(props) {
  return (
    <img className="avatar"
      src={props.user.avatar}
      alt={props.user.name}
     />
  )
}

function UserInfo(props) {
  return (
    <div className="user-info">
      <Avatar user={props.user} />
      <div className="username">
        {props.user.name}
      </div>
    </div>
  )
}

function Comment(props) {
  return (
    <div className="comment">
    <UserInfo user={user} />
      <div className="text">
        {props.text}
      </div>
      <div className="data">
        {props.date}
      </div>
    </div>
  )
}

function App() {
  return (
    <div>
      <Welcome name="dabai" />
      <Welcome1 name="dabai1" />
      <Comment text="react is also good" user={user} />
    </div>
  )
}
ReactDOM.render(
  <div>
    <ul>
      {listItems}
    </ul>
    <App />
  </div>,
  document.getElementById('root')
)