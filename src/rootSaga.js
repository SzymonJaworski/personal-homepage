import { all } from "redux-saga/effects";
import { projectsSaga } from "./features/projectsSaga";

export default function* rootSaga() {
    yield all([
        projectsSaga(),
    ]);
}