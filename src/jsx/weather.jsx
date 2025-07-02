import '/src/styles/weather.css'
import React, {useEffect} from 'react';

export function Weather() {
  const [state, setState] = React.useState({
    city: "Oslo",
    temperature: 0,
    sunSet: "",
    sunRise: "",
    iconUrl: "",
    description: "",
  });
  // Замените 'YOUR_API_KEY' на ваш собственный API-ключ OpenWeatherMap
  const apiKey = 'd77e8a80bfcc7551c3135a39d716ce92';
  const url =
    `https://api.openweathermap.org/data/2.5/weather?q=` + state.city + `&appid=` + apiKey + '&units=metric';

  useEffect(() => {
    fetch(url).then((response) => response.json()).then((data) => {

      const sunsetTime = new Date(data.sys.sunset);
      const sunset =
        `${sunsetTime.getHours()}:${sunsetTime.getMinutes()}`;
      const sunriseTime = new Date(data.sys.sunrise);
      const sunrise =
        `${sunriseTime.getHours()}:${sunriseTime.getMinutes()}`;
      const iconUrl =
        `https://openweathermap.org/img/wn/${data.weather[0].icon}.png`

      console.log(data);

      setState(
        {...state,
          temperature: data.main.temp,
          sunSet: sunset,
          sunRise: sunrise,
          iconUrl: iconUrl,
          description: data.weather[0].description}
      );
    })

  }, [1])


  return <div>
    <h1>Прогноз погоды - <span id='city'>{state.city}</span></h1>
    <p className="description">Description: {state.description}</p>
    <div id="weather">{state.temperature} C</div>

    <img src={state.iconUrl} id="img" alt="weatherIcon"/>

    <div id="sunset">Sunset: {state.sunSet}</div>
    <div id="sunrise">Sunrise: {state.sunRise}</div>
  </div>


}