import { useState } from "react";
import { NavLink } from 'react-router-dom';
import "../styles/SignIn.css";

function SignIn() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const onSubmit = async (e) => {
        e.preventDefault();
        const userDetails = { email, password };

        const url = "http://127.0.0.1:5000/api/login/";
        const options = {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(userDetails),
        };

        try {
            const res = await fetch(url,options);
            const msg = await res.json();  // Await response.json()
            alert(JSON.stringify(msg.msg))

            // if (response.ok) {
            //     alert(`Welcome, ${msg.name}!`);
            // } else {
            //     alert(msg.message);  // Show error message
            // }
        } catch (error) {
            alert("Error connecting to server");
        }
        
        // const res = await fetch("http://127.0.0.1:5000/api/login")
        // const data = await res.json()
        // alert(JSON.stringify(data))
    };

    return (
        <div className="form">
            <form className="f-con" method="POST" onSubmit={onSubmit}>
                <h2>Log-in</h2>
                <label htmlFor="email" id="label1">Email:</label>
                <input 
                className="input1"
                  type="text"
                  id="email"
                  name="username" 
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
                <br />
                <label htmlFor="password" id="label1">Password:</label>
                <input 
                 className="input1"
                  type="password"
                  id="password"
                  name="password" 
                  value={password} 
                  onChange={(e) => setPassword(e.target.value)}
                />
                <br />
                <input 
                  type="submit" 
                  value="Submit"
                  className="btn" 
                />
                <p id="p1">
                    <NavLink to = "#" id="a1">Forgot Password?</NavLink> | New user? <NavLink to = "/signup" id="a1">Sign Up</NavLink>
                </p>
            </form>
        </div>
    );
}

export default SignIn;
