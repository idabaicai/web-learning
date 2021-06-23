import React from 'react'

class Clock extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      date: new Date()
    }
  }
  render() {
    return (
      <div>
        <h1> hello react state: </h1>
        <h2> It is {this.state.date.toLocaleTimeString()}. </h2>
      </div>
    )
  }
  tick() {
    this.setState({
      date: new Date()
    })
  }
  // lifecycle method
  componentDidMount() {
    this.timerID = setInterval(
      () => this.tick(),
      1000
    )
  }

  componentWillUnmount() {
    clearInterval(this.timerID)
  }

}

export default Clock