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

const labelsOne = ["Territoriais", "Religiosos", "Econômicos", "Raciais"];
const labelsTwo = ["1", "2", "3", "4", "5", "6", "7"];

export const typeData = {
  labels: labelsOne,
  datasets: [
    {
      label: "Dataset 1",
      data: labelsOne.map(() => faker.datatype.number({ min: 0, max: 100 })),
      backgroundColor: "#3AB137",
    },
  ],
};

export const testData = {
  labels: labelsTwo,
  datasets: [
    {
      label: "Dataset 2",
      data: labelsTwo.map(() => faker.datatype.number({ min: 0, max: 100 })),
      backgroundColor: "#3AB137",
    },
  ],
};

export default function Grafico() {
  return (
    <PageContainer>
      <BarContainer>
        <Bar options={options} data={typeData} />
      </BarContainer>
      <BarContainer>
        <Bar options={options} data={typeData} />
      </BarContainer>
    </PageContainer>
  );
}
