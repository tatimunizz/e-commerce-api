import pino from "pino";

const log = pino({
    enabled: !(!!process.env.LOG_DESABLED),
    transport: {
        target: 'pino-pretty',
        options: {
            colorize: true
        }
    }
});

export const logger = log;