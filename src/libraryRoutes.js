const express = require('express');

const LibraryHandler = require('./libraryHandler');

const router = express.Router();

// GET ALL WORDS
router.get('/library', LibraryHandler.getAllWords);

module.exports = router;
