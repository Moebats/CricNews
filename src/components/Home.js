import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View
} from 'react-native';

import { Container, Header, Content, Body, Title, Tab, Tabs } from 'native-base';
import Test from './Test';

class Home extends Component {
  render() {
    return (

      <Container>
            <Header hasTabs >
              <Body>
                <Title>Cricket News App</Title>
              </Body>
            </Header>
            <Tabs>
                <Tab heading="Cricinfo">
                    <Test url={'http://www.espncricinfo.com/rss/content/story/feeds/0.xml'} color={'blue'} />
                </Tab>
                <Tab heading="BBC">
                    <Test url={'http://www.bbc.com/sport/cricket/rss.xml'} color={'red'} />
                </Tab>
                <Tab heading="PakPass">
                    <Test url={'http://www.pakpassion.net/ppforum/external.php?type=RSS2&forumids=9'} color={'#1dba37'} />
                </Tab>
                <Tab heading="CI Pak">
                    <Test url={'http://www.espncricinfo.com/rss/content/story/feeds/7.xml'} color={'green'} />
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
