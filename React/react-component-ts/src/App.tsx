import React, { useState } from 'react';
import './App.css';
import LikeButton from './components/LikeButton';
import MouseTracker from './components/MouseTracker';
import HelloWorld from './components/HelloWorld';
// 自定义鼠标移动 hooks
import useMousePosition from './hooks/useMousePosition';
// 自定义 loading hooks
import useUrlLoading from './hooks/useURLLoading';
// interface
interface IShowResult {
  message: string;
  status: string;
}
interface IThemeProps {
  [key: string]: {
    color: string;
    background: string;
  }
}

const themes: IThemeProps = {
  'light': {
    color: '#000',
    background: '#eee'
  },
  'dark': {
    color: '#fff',
    background: '#222',
  }
}
export const ThemeContext = React.createContext(themes.light);

function App() {
  const url = 'https://dog.ceo/api/breeds/image/random';
  // 主题
  const [theme, setTheme] = useState('light');
  const [ show, setShow ] = useState(true);
  // 调用自定义 hooks
  const position = useMousePosition();
  // 第二个参数当 show 变化时重新调用 effect
  const [ data , loading ] = useUrlLoading(url, [ show ]);
  const dogResult = data as IShowResult;
  return (
    <div className="App">
      <ThemeContext.Provider value={themes[theme]}>
        <button onClick={() => {
          setTheme(theme === 'light' ? 'dark' : 'light');
        }}>change themes</button>
        <LikeButton />
        <HelloWorld />
        { show && <MouseTracker /> }
        <button onClick={() => {
          setShow(!show);
        }}>toggle show</button>
        
        <p>自定义 hooks</p>
        <p>x: {position.x}, y: {position.y} </p>
        <hr />
        <p>自定义 loading</p>
        { loading ? <p>loading...</p> : <img src={dogResult && dogResult.message} alt="" /> }
      </ThemeContext.Provider>
    </div>
  );
}

export default App;
