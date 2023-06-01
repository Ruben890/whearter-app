import { Route, Routes } from "react-router";
import { Error404 } from "../page/Errors/404/404";
const RouteSWithNotFount = ({ children }) => {
    return (
        <Routes>
            {children}
            <Route path="*" element={<Error404 />} />
        </Routes >
    )
}

export default RouteSWithNotFount