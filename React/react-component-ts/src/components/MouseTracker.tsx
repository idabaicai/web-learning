import React, { useState, useEffect } from 'react';

const MouseTracker:React.FC  = () => {
  const [ position, setPosition ] = useState({x: 0, y: 0});
  useEffect(() => {
    console.log('add effect', position.x);
    
    const updateMouse = (e:MouseEvent) => {
      
      setPosition({x: e.clientX, y: e.clientY});
    };
    document.addEventListener('click', updateMouse);
    return () => {
      console.log('remove effect', position.x);
      document.removeEventListener('click', updateMouse);
    }
  }); // [] 表示添加一次 effect
  console.log('before render');
  return (
    <div>
      <p>x: {position.x} y: {position.y}</p>
    </div>
  );
}


export default MouseTracker;
