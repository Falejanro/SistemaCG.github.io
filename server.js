const express = require('express');
const path = require('path');
const app = express();
const port = 3000;  // Usaremos el puerto 3000

// Servir archivos estáticos 
app.use(express.static(path.join(__dirname, 'public')));

// Ruta principal
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'login.html'));
});

// Iniciar el servidor
app.listen(port, () => {
    console.log(`Servidor corriendo en http://localhost:${port}`);
});
