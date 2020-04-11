const LogRequestPlugin = require('./logRequest');
const JwtAuthPlugin = require('./jwtAuth');

module.exports = (logger) => {
  const attach = async (server) => {
    LogRequestPlugin(server, logger);
    await JwtAuthPlugin(server);
  };

  return {
    attach,
  };
};
