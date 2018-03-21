import React from 'react'

/*
* Redux
*/
import { createStore, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'

/*
* Redux Saga
*/
import createSagaMiddleware from 'redux-saga'
import showListSaga from './sagas/showListSaga'
const sagaMiddleware = createSagaMiddleware()
// import { Container, Content, Footer, Header, Item, Input, Icon, Button, Text } from 'native-base'

/*
* Screens
*/
import ShowList from './screens/ShowList'

/*
* Create a Redux Store for the RootReducer (needed by Provider)
*/
import RootReducer from './reducers/rootReducer'
const store = createStore(RootReducer, applyMiddleware(sagaMiddleware))
sagaMiddleware.run(showListSaga)

export default class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <ShowList />
      </Provider>
    )
  }
}

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
// });
