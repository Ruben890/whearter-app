import { Pulsar } from '@uiball/loaders';
import "./weather.css";
import { useWeather } from './hooks/useWeather';
import WeatherIcon from './WeatherIcon';


export const Weather = ({ long, lat }) => {
    const { weather, isLoading } = useWeather(long, lat);
    const mainWeather = weather.weather?.map(({ main }) => main);

    const getDayOfWeek = () => {
        const daysOfWeek = ['Domingo', 'Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes', 'Sábado'];
        const today = new Date();
        const currentDayOfWeek = daysOfWeek[today.getDay()];
        return <p className="fs-4 mt-5">Hoy({currentDayOfWeek})</p>;
    };




    if (isLoading) {
        return (
            <div className="loading-spinner">
                <Pulsar
                    size={80}
                    speed={1.75}
                    color="#3498DB"
                />
            </div>
        );
    }

    return (
        <>
            <div className="card-weather shadow p-3">
                <div className="card-weather-content d-flex">
                    <div className="weather-info">
                        <h1 className="fs-2 w-75">{weather.name}</h1>

                        {getDayOfWeek()}
                    </div>
                    <div className="weather-icon">
                        <WeatherIcon description={mainWeather} />
                        {weather.weather?.map(({ description }) => (
                            <p key={description} className="fs-4 mt-5">{description}</p>
                        ))}
                    </div>
                </div>
                <hr className="fs-5 mt-4" style={{ position: "relative", top: "10px" }} />
                <ul className="weather-stats mt-4">
                    <li className="d-flex align-items-center">
                        <i className="bi bi-droplet-half fs-5" alt="humidity"></i>
                        <p className="fs-5">{weather.main?.humidity}%</p>
                    </li>
                    <li className="d-flex align-items-center">
                        <i className="bi bi-thermometer-half fs-5" alt="temperature"></i>
                        <p className="fs-5">{weather.main?.temp}</p>
                    </li>
                    <li className="d-flex align-items-center">
                        <i className="bi bi-wind fs-5" alt="wind"></i>
                        <p className="fs-5">{weather.wind?.speed}m/s</p>
                    </li>
                </ul>
            </div>
        </>
    );
}      