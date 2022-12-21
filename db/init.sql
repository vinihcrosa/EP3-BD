-- -----------------------------------------------------
-- Dataase mydb
-- -----------------------------------------------------

-- -----------------------------------------------------
-- Table Conflitos
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS Conflitos (
  CodigoNum SERIAL NOT NULL,
  numMortos INT NOT NULL,
  NomeLugarCausa VARCHAR(100) NOT NULL,
  NumFeridos INT NOT NULL,
  TipoConflito VARCHAR(100) NOT NULL,
  PRIMARY KEY (CodigoNum));

INSERT INTO public.conflitos (codigonum,nummortos,nomelugarcausa,numferidos,tipoconflito)
VALUES
  (1,7508,'Brodick',2224,'RACIAIS'),
  (2,2208,'Melitopol',2932,'ECONOMICOS'),
  (3,5696,'Arequipa',1523,'TERRITORIAIS'),
  (4,8218,'Lafayette',1550,'RELIGIOSOS'),
  (5,7549,'Moss',2539,'RELIGIOSOS'),
  (6,2381,'Pietracatella',347,'TERRITORIAIS'),
  (7,5597,'Pachuca',398,'ECONOMICOS'),
  (8,5650,'Finspång',1653,'RELIGIOSOS'),
  (9,7190,'Harlingen',371,'TERRITORIAIS'),
  (10,1668,'Seletar',4188,'RACIAIS'),
  (11,9280,'Istmina',303,'RACIAIS'),
  (12,7343,'Daman',4534,'RELIGIOSOS'),
  (13,4728,'San Rafael',1248,'RACIAIS'),
  (14,5099,'Lehri',3800,'ECONOMICOS'),
  (15,5138,'Mauá',3307,'RACIAIS'),
  (16,687,'Sangju',1891,'TERRITORIAIS'),
  (17,7353,'Salvador',4443,'TERRITORIAIS'),
  (18,5824,'Vladimir',607,'RELIGIOSOS'),
  (19,877,'Falun',2066,'ECONOMICOS'),
  (20,322,'Rawalakot',3336,'TERRITORIAIS'),
  (21,5533,'Gboko',493,'RELIGIOSOS'),
  (22,1667,'Calamar',3319,'RELIGIOSOS'),
  (23,2979,'Cádiz',24,'TERRITORIAIS'),
  (24,5340,'Ludvika',1931,'RACIAIS'),
  (25,5823,'Meppel',1977,'RELIGIOSOS'),
  (26,5305,'Grimma',3427,'TERRITORIAIS'),
  (27,26,'Rathenow',2736,'ECONOMICOS'),
  (28,1070,'Kuruman',2121,'RACIAIS'),
  (29,2958,'Gore',3527,'RACIAIS'),
  (30,8784,'San Pablo',1234,'RELIGIOSOS'),
  (31,2424,'Salem',1440,'ECONOMICOS'),
  (32,7216,'Santander',3543,'RACIAIS'),
  (33,4852,'Valladolid',170,'TERRITORIAIS'),
  (34,4484,'Meycauayan',89,'ECONOMICOS'),
  (35,2850,'Baie-Comeau',4149,'TERRITORIAIS'),
  (36,2084,'Bodø',3797,'TERRITORIAIS'),
  (37,449,'Daly',1568,'TERRITORIAIS'),
  (38,2725,'Heerhugowaard',3208,'RELIGIOSOS'),
  (39,898,'Zutphen',145,'RELIGIOSOS'),
  (40,3401,'Banda Aceh',3126,'RELIGIOSOS'),
  (41,910,'Nicoya',3370,'RELIGIOSOS'),
  (42,3842,'Xinjiang',2432,'RELIGIOSOS'),
  (43,1128,'Feilding',4983,'RACIAIS'),
  (44,7708,'Empangeni',1990,'TERRITORIAIS'),
  (45,8106,'Oyen',3288,'TERRITORIAIS'),
  (46,2446,'Łomża',969,'RELIGIOSOS'),
  (47,3720,'Cañas',218,'RACIAIS'),
  (48,4873,'Rennes',3120,'TERRITORIAIS'),
  (49,2737,'Hà Giang',1298,'RELIGIOSOS'),
  (50,3377,'Belmonte del Sannio',740,'ECONOMICOS'),
  (51,7412,'San Juan del Río',161,'TERRITORIAIS'),
  (52,2253,'Dörtyol',4622,'RELIGIOSOS'),
  (53,4996,'Meerhout',2139,'RELIGIOSOS'),
  (54,5237,'Da Lat',2083,'RELIGIOSOS'),
  (55,2068,'Grand-Leez',2136,'RACIAIS'),
  (56,4842,'Chepén',1420,'RACIAIS'),
  (57,2963,'Inner Mongolia',2679,'ECONOMICOS'),
  (58,1584,'Biloxi',3415,'ECONOMICOS'),
  (59,6660,'Sortland',307,'ECONOMICOS'),
  (60,2144,'Alanya',4130,'TERRITORIAIS'),
  (61,232,'Villahermosa',3652,'RELIGIOSOS'),
  (62,6802,'Frederikstad',1607,'ECONOMICOS'),
  (63,9165,'Gyeongsan',4021,'ECONOMICOS'),
  (64,4401,'Bellville',732,'TERRITORIAIS'),
  (65,6304,'Alajuela',695,'TERRITORIAIS'),
  (66,2584,'Mercedes',1186,'TERRITORIAIS'),
  (67,691,'Marikina',3857,'RELIGIOSOS'),
  (68,6637,'Arequipa',961,'ECONOMICOS'),
  (69,4329,'Chuncheon',888,'RACIAIS'),
  (70,1121,'Suncheon',4114,'ECONOMICOS'),
  (71,6148,'Muzzafarabad',3801,'RACIAIS'),
  (72,2990,'Belfast',400,'RELIGIOSOS'),
  (73,8445,'Cork',2428,'TERRITORIAIS'),
  (74,5703,'Ludvika',3355,'TERRITORIAIS'),
  (75,9062,'Bayugan',4819,'ECONOMICOS'),
  (76,8438,'Yekaterinburg',3409,'RACIAIS'),
  (77,1963,'Ödemiş',1889,'ECONOMICOS'),
  (78,3634,'Cork',3229,'TERRITORIAIS'),
  (79,7802,'Heilbronn',344,'RACIAIS'),
  (80,2504,'Ormoc',1807,'RELIGIOSOS'),
  (81,1691,'Tarnów',4626,'RACIAIS'),
  (82,7863,'Jammu',4473,'TERRITORIAIS'),
  (83,7761,'Tire',2226,'RELIGIOSOS'),
  (84,9692,'Toulouse',3881,'RACIAIS'),
  (85,8529,'Ulyanovsk',2875,'ECONOMICOS'),
  (86,1920,'Zwickau',2450,'RELIGIOSOS'),
  (87,9567,'Chiclayo',2425,'RACIAIS'),
  (88,5777,'Sagar',2762,'ECONOMICOS'),
  (89,6776,'Galway',1611,'RACIAIS'),
  (90,5081,'Shanxi',4136,'TERRITORIAIS'),
  (91,5341,'Leiden',1751,'ECONOMICOS'),
  (92,1410,'Salvador',2369,'TERRITORIAIS'),
  (93,3220,'Çeşme',1661,'RACIAIS'),
  (94,7230,'Lanark',3456,'ECONOMICOS'),
  (95,8720,'Oslo',4684,'RELIGIOSOS'),
  (96,3752,'Ningxia',1094,'TERRITORIAIS'),
  (97,9963,'Villanova d`Albenga',4133,'TERRITORIAIS'),
  (98,7924,'Port Pirie',1664,'ECONOMICOS'),
  (99,7891,'Lagos',4857,'RELIGIOSOS'),
  (100,5911,'La Higuera',286,'RACIAIS');

-- -----------------------------------------------------
-- Table Territoriais
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS Territoriais (
  Conflitos_CodigoNum INT NOT NULL,
  RegioesAfetadas VARCHAR(100) NOT NULL,
  FOREIGN KEY (Conflitos_CodigoNum) REFERENCES Conflitos (CodigoNum),
  PRIMARY KEY (Conflitos_CodigoNum));



-- -----------------------------------------------------
-- Table Religiosos
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS Religiosos (
  Conflitos_CodigoNum INT NOT NULL,
  ReligioesAfetadas VARCHAR(100) NOT NULL,
  FOREIGN KEY (Conflitos_CodigoNum) REFERENCES Conflitos (CodigoNum),
  PRIMARY KEY (Conflitos_CodigoNum));



-- -----------------------------------------------------
-- Table EconÃ´micos
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS Economicos (
  Conflitos_CodigoNum INT NOT NULL,
  MateriasPrimas VARCHAR(100) NOT NULL,
  FOREIGN KEY (Conflitos_CodigoNum) REFERENCES Conflitos (CodigoNum),
  PRIMARY KEY (Conflitos_CodigoNum));



-- -----------------------------------------------------
-- Table Raciais
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS Raciais (
  Conflitos_CodigoNum INT NOT NULL,
  EtniasAfetadas VARCHAR(100) NULL,
  FOREIGN KEY (Conflitos_CodigoNum) REFERENCES Conflitos (CodigoNum),
  PRIMARY KEY (Conflitos_CodigoNum));



-- -----------------------------------------------------
-- Table Conflito_paisesAfetados
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS Conflito_paisesAfetados (
  Conflitos_CodigoNum INT NOT NULL,
  PaisAfetado VARCHAR(100) NOT NULL,
  FOREIGN KEY (Conflitos_CodigoNum) REFERENCES Conflitos (CodigoNum),
  PRIMARY KEY (Conflitos_CodigoNum));



-- -----------------------------------------------------
-- Table Combatentes
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS Combatentes (
  Codigo SERIAL NOT NULL,
  Nome VARCHAR(100) NOT NULL,
  PRIMARY KEY (Codigo));

INSERT INTO public.combatentes (codigo,nome)
VALUES
  (1,'Green, Pandora X.'),
  (2,'Alvarado, Barbara X.'),
  (3,'Kelly, Neville T.'),
  (4,'Saunders, Sigourney V.'),
  (5,'Drake, Hector X.'),
  (6,'Flores, Noel Q.'),
  (7,'Nolan, Winifred C.'),
  (8,'Stafford, Joseph I.'),
  (9,'Armstrong, Steven S.'),
  (10,'Schmidt, Urielle C.'),
  (11,'Burnett, Jarrod C.'),
  (12,'Bell, Vincent S.'),
  (13,'Mercer, Callie T.'),
  (14,'Hendrix, Whitney Q.'),
  (15,'Preston, TaShya T.'),
  (16,'Avila, Tarik U.'),
  (17,'Peters, Honorato S.'),
  (18,'Nixon, Ferris A.'),
  (19,'Barrett, Hanae L.'),
  (20,'Wright, Stephen F.'),
  (21,'Blevins, Adele R.'),
  (22,'Boyer, Lana S.'),
  (23,'Strickland, Shafira Q.'),
  (24,'Reeves, Jena U.'),
  (25,'Mccarthy, Dacey H.'),
  (26,'Richmond, Oliver V.'),
  (27,'Holcomb, Evan E.'),
  (28,'Conley, Virginia Q.'),
  (29,'Ayers, Adrian V.'),
  (30,'Haney, Aladdin M.'),
  (31,'Brooks, Halee V.'),
  (32,'Dawson, Martina D.'),
  (33,'Barry, Mufutau H.'),
  (34,'Levy, Fletcher B.'),
  (35,'Bell, Cruz C.'),
  (36,'Byrd, Noelani Q.'),
  (37,'O`connor, Ulla N.'),
  (38,'Avila, Quinlan X.'),
  (39,'Benjamin, Wanda F.'),
  (40,'Strong, Samantha Q.'),
  (41,'Shelton, Amelia H.'),
  (42,'Gould, Miranda G.'),
  (43,'Finley, Calvin I.'),
  (44,'Conner, William E.'),
  (45,'Hurst, Germane T.'),
  (46,'Flowers, Aiko E.'),
  (47,'Hendricks, Seth Z.'),
  (48,'Greene, Vernon N.'),
  (49,'Trujillo, Inez S.'),
  (50,'Koch, Hilel P.'),
  (51,'Scott, Hyacinth H.'),
  (52,'Stout, Kane P.'),
  (53,'Sears, Carlos N.'),
  (54,'Lee, Denise D.'),
  (55,'Mercer, Macon R.'),
  (56,'Sellers, Aimee J.'),
  (57,'Padilla, Isabella C.'),
  (58,'Sheppard, Dillon B.'),
  (59,'Tate, Stacey Y.'),
  (60,'Hunt, Yetta E.'),
  (61,'Flowers, Drake X.'),
  (62,'Dennis, Katelyn S.'),
  (63,'Wolfe, Macaulay H.'),
  (64,'Bennett, Jael M.'),
  (65,'Poole, Vaughan W.'),
  (66,'Miranda, Hakeem G.'),
  (67,'Mcguire, Stewart V.'),
  (68,'Bauer, Xavier U.'),
  (69,'Snider, Josiah O.'),
  (70,'Schroeder, Idola O.'),
  (71,'Ward, Rebecca J.'),
  (72,'Suarez, Grady B.'),
  (73,'Conley, Noel I.'),
  (74,'Haney, Ferris X.'),
  (75,'Wallace, Priscilla H.'),
  (76,'Harmon, Walter I.'),
  (77,'Henry, Daniel H.'),
  (78,'Johns, Lael J.'),
  (79,'Ayers, Ian X.'),
  (80,'Dillard, Medge W.'),
  (81,'Mccall, Natalie Q.'),
  (82,'Duke, Orson X.'),
  (83,'Hancock, Edward I.'),
  (84,'England, Jamal L.'),
  (85,'Molina, Velma L.'),
  (86,'Merrill, Melodie D.'),
  (87,'Riddle, Dexter U.'),
  (88,'Wood, Grant B.'),
  (89,'Tyson, Lucas O.'),
  (90,'Myers, Molly C.'),
  (91,'Rowland, Derek B.'),
  (92,'Pierce, Angela I.'),
  (93,'Figueroa, Summer S.'),
  (94,'Shannon, Sheila Q.'),
  (95,'Buchanan, Amanda S.'),
  (96,'Graves, Alfonso H.'),
  (97,'Brown, Daria E.'),
  (98,'Guerrero, Inga V.'),
  (99,'Lester, Zenia O.'),
  (100,'Mckay, Lev N.');


-- -----------------------------------------------------
-- Table GruposArmados
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS GruposArmados (
  Combatentes_Codigo INT NOT NULL,
  NumTotalBaixas INT NOT NULL,
  FOREIGN KEY (Combatentes_Codigo) REFERENCES Combatentes (Codigo),
  PRIMARY KEY (Combatentes_Codigo));



-- -----------------------------------------------------
-- Table Organizacao
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS Organizacao (
  CodigoOrg SERIAL NOT NULL,
  PRIMARY KEY (CodigoOrg));



-- -----------------------------------------------------
-- Table OrganizacoesMediadoras
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS OrganizacoesMediadoras (
  Combatentes_Codigo INT NOT NULL,
  Organizacao_CodigoOrg INT NOT NULL,
  NumPessoas INT NOT NULL,
  TipoOrganizacao VARCHAR(100) NOT NULL,
  FOREIGN KEY (Combatentes_Codigo) REFERENCES Combatentes (Codigo),
  PRIMARY KEY (Combatentes_Codigo),
  FOREIGN KEY (Organizacao_CodigoOrg) REFERENCES Organizacao (CodigoOrg));



-- -----------------------------------------------------
-- Table OganizacoesMediadoras_TipoAjuda
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS OganizacoesMediadoras_TipoAjuda (
  OrganizacoesMediadoras_CodCombatente INT NOT NULL,
  TipoAjuda VARCHAR(100) NOT NULL,
  PRIMARY KEY (OrganizacoesMediadoras_CodCombatente),
  FOREIGN KEY (OrganizacoesMediadoras_CodCombatente) REFERENCES OrganizacoesMediadoras (Combatentes_Codigo));



-- -----------------------------------------------------
-- Table Conflitos_sao_intervidos_Combatentes
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS Conflitos_sao_intervidos_Combatentes (
  Conflitos_CodigoNum INT NOT NULL,
  Combatentes_Codigo INT NOT NULL,
  FOREIGN KEY (Conflitos_CodigoNum) REFERENCES Conflitos (CodigoNum),
  FOREIGN KEY (Combatentes_Codigo) REFERENCES Combatentes (Codigo),
  PRIMARY KEY (Conflitos_CodigoNum, Combatentes_Codigo));



-- -----------------------------------------------------
-- Table OrganizacoesMediadoras_participam_Conflitos
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS OrganizacoesMediadoras_participam_Conflitos (
  OrganizacoesMediadoras_CodigoOrganizacao INT NOT NULL,
  Conflitos_CodigoNum INT NOT NULL,
  DataIncorporacao DATE NOT NULL,
  DataSaida DATE NOT NULL,
  PRIMARY KEY (OrganizacoesMediadoras_CodigoOrganizacao, Conflitos_CodigoNum),
  FOREIGN KEY (OrganizacoesMediadoras_CodigoOrganizacao) REFERENCES OrganizacoesMediadoras (Combatentes_Codigo),
  FOREIGN KEY (Conflitos_CodigoNum) REFERENCES Conflitos (CodigoNum));



-- -----------------------------------------------------
-- Table GruposArmados_participam_Conflitos
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS GruposArmados_participam_Conflitos (
  GruposArmados_Combatentes_Codigo INT NOT NULL,
  Conflitos_CodigoNum INT NOT NULL,
  DataIncorporacao DATE NOT NULL,
  DataSaida DATE NOT NULL,
  PRIMARY KEY (GruposArmados_Combatentes_Codigo, Conflitos_CodigoNum),
  FOREIGN KEY (GruposArmados_Combatentes_Codigo) REFERENCES GruposArmados (Combatentes_Codigo),
  FOREIGN KEY (Conflitos_CodigoNum) REFERENCES Conflitos (CodigoNum));



-- -----------------------------------------------------
-- Table Traficantes
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS Traficantes (
  Nome VARCHAR(100) NOT NULL,
  PRIMARY KEY (Nome));



-- -----------------------------------------------------
-- Table TipoArma
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS TipoArma (
  Nome VARCHAR(100) NOT NULL,
  IndCapDest VARCHAR(100) NOT NULL,
  PRIMARY KEY (Nome));



-- -----------------------------------------------------
-- Table Traficantes_fornecem_TipoArma_GruposArmados
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS Traficantes_fornecem_TipoArma_GruposArmados (
  Traficantes_Nome VARCHAR(100) NOT NULL,
  TipoArma_Nome VARCHAR(100) NOT NULL,
  GruposArmados_CodCombatente INT NOT NULL,
  Quantidade INT NOT NULL,
  PRIMARY KEY (Traficantes_Nome, TipoArma_Nome, GruposArmados_CodCombatente),
  FOREIGN KEY (Traficantes_Nome) REFERENCES Traficantes (Nome),
  FOREIGN KEY (TipoArma_Nome) REFERENCES TipoArma (Nome),
  FOREIGN KEY (GruposArmados_CodCombatente) REFERENCES GruposArmados (Combatentes_Codigo));



-- -----------------------------------------------------
-- Table Divisao
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS Divisao (
  CodConsecutivo INT,
  GruposArmados_CodCombatente INT NOT NULL,
  NumBaixas INT NOT NULL,
  Barcos INT NOT NULL,
  Tanques INT NOT NULL,
  Avioes INT NOT NULL,
  Homens INT NOT NULL,
  CONSTRAINT divisao_id PRIMARY KEY (CodConsecutivo, GruposArmados_CodCombatente),
  FOREIGN KEY (GruposArmados_CodCombatente) REFERENCES GruposArmados (Combatentes_Codigo));



-- -----------------------------------------------------
-- Table ChefeMilitar
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS ChefeMilitar (
  Codigo SERIAL NOT NULL,
  Divisao_CodConsecutivo INT NOT NULL,
  Divisao_GruposArmados_CodCombatente INT NOT NULL,
  FaixaHierarquica VARCHAR(100) NOT NULL,
  LiderPoliticoObedece VARCHAR(100) NOT NULL,
  PRIMARY KEY (Codigo),
  FOREIGN KEY (Divisao_CodConsecutivo, Divisao_GruposArmados_CodCombatente)
      REFERENCES Divisao (CodConsecutivo,GruposArmados_CodCombatente));


-- -----------------------------------------------------
-- Table LiderPolitico
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS LiderPolitico (
  Nome VARCHAR(100) NOT NULL,
  GruposArmados_CodCombatente INT NOT NULL,
  DescApoios VARCHAR(200) NOT NULL,
  PRIMARY KEY (Nome, GruposArmados_CodCombatente),
  FOREIGN KEY (GruposArmados_CodCombatente) REFERENCES GruposArmados (Combatentes_Codigo));



-- -----------------------------------------------------
-- Table Organizacao_dialoga_com_LiderPolitico
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS Organizacao_dialoga_com_LiderPolitico (
  Organizacao_CodigoOrg INT NOT NULL,
  LiderPolitico_Nome VARCHAR(100) NOT NULL,
  LiderPolitico_GruposArmados_CodCombatente INT NOT NULL,
  PRIMARY KEY (Organizacao_CodigoOrg, LiderPolitico_Nome),
  FOREIGN KEY (Organizacao_CodigoOrg) REFERENCES Organizacao (CodigoOrg),
  FOREIGN KEY (LiderPolitico_Nome, LiderPolitico_GruposArmados_CodCombatente)
      REFERENCES LiderPolitico (Nome, GruposArmados_CodCombatente));