import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchWeather, InitialState } from '../slices/current-weather-slice';


import { ClockLoader } from 'react-spinners';

import "./weather.scss";

const Weather: React.FC = () => {

    const weatherLoadingStatus = useSelector((state: InitialState) => state.currentWeatherReducer);
    const fetchWeahterApi: any = fetchWeather();
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchWeahterApi);
        // eslint-disable-next-line
        console.log(dispatch(fetchWeahterApi));
        console.log(weatherLoadingStatus);
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