import { ConnectionOptions } from 'typeorm';

const env = process.env.NODE_ENV || 'development';
const dbConnectionUrls = {
    production: process.env.DATABASE_URL_PROD,
    development: process.env.DATABASE_URL_DEV,
    testing: process.env.DATABASE_URL_TEST,
};

const dbConnection: ConnectionOptions = {
    url: dbConnectionUrls[env],
    database: 'Starbucks',
    type: 'mongodb',
    useNewUrlParser: true,
    synchronize: true,
    logging: true,
    entities: ["src/Entity/*.*"],
    cache: {
        duration: 30000, //30 seconds
    }
};

export = dbConnection;
