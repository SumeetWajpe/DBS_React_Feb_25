import { createSlice } from "@reduxjs/toolkit";

let initialState: any = [{ id: 1, title: "First Title" }];

const postsSlice = createSlice({
  name: "posts",
  initialState,
  reducers: {
    DeletePost: (store, action) => {
      console.log("Within DeletePost  Reducer !");
      return store; // return new store value
    },
  },
});

export const { DeletePost } = postsSlice.actions; // exposing actions to be used in React
export default postsSlice.reducer;
