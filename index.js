const express = require('express');
const cors = require('cors');
const os = require('os');

const app = express();
app.use(cors());
app.use(express.json());

// Simple API key authentication middleware
const authenticate = (req, res, next) => {
  const apiKey = req.headers['x-api-key'];
  const validKey = process.env.API_KEY || 'syntha-forge-secret-key-2024';

  if (!apiKey || apiKey !== validKey) {
    return res.status(401).json({ error: 'Unauthorized: Invalid API key' });
  }

  next();
};

const PORT = process.env.PORT || 4000;

app.get('/health', (req, res) => {
  res.json({ status: 'ok', uptime: process.uptime(), hostname: os.hostname() });
});

app.get('/api/message', authenticate, (req, res) => {
  res.json({ message: 'Hello from Syntha-Forge API', time: new Date().toISOString() });
});

app.listen(PORT, () => {
  console.log(`API server listening on port ${PORT}`);
});