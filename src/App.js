import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import ReduxThunk from 'redux-thunk';
import Home from './components/Home';

class App extends Component {

  render() {
    const reducers = () => [];
    const store = createStore(reducers, {}, applyMiddleware(ReduxThunk));
    return (
      <Provider store={store}>
        <Home />
      </Provider>
    );
  }
}

export default App;
