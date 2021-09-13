import React, { useContext } from 'react';

import { ThemeContext } from '../App';



const HelloWorld: React.FC = () =>  {
const themes = useContext(ThemeContext);
const style = {
  color: themes.color
}
  return (
    <div style={style}>
      HelloWorld
    </div>
  );
}

export default HelloWorld;
