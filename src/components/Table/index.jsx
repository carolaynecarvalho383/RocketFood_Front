import { Container, TableContainer } from "./styles";
import { BsFillHexagonFill} from "react-icons/bs"

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
              <td>{request.status == 0 ?
               <span><BsFillHexagonFill color="#AB222E"  /> Pendente </span>
               : request.status == 1 ?  <span><BsFillHexagonFill color="#FBA94C"/> Preparando </span> 
               :  <span><BsFillHexagonFill color="#04D361" /> Entregue </span>}
               </td>

              <td>0000{request.id}</td>
              
                <td>
                  {
                    request.requestsItem.map(item =>(
                     <span>{item.request_amount}X {item.title}    </span>
                    )

                    )
                  }
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