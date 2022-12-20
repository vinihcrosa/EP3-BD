const connect = require('../../utils/db');

async function getConflitos(req, res) {
  const client = await connect();
  //racial
  const conflitosRaciais = await client.query('SELECT COUNT(conflitos_codigonum) FROM public.raciais');
  //religioso
  const conflitosReligiosos = await client.query('SELECT COUNT(conflitos_codigonum) FROM public.religiosos');
  //economico
  const conflitoseconomicos = await client.query('SELECT COUNT(conflitos_codigonum) FROM public.economicos');
  //territorial
  const conflitosterritoriais = await client.query('SELECT COUNT(conflitos_codigonum) FROM public.territoriais');

  res.send({
    conflitosRaciais: conflitosRaciais.rows[0],
    conflitosReligiosos: conflitosReligiosos.rows[0],
    conflitoseconomicos: conflitoseconomicos.rows[0],
    conflitosterritoriais: conflitosterritoriais.rows[0]
  })
}

async function getConflitosPorMortos() {
  const query = 'SELECT * FROM public.conflitos ORDER BY nummortos DESC'
  const client = await connect();
  const result = await client.query(query);

  return result.rows;
}

module.exports = { getConflitos, getConflitosPorMortos };