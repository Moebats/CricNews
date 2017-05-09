import React, { Component } from 'react';
import { Container, Content, Card, CardItem, Text, Button, Icon, Left, Body } from 'native-base';


class TestItem extends Component {

  render() {
    const { title, description } = this.props.item;

    return (
                        <Card >
                            <CardItem>
                                    <Body>
                                        <Text>{title}</Text>
                                        <Text note>Cricinfo</Text>
                                    </Body>
                              </CardItem>
                              <CardItem cardBody>
                                  <Text style={{ paddingLeft: 10, paddingRight: 10 }} note>Description: {description}</Text>
                              </CardItem>
                              <CardItem>
                                  <Button transparent>
                                      <Icon active name="thumbs-up" />
                                      <Text>12 Likes</Text>
                                  </Button>
                                  <Button transparent>
                                      <Icon active name="chatbubbles" />
                                      <Text>4 Comments</Text>
                                  </Button>
                                  <Text>11h ago</Text>
                            </CardItem>
                       </Card>

    );
  }
}

export default TestItem;
