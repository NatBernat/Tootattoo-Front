import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IUserState, IUserInfo } from "../../../types/types";

const initialState: IUserState = {
  username: "",
  fullname: "",
  logged: false,
};

const usersSlice = createSlice({
  name: "user",
  initialState,

  reducers: {
    login: (user: IUserState, action: PayloadAction<IUserInfo>) => ({
      ...action.payload,
      logged: true,
    }),
  },
});

export default usersSlice.reducer;

export const { login: loginActionCreator } = usersSlice.actions;
