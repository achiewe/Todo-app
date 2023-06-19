import { createSlice } from "@reduxjs/toolkit";

export interface modeProps {
  gloomy: boolean;
}

const initialState: modeProps = {
  gloomy: false,
};

const ThemeSlice = createSlice({
  name: "mode",
  initialState,
  reducers: {
    dark: (state) => {
      state.gloomy = !state.gloomy;
    },
  },
});

export const { dark } = ThemeSlice.actions;
export default ThemeSlice.reducer;
