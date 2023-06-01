import { Header } from "../../Components/header/header";
import { SearchLocations } from "../../Components/searchLocations/SearchLocations";
import { Weather } from "../../Components/weather/weather";
import { WeatherForecastByHour } from "../../Components/weather/WeatherForecastByHour";
import { Weather5day } from "../../Components/weather/weather5day";
import { useGeolocation } from "./hooks/useGeoLocation";
export const Home = () => {
    const { longitude, latitude, error } = useGeolocation();

    return (
        <>
            <header>
                <Header />
            </header>

            <main className="container mt-5">
                <div>
                    <SearchLocations />
                </div>

                <section className="p-1">
                    <div className="d-flex mt-5 justify-content-center" style={{ flexWrap: "wrap" }}>
                        {error ? (
                            <p>Error al obtener la ubicación: {error.message}</p>
                        ) : (
                            <Weather long={longitude} lat={latitude} />

                        )}

                        {error ? (
                            <p>Error al obtener la ubicación: {error.message}</p>
                        ) : (
                            <WeatherForecastByHour long={longitude} lat={latitude} />

                        )}
                    </div>

                    <div className="m-2">
                        <Weather5day long={longitude} lat={latitude} />
                    </div>
                </section>
            </main>
        </>
    );
};
