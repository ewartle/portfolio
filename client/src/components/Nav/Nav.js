import React from "react";
import {Link} from "react-router-dom";

const Nav = () =>
<nav>
    
    <div className="nav-wrapper">
      <Link to="/contact" className="brand-logo">Lisa Ewart</Link>
      <ul id="nav-mobile" className="right hide-on-med-and-down">
        <li><Link to="/" >About</Link></li> 
        <li><Link to="/contact" >Contact</Link></li> 
        <li><Link to = "/portfolio">Portfolio</Link></li>

      </ul>
    </div>
  </nav>
        
  

export default Nav;
