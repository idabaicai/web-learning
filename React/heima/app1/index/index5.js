import React from 'react'
import ReactDOM from 'react-dom'

const { Provider, Consumer } = React.createContext()

class App extends React.Component {
  constructor(props) {
    super(props)
  }
  render() {
    return (
      <Provider value="pink">
        <div className="app">
          <Node />
      </div>
      </Provider>
    )
  }
}
function Node(props) {
  return (
    <div className="node">
      <SubNode />
    </div>
  )
}
function SubNode(props) {
  return (
    <div className="subnode">
      subnode
      <Consumer>
        {
          data => (
            <div>
               <span style={{color: data}}>{data}</span>
            </div>
          )
        }
      </Consumer>
    </div>
  )
}

ReactDOM.render(<App />, document.getElementById('root'))