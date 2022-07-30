import React from "react";
import './About.css'

export default function About() {
    return (
      <div className="container">
       <br/>
      <h1>Aplicacion Creada con React</h1>
      <div className="li">
       <li className="lis">Componentes Funcionales</li>
       <li className="lis">Css Modules</li>
       <li className="lis">React - Uso de Estados</li>
       <li className="lis">React Router </li>
      </div>
      <h1>
        Aplicacion que trae informacion en tiempo real atraves de peticiones a una Api llamada 'openweathermap'
      </h1>
      </div>
    )
}
