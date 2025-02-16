import { NavLink } from 'react-router-dom';
import "../styles/Nav.css";

function Nav() {
  return (
    <div className="navbar">
      <h2 className="logo">Diagno.Ai</h2>
      <ul>
        <li><NavLink to="/">Home</NavLink></li>
        <li><NavLink to="/about">About Us</NavLink></li>
        <li><NavLink to="/contact">Contact Us</NavLink></li>
        <li><NavLink to="/login">Login</NavLink></li>
      </ul>
    </div>
  );
}

export default Nav;
