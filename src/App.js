import React from 'react';
import Home from "./component/Home";
import {ContextFunc} from './context/ContextAPI';

function App() {
  return (
    <ContextFunc>
      <Home />
    </ContextFunc>
  );
}

export default App;
