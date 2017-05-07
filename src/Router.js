import React from 'react';
import { Scene, Router, Actions } from 'react-native-router-flux';
import Home from './components/Home';

const RouterComponent = () => {
  return (
    <Router sceneStyle={{ paddingTop: 65 }}>
      <Scene key="main">
        <Scene
          // rightTitle="Add"
          key="home"
          component={Home}
          title="CricNews"
          initial
        />
      </Scene>
    </Router>
  );
};

export default RouterComponent;
