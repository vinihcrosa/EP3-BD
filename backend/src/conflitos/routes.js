const routes = require('express').Router();

const { getConflitos } = require('./controller');

routes.get('/', getConflitos);

module.exports = routes; 