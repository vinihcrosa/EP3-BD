const routes = require('express').Router();

const { getChefeMilitar } = require('./controller');

routes.get('/', getChefeMilitar);

module.exports = routes; 