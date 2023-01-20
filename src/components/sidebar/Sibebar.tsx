import Form from "../location-form/Form";
import Forecast from "../forecast/Forecast";
import WeatherDetails from "../weather-details/WeatherDetails";

import "./sidebar.scss";

const Sidebar: React.FC = () => {
    return (
        <section className="sidebar__section">
            <Form />
            <WeatherDetails />
            <Forecast />
        </section >
    );
}

export default Sidebar;

//вместо <CityList /> сделать <Forecast/>