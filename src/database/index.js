const  Sequelize = require('sequelize');
const dbConfig = require('../config/database');

const User = require('../models/User');
const Address = require('../models/Address');
const Tech = require('../models/Tech');

let connection = null;
try {
    connection = new Sequelize(dbConfig);
    // connection = new Sequelize(dbUrl);
} catch (err) {
    console.log("erro conectando ao banco");
    console.log(err);
}
// console.log(connection);

User.init(connection);
Address.init(connection);
Tech.init(connection);

User.associate(connection.models);
Address.associate(connection.models);
Tech.associate(connection.models);

module.exports = connection;