//importo i framework (librerie)
const fetch = require("node-fetch");
const express = require("express");
const app = express();

//fetch serve a mandare richieste
//1° argomendo = url a cui mandi la richiesta
//2° argomento = metodo
//3° argomento = body (non serve in questo caso)


/* 
".then" serve per far eseguire le cose in ordine 
altrimenti le esegue in ordine di rapidità di 
esecuzione 
*/


//se si va in /richiesta fa la richiesta, mandando un json 

app.get("/richiesta", (req, res) => {

	fetch("https://api.paninidellospalla.it/info", {
	method: "GET"
})
	//trasforma res in un json
	.then(res => res.json())
	
	.then(data => {
		res.status(200).json(data);
		}

})

//mette in ascolto alla porta 3000
app.listen(3000, () => {
	console.log("App in ascolto sulla porta 3000...")
})

