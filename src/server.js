const express = require('express');
const path = require('path');

class Server {
    constructor() {
        this.server = express();

        this._views();
        this._routes();
    }

    _routes() {
        require('./routes/routes')(this.server);
    }

    _views() {
        this.server.set('views', path.join(__dirname + '/app/views'));
        this.server.set('view engine', 'pug');
    }
}

module.exports = new Server().server;