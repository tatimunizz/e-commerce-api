import express from "express";
import morgan from "morgan";
import { logger } from '../config/util/util.js';
import databaseConnection from '../config/database/databaseConnection.js'

const PORT = process.env.PORT;
const server = express();

server.use(morgan('tiny'));
server.use(express.json());


databaseConnection(()=> {
    server.listen(PORT, () => {
        logger.info(`Server running at http://localhost:${PORT}`);
    });
});
