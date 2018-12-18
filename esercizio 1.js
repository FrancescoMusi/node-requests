const express = require("express");
const app = express();

// saluta daniele
app.get("/daniele", (req, res) => {
  res.status(200).send("Ciao Daniele come va?");
});

// saluta l'argomento
app.get("/saluta/:nome", (req, res) => {
  res.status(200).send(`ciao ${req.params.nome} come va`);
});

// da nome ed età
app.post("/info", (req, res) => {
  res.status(200).json({
	nome: "Francesco",
 	età: 15
 });
});

// porta in ascolto
app.listen(3000, () => {
  console.log("App listening on port 3000...");
});