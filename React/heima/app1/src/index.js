import React from 'react'
import ReactDOM from 'react-dom'

const user = {
  firstName: 'da',
  lastName: 'bai'
}
function formatName(user) {
  return `${user.firstName} ${user.lastName}`
}

const element = (
  <h1> hello {formatName(user)} </h1>
)
ReactDOM.render(
  element,
  document.getElementById('root')
)