"use strict";
module.exports = function( ROOT_PATH ){
	var config = {
		app: {
			name : 'fistPro'
		},
		server: {
			port: 3001,
			hostname: 'localhost',
	    },
	    database: {
	    	url: 'mongodb://localhost:27017/test'
	    },
	    BaseApiURL: 'http://localhost:3001/api/',
	    root     : ROOT_PATH
	}
    return config;
};