var mongoose = require('mongoose');
var schema = mongoose.Schema;

var actionSchema = new schema ({
      studentID: "String",
      studentName: "String",
      studentGrade: "String",
      year: "String" },
      { collection:'grades'});

var Action = mongoose.model('Action', actionSchema);

module.exports = Action;
