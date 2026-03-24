import React from "react";

function Home({ goToLogin, goToRegister }) {
  return (
    <div
      style={{
        height: "100vh",
        background:
          "linear-gradient(rgba(0,0,0,0.6), rgba(0,0,0,0.6)), url('https://images.unsplash.com/photo-1677442135136-760c813028c0')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        color: "white",
        textAlign: "center"
      }}
    >
      <div>
        <h1 style={{ fontSize: "40px", marginBottom: "20px" }}>
          🤖 AI Monitoring Dashboard
        </h1>

        <p style={{ marginBottom: "30px", fontSize: "18px" }}>
          Monitor AI systems, track analytics, and control workflows in real-time
        </p>

        <button onClick={goToLogin} style={btnStyle}>
          Login
        </button>

        <button
          onClick={goToRegister}
          style={{ ...btnStyle, background: "#28a745" }}
        >
          Register
        </button>
      </div>
    </div>
  );
}

const btnStyle = {
  margin: "10px",
  padding: "12px 25px",
  fontSize: "16px",
  border: "none",
  borderRadius: "8px",
  background: "#007bff",
  color: "white",
  cursor: "pointer"
};

export default Home;