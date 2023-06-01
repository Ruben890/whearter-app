import axios from "axios";
import { setLocationData } from "../features/SearchMapBox/searchMapBox.slice";
import { setClima } from "../features/Clima/Clima.slice";
import { setClima5day } from "../features/Clima/weather5daya.slice";

const mapBoxApi = axios.create({
    baseURL: "https://api.mapbox.com/geocoding/v5/",
    params: {
        "access_token": import.meta.env.VITE_MAPBOX_TOKEN,
        "session_token": import.meta.env.VITE_MAPBOX_TOKEN,
        "limit": 10,
        "language": "es",
    },
});

const weatherDataApi = axios.create({
    baseURL: "https://api.openweathermap.org/data/2.5/",
    params: {
        "appid": import.meta.env.VITE_API_KEY_OPEWEATHER,
        "lang": "es",
    },
});


export const searchLocationData = (search) => async (dispatch) => {
    try {
        const response = await mapBoxApi.get(`mapbox.places/${search}.json`);
        dispatch(setLocationData(response.data));
    } catch (error) {
        console.error(error);
    }
};

export const getCurrentWeatherData = (longitude, latitude) => async (
    dispatch
) => {
    try {
        const response = await weatherDataApi.get(
            `weather?lat=${latitude}&lon=${longitude}`
        );
        dispatch(setClima(response.data));
    } catch (error) {
        console.error(error);
    }
};

export const get5DayWeatherForecast = (longitude, latitude) => async (
    dispatch
) => {
    try {
        const response = await weatherDataApi.get(
            `forecast?lat=${latitude}&lon=${longitude}`
        );
        dispatch(setClima5day(response.data));
    } catch (error) {
        console.error(error);
    }
};
