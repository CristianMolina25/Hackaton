import express from "express";
import cors from "cors";

const app = express();
const PORT = 4000;

// ✅ Middlewares
app.use(cors()); // permite peticiones desde el frontend
app.use(express.json()); // permite recibir datos JSON

// ✅ Ruta principal
app.get("/", (req, res) => {
  res.send("Servidor backend funcionando correctamente 🚀");
});

// ✅ Ejemplo de ruta para registro
app.post("/api/register", (req, res) => {
  const { username, password } = req.body;

  if (!username || !password) {
    return res.status(400).json({ message: "Faltan datos" });
  }

  // Aquí podrías guardar en base de datos o cifrar con bcrypt
  console.log(`Usuario registrado: ${username}`);

  res.status(201).json({ message: "Usuario registrado con éxito" });
});

// ✅ Ejemplo de ruta para login
app.post("/api/login", (req, res) => {
  const { username, password } = req.body;

  if (username === "admin" && password === "1234") {
    return res.status(200).json({ message: "Login exitoso" });
  } else {
    return res.status(401).json({ message: "Credenciales incorrectas" });
  }
});

// ✅ Arranque del servidor
app.listen(PORT, () => {
  console.log(`✅ Servidor escuchando en: http://localhost:${PORT}`);
});
