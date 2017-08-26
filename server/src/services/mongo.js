const mongoose = require('mongoose');
mongoose.Promise = global.Promise;
exports.connect = mongoose.connect('mongodb://development:dev123@localhost:27017/mehdiadibpour', {
  useMongoClient: true
});
