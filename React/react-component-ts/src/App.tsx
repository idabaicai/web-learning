import React, { useState } from 'react';
import './App.css';
import LikeButton from './components/LikeButton';
import MouseTracker from './components/MouseTracker';
// 自定义鼠标移动 hooks
import useMousePosition from './hooks/useMousePosition';
// 自定义 loading hooks
import useUrlLoading from './hooks/useURLLoading';
// interface
interface IShowResult {
  message: string;
  status: string;
}

function App() {
  const url = 'https://dog.ceo/api/breeds/image/random';

  const [ show, setShow ] = useState(true);
  // 调用自定义 hooks
  const position = useMousePosition();
  // 第二个参数当 show 变化时重新调用 effect
  const [ data , loading ] = useUrlLoading(url, [ show ]);
  const dogResult = data as IShowResult;
  return (
    <div className="App">
      <LikeButton />
      { show && <MouseTracker /> }
      <button onClick={() => {
        setShow(!show);
      }}>toggle show</button>
      
      <p>自定义 hooks</p>
      <p>x: {position.x}, y: {position.y} </p>
      <hr />
      <p>自定义 loading</p>
      { loading ? <p>loading...</p> : <img src={dogResult && dogResult.message} alt="" /> }
    </div>
  );
}

export default App;
