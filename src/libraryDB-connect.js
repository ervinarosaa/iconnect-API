const mysql = require('mysql2/promise');
const dotenv = require('dotenv');

dotenv.config();

let pool;

async function createConnectionPool() {
  pool = await mysql.createPool({
    host: process.env.DB_HOST,
    user: process.env.DB_USERNAME,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
  });

  pool.on('error', (err) => {
    console.error('Database error:', err);

    if (err.code === 'PROTOCOL_CONNECTION_LOST') {
      // Reconnect if the connection is lost
      createConnectionPool();
    }
  });
}

createConnectionPool();

module.exports = {
  query: async (...args) => {
    if (!pool) {
      await createConnectionPool();
    }

    return pool.query(...args);
  },
};
