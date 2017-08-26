const new_project = require('./new-project.server.endpoint');
const path = require('path');
exports.init = function (app, apiRouter) {
  new_project.init(app, apiRouter);
  app.get('*', function (req, res) {
    res.sendFile(path.join(__dirname, '../../../public/dist/', 'index.html'));
  });
};
