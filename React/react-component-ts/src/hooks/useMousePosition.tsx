import React, { useState, useEffect } from 'react';

const useMousePosition = () => {
  const [ position, setPosition ] = useState({x: 0, y: 0});
  useEffect(() => {
    const updateMouse = (e:MouseEvent) => {
      setPosition({x: e.clientX, y: e.clientY});
    }
    document.addEventListener('click', updateMouse);
    return () => {
      console.log('remove effect');
      document.removeEventListener('click', updateMouse);      
    }
  }, []);
  return position;
}

export default useMousePosition;