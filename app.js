const express = require('express');
const bodyParser = require('body-parser');

const feedRoutes = require('./routes/feed');

const app = express();

// app.use(bodyParser.urlencoded()); // x-www-form-urlencoded <form>
app.use(bodyParser.json()); // application/json


app.use((req,res,next)=>{
    res.setHeader('Access-Control-Allow-Origin','*');
    res.setHeader('Access-Control-Allow-Methods','OPTIONS','GET','POST','PUT','PATCH','DELETE');
    res.setHeader('Access-Control-Allow-Headers','Content-Type','Authorization');
next()

})

app.use('/feed', feedRoutes);

app.listen(8080);







//GET:get resourse from the server
//POST:post resourse tio the server  (create or append)
//PUT::post resourse tio the server  (create or overwrite a resoure)
//PATCH:update parts of a existing resourse on the server
//DELETE:delete resoure on server
//OPTION:determine whether followup requent is allow(sent automaticaly)