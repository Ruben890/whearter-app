import { useWeather5Day } from './hooks/useWeather5Day';
import './weather.css';
import CompareDates from './hooks/CompareDates';
import WeatherIcon from './WeatherIcon';
export const WeatherForecastByHour = ({ long, lat }) => {
    const { weather5day, isLoading } = useWeather5Day(long, lat);

    if (isLoading) {
        return null;
    }



    const getDayOfWeek = (date) => {
        const daysOfWeek = ['Domingo', 'Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes', 'Sábado'];
        const targetDate = new Date(date);
        const dayOfWeek = daysOfWeek[targetDate.getDay()];
        return <p className="fs-5">Mañana({dayOfWeek})</p>;
    };

    return (
        <>
            <div className="card-weather shadow">
                {weather5day.list?.map((data, index) => {
                    if (
                        (index === 0 && CompareDates(data.dt_txt)) ||
                         (index === 1 && !CompareDates(data.dt_txt))
                       ) {
                        return (
                            <div key={data.dt} className="weather-card">
                                {index === 0 && (
                                    <p className="fs-4">Hoy({data.dt_txt.slice(11, 19)})</p>
                                )}
                                {index === 1 && !CompareDates(data.dt_txt) && (
                                    getDayOfWeek(data.dt_txt)
                                )}
                                <div className="weather-icon">
                                    {data.weather?.map(({ main }) => (
                                        <WeatherIcon key={main} description={main} />
                                    ))}
                                    {data.weather?.map(({ description }) => (
                                        <p key={description} className="fs-4">
                                            {description}
                                        </p>
                                    ))}
                                </div>
                                <hr className="fs-5" />
                                <ul className="weather-stats ">
                                    <li className="d-flex align-items-center me-2">
                                        <i className="bi bi-droplet-half fs-5" alt="humidity"></i>
                                        <p className="fs-6">{data.main?.humidity}%</p>
                                    </li>
                                    <li className="d-flex align-items-center me-2">
                                        <i className="bi bi-thermometer-half fs-5" alt="temperature"></i>
                                        <p className="fs-6">{data.main?.temp}</p>
                                    </li>
                                    <li className="d-flex align-items-center me-2">
                                        <i className="bi bi-wind fs-5" alt="wind"></i>
                                        <p className="fs-6">{data.wind?.speed}m/s</p>
                                    </li>
                                </ul>
                            </div>
                        );
                    } else {
                        return null;
                    }
                })}
            </div>
        </>
    );
};
