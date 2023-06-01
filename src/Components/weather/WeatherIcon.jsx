import Icons from '../incos';
import "./weather.css"
const WeatherIcon = ({ description }) => {
    const renderIcon = (description) => {
        if (description in Icons) {
            const { icon } = Icons[description];
            return <img className=".weather-icon" src={icon} alt={description} />;
        } else {
            const { icon } = Icons.defaultIcon;
            return <img className=".weather-icon__image" src={icon} alt="Default" />;
        }
    };

    return renderIcon(description)
};

export default WeatherIcon;
