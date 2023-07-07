import { call, put, takeLatest } from 'redux-saga/effects';
import { postActions } from './reducer';
import { fetchPostsApi } from '../services/services';

function* fetchPosts({ payload }) {
  try {
    const posts = yield call(fetchPostsApi, payload);
    yield put(postActions.fetchPostsSuccess(posts));
  } catch (error) {
    yield put(postActions.fetchPostsFailure(error));
  }
}

function* postSaga() {
  yield takeLatest('post/fetchPostsRequest', fetchPosts);
}


export default [
  postSaga()
]
