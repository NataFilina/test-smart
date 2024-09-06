import { createSlice } from "@reduxjs/toolkit";
import { fetchUsers } from "./thunks";

const handlePending = (state) => {
  state.users.isLoading = true;
  state.users.error = null;
};

const handleRejected = (state, actions) => {
  state.users.isLoading = false;
  state.users.error = actions.payload.message;
};

const handleFulfilled = (state) => {
  state.users.isLoading = false;
};

const initialState = {
  users: {
    items: [],
    isLoading: false,
    error: null,
  },
};

const usersSlice = createSlice({
  name: "users",
  initialState: initialState,
  extraReducers: (builder) => {
    builder
      .addCase(fetchUsers.fulfilled, (state, { payload }) => {
        state.users.items = payload;
      })
      .addMatcher((action) => action.type.endsWith("/pending"), handlePending)
      .addMatcher((action) => action.type.endsWith("/rejected"), handleRejected)
      .addMatcher(
        (action) => action.type.endsWith("/fulfilled"),
        handleFulfilled
      );
  },
});

export const usersReducer = usersSlice.reducer;
