import Home from './Pages/Home.jsx'
import About from './Pages/About.jsx'
import Contact from './Pages/Contact.jsx'
import SignIn from './Components/SignIn.jsx'
import SignUp from './Components/SignUp.jsx'
import MasterLayout from './Layout/MasterLayout.jsx'
import { Route,createBrowserRouter,createRoutesFromElements,RouterProvider } from 'react-router-dom'
function App() {
  const r = createBrowserRouter(createRoutesFromElements(
      <Route path = "/" element = {<MasterLayout/>}>
        <Route index element={<Home/>}/>
        <Route path="Login" element={<SignIn/>}/>
        <Route path="Signup" element={<SignUp/>}/>
        <Route path="About" element={<About/>}/>
        <Route path="Contact" element={<Contact/>}/>
      </Route>
    )
  );
  return <RouterProvider router = {r}></RouterProvider>;
}

export default App;