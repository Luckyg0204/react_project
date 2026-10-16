import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { useState } from 'react';
export default function Searchbox(){
    let API = "a13b4fb74f7101616e7e531087304890";
    let [form,setform] = useState("");
    let url = `https://api.openweathermap.org/data/2.5/weather?q=${form}&appid=${API}`;
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
        console.log(jsonRes);
    }
    return(
        <div>
            <h1>Search for the weather</h1>
            <form onSubmit={handleSubmit}>
                <TextField id="City" label="City" variant="outlined" required value={form} onChange={handleInput}/>
                <br></br>
                <br></br>
                <Button variant="contained" type='submit'>search</Button>
            </form>

        </div>
    )
}