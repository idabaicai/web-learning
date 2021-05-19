// 异步更新状态
import React from 'react'
import ReactDOM from 'react-dom'

class Demo extends React.Component {
  constructor() {
    super()
    this.state = {
      count: 1
    }
  }
  
  handleClick() {
    this.setState({
      count: this.state.count + 1
    })
    console.log('after first update', this.state.count)
    
    this.setState({
      count: this.state.count + 1
    })
    console.log('after sencond update',this.state.count)
  }
  render() {
    console.log('render')
    return (
      <div>
        <p> count: {this.state.count} </p>
        <button onClick={() => this.handleClick()}>add</button>
      </div>
    )
  }
}

function App() {
  return (
    <div>
      <Demo />
    </div>
  )
}
ReactDOM.render(<App />, document.getElementById('root'))
