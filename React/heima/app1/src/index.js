import React, { useState, useEffect } from 'react'
import ReactDOM from 'react-dom'

import { makeAutoObservable } from 'mobx'
import { observer } from 'mobx-react'

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

class Timer {
  secondsPass = 0;
  constructor() {
    makeAutoObservable(this)
  }

  increase() {
    this.secondsPass += 1;
  }
  reset() {
    this.secondsPass = 0;
  }
}
const myTimer = new Timer()
const TimerView = observer(({ timer }) => (
  <button onClick={() => this.reset()}> Seconds passed: {timer.secondsPass} </button>
))

// ReactDOM.render(<Example />, document.getElementById('root'))
ReactDOM.render(<TimerView timer={myTimer} />, document.getElementById('root'))

setInterval(() => {
  myTimer.increase()
}, 1000);
