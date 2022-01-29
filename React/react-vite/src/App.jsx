import { useState } from 'react'
import logo from './logo.svg'
import './App.css'
// import {  } from 'react-redux';

function App() {
  const [count, setCount] = useState(0)
  const onClick = () => {
    setCount((prev) => prev + 1)
  }
  const [input, setInput] = useState('')
  const [messages, setMessage] = useState([])
  const handleInputChange = (e) => {
    setInput(e.target.value)
  }
  const submit = () => {
    setMessage((prev) => [...prev, input])
    setInput('')
  }
  return (
    <div className="App">
      <p>{count}</p>
      <button onClick={onClick}>set count</button>
      <h2>Type message: {input}</h2>
      <input value={input} onChange={handleInputChange}/>
      <button onClick={submit}>submit</button>
      <h2>messages:</h2>
      <ul>
        {messages.map((item, idx) => <li key={idx}>{item}</li>)}
      </ul>
    </div>
  )
}

export default App
