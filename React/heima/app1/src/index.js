import React from 'react'
import ReactDOM from 'react-dom'
import NameForm from './components/form/NameForm'

function App() {
  return (
    <div>
      <NameForm />
    </div>
  )
}

ReactDOM.render(
  <App />,
  document.getElementById('root')
)