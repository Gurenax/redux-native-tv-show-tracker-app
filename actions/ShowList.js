import { SHOWS_LOADED, SHOWS_LOADED_SUCCEEDED } from '../constants/actionTypes'
import fetchShowList from '../api/shows'

// Mock data
import { showListData } from '../__mockdata__/showList'

/*
*   Fetch show list
*/
export const loadShowList = (showList, searchKeyword) => {
  return {
    type: SHOWS_LOADED,
    payload: { shows: showList, searchKeyword: searchKeyword }
  }
}


export const loadShowListSuccess = (showList, searchKeyword) => {
  return {
    type: SHOWS_LOADED_SUCCEEDED,
    payload: { shows: showList, searchKeyword: searchKeyword }
  }
}

// /*
// *   Processing: initialise show list
// */
// export const initShowList = () => {
//   // return dispatch => {
//     // dispatch(loadShowListSuccess([], ''))
//     dispatch(loadShowListSuccess(showListData, ''))
//   // }
// }
