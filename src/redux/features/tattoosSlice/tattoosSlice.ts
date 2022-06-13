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
    loadTattoosByUser: (
      tattoos: ITattoo[],
      action: PayloadAction<ITattoo[]>
    ) => [...action.payload],
    deleteTattoo: (tattoos: ITattoo[], action) =>
      tattoos.filter((tattoo) => tattoo._id !== action.payload),
    createTattoo: (tattoo, action: PayloadAction<FormData>) => ({
      ...tattoo,
    }),
    updateTattoo: (tattoo, action: PayloadAction<FormData>) => ({
      ...tattoo,
    }),
  },
});

export default tattoosSlice.reducer;

export const {
  loadTattoos: loadTattoosActionCreator,
  loadTattoosByUser: loadTattoosByUserActionCreator,
  deleteTattoo: deleteTattooActionCreator,
  createTattoo: createTattooActionCreator,
  updateTattoo: updateTattooActionCreator,
} = tattoosSlice.actions;
