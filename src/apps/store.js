import { configureStore } from "@reduxjs/toolkit";
import searchMapBoxSlice from "../features/SearchMapBox/searchMapBox.slice";
import ClimaSlice from "../features/Clima/Clima.slice";
import weather5dayaSlice from "../features/Clima/weather5daya.slice";
export const store = configureStore({
    reducer: {
        location: searchMapBoxSlice,
        weather: ClimaSlice,
        weather5day: weather5dayaSlice
    }

})