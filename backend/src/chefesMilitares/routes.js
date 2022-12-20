const routes = require('express').Router();

const { getChefesMilitares } = require('./controller');

routes.get('/', getChefesMilitares);

module.exports = routes; 