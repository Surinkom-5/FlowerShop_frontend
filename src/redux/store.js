import { configureStore } from "@reduxjs/toolkit";
import AppReducer from "../reducers";

export const store = configureStore({
  reducer: {
    appReducer: AppReducer,
  },
});
