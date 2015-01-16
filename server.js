process.env.NODE_ENV = process.env.NODE_ENV || 'development';

var mongoose = require('./config/mongoose'),
    express = require('./config/express'),
    passport = require('./config/passport');    
    
var db = mongoose();
var app = express(db);
var passport = passport();

var ip = process.env.IP || "0.0.0.0";
var port = process.env.PORT || 3000;
app.listen(port, ip);

module.exports = app;

console.log('Server running at https://mean-stack-btanne6.c9.io');