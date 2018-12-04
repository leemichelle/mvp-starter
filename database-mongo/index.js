var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/test');

var db = mongoose.connection;

db.on('error', function() {
  console.log('mongoose connection error');
});

db.once('open', function() {
  console.log('mongoose connected successfully');
});

var typeSchema = new mongoose.Schema({
  skill: String,
  words: String
});

var Racer = mongoose.model('Racer', typeSchema);

var selectAll = function(callback) {
  Racer.find({}, function(err, items) {
    if(err) {
      callback(err, null);
    } else {
      callback(null, items);
    }
  });
};

module.exports = {
  selectAll,
  Racer
};