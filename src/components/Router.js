import React from 'react';
import { StackNavigator } from 'react-navigation';
import { Icon } from 'react-native-elements';
import Home from './Home';
import Welcome from './Welcome';

export const Root = StackNavigator({
  Home: {
    screen: Home,
  },
  Welcome: {
    screen: Welcome,
  },
});
