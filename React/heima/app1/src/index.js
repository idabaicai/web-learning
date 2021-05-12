import React from 'react'
import ReactDOM from 'react-dom'

import PropsTypes from 'prop-types'

class ListDemo extends React.Component {
  constructor(props) {
    super(props)
    console.warn('constructor')
    this.state = {
      count: 1
    }
  }
  handleClick() {
    this.setState({
      count: this.state.count + 1
    })
  }
  render() {
    console.warn('render')
    const list = this.props.list
    const li = list.map(item => (<li key={item}>item: {item}</li>))
    return (
      <div>
        <ul>
          {li}
        </ul>
        <div className="count">
          <p>{this.state.count}</p>
          <button onClick={() => this.handleClick()}>add</button>
        </div>
      </div>
    )
  }
  componentDidMount() {
    console.warn('componentDidMount');
  }
  componentDidUpdate() {
    console.warn('componentDidUpdate')
  }
}
ListDemo.propTypes = {
  list: PropsTypes.array
}

function App() {
  return (
    <div>
        <ListDemo list={['vue', 'react']} />
        {/* <ListDemo list={1} /> */}
    </div>
  )
}

ReactDOM.render(<App />, document.getElementById('root'))