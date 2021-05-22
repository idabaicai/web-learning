import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const userName = 'dabai'
const defaultContextValue = {
  age: 22
}
export const appContext = React.createContext(defaultContextValue)

ReactDOM.render(
  <React.StrictMode>
    <appContext.Provider value={defaultContextValue}>
      <App userName={userName} />
    </appContext.Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
