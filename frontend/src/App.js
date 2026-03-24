import React, { useEffect, useState } from "react";
import axios from "axios";
import Home from "./Home";
import Login from "./Login";
import Register from "./Register";
import { Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  BarElement,
  CategoryScale,
  LinearScale,
  Tooltip,
  Legend
} from "chart.js";

ChartJS.register(BarElement, CategoryScale, LinearScale, Tooltip, Legend);

function App() {
  const [analytics, setAnalytics] = useState({});
  const [logs, setLogs] = useState([]);

  // ✅ Persistent Login
  const [user, setUser] = useState(
    JSON.parse(localStorage.getItem("user"))?.username || null
  );

  // ✅ Page Control (Home / Login / Register)
  const [page, setPage] = useState("home");

  // 🔄 Fetch Data
  const fetchData = async () => {
    try {
      const a = await axios.get("http://localhost:5000/api/analytics");
      const l = await axios.get("http://localhost:5000/api/logs");

      setAnalytics(a.data);
      setLogs(l.data);
    } catch (error) {
      console.log("Error fetching data:", error);
    }
  };

  useEffect(() => {
    if (user) {
      fetchData();
      const interval = setInterval(fetchData, 5000);
      return () => clearInterval(interval);
    }
  }, [user]);

  // 🎛️ Control Panel
  const controlAI = async (action) => {
    await axios.post(`http://localhost:5000/api/${action}`);
    fetchData();
  };

  // 📊 Chart Data
  const chartData = {
    labels: ["Total", "Success", "Error"],
    datasets: [
      {
        label: "AI Performance",
        data: [
          analytics.total_requests || 0,
          analytics.success_rate || 0,
          analytics.error_rate || 0
        ],
        backgroundColor: ["#4e73df", "#1cc88a", "#e74a3b"]
      }
    ]
  };

  // 🎨 Styles
  const cardStyle = {
    background: "linear-gradient(135deg, #667eea, #764ba2)",
    color: "white",
    padding: "20px",
    borderRadius: "12px",
    width: "200px",
    textAlign: "center",
    boxShadow: "0 4px 15px rgba(0,0,0,0.2)"
  };

  const boxStyle = {
    background: "white",
    color: "black",
    padding: "20px",
    borderRadius: "12px",
    marginBottom: "20px",
    boxShadow: "0 4px 15px rgba(0,0,0,0.1)"
  };

  const btnStyle = {
    margin: "10px",
    padding: "10px 20px",
    border: "none",
    borderRadius: "6px",
    background: "linear-gradient(135deg, #36d1dc, #5b86e5)",
    color: "white",
    cursor: "pointer",
    fontSize: "14px",
    fontWeight: "bold"
  };

  // 🔐 HOME / LOGIN / REGISTER FLOW
  if (!user) {
    if (page === "home") {
      return (
        <Home
          goToLogin={() => setPage("login")}
          goToRegister={() => setPage("register")}
        />
      );
    }

    if (page === "login") {
      return (
        <Login
          onLogin={setUser}
          goToRegister={() => setPage("register")}
        />
      );
    }

    if (page === "register") {
      return <Register goToLogin={() => setPage("login")} />;
    }
  }

  // 🚪 Logout
  const handleLogout = () => {
    localStorage.removeItem("user");
    setUser(null);
    setPage("home");
  };

  return (
    <div
      style={{
        background: "linear-gradient(135deg, #1e3c72, #2a5298)",
        minHeight: "100vh",
        padding: "20px",
        color: "white"
      }}
    >
      <h1 style={{ textAlign: "center" }}>🤖 AI Web Dashboard</h1>

      <p style={{ textAlign: "center" }}>
        Welcome, <b>{user}</b>
        <button
          onClick={handleLogout}
          style={{ marginLeft: "10px", padding: "5px 10px" }}
        >
          Logout
        </button>
      </p>

      {/* Cards */}
      <div style={{ display: "flex", justifyContent: "space-around" }}>
        <div style={cardStyle}>
          <h3>Total Requests</h3>
          <p>{analytics.total_requests}</p>
        </div>
        <div style={cardStyle}>
          <h3>Success Rate</h3>
          <p>{analytics.success_rate}%</p>
        </div>
        <div style={cardStyle}>
          <h3>Error Rate</h3>
          <p>{analytics.error_rate}%</p>
        </div>
      </div>

      {/* Chart */}
      <div style={boxStyle}>
        <h2>📊 Performance Chart</h2>
        <Bar data={chartData} />
      </div>

      {/* Logs */}
      <div style={boxStyle}>
        <h2>🧾 Logs</h2>
        {logs && logs.length > 0 ? (
          <ul>
            {logs.map((log, index) => (
              <li key={index}>
                {log.time} - {log.event}
              </li>
            ))}
          </ul>
        ) : (
          <p>No logs available</p>
        )}
      </div>

      {/* Control Panel */}
      <div style={boxStyle}>
        <h2>🎛️ Control Panel</h2>
        <button style={btnStyle} onClick={() => controlAI("start")}>
          Start
        </button>
        <button style={btnStyle} onClick={() => controlAI("stop")}>
          Stop
        </button>
        <button style={btnStyle} onClick={() => controlAI("restart")}>
          Restart
        </button>
      </div>
    </div>
  );
}

export default App;