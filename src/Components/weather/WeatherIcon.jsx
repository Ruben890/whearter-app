import Icons from '../incos';
import "./weather.css"
const WeatherIcon = ({ description }) => {
    const renderIcon = (description) => {
        if (description in Icons) {
            const { icon } = Icons[description];
            return <img className="weather-icon__imagen" src={icon} alt={description} width='150px'  height='150px'/>;
        } else {
            const { icon } = Icons.defaultIcon;
            return <img className="weather-icon__imagen" src={icon} alt={description} width='150px'  height='150px'/>;
        }
    };

    return renderIcon(description)
};

export default WeatherIcon;
