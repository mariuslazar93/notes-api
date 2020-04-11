#!/usr/bin/env node

require('dotenv').config({ silent: true });
const createServer = require('../src');

process
  .on('unhandledException', (err) => {
    console.error('Exception: ', err);
    process.exit(1);
  })
  .on('unhandledRejection', (err) => {
    console.error('Rejection: ', err);
    process.exit(1);
  });

async function start() {
  const server = await createServer();
  await server.start();
  console.log(`Server running at ${server.info.uri}`);
}

start();
