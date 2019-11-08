const home = require('./home');

module.exports = server => {
    server.use('/', home);
};
