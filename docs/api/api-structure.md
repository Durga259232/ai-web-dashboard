## API Diagram

![API Diagram](api-diagram.png)

# API Structure - AI Monitoring Dashboard

## API Diagram
![API Diagram](api-diagram.png)

---

## Base URL
http://localhost:5000

---

## 1. Get Dashboard Metrics
Endpoint: GET /api/metrics
Description: Returns dashboard statistics

Response:
{
  "totalRequests": 1200,
  "successRate": 95,
  "errorRate": 5
}