import React from 'react'

class NameForm extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      value: '',
      textValue: ''
    }
    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
    this.handleTextChange = this.handleTextChange.bind(this)
  }
  handleSubmit(event) {
    console.log(this.state)
    event.preventDefault()
  }
  handleChange(event) {
    this.setState({
      value: event.target.value
    })
  }
  handleTextChange(e) {
    this.setState({
      textValue: e.target.value
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
        <br />
        <label>
        TextArea:
          <textarea
            value={this.state.textValue}
            onChange={this.handleTextChange}
          ></textarea>
        </label>
        <br />
        <input type="submit" value="submit" />
      </form>
    )
  }
}

export default NameForm