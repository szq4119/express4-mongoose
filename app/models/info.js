var mongoose = require('mongoose');

var InfoSchema = new mongoose.Schema({
    title: String,
    content: String
})

//InfoSchema.path('title').require(true, '文章标题必填');
//InfoSchema.path('content').require(true, '文章内容必填');

InfoSchema.statics = {
	list : function(options, callback){
		var criteria = options.criteria || {};
		console.log(options);
		this.find(criteria)
	    	.exec(callback);
	}
}

mongoose.model('info', InfoSchema);