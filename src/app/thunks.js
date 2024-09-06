import { createAsyncThunk } from "@reduxjs/toolkit";
import { getUsers } from "../service/users-service";

export const fetchUsers = createAsyncThunk(
  "users/fetchAll",
  async (_, { rejectWithValue }) => {
    try {
      return await getUsers();
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);
