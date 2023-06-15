import mongoose from 'mongoose';
import app from './app';
import config from './config/index';
import { errorLogger, infoLogger } from './shared/logger';

async function main() {
  try {
    await mongoose.connect(`${config.database_url}`);
    infoLogger.info(`🛢 Database Connected`);
    app.listen(config.port, () => {
      infoLogger.info(`Server is running on http://localhost:${config.port}`);
    });
  } finally {
    /* empty */
  }
}

main().catch(err => errorLogger.error(err));
