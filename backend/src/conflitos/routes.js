const routes = require('express').Router();

const { getConflitos, getConflitosPorMortos } = require('./controller');

routes.get('/', getConflitos);

routes.get('/mortos', getConflitosPorMortos);

module.exports = routes; 