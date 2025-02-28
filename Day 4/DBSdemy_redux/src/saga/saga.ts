import { call, put, retry, takeEvery } from "redux-saga/effects";
import { SagaActions } from "./sagaactions";
import axios, { AxiosRequestConfig, AxiosResponse } from "axios";
import { CourseModel } from "../models/course.model";
import { InitCourses } from "../redux/reducers/courses.reducer";

function GetAllCourses() {
  return axios.get("http://localhost:3500/courses");
}
// Worker Saga
function* fetchCourses() {
  try {
    const response: AxiosResponse<CourseModel[]> = yield call(GetAllCourses);
    yield put(InitCourses(response.data));
  } catch (e) {
    console.log("Error !", e);
  }
}

function* retryFetchCoursesSaga() {
  try {
    const SECOND = 1000;
    const response: AxiosResponse<CourseModel[]> = yield retry(
      3,
      10 * SECOND,
      GetAllCourses,
    );
    yield put(InitCourses(response.data));
  } catch (e) {
    console.log("Error !", e);
  }
}

// Watcher Saga
export function* mySaga() {
  // yield takeEvery(SagaActions.FETCH_ALL_COURSES, fetchCourses);
  yield takeEvery(SagaActions.FETCH_ALL_COURSES, retryFetchCoursesSaga);
}
