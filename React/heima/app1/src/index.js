import React from 'react'
import ReactDOM from 'react-dom'

import PropsTypes from 'prop-types'

class ListDemo extends React.Component {
  render() {
    const list = this.props.list
    const li = list.map(item => (<li key={item}>item: {item}</li>))
    return (
      <ul>
        <li />
      </ul>
    )
  }
}
ListDemo.propTypes = {
  list: PropsTypes.array
}

function App() {
  return (
    <div>
        {/* <List list={['vue', 'react']} /> */}
        <ListDemo list={1} />
    </div>
  )
}

ReactDOM.render(<App />, document.getElementById('root'))