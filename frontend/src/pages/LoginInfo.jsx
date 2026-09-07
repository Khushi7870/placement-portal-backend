import React from "react";

function LoginInfo() {

  const user = JSON.parse(localStorage.getItem("user"));

  return (
    <div style={{ padding: "40px", textAlign: "center" }}>

      <h1>Login Information</h1>

      {user ? (
        <div>

          <p>
            <strong>Email:</strong> {user.email}
          </p>

        </div>
      ) : (
        <p>No user is currently logged in.</p>
      )}

    </div>
  );
}

export default LoginInfo;