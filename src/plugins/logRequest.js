module.exports = (server, logger) => {
  server.ext('onRequest', (request, h) => {
    logger.debug({
      method: request.method,
      host: request.headers.host,
      url: request.url,
      useragent: request.headers['user-agent'],
    });
    return h.continue;
  });
};
