
import React from 'react'
import ReactDOM from 'react-dom'
import avatar from './assets/avatar.jpg'

class Mouse extends React.Component {
  constructor(props) {
    super(props)
    this.handleMouseMove = this.handleMouseMove.bind(this)
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
      <div style={{height: '50vh'}} onMouseMove={this.handleMouseMove}>
        {this.props.render(this.state)}
      </div>
    )
  }
}

class Cat extends React.Component {
  render() {
    const mouse = this.props.mouse
    return (
      <div>
        {/* <img src={avatar} alt="cat" style={{position: 'absolute', left: mouse.x, top: mouse.y}} /> */}
        <img src={avatar} alt="cat" style={{width: '100px', height: '100px',position: 'absolute', left: mouse.x - 50, top: mouse.y - 50}} />
      </div>
    )
  }
}

class DisPlay extends React.Component {
  render() {
    const mouse = this.props.mouse
    return (
      <div>
        <h2>The poit is ({mouse.x},{mouse.y})</h2>
      </div>
    )
  }
}

class MouseTracker extends React.Component {
  render() {
    return (
      <div>
        <Mouse render={mouse => (
          <Cat mouse={mouse} />
        )} 
        />
      </div>
    )
  }
}

class MouseTracker1 extends React.Component {
  render() {
    return (
      <div>
        <Mouse render={ mouse => (
          <DisPlay mouse={mouse} />
        )} />
      </div>
    )
  }
}

function App() {
  return (
    <div>
      <MouseTracker />
      {/* <MouseTracker1 /> */}
    </div>
  )
}

ReactDOM.render(<App />, document.getElementById('root'))