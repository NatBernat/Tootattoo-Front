import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { ITattoo } from "../../../types/types";

const initialState: ITattoo[] = [];

const tattoosSlice = createSlice({
  name: "tattoos",
  initialState,

  reducers: {
    loadTattoos: (tattoos: ITattoo[], action: PayloadAction<ITattoo[]>) => [
      ...action.payload,
    ],
  },
});

export default tattoosSlice.reducer;

export const { loadTattoos: loadTattoosActionCreator } = tattoosSlice.actions;
