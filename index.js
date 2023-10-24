// import json server
const jsonServer = require("json-server")

// create json  srver using json-server library
const travelServer = jsonServer.create()

// set up the path or rout for db.json file
const router = jsonServer.router("db.json")

// return middleware used by json server
const middlewar = jsonServer.defaults()

// set port for server app
const port = 4000 || process.env.PORT

// use middleware and router in server
travelServer.use(middlewar)
travelServer.use(router)

// server listen for request from frontend
travelServer.listen(port,()=>{
    console.log(`Travel Server started at port, ${port} and waiting for request!!!`);
})