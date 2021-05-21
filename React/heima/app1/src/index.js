import React, { useState } from 'react'
import ReactDOM from 'react-dom'

function Example() {
  // Declare a new state
  const [count, setCount] = useState(0);
  return (
    <div>
      <p> You clicked {count} times </p>
      <button onClick={() => setCount(count + 1)}> Click</button>
    </div>
  )
}

ReactDOM.render(<Example />, document.getElementById('root'))
