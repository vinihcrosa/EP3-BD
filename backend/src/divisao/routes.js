const routes = require('express').Router();

const { getDivisao, createDivisao } = require('./controller');

routes.get('/', getDivisao);
routes.post('/', createDivisao);

module.exports = routes; 