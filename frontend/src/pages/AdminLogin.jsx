import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useSnackbar } from "notistack";

function AdminLogin() {
  const navigate = useNavigate();
  const { enqueueSnackbar } = useSnackbar();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleAdminLogin = (e) => {
    e.preventDefault();

    // Admin credentials
    const adminEmail = "admin@gmail.com";
    const adminPassword = "admin123";

    if (email === adminEmail && password === adminPassword) {
      localStorage.setItem("adminLoggedIn", "true");

      enqueueSnackbar("Admin login successful!", {
        variant: "success",
      });

      navigate("/admin/dashboard");
    } else {
      enqueueSnackbar("Invalid admin email or password!", {
        variant: "error",
      });
    }
  };

  return (
    <div className="admin-login-page">
      <div className="admin-login-box">
        <h1>Admin Login</h1>

        <p>Login to access the Admin Portal</p>

        <form onSubmit={handleAdminLogin}>
          <input
            type="email"
            placeholder="Enter Admin Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />

          <input
            type="password"
            placeholder="Enter Admin Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />

          <button type="submit">
            Login
          </button>
        </form>
      </div>
    </div>
  );
}

export default AdminLogin;