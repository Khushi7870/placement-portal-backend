import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import API from "../services/api";

function Dashboard() {

  
  const navigate = useNavigate();
  const email = localStorage.getItem("userEmail");
  const [results, setResults] = useState([]);

// Check if user is logged in
useEffect(() => {
  
  if (!email) {
    alert("Please login first.");
    navigate("/login");
   return;
  }
    fetchResults();
  
}, [navigate]);

   const fetchResults = async () => {
  try {
    const response = await API.get("/results");
    console.log(response.data);
    setResults(response.data);
  } catch (error) {
    console.error(error);
  }
   };

   const totalTests = results.length;
   const highestScore =
  results.length > 0
    ? Math.max(...results.map(result => result.score))
    : 0;
    const averageScore =
  results.length > 0
    ? (
        results.reduce((sum, result) => sum + result.score, 0) /
        results.length
      ).toFixed(2)
    : 0;

    const handleLogout = () => {
    localStorage.removeItem("userEmail");

    alert("Logged out successfully.");

    navigate("/login");
    };
  return (
  <div
    style={{
      maxWidth: "900px",
      margin: "40px auto",
      padding: "30px",
      backgroundColor: "#f8f9fa",
      borderRadius: "10px",
      boxShadow: "0 4px 10px rgba(0,0,0,0.1)",
    }}
  >
      <h1
  style={{
    textAlign: "center",
    color: "#0d6efd",
    marginBottom: "15px",
  }}
>
  🎓 Student Dashboard
</h1>
  <div
  style={{
    display: "flex",
    justifyContent: "flex-end",
    marginBottom: "20px",
  }}
>
  <button
    onClick={handleLogout}
    style={{
      backgroundColor: "#dc3545",
      color: "white",
      border: "none",
      padding: "10px 18px",
      borderRadius: "6px",
      cursor: "pointer",
      fontSize: "15px",
    }}
  >
    Logout
  </button>
</div>

      <p
  style={{
    textAlign: "center",
    fontSize: "18px",
    color: "#555",
    marginBottom: "30px",
  }}
>
  Welcome to Placement Preparation Portal
</p>

      <h3
     style={{
      color: "#333",
      textAlign: "center",
      }}
      >
       👤 Logged In User
      </h3>
      <p
    style={{
     textAlign: "center",
     fontSize: "18px",
     color: "#444",
     }}
      >
     <strong>Email:</strong> {email}
     </p>

      <hr />

<div
  style={{
    backgroundColor: "#ffffff",
    padding: "25px",
    borderRadius: "10px",
    boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
    textAlign: "center",
    marginBottom: "30px",
  }}
>
  <h3 style={{ color: "#0d6efd" }}>
    📝 Online Test
  </h3>

  <p style={{ color: "#555" }}>
    Attempt aptitude questions and check your score.
  </p>

  <button
    onClick={() => navigate("/test")}
    style={{
      padding: "12px 25px",
      backgroundColor: "#0d6efd",
      color: "white",
      border: "none",
      borderRadius: "8px",
      fontSize: "16px",
      cursor: "pointer",
      marginTop: "10px",
    }}
  >
    Start Test
  </button>

  
  </div>
<div
  style={{
    backgroundColor: "#ffffff",
    padding: "25px",
    borderRadius: "10px",
    boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
    textAlign: "center",
  }}
>
  <h3 style={{ color: "#198754" }}>
    📊 Test Statistics
  </h3>

  <p style={{ fontSize: "18px" }}>
  <strong>Total Tests Attempted:</strong> {totalTests}
  </p>

 <p style={{ fontSize: "18px" }}>
  <strong>Highest Score:</strong> {highestScore}
 </p>

  <p style={{ fontSize: "18px" }}>
  <strong>Average Score:</strong> {averageScore}
 </p>
</div>
    </div>
  );
}

export default Dashboard;