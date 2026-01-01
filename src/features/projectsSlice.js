import { createSlice } from "@reduxjs/toolkit";

const projectsSlice = createSlice({
    name: "projects",
    initialState: {
        projects: [],
        status: "loading",
        isDarkMode: false,
    },
    reducers: {
        fetchProjects: (state) => {
            state.status = "loading";
        },
        fetchProjectsSuccess: (state, { payload: projects }) => {
            state.status = "success";
            state.projects = projects;
        },
        fetchProjectsError: (state) => {
            state.status = "error";
        },
        toggleDarkMode: (state) => {
            state.isDarkMode = !state.isDarkMode;
        },
    },
});

export const { fetchProjects, fetchProjectsSuccess, fetchProjectsError, toggleDarkMode } = projectsSlice.actions;
export const selectProjectsState = (state) => state.projects;
export const selectIsDarkMode = (state) => state.projects.isDarkMode;
export default projectsSlice.reducer;