import React from 'react'

class Count extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      count: 0
    }
  }
  handleClick () {
    this.setState({
      count: this.state.count + 1
    })
  }
  render() {
    return (
      <div>
        <p>count: {this.state.count}</p>
        <button
        onClick={() => this.handleClick()}
        >
          add
        </button>
      </div>
    )
  }
}

export default Count