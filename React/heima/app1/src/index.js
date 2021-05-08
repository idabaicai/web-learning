import React from 'react'
import ReactDOM from 'react-dom'

const user = {
  firstName: 'da',
  lastName: 'bai'
}
function formatName(user) {
  if(user) {
    return `${user.firstName} ${user.lastName}`
  }
  return <h1> Hello, Stranger </h1>
}

const element = (
  <div>
    <h1 className="title"> hello {formatName(user)} </h1>
    <h2>Good to see you here</h2>
  </div>
)
ReactDOM.render(
  element,
  document.getElementById('root')
)