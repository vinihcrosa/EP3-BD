const connect = require('../../utils/db');

async function getTiposArmas(req, res) {
  const query = `SELECT traficantes_nome as traficante, tipoarma_nome as tipoArma, gruposarmados_codcombatente as grupoArmado
  FROM traficantes_fornecem_tipoarma_gruposarmados NATURAL JOIN traficantes
  JOIN tipoarma t on traficantes_fornecem_tipoarma_gruposarmados.tipoarma_nome = t.nome
  JOIN gruposarmados g on g.combatentes_codigo = traficantes_fornecem_tipoarma_gruposarmados.gruposarmados_codcombatente`

  const client = await connect();

  const result = await client.query(query)

  res.send(result.rows)
}

module.exports = { getTiposArmas }