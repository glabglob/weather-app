//hooks
import { useState } from "react";

//slice
import { fetchWeather } from '../slices/current-weather-slice';
import { changeCityName } from "../slices/current-weather-slice";

//custom hooks
import { useAppDispatch } from '../hooks/useAppDispatch';
import { useAppSelector } from "../hooks/useAppSelector";
import { useHttp } from '../hooks/http.hook';

// service
import { _apiBase, _apiKey, _apiParams } from '../services/weatherApiServices';

// search icon
import search from "./icons8-search.svg";

// scss
import "./form.scss";

type FormField = {
    searchLocation: HTMLInputElement
}

const Form: React.FC = () => {

    const [cityName, setCityName] = useState('');

    const weatherState = useAppSelector((state) => state.currentWeatherReducer);
    const dispatch = useAppDispatch();
    const fetchWeahterApi = fetchWeather('');
    const { request } = useHttp();

    const onSubmitHandler: React.FormEventHandler<HTMLFormElement & FormField> = (e) => {
        e.preventDefault();
        const form = e.currentTarget;
        const { searchLocation } = form;
        setCityName(cityName => cityName = searchLocation.value)

        dispatch(changeCityName(cityName));
        // dispatch(fetchWeather(weatherState.cityName));
        // dispatch(fetchWeahterApi(cityName));

        // request(`${_apiBase}${_apiKey}&q=${searchLocation.value}${_apiParams}`)
        //     .then((result) => {
        //         console.log(result);
        //         dispatch(fetchWeahterApi(searchLocation.value));
        //     }).catch((err) => {
        //         console.log(`Something went wrong ${err.message}`);
        //     });

        setCityName(cityName => cityName = '');
    }

    return (
        <form
            className="form"
            onSubmit={onSubmitHandler}
        >
            <input
                className="form__input"
                type="text"
                placeholder="Serch location..."
                name="searchLocation"
            />
            <button
                className="form__button"
                type="submit"
            >
                <img
                    className="form__button-icon"
                    src={search}
                    alt="searchIcon"
                />
            </button>
        </form>
    );
}

export default Form;