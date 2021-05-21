import React from 'react';
import robots from './mockdata/robots.json'
import Robots from './components/Robots'
import styles from './App.module.css'
import logo from './assets/images/logo.svg'

function App() {
  return (
    <div className={styles.app}>
      <div className={styles.appHeader}>
        <img src={logo} alt="logo" className={styles.appLogo} />
        <h2>机器人购物平台</h2>
      </div>
      <div className={styles.robotList}>
        {robots.map(item => <Robots key={item.id} id={item.id} name={item.name} email={item.email} />)}
      </div>
    </div>
  );
}

export default App;
