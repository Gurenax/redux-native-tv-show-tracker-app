import { SHOWS_LOADED, SHOWS_LOADED_SUCCEEDED } from '../constants/actionTypes'

const initialState = {
  shows: null,
  searchKeyword: ''
}

export default (state = initialState, action) => {
  switch (action.type) {
    case SHOWS_LOADED:
      return action.payload
    case SHOWS_LOADED_SUCCEEDED:
      return action.payload
    default:
      return state
  }
}
