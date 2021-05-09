import React from 'react'
import "./Navbar.css";

import logo from '../../Assets/logo.png';


const Navbar = ({ sidebarOpen, openSidebar }) => {
return (
  <div>
    <input type="text"/>
    <img className='m' src={logo} alt="profile pic" />
  </div>
  );
};

export default Navbar;