import { configureStore } from "@reduxjs/toolkit";
import authStore from "./auth";
import postStore from "./posts";

const store = configureStore({
  reducer: {
    auth: authStore,
    post: postStore,
  },
});

export default store;
