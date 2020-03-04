import React from 'react';
import { NavLink } from 'react-router-dom';
import './App.css';


const link = {
  width: '100px',
  padding: '12px',
  margin: '0 6px 6px',
  background: 'white',
  textDecoration: 'none',
  color: 'black',
  
}

const NavBar = () => {
  return (
    <div className="navbar">
      <NavLink 
        style={link} 
        to="/latin_americas"
        activeStyle={{
          background: "yellow"
        }}
      >Latin</NavLink>
      <NavLink 
        style={link} 
        to="/apacs"
        activeStyle={{
          background: "yellow"
        }}
      >Apac</NavLink>
    
   </div>
  );
}

export default NavBar;