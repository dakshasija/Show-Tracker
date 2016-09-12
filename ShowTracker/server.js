var express = require('express');
var path    = require('path');
var logger  = require('logger');
var bodyParser = require('body-parser');

var app = express();

app.set('port', process.env.PORT || 3000);
// app.use(logger);
app.use(bodyParser.json());
app.use(bodyParser.urlencoded());
app.use(express.static(path.join(__dirname,'public')));

app.listen(app.get('port'), function () {
  console.log('Server started on port ' + app.get('port'));
})