const config = {
/**
 * this is string destructuring.
 * @param {"dburl: string, dbhost: string, dbuser: string, dbpassword: string, dbport: string, dbname: string"} param - this is string param,which allows the user details to stay secure within an .env file, so therefore not shared on open source.
 */
  dburl: process.env.DB_URL,
  dbhost: process.env.DB_HOST,
  dbuser: process.env.DB_USER,
  dbpassword: process.env.DB_PASSWORD,
  dbport: process.env.DB_PORT,
  dbname: process.env.DB_NAME,
};

console.log(config)

module.exports = config;
