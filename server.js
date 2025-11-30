const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

// Endpoint raíz
app.get('/', (req, res) => {
  res.json({
    message: '¡Bienvenido a la API de DevOps!',
    timestamp: new Date().toISOString()
  });
});

// Endpoint info
app.get('/info', (req, res) => {
  res.json({
    aplicacion: 'API DevOps - Ejercicio B',
    version: '1.0.0',
    autor: 'Fabrich21',
    nodejs: process.version,
    plataforma: process.platform,
    memoria: process.memoryUsage()
  });
});

// Endpoint status
app.get('/status', (req, res) => {
  res.json({
    status: 'OK',
    uptime: process.uptime(),
    timestamp: new Date().toISOString()
  });
});

app.listen(port, () => {
  console.log(`Servidor corriendo en puerto ${port}`);
});
