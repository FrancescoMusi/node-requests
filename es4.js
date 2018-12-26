const express = require("express");
const app = express();
const fetch = require("node-fetch");
const port = 8080;

let dict = {name:"Frafra", 
age:15,
mail:"fra@gmail.com"
 };

let {name: name, age: age, enail: email} = dict;

app.get("/home", (req, res) => {
	res.status(200).send("Grove Street")
})

//	res.status(200).send(`Ti chiami ${dict.name}, hai ${dict.age} anni, la tua mail è: ${dict.email}`)
app.get("/json", (req, res) => {
	res.status(200).send(`Ti chiami ${name}, hai ${age} anni, la tua mail è: ${email}`)
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
    const prom = new Promise((resolve, reject) => {
        if (req.params.password === "admin") {
            resolve("Sei un admin");
        } 
        else {
            reject( "Unauthorized");
        };
    })

    prom.then((resolved) => res.status(200).send(resolved))
    .catch((error) => res.status(401).send(error));
        
});

app.all("*", (req, res) => {
	res.status(404).send("Not found")
})

app.listen(port, () => {
	console.log(`App in ascolto sulla porta ${port}...`)
})