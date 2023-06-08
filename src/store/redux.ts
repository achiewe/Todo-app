import { configureStore } from "@reduxjs/toolkit";
import TodoSlice from "./TodoSlice";
import { TodoProps } from "./TodoSlice";
const store = configureStore({
  reducer: {
    createTodo: TodoSlice,
  },
});

export type TodoRoot = {
  createTodo: TodoProps;
};

export default store;
