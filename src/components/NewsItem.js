import React, { Component } from 'react';
import { Container, Content, Card, CardItem, Text, Button, Icon, Left, Body } from 'native-base';
import { Linking, TouchableOpacity, Share, View } from 'react-native';


class NewsItem extends Component {

  handleClick = () => {
    const { link } = this.props.item;
    Linking.canOpenURL(link).then(supported => {
      if (supported) {
        Linking.openURL(link);
      } else {
        console.log('Cannot open URL');
      }
    });
  };

  shareMessage = () => {
    const { link } = this.props.item;
  Share.share({
    message: link
  });
}
  render() {
    const { title, pubDate, description } = this.props.item;
    return (
      <TouchableOpacity onPress={this.handleClick} >
        <Card>
              <CardItem>
                <Body>
                  <Text
                  style={{
                  fontWeight: 'bold',
                  paddingLeft: 3,
                  paddingRight: 3,
                  color: this.props.color }}
                  > {title}
                  </Text>
                </Body>
              </CardItem>
                <CardItem cardBody>
                    <Text style={{ paddingLeft: 10, paddingRight: 10, color: '#000000' }} note>
                    {description}
                    </Text>
                </CardItem>
              <CardItem>
                <Button transparent onPress={this.shareMessage}>
                    <Icon style={{ fontSize: 15, color: this.props.color }} active name="redo" />
                    <Text note>Share</Text>
                </Button>
                <Text note>{pubDate}</Text>
            </CardItem>

       </Card>
     </TouchableOpacity>

    );
  }
}

export default NewsItem;
