const connect = require('../../utils/db');

async function getConflitos(req, res) {
  const client = await connect();
  const query = 'SELECT tipoconflito, COUNT(codigonum) FROM public.conflitos GROUP BY tipoconflito;'

  const result = await client.query(query);
  res.send(result.rows)
}

async function getConflitosPorMortos(req, res) {
  const query = 'SELECT * FROM public.conflitos ORDER BY nummortos DESC LIMIT 5'
  const client = await connect();
  const result = await client.query(query);

  return res.send(result.rows);
}

module.exports = { getConflitos, getConflitosPorMortos };