import React, { useState } from "react";
import './SearchBar.css'

export default function SearchBar({onSearch}) {
  const [city, setCity] = useState("");
  return (
    <div>
    <form
    onSubmit={(e) => {
      e.preventDefault();
      onSearch(city);
      e.target.value= ""
    }}>
      <input
      className="text"
        type="text"
        placeholder="Ingrese Ciudad..."
        value={city}
        onChange={e => setCity(e.target.value) }
      />
      <input type="submit" value="Buscar" 
      className="boton"
      />
    </form>
    </div>
  );
}