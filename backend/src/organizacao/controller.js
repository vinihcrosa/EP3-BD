const connect = require('../../utils/db');

async function getOrganizacao(req, res) {
  const client = await connect();
  const result = await client.query('SELECT * FROM public.organizacao');
  res.send(result.rows);
}

async function getOrganizacoesPorMediacoes(req, res) {
  const query = `SELECT organizacoesmediadoras_codigoorganizacao as organizacao,
  COUNT(organizacoesmediadoras_codigoorganizacao) as mediacoes,
  COUNT(numpessoas) as numpessoas
FROM organizacao O
NATURAL JOIN organizacoesmediadoras_participam_conflitos org
JOIN organizacoesmediadoras o2 on O.codigoorg = o2.organizacao_codigoorg
GROUP BY organizacoesmediadoras_codigoorganizacao LIMIT 5;`

  const client = await connect();
  const result = await client.query(query);

  res.send(result.rows);
}

module.exports = { getOrganizacao, getOrganizacoesPorMediacoes };