import { createSlice } from "@reduxjs/toolkit";

const postStore = createSlice({
  name: "post",
  initialState: { posts: [] },
  reducers: {
    add(state, action) {},
    edit(state, action) {},
  },
});

export const postActions = postStore.actions;

export default postStore.reducer;
