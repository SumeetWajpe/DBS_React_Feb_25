import { configureStore } from "@reduxjs/toolkit";
import courses from "../reducers/courses.reducer";
import posts from "../reducers/posts.reducer";
import createSagaMiddleware from "redux-saga";
import { mySaga } from "../../saga/saga";

// Create the saga middleware
const sagaMiddleware = createSagaMiddleware();
const store = configureStore({
  reducer: { courses, posts },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware().concat(sagaMiddleware),
});
sagaMiddleware.run(mySaga); // run the watcher saga
export default store;
