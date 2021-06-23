import React from 'react';
import robots from '../mockdata/robots.json'
import Robots from '../components/Robots'
import styles from './App.module.css'
import logo from './assets/images/logo.svg'
import ShoppingCart from '../components/ShoppingCart'

interface Props {

}
interface State {
  robotGallery: any // 后端返回的数据一般用 any
}
class App extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props)
    this.state = {
      robotGallery: []
    }
  }
  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(res => res.json())
    .then(data => {
      this.setState({
        robotGallery: data
      })
    })
  }
  render() {
    return (
      <div className={styles.app}>
        {/* header start */}
        <div className={styles.appHeader}>
          <img src={logo} alt="logo" className={styles.appLogo} />
          <h2>机器人购物平台</h2>
        </div>
        {/* header end */}
        <ShoppingCart />
        <div className={styles.robotList}>
          {this.state.robotGallery.map(item => <Robots key={item.id} id={item.id} name={item.name} email={item.email} />)}
        </div>
      </div>
    );
  }
}

export default App;
