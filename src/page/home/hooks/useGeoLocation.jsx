import { useState, useEffect } from "react";

export const useGeolocation = () => {
    const [latitude, setLatitude] = useState(null);
    const [longitude, setLongitude] = useState(null);
    const [error, setError] = useState(null);

    useEffect(() => {
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(
                (position) => {
                    setLatitude(position.coords.latitude);
                    setLongitude(position.coords.longitude);
                },
                (error) => {
                    setError(error);
                }
            );
        } else {
            setError(new Error("Geolocalización no es compatible con este navegador."));
        }
    }, []);
    return { latitude, longitude, error };
};

