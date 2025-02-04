import { useState } from "react"

function SignIn() {

  const [email,setEmail] = useState("")
  const [pass,setPass] = useState("")

  const onSubmit =  (e)=>{
      e.preventDefault()
      const data = {
        body:{
          email,
          pass
        }
      }

      const st = JSON.stringify(data)
      console.log(st)
      const res = fetch("https://127.0.0.1:5000/api/login")
  }

  return(
    <div class="form" onSubmit={onSubmit}>
      <form class="f-con">
        <h2>Log-in</h2>
        <label for="email">Email:</label>
        <input type="text" id="email" name="username" value={email} onChange={(e)=>{setEmail(e.target.value)}} required/><br/>
        <label for="password">Password:</label>
        <input type="password" id="password" name="password" value={pass} onChange={(e)=>{setPass(e.target.value)}} required/><br/>
        <input type="submit" value="Submit" class="btn"/>
        <p><a href="#">Forgot Password ?</a>   |    New user? <a href="/signUp">Sign Up</a></p>
      </form>
    </div>
  )
}

export default SignIn