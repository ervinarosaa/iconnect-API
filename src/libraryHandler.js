const connection = require('./libraryDB-connect');

const getAllWords = (req, res) => {
  const query = 'SELECT * FROM library';
  connection.query(query, (err, rows) => {
    if (err) {
      // Error Handling
      console.error('Error executing query:', err);
      res.status(500).json({
        error: true,
        message: 'Error executing database query',
        errorDetails: err.message,
        sql: err.sql,
      });
    } else {
      // Get All Words Success
      res.json({
        message: 'GET All Words Success',
        data: rows,
      });
    }
  });
};

module.exports = {
  getAllWords,
};
