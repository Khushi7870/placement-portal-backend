import { Navigate } from "react-router-dom";

function ProtectedRoute({ children }) {
  const userEmail = localStorage.getItem("userEmail");

  console.log("ProtectedRoute userEmail:", userEmail);

  if (!userEmail) {
    console.log("Redirecting to login...");
    return <Navigate to="/login" />;
  }

  return children;
}

export default ProtectedRoute;