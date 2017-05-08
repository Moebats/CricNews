import React, { Component } from 'react';
import { Container, Content, ListItem, Thumbnail, Text, Body, Left, Right, Icon } from 'native-base';


class TestItem extends Component {

  render() {
    const { title, description } = this.props.item;

    return (
                <ListItem avatar>
                    <Body>
                        <Text>{title}</Text>
                        <Text note>Description: {description}</Text>
                    </Body>
                    <Right>
                        <Icon name='chatboxes' style={{ fontSize: 20, color: '#1ec949' }} />
                    </Right>
                </ListItem>
    );
  }
}

export default TestItem;
