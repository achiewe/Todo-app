import { PayloadAction, createSlice } from "@reduxjs/toolkit";

interface Todo {
  wording: string;
  id: number;
  recieve: boolean;
}

export interface TodoProps {
  myTodoArray: Todo[];
}

const initialState: TodoProps = {
  myTodoArray: [],
};

const TodoSlice = createSlice({
  name: "todos",
  initialState,
  reducers: {
    makeTodo: (state, action: PayloadAction<string>) => {
      const newTodoItem = {
        id: Date.now(),
        wording: action.payload,
        recieve: false,
      };

      state.myTodoArray.unshift(newTodoItem);
    },

    toggleReceive: (state, action: PayloadAction<number>) => {
      const foundTodo = state.myTodoArray.find(
        (todo) => todo.id === action.payload
      );
      if (foundTodo) {
        foundTodo.recieve = !foundTodo.recieve;
      }
    },

    deleteText: (state, action: PayloadAction<number>) => {
      state.myTodoArray = state.myTodoArray.filter(
        (mytodo) => mytodo.id !== action.payload
      );
    },

    clearCompleted: (state) => {
      state.myTodoArray = state.myTodoArray.filter(
        (mytodo) => mytodo.recieve !== true
      );
    },
  },
});

export const { makeTodo, toggleReceive, deleteText, clearCompleted } =
  TodoSlice.actions;
export default TodoSlice.reducer;
