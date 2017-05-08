import React from 'react';
import { Scene, Router, Actions } from 'react-native-router-flux';
import Home from './components/Home';
import Test from './components/Test';

const RouterComponent = () => {
  return (
    <Router>
      <Scene key="main">
        <Scene key="home" component={Home} />
        <Scene key="test" component={Test} title='Test Feed' />
      </Scene>
    </Router>

  );
};

export default RouterComponent;
