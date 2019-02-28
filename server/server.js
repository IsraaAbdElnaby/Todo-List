var express = require('express');
var bodyParser = require('body-parser');
var app = express();

var {mongoose} = require('./db/mongoose');
var {Todos} = require('./modles/list');
var {User} = require('./modles/user');

var port = process.env.PORT || 3000;

app.use(bodyParser.json());

app.post('/todo',(req,res)=>{
    var todo = new Todos({
        activity: req.body.activity
    });
    todo.save().then((doc)=>{
        res.send(doc);
    },(e)=>{
        res.status(400).send(e);
    })
})
app.listen(port);