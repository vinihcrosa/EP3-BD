const routes = require('express').Router();

const { getTiposArmas } = require('./controller');

routes.get('/', getTiposArmas);

module.exports = routes;