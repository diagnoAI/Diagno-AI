import { useState } from "react";

function SignIn() {
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");

  const onSubmit = async (e) => {
    e.preventDefault();

    // const data = {
    //   body: {
    //     email,
    //     pass,
    //   },
    // };

    // const st = JSON.stringify(data);
    // console.log(st);

    // try {
    //   const res = await fetch("https://127.0.0.1:5000/api/login", {
    //     method: "POST",
    //     headers: {
    //       "Content-Type": "application/json",
    //     },
    //     body: st,
    //   });

    //   const result = await res.json();
    //   console.log(result);
    // } catch (error) {
    //   console.error("Error:", error);
    // }
    const res = await fetch("http://127.0.0.1:5000/api/login")
    const data = res.json()
    console.log(data)
  };

  return (
    <div className="form" onSubmit={onSubmit}>
      <form className="f-con">
        <h2>Log-in</h2>
        <label htmlFor="email">Email:</label>
        <input
          type="text"
          id="email"
          name="username"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        /><br />
        <label htmlFor="password">Password:</label>
        <input
          type="password"
          id="password"
          name="password"
          value={pass}
          onChange={(e) => setPass(e.target.value)}
          required
        /><br />
        <input type="submit" value="Submit" className="btn" />
        <p>
          <a href="#">Forgot Password?</a> | New user? <a href="/signUp">Sign Up</a>
        </p>
      </form>
    </div>
  );
}

export default SignIn;