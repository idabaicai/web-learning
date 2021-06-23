import React from 'react'
import ReactDOM from 'react-dom'
import Child from './components/data-flow/Child'
import ChildCounter from './components/data-flow/ChildCounter1'

class Parent extends React.Component{
  constructor(props) {
    super(props)
    this.state = {
      lastName: 'wang',
      msg: 'parent msg',
      count: 1
    }
  }
  getChildMsg = (msg) => {
    this.setState({
      msg,
    })
  }
  changeCount = () => {
    console.log('count')
    this.setState({
      count: this.state.count + 1
    })
  }
  render() {
    return (
      <div>
        data down:
        msg: {this.state.msg}
        <Child 
          lastName={this.state.lastName} 
          getMsg={this.getChildMsg}
          changeBroCount={this.changeCount}
        />
        <ChildCounter count={this.state.count} />
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