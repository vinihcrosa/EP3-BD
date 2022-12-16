const connect = require('../../utils/db');

async function getDivisao(req, res) {
  const client = await connect();
  const result = await client.query('SELECT * FROM public.divisao');
  res.send(result.rows);
}

async function createDivisao(req, res) {
  const {
    divisao,
    gruposArmados,
    chefesMilitares //vai criar na hora de criar a divisao
  } = req.body;

  if (chefesMilitares.length > 3) {
    return res.status(400).send({
      errorMessage: 'Necessario no maximo 3 chefes militares'
    });
  }

  const client = await connect();

  const newDivisao = await client.query(
    'INSERT INTO public.divisao (numbaixas, barcos, tanques, avioes, homens, gruposarmado_cocombatente) VALUES ($1, $2, $3, $4, $5, $6) RETURNING *',
    [divisao.numbaixas, divisao.barcos, divisao.tanques, divisao.avioes, divisao.homens, gruposArmados]);

  chefesMilitares.forEach(async chefe => {
    const newChefesMilitares = await client.query(
      'INSERT INTO public.chefemilitar (divisao_codconsecutivo, divisao_gruposarmados_codcombatente, faixahierarquica, liderpoliticoobedece) VALUES ($1, $2, $3, $4) RETURNING *',
      [newDivisao.codconsecutivo, newDivisao.gruposarmados_codcombatente, chefe.faixahierarquica, chefe.liderpoliticoobedece]);
  })
}

module.exports = { getDivisao, createDivisao };