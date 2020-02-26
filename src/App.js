import React from 'react';
import Header from './components/header'
import Home from './pages/home'
import { GlobalStyle } from './common/base.css'
import { FontStyle } from './common/font'
import { Provider } from 'react-redux'
import { BrowserRouter as Router, Link, Route } from 'react-router-dom'
import store from './store'

function App() {
  return (
    <Provider store={store}>
      <Router>
        <div className="App">
          <GlobalStyle />
          <FontStyle></FontStyle>
          <Header></Header>
          <Home></Home>
        </div>
      </Router>
    </Provider>
  );
}

export default App;
