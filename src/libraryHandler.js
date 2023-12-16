const connection = require('./libraryDB-connect');

const getAllWords = async (req, res) => {
  const query = 'SELECT * FROM dictionary';

  try {
    const [rows] = await connection.query(query);
    // Get All Words Success
    res.json({
      message: 'GET All Words Success',
      data: rows,
    });
  } catch (error) {
    // Error Handling
    console.error('Error executing query:', error);
    res.status(500).json({
      error: true,
      message: 'Error executing database query',
      errorDetails: error.message,
      sql: error.sql,
    });
  }
};

module.exports = {
  getAllWords,
};
