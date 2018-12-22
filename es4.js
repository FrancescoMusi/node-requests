const express = require("express");
const app = express();
const fetch = require("node-fetch");
const port = 8080;

let dict = {"name":"Frafra", 
"age":15,
"email":"fra@gmail.com"
 };

app.get("/home", (req, res) => {
	res.status(200).send("Grove Street")
})

app.get("/json", (req, res) => {
	res.status(200).send(`Ti chiami ${dict["name"]}, hai ${dict["age"]} anni, la tua mail è: ${dict["email"]}`)
})

app.get("/richiesta", (req, res) => {
	fetch("https://jsonplaceholder.typicode.com/todos/1", {
		method: "GET"
	})
	.then(res => res.json())
	.then(data => {
		res.status(200).send(data)
	})
})

app.get("/promise/:password", (req, res) => {
	const ceckpass = (password) => {
		return new Promise((resolve, reject) => {
			if (password === "admin") {
				resolve("Sei un admin")
			}
			else {
				reject("Unauthorized")
			}
		})
	}

	ceckpass(req.params.password).then((risposta) => {
		res.status(200).send(risposta)
		}).catch((errore) => {
			res.status(401).send(errore)
		})
})

app.all("*", (req, res) => {
	res.status(404).send("Not found")
})

app.listen(port, () => {
	console.log(`App in ascolto sulla porta ${port}...`)
})