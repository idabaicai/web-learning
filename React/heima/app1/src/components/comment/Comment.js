import React from 'react'
import Content from './Content'

class Comment extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      user: '',
      content: '',
      list: []
    }
  }
  handleChange(e) {
    this.setState({
      [e.target.name]: e.target.value
    })
  }
  handleClick() {
    const newList = this.state.list
    newList.push({
      id: Number(new Date()),
      user: this.state.user,
      content: this.state.content,
    })
    this.setState({
      list: newList,
      user: '',
      content: ''
    })
  }
  render() {
    return (
      <div className="container">
        <div className="user">
          <input
            name="user"
            placeholder="请输入评论人"
            onChange={(e) => this.handleChange(e)} 
            value={this.state.user} />
        </div>
        <div className="content">
          <textarea
            name="content"
            rows="10"
            onChange={(e) => this.handleChange(e)}
            value={this.state.content}
            placeholder="请输入评论内容"
          ></textarea>
        </div>
        <button
          onClick={() => this.handleClick()}
        >发表评论</button>
        <div className="comment">
          <Content list={this.state.list} />
        </div>
      </div>
    )
  }
}

export default Comment