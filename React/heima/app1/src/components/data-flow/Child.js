import React from 'react'

class Child extends React.Component {
  constructor(props) {
    super(props)
  }
  render() {
    return (
      <div>
        <h3> {this.props.lastName} </h3>
      </div>
    )
  }
}

export default Child