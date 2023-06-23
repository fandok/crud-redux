import { configureStore } from "@reduxjs/toolkit";
import counterSlice from "./features/counter/counterSlice";
import exampleSlice from "./features/exampleSlice";

export const store = configureStore({
  reducer: {
    counter: counterSlice,
    example: exampleSlice,
  },
});
