 import { NavLink,Outlet } from 'react-router-dom'
 function Login() {
   return(
     <>
     <div class="btns">
      <NavLink to="signup">
       <li>SIGN UP</li>
      </NavLink>
      <NavLink to="signin">
       <li>SIGN IN</li>
      </NavLink>
     </div>
     <Outlet/>
     </>
  )
 }

export default Login