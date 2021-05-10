import React from 'react'
import ReactDOM from 'react-dom'
import Comment from './components/comment/Comment'
import './css/comment.css'

function App() {
  return (
    <div>
      <Comment />
    </div>
  )
}

ReactDOM.render(<App />, document.getElementById('root'))