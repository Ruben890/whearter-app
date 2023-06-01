import { useSelector, useDispatch } from "react-redux";
import { useState, useEffect } from "react";
import { getCurrentWeatherData } from "../../../services/clima.services";

export const useWeather = (long, lat) => {
    const weather = useSelector((state) => state.weather.data);
    const [isLoading, setLoading] = useState(true);
    const dispatch = useDispatch();


    useEffect(() => {
        dispatch(getCurrentWeatherData(long, lat))
            .then(() => setLoading(false));
    }, [dispatch, long, lat]);

    return { weather, isLoading }
}