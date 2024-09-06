import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  filterName: "",
  filterUserName: "",
  filterEmail: "",
  filterPhone: "",
  filterCategory: "",
};

const filterSlice = createSlice({
  name: "filter",
  initialState: initialState,
  reducers: {
    filterActionName: (state, { payload }) => {
      state.filterName = payload;
      state.filterCategory = "";
      state.filterCategory = "Name";
    },
    filterActionUserName: (state, { payload }) => {
      state.filterUserName = payload;
      state.filterCategory = "";
      state.filterCategory = "Username";
    },
    filterActionEmail: (state, { payload }) => {
      state.filterEmail = payload;
      state.filterCategory = "";
      state.filterCategory = "Email";
    },
    filterActionPhone: (state, { payload }) => {
      state.filterPhone = payload;
      state.filterCategory = "";
      state.filterCategory = "Phone";
    },
  },
});

export const filterReducer = filterSlice.reducer;
export const {
  filterActionName,
  filterActionUserName,
  filterActionEmail,
  filterActionPhone,
} = filterSlice.actions;
