import "./forecast.scss";

const Forecast: React.FC = () => {
    return (
        <ul className="forecast__list">
            <h2>Forecast for 7 days</h2>
            <li className="forecast">15°</li>
            <li className="forecast">22°</li>
            <li className="forecast">11°</li>
            <li className="forecast">24°</li>
            <li className="forecast">24°</li>
            <li className="forecast">24°</li>
            <li className="forecast">24°</li>
        </ul>
    );
}

export default Forecast;