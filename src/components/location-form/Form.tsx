//hooks
import { useState } from "react";

//custom hooks


// search icon
import search from "./icons8-search.svg";

// scss
import "./form.scss";

const Form: React.FC = () => {

    return (
        <form className="form" action="">
            <input className="form__input" type="text" placeholder="Serch location..." />
            <button className="form__button" type="submit"><img className="form__button-icon" src={search} alt="searchIcon" /></button>
        </form>
    );
}

export default Form;