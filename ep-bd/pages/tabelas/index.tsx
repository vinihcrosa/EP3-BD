import { useRouter } from "next/router";
import Grafico from "../../components/grafico";
import Sidebar from "../../components/sidebar";
import Tabela from "../../components/tabela";

import { Container } from "../styles";

export default function GeraGraficos() {
  const router = useRouter();

  const obj = router.query.obj;

  const data = [
    {title: 'teste', data: 10},
    {title: 'teste2', data: 20},
    {title: 'teste3', data: 30},
    {title: 'teste4', data: 40},
    {title: 'teste5', data: 50}
  ]

  return (
    <>
      <Container>
        <Sidebar obj={obj}/>
        <Tabela title='Maiores Conflitos' columnTitle="Traficantes" columnData="Numero de Mortos" data={data}></Tabela>
        <Tabela title='Maiores Conflitos' columnTitle="Traficantes" columnData="Numero de Mortos" data={data}></Tabela>
        <Tabela title='Maiores Conflitos' columnTitle="Traficantes" columnData="Numero de Mortos" data={data}></Tabela>
        <></>
      </Container>
    </>
  );
}