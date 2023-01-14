import Form from "../location-form/Form";
import CityList from "../city-list/CityList";
import WeatherDetails from "../weather-details/WeatherDetails";

import "./sidebar.scss";

const Sidebar: React.FC = () => {
    return (
        <section className="sidebar__section">
            <Form />
            <CityList />
            <WeatherDetails />
        </section >
    );
}

export default Sidebar;

//вместо <CityList /> сделать <Forecast/>