// store
import { configureStore } from '@reduxjs/toolkit';

//reducer
import currentWeatherReducer from '../slices/current-weather-slice';

const stringMiddleWare = () => (next: any) => (actions: any) => {
    if (typeof actions === 'string') {
        return next({
            type: actions
        })
    }
    return next(actions);
};

const store = configureStore({
    reducer: { currentWeatherReducer },
    middleware: getDefaultMiddleware => getDefaultMiddleware().concat(stringMiddleWare)
});

export default store

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;