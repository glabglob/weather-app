//hooks
import { useState } from 'react';

//slice
import { fetchWeather } from '../slices/current-weather-slice';

//custom hooks
import { useAppDispatch } from '../hooks/useAppDispatch';
import { useHttp } from '../hooks/http.hook';

// service
import { _apiBase, _apiKey, _apiParams } from '../services/weatherApiServices';

//scss
import "./cityList.scss";

const Forecast: React.FC = () => {

    const dispatch = useAppDispatch();
    const { request } = useHttp();

    const changeCity = (locationName: string): void => {

        request(`${_apiBase}${_apiKey}&q=${locationName}${_apiParams}`)
            .then((result) => {
                console.log(result);
                dispatch(fetchWeather(locationName));
            }).catch((err) => {
                console.log(`Something went wrong ${err.message}`);
            });
    }

    return (
        <ul className="city__list">
            <h2>Weather in some countries</h2>
            <li className="city" onClick={() => changeCity('Washington')} >Washington</li>
            <li className="city" onClick={() => changeCity('Ottawa')} >Ottawa</li>
            <li className="city" onClick={() => changeCity('Paris')} >Paris</li>
            <li className="city" onClick={() => changeCity('Berlin')} >Berlin</li>
            <li className="city" onClick={() => changeCity('Rome')} >Rome</li>
            <li className="city" onClick={() => changeCity('Tokio')} >Tokio</li>
            <li className="city" onClick={() => changeCity('London')} >London</li>
        </ul>
    );
}

export default Forecast;