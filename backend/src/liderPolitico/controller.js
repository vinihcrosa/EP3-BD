const connect = require('../../utils/db');

async function getChefeMilitar(req, res) {
  const client = await connect();
  const result = await client.query('SELECT * FROM public.chefemilitar');
  res.send(result.rows);
}

module.exports = { getChefeMilitar };