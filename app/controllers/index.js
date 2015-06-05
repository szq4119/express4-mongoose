var express = require('express');
var siteRouter = express.Router();
var mongoose = require('mongoose');
var config = require('../config/config');
var utils = require(config.root + '/helper/utils');
var InfoModel = mongoose.model('info');

exports.list = function(req, res, next){
	var page = (req.param('page') > 0 ? req.param('page') : 1) - 1;
	var perPage = 20;
	var options = {
		perPage: perPage,
		page: page
	};
	//var info = new infoModel();
	//console.log( InfoModel.schema.static );
	InfoModel.list( options , function(err, infos){
		console.log( infos );
	})
}

exports.getInfoAdd = function(req, res){
	res.render('site/info');
}

exports.postInfoAdd = function(req, res){
	var title = req.body.title;
	var content = req.body.content;
	var infoobj = {
		'title' : title,
		'content' : content
	};
	var info = new InfoModel(infoobj)
	info.save();
}
// siteRouter
// 	.route('/')
// 	.get(function(req, res, next) {
// 		res.render('index', { title: 'Express' });
// 	});

// siteRouter
// 	.route( '/list' )
// 	.get(function(){
// 		require('../models/info.js');
// 		var infoModel = mongoose.model('Info');
// 		var info = new infoModel();
// 		var op = {
// 			'page' : 1
// 		}
// 		console.log(info);
// 		console.log(info.findByPage);
// 		info.findByPage(op,function(err, docs){
// 			console.log(docs);
// 		})
// 	})
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


// module.exports = siteRouter;
