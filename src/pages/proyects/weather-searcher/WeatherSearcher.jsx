import "./weather-searcher.css";
import axios from "axios";

const ApiKey = "77e6d3444efdaafb28c080bd06f388f5";
const handleSubmit = (e) => {
  const form = document.getElementById("form");
  let cityName = document.getElementById("cityName");
  const datos = document.querySelector(".datos");
  const ciudadH2 = document.getElementById("ciudadH2");
  const estadoH3 = document.getElementById("estadoH3");
  const humedadH3 = document.getElementById("humedadH3");
  const temperaturaH3 = document.getElementById("temperaturaH3");
  e.preventDefault();
  estadoH3.textContent = "State: ";
  temperaturaH3.textContent = "Temperature: ";
  humedadH3.textContent = "Humidity: ";
  ciudadH2.innerHTML = `You are seeing the weather in <b>${cityName.value}</b>`;
  obtenerDatos(
    `https://api.openweathermap.org/data/2.5/weather?q=${cityName.value}&appid=${ApiKey}`,
    cityName.value
  );
  cityName.value = "";
};

const WeatherSearcher = () => {
  return (
    <form id="form" onSubmit={(e) => handleSubmit(e)}>
      <h1>Weather searcher</h1>
      <div className="datos">
        <h2 id="ciudadH2"></h2>
        <h3 id="estadoH3"></h3>
        <h3 id="temperaturaH3"></h3>
        <h3 id="humedadH3"></h3>
      </div>
      <div className="inputs">
      <input
        type="text"
        placeholder="Search for a city..."
        id="cityName"
        required
      ></input>
      <input type="submit" value="Search"></input>
      </div>
    </form>
  );
};

const obtenerDatos = async (url, cityName) => {
  try{
    let resultado = await axios(url);
    estadoH3.textContent += resultado.data.weather[0].main;
    humedadH3.textContent += resultado.data.main.humidity;
    temperaturaH3.textContent +=
      Math.round(resultado.data.main.temp - 273) + "°C";
  
  } catch (error) {
     estadoH3.textContent = "";
     humedadH3.textContent = "";
     temperaturaH3.textContent = "";
     ciudadH2.innerHTML = `It seems that <b>${cityName}</b> is not a valid city :(`;
   }
};

export default WeatherSearcher;
