import React, { useState, useEffect } from 'react';
import robots from './mockdata/robots.json'
import Robots from './components/Robots'
import styles from './App.module.css'
import logo from './assets/images/logo.svg'
import ShoppingCart from './components/ShoppingCart'

interface Props {
  userName: string
}

const App: React.FC<Props> = (props) =>  {
  let [count, setCount] = useState<number>(0)
  let [robotGallery, setRobotGallery] = useState<any>([])
  let [isLoding, setLoding] = useState<boolean>(false)
  let [errorMsg, setErrorMsg] = useState<string>()
  useEffect(() => { // 相当于 componentDidUpdate
    document.title = `click ${count} times`
  }, [count])

  useEffect(() => { // 第二个参数传入 []， 相当与 componentDidMount
    // 在 useEffect 中使用 async 和 await
    const fetchData = async () => {
      setLoding(true)
      try {
        const res = await fetch('https://jsonplaceholder.typicode.com/users')
        const data = await res.json()
        setRobotGallery(data)
      } catch(e) {
        setErrorMsg(e.message)
      }
      setLoding(false)
    }
    fetchData()
  }, [])
    return (
      <div className={styles.app}>
        <div>
          <h2>userName: {props.userName} </h2>
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
        {
          errorMsg === '' ? '' : <div> message: {errorMsg}</div>
        }
        {
          !isLoding ?
            <div className={styles.robotList}>
              {robotGallery.map(item => <Robots key={item.id} id={item.id} name={item.name} email={item.email} />)}
            </div>
          :
            <div>
              <h2>loding</h2>
            </div>
        }
      </div>
    );
}

export default App;
