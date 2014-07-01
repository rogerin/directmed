var express = require('express');
var path = require('path');
var favicon = require('static-favicon');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var load = require('express-load');
var mongoose    = require('mongoose');
var app         = express();


//

//mongoose.connect('mongodb://localhost/directmed', function(err){
mongoose.connect('mongodb://rogerio:yolanda@mongo.onmodulus.net:27017/un3uhoQo', function(err){
    if( err ) {
        console.log("Error conectar mongo db: " + err);
    } else {
        console.log("Conexao realizada com sucesso: " + err);
    }
});

var db = mongoose.connect;

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use(favicon());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded());
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));




load('models').then('controllers').then('routes').into(app);


var port = Number(process.env.PORT || 3000);
//alterado
app.listen(port, function(){
  console.log('Iniciando na porta: ' + port +' ');
});
