import { createSlice } from "@reduxjs/toolkit";
import { CourseModel } from "../../models/course.model";

let initialState: CourseModel[] = [];

const coursesSlice = createSlice({
  name: "courses",
  initialState,
  reducers: {
    IncrementLikes: (store: CourseModel[], action) => {
      // console.log("Within Increment Likes  Reducer !");
      // console.log(action);
      let courseId = action.payload;
      let index = store.findIndex(c => c.id == courseId);
      store[index].likes++; // Immer
      return store; // return new store value
    },
    DeleteCourse: (store: CourseModel[], action) => {
      console.log("Delete reducer !");
      let courseId = action.payload;
      let index = store.findIndex(c => c.id == courseId);
      store.splice(index, 1);
      return store;
    },
    InitCourses: (store: CourseModel[], action) => {
      store = action.payload; // payload -> [....]
      return store;
    },
  },
});

export const { IncrementLikes, DeleteCourse, InitCourses } =
  coursesSlice.actions; // exposing actions to be used in React
export default coursesSlice.reducer;
