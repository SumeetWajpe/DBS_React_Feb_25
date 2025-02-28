import { call, put, takeEvery } from "redux-saga/effects";
import { SagaActions } from "./sagaactions";
import axios, { AxiosRequestConfig, AxiosResponse } from "axios";
import { CourseModel } from "../models/course.model";
import { InitCourses } from "../redux/reducers/courses.reducer";

function GetAllCourses() {
  return axios.get("http://localhost:3500/courses");
}

function* fetchCourses() {
  try {
    const response: AxiosResponse<CourseModel[]> = yield call(GetAllCourses);
    yield put(InitCourses(response.data));
  } catch (e) {
    console.log("Error !", e);
  }
}

export function* mySaga() {
  yield takeEvery(SagaActions.FETCH_ALL_COURSES, fetchCourses);
}
