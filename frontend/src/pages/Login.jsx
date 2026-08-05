import { useState } from "react";
import API from "../services/api";
import { Link, useNavigate } from "react-router-dom";

function Login() {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async (e) => {
    e.preventDefault();

    if (email.trim() === "") {
  alert("Please enter your email.");
  return;
}

    if (password.trim() === "") {
     alert("Please enter your password.");
     return;
}    
     const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

     if (!emailPattern.test(email)) {
    alert("Please enter a valid email.");
    return;
      }

    try {
      const response = await API.post("/users/login", {
        email,
        password,
      });

      if (response.data === "Login Successful") {
        localStorage.setItem("userEmail", email);
    alert("Login Successful");
        setEmail("");
      setPassword("");

    navigate("/dashboard");
} else {
    alert("Login Failed");
}

    } catch (error) {
      console.error(error);
      alert("Login Failed");
    }
  };

  return (
    <div className="login-container">
      <h2>Student Login</h2>

      <form onSubmit={handleLogin}>

        <div>
          <label>Email</label>
          <input
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
     
        </div>

        <div>
          <label>Password</label>
          <input
            type="password"
            placeholder="Enter your password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>

        <button type="submit">Login</button>

      </form>

      <p>
     Don't have an account? <Link to="/register">Register</Link>
   </p>
    </div>
  );
}

export default Login;