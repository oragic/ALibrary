const express = require('express');
const routes = express.Router();
const views = __dirname + "/views/"


const books = {

    data:[{

    title: "Harry Potter",
    description: "Excelente Livro",
    image: "foto",
    state: "Lido",
    nota: 10

}],

    controllers:{
        index(req, res){
            const vieweBooks = books.data.map((book)=>{
                return{
                    ...book
                };
            });
            return res.render( views + "index",{ books:vieweBooks });
        },

    }

}

routes.get('/', books.controllers.index);
/*routes.post('/adicionar/books', (req, res) =>{
    books.push({
        title: req.body.title       
    });

    return res.redirect('/');
});*/


module.exports = routes;