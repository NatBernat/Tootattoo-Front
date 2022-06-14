import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { ITattoo } from "../../../types/types";

const initialState: ITattoo = {
  _id: "",
  title: "",
  image: "",
  imageBackup: "",
  creator: "",
  creationDate: "",
  tags: [],
};

const tattooSlice = createSlice({
  name: "tattoo",
  initialState,

  reducers: {
    loadTattooById: (tattoo: ITattoo, action: PayloadAction<ITattoo>) => ({
      ...action.payload,
    }),
  },
});

export default tattooSlice.reducer;

export const { loadTattooById: loadTattooByIdActionCreator } =
  tattooSlice.actions;
