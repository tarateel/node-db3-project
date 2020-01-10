const express = require('express');
const SchemeRouter = require('./schemes/scheme-router.js');

const server = express();

const morgan = require('morgan');

server.use(express.json());
server.use(morgan('dev'));
server.use('/api/schemes', SchemeRouter);

server.use((err, req, res, next) => {
  console.log('Error:', err)
  res.status(500).json({
    message: 'Something went wrong...'
  })
});

server.get('/', (req, res) => {
  res.send(`
  <h2>Node DB3 Project</h2>
  `)
});

module.exports = server;