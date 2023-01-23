import { configureStore } from '@reduxjs/toolkit';

import currentWeatherReducer from '../slices/current-weather-slice';
import forecastReducer from '../slices/forecast-slice';


const stringMiddleWare = () => (next: any) => (actions: any) => {
    if (typeof actions === 'string') {
        return next({
            type: actions
        })
    }
    return next(actions);
};

const store = configureStore({
    reducer: { currentWeatherReducer, forecastReducer },
    middleware: getDefaultMiddleware => getDefaultMiddleware().concat(stringMiddleWare)
});

export default store

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;