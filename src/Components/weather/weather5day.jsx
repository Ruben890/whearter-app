import { useWeather5Day } from "./hooks/useWeather5Day";
import WeatherIcon from "./WeatherIcon";
import "./weather.css";

export const Weather5day = ({ long, lat }) => {
    const { weather5day, isLoading } = useWeather5Day(long, lat);


    if (isLoading) {
        return null;
    }

    const getDayOfWeek = (date) => {
        const daysOfWeek = ['Domingo', 'Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes', 'Sábado'];
        const targetDate = new Date(date);
        const dayOfWeek = daysOfWeek[targetDate.getDay()];
        return <p className="fs-5 m-1">{dayOfWeek}</p>;
    };

    return (
        <>
            <div className="card-weather5Day mt-4">
                <div className="d-flex m-3 p-3">
                    {weather5day.list?.map((data) => (
                        <div key={data.dt} className="ms-3 me-3 p-4">
                            {data.weather?.map(({ main }) => (
                                <WeatherIcon key={main} description={main} />
                            ))}
                            {data.weather?.map(({ description }) => (
                                <p key={description} style={{ height: "2rem" }}>{description}</p>
                            ))}
                            <p>{data.dt_txt.slice(11, 19)}</p>
                            <hr className="fs-1" />
                            {getDayOfWeek(data.dt_txt)}
                        </div>
                    ))}
                </div>
            </div>
        </>
    );
};
