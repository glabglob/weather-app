import { createSlice, createAsyncThunk } from "@reduxjs/toolkit"
import { _apiBase, _apiKey, _apiParams } from '../services/weatherApiServices';
import { useHttp } from "../hooks/http.hook";

interface InitialState {
    currentWeather: {},
    weatherLoadingStatus: 'idle' | 'pending' | 'failed',
}

const initialState: InitialState = {
    currentWeather: {},
    weatherLoadingStatus: 'idle'
}

// тут надо сделать чтоб  вместо  парижа прилетало значение из инпута из  формы

export const fetchWeather = createAsyncThunk(
    'currentWeather/fetchWeather',
    async () => {
        const { request } = useHttp();
        return await request(`${_apiBase}${_apiKey}&q=${'Paris'}${_apiParams}`);
    }
);

const weatherSlice = createSlice({
    name: 'currentWeather',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchWeather.pending, state => { state.weatherLoadingStatus = 'pending' })
            .addCase(fetchWeather.fulfilled, (state, action) => {
                state.weatherLoadingStatus = 'idle';
                state.currentWeather = action.payload;
            })
            .addCase(fetchWeather.rejected, state => {
                state.weatherLoadingStatus = 'failed';
            })
            .addDefaultCase(() => { })
    }
})

const { reducer } = weatherSlice;

export default reducer;





