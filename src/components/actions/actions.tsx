import { createAction } from "@reduxjs/toolkit";

export const currentWeatherFetching = createAction('CURRENT_WEATHER_FETCHING');
export const currentWeatherFetched = createAction('CURRENT_WEATHER_FETCHED');
export const currentWeatherFetchedError = createAction('CURRENT_WEATHER_FETCHED_ERROR');



export const forecastFetching = createAction('FORECAST_FETCHING');
export const forecastFetched = createAction('FORECAST_FETCHED');
export const forecastFetchedError = createAction('FORECAST_FETCHED_ERROR');
