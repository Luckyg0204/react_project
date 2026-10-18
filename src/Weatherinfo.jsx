import Card from '@mui/material/Card';

import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import "./weatherinfo.css"
import Typography from '@mui/material/Typography';
export default function Weatherinfo({info}){
     let HOT_url = 'https://images.unsplash.com/photo-1545955413-209e03defb1f?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=NHwxMjA3fDA%3D'
     let Cold_url = 'https://images.unsplash.com/photo-1648835554106-ad32900e7117?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=NHwxMjA3fDA%3D'
     let rainy_url = 'https://images.unsplash.com/photo-1576514864427-f0809d2b66eb?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=NHwxMjA3fDA%3D'

    return(
        <div className='card'>
        <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        sx={{ height: 140 }}
        image={info.humidity > 80 ? rainy_url : info.temp > 15 ? HOT_url : Cold_url }
        title="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {info.city}
        </Typography>
        <Typography variant="body2" sx={{ color: 'text.secondary' }} component={"span"}>
          <p>City name = {info.city}</p>
          <p>tenpreature feels like = {info.feels_like}</p>
          <p>Humidity = {info.humidity}</p>
          <p>Level = {info.grnd_level}</p>
          <p>Pressure = {info.pressure}</p>
          <p>temp = {info.temp} &deg;C</p>
          <p>Max Temp = {info.temp_max} &deg;C</p>
          <p>Min Temp = {info.temp_min} &deg;C</p>
        </Typography>
      </CardContent>
      
    </Card>
    </div>
    )
}