import React from "react";

function Profile() {

  const userName = localStorage.getItem("userName");
  const userEmail = localStorage.getItem("userEmail");

  return (
    <div style={{ padding: "30px" }}>
      <h1>👤 My Profile</h1>

      <div
        style={{
          background: "white",
          padding: "20px",
          borderRadius: "10px",
          maxWidth: "500px",
          marginTop: "20px",
        }}
      >
        <p>
          <strong>Name:</strong> {userName}
        </p>

        <p>
          <strong>Email:</strong> {userEmail}
        </p>
      </div>
    </div>
  );
}

export default Profile;