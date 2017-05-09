import React, { Component } from 'react';
import { StyleSheet, ListView, View } from 'react-native';
import TestItem from './TestItem';


class Test extends Component {
  constructor(props) {
    super(props);
    const ds = new ListView.DataSource({ rowHasChanged: (r1, r2) => r1 !== r2 });
    this.state = {
      dataSource: ds.cloneWithRows([
        'John', 'Joel', 'James', 'Jimmy', 'Jackson', 'Jillian', 'Julie', 'Devin'
      ])
    };
  }


  componentWillMount() {
    const parseUrl = 'https://api.rss2json.com/v1/api.json?rss_url=';
    const url = 'http://www.espncricinfo.com/rss/content/story/feeds/0.xml';

    fetch(parseUrl + url)
    .then(response => response.json())
    .then((json) => {
      if (json.status === 'ok') {
        console.log(json.items);
        const ds = new ListView.DataSource({ rowHasChanged: (r1, r2) => r1 !== r2 });
        this.setState({
          dataSource: ds.cloneWithRows(json.items)
        });
      } else {
        console.log('error');
      }
    });
  }
  render() {
    return (
      <View style={{ flex: 1, paddingTop: 40 }}>
        <ListView
          dataSource={this.state.dataSource}
          renderRow={(rowData) => <TestItem item={rowData} />}
        />
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
