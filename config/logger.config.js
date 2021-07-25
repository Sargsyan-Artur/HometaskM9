const winston = require('winston');
require('winston-daily-rotate-file');

const logger = winston.createLogger({
    level: 'debug',
    format: winston.format.json(),
    // defaultMeta: { service: 'user-service' },
    transports: [
        new winston.transports.DailyRotateFile({
            filename: 'combined.log',
            datePattern: 'yyyy-MM-dd.',
            prepend: true,
            level: 'info'
        }),
        //
        // - Write all logs with level `error` and below to `error.log`
        // - Write all logs with level `info` and below to `combined.log`
        //
        new winston.transports.Console( {level: 'info' }),
        new winston.transports.File({ filename: 'combined.log', level: 'debug' }),
    ],
})

module.exports = logger;