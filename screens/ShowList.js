import React, { Component } from 'react'

/*
* Redux
*/
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

/*
* Native Base
*/
import {
  Container,
  Content,
  Footer,
  Header,
  Item,
  Input,
  Icon,
  Button,
  Text,
  Label
} from 'native-base'

/*
* Components
*/
import ShowListItem from '../components/ShowList/ShowListItem'

/*
* Actions
*/
import { loadShowList, loadShowListSuccess } from '../actions/ShowList'

class ShowList extends Component {
  renderList() {
    const { showList } = this.props

    if (!showList.shows) {
      return <Label>Loading...</Label>
    }

    return showList.shows.map(showItem => {
      const show = showItem.show
      return <ShowListItem
              key={show.id}
              show={show}
              />
    })
  }

  componentDidMount() {
    const { showList, loadShowList } = this.props
    if (!showList.shows) {
      loadShowList()
    }
  }

  render() {
    return (
      <Container>
        <Header searchBar rounded>
          <Item>
            <Icon name="ios-search" />
            <Input placeholder="Search" />
            <Icon name="ios-people" />
          </Item>
          <Button transparent>
            <Text>Search</Text>
          </Button>
        </Header>
        <Content>{this.renderList()}</Content>
      </Container>
    )
  }
}

const mapStateToProps = state => {
  return {
    showList: state.showList
  }
}

const mapDispatchToProps = dispatch => {
  return bindActionCreators(
    {
      loadShowList: loadShowList,
      loadShowListSuccess: loadShowListSuccess
    },
    dispatch
  )
}

export default connect(mapStateToProps, mapDispatchToProps)(ShowList)
