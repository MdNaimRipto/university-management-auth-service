import mongoose from 'mongoose';
import app from './app';
import config from './config/index';
import { errorLogger, infoLogger } from './shared/logger';
import { Server } from 'http';

process.on('uncaughtException', error => {
  errorLogger.error(error);
  process.exit(1);
});

let server: Server;

async function main() {
  try {
    await mongoose.connect(`${config.database_url}`);
    infoLogger.info(`🛢 Database Connected`);
    server = app.listen(config.port, () => {
      infoLogger.info(`Server is running on http://localhost:${config.port}`);
    });
  } finally {
    /* empty */
  }

  process.on('unhandledRejection', error => {
    errorLogger.error(error);
    if (server) {
      server.close(() => {
        process.exit(1);
      });
    } else {
      process.exit(1);
    }
  });
}

main().catch(err => errorLogger.error(err));

process.on('SIGTERM', () => {
  errorLogger.error('SIGTERM Detected. Closing Server...');
  if (server) {
    server.close();
  }
});
