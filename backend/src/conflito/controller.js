const connect = require('../../utils/db');

async function createConflito(req, res) {
  const {
    numMortos,
    NomeLugarCausa,
    NumFeridos,
    TipoConflito,
    gruposParticipantes
  } = req.body;

  const client = await connect();
  const result = await client.query(
    'INSERT INTO public.conflitos (numMortos, NomeLugarCausa, NumFeridos, TipoConflito) VALUES ($1, $2, $3, $4)',
    [numMortos, NomeLugarCausa, NumFeridos, TipoConflito]
  );
  console.log(result);
  res.status(201).send({ result, message: 'teste' });
}

module.exports = { createConflito };