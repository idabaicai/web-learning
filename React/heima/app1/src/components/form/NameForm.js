import React from 'react'

class NameForm extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      value: '',
      textValue: '',
      selectValue: 'js',
    }
    this.handleSubmit = this.handleSubmit.bind(this)
    this.handleAllChange = this.handleAllChange.bind(this)
  }
  handleAllChange(e) {
    console.log(e.target)
    const name = e.target.name
    this.setState({
      [name]: e.target.value
    })
  }
  handleSubmit(event) {
    console.log(this.state)
    event.preventDefault()
  }
  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          Name:
          <input 
            type="text" 
            value={this.state.value}
            name="value"
            onChange={this.handleAllChange}
            />
        </label>
        <br />
        <label>
        TextArea:
          <textarea
            value={this.state.textValue}
            name="textValue"
            onChange={this.handleAllChange}
          ></textarea>
        </label>
        <br />
        <select 
          value={this.state.selectValue}
          onChange={this.handleAllChange}
          name="selectValue"
        >
          <option value="java">java</option>
          <option value="html">html</option>
          <option value="js">js</option>
          <option value="React">React</option>
          <option value="Vue">Vue</option>
        </select>
        <input type="submit" value="submit" />
      </form>
    )
  }
}

export default NameForm