
import "./weather.scss";

const Weather: React.FC = () => {
    return (
        <div className="weather">
            <h1>25°</h1>
            <div className="city__info">
                <span className="city">Kyiv</span>
                <span className="time">05:27</span>
                <span className="date">Saturday Jan 14</span>
            </div>
            <div className="weather__info">
                <img src="" alt="weatherIcon" />
                <span>Clear</span>
            </div>
        </div>
    );
}

export default Weather;