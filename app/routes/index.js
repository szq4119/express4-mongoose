var express = require('express');
var route = express.Router();
var config = require('../config/config');

var indexController = require(config.root + '/controllers/index');

route.route('/list')
	.get(indexController.list);

route.route('/info/add')
	.get(indexController.getInfoAdd)
	.post(indexController.postInfoAdd);

// siteRouter
// 	.route('/')
// 	.get(function(req, res, next) {
// 		res.render('index', { title: 'Express' });
// 	});

// siteRouter
// 	.route( '/list' )
// 	.get(siteController.list)
// siteRouter
// 	.route('/list/:id')
// 	.get(function( req, res, next ){
// 		var page = (req.param('page') > 0 ? req.param('page') : 1) - 1;
// 		console.log(page);
// 		require('../models/info.js');
// 		var infoModel = mongoose.model('Info');
// 		var info = new infoModel();
// 		info.find('',function(err, docs){
// 			console.log(docs);
// 		});
// 	});

// siteRouter
// 	.route( '/info/add' )
// 	.get(function( req, res, next ){
// 		res.render('site/info');
// 	})
// 	.post(function( req, res, next ){
// 		var title = req.body.title;
// 		var content = req.body.content;
// 		require('../models/info.js');
// 		var infoModel = mongoose.model('Info');
// 		var info = new infoModel({
// 			'title' : title,
// 			'content' : content
// 		})
// 		info.save(function (err) {
// 			console.log(err.errors.color.message)
// 		});
// 	});

module.exports = route;