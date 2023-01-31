import { useState, useEffect } from "react";

type Error = {
    code: number,
    message: string
}

type Position = {
    coords: {
        latitude: number,
        longitude: number
    }
}

export const useGeoLocation = (setUserLocationState: CallableFunction): string => {

    const [location, setLocation] = useState('');

    let latitude: number = 0;
    let longitude: number = 0;

    const onSuccess = (position: Position) => {
        latitude = position.coords.latitude;
        longitude = position.coords.longitude;

        setLocation(location => location = `${latitude}%20${longitude}`);
        setUserLocationState(true);
    };

    const onError = (error: Error) => {
        console.log(error.message);
    };

    useEffect(() => {
        if (!("geolocation" in navigator)) {
            onError({
                code: 0,
                message: "Geolocation not supported",
            });
        }

        navigator.geolocation.getCurrentPosition(onSuccess, onError);

    }, []);

    return location;
}

