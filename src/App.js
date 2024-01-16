import "./App.css";
import search from "./search.png";
import ikona1 from "./clouds.png";
import wind from "./wind.png";
import humidity from "./humidity.png";
import clear from "./clear.png";
import drizzle from "./drizzle.png";
import mist from "./mist.png";
import rain from "./rain.png";
import snow from "./snow.png";

export default function App() {
  return <Vreme />;
}
function Vreme() {
  const api_key = "06a95360eeab58ef5ba028b8de7990d7";

  const Search = async () => {
    const element = document.getElementsByClassName("search");
    if (element[0].length === 0 || element[0].value === "") {
      return 0;
    }

    const url = `https://api.openweathermap.org/data/2.5/weather?q=${element[0].value}&units=Metric&appid=${api_key}`;

    const response = await fetch(url);
    let data = await response.json();
    let humidity = document.getElementsByClassName("humidity");
    let stepeni = document.getElementsByClassName("stepeni");
    let icon = document.getElementsByClassName("icon");
    let gradName = document.getElementsByClassName("gradName");
    let wind = document.getElementsByClassName("wind");

    humidity[0].innerHTML = data.main.humidity + "%";
    stepeni[0].innerHTML = Math.round(data.main.temp) + "°C";
    gradName[0].innerHTML = data.name;
    wind[0].innerHTML = data.wind.speed + "Km/h";
    if (data.weather[0].main == "Clouds") {
      icon.src = "./clouds.png";
    } else if (data.weather[0].main == "Rain") {
      icon.src = "./rain.png";
    } else if (data.weather[0].main == "Snow") {
      icon.src = "./snow.png";
    } else if (data.weather[0].main == "Drizzle") {
      icon.src = "./drizzle.png";
    } else if (data.weather[0].main == "Mist") {
      icon.src = "images/mist.png";
    }
  };
  return (
    <div className="vreme">
      <div className="input">
        <input type="text" placeholder="Search" className="search"></input>{" "}
        <button id="btn" onClick={Search}>
          <img src={search}></img>
        </button>
      </div>
      <div className="grad">
        <img src={ikona1} className="icon"></img>
        <br></br>
        <h3 className="gradName">London</h3>
        <br></br>
        <h3 className="stepeni">22</h3>
      </div>
      <div class="detalji">
        <div class="col">
          <img src={humidity} alt="" />
          <div>
            <p class="humidity">50%</p>
            <p>Humidity</p>
          </div>
        </div>
        <div class="col">
          <img src={wind} alt="" />
          <div>
            <p class="wind">15km/h</p>
            <p>Wind</p>
          </div>
        </div>
      </div>
    </div>
  );
}
