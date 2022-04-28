//CREANDO MI PRIMER SERVER
//Usando objeto express

//const express = require('express')
//app de Express
//const app = express()

//Puerto en que vamos a ver nuestra app: localhost:3000
//const port = 3000

//patch inicial, reponderá a la url localhost:3000
//app.get('/',(req, res)=>{
//    res.send('Hello World!')
//})

//Con esto inicializamos esta app
// app.listen(port,()=>{
//     console.log(`Example app listening on port ${port}`)
// })

////////////////////////
//AGREGAR UNA NUEVA RUTA

//Usando objeto express
const express = require('express')
//app de Express
const app = express()
//Puerto en que vamos a ver nuestra app: localhost:3000
const port = 3000

//patch inicial, reponderá a la url localhost:3000
app.get('/',(req, res)=>{
    res.send('Hello World!')
})

//Respondiendo texto
//localhost:3000/launchx
//Con esto inicializamos esta app
app.get('/launchx',(req, res)=>{
    res.send(`Bienvenidos a launchX`)
})

////////////////////////////////////////////
//Agregar nueva ruta para regresar un objeto

//Regresando un objeto
//localhost:3000/explorersInNode
app.get('/explorersInNode', (req,res)=>{
const explorer ={name: "Explorer", msg: "Hello"}
res.send(explorer)
})

////////////////////////////////////////////////
//Agregar una nueva ruta que reciba Query Params

//Query Params: Recibir parámetros por la url
//http://localhost:3000/explorers/carlo
//req.params = {"explorerName":"carlo"}
app.get('/explorers/:explorerName',(req, res)=>{
    res.send(req.params)

})


//Inicia la aplicación Lanzando el servidor
app.listen(port,()=>{
    console.log(`Example app listening on port ${port}`)
})
