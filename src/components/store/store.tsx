import { configureStore } from '@reduxjs/toolkit';
//тут будут импорты редусеров


const stringMiddleWare = () => (next: any) => (actions: any) => {
    if (typeof actions === 'string') {
        return next({
            type: actions
        })
    }
    return next(actions);
};

const store = configureStore({
    //сюда в редусеры записать заимпорченные редусеры
    reducer: {},
    middleware: getDefaultMiddleware => getDefaultMiddleware().concat(stringMiddleWare),
    devTools: process.env.NODE_ENV !== 'production'
});

export default store