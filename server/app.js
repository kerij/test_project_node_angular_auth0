var express = require('express');
var path = require('path');
var bodyParser = require('body-parser');
var session = require('express-session');
var http = require('http');
var app = express();



//routes includes
var index = require('./routes/index');


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));



//send back static files
app.use(express.static(path.join(__dirname, './public')));


app.use('/*', index);




// App Set //
app.set('port', (process.env.PORT || 3000));

// Listen //
app.listen(app.get("port"), function(){
   console.log("Listening on port: " + app.get("port"));
});
