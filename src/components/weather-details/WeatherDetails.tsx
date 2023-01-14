
import "./weatherDetails.scss";

const WeatherDetails: React.FC = () => {
    return (
        <ul className="weather__details">
            <h2>Weather Details</h2>
            <li className="details">Cloudy <span>15%</span></li>
            <li className="details">Humidility <span>55%</span></li>
            <li className="details">Wind <span>10km/h</span></li>
        </ul>
    );
}

export default WeatherDetails;