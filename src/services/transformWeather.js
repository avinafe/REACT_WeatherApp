import convert from 'convert-units';
import {
    SUN,
    SNOW, 
} from '../constants/weathers';

const getTemp = kelvin =>  Number(convert(kelvin).from('K').to('C').toFixed(2));
    
const getWeatherState = weather_data => {
    return SUN;
}

const transformWeather = weather_data => {
    const {temp, humidity} = weather_data.main;
    const {speed} = weather_data.wind;
    const weatherState = getWeatherState();

    const data = {
        temperature: getTemp(temp),
        weatherState,
        humidity,
        wind: `${speed} m/s`,
    }

    return data;
};

export default transformWeather;