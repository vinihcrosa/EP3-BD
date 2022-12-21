import React, { useEffect } from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Bar } from "react-chartjs-2";
import { faker } from "@faker-js/faker";
import { BarContainer, PageContainer } from "./styles";

import api from "../../api";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

export const options = {
  maintainAspectRatio: false,
  plugins: {
    title: {
      display: false,
      text: "",
    },
  },
};

export default function Grafico() {
  const [conflitos, setConflitos] = React.useState<any>([]);

  useEffect(() => {
    const getConflitos = async () => {
      const data = await api.get('/conflitos');
      setConflitos(data.data);
      console.log(data);
    }
    
    getConflitos().catch((err) => console.log(err));

  }, []);

  const typeData = {
    labels: conflitos.map((conflito: any) => conflito.tipoconflito),
    datasets: [
      {
        label: "Quantidade de Conflitos por Tipo",
        data: conflitos.map((conflito: any) => conflito.count),
        backgroundColor: "#3AB137",
      },
    ],
  };
  return (
    <PageContainer>
      <BarContainer>
        <Bar options={options} data={typeData} />
      </BarContainer>
    </PageContainer>
  );
}
