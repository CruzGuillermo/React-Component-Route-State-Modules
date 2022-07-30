import React from 'react';
import Icono from './icono/icono.png'
import Icono1 from './icono/iconoinfo.jpg'
import SearchBar from './SearchBar.jsx';
import './Nav.css';
import { Link } from 'react-router-dom'

function Nav({onSearch}) {
  return (
    <div className="navbar - navicono"   >
      <Link to='/'>
      <div className="navglobal" >
        <button className='navglobal'>
          <img src={Icono} alt="" height='45' width='45' />
          Weather App
        </button>
        </div>
      </Link>
      <div className='Search'>
        <SearchBar
          onSearch={onSearch}
        />
        </div>
        <div >
         <Link to='/about'>       
        <button className='info'>
          <img src={Icono1} alt="" height='45' width='45' />
          About</button>        
      </Link>
      </div>
           
    </div>
  );
};


export default Nav;