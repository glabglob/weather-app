//components
import AppLogo from '../logo/Logo';
import MainSection from '../main/Main';
import Sidebar from '../sidebar/Sibebar';

//custom hooks
import { useAppSelector } from '../hooks/useAppSelector';

//images if it's day
import dayClear from './img//bacgrounds-day/clear_d.jpg';
import dayCloudy from './img/bacgrounds-day/cloudy_d.jpg';
import dayOvercast from './img/bacgrounds-day/overcast_d.jpg';
import dayMist from './img/bacgrounds-day/mist_d.jpg';
import dayRain from './img/bacgrounds-day/rain_d.jpg';
import daySnow from './img/bacgrounds-day/snow_d.jpg';
import dayThunder from './img/bacgrounds-day/thunder_d.jpg';

//images if it's night
import nigthClear from './img/bacgrounds-night/clear_n.jpg';
import nigthCloudy from './img/bacgrounds-night/cloudy_n.jpg';
import nigthOvercast from './img/bacgrounds-night/overcast_n.jpg';
import nigthMist from './img/bacgrounds-night/mist_n.jpg';
import nigthRain from './img/bacgrounds-night/rain_n.jpg';
import nigthSnow from './img/bacgrounds-night/snow_n.jpg';
import nigthThunder from './img/bacgrounds-night/thunder_n.jpg';

//scss
import './App.scss';

function App() {

  const weatherState = useAppSelector((state) => state.currentWeatherReducer);
  let weatherBacground: string = '';

  const isDay = weatherState.is_day;
  const conditionCode = weatherState.conditionCode;

  if (conditionCode === 1000) {
    if (isDay) {
      weatherBacground = dayClear;
    } else {
      weatherBacground = nigthClear;
    }
  } else if (conditionCode === 1003 || conditionCode === 1006) {
    if (isDay) {
      weatherBacground = dayCloudy;
    } else {
      weatherBacground = nigthCloudy;
    }
  } else if (conditionCode === 1009) {
    if (isDay) {
      weatherBacground = dayOvercast;
    } else {
      weatherBacground = nigthOvercast;
    }
  } else if (
    conditionCode === 1030 ||
    conditionCode === 1135 ||
    conditionCode === 1147 ||
    conditionCode === 1150
  ) {
    if (isDay) {
      weatherBacground = dayMist;
    } else {
      weatherBacground = nigthMist;
    }
  } else if (
    conditionCode === 1063 ||
    conditionCode === 1180 ||
    conditionCode === 1183 ||
    conditionCode === 1192 ||
    conditionCode === 1195 ||
    conditionCode === 1186 ||
    conditionCode === 1189 ||
    conditionCode === 1198 ||
    conditionCode === 1201 ||
    conditionCode === 1240 ||
    conditionCode === 1243 ||
    conditionCode === 1246
  ) {
    if (isDay) {
      weatherBacground = dayRain;
    } else {
      weatherBacground = nigthRain;
    }
  } else if (
    conditionCode === 1066 ||
    conditionCode === 1114 ||
    conditionCode === 1210 ||
    conditionCode === 1213 ||
    conditionCode === 1216 ||
    conditionCode === 1219 ||
    conditionCode === 1222 ||
    conditionCode === 1225 ||
    conditionCode === 1255 ||
    conditionCode === 1258 ||
    conditionCode === 1279 ||
    conditionCode === 1282 ||
    conditionCode === 1069 ||
    conditionCode === 1204 ||
    conditionCode === 1072 ||
    conditionCode === 1117 ||
    conditionCode === 1168 ||
    conditionCode === 1171 ||
    conditionCode === 1207 ||
    conditionCode === 1237 ||
    conditionCode === 1252 ||
    conditionCode === 1261 ||
    conditionCode === 1264 ||
    conditionCode === 1153
  ) {
    if (isDay) {
      weatherBacground = daySnow;
    } else {
      weatherBacground = nigthSnow;
    }
  } else if (
    conditionCode === 1087 ||
    conditionCode === 1273 ||
    conditionCode === 1276
  ) {
    if (isDay) {
      weatherBacground = dayThunder;
    } else {
      weatherBacground = nigthThunder;
    }
  }


  return (
    <div className="App" style={{ backgroundImage: `url(${weatherBacground})` }}>
      <div className="container">
        <AppLogo />
        <MainSection />
        <Sidebar />
      </div>
    </div>
  );
}

export default App;
