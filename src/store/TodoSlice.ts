import { createSlice } from "@reduxjs/toolkit";

export interface TodoProps {
  wording: string;
  id: number;
  recieve: boolean;
}

const initialState: TodoProps = {
  wording: "",
  id: 5,
  recieve: false,
};

const TodoSlice = createSlice({
  name: "todos",
  initialState,
  reducers: {
    makeTodo: (state, action) => {
      state.wording = action.payload;
    },

    toggleReceive: (state) => {
      state.recieve = !state.recieve;
    },
  },
});

export const { makeTodo, toggleReceive } = TodoSlice.actions;
export default TodoSlice.reducer;
