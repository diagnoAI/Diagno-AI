function SignIn() {
  return(
    <div class="form">
      <form class="f-con" method = "POST" action = "http://127.0.0.1:5000/api/login">
        <h2>Log-in</h2>
        <label for="email">Email:</label>
        <input type="text" id="email" name="username" required/><br/>
        <label for="password">Password:</label>
        <input type="password" id="password" name="password" required/><br/>
        <input type="submit" value="Submit" class="btn"/>
        <p><a href="#">Forgot Password ?</a>   |    New user? <a href="/signUp">Sign Up</a></p>
      </form>
    </div>
  )
}

export default SignIn