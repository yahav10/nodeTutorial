var express = require('express');
var app = express();
var todoAction = require('./todoactionscontroller');
var port = process.env.PORT || 3000;

app.set('port', port);
app.use('/', express.static('./public'));
app.use(function(req,res,next){
res.header("Access-Control-Allow-Origin", "*");
res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type,Accept");
app.set('json spaces', 4);
res.set("Content-Type", "application/json");
next();
});

app.get('/webservice/getActionsData', todoAction.getData);
app.get('/webservice/saveActionsData', todoAction.saveData);
app.get('/webservice/getStudentsNames', todoAction.getStudentsNames);


app.listen(port);
console.log("service is listening on port " + port);
