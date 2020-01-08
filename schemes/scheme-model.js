const db = require('../data/db-config');

function find() {
  return db('schemes').select()
};

module.exports = {
  find
};