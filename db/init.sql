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
-- Table Econômicos
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
  CodConsecutivo SERIAL NOT NULL UNIQUE,
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
