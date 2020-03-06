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
        to="/latin_america"
        activeStyle={{
          background: "yellow"
        }}
      >Latin America</NavLink>
      <NavLink 
        style={link} 
        to="/apac"
        activeStyle={{
          background: "yellow"
        }}
      >Asia-Pacific</NavLink>
      <NavLink 
        style={link} 
        to="/europe_america"
        activeStyle={{
          background: "yellow"
        }}
      >Europe and North America</NavLink>
    
   </div>
  );
}

export default NavBar;