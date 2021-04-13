const express = require('express');
const routes = express.Router();
const views = __dirname + "/views/"

book = {
    data = [{
        title: "Harry Potter",
        description: "Excelente Livro",
        image: "foto",
        state: "Lido",
        nota: 10
    }],

    controllers: {




    }

};




routes.get('/', (req, res) => res.render( views + "index",{ books }));
routes.post('/adicionar/books', (req, res) =>{
    books.push({
        title: req.body.title       
    });


});


module.exports = routes;