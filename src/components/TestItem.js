import React, { Component } from 'react';
import { Container, Content, Card, CardItem, Text, Button, Icon, Left, Body } from 'native-base';
import { Linking, TouchableOpacity } from 'react-native';


class TestItem extends Component {

  handleClick = () => {
    const { guid } = this.props.item;
    Linking.canOpenURL(guid).then(supported => {
      if (supported) {
        Linking.openURL(guid);
      } else {
        console.log('Cannot open URL');
      }
    });
  };

  render() {
    const { title, pubDate, description } = this.props.item;

    return (
      <TouchableOpacity
        onPress={this.handleClick}>
              <Card>
                  <CardItem>
                          <Body>
                              <Text>{title}</Text>
                              <Text note>Cricinfo</Text>
                          </Body>
                    </CardItem>
                    <CardItem cardBody>
                        <Text style={{ paddingLeft: 10, paddingRight: 10, color: '#000000' }} note>
                        {description}
                        </Text>
                    </CardItem>
                    <CardItem>
                        <Button transparent>
                            <Icon active name="thumbs-up" />
                            <Text>Share</Text>
                        </Button>
                        <Text>{pubDate}</Text>
                  </CardItem>
             </Card>
    </TouchableOpacity>


    );
  }
}

export default TestItem;
