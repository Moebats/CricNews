import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View
} from 'react-native';

import { Container, Header, Content, Body, Title, Tab, Tabs } from 'native-base';
import NewsList from './NewsList';

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
                    <NewsList url={'http://www.espncricinfo.com/rss/content/story/feeds/0.xml'} color={'blue'} title={'Cricinfo World cricket news'} />
                </Tab>
                <Tab heading="BBC">
                    <NewsList url={'http://www.bbc.com/sport/cricket/rss.xml'} color={'red'} title={'BBC World Cricket news'} />
                </Tab>
                <Tab heading="PakPass">
                    <NewsList url={'http://www.pakpassion.net/ppforum/external.php?type=RSS2&forumids=9'} color={'#1dba37'} title={'PakPassion forum latest posts'} />
                </Tab>
                <Tab heading="CI Pak">
                    <NewsList url={'http://www.espncricinfo.com/rss/content/story/feeds/7.xml'} color={'green'} title={'Cricinfo Pak news section'} />
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
