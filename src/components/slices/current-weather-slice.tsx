//rtk
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit"

//api
import { _apiBase, _apiKey, _apiParams } from '../services/weatherApiServices';

//custom hooks
import { useHttp } from "../hooks/http.hook";

export interface InitialState {
    cityName: string,
    localtime: string,
    cloud: number,
    humidity: number,
    temp_c: number,
    wind_kph: number,
    conditionCode: number,
    conditionIcon: string,
    conditionText: string,
    is_day: number,
    weatherLoadingStatus: 'idle' | 'pending' | 'failed',
}

const initialState: InitialState = {
    cityName: 'Kiev',
    localtime: '',
    cloud: 0,
    humidity: 0,
    wind_kph: 0,
    temp_c: 0,
    conditionCode: 0,
    conditionIcon: '',
    conditionText: '',
    is_day: 0,
    weatherLoadingStatus: 'idle'
}

export const fetchWeather = createAsyncThunk(
    'currentWeather/fetchWeather',
    async (city: string) => {
        const { request } = useHttp();
        return await request(`${process.env.REACT_APP_API_BASE}${process.env.REACT_APP_API_KEY}&q=${city}${process.env.REACT_APP_API_PARAMS}`);
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

                state.is_day = action.payload.current.is_day;
            })
            .addCase(fetchWeather.rejected, state => {
                state.weatherLoadingStatus = 'failed';
            })
            .addDefaultCase(() => { })
    }
});

const { reducer } = weatherSlice;

export default reducer;





