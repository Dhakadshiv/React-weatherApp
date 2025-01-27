import SearchBox from "./SearchBox"
import InfoBox from "./infoBox"
import { useState } from 'react';
export default function WeatherApp() {
    const [WeatherInfo, setWeatherInfo] = useState({
        city: "eg. Delhi",
        feelslike: 24,
        temp: 27,
        tempMin: 23,
        tempMax: 29,
        humidity: 80,
        weather: "Cloudy"

    });
    let updateInfo=(newInfo)=>{ // reRender  
        setWeatherInfo(newInfo);
    }
    return (
        <div style={{textAlign:"center"}}>
            <h2>Weather App</h2>
            <SearchBox updateInfo={updateInfo}/>
            <InfoBox info={WeatherInfo}/>
         
        </div>
    )
}