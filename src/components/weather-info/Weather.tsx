
import "./weather.scss";

const Weather: React.FC = () => {
    return (
        <div className="weather__section">
            <span className="degre">25°</span>
            <div className="city__info">
                <span className="city">London</span>
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