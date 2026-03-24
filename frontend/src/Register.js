import React, { useState } from "react";

function Register({ goToLogin }) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleRegister = () => {
    localStorage.setItem(
      "user",
      JSON.stringify({ username, password })
    );
    alert("Registered Successfully");
    goToLogin();
  };

  return (
    <div style={container}>
      <div style={box}>
        <h2>Register</h2>

        <input
          placeholder="Username"
          onChange={(e) => setUsername(e.target.value)}
          style={input}
        />

        <input
          type="password"
          placeholder="Password"
          onChange={(e) => setPassword(e.target.value)}
          style={input}
        />

        <button onClick={handleRegister} style={btn}>
          Register
        </button>

        <p onClick={goToLogin} style={link}>
          Already have account? Login
        </p>
      </div>
    </div>
  );
}

const container = {
  height: "100vh",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  background: "linear-gradient(135deg, #ff758c, #ff7eb3)"
};

const box = {
  background: "white",
  padding: "30px",
  borderRadius: "10px",
  textAlign: "center",
  width: "300px",
  boxShadow: "0 5px 15px rgba(0,0,0,0.3)"
};

const input = {
  width: "100%",
  padding: "10px",
  margin: "10px 0",
  borderRadius: "5px",
  border: "1px solid #ccc"
};

const btn = {
  width: "100%",
  padding: "10px",
  background: "#28a745",
  color: "white",
  border: "none",
  borderRadius: "5px",
  cursor: "pointer"
};

const link = {
  marginTop: "10px",
  color: "blue",
  cursor: "pointer"
};

export default Register;