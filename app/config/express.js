"use strict";

var path        	= require('path');
var favicon     	= require('serve-favicon');
var logger      	= require('morgan');
var cookieParser 	= require('cookie-parser');
var bodyParser 		= require('body-parser');

module.exports = function (app, express, passport) {
	
	var routes = require(app.config.root + '/routes/index');
	app.set('views', path.join(app.config.root, '/views'));
	app.set('view engine', 'jade');

	app.use(logger('dev'));
	app.use(bodyParser.json());
	app.use(bodyParser.urlencoded({ extended: false }));
	app.use(cookieParser());
	app.use(express.static(path.join(app.config.root, 'public')));
	app.use(routes);

	app.use(function(req, res, next) {
	    var err = new Error('Not Found');
	    err.status = 404;
	    next(err);
	});


	if (app.get('env') === 'development') {
	    app.use(function(err, req, res, next) {
	        res.status(err.status || 500);
	        res.render('./site/error', {
	            message: err.message,
	            error: err
	        });
	    });
	}

	app.use(function(err, req, res, next) {
	    res.status(err.status || 500);
	    res.render('./site/error', {
	        message: err.message,
	        error: {}
	    });
	});

}