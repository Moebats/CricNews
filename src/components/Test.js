import React, { Component } from 'react';
import { StyleSheet, ListView, View } from 'react-native';
import { Title } from 'native-base';
import TestItem from './TestItem';


class Test extends Component {
  constructor(props) {
    super(props);
    const ds = new ListView.DataSource({ rowHasChanged: (r1, r2) => r1 !== r2 });
    this.state = {
      dataSource: ds.cloneWithRows([
      ])
    };
  }

  componentWillMount() {
    const parseUrl = 'https://api.rss2json.com/v1/api.json?rss_url=';
    fetch(parseUrl + this.props.url)
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
    const { title, color } = this.props;
    return (
      <View style={{ flex: 1, paddingTop: 10 }}>
        <Title>{title}</Title>
        <ListView
          dataSource={this.state.dataSource}
          renderRow={(rowData) =>
            <TestItem
              style={{ marginLeft: 5, marginRight: 5 }}
              item={rowData}
              color={color}
            />
          }
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
