import { createSlice } from "@reduxjs/toolkit";

const initialState = { name: "" };

const filterSlice = createSlice({
  name: "filters",
  initialState,
  reducers: {
    setFilters: (state, action) => {
      state.filters.name = action.payload;
    },
  },
});

export const { setFilters } = filterSlice.reducer;
