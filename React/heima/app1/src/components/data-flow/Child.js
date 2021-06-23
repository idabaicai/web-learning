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
  handBroClick() {
    this.props.changeBroCount()
  }
  render() {
    return (
      <div>
        <h3> {this.props.lastName} </h3>
        <button onClick={() => this.handleClick()}>send msg to parent</button>
        <button onClick={() => this.handBroClick()}>change brother data</button>
      </div>
    )
  }
}

export default Child