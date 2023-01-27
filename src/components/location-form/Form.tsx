//hooks
import { useState } from "react";

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