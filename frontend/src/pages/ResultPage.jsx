import { useEffect, useState } from "react";
import API from "../services/api";

function ResultPage() {
  const [results, setResults] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchMyResults();
  }, []);

  const fetchMyResults = async () => {
    try {
      const userEmail = localStorage.getItem("userEmail");

      console.log("Logged in user email:", userEmail);

      if (!userEmail) {
        console.error("User email not found in localStorage");
        setLoading(false);
        return;
      }

      const response = await API.get(
        `/results/email/${encodeURIComponent(userEmail)}`
      );

      console.log("My Results:", response.data);

      setResults(response.data);
    } catch (error) {
      console.error("Error fetching my results:", error);
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return (
      <div style={{ padding: "30px", textAlign: "center" }}>
        <h2>Loading Results...</h2>
      </div>
    );
  }

  return (
    <div style={{ padding: "30px" }}>
      <h1 style={{ textAlign: "center" }}>My Results</h1>

      {results.length === 0 ? (
        <div style={{ textAlign: "center", marginTop: "40px" }}>
          <h2>No Results Found</h2>
          <p>Abhi tak aapne koi test submit nahi kiya hai.</p>
        </div>
      ) : (
        results.map((result) => (
          <div
            key={result.id}
            style={{
              border: "1px solid gray",
              borderRadius: "10px",
              padding: "20px",
              marginBottom: "20px",
            }}
          >
            <h2>{result.studentName || "Student"}</h2>

            <p>
              <strong>Email:</strong>{" "}
              {result.userEmail || "Not Available"}
            </p>

            <p>
              <strong>Score:</strong> {result.score}
            </p>

            <p>
              <strong>Total Questions:</strong> {result.totalQuestions}
            </p>
          </div>
        ))
      )}
    </div>
  );
}

export default ResultPage;