import { useSnackbar } from "notistack";
import { useState } from "react";
import API from "../services/api";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

function Register() {
  const { enqueueSnackbar } = useSnackbar();
    const [name, setName] = useState("");
const [email, setEmail] = useState("");
const [password, setPassword] = useState("");
const [role, setRole] = useState("");

const navigate = useNavigate();

const handleRegister = async (e) => {
  e.preventDefault();

if (name.trim() === "") {
  enqueueSnackbar("Please enter your name.", {
    variant: "warning",
  });
  return;
}

if (email.trim() === "") {
  enqueueSnackbar("Please enter your email.", {
    variant: "warning",
  });
  return;
}

if (password.trim() === "") {
  enqueueSnackbar("Please enter your password.", {
    variant: "warning",
  });
  return;
}

if (role.trim() === "") {
  enqueueSnackbar("Please select your role.", {
    variant: "warning",
  });
  return;
}

   const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
   
  if (!emailPattern.test(email)) {
  enqueueSnackbar("Please enter a valid email address.", {
    variant: "warning",
  });
  return;
}

if (password.length < 6) {
  enqueueSnackbar("Password must be at least 6 characters long.", {
    variant: "warning",
  });
  return;
}

  try {
    const response = await API.post("/users/register", {
      name,
      email,
      password,
      role
    });

   if (response.data === "User Registered Successfully") {

  enqueueSnackbar(response.data, {
  variant: "success",
  });

  setName("");
  setEmail("");
  setPassword("");
  setRole("");

  navigate("/login");

} else {

  enqueueSnackbar(response.data, {
  variant: "success",
  });

}


  } catch (error) {
    console.error(error);
    enqueueSnackbar("Registration Failed", {
  variant: "error",
  });
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
          <select
        value={role}
        onChange={(e) => setRole(e.target.value)}
        >
       <option value="">Select Role</option>
       <option value="STUDENT">Student</option>
       <option value="ADMIN">Admin</option>
       </select>
        </div>

        <button type="submit">
          Register
        </button>

      </form>

       <p>
        Already have an account?
       <Link to="/login"> Login</Link>
       </p>

    </div>
  );
}

export default Register;