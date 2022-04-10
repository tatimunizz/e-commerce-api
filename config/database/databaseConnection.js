import mongoose from 'mongoose';
import { logger } from '../util/util.js';


const DB_URL = `${process.env.MONGODB_URL}`;

mongoose.connect(DB_URL)
  .catch(e => {
    logger.error(e);
  });

export default mongoose.connection.once('open', () => {
  logger.info('MongoDB connected');
});