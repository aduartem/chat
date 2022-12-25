const dotenv = require('dotenv');

dotenv.config();
const { port, cors } = require('./config/config');

// eslint-disable-next-line import/order
const io = require('socket.io')(port, { cors });
const logger = require('./config/winston');

io.on('connection', (socket) => {
  logger.info(`port=${port}`);
  logger.info(`cors=${JSON.stringify(cors)}`);
  logger.info('Usuario conectado');
  socket.on('new-message', (message) => {
    io.sockets.emit('messages', message);
  });

  socket.on('disconnect', () => {
    logger.info('Usuario desconectado');
  });
});
