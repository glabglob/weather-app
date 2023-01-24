//hooks
import { useEffect } from 'react';

//slice
import { fetchWeather } from '../slices/current-weather-slice';

//custom hooks
import { useAppDispatch } from '../hooks/useAppDispatch';
import { useAppSelector } from '../hooks/useAppSelector';
import { useDateConverter } from '../hooks/useDateConverter';

//spinners
import { ClockLoader } from 'react-spinners';

//scss
import "./weather.scss";

const Weather: React.FC = () => {

    const weatherLoadingStatus = useAppSelector((state) => state.currentWeatherReducer.weatherLoadingStatus);
    const weatherState = useAppSelector((state) => state.currentWeatherReducer);
    const fetchWeahterApi: any = fetchWeather();
    const dispatch = useAppDispatch();

    //weather info request when component did mount
    useEffect(() => {
        dispatch(fetchWeahterApi)
            .then((result: {}) => {
                console.log(result);
            }).catch((err: { message: string }) => {
                console.log(`Something went wrong ${err.message}`);
            });
        // eslint-disable-next-line
    }, []);

    console.log(weatherState);

    // while the request is running set the spinner, if we have some issue set issue message
    if (weatherLoadingStatus === "pending") {
        return <ClockLoader
            color="rgba(240, 240, 240, 1)"
            size={120}
            cssOverride={{
                marginLeft: '50px',
            }}
        />;
    } else if (weatherLoadingStatus === "failed") {
        return <span className=" error__message">Something went wrong</span>
    }


    return (
        <div className="weather__section">
            <span className="degree">{weatherState.temp_c}°</span>
            <div className="city__info">
                <span className="city">{weatherState.cityName}</span>
                <span className="time">{weatherState.localtime.substring(11)}</span>
                <span className="date">{useDateConverter(weatherState.localtime)}</span>
            </div>
            <div className="weather__info">
                <img src={weatherState.conditionIcon} alt="weatherIcon" />
                <span>{weatherState.conditionText}</span>
            </div>
        </div>
    );
}

export default Weather;