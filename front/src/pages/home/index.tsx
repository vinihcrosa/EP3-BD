import React, { useState } from "react";
import Sidebar from "../../components/sidebar";
import Content from "../content";

import { Container } from "./styles";

export default function Home() {
  const [dinamicTitle, setDinamicTitle] = useState("Visão Geral");
  const [dinamicDesc, setDinamicDesc] = useState("");

  function formatDescription(type: string) {
    setDinamicTitle(type);

    type = type
      .toLowerCase()
      .replace(" ", "")
      .normalize("NFD")
      .replace(/\p{Diacritic}/gu, "");

    const descriptions: any = {
      visaogeral: "",
      traficantes:
        "Mostrando traficantes que fornecem Barret M82 ou M200 intervation",
      paises:
        "País com maior número de conflitos religios: Brasil. Número de conflitos: 500",
    };

    setDinamicDesc(descriptions[type]);
  }

  const handleChildClicked = (event: any) => {
    formatDescription(event);
  };

  return (
    <Container>
      <Sidebar onClick={handleChildClicked}></Sidebar>
      <Content
        title={dinamicTitle}
        description={dinamicDesc}
        item={dinamicDesc}
      ></Content>
    </Container>
  );
}
