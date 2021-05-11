import React from 'react'
import ReactDOM from 'react-dom'
import Child from './components/data-flow/Child'

class Parent extends React.Component{
  constructor(props) {
    super(props)
    this.state = {
      lastName: 'wang'
    }
  }
  render() {
    return (
      <div>
        data down: 
        <Child  lastName={this.state.lastName} />
      </div>
    )
  }
}

function App() {
  return (
    <div>
      <Parent />
    </div>
  )
}

ReactDOM.render(<App />, document.getElementById('root'))