import React from "react";
import { Link } from "react-router-dom";
import './Ciudad.css'

export default function Ciudad({city}) {
    console.log(city)
    return (
        
        <div className="ciudad1">
                <div className="ciudad">
                <Link to="/">
                    <h2>{city.name}</h2>
                    </Link>
                    <div className="">
                        <div>Temperatura: {city.temp} ºC</div>
                        <div>Clima: {city.weather}</div>
                        <div>Viento: {city.wind} km/h</div>
                        <div>Cantidad de nubes: {city.clouds}</div>
                        <div>Latitud: {city.latitud}º</div>
                        <div>Longitud: {city.longitud}º</div>
                    </div>
                    <br/>
                    <Link to="/">
                    <button className="inicio">Regresar</button>
                    </Link>
            </div>
        </div>
    )
}