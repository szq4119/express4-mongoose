"use strict";

var fs          = require('fs');
var express     = require('express');
var mongoose    = require('mongoose');
var path        = require('path');
var config      = require(__dirname + '/app/config/config');
var app         = express();

var models_path = __dirname + '/app/models';
fs.readdirSync(models_path).forEach(function (file) {
  if (~file.indexOf('.js')) require(models_path + '/' + file);
})

app.config = config;

require('./app/config/database')(app, mongoose);

require('./app/config/express')(app, express);

module.exports = app;
