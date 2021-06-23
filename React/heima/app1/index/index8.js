// HOC
import React from 'react'
import ReactDOM from 'react-dom'


/**
 * Higher-order components
 * @param { Component } WrappedComponent 
 * @returns 
 */
function WithMouse(WrappedComponent) {
  class Mouse extends React.Component {
    constructor(props) {
      super(props)
      this.state = {
        x: 0,
        y: 0
      }
    }
    handleMouseMove(e) {
      this.setState({
        x: e.clientX,
        y: e.clientY
      })
    }
    render() {
      return (
        <div style={{height:'100vh'}} onMouseMove = {(e) => this.handleMouseMove(e)}>
          <WrappedComponent {...this.state} {...this.props} />
        </div>
      )
    }
  }
  return Mouse
}

const Point = (props) => {
  return (
    <div>
      the popint is ({props.x}, {props.y}).
    </div>
  )
}

const WithMousePoint = WithMouse(Point)

function App() {
  return (
    <div>
      <WithMousePoint name="HOC" />
    </div>
  )
}

ReactDOM.render(<App />, document.getElementById('root'))