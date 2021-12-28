import { createSlice } from "@reduxjs/toolkit";

const authStore = createSlice({
  name: "auth",
  initialState: { profile: null, error: null, token: null },
  reducers: {
    signin(state, action) {
      localStorage.setItem("profile", JSON.stringify(action.payload));
      state.profile = action.payload.profile;
      state.token = action.payload.token;
    },
    signup(state, action) {
      localStorage.setItem("profile", JSON.stringify(action.payload));
      state.profile = action.payload.token;
      state.token = action.payload.token;
    },
    error(state, action) {
      state.error = action.payload;
    },
  },
});

export const authActions = authStore.actions;

export default authStore.reducer;
