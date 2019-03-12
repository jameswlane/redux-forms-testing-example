import React, { Component } from 'react';
import { Provider } from "react-redux";
import store from "./store";
import { ContactPage } from './components/ContactPage'
import './App.css';

class App extends Component {
  render() {
    return (
      <Provider store={store}>
          <ContactPage/>
      </Provider>
    );
  }
}

export default App;
