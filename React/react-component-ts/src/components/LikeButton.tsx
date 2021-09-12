import React, { useState, useEffect } from 'react';

const LikeButton: React.FC = () => {
  // const [obj, setObj] = useState({like: 0, on: true});
  const [like, setLike] = useState(0);
  const [on, setOn ] = useState(true);

  // similar to componentDidMount and componentDidupdate:
  useEffect(() => {
    document.title = `You click button ${like} times`;
  }, [like]); // Only re-run the effet if like changes
  return (
    <div>
      <button onClick={() => {
        setLike(like + 1)
      }}>👍 {like}</button>
      <button onClick={() => {
        setOn(!on)
      }}> { on ? 'On' : 'True' } </button>
    </div>
  );
}

export default LikeButton;
