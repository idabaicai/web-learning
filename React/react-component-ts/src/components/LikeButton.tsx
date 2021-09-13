import React, { useState, useEffect, useRef, useContext } from 'react';
import { ThemeContext } from '../App';

const LikeButton: React.FC = () => {
  // const [obj, setObj] = useState({like: 0, on: true});
  const [like, setLike] = useState(0);
  const [on, setOn ] = useState(true);
  const domRef = useRef<HTMLInputElement>(null);
  // 使用 useRef 会得到更新后的 currentValue
  const likeRef = useRef(0);
  // 使用 useContext Hooks
  const themes = useContext(ThemeContext);
  console.log(themes);
  const style = {
    background: themes.background,
    color: themes.color
  }
  function handleAlertClick() {
    setTimeout(() => {
      alert(`you click on ${likeRef.current} times`)
    }, 3000);
  }

  // similar to componentDidMount and componentDidupdate:
  useEffect(() => {
    document.title = `You click button ${like} times`;
  }, [like]); // Only re-run the effet if like changes

  useEffect(() => {
    if(domRef && domRef.current) {
      domRef.current.focus();
    }
  });
  return (
    <div>
      <input type="text" placeholder="" ref={domRef}/>
      <button style={style} onClick={() => {
        setLike(like + 1);
        likeRef.current++;
      }}>👍 {like}</button>
      <button onClick={() => {
        setOn(!on)
      }}> { on ? 'On' : 'True' } </button>
      <button onClick={handleAlertClick}>Alert</button>
    </div>
  );
}

export default LikeButton;
