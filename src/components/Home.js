import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View
} from 'react-native';

import { Container, Header, Content, Tab, Tabs } from 'native-base';
import Test from './Test';

class Home extends Component {
  render() {
    return (

      <Container>
            <Header hasTabs />
            <Tabs>
                <Tab heading="PakPassion">
                    <Test />
                </Tab>
                <Tab heading="Cricinfo">
                    <Test />
                </Tab>
            </Tabs>
            </Container>

    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});

export default Home;
