// server.js
const express = require('express');
const app = express();
const port = 3000;

// Middleware to parse JSON bodies
app.use(express.json());

// Route to calculate the average of numbers
app.post('/api/average', (req, res) => {
  const numbers = req.body.numbers;
  if (!Array.isArray(numbers) || numbers.length === 0) {
    return res.status(400).json({ error: 'Please provide an array of numbers' });
  }

  const sum = numbers.reduce((acc, num) => acc + num, 0);
  const average = sum / numbers.length;

  res.json({ numbers,average });
});

app.listen(port, () => {
  console.log("Server is running on http://localhost:${port}");
});