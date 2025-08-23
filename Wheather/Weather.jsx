import React, { useState } from "react";
import axios from "axios";
import './Weather.css'

const Weather = () => {
  const [city, setCity] = useState("");
  const [weather, setWeather] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleCityChange = (event) => setCity(event.target.value);

  const fetchWeather = async () => {
  if (!city || !city.trim()) return;
  setLoading(true);
  console.debug('fetchWeather for', city);
    try {
      const response = await axios.get(
        `https://api.openweathermap.org/data/2.5/weather?q=${encodeURIComponent(
          city
        )}&appid=d5de078694252d900dbf0b07c02ea839`
      );
      setWeather(response.data);
    } catch (err) {
      console.error(err);
      setWeather(null);
    } finally {
      setLoading(false);
    }
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter") fetchWeather();
  };

  
  const celsius = (k) => Math.round(k - 273.15);

  return (
    <div className="weather-page" role="region" aria-label="weather">
      <div className="card">
        <label htmlFor="city-input" className="label">Search city</label>
        <div className="input-row">
          <input
            id="city-input"
            aria-label="City"
            type="text"
            placeholder="e.g. Mumbai"
            value={city}
            onChange={handleCityChange}
            onKeyDown={handleKeyDown}
            disabled={loading}
            className="input"
          />
          <button
            type="button"
            onClick={fetchWeather}
            disabled={loading || !city.trim()}
            aria-disabled={loading || !city.trim()}
            className="btn"
          >
            {loading ? "Loading…" : "Get"}
          </button>
        </div>

        <div style={{display:'flex',justifyContent:'space-between',alignItems:'center',marginTop:12}}>
          <button
            type="button"
            onClick={() => { setCity(""); setWeather(null); }}
            className="clear"
          >
            Clear
          </button>
        </div>

        {weather && (
          <div className="card-inner" aria-live="polite">
            <div className="weather-row">
              <img
                alt={weather.weather?.[0]?.description || 'weather icon'}
                src={`https://openweathermap.org/img/wn/${weather.weather?.[0]?.icon}@2x.png`}
                style={{width:80,height:80}}
              />
              <div style={{flex:1}}>
                <h3 style={{margin:0,fontSize:18,fontWeight:600}}>{weather.name}, {weather.sys?.country}</h3>
                <div className="weather-temp">{celsius(weather.main.temp)}°C</div>
                <p style={{marginTop:6,color:'#94a3b8',textTransform:'capitalize'}}>{weather.weather?.[0]?.description}</p>
              </div>
            </div>

            <div className="info">
              <div>Feels like: <strong style={{color:'#e6eef6'}}>{celsius(weather.main.feels_like)}°C</strong></div>
              <div>Humidity: <strong style={{color:'#e6eef6'}}>{weather.main.humidity}%</strong></div>
              <div>Wind: <strong style={{color:'#e6eef6'}}>{Math.round(weather.wind.speed)} m/s</strong></div>
              <div>Updated: <strong style={{color:'#e6eef6'}}>{new Date((weather.dt || Date.now()/1000) * 1000).toLocaleTimeString()}</strong></div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Weather;

