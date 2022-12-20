const routes = require('express').Router();

const { getGruposArmados } = require('./controller');

routes.get('/', getGruposArmados);

module.exports = routes; 