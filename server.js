const express = require('express');
const app = express();

let isReady = false;

// Simulamos un startup delay
setTimeout(() => {
  isReady = true;
}, 10000); // 10 segundos

app.get('/startup', (req, res) => {
  res.send('App is starting up...');
});

app.get('/health', (req, res) => {
  res.send('I am alive!');
});

app.get('/ready', (req, res) => {
  if (isReady) {
    res.send('I am ready!');
  } else {
    res.status(500).send('Not ready yet...');
  }
});

app.listen(3000, () => console.log('Server running on port 3000'));
