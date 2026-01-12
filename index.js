const express = require('express');
const path = require('path');
const app = express();
const port = process.env.PORT || 3005;

// Registro simple de todas las solicitudes (ayuda a depurar)
app.use((req, res, next) => {
  console.log(`${new Date().toISOString()} ${req.method} ${req.url}`);
  next();
});

// Servir archivos estáticos (index.html, index.js, etc.)
app.use(express.static(path.join(__dirname)));

// Ruta API de prueba
app.get('/api/hello', (req, res) => {
  res.json({ message: '¡Hola desde Express!' });
});
// Iniciar el servidor
const server = app.listen(port, () => console.log(`Servidor escuchando en http://localhost:${port}`));