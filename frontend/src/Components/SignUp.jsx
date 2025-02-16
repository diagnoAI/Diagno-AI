import { NavLink } from "react-router-dom";
import { useState, useEffect } from "react"; 
import "../styles/SignUp.css";

function SignUp() {
  const [fullname, setFullname] = useState("");
  const [password, setPassword] = useState("");
  const [cpassword, setCpassword] = useState("");
  const [email, setEmail] = useState("");
  const [cpassStatus, setCpassStatus] = useState(false);
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(null);

  useEffect(() => {
    if (password === cpassword) {
      setCpassStatus(false);
    } else {
      setCpassStatus("Password and Confirm Password must be the same");
    }
  }, [password, cpassword]);

  // Handle form submission
  const onSubmit = async (e) => {
    e.preventDefault();

    if (cpassStatus) {
      setError("Please fix the errors before submitting.");
      return;
    }

    const data = { fullname, password, email };

    try {
      const res = await fetch("http://127.0.0.1:5000/api/signup/", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      const result = await res.json();

      if (res.ok) {
        setSuccess(result.msg);
        setError(null);
      } else {
        setError(result.msg);
        setSuccess(null);
      }
    } catch (err) {
      setError("Signup failed. Please try again.");
      setSuccess(null);
    }
  };

  return (
    <div className="form-container">
      <form onSubmit={onSubmit} className="form1">
      <h2>Sign Up</h2>
        <div className="input">
          <label htmlFor="fullname" className="label2">Full Name:</label>
          <input
          className="input2"
            type="text"
            id="fullname"
            name="fullname"
            value={fullname}
            onChange={(e) => setFullname(e.target.value)}
            required
          />
        </div>

        <div className="input">
          <label htmlFor="email" className="label2">Email:</label>
          <input
          className="input2"
            type="email"
            id="email"
            name="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>

        <div className="input" >
          <label htmlFor="password" className="label2">Password:</label>
          <input
            className="input2"
            type="password"
            id="password"
            name="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>

        <div className="input">
          <label htmlFor="confirm-password" className="label2">Confirm Password:</label>
          <input
            className="input2"
            type="password"
            id="confirm-password"
            name="c_password"
            value={cpassword}
            onChange={(e) => setCpassword(e.target.value)}
            required
          />
          {cpassStatus && <p style={{ color: "red" }}>{cpassStatus}</p>}
        </div>

        <div className="check">
          <label htmlFor="terms" className="label21">
            <input type="checkbox" id="terms" name="terms" required /> I agree
            to the <a href="#" id="a21">Terms and Conditions</a>
          </label>
        </div>

        {error && <p style={{ color: "red",fontsize: "4px",marginTop:"10px",fontWeight:"100"}}>{error}</p>}
        {success && <p style={{ color: "green" }} >{success}</p>}

        <button type="submit" className="btn1">Sign Up</button>
        <p id="p2">
          Already have an account? <NavLink to="/login" id="a2">Login</NavLink>
        </p>
      </form>
    </div>
  );
}

export default SignUp;
