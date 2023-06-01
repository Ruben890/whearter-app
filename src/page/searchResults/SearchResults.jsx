import { useParams } from "react-router";
import { Weather } from "../../Components/weather/weather";
import { Header } from "../../Components/header/header";
import { WeatherForecastByHour } from "../../Components/weather/WeatherForecastByHour";
import { Weather5day } from "../../Components/weather/weather5day";
export const SearchResult = () => {
    const params = useParams();
    const coordinates = params.coordinates;
    const [longitude, latitude] = coordinates.split(",").map(parseFloat);





    return (
        <>

            <header>
                <Header />
            </header>
            <main className="container-fluid  mt-5">
                <p><b>{params.place_name}</b></p>
                <section className="p-1">
                    <div className="d-flex mt-5 justify-content-center" style={{ flexWrap: "wrap" }}>
                        <Weather long={longitude} lat={latitude} />
                        <WeatherForecastByHour long={longitude} lat={latitude} />

                    </div>

                    <div className="m-2">
                        <Weather5day long={longitude} lat={latitude} />
                    </div>
                </section>

            </main>
        </>
    );
};
