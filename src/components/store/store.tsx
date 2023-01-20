import { configureStore } from '@reduxjs/toolkit';

import currentWeather from '../slices/current-weather-slice';
import forecast from '../slices/forecast-slice';


const stringMiddleWare = () => (next: any) => (actions: any) => {
    if (typeof actions === 'string') {
        return next({
            type: actions
        })
    }
    return next(actions);
};

const store = configureStore({
    reducer: { currentWeather, forecast },
    middleware: getDefaultMiddleware => getDefaultMiddleware().concat(stringMiddleWare)
});

export default store