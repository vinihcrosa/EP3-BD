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



CREATE OR REPLACE FUNCTION mantem_consistencia_nconsecutivo() RETURNS trigger AS $mantem_consistencia_nconsecutivo$
BEGIN

IF (SELECT COUNT(codconsecutivo) FROM public.divisao 
	WHERE divisao.gruposarmados_codcombatente = new.gruposarmados_codcombatente) = 0
	
	THEN new.codconsecutivo = 1;
END IF;

IF (SELECT COUNT(codconsecutivo) FROM public.divisao 
	WHERE divisao.gruposarmados_codcombatente = new.gruposarmados_codcombatente) > 0
	
	THEN new.codconsecutivo = 
	(SELECT COUNT(codconsecutivo) FROM public.divisao 
	WHERE divisao.gruposarmados_codcombatente = new.gruposarmados_codcombatente) + 1;

END IF;
RETURN NEW;
END;
$mantem_consistencia_nconsecutivo$ LANGUAGE plpgsql;

CREATE TRIGGER mantem_consistencia_nconsecutivo BEFORE INSERT ON divisao
    FOR EACH ROW WHEN (pg_trigger_depth() = 0) EXECUTE FUNCTION mantem_consistencia_nconsecutivo();







CREATE OR REPLACE FUNCTION mantem_consistencia_nconsecutivo_ao_excluir() 
RETURNS trigger AS $mantem_consistencia_nconsecutivo_ao_excluir$

declare  
   contador int := (SELECT COUNT(codconsecutivo) FROM public.divisao 
	WHERE divisao.gruposarmados_codcombatente = old.gruposarmados_codcombatente);
	
	aux int := old.codconsecutivo;
BEGIN



WHILE aux <= contador loop

	update divisao
	set codconsecutivo = codconsecutivo - 1
	where codconsecutivo = aux + 1;
	
	aux = aux + 1;

end loop;



RETURN NEW;
END;
$mantem_consistencia_nconsecutivo_ao_excluir$ LANGUAGE plpgsql;

CREATE OR REPLACE TRIGGER mantem_consistencia_nconsecutivo_ao_excluir AFTER DELETE ON divisao
    FOR EACH ROW WHEN (pg_trigger_depth() = 0) EXECUTE FUNCTION mantem_consistencia_nconsecutivo_ao_excluir();