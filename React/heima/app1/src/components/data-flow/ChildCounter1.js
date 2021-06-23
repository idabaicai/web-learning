import React from 'react'

class ChildCounter extends React.Component {
  render() {
    return <h2> count: {this.props.count} </h2>
  }
}

export default ChildCounter