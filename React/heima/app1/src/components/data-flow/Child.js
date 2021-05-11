import React from 'react'

class Child extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      msg: 'child msg'
    }
  }
  handleClick() {
    this.props.getMsg(this.state.msg)
  }
  render() {
    return (
      <div>
        <h3> {this.props.lastName} </h3>
        <button onClick={() => this.handleClick()}>send msg</button>
      </div>
    )
  }
}

export default Child