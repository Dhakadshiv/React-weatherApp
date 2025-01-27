 
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import "./SearchBox.css"
import { useState } from 'react';


export default function SearchBox({updateInfo}){ // This is a functional component that will return a form to search the city
    let [city, setCity] = useState('')  // This is a state variable that will store the city name
    let [error, setError] = useState(false)  // This is a state variable that will store th
    const API_URL="https://api.openweathermap.org/data/2.5/weather";
    const API_KEY="f83b32e7d8409e1fb77e621ef3457236";

    let getWeatherInfo=async()=>{
        try{
       let response= await fetch(`${API_URL}?q=${city}&appid=${API_KEY}&units=metric`);
       let jsonResponse=await response.json();
       
       let result={
        city:city,
        temp:jsonResponse.main.temp,
        tempMin:jsonResponse.main.temp_min,
        tempMax:jsonResponse.main.temp_max,
        humidity:jsonResponse.main.humidity,
        feelsLike:jsonResponse.main.feels_like,
        weather:jsonResponse.weather[0].description,
       };
       console.log(result)
       return result;
    }catch(error){
        console.log("Error",error)
        throw error;
    }
}
    
    
    let handleChange=(evt)=>{
        setCity(evt.target.value);
    }
    let handleSubmit=async(evt)=>{
        try{ 
        evt.preventDefault();
        console.log(city)
        setCity("")
       let newInfo=await  getWeatherInfo()
       updateInfo(newInfo)
        }catch(error){
           setError(true)
    }
}
    return(
        <div className='SearchBox'>
            
         <form action="" onSubmit={handleSubmit}>
            <br /> 

         <TextField id="city" label="Type here" variant="outlined" required  value={city} onChange={handleChange}/>
         <br /> <br />
         {error && <div style={{color:"red"}}>City not found</div>}
         <br />
         <Button variant="contained" type="submit" >Search</Button>

        
         </form>
        </div>
        
    )
}