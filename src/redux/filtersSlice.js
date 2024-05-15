import { createSlice } from "@reduxjs/toolkit";

const initialState = { name: "" };

export const filtersSlice = createSlice({
  name: "filters",
  initialState,
  reducers: {
    setFilters: (state, action) => {
      state.name = action.payload;
    },
  },
});

// export const { setFilters } = filtersSlice.reducer;

export const { setSearchContact } = filtersSlice.actions;

export const selectFilter = (state) => state.filters.name;

export default filtersSlice.reducer;
