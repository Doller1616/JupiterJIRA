
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  data: [],
  loading: false,
  error: null,
};

const postSlice = createSlice({
  name: 'timesheet',
  initialState,
  reducers: {
    fetchTimesheet(state) {
      state.loading = true;
      state.error = null;
    },
    fetchTimesheetSuccess(state, action) {
      state.loading = false;
      state.data = action.payload;
    },
    fetchTimesheetFailure(state, action) {
      state.loading = false;
      state.error = action.payload;
    },
  },
});

export const timesheetActions = postSlice.actions;
export default postSlice.reducer;
