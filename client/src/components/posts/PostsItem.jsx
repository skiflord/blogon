import React from 'react';
import { List, Image, Container, Header, Icon, Button, Divider } from 'semantic-ui-react';

const PostItem = (props) => (
  <Container text>
    <List>
      <List.Item>
        <Image avatar src={props.avatar} />
        <List.Content>
          <List.Header>{props.name}</List.Header>
          {props.date}
        </List.Content>
      </List.Item>
      <Divider clearing />
      <List.Item>
        <Header as='h2'>{props.header}</Header>
      </List.Item>
      <Divider hidden />
      <List.Item>
        <Container text>
          <p>{props.text}</p>
        </Container>
      </List.Item>
      <Divider hidden />
      <List.Item>
        <Button animated>
          <Button.Content visible>Read</Button.Content>
          <Button.Content hidden>
            <Icon name='arrow right' />
          </Button.Content>
        </Button>
      </List.Item>
    </List>
  </Container>
)

export default PostItem;