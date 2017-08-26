'use strict';

var _fs = require('fs');

var fs = _interopRequireWildcard(_fs);

var _path = require('path');

var path = _interopRequireWildcard(_path);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

var dir = path.join(__dirname, "../");

module.exports = fs.readdir(dir, function (err, files) {
  console.log(dir);
  console.log(files.length);
});
//# sourceMappingURL=test.endpoint.js.map