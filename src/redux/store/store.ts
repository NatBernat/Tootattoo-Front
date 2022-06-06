import { configureStore } from "@reduxjs/toolkit";
import usersReducer from "../features/userSlice/userSlice";
import uiReducer from "../features/uiSlice/uiSlice";
import tattoosReducer from "../features/tattoosSlice/tattoosSlice";

const store = configureStore({
  reducer: {
    user: usersReducer,
    ui: uiReducer,
    tattoos: tattoosReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
