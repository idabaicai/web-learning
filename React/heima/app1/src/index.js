import React, { useState, useEffect } from 'react'
import ReactDOM from 'react-dom'

function Example() {
  // Declare a new state
  const [count, setCount] = useState(0);
  // const [todos, setTodos] = useState({text: 'learn hooks'})
  
  // Similar to componentDidMount and componentDidUpdate
  useEffect(() => {
    document.title = `You clicked ${count} times`
  })
  return (
    <div>
      <p> You clicked {count} times </p>
      <button onClick={() => setCount(count + 1)}> Click</button>
    </div>
  )
}

ReactDOM.render(<Example />, document.getElementById('root'))
