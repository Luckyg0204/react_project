import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { useState } from 'react';
import './Searchbox.css'
export default function Searchbox({updateCity}){
    let API = "a13b4fb74f7101616e7e531087304890";
    let [form,setform] = useState("");
    let url = `https://api.openweathermap.org/data/2.5/weather?q=${form}&appid=${API}&units=metric`;
   
    let handleInput = (e) => {
        setform(e.target.value);
    }
    let handleSubmit = (e) => {
        e.preventDefault();
        handleData();

    }
    let handleData = async () => {
        let response = await fetch(url);
        let jsonRes = await response.json();
        let info = {
            city : form,
            humidity : jsonRes.main.humidity,
            pressure : jsonRes.main.pressure,
            feels_like : jsonRes.main.feels_like,
            grnd_level : jsonRes.main.grnd_level,
            temp : jsonRes.main.temp,
            temp_max : jsonRes.main.temp_max,
            temp_min : jsonRes.main.temp_min
        }
        console.log(info);
        updateCity(info);

    }
    return(
        <div className='Searchbox'>
            <form onSubmit={handleSubmit}>
                <TextField id="City" label="City" variant="outlined" required value={form} onChange={handleInput}/>
                <br></br>
                <br></br>
                <Button variant="contained" type='submit'>search</Button>
            </form>

        </div>
    )
}