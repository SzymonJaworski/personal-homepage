import { takeLatest, call, put, delay } from "redux-saga/effects";
import { fetchProjects, fetchProjectsSuccess, fetchProjectsError } from "./projectsSlice";

function* fetchProjectsHandler() {
    try {
        yield delay(1000);
        const response = yield call(fetch, "https://api.github.com/users/szymonjaworski/repos?sort=updated");
        if (!response.ok) throw new Error();
        const projects = yield response.json();
        yield put(fetchProjectsSuccess(projects));
    } catch (error) {
        yield put(fetchProjectsError());
    }
}

export function* projectsSaga() {
    yield takeLatest(fetchProjects.type, fetchProjectsHandler);
}