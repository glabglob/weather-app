import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { fetchWeather, InitialState } from '../slices/current-weather-slice';

import { useAppDispatch } from '../hooks/useAppDispatch';
import { useAppSelector } from '../hooks/useAppSelector';

import { ClockLoader } from 'react-spinners';

import "./weather.scss";

const Weather: React.FC = () => {

    const weatherLoadingStatus = useAppSelector((state) => state.currentWeatherReducer.weatherLoadingStatus);
    const weatherState = useAppSelector((state) => state.currentWeatherReducer.currentWeather);

    const fetchWeahterApi: any = fetchWeather();
    const dispatch = useAppDispatch();


    useEffect(() => {
        // ниже thenc но нужен будет  мише скорее всего,  потому что  почему мы и нет 
        dispatch(fetchWeahterApi)
            .then((result: {}) => {
                console.log(result);
            }).catch((err: { message: string }) => {
                console.log(`Something went wrong ${err.message}`);
            });
        // eslint-disable-next-line
    }, []);

    if (weatherLoadingStatus === "pending") {
        return <ClockLoader />;
    } else if (weatherLoadingStatus === "failed") {
        return <h5 className="text-center mt-5">Something went wrong</h5>
    }



    return (
        <div className="weather__section">
            <span className="degree">25°</span>
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