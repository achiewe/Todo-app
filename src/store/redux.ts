import { configureStore } from "@reduxjs/toolkit";
import TodoSlice from "./TodoSlice";
import { TodoProps } from "./TodoSlice";
import { modeProps } from "./ModeSlice";
import ThemeSlice from "./ModeSlice";
const store = configureStore({
  reducer: {
    createTodo: TodoSlice,
    Mode: ThemeSlice,
  },
});

export type TodoRoot = {
  createTodo: TodoProps;
};

export type Mode = {
  Mode: modeProps;
};

export default store;
