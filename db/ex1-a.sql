CREATE OR REPLACE FUNCTION mantem_hierarquia_conflito
 (nummortos INT, nomelugarcausa VARCHAR(100), numferidos int, tipoconflito VARCHAR(100), texto VARCHAR(100))

RETURNS INT
LANGUAGE plpgsql VOLATILE AS $$
BEGIN
INSERT INTO public.conflitos
(nummortos, nomelugarcausa, numferidos, tipoconflito)
VALUES
(nummortos, nomelugarcausa, numferidos, tipoconflito);

CASE tipoconflito

	WHEN 'territorial' THEN
		INSERT INTO public.territoriais VALUES (lastval(), TEXTO);
		
	WHEN 'religioso' THEN
		INSERT INTO public.religiosos VALUES (lastval(), TEXTO);
		
	WHEN 'econômico' THEN
		INSERT INTO public.economicos VALUES (lastval(), TEXTO);
		
	WHEN 'racial' THEN
		INSERT INTO public.raciais VALUES (lastval(), TEXTO);

END CASE;
 
RETURN 1;
END;
$$