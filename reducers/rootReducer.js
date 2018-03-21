import { combineReducers } from 'redux'
import ShowListReducer from './showListReducer'

const RootReducer = combineReducers({
  showList: ShowListReducer
})

export default RootReducer
