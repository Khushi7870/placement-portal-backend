import { useNavigate } from "react-router-dom";

function Dashboard() {

  const email = localStorage.getItem("userEmail");
  const navigate = useNavigate();
  
  return (
    <div>
      <h1>Student Dashboard</h1>

      <p>Welcome to Placement Preparation Portal</p>

      <h3>Logged In User</h3>
      <p>Email: {email}</p>

      <hr />

<h3>Online Test</h3>

<p>Attempt aptitude questions and check your score.</p>

<button
  onClick={() => navigate("/test")}
  style={{
    padding: "10px 20px",
    backgroundColor: "#007bff",
    color: "white",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer",
    marginBottom: "20px",
  }}
>
  Start Test
    </button>

    <hr />

    <h3>Test Statistics</h3>

    <p>Total Tests Attempted: 0</p>

    <p>Highest Score: 0</p>

    <p>Average Score: 0</p>
    </div>
  );
}

export default Dashboard;