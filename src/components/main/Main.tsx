import Weather from "../weather-info/Weather";

import "./main.scss"

const MainSection: React.FC = () => {
    return (
        <section className="main__section">
            <Weather />
        </section>
    );
}

export default MainSection;
