import { all } from 'redux-saga/effects';
import postSaga from '../Pages/Test/redux/saga';
import timesheetSaga from '../Pages/Timesheet/redux/saga';
import ProjectInfoSaga from '@Pages/ProjectInfo/redux/saga';
// import { postSaga } from './postSaga';

export default function* rootSaga() {
  yield all([
    // userSaga(),
    ...postSaga,
    ...timesheetSaga,
    ...ProjectInfoSaga
  ]);
}
