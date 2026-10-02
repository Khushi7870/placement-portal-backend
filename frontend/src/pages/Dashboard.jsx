import { useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import BackButton from "../components/BackButton";
import API from "../services/api";
import { useSnackbar } from "notistack";
import "./Dashboard.css";



function Dashboard() {
  const { enqueueSnackbar } = useSnackbar();
  const navigate = useNavigate();

  const location = useLocation();
  console.log("LOCATION STATE:", location.state);

  const submittedResult = location.state;

  const [searchTerm, setSearchTerm] = useState("");

  const email = localStorage.getItem("userEmail");
  const userName = localStorage.getItem("userName") || "Student";

  const [results, setResults] = useState([]);

  useEffect(() => {
    if (!email) {
      enqueueSnackbar("Please login first", {
        variant: "warning",
      });

      navigate("/login");
      return;
    }

    fetchResults();
  }, [email, navigate, enqueueSnackbar]);

  const fetchResults = async () => {
    try {
      const response = await API.get(
        `/results/email/${encodeURIComponent(email)}`
      );

      console.log("Dashboard user results:", response.data);
      setResults(response.data);
    } catch (error) {
      console.error("Error fetching user results:", error);
    }
  };

  const totalTests = results.length;

  const latestDashboardResult =
  results.length > 0 ? results[results.length - 1] : null;

  const latestScore = latestDashboardResult
  ? latestDashboardResult.score
  : 0;

  const averageScore =
    results.length > 0
      ? Math.round(
          results.reduce((sum, result) => sum + result.score, 0) /
            results.length
        )
      : 0;
  const handleSearch = () => {
  const value = searchTerm.trim();

  if (!value) {
    enqueueSnackbar("Please enter a category", {
      variant: "warning",
    });
    return;
  }

  console.log("Searching category:", value);

  navigate(`/test?category=${encodeURIComponent(value)}`);
   };

  const handleLogout = () => {
    localStorage.removeItem("userEmail");
    localStorage.removeItem("userName");

    enqueueSnackbar("Logged out successfully", {
      variant: "info",
    });

    navigate("/login");
  };

  return (
    <div className="dashboard-page">

      {/* Sidebar */}
      <aside className="dashboard-sidebar">

        <div className="sidebar-brand">
          <div className="brand-icon">🎓</div>
          <span>Placement Portal</span>
        </div>

        <nav className="sidebar-menu">

          <button
            className="sidebar-item active"
            onClick={() => navigate("/dashboard")}
          >
            <span>🏠</span>
            Dashboard
          </button>

          <button
            className="sidebar-item"
            onClick={() => navigate("/test")}
          >
            <span>📝</span>
            Tests
          </button>

          <button
            className="sidebar-item"
            onClick={() => navigate("/results")}
          >
            <span>📊</span>
            Results
          </button>

          <button
            className="sidebar-item"
            onClick={() => navigate("/profile")}
          >
            <span>👤</span>
            Profile
          </button>

        </nav>

        <button className="sidebar-logout" onClick={handleLogout}>
          <span>🚪</span>
          Logout
        </button>

      </aside>

      {/* Main Content */}
      <main className="dashboard-main">
        
         {/* Back Button */}
           <BackButton />
           
        {/* Top Header */}
        <header className="dashboard-header">

       <div className="dashboard-search">
  <input
    type="text"
    placeholder="Search tests..."
    value={searchTerm}
    onChange={(e) => setSearchTerm(e.target.value)}
    onKeyDown={(e) => {
      if (e.key === "Enter") {
        handleSearch();
      }
    }}
  />

  <button
    type="button"
    className="search-button"
    onClick={handleSearch}
  >
    🔍
  </button>
</div>

          <div className="dashboard-user">
            
            <div className="user-avatar">
              {userName.charAt(0).toUpperCase()}
            </div>

            <div className="user-details">
              <strong>{userName}</strong>
              <small>Student</small>
            </div>

          </div>

        </header>

        {/* Welcome Banner */}
        <section className="welcome-banner">

          <div className="welcome-text">
            <p>Welcome back,</p>

            <h1>{userName}!</h1>

            <span>
              Your future is built by what you do today.
              <br />
              Keep learning, keep growing!
            </span>
          </div>

          <div className="welcome-illustration">
            🎓
          </div>

        </section>
         
         {submittedResult && (
        <div
        style={{
         background: "#d4edda",
          border: "2px solid #28a745",
         padding: "15px",
         borderRadius: "10px",
        marginBottom: "20px",
         }}
         >
         <h3>
         🎉 Test Submitted Successfully!
          </h3>

          <p>
          Score: {submittedResult.score} / {submittedResult.totalQuestions}
           </p>
           </div>
            )}


        {/* Statistics */}
        <section className="dashboard-stats">

          <div className="stat-card blue">
            <div className="stat-icon">📝</div>

            <p>Tests Attempted</p>

            <h2>{totalTests}</h2>

            <span>Total tests you have taken</span>
          </div>

          <div className="stat-card green">
            <div className="stat-icon">✓</div>

            <p>Latest Result</p>


            <h2>{latestScore}</h2>

            <span>Your latest test score</span>
          </div>

          <div className="stat-card purple">
            <div className="stat-icon">📈</div>

            <p>Average Score</p>

            <h2>{averageScore}</h2>

            <span>Your average test score</span>
          </div>

             
        </section>

        {/* Lower Section */}
        <section className="dashboard-grid">

          {/* Recent Tests */}
          <div className="dashboard-card">

            <div className="card-header">
              <h2>Recent Tests</h2>

              <button onClick={() => navigate("/results")}>
                View All →
              </button>
            </div>

            {results.length === 0 ? (
              <div className="empty-state">
                <span>📝</span>
                <p>No tests attempted yet.</p>

                <button
                  onClick={() => navigate("/test")}
                  className="primary-small-btn"
                >
                  Take Your First Test
                </button>
              </div>
            ) : (
              <div className="recent-tests">

                {results.slice(-3).reverse().map((result) => (
                  <div className="recent-test" key={result.id}>

                    <div className="test-icon">
                      📝
                    </div>

                    <div className="test-info">
                      <strong>Placement Test</strong>

                      <small>
                        {result.totalQuestions} Questions
                      </small>
                    </div>

                    <div className="score-badge">
                      {result.score}/{result.totalQuestions}
                    </div>

                  </div>
                ))}

              </div>
            )}

          </div>

        </section>

        {/* Bottom CTA */}
        <section className="dashboard-cta">

          <div className="cta-icon">
            🚀
          </div>

          <div>
            <h2>Ready for the next step?</h2>

            <p>
              Take more tests, improve your skills and prepare
              for your placement journey.
            </p>
          </div>

          <button onClick={() => navigate("/test")}>
            Take a Test →
          </button>

        </section>

      </main>

    </div>
  );
}

export default Dashboard;