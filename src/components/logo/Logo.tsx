//hooks
import { useState } from 'react';


//slice
import { fetchWeather } from '../slices/current-weather-slice';


//custom hooks
import { useAppDispatch } from '../hooks/useAppDispatch';
import { useAppSelector } from '../hooks/useAppSelector';
import { useGeoLocation } from '../hooks/useGetUserLocation';

//scss
import "./logo.scss";

const AppLogo: React.FC = () => {
    const [userLocationState, setUserLocationState] = useState(false);

    const getUserLocation = useGeoLocation(setUserLocationState);
    const fetchWeahterApi = fetchWeather(getUserLocation);
    const dispatch = useAppDispatch();

    const onHeandlerClick = (): void => {
        dispatch(fetchWeahterApi)
            .then((result: {}) => {
                console.log(result);
            }).catch((err: { message: string }) => {
                console.log(`Something went wrong ${err.message}`);
            });
    }

    return (
        <span className="logo" onClick={() => onHeandlerClick()} >Weather App</span>
    );
}

export default AppLogo;