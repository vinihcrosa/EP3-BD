import React from "react";
import Tabela from "../../components/tabela";
import Grafico from "../../components/grafico";

import { Container, Title, Description } from "./styles";

export default function Content(props: any) {
  const { title, description, item } = props;

  return (
    <Container>
      <Title>{title}</Title>
      <Description>{description}</Description>
      {title === "Visão Geral" ? <Grafico></Grafico> : <Tabela></Tabela>}
    </Container>
  );
}
