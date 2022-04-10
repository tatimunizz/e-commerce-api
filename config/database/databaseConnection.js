import mongoose from 'mongoose';
import { logger } from '../util/util.js';


const DB_URL = `${process.env.MONGODB_URL}`;

const databaseConnection = (serverConnection) => {
  mongoose.connect(DB_URL)
    .catch(e => logger.error(e));

  mongoose.connection.once('open', () => {
    logger.info('MongoDB connected');
    serverConnection();
  });
}

export default databaseConnection;