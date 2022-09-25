import { Container } from "./styles";
import { api } from "../../services/api";


export function TabCard({ data = {}, ...rest }) {



  return (
    <Container>
      <img src={`${api.defaults.baseURL}/files/${data.image}`} alt="" />
      <div>
        <p>{data.amount}x {data.title} <small>R$ {data.totalPrice}</small></p>
        <button {...rest}
        >Excluir</button>
      </div>
    </Container>
  )
}