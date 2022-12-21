const routes = require('express').Router();

const { getGruposArmados, getGruposArmadosPorArmas } = require('./controller');

routes.get('/', getGruposArmados);

routes.get('/armas', getGruposArmadosPorArmas)

module.exports = routes; 