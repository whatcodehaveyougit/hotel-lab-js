const express = require('express');
const ObjectId = require('mongodb').ObjectId;

const createRouter = function(collection) {
  const router = express.Router();

  router.get('/', (req, res) => {
    res.send("Hello World");
  })

  return router;
}

module.exports = createRouter
