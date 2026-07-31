import { useState } from "react";
import API from "../services/api";

function Register() {
    const [name, setName] = useState("");
const [email, setEmail] = useState("");
const [password, setPassword] = useState("");
const [role, setRole] = useState("");

const handleRegister = async (e) => {
  e.preventDefault();

  try {
    const response = await API.post("/users/register", {
      name,
      email,
      password,
      role
    });

    alert(response.data);

  } catch (error) {
    console.error(error);
    alert("Registration Failed");
  }
};

  return (
    <div className="login-container">
      <h2>Student Registration</h2>

      <form onSubmit={handleRegister}>

        <div>
          <label>Name</label>
          <input
             type="text"
             placeholder="Enter your name"
             value={name}
             onChange={(e) => setName(e.target.value)}
             />
        </div>

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

        <div>
          <label>Role</label>
          <input
          type="text"
          placeholder="Enter role"
          value={role}
          onChange={(e) => setRole(e.target.value)}
          />
        </div>

        <button type="submit">
          Register
        </button>

      </form>

      <p>
        Already have an account?
        <a href="/login"> Login</a>
      </p>

    </div>
  );
}

export default Register;