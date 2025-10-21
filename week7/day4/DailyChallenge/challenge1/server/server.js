const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const PORT = 5000;

app.use(bodyParser.json());

// GET route
app.get('/api/hello', (req, res) => {
  res.send({ message: 'Hello From Express' });
});

// POST route
app.post('/api/world', (req, res) => {
  console.log('Received POST request body:', req.body);
  res.send({
    message: `I received your POST request. This is what you sent me: ${req.body.post}`,
  });
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
