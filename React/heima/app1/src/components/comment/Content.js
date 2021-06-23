import React from 'react'

class Content extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      list: this.props.list
    }
  }
  render() {
    if(this.state.list.length > 0) {
      return this.state.list.map(item => (
        <div key={item.id}>
          <h2>{item.user}</h2>
          <p>{item.content}</p>
        </div>
      ))
    } else {
      return (
        <div>
          no comment, just post one!
        </div>
      )
    }
  }
}

export default Content