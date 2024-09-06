import { configureStore } from "@reduxjs/toolkit";
import { usersReducer } from "./usersSlice";
import { filterReducer } from "./filterSlice";

const reducer = {
  users: usersReducer,
  filter: filterReducer,
};

export const store = configureStore({
  reducer: reducer,
});
