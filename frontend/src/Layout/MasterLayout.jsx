import Nav from '../Components/Nav.jsx'
import { Outlet } from 'react-router-dom'
function MasterLayout() {
  return(
    <div>
      <Nav/>
      <Outlet/>
    </div>
  )
}

export default MasterLayout