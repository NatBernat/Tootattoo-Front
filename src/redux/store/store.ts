import { configureStore } from "@reduxjs/toolkit";
import usersReducer from "../features/userSlice/userSlice";

const store = configureStore({
  reducer: {
    user: usersReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;