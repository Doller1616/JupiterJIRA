import { combineReducers } from '@reduxjs/toolkit';
import themeReducer from '@Layout/theme';
import postReducer from '@Pages/Test/redux/reducer';
import timesheetReducer from '@Pages/Timesheet/redux/reducer';
import ProjectInfoReducer from '@Pages/ProjectInfo/redux/reducer';

const rootReducer = combineReducers({
  theme: themeReducer,
  post: postReducer,
  timesheet: timesheetReducer,
  projectinfo: ProjectInfoReducer
});

export default rootReducer;