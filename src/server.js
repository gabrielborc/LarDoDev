const express = require('express');

class Server {
    constructor() {
        this.server = express();

        this._routes();
    }

    _routes() {
        require('./routes/routes')(this.server);
    }
}

module.exports = new Server().server;