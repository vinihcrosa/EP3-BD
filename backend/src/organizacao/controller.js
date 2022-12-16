const connect = require('../../utils/db');

async function getOrganizacao(req, res) {
  const client = await connect();
  const result = await client.query('SELECT * FROM public.organizacao');
  res.send(result.rows);
}

module.exports = { getOrganizacao };