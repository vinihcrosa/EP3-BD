import React, {useEffect} from "react";
import Tabela from "../../components/tabela";
import Grafico from "../../components/grafico";
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

import {  } from './styles';

import { Container, Title, Description } from "./styles";
import { stringify } from "querystring";
import api from "../../api";



export default function Content(props: any) {
  const [tipoArmas, setTipoArmas] = React.useState<any>([]);
  const [conflitosPorMortos, setConflitosPorMortos] = React.useState<any>([]);
  const [organizacoesPorMediacoes, setOrganizacoesPorMediacoes] = React.useState<any>([]);
  const [gruposArmadosPorArmas, setGruposArmadosPorArmas] = React.useState<any>([]);

  const [paisMaiorConflitoReligioso, setPaisMaiorConflitoReligioso] = React.useState<any>([]);

  useEffect(() => {
 
    const getTipoArmas = async () => {
    /* Tipo de dado
      {
        traficante,
        tipoarma,
        grupoarmado,
        quantidade,
        capacidade
      }
    */
      const data = await api.get('/tipoArmas');
      setTipoArmas(data.data);
      console.log(data);

    }
    
    const getConflitosPorMortos = async () => {
      /*
        Tipo de dado
        {
          codigonum,
          nummortos,
          nomelugarcausa,
          numferidos,
          tipoconflitos
        }
      */
      const data = await api.get('/conflitos/mortos');
      setConflitosPorMortos(data.data);
      console.log(data);
    }

    const getOrganizacoesPorMediacoes = async () => {
      /*
        Tipo de dado
        {
          organizacao,
          mediacoes,
          numpessoas
        }

        Nesse caso tirar Nome, Codigo da Org dependente e tipo de ajuda
      */
      const data = await api.get('/organizacoes/mediacoes');
      setOrganizacoesPorMediacoes(data.data);
      console.log(data);
    }

    const getGruposArmadosPorArmas = async () => {
      /*
        Tipo de dado
        {
          gruposarmados,
          quantidade,
          numtotalbaixas
        }
      */


      const data = await api.get('/gruposArmados/armas')
      setGruposArmadosPorArmas(data.data);
    }

    const getPaisMaiorConflitoReligioso = async () => {
      const data = await api.get('/conflito/religioso');
      setPaisMaiorConflitoReligioso(data.data);
    }

    getTipoArmas().catch((err) => console.log(err));
    getConflitosPorMortos().catch((err) => console.log(err));
    getOrganizacoesPorMediacoes().catch((err) => console.log(err));
    getGruposArmadosPorArmas().catch((err) => console.log(err));
    getPaisMaiorConflitoReligioso().catch((err) => console.log(err));

    console.log(conflitosPorMortos)
  }, []);
  
  const { title, description, item } = props;
  const pais = 'Brasil';
  const quantidade = 10;

  const rowsTabela1: any = []; 
  for (let i: number = 0; i < tipoArmas.lenght; i++) {
    rowsTabela1.push(tipoArmas[i]);
  }

  const rowsTabela2: any = [];
  for (let i: number = 0; i < conflitosPorMortos.lenght; i++) {
    rowsTabela2.push(conflitosPorMortos[i]);
  }

  const rowsTabela3: any = [];
  for (let i: number = 0; i < organizacoesPorMediacoes.lenght; i++) {
    rowsTabela3.push(organizacoesPorMediacoes[i]);
  }

  const rowsTabela4: any = [];
  for (let i: number = 0; i < gruposArmadosPorArmas.lenght; i++) {
    rowsTabela4.push(gruposArmadosPorArmas[i]);
  }

  return (
    <Container>
      <Title>{title}</Title>
      {title === "Visão Geral" && <Grafico></Grafico>}

      {title === "Tabelas" &&
        <>
          <p>Traficantes e grupos armados para os quais os traficantes fornecem armas “Barret M82” ou “M200 intervention”</p>
          <TableContainer sx={{ minHeight: 450}} component={Paper}>
            <Table sx={{ minWidth: 650 }} aria-label="simple table">
              <TableHead>
                <TableRow>
                  <TableCell align="center">Nome do traficante</TableCell>
                  <TableCell align="center">Nome do grupo armado</TableCell>
                  <TableCell align="center">Arma fornecida</TableCell>
                  <TableCell align="center">Cap. Destrutiva</TableCell>
                  <TableCell align="center">Quantidade fornecida</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {tipoArmas.map((row:any) => (
                  <TableRow
                    key={row.name}
                    sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                  >
                    <TableCell align="center" component="th" scope="row">
                      {row.name}
                    </TableCell>
                    <TableCell align="center">{row.traficante}</TableCell>
                    <TableCell align="center">{row.grupoarmado}</TableCell>
                    <TableCell align="center">{row.tipoarma}</TableCell>
                    <TableCell align="center">{row.capacidade}</TableCell>
                    <TableCell align="center">{row.quantidade}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
          <p>Cinco maiores conflitos em nº de mortos</p>
          <TableContainer sx={{ minHeight: 450}} component={Paper}>
            <Table sx={{ minWidth: 650 }} aria-label="simple table">
              <TableHead>
                <TableRow>
                  <TableCell align="center">Código</TableCell>
                  <TableCell align="center">Nome do lugar / causa</TableCell>
                  <TableCell align="center">Nº de mortos</TableCell>
                  <TableCell align="center">Nº de feridos</TableCell>
                  <TableCell align="center">Tipo de conflito</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {conflitosPorMortos.map((row:any) => (
                  <TableRow
                    key={row.name}
                    sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                  >
                    <TableCell align="center">{row.codigonum}</TableCell>
                    <TableCell align="center">{row.nomelugarcausa}</TableCell>
                    <TableCell align="center">{row.nummortos}</TableCell>
                    <TableCell align="center">{row.numferidos}</TableCell>
                    <TableCell align="center">{row.tipoconflito}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
          <p>Cinco maiores organizações em nº de mediações</p>
          <TableContainer sx={{ minHeight: 450}}  component={Paper}>
            <Table sx={{ minWidth: 650 }} aria-label="simple table">
              <TableHead>
                <TableRow>
                  <TableCell align="center">Código</TableCell>
                  <TableCell align="center">Nº de mediações</TableCell>
                  <TableCell align="center">Nº de pessoas</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {organizacoesPorMediacoes.map((row:any) => (
                  <TableRow
                    key={row.name}
                    sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                  >
                    <TableCell align="center">{row.organizacao}</TableCell>
                    <TableCell align="center">{row.mediacoes}</TableCell>
                    <TableCell align="center">{row.numpessoas}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
          <p>Cinco maiores grupos armados com maior nº de armas fornecidos</p>
          <TableContainer sx={{ minHeight: 450}}  component={Paper}>
            <Table sx={{ minWidth: 650 }} aria-label="simple table">
              <TableHead>
                <TableRow>
                  <TableCell align="center">Código</TableCell>
                  <TableCell align="center">Nº armas fornecidas</TableCell>
                  <TableCell align="center">Nº total de baixas</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {gruposArmadosPorArmas.map((row:any) => (
                  <TableRow
                    key={row.name}
                    sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                  >
                    <TableCell align="center">{row.gruposarmados}</TableCell>
                    <TableCell align="center">{row.quantidade}</TableCell>
                    <TableCell align="center">{row.numtotalbaixas}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </>   
      }

      {title === "Países" &&
        <>
          <p>País com maior número de conflitos religiosos: {paisMaiorConflitoReligioso.paiafetado}</p>
          <p>Quantidade de conflitos: {paisMaiorConflitoReligioso.quantidade}</p>
        </>
      }
    </Container>
  );
}
