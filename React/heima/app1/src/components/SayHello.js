import React from 'react'
class SayHello extends React.Component {
  handleClick (e) {
    console.log('hello')
    console.log('event target', e)
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