import { call, put, takeLatest } from 'redux-saga/effects';
import { timesheetActions } from './reducer';
import { getTimesheetList } from '../services/services';

function* fetchTimesheet({ payload }) {
  try {
    const timesheetList = yield call(getTimesheetList, payload);
    yield put(timesheetActions.fetchTimesheetSuccess(timesheetList));
  } catch (error) {
    yield put(timesheetActions.fetchTimesheetFailure(error));
  }
}

function* fetchTimesheetSaga() {
  yield takeLatest('timesheet/fetchTimesheet', fetchTimesheet);
}


export default [
    fetchTimesheetSaga()
]
