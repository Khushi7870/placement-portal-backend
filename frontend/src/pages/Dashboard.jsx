function Dashboard() {

  const email = localStorage.getItem("userEmail");

  return (
    <div>
      <h1>Student Dashboard</h1>

      <p>Welcome to Placement Preparation Portal</p>

      <h3>Logged In User</h3>
      <p>Email: {email}</p>

      <hr />

      <h3>Test Statistics</h3>

      <p>Total Tests Attempted: 0</p>

      <p>Highest Score: 0</p>

      <p>Average Score: 0</p>
    </div>
  );
}

export default Dashboard;