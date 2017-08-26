const winston = require('winston');
const tz = () => (new Date()).toLocaleTimeString();
exports.logger = new (winston.Logger)({
  levels: winston.config.syslog.levels,
  transports: [
    new (winston.transports.Console)({
      timestamp: tz,
      colorize: true
    })
  ],
  colorize: true
});
