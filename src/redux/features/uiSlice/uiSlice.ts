import { createSlice } from "@reduxjs/toolkit";

const uiSlice = createSlice({
  name: "ui",
  initialState: {
    loading: false,
  },
  reducers: {
    loading: (ui, action) => ({ ...ui, loading: true }),
    finishedLoading: (ui, action) => ({ ...ui, loading: false }),
  },
});

export const {
  loading: loadingActionCreator,
  finishedLoading: finishedLoadingActionCreator,
} = uiSlice.actions;
export default uiSlice.reducer;
