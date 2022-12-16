const connect = require('../../utils/db');

async function getChefesMilitares(req, res) {
  const client = await connect();
  const result = await client.query('SELECT * FROM public.chefemilitar');
  res.send(result.rows);
}

module.exports = { getChefesMilitares };