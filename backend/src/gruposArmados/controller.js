const connect = require('../../utils/db');

async function getGruposArmados(req, res) {
  const client = await connect();
  const result = await client.query('SELECT * FROM public.gruposarmados');
  res.send(result.rows);
}

async function createGruposArmados(req, res) {

}

module.exports = { getGruposArmados };