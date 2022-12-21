const routes = require('express').Router();

const { getOrganizacao, getOrganizacoesPorMediacoes } = require('./controller');

routes.get('/', getOrganizacao);

routes.get('/mediacoes', getOrganizacoesPorMediacoes)

module.exports = routes; 