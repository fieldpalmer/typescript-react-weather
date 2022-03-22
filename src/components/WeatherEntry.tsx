import React, {FC} from "react";
import {Weather} from "../model/Weather";
import {getIconUrl} from "../services/WeatherService";
import {convertUnixTimeToDate} from "../services/TimeUtilities";

interface WeatherEntryProps {
  weather: Weather;
}

export const WeatherEntry: FC<WeatherEntryProps> = ({weather}) =>
  <div>
    {/* {console.log(weather.main)} */}
    <div>{convertUnixTimeToDate(weather.dt).toLocaleTimeString()}</div>
    <div>
      <strong>{Math.round(weather.main.temp * 1.8 + 32)}°F</strong>
      <div>({Math.round(weather.main.temp_min * 1.8 + 32)}°F / {Math.round(weather.main.temp_max * 1.8 + 32)}°F)</div>
    </div>
    <div>Humidity: {weather.main.humidity}%</div>
    {weather.weather.map(condition =>
      <div key={condition.id}>
        <img src={getIconUrl(condition.icon)} alt={condition.main}/>{condition.description}
      </div>)
    }
  </div>;