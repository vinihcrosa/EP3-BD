const connect = require('../../utils/db');

async function getGruposArmados(req, res) {
  const client = await connect();
  const result = await client.query('SELECT * FROM public.gruposarmados');
  res.send(result.rows);
}

async function getGruposArmadosPorArmas(req, res) {
  const query = `SELECT gruposarmados,
  SUM(quantidade) as quantidade,
  numtotalbaixas
  FROM gruposarmados
  JOIN traficantes_fornecem_tipoarma_gruposarmados tftg on gruposarmados.combatentes_codigo = tftg.gruposarmados_codcombatente
  JOIN traficantes t on tftg.traficantes_nome = t.nome
  GROUP BY gruposarmados, numtotalbaixas
  ORDER BY SUM(quantidade) DESC LIMIT 5`

  const client = await connect();
  const result = await client.query(query);

  res.send(result.rows);

}

module.exports = { getGruposArmados, getGruposArmadosPorArmas };