import React, { useState } from "react";

function Login({ onLogin, goToRegister }) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = () => {
    const storedUser = JSON.parse(localStorage.getItem("user"));

    if (
      storedUser &&
      storedUser.username === username &&
      storedUser.password === password
    ) {
      onLogin(username);
      localStorage.setItem("user", JSON.stringify({ username, password }));
    } else {
      alert("Invalid credentials");
    }
  };

  return (
    <div style={container}>
      <div style={box}>
        <h2>Login</h2>

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

        <button onClick={handleLogin} style={btn}>
          Login
        </button>

        <p onClick={goToRegister} style={link}>
          New user? Register
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
  background: "linear-gradient(135deg, #667eea, #764ba2)"
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
  background: "#007bff",
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

export default Login;