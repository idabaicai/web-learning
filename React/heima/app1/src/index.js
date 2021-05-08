import React from 'react'
import ReactDOM from 'react-dom'


function tick() {
  const element = (
    <div>
      <h3> It is {new Date().toLocaleTimeString()} </h3>
    </div>
  );
  ReactDOM.render(element, document.getElementById('root'))
}
setInterval(tick, 1000)