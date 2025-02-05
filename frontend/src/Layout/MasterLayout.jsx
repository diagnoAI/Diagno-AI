import Nav from '../Components/Nav.jsx'
import { Outlet } from 'react-router-dom'
function MasterLayout() {
  return(
    <div>
      <div className='oc'>
        <Nav/>
        <Outlet/>
      </div>
    </div>
  )
}

export default MasterLayout