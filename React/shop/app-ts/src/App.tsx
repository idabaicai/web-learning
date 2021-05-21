import React from 'react';
import './App.css';
import robots from './mockdata/robots.json'
import Robots from './components/Robots'

function App() {
  return (
    <ul>
      {robots.map(item => <Robots key={item.id} id={item.id} name={item.name} email={item.email} />)}
    </ul>
  );
}

export default App;
