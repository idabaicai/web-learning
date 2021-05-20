// 异步更新状态 setState 推荐写法
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
    this.setState(
      (state, props) => {
        console.log(state)
      },
      // after render callback
      () => {
        console.log(document.getElementById('num').innerText) // num: 2
        console.log('after update state',this.state)
      }
    )
    console.log(this.state)
  }
  render() {
    return (
      <div>
        <p> count: {this.state.count} </p>
        <p id="num"> num: {this.state.num} </p>
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
