import React from 'react'
class SayHello extends React.Component {
  handleClick () {
    console.log('hello')
  }
  render() {
    return (
      <div>
        <button onClick={this.handleClick}> click me </button>
      </div>
    )
  }
}

export default SayHello