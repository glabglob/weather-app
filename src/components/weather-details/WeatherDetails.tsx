//custom hooks
import { useAppSelector } from '../hooks/useAppSelector';

//spinner
import { ClockLoader } from 'react-spinners';

//scss
import "./weatherDetails.scss";

const WeatherDetails: React.FC = () => {

    const weatherLoadingStatus = useAppSelector((state) => state.currentWeatherReducer.weatherLoadingStatus);
    const weatherState = useAppSelector((state) => state.currentWeatherReducer);

    // while the request is running set the spinner, if we have some issue set issue message
    if (weatherLoadingStatus === "pending") {
        return <ClockLoader
            color="rgba(240, 240, 240, 1)"
            size={180}
            cssOverride={{
                margin: '0 auto',
            }}
        />;
    } else if (weatherLoadingStatus === "failed") {
        return <span className=" error__message">Something went wrong</span>
    }

    return (
        <ul className="weather__details">
            <h2>Weather Details</h2>
            <li className="details">Cloudy <span>{weatherState.cloud}%</span></li>
            <li className="details">Humidility <span>{weatherState.humidity}%</span></li>
            <li className="details">Wind <span>{weatherState.wind_kph}km/h</span></li>
        </ul>
    );
}

export default WeatherDetails;
