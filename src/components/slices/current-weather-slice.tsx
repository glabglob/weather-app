import { createSlice, createAsyncThunk } from "@reduxjs/toolkit"
import { _apiBase, _apiKey, _apiParams } from '../services/weatherApiServices';
import { useHttp } from "../hooks/http.hook";

export interface InitialState {
    location: string,
    localTime: string,
    cloud: number,
    humidity: number,
    temp_c: number,
    wind_kph: number,
    condition: {},
    weatherLoadingStatus: 'idle' | 'pending' | 'failed',
}

const initialState: InitialState = {
    location: '',
    localTime: '',
    cloud: 0,
    humidity: 0,
    temp_c: 0,
    wind_kph: 0,
    condition: {},
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

                state.location = action.payload.location.name;
                state.localTime = action.payload.location.localtime;

                state.cloud = action.payload.current.cloud;
                state.humidity = action.payload.current.humidity;
                state.temp_c = action.payload.current.temp_c;
                state.wind_kph = action.payload.current.wind_kph;
                state.condition = action.payload.current.condition;
            })
            .addCase(fetchWeather.rejected, state => {
                state.weatherLoadingStatus = 'failed';
            })
            .addDefaultCase(() => { })
    }
})

const _transformResponse = (obj: object): [] => {
    return ([

    ])
}

const { reducer } = weatherSlice;

export default reducer;





