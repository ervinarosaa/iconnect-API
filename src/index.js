const express = require('express');
const dotenv = require('dotenv');

dotenv.config();
const app = express();
const PORT = process.env.PORT || 4000;

const libraryRoutes = require('./libraryRoutes');

app.use(express.json());
app.use(libraryRoutes);

app.get('/', (req, res) => {
  console.log('Response success');
  res.send('Response Success!');
});

app.use((err, req, res) => {
  console.error(err.stack);
  res.status(500).send('Internal Server Error');
});

app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});
