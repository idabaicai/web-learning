import React from 'react'
import ReactDOM from 'react-dom'
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'

function Home() {
  return (
    <div>
      <h1>Home</h1>
    </div>
  )
}

function About() {
  return (
    <div>
      <h1>about</h1>
    </div>
  )
}

function User() {
  return (
    <div>
      <h1>user</h1>
    </div>
  )
}
function App() {
  return (
    <Router>
      <div>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">about</Link>
          </li>
          <li>
            <Link to="/user">user</Link>
          </li>
        </ul>
        <hr />
          <Route exact path="/" component={Home}></Route>
          <Route path="/about" component={About}></Route>
          <Route path="/user" component={User}></Route>
      </div>
    </Router>
  )
}

ReactDOM.render(<App />, document.getElementById('root'))
