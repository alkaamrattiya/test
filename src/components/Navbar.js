// Navbar.jsx
import React from 'react';
import { NavLink } from 'react-router-dom';
 

function Navbar() {
  return (
    <nav className='navStyle'>
      <div className='logoStyle'>
        
          <div className='logoImageStyle'>APP LOGO</div>
            
      </div>
      <div className='buttonContainerStyle'>
        <NavLink to="/" className='buttonStyle'>
          Dashboard
        </NavLink>
        <NavLink to="/create-ad" className='buttonStyle'>
          Create Ad
        </NavLink>
      </div>
    </nav>
  );
}

export default Navbar;
