import React from 'react';
import Button, { ButtonType, ButtonSize } from './components/Button/Button';

const App: React.FC = () => {
  return (
    <div className="app">
      <h3>button</h3>
      <Button autoFocus btnType={ButtonType.Primary}>Primary</Button>
      <Button disabled btnType={ButtonType.Default}>Default</Button>
      <Button btnType={ButtonType.Link}>Link</Button>
      <Button btnType={ButtonType.Danger}>Danger</Button>
    </div>
  )
}

export default App;
