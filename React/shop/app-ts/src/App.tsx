import React, { useState, useEffect } from 'react';
import robots from './mockdata/robots.json'
import Robots from './components/Robots'
import styles from './App.module.css'
import logo from './assets/images/logo.svg'
import ShoppingCart from './components/ShoppingCart'

const App: React.FC = () =>  {

  // componentDidMount() {
  //   fetch('https://jsonplaceholder.typicode.com/users')
  //   .then(res => res.json())
  //   .then(data => {
  //     this.setState({
  //       robotGallery: data
  //     })
  //   })
  // }
  const [count, setCount] = useState<number>(0)
  const [robotGallery, setRobotGallery] = useState<any>([])

  useEffect(() => { // 相当于 componentDidUpdate
    document.title = `click ${count} times`
  }, [count])

  useEffect(() => { // 第二个参数传入 []， 相当与 componentDidMount
    // 在 useEffect 中使用 async 和 await
    const fetchData = async () => {
      const res = await fetch('https://jsonplaceholder.typicode.com/users')
      const data = await res.json()
      setRobotGallery(data)
    }
    fetchData()
  }, [])
    return (
      <div className={styles.app}>
        <div>
          <p>点击了 {count} times</p>
          <button onClick={() => setCount(count + 1)}>click</button>
        </div>
        {/* header start */}
        <div className={styles.appHeader}>
          <img src={logo} alt="logo" className={styles.appLogo} />
          <h2>机器人购物平台</h2>
        </div>
        {/* header end */}
        <ShoppingCart />
        <div className={styles.robotList}>
          {robotGallery.map(item => <Robots key={item.id} id={item.id} name={item.name} email={item.email} />)}
        </div>
      </div>
    );
}

export default App;
