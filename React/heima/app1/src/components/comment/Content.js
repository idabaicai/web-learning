import React from 'react'

class Content extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      list: this.props.list
    }
  }
  render() {
    return this.state.list.map(item => (
      <div key={item.id}>
        <h2>{item.user}</h2>
        <p>{item.content}</p>
      </div>
    ))
  }
}

export default Content