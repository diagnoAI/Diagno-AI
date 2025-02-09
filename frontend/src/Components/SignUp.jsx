import styles from "../Css/Signup.module.css"
import { NavLink } from 'react-router-dom';
import { useState,useEffect } from 'react'

function SignUp() {
  const [fullname,setfullname] = useState("")
  const [password,setpassword] = useState("")
  const [cpassword,setcpassword] = useState("")
  const [email,setemail] = useState("")
  const [cpassStatus,setcpassStatus] = useState(false)
  useEffect(()=>{
    if(password === cpassword){
      setcpassStatus(false)
    }
    else{
      setcpassStatus("password and confirm password must be same")
    }
  },[cpassword]);
  
  //onSubmit
  const onSumit = async (e)=>{
    e.preventDefault()
    if (setcpassStatus){
      const data = {
        fullname,
        password,
        email
      }
    }
    else{
      alert()
    }
    
    const res = await fetch(`http://127.0.01:5000/api/signup`)
    alert(res)
  };
  return(
    <>
      <div class="form" onSubmit={onSumit}>
        <h2>Sign Up</h2>
        <form onSubmit = {onSumit}>
          <div class="input">
            <label for="fullname">Full Name:</label>
            <input
              type="text"
              id="fullname"
              name="fullname"
              value = {fullname}
              onChange = {(e)=>{setfullname(e.target.value)}}
            />
          </div>

          <div class="input">
            <label for="email">Email:</label>
            <input 
              type="email" 
              id="email" 
              name="email" 
              value = {email} 
              onChange = {(e)=>{setemail(e.target.value)}}
            />
          </div>

          <div class="input">
            <label for="password">Password:</label>
            <input 
              type="password" 
              id="password" 
              name="password"
              value = {password}
              onChange = {(e)=>{setpassword(e.target.value)}}
            />
          </div>

          <div class="input">
            <label for="confirm-password">Confirm Password:</label>
            <input 
              type="password" 
              id="confirm-password" 
              name="c_password"
              value = {cpassword} 
              onChange = {(e)=>{setcpassword(e.target.value)}}
              required
            />
            {cpassStatus && <p>{cpassStatus}</p>}
          </div>

          <div class="check">
            <label for="terms">
              <input 
                type="checkbox" 
                id="terms" 
                name="terms" 
                required
              />
              I agree to the <a href="#">Terms and Conditions</a>
            </label>
          </div>

          <button type="submit">Sign Up</button>
          <p>Already have an account? <NavLink to = "/login">Login</NavLink></p>
        </form>
      </div>
    </>
  )
}

export default SignUp