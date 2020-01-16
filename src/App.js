import React from 'react';
import Header from './components/header'
import { GlobalStyle } from './common/base.css'
import { Provider } from 'react-redux'
import store from './store'

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <GlobalStyle />
        <Header></Header>
      </div>
    </Provider>
  );
}

export default App;
