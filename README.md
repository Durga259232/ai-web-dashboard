# AI Web Dashboard

## 🚀 How to Run the Project

### 1️⃣ Clone the Repository

```bash
git clone https://github.com/Durga259232/ai-web-dashboard.git
cd ai-web-dashboard
```

---

## 🔧 Backend Setup (Node.js)

```bash
cd backend

# Install dependencies
npm install

# Run backend server
node server.js
```

👉 Backend runs on: http://localhost:5000

---

## 💻 Frontend Setup (React)

```bash
cd frontend

# Install dependencies
npm install

# Install Axios (for API communication)
npm install axios

# Start frontend
npm start
```

👉 Frontend runs on: http://localhost:3000

---

## 🔗 How Frontend Connects to Backend

* Axios is used to send HTTP requests from React to Node.js backend
* Example API calls:

  * GET /api/metrics
  * GET /api/logs
  * POST /api/start
  * POST /api/stop
  * POST /api/restart

---

## ⚠️ Important Notes

* Make sure Node.js is installed
* Run backend first, then frontend
* If port is busy, change port in server.js

---

## 🛠️ Tech Stack

* Frontend: React.js
* Backend: Node.js, Express.js
* API: Mock API
* HTTP Client: Axios
* Version Control: GitHub
