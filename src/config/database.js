const dbDialect = process.env.DB_DIALECT || 'postgres';
const dbHost = process.env.DB_HOST || 'localhost';
const dbPort = process.env.DB_PORT || 5432;
const dbUser = process.env.DB_USER || 'postgres';
const dbPassword = process.env.DB_PASSWORD || 'secret';
const dbDatabase = process.env.DB_DATABASE || 'sqlnode';
const dbUrl = `${dbDialect}://${dbUser}:${dbPassword}@${dbHost}:${dbPort}/${dbDatabase}`;
//console.log(dbUrl);

const dbConfig = {
  dialect: dbDialect,
  host: dbHost,
  username: dbUser,
  password: dbPassword,
  database: dbDatabase,
  port: dbPort,
  define: {
    timestamps: true,
    underscored: true,
  }
};

module.exports = {
  ...dbConfig,
};
