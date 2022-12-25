const config = {
  appName: process.env.APP_NAME || 'demo',
  port: process.env.PORT || 3000,
  cors: {
    origin: process.env.CORS_ORIGIN || 'http://localhost:4200',
    methods: ['GET', 'POST'],
    allowedHeaders: ['my-custom-header'],
    credentials: true,
  },
};

module.exports = config;
