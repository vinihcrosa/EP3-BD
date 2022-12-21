const routes = require('express').Router();

const { createConflito, getPaisMaiorConflitoReligioso } = require('./controller');

routes.post('/', createConflito);

routes.get('/religioso', getPaisMaiorConflitoReligioso);

module.exports = routes; 