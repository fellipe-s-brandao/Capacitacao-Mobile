const express = require("express");
const mongoose = require("mongoose");
const app = express();
const PORT = 3000;

const { mongoUrl } = require("./keys");

require("./src/app/schemas/User");

const requireToken = require("./src/app/middlewares/requireToken");
const authRoutes = require("./src/routes/authRoutes");

app.use(express.json());
app.use(authRoutes);

mongoose
  .connect(mongoUrl)
  .then(() => {
    console.log("Banco de dados conectado");
  })
  .catch((err) => {
    console.log("Erro ao conectar no banco de dados", err);
  });

app.get("/", requireToken, (req, res) => {
  res.send({name: req.user.name});
});

app.listen(PORT, () => {
  console.log("servidor rodando na porta: " + PORT);
});
