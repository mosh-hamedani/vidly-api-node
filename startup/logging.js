const winston = require('winston');
// require('winston-mongodb');
require('express-async-errors');

module.exports = function() {
  const logger = winston.createLogger({
    format: winston.format.combine(
      winston.format.timestamp(),
      winston.format.json()
    ),
    transports: [
      new winston.transports.Console({
        format: winston.format.combine(
          winston.format.colorize(),
          winston.format.simple(),
        )
      }),
      new winston.transports.File({
        filename: 'logfile.log',
      }),
      new winston.transports.File({
        filename: 'uncaughtExceptions.log',
        level: 'error',
        handleRejections: true
      }),
    ],
  });

  // winston.add(winston.transports.MongoDB, { 
  //   db: 'mongodb://localhost/vidly',
  //   level: 'info'
  // });

  winston.add(logger)
}