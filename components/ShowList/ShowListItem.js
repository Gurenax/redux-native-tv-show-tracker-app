import React from 'react'
import { Image } from 'react-native'
import {
  Card,
  CardItem,
  Thumbnail,
  Text,
  Button,
  Icon,
  Left,
  Body
} from 'native-base'

const ShowListItem = ({
  show
}) => (
  <Card style={{ flex: 0 }}>
    <CardItem>
      <Left>
        <Thumbnail source={{ uri: (!!show.image && show.image.medium) }} />
        <Body>
          <Text>{show.name}</Text>
          <Text note>April 15, 2016</Text>
        </Body>
      </Left>
    </CardItem>
    <CardItem>
      <Body>
        <Image
          source={{ uri: (!!show.image && show.image.medium) }}
          style={{ height: 200, width: '100%', flex: 1, resizeMode: 'cover'  }}
        />
        <Text>{show.summary.replace(/<\/?[^>]+(>|$)/g, "")}</Text>
      </Body>
    </CardItem>
    <CardItem>
      <Left>
        <Button transparent textStyle={{ color: '#87838B' }}>
          <Icon name="logo-github" />
          <Text>1,926 stars</Text>
        </Button>
      </Left>
    </CardItem>
  </Card>
)

export default ShowListItem
