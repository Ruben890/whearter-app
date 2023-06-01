import { BrowserRouter, Route } from 'react-router-dom';
import { Suspense } from "react";
import { Home } from "../page/home/home";
import { SearchResult } from "../page/searchResults/SearchResults";
import RouteSWithNotFount from "../utilities/routes-whith-not-fount";
import { Pulsar } from '@uiball/loaders';
const Routers = () => {

    return (
        <Suspense fallback={
            <div className="loading-spinner">
                <Pulsar
                    size={80}
                    speed={1.75}
                    color="#3498DB"
                />
            </div>}>

            <BrowserRouter>
                <RouteSWithNotFount>
                    <Route path="/" element={<Home />} />
                    <Route path="/location/:place_name/:coordinates" element={<SearchResult />} />
                </RouteSWithNotFount>
            </BrowserRouter>
        </Suspense>
    )
}

export default Routers