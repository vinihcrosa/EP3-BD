import React, {} from 'react';

import { Table, TableBody, TableCell, TableContainer, TableHeader, TableHeaderCell, TableRow } from './styles';


interface ITabelaProps {
  title: string,
  columnTitle: string,
  columnData: string,
  data: {
    title: string,
    data: string | number,
  }[]
}

export default function Tabela(props: ITabelaProps) {
  return (
    <TableContainer>
      <Table>
        <TableHeader>
          <tr>
            <TableHeaderCell>{props.columnTitle}</TableHeaderCell>
            <TableHeaderCell>{props.columnData}</TableHeaderCell>
          </tr>
        </TableHeader>
        <TableBody>
          {props.data.map((item, index) => (
            <TableRow key={item.data}>
              <TableCell>{item.title}</TableCell>
              <TableCell>{item.data}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  )
}
