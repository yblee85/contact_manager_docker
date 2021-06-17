import pkg from 'sequelize';
import sequelize from "../db_instance/dbConn.js";

const { Sequelize, Model, DataTypes } = pkg;

const Contact = sequelize.define("contact", {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    first_name: DataTypes.TEXT,
    last_name: DataTypes.TEXT,
    email: DataTypes.TEXT,
    phone: DataTypes.TEXT
});

(async () => {
    await sequelize.sync();
    // it will drop table and create new one
    // await sequelize.sync({ force: true });
})();

export default Contact;