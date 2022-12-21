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


      const data = await api.get('/gruposArmados/arma')
      setGruposArmadosPorArmas(data.data);
    }

    getTipoArmas().catch((err) => console.log(err));
    getConflitosPorMortos().catch((err) => console.log(err));
    getOrganizacoesPorMediacoes().catch((err) => console.log(err));
    getGruposArmadosPorArmas().catch((err) => console.log(err));
  }, []);
  
  const { title, description, item } = props;
  const pais = 'Brasil';
  const quantidade = 10;

  function createData(
    name: string,
    calories: number,
    fat: number,
    carbs: number,
    protein: number,
  ) {
    return { name, calories, fat, carbs, protein };
  }

  const rows = [
    createData('Frozen yoghurt', 159, 6.0, 24, 4.0),
    createData('Ice cream sandwich', 237, 9.0, 37, 4.3),
    createData('Eclair', 262, 16.0, 24, 6.0),
    createData('Cupcake', 305, 3.7, 67, 4.3),
    createData('Gingerbread', 356, 16.0, 49, 3.9),
  ];

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
                {rows.map((row) => (
                  <TableRow
                    key={row.name}
                    sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                  >
                    <TableCell align="center" component="th" scope="row">
                      {row.name}
                    </TableCell>
                    <TableCell align="center">{row.calories}</TableCell>
                    <TableCell align="center">{row.fat}</TableCell>
                    <TableCell align="center">{row.carbs}</TableCell>
                    <TableCell align="center">{row.protein}</TableCell>
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
                  <TableCell align="center">Países afetados</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {rows.map((row) => (
                  <TableRow
                    key={row.name}
                    sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                  >
                    <TableCell align="center" component="th" scope="row">
                      {row.name}
                    </TableCell>
                    <TableCell align="center">{row.calories}</TableCell>
                    <TableCell align="center">{row.fat}</TableCell>
                    <TableCell align="center">{row.carbs}</TableCell>
                    <TableCell align="center">{row.protein}</TableCell>
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
                  <TableCell align="center">Nome</TableCell>
                  <TableCell align="center">Nº de mediações</TableCell>
                  <TableCell align="center">Tipo da org</TableCell>
                  <TableCell align="center">Nº de pessoas</TableCell>
                  <TableCell align="center">Código da org dependente</TableCell>
                  <TableCell align="center">Tipo da ajuda</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {rows.map((row) => (
                  <TableRow
                    key={row.name}
                    sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                  >
                    <TableCell align="center" component="th" scope="row">
                      {row.name}
                    </TableCell>
                    <TableCell align="center">{row.calories}</TableCell>
                    <TableCell align="center">{row.fat}</TableCell>
                    <TableCell align="center">{row.carbs}</TableCell>
                    <TableCell align="center">{row.protein}</TableCell>
                    <TableCell align="center">{row.protein}</TableCell>
                    <TableCell align="center">{row.protein}</TableCell>
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
                  <TableCell align="center">Nome</TableCell>
                  <TableCell align="center">Nº armas fornecidas</TableCell>
                  <TableCell align="center">Nº total de baixas</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {rows.map((row) => (
                  <TableRow
                    key={row.name}
                    sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                  >
                    <TableCell align="center" component="th" scope="row">
                      {row.name}
                    </TableCell>
                    <TableCell align="center">{row.calories}</TableCell>
                    <TableCell align="center">{row.fat}</TableCell>
                    <TableCell align="center">{row.carbs}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </>   
      }

      {title === "Países" &&
        <>
          <p>País com maior número de conflitos religiosos: {pais}</p>
          <p>Quantidade de conflitos: {quantidade}</p>
        </>
      }
    </Container>
  );
}
