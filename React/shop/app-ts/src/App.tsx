import React from 'react';
import robots from './mockdata/robots.json'
import Robots from './components/Robots'
import styles from './App.module.css'

function App() {
  return (
    <div className={styles.app}>
      <div className={styles.robotList}>
        {robots.map(item => <Robots key={item.id} id={item.id} name={item.name} email={item.email} />)}
      </div>
    </div>
  );
}

export default App;
