var mongoose = require('mongoose');
var Action = require('./action');

exports.getData = function(req, res){
	Action.find({}).
	where('studentID').ne('PRIVATE').
	exec(function(err, docs){
		//actionData = docs;
		console.log("docs: " + docs);
		//mongoose.disconnect();
		res.json(docs);
		return;
	});
}

exports.getStudentsNames = function(req, res){
	User.find({}).
	where('studentName').ne(false).
	exec(function(err, docs){
		console.log("docs: " + docs);
		console.log(docs);
		res.json(docs);
		return;
	});
}

var newtodoAction = new Action({action: "learn NodeJS", done: true});

exports.saveData = function(req,res){
  newtodoAction.save(function(err,doc){
    if(err)
      console.log(err);
      else{
        console.log("\n Saved document: " + doc);
        res.json(doc);
        return;
      }
  });
}
