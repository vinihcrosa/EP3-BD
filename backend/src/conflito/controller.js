const connect = require('../../utils/db');

async function createConflito(req, res) {
  const {
    numMortos,
    NomeLugarCausa,
    NumFeridos,
    TipoConflito,
    gruposParticipantes
  } = req.body;

  if (gruposParticipantes.length < 2) {
    return res.status(400).send({ message: 'O conflito deve ter pelo menos dois grupos armados participantes' });
  }

  const query = `BEGIN
  INSERT INTO public.conflitos 
  (numMortos, NomeLugarCausa, NumFeridos, TipoConflito)
  VALUES ($1, $2, $3, $4);
  INSERT INTO public.gruposarmados_participam_conflitos
  (gruposarmados_combatentes_codigo, conflitos_codigonum, dataincorporacao, datasaida)
  VALUES ($5, $6, $7, $8);
  INSERT INTO public.gruposarmados_participam_conflitos
  (gruposarmados_combatentes_codigo, conflitos_codigonum, dataincorporacao, datasaida)
  VALUES ($9, $10, $11, $12);
  COMMIT;`

  const arrayDataToQuery = [
    numMortos,
    NomeLugarCausa,
    NumFeridos,
    TipoConflito,
    gruposParticipantes[0].codigo,
    gruposParticipantes[0].conflito,
    gruposParticipantes[0].dataIncorporacao,
    gruposParticipantes[0].dataSaida,
    gruposParticipantes[1].codigo,
    gruposParticipantes[1].conflito,
    gruposParticipantes[1].dataIncorporacao,
    gruposParticipantes[1].dataSaida
  ]

  const client = await connect();
  const result = await client.query(query, arrayDataToQuery);

  if (gruposParticipantes.length > 2) {
    gruposParticipantes.forEach(async (grupo) => {
      const query = `INSERT INTO public.gruposarmados_participam_conflitos
      (gruposarmados_combatentes_codigo, conflitos_codigonum, dataincorporacao, datasaida)
      VALUES ($1, $2, $3, $4);`
      const arrayDataToQuery = [
        grupo.codigo,
        grupo.conflito,
        grupo.dataIncorporacao,
        grupo.dataSaida
      ]
      const result = await client.query(query, arrayDataToQuery);
    });
  }
  console.log(result);
  res.status(201).send({ result, message: 'teste' });
}


async function getPaisMaiorConflitoReligioso(req, res) {
  const query = `SELECT paisafetado, COUNT(paisafetado) as quantidade FROM conflitos c
  JOIN conflito_paisesafetados cp on c.codigonum = cp.conflitos_codigonum
  WHERE c.tipoconflito = 'RELIOSO'
  GROUP BY paisafetado LIMIT1;`
  const client = await connect();
  const result = await client.query(query);

  return res.send(result.rows[0]);
}
module.exports = { createConflito, getPaisMaiorConflitoReligioso };