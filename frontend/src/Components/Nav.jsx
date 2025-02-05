import { NavLink } from 'react-router-dom';
function Nav() {
  return(
    <div className="navbar">
      <h2 className = "logo">Diagno.Ai</h2>
      <ul>
        <NavLink to = "/"><li>Home</li></NavLink>
        <NavLink to = "/about"><li>About Us</li></NavLink>
        <NavLink to = "/contact"><li>Contact Us</li></NavLink>
        <NavLink to = "/Login"><li>Login</li></NavLink>
      </ul>
    </div>
  )
}

export default Nav