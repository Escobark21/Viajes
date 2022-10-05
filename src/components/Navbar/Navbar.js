import React, { useState } from 'react'
import { NavLink } from 'react-router-dom';
import Menu from "../../data/Menu.json";
import "./Navbar.css";
import { FaPlane, FaTimes, FaBars } from "react-icons/fa";

const Navbar = () => {
  const [isMobile, setIsMobile] = useState(false);
  
  return (

    <div className='Navbar'>
      <h1 className='logo'> Viaja.com
        <FaPlane /></h1>
      <ul className={isMobile ? 'nav-menu-mobile' : 'nav-menu'}>
        {Menu.map((Menu) => {
          return (
            <li className='nav-link' key={Menu.id} >
              <NavLink to='/menu'>{Menu.nombre}</NavLink>
            </li>

          );

        })}
      </ul>
      <button className='mobile-menu-icon'
        onClick={() => setIsMobile(!isMobile)}>
        {isMobile ? <FaTimes /> : <FaBars />}
      </button>

    </div>

  )
}

export default Navbar