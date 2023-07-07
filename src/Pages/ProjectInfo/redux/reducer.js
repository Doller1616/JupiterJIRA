
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  data: [],
  loading: false,
  error: null,
};

const projectInfoSlice = createSlice({
  name: 'projectinfo',
  initialState,
  reducers: {
    fetchAllProjects(state) {
      state.loading = true;
      state.error = null;
    },
    fetchAllProjectsSuccess(state, action) {
      state.loading = false;
      state.data = action.payload;
    },
    fetchAllProjectsFailure(state, action) {
      state.loading = false;
      state.error = action.payload;
    },
  },
});

export const projectInfoActions = projectInfoSlice.actions;
export default projectInfoSlice.reducer;
