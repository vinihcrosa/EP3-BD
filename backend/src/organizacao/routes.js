const routes = require('express').Router();

const { getOrganizacao } = require('./controller');

routes.get('/', getOrganizacao);

module.exports = routes; 