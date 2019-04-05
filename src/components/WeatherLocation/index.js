import React, {Component} from 'react';
import transformWeather  from './../../services/transformWeather';
import Location from './Location';
import WeatherData from './WeatherData';
import './styles.css';
import {
    SUN,
    SNOW,
} from './../../constants/weathers';
import {api_weather} from './../../constants/api_url'

class WeatherLocation extends Component {

    constructor(){
        super();
        this.state = {
            city: 'Madrid',
            data: null,
        }
        console.log("constructor");
    }

    componentDidMount() {
        console.log("componentDidMount");
        this.handlerUpdateClick();
    }

    componentDidUpdate(prevProps, prevState) {
        console.log("componentDidUpdate");
    }


    handlerUpdateClick = () => {               

        fetch(api_weather)
            .then(response => {
                return response.json();
            })
            .then(data => {

                const newWeather = transformWeather(data);
                console.log(newWeather)
                this.setState ({
                    data: newWeather,
                });
                
            });
           
    }

    render(){
        const {city, data} = this.state;
        console.log("render");

        return(
            <div className="weatherLocationCont">
                <Location city={city}/>
                { data ? 
                    <WeatherData data={data}/> :
                    "Cargando..."
                }    
                <button onClick={this.handlerUpdateClick}>Actualizar</button>
            </div>
        )
    }
};

export default WeatherLocation;