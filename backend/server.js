const express = require("express");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json());

// 🔥 REAL-TIME VARIABLES
let totalRequests = 0;
let success = 0;
let error = 0;

let logs = [];

// 🚀 START (Simulate AI Request)
app.post("/api/start", (req, res) => {
  const isSuccess = Math.random() > 0.2; // 80% success

  totalRequests++;

  if (isSuccess) {
    success++;
    logs.push({
      time: new Date().toLocaleTimeString(),
      event: "✅ Request Success"
    });
  } else {
    error++;
    logs.push({
      time: new Date().toLocaleTimeString(),
      event: "❌ Request Failed"
    });
  }

  res.json({ message: "AI Processed Request" });
});

// 🛑 STOP (just log event)
app.post("/api/stop", (req, res) => {
  logs.push({
    time: new Date().toLocaleTimeString(),
    event: "⛔ AI Stopped"
  });

  res.json({ message: "AI Stopped" });
});

// 🔄 RESTART (reset everything)
app.post("/api/restart", (req, res) => {
  totalRequests = 0;
  success = 0;
  error = 0;
  logs = [];

  logs.push({
    time: new Date().toLocaleTimeString(),
    event: "🔄 AI Restarted"
  });

  res.json({ message: "AI Restarted" });
});

// 📊 ANALYTICS API (DYNAMIC)
app.get("/api/analytics", (req, res) => {
  const successRate =
    totalRequests > 0 ? ((success / totalRequests) * 100).toFixed(2) : 0;

  const errorRate =
    totalRequests > 0 ? ((error / totalRequests) * 100).toFixed(2) : 0;

  res.json({
    total_requests: totalRequests,
    success_rate: successRate,
    error_rate: errorRate
  });
});

// 🧾 LOGS API
app.get("/api/logs", (req, res) => {
  res.json(logs);
});

// 🚀 SERVER START
app.listen(5000, () => {
  console.log("Server running on port 5000");
});