import { call, put, takeLatest } from 'redux-saga/effects';
import { projectInfoActions } from './reducer';
import { getAllProjects } from '../services/services';

function* fetchAllProject({ payload }) {
  try {
    const projectList = yield call(getAllProjects, payload);
    yield put(projectInfoActions.fetchAllProjectsSuccess(projectList));
  } catch (error) {
    yield put(projectInfoActions.fetchAllProjectsFailure(error));
  }
}

function* fetchAllProjectSaga() {
  yield takeLatest('projectinfo/fetchAllProjects', fetchAllProject);
}


export default [
  fetchAllProjectSaga()
]
