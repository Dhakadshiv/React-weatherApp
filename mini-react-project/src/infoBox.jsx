import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import "./infoBox.css"

export default function InfoBox({info}){ 
    const INT_URL="https://media.istockphoto.com/id/1089026982/photo/image-of-winter-fog-scene-in-delhi-with-india-gate-as-a-background.webp?a=1&b=1&s=612x612&w=0&k=20&c=MQ6ONlYlQ75EzP0d9wX-VTcR_LtAjYXALooBxaCCNcs="
    
    const HOT_URL="https://images.unsplash.com/photo-1500382017468-9049fed747ef?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8c3VuJTIwYW5kJTIwZmFybXxlbnwwfHwwfHx8MA%3D%3D";
    const COLD_URL="https://images.unsplash.com/photo-1519944159858-806d435dc86b?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8Y29sZHxlbnwwfHwwfHx8MA%3D%3D";
    const RAIN_URL="https://images.unsplash.com/photo-1519692933481-e162a57d6721?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fHJhaW4lMjBzaXNzaW9ufGVufDB8fDB8fHww";
    return (
        <div className="infoBox">
            
            <div className="cardContainer">
            <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        component="img"
        alt="green iguana"
        height="140"
        image={info.humidity>80? RAIN_URL :info.temp>20?HOT_URL:COLD_URL}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
         {info.city}
        </Typography>
        <Typography variant="body2"  color='text.secondary'  component={"span"}>
          <div>Temperature={info.temp}&deg;C</div>
          <div>Humidity={info.humidity}</div>
          <div>Min Temp={info.tempMin}&deg;C</div>
          <div>Max Temp={info.tempMax}&deg;C</div>
          <div>The weather can be describe as <b>{info.weather} </b> and feels like={info.feelsLike}&deg;C</div>
        </Typography>
      </CardContent>
     
    </Card>
    </div>
        </div>
    )
}