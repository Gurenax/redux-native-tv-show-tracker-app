import { call, put, takeEvery, takeLatest } from 'redux-saga/effects'

// Actions
import { SHOWS_LOADED, SHOWS_LOADED_SUCCEEDED, SHOWS_LOADED_FAILED } from '../constants/actionTypes'

// API
import fetchShowList from '../api/shows'

// Mock data
// import { showListData } from '../__mockdata__/showList'


function* fetchShows(action) {
  try {
    const response = yield call(fetchShowList, 'arrow');
    yield put({type: SHOWS_LOADED_SUCCEEDED, payload: { shows: response.data }});
  } catch (e) {
    yield put({type: SHOWS_LOADED_FAILED, message: e.message});
  }
}

function* showListSaga() {
  yield takeEvery(SHOWS_LOADED, fetchShows)
}

export default showListSaga