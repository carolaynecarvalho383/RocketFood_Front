import { Container, TableContainer } from "./styles";


export function Table() {

  return (
    <Container>
      <TableContainer>
        <thead>
          <tr>
            <th>Status</th>
            <th>Código</th>
            <th>Detalhamentos</th>
            <th>Data e Hora</th>
          </tr>
        </thead>

        <tbody>
          <tr>
            <td>Pendente</td>
            <td>00000004</td>
            <td>1 x Salada Radish, 1 x Torradas de Parma, 1 x Chá de Canela, 1 x Suco de Maracujá</td>
            <td>20/05 às 18h00</td>
          </tr>
          <tr>
            <td>Preparando</td>
            <td>00000004</td>
            <td>1 x Salada Radish, 1 x Torradas de Parma, 1 x Chá de Canela, 1 x Suco de Maracujá</td>
            <td>20/05 às 18h00</td>
          </tr>
          <tr>
            <td>Entregue</td>
            <td>00000004</td>
            <td>1 x Salada Radish, 1 x Torradas de Parma, 1 x Chá de Canela, 1 x Suco de Maracujá</td>
            <td>20/05 às 18h00</td>
          </tr>
        </tbody>
      </TableContainer>
    </Container>
  )
}