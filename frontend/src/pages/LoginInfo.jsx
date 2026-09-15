import React from "react";

function LoginInfo() {

  const email = localStorage.getItem("userEmail");

  return (
    <div style={{ padding: "40px", textAlign: "center" }}>

      <h1>Login Information</h1>

      {email ? (
        <div>
          <p>
            <strong>Email:</strong> {email}
          </p>
        </div>
      ) : (
        <p>No user is currently logged in.</p>
      )}

    </div>
  );
}

export default LoginInfo;