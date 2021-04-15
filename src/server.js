const express = require('express');
const routes = require('./routes');

const server = express();

server.use(express.json())

server.set('view engine', 'ejs');

server.use(express.static("public"))

server.use(express.urlencoded( {extended:true}))

const port = 3000;

server.use(routes);


server.listen(port,()=>{
    console.log('rodando')
});

