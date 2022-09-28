import { Container, TableContainer } from "./styles";


export function Table({data}) {

  console.log(data);
  
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
          { data &&
            data.map(request =>(
              <tr>
              <td>{request.status}</td>
              <td>0000{request.id}</td>
              
                <td>

                </td>
              
              <td>{request.created_at}</td>
            </tr>
            ))
          }
         
        
        </tbody>
      </TableContainer>
    </Container>
  )
}