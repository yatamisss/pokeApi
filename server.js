import express from 'express'
const app = express();
const port = 3000;

// Ruta para servir archivos estáticos (HTML, CSS, JS)
app.use(express.static('public'));

// Iniciar el servidor
app.listen(port, () => {
  console.log(`Servidor web local iniciado en http://localhost:${port}`);
});
