import { configureStore } from "@reduxjs/toolkit";
import usersReducer from "../features/userSlice/userSlice";
import uiReducer from "../features/uiSlice/uiSlice";
import tattoosReducer from "../features/tattoosSlice/tattoosSlice";
import tattooReducer from "../features/tattooSlice/tattooSlice";

const store = configureStore({
  reducer: {
    user: usersReducer,
    ui: uiReducer,
    tattoos: tattoosReducer,
    tattoo: tattooReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
