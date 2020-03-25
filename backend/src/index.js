const cors = require("cors");
const express = require("express");
const app = express();
const routes = require('./routes');


app.use(cors()); //aplicativo para segurança
app.use(express.json()); //faz a aplicação reconhecer objetos Json
app.use(routes);
/**
 * Query Params : Parâmetros nomeados enviados na rota apos "?" (filtros,paginação)
 * Route Params : Parâmetros utilizados para identificar recursos
 * Request Body: Corpo da requisição, utilizado para criar ou alterar recursos
 * exemplo Body
 * 
 * app.post('/users',function(request,response){
    const body = request.body;
    console.log(params);
    return response.json(body);
    });
 */
app.listen(3333);

