const winston = require('winston');
const { appName } = require('./config');

const {
  splat,
  combine,
  timestamp,
  label,
  printf,
} = winston.format;

const myFormat = printf(({ timestamp, level, label, message }) => {
  const text = `${timestamp} [${label}] ${level}: ${message}`;
  return text;
});

const logger = winston.createLogger({
  format: combine(
    label({ label: appName }),
    timestamp(),
    splat(),
    myFormat,
  ),
  transports: [
    new winston.transports.Console(),
  ],
});

module.exports = logger;
