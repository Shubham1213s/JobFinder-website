// redux/jobSlice.js

import { createSlice } from "@reduxjs/toolkit";

const jobSlice = createSlice({
  name: "jobs",
  initialState: {
    appliedJobs: [],
  },
  reducers: {
    addAppliedJob: (state, action) => {
      state.appliedJobs.push(action.payload);
    },
  },
});

export const { addAppliedJob } = jobSlice.actions;
export default jobSlice.reducer;
