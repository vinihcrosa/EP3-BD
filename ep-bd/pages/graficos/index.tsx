import { Container } from "../styles";
import Grafico from "../../components/grafico";
import Sidebar from "../../components/sidebar";

export default function GeraGraficos(){
  return (
    <Container>
      <Sidebar/>
      <Grafico></Grafico>
    </Container>
  )
}