import React from 'react';
import Header from './components/header'
import { GlobalStyle } from './common/base.css'
import { FontStyle } from './common/font'
import { Provider } from 'react-redux'
import store from './store'

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <GlobalStyle />
        <FontStyle></FontStyle>
        <Header></Header>
      </div>
    </Provider>
  );
}

export default App;
