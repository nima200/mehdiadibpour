const mongoose = require('mongoose');
const schema = mongoose.Schema;
const ProjectSchema = new schema({
  title: String,
});
const ProjectModel = mongoose.model('Project', ProjectSchema);
module.exports = ProjectModel;
