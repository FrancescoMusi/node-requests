const express = require("express");
const app = express();
const fetch = require("node-fetch");
//serve a ...
const port = process.env.port || 8080;

app.get("/promise/:numero", (req, res) => {
	const controllaPariDispari = (numero) => {
		//nuova promise
		return new Promise((resolve, reject) => {
			if (numero % 2 === 0) {
				resolve("Il numero è pari");
			}
			else {
				reject("Il numero è dispari");
			}

		})
	}

  //risulrato è il valore restutuito dalla funzione
  //.then fa il resolve della promise    .catch fa il reject
	controllaPariDispari(req.params.numero).then((risposta) => {
		res.status(200).send(risposta);
	}).catch((errore) => {
		res.status(200).send(errore)
	})
})

//qualsiasi cosa si scriva diversa da ... 
app.all("*", (req, res) => {
	res.status(404).send("Non trovato");
})

app.listen(port, () => {
	console.log(`App in ascolto sulla porta ${port}...`);
})
