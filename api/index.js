import express from "express";
import morgan from "morgan";
import { logger } from '../config/util/util.js';
import databaseConnection from '../config/database/databaseConnection.js'
import authRoute from './routes/auth.js';

const PORT = process.env.PORT;
const server = express();

server.use(morgan('tiny'));
server.use(express.json());
server.use('/api/auth', authRoute);


databaseConnection(()=> {
    server.listen(PORT, () => {
        logger.info(`Server running at http://localhost:${PORT}`);
    });
});
