import { useSelector, useDispatch } from "react-redux";
import { searchLocationData } from "../../services/clima.services";
import { useState } from "react";
import { Link } from "react-router-dom";
import "./searchLocation.css"
export const SearchLocations = () => {
    const searchLocation = useSelector(state => state.location.data.features);
    const [showResults, setShowResults] = useState(false);
    const dispatch = useDispatch();

    const search_BoxMap = (e) => {
        const search = e.target.elements.Search.value;
        if (!search) {
            console.log("No search");
        }

        try {
            e.preventDefault();
            dispatch(searchLocationData(search));
            setShowResults(search !== '');
        } catch (err) {
            console.error(err);
        }
    };


    return (
        <>
            <div>
                <form className="w-100" role="search" onSubmit={search_BoxMap}>
                    <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" name="Search" />
                </form>
                <div>
                    <div>
                        {searchLocation && (
                            <div className={`searchLocations  shadow ${showResults ? '' : 'hidden'}`}>
                                {searchLocation.map((locations) => {
                                    return <div key={locations.id}>
                                        <Link to={`/location/${locations.place_name}/${locations.geometry.coordinates}`} >
                                            <div className="location">
                                                <p>{locations.place_name}</p>
                                            </div>
                                        </Link>
                                    </div>

                                })}
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </>
    )
}