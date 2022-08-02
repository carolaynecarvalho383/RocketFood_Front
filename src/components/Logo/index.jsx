import { Container } from "./styles";
import{FiHexagon} from "react-icons/fi"
export function Logo ({title}){

  return(
    <Container>
      <FiHexagon className="icon" 
      color="#065E7C" 
      fill="#065E7C" 
      size={55}/>
      <h1>{title}</h1>
    </Container>
  )
}