import { createAction } from "@reduxjs/toolkit";

export const apiFetching = createAction('API_FETCHING');

export const apiFetched = createAction('API_FETCHED');

export const apiFetchingError = createAction('API_FETCHING_ERROR');


