import { createSlice, createAsyncThunk } from "@reduxjs/toolkit"
import { _apiBase, _apiKey, _apiParams } from '../services/weatherApiServices';
import { useHttp } from "../hooks/http.hook";

export interface InitialState {
    cityName: string,
    localtime: '',
    cloud: number,
    humidity: number,
    temp_c: number,
    wind_kph: number,
    conditionCode: number,
    conditionIcon: string,
    conditionText: string,
    weatherLoadingStatus: 'idle' | 'pending' | 'failed',
}

const initialState: InitialState = {
    cityName: '',
    localtime: '',
    cloud: 0,
    humidity: 0,
    wind_kph: 0,
    temp_c: 0,
    conditionCode: 0,
    conditionIcon: '',
    conditionText: '',
    weatherLoadingStatus: 'idle'
}

// тут надо сделать чтоб  вместо  парижа прилетало значение из инпута из  формы

export const fetchWeather = createAsyncThunk(
    'currentWeather/fetchWeather',
    async () => {
        const { request } = useHttp();
        return await request(`${_apiBase}${_apiKey}&q=${'Tokyo'}${_apiParams}`);
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
                state.cityName = action.payload.location.name;
                state.localtime = action.payload.location.localtime;

                state.cloud = action.payload.current.cloud;
                state.humidity = action.payload.current.humidity;
                state.wind_kph = action.payload.current.wind_kph;

                state.temp_c = action.payload.current.temp_c;

                state.conditionCode = action.payload.current.condition.code;
                state.conditionIcon = action.payload.current.condition.icon;
                state.conditionText = action.payload.current.condition.text;
            })
            .addCase(fetchWeather.rejected, state => {
                state.weatherLoadingStatus = 'failed';
            })
            .addDefaultCase(() => { })
    }
})

const { reducer } = weatherSlice;

export default reducer;





