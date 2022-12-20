CREATE RULE no_max_tres_comandantes AS ON INSERT TO public.chefemilitar
  
WHERE (SELECT COUNT(divisao_codconsecutivo) FROM chefemilitar WHERE divisao_codconsecutivo = NEW.divisao_codconsecutivo) >= 3

DO INSTEAD NOTHING;




CREATE OR REPLACE FUNCTION public.participam_no_min_dois() RETURNS trigger
    LANGUAGE plpgsql
    AS $$
BEGIN

IF (SELECT COUNT(conflitos_codigonum) FROM public.gruposarmados_participam_conflitos
	WHERE conflitos_codigonum = new.conflitos_codigonum) < 2
	
	THEN DELETE FROM gruposarmados_participam_conflitos WHERE conflitos_codigonum = new.conflitos_codigonum;
END IF;

IF (SELECT COUNT(conflitos_codigonum) FROM public.gruposarmados_participam_conflitos
	WHERE conflitos_codigonum = new.conflitos_codigonum) >= 2
	
	THEN 
END IF;
RETURN NEW;
END;
$$;

CREATE TRIGGER participam_no_min_dois AFTER INSERT ON gruposarmados_participam_conflitos
    FOR EACH ROW WHEN (pg_trigger_depth() = 0) EXECUTE FUNCTION participam_no_min_dois();
