import { Container } from "./styles";
import{FiHexagon} from "react-icons/fi"
export function Logo ({icon =  <FiHexagon className="icon" 
/>, title}){

  return(
    <Container>
      {icon}
      
    
      <h1>{title}</h1>
    </Container>
  )
}