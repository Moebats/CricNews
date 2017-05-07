import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';

class Test extends Component {

  componentDidMount() {
    const parseUrl = 'https://api.rss2json.com/v1/api.json?rss_url=';
    const url = 'http://www.pakpassion.net/ppforum/external.php?type=RSS2&forumids=9';

    fetch(parseUrl + url)
    .then(response => response.json())
    .then((json) => {
      if (json.status === 'ok') {
        console.log(json);
      } else {
        this.setState({
          title: 'This RSS is not working at the moment',
          link: url,
          isLoading: false
        });
      }
    });
  }
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>
          Welcome to React Native!
        </Text>
        <Text style={styles.instructions}>
          To get started, edit index.ios.js
        </Text>
        <Text style={styles.instructions}>
          Press Cmd+R to reload,{'\n'}
          Cmd+D or shake for dev menu
        </Text>
      </View>
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

export default Test;
