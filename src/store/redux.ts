import { configureStore } from "@reduxjs/toolkit";
import todoReducer from "./TodoSlice";
const store = configureStore({
  reducer: {
    name: todoReducer,
  },
});

export default store;
