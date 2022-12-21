import React, { useState } from 'react';
import { Overlay, PopupContainer, SideInputsContainer } from './styles';
import TextField from '@mui/material/TextField';
import FormControl from '@mui/material/FormControl';
import { styled } from '@mui/material/styles';
import Botao from '../botao';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import Autocomplete from '@mui/material/Autocomplete';
import InputLabel from '@mui/material/InputLabel';
import OutlinedInput from '@mui/material/OutlinedInput';
import Checkbox from '@mui/material/Checkbox';
import ListItemText from '@mui/material/ListItemText';


export default function Popup(props: any) {

  const divisoes = [
    {label: "Divisão 1"},
    {label: "Divisão 2"},
    {label: "Divisão 3"}
  ]

  const lideresPol = [
    {label: "Lider político 1"},
    {label: "Lider político 2"},
    {label: "Lider político 3"}
  ]

  const gruposArmados = [
    {label: "Grupo armado 1"},
    {label: "Grupo armado 2"},
    {label: "Grupo armado 3"}
  ]

  const chefesMilitares = [
    {label: "Chefe militar 1"},
    {label: "Chefe militar 2"},
    {label: "Chefe militar 3"},
    {label: "Chefe militar 4"}
  ]

  const organizacoes = [
    {label: "Organização 1"},
    {label: "Organização 2"},
    {label: "Organização 3"},
    {label: "Organização 4"}
  ]

  const conflitos = [
    {label: "Conflito 1"},
    {label: "Conflito 2"},
    {label: "Conflito 3"},
    {label: "Conflito 4"}
  ]

  const Selector = styled(Select)({
    width: '300px',
    marginBottom: '40px',
  })

  const [adding, setAdding] = useState('');

  const MenuProps = {
    PaperProps: {
      style: {
        maxHeight: 48 * 4.5 + 8,
        width: 250,
      },
    },
  };
  
  // variáveis da divisão
  const [numBarcos, setNumBarcos] = useState('');
  const [numTanques, setNumTanques] = useState('');
  const [numAvioes, setNumAvioes] = useState('');
  const [numHomens, setNumHomens] = useState('');
  const [numBaixas, setNumBaixas] = useState('');
  const [grupoArmadoDivisao, setGrupoArmadoDivisao] = useState(null);
  const [chefesMilitaresDivisao, setChefesMilitaresDivisao] = useState<string[]>([]);

  function handleNumBarcosChange(event: any) {
    setNumBarcos(event.target.value);
  }
  function handleNumTanquesChange(event: any) {
    setNumTanques(event.target.value);
  } 
  function handleNumAvioesChange(event: any) {
    setNumAvioes(event.target.value);
  } 
  function handleNumHomensChange(event: any) {
    setNumHomens(event.target.value);
  } 
  function handleNumBaixasChange(event: any) {
    setNumBaixas(event.target.value);
  } 
  function handleGrupoArmadoDivisaoChange(event: any, newInputValue: any) {
    setGrupoArmadoDivisao(newInputValue);
  } 
  function handleChefesMilitaresDivisaoChange(event: any) {
    const {
      target: { value },
    } = event;
    if (value.length > 3) return 
    setChefesMilitaresDivisao(
      // On autofill we get a stringified value.
      typeof value === 'string' ? value.split(',') : value,
    );
    console.log(chefesMilitaresDivisao)
  } 

  // variáveis do conflito
  const [nomeLugarCausa, setNomeLugarCausa] = useState('');
  const [numMortos, setNumMortos] = useState('');
  const [numFeridos, setNumFeridos] = useState('');
  const [paisesAfetados, setPaisesAfetados] = useState('');
  const [tipo, setTipo] = useState('Territoriais');
  const [tipoData, setTipoData] = useState('')

  const tipos = [
    {label: "Territoriais"},
    {label: "Religiosos"},
    {label: "Economicos"},
    {label: "Raciais"},
  ]
  
  function handleNomeLugarCausaChange(event: any) {
    setNomeLugarCausa(event.target.value);
    console.log('entrou aqui')
  } 
  function handleNumMortosChange(event: any) {
    setNumMortos(event.target.value);
  } 
  function handleNumFeridosChange(event: any) {
    setNumFeridos(event.target.value);
  } 
  function handlePaisesAfetadosChange(event: any) {
    setPaisesAfetados(event.target.value);
    console.log(paisesAfetados)
  } 
  function handleTipoChange(event: any, newInputValue: any) {
    setTipo(newInputValue.label);
    setTipoData('')
  }
  function handleTipoDataChange(event: any) {
    setTipoData(event.target.value);
  }

  // variáveis do grupo militar
  const [nomeGrupo, setNomeGrupo] = useState('');
  const [numTotalBaixas, setNumTotalBaixas] = useState('');
  const [lideresGrupo, setLideresGrupo] = useState<string[]>([]);
  const [divisoesGrupo, setDivisoesGrupo] = useState<string[]>([]);
  const [conflitosParticipantes, setConflitosParticipantes] = useState('');
  const [gruposArmadosConflito, setGruposArmadosConflito] = useState<string[]>([]);

  function handleGruposArmadosConflitoChange(event: any) {
    const {
      target: { value },
    } = event;
    if (value.length > 2) return 
    setGruposArmadosConflito(
      // On autofill we get a stringified value.
      typeof value === 'string' ? value.split(',') : value,
    );
    console.log(gruposArmadosConflito)
  } 

  function handleNomeGrupoChange(event: any) {
    setNomeGrupo(event.target.value);
  }
  function handleNumTotalBaixasChange(event: any) {
    setNumTotalBaixas(event.target.value);
  }
  function handleLideresGrupoChange(event: any) {
    const {
      target: { value },
    } = event;
    setLideresGrupo(
      // On autofill we get a stringified value.
      typeof value === 'string' ? value.split(',') : value,
    );
    console.log(chefesMilitaresDivisao)
  } 
  function handleDivisoesGrupoChange(event: any) {
    const {
      target: { value },
    } = event;
    setDivisoesGrupo(
      // On autofill we get a stringified value.
      typeof value === 'string' ? value.split(',') : value,
    );
    console.log(chefesMilitaresDivisao)
  }
  function handleConflitosParticipantesChange(event: any) {
    setConflitosParticipantes(event.target.value);
  }

  // variáveis do líder político
  const [nomeLider, setNomeLider] = useState('');
  const [descApoios, setDescApoios] = useState('');
  const [grupoArmadoLidera, setNomeGrupoArmadoLidera] = useState(null);
  const [orgDialog, setOrgDialog] = useState<string[]>([]);


  function handleNomeLiderChange(event: any) {
    setNomeLider(event.target.value);
  }
  function handleDescApoiosChange(event: any) {
    setDescApoios(event.target.value);
  } 
  function handleNomeGrupoArmadoLideraChange(event: any, newInputValue: any) {
    setNomeGrupoArmadoLidera(newInputValue);
    console.log(newInputValue)
  }
  function handleOrgDialogChange(event: any) {
    const {
      target: { value },
    } = event;
    setOrgDialog(
      // On autofill we get a stringified value.
      typeof value === 'string' ? value.split(',') : value,
    );
  } 

  // variáveis do chefe militar
  const [faixaHierarquica, setFaixaHierarquica] = useState('');
  const [chefeMilitarDivisao, setChefeMilitarDivisao] = useState('');
  const [chefeMilitarLider, setChefeMilitarLider] = useState('');

  function handleFaixaHierarquicaChange(event: any) {
    setFaixaHierarquica(event.target.value);
  }
  function handleChefeMilitarDivisaoChange(event: any, newInputValue: any) {
    setChefeMilitarDivisao(newInputValue.label);
  }
  function handleChefeMilitarLiderChange(event: any, newInputValue: any) {
    setChefeMilitarLider(newInputValue.label);
  }

  function handleAddingChange(event: any) {
    setAdding(event.target.value);
  }

  function handleDivisaoSend() {
    const info = {
      numBarcos,
      numTanques,
      numAvioes,
      numHomens,
      numBaixas,
      grupoArmadoDivisao,
      faixaHierarquica,
      chefeMilitarLider
    }
    console.log(info)
  }
  function handleConflitoSend() {
    const info = {
      nomeLugarCausa,
      numMortos,
      numFeridos,
      paisesAfetados,
      gruposArmadosConflito,
      tipo,
      tipoData,
    }
    console.log(info)
  }
  function handleGrupoSend() {
    const info = {
      nomeGrupo,
      numTotalBaixas,
      divisoesGrupo,
      conflitosParticipantes,
      numBarcos,
      numTanques,
      numAvioes,
      numHomens,
      numBaixas,
      grupoArmadoDivisao,
      faixaHierarquica,
      chefeMilitarLider,
      nomeLider,
      descApoios,
      orgDialog,
    }
    console.log(info)
  }
  function handleLiderSend() {
    const info = {
      nomeLider,
      descApoios,
      grupoArmadoLidera,
      orgDialog,
    }
    console.log(info)
  }
  function handleChefeSend() {
    const info = {
      faixaHierarquica,
      chefeMilitarDivisao,
      chefeMilitarLider,
    }
    console.log(info)
  }
  
  return (
    <Overlay>
      <PopupContainer>
        <div className="botao">
          <IconButton onClick={props.onPress}>
            <CloseIcon />
          </IconButton>  
        </div>
        <h3>Você está adicionando um</h3>
        <FormControl>
          <Selector
            value={adding}
            onChange={handleAddingChange}
          >
            <MenuItem value="Divisão" >Divisão</MenuItem>
            <MenuItem value="Conflito bélico">Conflito bélico</MenuItem>
            <MenuItem value="Grupo militar">Grupo militar</MenuItem>
            <MenuItem value="Líder político">Líder político</MenuItem>
            <MenuItem value="Chefe militar">Chefe militar</MenuItem>
          </Selector>
        </FormControl>
        {adding === 'Divisão' && 
          <>
            <SideInputsContainer>
              <TextField sx={{marginRight: '10px', width: '140px'}} key="12" label="Nº de barcos" variant="outlined" onChange={handleNumBarcosChange} value={numBarcos}/>
              <TextField sx={{marginRight: '10px', width: '140px'}} label="Nº de Tanques" variant="outlined" onChange={handleNumTanquesChange} value={numTanques}/>
              <TextField sx={{marginRight: '10px', width: '140px'}} label="Nº de Aviões" variant="outlined" onChange={handleNumAvioesChange} value={numAvioes}/>
              <TextField sx={{width: '140px'}} label="Nº de Homens" variant="outlined" onChange={handleNumHomensChange} value={numHomens}/>
            </SideInputsContainer>
            <TextField sx={{marginBottom: '10px', width: '400px'}} label="Nº de Baixas" variant="outlined" onChange={handleNumBaixasChange} value={numBaixas}/>
            <Autocomplete
              disablePortal
              id="combo-box-demo"
              options={gruposArmados}
              sx={{ marginBottom: '10px', width: '400px' }}
              value={grupoArmadoDivisao}
              onChange={handleGrupoArmadoDivisaoChange}
              renderInput={(params) => <TextField {...params} label="Grupo armado que lidera" />}
            />
            <TextField sx={{marginBottom: '10px', width: '400px'}} key="12" label="Faixa hierárquica do chefe militar" variant="outlined" onChange={handleFaixaHierarquicaChange} value={faixaHierarquica}/>
            <Autocomplete
              disablePortal
              id="combo-box-demo"
              options={lideresPol}
              sx={{ marginBottom: '10px', width: '400px' }}
              value={{label: chefeMilitarLider}}
              onChange={handleChefeMilitarLiderChange}
              renderInput={(params) => <TextField {...params} label="Líder político do chefe militar" />}
            />
            <Botao variant="contained" label="Enviar" onPress={handleDivisaoSend}></Botao>
          </>
        }
        {adding === 'Conflito bélico' && 
          <>
            <TextField sx={{marginBottom: '10px', width: '400px'}} key="12" label="Nome do lugar / causa" variant="outlined" onChange={handleNomeLugarCausaChange} value={nomeLugarCausa}/>
            <TextField sx={{marginBottom: '10px', width: '400px'}} label="Nº de mortos" variant="outlined" onChange={handleNumMortosChange} value={numMortos}/>
            <TextField sx={{marginBottom: '10px', width: '400px'}} label="Nº de feridos" variant="outlined" onChange={handleNumFeridosChange} value={numFeridos}/>
            <TextField sx={{marginBottom: '10px', width: '400px'}} label="Países afetados" variant="outlined" onChange={handlePaisesAfetadosChange} value={paisesAfetados}/>
            <FormControl sx={{marginBottom: '10px', width: 400 }}>
              <InputLabel id="demo-multiple-checkbox-label">Grupos armados participantes</InputLabel>
              <Select
                labelId="demo-multiple-checkbox-label"
                id="demo-multiple-checkbox"
                multiple
                value={gruposArmadosConflito}
                onChange={handleGruposArmadosConflitoChange}
                input={<OutlinedInput label="Grupos armados participantes" />}
                renderValue={(selected) => selected.join(', ')}
                MenuProps={MenuProps}
              >
                {gruposArmados.map((name) => (
                  <MenuItem key={name.label} value={name.label}>
                    <Checkbox checked={gruposArmadosConflito.indexOf(name.label) > -1} />
                    <ListItemText primary={name.label} />
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
            <SideInputsContainer>
              <Autocomplete
                disablePortal
                id="combo-box-demo"
                options={tipos}
                sx={{width: '195px'}}
                value={{label: tipo}}
                onChange={handleTipoChange}
                renderInput={(params) => <TextField {...params} label="Tipo" />}
              />
              
              {tipo === 'Territoriais' &&
                <TextField sx={{marginLeft: '10px',width: '195px'}} label="Regiões afetadas" variant="outlined" onChange={handleTipoDataChange} value={tipoData}/>
              }
              {tipo === 'Religiosos' &&
                <TextField sx={{marginLeft: '10px',width: '195px'}} label="Religiões afetadas" variant="outlined" onChange={handleTipoDataChange} value={tipoData}/>
              }
              {tipo === 'Economicos' &&
                <TextField sx={{marginLeft: '10px',width: '195px'}} label="Matérias primas" variant="outlined" onChange={handleTipoDataChange} value={tipoData}/>
              }
              {tipo === 'Raciais' &&
                <TextField sx={{marginLeft: '10px',width: '195px'}} label="Etnias afetadas" variant="outlined" onChange={handleTipoDataChange} value={tipoData}/>
              }
            </SideInputsContainer>
            <Botao variant="contained" label="Enviar" onPress={handleConflitoSend}></Botao>
          </>
        }
        {adding === 'Grupo militar' && 
          <>
            <TextField sx={{marginBottom: '10px', width: '400px'}} key="12" label="Nome" variant="outlined" onChange={handleNomeGrupoChange} value={nomeGrupo}/>
            <TextField sx={{marginBottom: '10px', width: '400px'}} label="Número total de baixas" variant="outlined" onChange={handleNumTotalBaixasChange} value={numTotalBaixas}/>
            <TextField sx={{marginBottom: '10px', width: '400px'}} label="Conflitos participantes" variant="outlined" onChange={handleConflitosParticipantesChange} value={conflitosParticipantes}/>
            <SideInputsContainer>
              <TextField sx={{marginRight: '10px', width: '140px'}} key="12" label="Nº de barcos" variant="outlined" onChange={handleNumBarcosChange} value={numBarcos}/>
              <TextField sx={{marginRight: '10px', width: '140px'}} label="Nº de Tanques" variant="outlined" onChange={handleNumTanquesChange} value={numTanques}/>
              <TextField sx={{marginRight: '10px', width: '140px'}} label="Nº de Aviões" variant="outlined" onChange={handleNumAvioesChange} value={numAvioes}/>
              <TextField sx={{width: '140px'}} label="Nº de Homens" variant="outlined" onChange={handleNumHomensChange} value={numHomens}/>
            </SideInputsContainer>
            <TextField sx={{marginBottom: '10px', width: '400px'}} label="Nº de Baixas" variant="outlined" onChange={handleNumBaixasChange} value={numBaixas}/>
            <Autocomplete
              disablePortal
              id="combo-box-demo"
              options={gruposArmados}
              sx={{ marginBottom: '10px', width: '400px' }}
              value={grupoArmadoDivisao}
              onChange={handleGrupoArmadoDivisaoChange}
              renderInput={(params) => <TextField {...params} label="Grupo armado que lidera" />}
            />
            <TextField sx={{marginBottom: '10px', width: '400px'}} key="12" label="Faixa hierárquica do chefe militar" variant="outlined" onChange={handleFaixaHierarquicaChange} value={faixaHierarquica}/>
            <Autocomplete
              disablePortal
              id="combo-box-demo"
              options={lideresPol}
              sx={{ marginBottom: '10px', width: '400px' }}
              value={{label: chefeMilitarLider}}
              onChange={handleChefeMilitarLiderChange}
              renderInput={(params) => <TextField {...params} label="Líder político do chefe militar" />}
            />
            <TextField sx={{marginBottom: '10px', width: '400px'}} key="12" label="Nome do lider" variant="outlined" onChange={handleNomeLiderChange} value={nomeLider}/>
            <TextField sx={{marginBottom: '10px', width: '400px'}} label="Descrição dos apoios do lider" variant="outlined" onChange={handleDescApoiosChange} value={descApoios}/>
            <FormControl sx={{marginBottom: '10px', width: 400 }}>
              <InputLabel id="demo-multiple-checkbox-label">Organizações que o lider dialoga</InputLabel>
              <Select
                labelId="demo-multiple-checkbox-label"
                id="demo-multiple-checkbox"
                multiple
                value={orgDialog}
                onChange={handleOrgDialogChange}
                input={<OutlinedInput label="Organizações que o lider dialoga" />}
                renderValue={(selected) => selected.join(', ')}
                MenuProps={MenuProps}
              >
                {organizacoes.map((name) => (
                  <MenuItem key={name.label} value={name.label}>
                    <Checkbox checked={orgDialog.indexOf(name.label) > -1} />
                    <ListItemText primary={name.label} />
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
            <Botao variant="contained" label="Enviar" onPress={handleGrupoSend}></Botao>
          </>
        }
        {adding === 'Líder político' && 
          <>
            <TextField sx={{marginBottom: '10px', width: '400px'}} key="12" label="Nome" variant="outlined" onChange={handleNomeLiderChange} value={nomeLider}/>
            <TextField sx={{marginBottom: '10px', width: '400px'}} label="Descrição dos apoios" variant="outlined" onChange={handleDescApoiosChange} value={descApoios}/>
            <Autocomplete
              disablePortal
              id="combo-box-demo"
              options={gruposArmados}
              sx={{ marginBottom: '10px', width: '400px' }}
              value={grupoArmadoLidera}
              onChange={handleNomeGrupoArmadoLideraChange}
              renderInput={(params) => <TextField {...params} label="Grupo armado que lidera" />}
            />
            <FormControl sx={{marginBottom: '10px', width: 400 }}>
              <InputLabel id="demo-multiple-checkbox-label">Organizações que dialoga</InputLabel>
              <Select
                labelId="demo-multiple-checkbox-label"
                id="demo-multiple-checkbox"
                multiple
                value={orgDialog}
                onChange={handleOrgDialogChange}
                input={<OutlinedInput label="Organizações que dialoga" />}
                renderValue={(selected) => selected.join(', ')}
                MenuProps={MenuProps}
              >
                {organizacoes.map((name) => (
                  <MenuItem key={name.label} value={name.label}>
                    <Checkbox checked={orgDialog.indexOf(name.label) > -1} />
                    <ListItemText primary={name.label} />
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
            <Botao variant="contained" label="Enviar" onPress={handleLiderSend}></Botao>
          </>
        }
        {adding === 'Chefe militar' && 
          <>
            <TextField sx={{marginBottom: '10px', width: '400px'}} key="12" label="Faixa hierárquica" variant="outlined" onChange={handleFaixaHierarquicaChange} value={faixaHierarquica}/>
            <Autocomplete
              disablePortal
              id="combo-box-demo"
              options={divisoes}
              sx={{ marginBottom: '10px', width: '400px' }}
              value={{label: chefeMilitarDivisao}}
              onChange={handleChefeMilitarDivisaoChange}
              renderInput={(params) => <TextField {...params} label="Divisão" />}
            />
            <Autocomplete
              disablePortal
              id="combo-box-demo"
              options={lideresPol}
              sx={{ marginBottom: '10px', width: '400px' }}
              value={{label: chefeMilitarLider}}
              onChange={handleChefeMilitarLiderChange}
              renderInput={(params) => <TextField {...params} label="Líder político" />}
            />
            <Botao variant="contained" label="Enviar" onPress={handleChefeSend}></Botao>
          </>
        }
      </PopupContainer>
    </Overlay>
  )
}
