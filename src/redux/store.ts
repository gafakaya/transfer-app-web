import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "../redux/slices/counterSlice";
import navReducer from "../redux/slices/navSlice";

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    nav: navReducer,
  },
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
