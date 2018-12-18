//importo i framework (librerie)
const fetch = require("node-fetch");
const express = require("express");
const app = express();

//fetch serve a mandare richieste
//1° argomendo = url a cui mandi la richiesta
//2° argomento = metodo
//3° argomento = body (non serve in questo caso)

fetch("https://api.paninidellospalla.it/info", {
	method: "GET"
})

/* 
".then" serve per far eseguire le cose in ordine 
altrimenti le esegue in ordine di rapidità di 
esecuzione 
*/

//trasforma res in un json
.then(res => res.json())

//se si va in /richiesta fa la richiesta, mandando un json 
.then(data => {
	app.get("/richiesta", (req, res) => {
  res.status(200).json(data);
	})
})


//lo esegue se la promise dà un errore (ERR lo inizializzo ora)
.catch((ERR) => {
	console.log(ERR)
});

//mette in ascolto alla porta 3000
app.listen(3000, () => {
	console.log("App in ascolto sulla porta 3000...")
})

