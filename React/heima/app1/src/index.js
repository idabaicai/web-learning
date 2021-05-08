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
  <h1> hello {formatName(user)} </h1>
)
ReactDOM.render(
  element,
  document.getElementById('root')
)