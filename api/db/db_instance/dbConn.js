import { Sequelize } from "sequelize";

const { DB_NAME, DB_HOST, DB_PORT, DB_USER, DB_PASS } = process.env;

const dbConnOpt = {
    dialect: 'postgres',
    dialectOptions: {
       ssl: true
    }
};

const dbConn = new Sequelize(`postgres://${DB_USER}:${DB_PASS}@${DB_HOST}:${DB_PORT}/${DB_NAME}`, dbConnOpt);

export default dbConn;