import React from 'react';
import { TabNavigator, StackNavigator } from 'react-navigation';
import { Icon } from 'react-native-elements';
import Home from './Home';
import Welcome from './Welcome';

export const Root = StackNavigator({
  Welcome: {
    screen: Welcome,
    navigationOptions: {
      tabBarLabel: 'Home',
      tabBarIcon: ({ tintColor }) => <Icon name="home" size = {35} color={tintColor} />
      }
  },

  Home: {
    screen: Home,
    navigationOptions: {
      tabBarLabel: 'Feeds',
      tabBarIcon: ({ tintColor }) => <Icon name="list" size = {35} color={tintColor} />
      }
  },
});
