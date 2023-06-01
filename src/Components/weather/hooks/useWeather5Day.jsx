import { useSelector, useDispatch } from 'react-redux';
import { useState, useEffect } from 'react';
import { get5DayWeatherForecast } from '../../../services/clima.services';

export const useWeather5Day = (long, lat) => {
    const weather5day = useSelector((state) => state.weather5day.data);
    const [isLoading, setLoading] = useState(true);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(get5DayWeatherForecast(long, lat))
            .then(() => setLoading(false));
    }, [dispatch, long, lat]);

    return { weather5day, isLoading }
}