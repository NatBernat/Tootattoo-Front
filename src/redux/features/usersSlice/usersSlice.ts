import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IInitialState, IUserInfo } from "../../../types/types";

const initialState: IInitialState = {
  username: "",
  fullname: "",
  logged: false,
};

const usersSlice = createSlice({
  name: "user",
  initialState,

  reducers: {
    login: (user: IInitialState, action: PayloadAction<IUserInfo>) => ({
      ...action.payload,
      logged: true,
    }),
  },
});

export default usersSlice.reducer;

export const { login: loginActionCreator } = usersSlice.actions;
