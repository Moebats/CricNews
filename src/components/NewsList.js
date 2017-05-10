import React, { Component } from 'react';
import { StyleSheet, ListView, View, TouchableOpacity, RefreshControl } from 'react-native';
import { Title, Button, Container, Header, Text, Spinner, Content } from 'native-base';
import NewsItem from './NewsItem';


class NewsList extends Component {
  constructor(props) {
    super(props);
    const ds = new ListView.DataSource({ rowHasChanged: (r1, r2) => r1 !== r2 });
    this.state = {
      dataSource: ds.cloneWithRows([
      ]),
      refreshing: false
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

  _onRefresh() {
    this.setState({ refreshing: true });
    const parseUrl = 'https://api.rss2json.com/v1/api.json?rss_url=';
    fetch(parseUrl + this.props.url)
    .then(response => response.json())
    .then((json) => {
      if (json.status === 'ok') {
        console.log(json.items);
        const ds = new ListView.DataSource({ rowHasChanged: (r1, r2) => r1 !== r2 });
        this.setState({
          dataSource: ds.cloneWithRows(json.items),
          refreshing: false
        });
      } else {
        console.log('error');
      }
    });
  }


  render() {
    const { color } = this.props;
    return (
      <Container style={{ flex: 1, paddingTop: 10 }}>
        <ListView
        refreshControl={
          <RefreshControl
            refreshing={this.state.refreshing}
            onRefresh={this._onRefresh.bind(this)}
          />
        }
          dataSource={this.state.dataSource}
          renderRow={(rowData) =>
            <NewsItem
              style={{ marginLeft: 5, marginRight: 5 }}
              item={rowData}
              color={color}
            />
          }
        />
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

export default NewsList;
