import { createSlice } from "@reduxjs/toolkit";

const authStore = createSlice({
  name: "auth",
  initialState: { profile: null },
  reducers: {
    signin(state, action) {},
    signup(state, action) {},
  },
});

export const authActions = authStore.actions;

export default authStore.reducer;
