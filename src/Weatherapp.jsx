import { Search } from "@mui/icons-material";
import Searchbox from "./Searchbox";
import Weatherinfo from "./Weatherinfo";
import { useState } from "react";

export default function Weatherapp(){
    let [weatherinfo,setweatherinfo] = useState({
        city : "",
        feels_like: 0,
        grnd_level: 0,
        humidity: 0,
        pressure: 0,
        temp: 0,
        temp_max: 0,
        temp_min: 0
    })
    let updateCity = (newCity) => {
        setweatherinfo(newCity);
    }
    return(
        <div>
            <h2>Weather app by lucky</h2>
            <Searchbox updateCity={updateCity}/>
            <Weatherinfo info={weatherinfo}/>
        </div>
    )
}