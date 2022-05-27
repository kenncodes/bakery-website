import { Link } from "react-router-dom";
import hamburger from '../hamburger.png';
import { useState } from "react";

const Navbar = (props) => {

  const [showMobileMenu,setShowMobileMenu] = useState(false);
  
  return (
    <div className="navbar">
      <div className="navContainer">
        <div className="icon">
         <img src={hamburger} height="30px"/>
        </div>
        <h1 className="bakeryName">{props.bakeryName}</h1>
      </div>

      <div className="navItemsContainer">
        <ul className="navItems">
          <Link to="/menu">
            <li>Menu</li>
          </Link>
          <Link to="/about">
            <li>About</li>
          </Link>
          <Link to="/location">
            <li>Location</li>
          </Link>
          <Link to="/gallery">
            <li>Gallery</li>
          </Link>
          <Link to="/contact">
            <li>Contact</li>
          </Link>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
