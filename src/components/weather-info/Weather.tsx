import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchWeather, InitialState } from '../slices/current-weather-slice';


import { ClockLoader } from 'react-spinners';

import "./weather.scss";

const Weather: React.FC = () => {

    const weatherLoadingStatus = useSelector((state: any) => state.currentWeatherReducer.weatherLoadingStatus);
    const fetchWeahterApi: any = fetchWeather();
    const dispatch = useDispatch();


    useEffect(() => {
        dispatch(fetchWeahterApi)
        console.log(dispatch(fetchWeahterApi));
        console.log(weatherLoadingStatus);
        // eslint-disable-next-line
    }, []);

    return (
        <div className="weather__section">
            <span className="degre">25°</span>
            <div className="city__info">
                <span className="city">London</span>
                <span className="time">05:27</span>
                <span className="date">Saturday Jan 14</span>
            </div>
            <div className="weather__info">
                <img src="" alt="weatherIcon" />
                <span>Clear</span>
            </div>
        </div>
    );
}

export default Weather;