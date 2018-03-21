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

import { stripHtmlTags, arrayToCSV } from '../../helpers/stringHelpers'

const ShowListItem = ({
  show
}) => (
  <Card style={{ flex: 0 }}>
    <CardItem>
      <Left>
        <Thumbnail source={{ uri: (!!show.image && show.image.medium) }} />
        <Body>
          <Text>{show.name}</Text>
          <Text note>{ arrayToCSV(show.genres) }</Text>
        </Body>
      </Left>
    </CardItem>
    <CardItem>
      <Body>
        <Image
          source={{ uri: (!!show.image && show.image.medium) }}
          style={{ height: 200, width: '100%', flex: 1, resizeMode: 'cover'  }}
        />
        <Text>{ stripHtmlTags(show.summary) }</Text>
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
