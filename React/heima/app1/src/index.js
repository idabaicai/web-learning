// 异步更新状态
import React from 'react'
import ReactDOM from 'react-dom'

class Demo extends React.Component {
  constructor() {
    super()
    this.state = {
      count: 1,
      num: 1
    }
  }
  
  handleClick() {
    this.setState({
      count: this.state.count + 1
    })
    
    this.setState({
      count: this.state.count + 1
    })

    // recommend 多次更新数据时，推荐使用回调函数
    this.setState((state, props) => {
      return {
        num: state.num + 1
      }
    })
    this.setState((state, props) => {
      return {
        num: state.num + 1
      }
    })
    console.log(this.state)
  }
  render() {
    return (
      <div>
        <p> count: {this.state.count} </p>
        <p> num: {this.state.num} </p>
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
