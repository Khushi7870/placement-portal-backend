
import { useNavigate } from "react-router-dom";

function BackButton() {
  const navigate = useNavigate();

  const handleBack = () => {
    if (window.history.length > 1) {
      navigate(-1);
    } else {
      navigate("/dashboard");
    }
  };

  return (
    <button
      type="button"
      onClick={handleBack}
      style={{
        display: "inline-flex",
        alignItems: "center",
        gap: "8px",
        padding: "10px 18px",
        marginBottom: "20px",
        border: "1px solid #e2e7f5",
        borderRadius: "10px",
        background: "#ffffff",
        color: "#5140c9",
        fontSize: "15px",
        fontWeight: "600",
        cursor: "pointer",
      }}
    >
      ← Back
    </button>
  );
}

export default BackButton;