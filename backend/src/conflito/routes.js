const routes = require('express').Router();

const { createConflito } = require('./controller');

routes.post('/', createConflito);

module.exports = routes;