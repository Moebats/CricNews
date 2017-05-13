import React, { Component } from 'react';
import { Container, Header, Body, Title, Tab, Tabs } from 'native-base';
import NewsList from './NewsList';

class Home extends Component {
  static navigationOptions = {
    title: 'Welcome',
    header: null
  };
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
                    <NewsList
                    url={'http://www.espncricinfo.com/rss/content/story/feeds/0.xml'}
                    color={'blue'}
                    title={'Cricinfo World cricket news'}
                    />
                </Tab>
                <Tab heading="BBC">
                    <NewsList
                    url={'http://www.bbc.com/sport/cricket/rss.xml'}
                    color={'red'}
                    title={'BBC World Cricket news'}
                    />
                </Tab>
                <Tab heading="PakPass">
                    <NewsList
                    url={'http://www.pakpassion.net/ppforum/external.php?type=RSS2&forumids=9'}
                    color={'#1dba37'}
                    title={'PakPassion forum latest posts'}
                    />
                </Tab>
                <Tab heading="CI Pak">
                    <NewsList
                    url={'http://www.espncricinfo.com/rss/content/story/feeds/7.xml'}
                    color={'green'}
                    title={'Cricinfo Pak news section'}
                    />
                </Tab>
            </Tabs>
            </Container>
    );
  }
}

export default Home;
