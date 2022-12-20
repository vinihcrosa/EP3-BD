CREATE OR REPLACE FUNCTION mantem_consistencia_baixas() RETURNS trigger AS $mantem_consistencia_baixas$
BEGIN
UPDATE public.gruposarmados SET numtotalbaixas = f.valsum FROM 
(
	SELECT gruposarmados_codcombatente, SUM(numbaixas) valsum FROM public.divisao
	GROUP BY  gruposarmados_codcombatente
	
)f
WHERE gruposarmados.combatentes_codigo = f.gruposarmados_codcombatente;
RETURN NEW;
END;
$mantem_consistencia_baixas$ LANGUAGE plpgsql;

CREATE TRIGGER mantem_consistencia_baixas AFTER INSERT OR UPDATE OR DELETE ON divisao
    FOR EACH ROW EXECUTE FUNCTION mantem_consistencia_baixas();

