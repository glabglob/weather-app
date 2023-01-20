import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { _apiBase, _apiKey, _apiParams, _daysOffset } from '../services/weatherApiServices';
import { useHttp } from "../hooks/http.hook";

interface InitialState {
    forecast: {},
    forecastLoadingStatus: 'idle' | 'pending' | 'failed',
}

const initialState: InitialState = {
    forecast: {},
    forecastLoadingStatus: 'idle'
}

// тут надо сделать чтоб  вместо  парижа прилетало значение из инпута из  формы

export const fetchForecast = createAsyncThunk(
    'forecast/fetchForecast',
    async () => {
        const { request } = useHttp();
        return await request(`${_apiBase}${_apiKey}&q=${'Paris'}${_daysOffset}${_apiParams}`);
    }
);

const forecastSlice = createSlice({
    name: 'forecast',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchForecast.pending, state => { state.forecastLoadingStatus = 'pending' })
            .addCase(fetchForecast.fulfilled, (state, action) => {
                state.forecastLoadingStatus = 'idle';
                state.forecast = action.payload;
            })
            .addCase(fetchForecast.rejected, state => {
                state.forecastLoadingStatus = 'failed';
            })
            .addDefaultCase(() => { })

    }
})

const { reducer } = forecastSlice;

export default reducer