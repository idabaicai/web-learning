import React from 'react'

class NameForm extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      value: ''
    }
    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }
  handleSubmit(event) {
    console.log(this.state.value)
    event.preventDefault()
  }
  handleChange(event) {
    this.setState({
      value: event.target.value
    })
  }
  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          Name:
          <input 
            type="text" 
            value={this.state.value} 
            onChange={this.handleChange}
            />
        </label>
        <input type="submit" value="submit" />
      </form>
    )
  }
}

export default NameForm