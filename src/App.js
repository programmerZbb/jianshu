import React from 'react';
import Header from './components/header'
import { GlobalStyle } from './common/base.css'

function App() {
  return (
    <div className="App">
      <GlobalStyle />
      <Header></Header>
    </div>
  );
}

export default App;
